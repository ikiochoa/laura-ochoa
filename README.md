# laura-ochoa

My personal space to tell people about who I am: my story, my work, and a garden of ideas, book notes and projects.

Live at https://ikiochoa.github.io/laura-ochoa/ once GitHub Pages is switched on (Settings › Pages › Source: GitHub Actions).

## Where things live

| What | File |
| --- | --- |
| Me: intro, places, languages, links | `src/data/profile.ts` |
| My career, as chapters | `chapters` in `src/data/profile.ts` |
| Ideas | `src/content/ideas/*.md` |
| Book notes | `src/content/books/*.md` |
| Projects | `src/content/projects/*.md` |

To add an idea or a book note, copy the `_example.md` file in its folder and remove `draft: true`. Each note has a stage: `seedling` (fresh thought), `growing` (being worked on) or `evergreen` (settled thinking).

## Pages

- `/` home: who I am, my story in chapters, latest from the garden
- `/story/` the full story
- `/garden/` every idea, book note and project
- `/bookshelf/` book notes, each with its own page
- `/projects/` projects, each with its own page
- `/hello/` how to reach me

## Running locally

```sh
npm install
npm run dev
```

## How changes ship

Every change goes through a pull request. The **Build and deploy** workflow builds the site on each PR and deploys it to GitHub Pages when the PR is merged into `main`.
