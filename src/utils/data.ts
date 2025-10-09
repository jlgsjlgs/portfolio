export interface AboutData {
  introduction: string;
  skillCategories: {
    category: string;
    skills: string[];
  }[];
}

export interface Education {
  institution: string;
  cert: string;
  duration: string;
}

export interface WorkExperience {
  role: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface BackgroundData {
  education: Education[];
  workExperience: WorkExperience[];
}

export const aboutData: AboutData = {
  introduction: `I'm Jonathan, a full-stack developer who loves building things that make people's lives easier.
                I graduated from Nanyang Technological University (NTU) in Singapore with a Bachelor of Engineering in Computer Science (Distinction).
                What drives me most is curiosity, the excitement of learning something new and turning that knowledge into meaningful, useful outcomes.`,
    skillCategories: [
    {
      category: "Frontend Development",
      skills: ["React", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "Spring Boot", "Flask", "FastAPI"]
    },
    {
      category: "Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Chroma DB", "Pinecone", "Azure Cosmos DB"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["Docker", "Kubernetes", "Helm", "Git", "Nginx", "AWS", "Azure"]
    },
    {
      category: "Testing & Automation",
      skills: ["Selenium", "Jest", "Mocha", "Artillery"]
    },
  ]
};

export const backgroundData: BackgroundData = {
  education: [
    {
      institution: "Nanyang Technological University (NTU)",
      cert: "Bachelor of Engineering in Computer Science (Distinction)",
      duration: "2020 - 2024",
    },
  ],
  workExperience: [
    {
      role: "Software Engineer",
      duration: "July 2025 - Present",
      description: `Developed full-stack web application in an Agile environment, aggregating and processing telemetry data from multiple sources. 
                    Built scalable backend microservices and responsive frontend interfaces to handle real-time data visualization and analysis, improving system performance and user experience.`,
      technologies: ["React", "Express.js", "Spring Boot", "TypeScript", "Java", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Helm", "Azure Maps"]
    },
    {
      role: "Software Engineer Intern",
      duration: "Dec 2024 - Feb 2025",
      description: `Developed a full-stack web application to manage inventory and sales tracking with complete CRUD operations. 
                    Implemented an automated invoice generation system that dynamically populated templates with transaction data, enabling seamless PDF export for client records.`,
      technologies: ["React", "Express.js", "PostgreSQL"]
    },
    {
      role: "Software Engineer Intern",
      duration: "Jan 2023 - May 2023",
      description: `Developed and enhanced web application features to route and process customer-submitted data, improving efficiency and reliability. 
                    Built automated testing workflows and integrated them into CI/CD pipelines, while contributing to cloud observability upgrades and enhancements to internal web tools that streamlined stakeholder workflows.`,
      technologies: ["Next.js", "React", "Express.js", "AWS", "MongoDB", "Selenium", "Mocha", "Docker", "AWS CloudWatch", "AWS Lambda"]
    },
  ]
}