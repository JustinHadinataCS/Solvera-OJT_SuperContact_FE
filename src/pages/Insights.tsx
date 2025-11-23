import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  TrendingDown,
  AlertCircle,
  Lightbulb,
  Target,
  Users,
  DollarSign,
  Clock,
} from "lucide-react";

const insights = [
  {
    id: 1,
    type: "success",
    icon: TrendingUp,
    title: "Leads from Instagram convert 2× higher this month",
    description:
      "Instagram channel showing 28% conversion rate vs 14% average. Consider allocating more budget to this channel.",
    impact: "High",
    category: "Conversion",
    date: "Today",
    metric: "+28%",
  },
  {
    id: 2,
    type: "warning",
    icon: TrendingDown,
    title: "Returning customers dropped 12%",
    description:
      "Customer retention rate decreased from 85% to 73% compared to last quarter. Recommend implementing loyalty program.",
    impact: "High",
    category: "Retention",
    date: "Yesterday",
    metric: "-12%",
  },
  {
    id: 3,
    type: "info",
    icon: Target,
    title: "Top city by revenue: Jakarta",
    description:
      "Jakarta accounts for 35% of total revenue. Surabaya following with 22%. Consider regional marketing strategies.",
    impact: "Medium",
    category: "Geography",
    date: "2 days ago",
    metric: "$234K",
  },
  {
    id: 4,
    type: "success",
    icon: Users,
    title: "High-value segment growing rapidly",
    description:
      "Enterprise customer segment grew by 22% this quarter. Average deal size increased to $47K.",
    impact: "High",
    category: "Growth",
    date: "3 days ago",
    metric: "+22%",
  },
  {
    id: 5,
    type: "warning",
    icon: AlertCircle,
    title: "Email campaign performance declining",
    description:
      "Open rates dropped from 24% to 18%. Click-through rates decreased by 15%. Consider A/B testing subject lines.",
    impact: "Medium",
    category: "Marketing",
    date: "4 days ago",
    metric: "-15%",
  },
  {
    id: 6,
    type: "info",
    icon: Clock,
    title: "Peak engagement time: 2-4 PM",
    description:
      "Customer interactions highest between 2-4 PM on weekdays. Schedule important communications during this window.",
    impact: "Low",
    category: "Timing",
    date: "5 days ago",
    metric: "2-4 PM",
  },
];

const recommendations = [
  {
    title: "Increase Instagram Budget",
    description: "Based on 2× conversion rate performance",
    priority: "High",
    estimatedImpact: "+$45K revenue",
  },
  {
    title: "Launch Retention Campaign",
    description: "Target at-risk customers with special offers",
    priority: "High",
    estimatedImpact: "+12% retention",
  },
  {
    title: "Optimize Email Timing",
    description: "Schedule sends between 2-4 PM for better engagement",
    priority: "Medium",
    estimatedImpact: "+8% open rate",
  },
  {
    title: "Regional Expansion",
    description: "Expand operations in Jakarta and Surabaya",
    priority: "Medium",
    estimatedImpact: "+$78K revenue",
  },
];

export default function Insights() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Insights</h1>
        <p className="text-muted-foreground">
          Auto-generated insights and actionable recommendations
        </p>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="p-5 bg-card border-border">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Lightbulb className="w-5 h-5 text-primary" />
            </div>
            <Badge className="bg-primary/20 text-primary">Active</Badge>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">{insights.length}</p>
          <p className="text-sm text-muted-foreground">Active Insights</p>
        </Card>

        <Card className="p-5 bg-card border-border">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <Badge className="bg-primary/20 text-primary">High</Badge>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">3</p>
          <p className="text-sm text-muted-foreground">High Impact</p>
        </Card>

        <Card className="p-5 bg-card border-border">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <Badge className="bg-chart-2/20 text-chart-2">Ready</Badge>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">{recommendations.length}</p>
          <p className="text-sm text-muted-foreground">Recommendations</p>
        </Card>

        <Card className="p-5 bg-card border-border">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <Badge className="bg-primary/20 text-primary">+15%</Badge>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">$123K</p>
          <p className="text-sm text-muted-foreground">Potential Impact</p>
        </Card>
      </div>

      {/* Insights List */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Recent Insights</h2>
        <div className="space-y-4">
          {insights.map((insight) => (
            <Card
              key={insight.id}
              className="p-6 bg-card border-border hover:bg-secondary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg ${
                    insight.type === "success"
                      ? "bg-primary/10"
                      : insight.type === "warning"
                      ? "bg-destructive/10"
                      : "bg-chart-2/10"
                  }`}
                >
                  <insight.icon
                    className={`w-6 h-6 ${
                      insight.type === "success"
                        ? "text-primary"
                        : insight.type === "warning"
                        ? "text-destructive"
                        : "text-chart-2"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {insight.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{insight.description}</p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant="secondary"
                        className={
                          insight.impact === "High"
                            ? "bg-primary/20 text-primary"
                            : insight.impact === "Medium"
                            ? "bg-chart-2/20 text-chart-2"
                            : "bg-muted text-muted-foreground"
                        }
                      >
                        {insight.impact} Impact
                      </Badge>
                      <p className="text-2xl font-bold text-primary mt-2">{insight.metric}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <Badge variant="secondary" className="bg-secondary text-foreground">
                      {insight.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{insight.date}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Recommended Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendations.map((rec, index) => (
            <Card key={index} className="p-6 bg-card border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{rec.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="secondary"
                      className={
                        rec.priority === "High"
                          ? "bg-primary/20 text-primary"
                          : "bg-chart-2/20 text-chart-2"
                      }
                    >
                      {rec.priority} Priority
                    </Badge>
                    <span className="text-sm font-medium text-primary">
                      {rec.estimatedImpact}
                    </span>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Take Action
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
