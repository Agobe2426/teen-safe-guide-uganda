
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Search, Send, MessageSquareText, Lock } from "lucide-react";

interface QA {
  id: string;
  question: string;
  answer: string;
  isCommonQuestion: boolean;
}

interface SafeQAProps {
  commonQuestions: QA[];
  ageGroup?: string;
}

const SafeQA: React.FC<SafeQAProps> = ({ commonQuestions, ageGroup }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [submittedQuestion, setSubmittedQuestion] = useState(false);

  const filteredQuestions = searchQuery
    ? commonQuestions.filter((q) =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : commonQuestions.filter((q) => q.isCommonQuestion);

  const handleSubmitQuestion = () => {
    if (newQuestion.trim()) {
      console.log("Question submitted:", newQuestion, "Age group:", ageGroup);
      setSubmittedQuestion(true);
      setNewQuestion("");
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmittedQuestion(false);
      }, 3000);
    }
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search questions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="space-y-4 mb-8">
        <h3 className="font-medium text-lg flex items-center gap-2">
          <MessageSquareText className="h-5 w-5" />
          Common Questions
        </h3>
        
        {filteredQuestions.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No questions found. Try a different search term or ask your own question below.
          </p>
        ) : (
          filteredQuestions.map((qa) => (
            <Card key={qa.id} className="teen-shield-card">
              <h4 className="font-bold text-shield-purple">{qa.question}</h4>
              <p className="text-sm mt-2">{qa.answer}</p>
            </Card>
          ))
        )}
      </div>

      <div className="space-y-3">
        <h3 className="font-medium text-lg flex items-center gap-2">
          <Lock className="h-5 w-5" />
          Ask Anonymously
        </h3>
        
        <p className="text-sm text-muted-foreground">
          Your question will be answered privately and your identity will remain anonymous.
        </p>
        
        <div className="space-y-3">
          <Textarea
            placeholder="Type your question here..."
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            className="min-h-[100px]"
          />
          
          <div className="flex justify-end">
            <Button
              onClick={handleSubmitQuestion}
              className="bg-shield-blue hover:bg-shield-blue/90 flex gap-2"
              disabled={!newQuestion.trim() || submittedQuestion}
            >
              {submittedQuestion ? "Submitted" : "Submit Question"}
              <Send className="h-4 w-4" />
            </Button>
          </div>
          
          {submittedQuestion && (
            <p className="text-sm text-green-600 animate-pulse-slow">
              Your question has been submitted! You'll receive an answer soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SafeQA;
