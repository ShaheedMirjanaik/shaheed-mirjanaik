import { Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section className="section certifications" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Achievements</p>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="certifications-grid">
          {portfolioData.certifications.map((cert, index) => (
            <div key={index} className="cert-card glass-card">
              <div className="cert-icon">
                <Award size={22} />
              </div>
              <div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-date">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
