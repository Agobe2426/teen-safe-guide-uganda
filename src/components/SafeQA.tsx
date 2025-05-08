
import React, { useState } from "react";
import { AgeGroup } from "@/components/AgeSelector";
import { QA } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { qaData } from "@/data/content";
import { useToast } from "@/hooks/use-toast";

interface SafeQAProps {
  questions?: QA[];
  ageGroup?: AgeGroup;
  onAskQuestion: (question: string) => void;
}

const SafeQA: React.FC<SafeQAProps> = ({ ageGroup, onAskQuestion }) => {
  const [newQuestion, setNewQuestion] = useState("");
  const { toast } = useToast();
  
  // Filter questions by age group if provided
  const filteredQuestions = ageGroup
    ? qaData.filter(qa => qa.ageGroups.includes(ageGroup) && qa.isCommonQuestion)
    : qaData.filter(qa => qa.isCommonQuestion);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      onAskQuestion(newQuestion);
      setNewQuestion("");
      
      toast({
        title: "Question Submitted",
        description: "Thank you for your question! Our educators will review it soon.",
      });
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-lg font-medium">Ask a Question</h2>
        <div className="flex gap-2">
          <Input
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="flex-grow"
          />
          <Button type="submit" disabled={!newQuestion.trim()}>
            Submit
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Your question will be anonymous and answered by our trained educators.
        </p>
      </form>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Common Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {filteredQuestions.map((qa) => (
            <AccordionItem key={qa.id} value={qa.id}>
              <AccordionTrigger className="text-left">
                {qa.question}
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-2 bg-gray-50 rounded-md">
                  {qa.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default SafeQA;
