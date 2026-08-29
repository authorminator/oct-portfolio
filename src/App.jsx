import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import portfolioContentEn from "./contents";
import portfolioContentJa from "./content.ja";
import "./App.css";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");

  const content = language === "en" ? portfolioContentEn : portfolioContentJa;

  return (
    <div className="app-container">
      <div className="ambient-bg" aria-hidden />
      <Navbar content={content} language={language} setLanguage={setLanguage} />
      <header id="home" className="app-header">
        <div className="hero-container">
          <div className="hero-image">
            <img
              src={content.personal.profileIcon}
              alt={`${content.personal.name} profile`}
            />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">
              {content.personal.name} {content.personal.lastName}
            </h1>

            <h2 className="hero-role">Web Developer in Tokyo</h2>

            <p className="hero-subtitle">
              I build clean, interactive, and modern web apps using{" "}
              <strong>Ruby on Rails</strong>.<br /> I also use Javascript-based
              frameworks/libraries such as <strong>React</strong>.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="hero-button primary">
                View Projects
              </a>

              <a href="#contact" className="hero-button secondary">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="header-line" />

      <main className="main-content">
        <About content={content} />
        <Projects content={content} />
        <Contact content={content} />
      </main>

      <Footer content={content} />
    </div>
  );
}

export default App;
