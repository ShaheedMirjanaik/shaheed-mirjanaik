import { Code2, Layers, Brain, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  code: Code2,
  layers: Layers,
  brain: Brain,
};

export default function SpecializationCards() {
  return (
    <section className="specializations hero-animate hero-animate-7" aria-label="Areas of Specialization">
      <div className="container">
        <div className="specializations-grid">
          {portfolioData.specializations.map((spec, index) => {
            const Icon = iconMap[spec.icon];
            return (
              <div key={index} className="spec-card glass-card">
                <div className="spec-card-icon">
                  <Icon size={24} />
                </div>
                <div className="spec-card-content">
                  <h3 className="spec-card-title">{spec.title}</h3>
                  <p className="spec-card-description">{spec.description}</p>
                </div>
                <div className="spec-card-arrow" aria-hidden="true">
                  <ArrowRight size={16} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
