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

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
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
      duration: "June 2023 - Aug 2023",
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

export const projectsData: Project[] = [
  {
    title: "Telegram Budget Bot",
    description: "A serverless Telegram bot that automates personal expense tracking by logging transactions directly into Google Sheets. Built with TypeScript, Cloudflare Workers, and Google Apps Script, it features secure authentication, automatic monthly sheet generation, and real-time confirmation messages. The bot is deployed via a CI/CD pipeline using GitHub Actions for seamless updates.",
    technologies: ["TypeScript", "Cloudflare Workers", "Google Apps Script"],
    github: "https://github.com/jlgsjlgs/telegram-budget-bot"
  },
  {
    title: "Retrieval-Augmented Generation (RAG) AI Chatbot",
    description: "An AI-powered chatbot that understands and responds based on user-uploaded documents. It features a ReactJS frontend and microservices backend with Python and Node.js. The system uses LangChain for document embedding, Azure CosmosDB for vector storage, and provides contextual LLM-driven responses.",
    technologies: ["React", "Express.js", "Flask", "LangChain", "MongoDB", "Azure CosmosDB"],
    github: "https://github.com/jlgsjlgs/RAG-Chatbot"
  },
  {
    title: "Calorie Tracker App",
    description: "An Android app designed to help users track their daily calorie and water intake. The app integrates with an external food API to provide nutritional information, uses Firebase Authentication for secure login, and stores user data in Firestore.",
    technologies: ["Java", "Firebase Authentication", "Firestore"],
    github: "https://github.com/jlgsjlgs/CalorieAndroid"
  },
  {
    title: "Where2Park",
    description: "A web application that helps users discover nearby parking options around Singapore. It integrates Google Maps and Places APIs to provide location-based search, interactive maps, and real-time parking availability. The app was deployed on AWS S3 for fast, reliable hosting.",
    technologies: ["JavaScript", "HTML", "CSS", "Google Maps API", "Google Places API", "AWS S3"],
    github: "https://github.com/jlgsjlgs/where2park"
  },
];