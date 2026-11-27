# Validation record

Updated: 2026-11-27

## Grammar scope

The chapter/grammar scope follows the publisher's official contents page for the book:
https://www.3anet.co.jp/np/books/3602/

The 41 grammar forms included in the first eight lessons are:

1. **Lesson 1:** ～際（に）; ～に際して・～にあたって; ～たとたん（に）; ～（か）と思うと・～（か）と思ったら; ～か～ないかのうちに
2. **Lesson 2:** ～最中だ; ～うちに; ～ばかりだ・～一方だ; ～（よ）うとしている; ～つつある; ～つつ
3. **Lesson 3:** ～てはじめて; ～上（で）; ～次第; ～て以来・～てこのかた; ～てからでないと・～てからでなければ
4. **Lesson 4:** ～をはじめ（として）; ～からして; ～にわたって; ～を通じて・～を通して; ～限り; ～だけ
5. **Lesson 5:** ～に限り; ～限り（は）; ～限りでは; ～に限って
6. **Lesson 6:** ～に限らず; ～のみならず; ～ばかりか; ～はもとより; ～上（に）
7. **Lesson 7:** ～に関して; ～をめぐって; ～にかけては; ～に対して; ～にこたえて
8. **Lesson 8:** ～をもとに（して）; ～に基づいて; ～に沿って; ～のもとで・～のもとに; ～向けだ

All quiz sentences are newly written for practice and are not copied from the textbook.

## Data integrity checks

Static checks against the files reread from the committed `main` branch:

- [x] Exactly 100 question records.
- [x] Chapter split: 13 / 13 / 12 / 12 / 12 / 13 / 13 / 12.
- [x] Exactly four answer options per question.
- [x] Every answer index is between 0 and 3.
- [x] Every question references an existing grammar entry.
- [x] All 100 question prompts are unique.
- [x] No question contains duplicate answer-option strings.
- [x] JavaScript source parses without a syntax error (compile-only check).
- [x] All 41 grammar entries have a concise glossary in all nine selected languages.
- [x] All 15 lesson 6–8 review examples have translations in all nine languages.

## Feature checklist

- [x] Language selection in the requested order: Vietnamese, Simplified Chinese, Traditional Chinese (Taiwan), Korean, Spanish, Italian, Nepali, Burmese, French.
- [x] Japanese-only prompts and answer options.
- [x] Mixed question order and no chapter label during the quiz.
- [x] Review cards for all 15 grammar forms in lessons 6–8, with form, short meaning, Japanese example, and translated example.
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
- [ ] Have the translations and fine distinctions in the distractors reviewed by a qualified Japanese-language teacher / native-language reviewers.

## Translation and pedagogical note

Translations are concise study aids, not certified translations. The quiz feedback gives a brief explanation and a localized gloss; finer grammatical distinctions may require the full textbook explanation. The question sentences are newly authored and should be reviewed by a Japanese-language instructor before classroom-wide use.