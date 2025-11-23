import { Card } from "@/components/ui/card";
import {
  DollarSign,
  TrendingUp,
  Users,
  Package,
  Target,
  ShoppingCart,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 45000, target: 50000 },
  { month: "Feb", revenue: 52000, target: 50000 },
  { month: "Mar", revenue: 48000, target: 50000 },
  { month: "Apr", revenue: 61000, target: 55000 },
  { month: "May", revenue: 55000, target: 55000 },
  { month: "Jun", revenue: 67000, target: 60000 },
];

const leadConversionData = [
  { stage: "Leads", count: 1000, conversion: 100 },
  { stage: "Qualified", count: 650, conversion: 65 },
  { stage: "Proposal", count: 280, conversion: 28 },
  { stage: "Closed", count: 140, conversion: 14 },
];

const channelData = [
  { name: "Instagram", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Website", value: 28, color: "hsl(var(--chart-2))" },
  { name: "Referral", value: 20, color: "hsl(var(--chart-3))" },
  { name: "Email", value: 17, color: "hsl(var(--chart-4))" },
];

const productData = [
  { name: "Product A", revenue: 45000, units: 320 },
  { name: "Product B", revenue: 38000, units: 280 },
  { name: "Product C", revenue: 29000, units: 195 },
  { name: "Product D", revenue: 22000, units: 150 },
];

const customerSegments = [
  { segment: "Enterprise", count: 45, value: "$2.1M", growth: "+12%" },
  { segment: "Mid-Market", count: 128, value: "$890K", growth: "+8%" },
  { segment: "Small Business", count: 342, value: "$456K", growth: "+15%" },
  { segment: "Startup", count: 567, value: "$234K", growth: "+22%" },
];

export default function Dashboard() {
  const totalRevenue = 328000;
  const revenueGrowth = "+18.5%";
  const conversionRate = 14;
  const conversionChange = "+2.3%";

  return (
    <div className="p-3 sm:p-4 lg:p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-4 lg:mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1">
          Dashboard
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Complete overview of your business analytics
        </p>
      </div>

      {/* Top KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 lg:mb-6">
        <Card className="p-3 sm:p-4 lg:p-5 bg-card border-border">
          <div className="flex items-start justify-between mb-2 sm:mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <span className="text-xs font-medium text-primary">
              {revenueGrowth}
            </span>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">
              Total Revenue
            </p>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
              ${(totalRevenue / 1000).toFixed(0)}K
            </h3>
          </div>
        </Card>

        <Card className="p-3 sm:p-4 lg:p-5 bg-card border-border">
          <div className="flex items-start justify-between mb-2 sm:mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <span className="text-xs font-medium text-primary">
              {conversionChange}
            </span>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">
              Conversion Rate
            </p>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
              {conversionRate}%
            </h3>
          </div>
        </Card>

        <Card className="p-3 sm:p-4 lg:p-5 bg-card border-border">
          <div className="flex items-start justify-between mb-2 sm:mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <span className="text-xs font-medium text-primary">+156</span>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">
              Total Customers
            </p>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
              1,082
            </h3>
          </div>
        </Card>

        <Card className="p-3 sm:p-4 lg:p-5 bg-card border-border">
          <div className="flex items-start justify-between mb-2 sm:mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <span className="text-xs font-medium text-primary">+8.2%</span>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">
              Avg Order Value
            </p>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
              $303
            </h3>
          </div>
        </Card>
      </div>

      {/* Revenue Snapshot & Lead Conversion */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-4 lg:mb-6">
        {/* Revenue Snapshot */}
        <Card className="p-3 sm:p-4 lg:p-5 bg-card border-border">
          <div className="mb-3 sm:mb-4">
            <h2 className="text-base sm:text-lg font-bold text-foreground mb-0.5">
              Revenue Snapshot
            </h2>
            <p className="text-xs text-muted-foreground">
              Monthly revenue vs target
            </p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={revenueData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="month"
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: "11px" }}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: "11px" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                  fontSize: "12px",
                }}
              />
              <Legend wrapperStyle={{ fontSize: "11px" }} />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                name="Actual Revenue"
                dot={{ fill: "hsl(var(--primary))", r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="hsl(var(--muted-foreground))"
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Target"
                dot={{ fill: "hsl(var(--muted-foreground))", r: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Lead Conversion Rate */}
        <Card className="p-3 sm:p-4 lg:p-5 bg-card border-border">
          <div className="mb-3 sm:mb-4">
            <h2 className="text-base sm:text-lg font-bold text-foreground mb-0.5">
              Lead Conversion Rate
            </h2>
            <p className="text-xs text-muted-foreground">Funnel performance</p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={leadConversionData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="stage"
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: "11px" }}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: "11px" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                  fontSize: "12px",
                }}
              />
              <Bar
                dataKey="count"
                fill="hsl(var(--primary))"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Channel Performance & Product Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-4 lg:mb-6">
        {/* Channel Performance */}
        <Card className="p-3 sm:p-4 lg:p-5 bg-card border-border">
          <div className="mb-3 sm:mb-4">
            <h2 className="text-base sm:text-lg font-bold text-foreground mb-0.5">
              Channel Performance
            </h2>
            <p className="text-xs text-muted-foreground">
              Lead sources distribution
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <ResponsiveContainer width="100%" height={180} className="sm:w-1/2">
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-2 w-full sm:w-auto">
              {channelData.map((channel, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: channel.color }}
                    />
                    <span className="text-xs sm:text-sm text-foreground">
                      {channel.name}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-foreground">
                    {channel.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Product Performance */}
        <Card className="p-3 sm:p-4 lg:p-5 bg-card border-border">
          <div className="mb-3 sm:mb-4">
            <h2 className="text-base sm:text-lg font-bold text-foreground mb-0.5">
              Product Performance
            </h2>
            <p className="text-xs text-muted-foreground">Revenue by product</p>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={productData} layout="vertical">
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis
                type="number"
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: "11px" }}
              />
              <YAxis
                dataKey="name"
                type="category"
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: "11px" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                  fontSize: "12px",
                }}
              />
              <Bar
                dataKey="revenue"
                fill="hsl(var(--primary))"
                radius={[0, 6, 6, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Customer Segments */}
      <Card className="p-3 sm:p-4 lg:p-5 bg-card border-border">
        <div className="mb-3 sm:mb-4">
          <h2 className="text-base sm:text-lg font-bold text-foreground mb-0.5">
            Customer Segments
          </h2>
          <p className="text-xs text-muted-foreground">
            Performance by customer type
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {customerSegments.map((segment, index) => (
            <div
              key={index}
              className="p-3 sm:p-4 rounded-lg bg-secondary/30 border border-border hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-medium text-primary">
                  {segment.growth}
                </span>
              </div>
              <h3 className="text-xs font-semibold text-muted-foreground mb-1.5">
                {segment.segment}
              </h3>
              <p className="text-lg sm:text-xl font-bold text-foreground mb-0.5">
                {segment.value}
              </p>
              <p className="text-xs text-muted-foreground">
                {segment.count} customers
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
