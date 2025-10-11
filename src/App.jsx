import { useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Tabs from "./components/Tabs";
import portfolioContent from "./contents";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="app-container">
      <div className="ambient-bg" aria-hidden />
      <header className="app-header">
        <div className="hero-content">
          <p className="hero-eyebrow">Web Developer in Tokyo</p>
          <h1 className="hero-title">
            <span className="underline">{portfolioContent.personal.name}</span>{" "}
            {portfolioContent.personal.lastName}
          </h1>
          <p className="hero-subtitle">
            I build clean, interactive, and modern web apps using{" "}
            <strong>Rails</strong> & <strong>React</strong>.
          </p>

          <div className="hero-tabs">
            <Tabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tab1={{ key: "about", label: "About Me" }}
              tab2={{ key: "projects", label: "Projects" }}
            />
          </div>
        </div>
      </header>

      <main className="main-content">
        {activeTab === "about" ? <About /> : <Projects />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
