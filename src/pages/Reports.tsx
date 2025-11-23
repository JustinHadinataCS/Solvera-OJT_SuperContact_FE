import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileBarChart, Download, TrendingUp, Users, Target, Repeat } from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
  AreaChart,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 45000, leads: 320, closed: 45 },
  { month: "Feb", sales: 52000, leads: 380, closed: 52 },
  { month: "Mar", sales: 48000, leads: 350, closed: 48 },
  { month: "Apr", sales: 61000, leads: 420, closed: 61 },
  { month: "May", sales: 55000, leads: 390, closed: 55 },
  { month: "Jun", sales: 67000, leads: 450, closed: 67 },
];

const funnelData = [
  { stage: "Website Visitors", count: 10000, rate: 100 },
  { stage: "Leads", count: 2000, rate: 20 },
  { stage: "Qualified Leads", count: 800, rate: 8 },
  { stage: "Proposals Sent", count: 320, rate: 3.2 },
  { stage: "Deals Closed", count: 128, rate: 1.28 },
];

const cohortData = [
  { month: "Jan", retained: 100, churned: 0 },
  { month: "Feb", retained: 92, churned: 8 },
  { month: "Mar", retained: 85, churned: 15 },
  { month: "Apr", retained: 78, churned: 22 },
  { month: "May", retained: 73, churned: 27 },
  { month: "Jun", retained: 69, churned: 31 },
];

const channelPerformanceData = [
  { channel: "Instagram", leads: 450, conversions: 67, revenue: 95000 },
  { channel: "Website", leads: 380, conversions: 52, revenue: 78000 },
  { channel: "Referral", leads: 280, conversions: 48, revenue: 72000 },
  { channel: "Email", leads: 220, conversions: 38, revenue: 54000 },
];

const reports = [
  {
    title: "Sales Report",
    description: "Monthly sales performance and trends",
    icon: TrendingUp,
    lastGenerated: "2 hours ago",
  },
  {
    title: "Lead Funnel Report",
    description: "Conversion rates at each stage",
    icon: Target,
    lastGenerated: "5 hours ago",
  },
  {
    title: "Customer Cohort Report",
    description: "Retention and churn analysis",
    icon: Users,
    lastGenerated: "1 day ago",
  },
  {
    title: "Retention/Churn Report",
    description: "Customer lifecycle metrics",
    icon: Repeat,
    lastGenerated: "1 day ago",
  },
];

export default function Reports() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Reports</h1>
        <p className="text-muted-foreground">Pre-built analytics and performance reports</p>
      </div>

      {/* Quick Access Reports */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {reports.map((report, index) => (
          <Card
            key={index}
            className="p-5 bg-card border-border hover:bg-secondary/30 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <report.icon className="w-5 h-5 text-primary" />
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Download className="w-4 h-4" />
              </Button>
            </div>
            <h3 className="font-semibold text-foreground mb-1">{report.title}</h3>
            <p className="text-xs text-muted-foreground mb-3">{report.description}</p>
            <p className="text-xs text-muted-foreground">Updated {report.lastGenerated}</p>
          </Card>
        ))}
      </div>

      {/* Sales Report */}
      <Card className="p-6 bg-card border-border mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-1">Sales Report</h2>
            <p className="text-sm text-muted-foreground">Revenue, leads, and deals closed</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={salesData}>
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="hsl(var(--primary))"
              fill="url(#salesGradient)"
              strokeWidth={2}
              name="Sales ($)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      {/* Lead Funnel & Cohort Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Lead Funnel */}
        <Card className="p-6 bg-card border-border">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground mb-1">Lead Funnel Report</h2>
            <p className="text-sm text-muted-foreground">Conversion at each stage</p>
          </div>
          <div className="space-y-4">
            {funnelData.map((stage, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{stage.stage}</span>
                  <span className="text-sm text-muted-foreground">
                    {stage.count.toLocaleString()} ({stage.rate}%)
                  </span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${stage.rate * 10}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Cohort Retention */}
        <Card className="p-6 bg-card border-border">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground mb-1">Customer Cohort Report</h2>
            <p className="text-sm text-muted-foreground">Retention over time</p>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={cohortData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="retained"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                name="Retained (%)"
                dot={{ fill: "hsl(var(--primary))" }}
              />
              <Line
                type="monotone"
                dataKey="churned"
                stroke="hsl(var(--destructive))"
                strokeWidth={2}
                name="Churned (%)"
                dot={{ fill: "hsl(var(--destructive))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Channel Performance */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-1">Channel Performance</h2>
            <p className="text-sm text-muted-foreground">Lead sources comparison</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={channelPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="channel" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar dataKey="leads" fill="hsl(var(--chart-2))" radius={[8, 8, 0, 0]} name="Leads" />
            <Bar
              dataKey="conversions"
              fill="hsl(var(--primary))"
              radius={[8, 8, 0, 0]}
              name="Conversions"
            />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
