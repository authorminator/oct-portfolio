import "./Projects.css";
import portfolioContent from "../contents";

export default function Projects() {
  const projects = portfolioContent.portfolio.projects;

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="projects-heading">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card ${
                index % 2 === 1 ? "reverse-layout" : ""
              }`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    className="btn-view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
