# Validation record

Updated: 2026-11-27

## Grammar scope

The publisher's official contents page confirms the lesson sequence and the grammar forms included in lessons 1–8:
https://www.3anet.co.jp/np/books/3602/

The implementation contains 41 grammar entries across those lessons. The review screen covers every listed form in lessons 6–8.

## Data integrity checks

Static checks against the committed source data:

- [x] Exactly 100 question records.
- [x] Chapter split: 13 / 13 / 12 / 12 / 12 / 13 / 13 / 12.
- [x] Exactly four answer options per question.
- [x] Every answer index is between 0 and 3.
- [x] Every question references an existing grammar entry.
- [x] All 100 question prompts are unique.
- [x] No question contains duplicate answer-option strings.
- [x] JavaScript source parses without a syntax error (compile-only check).

## Feature checklist

- [x] Language selection in the requested order: Vietnamese, Simplified Chinese, Traditional Chinese (Taiwan), Korean, Spanish, Italian, Nepali, Burmese, French.
- [x] Japanese-only prompts and answer options.
- [x] Mixed question order and no chapter label during the quiz.
- [x] Review cards for all 15 grammar forms in lessons 6–8.
- [x] Contextual hint button and 50/50 elimination.
- [x] Hints and 50/50 do not subtract points; hint usage is counted in the final summary.
- [x] Immediate correction and locked answer after selection.
- [x] Local progress save, resume, pause, restart.
- [x] Final score, chapter statistics, wrong answers, recurring grammar errors.
- [x] Responsive desktop/mobile styling.
- [x] Temporary generic pixel-art guide built in CSS.

## Still to verify manually

- [ ] Full interaction test in a desktop browser.
- [ ] Full interaction test on a mobile browser.
- [ ] Confirm the localStorage resume flow across a browser restart.
- [ ] Enable GitHub Pages and verify the public deployment URL.
- [ ] Have the translations and the fine distinctions in the distractors reviewed by a qualified Japanese-language teacher / native-language reviewers.

## Translation and pedagogical note

Translations are concise study aids, not certified translations. The feedback explains the selected form at a high level; some finer grammatical distinctions require the full textbook explanation. Question sentences are newly authored and should be reviewed by a Japanese-language instructor before classroom-wide use.