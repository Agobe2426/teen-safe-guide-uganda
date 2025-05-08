
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SafeQA from "@/components/SafeQA";
import { AgeGroup } from "@/components/AgeSelector";

// Define a QA type if it doesn't exist elsewhere
export interface QA {
  id: string;
  question: string;
  answer: string;
  ageGroups: AgeGroup[];
}

// Sample QA data until we have real data
const sampleQaData: QA[] = [
  {
    id: "q1",
    question: "What are the changes that happen during puberty?",
    answer: "During puberty, bodies change in many ways. Boys may experience voice changes, growth in height, and body hair development. Girls may experience breast development, menstruation, and changes in body shape. Both may experience increased emotions, attraction to others, and skin changes like acne.",
    ageGroups: ["10-12", "13-16", "17-18"]
  },
  {
    id: "q2",
    question: "How do I know my body is developing normally?",
    answer: "Everyone develops at their own pace. Some people start puberty earlier, and some later. If you have concerns about your development, it's always good to talk to a parent, trusted adult, or healthcare provider.",
    ageGroups: ["10-12", "13-16", "17-18"]
  },
  {
    id: "q3",
    question: "Why do I need to wash my hands?",
    answer: "Washing hands helps remove germs that can make you sick. It's important to wash hands before eating, after using the toilet, and after touching animals.",
    ageGroups: ["3-5", "6-9"]
  }
];

const QandA = () => {
  const [searchParams] = useSearchParams();
  const ageGroup = searchParams.get("age") as AgeGroup | null;
  const [userQuestions, setUserQuestions] = useState<string[]>([]);

  // Filter questions by age group if selected
  const filteredQuestions = ageGroup
    ? sampleQaData.filter(qa => qa.ageGroups.includes(ageGroup))
    : sampleQaData;

  const handleNewQuestion = (question: string) => {
    setUserQuestions([...userQuestions, question]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="teen-shield-container">
          <div className="mb-6">
            <Link to="/home" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
            
            <h1 className="text-2xl font-bold">Safe Q&A</h1>
            <p className="text-muted-foreground">
              Ask questions anonymously in a safe environment
              {ageGroup && ` (Ages ${ageGroup})`}
            </p>
          </div>
          
          <SafeQA
            questions={filteredQuestions}
            onAskQuestion={handleNewQuestion}
            ageGroup={ageGroup || undefined}
          />
          
          {userQuestions.length > 0 && (
            <div className="mt-8 space-y-4">
              <h2 className="text-xl font-bold">Your Questions</h2>
              <p className="text-muted-foreground text-sm">
                Your questions will be reviewed by our educators and answered soon.
              </p>
              {userQuestions.map((q, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
                  <p className="font-medium">{q}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Submitted - Awaiting answer
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default QandA;
