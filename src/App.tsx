
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Catalog pages
import ModernMinimal from "./pages/catalog/ModernMinimal";
import WabiHarmony from "./pages/catalog/WabiHarmony";
import NordicCalm from "./pages/catalog/NordicCalm";
import UrbanEdge from "./pages/catalog/UrbanEdge";
import ElegantHome from "./pages/catalog/ElegantHome";
import ModularMovement from "./pages/catalog/ModularMovement";
import CoastalBreeze from "./pages/catalog/CoastalBreeze";
import VintageRevival from "./pages/catalog/VintageRevival";

// Main pages
import Brand from "./pages/Brand";
import CustomProduction from "./pages/CustomProduction";
import Imports from "./pages/Imports";

// Blog pages
import UsefulTips from "./pages/blog/UsefulTips";
import InterestingArticles from "./pages/blog/InterestingArticles";
import NewProducts from "./pages/blog/NewProducts";
import Updates from "./pages/blog/Updates";

// Contact pages
import PhoneNumber from "./pages/contact/PhoneNumber";
import EmailAddress from "./pages/contact/EmailAddress";
import ContactForm from "./pages/contact/ContactForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Catalog Routes */}
          <Route path="/catalog/modern-minimal" element={<ModernMinimal />} />
          <Route path="/catalog/wabi-harmony" element={<WabiHarmony />} />
          <Route path="/catalog/nordic-calm" element={<NordicCalm />} />
          <Route path="/catalog/urban-edge" element={<UrbanEdge />} />
          <Route path="/catalog/elegant-home" element={<ElegantHome />} />
          <Route path="/catalog/modular-movement" element={<ModularMovement />} />
          <Route path="/catalog/coastal-breeze" element={<CoastalBreeze />} />
          <Route path="/catalog/vintage-revival" element={<VintageRevival />} />
          
          {/* Main Pages */}
          <Route path="/brand" element={<Brand />} />
          <Route path="/custom" element={<CustomProduction />} />
          <Route path="/imports" element={<Imports />} />
          
          {/* Collections (same as catalog) */}
          <Route path="/collections/modern-minimal" element={<ModernMinimal />} />
          <Route path="/collections/wabi-harmony" element={<WabiHarmony />} />
          <Route path="/collections/nordic-calm" element={<NordicCalm />} />
          <Route path="/collections/urban-edge" element={<UrbanEdge />} />
          <Route path="/collections/elegant-home" element={<ElegantHome />} />
          <Route path="/collections/modular-movement" element={<ModularMovement />} />
          <Route path="/collections/coastal-breeze" element={<CoastalBreeze />} />
          <Route path="/collections/vintage-revival" element={<VintageRevival />} />
          
          {/* Blog Routes */}
          <Route path="/blog/useful-tips" element={<UsefulTips />} />
          <Route path="/blog/interesting-articles" element={<InterestingArticles />} />
          <Route path="/blog/new-products" element={<NewProducts />} />
          <Route path="/blog/updates" element={<Updates />} />
          
          {/* Contact Routes */}
          <Route path="/contact/phone" element={<PhoneNumber />} />
          <Route path="/contact/email" element={<EmailAddress />} />
          <Route path="/contact/form" element={<ContactForm />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
