
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import AgeSelector, { AgeGroup } from "@/components/AgeSelector";

interface LandingSignUpProps {
  onBack: () => void;
}

const LandingSignUp: React.FC<LandingSignUpProps> = ({ onBack }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedAge, setSelectedAge] = useState<AgeGroup | null>(null);
  const [showAgeSelector, setShowAgeSelector] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInitialSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAgeSelector(true);
  };

  const handleAgeSelect = (age: AgeGroup) => {
    setSelectedAge(age);
  };

  const handleCompleteSignup = () => {
    setIsLoading(true);
    
    // Check if parental controls are needed
    const needsParentalControls = 
      selectedAge === "3-5" || 
      selectedAge === "6-9" || 
      selectedAge === "10-12";
    
    setTimeout(() => {
      setIsLoading(false);
      if (needsParentalControls) {
        navigate("/parent-setup");
      } else {
        navigate(`/learn?age=${selectedAge}`);
      }
    }, 1000);
  };

  return (
    <Card className="teen-shield-card shadow-xl">
      <CardContent className="pt-6">
        <div className="flex items-center mb-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-0 mr-2"
            onClick={onBack}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-xl font-bold">Create Account</h2>
        </div>
        
        {!showAgeSelector ? (
          <form onSubmit={handleInitialSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Create Password</Label>
              <Input
                id="password"
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a secure password"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-shield-blue hover:bg-shield-blue/90"
            >
              Next
            </Button>
          </form>
        ) : (
          <div className="space-y-4">
            <AgeSelector
              selectedAge={selectedAge}
              onSelectAge={handleAgeSelect}
            />
            
            {selectedAge && (
              <Button 
                className="w-full bg-shield-blue hover:bg-shield-blue/90"
                onClick={handleCompleteSignup}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Continue"}
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LandingSignUp;
