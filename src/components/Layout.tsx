import {
  Home,
  Users,
  Database,
  FileBarChart,
  Lightbulb,
  Network,
  Plug,
  Settings,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Contacts", href: "/contacts", icon: Users },
  { name: "Data Explorer", href: "/data-explorer", icon: Database },
  { name: "Reports", href: "/reports", icon: FileBarChart },
  { name: "Insights", href: "/insights", icon: Lightbulb },
  { name: "Segmentation", href: "/segmentation", icon: Network },
  { name: "Integrations", href: "/integrations", icon: Plug },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 border-r border-sidebar-border bg-sidebar flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                BA
              </span>
            </div>
            <span className="font-bold text-lg text-sidebar-foreground">
              CRM
            </span>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-sidebar-foreground rounded-lg transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              activeClassName="bg-sidebar-accent text-primary"
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-sidebar-border">
          <NavLink
            to="/settings"
            className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-sidebar-foreground rounded-lg transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            activeClassName="bg-sidebar-accent text-primary"
          >
            <Settings className="w-5 h-5" />
            Settings
          </NavLink>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
