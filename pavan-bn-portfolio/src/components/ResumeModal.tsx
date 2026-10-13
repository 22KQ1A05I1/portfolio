import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import {
  personalInfo,
  skillCategories,
  internshipExperiences,
  projects,
  educationRecords,
  certifications,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyEmail: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onCopyEmail }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-2xl text-slate-900 dark:text-slate-100 max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 no-print shrink-0">
          <div>
            <h2 id="resume-title" className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight">
              Curriculum Vitae — {personalInfo.name}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Java Developer & Full Stack Engineer</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors cursor-pointer shadow-xs"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-8 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 print:bg-white print:text-black print:p-0">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 print:border-black">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white print:text-black">
              {personalInfo.name}
            </h1>
            <p className="text-base text-blue-600 dark:text-blue-400 font-medium mt-1 print:text-blue-700">
              {personalInfo.headline}
            </p>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-3 text-xs text-slate-500 dark:text-slate-400 print:text-gray-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {personalInfo.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {personalInfo.email}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                {personalInfo.phoneDisplay}
              </span>
              <span>·</span>
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 print:text-black"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <span>·</span>
              <a
                href={personalInfo.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 print:text-black"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 print:text-black border-b border-slate-200 dark:border-slate-800 print:border-gray-300 pb-1">
              Professional Summary
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed print:text-gray-800">
              {personalInfo.bioSummary}
            </p>
          </div>

          {/* Core Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 print:text-black border-b border-slate-200 dark:border-slate-800 print:border-gray-300 pb-1">
              Technical Proficiencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="space-y-1">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 print:text-black">
                    {cat.category}:
                  </span>{' '}
                  <span className="text-slate-600 dark:text-slate-400 print:text-gray-700">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 print:text-black border-b border-slate-200 dark:border-slate-800 print:border-gray-300 pb-1">
              Internship Experience
            </h3>
            <div className="space-y-4">
              {internshipExperiences.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white print:text-black">
                        {exp.role}
                      </h4>
                      <p className="text-xs text-blue-600 dark:text-blue-400 print:text-gray-700">
                        {exp.company} ({exp.mode})
                      </p>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 print:text-gray-600">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300 print:text-gray-800">
                    {exp.keyResponsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 print:text-black border-b border-slate-200 dark:border-slate-800 print:border-gray-300 pb-1">
              Featured Projects
            </h3>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white print:text-black">
                      {proj.title} <span className="text-xs text-blue-600 dark:text-blue-400 font-normal">({proj.role})</span>
                    </h4>
                    <span className="text-xs text-slate-500 dark:text-slate-400 print:text-gray-600">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 print:text-gray-800 leading-relaxed">
                    {proj.fullDescription}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 print:text-gray-600">
                    <strong className="text-slate-800 dark:text-slate-300 print:text-black">Technologies:</strong>{' '}
                    {proj.techStack.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 print:text-black border-b border-slate-200 dark:border-slate-800 print:border-gray-300 pb-1">
              Education
            </h3>
            <div className="space-y-3">
              {educationRecords.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-start sm:justify-between text-xs">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white print:text-black">{edu.degree}</h4>
                    <p className="text-slate-500 dark:text-slate-400 print:text-gray-700">{edu.institution} · {edu.location}</p>
                  </div>
                  <div className="sm:text-right mt-1 sm:mt-0">
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400 print:text-black">{edu.scoreType}: {edu.score}</span>
                    <p className="text-slate-500 dark:text-slate-400 print:text-gray-600">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 print:text-black border-b border-slate-200 dark:border-slate-800 print:border-gray-300 pb-1">
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certifications.map((cert) => (
                <div key={cert.id} className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 print:border-gray-300 print:bg-transparent">
                  <div className="font-semibold text-slate-800 dark:text-slate-200 print:text-black">{cert.name}</div>
                  <div className="text-slate-500 dark:text-slate-400 print:text-gray-600">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 print:text-black border-b border-slate-200 dark:border-slate-800 print:border-gray-300 pb-1">
              Languages
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 print:text-gray-800">
              {personalInfo.spokenLanguages.map((l) => `${l.name} (${l.level})`).join(' · ')}
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between no-print shrink-0">
          <button
            onClick={onCopyEmail}
            className="text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Copy Email ({personalInfo.email})</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
