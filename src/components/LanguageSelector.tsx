
import { useState } from "react";
import { Check, Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "lg", name: "Luganda" },
  { code: "sw", name: "Swahili" },
  { code: "ar", name: "Arabic" },
]

const LanguageSelector = () => {
  const [language, setLanguage] = useState("en");

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-center text-muted-foreground">
        Select Language
      </label>
      <Select defaultValue={language} onValueChange={setLanguage}>
        <SelectTrigger className="w-full">
          <div className="flex items-center">
            <Globe className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Select language" />
          </div>
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              <div className="flex justify-between items-center">
                <span>{lang.name}</span>
                {lang.code === language && (
                  <Check className="ml-2 h-4 w-4" />
                )}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
