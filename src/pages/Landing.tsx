
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, LogIn, UserPlus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import LangSelector from "@/components/LangSelector";

const Landing = () => {
  const navigate = useNavigate();
  const [showLanguageSelect, setShowLanguageSelect] = useState(false);
  
  const handleContinueAsGuest = () => {
    navigate("/welcome");
  };
  
  const handleSignUp = () => {
    navigate("/signup");
  };
  
  const handleLogIn = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-shield-purple-light to-shield-soft-blue flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 bg-shield-purple rounded-full flex items-center justify-center mb-6">
              <Shield className="h-14 w-14 text-white" />
            </div>
            
            <h1 className="text-4xl font-bold text-shield-purple">Teen Shield</h1>
            <p className="mt-3 text-xl text-gray-700">
              Welcome to Teen Shield – Learn. Grow. Stay Safe.
            </p>
          </div>
          
          <Card className="teen-shield-card shadow-xl">
            <CardContent className="pt-6 pb-6 space-y-4">
              {!showLanguageSelect ? (
                <>
                  <Button 
                    onClick={handleLogIn} 
                    className="w-full flex justify-center items-center gap-2 bg-shield-blue hover:bg-shield-blue/90"
                  >
                    <LogIn className="h-4 w-4" />
                    Log In
                  </Button>
                  
                  <Button 
                    onClick={handleSignUp} 
                    className="w-full flex justify-center items-center gap-2 bg-shield-purple hover:bg-shield-purple/90"
                  >
                    <UserPlus className="h-4 w-4" />
                    Sign Up
                  </Button>
                  
                  <Button 
                    onClick={handleContinueAsGuest} 
                    variant="outline" 
                    className="w-full flex justify-center items-center gap-2"
                  >
                    <Users className="h-4 w-4" />
                    Continue as Guest
                  </Button>
                  
                  <div className="pt-4">
                    <Button 
                      variant="ghost" 
                      className="text-sm text-muted-foreground"
                      onClick={() => setShowLanguageSelect(true)}
                    >
                      Change Language
                    </Button>
                  </div>
                </>
              ) : (
                <LangSelector onSelectLanguage={() => setShowLanguageSelect(false)} />
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      
      <footer className="py-4 text-center text-sm text-muted-foreground">
        <p>Teen Shield 2025 • Age-appropriate education for Ugandan youth</p>
      </footer>
    </div>
  );
};

export default Landing;
