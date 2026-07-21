import type { Lang } from '@/i18n/ui';

export const SKILLS: Record<Lang, { group: string; items: string[] }[]> = {
  es: [
    { group: 'Lenguajes', items: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
    { group: 'Frameworks', items: ['FastAPI', 'NestJS', 'Django / DRF', 'React', 'Next.js', 'Astro'] },
    { group: 'IA / ML', items: ['LLM Integration', 'CrewAI', 'RAG', 'Claude API', 'GPT-4', 'Prompt Engineering'] },
    { group: 'Infra', items: ['AWS (Lambda, EC2, S3)', 'Azure', 'GCP', 'Docker', 'GitHub Actions', 'Azure DevOps'] },
  ],
  en: [
    { group: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
    { group: 'Frameworks', items: ['FastAPI', 'NestJS', 'Django / DRF', 'React', 'Next.js', 'Astro'] },
    { group: 'AI / ML', items: ['LLM Integration', 'CrewAI', 'RAG', 'Claude API', 'GPT-4', 'Prompt Engineering'] },
    { group: 'Infra', items: ['AWS (Lambda, EC2, S3)', 'Azure', 'GCP', 'Docker', 'GitHub Actions', 'Azure DevOps'] },
  ],
};

export const CERTIFICATIONS: Record<Lang, { title: string; desc: string }[]> = {
  es: [
    { title: 'Toptal Top 3%', desc: 'Red global de desarrolladores — seleccionado como talento élite.' },
    { title: 'AWS Certified', desc: 'Arquitectura cloud y despliegues serverless.' },
    { title: 'Azure DevOps', desc: 'Pipelines CI/CD y automatización de grado enterprise.' },
  ],
  en: [
    { title: 'Toptal Top 3%', desc: 'Global developer network — vetted for elite talent.' },
    { title: 'AWS Certified', desc: 'Cloud architecture and serverless deployments.' },
    { title: 'Azure DevOps', desc: 'CI/CD pipelines and enterprise-grade automation.' },
  ],
};

export const SOCIALS = [
  { icon: 'github', label: 'GitHub', value: 'github.com/DiegoAlvarezH', href: 'https://github.com/DiegoAlvarezH' },
  { icon: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/diegoalvarezh', href: 'https://linkedin.com/in/diegoalvarezh' },
  { icon: 'mail', label: 'Email', value: 'diegoah905@gmail.com', href: 'mailto:diegoah905@gmail.com' },
  { icon: 'globe', label: 'Website', value: 'diegoalvarez.tech', href: 'https://diegoalvarez.tech' },
] as const;

export const MARQUEE_ITEMS = [
  'LLM Integration',
  'RAG Pipelines',
  'CrewAI',
  'Playwright',
  'TypeScript',
  'AWS',
  'Azure DevOps',
  'FastAPI',
  'NestJS',
  'Docker',
  'CI/CD',
  'Supabase',
];
