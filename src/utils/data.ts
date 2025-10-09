export interface AboutData {
  introduction: string;
  skillCategories: {
    category: string;
    skills: string[];
  }[];
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