export const portfolioData = {
  name: "Shaheed Mirjanaik",
  role: "Software Developer",
  email: "shaheedrmirjanaik@gmail.com",
  phone: "9731990902",
  location: "Betageri, District: Belagavi, State: Karnataka",
  github: "https://github.com/ShaheedMirjanaik",
  linkedin: "https://www.linkedin.com/in/shaheed-mirjanaik",
  summary: "Software Developer with hands-on experience in Java, Spring Boot, REST APIs, MySQL, Python, Flask, and React.js, with a strong foundation in object-oriented programming, data structures, database management, and backend application development.",
  heroDescription: "Software Developer with hands-on experience in Java, Spring Boot, REST APIs, MySQL, Python, Flask, and React.js. I love building scalable applications, solving real-world problems, and exploring AI-powered solutions.",
  skills: {
    "Languages & Query": ["Java", "Python", "JavaScript"],
    "Backend": ["Spring Boot", "REST APIs", "Flask", "JDBC", "Spring Data JPA", "DAO Pattern", "Spring MVC"],
    "Frontend": ["HTML", "CSS", "React.js"],
    "Databases": ["MySQL", "MongoDB", "SQL","Redis", "CRUD Operations", "Database Management"],
    "Tools": ["Git", "GitHub", "Postman","Linux", "AWS"],
    "Computer Science": ["Data Structures and Algorithms", "DBMS", "Object-Oriented Programming", "Generative AI"]
  },
  techStack: [
    { name: "Java", icon: "java" },
    { name: "Python", icon: "python" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Spring Boot", icon: "springboot" },
    { name: "React.js", icon: "react" },
    { name: "MySQL", icon: "mysql" },
    { name: "Git", icon: "git" }
  ],
  specializations: [
    {
      icon: "code",
      title: "Backend Development",
      description: "Building RESTful APIs and scalable backend applications using Spring Boot, Flask, Java, and database technologies."
    },
    {
      icon: "layers",
      title: "Full Stack Projects",
      description: "Developing end-to-end solutions with React.js, Spring Boot, MySQL, and REST APIs for database-driven applications."
    },
    {
      icon: "brain",
      title: "AI & Real-World Solutions",
      description: "Exploring AI-powered applications like Alzheimer's detection and building automation systems."
    }
  ],
  projects: [
    {
      id: 1,
      title: "XAI-MedTrack",
      subtitle: "AI-Powered Alzheimer's Detection & Progression Tracking System",
      link: " ",
      technologies: ["Python", "Flask", "REST APIs", "SQL"],
      date: "SEP 2024 — NOV 2025",
      highlights: [
        "Achieved 97.18% accuracy in Alzheimer's disease classification using multimodal MRI and clinical data.",
        "Progression tracking models reached up to 85.9% accuracy for longitudinal disease monitoring.",
        "Designed a scalable MVC architecture supporting containerized microservices, RESTful APIs, GPU-accelerated inference, and secure patient data management."
      ],
      featured: true
    },
    {
      id: 2,
      title: "Banking System",
      subtitle: "Console-based Banking Application",
      link: "https://github.com/ShaheedMirjanaik/Banking_System",
      technologies: ["Core Java", "JDBC", "MySQL"],
      date: "JAN 2026",
      highlights: [
        "Built a console-based Banking System using Core Java, applying OOP principles like encapsulation and inheritance.",
        "Integrated MySQL with JDBC for CRUD operations, enabling persistent data storage.",
        "Implemented core features: account creation, login, deposit, withdrawal, fund transfer, and transaction history.",
        "Used DAO pattern and transaction management (commit/rollback) to ensure data consistency and scalability."
      ],
      featured: false
    },
    {
      id: 3,
      title: "Expense Tracker API",
      subtitle: "RESTful Expense Management API",
      link: " ",
      technologies: ["Core Java", "Spring Boot", "MySQL", "Spring Data JPA"],
      date: "APR 2026",
      highlights: [
        "Built a RESTful Expense Tracker API using Spring Boot and Core Java.",
        "Designed database schema and handled data using MySQL and Spring Data JPA.",
        "Developed features like expense tracking, category management, and monthly reports.",
        "Followed layered architecture and clean API design principles."
      ],
      featured: false
    },
    {
      id: 4,
      title: "Financial Agent",
      subtitle: "Stock Price Forecaster & Analyst",
      link: "https://github.com/ShaheedMirjanaik/Finantial_Agent",
      technologies: ["Python", "Pandas", "Numpy", "Scikit-Learn", "Matplotlib", "Shap","RAG", "Prompt Engineering"],
      date: "MAR 2025",
      highlights: [
        "Developed a Python-based AI Financial Agent to predict stock prices using multiple machine learning models.",
        "Implemented SHAP explainability to interpret model predictions and identify key factors influencing stock price movements.",
        "Integrated LLM-powered Retrieval-Augmented Generation (RAG) to retrieve relevant financial news and provide contextual market insights.",
        "Built an end-to-end financial analysis pipeline combining stock price forecasting, explainable AI, and news-based qualitative insights."
      ],
      featured: false
    },
    {
      id: 5,
      title: "Student CURD API",
      subtitle: "Spring Boot CURD Operation Demo Using JPA",
      link: "https://github.com/ShaheedMirjanaik/SpringBoot_CURD_MiniProject",
      technologies: ["Java", "MySQL", "Spring Boot", "Spring JPA", "Postman"],
      date: "OCT 2026",
      highlights: [
        "Developed a Student Management REST API using Java and Spring Boot to manage student records.",
        "Implemented CRUD operations (Create, Read, Update, Delete) to efficiently manage student data.",
        "Designed RESTful endpoints to handle HTTP requests and responses for student information.",
        "Used Spring Data JPA and Hibernate for database operations and seamless interaction with the student database."
      ],
      featured: false
    }
  ],
  experience: [
    {
      role: "Internship",
      company: "Automation & Robotics Centre",
      organization: "PES University EC Campus",
      location: "Bengaluru, Karnataka",
      date: "JAN 2026 — MAY 2026",
      responsibilities: [
        "Programmed and deployed industrial robot control logic using KUKA Robot Language (KRL) for real-world automation.",
        "Developed problem-solving and systems programming skills using C for embedded and robotic control applications.",
        "Learned robotic applications using ROS."
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "PES University",
      location: "Bengaluru, Karnataka",
      date: "2022 — 2026",
      grade: "CGPA: 7.07"
    },
    {
      degree: "Pre-University Education",
      institution: "Poorna PU College",
      location: "Dharwad, Karnataka",
      date: "2020 — 2022",
      grade: "90.17%"
    },
    {
      degree: "High School Education",
      institution: "Shri VVD Government High School",
      location: "Betageri, Karnataka",
      date: "2017 — 2020",
      grade: "84.8%"
    }
  ],
  publication: {
    title: "XAI-MedTrack: Explainable AI for Longitudinal Medical Image Analysis on MRI Scans for Alzheimer's Disease",
    date: "April 2026",
    link: "https://ieeexplore.ieee.org/document/11526237"
  },
  certifications: [
    {
      title: "HackerRank — Java",
      date: "April 2024"
    },
    {
      title: "HackerRank — Problem Solving",
      date: "March 2024"
    }
  ]
};
