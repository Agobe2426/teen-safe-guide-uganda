
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface QuizCardProps {
  quiz: {
    id: string;
    title: string;
    description: string;
    questionCount: number;
    themeId: string;
    ageGroup: string;
  };
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  return (
    <Card className="teen-shield-card">
      <div className="flex justify-between items-start gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <h3 className="font-bold">{quiz.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            {quiz.description}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            {quiz.questionCount} questions
          </p>
        </div>
        <Link to={`/quiz/${quiz.id}?theme=${quiz.themeId}&age=${quiz.ageGroup}`}>
          <Button
            size="sm"
            className="bg-shield-purple hover:bg-shield-purple-dark"
          >
            Start
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default QuizCard;
