import { getCollection } from 'astro:content';

export const projectStages = { idea: 'Idea', 'in-progress': 'In progress', done: 'Done' } as const;

export const getProjects = () => getCollection('projects', ({ data }) => !data.draft);

export async function getThoughts() {
  const thoughts = await getCollection('thoughts', ({ data }) => !data.draft);
  return thoughts.sort((a, b) => b.data.written.getTime() - a.data.written.getTime());
}

export const getBooks = () => getCollection('books', ({ data }) => !data.draft);
