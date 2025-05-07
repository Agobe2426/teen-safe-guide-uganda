
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AgeSelector, { AgeGroup } from "@/components/AgeSelector";
import LanguageSelector from "@/components/LanguageSelector";
import { Shield } from "lucide-react";

const GuestOnboarding = () => {
  const [selectedAge, setSelectedAge] = useState<AgeGroup | null>(null);
  const [step, setStep] = useState<"age" | "language">("age");
  const navigate = useNavigate();

  const handleSelectAge = (age: AgeGroup) => {
    setSelectedAge(age);
  };

  const handleNext = () => {
    if (step === "age" && selectedAge) {
      setStep("language");
    } else {
      const needsParentalControls = 
        selectedAge === "3-5" || 
        selectedAge === "6-9" || 
        selectedAge === "10-12";
      
      if (needsParentalControls) {
        navigate("/parent-setup");
      } else {
        navigate(`/learn?age=${selectedAge}`);
      }
    }
  };

  const handleBack = () => {
    if (step === "language") {
      setStep("age");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-shield-purple-light to-shield-soft-blue">
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-shield-purple rounded-full mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-shield-purple mb-2">Guest Access</h1>
            <p className="text-md text-gray-700 mb-6">
              Let's customize your experience
            </p>
          </div>
          
          <Card className="teen-shield-card shadow-xl">
            <CardContent className="pt-6 space-y-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-0"
                onClick={handleBack}
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
              </Button>
              
              {step === "age" ? (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-center">Select Your Age Group</h2>
                  <AgeSelector
                    selectedAge={selectedAge}
                    onSelectAge={handleSelectAge}
                  />
                  
                  {selectedAge && (
                    <Button 
                      className="w-full bg-shield-purple hover:bg-shield-purple/90 mt-4" 
                      onClick={handleNext}
                    >
                      Continue
                    </Button>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-center">Select Your Language</h2>
                  <LanguageSelector />
                  
                  <Button 
                    className="w-full bg-shield-purple hover:bg-shield-purple/90 mt-4" 
                    onClick={handleNext}
                  >
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

export default GuestOnboarding;
