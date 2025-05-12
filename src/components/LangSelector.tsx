
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Check } from "lucide-react";

interface LangSelectorProps {
  onSelectLanguage: (lang: string) => void;
}

const languages = [
  { id: "en", name: "English" },
  { id: "lg", name: "Luganda" },
  { id: "sw", name: "Swahili" },
  { id: "luo", name: "Luo" },
];

const LangSelector: React.FC<LangSelectorProps> = ({ onSelectLanguage }) => {
  const [selectedLang, setSelectedLang] = useState("en");

  const handleSelect = () => {
    // In a real app, we would set the language in a context/store
    console.log("Selected language:", selectedLang);
    onSelectLanguage(selectedLang);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mr-2 h-8 w-8 p-0" 
          onClick={() => onSelectLanguage(selectedLang)}
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h3 className="font-semibold text-lg">Select Language</h3>
      </div>
      
      <RadioGroup 
        value={selectedLang} 
        onValueChange={setSelectedLang}
        className="gap-3"
      >
        {languages.map((lang) => (
          <div 
            key={lang.id}
            className="flex items-center justify-between rounded-md border p-3 cursor-pointer hover:bg-muted"
            onClick={() => setSelectedLang(lang.id)}
          >
            <div className="flex items-center gap-3">
              <RadioGroupItem value={lang.id} id={lang.id} />
              <Label htmlFor={lang.id} className="cursor-pointer">{lang.name}</Label>
            </div>
            {selectedLang === lang.id && <Check className="h-4 w-4 text-shield-purple" />}
          </div>
        ))}
      </RadioGroup>
      
      <Button 
        onClick={handleSelect} 
        className="w-full bg-shield-purple hover:bg-shield-purple/90 mt-4"
      >
        Continue
      </Button>
    </div>
  );
};

export default LangSelector;
