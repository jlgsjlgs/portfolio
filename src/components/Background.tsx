import { backgroundData } from '../utils/data';

export default function Background() {
  return (
    <div className="min-h-screen bg-slate-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
       
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
          <div className="space-y-6">
            {backgroundData.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-slate-700 pl-6">
                <h3 className="text-xl font-semibold text-white">
                  {edu.cert}
                </h3>
                <p className="text-slate-400 text-sm mb-2">{edu.institution}</p>
                <p className="text-slate-500 text-sm mb-2">{edu.duration}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Certifications</h2>
          <div className="space-y-6">
            {backgroundData.certifications.map((cert, index) => (
              <div key={index} className="border-l-2 border-slate-700 pl-6">
                <h3 className="text-xl font-semibold text-white">
                  {cert.name}
                </h3>
                <p className="text-slate-500 text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Work Experience</h2>
          <div className="space-y-8">
            {backgroundData.workExperience.map((work, index) => (
              <div key={index} className="border-l-2 border-slate-700 pl-6">
                <h3 className="text-xl font-semibold text-white">{work.role}</h3>
                <p className="text-slate-500 text-sm mb-3">{work.duration}</p>
                <p className="text-slate-300 mb-3 text-justify">{work.description}</p>
                <div className="flex flex-wrap gap-2">
                  {work.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}