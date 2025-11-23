import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  Download,
  Plus,
  MoreVertical,
  Calendar,
  MapPin,
  DollarSign,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const transactions = [
  {
    id: "TXN001",
    date: "2024-01-15",
    customer: "John Smith",
    channel: "Instagram",
    product: "Product A",
    region: "Jakarta",
    amount: 1500,
    status: "Completed",
  },
  {
    id: "TXN002",
    date: "2024-01-14",
    customer: "Sarah Johnson",
    channel: "Website",
    product: "Product B",
    region: "Surabaya",
    amount: 2300,
    status: "Completed",
  },
  {
    id: "TXN003",
    date: "2024-01-14",
    customer: "Mike Wilson",
    channel: "Referral",
    product: "Product A",
    region: "Bandung",
    amount: 1800,
    status: "Pending",
  },
  {
    id: "TXN004",
    date: "2024-01-13",
    customer: "Emily Davis",
    channel: "Email",
    product: "Product C",
    region: "Jakarta",
    amount: 950,
    status: "Completed",
  },
  {
    id: "TXN005",
    date: "2024-01-13",
    customer: "Robert Brown",
    channel: "Instagram",
    product: "Product D",
    region: "Medan",
    amount: 3200,
    status: "Completed",
  },
  {
    id: "TXN006",
    date: "2024-01-12",
    customer: "Lisa Anderson",
    channel: "Website",
    product: "Product B",
    region: "Surabaya",
    amount: 2100,
    status: "Failed",
  },
];

const savedViews = [
  "All Transactions",
  "High Value Deals",
  "Instagram Leads",
  "Pending Orders",
  "This Month",
];

export default function DataExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedView, setSelectedView] = useState("All Transactions");

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Data Explorer</h1>
        <p className="text-muted-foreground">
          Explore and analyze all interactions, transactions, and leads
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1 flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search transactions, customers, products..."
              className="pl-10 bg-secondary border-border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export CSV
          </Button>
          <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="w-4 h-4" />
            New Entry
          </Button>
        </div>
      </div>

      {/* Saved Views */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {savedViews.map((view) => (
          <Button
            key={view}
            variant={selectedView === view ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedView(view)}
            className={
              selectedView === view
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : ""
            }
          >
            {view}
          </Button>
        ))}
      </div>

      {/* Data Table */}
      <Card className="bg-card border-border">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-foreground font-semibold">Transaction ID</TableHead>
              <TableHead className="text-foreground font-semibold">Date</TableHead>
              <TableHead className="text-foreground font-semibold">Customer</TableHead>
              <TableHead className="text-foreground font-semibold">Channel</TableHead>
              <TableHead className="text-foreground font-semibold">Product</TableHead>
              <TableHead className="text-foreground font-semibold">Region</TableHead>
              <TableHead className="text-foreground font-semibold">Amount</TableHead>
              <TableHead className="text-foreground font-semibold">Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id} className="border-border hover:bg-secondary/50">
                <TableCell className="font-medium text-primary">{transaction.id}</TableCell>
                <TableCell className="text-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    {transaction.date}
                  </div>
                </TableCell>
                <TableCell className="text-foreground">{transaction.customer}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-secondary text-foreground">
                    {transaction.channel}
                  </Badge>
                </TableCell>
                <TableCell className="text-foreground">{transaction.product}</TableCell>
                <TableCell className="text-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    {transaction.region}
                  </div>
                </TableCell>
                <TableCell className="text-foreground font-semibold">
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4 text-primary" />
                    {transaction.amount.toLocaleString()}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={
                      transaction.status === "Completed"
                        ? "bg-primary/20 text-primary"
                        : transaction.status === "Pending"
                        ? "bg-chart-2/20 text-chart-2"
                        : "bg-destructive/20 text-destructive"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <Card className="p-4 bg-card border-border">
          <p className="text-sm text-muted-foreground mb-1">Total Transactions</p>
          <p className="text-2xl font-bold text-foreground">{transactions.length}</p>
        </Card>
        <Card className="p-4 bg-card border-border">
          <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
          <p className="text-2xl font-bold text-foreground">
            ${transactions.reduce((sum, t) => sum + t.amount, 0).toLocaleString()}
          </p>
        </Card>
        <Card className="p-4 bg-card border-border">
          <p className="text-sm text-muted-foreground mb-1">Avg Transaction</p>
          <p className="text-2xl font-bold text-foreground">
            $
            {Math.round(
              transactions.reduce((sum, t) => sum + t.amount, 0) / transactions.length
            ).toLocaleString()}
          </p>
        </Card>
        <Card className="p-4 bg-card border-border">
          <p className="text-sm text-muted-foreground mb-1">Completion Rate</p>
          <p className="text-2xl font-bold text-foreground">
            {Math.round(
              (transactions.filter((t) => t.status === "Completed").length /
                transactions.length) *
                100
            )}
            %
          </p>
        </Card>
      </div>
    </div>
  );
}
