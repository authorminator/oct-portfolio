import portfolioContent from "../contents";
import "./About.css";

function About({ content }) {
  const { about } = content;

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="about-heading">{about.title}</h2>
          <div className="section-divider" />
        </div>

        <div className="about-text">
          <p className="about-intro">{about.intro}</p>

          <p className="about-description">{about.description}</p>
        </div>

        <div className="skills-grid">
          {about.skills?.map((skill) => (
            <div key={skill.category} className="skill-card">
              <h3>{skill.category}</h3>

              <div className="skill-badges">
                {skill.technologies.map((tech) => (
                  <span key={tech.name} className="skill-badge">
                    {tech.icon && <i className={tech.icon}></i>}
                    <span> {tech.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
