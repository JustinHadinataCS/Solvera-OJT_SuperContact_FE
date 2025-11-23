import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Users, DollarSign, TrendingUp, Calendar, Filter } from "lucide-react";

const segments = [
  {
    id: 1,
    name: "High-Value Customers",
    description: "Customers with LTV > $10,000",
    count: 156,
    totalValue: "$2.4M",
    avgValue: "$15,385",
    growth: "+12%",
    conditions: [
      { field: "LTV", operator: ">", value: "$10,000" },
      { field: "Status", operator: "=", value: "Active" },
    ],
    lastUpdated: "2 hours ago",
  },
  {
    id: 2,
    name: "At-Risk Customers",
    description: "No purchase in last 90 days, previously active",
    count: 89,
    totalValue: "$456K",
    avgValue: "$5,124",
    growth: "-8%",
    conditions: [
      { field: "Last Purchase", operator: ">", value: "90 days" },
      { field: "Previous Orders", operator: ">", value: "3" },
    ],
    lastUpdated: "5 hours ago",
  },
  {
    id: 3,
    name: "Low-Frequency High-Ticket",
    description: "Large orders but infrequent purchases",
    count: 67,
    totalValue: "$892K",
    avgValue: "$13,313",
    growth: "+5%",
    conditions: [
      { field: "Avg Order Value", operator: ">", value: "$5,000" },
      { field: "Purchase Frequency", operator: "<", value: "2 per year" },
    ],
    lastUpdated: "1 day ago",
  },
  {
    id: 4,
    name: "Loyal Repeat Customers",
    description: "4+ purchases, active in last 30 days",
    count: 234,
    totalValue: "$1.2M",
    avgValue: "$5,128",
    growth: "+18%",
    conditions: [
      { field: "Total Orders", operator: ">=", value: "4" },
      { field: "Last Purchase", operator: "<", value: "30 days" },
    ],
    lastUpdated: "3 hours ago",
  },
  {
    id: 5,
    name: "New Leads - Instagram",
    description: "Leads from Instagram in last 14 days",
    count: 178,
    totalValue: "$0",
    avgValue: "$0",
    growth: "+45%",
    conditions: [
      { field: "Source", operator: "=", value: "Instagram" },
      { field: "Created Date", operator: "<", value: "14 days" },
      { field: "Status", operator: "=", value: "Lead" },
    ],
    lastUpdated: "1 hour ago",
  },
  {
    id: 6,
    name: "Enterprise Accounts",
    description: "Large organizations, contract value > $50K",
    count: 23,
    totalValue: "$1.8M",
    avgValue: "$78,261",
    growth: "+22%",
    conditions: [
      { field: "Account Type", operator: "=", value: "Enterprise" },
      { field: "Contract Value", operator: ">", value: "$50,000" },
    ],
    lastUpdated: "6 hours ago",
  },
];

export default function Segmentation() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Segmentation</h1>
            <p className="text-muted-foreground">
              Dynamic customer segments based on behavior and attributes
            </p>
          </div>
          <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="w-4 h-4" />
            Create Segment
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="p-5 bg-card border-border">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Filter className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">{segments.length}</p>
          <p className="text-sm text-muted-foreground">Active Segments</p>
        </Card>

        <Card className="p-5 bg-card border-border">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">
            {segments.reduce((sum, s) => sum + s.count, 0).toLocaleString()}
          </p>
          <p className="text-sm text-muted-foreground">Total Contacts</p>
        </Card>

        <Card className="p-5 bg-card border-border">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">$6.7M</p>
          <p className="text-sm text-muted-foreground">Total Value</p>
        </Card>

        <Card className="p-5 bg-card border-border">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">+15%</p>
          <p className="text-sm text-muted-foreground">Avg Growth</p>
        </Card>
      </div>

      {/* Segments Grid */}
      <div className="space-y-4">
        {segments.map((segment) => (
          <Card
            key={segment.id}
            className="p-6 bg-card border-border hover:bg-secondary/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">{segment.name}</h3>
                  <Badge
                    variant="secondary"
                    className={
                      segment.growth.startsWith("+")
                        ? "bg-primary/20 text-primary"
                        : "bg-destructive/20 text-destructive"
                    }
                  >
                    {segment.growth}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{segment.description}</p>

                {/* Conditions */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {segment.conditions.map((condition, index) => (
                    <Badge key={index} variant="secondary" className="bg-secondary text-foreground">
                      {condition.field} {condition.operator} {condition.value}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="text-right">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-4 gap-4 pt-4 border-t border-border">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Contacts</span>
                </div>
                <p className="text-lg font-bold text-foreground">{segment.count}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Total Value</span>
                </div>
                <p className="text-lg font-bold text-foreground">{segment.totalValue}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Avg Value</span>
                </div>
                <p className="text-lg font-bold text-foreground">{segment.avgValue}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Updated</span>
                </div>
                <p className="text-sm text-muted-foreground">{segment.lastUpdated}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
