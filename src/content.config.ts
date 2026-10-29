import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Reflections on how I see the world.
const thoughts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/thoughts' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    written: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

// Books I've read, with my notes and highlights (Kindle or paper).
const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    read: z.string(),
    format: z.enum(['kindle', 'paper']).optional(),
    highlights: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Things I build, from a first idea to done.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    stage: z.enum(['idea', 'in-progress', 'done']),
    url: z.string().url().optional(),
    // A page on this website that is the project itself; the card links straight there.
    page: z.string().optional(),
    // Whether the project is live on the internet, shown as a green dot.
    online: z.boolean().default(false),
    // The tech stack, each tool with a line on what it does in this project.
    stack: z.array(z.object({ name: z.string(), role: z.string() })).default([]),
    // Screenshots of the project, paths relative to the Markdown file.
    screenshots: z.array(z.object({ src: image(), alt: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { thoughts, books, projects };
