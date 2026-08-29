import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import portfolioContent from "./contents";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="ambient-bg" aria-hidden />
      <Navbar />
      <header id="home" className="app-header">
        <div className="hero-container">
          <div className="hero-image">
            <img
              src={portfolioContent.personal.profileIcon}
              alt={`${portfolioContent.personal.name} profile`}
            />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">
              {portfolioContent.personal.name}{" "}
              {portfolioContent.personal.lastName}
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
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
