import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Jobs from "./pages/Jobs";
import CADGPT from "./pages/CADGPT";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import Shipping from "./pages/Shipping";
import Contact from "./pages/Contact";
import CadgptInfo from "./pages/CadgptInfo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/cadgpt" element={<CADGPT />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cadgptinfo" element={<CadgptInfo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
