/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';
import { personalInfo } from './data/portfolioData';
import { Project } from './types/portfolio';

function PortfolioApp() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastOpen, setIsToastOpen] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setIsToastOpen(true);
    setTimeout(() => {
      setIsToastOpen(false);
    }, 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    showToast(`Copied email to clipboard: ${personalInfo.email}`);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phoneDisplay);
    showToast(`Copied phone number: ${personalInfo.phoneDisplay}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Top sticky navigation bar with light/dark switch */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Single-Page Portfolio Flow */}
      <main className="flex-grow">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onCopyEmail={handleCopyEmail}
        />
        <About onCopyEmail={handleCopyEmail} />
        <Skills />
        <Experience />
        <Projects onSelectProject={(proj) => setSelectedProject(proj)} />
        <Education />
        <Contact
          onCopyEmail={handleCopyEmail}
          onCopyPhone={handleCopyPhone}
        />
      </main>

      {/* Global Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive In-App Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onCopyEmail={handleCopyEmail}
      />

      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />

      {/* Global Toast Notification */}
      <Toast
        message={toastMessage}
        isOpen={isToastOpen}
        onClose={() => setIsToastOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
