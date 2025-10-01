import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";

interface Suggestion {
  title: string;
  content: string;
  category: string;
}

const suggestions: Suggestion[] = [
  {
    title: "Team Optimization",
    content: "Consider replacing Employee A with Employee B since Employee B has stronger programming skills and 3 years more experience in React development.",
    category: "Human Resources"
  },
  {
    title: "Budget Reallocation",
    content: "Reallocate 15% of marketing budget to R&D department based on Q3 performance metrics showing higher ROI in product development.",
    category: "Finance"
  },
  {
    title: "Project Priority Shift",
    content: "Recommend prioritizing Project Phoenix over Project Atlas as market analysis shows 40% higher demand in Phoenix's target segment.",
    category: "Strategy"
  },
  {
    title: "Vendor Contract Review",
    content: "Switch from Vendor X to Vendor Y for cloud infrastructure - estimated 25% cost savings with better SLA guarantees.",
    category: "Operations"
  },
  {
    title: "Training Investment",
    content: "Invest in AI/ML training for the data team. Current skill gap analysis shows this could improve productivity by 30%.",
    category: "Development"
  },
  {
    title: "Process Automation",
    content: "Automate the quarterly reporting process using existing tools. This could save approximately 120 work hours per quarter.",
    category: "Efficiency"
  }
];

export const DecisionSuggestion = () => {
  const [currentSuggestion, setCurrentSuggestion] = useState<Suggestion>(
    suggestions[Math.floor(Math.random() * suggestions.length)]
  );
  const [isDeciding, setIsDeciding] = useState(false);

  const generateNewSuggestion = () => {
    const newSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    setCurrentSuggestion(newSuggestion);
  };

  const handleDecision = (accepted: boolean) => {
    setIsDeciding(true);
    
    setTimeout(() => {
      if (accepted) {
        toast.success("Decision Accepted", {
          description: "The suggestion has been marked for implementation.",
        });
      } else {
        toast.error("Decision Rejected", {
          description: "The suggestion has been declined.",
        });
      }
      
      setIsDeciding(false);
      generateNewSuggestion();
    }, 500);
  };

  return (
    <Card className="shadow-elevated border-2 border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-primary rounded-lg">
            <Lightbulb className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-xl">AI Decision Suggestion</CardTitle>
            <CardDescription className="text-accent font-medium">
              {currentSuggestion.category}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">{currentSuggestion.title}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {currentSuggestion.content}
          </p>
        </div>
        
        <div className="pt-4 border-t">
          <p className="text-sm font-medium mb-4">Are you going to follow this decision?</p>
          <div className="flex gap-3">
            <Button
              onClick={() => handleDecision(true)}
              disabled={isDeciding}
              className="flex-1 bg-success hover:bg-success/90"
            >
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Accept
            </Button>
            <Button
              onClick={() => handleDecision(false)}
              disabled={isDeciding}
              variant="outline"
              className="flex-1 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
            >
              <XCircle className="mr-2 h-4 w-4" />
              Reject
            </Button>
          </div>
        </div>

        <Button
          onClick={generateNewSuggestion}
          variant="ghost"
          className="w-full"
          disabled={isDeciding}
        >
          Generate New Suggestion
        </Button>
      </CardContent>
    </Card>
  );
};
