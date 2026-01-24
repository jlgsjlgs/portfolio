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

export interface Certification {
  name: string;
  year: string;
}

export interface WorkExperience {
  role: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface BackgroundData {
  education: Education[];
  certifications: Certification[];
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
      category: "Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript"]
    },
    {
      category: "Frameworks",
      skills: ["React", "Next.js", "Tailwind CSS", "Express.js", "Spring Boot", "Flask", "FastAPI", "LangChain"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "PostGIS", "MongoDB", "Redis", "Azure Cosmos DB", "Chroma DB", "Pinecone"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Cloudflare Workers", "Supabase", "Docker", "Kubernetes", "Helm", "Nginx"]
    },
    {
      category: "Tools & Testing",
      skills: ["Git", "GitLab CI/CD", "GitHub Actions", "Maven", "Selenium", "Jest", "JUnit", "Mocha", "Artillery"]
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
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner (CLF-C02)",
      year: "2026"
    }
  ],
  workExperience: [
    {
      role: "Software Engineer",
      duration: "July 2025 - Present",
      description: `Architected and developed a full-stack telemetry platform with microservices handling real-time data aggregation,
                    visualization, and alert management using React, Express.js, Spring Boot, PostgreSQL, and Azure Maps`,
      technologies: ["React", "Express.js", "Spring Boot", "TypeScript", "Java", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Helm", "Azure Maps"]
    },
    {
      role: "Software Engineer Intern",
      duration: "Jan 2023 - May 2023",
      description: `Developed internal data routing platform using Next.js and Express.js, processing 1,000+ daily customer
                    submissions and directing data flows to appropriate departmental endpoints`,
      technologies: ["Next.js", "React", "Express.js", "AWS SQS", "MongoDB", "Selenium", "Mocha", "Docker", "AWS CloudWatch", "AWS Lambda"]
    },
  ]
}

export const projectsData: Project[] = [
  {
    title: "HowMuchAh",
    description: "A full-stack expense splitting application inspired by Splitwise, featuring automated debt settlement using a greedy algorithm to minimize transactions. Built with React TypeScript and Spring Boot, it includes real-time WebSocket notifications, mobile-first responsive design, and secure JWT authentication via Supabase. Deployed on Vercel and Railway with PostgreSQL database integration.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Supabase", "Docker", "Vercel", "Railway"],
    github: "https://github.com/jlgsjlgs/HowMuchAh",
    link: "https://howmuchah.vercel.app/"
  },
  {
    title: "Telegram Budget Bot",
    description: "A serverless Telegram bot that automates personal expense tracking by logging transactions directly into Google Sheets. Built with TypeScript, Cloudflare Workers, and Google Apps Script, it features secure authentication, automatic monthly sheet generation, and real-time confirmation messages. The bot is deployed via a CI/CD pipeline using GitHub Actions for seamless updates.",
    technologies: ["TypeScript", "Cloudflare Workers", "Google Apps Script"],
    github: "https://github.com/jlgsjlgs/telegram-budget-bot"
  },
  {
    title: "Retrieval-Augmented Generation (RAG) AI Chatbot",
    description: "An AI-powered chatbot that understands and responds based on user-uploaded documents. It features a ReactJS frontend and microservices backend with Python and Node.js. The system uses LangChain for document embedding, Azure CosmosDB for vector storage, and provides contextual LLM-driven responses.",
    technologies: ["React", "Express.js", "Flask", "LangChain", "MongoDB", "Azure Cosmos DB", "Chroma DB", "Pinecone"],
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