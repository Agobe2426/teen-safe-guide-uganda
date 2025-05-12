
import { useState, useEffect } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import { quizData, Question } from "@/data/content";
import { ThemeType } from "@/components/ThemeCard";
import { trackQuizCompletion, getPersonalizedRecommendations } from "@/utils/aiHelper";
import { AgeGroup } from "@/components/AgeSelector";

const Quiz = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const [searchParams] = useSearchParams();
  const themeId = searchParams.get("theme") as ThemeType;
  const ageGroup = searchParams.get("age") as AgeGroup;
  
  const [quiz, setQuiz] = useState(quizData.find(q => q.id === quizId));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  
  const currentQuestion: Question | undefined = quiz?.questions[currentQuestionIndex];
  const progress = quiz ? ((currentQuestionIndex + 1) / quiz.questions.length) * 100 : 0;
  
  // Get personalized recommendations when quiz is completed
  useEffect(() => {
    if (quizCompleted && ageGroup) {
      const recs = getPersonalizedRecommendations(ageGroup, themeId);
      setRecommendations(recs);
    }
  }, [quizCompleted, ageGroup, themeId]);
  
  const handleAnswerSelect = (answerIndex: number) => {
    if (!showFeedback) {
      setSelectedAnswer(answerIndex);
    }
  };
  
  const checkAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowFeedback(true);
    if (selectedAnswer === currentQuestion?.correctAnswer) {
      setScore(score + 1);
    }
  };
  
  const goToNextQuestion = () => {
    if (!quiz) return;
    
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizCompleted(true);
      
      // Track quiz completion for personalized learning
      if (quizId) {
        const finalScore = (score + (selectedAnswer === currentQuestion?.correctAnswer ? 1 : 0)) / quiz.questions.length;
        trackQuizCompletion(quizId, finalScore);
      }
    }
  };
  
  if (!quiz || !currentQuestion) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <div className="teen-shield-container text-center">
          <h2 className="text-xl font-bold">Quiz not found</h2>
          <Link to="/">
            <Button className="mt-4">Return to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="teen-shield-container">
          <div className="mb-6">
            <Link 
              to={`/theme/${themeId}?age=${ageGroup}`} 
              className="inline-flex items-center text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Theme
            </Link>
            
            <h1 className="text-2xl font-bold mt-2">{quiz.title}</h1>
          </div>
          
          {!quizCompleted ? (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Question {currentQuestionIndex + 1} of {quiz.questions.length}</span>
                  <span>Score: {score}</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              
              <Card className="teen-shield-card">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">{currentQuestion.question}</h2>
                  
                  <RadioGroup value={selectedAnswer?.toString()} className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                      <div 
                        key={index}
                        className={`
                          flex items-center space-x-2 p-3 border rounded-md cursor-pointer
                          ${selectedAnswer === index ? 'border-shield-purple bg-shield-purple-light' : 'border-gray-200'}
                          ${showFeedback && index === currentQuestion.correctAnswer ? 'border-green-500 bg-green-50' : ''}
                          ${showFeedback && selectedAnswer === index && index !== currentQuestion.correctAnswer ? 'border-red-500 bg-red-50' : ''}
                        `}
                        onClick={() => handleAnswerSelect(index)}
                      >
                        <RadioGroupItem 
                          value={index.toString()} 
                          id={`option-${index}`}
                          checked={selectedAnswer === index}
                          disabled={showFeedback}
                        />
                        <Label 
                          htmlFor={`option-${index}`}
                          className="flex-grow cursor-pointer"
                        >
                          {option}
                        </Label>
                        {showFeedback && index === currentQuestion.correctAnswer && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                        {showFeedback && selectedAnswer === index && index !== currentQuestion.correctAnswer && (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                    ))}
                  </RadioGroup>
                  
                  {showFeedback && (
                    <div className={`p-4 rounded-md ${selectedAnswer === currentQuestion.correctAnswer ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                      <p className="font-medium mb-1">
                        {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Not quite right'}
                      </p>
                      <p className="text-sm">{currentQuestion.explanation}</p>
                    </div>
                  )}
                  
                  <div className="flex justify-end">
                    {!showFeedback ? (
                      <Button 
                        onClick={checkAnswer} 
                        disabled={selectedAnswer === null}
                        className="teen-shield-btn"
                      >
                        Check Answer
                      </Button>
                    ) : (
                      <Button 
                        onClick={goToNextQuestion} 
                        className="teen-shield-btn"
                      >
                        {currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ) : (
            <Card className="teen-shield-card">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-shield-purple-light rounded-full mx-auto flex items-center justify-center">
                  {score / quiz.questions.length >= 0.7 ? (
                    <CheckCircle className="h-8 w-8 text-shield-purple" />
                  ) : (
                    <CheckCircle className="h-8 w-8 text-shield-blue" />
                  )}
                </div>
                
                <h2 className="text-xl font-bold text-center">Quiz Completed!</h2>
                
                <div className="text-center">
                  <p className="text-lg font-medium">Your Score:</p>
                  <p className="text-3xl font-bold text-shield-purple">
                    {score} / {quiz.questions.length}
                  </p>
                  <p className="text-muted-foreground mt-1">
                    {score / quiz.questions.length >= 0.7 
                      ? 'Great job! You\'re learning well.'
                      : 'Keep learning! You\'ll do better next time.'}
                  </p>
                </div>
                
                {/* Recommendations Section */}
                {recommendations.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h3 className="font-semibold mb-3">You might also like:</h3>
                    <div className="space-y-2">
                      {recommendations.map((rec, index) => {
                        const isTheme = rec.startsWith("theme-");
                        const id = rec.split("-").slice(1).join("-");
                        return (
                          <Link 
                            key={index}
                            to={isTheme ? `/theme/${id}?age=${ageGroup}` : `/quiz/${id}?theme=${themeId}&age=${ageGroup}`}
                            className="block p-3 bg-shield-purple-light/50 rounded-md hover:bg-shield-purple-light transition-colors"
                          >
                            <div className="flex justify-between items-center">
                              <span>{isTheme ? `Explore: ${id}` : `Try Quiz: ${id}`}</span>
                              <ArrowLeft className="h-4 w-4 rotate-180" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                <div className="pt-4 flex flex-col gap-3">
                  <Link to={`/theme/${themeId}?age=${ageGroup}`}>
                    <Button className="teen-shield-btn w-full">
                      Back to Theme
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button variant="outline" className="w-full">
                      Home
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Quiz;
