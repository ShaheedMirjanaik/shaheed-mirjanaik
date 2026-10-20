import { Mail, MapPin, Phone } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <div className="contact-content">
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="contact-heading">
            Let's <span className="gradient-text">Build Something</span>
          </h2>
          <p className="contact-subtext">
            I'm open to opportunities, collaborations, and interesting software development projects.
          </p>

          <div className="contact-grid">
            <div className="contact-item glass-card">
              <div className="contact-item-icon">
                <Mail size={22} />
              </div>
              <div>
                <p className="contact-item-label">Email</p>
                <p className="contact-item-value">
                  <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
                </p>
              </div>
            </div>

            <div className="contact-item glass-card">
              <div className="contact-item-icon">
                <Phone size={22} />
              </div>
              <div>
                <p className="contact-item-label">Phone</p>
                <p className="contact-item-value">
                  <a href={`tel:${portfolioData.phone}`}>{portfolioData.phone}</a>
                </p>
              </div>
            </div>

            <div className="contact-item glass-card">
              <div className="contact-item-icon">
                <MapPin size={22} />
              </div>
              <div>
                <p className="contact-item-label">Location</p>
                <p className="contact-item-value">{portfolioData.location}</p>
              </div>
            </div>

            <div className="contact-item glass-card">
              <div className="contact-item-icon">
                <Github size={22} />
              </div>
              <div>
                <p className="contact-item-label">GitHub</p>
                <p className="contact-item-value">
                  <a href={portfolioData.github} target="_blank" rel="noopener noreferrer">github.com/ShaheedMirjanaik</a>
                </p>
              </div>
            </div>
          </div>

          <div className="contact-social">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              aria-label="GitHub Profile"
            >
              <Github size={22} />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="contact-social-link"
              aria-label="Send Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
