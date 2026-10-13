import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Laptop } from 'lucide-react';
import { internshipExperiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Professional History
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Internship Experience
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Practical industry exposure building full-stack applications with Java and Spring Boot, and crafting responsive frontend web interfaces.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 md:before:left-4 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {internshipExperiences.map((exp) => (
            <div key={exp.id} className="relative pl-10 md:pl-12 group">
              {/* Timeline marker */}
              <div className="absolute left-1.5 md:left-2 top-1.5 -translate-x-1/2 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
              </div>

              {/* Card Container */}
              <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 space-y-5 shadow-xs">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-medium mt-1">
                      <span className="text-slate-800 dark:text-slate-200">{exp.company}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                        <Laptop className="w-3.5 h-3.5" />
                        {exp.mode}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Brief overview */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Responsibilities list */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Core Contributions & Achievements
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                    {exp.keyResponsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-slate-50 dark:bg-slate-950/40 p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800/60">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack tags */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mr-1">Technologies:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/90 rounded-md border border-slate-200 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
