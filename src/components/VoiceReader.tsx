
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, Pause, Volume2, Volume1, VolumeX } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface VoiceReaderProps {
  text: string;
  ageGroup: string;
}

interface Voice {
  name: string;
  label: string;
}

const VoiceReader = ({ text, ageGroup }: VoiceReaderProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [selectedVoice, setSelectedVoice] = useState<string>("friendly");
  const speechSynthRef = useRef<SpeechSynthesisUtterance | null>(null);
  
  // Age-appropriate voices
  const voices: Record<string, Voice[]> = {
    default: [
      { name: "friendly", label: "Friendly Voice" },
      { name: "teacher", label: "Teacher Voice" },
      { name: "fun", label: "Fun Voice" },
    ],
    "3-5": [
      { name: "friendly", label: "Friendly Voice" },
      { name: "storyteller", label: "Storyteller" },
    ],
    "6-9": [
      { name: "friendly", label: "Friendly Voice" },
      { name: "teacher", label: "Teacher Voice" },
      { name: "fun", label: "Fun Voice" },
    ],
    "10-12": [
      { name: "friendly", label: "Friendly Voice" },
      { name: "teacher", label: "Teacher Voice" },
      { name: "peer", label: "Peer Voice" },
    ],
    "13-16": [
      { name: "friendly", label: "Friendly Voice" },
      { name: "mentor", label: "Mentor Voice" },
      { name: "peer", label: "Peer Voice" },
    ],
    "17-18": [
      { name: "friendly", label: "Friendly Voice" },
      { name: "mentor", label: "Mentor Voice" },
      { name: "advisor", label: "Advisor Voice" },
    ],
  };
  
  const currentVoices = voices[ageGroup] || voices.default;
  
  const handlePlay = () => {
    if ('speechSynthesis' in window) {
      // Stop any existing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthRef.current = utterance;
      
      // Adjust voice characteristics based on selected voice and age group
      switch (selectedVoice) {
        case "friendly":
          utterance.pitch = 1.0;
          utterance.rate = 0.9;
          break;
        case "teacher":
          utterance.pitch = 1.1;
          utterance.rate = 0.85;
          break;
        case "storyteller":
          utterance.pitch = 1.2;
          utterance.rate = 0.8;
          break;
        case "fun":
          utterance.pitch = 1.3;
          utterance.rate = 1.0;
          break;
        case "peer":
          utterance.pitch = 1.0;
          utterance.rate = 1.0;
          break;
        case "mentor":
          utterance.pitch = 0.95;
          utterance.rate = 0.9;
          break;
        case "advisor":
          utterance.pitch = 0.9;
          utterance.rate = 0.85;
          break;
        default:
          utterance.pitch = 1.0;
          utterance.rate = 0.9;
      }
      
      // Set volume (0 to 1)
      utterance.volume = volume / 100;
      
      // Voice selection logic - try to use available system voices
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        // Try to find an English voice
        const englishVoice = availableVoices.find(v => 
          v.lang.includes('en') && v.name.includes('Female')
        );
        if (englishVoice) utterance.voice = englishVoice;
      }
      
      // Start speaking
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
      
      // Handle speech end
      utterance.onend = () => {
        setIsPlaying(false);
      };
    }
  };
  
  const handleStop = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };
  
  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (speechSynthRef.current) {
      speechSynthRef.current.volume = value[0] / 100;
    }
  };
  
  const handleVoiceChange = (value: string) => {
    setSelectedVoice(value);
    if (isPlaying) {
      handleStop();
      // Small delay to ensure previous speech is stopped
      setTimeout(handlePlay, 100);
    }
  };
  
  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX className="h-4 w-4" />;
    if (volume < 50) return <Volume1 className="h-4 w-4" />;
    return <Volume2 className="h-4 w-4" />;
  };
  
  return (
    <div className="bg-gray-50 rounded-lg p-4 mt-4 space-y-3">
      <h3 className="text-sm font-medium flex items-center gap-2">
        <Volume2 className="h-4 w-4 text-shield-purple" />
        Listen to Content
      </h3>
      
      <div className="flex flex-wrap gap-2 items-center">
        <Select value={selectedVoice} onValueChange={handleVoiceChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select voice" />
          </SelectTrigger>
          <SelectContent>
            {currentVoices.map((voice) => (
              <SelectItem key={voice.name} value={voice.name}>
                {voice.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        {!isPlaying ? (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handlePlay} 
            className="flex items-center gap-1"
          >
            <Play className="h-4 w-4" /> Play
          </Button>
        ) : (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleStop} 
            className="flex items-center gap-1"
          >
            <Pause className="h-4 w-4" /> Pause
          </Button>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        {getVolumeIcon()}
        <Slider
          value={[volume]}
          max={100}
          step={1}
          className="w-24"
          onValueChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default VoiceReader;
