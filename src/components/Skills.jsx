import { Code2, Server, Monitor, Database, Wrench, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

const categoryIcons = {
  'Languages & Query': Code2,
  'Backend': Server,
  'Frontend': Monitor,
  'Databases': Database,
  'Tools': Wrench,
  'Computer Science': BookOpen,
};

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Technical Expertise</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies and tools I work with, grounded in strong computer science fundamentals.
          </p>
        </div>

        <div className="skills-grid">
          {Object.entries(portfolioData.skills).map(([category, skills]) => {
            const Icon = categoryIcons[category] || Code2;
            return (
              <div key={category} className="skill-category glass-card">
                <h3 className="skill-category-title">
                  <Icon size={18} className="skill-category-icon" />
                  {category}
                </h3>
                <div className="skill-tags">
                  {skills.map((skill) => (
                    <span key={skill} className="tech-pill">{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
