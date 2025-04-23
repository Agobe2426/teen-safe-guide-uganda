
import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, BookOpen, MessageSquare, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import AgeSelector, { AgeGroup } from "@/components/AgeSelector";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { themeData } from "@/data/content";
import ThemeCard from "@/components/ThemeCard";

const Index = () => {
  const [selectedAge, setSelectedAge] = useState<AgeGroup | null>(null);
  const [ageConfirmed, setAgeConfirmed] = useState(false);

  const handleSelectAge = (age: AgeGroup) => {
    setSelectedAge(age);
  };

  const confirmAgeSelection = () => {
    if (selectedAge) {
      setAgeConfirmed(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {!ageConfirmed ? (
          <div className="teen-shield-container">
            <div className="mb-8 text-center">
              <div className="w-20 h-20 bg-shield-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-shield-purple mb-2">Teen Shield</h1>
              <p className="text-muted-foreground">
                Age-appropriate sex education for Ugandan youth
              </p>
            </div>
            
            <Card className="teen-shield-card mb-8">
              <CardContent className="pt-6">
                <AgeSelector
                  selectedAge={selectedAge}
                  onSelectAge={handleSelectAge}
                />
                
                {selectedAge && (
                  <div className="mt-6 flex justify-center">
                    <Button 
                      className="teen-shield-btn" 
                      onClick={confirmAgeSelection}
                    >
                      Start Learning
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <div className="text-center text-sm text-muted-foreground">
              <p>
                Content approved by Uganda's Ministry of Education and Sports
                <br />
                Based on the Uganda National Sexuality Education Framework (2018)
              </p>
            </div>
          </div>
        ) : (
          <div className="teen-shield-container">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Welcome!</h2>
              <p className="text-muted-foreground">
                Content tailored for ages {selectedAge}
              </p>
            </div>
            
            <div className="space-y-5 mb-8">
              <h3 className="text-lg font-medium">Learning Themes</h3>
              {themeData.map((theme) => (
                <ThemeCard key={theme.id} theme={theme} ageGroup={selectedAge} />
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Link to={`/qanda?age=${selectedAge}`} className="block">
                <Card className="teen-shield-card h-full hover:scale-[1.02] transition-all duration-200">
                  <div className="p-4 flex flex-col items-center text-center">
                    <div className="bg-shield-soft-blue p-3 rounded-full mb-2">
                      <MessageSquare className="h-6 w-6 text-shield-blue" />
                    </div>
                    <h3 className="font-bold">Safe Q&A</h3>
                    <p className="text-xs text-muted-foreground">Ask questions anonymously</p>
                  </div>
                </Card>
              </Link>
              
              <Link to="/parent" className="block">
                <Card className="teen-shield-card h-full hover:scale-[1.02] transition-all duration-200">
                  <div className="p-4 flex flex-col items-center text-center">
                    <div className="bg-shield-soft-pink p-3 rounded-full mb-2">
                      <Settings className="h-6 w-6 text-pink-500" />
                    </div>
                    <h3 className="font-bold">Parent Area</h3>
                    <p className="text-xs text-muted-foreground">Controls & guidance</p>
                  </div>
                </Card>
              </Link>
            </div>
            
            <div className="bg-muted p-4 rounded-lg text-center text-sm">
              <p className="text-muted-foreground">
                Content is aligned with the Uganda National Sexuality Education Framework and 
                designed to promote healthy development and cultural values.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
