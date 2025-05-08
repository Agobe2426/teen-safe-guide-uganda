
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import ThemeCard from "@/components/ThemeCard";
import AgeSelector, { AgeGroup } from "@/components/AgeSelector";
import { themeData } from "@/data/content";
import { Card } from "@/components/ui/card";
import { Baby } from "lucide-react";

const Learn = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const ageGroup = (searchParams.get("age") as AgeGroup) || "10-12";
  
  // Filter out culture theme
  const filteredThemeData = themeData.filter(t => t.id !== "culture");

  const handleAgeChange = (age: AgeGroup) => {
    setSearchParams({ age });
  };

  // Special content for very young children
  const showYoungChildrenModule = ageGroup === "3-5";

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
            
            <h1 className="text-2xl font-bold">Learning Areas</h1>
            <p className="text-muted-foreground">
              Explore age-appropriate content in different learning areas
            </p>
          </div>
          
          <div className="mb-8">
            <AgeSelector value={ageGroup} onChange={handleAgeChange} />
          </div>

          {showYoungChildrenModule ? (
            <div>
              <h2 className="text-xl font-bold mb-4">For Young Children (3-5 years)</h2>
              <Link to="/young-learning">
                <Card className="teen-shield-card hover:scale-[1.02] transition-all duration-200 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-shield-soft-pink p-3 rounded-lg flex items-center justify-center">
                      <Baby className="h-6 w-6 text-shield-purple" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Growing and Changing</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Learn about being special, body parts, and staying safe
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
              
              <h2 className="text-xl font-bold mb-4 mt-8">Other Learning Areas</h2>
            </div>
          ) : null}
          
          <div className="grid md:grid-cols-2 gap-4">
            {filteredThemeData.map((theme) => (
              <ThemeCard key={theme.id} theme={theme} ageGroup={ageGroup} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Learn;
