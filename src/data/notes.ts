import { getCollection } from 'astro:content';

export const stageLabel = { seedling: 'Seedling', growing: 'Growing', evergreen: 'Evergreen' } as const;

export type Note = {
  kind: 'Idea' | 'Book note' | 'Project';
  title: string;
  summary: string;
  stage: keyof typeof stageLabel;
  href: string;
  date?: Date;
};

// Every published note in the garden, newest first.
export async function getNotes(): Promise<Note[]> {
  const base = import.meta.env.BASE_URL;
  const [ideas, books, projects] = await Promise.all([
    getCollection('ideas', ({ data }) => !data.draft),
    getCollection('books', ({ data }) => !data.draft),
    getCollection('projects', ({ data }) => !data.draft),
  ]);
  const notes: Note[] = [
    ...ideas.map((e) => ({
      kind: 'Idea' as const,
      title: e.data.title,
      summary: e.data.summary,
      stage: e.data.stage,
      href: `${base}ideas/${e.id}/`,
      date: e.data.tended ?? e.data.planted,
    })),
    ...books.map((e) => ({
      kind: 'Book note' as const,
      title: e.data.title,
      summary: `${e.data.author}`,
      stage: e.data.stage,
      href: `${base}bookshelf/${e.id}/`,
      date: e.data.tended,
    })),
    ...projects.map((e) => ({
      kind: 'Project' as const,
      title: e.data.title,
      summary: e.data.summary,
      stage: e.data.stage,
      href: `${base}projects/${e.id}/`,
    })),
  ];
  return notes.sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));
}
