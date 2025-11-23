import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Phone,
  Mail,
  MapPin,
  MoreVertical,
  Video,
  Menu,
  X,
} from "lucide-react";

interface Contact {
  id: number;
  name: string;
  email: string;
  company: string;
  status: "New Lead" | "Active" | "Inactive";
  phone: string;
  address: string;
  dateCreated: string;
  ltv: string;
  avatar: string;
  type: "contact" | "lead" | "task";
}

const contacts: Contact[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    company: "Amazon art Inc.",
    status: "New Lead",
    phone: "(301) 555-0114",
    address: "4517 Washington Ave. Manchester, Kentucky 39495",
    dateCreated: "October 23, 2023",
    ltv: "$15,000",
    avatar: "JS",
    type: "lead",
  },
  {
    id: 2,
    name: "Bessie Cooper",
    email: "bessie.cooper@example.com",
    company: "Acme Enterprises",
    status: "Active",
    phone: "(302) 555-0115",
    address: "2231 Kidd Avenue, Anchorage",
    dateCreated: "September 15, 2023",
    ltv: "$32,000",
    avatar: "BC",
    type: "contact",
  },
  {
    id: 3,
    name: "Floyd Miles",
    email: "floyd.miles@example.com",
    company: "Cameron Williamson",
    status: "Active",
    phone: "(303) 555-0116",
    address: "1234 Main Street, Boston",
    dateCreated: "August 10, 2023",
    ltv: "$28,500",
    avatar: "FM",
    type: "contact",
  },
  {
    id: 4,
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    company: "Esther Howard",
    status: "Active",
    phone: "(304) 555-0117",
    address: "5678 Oak Avenue, Seattle",
    dateCreated: "July 22, 2023",
    ltv: "$41,200",
    avatar: "KW",
    type: "contact",
  },
  {
    id: 5,
    name: "Marvin McKinney",
    email: "marvin.mckinney@example.com",
    company: "Cameron Williamson",
    status: "Inactive",
    phone: "(305) 555-0118",
    address: "9012 Pine Road, Portland",
    dateCreated: "June 5, 2023",
    ltv: "$18,700",
    avatar: "MM",
    type: "contact",
  },
];

const emails = [
  {
    id: 1,
    from: "Bessie Cooper",
    company: "Cameron Williamson",
    subject: "How to grow your business with our Crm",
    preview: "We can help you streamline your sales process...",
    time: "2h ago",
  },
  {
    id: 2,
    from: "Floyd Miles",
    company: "Cameron Williamson",
    subject: "Increase customer retention",
    preview: "A CRM can help you better understand your customers...",
    time: "4h ago",
  },
  {
    id: 3,
    from: "Kristin Watson",
    company: "Cameron Williamson",
    subject: "How to grow your business with our Crm",
    preview: "We can help you streamline your sales process...",
    time: "6h ago",
  },
];

export default function Contacts() {
  const [selectedContact, setSelectedContact] = useState<Contact>(contacts[0]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showEmails, setShowEmails] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Simulating URL search params with state (in real app, use useSearchParams from react-router)
  const [typeFilter, setTypeFilter] = useState<"contacts" | "leads" | "tasks">(
    "contacts"
  );
  const [statusFilter, setStatusFilter] = useState<
    "all" | "active" | "inactive" | "new-lead"
  >("all");

  // Filter contacts based on all criteria
  const filteredContacts = useMemo(() => {
    let result = contacts;

    // Type filter
    if (typeFilter === "contacts") {
      result = result.filter((c) => c.type === "contact");
    } else if (typeFilter === "leads") {
      result = result.filter((c) => c.type === "lead");
    } else if (typeFilter === "tasks") {
      result = result.filter((c) => c.type === "task");
    }

    // Status filter
    if (statusFilter === "active") {
      result = result.filter((c) => c.status === "Active");
    } else if (statusFilter === "inactive") {
      result = result.filter((c) => c.status === "Inactive");
    } else if (statusFilter === "new-lead") {
      result = result.filter((c) => c.status === "New Lead");
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.email.toLowerCase().includes(query) ||
          c.company.toLowerCase().includes(query)
      );
    }

    return result;
  }, [typeFilter, statusFilter, searchQuery]);

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-3 border-b border-border bg-card">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <Menu className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold">Contacts</h1>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setShowEmails(!showEmails)}
        >
          <Mail className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Contact List */}
        <div
          className={`${
            showSidebar ? "flex" : "hidden"
          } lg:flex w-full lg:w-64 xl:w-72 border-r border-border bg-card flex-col absolute lg:relative z-20 h-full`}
        >
          <div className="flex items-center justify-between p-3 lg:hidden border-b border-border">
            <h2 className="font-semibold">Contacts</h2>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setShowSidebar(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Search */}
          <div className="p-3 border-b border-border">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 h-9 text-sm bg-secondary border-border"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-3 px-3 py-2 border-b border-border">
            <button
              onClick={() => setTypeFilter("contacts")}
              className={`text-xs font-medium pb-1.5 border-b-2 transition-colors ${
                typeFilter === "contacts"
                  ? "text-foreground border-primary"
                  : "text-muted-foreground border-transparent"
              }`}
            >
              Contacts
            </button>
            <button
              onClick={() => setTypeFilter("leads")}
              className={`text-xs font-medium pb-1.5 border-b-2 transition-colors ${
                typeFilter === "leads"
                  ? "text-foreground border-primary"
                  : "text-muted-foreground border-transparent"
              }`}
            >
              Leads
            </button>
            <button
              onClick={() => setTypeFilter("tasks")}
              className={`text-xs font-medium pb-1.5 border-b-2 transition-colors ${
                typeFilter === "tasks"
                  ? "text-foreground border-primary"
                  : "text-muted-foreground border-transparent"
              }`}
            >
              Tasks
            </button>
          </div>

          {/* Status Filter */}
          <div className="flex flex-wrap gap-1.5 px-3 py-2 border-b border-border">
            <Button
              size="sm"
              variant={statusFilter === "all" ? "default" : "outline"}
              onClick={() => setStatusFilter("all")}
              className="h-7 text-xs"
            >
              All
            </Button>
            <Button
              size="sm"
              variant={statusFilter === "active" ? "default" : "outline"}
              onClick={() => setStatusFilter("active")}
              className="h-7 text-xs"
            >
              Active
            </Button>
            <Button
              size="sm"
              variant={statusFilter === "inactive" ? "default" : "outline"}
              onClick={() => setStatusFilter("inactive")}
              className="h-7 text-xs"
            >
              Inactive
            </Button>
            <Button
              size="sm"
              variant={statusFilter === "new-lead" ? "default" : "outline"}
              onClick={() => setStatusFilter("new-lead")}
              className="h-7 text-xs"
            >
              New Lead
            </Button>
          </div>

          {/* Contact List */}
          <div className="flex-1 overflow-auto">
            {filteredContacts.length === 0 ? (
              <div className="p-4 text-center text-sm text-muted-foreground">
                No contacts found
              </div>
            ) : (
              filteredContacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => {
                    setSelectedContact(contact);
                    setShowSidebar(false);
                  }}
                  className={`w-full p-3 border-b border-border text-left transition-colors hover:bg-secondary/50 ${
                    selectedContact.id === contact.id ? "bg-secondary" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-xs flex-shrink-0">
                      {contact.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-foreground truncate">
                        {contact.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {contact.company}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      contact.status === "New Lead" ? "default" : "secondary"
                    }
                    className={`text-xs ${
                      contact.status === "New Lead"
                        ? "bg-primary/20 text-primary hover:bg-primary/30"
                        : contact.status === "Active"
                        ? "bg-emerald-500/20 text-emerald-600"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {contact.status}
                  </Badge>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Middle Panel - Contact Details */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 lg:p-5 border-b border-border">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">
                  {selectedContact.avatar}
                </div>
                <div>
                  <h2 className="text-lg lg:text-xl font-bold text-foreground">
                    {selectedContact.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {selectedContact.company}
                  </p>
                  <Badge
                    variant="secondary"
                    className="mt-1.5 text-xs bg-primary/20 text-primary hover:bg-primary/30"
                  >
                    {selectedContact.status}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <Video className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex-1 overflow-auto p-4 lg:p-5">
            <Card className="p-4 lg:p-5 bg-card border-border mb-4">
              <h3 className="text-base font-semibold text-foreground mb-3">
                Contact Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Email
                    </p>
                    <p className="text-sm text-foreground break-all">
                      {selectedContact.email}
                    </p>
                    <Button
                      variant="link"
                      className="h-auto p-0 text-xs text-primary hover:text-primary/80"
                    >
                      Copy email
                    </Button>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Phone
                    </p>
                    <p className="text-sm text-foreground">
                      {selectedContact.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Address
                    </p>
                    <p className="text-sm text-foreground">
                      {selectedContact.address}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 lg:p-5 bg-card border-border">
              <h3 className="text-base font-semibold text-foreground mb-3">
                Details
              </h3>
              <div className="space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Date created
                  </span>
                  <span className="text-sm text-foreground">
                    {selectedContact.dateCreated}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Lifetime Value
                  </span>
                  <span className="text-sm text-foreground font-semibold">
                    {selectedContact.ltv}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Lead status
                  </span>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-primary/20 text-primary"
                  >
                    {selectedContact.status}
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Panel - Emails */}
        <div
          className={`${
            showEmails ? "flex" : "hidden"
          } lg:flex w-full lg:w-72 xl:w-80 border-l border-border bg-card flex-col absolute lg:relative z-20 h-full`}
        >
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold text-foreground">
                  Emails
                </h3>
                <span className="text-xs text-muted-foreground">(23)</span>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="lg:hidden h-8 w-8"
                onClick={() => setShowEmails(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-auto">
            {emails.map((email) => (
              <div
                key={email.id}
                className="p-3 border-b border-border hover:bg-secondary/50 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-xs flex-shrink-0">
                    {email.from
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">
                      {email.from}
                    </p>
                    <p className="text-xs text-muted-foreground mb-1.5">
                      {email.company}
                    </p>
                    <p className="font-medium text-sm text-foreground mb-1 line-clamp-1">
                      {email.subject}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {email.preview}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {email.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
