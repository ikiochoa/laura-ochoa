---
title: Italiano in giro
summary: A mobile-friendly app to learn Italian together, from A1 to C2, with a weekly race between friends.
stage: done
url: https://italiano-in-giro.netlify.app/
screenshots:
  - src: ../../assets/projects/italiano-in-giro/home.png
    alt: The home screen, with today's words, the verb drill and your level.
  - src: ../../assets/projects/italiano-in-giro/practice.png
    alt: A practice question. Pick what the word means, or listen to it with an Italian voice.
online: true
stack:
  - name: HTML, CSS and JavaScript
    role: The whole app is plain web files, no framework, so it loads fast on a phone.
  - name: Supabase
    role: Stores everyone's progress, groups and word lists. Its security rules make sure people only see what they should.
  - name: Google sign-in
    role: One tap to log in, and your progress follows you from phone to laptop.
  - name: Claude API
    role: Writes a word list for any topic you type, at your level, through a small Netlify function.
  - name: Netlify
    role: Hosts the app and runs that function.
  - name: Claude Code
    role: My building partner. We designed and built it together.
---

We love Italy, and Liguria above all. We go often and have many friends there, so I'm very motivated to keep learning Italian. I wanted an app that makes practising part of every day and that I can share with friends. Italiano in giro follows the levels of the CILS exam, from A1 to C2, with vocabulary and verbs for each one.

- **Practice a little every day.** Words come back with spaced repetition, from multiple choice to listening to typing, with an Italian voice. Verbs have their own drill, and each tense appears at the level where the exam introduces it.
- **Your own topics.** Type a topic, like renovating a flat or going to the doctor, and the app suggests a ready-made list or asks Claude to write one.
- **Learn together.** Create a group and share its code. A teacher can give the group word lists and set a weekly challenge, and everyone races for points from Monday to Sunday.
- **Levels are earned.** You move up once you know 80% of a level's words and verb forms.

The code is public on [GitHub](https://github.com/ikiochoa/italiano-in-giro).
