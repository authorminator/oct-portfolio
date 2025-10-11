import portfolioContent from "../contents";
import "./About.css";

function About() {
  const { about, contact, footer } = portfolioContent;

  return (
    <section id="about" className="about-section">
      <div className="container about-layout">
        {/* Photo + Text side-by-side */}
        <div className="about-top">
          <div className="about-photo">
            <img
              src={portfolioContent.personal?.profileIcon}
              alt={portfolioContent.personal?.name}
              className="profile-img"
            />
          </div>

          <div className="about-text">
            <h2 className="about-heading">{about.title}</h2>
            <p className="about-intro">{about.intro}</p>
            <p className="about-description">{about.description}</p>
          </div>
        </div>

        {/* Skill Cards */}
        <div className="skills-grid">
          {about.skills?.map((skill) => (
            <div key={skill.category} className="skill-card">
              <h3 className="skill-title">{skill.category}</h3>
              <div className="skill-badges">
                {skill.technologies.map((tech) => (
                  <span key={tech} className="skill-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact card */}
        <div className="contact-card">
          <h3>Contact & Links</h3>
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
              GitHub
            </a>
            <a
              href={footer.socialLinks?.[1]?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
