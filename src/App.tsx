
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogPost from "./pages/BlogPost";
import PortfolioDetails from "./pages/PortfolioDetails";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTopOnMount />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/portfolio/:id" element={<PortfolioDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
