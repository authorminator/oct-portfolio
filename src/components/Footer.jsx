import portfolioContent from "../contents";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer({ content }) {
  const { footer } = content;

  return (
    <footer className="footer-section">
      <div className="footer-line" />

      <div className="footer-bar">
        {/* Left: Copyright */}
        <p className="footer-copy">{footer.copyright}</p>

        {/* Right: Icons */}
        <div className="footer-icons">
          {footer.socialLinks?.map((link) => {
            if (link.name.toLowerCase().includes("github")) {
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <FaGithub />
                </a>
              );
            }
            if (link.name.toLowerCase().includes("linkedin")) {
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <FaLinkedin />
                </a>
              );
            }
            return null;
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
