import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Heart, Brain, Users, Star } from "lucide-react";

export type ThemeType = "development" | "health" | "relationships" | "values" | "culture";

interface ThemeCardProps {
  theme: {
    id: ThemeType;
    title: string;
    description: string;
  };
  ageGroup: string;
}

const getThemeIcon = (themeId: ThemeType) => {
  switch (themeId) {
    case "development":
      return <Brain className="h-6 w-6 text-shield-purple" />;
    case "health":
      return <Heart className="h-6 w-6 text-pink-500" />;
    case "relationships":
      return <Users className="h-6 w-6 text-shield-blue" />;
    case "values":
      return <Star className="h-6 w-6 text-amber-500" />;
    default:
      return <Star className="h-6 w-6 text-amber-500" />;
  }
};

const getThemeColor = (themeId: ThemeType) => {
  switch (themeId) {
    case "development":
      return "bg-shield-purple-light";
    case "health":
      return "bg-shield-soft-pink";
    case "relationships":
      return "bg-shield-soft-blue";
    case "values":
      return "bg-amber-50";
  }
};

const ThemeCard: React.FC<ThemeCardProps> = ({ theme, ageGroup }) => {
  return (
    <Link to={`/theme/${theme.id}?age=${ageGroup}`}>
      <Card className="teen-shield-card hover:scale-[1.02] transition-all duration-200">
        <div className="flex items-start gap-3">
          <div
            className={`${getThemeColor(theme.id)} p-3 rounded-lg flex items-center justify-center`}
          >
            {getThemeIcon(theme.id)}
          </div>
          <div>
            <h3 className="font-bold text-lg">{theme.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {theme.description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ThemeCard;
