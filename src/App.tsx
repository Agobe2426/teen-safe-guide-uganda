
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ThemeDetail from "./pages/ThemeDetail";
import Quiz from "./pages/Quiz";
import QandA from "./pages/QandA";
import ParentArea from "./pages/ParentArea";
import NotFound from "./pages/NotFound";
import Learn from "./pages/Learn";
import Profile from "./pages/Profile";
import Offline from "./pages/Offline";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/theme/:themeId" element={<ThemeDetail />} />
          <Route path="/quiz/:quizId" element={<Quiz />} />
          <Route path="/qanda" element={<QandA />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offline" element={<Offline />} />
          <Route path="/parent" element={<ParentArea />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
