import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, Database, ShoppingBag, MessageSquare, Check } from "lucide-react";

const integrations = [
  {
    id: 1,
    name: "CSV Upload",
    description: "Import contacts, transactions, and leads from CSV files",
    icon: Upload,
    status: "available",
    category: "Data Import",
  },
  {
    id: 2,
    name: "POS System",
    description: "Connect your point-of-sale system for real-time sales data",
    icon: Database,
    status: "connected",
    category: "Sales",
    lastSync: "2 hours ago",
  },
  {
    id: 3,
    name: "E-commerce Platform",
    description: "Sync orders, customers, and products from your online store",
    icon: ShoppingBag,
    status: "available",
    category: "E-commerce",
  },
  {
    id: 4,
    name: "Chat Channels",
    description: "Connect WhatsApp, Telegram, or other messaging platforms",
    icon: MessageSquare,
    status: "available",
    category: "Communication",
  },
];

export default function Integrations() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Integrations</h1>
        <p className="text-muted-foreground">
          Connect your data sources and external platforms
        </p>
      </div>

      {/* Integration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {integrations.map((integration) => (
          <Card key={integration.id} className="p-6 bg-card border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <integration.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {integration.name}
                    </h3>
                    <Badge variant="secondary" className="bg-secondary text-foreground mb-2">
                      {integration.category}
                    </Badge>
                  </div>
                  {integration.status === "connected" && (
                    <Badge className="bg-primary/20 text-primary">
                      <Check className="w-3 h-3 mr-1" />
                      Connected
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {integration.description}
                </p>
                {integration.lastSync && (
                  <p className="text-xs text-muted-foreground mb-4">
                    Last synced: {integration.lastSync}
                  </p>
                )}
                <Button
                  variant={integration.status === "connected" ? "outline" : "default"}
                  className={
                    integration.status === "connected"
                      ? ""
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }
                >
                  {integration.status === "connected" ? "Configure" : "Connect"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* CSV Upload Section */}
      <Card className="mt-8 p-8 bg-card border-border border-dashed">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Quick CSV Upload</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Drag and drop your CSV file here or click to browse. Supported formats: contacts,
            transactions, leads.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Choose File
          </Button>
        </div>
      </Card>
    </div>
  );
}
