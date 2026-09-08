export type ThemeMode = 'light' | 'dark' | 'system';

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  iconName: string;
  username: string;
  category?: 'code' | 'social' | 'contact';
}

export type ProjectCategory = 'all' | 'iot' | 'fullstack' | 'ai' | 'frontend' | 'cloud';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullStory?: string;
  category: ProjectCategory;
  featured: boolean;
  thumbnail: string;
  gallery?: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  keyFeatures: string[];
  architecturalHighlights?: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 1-100%
  experienceYears: string;
  featured?: boolean;
  iconName?: string;
  tags?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string;
  honors?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  badgeUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string;
}
