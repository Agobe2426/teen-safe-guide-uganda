import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type AgeGroup = "3-5" | "6-9" | "10-12" | "13-16" | "17-18";

interface AgeSelectorProps {
  selectedAge: AgeGroup | null;
  onSelectAge: (age: AgeGroup) => void;
}

const ageGroups: Array<{ id: AgeGroup; label: string; description: string }> = [
  {
    id: "3-5",
    label: "3-5 years",
    description: "Early Childhood",
  },
  {
    id: "6-9",
    label: "6-9 years",
    description: "Lower Primary",
  },
  {
    id: "10-12",
    label: "10-12 years",
    description: "Upper Primary",
  },
  {
    id: "13-16",
    label: "13-16 years",
    description: "Lower Secondary",
  },
  {
    id: "17-18",
    label: "17-18 years",
    description: "Upper Secondary",
  },
];

const AgeSelector: React.FC<AgeSelectorProps> = ({ selectedAge, onSelectAge }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">Select Your Age Group</h2>
      <p className="text-muted-foreground text-center text-sm mb-4">
        Content will be customized based on your age group
      </p>
      
      <div className="grid grid-cols-2 gap-3">
        {ageGroups.map((age) => (
          <Card
            key={age.id}
            className={cn(
              "cursor-pointer hover:border-shield-purple transition-all",
              selectedAge === age.id
                ? "border-2 border-shield-purple bg-shield-purple-light"
                : "border border-border"
            )}
            onClick={() => onSelectAge(age.id)}
          >
            <div className="p-4 text-center">
              <h3 className="font-bold">{age.label}</h3>
              <p className="text-xs text-muted-foreground">{age.description}</p>
            </div>
          </Card>
        ))}
      </div>
      
      {selectedAge && (
        <div className="flex justify-center mt-4">
          <Button className="teen-shield-btn">Continue</Button>
        </div>
      )}
    </div>
  );
};

export default AgeSelector;
