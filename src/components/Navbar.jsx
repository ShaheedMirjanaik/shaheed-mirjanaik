import { useState, useEffect } from 'react';
import { Mail, Download, X } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './SocialIcons';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container">
          <a href="#home" className="navbar-brand" onClick={(e) => handleNavClick(e, '#home')}>
            <div className="navbar-logo" aria-hidden="true">SM</div>
            <span>Shaheed Mirjanaik</span>
          </a>

          <div className="navbar-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={activeSection === link.href.slice(1) ? 'active' : ''}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="navbar-actions">
            <div className="navbar-social">
              <a href="https://github.com/ShaheedMirjanaik" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/shaheed-mirjanaik" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin size={20} />
              </a>
              <a href="mailto:shaheedrmirjanaik@gmail.com" aria-label="Send Email">
                <Mail size={20} />
              </a>
            </div>
            <a href="/resume.pdf" download className="navbar-resume-btn" aria-label="Download Resume">
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <button
            className={`hamburger ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <button className="hamburger active" onClick={() => setMobileOpen(false)} aria-label="Close menu" style={{ position: 'absolute', top: '20px', right: '24px' }}>
          <X size={28} />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={activeSection === link.href.slice(1) ? 'active' : ''}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.name}
          </a>
        ))}
        <div className="mobile-nav-social">
          <a href="https://github.com/ShaheedMirjanaik" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/shaheed-mirjanaik" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <Linkedin size={20} />
          </a>
          <a href="mailto:shaheedrmirjanaik@gmail.com" aria-label="Send Email">
            <Mail size={20} />
          </a>
        </div>
        <a href="/resume.pdf" download className="navbar-resume-btn" style={{ marginTop: '16px' }}>
          <Download size={16} />
          Download Resume
        </a>
      </div>
    </>
  );
}
