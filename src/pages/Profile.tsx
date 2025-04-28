
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Book, Trophy, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";

const Profile = () => {
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
            
            <h1 className="text-2xl font-bold">Profile</h1>
            <p className="text-muted-foreground">Track your progress and manage settings</p>
          </div>
          
          <div className="space-y-6">
            <Card className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <Book className="h-5 w-5 text-shield-purple" />
                <h2 className="font-semibold">Learning Progress</h2>
              </div>
              <div className="space-y-2">
                <p>Lessons Completed: 0</p>
                <p>Quizzes Taken: 0</p>
                <p>Average Score: -</p>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="h-5 w-5 text-shield-blue" />
                <h2 className="font-semibold">Achievements</h2>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Star className="h-6 w-6 text-gray-300" />
                <Star className="h-6 w-6 text-gray-300" />
                <Star className="h-6 w-6 text-gray-300" />
              </div>
            </Card>
            
            <Link to="/parent">
              <Card className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-gray-500" />
                  <h2 className="font-semibold">Parental Controls</h2>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
