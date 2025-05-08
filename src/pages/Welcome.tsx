
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, BookOpen, MessageSquare, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import AgeSelector, { AgeGroup } from "@/components/AgeSelector";
import { Card, CardContent } from "@/components/ui/card";

const Welcome = () => {
  const [selectedAge, setSelectedAge] = useState<AgeGroup | null>(null);
  const navigate = useNavigate();

  const handleSelectAge = (age: AgeGroup) => {
    setSelectedAge(age);
  };

  const handleGetStarted = () => {
    if (selectedAge) {
      navigate(`/learn?age=${selectedAge}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-shield-purple-light to-shield-soft-blue">
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-shield-purple rounded-full mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-shield-purple mb-2">Teen Shield</h1>
            <p className="text-lg text-gray-700 mb-6">
              Age-appropriate education for Ugandan youth
            </p>
          </div>
          
          <Card className="teen-shield-card shadow-xl">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground mb-6">
                Welcome to Teen Shield! Select your age group to get started with content that's right for you.
              </p>
              
              <AgeSelector
                selectedAge={selectedAge}
                onSelectAge={handleSelectAge}
              />
              
              {selectedAge && (
                <div className="mt-6 flex justify-center">
                  <Button 
                    className="teen-shield-btn bg-shield-purple hover:bg-shield-purple/90 text-white" 
                    onClick={handleGetStarted}
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    Start Learning
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
