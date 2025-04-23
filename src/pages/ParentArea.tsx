
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import ParentControls from "@/components/ParentControls";

const ParentArea = () => {
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
            
            <h1 className="text-2xl font-bold">Parent Area</h1>
            <p className="text-muted-foreground">
              Access parental controls and guidance
            </p>
          </div>
          
          <ParentControls />
        </div>
      </main>
    </div>
  );
};

export default ParentArea;
