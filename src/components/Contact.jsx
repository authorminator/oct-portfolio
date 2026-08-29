import "./Contact.css";
import portfolioContent from "../contents";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact({ content }) {
  const { contact, footer } = content;

  return (
    <section id="contact">
      <div className="contact-layout">
        <div className="contact-card">
          <h1>Contact & Links</h1>
          <p>
            Email:{" "}
            <a href={`mailto:${contact.info?.[0]?.value}`}>
              {contact.info?.[0]?.value}
            </a>
          </p>
          <p>Location: {contact.info?.[1]?.value}</p>
          <div className="social-links">
            <a
              href={footer.socialLinks?.[0]?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={footer.socialLinks?.[1]?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
