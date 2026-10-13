import React from 'react';
import {
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Globe,
  Trophy,
  Users,
  GitBranch,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import { personalInfo, professionalHighlights } from '../data/portfolioData';

interface AboutProps {
  onCopyEmail: () => void;
}

export const About: React.FC<AboutProps> = ({ onCopyEmail }) => {
  return (
    <section id="about" className="py-20 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Professional Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Pavan B N
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Software engineer based in Bengaluru with a deep focus on Java backend architecture, Spring Boot frameworks, database optimization, and end-to-end full stack development.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Monogram & Bio Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 space-y-6 shadow-xs">
              <div className="flex items-center gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                {/* SVG Engineer Emblem / Avatar Fallback */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 p-0.5 shadow-md shadow-blue-500/20 shrink-0 flex items-center justify-center">
                  <div className="w-full h-full bg-slate-100 dark:bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300">
                      PB
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{personalInfo.name}</h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{personalInfo.headline}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Bio summary paragraphs */}
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  I am a Computer Science & Engineering undergraduate (2022–2026) with a cumulative CGPA of <strong className="text-slate-900 dark:text-white font-semibold">8.3/10</strong>, driven by designing dependable, scalable backend systems. My core engineering toolkit revolves around the <strong className="text-slate-900 dark:text-white font-semibold">Java ecosystem</strong>, notably <strong className="text-slate-900 dark:text-white font-semibold">Spring Boot</strong>, RESTful API design, JPA/Hibernate, and relational SQL persistence.
                </p>
                <p>
                  Having served as <strong className="text-blue-600 dark:text-blue-400 font-medium">Team Leader</strong> across multiple academic projects—spanning an Optimize Task Management System, an Online Food Ordering System, and research in Federated Anomaly Detection in Bitcoin transactions—I combine technical architecture with effective collaborative execution.
                </p>
                <p>
                  My goal is to join a forward-thinking engineering team where I can architect clean, enterprise-grade backend services, streamline API contracts, and contribute to high-availability software products.
                </p>
              </div>

              {/* Languages known section */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Languages Known</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {personalInfo.spokenLanguages.map((lang) => (
                    <div
                      key={lang.name}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 text-center"
                    >
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">{lang.name}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{lang.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact & Info Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-xs">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Quick Profile Facts
              </h4>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Degree
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">B.Tech in CSE (2022–2026)</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                    Academic Standing
                  </span>
                  <span className="font-semibold font-mono text-emerald-600 dark:text-emerald-400">CGPA: 8.3 / 10</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Email
                  </span>
                  <button
                    onClick={onCopyEmail}
                    className="font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                    title="Click to copy email"
                  >
                    {personalInfo.email}
                  </button>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    Phone
                  </span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-rose-500 dark:text-rose-400" />
                    Location
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Strengths & Extracurricular Highlights */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-xs">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Strengths & Honors
              </h4>
              <div className="space-y-3">
                {professionalHighlights.map((hl) => (
                  <div
                    key={hl.id}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/60 flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                      {hl.category === 'Leadership' && <Users className="w-4 h-4" />}
                      {hl.category === 'Technical' && <GitBranch className="w-4 h-4" />}
                      {hl.category === 'Achievement' && <Trophy className="w-4 h-4 text-amber-500 dark:text-amber-400" />}
                      {hl.category === 'Extracurricular' && <Activity className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-slate-200">{hl.title}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                        {hl.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
