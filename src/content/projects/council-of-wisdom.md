---
title: Council of Wisdom
summary: A council of thinkers I admire, to help me think a life decision through from every side.
stage: in-progress
url: https://council-of-wisdom-pi.vercel.app/
online: true
screenshots:
  - src: ../../assets/projects/council-of-wisdom/ask.jpg
    alt: Asking the council. Describe a decision, and the moderator picks three to five voices.
  - src: ../../assets/projects/council-of-wisdom/council.jpg
    alt: My council. Each voice with its lenses, books and my highlights, and a switch to bench it.
stack:
  - name: Claude
    role: Gives each thinker on the council their own voice. A fast, low-cost model answers, with a monthly spending cap.
  - name: HTML, CSS and JavaScript
    role: The page itself, kept simple, with no framework.
  - name: Vercel
    role: Hosts the page and the small server functions that handle sign-in, invites and the calls to Claude.
  - name: Neon
    role: A Postgres database for members, invites and saved conversations, which stay private to each person.
  - name: Google sign-in
    role: People sign in with their Google account, and only with an invite link from a member.
  - name: Markdown and YAML
    role: One profile per thinker, plus my Kindle highlights sorted by voice, and a roster of who sits on the council.
  - name: Claude Code
    role: My building partner. We designed and built it together.
---

Some decisions deserve more than one perspective. I describe a decision, and three to five voices answer, each from its own lens: body, mind, emotion and systems. Then I reply, ask for a summary of where they agree and where they clash, and save the conversation to come back to later.

The council has 27 voices inspired by thinkers who shaped me, among them Gabor Maté, Friedemann Schulz von Thun, Esther Perel, Irvin Yalom, Daniel Kahneman and Thich Nhat Hanh. Each one is built from their published ideas and from the passages I highlighted in their books. They are not those people, and nothing they say is medical, legal or financial advice.

The council is invite-only: you sign in with Google and need an invite link from someone who is already a member.
