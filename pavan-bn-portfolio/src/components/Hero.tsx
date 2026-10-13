import React, { useState } from 'react';
import {
  FileText,
  Mail,
  Linkedin,
  Github,
  MapPin,
  ArrowRight,
  Code2,
  Database,
  Server,
  Copy,
  Check,
  GraduationCap,
  Briefcase,
  Award,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onCopyEmail: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onCopyEmail }) => {
  const [activeTab, setActiveTab] = useState<'controller' | 'service'>('controller');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const sampleSnippet =
    activeTab === 'controller'
      ? `@RestController
@RequestMapping("/api/v1/tasks")
public class TaskController {

    private final TaskService taskService;

    @PostMapping
    public ResponseEntity<TaskResponse> createTask(
            @Valid @RequestBody CreateTaskRequest request) {
        TaskResponse response = taskService.createTask(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/prioritized")
    public List<TaskResponse> getPrioritizedTasks() {
        return taskService.findTasksByPriorityAndStatus();
    }
}`
      : `@Service
@Transactional
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;

    @Override
    public TaskResponse createTask(CreateTaskRequest req) {
        Task task = Task.builder()
            .title(req.getTitle())
            .priority(req.getPriority())
            .status(TaskStatus.TODO)
            .dueDate(req.getDueDate())
            .build();
        return TaskMapper.toResponse(taskRepository.save(task));
    }
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(sampleSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      {/* Background ambient gradient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 dark:bg-blue-600/10 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Clean metadata kicker without pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide">JAVA DEVELOPER</span>
              <span aria-hidden="true">·</span>
              <span>SPRING BOOT</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {personalInfo.location}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]" style={{ textWrap: 'balance' }}>
              Building Scalable Backend Systems & Robust Full-Stack Web Applications
            </h1>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Hello, I'm <strong className="text-slate-900 dark:text-white font-semibold">{personalInfo.name}</strong>. A Computer Science Engineer specialized in enterprise Java, Spring Boot microservices, REST APIs, and relational database persistence. Experienced in team leadership and building clean, responsive interfaces.
            </p>

            {/* Actions & Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-2 shadow-sm shadow-blue-600/30 whitespace-nowrap shrink-0"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>View Resume</span>
              </button>

              <div className="flex items-center gap-2 ml-auto sm:ml-0">
                <a
                  href={personalInfo.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors shadow-sm"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors shadow-sm"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <button
                  onClick={onCopyEmail}
                  className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors cursor-pointer shadow-sm"
                  aria-label="Copy Email Address"
                  title="Copy Email Address"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Skills strip */}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-semibold text-slate-800 dark:text-slate-300">Core Stack:</span>
              <span>Java</span>
              <span>·</span>
              <span>Spring Boot</span>
              <span>·</span>
              <span>REST APIs</span>
              <span>·</span>
              <span>JPA/Hibernate</span>
              <span>·</span>
              <span>MySQL</span>
              <span>·</span>
              <span>Git</span>
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Terminal Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              {/* Terminal Titlebar */}
              <div className="px-4 py-3 bg-slate-950 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    Spring Boot Application Architecture
                  </span>
                </div>
                <button
                  onClick={copyCode}
                  className="text-xs text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
                  title="Copy snippet"
                >
                  {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="font-mono text-[11px]">{copiedSnippet ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Segmented Code Tab Selector */}
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs">
                <button
                  onClick={() => setActiveTab('controller')}
                  className={`px-2.5 py-1 rounded font-mono text-xs transition-colors cursor-pointer ${
                    activeTab === 'controller'
                      ? 'bg-slate-800 text-blue-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  TaskController.java
                </button>
                <button
                  onClick={() => setActiveTab('service')}
                  className={`px-2.5 py-1 rounded font-mono text-xs transition-colors cursor-pointer ${
                    activeTab === 'service'
                      ? 'bg-slate-800 text-blue-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  TaskServiceImpl.java
                </button>
              </div>

              {/* Code viewer pane */}
              <div className="p-4 bg-slate-950 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed max-h-[300px]">
                <pre>
                  <code>{sampleSnippet}</code>
                </pre>
              </div>

              {/* Architecture Blueprint summary at bottom of card */}
              <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Pattern</div>
                  <div className="font-semibold text-slate-200 mt-0.5">MVC Architecture</div>
                </div>
                <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Persistence</div>
                  <div className="font-semibold text-slate-200 mt-0.5">JPA + MySQL</div>
                </div>
                <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Security</div>
                  <div className="font-semibold text-slate-200 mt-0.5">REST Validation</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI metrics strip placed cleanly in a full row below the hero split */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-slate-900 dark:text-white">8.3 / 10</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">B.Tech CSE CGPA</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-slate-900 dark:text-white">3 Projects</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Led as Team Leader</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-slate-900 dark:text-white">2 Internships</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Full Stack & Frontend</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-slate-900 dark:text-white">4 Certifications</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Java, RDBMS, Full Stack & Sec</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
