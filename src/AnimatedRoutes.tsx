import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Experience from "./pages/experience/Experience";
import Capsules from "./pages/capsules/Capsules";
import Contact from "./pages/contact/Contact";
import Archive from "./pages/archive/Archive";
import { AnimatePresence } from 'framer-motion'


function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <div className="content flex-col">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/capsules" element={<Capsules />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
