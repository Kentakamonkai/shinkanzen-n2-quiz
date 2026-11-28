# Validation record

Updated: 2026-11-28

## Automated source and data checks

- [x] `app.js`, `data.js`, `question-translations.js`, and `question-explanations.js` parse without JavaScript syntax errors.
- [x] All interface keys used by `data-i18n` and literal `t(...)` calls are present in all 11 selectable language dictionaries.
- [x] Missing interface text falls back to French / English rather than rendering a raw internal key such as `questionCount`.
- [x] All four accessibility / validation labels (question range, question bank error, home panda description, panda description) have localized values in all 11 languages.
- [x] Native names appear in the language selector for all 11 languages.
- [x] Every static element ID referenced by `app.js` exists in `index.html`; no duplicate IDs were found.
- [x] The five loaded asset URLs in `index.html` use the same cache version.
- [x] Exactly 100 question records and 41 grammar records.
- [x] Chapter split: 13 / 13 / 12 / 12 / 12 / 13 / 13 / 12.
- [x] Exactly four answer options per question; every answer index is between 0 and 3.
- [x] Every question references an existing grammar entry; all 100 prompts are unique.
- [x] All 100 quiz question translations exist in each of the 11 languages.
- [x] All 41 glossary entries have explanations in all 11 languages.
- [x] Each of the 11 explanation languages has contextual explanations for all 41 grammar patterns (French explanations are stored in `app.js`).
- [x] The 15 review examples in chapters 6–8 have translations in the original nine languages; all 41 examples have English and Belarusian translations.
- [x] Saved-session UI and group labels exist for Japanese and all 11 selectable languages.
- [x] English and Belarusian saved-session group labels are not overwritten by the session-text dictionaries.
- [x] The quick-reference area checks grammar forms across all eight chapters and shows matching forms found in the question or answer choices.

## Project identity

- Target class: N631
- Target exam date: 2026-12-09
- Current subject: 文法 N2

## Grammar scope

The chapter/grammar scope follows the publisher's official contents page:
https://www.3anet.co.jp/np/books/3602/

The data file contains 41 grammar forms across lessons 1–8:

1. Lesson 1: ～際（に）; ～に際して・～にあたって; ～たとたん（に）; ～（か）と思うと・～（か）と思ったら; ～か～ないかのうちに
2. Lesson 2: ～最中だ; ～うちに; ～ばかりだ・～一方だ; ～（よ）うとしている; ～つつある; ～つつ
3. Lesson 3: ～てはじめて; ～上（で）; ～次第; ～て以来・～てこのかた; ～てからでないと・～てからでなければ
4. Lesson 4: ～をはじめ（として）; ～からして; ～にわたって; ～を通じて・～を通して; ～限り; ～だけ
5. Lesson 5: ～に限り; ～限り（は）; ～限りでは; ～に限って
6. Lesson 6: ～に限らず; ～のみならず; ～ばかりか; ～はもとより; ～上（に）
7. Lesson 7: ～に関して; ～をめぐって; ～にかけては; ～に対して; ～にこたえて
8. Lesson 8: ～をもとに（して）; ～に基づいて; ～に沿って; ～のもとで・～のもとに; ～向けだ

All quiz sentences and answer choices are newly written for practice and are not copied from the textbook.

## Feature implementation

- [x] Language selection followed by subject selection.
- [x] Review accordions for all eight chapters and all 41 grammar forms.
- [x] Japanese-only questions and answer choices; localized interface and explanations in 11 languages.
- [x] Question counter, question-type prompt, navigation, pause / resume, restart warning, and result screens use localized text.
- [x] Language selector shows native-language names; accessible labels and panda image descriptions are localized.
- [x] 50/50 and 「わからない」 answer controls.
- [x] Answer feedback shows the correct answer, the translated question, and a grammar explanation.
- [x] The quick-reference panel shows grammar patterns found in the question and choices, across chapters 1–8.
- [x] Pixel-art mascot, speech bubble, and different moods.
- [x] Multiple automatic session saves, timestamped at session creation, with progress and completed-session charts / review points.
- [x] Saved-session headings, descriptions, dates, progress labels, results, review points, and actions default to Japanese and switch to the selected language across all 11 locales.
- [x] Older single-session local progress can be migrated into the new save list.
- [x] 50/50 use is tracked and does not reduce the score.

## Important limits

- Saves are stored in `localStorage` on the current browser/device. There is no account or cloud synchronization.
- For the nine original interface languages, localized translations of the review examples are available for chapters 6–8 only. English and Belarusian have translations for all 41 review examples.
- The interface and question translations are study aids, not certified translations. Native-speaker / teacher review is recommended before wide classroom distribution.

## Still to verify manually

- [ ] Confirm the public GitHub Pages deployment and visually inspect the home, subject, review, quiz, pause, and result screens.
- [ ] Change through all 11 languages and inspect long labels, buttons, validation messages, and saved-session headings.
- [ ] Test question-number navigation, including directly opening question 62 and entering invalid values.
- [ ] Test 「わからない」 and 50/50.
- [ ] Complete a session, return home, and confirm its timestamp, score, chapter graph, and review points appear in the save list.
- [ ] Start a second session and confirm both sessions remain available.
- [ ] Close and reopen the browser to confirm localStorage resume.
- [ ] Have Japanese grammar distinctions, distractors, and localized texts reviewed by a Japanese-language teacher / native-language reviewers.
