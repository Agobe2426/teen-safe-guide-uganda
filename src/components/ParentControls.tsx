
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Settings, FileText, AlertCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const ParentControls = () => {
  const [passwordInput, setPasswordInput] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [settings, setSettings] = useState({
    restrictedContent: true,
    offlineAccess: true,
    qaModeration: true,
    timeLimit: true
  });
  const [timeLimitHours, setTimeLimitHours] = useState("1");
  const [saved, setSaved] = useState(false);

  const handleAuthenticate = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would validate against a saved password
    if (passwordInput === "parent123") {
      setAuthenticated(true);
    }
  };

  const handleSaveSettings = () => {
    // In a real app, this would save to local storage or backend
    console.log("Settings saved:", settings);
    setSaved(true);
    
    // Reset the saved indicator after 3 seconds
    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  const updateSetting = (key: keyof typeof settings, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (!authenticated) {
    return (
      <Card className="teen-shield-card p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="bg-shield-purple-light p-3 rounded-full">
            <Lock className="h-6 w-6 text-shield-purple" />
          </div>
          <h2 className="text-xl font-bold">Parent Area</h2>
          <p className="text-sm text-muted-foreground">
            This area is password protected to allow parents to configure content restrictions and privacy settings.
          </p>
          
          <form onSubmit={handleAuthenticate} className="w-full max-w-sm space-y-3">
            <div className="space-y-2">
              <Label htmlFor="parentPassword">Parent Password</Label>
              <Input 
                id="parentPassword" 
                type="password" 
                placeholder="Enter password" 
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Default password: parent123
              </p>
            </div>
            <Button type="submit" className="w-full teen-shield-btn">
              Access Parent Controls
            </Button>
          </form>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Settings className="h-5 w-5 text-shield-purple" />
        <h2 className="text-xl font-bold">Parent Controls</h2>
      </div>

      <div className="space-y-4">
        <Card className="teen-shield-card">
          <h3 className="font-bold text-lg">Content Settings</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Configure what content your child can access based on their age group.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="restrictedContent" className="font-medium">Age-Appropriate Content Only</Label>
                <p className="text-xs text-muted-foreground">
                  Restrict content based on the selected age group
                </p>
              </div>
              <Switch
                id="restrictedContent"
                checked={settings.restrictedContent}
                onCheckedChange={(checked) => updateSetting("restrictedContent", checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="qaModeration" className="font-medium">Q&A Moderation</Label>
                <p className="text-xs text-muted-foreground">
                  Review questions before they are submitted
                </p>
              </div>
              <Switch
                id="qaModeration"
                checked={settings.qaModeration}
                onCheckedChange={(checked) => updateSetting("qaModeration", checked)}
              />
            </div>
          </div>
        </Card>
        
        <Card className="teen-shield-card">
          <h3 className="font-bold text-lg">App Settings</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Configure how the app works and how much time your child can spend on it.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="offlineAccess" className="font-medium">Allow Offline Access</Label>
                <p className="text-xs text-muted-foreground">
                  Access content without internet connection
                </p>
              </div>
              <Switch
                id="offlineAccess"
                checked={settings.offlineAccess}
                onCheckedChange={(checked) => updateSetting("offlineAccess", checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="timeLimit" className="font-medium">Daily Time Limit</Label>
                <p className="text-xs text-muted-foreground">
                  Set a daily limit for app usage
                </p>
              </div>
              <Switch
                id="timeLimit"
                checked={settings.timeLimit}
                onCheckedChange={(checked) => updateSetting("timeLimit", checked)}
              />
            </div>
            
            <div className={cn(
              "flex items-center gap-2 transition-opacity",
              settings.timeLimit ? "opacity-100" : "opacity-50"
            )}>
              <Label htmlFor="timeLimitValue" className="text-sm whitespace-nowrap">
                Limit (hours):
              </Label>
              <Input
                id="timeLimitValue"
                type="number"
                className="w-20"
                value={timeLimitHours}
                onChange={(e) => setTimeLimitHours(e.target.value)}
                disabled={!settings.timeLimit}
                min="0.5"
                max="8"
                step="0.5"
              />
            </div>
          </div>
        </Card>
        
        <div className="flex justify-center">
          <Button
            onClick={handleSaveSettings}
            className="teen-shield-btn flex gap-2"
          >
            {saved ? <CheckCircle className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
            {saved ? "Settings Saved" : "Save Settings"}
          </Button>
        </div>
        
        <div className="text-center p-4 bg-muted rounded-lg flex items-center justify-center gap-2 text-sm">
          <AlertCircle className="h-4 w-4 text-muted-foreground" />
          <p className="text-muted-foreground">
            These settings will be applied to this device only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParentControls;
