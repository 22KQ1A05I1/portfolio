import React from 'react';
import { X, ExternalLink, GitBranch, Database, Layers, CheckCircle2, Award, Terminal } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-2xl text-slate-900 dark:text-slate-100 max-h-[90vh] flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400">
              {project.category}
            </span>
            {project.isTeamLeader && (
              <span className="flex items-center gap-1 text-xs text-amber-500 dark:text-amber-400 font-medium">
                <Award className="w-3.5 h-3.5" />
                Team Leader
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6">
          <div>
            <h2 id="project-modal-title" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Role: <span className="text-slate-800 dark:text-slate-200 font-medium">{project.role}</span>
            </p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
              Project Overview
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Architecture & Engineering Highlights */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/90 dark:border-slate-800 space-y-4 shadow-2xs">
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
              <Layers className="w-4 h-4" />
              <span>System Architecture & Design</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <span className="text-slate-500 dark:text-slate-400 block font-medium">Pattern & Structure</span>
                <span className="text-slate-800 dark:text-slate-200 font-mono">{project.architecture.pattern}</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 dark:text-slate-400 block font-medium">Data Storage / Ledger</span>
                <span className="text-slate-800 dark:text-slate-200 font-mono">{project.architecture.database}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80">
              <span className="text-xs text-slate-500 dark:text-slate-400 block mb-2 font-medium">Architectural Principles:</span>
              <div className="flex flex-wrap gap-2">
                {project.architecture.keyConcepts.map((concept, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800/80 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700/60"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Deliverables & Features */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
              Key Features & Deliverables
            </h3>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Leadership & Outcomes */}
          <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/40 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              Leadership & Delivery Impact
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.impact}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between shrink-0">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>View Repository on GitHub</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          ) : (
            <span className="text-xs text-slate-500 dark:text-slate-400">Academic Project</span>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
