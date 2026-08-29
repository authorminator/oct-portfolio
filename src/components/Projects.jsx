import portfolioContent from "../contents";
import "./Projects.css";

function Projects({ content }) {
  const { projects } = content.portfolio;

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="projects-heading">Projects</h2>
          <div className="section-divider" />
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>
                <p className="project-description">
                  {project.more_description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tech">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="link-primary"
                    >
                      Visit
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="link-secondary"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
