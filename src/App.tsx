
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PortfolioDetails from "./pages/PortfolioDetails";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DrewVerse Design | Creative Digital Agency</title>
        <meta name="description" content="We create exceptional digital experiences that help businesses thrive in the digital age." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://drewversedesign.online" />
      </Helmet>
      <ScrollToTopOnMount />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
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
