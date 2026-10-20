import { Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Career Path</p>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="timeline">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-node"></div>
              <div className="timeline-card glass-card">
                <span className="timeline-role">{exp.role}</span>
                <h3 className="timeline-company">{exp.company}</h3>
                <p className="timeline-org">{exp.organization}</p>
                <div className="timeline-meta">
                  <span><Calendar size={14} /> {exp.date}</span>
                  <span><MapPin size={14} /> {exp.location}</span>
                </div>
                <div className="timeline-responsibilities">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="timeline-responsibility">
                      <div className="project-highlight-dot"></div>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
