import {
  PersonalInfo,
  SkillCategory,
  InternshipExperience,
  Project,
  EducationRecord,
  Certification,
  ProfessionalHighlight,
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Pavan B N',
  headline: 'Java Developer | Full Stack Development | Spring Boot',
  subheadline:
    'Dedicated Full Stack Developer specializing in robust backend architectures with Java & Spring Boot, relational database modeling, and modern responsive user interfaces.',
  location: 'Bengaluru, Karnataka, India',
  educationSummary: 'B.Tech in Computer Science & Engineering (2022–2026)',
  cgpa: '8.3/10',
  email: 'pavanbn.work@gmail.com',
  phone: '+916301633343',
  phoneDisplay: '+91 63016 33343',
  linkedIn: 'https://www.linkedin.com/in/b-n-pavan-2890b2301',
  gitHub: 'https://github.com/22kq1a05i1',
  bioSummary:
    'Aspiring Java and Full Stack Developer with solid foundational experience in backend design, Spring Boot microservices, JDBC/JPA persistence, and relational SQL databases. Proven team leader across academic capstone and distributed systems projects with a strong record in building resilient, maintainable software architectures and intuitive client-facing experiences.',
  spokenLanguages: [
    { name: 'English', level: 'Professional Working' },
    { name: 'Kannada', level: 'Native / Bilingual' },
    { name: 'Telugu', level: 'Native / Bilingual' },
    { name: 'Hindi', level: 'Working Proficiency' },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    category: 'Frameworks & Backend Architecture',
    description: 'Enterprise server-side development, modular APIs, and persistence mechanisms.',
    skills: [
      { name: 'Spring Boot', proficiency: 'Advanced', description: 'Production-ready RESTful services, autoconfiguration & Spring Initializr' },
      { name: 'REST APIs', proficiency: 'Advanced', description: 'Stateless endpoints, HTTP verbs, payload validation & contract testing' },
      { name: 'JPA / Hibernate', proficiency: 'Advanced', description: 'Object-Relational Mapping, entity lifecycle & JPQL optimization' },
      { name: 'JDBC', proficiency: 'Proficient', description: 'Direct database connectivity, connection pooling & prepared statements' },
      { name: 'MVC Architecture', proficiency: 'Advanced', description: 'Separation of concerns, Controller-Service-Repository design patterns' },
    ],
  },
  {
    id: 'languages',
    category: 'Programming Languages',
    description: 'Object-oriented programming, data structures, and algorithmic problem-solving.',
    skills: [
      { name: 'Java', proficiency: 'Advanced', description: 'Core Java, OOP principles, Collections framework, Exception handling, Multi-threading' },
      { name: 'SQL', proficiency: 'Advanced', description: 'Complex queries, indexing, joins, normalization, subqueries & aggregate operations' },
      { name: 'JavaScript', proficiency: 'Proficient', description: 'ES6+ syntax, asynchronous programming, DOM manipulation & client-side logic' },
    ],
  },
  {
    id: 'databases',
    category: 'Relational Databases',
    description: 'Relational schema modeling, query optimization, and transaction management.',
    skills: [
      { name: 'MySQL', proficiency: 'Advanced', description: 'ACID transactions, relational constraint modeling, foreign keys & performance indexes' },
      { name: 'Oracle SQL', proficiency: 'Proficient', description: 'Enterprise RDBMS, PL/SQL stored procedures, triggers & database tuning' },
    ],
  },
  {
    id: 'frontend',
    category: 'Frontend Engineering',
    description: 'Responsive, accessible, and structured modern web user interfaces.',
    skills: [
      { name: 'HTML5', proficiency: 'Advanced', description: 'Semantic markup, accessibility standards & SEO-friendly document layout' },
      { name: 'CSS3 / Tailwind', proficiency: 'Advanced', description: 'Modern Flexbox, CSS Grid, mobile-first responsive design & custom components' },
      { name: 'JavaScript (ES6+)', proficiency: 'Proficient', description: 'Interactive UI components, event loop, fetch API & client state' },
    ],
  },
  {
    id: 'tools-cloud',
    category: 'Tools, DevOps & Cloud Fundamentals',
    description: 'Modern version control, cloud fundamentals, containerization, and event streaming.',
    skills: [
      { name: 'Git & GitHub', proficiency: 'Advanced', description: 'Branch management, pull requests, version control workflows & team collaboration' },
      { name: 'Azure Fundamentals', proficiency: 'Core', description: 'Cloud architecture principles, compute, resource groups & security basics' },
      { name: 'Docker', proficiency: 'Familiar', description: 'Containerization, Dockerfile composition & reproducible environments' },
      { name: 'Kubernetes', proficiency: 'Familiar', description: 'Container orchestration principles, pods, deployments & service discovery' },
      { name: 'Kafka Fundamentals', proficiency: 'Familiar', description: 'Distributed event streaming, producer-consumer models & message topics' },
    ],
  },
];

export const internshipExperiences: InternshipExperience[] = [
  {
    id: 'eduskills-intern',
    role: 'Java Full Stack Intern',
    company: 'Eduskills',
    mode: 'Virtual Internship',
    period: 'Internship Program',
    location: 'Virtual / Remote',
    description:
      'Engineered and maintained end-to-end full-stack web applications with Java and Spring Boot, bridging backend service layers with dynamic frontend client interfaces.',
    keyResponsibilities: [
      'Developed full-stack web applications utilizing Java, Spring Boot, and modern frontend technologies.',
      'Designed and consumed RESTful APIs and connected relational databases to power data-driven application workflows.',
      'Practiced connecting frontend components with backend service controllers and constructing responsive, adaptive layouts.',
      'Implemented clean coding standards, exception handlers, and unit testing conventions across application modules.',
    ],
    techStack: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'JDBC', 'HTML/CSS', 'JavaScript', 'Git'],
  },
  {
    id: '42learn-intern',
    role: 'Frontend Developer Intern',
    company: '42Learn',
    mode: 'Remote Internship',
    period: 'Internship Program',
    location: 'Remote',
    description:
      'Engineered responsive, accessible web pages and converted design wireframes into clean, structured user interfaces using foundational frontend standards.',
    keyResponsibilities: [
      'Developed responsive, cross-browser web pages utilizing HTML, CSS, and vanilla JavaScript fundamentals.',
      'Applied core web development principles to build structured, user-friendly, and accessible user interfaces.',
      'Collaborated remotely on feature sprints, adhering to code reviews and modular layout techniques.',
      'Optimized asset loading and mobile viewports for fluid user experiences across varying screen sizes.',
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Responsive Web Design', 'Git', 'UI/UX Fundamentals'],
  },
];

export const projects: Project[] = [
  {
    id: 'optimize-task-management',
    title: 'Optimize Task Management System',
    role: 'Team Leader & Full Stack Architect',
    isTeamLeader: true,
    category: 'Full Stack',
    shortDescription:
      'An enterprise-grade task management system built with Java, Spring Boot, and JPA/Hibernate, offering task prioritization, status monitoring, and relational data persistence.',
    fullDescription:
      'Engineered a scalable task management application adhering to strict Model-View-Controller (MVC) and Object-Oriented Programming (OOP) paradigms. Provided collaborative teams with prioritized task distribution, deadline reminders, multi-state progress workflows (To-Do, In-Progress, Review, Completed), and reliable transactional data storage via JPA/Hibernate on a MySQL backend.',
    techStack: ['Java', 'Spring Boot', 'REST APIs', 'JPA/Hibernate', 'MySQL', 'MVC Pattern', 'Git'],
    features: [
      'Task prioritization matrix with deadline tracking and visual status monitoring.',
      'Strict MVC architectural separation between business logic, data models, and API controllers.',
      'Robust JPA/Hibernate persistence layer connected to normalized MySQL relational tables.',
      'Validated RESTful API endpoints for creating, updating, assigning, and archiving tasks.',
      'Role-based permissions and structured error-handling middleware for predictable client responses.',
    ],
    architecture: {
      pattern: 'Model-View-Controller (MVC) + Service-Repository Layering',
      database: 'MySQL Relational Database with JPA/Hibernate ORM',
      keyConcepts: [
        'Entity Relationship Modeling',
        'Repository Interfaces (Spring Data JPA)',
        'Transactional Integrity (@Transactional)',
        'REST Controller Serialization',
      ],
    },
    impact:
      'Served as Team Leader overseeing architecture design, Git branch merges, and technical coordination; successfully delivered a zero-downtime persistent workflow.',
    githubUrl: 'https://github.com/22kq1a05i1',
  },
  {
    id: 'online-food-ordering-system',
    title: 'Online Food Ordering System',
    role: 'Team Leader & Frontend Lead',
    isTeamLeader: true,
    category: 'Frontend',
    shortDescription:
      'A responsive web platform featuring interactive menu browsing, real-time cart calculation, order placement workflows, and OAuth security concepts.',
    fullDescription:
      'Spearheaded a client-side digital ordering portal designed for seamless dining discovery. Implemented dynamic menu filtering by culinary category, live cart item management with total calculation and order summaries, and explored secure modern authentication concepts including API authentication and OAuth patterns.',
    techStack: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'REST APIs', 'OAuth Concepts', 'Responsive UI'],
    features: [
      'Interactive menu catalog with category filtering and instant item search.',
      'Real-time cart state management with item quantity modifiers and automated tax/total calculation.',
      'Exploration and blueprinting of secure API authentication workflows and OAuth protocol integration.',
      'Mobile-first responsive interface optimized for smartphones, tablets, and desktop workstations.',
      'Checkout flow validation ensuring complete order parameters prior to submission.',
    ],
    architecture: {
      pattern: 'Modular Client Architecture + REST Integration',
      database: 'Simulated Order Payload & RESTful Service Blueprint',
      keyConcepts: [
        'DOM Manipulation & Event Delegation',
        'OAuth 2.0 Security Flow Blueprint',
        'Cart State Synchronization',
        'Form Validation Standards',
      ],
    },
    impact:
      'Led the frontend development team, establishing UI component consistency and delivering an intuitive, consumer-ready digital ordering journey.',
    githubUrl: 'https://github.com/22kq1a05i1',
  },
  {
    id: 'fraud-detection-bitcoin-smart-cities',
    title: 'Fraud Detection in Bitcoin Transactions in Smart Cities',
    role: 'Team Leader & Research Lead',
    isTeamLeader: true,
    category: 'Machine Learning / Security',
    shortDescription:
      'A decentralized federated ensemble learning framework for financial risk detection and anomaly classification in smart city blockchain transactions.',
    fullDescription:
      'Spearheaded a research project exploring privacy-preserving fraud detection across decentralized Bitcoin transaction graphs. Designed a federated ensemble learning framework capable of identifying anomalous financial flows, transaction clustering anomalies, and fraudulent heuristics without centralizing sensitive customer financial data across urban smart city nodes.',
    techStack: ['Federated Learning', 'Blockchain Concepts', 'Bitcoin Transaction Analysis', 'Ensemble Models', 'Risk Analytics'],
    features: [
      'Federated learning paradigm allowing local model training across decentralized nodes with global weight aggregation.',
      'Financial risk classification analyzing anomalous Bitcoin address velocity and transaction volume spikes.',
      'Decentralized architecture maintaining data privacy compliance across participating urban banking partitions.',
      'Comprehensive comparative analysis of ensemble techniques versus traditional centralized fraud classifiers.',
      'Evaluation of false-positive reduction strategies for high-frequency crypto asset transfers.',
    ],
    architecture: {
      pattern: 'Federated Client-Server Aggregation + Ensemble Classification',
      database: 'Distributed Blockchain Ledger Transaction Data & Feature Sets',
      keyConcepts: [
        'Privacy-Preserving Machine Learning',
        'Consensus & Anomaly Heuristics',
        'Decentralized Model Aggregation',
        'Financial Risk Scoring Matrix',
      ],
    },
    impact:
      'Directed research methodology, algorithmic workflow design, and team presentations; demonstrated that federated ensemble methods preserve privacy while achieving robust fraud detection rates.',
    githubUrl: 'https://github.com/22KQ1A05I1/Crypto_Currency_Market_Financial_Risk_Management',
  },
];

export const educationRecords: EducationRecord[] = [
  {
    id: 'btech-cse',
    degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
    institution: 'Pace Institute of Technology and Sciences',
    period: '2022 – 2026',
    score: '8.3 / 10',
    scoreType: 'CGPA',
    location: 'Ongole, Andhra Pradesh / Bengaluru Region',
    description:
      'Comprehensive computer science curriculum emphasizing Object-Oriented Programming (Java), Data Structures & Algorithms, Database Management Systems (RDBMS), Operating Systems, Computer Networks, and Software Engineering methodologies.',
  },
  {
    id: 'intermediate-mpc',
    degree: 'Intermediate (Mathematics, Physics, Chemistry - MPC)',
    institution: 'Narayana Junior College',
    period: '2020 – 2022',
    score: '96%',
    scoreType: 'Percentage',
    location: 'Vijayawada, Andhra Pradesh',
    description:
      'Rigorous foundational training in advanced mathematics, analytical reasoning, physics, and computational thinking, graduating with distinction.',
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-java-codetantra',
    name: 'Java Programming Certification',
    issuer: 'CodeTantra',
    year: 'Certified',
    description: 'Advanced Core Java mastery, object-oriented principles, collections, multithreading, and algorithmic implementation.',
  },
  {
    id: 'cert-java-fullstack-eduskills',
    name: 'Java Full Stack Development',
    issuer: 'Eduskills',
    year: 'Certified',
    description: 'End-to-end enterprise full-stack development, Spring Boot, REST APIs, microservices principles, and relational persistence.',
  },
  {
    id: 'cert-rdbms-spoken',
    name: 'Relational Database Management Systems (RDBMS)',
    issuer: 'Spoken Tutorial (IIT Bombay Initiative)',
    year: 'Certified',
    description: 'Relational database architecture, SQL query mastery, normalization, indexing, and transactional integrity.',
  },
  {
    id: 'cert-ethical-hacking',
    name: 'Ethical Hacking & Cybersecurity Essentials',
    issuer: 'Recognized Technical Platform',
    year: 'Certified',
    description: 'Web application security standards, vulnerability assessment, secure API practices, and network protection.',
  },
];

export const professionalHighlights: ProfessionalHighlight[] = [
  {
    id: 'hl-leadership',
    title: 'Team Leadership in Academic Projects',
    category: 'Leadership',
    description:
      'Served as Team Leader across 3 major technical capstone projects, coordinating development roadmaps, architectural decisions, and version control branches.',
  },
  {
    id: 'hl-git-workshop',
    title: 'Git Version Control Workshop Participation',
    category: 'Technical',
    description:
      'Active participant in advanced Git collaboration workshops, mastering branch isolation, merge conflict resolution, and collaborative open-source practices.',
  },
  {
    id: 'hl-quiz',
    title: 'Quiz Competition Medalist',
    category: 'Achievement',
    description:
      'Awarded medalist honors in regional academic and technical quiz competitions, demonstrating fast critical thinking and broad domain knowledge.',
  },
  {
    id: 'hl-volleyball',
    title: 'Volleyball Best Player Award',
    category: 'Extracurricular',
    description:
      'Recognized as Best Volleyball Player in collegiate athletic tournaments, highlighting teamwork, agility, communication, and high-pressure execution.',
  },
];
