import { Lightbulb, PenTool, Code2, Database, TestTube, CheckCircle, ArrowDown } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const processSteps = [
  { icon: Lightbulb, label: 'Problem' },
  { icon: PenTool, label: 'Design' },
  { icon: Code2, label: 'Development' },
  { icon: Database, label: 'API / Database' },
  { icon: TestTube, label: 'Testing' },
  { icon: CheckCircle, label: 'Solution' },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Get to Know Me</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Building Reliable Software Solutions</h3>
            <p>
              I'm a Software Developer with hands-on experience in Java, Spring Boot, REST APIs, and MySQL.
              My work spans backend application development, database-driven systems, and full-stack projects
              using Python, Flask, and React.js.
            </p>
            <p>
              With a strong foundation in object-oriented programming, data structures, and DBMS, I focus on
              writing clean, maintainable code and building scalable applications. I've also explored
              AI-powered applications — including XAI-MedTrack for Alzheimer's detection — and gained
              experience in automation and robotics during my internship.
            </p>
            <p>
              I enjoy solving real-world problems through software and am always eager to learn and
              take on new challenges in development.
            </p>
          </div>

          <div className="about-diagram">
            <div className="process-flow">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.label}>
                    <div className="process-step">
                      <div className="process-step-icon">
                        <Icon size={20} />
                      </div>
                      <span className="process-step-label">{step.label}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="process-arrow">
                        <ArrowDown size={16} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
