import "./Navbar.css";

function Navbar({ content, language, setLanguage }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">My Portfolio</div>
        <div className="navbar-links">
          {content.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.text}
            </a>
          ))}
        </div>

        <div className="language-switch">
          <button
            className={language === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>

          <span>/</span>

          <button
            className={language === "ja" ? "active" : ""}
            onClick={() => setLanguage("ja")}
          >
            日本語
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
