import React, { useState } from 'react';
import {
  Server,
  Code2,
  Database,
  Layout,
  Cloud,
  CheckCircle2,
  Cpu,
  Layers,
  Terminal,
  Sparkles,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Domains' },
    { id: 'backend', label: 'Backend & Frameworks' },
    { id: 'languages', label: 'Languages' },
    { id: 'databases', label: 'Databases' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'tools-cloud', label: 'Cloud & Tools' },
  ];

  const displayedCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'backend':
        return <Server className="w-4 h-4 text-blue-400" />;
      case 'languages':
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case 'databases':
        return <Database className="w-4 h-4 text-cyan-400" />;
      case 'frontend':
        return <Layout className="w-4 h-4 text-purple-400" />;
      case 'tools-cloud':
        return <Cloud className="w-4 h-4 text-amber-400" />;
      default:
        return <Cpu className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
              Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Core Technical Skills
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              Specialized in backend Java enterprise engineering, RESTful API design, database schemas, and modern web application development.
            </p>
          </div>

          {/* Interactive Filter Control */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="space-y-10">
          {displayedCategories.map((cat) => (
            <div key={cat.id} className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200/80 dark:border-slate-800/80">
                {getCategoryIcon(cat.id)}
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  {cat.category}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400 ml-auto hidden sm:inline">
                  {cat.description}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 group flex flex-col justify-between shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                        {skill.proficiency && (
                          <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800/80 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700/50">
                            {skill.proficiency}
                          </span>
                        )}
                      </div>
                      {skill.description && (
                        <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Principles Spotlight Card */}
        <div className="mt-14 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-blue-50/70 via-slate-50 to-indigo-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 border border-blue-200/80 dark:border-slate-800 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>Architectural Competency In Action</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Enterprise Java & Spring Boot Architecture Principles
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            I architect applications adhering strictly to the <strong className="text-slate-900 dark:text-white">Controller-Service-Repository</strong> tiered pattern. By utilizing Spring Data JPA and Hibernate for ORM, I ensure clean object mapping, declarative transactional security via <code className="text-blue-700 dark:text-blue-300 font-mono text-xs">@Transactional</code>, stateless REST serialization, and strong data integrity across MySQL and Oracle SQL engines.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-3 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <div className="text-xs font-semibold text-slate-900 dark:text-white">Controller Layer</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                HTTP request handling, input parameter validation, DTO mapping, and REST response generation.
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <div className="text-xs font-semibold text-slate-900 dark:text-white">Service Layer</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Pure business logic execution, workflow orchestration, custom exceptions, and transaction scoping.
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <div className="text-xs font-semibold text-slate-900 dark:text-white">Repository / Data Layer</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Spring Data JPA queries, relational connection pooling, entity lifecycle, and ACID persistence.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
