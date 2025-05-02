
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, LogIn, UserPlus, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import LandingSignUp from "@/components/LandingSignUp";
import LandingLogin from "@/components/LandingLogin";
import LanguageSelector from "@/components/LanguageSelector";

type LandingView = "main" | "login" | "signup";

const Welcome = () => {
  const [currentView, setCurrentView] = useState<LandingView>("main");
  const navigate = useNavigate();

  const handleContinueAsGuest = () => {
    navigate("/guest-onboarding");
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
              Welcome to Teen Shield – Learn. Grow. Stay Safe.
            </p>
          </div>
          
          {currentView === "main" && (
            <Card className="teen-shield-card shadow-xl">
              <CardContent className="pt-6 space-y-4">
                <p className="text-center text-muted-foreground mb-4">
                  Age-appropriate education for Ugandan youth
                </p>
                
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-shield-purple hover:bg-shield-purple/90" 
                    onClick={() => setCurrentView("login")}
                  >
                    <LogIn className="mr-2 h-4 w-4" />
                    Log In
                  </Button>
                  
                  <Button 
                    className="w-full bg-shield-blue hover:bg-shield-blue/90" 
                    onClick={() => setCurrentView("signup")}
                  >
                    <UserPlus className="mr-2 h-4 w-4" />
                    Sign Up
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-shield-purple text-shield-purple hover:bg-shield-purple/10"
                    onClick={handleContinueAsGuest}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Continue as Guest
                  </Button>
                </div>
                
                <div className="pt-4">
                  <LanguageSelector />
                </div>
              </CardContent>
            </Card>
          )}
          
          {currentView === "login" && (
            <LandingLogin onBack={() => setCurrentView("main")} />
          )}
          
          {currentView === "signup" && (
            <LandingSignUp onBack={() => setCurrentView("main")} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Welcome;
