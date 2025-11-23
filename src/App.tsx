import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Contacts from "./pages/Contacts";
import DataExplorer from "./pages/DataExplorer";
import Reports from "./pages/Reports";
import Insights from "./pages/Insights";
import Segmentation from "./pages/Segmentation";
import Integrations from "./pages/Integrations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/contacts"
            element={
              <Layout>
                <Contacts />
              </Layout>
            }
          />
          <Route
            path="/data-explorer"
            element={
              <Layout>
                <DataExplorer />
              </Layout>
            }
          />
          <Route
            path="/reports"
            element={
              <Layout>
                <Reports />
              </Layout>
            }
          />
          <Route
            path="/insights"
            element={
              <Layout>
                <Insights />
              </Layout>
            }
          />
          <Route
            path="/segmentation"
            element={
              <Layout>
                <Segmentation />
              </Layout>
            }
          />
          <Route
            path="/integrations"
            element={
              <Layout>
                <Integrations />
              </Layout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
