# laura-ochoa

My personal space to tell people about who I am: my story, my work, and a garden of ideas, book notes and projects.

Live at https://ikiochoa.github.io/laura-ochoa/ once GitHub Pages is switched on (Settings › Pages › Source: GitHub Actions).

## Where things live

| What | File |
| --- | --- |
| Me: intro, places, languages, links | `src/data/profile.ts` |
| My story: career chapters, skills, what's next, hobbies | `src/data/profile.ts` |
| People who shaped my thinking | `thinkers` in `src/data/profile.ts` |
| Thoughts on how I see the world | `src/content/thoughts/*.md` |
| Books and highlights | `src/content/books/*.md` |
| Projects (stage: `idea`, `in-progress` or `done`) | `src/content/projects/*.md` |

To add a thought or a book, copy the `_example.md` file in its folder and remove `draft: true`.

## Pages

- `/` home: who I am, my story in chapters, latest thoughts and projects
- `/story/` career chapters, `/story/skills/` skills and what's next, `/story/beyond-work/` hobbies, places and languages
- `/thoughts/` how I see the world, `/thoughts/bookshelf/` books and highlights, `/thoughts/people/` people who shaped me
- `/projects/` everything I build, grouped by stage, each with its own page
- `/hello/` how to reach me

## Running locally

```sh
npm install
npm run dev
```

## How changes ship

Every change goes through a pull request. The **Build and deploy** workflow builds the site on each PR and deploys it to GitHub Pages when the PR is merged into `main`.
