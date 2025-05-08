
import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AgeGroup } from "@/components/AgeSelector";
import { QA } from "@/pages/QandA";

export interface SafeQAProps {
  onAskQuestion: (question: string) => void;
  ageGroup?: AgeGroup;
  questions: QA[];
}

const SafeQA = ({ onAskQuestion, ageGroup, questions }: SafeQAProps) => {
  const [newQuestion, setNewQuestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      onAskQuestion(newQuestion.trim());
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
        <Button type="submit">
          <SendHorizontal className="h-4 w-4" />
        </Button>
      </form>

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
