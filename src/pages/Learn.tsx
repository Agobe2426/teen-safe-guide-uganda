import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { themeData } from "@/data/content";
import ThemeCard from "@/components/ThemeCard";
import { AgeGroup } from "@/components/AgeSelector";

// Map of age-appropriate headings for each theme and age group
const ageAppropriateHeadings: Record<AgeGroup, Record<string, string>> = {
  "3-5": {
    development: "Growing and Changing",
    relationships: "Family and Friends",
    values: "Respect and Safety",
    health: "Staying Clean and Healthy",
  },
  "6-9": {
    development: "Understanding My Body",
    relationships: "Making Friends and Trusting Others",
    values: "Personal Safety and Respect",
    health: "Keeping Healthy",
  },
  "10-12": {
    development: "Body Changes and Growing Up",
    relationships: "Building Friendships",
    values: "Safe and Respectful Behavior",
    health: "Healthy Habits",
  },
  "13-16": {
    development: "Puberty and Development",
    relationships: "Healthy Relationships",
    values: "Body Boundaries and Decision-Making",
    health: "Sexual and Reproductive Health",
  },
  "17-18": {
    development: "Human Growth and Maturity",
    relationships: "Relationships and Responsible Choices",
    values: "Consent, Safety, and Responsible Behavior",
    health: "Comprehensive Health and Well-being",
  },
};

// Local Storage key for saved themes
const SAVED_THEMES_KEY = "teen_shield_learning_modules";

const Learn = () => {
  const [searchParams] = useSearchParams();
  const ageGroup = searchParams.get("age") as AgeGroup;
  const [themes, setThemes] = useState(getThemes());

  // Use saved theme data or filter out culture theme if not saved yet
  function getThemes() {
    const savedThemes = localStorage.getItem(SAVED_THEMES_KEY);
    
    if (savedThemes) {
      return JSON.parse(savedThemes);
    } else {
      // Initial filtering - only happens once
      const filtered = themeData.filter(theme => theme.id !== "culture");
      // Save to localStorage for future consistency
      localStorage.setItem(SAVED_THEMES_KEY, JSON.stringify(filtered));
      return filtered;
    }
  }

  // Effect to ensure themes are saved on initial render and maintained across navigation
  useEffect(() => {
    // If themes aren't yet in localStorage, save them
    if (!localStorage.getItem(SAVED_THEMES_KEY)) {
      const filtered = themeData.filter(theme => theme.id !== "culture");
      localStorage.setItem(SAVED_THEMES_KEY, JSON.stringify(filtered));
      setThemes(filtered);
    } else {
      // Otherwise use the saved themes to maintain consistency
      setThemes(JSON.parse(localStorage.getItem(SAVED_THEMES_KEY)!));
    }
  }, []);

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
            
            <h1 className="text-2xl font-bold">Learn</h1>
            <p className="text-muted-foreground">
              Explore educational content
              {ageGroup && ` for ages ${ageGroup} years`}
            </p>
          </div>
          
          <div className="space-y-4">
            {themes.map((theme) => (
              <ThemeCard 
                key={theme.id} 
                theme={{
                  ...theme,
                  title: ageGroup && ageAppropriateHeadings[ageGroup]?.[theme.id] 
                    ? ageAppropriateHeadings[ageGroup][theme.id] 
                    : theme.title
                }} 
                ageGroup={ageGroup || ""}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Learn;
