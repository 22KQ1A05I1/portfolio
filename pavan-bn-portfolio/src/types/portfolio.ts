export interface PersonalInfo {
  name: string;
  headline: string;
  subheadline: string;
  location: string;
  educationSummary: string;
  cgpa: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  linkedIn: string;
  gitHub: string;
  bioSummary: string;
  spokenLanguages: { name: string; level: string }[];
}

export interface SkillItem {
  name: string;
  icon?: string;
  proficiency?: 'Advanced' | 'Proficient' | 'Core' | 'Familiar';
  description?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface InternshipExperience {
  id: string;
  role: string;
  company: string;
  mode: string;
  period: string;
  location: string;
  description: string;
  keyResponsibilities: string[];
  techStack: string[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  isTeamLeader: boolean;
  category: 'Full Stack' | 'Frontend' | 'Machine Learning / Security';
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  features: string[];
  architecture: {
    pattern: string;
    database: string;
    keyConcepts: string[];
  };
  impact: string;
  githubUrl?: string;
}

export interface EducationRecord {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: string;
  location: string;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year?: string;
  badge?: string;
  description: string;
}

export interface ProfessionalHighlight {
  id: string;
  title: string;
  category: 'Leadership' | 'Technical' | 'Achievement' | 'Extracurricular';
  description: string;
}
