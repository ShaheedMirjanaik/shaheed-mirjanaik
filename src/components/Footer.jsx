import { Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-left">
          © 2026 {portfolioData.name}
        </div>
        <div className="footer-center">
          <span className="footer-role">{portfolioData.role}</span>
          <span className="footer-built">Built with React</span>
        </div>
        <div className="footer-social">
          <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${portfolioData.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
