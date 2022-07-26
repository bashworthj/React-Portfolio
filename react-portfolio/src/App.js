import React from "react";
import './App.css';
import Home from "./Views/Home/home";
import About from "./Views/About/about";
import Projects from "./Views/Projects/projects";
import Resume from "./Views/Resume/resume";
import Footer from "./Views/Footer/footer";


function App() {
  return (
    <div className="App">
        
        <Home />
        <Projects />
        <About />
        <Resume />
        <Footer />
        

    </div>
  );
}

export default App;
