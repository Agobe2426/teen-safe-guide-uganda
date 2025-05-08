
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SafeQA from "@/components/SafeQA";
import TeenChatbot from "@/components/TeenChatbot";
import { AgeGroup } from "@/components/AgeSelector";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QA } from "@/data/content";

const QandA = () => {
  const [searchParams] = useSearchParams();
  const ageGroup = searchParams.get("age") as AgeGroup | null;
  const [userQuestions, setUserQuestions] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string>("chatbot");

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
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="chatbot">Chat Assistant</TabsTrigger>
              <TabsTrigger value="qa">Common Questions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="chatbot" className="mt-0">
              <TeenChatbot ageGroup={ageGroup || undefined} />
            </TabsContent>
            
            <TabsContent value="qa" className="mt-0">
              <SafeQA
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
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default QandA;
