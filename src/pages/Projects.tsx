import NavBar from "../components/NavBar"
import ProjectCard from "../components/ProjectCard"
import { projectsData } from "../utils/data"

function Projects() {
  return (
    <div>
      <NavBar/>
      <div className="min-h-screen bg-slate-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-12">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
                github={project.github}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;