import { ArrowRight, Mail } from 'lucide-react';
import profileImg from '../assets/profile/profile.png';

export default function Hero() {
  const handleScroll = (e, target) => {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <p className="hero-eyebrow hero-animate hero-animate-1">SOFTWARE DEVELOPER</p>
            <h1 className="hero-heading hero-animate hero-animate-2">
              <span className="greeting">Hi, I'm</span>
              <span className="name">Shaheed Mirjanaik</span>
            </h1>
            <p className="hero-description hero-animate hero-animate-3">
              Software Developer with hands-on experience in Java, Spring Boot,
              REST APIs, MySQL, Python, Flask, and React.js. I love building
              scalable applications, solving real-world problems, and exploring
              AI-powered solutions.
            </p>
            <div className="hero-cta hero-animate hero-animate-4">
              <a href="#projects" className="btn btn-primary" onClick={(e) => handleScroll(e, '#projects')}>
                View My Projects <ArrowRight size={18} className="arrow" />
              </a>
              <a href="#contact" className="btn btn-secondary" onClick={(e) => handleScroll(e, '#contact')}>
                <Mail size={18} /> Contact Me
              </a>
            </div>
          </div>

          <div className="hero-right hero-animate hero-animate-5">
            <div className="profile-visual">
              <div className="profile-glow"></div>
              <div className="profile-ring profile-ring-1"></div>
              <div className="profile-ring profile-ring-2"></div>
              <div className="profile-image-wrapper">
                <img src={profileImg} alt="Shaheed Mirjanaik - Software Developer" loading="eager" />
              </div>
              <div className="floating-card floating-card-1">
                <div className="floating-card-title">
                  <span className="dot"></span> Clean Code
                </div>
                <div className="floating-card-items">
                  Scalable Systems<br />Real Impact
                </div>
              </div>
              <div className="floating-card floating-card-2">
                <div className="floating-card-code">&lt;/&gt;</div>
                <div className="floating-card-text">
                  Turning ideas<br />into real-world<br />applications
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
