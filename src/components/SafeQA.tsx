
import { useState } from "react";
import { SendHorizontal, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AgeGroup } from "@/components/AgeSelector";
import { QA } from "@/pages/QandA";
import { getAIResponse, containsSensitiveContent } from "@/utils/aiHelper";
import { useToast } from "@/hooks/use-toast";

export interface SafeQAProps {
  onAskQuestion: (question: string) => void;
  ageGroup?: AgeGroup;
  questions: QA[];
}

interface AIResponse {
  question: string;
  answer: string;
  timestamp: number;
}

const SafeQA = ({ onAskQuestion, ageGroup, questions }: SafeQAProps) => {
  const [newQuestion, setNewQuestion] = useState("");
  const [aiResponses, setAiResponses] = useState<AIResponse[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      const question = newQuestion.trim();
      
      // Save the question to parent component for moderation
      onAskQuestion(question);
      
      // Process with AI if age group is available
      if (ageGroup) {
        // Check for sensitive content for younger children
        if (ageGroup && containsSensitiveContent(question, ageGroup)) {
          toast({
            title: "Parent Guidance Needed",
            description: "This question would be best answered by a parent or guardian.",
            duration: 5000
          });
        }
        
        // Simulate AI thinking
        setIsThinking(true);
        setTimeout(() => {
          // Get AI response
          const answer = getAIResponse(question, ageGroup);
          
          // Add to AI responses
          setAiResponses(prev => [{
            question,
            answer,
            timestamp: Date.now()
          }, ...prev]);
          
          setIsThinking(false);
        }, 1000);
      }
      
      setNewQuestion("");
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          placeholder="Ask a question about growing up safely..."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit" disabled={isThinking || !newQuestion.trim()}>
          <SendHorizontal className="h-4 w-4" />
        </Button>
      </form>

      {isThinking && (
        <div className="p-4 bg-muted rounded-md flex items-center gap-2 animate-pulse">
          <Bot className="h-5 w-5 text-shield-purple" />
          <span>Thinking about your question...</span>
        </div>
      )}
      
      {/* AI Response Section */}
      {aiResponses.length > 0 && (
        <div className="space-y-4 mt-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Bot className="h-5 w-5 text-shield-purple" />
            Teen Shield Assistant
          </h3>
          <div className="space-y-3">
            {aiResponses.map((response, index) => (
              <div key={index} className="bg-shield-purple-light p-4 rounded-lg border border-shield-purple/20">
                <p className="text-sm font-medium mb-2">Your question: {response.question}</p>
                <p className="text-shield-purple-dark">{response.answer}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  {new Date(response.timestamp).toLocaleTimeString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {questions.map((qa) => (
            <AccordionItem key={qa.id} value={qa.id}>
              <AccordionTrigger className="text-left">
                {qa.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{qa.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default SafeQA;
