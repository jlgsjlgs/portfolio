import { aboutData } from '../utils/data';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <p className="text-slate-300 text-lg leading-relaxed text-justify">
            {aboutData.introduction}
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {aboutData.skills.map((skill: string) => (
              <span
                key={skill}
                className="bg-slate-700 text-slate-200 px-4 py-2 rounded-full text-sm hover:bg-slate-600 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}