
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { themeData } from "@/data/content";
import ThemeCard from "@/components/ThemeCard";
import { useSearchParams } from "react-router-dom";
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

const Learn = () => {
  const [searchParams] = useSearchParams();
  const ageGroup = searchParams.get("age") as AgeGroup;

  // Filter out culture theme
  const filteredThemeData = themeData.filter(theme => theme.id !== "culture");

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
            {filteredThemeData.map((theme) => (
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
