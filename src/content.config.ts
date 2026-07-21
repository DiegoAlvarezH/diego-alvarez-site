import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Convención: cada colección tiene subcarpetas es/ y en/ con el MISMO nombre
// de archivo por entrada — el slug compartido hace funcionar el toggle de idioma.

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tag: z.string(),
    readTime: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    tag: z.string(),
    name: z.string(),
    desc: z.string(),
    tech: z.array(z.string()),
    order: z.number(),
    githubUrl: z.string().url().nullable().default(null),
    demoUrl: z.string().url().nullable().default(null),
    deprecated: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    period: z.string(),
    location: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { blog, projects, experience };
