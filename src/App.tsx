
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollProgressIndicator from "./components/ScrollProgressIndicator";
import BackToTop from "./components/BackToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Unified Catalog
import Catalog from "./pages/Catalog";

// Main pages
import Brand from "./pages/Brand";
import Contact from "./pages/Contact";

// Blog pages
import UsefulTips from "./pages/blog/UsefulTips";
import InterestingArticles from "./pages/blog/InterestingArticles";
import NewProducts from "./pages/blog/NewProducts";
import Updates from "./pages/blog/Updates";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollProgressIndicator />
      <BackToTop />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Unified Catalog Route */}
          <Route path="/catalog" element={<Catalog />} />
          
          {/* Main Pages */}
          <Route path="/brand" element={<Brand />} />
          
          {/* Contact Route */}
          <Route path="/contact" element={<Contact />} />
          
          {/* Blog Routes */}
          <Route path="/blog/useful-tips" element={<UsefulTips />} />
          <Route path="/blog/interesting-articles" element={<InterestingArticles />} />
          <Route path="/blog/new-products" element={<NewProducts />} />
          <Route path="/blog/updates" element={<Updates />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
