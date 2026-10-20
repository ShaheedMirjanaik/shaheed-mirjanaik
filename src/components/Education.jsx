import { GraduationCap, BookOpen, School } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

const icons = [GraduationCap, BookOpen, School];

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="section education" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Academic Background</p>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="education-grid">
          {portfolioData.education.map((edu, index) => {
            const Icon = icons[index] || GraduationCap;
            return (
              <div key={index} className="education-card glass-card">
                <div className="education-icon">
                  <Icon size={24} />
                </div>
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-location">{edu.location}</p>
                <p className="education-date">{edu.date}</p>
                <span className="education-grade">{edu.grade}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
