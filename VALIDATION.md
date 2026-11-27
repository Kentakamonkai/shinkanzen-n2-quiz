# Validation record

Updated: 2026-11-27

- [x] 正解位置の配分：A/B/C/D 各25問。
- [x] 空欄問題100問を、正解の助詞などが空欄の直前に重複していないか点検。例「忙しい日（　　　）」は「忙しい日に（　　　）」ではなくなっている。
- [x] 9言語それぞれに100問の翻訳、8言語に41項目の説明を確認。
- [x] 「間違えた問題」欄の選択肢、正解、説明、翻訳を保存済みセッションから再構成できるように補強。

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

## Data integrity

- [x] Exactly 100 question records.
- [x] Chapter split: 13 / 13 / 12 / 12 / 12 / 13 / 13 / 12.
- [x] Exactly four answer options per question.
- [x] Every answer index is between 0 and 3.
- [x] Every question references an existing grammar entry.
- [x] All 100 question prompts are unique.
- [x] No question contains duplicate answer-option strings.
- [x] All 41 grammar entries have a concise glossary in all nine selected languages.
- [x] The 15 chapter 6–8 review examples have translations in all nine languages.
- [x] app.js parses successfully after the latest changes.
- [x] Every static element ID referenced by app.js exists in index.html; no duplicate IDs were found.

## Feature implementation

- [x] Japanese-only first page with the exam date, class N631, and a small creator credit shown only on the home screen.
- [x] Language selection followed by a subject-selection screen.
- [x] Current subject card: 文法 N2.
- [x] Review accordions for all eight chapters and all 41 grammar forms.
- [x] Quick-reference section hidden when no chapter 6–8 grammar appears in the answer choices.
- [x] Larger pixel-art mascot inside the question frame, speech bubble, and different moods.
- [x] Direct navigation to any question from 1 to 100.
- [x] 「わからない」 answer control.
- [x] Context-specific French hints sourced from each question's hint field; localized grammar glosses shown in other languages.
- [x] Answer feedback shows the completed Japanese sentence and the selected language's grammar gloss. French feedback also shows a nuance note and contextual clue.
- [x] Varied encouraging feedback in all nine languages.
- [x] Multiple automatic session saves, timestamped at session creation, with progress and completed-session charts / review points.
- [x] Saved-session heading, descriptions, dates, progress labels, results, review points, and actions default to Japanese and switch to the selected language across all nine locales.
- [x] Older single-session local progress can be migrated into the new save list.
- [x] Hints and 50/50 do not reduce the score; hint usage is counted in the result.

## Important limits

- Saves are stored in localStorage on the current browser/device. There is no account or cloud synchronization.
- The review examples for lessons 1–5 currently appear in Japanese only. The examples for lessons 6–8 have translations in the nine interface languages.
- Full translations of every completed quiz sentence into all nine languages have not yet been added. The result feedback is structured around the completed Japanese sentence and the translated grammar explanation.
- Short translations and explanations are study aids, not certified translations.

## Still to verify manually

- [ ] Open the public GitHub Pages URL and confirm the new version has deployed.
- [ ] Test the complete path: language → subject → grammar review → quiz.
- [ ] Open several chapter accordions and verify the 41 grammar cards are readable.
- [ ] Test question-number navigation, including directly opening question 62.
- [ ] Test 「わからない」, hints, and 50/50.
- [ ] Complete a session, return home, and confirm its timestamp, score, chapter graph, and review points appear in the save list.
- [ ] Start a second session and confirm both sessions remain available.
- [ ] Close and reopen the browser to confirm localStorage resume.
- [ ] Have Japanese grammar distinctions, distractors, and localized texts reviewed by a Japanese-language teacher / native-language reviewers.
