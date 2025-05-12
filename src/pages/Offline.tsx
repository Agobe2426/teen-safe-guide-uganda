
import { Link } from "react-router-dom";
import { ArrowLeft, Download, WifiOff, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Offline = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "App Installation",
      description: "Follow the instructions below to install the app on your phone.",
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
            
            <h1 className="text-2xl font-bold">Mobile App</h1>
            <p className="text-muted-foreground">Install Teen Shield on your phone</p>
          </div>
          
          <div className="space-y-4">
            <Card className="p-6">
              <WifiOff className="h-12 w-12 mx-auto mb-4 text-shield-purple" />
              <h2 className="text-xl font-bold mb-2 text-center">Download for Offline Use</h2>
              <p className="text-muted-foreground mb-6">
                Save lessons and quizzes to access them without an internet connection.
              </p>
              <Button onClick={handleDownload} className="w-full md:w-auto mb-4">
                <Download className="h-4 w-4 mr-2" />
                Download Content
              </Button>

              <div className="mt-6 border-t pt-6">
                <h3 className="font-bold flex items-center mb-3">
                  <Smartphone className="h-5 w-5 mr-2 text-shield-purple" />
                  Install on Your Phone
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Android Installation:</h4>
                    <ol className="list-decimal ml-5 text-sm space-y-2">
                      <li>Export the project to GitHub using the "Export to Github" button</li>
                      <li>Clone the project to your computer</li>
                      <li>Run <code className="bg-gray-100 px-2 py-0.5 rounded">npm install</code></li>
                      <li>Run <code className="bg-gray-100 px-2 py-0.5 rounded">npx cap add android</code></li>
                      <li>Run <code className="bg-gray-100 px-2 py-0.5 rounded">npm run build</code></li>
                      <li>Run <code className="bg-gray-100 px-2 py-0.5 rounded">npx cap sync</code></li>
                      <li>Run <code className="bg-gray-100 px-2 py-0.5 rounded">npx cap open android</code> to open in Android Studio</li>
                      <li>Build and run on your device or emulator</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">iOS Installation (requires Mac):</h4>
                    <ol className="list-decimal ml-5 text-sm space-y-2">
                      <li>Export the project to GitHub using the "Export to Github" button</li>
                      <li>Clone the project to your Mac</li>
                      <li>Run <code className="bg-gray-100 px-2 py-0.5 rounded">npm install</code></li>
                      <li>Run <code className="bg-gray-100 px-2 py-0.5 rounded">npx cap add ios</code></li>
                      <li>Run <code className="bg-gray-100 px-2 py-0.5 rounded">npm run build</code></li>
                      <li>Run <code className="bg-gray-100 px-2 py-0.5 rounded">npx cap sync</code></li>
                      <li>Run <code className="bg-gray-100 px-2 py-0.5 rounded">npx cap open ios</code> to open in Xcode</li>
                      <li>Build and run on your device or simulator</li>
                    </ol>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Offline;
