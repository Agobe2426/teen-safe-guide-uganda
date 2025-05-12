
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Lock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { AgeGroup } from "@/components/AgeSelector";

const ParentSetup = () => {
  const [searchParams] = useSearchParams();
  const ageGroup = searchParams.get("age") as AgeGroup | null;
  const [step, setStep] = useState<"intro" | "pin" | "controls">("intro");
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [pinError, setPinError] = useState("");
  const [controls, setControls] = useState({
    restrictContent: true,
    qaModeration: true,
    trackProgress: true,
    timeLimit: true,
  });
  const [timeLimitHours, setTimeLimitHours] = useState("1");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleNextFromIntro = () => {
    setStep("pin");
  };

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (pin.length < 4) {
      setPinError("PIN must be at least 4 digits");
      return;
    }
    
    if (pin !== confirmPin) {
      setPinError("PINs do not match");
      return;
    }
    
    setPinError("");
    setStep("controls");
  };

  const handleControlsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, we would save these settings
    toast({
      title: "Parental controls set up",
      description: "Your child's account is now protected.",
    });
    
    // Navigate to the learn page with age parameter
    navigate(`/learn?age=${ageGroup}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-shield-purple-light to-shield-soft-blue">
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-shield-purple rounded-full mx-auto mb-4 flex items-center justify-center">
              <Lock className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-shield-purple mb-2">Parent Setup</h1>
            <p className="text-md text-gray-700 mb-6">
              Create a safe learning environment
            </p>
          </div>
          
          <Card className="teen-shield-card shadow-xl">
            <CardContent className="pt-6">
              {step === "intro" && (
                <div className="space-y-6">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-0"
                    onClick={() => navigate("/")}
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to Welcome
                  </Button>
                  
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold">Parental Control Setup</h2>
                    <p className="text-muted-foreground">
                      Since your child is under 13, we require parental supervision to ensure they have a safe experience.
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <p className="text-sm">Control access to age-appropriate content</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <p className="text-sm">Monitor anonymous Q&A participation</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <p className="text-sm">Track learning progress</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <p className="text-sm">Set daily screen time limits</p>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-shield-purple hover:bg-shield-purple/90" 
                      onClick={handleNextFromIntro}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}
              
              {step === "pin" && (
                <div className="space-y-6">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-0"
                    onClick={() => setStep("intro")}
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back
                  </Button>
                  
                  <div>
                    <h2 className="text-xl font-bold">Create a Parent PIN</h2>
                    <p className="text-sm text-muted-foreground">
                      This PIN will be required to access parental controls
                    </p>
                  </div>
                  
                  <form onSubmit={handlePinSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="pin">PIN Code</Label>
                      <Input
                        id="pin"
                        type="password"
                        inputMode="numeric"
                        value={pin}
                        onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
                        placeholder="Create a PIN (min. 4 digits)"
                        maxLength={6}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirmPin">Confirm PIN</Label>
                      <Input
                        id="confirmPin"
                        type="password"
                        inputMode="numeric"
                        value={confirmPin}
                        onChange={(e) => setConfirmPin(e.target.value.replace(/\D/g, ''))}
                        placeholder="Confirm your PIN"
                        maxLength={6}
                        required
                      />
                    </div>
                    
                    {pinError && (
                      <p className="text-sm text-destructive">{pinError}</p>
                    )}
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-shield-purple hover:bg-shield-purple/90"
                    >
                      Set PIN
                    </Button>
                  </form>
                </div>
              )}
              
              {step === "controls" && (
                <div className="space-y-6">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-0"
                    onClick={() => setStep("pin")}
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back
                  </Button>
                  
                  <div>
                    <h2 className="text-xl font-bold">Parental Controls</h2>
                    <p className="text-sm text-muted-foreground">
                      Customize safety features for your child
                    </p>
                  </div>
                  
                  <form onSubmit={handleControlsSubmit} className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="restrictContent">Restrict Content</Label>
                          <p className="text-xs text-muted-foreground">
                            Show only age-appropriate content
                          </p>
                        </div>
                        <Switch
                          id="restrictContent"
                          checked={controls.restrictContent}
                          onCheckedChange={(checked) => setControls({...controls, restrictContent: checked})}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="qaModeration">Q&A Moderation</Label>
                          <p className="text-xs text-muted-foreground">
                            Review questions before submission
                          </p>
                        </div>
                        <Switch
                          id="qaModeration"
                          checked={controls.qaModeration}
                          onCheckedChange={(checked) => setControls({...controls, qaModeration: checked})}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="trackProgress">Track Progress</Label>
                          <p className="text-xs text-muted-foreground">
                            Monitor learning achievements
                          </p>
                        </div>
                        <Switch
                          id="trackProgress"
                          checked={controls.trackProgress}
                          onCheckedChange={(checked) => setControls({...controls, trackProgress: checked})}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="timeLimit">Daily Time Limit</Label>
                          <p className="text-xs text-muted-foreground">
                            Set a daily usage limit
                          </p>
                        </div>
                        <Switch
                          id="timeLimit"
                          checked={controls.timeLimit}
                          onCheckedChange={(checked) => setControls({...controls, timeLimit: checked})}
                        />
                      </div>
                      
                      {controls.timeLimit && (
                        <div className="flex items-center gap-2 pl-4">
                          <Label htmlFor="timeLimitValue" className="text-sm whitespace-nowrap">
                            Hours per day:
                          </Label>
                          <Input
                            id="timeLimitValue"
                            type="number"
                            className="w-20"
                            value={timeLimitHours}
                            onChange={(e) => setTimeLimitHours(e.target.value)}
                            min="0.5"
                            max="8"
                            step="0.5"
                          />
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-shield-purple hover:bg-shield-purple/90 mt-6"
                    >
                      Finish Setup
                    </Button>
                  </form>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ParentSetup;
