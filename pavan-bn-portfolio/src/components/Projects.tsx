import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Award,
  Layers,
  CheckCircle2,
  ArrowRight,
  FolderGit2,
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'Full Stack', label: 'Java & Spring Boot' },
    { id: 'Frontend', label: 'Frontend & UI' },
    { id: 'Machine Learning / Security', label: 'Federated ML & Security' },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
              Featured Engineering Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Selected Technical Projects
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              Capstones and systems led as Team Leader, demonstrating robust full-stack architecture, clean code standards, and database persistence.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  filter === opt.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 group shadow-xs"
            >
              <div className="space-y-4">
                {/* Card Top Meta */}
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-mono text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    {project.category}
                  </span>
                  {project.isTeamLeader && (
                    <span className="flex items-center gap-1 text-amber-500 dark:text-amber-400 font-medium">
                      <Award className="w-3.5 h-3.5" />
                      Team Leader
                    </span>
                  )}
                </div>

                {/* Title & Role */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Role: <span className="text-slate-800 dark:text-slate-200">{project.role}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Architecture highlight snippet */}
                <div className="p-3 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-200/90 dark:border-slate-800/80 space-y-1.5 text-xs shadow-2xs">
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium">
                    <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Architecture & Data:</span>
                  </div>
                  <div className="text-slate-800 dark:text-slate-300 font-mono text-[11px] truncate">
                    {project.architecture.pattern}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 font-mono text-[11px] truncate">
                    Storage: {project.architecture.database}
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800/80 rounded border border-slate-200 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    title="View GitHub Repository"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
