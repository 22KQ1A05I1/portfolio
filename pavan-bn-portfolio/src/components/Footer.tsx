import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-12 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-slate-800/60">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-extrabold shadow-xs">
                PB
              </span>
              <span className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Java Developer | Full Stack Development | Spring Boot
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#education" className="hover:text-slate-900 dark:hover:text-white transition-colors">Education</a>
            <button
              onClick={onOpenResume}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Resume
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors shadow-2xs"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors shadow-2xs"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors shadow-2xs"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors cursor-pointer shadow-2xs"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Designed & Built with React & Tailwind CSS.
          </div>
          <div className="text-slate-500 dark:text-slate-400">
            Bengaluru, Karnataka, India
          </div>
        </div>
      </div>
    </footer>
  );
};
