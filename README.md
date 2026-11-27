# Shin Kanzen Master N2 — Grammar Quest

A static, multilingual JLPT N2 grammar quiz based on the first eight lessons of *新完全マスター文法 日本語能力試験N2*.

## What is included

- 100 original multiple-choice questions, four options each, in Japanese.
- A mixed question order, without showing chapter labels during practice.
- Coverage of 41 grammar forms from chapters 1–8.
- A multilingual interface and concise grammar glosses in Vietnamese, Simplified Chinese, Traditional Chinese (Taiwan), Korean, Spanish, Italian, Nepali, Burmese, and French.
- A pre-quiz review sheet for every grammar form in chapters 6–8.
- Contextual hint and 50/50 buttons. Neither affects the score.
- Immediate correction, progress saving, pause/resume, restart, chapter-level results, and a summary of recurring grammar errors.
- Responsive layout for desktop and mobile. No account, backend, or timer is required.
- A small CSS pixel-art guide character, intentionally used as a temporary placeholder.

## Run locally

Open `index.html` in a modern browser. The quiz is entirely client-side.

## Publish with GitHub Pages

1. Open this repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch `main` and folder `/(root)`, then save.
4. After GitHub Pages finishes deploying, the site should be available at:

   https://kentakamonkai.github.io/shinkanzen-n2-quiz/

GitHub's official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Grammar scope and provenance

The chapter/grammar scope follows the publisher's official contents page for the book:
https://www.3anet.co.jp/np/books/3602/

All quiz sentences and answer choices in this project are newly written for practice; the project does not reproduce textbook exercises. The publisher lists 211 grammar forms across the full book. This quiz deliberately covers only the first eight lessons in Part 1.

## Files

- `index.html` — page structure and screens
- `styles.css` — visual design and responsive layout
- `data.js` — the 41 grammar entries and 100 questions
- `app.js` — quiz logic, translations, progress, and results
- `VALIDATION.md` — scope notes and validation checklist

## Known limitations

This is an initial usable version. The short glosses and interface translations have not been reviewed by professional translators. The grammar explanations are deliberately concise; consult the textbook for full explanations. Cross-browser manual testing and GitHub Pages deployment still need to be completed.