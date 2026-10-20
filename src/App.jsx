import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import SpecializationCards from './components/SpecializationCards';
import InfoBar from './components/InfoBar';
import ScrollIndicator from './components/ScrollIndicator';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Publication from './components/Publication';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Background Effects */}
      <div className="bg-effects" aria-hidden="true">
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
        <div className="bg-gradient-3"></div>
        <div className="bg-grid"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Tech Stack Strip */}
        <TechStack />

        {/* Specialization Cards */}
        <SpecializationCards />

        {/* Info Bar */}
        <InfoBar />

        {/* Scroll Indicator */}
        <ScrollIndicator />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Education Section */}
        <Education />

        {/* Publication Section */}
        <Publication />

        {/* Certifications Section */}
        <Certifications />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
