interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export default function ProjectCard({ title, description, technologies, link, github }: ProjectCardProps) {
  return (
    <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-750 transition-colors border border-slate-700 flex flex-col h-full">
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-300 mb-4 leading-relaxed text-justify flex-grow">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            View Project →
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  );
}