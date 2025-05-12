
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AgeSelector, { AgeGroup } from "@/components/AgeSelector";
import ParentalSetup from "@/components/ParentalSetup";
import { toast } from "sonner";

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"details" | "age" | "parental">("details");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [selectedAge, setSelectedAge] = useState<AgeGroup | null>(null);
  const [requiresParental, setRequiresParental] = useState(false);

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("age");
  };

  const handleSelectAge = (age: AgeGroup) => {
    setSelectedAge(age);
    
    // Check if age group requires parental controls
    const ageNum = parseInt(age.split("-")[0]);
    setRequiresParental(ageNum < 13);
  };

  const handleAgeSubmit = () => {
    if (requiresParental) {
      setStep("parental");
    } else {
      completeSignup();
    }
  };
  
  const handleParentalSetupComplete = () => {
    completeSignup();
  };
  
  const completeSignup = () => {
    toast.success("Account created successfully!");
    // In a real app, we would save the user data to a backend service
    navigate(`/home?age=${selectedAge}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-shield-purple-light to-shield-soft-blue">
      <div className="container max-w-md mx-auto flex-grow flex flex-col justify-center p-4">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 bg-shield-purple rounded-full flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-shield-purple">Create Your Account</h1>
        </div>
        
        <Card className="teen-shield-card shadow-lg">
          <CardContent className="pt-6">
            {step === "details" && (
              <form onSubmit={handleDetailsSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter your name"
                    value={userDetails.name}
                    onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email"
                    value={userDetails.email}
                    onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Create a password"
                    value={userDetails.password}
                    onChange={(e) => setUserDetails({...userDetails, password: e.target.value})}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Password must be at least 8 characters
                  </p>
                </div>
                
                <Button type="submit" className="w-full bg-shield-purple hover:bg-shield-purple/90">
                  Continue
                </Button>
                
                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-shield-purple hover:underline">
                    Log in
                  </Link>
                </div>
              </form>
            )}
            
            {step === "age" && (
              <div className="space-y-4">
                <div className="flex items-center mb-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 w-8 p-0" 
                    onClick={() => setStep("details")}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                  </Button>
                  <h3 className="font-semibold text-lg ml-2">Select Your Age Group</h3>
                </div>
                
                <AgeSelector
                  selectedAge={selectedAge}
                  onSelectAge={handleSelectAge}
                />
                
                {selectedAge && (
                  <Button 
                    onClick={handleAgeSubmit} 
                    className="w-full bg-shield-purple hover:bg-shield-purple/90"
                  >
                    Continue
                  </Button>
                )}
              </div>
            )}
            
            {step === "parental" && (
              <ParentalSetup onComplete={handleParentalSetupComplete} />
            )}
          </CardContent>
        </Card>
        
        <Button 
          variant="ghost" 
          className="mx-auto mt-4 text-muted-foreground"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to landing page
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
