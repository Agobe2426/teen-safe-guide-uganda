
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { themeData } from "@/data/content";
import ThemeCard from "@/components/ThemeCard";
import { useSearchParams } from "react-router-dom";
import { AgeGroup } from "@/components/AgeSelector";

const Learn = () => {
  const [searchParams] = useSearchParams();
  const ageGroup = searchParams.get("age") as AgeGroup;

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
            {themeData.map((theme) => (
              <ThemeCard key={theme.id} theme={theme} ageGroup={ageGroup || ""} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Learn;
