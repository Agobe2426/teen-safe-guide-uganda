
import { Link } from "react-router-dom";
import { ArrowLeft, Download, WifiOff } from "lucide-react";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Offline = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Coming Soon",
      description: "Offline downloads will be available in a future update.",
    });
  };

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
            
            <h1 className="text-2xl font-bold">Offline Access</h1>
            <p className="text-muted-foreground">Download content for offline learning</p>
          </div>
          
          <div className="space-y-4">
            <Card className="p-6 text-center">
              <WifiOff className="h-12 w-12 mx-auto mb-4 text-shield-purple" />
              <h2 className="text-xl font-bold mb-2">Download for Offline Use</h2>
              <p className="text-muted-foreground mb-4">
                Save lessons and quizzes to access them without an internet connection.
              </p>
              <Button onClick={handleDownload} className="w-full md:w-auto">
                <Download className="h-4 w-4 mr-2" />
                Download Content
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Offline;
