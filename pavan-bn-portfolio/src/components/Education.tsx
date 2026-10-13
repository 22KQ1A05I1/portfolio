import React from 'react';
import { GraduationCap, Award, CheckCircle2, BookOpen, Calendar, MapPin } from 'lucide-react';
import { educationRecords, certifications } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Academic Background & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education & Certifications
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Solid foundations in computer science theory, software design patterns, database architecture, and verified technical credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Education Records (Left: 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-900 dark:text-white">
              <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Academic Degrees & Records</span>
            </div>

            <div className="space-y-4">
              {educationRecords.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {edu.location}
                      </p>
                    </div>

                    <div className="sm:text-right shrink-0 bg-slate-50 dark:bg-slate-950/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800/80 self-start sm:self-auto">
                      <div className="text-xs text-slate-500 dark:text-slate-400">{edu.scoreType}</div>
                      <div className="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400">
                        {edu.score}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-mono">
                        {edu.period}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (Right: 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-900 dark:text-white">
              <Award className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span>Verified Certifications</span>
            </div>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors space-y-2 shadow-xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {cert.name}
                    </h4>
                    <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">
                      Verified
                    </span>
                  </div>

                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    Issuer: {cert.issuer}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
