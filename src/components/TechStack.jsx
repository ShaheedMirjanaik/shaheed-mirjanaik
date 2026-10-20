export default function TechStack() {
  const technologies = [
    {
      name: 'Java',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.4 28.9s-1.6.9.6 1.2c2.7.4 4.1.3 7-.3 0 0 .8.5 1.9.9-6.7 2.9-15.2-.2-9.5-1.8zM16.3 25.1s-1.8 1.3.5 1.6c3 .4 5.2.4 9.1-.5 0 0 .5.6 1.3.8-8.1 2.4-17.2.2-10.9-1.9z" fill="#5382A1"/>
          <path d="M23.4 18.3c1.5 1.8-.4 3.4-.4 3.4s3.9-2 2.1-4.5c-1.7-2.3-3-3.5 4-7.5 0 0-11 2.7-5.7 8.6z" fill="#E76F00"/>
          <path d="M33.5 31.5s1.2 1-1.3 1.7c-4.7 1.3-19.5 1.7-23.6.1-1.5-.6 1.3-1.4 2.2-1.6.9-.2 1.4-.1 1.4-.1-1.6-1.1-10.5 2.2-4.5 3.2 16.3 2.6 29.7-1.2 25.8-3.3zM18.1 21.1s-7.4 1.8-2.6 2.4c2 .3 6-.1 9.8-.6 3-.4 6.1-1.3 6.1-1.3s-1.1.5-1.8.9c-7.4 1.9-21.7 1-17.6-.9 3.5-1.6 6.1-.5 6.1-.5zM30.1 27.4c7.5-3.9 4-7.7 1.6-7.2-.6.1-.9.2-.9.2s.2-.4.7-.5c5-1.8 8.9 5.2-1.5 8-.1 0 .1-.1.1-.5z" fill="#5382A1"/>
          <path d="M25.8 2s4.2 4.2-4 10.6c-6.5 5.2-1.5 8.1 0 11.5-3.8-3.4-6.6-6.4-4.7-9.2 2.7-4.1 10.3-6.1 8.7-12.9z" fill="#E76F00"/>
          <path d="M18.6 44.8c7.2.5 18.3-.3 18.6-3.7 0 0-.5 1.3-5.9 2.3-6.1 1.1-13.7 1-18.2.3 0 0 .9.8 5.5 1.1z" fill="#5382A1"/>
        </svg>
      ),
    },
    {
      name: 'Python',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.7 4C13.5 4 14.3 8.5 14.3 8.5l.1 4.6h9.6v1.4H12.3S6 13.8 6 24.2c0 10.4 5.5 10 5.5 10h3.3v-4.8s-.2-5.5 5.4-5.5h9.3s5.2.1 5.2-5V10.2S35.5 4 23.7 4zM18.8 7.5c1 0 1.7.8 1.7 1.7 0 1-.8 1.7-1.7 1.7-1 0-1.7-.8-1.7-1.7 0-1 .8-1.7 1.7-1.7z" fill="#3776AB"/>
          <path d="M24.3 44c10.2 0 9.4-4.5 9.4-4.5l-.1-4.6h-9.6v-1.4h11.7S42 34.2 42 23.8c0-10.4-5.5-10-5.5-10h-3.3v4.8s.2 5.5-5.4 5.5h-9.3s-5.2-.1-5.2 5v8.7S12.5 44 24.3 44zm4.9-3.5c-1 0-1.7-.8-1.7-1.7 0-1 .8-1.7 1.7-1.7 1 0 1.7.8 1.7 1.7 0 1-.8 1.7-1.7 1.7z" fill="#FFD43B"/>
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="40" height="40" rx="2" fill="#F7DF1E"/>
          <path d="M13.5 35.6l3.1-1.9c.6 1.1 1.1 2 2.4 2 1.2 0 2-.5 2-2.3V20.8h3.9v12.7c0 3.8-2.2 5.5-5.5 5.5-3 0-4.7-1.5-5.9-3.4zM27.6 35l3.1-1.8c.8 1.3 1.8 2.3 3.7 2.3 1.5 0 2.5-.8 2.5-1.8 0-1.3-.9-1.7-2.6-2.5l-.9-.4c-2.6-1.1-4.3-2.5-4.3-5.4 0-2.7 2-4.7 5.2-4.7 2.3 0 3.9.8 5.1 2.8l-2.8 1.8c-.6-1.1-1.3-1.5-2.3-1.5-1 0-1.7.7-1.7 1.5 0 1.1.7 1.5 2.2 2.1l.9.4c3.1 1.3 4.8 2.6 4.8 5.6 0 3.2-2.5 5-5.9 5-3.3 0-5.4-1.6-6.4-3.6z" fill="#323330"/>
        </svg>
      ),
    },
    {
      name: 'Spring Boot',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.4 8.3C38.3 3.7 31.8 4.1 31.8 4.1S29.6 10 24.5 13.2C19.7 16.2 16 14.7 11 18.7c-6.5 5.2-4.5 14.2-4.5 14.2S8 27.5 13.2 24.6c3.3-1.8 5.8-.4 9.3-2.7 4.7-3.2 6-9.6 6-9.6s2.4 4.1-.9 9.5c-2.2 3.6-6.6 4.8-8.9 7.6-2.7 3.3-1 7.3-1 7.3s3.6-3.3 6.3-4.2c3.8-1.3 5.2 1.3 9.5-.4 5.8-2.4 8-10.5 8-10.5s-2.7 4-6.8 5.7c-2.6 1.1-4.7-.2-7.3 1.1" fill="#6DB33F"/>
          <circle cx="33" cy="13" r="2" fill="#6DB33F"/>
        </svg>
      ),
    },
    {
      name: 'React.js',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="4.2" fill="#61DAFB"/>
          <ellipse cx="24" cy="24" rx="20" ry="8" stroke="#61DAFB" strokeWidth="2" fill="none"/>
          <ellipse cx="24" cy="24" rx="20" ry="8" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(60 24 24)"/>
          <ellipse cx="24" cy="24" rx="20" ry="8" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(120 24 24)"/>
        </svg>
      ),
    },
    {
      name: 'MySQL',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 12v24l4 4h24l4-4V12l-4-4H12L8 12z" fill="none" stroke="#00758F" strokeWidth="2"/>
          <path d="M16 20l4 8 4-8 4 8 4-8" stroke="#F29111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M12 32h24" stroke="#00758F" strokeWidth="1.5"/>
          <path d="M12 16h24" stroke="#00758F" strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      name: 'Git',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.1 22L26 3.9c-1.1-1.1-2.9-1.1-4 0l-3.7 3.7 4.7 4.7c1.1-.4 2.4-.1 3.3.8.9.9 1.2 2.1.8 3.2l4.5 4.5c1.1-.4 2.4-.1 3.3.8 1.3 1.3 1.3 3.3 0 4.6-1.3 1.3-3.3 1.3-4.6 0-1-1-1.2-2.4-.7-3.5l-4.2-4.2v11.1c.3.1.6.3.8.6 1.3 1.3 1.3 3.3 0 4.6-1.3 1.3-3.3 1.3-4.6 0-1.3-1.3-1.3-3.3 0-4.6.3-.3.6-.5 1-.7V18.2c-.4-.2-.7-.4-1-.7-.9-.9-1.2-2.2-.8-3.4l-4.6-4.6L3.9 22c-1.1 1.1-1.1 2.9 0 4l18 18c1.1 1.1 2.9 1.1 4 0l18-18c1.2-1.2 1.2-3 .2-4.1z" fill="#F05032"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="tech-stack hero-animate hero-animate-6" aria-label="Technology Stack">
      <div className="container">
        <div className="tech-stack-grid">
          {technologies.map((tech) => (
            <div key={tech.name} className="tech-stack-item">
              <div className="tech-stack-icon" aria-hidden="true">
                {tech.icon}
              </div>
              <span className="tech-stack-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
