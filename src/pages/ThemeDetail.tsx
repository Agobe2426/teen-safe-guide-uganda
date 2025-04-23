
import { useEffect, useState } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import QuizCard from "@/components/QuizCard";
import { ThemeType } from "@/components/ThemeCard";
import { contentData, themeData, quizData, ContentItem, Quiz } from "@/data/content";
import { AgeGroup } from "@/components/AgeSelector";

const ThemeDetail = () => {
  const { themeId } = useParams<{ themeId: string }>();
  const [searchParams] = useSearchParams();
  const ageGroup = searchParams.get("age") as AgeGroup;
  
  const [theme, setTheme] = useState(themeData.find(t => t.id === themeId));
  const [content, setContent] = useState<ContentItem[]>([]);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  
  useEffect(() => {
    if (themeId && ageGroup) {
      // Filter content for this theme and age group
      const filteredContent = contentData.filter(
        c => c.themeId === themeId && c.ageGroups.includes(ageGroup)
      );
      setContent(filteredContent);
      
      // Filter quizzes for this theme and age group
      const filteredQuizzes = quizData.filter(
        q => q.themeId === themeId as ThemeType && q.ageGroups.includes(ageGroup)
      );
      setQuizzes(filteredQuizzes);
    }
  }, [themeId, ageGroup]);

  if (!theme) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <div className="teen-shield-container text-center">
          <h2 className="text-xl font-bold">Theme not found</h2>
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
          <div className="mb-4">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
            
            <h1 className="text-2xl font-bold">{theme.title}</h1>
            <p className="text-muted-foreground">Age group: {ageGroup} years</p>
          </div>
          
          {content.length === 0 ? (
            <div className="text-center py-8">
              <p>No content available for this theme and age group yet.</p>
              <Link to="/">
                <Button className="mt-4">Return to Home</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {content.map((item) => (
                <Card key={item.id} className="teen-shield-card">
                  <div className="space-y-3">
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-muted-foreground">{item.description}</p>
                    <div className="prose prose-sm max-w-none mt-4"
                         dangerouslySetInnerHTML={{ __html: item.content }} />
                  </div>
                </Card>
              ))}
              
              {quizzes.length > 0 && (
                <div className="space-y-4 mt-8">
                  <h2 className="text-xl font-bold">Test Your Knowledge</h2>
                  {quizzes.map((quiz) => (
                    <QuizCard 
                      key={quiz.id} 
                      quiz={{
                        id: quiz.id,
                        title: quiz.title,
                        description: quiz.description,
                        questionCount: quiz.questions.length,
                        themeId: themeId || "",
                        ageGroup
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ThemeDetail;
