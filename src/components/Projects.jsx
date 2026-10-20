import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">My Work</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Applications and systems I've built, from AI-powered solutions to backend APIs.
          </p>
        </div>

        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <article
              key={project.id}
              className={`project-card glass-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-card-header">
                <div>
                  <span className="project-number">Project {String(project.id).padStart(2, '0')}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-date">{project.date}</p>
                </div>
                {project.link && project.link.trim() !== '' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-arrow"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                )}
              </div>

              <div className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="project-highlight">
                    <div className="project-highlight-dot"></div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="project-techs">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
