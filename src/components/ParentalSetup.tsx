
import { useState } from "react";
import { ArrowLeft, Lock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

interface ParentalSetupProps {
  onComplete: () => void;
}

const ParentalSetup: React.FC<ParentalSetupProps> = ({ onComplete }) => {
  const [step, setStep] = useState<"intro" | "pin" | "controls">("intro");
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [controls, setControls] = useState({
    restrictContent: true,
    allowQandA: false,
    trackProgress: true,
    limitScreenTime: true
  });
  const [screenTimeHours, setScreenTimeHours] = useState("1");

  const handlePinSubmit = () => {
    if (pin.length < 4) {
      toast.error("PIN must be at least 4 digits");
      return;
    }
    
    if (pin !== confirmPin) {
      toast.error("PINs do not match");
      return;
    }
    
    setStep("controls");
  };

  const handleControlsSubmit = () => {
    // In a real app, we would save these settings
    console.log("Parental controls:", {
      pin,
      controls,
      screenTimeHours
    });
    toast.success("Parental controls set up successfully");
    onComplete();
  };

  return (
    <div className="space-y-4">
      {step === "intro" && (
        <>
          <div className="flex flex-col items-center text-center mb-4">
            <div className="bg-shield-purple-light p-3 rounded-full mb-2">
              <Lock className="h-6 w-6 text-shield-purple" />
            </div>
            <h3 className="font-bold text-xl">Parental Control Setup</h3>
            <p className="text-sm text-muted-foreground mt-2">
              For users under 13, we require parent/guardian approval and control settings.
            </p>
          </div>
          
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-medium mb-2">What this includes:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-shield-purple mr-2 mt-0.5" />
                <span>Creating a parental PIN for secure access</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-shield-purple mr-2 mt-0.5" />
                <span>Content restriction based on age appropriateness</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-shield-purple mr-2 mt-0.5" />
                <span>Screen time management and monitoring</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-shield-purple mr-2 mt-0.5" />
                <span>Q&A section controls for safer interactions</span>
              </li>
            </ul>
          </div>
          
          <Button 
            onClick={() => setStep("pin")} 
            className="w-full bg-shield-purple hover:bg-shield-purple/90"
          >
            Continue to Setup
          </Button>
        </>
      )}
      
      {step === "pin" && (
        <>
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0" 
              onClick={() => setStep("intro")}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
            <h3 className="font-semibold text-lg ml-2">Create Parental PIN</h3>
          </div>
          
          <p className="text-sm text-muted-foreground">
            This PIN will be required to access parental control settings.
          </p>
          
          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="pin">Create PIN (4+ digits)</Label>
              <Input 
                id="pin" 
                type="password" 
                placeholder="Enter PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/[^0-9]/g, ''))}
                maxLength={8}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPin">Confirm PIN</Label>
              <Input 
                id="confirmPin" 
                type="password" 
                placeholder="Confirm PIN"
                value={confirmPin}
                onChange={(e) => setConfirmPin(e.target.value.replace(/[^0-9]/g, ''))}
                maxLength={8}
                required
              />
            </div>
            
            <Button 
              onClick={handlePinSubmit} 
              className="w-full bg-shield-purple hover:bg-shield-purple/90"
              disabled={!pin || !confirmPin}
            >
              Set PIN
            </Button>
          </div>
        </>
      )}
      
      {step === "controls" && (
        <>
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0" 
              onClick={() => setStep("pin")}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
            <h3 className="font-semibold text-lg ml-2">Set Control Options</h3>
          </div>
          
          <div className="space-y-4 mt-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="restrictContent" className="font-medium">Restrict Content</Label>
                <p className="text-xs text-muted-foreground">
                  Only show age-appropriate content
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
                <Label htmlFor="allowQandA" className="font-medium">Allow Q&A Access</Label>
                <p className="text-xs text-muted-foreground">
                  Access to anonymous question section
                </p>
              </div>
              <Switch
                id="allowQandA"
                checked={controls.allowQandA}
                onCheckedChange={(checked) => setControls({...controls, allowQandA: checked})}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="trackProgress" className="font-medium">Track Learning Progress</Label>
                <p className="text-xs text-muted-foreground">
                  Monitor completed lessons and quizzes
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
                <Label htmlFor="limitScreenTime" className="font-medium">Limit Screen Time</Label>
                <p className="text-xs text-muted-foreground">
                  Set daily usage limits
                </p>
              </div>
              <Switch
                id="limitScreenTime"
                checked={controls.limitScreenTime}
                onCheckedChange={(checked) => setControls({...controls, limitScreenTime: checked})}
              />
            </div>
            
            {controls.limitScreenTime && (
              <div className="flex items-center space-x-4 pt-2 pb-2">
                <Label htmlFor="screenTimeHours" className="whitespace-nowrap">
                  Daily limit (hours):
                </Label>
                <Input
                  id="screenTimeHours"
                  type="number"
                  className="w-24"
                  value={screenTimeHours}
                  onChange={(e) => setScreenTimeHours(e.target.value)}
                  min="0.5"
                  max="8"
                  step="0.5"
                />
              </div>
            )}
            
            <Button 
              onClick={handleControlsSubmit} 
              className="w-full bg-shield-purple hover:bg-shield-purple/90 mt-4"
            >
              Complete Setup
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ParentalSetup;
