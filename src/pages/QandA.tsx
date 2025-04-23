
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import SafeQA from "@/components/SafeQA";
import { qaData, QA } from "@/data/content";
import { AgeGroup } from "@/components/AgeSelector";

const QandA = () => {
  const [searchParams] = useSearchParams();
  const ageGroup = searchParams.get("age") as AgeGroup;
  
  const [questions, setQuestions] = useState<QA[]>([]);
  
  useEffect(() => {
    if (ageGroup) {
      // Filter questions for this age group
      const filteredQuestions = qaData.filter(
        q => q.ageGroups.includes(ageGroup)
      );
      setQuestions(filteredQuestions);
    } else {
      // If no age group specified, show all questions
      setQuestions(qaData);
    }
  }, [ageGroup]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="teen-shield-container">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
            
            <h1 className="text-2xl font-bold">Safe Q&A</h1>
            <p className="text-muted-foreground">
              Find answers to common questions or ask anonymously
              {ageGroup && ` (Age group: ${ageGroup} years)`}
            </p>
          </div>
          
          <SafeQA commonQuestions={questions} ageGroup={ageGroup || ""} />
        </div>
      </main>
    </div>
  );
};

export default QandA;
