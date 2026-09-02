export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'all' | 'ai' | 'fullstack' | 'cloud' | 'opensource';
  tags: string[];
  featured: boolean;
  metrics: { label: string; value: string }[];
  highlights: string[];
  architecture?: string[];
  githubUrl: string;
  liveUrl: string;
  previewGradient: string;
  accentColor: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    icon: string;
    highlight?: boolean;
    description: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  current?: boolean;
  type: 'full-time' | 'contract' | 'open-source' | 'education';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  highlight: string;
  projectRelation: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  link: string;
  views?: string;
}

export interface DeveloperProfile {
  name: string;
  title: string;
  roles: string[];
  tagline: string;
  bio: string[];
  avatar: string;
  location: string;
  timezone: string;
  availability: {
    status: 'available' | 'limited' | 'busy';
    text: string;
  };
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
  socials: {
    name: string;
    url: string;
    icon: string;
    handle: string;
  }[];
  contact: {
    email: string;
    phone?: string;
    calendly?: string;
    discord?: string;
  };
}
