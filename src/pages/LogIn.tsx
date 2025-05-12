
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Shield, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const LogIn = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would authenticate the user
    console.log("Login attempt:", credentials);
    toast.success("Logged in successfully!");
    navigate("/home");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-shield-purple-light to-shield-soft-blue">
      <div className="container max-w-md mx-auto flex-grow flex flex-col justify-center p-4">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 bg-shield-purple rounded-full flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-shield-purple">Log In</h1>
          <p className="text-muted-foreground">Welcome back to Teen Shield</p>
        </div>
        
        <Card className="teen-shield-card shadow-lg">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email"
                  value={credentials.email}
                  onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-shield-blue hover:bg-shield-blue/90">
                Log In
              </Button>
              
              <div className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-shield-purple hover:underline">
                  Sign up
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
        
        <Button 
          variant="ghost" 
          className="mx-auto mt-4 text-muted-foreground"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to landing page
        </Button>
      </div>
    </div>
  );
};

export default LogIn;
