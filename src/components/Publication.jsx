import { FileText, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Publication() {
  const ref = useScrollReveal();

  return (
    <section className="section publication" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Research</p>
          <h2 className="section-title">Publication</h2>
        </div>

        <div className="publication-card glass-card">
          <div className="publication-icon">
            <FileText size={28} />
          </div>
          <div className="publication-card-header">
            <div>
              <h3 className="publication-title">{portfolioData.publication.title}</h3>
              <p className="publication-date">{portfolioData.publication.date}</p>
            </div>
            {portfolioData.publication.link && portfolioData.publication.link.trim() !== '' && (
              <a
                href={portfolioData.publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-arrow"
                aria-label="Open publication"
              >
                <ArrowUpRight size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
