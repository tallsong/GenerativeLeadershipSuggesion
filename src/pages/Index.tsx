import { TrendingUp, Users, DollarSign, Target, Activity, BarChart3 } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { DecisionSuggestion } from "@/components/DecisionSuggestion";

const Index = () => {
  const metrics = [
    {
      title: "Revenue",
      value: "$2.4M",
      change: "12.5%",
      icon: DollarSign,
      trend: "up" as const,
    },
    {
      title: "Active Projects",
      value: "24",
      change: "8.2%",
      icon: Target,
      trend: "up" as const,
    },
    {
      title: "Team Members",
      value: "156",
      change: "3.1%",
      icon: Users,
      trend: "up" as const,
    },
    {
      title: "Efficiency Score",
      value: "94%",
      change: "2.3%",
      icon: Activity,
      trend: "down" as const,
    },
    {
      title: "Monthly Growth",
      value: "18.5%",
      change: "5.7%",
      icon: TrendingUp,
      trend: "up" as const,
    },
    {
      title: "Performance Index",
      value: "8.7",
      change: "1.2%",
      icon: BarChart3,
      trend: "up" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Leadership Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">
                Enterprise Resource Planning System
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Last updated</p>
              <p className="text-sm font-medium">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Metrics Grid */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Key Performance Indicators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>
          </section>

          {/* Decision Suggestion */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">AI-Powered Insights</h2>
            <div className="max-w-3xl">
              <DecisionSuggestion />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
