// import { useState } from 'react'
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Side from "./side/Side";
import AnimatedRoutes from "./AnimatedRoutes";
import SplashAnimation from "./utils/SplashAnimation";

function App() {
  return (
    <>
      <Router>
        <SplashAnimation>
          <Side />
          <AnimatedRoutes />
        </SplashAnimation>
      </Router>
    </>
  );
}

export default App;
