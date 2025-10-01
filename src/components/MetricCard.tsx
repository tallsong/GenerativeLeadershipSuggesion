import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down";
}

export const MetricCard = ({ title, value, change, icon: Icon, trend }: MetricCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-elevated transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            <p className={`text-sm font-medium ${trend === "up" ? "text-success" : "text-destructive"}`}>
              {trend === "up" ? "↑" : "↓"} {change}
            </p>
          </div>
          <div className="p-3 bg-gradient-primary rounded-lg">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
