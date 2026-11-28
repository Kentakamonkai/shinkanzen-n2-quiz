"use strict";
const DATA=window.GRAMMAR_QUIZ_DATA, STORE_KEY="shinkanzen-n2-quiz-v1";
const LANGS=["vi","zh-CN","zh-TW","ko","es","it","ne","my","fr","en","be"];
const UI={
vi:{eyebrow:"Biến ngữ pháp thành kỹ năng.",subtitle:"新完全マスター文法 · Bài 1–8",step1:"BƯỚC 01",chooseLanguage:"Chọn ngôn ngữ giải thích",languageNote:"Câu hỏi và lựa chọn luôn bằng tiếng Nhật.",language:"Ngôn ngữ",prepare:"Xem bảng ôn tập",savedProgress:"Tìm thấy phiên học đã lưu.",resume:"Tiếp tục",step2:"BƯỚC 02",reviewTitle:"Ôn tập ngữ pháp · Bài 6–8",reviewIntro:"Xem lại cấu trúc, cách dùng và sắc thái trước khi bắt đầu.",back:"Quay lại",startQuiz:"Bắt đầu bài kiểm tra",practice:"LUYỆN TẬP",pause:"Tạm dừng",restart:"Làm lại",fifty:"50/50",next:"Câu tiếp theo",quickReference:"TRA CỨU NHANH",referenceNote:"Bài 6–8 · cấu trúc trong các lựa chọn",paused:"Đã tạm dừng",pauseText:"Tiến độ đã được lưu trên thiết bị này.",continueQuiz:"Tiếp tục",home:"Trang chủ",finished:"HOÀN THÀNH",resultTitle:"Tổng kết buổi học",score:"Điểm",completed:"Câu đã làm",outOf:"trên 100",chapterResults:"Kết quả theo bài",reviewMistakes:"Nội dung cần ôn lại",missedQuestions:"Câu trả lời sai",retry:"Làm lại 100 câu",correct:"Chính xác!",incorrect:"Chưa chính xác",correctAnswer:"Đáp án đúng",fiftyDone:"Đã loại hai phương án sai.",allCorrect:"Tuyệt vời! Không có câu sai.",noMistakes:"Không có lỗi lặp lại đáng chú ý.",noMisses:"Không có câu sai.",reason:"Đây là cấu trúc phù hợp nhất với ngữ cảnh.",restartConfirm:"Xóa tiến độ hiện tại và bắt đầu lại?" },
"zh-CN":{eyebrow:"把语法变成真正的能力。",subtitle:"新完全マスター文法 · 第1–8课",step1:"步骤 01",chooseLanguage:"选择讲解语言",languageNote:"题目和选项均为日语。",language:"语言",prepare:"查看复习资料",savedProgress:"发现已保存的答题进度。",resume:"继续",step2:"步骤 02",reviewTitle:"语法复习 · 第6–8课",reviewIntro:"开始答题前，先复习语法形式、用法和语感。",back:"返回",startQuiz:"开始测验",practice:"练习模式",pause:"暂停",restart:"重新开始",fifty:"二选一",next:"下一题",quickReference:"快速查阅",referenceNote:"第6–8课 · 选项中的语法",paused:"已暂停",pauseText:"进度已保存在这台设备上。",continueQuiz:"继续测验",home:"首页",finished:"已完成",resultTitle:"本次学习总结",score:"得分",completed:"已完成题目",outOf:"共100题",chapterResults:"各课成绩",reviewMistakes:"需要复习的内容",missedQuestions:"答错的题目",retry:"重新做100题",correct:"回答正确！",incorrect:"回答错误",correctAnswer:"正确答案",fiftyDone:"已排除两个错误选项。",noMistakes:"没有明显重复出现的错误。",noMisses:"没有答错的题目。",reason:"该语法形式最符合句子的语境。",restartConfirm:"要删除当前进度并重新开始吗？"},
"zh-TW":{eyebrow:"把文法轉化為真正的能力。",subtitle:"新完全マスター文法 · 第1–8課",step1:"步驟 01",chooseLanguage:"選擇解說語言",languageNote:"題目和選項皆為日文。",language:"語言",prepare:"查看複習資料",savedProgress:"找到已儲存的作答進度。",resume:"繼續",step2:"步驟 02",reviewTitle:"文法複習 · 第6–8課",reviewIntro:"開始作答前，先複習文法形式、用法與語感。",back:"返回",startQuiz:"開始測驗",practice:"練習模式",pause:"暫停",restart:"重新開始",fifty:"二選一",next:"下一題",quickReference:"快速查閱",referenceNote:"第6–8課 · 選項中的文法",paused:"已暫停",pauseText:"進度已儲存在這台裝置上。",continueQuiz:"繼續測驗",home:"首頁",finished:"已完成",resultTitle:"本次學習總結",score:"得分",completed:"已完成題目",outOf:"共100題",chapterResults:"各課成績",reviewMistakes:"需要複習的內容",missedQuestions:"答錯的題目",retry:"重新作答100題",correct:"回答正確！",incorrect:"回答錯誤",correctAnswer:"正確答案",fiftyDone:"已排除兩個錯誤選項。",noMistakes:"沒有明顯重複出現的錯誤。",noMisses:"沒有答錯的題目。",reason:"此文法形式最符合句子的語境。",restartConfirm:"要刪除目前進度並重新開始嗎？"},
ko:{eyebrow:"문법을 실력으로.",subtitle:"新完全マスター文法 · 1~8과",step1:"단계 01",chooseLanguage:"해설 언어 선택",languageNote:"문제와 선택지는 일본어로 제공됩니다.",language:"언어",prepare:"복습 자료 보기",savedProgress:"저장된 학습 기록을 찾았습니다.",resume:"이어하기",step2:"단계 02",reviewTitle:"문법 복습 · 6~8과",reviewIntro:"퀴즈를 시작하기 전에 문형, 용법, 뉘앙스를 복습하세요.",back:"뒤로",startQuiz:"퀴즈 시작",practice:"연습 모드",pause:"일시 정지",restart:"다시 시작",fifty:"50:50",next:"다음 문제",quickReference:"빠른 문법 참조",referenceNote:"6~8과 · 선택지에 등장하는 문형",paused:"일시 정지됨",pauseText:"진행 상황이 이 기기에 저장되었습니다.",continueQuiz:"퀴즈 계속하기",home:"홈",finished:"완료",resultTitle:"학습 결과",score:"점수",completed:"완료한 문제",outOf:"총 100문제",chapterResults:"과별 결과",reviewMistakes:"복습할 내용",missedQuestions:"틀린 문제",retry:"100문제 다시 풀기",correct:"정답입니다!",incorrect:"오답입니다",correctAnswer:"정답",fiftyDone:"오답 두 개를 제외했습니다.",noMistakes:"반복적으로 틀린 문형이 없습니다.",noMisses:"틀린 문제가 없습니다.",reason:"이 문법 형식이 문맥에 가장 잘 맞습니다.",restartConfirm:"현재 진행 상황을 지우고 다시 시작할까요?"},
es:{eyebrow:"Convierte la gramática en habilidad.",subtitle:"新完全マスター文法 · Capítulos 1–8",step1:"PASO 01",chooseLanguage:"Elige el idioma de las explicaciones",languageNote:"Las preguntas y opciones están en japonés.",language:"Idioma",prepare:"Ver la ficha de repaso",savedProgress:"Se ha encontrado una sesión guardada.",resume:"Continuar",step2:"PASO 02",reviewTitle:"Repaso de gramática · capítulos 6–8",reviewIntro:"Repasa las formas, sus usos y matices antes de empezar.",back:"Volver",startQuiz:"Empezar el cuestionario",practice:"MODO DE PRÁCTICA",pause:"Pausa",restart:"Reiniciar",fifty:"50/50",next:"Siguiente pregunta",quickReference:"CONSULTA RÁPIDA",referenceNote:"Capítulos 6–8 · formas en las opciones",paused:"Sesión en pausa",pauseText:"Tu progreso se ha guardado en este dispositivo.",continueQuiz:"Continuar el cuestionario",home:"Inicio",finished:"SESIÓN COMPLETADA",resultTitle:"Balance de la sesión",score:"Puntuación",completed:"Preguntas completadas",outOf:"de 100",chapterResults:"Resultados por capítulo",reviewMistakes:"Temas que conviene repasar",missedQuestions:"Preguntas falladas",retry:"Repetir las 100 preguntas",correct:"¡Correcto!",incorrect:"No es correcto",correctAnswer:"Respuesta correcta",fiftyDone:"Se han eliminado dos opciones incorrectas.",noMistakes:"No se observan errores repetidos.",noMisses:"No hay preguntas incorrectas.",reason:"Esta forma gramatical es la que mejor encaja en el contexto.",restartConfirm:"¿Borrar el progreso actual y empezar de nuevo?"},
it:{eyebrow:"Trasforma la grammatica in abilità.",subtitle:"新完全マスター文法 · Capitoli 1–8",step1:"PASSO 01",chooseLanguage:"Scegli la lingua delle spiegazioni",languageNote:"Domande e risposte sono in giapponese.",language:"Lingua",prepare:"Apri la scheda di ripasso",savedProgress:"È stata trovata una sessione salvata.",resume:"Riprendi",step2:"PASSO 02",reviewTitle:"Ripasso grammaticale · capitoli 6–8",reviewIntro:"Ripassa forme, usi e sfumature prima di iniziare il quiz.",back:"Indietro",startQuiz:"Inizia il quiz",practice:"MODALITÀ ESERCIZIO",pause:"Pausa",restart:"Ricomincia",fifty:"50/50",next:"Domanda successiva",quickReference:"CONSULTAZIONE RAPIDA",referenceNote:"Capitoli 6–8 · forme nelle opzioni",paused:"Sessione in pausa",pauseText:"I tuoi progressi sono salvati su questo dispositivo.",continueQuiz:"Continua il quiz",home:"Home",finished:"SESSIONE COMPLETATA",resultTitle:"Riepilogo della sessione",score:"Punteggio",completed:"Domande completate",outOf:"su 100",chapterResults:"Risultati per capitolo",reviewMistakes:"Argomenti da ripassare",missedQuestions:"Domande sbagliate",retry:"Rifai le 100 domande",correct:"Corretto!",incorrect:"Non corretto",correctAnswer:"Risposta corretta",fiftyDone:"Sono state eliminate due opzioni errate.",noMistakes:"Non emergono errori ricorrenti.",noMisses:"Nessuna risposta errata.",reason:"Questa forma grammaticale è la più adatta al contesto.",restartConfirm:"Cancellare i progressi attuali e ricominciare?"},
ne:{eyebrow:"व्याकरणलाई सीपमा बदल्नुहोस्।",subtitle:"新完全マスター文法 · पाठ १–८",step1:"चरण ०१",chooseLanguage:"व्याख्याको भाषा छान्नुहोस्",languageNote:"प्रश्न र विकल्प जापानी भाषामा छन्।",language:"भाषा",prepare:"पुनरावृत्ति सामग्री हेर्नुहोस्",savedProgress:"सुरक्षित गरिएको अभ्यास भेटियो।",resume:"जारी राख्नुहोस्",step2:"चरण ०२",reviewTitle:"व्याकरण पुनरावृत्ति · पाठ ६–८",reviewIntro:"क्विज सुरु गर्नुअघि रूप, प्रयोग र सूक्ष्म अर्थ पुनरावलोकन गर्नुहोस्।",back:"पछाडि",startQuiz:"क्विज सुरु गर्नुहोस्",practice:"अभ्यास मोड",pause:"रोक्नुहोस्",restart:"फेरि सुरु गर्नुहोस्",fifty:"५०/५०",next:"अर्को प्रश्न",quickReference:"छिटो सन्दर्भ",referenceNote:"पाठ ६–८ · विकल्पमा आएका व्याकरण रूप",paused:"अभ्यास रोकिएको छ",pauseText:"तपाईंको प्रगति यही उपकरणमा सुरक्षित छ।",continueQuiz:"क्विज जारी राख्नुहोस्",home:"मुखपृष्ठ",finished:"सत्र पूरा भयो",resultTitle:"सत्रको नतिजा",score:"अङ्क",completed:"पूरा गरिएका प्रश्न",outOf:"१०० मध्ये",chapterResults:"पाठअनुसार नतिजा",reviewMistakes:"पुनरावृत्ति गर्नुपर्ने विषय",missedQuestions:"गलत उत्तर भएका प्रश्न",retry:"१०० प्रश्न फेरि गर्नुहोस्",correct:"सही!",incorrect:"गलत उत्तर",correctAnswer:"सही उत्तर",fiftyDone:"दुईवटा गलत विकल्प हटाइयो।",noMistakes:"बारम्बार दोहोरिएका गल्ती भेटिएनन्।",noMisses:"गलत उत्तर छैन।",reason:"यो व्याकरण रूप वाक्यको सन्दर्भसँग सबैभन्दा उपयुक्त छ।",restartConfirm:"हालको प्रगति मेटाएर फेरि सुरु गर्ने?"},
my:{eyebrow:"သဒ္ဒါကို ကျွမ်းကျင်မှုအဖြစ် ပြောင်းလဲပါ။",subtitle:"新完全マスター文法 · အခန်း ၁–၈",step1:"အဆင့် ၀၁",chooseLanguage:"ရှင်းလင်းချက်ဘာသာစကား ရွေးပါ",languageNote:"မေးခွန်းနှင့် ရွေးချယ်စရာများသည် ဂျပန်ဘာသာဖြစ်သည်။",language:"ဘာသာစကား",prepare:"ပြန်လည်လေ့လာရန် ဖွင့်ပါ",savedProgress:"သိမ်းထားသော လေ့ကျင့်မှုကို တွေ့ရှိသည်။",resume:"ဆက်လုပ်ရန်",step2:"အဆင့် ၀၂",reviewTitle:"သဒ္ဒါ ပြန်လည်လေ့လာခြင်း · အခန်း ၆–၈",reviewIntro:"စတင်မဖြေဆိုမီ ပုံစံနှင့် အသုံးပြုပုံကို ပြန်ဖတ်ပါ။",back:"နောက်သို့",startQuiz:"မေးခွန်းစတင်ရန်",practice:"လေ့ကျင့်မှု",pause:"ခဏရပ်ရန်",restart:"ပြန်စရန်",fifty:"၅၀/၅၀",next:"နောက်မေးခွန်း",quickReference:"အမြန်ကိုးကားရန်",referenceNote:"အခန်း ၆–၈ · ရွေးချယ်စရာများရှိ သဒ္ဒါပုံစံများ",paused:"ခဏရပ်ထားသည်",pauseText:"သင်၏တိုးတက်မှုကို ဤစက်တွင် သိမ်းထားသည်။",continueQuiz:"ဆက်လက်ဖြေဆိုရန်",home:"ပင်မစာမျက်နှာ",finished:"ပြီးဆုံးပါပြီ",resultTitle:"လေ့လာမှုရလဒ်",score:"ရမှတ်",completed:"ဖြေဆိုပြီးသော မေးခွန်း",outOf:"၁၀၀ ခုအနက်",chapterResults:"အခန်းအလိုက် ရလဒ်",reviewMistakes:"ပြန်လည်လေ့လာရန်",missedQuestions:"မှားယွင်းသော မေးခွန်းများ",retry:"မေးခွန်း ၁၀၀ ကို ပြန်ဖြေပါ",correct:"မှန်ကန်ပါသည်!",incorrect:"မမှန်ပါ",correctAnswer:"အဖြေမှန်",fiftyDone:"မမှန်သော ရွေးချယ်စရာနှစ်ခုကို ဖယ်ရှားထားသည်။",noMistakes:"ထပ်ခါတလဲလဲ မှားသော ပုံစံမတွေ့ပါ။",noMisses:"မှားသောအဖြေ မရှိပါ။",reason:"ဤသဒ္ဒါပုံစံသည် ဝါကျအခြေအနေနှင့် အကိုက်ညီဆုံးဖြစ်သည်။",restartConfirm:"လက်ရှိတိုးတက်မှုကို ဖျက်ပြီး ပြန်စမလား။"},
fr:{eyebrow:"Fais de la grammaire une compétence active.",subtitle:"新完全マスター文法 · Chapitres 1–8",step1:"ÉTAPE 01",chooseLanguage:"Choisis la langue des explications",languageNote:"Les questions et les propositions sont en japonais.",language:"Langue",prepare:"Afficher la fiche de révision",savedProgress:"Une session sauvegardée a été trouvée.",resume:"Reprendre",step2:"ÉTAPE 02",reviewTitle:"Révision grammaticale · chapitres 6 à 8",reviewIntro:"Relis les formes, leurs usages et leurs nuances avant de commencer.",back:"Retour",startQuiz:"Commencer le quiz",practice:"MODE ENTRAÎNEMENT",pause:"Pause",restart:"Recommencer",fifty:"50/50",next:"Question suivante",quickReference:"RÉFÉRENCE RAPIDE",referenceNote:"Chapitres 6 à 8 · formes présentes dans les propositions",paused:"Session en pause",pauseText:"Ta progression est sauvegardée sur cet appareil.",continueQuiz:"Reprendre le quiz",home:"Accueil",finished:"SESSION TERMINÉE",resultTitle:"Bilan de ta session",score:"Score",completed:"Questions terminées",outOf:"sur 100",chapterResults:"Résultats par chapitre",reviewMistakes:"Points à revoir",missedQuestions:"Questions ratées",retry:"Recommencer les 100 questions",correct:"Bonne réponse !",incorrect:"Ce n'est pas la bonne réponse",correctAnswer:"Bonne réponse",fiftyDone:"Deux propositions incorrectes ont été éliminées.",noMistakes:"Aucune erreur récurrente notable.",noMisses:"Aucune réponse incorrecte.",reason:"Cette forme grammaticale est celle qui convient le mieux au contexte.",restartConfirm:"Effacer la progression actuelle et recommencer ?"}
};

UI.en={eyebrow:"Turn grammar into a skill.",subtitle:"新完全マスター文法 · Chapters 1–8",step1:"STEP 01",chooseLanguage:"Choose the explanation language",languageNote:"Questions and answer choices are in Japanese.",language:"Language",prepare:"Open the review guide",savedProgress:"A saved session was found.",resume:"Resume",step2:"STEP 02",reviewTitle:"Grammar review · Chapters 1–8",reviewIntro:"Review the forms, usage and nuances before starting.",back:"Back",startQuiz:"Start the quiz",practice:"PRACTICE MODE",pause:"Pause",restart:"Restart",fifty:"50/50",next:"Next question",quickReference:"REMINDER",referenceNote:"Grammar patterns appearing in the question and choices",paused:"Paused",pauseText:"Your progress has been saved on this device.",continueQuiz:"Continue",home:"Home",finished:"SESSION COMPLETE",resultTitle:"Session summary",score:"Score",completed:"Questions answered",outOf:"out of 100",chapterResults:"Results by chapter",reviewMistakes:"Topics to review",missedQuestions:"Incorrect answers",retry:"Retry all 100 questions",correct:"Correct!",incorrect:"Not quite",correctAnswer:"Correct answer",fiftyDone:"Two incorrect options have been removed.",allCorrect:"Excellent! No incorrect answers.",noMistakes:"No recurring mistakes found.",noMisses:"No incorrect answers.",reason:"This grammar pattern best fits the context.",restartConfirm:"Clear the current progress and start again?"};
UI.be={eyebrow:"Ператвары японскую граматыку ў навык.",subtitle:"新完全マスター文法 · Раздзелы 1–8",step1:"КРОК 01",chooseLanguage:"Выберы мову тлумачэнняў",languageNote:"Пытанні і варыянты адказаў пададзены па-японску.",language:"Мова",prepare:"Адкрыць матэрыялы для паўтарэння",savedProgress:"Знойдзена захаваная сесія.",resume:"Працягнуць",step2:"КРОК 02",reviewTitle:"Паўтарэнне граматыкі · раздзелы 1–8",reviewIntro:"Паўтары формы, ужыванне і адценні значэння перад пачаткам.",back:"Назад",startQuiz:"Пачаць тэст",practice:"ТРЭНІРОЎКА",pause:"Паўза",restart:"Пачаць нанова",fifty:"50/50",next:"Наступнае пытанне",quickReference:"НАГАДВАННЕ",referenceNote:"Граматычныя формы з пытання і варыянтаў адказу",paused:"Паўза",pauseText:"Твой прагрэс захаваны на гэтай прыладзе.",continueQuiz:"Працягнуць тэст",home:"Галоўная",finished:"СЕСІЯ ЗАВЕРШАНА",resultTitle:"Вынікі сесіі",score:"Вынік",completed:"Адказана пытанняў",outOf:"са 100",chapterResults:"Вынікі па раздзелах",reviewMistakes:"Што трэба паўтарыць",missedQuestions:"Памылковыя адказы",retry:"Паўтарыць усе 100 пытанняў",correct:"Правільна!",incorrect:"Няправільна",correctAnswer:"Правільны адказ",fiftyDone:"Два няправільныя варыянты выключаны.",allCorrect:"Выдатна! Няма памылковых адказаў.",noMistakes:"Паўтаральных памылак не выяўлена.",noMisses:"Няма памылковых адказаў.",reason:"Гэтая граматычная форма найлепш адпавядае кантэксту.",restartConfirm:"Ачысціць бягучы прагрэс і пачаць нанова?"};

const GLOSS={
ni_kagirazu:["Không chỉ giới hạn ở…","不限于……","不限於……","~에 한정되지 않고","no solo…","non solo…","…मा मात्र सीमित नभई","…တွင်သာ ကန့်သတ်မထားဘဲ","Pas seulement…"],
nominarazu:["Không những… mà còn… (trang trọng)","不仅……而且……（正式）","不僅……而且……（正式）","~뿐만 아니라（격식）","no solo…, sino también…","non solo…, ma anche…","…मात्र होइन, … पनि","…သာမက …လည်း","Non seulement… mais aussi…"],
bakari_ka:["Không những… mà còn (thêm điều bất ngờ)","不仅……而且还……","不僅……而且還……","~뿐 아니라 ~까지","no solo…, sino que además…","non solo…, ma addirittura…","…मात्र होइन, बरु … पनि","…သာမက ထို့အပြင်…","Non seulement… mais encore…"],
wa_motoyori:["Đương nhiên là… và còn…","不用说……，也……","不用說……，也……","~은 물론이고","por supuesto…, y también…","naturalmente…, e anche…","… त झन् भन्ने नै भयो, साथै…","…သည် ပြောစရာမလိုဘဲ …လည်း","Sans même parler de…"],
ue_ni:["Hơn nữa; thêm một đặc điểm cùng chiều","而且；再加上","而且；再加上","~한 데다가","además de…","oltre a…","त्यसमाथि…","ထို့အပြင်…","En plus de…"],
ni_kanshite:["Về; liên quan đến","关于；有关","關於；有關","~에 관하여","con respecto a…","riguardo a…","…बारेमा","…နှင့်ပတ်သက်၍","Concernant…"],
wo_megutte:["Xung quanh; liên quan đến một cuộc tranh luận","围绕；围绕某事的争论","圍繞；圍繞某事的爭論","~을 둘러싸고","en torno a…","intorno a…","…लाई लिएर","…ကို အကြောင်းပြု၍","Autour de…"],
ni_kakete:["Xét về; khi nói đến một lĩnh vực nổi trội","说到……方面","說到……方面","~에 관해서는","en cuanto a…","per quanto riguarda…","…को सन्दर्भमा भने","…အပိုင်းမှာတော့","Quand il s’agit de…"],
ni_taishite:["Đối với; trái lại so với","对于；与……相对","對於；與……相對","~에 대해; ~와 대조적으로","frente a…","nei confronti di…","…प्रति; …को विपरीत","…အပေါ်; …နှင့် ဆန့်ကျင်၍","À l’égard de… ; par opposition à…"],
ni_kotaete:["Đáp lại; đáp ứng yêu cầu","回应；满足要求","回應；滿足要求","~에 부응하여","en respuesta a…","in risposta a…","…को मागअनुसार","…၏ တောင်းဆိုချက်ကို တုံ့ပြန်၍","En réponse à…"],
wo_moto:["Dựa trên; lấy làm chất liệu","以……为基础；以……为素材","以……為基礎；以……為素材","~을 바탕으로","a partir de…","partendo da…","…लाई आधार बनाएर","…ကို အခြေခံ၍","En se basant sur…"],
ni_motozuki:["Dựa trên căn cứ, dữ liệu hoặc quy tắc","根据；基于","根據；基於","~에 근거하여","basándose en…","sulla base di…","…मा आधारित भएर","…အပေါ် အခြေခံ၍","Sur la base de…"],
ni_sotte:["Theo; tuân theo kế hoạch hoặc chỉ dẫn","按照；沿着","按照；沿著","~에 따라","siguiendo…","seguendo…","…अनुसार","…နှင့်အညီ","En suivant…"],
no_moto:["Dưới sự chỉ đạo hoặc trong khuôn khổ","在……之下；在……指导下","在……之下；在……指導下","~의 지도 아래; ~하에서","bajo…","sotto…","…को अधीनमा","…၏ လမ်းညွှန်မှုအောက်တွင်","Sous…"],
mukeda:["Dành cho; hướng đến đối tượng","面向；专为……设计","面向；專為……設計","~을 대상으로 한","destinado a…","destinato a…","…का लागि बनाइएको","…အတွက် ရည်ရွယ်ထားသော","Destiné à…"],

sai:["Nhân dịp; vào lúc","在……之际","在……之際","~할 때; ~할 즈음","con ocasión de…","in occasione di…","…का बेला","…को अवसरमा","À l’occasion de…"],
ni_sai:["Nhân dịp bắt đầu một việc quan trọng","在开始重要事项之际","在開始重要事項之際","중요한 일을 시작할 때","al emprender…","nell'intraprendere…","महत्त्वपूर्ण काम सुरु गर्दा","महत्त्वကြီးသော ကိစ္စတစ်ခု စတင်ချိန်တွင်","Au moment d’entreprendre…"],
totan:["Vừa mới… thì ngay lập tức","刚一……就……","才一……就……","막 ~하자마자","nada más…","non appena…","…गर्नासाथ","…လုပ်လိုက်သည်နှင့်","À peine… que…"],
ka_to_omou:["Vừa tưởng… thì đã…","刚一……就……","才一……就……","~하나 싶더니 곧","apenas… cuando…","appena… che…","…भयो कि तुरुन्तै","…ဖြစ်တယ်ဆိုရင်ပဲ","À peine… que déjà…"],
ka_nai:["Ngay khi… chưa kịp…","还没来得及……就……","還沒來得及……就……","~하자마자","antes de que…","prima ancora che…","… हुन नपाउँदै","…မဖြစ်မီပင်","Avant même que…"],
saichu:["Đang giữa lúc","正在……过程中","正在……過程中","한창 ~하는 중","en pleno…","nel bel mezzo di…","… भइरहेको बीचमा","…လုပ်နေဆဲအချိန်","En plein milieu de…"],
uchini:["Trong lúc; trước khi trạng thái thay đổi","趁着……的时候","趁著……的時候","~하는 동안; ~하기 전에","mientras…; antes de que…","mentre…; prima che…","…हुँदाहुँदै; … हुनुअघि","…နေစဉ်; …မတိုင်မီ","Pendant que… ; avant que…"],
bakari_ippou:["Cứ tiếp tục ngày càng…","不断地越来越……","不斷地越來越……","계속 ~하기만 하다","no hace más que…","continua sempre più a…","झन् झन् … हुँदै जानु","တဖြည်းဖြည်း ပို၍ …လာသည်","Ne faire que continuer à…"],
you_to:["Sắp sửa; đang định thử làm","正要……；试图……","正要……；試圖……","막 ~하려고 하다; ~하려고 애쓰다","estar a punto de…; intentar…","stare per…; tentare di…","… गर्नै लागेको; प्रयास गर्नु","…လုပ်တော့မည်; ကြိုးစားလုပ်သည်","Être sur le point de… ; tenter de…"],
tsutsu_aru:["Đang dần dần…","正在逐渐……","正在逐漸……","점차 ~해 가고 있다","estar evolucionando gradualmente","stare gradualmente…","बिस्तारै … हुँदै जानु","တဖြည်းဖြည်း …လာနေသည်","Évoluer progressivement vers…"],
tsutsu:["Vừa… vừa…; đồng thời làm","一边……一边……","一邊……一邊……","~하면서 동시에","mientras…","mentre…","… गर्दै","…ရင်း","Tout en faisant…"],
te_hajimete:["Chỉ sau khi… mới…","只有……之后才……","只有……之後才……","~하고 나서야 비로소","solo después de…","solo dopo…","… गरेपछि मात्र","…လုပ်ပြီးမှသာ","Ce n’est qu’après… que…"],
ue_de:["Sau khi đã…; sau khi xác nhận","在……之后；确认后","在……之後；確認後","~한 후에; 확인한 다음","después de…","dopo aver…","… गरेपछि","…ပြီးနောက်","Après avoir…"],
shidai:["Ngay khi; dès que","一……就……","一……就……","~하는 대로 곧","en cuanto…","non appena…","… हुनासाथ","…သည်နှင့်တပြိုင်နက်","Dès que…"],
te_irai:["Kể từ khi…","自从……以来","自從……以來","~한 이래로","desde que…","da quando…","… गरेदेखि","…ကတည်းက","Depuis que…"],
te_kara:["Chỉ sau khi… mới có thể; trước đó thì không","不先……就不能……","不先……就不能……","~하고 나서야 비로소 가능하다","no… hasta después de…","non… finché non…","… गरेपछि मात्र","…ပြီးမှသာ","Pas avant d’avoir…"],
wo_hajime:["Bắt đầu từ; tiêu biểu là","以……为首；以……为代表","以……為首；以……為代表","~을 비롯하여","empezando por…","a cominciare da…","…लाई सुरुमा लिएर","…लाई सुरुवातका रूपमा","En commençant par…"],
kara_shite:["Chỉ nhìn từ… cũng thấy","单从……就……","單從……就……","~만 보더라도","a juzgar por…","a giudicare da…","…बाटै हेर्दा","…बाट मात्रै हेर्दा","Rien que… ; à en juger par…"],
ni_watatte:["Trải dài trong; suốt một phạm vi","长达；遍及","長達；遍及","~에 걸쳐","a lo largo de…","per tutto…","…भरि; …सम्म फैलिएको","…တစ်လျှောက်","Sur toute l’étendue de…"],
wo_tsuujite:["Suốt trong; thông qua","整个期间；通过","整個期間；透過","~을 통해; ~내내","a lo largo de…; por medio de…","per tutto…; tramite…","…भरि; …मार्फत","…တစ်လျှောက်; …မှတစ်ဆင့်","Pendant toute la période ; par l’intermédiaire de…"],
kagiri:["Trong phạm vi; chừng nào; theo những gì…","只要；据……所知","只要；據……所知","~하는 한; ~하는 범위에서","en la medida en que…; mientras…","nei limiti di…; finché…","…सम्म; …भएसम्म","…အတိုင်းအတာအတွင်း","Dans la limite de… ; tant que…"],
dake:["Chừng nào có thể; hết mức có thể","尽可能；所能做到的范围","盡可能；所能做到的範圍","할 수 있는 만큼","tanto como…","quanto più possibile","सक्दो…","တတ်နိုင်သမျှ","Autant que possible…"],
ni_kagiri:["Chỉ dành cho; chỉ trong trường hợp","仅限于……","僅限於……","~에 한하여","solo para…","solo per…","…मा मात्र","…အတွက်သာ","Uniquement pour…"],
kagiri_wa:["Chừng nào còn… thì…","只要……就……","只要……就……","~하는 한","mientras…","finché…","…भएसम्म","…နေသရွေ့","Tant que…"],
kagiri_dewa:["Theo những gì đã biết/kiểm tra","据……所知","據……所知","~하는 한에서는","por lo que…","per quanto…","…गरेसम्मको जानकारीमा","…သိရှိထားသည့် အတိုင်းအတာအရ","D’après ce que…"],
ni_kagitte:["Cứ đúng vào lúc; riêng người đó thì…","偏偏……；唯独……","偏偏……；唯獨……","하필 ~에; 그 사람만은","precisamente cuando…","proprio quando…","ठ्याक्कै … मा","यस्तो बेला नै","Justement quand… ; cette personne en particulier…"]
};
const GLOSS_EN_BE={
ni_kagirazu:["Not limited to…","Не абмяжоўваецца толькі…"],nominarazu:["Not only… but also… (formal)","Не толькі…, але і… (афіцыйна)"],bakari_ka:["Not only… but even…","Не толькі…, але нават…"],wa_motoyori:["Let alone…; as well as…","Не кажучы ўжо пра…; таксама…"],ue_ni:["On top of that; furthermore","Да таго ж; акрамя таго"],ni_kanshite:["Regarding; concerning","Што датычыцца; адносна"],wo_megutte:["Around; concerning a dispute or debate","Вакол; адносна спрэчкі або дыскусіі"],ni_kakete:["When it comes to…; in the field of…","Што да…; у галіне…"],ni_taishite:["Toward; in contrast to","У адносінах да; у адрозненне ад"],ni_kotaete:["In response to; in answer to","У адказ на; адпаведна"],wo_moto:["Based on; using … as a source","На аснове; выкарыстоўваючы … як крыніцу"],ni_motozuki:["Based on; in accordance with","На падставе; у адпаведнасці з"],ni_sotte:["In accordance with; following","У адпаведнасці з; згодна з"],no_moto:["Under; under the supervision or framework of","Пад кіраўніцтвам; у межах"],mukeda:["Intended for; aimed at","Прызначаны для; разлічаны на"],sai:["On the occasion of; at the time of","З нагоды; падчас"],ni_sai:["On the occasion of; when","З нагоды; калі"],totan:["The moment that; as soon as","Як толькі; у той самы момант"],ka_to_omou:["Just as…; scarcely… when…","Толькі што…, як…"],ka_nai:["Before … even finishes; almost simultaneously","Перш чым … скончыцца; амаль адначасова"],saichu:["In the middle of; while … is happening","У самы разгар; падчас"],uchini:["While; before the situation changes","Пакуль; перш чым сітуацыя зменіцца"],bakari_ippou:["More and more; increasingly","Усё больш і больш; паступова"],you_to:["Be about to; be on the verge of","Збірацца; вось-вось зрабіць"],tsutsu_aru:["Be gradually changing; be in the process of","Паступова змяняцца; быць у працэсе"],tsutsu:["While doing; simultaneously (written style)","Робячы адначасова; у той жа час (пісьмовы стыль)"],te_hajimete:["Only after doing; not until","Толькі пасля таго, як; толькі тады"],ue_de:["After doing; once … is done","Пасля таго, як; выканаўшы"],shidai:["As soon as; immediately after","Як толькі; адразу пасля"],te_irai:["Ever since; since then","З таго часу як; ад таго часу"],te_kara:["Not until; only after","Толькі пасля таго, як"],wo_hajime:["Beginning with; including as a typical example","Пачынаючы з; у тым ліку"],kara_shite:["Judging from; even from","Мяркуючы па; нават па"],ni_watatte:["Over; throughout a period or area","На працягу; па ўсёй тэрыторыі"],wo_tsuujite:["Throughout; during the whole period","На працягу ўсяго часу"],kagiri:["As far as; within the limits of","Наколькі; у межах"],dake:["As much as; as … as possible","Колькі магчыма; настолькі, наколькі"],ni_kagiri:["Only; limited to","Толькі; абмежавана"],kagiri_wa:["As long as; while","Пакуль; да таго часу, пакуль"],kagiri_dewa:["As far as … is concerned; according to","Наколькі вядома; паводле"],ni_kagitte:["Precisely; especially; of all people or things","Менавіта; асабліва; якраз"]};
Object.entries(GLOSS_EN_BE).forEach(([id,values])=>{if(GLOSS[id])GLOSS[id].push(values[0],values[1]);});


const EXAMPLES={
ni_kagirazu:["Quy định này áp dụng không chỉ cho sinh viên mà cả người đi làm.","这项制度不仅适用于学生，也适用于上班族。","這項制度不僅適用於學生，也適用於上班族。","이 제도는 학생뿐만 아니라 직장인도 이용할 수 있다.","Este sistema no se limita a los estudiantes; también pueden usarlo los trabajadores.","Questo sistema non è riservato agli studenti: possono usarlo anche i lavoratori.","यो प्रणाली विद्यार्थीमा मात्र सीमित छैन; काम गर्ने व्यक्तिले पनि प्रयोग गर्न सक्छन्।","ဤစနစ်သည် ကျောင်းသားများသာမက အလုပ်လုပ်သူများလည်း အသုံးပြုနိုင်သည်။","Ce système est accessible non seulement aux étudiants, mais aussi aux personnes qui travaillent."],
nominarazu:["Anh ấy không chỉ có kiến thức chuyên môn mà còn có nhiều kinh nghiệm thực tế.","他不仅拥有专业知识，还具有丰富的实际工作经验。","他不僅擁有專業知識，還具有豐富的實務經驗。","그는 전문 지식뿐만 아니라 풍부한 실무 경험도 갖추고 있다.","No solo tiene conocimientos especializados, sino también una amplia experiencia práctica.","Possiede non solo competenze specialistiche, ma anche una vasta esperienza pratica.","उनीसँग विशेषज्ञ ज्ञान मात्र होइन, प्रशस्त व्यावहारिक अनुभव पनि छ।","သူ့မှာ အထူးပြုဗဟုသုတသာမက လက်တွေ့အတွေ့အကြုံလည်း များစွာရှိသည်။","Il possède non seulement des connaissances spécialisées, mais aussi une solide expérience pratique."],
bakari_ka:["Anh ấy không những không xin lỗi mà còn bắt đầu đổ lỗi cho đối phương.","他不仅没有道歉，反而开始责怪对方。","他不僅沒有道歉，反而開始責怪對方。","그는 사과하지 않았을 뿐 아니라 오히려 상대방을 탓하기 시작했다.","No solo no se disculpó, sino que empezó a culpar a la otra persona.","Non solo non si è scusato, ma ha anche iniziato ad accusare l'altra persona.","उनीले माफी मात्र मागेनन् भन्ने होइन, बरु अर्को व्यक्तिलाई दोष दिन थाले।","သူသည် တောင်းပန်ရုံသာမက တစ်ဖက်လူကို အပြစ်တင်စပြုခဲ့သည်။","Non seulement il ne s’est pas excusé, mais il a commencé à rejeter la faute sur l’autre."],
wa_motoyori:["Cơ sở này mở cửa không chỉ cho chuyên gia mà cả công chúng.","这个设施不仅向专业人士开放，也向普通大众开放。","這個設施不僅向專業人士開放，也向一般民眾開放。","이 시설은 전문가들은 물론 일반인에게도 개방되어 있다.","Esta instalación está abierta tanto a los especialistas como al público en general.","Questa struttura è aperta non solo agli specialisti, ma anche al pubblico.","यो सुविधा विशेषज्ञहरूका लागि मात्र होइन, सर्वसाधारणका लागि पनि खुला छ।","ဤနေရာသည် ပညာရှင်များသာမက အများပြည်သူအတွက်လည်း ဖွင့်လှစ်ထားသည်။","Cet établissement est ouvert non seulement aux spécialistes, mais aussi au grand public."],
ue_ni:["Quán này vừa rẻ lại vừa gần ga.","这家店不仅便宜，而且离车站也近。","這家店不僅便宜，而且離車站也近。","이 가게는 저렴한 데다가 역에서도 가깝다.","Este restaurante es barato y, además, está cerca de la estación.","Questo locale è economico e, in più, è vicino alla stazione.","यो पसल सस्तो हुनुका साथै स्टेशन नजिक पनि छ।","ဤဆိုင်သည် ဈေးသက်သာသည့်အပြင် ဘူတာနှင့်လည်း နီးသည်။","Ce restaurant est non seulement bon marché, mais aussi proche de la gare."],
ni_kanshite:["Tôi có ba điểm muốn xác nhận liên quan đến nội dung hợp đồng.","关于合同内容，我有三点想确认。","關於合約內容，我有三點想確認。","계약 내용에 관해 확인하고 싶은 점이 세 가지 있습니다.","Tengo tres puntos que quisiera confirmar con respecto al contenido del contrato.","Vorrei verificare tre punti riguardo al contenuto del contratto.","सम्झौताका विषयवस्तुबारे पुष्टि गर्नुपर्ने तीनवटा कुरा छन्।","စာချုပ်ပါ အကြောင်းအရာနှင့် ပတ်သက်၍ အတည်ပြုလိုသော အချက်သုံးချက်ရှိသည်။","J’ai trois points à vérifier concernant le contenu du contrat."],
wo_megutte:["Ý kiến của người dân đang chia rẽ xung quanh kế hoạch phát triển mới.","围绕新的开发计划，居民们意见不一。","圍繞新的開發計畫，居民們意見不一。","새로운 개발 계획을 둘러싸고 주민들의 의견이 엇갈리고 있다.","Las opiniones de los residentes están divididas en torno al nuevo plan de desarrollo.","Le opinioni dei residenti sono divise intorno al nuovo piano di sviluppo.","नयाँ विकास योजनालाई लिएर स्थानीय बासिन्दाहरूको विचार विभाजित छ।","မြို့ခံများသည် ဖွံ့ဖြိုးရေးအစီအစဉ်အသစ်နှင့်ပတ်သက်၍ သဘောထားကွဲလွဲနေကြသည်။","Les opinions des habitants divergent au sujet du nouveau projet de développement."],
ni_kakete:["Không ai có thể sánh với cô ấy về tài nấu ăn.","说到厨艺，没有人比得上她。","說到廚藝，沒有人比得上她。","요리 실력에 관해서는 그녀를 당해 낼 사람이 없다.","En cuanto a la habilidad culinaria, nadie puede rivalizar con ella.","Per quanto riguarda l'abilità in cucina, nessuno può competere con lei.","खाना पकाउने सीपको कुरा गर्दा उनीसँग प्रतिस्पर्धा गर्न सक्ने कोही छैन।","ချက်ပြုတ်ကျွမ်းကျင်မှုမှာ သူမကို ယှဉ်နိုင်သူ မရှိပါ။","Personne ne peut rivaliser avec elle en matière de cuisine."],
ni_taishite:["Trong khi anh trai thận trọng thì em trai lại rất táo bạo.","哥哥很谨慎，而弟弟则相当大胆。","哥哥很謹慎，而弟弟則相當大膽。","형은 신중한 데 반해 동생은 꽤 대담하다.","Mientras que el hermano mayor es prudente, el menor es bastante atrevido.","Il fratello maggiore è prudente, mentre il minore è piuttosto audace.","दाजु सतर्क छन् भने भाइ निकै साहसी छ।","အစ်ကိုက သတိကြီးသူဖြစ်သော်လည်း ညီကတော့ အတော်ရဲရင့်သည်။","Alors que le frère aîné est prudent, le cadet est plutôt audacieux."],
ni_kotaete:["Đáp ứng yêu cầu của người dân, giờ mở cửa thư viện đã được kéo dài.","回应市民的要求，图书馆延长了开放时间。","回應市民的要求，圖書館延長了開放時間。","시민들의 요구에 부응하여 도서관 개관 시간이 연장되었다.","En respuesta a las peticiones de los ciudadanos, se ampliaron los horarios de la biblioteca.","In risposta alle richieste dei cittadini, l'orario di apertura della biblioteca è stato prolungato.","नागरिकहरूको मागअनुसार पुस्तकालय खुल्ने समय बढाइएको छ।","ပြည်သူများ၏ တောင်းဆိုချက်ကို တုံ့ပြန်၍ စာကြည့်တိုက်ဖွင့်ချိန်ကို တိုးမြှင့်ခဲ့သည်။","En réponse à la demande des citoyens, les horaires d’ouverture de la bibliothèque ont été prolongés."],
wo_moto:["Bộ phim này được làm dựa trên một sự kiện có thật.","这部电影是以真实事件为基础拍摄的。","這部電影是以真實事件為基礎拍攝的。","이 영화는 실제 사건을 바탕으로 만들어졌다.","Esta película se realizó a partir de un suceso real.","Questo film è stato realizzato a partire da un fatto realmente accaduto.","यो चलचित्र वास्तविक घटनालाई आधार मानेर बनाइएको हो।","ဤရုပ်ရှင်ကို တကယ့်ဖြစ်ရပ်တစ်ခုကို အခြေခံ၍ ရိုက်ကူးထားသည်။","Ce film a été réalisé à partir d’un fait réel."],
ni_motozuki:["Dựa trên kết quả điều tra, các biện pháp đối phó đã được quyết định.","根据调查结果，决定了相应的对策。","根據調查結果，決定了相應的對策。","조사 결과에 근거하여 대책을 결정했다.","Se decidieron las medidas basándose en los resultados de la investigación.","Le misure sono state decise sulla base dei risultati dell'indagine.","अनुसन्धानको नतिजाका आधारमा उपायहरू तय गरियो।","စစ်တမ်းရလဒ်များအပေါ် အခြေခံ၍ အစီအမံများကို ဆုံးဖြတ်ခဲ့သည်။","Des mesures ont été décidées sur la base des résultats de l’enquête."],
ni_sotte:["Hãy tiến hành công việc theo đúng kế hoạch.","请按照计划推进工作。","請按照計畫推進工作。","계획에 따라 작업을 진행해 주세요.","Por favor, avance el trabajo siguiendo el plan.","Si prega di procedere con il lavoro seguendo il piano.","योजनाअनुसार काम अगाडि बढाउनुहोस्।","အစီအစဉ်အတိုင်း အလုပ်ကို ဆက်လက်လုပ်ဆောင်ပါ။","Veuillez faire avancer les travaux conformément au plan."],
no_moto:["Chúng tôi đã tiến hành thí nghiệm dưới sự hướng dẫn của chuyên gia.","在专家的指导下进行了实验。","在專家的指導下進行了實驗。","전문가의 지도 아래 실험을 진행했다.","Realizamos el experimento bajo la dirección de un especialista.","Abbiamo condotto l'esperimento sotto la guida di uno specialista.","विशेषज्ञको निर्देशनमा प्रयोग सञ्चालन गरियो।","ကျွမ်းကျင်သူ၏ လမ်းညွှန်မှုအောက်တွင် စမ်းသပ်မှုကို ပြုလုပ်ခဲ့သည်။","L’expérience a été menée sous la direction d’un spécialiste."],
mukeda:["Tài liệu học tập này được biên soạn dành cho người học trình độ trung cấp.","这份教材是为中级学习者编写的。","這份教材是為中級學習者編寫的。","이 교재는 중급 학습자를 대상으로 만들어졌다.","Este material está diseñado para estudiantes de nivel intermedio.","Questo materiale è pensato per studenti di livello intermedio.","यो अध्ययन सामग्री मध्यम तहका विद्यार्थीहरूका लागि बनाइएको हो।","ဤသင်ထောက်ကူကို အလယ်အလတ်အဆင့် သင်ယူသူများအတွက် ပြုလုပ်ထားသည်။","Ce support pédagogique a été conçu pour les apprenants de niveau intermédiaire."]
};



const $ = id => document.getElementById(id);
const SESSIONS_KEY = "shinkanzen-n2-quiz-sessions-v2";
const PRAISE = {
  vi:{ok:["Giỏi lắm!","Tuyệt vời!","Chính xác rồi!"],ng:["Suýt đúng rồi!","Cố lên nhé!","Làm tốt vì bạn đã thử!"],skip:["Không sao, cùng xem lời giải nhé!"]},
  "zh-CN":{ok:["做得好！","太棒了！","答对了！"],ng:["差一点！","再接再厉！","勇敢尝试就很好！"],skip:["没关系，我们一起看看解析吧！"]},
  "zh-TW":{ok:["做得好！","太棒了！","答對了！"],ng:["差一點！","再接再厲！","願意嘗試就很棒！"],skip:["沒關係，我們一起看看解析吧！"]},
  ko:{ok:["잘했어요!","정답이에요!","아주 좋아요!"],ng:["아쉽네요!","다음 문제에서 만회해 봐요!","도전한 것만으로도 좋아요!"],skip:["괜찮아요. 함께 답을 확인해 봐요!"]},
  es:{ok:["¡Muy bien!","¡Excelente!","¡Lo has conseguido!"],ng:["¡Casi!","¡Sigue así!","¡Buen intento!"],skip:["No pasa nada. Veamos la explicación."]},
  it:{ok:["Ben fatto!","Ottimo!","Esatto!"],ng:["Ci sei quasi!","Continua così!","Bel tentativo!"],skip:["Non preoccuparti: vediamo insieme la spiegazione."]},
  ne:{ok:["धेरै राम्रो!","एकदम सही!","शानदार!"],ng:["अलि मात्र बाँकी थियो!","अर्को प्रश्नमा अझ राम्रो गरौँ!","प्रयास गर्नु नै राम्रो हो!"],skip:["चिन्ता नगर्नुहोस्, उत्तर सँगै हेरौँ।"]},
  my:{ok:["အရမ်းကောင်းပါတယ်!","မှန်ပါတယ်!","တော်လိုက်တာ!"],ng:["နည်းနည်းလေးလိုသွားတယ်!","ဆက်ကြိုးစားပါ!","ကြိုးစားဖြေဆိုတာ ကောင်းပါတယ်!"],skip:["စိတ်မပူပါနဲ့၊ အဖြေကိုအတူကြည့်ကြမယ်။"]},
  fr:{ok:["Bravo !","Bien joué !","Exactement !"],ng:["Dommage !","Bien essayé !","Tu y es presque !"],skip:["Pas de souci, regardons l'explication ensemble."]}
};
const EXTRA_UI = {
  vi:{reviewTitle:"Ôn tập ngữ pháp · Bài 1–8",reviewIntro:"Xem lại tất cả cấu trúc và cách dùng trong tám bài trước khi bắt đầu.",jumpLabel:"Đến câu số",jump:"Đi",dontKnow:"Tôi không biết",completedSentence:"Câu hoàn chỉnh",explanation:"Vì sao dùng cấu trúc này?",unanswered:"Chưa trả lời",notCounted:"Không tính là câu sai"},
  "zh-CN":{reviewTitle:"语法复习 · 第1–8课",reviewIntro:"开始答题前，先复习这八课中的语法形式和用法。",jumpLabel:"跳转到题目",jump:"跳转",dontKnow:"我不知道",completedSentence:"完整句子",explanation:"为什么这里使用这个语法？",unanswered:"未作答",notCounted:"不计为答错"},
  "zh-TW":{reviewTitle:"文法複習 · 第1–8課",reviewIntro:"開始作答前，先複習這八課中的文法形式與用法。",jumpLabel:"跳到題目",jump:"前往",dontKnow:"我不知道",completedSentence:"完整句子",explanation:"為什麼這裡使用這個文法？",unanswered:"未作答",notCounted:"不計為答錯"},
  ko:{reviewTitle:"문법 복습 · 1~8과",reviewIntro:"퀴즈를 시작하기 전에 1~8과의 문형과 용법을 모두 복습하세요.",jumpLabel:"문제 번호로 이동",jump:"이동",dontKnow:"모르겠어요",completedSentence:"완성된 문장",explanation:"왜 이 문형을 사용할까요?",unanswered:"미응답",notCounted:"오답으로 계산하지 않음"},
  es:{reviewTitle:"Repaso de gramática · capítulos 1–8",reviewIntro:"Repasa todas las estructuras y sus usos de los ocho capítulos antes de empezar.",jumpLabel:"Ir a la pregunta",jump:"Ir",dontKnow:"No lo sé",completedSentence:"Frase completa",explanation:"¿Por qué se usa esta forma?",unanswered:"Sin responder",notCounted:"No cuentan como errores"},
  it:{reviewTitle:"Ripasso grammaticale · capitoli 1–8",reviewIntro:"Ripassa tutte le strutture e i loro usi negli otto capitoli prima di iniziare.",jumpLabel:"Vai alla domanda",jump:"Vai",dontKnow:"Non lo so",completedSentence:"Frase completa",explanation:"Perché si usa questa forma?",unanswered:"Senza risposta",notCounted:"Non contano come errori"},
  ne:{reviewTitle:"व्याकरण पुनरावृत्ति · पाठ १–८",reviewIntro:"सुरु गर्नुअघि आठै पाठका व्याकरण रूप र प्रयोग पुनरावलोकन गर्नुहोस्।",jumpLabel:"प्रश्न नम्बरमा जानुहोस्",jump:"जानुहोस्",dontKnow:"मलाई थाहा छैन",completedSentence:"पूरा वाक्य",explanation:"यो व्याकरण किन प्रयोग गरिएको छ?",unanswered:"उत्तर नदिइएका",notCounted:"गलत उत्तरमा गणना हुँदैन"},
  my:{reviewTitle:"သဒ္ဒါ ပြန်လည်လေ့လာခြင်း · အခန်း ၁–၈",reviewIntro:"မစတင်မီ အခန်းရှစ်ခန်းရှိ သဒ္ဒါပုံစံနှင့် အသုံးပြုပုံအားလုံးကို ပြန်လည်လေ့လာပါ။",jumpLabel:"မေးခွန်းနံပါတ်သို့ သွားရန်",jump:"သွားရန်",dontKnow:"မသိပါ",completedSentence:"ဝါကျအပြည့်အစုံ",explanation:"ဤသဒ္ဒါပုံစံကို ဘာကြောင့် သုံးသနည်း။",unanswered:"မဖြေဆိုရသေး",notCounted:"မှားသောအဖြေအဖြစ် မတွက်ပါ"},
  fr:{reviewTitle:"Révision grammaticale · chapitres 1 à 8",reviewIntro:"Retrouve les formes grammaticales et leurs usages dans les huit chapitres avant de commencer.",jumpLabel:"Aller à la question",jump:"Aller",dontKnow:"Je ne sais pas",completedSentence:"Phrase complétée",explanation:"Pourquoi cette forme est-elle utilisée ?",unanswered:"Non répondues",notCounted:"Ne comptent pas comme des erreurs"}
};
Object.keys(EXTRA_UI).forEach(lang=>Object.assign(UI[lang],EXTRA_UI[lang]));
const STEP_THREE={"vi":"BƯỚC 03","zh-CN":"步骤 03","zh-TW":"步驟 03","ko":"단계 03","es":"PASO 03","it":"PASSO 03","ne":"चरण ०३","my":"အဆင့် ၀၃","fr":"ÉTAPE 03"};
Object.keys(STEP_THREE).forEach(lang=>{UI[lang].step2=STEP_THREE[lang];});



const FEATURE_UI={
  vi:{subjectName:"Ngữ pháp N2",saveProgress:"Lưu tiến độ",chooseGrammar:"Chọn mẫu ngữ pháp phù hợp",chooseContinuation:"Chọn phần tiếp nối phù hợp",quickReference:"Trợ giúp đặc biệt · Bài 6–7–8",translation:"Bản dịch",whyTitle:"Vì sao đáp án này phù hợp?",yourAnswer:"Câu trả lời của bạn",wrongAnswer:"Câu bạn đã chọn",restartWarningTitle:"Trước khi bắt đầu lại",restartWarningHeading:"Tiến độ hiện tại sẽ bị xóa",restartWarningText:"Nếu bắt đầu lại mà không lưu, các câu trả lời này sẽ mất và bạn sẽ không có bảng tổng kết cho lượt làm bài này.",restartSave:"Lưu rồi bắt đầu lại",restartDiscard:"Bắt đầu lại và xóa tiến độ",restartCancel:"Hủy",whyContext:"Trong câu này, cấu trúc được dùng đúng với ý nghĩa và quan hệ thể hiện trong câu.",translationUnavailable:"Bản dịch cho ngôn ngữ này chưa có sẵn.",notAnswered:"Không trả lời"},
  "zh-CN":{subjectName:"N2语法",saveProgress:"保存学习进度",chooseGrammar:"选择合适的语法形式",chooseContinuation:"选择合适的后半句",quickReference:"第6、7、8课特别辅助",translation:"翻译",whyTitle:"为什么这个答案符合语境？",yourAnswer:"你的答案",wrongAnswer:"你选择的答案",restartWarningTitle:"重新开始前",restartWarningHeading:"当前进度将被删除",restartWarningText:"如果不先保存就重新开始，这些答案将会丢失，而且本次练习不会生成总结报告。",restartSave:"保存后重新开始",restartDiscard:"不保存，直接重新开始",restartCancel:"取消",whyContext:"在这句话中，这个语法形式表达的含义与句子的具体关系相符。",translationUnavailable:"暂时没有此语言的句子翻译。",notAnswered:"未作答"},
  "zh-TW":{subjectName:"N2文法",saveProgress:"儲存學習進度",chooseGrammar:"選擇合適的文法形式",chooseContinuation:"選擇合適的後半句",quickReference:"第6、7、8課特別輔助",translation:"翻譯",whyTitle:"為什麼這個答案符合語境？",yourAnswer:"你的答案",wrongAnswer:"你選擇的答案",restartWarningTitle:"重新開始前",restartWarningHeading:"目前的進度將會被刪除",restartWarningText:"如果不先儲存就重新開始，這些答案將會遺失，而且這次練習不會產生總結報告。",restartSave:"儲存後重新開始",restartDiscard:"不儲存，直接重新開始",restartCancel:"取消",whyContext:"在這個句子中，此文法形式表達的意思符合句子的具體關係。",translationUnavailable:"目前沒有這個語言的句子翻譯。",notAnswered:"未作答"},
  ko:{subjectName:"N2 문법",saveProgress:"학습 진행 상황 저장",chooseGrammar:"알맞은 문형을 고르세요",chooseContinuation:"알맞은 뒷부분을 고르세요",quickReference:"6·7·8과 특별 도움말",translation:"번역",whyTitle:"왜 이 답이 문맥에 맞을까요?",yourAnswer:"내 답",wrongAnswer:"선택한 답",restartWarningTitle:"다시 시작하기 전에",restartWarningHeading:"현재 진행 상황이 삭제됩니다",restartWarningText:"저장하지 않고 다시 시작하면 지금까지의 답변이 사라지고 이번 학습의 결과 요약도 받을 수 없습니다.",restartSave:"저장하고 다시 시작",restartDiscard:"저장하지 않고 다시 시작",restartCancel:"취소",whyContext:"이 문장에서는 해당 문형이 문맥에 나타난 의미와 관계를 정확하게 표현합니다.",translationUnavailable:"이 언어의 문장 번역은 아직 제공되지 않습니다.",notAnswered:"미응답"},
  es:{subjectName:"Gramática N2",saveProgress:"Guardar el progreso",chooseGrammar:"Elige la forma gramatical adecuada",chooseContinuation:"Elige la continuación adecuada",quickReference:"Ayuda especial · capítulos 6, 7 y 8",translation:"Traducción",whyTitle:"¿Por qué encaja esta respuesta aquí?",yourAnswer:"Tu respuesta",wrongAnswer:"Respuesta elegida",restartWarningTitle:"Antes de volver a empezar",restartWarningHeading:"Se eliminará el progreso actual",restartWarningText:"Si reinicias sin guardar, perderás estas respuestas y no tendrás un balance final de esta sesión.",restartSave:"Guardar y volver a empezar",restartDiscard:"Reiniciar sin guardar",restartCancel:"Cancelar",whyContext:"En esta frase, la estructura expresa la relación concreta que muestra el contexto.",translationUnavailable:"La traducción de la frase aún no está disponible en este idioma.",notAnswered:"Sin responder"},
  it:{subjectName:"Grammatica N2",saveProgress:"Salva i progressi",chooseGrammar:"Scegli la forma grammaticale adatta",chooseContinuation:"Scegli la continuazione adatta",quickReference:"Aiuto speciale · capitoli 6, 7 e 8",translation:"Traduzione",whyTitle:"Perché questa risposta è adatta al contesto?",yourAnswer:"La tua risposta",wrongAnswer:"Risposta scelta",restartWarningTitle:"Prima di ricominciare",restartWarningHeading:"I progressi attuali verranno eliminati",restartWarningText:"Se ricominci senza salvare, perderai queste risposte e non avrai il riepilogo finale di questa sessione.",restartSave:"Salva e ricomincia",restartDiscard:"Ricomincia senza salvare",restartCancel:"Annulla",whyContext:"In questa frase, la struttura esprime il rapporto specifico indicato dal contesto.",translationUnavailable:"La traduzione della frase non è ancora disponibile in questa lingua.",notAnswered:"Senza risposta"},
  ne:{subjectName:"N2 व्याकरण",saveProgress:"अध्ययन प्रगति सुरक्षित गर्नुहोस्",chooseGrammar:"उपयुक्त व्याकरण रूप छान्नुहोस्",chooseContinuation:"उपयुक्त पछिल्लो वाक्यांश छान्नुहोस्",quickReference:"विशेष सहायता · पाठ ६, ७ र ८",translation:"अनुवाद",whyTitle:"यो उत्तर यहाँ किन मिल्छ?",yourAnswer:"तपाईंको उत्तर",wrongAnswer:"तपाईंले छानेको उत्तर",restartWarningTitle:"फेरि सुरु गर्नुअघि",restartWarningHeading:"हालको प्रगति मेटिनेछ",restartWarningText:"सुरक्षित नगरी फेरि सुरु गर्नुभयो भने यी उत्तरहरू हराउनेछन् र यस सत्रको अन्तिम नतिजा पनि पाउनुहुने छैन।",restartSave:"सुरक्षित गरेर फेरि सुरु गर्नुहोस्",restartDiscard:"सुरक्षित नगरी फेरि सुरु गर्नुहोस्",restartCancel:"रद्द गर्नुहोस्",whyContext:"यस वाक्यमा यो व्याकरण रूपले प्रसङ्गमा देखिएको अर्थ र सम्बन्धलाई ठीकसँग व्यक्त गर्छ।",translationUnavailable:"यो भाषामा वाक्यको अनुवाद अझै उपलब्ध छैन।",notAnswered:"उत्तर नदिइएको"},
  my:{subjectName:"N2 သဒ္ဒါ",saveProgress:"လေ့လာမှုတိုးတက်မှုကို သိမ်းဆည်းရန်",chooseGrammar:"သင့်လျော်သော သဒ္ဒါပုံစံကို ရွေးပါ",chooseContinuation:"သင့်လျော်သော နောက်ဆက်တွဲကို ရွေးပါ",quickReference:"အခန်း ၆၊ ၇၊ ၈ အတွက် အထူးအကူအညီ",translation:"ဘာသာပြန်",whyTitle:"ဤအဖြေသည် ဤနေရာတွင် အဘယ်ကြောင့် သင့်လျော်သနည်း။",yourAnswer:"သင့်အဖြေ",wrongAnswer:"သင်ရွေးချယ်ခဲ့သောအဖြေ",restartWarningTitle:"ပြန်မစတင်မီ",restartWarningHeading:"လက်ရှိတိုးတက်မှုကို ဖျက်ပစ်မည်",restartWarningText:"မသိမ်းဆည်းဘဲ ပြန်စတင်ပါက ယခုအဖြေများ ပျောက်ဆုံးသွားမည်ဖြစ်ပြီး ဤအစီအစဉ်၏ နောက်ဆုံးရလဒ်ကိုလည်း ရရှိမည်မဟုတ်ပါ။",restartSave:"သိမ်းဆည်းပြီး ပြန်စတင်ရန်",restartDiscard:"မသိမ်းဘဲ ပြန်စတင်ရန်",restartCancel:"မလုပ်တော့ပါ",whyContext:"ဤဝါကျတွင် ဤသဒ္ဒါပုံစံသည် အကြောင်းအရာအရ ဖော်ပြထားသော အဓိပ္ပာယ်နှင့် ဆက်နွယ်မှုကို မှန်ကန်စွာ ဖော်ပြသည်။",translationUnavailable:"ဤဘာသာစကားအတွက် ဝါကျဘာသာပြန် မရရှိသေးပါ။",notAnswered:"မဖြေဆိုရသေး"},
  fr:{subjectName:"Grammaire N2",saveProgress:"Sauvegarder la progression",chooseGrammar:"Choisis la forme grammaticale adaptée",chooseContinuation:"Choisis la suite qui convient",quickReference:"Aide spéciale pour les chapitres 6–7–8",translation:"Traduction",whyTitle:"Pourquoi cette réponse convient-elle ici ?",yourAnswer:"Ta réponse",wrongAnswer:"Réponse choisie",restartWarningTitle:"Avant de recommencer",restartWarningHeading:"Ta progression actuelle va être supprimée.",restartWarningText:"Si tu recommences sans sauvegarder, ces réponses seront perdues et tu n'auras pas de bilan pour cette session.",restartSave:"Sauvegarder et recommencer",restartDiscard:"Recommencer sans sauvegarder",restartCancel:"Annuler",whyContext:"Ici, la construction exprime précisément la relation décrite dans la phrase.",translationUnavailable:"La traduction de cette phrase n'est pas encore disponible dans cette langue.",notAnswered:"Non répondu"}
};
Object.keys(FEATURE_UI).forEach(lang=>Object.assign(UI[lang],FEATURE_UI[lang]));

const UI_MORE={
  vi:{viewScore:"Xem kết quả hiện tại",fiftyUsed:"Số lần dùng 50/50",progressReviewEyebrow:"TỔNG KẾT TIẾN ĐỘ",progressReviewTitle:"Kết quả học tập hiện tại",returnQuiz:"Quay lại bài kiểm tra",paused:"Nghỉ một chút nhé?",pausedEyebrow:"ĐÃ LƯU TIẾN ĐỘ",answerUnavailable:"Không có dữ liệu câu trả lời"},
  "zh-CN":{viewScore:"查看当前成绩",fiftyUsed:"50/50使用次数",progressReviewEyebrow:"学习进度总结",progressReviewTitle:"当前学习结果",returnQuiz:"返回测验",paused:"休息一下吧？",pausedEyebrow:"学习进度已保存",answerUnavailable:"暂无答案数据"},
  "zh-TW":{viewScore:"查看目前成績",fiftyUsed:"50/50使用次數",progressReviewEyebrow:"學習進度總結",progressReviewTitle:"目前學習結果",returnQuiz:"返回測驗",paused:"休息一下吧？",pausedEyebrow:"學習進度已儲存",answerUnavailable:"目前沒有答案資料"},
  ko:{viewScore:"현재 결과 보기",fiftyUsed:"50/50 사용 횟수",progressReviewEyebrow:"학습 진행 결과",progressReviewTitle:"현재 학습 결과",returnQuiz:"퀴즈로 돌아가기",paused:"잠깐 쉬어 갈까요?",pausedEyebrow:"진행 상황 저장 완료",answerUnavailable:"답변 데이터가 없습니다"},
  es:{viewScore:"Ver el balance",fiftyUsed:"Usos de 50/50",progressReviewEyebrow:"RESUMEN DE PROGRESO",progressReviewTitle:"Resultados hasta ahora",returnQuiz:"Volver al cuestionario",paused:"¿Hacemos una pausa?",pausedEyebrow:"PROGRESO GUARDADO",answerUnavailable:"Respuesta no disponible"},
  it:{viewScore:"Vedi il riepilogo",fiftyUsed:"Utilizzi di 50/50",progressReviewEyebrow:"RIEPILOGO DEI PROGRESSI",progressReviewTitle:"Risultati finora",returnQuiz:"Torna al quiz",paused:"Facciamo una pausa?",pausedEyebrow:"PROGRESSI SALVATI",answerUnavailable:"Risposta non disponibile"},
  ne:{viewScore:"हालको नतिजा हेर्नुहोस्",fiftyUsed:"50/50 प्रयोग संख्या",progressReviewEyebrow:"प्रगति सारांश",progressReviewTitle:"अहिलेसम्मको नतिजा",returnQuiz:"क्विजमा फर्कनुहोस्",paused:"केही बेर आराम गरौँ?",pausedEyebrow:"प्रगति सुरक्षित गरिएको छ",answerUnavailable:"उत्तर उपलब्ध छैन"},
  my:{viewScore:"လက်ရှိရလဒ်ကို ကြည့်ရန်",fiftyUsed:"50/50 အသုံးပြုသည့်အကြိမ်",progressReviewEyebrow:"တိုးတက်မှု အနှစ်ချုပ်",progressReviewTitle:"ယခုအချိန်အထိ ရလဒ်",returnQuiz:"မေးခွန်းသို့ ပြန်သွားရန်",paused:"ခဏနားကြမလား။",pausedEyebrow:"တိုးတက်မှုကို သိမ်းဆည်းပြီးပါပြီ",answerUnavailable:"အဖြေဒေတာ မရှိပါ"},
  fr:{viewScore:"Voir le bilan",fiftyUsed:"Utilisations du 50/50",progressReviewEyebrow:"BILAN DE PROGRESSION",progressReviewTitle:"Résultats après tes réponses",returnQuiz:"Retour au quiz",paused:"Petite pause ?",pausedEyebrow:"PROGRESSION SAUVEGARDÉE",answerUnavailable:"Réponse indisponible"}
};

UI_MORE.en={viewScore:"View current results",fiftyUsed:"50/50 uses",progressReviewEyebrow:"PROGRESS SUMMARY",progressReviewTitle:"Your results so far",returnQuiz:"Return to quiz",paused:"Take a short break?",pausedEyebrow:"PROGRESS SAVED",answerUnavailable:"Answer data unavailable",translation:"Translation",whyTitle:"Why this answer?",whyContext:"This grammar pattern fits the context.",translationUnavailable:"Translation unavailable",notAnswered:"Not answered",yourAnswer:"Your answer",wrongAnswer:"Your answer",chapterShort:"Chapter",chapterAnswered:"Answered"};
UI_MORE.be={viewScore:"Паглядзець бягучы вынік",fiftyUsed:"Колькасць выкарыстанняў 50/50",progressReviewEyebrow:"АГЛЯД ПРАГРЭСУ",progressReviewTitle:"Твае вынікі на гэты момант",returnQuiz:"Вярнуцца да тэста",paused:"Зробім невялікі перапынак?",pausedEyebrow:"ПРАГРЭС ЗАХАВАНЫ",answerUnavailable:"Даныя адказу недаступныя",translation:"Пераклад",whyTitle:"Чаму гэты адказ?",whyContext:"Гэтая граматычная форма адпавядае кантэксту.",translationUnavailable:"Пераклад недаступны",notAnswered:"Без адказу",yourAnswer:"Твой адказ",wrongAnswer:"Твой адказ",chapterShort:"Раздзел",chapterAnswered:"Адказана"};

Object.keys(UI_MORE).forEach(lang=>Object.assign(UI[lang],UI_MORE[lang]));
const SAVE_DETAILS_LABELS={ja:"詳細を見る",vi:"Xem chi tiết", "zh-CN":"查看详情","zh-TW":"查看詳情",ko:"자세히 보기",es:"Ver en detalle",it:"Vedi dettagli",ne:"विस्तृत रूपमा हेर्नुहोस्",my:"အသေးစိတ်ကြည့်ရန်",fr:"Voir en détails",en:"View details",be:"Падрабязней"};



const RESULT_UI={
  vi:{chapterShort:"Bài",chapterAnswered:"Đã trả lời",scoreHeadline:"Tổng kết của bạn",scoreSubline:"Kết quả chi tiết theo từng bài.",paused:"Đã lưu tiến độ",pauseText:"Tiến độ của bạn đã được lưu trên thiết bị này.",continueQuiz:"Tiếp tục làm bài"},
  "zh-CN":{chapterShort:"第",chapterAnswered:"已回答",scoreHeadline:"本次学习总结",scoreSubline:"查看每一课的详细表现。",paused:"进度已保存",pauseText:"你的学习进度已保存在这台设备上。",continueQuiz:"继续测验"},
  "zh-TW":{chapterShort:"第",chapterAnswered:"已作答",scoreHeadline:"本次學習總結",scoreSubline:"查看每一課的詳細表現。",paused:"進度已儲存",pauseText:"你的學習進度已儲存在這台裝置上。",continueQuiz:"繼續測驗"},
  ko:{chapterShort:"제",chapterAnswered:"답변 완료",scoreHeadline:"학습 결과 요약",scoreSubline:"과별 상세 결과를 확인하세요.",paused:"진행 상황 저장 완료",pauseText:"학습 진행 상황이 이 기기에 저장되었습니다.",continueQuiz:"이어서 풀기"},
  es:{chapterShort:"Cap.",chapterAnswered:"Respondidas",scoreHeadline:"Resumen de tu sesión",scoreSubline:"Consulta tus resultados por capítulo.",paused:"Progreso guardado",pauseText:"Tu progreso se ha guardado en este dispositivo.",continueQuiz:"Continuar el cuestionario"},
  it:{chapterShort:"Cap.",chapterAnswered:"Risposte date",scoreHeadline:"Riepilogo della sessione",scoreSubline:"Controlla i risultati per capitolo.",paused:"Progressi salvati",pauseText:"I tuoi progressi sono stati salvati su questo dispositivo.",continueQuiz:"Riprendi il quiz"},
  ne:{chapterShort:"पाठ",chapterAnswered:"उत्तर दिइएका",scoreHeadline:"तपाईंको अध्ययन नतिजा",scoreSubline:"प्रत्येक पाठको विस्तृत नतिजा हेर्नुहोस्।",paused:"प्रगति सुरक्षित भयो",pauseText:"तपाईंको प्रगति यस उपकरणमा सुरक्षित गरिएको छ।",continueQuiz:"अभ्यास जारी राख्नुहोस्"},
  my:{chapterShort:"အခန်း",chapterAnswered:"ဖြေဆိုပြီး",scoreHeadline:"လေ့လာမှုအနှစ်ချုပ်",scoreSubline:"အခန်းအလိုက် ရလဒ်အသေးစိတ်ကို ကြည့်ပါ။",paused:"တိုးတက်မှု သိမ်းဆည်းပြီး",pauseText:"သင်၏တိုးတက်မှုကို ဤစက်တွင် သိမ်းဆည်းထားသည်။",continueQuiz:"ဆက်လက်ဖြေဆိုရန်"},
  fr:{chapterShort:"Chap.",chapterAnswered:"Répondues",scoreHeadline:"Bilan de ta session",scoreSubline:"Tes résultats, chapitre par chapitre.",paused:"Progression sauvegardée",pauseText:"Ta progression est sauvegardée sur cet appareil.",continueQuiz:"Reprendre le quiz"}
};
Object.keys(RESULT_UI).forEach(lang=>Object.assign(UI[lang],RESULT_UI[lang]));



RESULT_UI.en={chapterShort:"Chapter",chapterAnswered:"Answered",scoreHeadline:"Your session summary",scoreSubline:"See your detailed results for each chapter.",paused:"Progress saved",pauseText:"Your progress has been saved on this device.",continueQuiz:"Continue the quiz"};
RESULT_UI.be={chapterShort:"Раздзел",chapterAnswered:"Адказана",scoreHeadline:"Вынікі тваёй сесіі",scoreSubline:"Падрабязныя вынікі па кожным раздзеле.",paused:"Прагрэс захаваны",pauseText:"Твой прагрэс захаваны на гэтай прыладзе.",continueQuiz:"Працягнуць тэст"};
const PANDA_LINES={
  vi:{
    neutral:["Sẵn sàng thử sức chưa?","Câu này có đúng trình độ của bạn không nhỉ?","Cùng xem bạn xử lý câu này thế nào nhé!","Bình tĩnh nào, đọc kỹ một chút nhé.","Bạn có cảm giác về câu này không?","Thử thách tiếp theo đây!","Mình tin bạn làm được!","Nào, tập trung nào!"],
    thinking:["Hãy nhìn vào phần đứng trước chỗ trống nhé.","Từ nối này đang chỉ quan hệ gì?","Đọc cả câu rồi mới chọn nhé.","Có manh mối ngay trong ngữ cảnh đấy.","Thử loại những đáp án không hợp nghĩa.","Đừng vội, hãy kiểm tra sắc thái.","Hãy để ý thời điểm của hành động.","Nghĩ xem câu đang bổ sung hay đối lập nhé."],
    happy:["Chính xác! Bạn làm tốt lắm!","Đúng rồi, tuyệt vời!","Quá chuẩn!","Bạn bắt đúng sắc thái rồi!","Một câu rất đẹp!","Tuyệt! Tiếp tục phát huy nhé.","Mình biết bạn làm được mà!","Panda đang ăn mừng đây!"],
    sad:["Câu này không dễ chút nào!","Ôi, đáp án này hơi đánh lừa đấy.","Không sao, mình cùng xem lại nhé.","Lần sau bạn sẽ nhận ra dấu hiệu này.","Sai một câu cũng là một cách học.","Câu này khá hóc búa!","Đừng nản, cứ tiếp tục nhé.","Hãy xem vì sao đáp án kia phù hợp hơn."],
    focus:["Đã thu hẹp còn hai lựa chọn!","Giờ hãy so sánh sắc thái nhé.","Bạn đã tiến gần hơn rồi.","Còn một bước suy luận nữa thôi.","Tập trung vào phần ngữ pháp nhé.","Hai đáp án này khác nhau ở điểm nào?","Panda cổ vũ bạn!","Sắp tìm ra rồi!"],
    skip:["Không sao, cùng xem đáp án nhé.","Bỏ qua cũng là một lựa chọn học tập.","Mình sẽ giải thích câu này cho bạn.","Đừng lo, ta học từ câu này nhé.","Câu tiếp theo đang chờ bạn!","Không biết cũng không sao đâu."]
  },
  "zh-CN":{
    neutral:["准备好挑战这一题了吗？","这道题你有把握吗？","来看看你能不能拿下这一题！","别着急，先仔细读一遍。","这题会不会正好难住你呢？","下一道挑战来啦！","我相信你可以的！","集中精神，我们开始吧！"],
    thinking:["先看看空格前面的部分。","这个连接形式表达了什么关系？","读完整句话再选择吧。","语境里藏着提示哦。","试着排除意思不合适的选项。","别急，注意语气和细微差别。","想想动作发生的时间。","看看句子是在补充还是对比。"],
    happy:["答对啦！太棒了！","完全正确！","漂亮的一题！","你抓住语感了！","这题答得真好！","太厉害了，继续加油！","我就知道你可以！","熊猫开始庆祝啦！"],
    sad:["这题可不简单！","哎呀，这个选项有点迷惑性。","没关系，我们一起看看。","下次你就能认出这个线索了。","答错也是学习的一部分。","这题确实有点难！","别灰心，继续努力。","看看另一个答案为什么更合适。"],
    focus:["现在只剩两个选项了！","比较一下它们的语气吧。","你已经更接近答案了。","再推理一步就好。","把注意力放在语法上。","这两个选项的区别是什么？","熊猫为你加油！","快找到答案啦！"],
    skip:["没关系，我们一起看答案。","跳过也是一种学习方式。","让我给你解释这一题吧。","别担心，从这一题继续学习。","下一题还在等你！","不知道也没关系。"]
  },
  "zh-TW":{
    neutral:["準備好挑戰這一題了嗎？","這題你有把握嗎？","來看看你能不能解開這一題！","別急，先仔細讀一遍。","這題會不會剛好難倒你呢？","下一個挑戰來囉！","我相信你做得到！","集中精神，我們開始吧！"],
    thinking:["先看看空格前面的部分。","這個連接形式表達什麼關係？","讀完整個句子再選吧。","語境裡藏著線索喔。","試著排除意思不合的選項。","別急，注意語氣和細微差異。","想想動作發生的時間。","看看句子是在補充還是在對比。"],
    happy:["答對了！太棒了！","完全正確！","漂亮的一題！","你抓到語感了！","這題答得真好！","太厲害了，繼續加油！","我就知道你可以！","熊貓開始慶祝囉！"],
    sad:["這題可不簡單！","哎呀，這個選項有點會騙人。","沒關係，我們一起看看。","下次你就能認出這個線索了。","答錯也是學習的一部分。","這題真的有點難！","別灰心，繼續努力。","看看另一個答案為什麼更合適。"],
    focus:["現在只剩兩個選項了！","比較一下它們的語氣吧。","你已經更接近答案了。","再推理一步就好。","把注意力放在文法上。","這兩個選項差在哪裡呢？","熊貓幫你加油！","快找到答案囉！"],
    skip:["沒關係，我們一起看答案。","跳過也是一種學習方式。","讓我來解釋這一題吧。","別擔心，從這題繼續學習。","下一題還在等你！","不知道也沒關係。"]
  },
  ko:{
    neutral:["이 문제에 도전할 준비 됐나요?","이 문제, 실력으로 풀 수 있겠어요?","어떻게 풀지 한번 볼까요?","서두르지 말고 차근차근 읽어요.","이번 문제는 조금 어려울지도 몰라요.","다음 도전이 왔어요!","당신이라면 할 수 있어요!","자, 집중해 볼까요?"],
    thinking:["빈칸 앞부분을 먼저 살펴보세요.","이 연결 표현은 어떤 관계를 나타낼까요?","문장 전체를 읽고 선택하세요.","문맥 속에 단서가 숨어 있어요.","의미가 맞지 않는 선택지를 지워 보세요.","서두르지 말고 뉘앙스를 살펴보세요.","동작이 일어나는 시점을 생각해 보세요.","문장이 추가인지 대조인지 살펴보세요."],
    happy:["정답이에요! 정말 잘했어요!","완벽해요!","멋진 답이에요!","문형의 뉘앙스를 잘 잡았어요!","아주 훌륭해요!","대단해요, 계속 가 봐요!","역시 해낼 줄 알았어요!","판다가 축하하고 있어요!"],
    sad:["이 문제 쉽지 않았어요!","앗, 꽤 헷갈리는 선택지였어요.","괜찮아요, 함께 살펴봐요.","다음에는 이 단서를 알아챌 거예요.","틀리는 것도 배움의 일부예요.","이번 문제는 꽤 까다로웠어요!","기운 내고 다음으로 가요.","다른 답이 왜 더 맞는지 확인해 봐요."],
    focus:["이제 두 개로 좁혀졌어요!","뉘앙스를 비교해 보세요.","정답에 한 걸음 가까워졌어요.","한 번만 더 생각해 봐요.","문법 표현에 집중하세요.","두 선택지는 무엇이 다를까요?","판다가 응원해요!","거의 다 왔어요!"],
    skip:["괜찮아요, 함께 정답을 살펴봐요.","건너뛰는 것도 학습 방법이에요.","이 문제를 설명해 드릴게요.","걱정하지 말고 여기서 배워 봐요.","다음 문제가 기다리고 있어요!","모르겠어도 괜찮아요."]
  },
  es:{
    neutral:["¿Preparado para este reto?","¿Estás al nivel de esta pregunta?","A ver cómo te desenvuelves con esta.","Sin prisa: léela con atención.","Esta quizá sea un poco difícil…","¡Aquí llega el siguiente desafío!","¡Confío en ti!","Vamos, concéntrate un poquito."],
    thinking:["Fíjate primero en lo que aparece antes del hueco.","¿Qué relación expresa esta conexión?","Lee la frase completa antes de elegir.","La pista está escondida en el contexto.","Prueba a descartar las opciones que no encajan.","No te precipites: observa el matiz.","Piensa en el momento en que ocurre la acción.","¿La frase añade información o establece un contraste?"],
    happy:["¡Correcto! ¡Muy bien!","¡Exactamente!","¡Qué buena respuesta!","Has captado el matiz.","¡Una respuesta impecable!","¡Genial, sigue así!","¡Sabía que podías!","¡El panda lo celebra!"],
    sad:["¡Esta no era nada fácil!","Vaya, esa opción era engañosa.","No pasa nada, vamos a revisarla.","La próxima vez reconocerás esta pista.","Equivocarse también forma parte del aprendizaje.","¡Esta sí que tenía truco!","Ánimo, sigue adelante.","Veamos por qué la otra opción encaja mejor."],
    focus:["¡Ya solo quedan dos opciones!","Compara sus matices.","Estás más cerca de la respuesta.","Solo falta un último razonamiento.","Concéntrate en la estructura gramatical.","¿En qué se diferencian estas dos opciones?","¡El panda te anima!","¡Ya casi lo tienes!"],
    skip:["No pasa nada, veamos juntos la respuesta.","Saltar una pregunta también es válido.","Te explico esta pregunta.","No te preocupes: aprendamos de ella.","¡La siguiente pregunta te espera!","No saberlo está bien."]
  },
  it:{
    neutral:["Pronto per questa sfida?","Sei all'altezza di questa domanda?","Vediamo come te la cavi con questa.","Con calma: leggila bene.","Questa potrebbe essere un po' difficile…","Ecco la prossima sfida!","Credo in te!","Forza, concentrati un attimo."],
    thinking:["Guarda prima la parte che precede lo spazio.","Che rapporto esprime questa connessione?","Leggi tutta la frase prima di scegliere.","L'indizio è nascosto nel contesto.","Prova a eliminare le opzioni che non tornano.","Non avere fretta: osserva la sfumatura.","Pensa al momento in cui avviene l'azione.","La frase aggiunge un'informazione o crea un contrasto?"],
    happy:["Esatto! Ben fatto!","Proprio così!","Ottima risposta!","Hai colto la sfumatura!","Una risposta perfetta!","Fantastico, continua così!","Sapevo che ce l'avresti fatta!","Il panda festeggia!"],
    sad:["Questa non era per niente facile!","Ops, quell'opzione era ingannevole.","Non importa, rivediamola insieme.","La prossima volta riconoscerai l'indizio.","Anche gli errori fanno parte dello studio.","Questa era proprio insidiosa!","Coraggio, vai avanti.","Vediamo perché l'altra risposta è più adatta."],
    focus:["Ora restano solo due opzioni!","Confronta le loro sfumature.","Sei più vicino alla risposta.","Manca solo un ultimo ragionamento.","Concentrati sulla struttura grammaticale.","Qual è la differenza tra queste due opzioni?","Il panda fa il tifo per te!","Ci sei quasi!"],
    skip:["Non importa, guardiamo insieme la risposta.","Saltare una domanda va bene.","Ti spiego questa domanda.","Non preoccuparti, impariamo da questa.","La prossima domanda ti aspetta!","Non sapere la risposta va bene."]
  },
  ne:{
    neutral:["यो प्रश्नका लागि तयार हुनुहुन्छ?","के तपाईं यो प्रश्नको स्तरमा हुनुहुन्छ?","यो प्रश्न कसरी हल गर्नुहुन्छ, हेरौँ।","हतार नगरी ध्यान दिएर पढ्नुहोस्।","यो अलि गाह्रो हुन सक्छ…","अर्को चुनौती आयो!","मलाई तपाईंमाथि विश्वास छ!","ल, ध्यान केन्द्रित गरौँ।"],
    thinking:["खाली ठाउँअघिको भाग पहिले हेर्नुहोस्।","यो जोड्ने रूपले कस्तो सम्बन्ध देखाउँछ?","छान्नुअघि पूरा वाक्य पढ्नुहोस्।","संकेत वाक्यको सन्दर्भमै छ।","अर्थ नमिल्ने विकल्प हटाएर हेर्नुहोस्।","हतार नगर्नुहोस्, सूक्ष्म अर्थ हेर्नुहोस्।","कार्य कहिले हुन्छ भन्ने सोच्नुहोस्।","वाक्यले थपेको हो कि तुलना गरेको हो, हेर्नुहोस्।"],
    happy:["सही उत्तर! धेरै राम्रो!","एकदम ठीक!","उत्कृष्ट उत्तर!","तपाईंले सूक्ष्म अर्थ बुझ्नुभयो!","धेरै राम्रो गर्नुभयो!","शानदार, यसरी नै अघि बढ्नुहोस्!","तपाईंले सक्नुहुन्छ भन्ने थाहा थियो!","पाण्डा खुसीले नाच्दैछ!"],
    sad:["यो प्रश्न सजिलो थिएन!","अहो, त्यो विकल्प झुक्याउने खालको थियो।","केही छैन, सँगै हेरौँ।","अर्को पटक यो संकेत चिन्नुहुनेछ।","गल्ती पनि सिकाइको भाग हो।","यो प्रश्न अलि जटिल थियो!","निराश नहुनुहोस्, अघि बढ्नुहोस्।","अर्को उत्तर किन उपयुक्त छ हेरौँ।"],
    focus:["अब दुईवटा विकल्प मात्र बाँकी छन्!","तिनको अर्थ तुलना गर्नुहोस्।","तपाईं उत्तरको नजिक पुग्नुभयो।","अझ एक पटक सोच्नुहोस्।","व्याकरणमा ध्यान दिनुहोस्।","यी दुई विकल्पमा के फरक छ?","पाण्डाले हौसला दिँदैछ!","उत्तर भेटिनै लाग्यो!"],
    skip:["केही छैन, सँगै उत्तर हेरौँ।","प्रश्न छोड्नु पनि ठीक छ।","म यो प्रश्न बुझाइदिन्छु।","चिन्ता नगर्नुहोस्, यसबाट सिकौँ।","अर्को प्रश्नले पर्खिरहेको छ!","थाहा नभए पनि ठीक छ।"]
  },
  my:{
    neutral:["ဒီမေးခွန်းကို စမ်းဖြေဖို့ အဆင်သင့်ပဲလား။","ဒီမေးခွန်းက သင့်အဆင့်နဲ့ ကိုက်ညီသလား။","ဒီတစ်ခုကို ဘယ်လိုဖြေမလဲ ကြည့်ရအောင်။","အလျင်မလိုပါနဲ့၊ သေချာဖတ်ပါ။","ဒီမေးခွန်းက နည်းနည်းခက်နိုင်တယ်နော်။","နောက်ထပ် စိန်ခေါ်မှုလာပြီ။","သင်လုပ်နိုင်မယ်လို့ ယုံကြည်တယ်။","ကဲ၊ အာရုံစိုက်ကြရအောင်။"],
    thinking:["ကွက်လပ်မတိုင်ခင် အပိုင်းကို အရင်ကြည့်ပါ။","ဒီဆက်စပ်ပုံစံက ဘယ်လိုဆက်နွယ်မှုကို ပြသသလဲ။","မရွေးခင် ဝါကျတစ်ခုလုံးကို ဖတ်ပါ။","အရိပ်အမြွက်က အကြောင်းအရာထဲမှာ ရှိနေတယ်။","အဓိပ္ပာယ်မကိုက်တဲ့ အဖြေတွေကို ဖယ်ကြည့်ပါ။","မလောပါနဲ့၊ အဓိပ္ပာယ်ကွဲပြားမှုကို သတိပြုပါ။","လုပ်ဆောင်မှု ဖြစ်ပွားတဲ့အချိန်ကို စဉ်းစားပါ။","ဝါကျက ထပ်ဖြည့်တာလား၊ နှိုင်းယှဉ်တာလား ကြည့်ပါ။"],
    happy:["မှန်ပါတယ်! အရမ်းကောင်းတယ်။","တိတိကျကျ မှန်ပါတယ်။","အဖြေကောင်းပါပဲ။","သဒ္ဒါရဲ့ အဓိပ္ပာယ်ကွဲပြားမှုကို ဖမ်းမိတယ်။","အလွန်ကောင်းပါတယ်။","အံ့ဩစရာပဲ၊ ဆက်ကြိုးစားပါ။","သင်လုပ်နိုင်မယ်လို့ သိနေတယ်။","ပန်ဒါလေး ဝမ်းသာနေပြီ။"],
    sad:["ဒီမေးခွန်းက မလွယ်ဘူးနော်။","အဲဒီရွေးချယ်မှုက လှည့်စားတတ်တယ်။","ကိစ္စမရှိပါဘူး၊ အတူပြန်ကြည့်ရအောင်။","နောက်တစ်ခါ ဒီအရိပ်အမြွက်ကို သိလာမယ်။","မှားတာလည်း သင်ယူမှုရဲ့ အစိတ်အပိုင်းပါ။","ဒီတစ်ခုက တကယ်ခက်တယ်။","စိတ်ဓာတ်မကျပါနဲ့၊ ဆက်သွားပါ။","အခြားအဖြေက ဘာကြောင့် ပိုသင့်တော်လဲ ကြည့်ရအောင်။"],
    focus:["အခု ရွေးချယ်စရာ နှစ်ခုပဲ ကျန်တော့တယ်။","သူတို့ရဲ့ အဓိပ္ပာယ်ကွာခြားချက်ကို နှိုင်းယှဉ်ပါ။","အဖြေနဲ့ ပိုနီးလာပြီ။","နောက်တစ်ဆင့်ပဲ စဉ်းစားပါ။","သဒ္ဒါပုံစံကို အာရုံစိုက်ပါ။","ဒီနှစ်ခု ဘာကွာသလဲ။","ပန်ဒါလေး အားပေးနေတယ်။","အဖြေကို ရတော့မယ်။"],
    skip:["ကိစ္စမရှိပါဘူး၊ အတူအဖြေကို ကြည့်ရအောင်။","မဖြေဘဲ ကျော်သွားလည်း ရပါတယ်။","ဒီမေးခွန်းကို ရှင်းပြပေးမယ်။","စိတ်မပူပါနဲ့၊ ဒီကနေ သင်ယူကြရအောင်။","နောက်မေးခွန်းက စောင့်နေတယ်။","မသိတာလည်း အဆင်ပြေပါတယ်။"]
  },
  fr:{
    neutral:["Alors, prêt à relever le défi ?","Tu es au niveau pour cette question ?","Voyons si tu peux dompter celle-ci…","Tu la sens, cette question ?","On y va tranquillement, sans se précipiter.","Prêt à faire chauffer tes neurones ?","La prochaine pourrait te surprendre…","Concentre-toi, je crois en toi !"],
    thinking:["Regarde bien ce qui précède le trou.","Quel lien cette expression établit-elle ?","Lis toute la phrase avant de choisir.","L'indice se cache dans le contexte.","Élimine d'abord les réponses qui ne collent pas au sens.","Prends le temps de comparer les nuances.","À quel moment l'action se déroule-t-elle ?","La phrase ajoute-t-elle une idée ou marque-t-elle un contraste ?"],
    happy:["Exact ! Bien joué !","Bravo, tu as trouvé !","Très bonne réponse !","Tu as bien saisi la nuance !","Un sans-faute sur celle-ci !","Excellent, continue comme ça !","Je savais que tu pouvais y arriver !","Le panda est fier de toi !"],
    sad:["Pas simple, celle-là !","Ouh, cette proposition était piégeuse…","Ce n'est pas grave, regardons ensemble.","La prochaine fois, tu reconnaîtras cet indice.","Une erreur, c'est aussi une occasion d'apprendre.","Celle-ci était vraiment subtile !","Courage, tu progresses à chaque question.","Voyons pourquoi l'autre réponse convient mieux."],
    focus:["Il ne reste que deux possibilités !","Compare bien leurs nuances.","Tu te rapproches de la bonne réponse.","Encore un petit effort de raisonnement.","Concentre-toi sur la construction grammaticale.","Quelle différence entre ces deux propositions ?","Le panda est avec toi !","Tu y es presque !"],
    skip:["Pas de souci, regardons la réponse ensemble.","Passer une question, ça arrive.","Je vais t'expliquer celle-ci.","Ne t'inquiète pas, on apprend aussi comme ça.","La prochaine question t'attend !","Ce n'est pas grave de ne pas savoir."]
  }
};
Object.keys(PANDA_LINES).forEach(lang=>Object.values(PANDA_LINES[lang]).forEach(lines=>lines.forEach(line=>{})));

const LANGUAGE_PREF_KEY="shinkanzenN2Language";
let savedLanguagePreference="fr";
try{const storedLanguage=localStorage.getItem(LANGUAGE_PREF_KEY);if(LANGS.includes(storedLanguage))savedLanguagePreference=storedLanguage;}catch(error){}
let state = {lang:savedLanguagePreference,order:[],index:0,answers:{},usedFifty:{},paused:false};
let savesUseJapanese = true;

const SAVE_UI={
  ja:{locale:"ja-JP",eyebrow:"学習の記録",title:"保存した学習記録",description:"このブラウザに保存された学習履歴です。",empty:"まだ学習記録はありません。クイズを始めると、ここに自動で保存されます。",legacyDate:"以前のバージョンからの保存 · 日時不明",unknownDate:"保存日時不明",completed:"完了",inProgress:"学習中",questions:"問",answerCount:"回答済み",score:"得点",review:"復習ポイント",chapterPrefix:"第",chapterSuffix:"課",viewResults:"結果を見る",resume:"学習を再開",delete:"削除",deleteConfirm:"この学習記録を削除しますか？"},
  vi:{locale:"vi-VN",eyebrow:"Lịch sử học tập",title:"Lịch sử học tập đã lưu",description:"Các lần học được lưu trên trình duyệt này.",empty:"Chưa có lịch sử học tập. Bắt đầu làm bài, kết quả sẽ tự động được lưu tại đây.",legacyDate:"Bản lưu từ phiên bản cũ · Không rõ ngày giờ",unknownDate:"Không rõ ngày giờ lưu",completed:"Đã hoàn thành",inProgress:"Đang học",questions:"câu",answerCount:"Đã trả lời",score:"Điểm",review:"Nội dung cần ôn lại",chapterPrefix:"Bài ",chapterSuffix:"",viewResults:"Xem kết quả",resume:"Tiếp tục làm bài",delete:"Xóa",deleteConfirm:"Bạn có muốn xóa lần học này không?"},
  "zh-CN":{locale:"zh-CN",eyebrow:"学习记录",title:"已保存的学习记录",description:"保存在这台设备浏览器中的学习记录。",empty:"还没有学习记录。开始答题后，记录会自动保存在这里。",legacyDate:"旧版本的保存记录 · 日期和时间未知",unknownDate:"保存时间未知",completed:"已完成",inProgress:"进行中",questions:"题",answerCount:"已回答",score:"得分",review:"需要复习的内容",chapterPrefix:"第",chapterSuffix:"课",viewResults:"查看结果",resume:"继续答题",delete:"删除",deleteConfirm:"确定要删除这条学习记录吗？"},
  "zh-TW":{locale:"zh-TW",eyebrow:"學習紀錄",title:"已儲存的學習紀錄",description:"儲存在這個瀏覽器中的學習紀錄。",empty:"目前還沒有學習紀錄。開始作答後，紀錄會自動儲存在這裡。",legacyDate:"舊版本的儲存紀錄 · 日期與時間不明",unknownDate:"儲存時間不明",completed:"已完成",inProgress:"進行中",questions:"題",answerCount:"已作答",score:"得分",review:"需要複習的內容",chapterPrefix:"第",chapterSuffix:"課",viewResults:"查看結果",resume:"繼續作答",delete:"刪除",deleteConfirm:"確定要刪除這筆學習紀錄嗎？"},
  ko:{locale:"ko-KR",eyebrow:"학습 기록",title:"저장된 학습 기록",description:"이 브라우저에 저장된 학습 기록입니다.",empty:"아직 학습 기록이 없습니다. 퀴즈를 시작하면 여기에 자동으로 저장됩니다.",legacyDate:"이전 버전에서 가져온 기록 · 날짜 및 시간 알 수 없음",unknownDate:"저장 시간 알 수 없음",completed:"완료",inProgress:"학습 중",questions:"문항",answerCount:"답변 완료",score:"점수",review:"복습할 내용",chapterPrefix:"",chapterSuffix:"과",viewResults:"결과 보기",resume:"이어서 풀기",delete:"삭제",deleteConfirm:"이 학습 기록을 삭제할까요?"},
  es:{locale:"es-ES",eyebrow:"Historial de estudio",title:"Sesiones guardadas",description:"Historial de estudio guardado en este navegador.",empty:"Todavía no hay sesiones guardadas. Al empezar el cuestionario, tu progreso se guardará aquí automáticamente.",legacyDate:"Sesión guardada en una versión anterior · Fecha y hora desconocidas",unknownDate:"Fecha de guardado desconocida",completed:"Completada",inProgress:"En curso",questions:"preguntas",answerCount:"Respondidas",score:"Puntuación",review:"Temas que conviene repasar",chapterPrefix:"Cap. ",chapterSuffix:"",viewResults:"Ver resultados",resume:"Reanudar cuestionario",delete:"Eliminar",deleteConfirm:"¿Quieres eliminar esta sesión?"},
  it:{locale:"it-IT",eyebrow:"Cronologia dello studio",title:"Sessioni salvate",description:"Cronologia dello studio salvata in questo browser.",empty:"Non ci sono ancora sessioni salvate. Quando inizi il quiz, i progressi verranno salvati qui automaticamente.",legacyDate:"Sessione salvata in una versione precedente · Data e ora non disponibili",unknownDate:"Data di salvataggio non disponibile",completed:"Completata",inProgress:"In corso",questions:"domande",answerCount:"Risposte date",score:"Punteggio",review:"Argomenti da ripassare",chapterPrefix:"Cap. ",chapterSuffix:"",viewResults:"Vedi i risultati",resume:"Riprendi il quiz",delete:"Elimina",deleteConfirm:"Vuoi eliminare questa sessione?"},
  ne:{locale:"ne-NP",eyebrow:"अध्ययन विवरण",title:"सुरक्षित अध्ययन विवरण",description:"यस ब्राउजरमा सुरक्षित गरिएका अध्ययन विवरणहरू।",empty:"अहिलेसम्म कुनै अध्ययन विवरण छैन। क्विज सुरु गरेपछि प्रगति यहाँ स्वतः सुरक्षित हुनेछ।",legacyDate:"पुरानो संस्करणबाट सुरक्षित गरिएको · मिति र समय थाहा छैन",unknownDate:"सुरक्षित गरेको समय थाहा छैन",completed:"पूरा भयो",inProgress:"अभ्यास जारी छ",questions:"प्रश्न",answerCount:"उत्तर दिइएका",score:"अङ्क",review:"पुनरावृत्ति गर्नुपर्ने विषय",chapterPrefix:"पाठ ",chapterSuffix:"",viewResults:"नतिजा हेर्नुहोस्",resume:"अभ्यास जारी राख्नुहोस्",delete:"मेटाउनुहोस्",deleteConfirm:"यो अध्ययन विवरण मेटाउन चाहनुहुन्छ?"},
  my:{locale:"my-MM",eyebrow:"လေ့လာမှုမှတ်တမ်း",title:"သိမ်းဆည်းထားသော လေ့လာမှုမှတ်တမ်းများ",description:"ဤဘရောက်ဇာတွင် သိမ်းဆည်းထားသော လေ့လာမှုမှတ်တမ်းများဖြစ်သည်။",empty:"လေ့လာမှုမှတ်တမ်း မရှိသေးပါ။ မေးခွန်းစတင်ဖြေဆိုပါက ဤနေရာတွင် အလိုအလျောက် သိမ်းဆည်းမည်။",legacyDate:"ယခင်ဗားရှင်းမှ မှတ်တမ်း · ရက်စွဲနှင့်အချိန် မသိရပါ",unknownDate:"သိမ်းဆည်းချိန် မသိရပါ",completed:"ပြီးဆုံးပါပြီ",inProgress:"လေ့လာနေဆဲ",questions:"မေးခွန်း",answerCount:"ဖြေဆိုပြီး",score:"ရမှတ်",review:"ပြန်လည်လေ့လာရန်",chapterPrefix:"အခန်း ",chapterSuffix:"",viewResults:"ရလဒ်ကြည့်ရန်",resume:"ဆက်လက်ဖြေဆိုရန်",delete:"ဖျက်ရန်",deleteConfirm:"ဤလေ့လာမှုမှတ်တမ်းကို ဖျက်လိုပါသလား？"},
  fr:{locale:"fr-FR",eyebrow:"Historique des sessions",title:"Sessions enregistrées",description:"Historique des sessions conservées dans ce navigateur.",empty:"Aucune session pour le moment. Dès que tu commenceras le quiz, ta progression sera automatiquement enregistrée ici.",legacyDate:"Sauvegarde d'une ancienne version · Date et heure inconnues",unknownDate:"Date d'enregistrement inconnue",completed:"Terminée",inProgress:"En cours",questions:"questions",answerCount:"Répondues",score:"Score",review:"Points à revoir",chapterPrefix:"Chap. ",chapterSuffix:"",viewResults:"Voir les résultats",resume:"Reprendre le quiz",delete:"Supprimer",deleteConfirm:"Veux-tu supprimer cette session ?"}
,
en:{locale:"en-GB",eyebrow:"Study history",title:"Saved sessions",description:"Study sessions saved in this browser.",empty:"No sessions yet. Your progress will be saved here automatically when you start a quiz.",legacyDate:"Saved in an older version · Date and time unknown",unknownDate:"Save time unknown",completed:"Completed",inProgress:"In progress",questions:"questions",answerCount:"Answered",score:"Score",review:"Topics to review",chapterPrefix:"Chapter ",chapterSuffix:"",viewResults:"View results",resume:"Resume quiz",delete:"Delete",deleteConfirm:"Delete this session?"},
be:{locale:"be-BY",eyebrow:"Гісторыя навучання",title:"Захаваныя сесіі",description:"Сесіі навучання, захаваныя ў гэтым браўзеры.",empty:"Пакуль няма сесій. Калі пачнеш тэст, прагрэс будзе аўтаматычна захоўвацца тут.",legacyDate:"Захавана ў старой версіі · дата і час невядомыя",unknownDate:"Час захавання невядомы",completed:"Завершана",inProgress:"У працэсе",questions:"пытанняў",answerCount:"Адказана",score:"Вынік",review:"Тэмы для паўтарэння",chapterPrefix:"Раздзел ",chapterSuffix:"",viewResults:"Паглядзець вынікі",resume:"Працягнуць тэст",delete:"Выдаліць",deleteConfirm:"Выдаліць гэтую сесію?"}
};
const SAVE_GROUP_LABELS={
 ja:{sessions:"セッション",best:"最高得点",average:"平均点",subjectFallback:"その他"},
 vi:{sessions:"phiên",best:"Điểm cao nhất",average:"Điểm trung bình",subjectFallback:"Môn học khác"},
 "zh-CN":{sessions:"次学习",best:"最高分",average:"平均分",subjectFallback:"其他科目"},
 "zh-TW":{sessions:"次學習",best:"最高分",average:"平均分",subjectFallback:"其他科目"},
 ko:{sessions:"회",best:"최고 점수",average:"평균 점수",subjectFallback:"기타 과목"},
 es:{sessions:"sesiones",best:"Mejor puntuación",average:"Promedio",subjectFallback:"Otras materias"},
 it:{sessions:"sessioni",best:"Punteggio migliore",average:"Media",subjectFallback:"Altre materie"},
 ne:{sessions:"सत्र",best:"उच्चतम अङ्क",average:"औसत अङ्क",subjectFallback:"अन्य विषय"},
 my:{sessions:"ကြိမ်",best:"အမြင့်ဆုံးရမှတ်",average:"ပျမ်းမျှရမှတ်",subjectFallback:"အခြားဘာသာရပ်"},
 fr:{sessions:"sessions",best:"Meilleur score",average:"Moyenne",subjectFallback:"Autres matières"},en:{sessions:"sessions",best:"Best score",average:"Average",subjectFallback:"Other subjects"},be:{sessions:"сесій",best:"Найлепшы вынік",average:"Сярэдні вынік",subjectFallback:"Іншыя прадметы"}
};
Object.keys(SAVE_UI).forEach(lang=>{
  SAVE_UI[lang].viewDetails=SAVE_DETAILS_LABELS[lang]||SAVE_DETAILS_LABELS.fr;
  SAVE_UI[lang].group=SAVE_GROUP_LABELS[lang]||SAVE_GROUP_LABELS.fr;
});
function saveText(){return savesUseJapanese?SAVE_UI.ja:(SAVE_UI[state.lang]||SAVE_UI.ja);}


function t(key){const value=(UI[state.lang]&&UI[state.lang][key])||UI.fr[key]||UI.en[key];if(value)return value;console.warn("Missing interface translation",state.lang,key);return "";}
function escapeHtml(value){
  return String(value==null?"":value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function rubyHtml(value){return escapeHtml(value);}
function shuffle(items){const copy=items.slice();for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];}return copy;}
function getGrammar(id){return DATA.grammar.find(g=>g.id===id);}
function localizedGloss(id){
  const values=GLOSS[id];
  return values?values[LANGS.indexOf(state.lang)]||"": "";
}
function renderPauseSummary(){
  const answered=Object.keys(state.answers||{}).length;
  const fifties=Number.isFinite(state.fifties)?state.fifties:Object.keys(state.usedFifty||{}).filter(key=>state.usedFifty[key]).length;
  const answeredEl=$("pause-answered"),fiftyEl=$("pause-fifties");
  if(answeredEl)answeredEl.textContent=answered+"/100";
  if(fiftyEl)fiftyEl.textContent=String(fifties);
}
function screen(name){
  document.querySelectorAll(".screen").forEach(el=>el.classList.remove("active"));
  $("screen-"+name).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  document.body.classList.toggle("show-mascot-prank",name!=="home");
  if(name==="home")renderSaves();
  if(name==="pause")renderPauseSummary();
}
function translateUi(){
  document.documentElement.lang=state.lang==="zh-CN"?"zh-CN":state.lang==="zh-TW"?"zh-TW":state.lang;
  if(UI[state.lang]&&UI[state.lang].pageTitle)document.title=t("pageTitle");
  document.querySelectorAll("[data-i18n]").forEach(el=>{if(el.closest(".brand,.hero-copy,.language-panel"))return;const key=el.dataset.i18n;if(t(key))el.textContent=t(key);});
  const names=LANGUAGE_NAMES_NATIVE;
  if(names)Array.from($("language-select").options).forEach(option=>{option.textContent=names[option.value]||option.textContent;});
  const languageSelect=$("language-select");if(languageSelect)languageSelect.setAttribute("aria-label",t("languageLabel"));
  const homeButton=$("global-home-btn");if(homeButton)homeButton.setAttribute("aria-label",t("home"));
  const brandLink=document.querySelector(".brand");if(brandLink)brandLink.setAttribute("aria-label",t("home"));
  const homePanda=$("home-panda-image"),quizPanda=$("panda-image"),pausePanda=$("pause-panda-image");
  if(homePanda)homePanda.alt=t("homePandaAlt");
  if(quizPanda)quizPanda.alt=t("pandaAlt");
  if(pausePanda)pausePanda.alt=t("pandaAlt");
}
function dateLabel(value){
  const labels=saveText();
  if(!value)return labels.legacyDate;
  const date=new Date(value);
  if(Number.isNaN(date.getTime()))return labels.unknownDate;
  return date.toLocaleString(labels.locale,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});
}
function loadSessions(){
  try{const value=JSON.parse(localStorage.getItem(SESSIONS_KEY)||"[]");return Array.isArray(value)?value:[];}catch(error){return [];}
}
function saveSession(){
  if(!state.sessionId)return;
  state.updatedAt=new Date().toISOString();
  try{
    const sessions=loadSessions();
    const index=sessions.findIndex(item=>item.sessionId===state.sessionId);
    const copy=JSON.parse(JSON.stringify(state));
    if(index>=0)sessions[index]=copy;else sessions.unshift(copy);
    sessions.sort((a,b)=>new Date(b.createdAt||0)-new Date(a.createdAt||0));
    localStorage.setItem(SESSIONS_KEY,JSON.stringify(sessions.slice(0,40)));
    renderSaves();
  }catch(error){console.warn("Could not save the session",error);}
}

function migrateLegacySave(){
  const raw=localStorage.getItem(STORE_KEY);
  if(!raw||loadSessions().length)return;
  try{
    const legacy=JSON.parse(raw);
    if(legacy&&Array.isArray(legacy.order)&&legacy.order.length===100){
      legacy.sessionId="legacy-"+Date.now();legacy.subjectId=legacy.subjectId||"grammar-n2";legacy.subjectLabel=legacy.subjectLabel||"文法 N2";
      legacy.createdAt=null;
      legacy.updatedAt=new Date().toISOString();
      legacy.completed=false;
      const sessions=loadSessions();sessions.unshift(legacy);
      localStorage.setItem(SESSIONS_KEY,JSON.stringify(sessions));
      localStorage.removeItem(STORE_KEY);
    }
  }catch(error){console.warn("Could not migrate an old save",error);}
}

function renderSaves(){
  const host=$("save-list");if(!host)return;
  const labels=saveText(),groupLabels=labels.group||SAVE_GROUP_LABELS.fr;
  const eyebrow=$("save-section-eyebrow"),heading=$("save-section-title"),description=$("save-section-intro");
  if(eyebrow)eyebrow.textContent=labels.eyebrow||SAVE_UI.ja.eyebrow;
  if(heading)heading.textContent=labels.title;
  if(description)description.textContent=labels.description;
  const sessions=loadSessions();
  if(!sessions.length){host.innerHTML='<p class="no-saves">'+escapeHtml(labels.empty)+'</p>';return;}
  const groups=new Map();
  sessions.forEach(session=>{const key=session.subjectId||"grammar-n2";if(!groups.has(key))groups.set(key,[]);groups.get(key).push(session);});
  const chapterName=number=>labels.chapterPrefix+number+labels.chapterSuffix;
  host.innerHTML=[...groups.entries()].map(([subjectId,items])=>{
    const completedItems=items.filter(session=>session.completed&&session.result&&Number.isFinite(Number(session.result.score)));
    const scores=completedItems.map(session=>Number(session.result.score));
    const best=scores.length?Math.max(...scores):null;
    const average=scores.length?Math.round(scores.reduce((sum,value)=>sum+value,0)/scores.length):null;
    const subjectName=subjectId==="grammar-n2"?t("subjectName"):(items.find(session=>session.subjectLabel)?.subjectLabel||groupLabels.subjectFallback+" · "+subjectId);
    const cards=items.map(session=>{
      const answered=Object.keys(session.answers||{}).length,completed=!!session.completed,result=session.result||null;
      const progress=Math.round(answered/100*100);
      const fifties=Number.isFinite(session.fifties)?session.fifties:Object.keys(session.usedFifty||{}).filter(key=>session.usedFifty[key]).length;
      const graph=result&&Array.isArray(result.chapters)?'<div class="save-mini-chart">'+result.chapters.map(row=>{
        const pct=row.answered?row.correct/row.answered*100:0;
        return '<div class="mini-chart-row"><span>'+escapeHtml(chapterName(row.ch))+'</span><i><b style="width:'+pct+'%"></b></i><small>'+row.correct+'/'+row.answered+'</small></div>';
      }).join("")+'</div>':"";
      const errors=result&&Array.isArray(result.errors)&&result.errors.length?'<p class="save-review-note">'+escapeHtml(labels.review)+'：'+result.errors.slice(0,4).map(row=>escapeHtml((getGrammar(row.id)||{}).name||row.id)).join("・")+'</p>':"";
      const summary=completed?labels.completed+' · '+(result?result.answered:answered)+'/100 '+labels.questions:labels.inProgress+' · '+answered+'/100 '+labels.questions;
      const details=completed
        ?'<div class="save-completed-score'+(result&&Number(result.score)===100?' perfect-score':'')+'"><span>'+escapeHtml(labels.score)+'</span><strong>'+(result?result.score:0)+'<small>/100</small></strong><em>50/50 · '+fifties+'</em></div>'+graph+errors
        :'<div class="save-progress"><div><span>'+escapeHtml(labels.answerCount)+'</span><b>'+answered+'/100</b></div><i><b style="width:'+progress+'%"></b></i><small>'+progress+'% · 50/50 · '+fifties+'</small></div>';
      const view='<button data-action="view-details" data-id="'+escapeHtml(session.sessionId)+'">'+escapeHtml(labels.viewDetails||labels.viewResults)+'</button>';
      const resume=completed?"":'<button data-action="resume" data-id="'+escapeHtml(session.sessionId)+'">'+escapeHtml(labels.resume)+'</button>';
      const scoreBadge=completed?'<span class="save-summary-score">'+(result?result.score:0)+'/100</span>':'';
      return '<details class="saved-session" data-save="'+escapeHtml(session.sessionId)+'"><summary><div class="save-summary-main"><strong>'+escapeHtml(dateLabel(session.createdAt))+'</strong><small>'+escapeHtml(summary)+'</small></div>'+scoreBadge+'<span class="save-summary-arrow">＋</span></summary><div class="save-session-body">'+details+'<div class="save-actions">'+view+resume+'<button class="delete-save" data-action="delete" data-id="'+escapeHtml(session.sessionId)+'">'+escapeHtml(labels.delete)+'</button></div></div></details>';
    }).join("");
    const stats='<div class="save-subject-stats"><span>'+items.length+' '+escapeHtml(groupLabels.sessions)+'</span>'+
      (best===null?'':'<span>'+escapeHtml(groupLabels.best)+' <strong>'+best+'/100</strong></span>')+
      (average===null?'':'<span>'+escapeHtml(groupLabels.average)+' <strong>'+average+'/100</strong></span>')+'</div>';
    return '<details class="save-subject-group"><summary class="save-subject-heading"><h3>'+escapeHtml(subjectName)+'</h3>'+stats+'<span class="save-subject-toggle" aria-hidden="true">⌄</span></summary><div class="save-subject-sessions">'+cards+'</div></details>';
  }).join("");
}
function renderReview(){
  const chapters=Array.from({length:8},(_,i)=>i+1);
  $("review-list").innerHTML=chapters.map(ch=>{
    const entries=DATA.grammar.filter(g=>g.ch===ch);
    const cards=entries.map(g=>{
      const gloss=localizedGloss(g.id);
      const extra=state.lang==="fr"&&g.dist?'<p class="grammar-distinction"><b>Nuance :</b> '+escapeHtml(g.dist)+'</p>':"";
      const translation=(EXAMPLES[g.id]||[])[LANGS.indexOf(state.lang)]||"";
      return '<article class="grammar-card"><h3>'+rubyHtml(g.name)+'</h3><div class="grammar-form">'+rubyHtml(g.form)+'</div><p class="grammar-meaning">'+escapeHtml(gloss)+'</p>'+extra+'<div class="grammar-example"><p>'+rubyHtml(g.example)+'</p>'+(translation?'<small>'+escapeHtml(translation)+'</small>':"")+'</div></article>';
    }).join("");
    const chapterTitle=t("chapterLabel").replace("{n}",String(ch));
    const itemCount=t("grammarItems").replace("{n}",String(entries.length));
    return '<details class="chapter-accordion" '+(ch===1?"open":"")+'><summary><span>'+escapeHtml(chapterTitle)+'</span><small>'+escapeHtml(itemCount)+'</small></summary><div class="grammar-grid">'+cards+'</div></details>';
  }).join("");
}
function startSession(){
  if(DATA.questions.length!==100){alert(t("questionBankError"));return;}
  const lang=state.lang;
  state={lang:lang,subjectId:"grammar-n2",subjectLabel:"文法 N2",order:shuffle(DATA.questions.map((item,index)=>index)),index:0,answers:{},fifties:0,usedFifty:{},pandaBags:{},paused:false,completed:false,sessionId:"session-"+Date.now()+"-"+Math.random().toString(36).slice(2,7),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};
  saveSession();renderQuestion();screen("quiz");setMascot("neutral");
}
function current(){return DATA.questions[state.order[state.index]];}
function matchGrammars(source){
  const normalized=String(source||"").replace(/[～〜]/g,"").replace(/[（）()]/g,"");
  return DATA.grammar.filter(grammar=>{
    
    const variants=grammar.name.replace(/[～〜]/g,"").split(/[・／]/).map(variant=>variant.replace(/[（）()]/g,""));
    return variants.some(variant=>variant.length>=2&&normalized.includes(variant));
  });
}
function renderQuick(question){
  const choices=question.choices||[];
  const completedOptions=choices.map(choice=>question.kind==="blank"
    ?question.prompt.replace(/（[　\s]*）/,choice)
    :question.prompt+choice);
  const sources=[question.prompt,...choices,...completedOptions];
  const ids=[...new Set(sources.flatMap(source=>matchGrammars(source)).map(grammar=>grammar.id))];
  $("quick-reference-panel").classList.toggle("hidden",ids.length===0);const reminder=$("quick-reference-panel").querySelector(".eyebrow");if(reminder)reminder.textContent=t("reminder");
  $("side-card").classList.toggle("hidden",ids.length===0);
  if(!ids.length){$("quick-refs").innerHTML="";$("quick-detail").innerHTML="";return;}
  $("quick-refs").innerHTML=ids.map(id=>'<button class="ref-btn" data-ref="'+id+'">'+rubyHtml(getGrammar(id).name)+'</button>').join("");
  $("quick-detail").classList.add("hidden");$("quick-detail").innerHTML="";
  document.querySelectorAll(".ref-btn").forEach(button=>button.addEventListener("click",()=>{
    const grammar=getGrammar(button.dataset.ref);
    document.querySelectorAll(".ref-btn").forEach(item=>item.classList.toggle("active",item===button));
    $("quick-detail").innerHTML='<strong>'+rubyHtml(grammar.name)+'</strong><div>'+rubyHtml(grammar.form)+'</div><div>'+escapeHtml(localizedGloss(grammar.id))+'</div><div class="quick-example">'+rubyHtml(grammar.example)+'</div>';
    $("quick-detail").classList.remove("hidden");
  }));
}
function renderScoreAccess(){
  const count=Object.keys(state.answers||{}).length;
  const button=$("progress-score-btn");
  if(button)button.classList.toggle("hidden",count<10||!!state.completed);
}
function renderQuestion(){
  if(!state.order.length)return;
  const question=current(),answered=Object.prototype.hasOwnProperty.call(state.answers,state.index);
  $("question-count").textContent=t("questionCount")+" "+String(state.index+1).padStart(2,"0")+" "+t("questionOf")+" 100";
  $("question-kind").textContent=question.kind==="blank"?t("chooseGrammar"):t("chooseContinuation");
  $("progress-fill").style.width=(state.index+1)+"%";
  $("question-prompt").innerHTML=rubyHtml(question.prompt);
  $("options").innerHTML=question.choices.map((choice,index)=>'<button class="option-btn" data-choice="'+index+'" '+(answered?"disabled":"")+'><span class="letter">'+ "ABCD"[index] +'</span><span>'+rubyHtml(choice)+'</span></button>').join("");
  document.querySelectorAll(".option-btn").forEach(button=>button.addEventListener("click",()=>answer(Number(button.dataset.choice))));
  $("feedback").className="feedback hidden";$("feedback").innerHTML="";
  $("next-btn").classList.toggle("hidden",!answered);
  $("fifty-btn").disabled=!!state.usedFifty[state.index]||answered;
  $("dont-know-btn").disabled=answered;
  $("jump-input").value="";
  if(state.usedFifty[state.index])applyFifty();
  if(answered)showAnswer(state.answers[state.index],true);
  else setMascot("neutral");
  renderQuick(question);renderScoreAccess();saveSession();
}
function completedSentence(question){
  const answer=question.choices[question.answer];
  return question.kind==="blank"?question.prompt.replace(/（[　\s]*）/,answer):question.prompt+answer;
}
function answer(choice){
  if(Object.prototype.hasOwnProperty.call(state.answers,state.index))return;
  const selected=Number(choice);
  if(!Number.isInteger(selected)||selected< -1||selected>3)return;
  state.answers[state.index]=selected;saveSession();showAnswer(selected,false);
}

const PANDA_EXTRA={
  vi:["Bạn cứ dành thời gian suy nghĩ nhé.","Biểu thức nào nối hai ý này?","Ngữ cảnh thường cho ta câu trả lời.","Hãy chú ý điều gì thay đổi trong câu.","Mẫu này có sắc thái rất cụ thể.","Hãy xem từng phương án một."],
  "zh-CN":["不用着急，慢慢思考。","哪个表达连接了这两个意思？","语境往往会告诉你答案。","留意句子中发生了什么变化。","这个语法形式有很明确的语气。","我们逐个看看选项吧。"],
  "zh-TW":["不用著急，慢慢思考。","哪個表達連接了這兩個意思？","語境往往會告訴你答案。","留意句子中發生了什麼變化。","這個文法形式有很明確的語氣。","我們逐個看看選項吧。"],
  ko:["서두르지 말고 천천히 생각해요.","어떤 표현이 두 내용을 연결할까요?","문맥에 답이 있는 경우가 많아요.","문장에서 무엇이 달라지는지 살펴보세요.","이 문형에는 분명한 뉘앙스가 있어요.","선택지를 하나씩 살펴봐요."],
  es:["Tómate tu tiempo para pensar.","¿Qué expresión conecta estas dos ideas?","El contexto suele darte la respuesta.","Fíjate en lo que cambia en la frase.","Esta forma tiene un matiz muy concreto.","Vamos a revisar las opciones una por una."],
  it:["Prenditi il tempo per riflettere.","Quale espressione collega queste due idee?","Spesso il contesto suggerisce la risposta.","Nota che cosa cambia nella frase.","Questa forma ha una sfumatura precisa.","Esaminiamo le opzioni una alla volta."],
  ne:["हतार नगरी सोच्न समय लिनुहोस्।","कुन अभिव्यक्तिले यी दुई विचार जोड्छ?","सन्दर्भले प्रायः उत्तर दिन्छ।","वाक्यमा के परिवर्तन हुन्छ ध्यान दिनुहोस्।","यो रूपको विशेष अर्थछटा छ।","विकल्पहरू एक-एक गरेर हेरौँ।"],
  my:["အလျင်မလိုဘဲ စဉ်းစားဖို့ အချိန်ယူပါ။","ဘယ်အသုံးအနှုန်းက အယူအဆနှစ်ခုကို ဆက်စပ်ပေးသလဲ။","စာကြောင်းအခြေအနေက အဖြေကို မကြာခဏ ပြောပြပေးတတ်တယ်။","ဝါကျထဲမှာ ဘာတွေပြောင်းလဲသလဲ သတိထားပါ။","ဒီပုံစံမှာ သီးခြားအဓိပ္ပာယ်နုချက် ရှိတယ်။","ရွေးချယ်စရာတွေကို တစ်ခုချင်းစီ ကြည့်ရအောင်။"],
  fr:["Prends le temps de réfléchir, rien ne presse.","Quelle expression relie ces deux idées ?","Le contexte donne souvent la réponse.","Repère ce qui change dans la phrase.","Cette forme a une nuance bien précise.","On regarde les propositions une par une."]
};
Object.keys(PANDA_LINES).forEach(lang=>{
  const bank=PANDA_LINES[lang];
  bank.neutral=[...bank.neutral,...bank.thinking,...bank.focus,...PANDA_EXTRA[lang]];
});

PANDA_LINES.en={neutral:["Ready for the next challenge?","Take your time and read carefully.","Let's see how you handle this one!"],thinking:["Look at the words before the blank.","Read the whole sentence before choosing.","The context gives you a clue."],focus:["You can do it!"],happy:["Correct! Great job!","Exactly right!","You got it!"],sad:["Not quite, but keep going.","That's okay. Learn from this one.","Let's look at the correct answer."],skip:["No problem. Let's learn the answer."]};
PANDA_LINES.be={neutral:["Гатовы да наступнага задання?","Не спяшайся, уважліва прачытай.","Паглядзім, як ты справішся!"],thinking:["Звярні ўвагу на словы перад пропускам.","Прачытай увесь сказ перад выбарам.","Кантэкст падказвае адказ."],focus:["У цябе ўсё атрымаецца!"],happy:["Правільна! Выдатная праца!","Менавіта так!","Ты справіўся!"],sad:["Не зусім, але працягвай.","Нічога страшнага. Зрабі выснову.","Давай паглядзім правільны адказ."],skip:["Нічога страшнага. Давай вывучым адказ."]};

const HOME_PANDA_LINES={
  vi:"Cùng ôn tập nhé! Mình cổ vũ bạn!",
  "zh-CN":"一起复习吧！我会为你加油！",
  "zh-TW":"一起複習吧！我會幫你加油！",
  ko:"함께 복습해요! 제가 응원할게요!",
  es:"¡Vamos a repasar! ¡Estoy de tu lado!",
  it:"Ripassiamo insieme! Faccio il tifo per te!",
  ne:"सँगै दोहोर्‍याएर पढौँ! म तपाईंलाई हौसला दिन्छु!",
  my:"အတူတူ ပြန်လေ့လာကြရအောင်။ အားပေးနေမယ်။",
  fr:"Allez, on révise ensemble ! Je t'encourage !"
};
HOME_PANDA_LINES.en="Let’s study together! I’m cheering you on!";
HOME_PANDA_LINES.ja="一緒に頑張ろう！";
HOME_PANDA_LINES.be="Давай вучыцца разам! Я цябе падтрымліваю!";
function getBrowserPandaLanguage(){
  const preferences=[...(navigator.languages||[]),navigator.language||""];
  for(const preference of preferences){
    const tag=String(preference).toLowerCase();
    if(tag.startsWith("zh"))return /tw|hk|mo|hant/.test(tag)?"zh-TW":"zh-CN";
    const base=tag.split("-")[0];
    if(HOME_PANDA_LINES[base])return base;
  }
  return "en";
}
function updateHomePandaLine(){
  const language=getBrowserPandaLanguage();
  const line=HOME_PANDA_LINES[language]||HOME_PANDA_LINES.en;
  const el=$("home-panda-message"),caption=$(".home-panda-caption");
  if(el)el.textContent=line;
  if(caption)caption.textContent=line;
}
function pandaLine(mood){
  const bank=PANDA_LINES[state.lang]||PANDA_LINES.fr;
  const list=bank[mood]||bank.neutral;
  state.pandaBags=state.pandaBags||{};
  state.pandaLast=state.pandaLast||{};
  let bag=state.pandaBags[mood]||[];
  if(!bag.length){
    bag=shuffle(list.map((_,i)=>i));
    if(list.length>1&&bag[bag.length-1]===state.pandaLast[mood]){
      const swap=bag[0];bag[0]=bag[bag.length-1];bag[bag.length-1]=swap;
    }
  }
  const index=bag.pop();
  state.pandaBags[mood]=bag;
  state.pandaLast[mood]=index;
  return list[index];
}
const PANDA_VOCAB={
"始業":{reading:"しぎょう",meaning:{"fr":"début des cours ou du travail","vi":"bắt đầu giờ học hoặc làm việc","zh-CN":"开始上课或上班","zh-TW":"開始上課或上班","ko":"수업이나 업무의 시작","es":"inicio de las clases o del trabajo","it":"inizio delle lezioni o del lavoro","ne":"कक्षा वा काम सुरु हुने समय","my":"အတန်း သို့မဟုတ် အလုပ် စတင်ချိန်"}},
"負担":{reading:"ふたん",meaning:{"fr":"charge, poids à supporter","vi":"gánh nặng, khoản phải chịu","zh-CN":"负担、压力","zh-TW":"負擔、壓力","ko":"부담","es":"carga, peso","it":"peso, onere","ne":"भार, बोझ","my":"ဝန်ထုပ်ဝန်ပိုး"}},
"商店街":{reading:"しょうてんがい",meaning:{"fr":"rue commerçante","vi":"phố có nhiều cửa hàng","zh-CN":"商业街","zh-TW":"商店街、商業街","ko":"상점가","es":"calle comercial","it":"via commerciale","ne":"पसलहरू भएको व्यापारिक सडक","my":"ဆိုင်များရှိသော စျေးလမ်း"}},
"衰退":{reading:"すいたい",meaning:{"fr":"déclin, baisse d'activité","vi":"suy thoái, sa sút","zh-CN":"衰退、衰落","zh-TW":"衰退、沒落","ko":"쇠퇴","es":"declive, decadencia","it":"declino","ne":"पतन, ह्रास","my":"ကျဆင်းမှု၊ 쇠퇴"}},
"責任者":{reading:"せきにんしゃ",meaning:{"fr":"personne responsable","vi":"người chịu trách nhiệm","zh-CN":"负责人","zh-TW":"負責人","ko":"책임자","es":"persona responsable","it":"responsabile","ne":"जिम्मेवार व्यक्ति","my":"တာဝန်ခံသူ"}},
"応募条件":{reading:"おうぼじょうけん",meaning:{"fr":"conditions pour postuler","vi":"điều kiện ứng tuyển","zh-CN":"应聘条件","zh-TW":"應徵條件","ko":"지원 조건","es":"requisitos para presentar una candidatura","it":"requisiti per candidarsi","ne":"आवेदनका सर्तहरू","my":"လျှောက်ထားရန် သတ်မှတ်ချက်များ"}},
"経験の有無":{reading:"けいけんのうむ",meaning:{"fr":"le fait d'avoir de l'expérience ou non","vi":"có kinh nghiệm hay không","zh-CN":"是否有经验","zh-TW":"是否有經驗","ko":"경험 유무","es":"si se tiene experiencia o no","it":"presenza o meno di esperienza","ne":"अनुभव छ वा छैन","my":"အတွေ့အကြုံရှိ၊ မရှိ"}},
"専門知識":{reading:"せんもんちしき",meaning:{"fr":"connaissances spécialisées","vi":"kiến thức chuyên môn","zh-CN":"专业知识","zh-TW":"專業知識","ko":"전문 지식","es":"conocimientos especializados","it":"conoscenze specialistiche","ne":"विशेषज्ञ ज्ञान","my":"အထူးပြု အသိပညာ"}},
"実務経験":{reading:"じつむけいけん",meaning:{"fr":"expérience pratique du travail","vi":"kinh nghiệm làm việc thực tế","zh-CN":"实际工作经验","zh-TW":"實務經驗","ko":"실무 경험","es":"experiencia práctica de trabajo","it":"esperienza pratica di lavoro","ne":"व्यावहारिक कामको अनुभव","my":"လက်တွေ့လုပ်ငန်းအတွေ့အကြုံ"}},
"消費電力":{reading:"しょうひでんりょく",meaning:{"fr":"quantité d'électricité consommée","vi":"lượng điện tiêu thụ","zh-CN":"耗电量","zh-TW":"耗電量","ko":"전력 소비량","es":"consumo eléctrico","it":"consumo elettrico","ne":"बिजुली खपत","my":"လျှပ်စစ်သုံးစွဲမှု ပမာဏ"}},
"条例":{reading:"じょうれい",meaning:{"fr":"règlement municipal","vi":"quy định của địa phương","zh-CN":"地方条例","zh-TW":"地方自治條例","ko":"지방 조례","es":"reglamento municipal","it":"regolamento comunale","ne":"स्थानीय नियम","my":"ဒေသဆိုင်ရာ စည်းမျဉ်း"}},
"交渉":{reading:"こうしょう",meaning:{"fr":"négociation, discussion pour trouver un accord","vi":"đàm phán, thương lượng","zh-CN":"谈判、协商","zh-TW":"談判、協商","ko":"협상","es":"negociación","it":"negoziazione","ne":"वार्ता, सम्झौता गर्ने छलफल","my":"ညှိနှိုင်းဆွေးနွေးမှု"}},
"主張":{reading:"しゅちょう",meaning:{"fr":"position ou opinion défendue","vi":"ý kiến hoặc lập trường được đưa ra","zh-CN":"主张、观点","zh-TW":"主張、立場","ko":"주장, 입장","es":"postura u opinión defendida","it":"posizione sostenuta","ne":"आफ्नो धारणा वा अडान","my":"တင်ပြသောအမြင်၊ ရပ်တည်ချက်"}},
"審査":{reading:"しんさ",meaning:{"fr":"examen, évaluation","vi":"xét duyệt, đánh giá","zh-CN":"审查、评估","zh-TW":"審查、評估","ko":"심사","es":"evaluación, revisión","it":"valutazione, esame","ne":"मूल्याङ्कन, जाँच","my":"စစ်ဆေးအကဲဖြတ်မှု"}},
"合意":{reading:"ごうい",meaning:{"fr":"accord, entente","vi":"thỏa thuận, đồng thuận","zh-CN":"协议、共识","zh-TW":"協議、共識","ko":"합의","es":"acuerdo","it":"accordo","ne":"सहमति","my":"သဘောတူညီချက်"}},
"民話":{reading:"みんわ",meaning:{"fr":"conte populaire traditionnel","vi":"truyện dân gian","zh-CN":"民间故事","zh-TW":"民間故事","ko":"민담","es":"cuento popular","it":"racconto popolare","ne":"लोककथा","my":"ရိုးရာပုံပြင်"}},
"流暢":{reading:"りゅうちょう",meaning:{"fr":"qui parle couramment, avec aisance","vi":"nói trôi chảy, lưu loát","zh-CN":"流利","zh-TW":"流利","ko":"유창한","es":"que habla con fluidez","it":"che parla con scioltezza","ne":"धाराप्रवाह बोल्ने","my":"ချောမွေ့စွာ ပြောတတ်သော"}},
"管理体制":{reading:"かんりたいせい",meaning:{"fr":"organisation de la gestion et du contrôle","vi":"hệ thống quản lý và kiểm soát","zh-CN":"管理制度","zh-TW":"管理體制","ko":"관리 체계","es":"sistema de gestión y control","it":"sistema di gestione e controllo","ne":"व्यवस्थापन तथा नियन्त्रण प्रणाली","my":"စီမံခန့်ခွဲမှုနှင့် ထိန်းချုပ်မှုစနစ်"}}
};
const PANDA_VOCAB_EN_BE={"始業":["start of classes or work","пачатак заняткаў або працы"],"負担":["burden; responsibility","цяжар; абавязак"],"商店街":["shopping street","гандлёвая вуліца"],"衰退":["decline; downturn","заняпад; спад"],"責任者":["person in charge","адказная асоба"],"応募条件":["application requirements","умовы падачы заяўкі"],"経験の有無":["whether or not one has experience","наяўнасць або адсутнасць досведу"],"専門知識":["specialized knowledge","спецыяльныя веды"],"実務経験":["practical work experience","практычны досвед працы"],"消費電力":["power consumption","спажыванне электраэнергіі"],"条例":["ordinance; local regulation","пастанова; мясцовы нарматыўны акт"],"交渉":["negotiation","перамовы"],"主張":["assertion; claim","сцвярджэнне; пазіцыя"],"審査":["screening; examination","праверка; разгляд"],"合意":["agreement; consensus","згода; дамоўленасць"],"民話":["folk tale","народная казка"],"流暢":["fluent","свабодны; беглы"],"管理体制":["management system","сістэма кіравання"]};
Object.entries(PANDA_VOCAB_EN_BE).forEach(([word,values])=>{if(PANDA_VOCAB[word]){PANDA_VOCAB[word].meaning.en=values[0];PANDA_VOCAB[word].meaning.be=values[1];}});

function pandaVocabulary(question){
  if(!question)return [];
  const source=[question.prompt||"",...(question.choices||[])].join(" ");
  return Object.entries(PANDA_VOCAB)
    .filter(([word])=>source.includes(word))
    .slice(0,3)
    .map(([word,item])=>word+"（"+item.reading+"）＝"+(item.meaning[state.lang]||item.meaning.fr));
}
function pickLocalizedPanda(mood){return pandaLine(mood);}
function setMascot(mood){
  const stage=$("mascot-stage");if(!stage)return;
  stage.dataset.mood=mood;
  const image=$("panda-image");
  if(image)image.src=mood==="happy"?"assets/panda-chibi-happy.svg":mood==="sad"?"assets/panda-chibi-worried.svg":"assets/panda-chibi.svg";
  const vocabulary=pandaVocabulary(typeof current==="function"?current():null);
  const bubble=$("mascot-bubble");
  if(bubble){
    bubble.textContent=vocabulary.length?vocabulary.join(String.fromCharCode(10)):pandaLine(mood);
    bubble.classList.toggle("vocabulary-bubble",vocabulary.length>0);
  }
}
const WHY_FR={
  sai:"Le départ, le retour ou l'utilisation sont présentés comme le moment auquel s'applique une consigne : 際に sert précisément à situer une procédure à cette occasion.",
  ni_sai:"La phrase annonce une action importante qui accompagne le lancement ou le changement d'une étape. に際して／にあたって introduit le moment où cette nouvelle étape commence.",
  totan:"La seconde action se produit brusquement juste après la première. たとたんに insiste sur cette succession immédiate et inattendue.",
  ka_to_omou:"La phrase décrit deux événements observés qui se succèdent presque sans intervalle. かと思うと présente ce changement rapide.",
  ka_nai:"Le deuxième événement commence avant même que le premier soit entièrement achevé. か～ないかのうちに souligne qu'ils se produisent quasiment au même moment.",
  saichu:"L'appel ou l'alarme survient pendant que l'action est encore en cours. 最中に désigne précisément le milieu de cette activité.",
  uchini:"On profite d'un état temporaire — la chaleur, le sommeil ou la floraison — avant qu'il ne change. うちに signifie qu'il faut agir pendant que cette occasion existe encore.",
  bakari_ippou:"La situation évolue continuellement dans la même direction, ici une hausse ou une baisse qui se poursuit. 一方だ met l'accent sur cette tendance qui s'accentue.",
  you_to:"Le sujet est sur le point d'agir ou s'apprête à le faire, mais l'action n'est pas encore achevée. ようとしている exprime cette imminence ou cette tentative.",
  tsutsu_aru:"La situation change progressivement au fil du temps. つつある présente une évolution en cours, et non une action simplement en train de se dérouler à cet instant.",
  tsutsu:"Les deux actions sont menées en parallèle : réfléchir tout en préparant, ou comparer tout en décidant. つつ exprime cette simultanéité dans un registre plutôt écrit.",
  te_hajimete:"La compréhension apparaît seulement après l'expérience mentionnée. てはじめて marque le moment où l'on découvre ou comprend quelque chose pour la première fois grâce à cette expérience.",
  ue_de:"La première étape doit être accomplie avant de prendre la décision ou de lancer l'étape suivante. た上で indique que la décision vient après l'examen ou la vérification.",
  shidai:"La seconde action est prévue dès que l'information ou l'arrivée attendue devient effective. 次第 annonce une action qui suivra immédiatement, souvent dans un contexte professionnel.",
  te_irai:"La phrase mesure une durée qui se poursuit depuis un événement passé — le diplôme, le début d'une habitude ou l'arrivée au Japon. て以来 fixe ce point de départ.",
  te_kara:"L'action suivante est impossible tant que la vérification ou l'autorisation préalable n'a pas eu lieu. てからでないと exprime cette condition indispensable.",
  wo_hajime:"Kyoto ou les grandes villes sont cités comme premier exemple d'un ensemble plus large. をはじめ introduit un représentant typique, puis les autres éléments du groupe.",
  kara_shite:"Un seul détail observable — les vêtements ou le ton de la voix — suffit à tirer une conclusion plus générale. からして présente ce détail comme un indice révélateur.",
  ni_watatte:"La construction indique une durée ou une étendue importante : trois ans, huit heures ou une zone entière. にわたって insiste sur cette ampleur.",
  wo_tsuujite:"La phrase considère toute la période, du début à la fin, sans se limiter à un moment particulier. を通じて signifie ici « pendant toute la durée ».",
  kagiri:"Le locuteur limite ce qu'il affirme à ce qu'il a personnellement vérifié ou sait. 限り marque la portée de l'information disponible, sans prétendre connaître davantage.",
  dake:"La phrase évoque la quantité maximale possible : faire autant d'efforts que l'on peut. だけ fixe ici cette limite supérieure.",
  ni_kagiri:"L'avantage ou la réduction est réservé au groupe ou à la période nommés. に限り sert à limiter explicitement les bénéficiaires ou la validité.",
  kagiri_wa:"La règle reste valable aussi longtemps que la condition est vraie : habiter dans la ville ou être responsable. 限り（は） lie la responsabilité à cette condition qui continue.",
  kagiri_dewa:"L'affirmation est limitée aux informations consultées ou à ce que le locuteur a pu observer. 限りでは évite de présenter cette conclusion comme une certitude absolue.",
  ni_kagitte:"La construction souligne une exception ou une coïncidence particulièrement frappante : justement ce jour-là, ou justement cette personne. Dans 彼に限って, le locuteur estime que cette personne ferait exception et n'oublierait pas la promesse.",
  ni_kagirazu:"Le premier groupe cité n'est pas le seul concerné : d'autres personnes ou organisations sont également incluses. に限らず élargit donc explicitement le champ.",
  nominarazu:"La phrase ajoute un deuxième élément au premier dans un registre plutôt formel. のみならず signifie « non seulement…, mais aussi… ».",
  bakari_ka:"La seconde action renforce ou aggrave la première : ne pas s'excuser, puis rejeter la faute sur l'autre. ばかりか ajoute un élément encore plus marquant.",
  wa_motoyori:"Le premier élément est présenté comme allant de soi, puis un autre est ajouté. はもとより signifie que le premier n'est même pas à discuter et que le second est également valable.",
  ue_ni:"Deux caractéristiques de même orientation sont accumulées : deux avantages ou deux défauts. 上に signifie « en plus de cela » et relie ces faits de même signe.",
  ni_kanshite:"La phrase délimite le sujet précis dont il est question — l'enquête ou les points du contrat. に関して introduit le thème auquel se rapporte l'information.",
  wo_megutte:"Plusieurs personnes ou groupes ont des avis différents autour d'un même sujet, d'une règle ou d'une négociation. をめぐって présente ce débat ou ce conflit.",
  ni_kakete:"La phrase évalue une compétence particulièrement élevée dans un domaine précis. にかけては signifie « quand il s'agit de… », avec l'idée que la personne excelle dans ce domaine.",
  ni_taishite:"La construction désigne la personne ou la chose vers laquelle une réaction est dirigée, ou établit une opposition entre deux personnes. Les mots qui suivent — critique, réponse ou contraste — indiquent cette relation.",
  ni_kotaete:"Une action est menée pour répondre à une demande, une attente ou un besoin. にこたえて relie la mesure prise à ce qui était attendu ou demandé.",
  wo_moto:"L'expérience ou le conte sert de matériau de départ pour créer le roman ou le film. をもとに présente donc une source d'inspiration ou de matière, plutôt qu'une règle à suivre.",
  ni_motozuki:"Les données ou les résultats servent de fondement objectif à une décision ou à une politique. に基づいて indique les éléments concrets sur lesquels la décision s'appuie.",
  ni_sotte:"L'action doit respecter un plan, un manuel ou des critères déjà établis. に沿って signifie que l'on suit une ligne directrice ou une règle, étape par étape.",
  no_moto:"L'action se déroule sous l'autorité, la supervision ou dans le cadre d'un accord ou d'un système de contrôle. のもとで indique ce cadre qui encadre l'action.",
  mukeda:"Le cours ou le guide est conçu pour un public cible précis. 向け indique à qui le produit ou le document est destiné, et non simplement qui l'apprécie."
};
function questionExplanation(question){
  const id=question.grammar;
  if(state.lang==="fr")return WHY_FR[id]||question.hint||"Le sens de la phrase correspond à cette construction grammaticale.";
  const explanations=window.N2_QUESTION_EXPLANATIONS&&window.N2_QUESTION_EXPLANATIONS[state.lang];
  return (explanations&&explanations[id])||t("whyContext")+" "+localizedGloss(id)+".";
}
function localizedTranslation(question,questionIndex){
  const index=Number.isInteger(questionIndex)?questionIndex:DATA.questions.indexOf(question);
  const bank=window.N2_QUESTION_TRANSLATIONS||{};
  const translated=bank[state.lang]&&bank[state.lang][index];
  return translated||t("translationUnavailable");
}
function showAnswer(choice,restoring){
  const question=current(),correct=choice===question.answer,didSkip=choice===-1;
  document.querySelectorAll(".option-btn").forEach((button,index)=>{
    button.disabled=true;
    if(index===question.answer)button.classList.add(didSkip?"revealed-answer":"correct");
    else if(index===choice&&!didSkip)button.classList.add("incorrect");
  });
  const grammar=getGrammar(question.grammar);
  const selected=didSkip?t("notAnswered"):question.choices[choice];
  const right=question.choices[question.answer];
  const message=didSkip?pickLocalizedPanda("skip"):(correct?pickLocalizedPanda("happy"):pickLocalizedPanda("sad"));
  const detailParts=[];
  detailParts.push('<strong class="feedback-emotion">'+escapeHtml(message)+'</strong>');
  if(correct||didSkip){
    detailParts.push('<div class="answer-compare answer-compare-single"><div class="answer-chip answer-chip-correct"><small>'+escapeHtml(t("correctAnswer"))+'</small><strong>'+rubyHtml(right)+'</strong></div></div>');
  }else{
    detailParts.push('<div class="answer-compare"><div class="answer-chip answer-chip-correct"><small>'+escapeHtml(t("correctAnswer"))+'</small><strong>'+rubyHtml(right)+'</strong></div><div class="answer-chip answer-chip-user"><small>'+escapeHtml(t("yourAnswer"))+'</small><strong>'+rubyHtml(selected)+'</strong></div></div>');
  }
  detailParts.push('<section class="feedback-explanation"><b>'+escapeHtml(t("translation"))+'</b><p class="feedback-translation">'+escapeHtml(localizedTranslation(question))+'</p><b>'+escapeHtml(t("whyTitle"))+'</b><p>'+escapeHtml(questionExplanation(question))+'</p><small class="feedback-grammar">'+escapeHtml(grammar?grammar.name:"")+'</small></section>');
  $("feedback").className="feedback"+(!correct&&!didSkip?" wrong":"");
  $("feedback").innerHTML=detailParts.join("");
  $("next-btn").classList.remove("hidden");
  $("fifty-btn").disabled=true;$("dont-know-btn").disabled=true;
  setMascot(didSkip?"thinking":(correct?"happy":"sad"));
  renderScoreAccess();
  if(!restoring)saveSession();
}
function applyFifty(){
  const question=current();
  document.querySelectorAll(".option-btn").forEach((button,index)=>{
    if(index!==question.answer&&index!==((question.answer+1)%4))button.classList.add("eliminated");
  });
}
function useFifty(){
  if(state.usedFifty[state.index]||Object.prototype.hasOwnProperty.call(state.answers,state.index))return;
  state.usedFifty[state.index]=true;state.fifties=(state.fifties||0)+1;saveSession();applyFifty();
  $("fifty-btn").disabled=true;
  $("feedback").className="feedback hint-feedback";
  $("feedback").innerHTML="<strong>50/50</strong><p>"+escapeHtml(t("fiftyDone"))+"</p>";
  setMascot("focus");
}
function nextQuestion(){
  if(!Object.prototype.hasOwnProperty.call(state.answers,state.index))return;
  if(state.index===99){finish();return;}
  state.index++;saveSession();renderQuestion();
}
function jumpToQuestion(){
  const value=Number($("jump-input").value);
  if(!Number.isInteger(value)||value<1||value>100){
    $("jump-input").setCustomValidity(t("jumpInvalid"));
    $("jump-input").reportValidity();return;
  }
  $("jump-input").setCustomValidity("");
  state.index=value-1;saveSession();renderQuestion();renderScoreAccess();
}
function calculateResults(){
  const storedAnswers=state.answers&&typeof state.answers==="object"?state.answers:{};
  const order=Array.isArray(state.order)&&state.order.length===DATA.questions.length
    ?state.order:DATA.questions.map((_,index)=>index);
  const selectedAt=position=>{
    if(!Object.prototype.hasOwnProperty.call(storedAnswers,String(position)))return null;
    const raw=storedAnswers[position];
    if(raw===-1||raw==="-1")return -1;
    const value=Number(raw);
    return Number.isInteger(value)&&value>=0&&value<=3?value:null;
  };
  const answeredPositions=order.map((_,position)=>position).filter(position=>selectedAt(position)!==null);
  const answered=answeredPositions.length;
  let score=0;
  const chapters=Array.from({length:8},(_,index)=>({ch:index+1,total:0,answered:0,correct:0}));
  const errors={};
  const missed=[];
  order.forEach((questionIndex,position)=>{
    const question=DATA.questions[questionIndex]||DATA.questions[position];
    if(!question)return;
    const row=chapters[(question.ch||1)-1]||chapters[0];
    row.total++;
    const selected=selectedAt(position);
    if(selected===null)return;
    row.answered++;
    const isCorrect=selected===question.answer;
    if(isCorrect){score++;row.correct++;return;}
    errors[question.grammar]=(errors[question.grammar]||0)+1;
    missed.push({
      position:position+1,
      questionIndex:questionIndex,
      prompt:question.prompt||"",
      sentence:completedSentence(question),
      wrong:selected===-1?null:(question.choices&&question.choices[selected]!=null?question.choices[selected]:null),
      correct:question.choices&&question.choices[question.answer]!=null?question.choices[question.answer]:null,
      grammar:question.grammar,
      skipped:selected===-1,
      why:questionExplanation(question),
      translation:localizedTranslation(question,questionIndex)
    });
  });
  const ranked=Object.entries(errors).sort((a,b)=>b[1]-a[1]).map(row=>({id:row[0],count:row[1]}));
  const fifties=Number.isFinite(state.fifties)?state.fifties:Object.keys(state.usedFifty||{}).filter(key=>state.usedFifty[key]).length;
  return {score:score,accuracy:answered?Math.round(score/answered*100):0,answered:answered,unanswered:100-answered,fifties:fifties,chapters:chapters,errors:ranked,missed:missed};
}
function renderResult(result){
  const partial=!state.completed;
  $("result-page-eyebrow").textContent=partial?t("progressReviewEyebrow"):t("finished");
  $("result-page-title").textContent=partial?t("progressReviewTitle"):t("resultTitle");
  $("final-score").textContent=state.completed?result.score+"/100":result.score+"/"+result.answered;
  $("fifty-total").textContent=result.fifties||0;
  $("completed-total").textContent=result.answered;
  $("unanswered-total").textContent=result.unanswered;
  $("score-caption").textContent=(result.accuracy||0)+"%";
  $("score-progress-fill").style.width=(result.accuracy||0)+"%";
  $("result-continue").classList.toggle("hidden",!partial);
  $("result-restart").classList.toggle("hidden",partial);
  $("chapter-stats").innerHTML=result.chapters.map(row=>{
    const percent=row.answered?Math.round(row.correct/row.answered*100):0;
    return '<div class="chapter-row"><div class="chapter-row-head"><strong>'+escapeHtml(t("chapterShort"))+' '+row.ch+'</strong><span>'+row.correct+'/'+row.answered+' · '+percent+'%</span></div><div class="chapter-bar"><i style="width:'+percent+'%"></i></div><small>'+escapeHtml(t("chapterAnswered"))+' '+row.answered+'/'+row.total+'</small></div>';
  }).join("");
  $("mistake-summary").innerHTML=result.errors.length?result.errors.slice(0,8).map(row=>{
    const grammar=getGrammar(row.id)||{},detail=questionExplanation({grammar:row.id});
    return '<article class="mistake-row"><div><strong>'+escapeHtml(grammar.name||row.id)+'</strong><p>'+escapeHtml(detail)+'</p></div><span class="mistake-count">'+row.count+'×</span></article>';
  }).join(""):'<p class="success-note">'+escapeHtml(t("noMistakes"))+'</p>';
  $("missed-list").innerHTML=result.missed.length?result.missed.map(item=>{
    const grammar=getGrammar(item.grammar)||{};
    const wrong=item.skipped?t("notAnswered"):(item.wrong==null||String(item.wrong).trim()===""?t("answerUnavailable"):String(item.wrong));
    const correct=item.correct==null||String(item.correct).trim()===""?t("answerUnavailable"):String(item.correct);
    const why=item.why||questionExplanation({grammar:item.grammar});
    const translation=item.translation||localizedTranslation(DATA.questions[item.questionIndex],item.questionIndex);
    return '<article class="missed-item"><div class="missed-heading"><span>Q'+item.position+'</span><strong>'+escapeHtml(grammar.name||item.grammar)+'</strong></div><p class="missed-japanese">'+rubyHtml(item.sentence||item.prompt)+'</p><div class="missed-answers"><p><b>'+escapeHtml(t("wrongAnswer"))+' :</b> '+escapeHtml(wrong)+'</p><p><b>'+escapeHtml(t("correctAnswer"))+' :</b> '+escapeHtml(correct)+'</p></div><div class="missed-explanation"><b>'+escapeHtml(t("whyTitle"))+'</b><p>'+escapeHtml(why)+'</p><b>'+escapeHtml(t("translation"))+'</b><p>'+escapeHtml(translation)+'</p></div></article>';
  }).join(""):'<p class="success-note">'+escapeHtml(t("noMisses"))+'</p>';
}
function finish(){
  state.completed=true;state.paused=false;
  const result=calculateResults();state.result=result;
  saveSession();renderResult(result);screen("result");
}
function showProgressResults(){
  if(Object.keys(state.answers||{}).length<10)return;
  const result=calculateResults();state.result=result;saveSession();
  renderResult(result);screen("result");
}
function returnToQuiz(){
  state.paused=false;state.result=null;saveSession();
  screen("quiz");renderQuestion();
}
function viewSessionResults(id){
  const session=loadSessions().find(item=>item.sessionId===id);
  if(!session)return;
  const selectedLanguage=$("language-select").value||state.lang||"fr";
  state={...session,lang:selectedLanguage};savesUseJapanese=false;
  $("language-select").value=state.lang;translateUi();updateHomePandaLine();renderSaves();
  const result=calculateResults();state.result=result;
  saveSession();
  renderResult(result);screen("result");
}
function resumeSession(id){
  const session=loadSessions().find(item=>item.sessionId===id);
  if(!session)return;
  const selectedLanguage=$("language-select").value||state.lang||"fr";
  state={...session,lang:selectedLanguage};savesUseJapanese=false;
  $("language-select").value=state.lang;translateUi();updateHomePandaLine();renderSaves();
  if(state.completed){const result=calculateResults();state.result=result;saveSession();renderResult(result);screen("result");return;}
  renderQuestion();screen(state.paused?"pause":"quiz");
}
$("prepare-btn").addEventListener("click",()=>{
  state.lang=$("language-select").value;translateUi();savesUseJapanese=false;renderSaves();screen("subject");
});
$("subject-grammar").addEventListener("click",()=>{renderReview();screen("review");});
$("subject-back").addEventListener("click",()=>screen("home"));
$("back-subject").addEventListener("click",()=>screen("subject"));
$("start-btn").addEventListener("click",startSession);
$("next-btn").addEventListener("click",nextQuestion);
$("fifty-btn").addEventListener("click",useFifty);
$("dont-know-btn").addEventListener("click",()=>answer(-1));
$("jump-btn").addEventListener("click",jumpToQuestion);
$("jump-input").addEventListener("keydown",event=>{if(event.key==="Enter")jumpToQuestion();});
$("pause-btn").addEventListener("click",()=>{state.paused=true;saveSession();screen("pause");});
$("continue-btn").addEventListener("click",returnToQuiz);
$("progress-score-btn").addEventListener("click",showProgressResults);
$("global-home-btn").addEventListener("click",()=>{if(state.sessionId)saveSession();screen("home");});
function openRestartDialog(){$("restart-dialog").classList.remove("hidden");}
function closeRestartDialog(){$("restart-dialog").classList.add("hidden");}
function removeCurrentSession(){
  const id=state.sessionId;
  if(!id)return;
  const sessions=loadSessions().filter(item=>item.sessionId!==id);
  localStorage.setItem(SESSIONS_KEY,JSON.stringify(sessions));
  renderSaves();
}
$("restart-btn").addEventListener("click",openRestartDialog);
$("restart-save").addEventListener("click",()=>{
  state.paused=true;saveSession();closeRestartDialog();startSession();
});
$("restart-discard").addEventListener("click",()=>{
  removeCurrentSession();closeRestartDialog();startSession();
});
$("restart-cancel").addEventListener("click",closeRestartDialog);
$("restart-dialog").addEventListener("click",event=>{if(event.target===$("restart-dialog"))closeRestartDialog();});
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&!$("restart-dialog").classList.contains("hidden"))closeRestartDialog();});
$("result-continue").addEventListener("click",returnToQuiz);
$("result-restart").addEventListener("click",startSession);
$("language-select").addEventListener("change",event=>{state.lang=event.target.value;try{localStorage.setItem(LANGUAGE_PREF_KEY,state.lang);}catch(error){}savesUseJapanese=false;translateUi();updateHomePandaLine();renderSaves();});
$("save-list").addEventListener("click",event=>{
  const button=event.target.closest("button[data-action]");
  if(!button)return;
  const id=button.dataset.id,action=button.dataset.action;
  if(action==="resume"){resumeSession(id);return;}
  if(action==="view"||action==="view-details"){viewSessionResults(id);return;}
  if(action==="delete"){
    if(!confirm(saveText().deleteConfirm))return;
    const sessions=loadSessions().filter(item=>item.sessionId!==id);
    localStorage.setItem(SESSIONS_KEY,JSON.stringify(sessions));renderSaves();
  }
});



const EXAMPLES_EN_BE={"sai":["Please contact reception when you leave.","Калі будзеце сыходзіць, калі ласка, звярніцеся да адміністратара."],"ni_sai":["An information session was held when the new system was introduced.","З нагоды ўвядзення новай сістэмы правялі інфармацыйную сустрэчу."],"totan":["The moment I opened the window, a cold wind blew in.","Як толькі я адчыніў акно, у пакой уварваўся халодны вецер."],"ka_to_omou":["Just when I thought the child was crying, they suddenly burst out laughing.","Не паспелі мы падумаць, што дзіця плача, як яно раптам засмяялася."],"ka_nai":["The students left the classroom before the bell had even finished ringing.","Вучні выйшлі з класа яшчэ да таго, як званок паспеў адзвінець."],"saichu":["I'm in the middle of a meeting, so I'll call you later.","Я зараз на нарадзе, таму патэлефаную пазней."],"uchini":["Please enjoy it while it is still warm.","Калі ласка, з'ешце гэта, пакуль яно яшчэ цёплае."],"bakari_ippou":["The population in this area keeps declining.","Насельніцтва гэтага раёна працягвае змяншацца."],"you_to":["The train is just about to leave the station.","Цягнік вось-вось адправіцца са станцыі."],"tsutsu_aru":["The economy is gradually recovering.","Эканоміка паступова аднаўляецца."],"tsutsu":["I revised the plan while checking the issues.","Я змяніў план, адначасова правяраючы праблемныя моманты."],"te_hajimete":["Only after living alone did I understand how hard my parents had worked.","Толькі пачаўшы жыць самастойна, я зразумеў, як шмат працавалі мае бацькі."],"ue_de":["Please check the details before submitting your application.","Калі ласка, праверце змест перад падачай заяўкі."],"shidai":["I will contact you as soon as the details become clear.","Я звяжуся з вамі, як толькі стануць вядомыя падрабязнасці."],"te_irai":["I have been using Japanese every day since I came to Japan.","З таго часу, як я прыехаў у Японію, я штодня карыстаюся японскай мовай."],"te_kara":["You cannot enter this room unless you obtain permission first.","У гэты пакой нельга ўваходзіць, пакуль не атрымаеце дазвол."],"wo_hajime":["Redevelopment is progressing in many cities, starting with Tokyo.","У многіх гарадах, пачынаючы з Токіо, працягваецца рэканструкцыя."],"kara_shite":["Just from the way he speaks, you can tell he is experienced.","Ужо па яго манеры гаварыць зразумела, што ён мае вялікі досвед."],"ni_watatte":["The survey was conducted throughout the country.","Апытанне правялі па ўсёй краіне."],"wo_tsuujite":["Tourists visit this shop throughout the year.","На працягу ўсяго года гэты магазін наведваюць турысты."],"kagiri":["As far as I know, that story is not true.","Наколькі мне вядома, гэтая гісторыя не адпавядае рэчаіснасці."],"dake":["Let's do everything we can.","Давайце зробім усё, што ў нашых сілах."],"ni_kagiri":["Admission is free today only.","Толькі сёння ўваход бясплатны."],"kagiri_wa":["As long as you live here, you must follow these rules.","Пакуль вы жывяце тут, вы павінны выконваць гэтыя правілы."],"kagiri_dewa":["As far as I have checked, no problems were found.","Наколькі мне ўдалося праверыць, праблем не выяўлена."],"ni_kagitte":["The train is always late on the very days I'm in a hurry.","Менавіта ў тыя дні, калі я спяшаюся, цягнік заўсёды спазняецца."],"ni_kagirazu":["This system is available not only to students but also to working adults.","Гэтай сістэмай могуць карыстацца не толькі студэнты, але і працоўныя."],"nominarazu":["He can speak not only English but also Chinese.","Ён размаўляе не толькі па-англійску, але і па-кітайску."],"bakari_ka":["Not only did he fail to apologize, but he also started blaming the other person.","Ён не толькі не папрасіў прабачэння, але і пачаў вінаваціць суразмоўцу."],"wa_motoyori":["This facility is open to the general public as well as specialists.","Гэтая ўстанова адкрыта не толькі для спецыялістаў, але і для шырокай публікі."],"ue_ni":["This shop is inexpensive, and what's more, it is close to the station.","Гэты магазін не толькі танны, але і знаходзіцца недалёка ад станцыі."],"ni_kanshite":["There are three points I would like to confirm regarding the contract.","Я хацеў бы ўдакладніць тры моманты, якія датычацца кантракта."],"wo_megutte":["Residents are divided over the new development plan.","Меркаванні жыхароў наконт новага плана забудовы падзяліліся."],"ni_kakete":["When it comes to cooking, no one can match her.","Калі гаворка ідзе пра кулінарыю, ёй няма роўных."],"ni_taishite":["My older brother is cautious, whereas my younger brother is quite bold.","Мой старэйшы брат асцярожны, у адрозненне ад малодшага, які даволі смелы."],"ni_kotaete":["In response to residents' requests, the library's opening hours were extended.","У адказ на просьбы жыхароў гадзіны працы бібліятэкі павялічылі."],"wo_moto":["This film was made based on an actual incident.","Гэты фільм зняты на аснове рэальнай падзеі."],"ni_motozuki":["Measures were decided based on the survey results.","Меры вызначылі на падставе вынікаў апытання."],"ni_sotte":["Please proceed with the work according to the plan.","Калі ласка, выконвайце працу ў адпаведнасці з планам."],"no_moto":["The experiment was conducted under the guidance of an expert.","Эксперымент правялі пад кіраўніцтвам спецыяліста."],"mukeda":["This learning material was designed for intermediate learners.","Гэты навучальны матэрыял прызначаны для вучняў сярэдняга ўзроўню."]};
Object.entries(EXAMPLES_EN_BE).forEach(([id,pair])=>{EXAMPLES[id]=EXAMPLES[id]||Array(9).fill("");while(EXAMPLES[id].length<9)EXAMPLES[id].push("");EXAMPLES[id].push(pair[0],pair[1]);});

Object.assign(UI.en,{"pageTitle":"N631 Final Exam Review · N2 Grammar","brandTitle":"Final Exam Review","brandSubtitle":"N631 class · 9 December 2026","home":"Home","homeEyebrow":"9 December 2026 · Final exam","homeTitleA":"Make Japanese","homeTitleB":"your own.","homeLede":"Learn, practise and make steady progress.","metaGrammar":"Grammar review","metaLanguages":"11 explanation languages","metaHistory":"Study history","stepOne":"STEP 1","languageHeading":"Choose your explanation language","languagePrompt":"Questions and answer choices remain in Japanese.","languageLabel":"Explanation language","prepareHome":"Next: choose a subject","savedHeading":"Saved study sessions","savedIntro":"Your learning history saved in this browser.","footerCourse":"N631 · Final exam review","creatorCredit":"Created by Kenta","homePandaCaption":"Let's study together!","subjectStep":"STEP 2","subjectHeading":"Choose a subject","subjectIntro":"Select the subject you want to review.","subjectGrammar":"N2 Grammar","subjectDescription":"Shin Kanzen Master · Chapters 1–8","chapterLabel":"Chapter","grammarItems":"grammar points","questionCount":"Question","questionOf":"of","reminder":"Reminder","jumpLabel":"Go to question","jump":"Go","saveProgress":"Save progress","dontKnow":"I don't know","whyContext":"The grammar pattern fits the meaning and relationship expressed in this sentence.","translationUnavailable":"A translation is not available for this language.","notAnswered":"Not answered","translation":"Translation","whyTitle":"Why is this answer correct?","yourAnswer":"Your answer","restartWarningTitle":"Before restarting","restartWarningHeading":"Your current progress will be deleted.","restartWarningText":"If you restart without saving, these answers will be lost and this session will not have a results summary.","restartSave":"Save and restart","restartDiscard":"Restart without saving","restartCancel":"Cancel","fiftyUsed":"50/50 uses","unanswered":"Unanswered","notCounted":"Not counted as incorrect","returnQuiz":"Return to quiz"});Object.assign(UI.be,{"pageTitle":"N631 · Падрыхтоўка да выніковага экзамену · Граматыка N2","brandTitle":"Падрыхтоўка да выніковага экзамену","brandSubtitle":"Клас N631 · 9 снежня 2026 года","home":"Галоўная","homeEyebrow":"9 снежня 2026 · Выніковы экзамен","homeTitleA":"Зрабі японскую мову","homeTitleB":"сваёй сілай.","homeLede":"Вучыся, практыкуйся і паступова рухайся наперад.","metaGrammar":"Паўтарэнне граматыкі","metaLanguages":"11 моў тлумачэнняў","metaHistory":"Гісторыя навучання","stepOne":"КРОК 1","languageHeading":"Выберы мову тлумачэнняў","languagePrompt":"Пытанні і варыянты адказаў застаюцца на японскай мове.","languageLabel":"Мова тлумачэнняў","prepareHome":"Далей: выбраць прадмет","savedHeading":"Захаваныя навучальныя сесіі","savedIntro":"Гісторыя навучання, захаваная ў гэтым браўзеры.","footerCourse":"N631 · Падрыхтоўка да выніковага экзамену","creatorCredit":"Стварыў Кента","homePandaCaption":"Давай вучыцца разам!","subjectStep":"КРОК 2","subjectHeading":"Выберы прадмет","subjectIntro":"Выберы прадмет для паўтарэння.","subjectGrammar":"Граматыка","subjectDescription":"Shin Kanzen Master · Раздзелы 1–8","chapterLabel":"Раздзел","grammarItems":"граматычных тэм","questionCount":"Пытанне","questionOf":"з","reminder":"Нагадванне","jumpLabel":"Перайсці да пытання","jump":"Перайсці","saveProgress":"Захаваць прагрэс","dontKnow":"Не ведаю","whyContext":"Гэтая граматычная форма адпавядае сэнсу і сувязі, выражаным у сказе.","translationUnavailable":"Пераклад на гэтую мову пакуль недаступны.","notAnswered":"Без адказу","translation":"Пераклад","whyTitle":"Чаму гэты адказ правільны?","yourAnswer":"Твой адказ","restartWarningTitle":"Перад паўторным пачаткам","restartWarningHeading":"Бягучы прагрэс будзе выдалены.","restartWarningText":"Калі пачаць нанова без захавання, гэтыя адказы будуць страчаны, а вынікі гэтай сесіі не будуць захаваны.","restartSave":"Захаваць і пачаць нанова","restartDiscard":"Пачаць нанова без захавання","restartCancel":"Скасаваць","fiftyUsed":"Выкарыстанні 50/50","unanswered":"Без адказу","notCounted":"Не лічацца памылкамі","returnQuiz":"Вярнуцца да тэста"});
const LANGUAGE_NAMES_NATIVE={"vi":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文（台灣）","ko":"한국어","es":"Español","it":"Italiano","ne":"नेपाली","my":"မြန်မာ","fr":"Français","en":"English","be":"Беларуская"};

Object.entries({"始業":["start of classes or work","пачатак заняткаў або працы"],"負担":["burden; responsibility","цяжар; абавязак"],"商店街":["shopping street","гандлёвая вуліца"],"衰退":["decline; downturn","заняпад; спад"],"責任者":["person in charge","адказная асоба"],"応募条件":["application requirements","умовы падачы заяўкі"],"経験の有無":["whether someone has experience","наяўнасць або адсутнасць досведу"],"専門知識":["specialist knowledge","спецыяльныя веды"],"実務経験":["practical work experience","практычны досвед працы"],"消費電力":["power consumption","спажыванне электраэнергіі"],"条例":["ordinance; local regulation","пастанова; мясцовы нарматыўны акт"],"交渉":["negotiation","перамовы"],"主張":["claim; assertion","сцвярджэнне; пазіцыя"],"審査":["screening; examination","праверка; экспертыза"],"合意":["agreement; consensus","згода; кансэнсус"],"民話":["folk tale","народная казка"],"流暢":["fluent; fluency","свабодны; беглы"],"管理体制":["management system","сістэма кіравання"]}).forEach(([word,meanings])=>{if(PANDA_VOCAB[word]){PANDA_VOCAB[word].meaning.en=meanings[0];PANDA_VOCAB[word].meaning.be=meanings[1];}});
PANDA_EXTRA.en=["Take your time to think.","Which expression connects these two ideas?","The context often points to the answer.","Notice what changes in the sentence.","This pattern has a specific nuance.","Let's compare the choices one by one."];
PANDA_EXTRA.be=["Не спяшайся, падумай спакойна.","Які выраз звязвае гэтыя дзве думкі?","Кантэкст часта падказвае адказ.","Звярні ўвагу на тое, што змяняецца ў сказе.","Гэтая форма мае пэўнае адценне значэння.","Давай параўнаем варыянты адзін за адным."];
Object.assign(UI.en,RESULT_UI.en);Object.assign(UI.be,RESULT_UI.be);

// Complete the interface dictionaries for every selectable language.
const UI_PATCHES = {"vi":{"pageTitle":"Ôn tập thi cuối kỳ N631 · Ngữ pháp N2","brandTitle":"Ôn tập thi cuối kỳ","brandSubtitle":"Lớp N631 · ngày 9 tháng 12 năm 2026","homeEyebrow":"Ngày 9 tháng 12 năm 2026 · Thi cuối kỳ","homeTitleA":"Biến tiếng Nhật","homeTitleB":"thành thế mạnh của bạn.","homeLede":"Học, luyện tập và tiến bộ từng bước.","metaGrammar":"Ôn tập ngữ pháp","metaLanguages":"Giải thích bằng 11 ngôn ngữ","metaHistory":"Lịch sử học tập","stepOne":"BƯỚC 1","languageHeading":"Chọn ngôn ngữ giải thích","languagePrompt":"Câu hỏi và các lựa chọn vẫn bằng tiếng Nhật.","languageLabel":"Ngôn ngữ giải thích","prepareHome":"Tiếp theo: chọn môn học","savedHeading":"Các buổi học đã lưu","savedIntro":"Lịch sử học tập được lưu trong trình duyệt này.","footerCourse":"N631 · Ôn tập thi cuối kỳ","creatorCredit":"Được tạo bởi Kenta","homePandaCaption":"Cùng ôn tập nhé!","subjectStep":"BƯỚC 2","subjectHeading":"Chọn môn học","subjectIntro":"Chọn môn bạn muốn ôn tập.","subjectGrammar":"Ngữ pháp N2","subjectName":"Ngữ pháp N2","subjectDescription":"Shin Kanzen Master · Bài 1–8","chapterLabel":"Bài {n}","grammarItems":"{n} điểm ngữ pháp","questionCount":"Câu","questionOf":"trên","reminder":"Ghi nhớ","jumpLabel":"Đến câu hỏi","jump":"Đến","viewScore":"Xem kết quả","saveProgress":"Lưu tiến độ","dontKnow":"Tôi không biết","pausedEyebrow":"ĐÃ LƯU TIẾN ĐỘ","progressReviewEyebrow":"KẾT QUẢ TẠM THỜI","progressReviewTitle":"Tổng kết tạm thời","scoreHeadline":"Tổng kết buổi học","scoreSubline":"Kết quả chi tiết theo từng bài.","answerUnavailable":"Không có thông tin","chooseContinuation":"Chọn phần tiếp theo của câu","chooseGrammar":"Chọn đáp án đúng","wrongAnswer":"Câu trả lời của bạn","notAnswered":"Chưa trả lời","translation":"Bản dịch","translationUnavailable":"Chưa có bản dịch cho ngôn ngữ này.","whyTitle":"Tại sao đáp án này đúng?","whyContext":"Mẫu ngữ pháp này phù hợp với ý nghĩa và mối quan hệ được thể hiện trong câu.","yourAnswer":"Câu trả lời của bạn","restartWarningTitle":"Trước khi làm lại","restartWarningHeading":"Tiến độ hiện tại sẽ bị xóa.","restartWarningText":"Nếu bạn làm lại mà không lưu, các câu trả lời này sẽ bị mất và bạn sẽ không có kết quả cho phiên này.","restartSave":"Lưu và làm lại","restartDiscard":"Làm lại mà không lưu","restartCancel":"Hủy","fiftyUsed":"Số lần dùng 50/50","unanswered":"Chưa trả lời","notCounted":"Không tính là câu sai","returnQuiz":"Quay lại bài kiểm tra","reviewTitle":"Ôn tập ngữ pháp · Bài 1–8","reviewIntro":"Ôn lại các mẫu ngữ pháp và cách sử dụng trong cả tám bài trước khi bắt đầu.","referenceNote":"Các mẫu ngữ pháp xuất hiện trong câu hỏi và lựa chọn."},"zh-CN":{"pageTitle":"N631期末考试复习 · N2语法","brandTitle":"期末考试复习","brandSubtitle":"N631班 · 2026年12月9日","homeEyebrow":"2026年12月9日 · 期末考试","homeTitleA":"把日语变成","homeTitleB":"自己的实力。","homeLede":"学习、练习，一步一步进步。","metaGrammar":"语法复习","metaLanguages":"11种语言讲解","metaHistory":"学习记录","stepOne":"步骤 1","languageHeading":"请选择讲解语言","languagePrompt":"题目和选项均使用日语。","languageLabel":"讲解语言","prepareHome":"下一步：选择科目","savedHeading":"已保存的学习记录","savedIntro":"保存在此浏览器中的学习记录。","footerCourse":"N631 · 期末考试复习","creatorCredit":"制作：Kenta","homePandaCaption":"一起复习吧！","subjectStep":"步骤 2","subjectHeading":"请选择科目","subjectIntro":"选择要复习的科目。","subjectGrammar":"N2语法","subjectName":"N2语法","subjectDescription":"新完全マスター · 第1–8课","chapterLabel":"第{n}课","grammarItems":"{n}个语法项目","questionCount":"题目","questionOf":"/","reminder":"语法提示","jumpLabel":"跳转至题目","jump":"跳转","viewScore":"查看成绩","saveProgress":"保存进度","dontKnow":"不知道","pausedEyebrow":"进度已保存","progressReviewEyebrow":"阶段性结果","progressReviewTitle":"阶段总结","scoreHeadline":"本次学习总结","scoreSubline":"查看各章节的详细成绩。","answerUnavailable":"暂无信息","chooseContinuation":"选择正确的后续句子","chooseGrammar":"选择正确的语法形式","wrongAnswer":"你的答案","notAnswered":"未作答","translation":"翻译","translationUnavailable":"暂未提供此语言的翻译。","whyTitle":"为什么这个答案正确？","whyContext":"该语法形式符合句子所表达的意思及关系。","yourAnswer":"你的答案","restartWarningTitle":"重新开始之前","restartWarningHeading":"当前进度将被删除。","restartWarningText":"如果不保存就重新开始，这些答案将会丢失，也不会保留本次学习的成绩总结。","restartSave":"保存并重新开始","restartDiscard":"不保存，直接重新开始","restartCancel":"取消","fiftyUsed":"50/50使用次数","unanswered":"未作答","notCounted":"不计为答错","returnQuiz":"返回测验","reviewTitle":"语法复习 · 第1–8课","reviewIntro":"开始测验前，请先复习全部八课的语法形式和用法。","referenceNote":"题目和选项中出现的语法形式。"},"zh-TW":{"pageTitle":"N631期末考試複習 · N2文法","brandTitle":"期末考試複習","brandSubtitle":"N631班 · 2026年12月9日","homeEyebrow":"2026年12月9日 · 期末考試","homeTitleA":"把日文變成","homeTitleB":"自己的實力。","homeLede":"學習、練習，一步一步進步。","metaGrammar":"文法複習","metaLanguages":"11種語言解說","metaHistory":"學習紀錄","stepOne":"步驟 1","languageHeading":"請選擇解說語言","languagePrompt":"題目和選項皆使用日文。","languageLabel":"解說語言","prepareHome":"下一步：選擇科目","savedHeading":"已儲存的學習紀錄","savedIntro":"儲存在此瀏覽器中的學習紀錄。","footerCourse":"N631 · 期末考試複習","creatorCredit":"製作：Kenta","homePandaCaption":"一起複習吧！","subjectStep":"步驟 2","subjectHeading":"請選擇科目","subjectIntro":"選擇想要複習的科目。","subjectGrammar":"N2文法","subjectName":"N2文法","subjectDescription":"新完全マスター · 第1–8課","chapterLabel":"第{n}課","grammarItems":"{n}個文法項目","questionCount":"題目","questionOf":"/","reminder":"文法提示","jumpLabel":"跳至題目","jump":"前往","viewScore":"查看成績","saveProgress":"儲存進度","dontKnow":"不知道","pausedEyebrow":"進度已儲存","progressReviewEyebrow":"階段性結果","progressReviewTitle":"階段總結","scoreHeadline":"本次學習總結","scoreSubline":"查看各課的詳細成績。","answerUnavailable":"暫無資料","chooseContinuation":"選擇正確的後續句子","chooseGrammar":"選擇正確的文法形式","wrongAnswer":"你的答案","notAnswered":"未作答","translation":"翻譯","translationUnavailable":"目前沒有此語言的翻譯。","whyTitle":"為什麼這個答案正確？","whyContext":"此文法形式符合句子所表達的意思與關係。","yourAnswer":"你的答案","restartWarningTitle":"重新開始之前","restartWarningHeading":"目前的進度將會被刪除。","restartWarningText":"若未儲存就重新開始，這些答案將會遺失，也不會保留本次學習的結果。","restartSave":"儲存並重新開始","restartDiscard":"不儲存，直接重新開始","restartCancel":"取消","fiftyUsed":"50/50使用次數","unanswered":"未作答","notCounted":"不列為答錯","returnQuiz":"返回測驗","reviewTitle":"文法複習 · 第1–8課","reviewIntro":"開始測驗前，請先複習全部八課的文法形式與用法。","referenceNote":"題目和選項中出現的文法形式。"},"ko":{"pageTitle":"N631 기말시험 대비 · N2 문법","brandTitle":"기말시험 대비","brandSubtitle":"N631 반 · 2026년 12월 9일","homeEyebrow":"2026년 12월 9일 · 기말시험","homeTitleA":"일본어를","homeTitleB":"나만의 실력으로.","homeLede":"배우고 연습하며 한 걸음씩 나아가요.","metaGrammar":"문법 복습","metaLanguages":"11개 언어 해설","metaHistory":"학습 기록","stepOne":"1단계","languageHeading":"해설 언어를 선택하세요","languagePrompt":"문제와 선택지는 일본어로 표시됩니다.","languageLabel":"해설 언어","prepareHome":"다음: 과목 선택","savedHeading":"저장된 학습 기록","savedIntro":"이 브라우저에 저장된 학습 기록입니다.","footerCourse":"N631 · 기말시험 대비","creatorCredit":"제작: Kenta","homePandaCaption":"함께 복습해요!","subjectStep":"2단계","subjectHeading":"과목을 선택하세요","subjectIntro":"복습할 과목을 선택하세요.","subjectGrammar":"N2 문법","subjectName":"N2 문법","subjectDescription":"新完全マスター · 1~8과","chapterLabel":"제{n}과","grammarItems":"문법 항목 {n}개","questionCount":"문제","questionOf":"/","reminder":"문법 정리","jumpLabel":"문제 번호로 이동","jump":"이동","viewScore":"결과 보기","saveProgress":"진행 상황 저장","dontKnow":"모르겠어요","pausedEyebrow":"진행 상황 저장됨","progressReviewEyebrow":"중간 결과","progressReviewTitle":"중간 학습 결과","scoreHeadline":"학습 결과 요약","scoreSubline":"각 과의 자세한 결과를 확인하세요.","answerUnavailable":"정보 없음","chooseContinuation":"문장에 이어질 알맞은 표현을 고르세요","chooseGrammar":"알맞은 문법 표현을 고르세요","wrongAnswer":"내 답","notAnswered":"미응답","translation":"번역","translationUnavailable":"이 언어의 번역은 아직 제공되지 않습니다.","whyTitle":"이 답이 맞는 이유","whyContext":"이 문법 표현은 문장에 담긴 의미와 관계에 가장 잘 맞습니다.","yourAnswer":"내 답","restartWarningTitle":"다시 시작하기 전에","restartWarningHeading":"현재 진행 상황이 삭제됩니다.","restartWarningText":"저장하지 않고 다시 시작하면 지금까지의 답변이 사라지고 이 세션의 결과도 남지 않습니다.","restartSave":"저장하고 다시 시작","restartDiscard":"저장하지 않고 다시 시작","restartCancel":"취소","fiftyUsed":"50/50 사용 횟수","unanswered":"미응답","notCounted":"오답으로 계산되지 않음","returnQuiz":"퀴즈로 돌아가기","reviewTitle":"문법 복습 · 1~8과","reviewIntro":"퀴즈를 시작하기 전에 8개 과의 문법 형태와 사용법을 복습하세요.","referenceNote":"문제와 선택지에 등장하는 문법 표현."},"es":{"pageTitle":"Repaso del examen final N631 · Gramática N2","brandTitle":"Repaso del examen final","brandSubtitle":"Clase N631 · 9 de diciembre de 2026","homeEyebrow":"9 de diciembre de 2026 · Examen final","homeTitleA":"Convierte el japonés","homeTitleB":"en tu propia fortaleza.","homeLede":"Aprende, practica y avanza paso a paso.","metaGrammar":"Repaso de gramática","metaLanguages":"Explicaciones en 11 idiomas","metaHistory":"Historial de estudio","stepOne":"PASO 1","languageHeading":"Elige el idioma de las explicaciones","languagePrompt":"Las preguntas y las opciones siguen estando en japonés.","languageLabel":"Idioma de las explicaciones","prepareHome":"Siguiente: elegir una materia","savedHeading":"Sesiones de estudio guardadas","savedIntro":"Tu historial de aprendizaje guardado en este navegador.","footerCourse":"N631 · Repaso del examen final","creatorCredit":"Creado por Kenta","homePandaCaption":"¡Vamos a repasar juntos!","subjectStep":"PASO 2","subjectHeading":"Elige una materia","subjectIntro":"Selecciona la materia que quieres repasar.","subjectGrammar":"Gramática N2","subjectName":"Gramática N2","subjectDescription":"Shin Kanzen Master · capítulos 1–8","chapterLabel":"Capítulo {n}","grammarItems":"{n} puntos gramaticales","questionCount":"Pregunta","questionOf":"de","reminder":"Recordatorio","jumpLabel":"Ir a la pregunta","jump":"Ir","viewScore":"Ver resultados","saveProgress":"Guardar el progreso","dontKnow":"No lo sé","pausedEyebrow":"PROGRESO GUARDADO","progressReviewEyebrow":"RESULTADOS PROVISIONALES","progressReviewTitle":"Resumen provisional","scoreHeadline":"Resumen de la sesión","scoreSubline":"Consulta tus resultados detallados por capítulo.","answerUnavailable":"No disponible","chooseContinuation":"Elige la continuación correcta de la frase","chooseGrammar":"Elige la forma gramatical correcta","wrongAnswer":"Tu respuesta","notAnswered":"Sin responder","translation":"Traducción","translationUnavailable":"La traducción a este idioma no está disponible.","whyTitle":"¿Por qué es correcta esta respuesta?","whyContext":"Esta estructura gramatical encaja con el significado y la relación expresados en la frase.","yourAnswer":"Tu respuesta","restartWarningTitle":"Antes de volver a empezar","restartWarningHeading":"Se eliminará tu progreso actual.","restartWarningText":"Si vuelves a empezar sin guardar, perderás estas respuestas y no tendrás un resumen de esta sesión.","restartSave":"Guardar y volver a empezar","restartDiscard":"Volver a empezar sin guardar","restartCancel":"Cancelar","fiftyUsed":"Usos del 50/50","unanswered":"Sin responder","notCounted":"No cuentan como errores","returnQuiz":"Volver al cuestionario","reviewTitle":"Repaso de gramática · capítulos 1–8","reviewIntro":"Repasa las estructuras gramaticales y sus usos en los ocho capítulos antes de empezar.","referenceNote":"Estructuras gramaticales que aparecen en las preguntas y opciones."},"it":{"pageTitle":"Ripasso dell'esame finale N631 · Grammatica N2","brandTitle":"Ripasso dell'esame finale","brandSubtitle":"Classe N631 · 9 dicembre 2026","homeEyebrow":"9 dicembre 2026 · Esame finale","homeTitleA":"Trasforma il giapponese","homeTitleB":"in una tua capacità.","homeLede":"Studia, esercitati e migliora un passo alla volta.","metaGrammar":"Ripasso di grammatica","metaLanguages":"Spiegazioni in 11 lingue","metaHistory":"Cronologia dello studio","stepOne":"PASSO 1","languageHeading":"Scegli la lingua delle spiegazioni","languagePrompt":"Le domande e le opzioni restano in giapponese.","languageLabel":"Lingua delle spiegazioni","prepareHome":"Avanti: scegli una materia","savedHeading":"Sessioni di studio salvate","savedIntro":"La cronologia di apprendimento salvata in questo browser.","footerCourse":"N631 · Ripasso dell'esame finale","creatorCredit":"Creato da Kenta","homePandaCaption":"Ripassiamo insieme!","subjectStep":"PASSO 2","subjectHeading":"Scegli una materia","subjectIntro":"Seleziona la materia da ripassare.","subjectGrammar":"Grammatica N2","subjectName":"Grammatica N2","subjectDescription":"Shin Kanzen Master · capitoli 1–8","chapterLabel":"Capitolo {n}","grammarItems":"{n} punti grammaticali","questionCount":"Domanda","questionOf":"di","reminder":"Promemoria","jumpLabel":"Vai alla domanda","jump":"Vai","viewScore":"Vedi i risultati","saveProgress":"Salva i progressi","dontKnow":"Non lo so","pausedEyebrow":"PROGRESSI SALVATI","progressReviewEyebrow":"RISULTATI PARZIALI","progressReviewTitle":"Riepilogo provvisorio","scoreHeadline":"Riepilogo della sessione","scoreSubline":"Consulta i risultati dettagliati per ogni capitolo.","answerUnavailable":"Non disponibile","chooseContinuation":"Scegli la continuazione corretta della frase","chooseGrammar":"Scegli la forma grammaticale corretta","wrongAnswer":"La tua risposta","notAnswered":"Senza risposta","translation":"Traduzione","translationUnavailable":"La traduzione in questa lingua non è disponibile.","whyTitle":"Perché questa risposta è corretta?","whyContext":"Questa struttura grammaticale corrisponde al significato e alla relazione espressi nella frase.","yourAnswer":"La tua risposta","restartWarningTitle":"Prima di ricominciare","restartWarningHeading":"I progressi attuali verranno eliminati.","restartWarningText":"Se ricominci senza salvare, queste risposte andranno perse e non avrai un riepilogo di questa sessione.","restartSave":"Salva e ricomincia","restartDiscard":"Ricomincia senza salvare","restartCancel":"Annulla","fiftyUsed":"Utilizzi del 50/50","unanswered":"Senza risposta","notCounted":"Non vengono conteggiate come errori","returnQuiz":"Torna al quiz","reviewTitle":"Ripasso di grammatica · capitoli 1–8","reviewIntro":"Prima di iniziare, ripassa le strutture grammaticali e i loro usi in tutti e otto i capitoli.","referenceNote":"Strutture grammaticali presenti nelle domande e nelle opzioni."},"ne":{"pageTitle":"N631 अन्तिम परीक्षाको तयारी · N2 व्याकरण","brandTitle":"अन्तिम परीक्षाको तयारी","brandSubtitle":"N631 कक्षा · ९ डिसेम्बर २०२६","homeEyebrow":"९ डिसेम्बर २०२६ · अन्तिम परीक्षा","homeTitleA":"जापानी भाषालाई","homeTitleB":"आफ्नो सीप बनाऔँ।","homeLede":"सिक्नुहोस्, अभ्यास गर्नुहोस् र बिस्तारै अगाडि बढ्नुहोस्।","metaGrammar":"व्याकरणको पुनरावृत्ति","metaLanguages":"११ भाषामा व्याख्या","metaHistory":"अध्ययन इतिहास","stepOne":"चरण १","languageHeading":"व्याख्याको भाषा छान्नुहोस्","languagePrompt":"प्रश्न र उत्तरका विकल्प जापानी भाषामै रहनेछन्।","languageLabel":"व्याख्याको भाषा","prepareHome":"अर्को: विषय छान्नुहोस्","savedHeading":"सुरक्षित गरिएका अध्ययन सत्रहरू","savedIntro":"यस ब्राउजरमा सुरक्षित गरिएको तपाईंको अध्ययन इतिहास।","footerCourse":"N631 · अन्तिम परीक्षाको तयारी","creatorCredit":"Kenta द्वारा तयार","homePandaCaption":"सँगै अभ्यास गरौँ!","subjectStep":"चरण २","subjectHeading":"विषय छान्नुहोस्","subjectIntro":"पुनरावृत्ति गर्न चाहेको विषय छान्नुहोस्।","subjectGrammar":"N2 व्याकरण","subjectName":"N2 व्याकरण","subjectDescription":"Shin Kanzen Master · पाठ १–८","chapterLabel":"पाठ {n}","grammarItems":"{n} व्याकरण बुँदाहरू","questionCount":"प्रश्न","questionOf":"मध्ये","reminder":"स्मरण","jumpLabel":"प्रश्नमा जानुहोस्","jump":"जानुहोस्","viewScore":"नतिजा हेर्नुहोस्","saveProgress":"प्रगति सुरक्षित गर्नुहोस्","dontKnow":"मलाई थाहा छैन","pausedEyebrow":"प्रगति सुरक्षित गरियो","progressReviewEyebrow":"अन्तरिम नतिजा","progressReviewTitle":"अन्तरिम सारांश","scoreHeadline":"अध्ययन सत्रको सारांश","scoreSubline":"प्रत्येक पाठको विस्तृत नतिजा हेर्नुहोस्।","answerUnavailable":"उपलब्ध छैन","chooseContinuation":"वाक्यको सही निरन्तरता छान्नुहोस्","chooseGrammar":"सही व्याकरणिक रूप छान्नुहोस्","wrongAnswer":"तपाईंको उत्तर","notAnswered":"उत्तर नदिइएको","translation":"अनुवाद","translationUnavailable":"यो भाषामा अनुवाद उपलब्ध छैन।","whyTitle":"यो उत्तर किन सही छ?","whyContext":"यो व्याकरणिक संरचना वाक्यमा व्यक्त अर्थ र सम्बन्धसँग मेल खान्छ।","yourAnswer":"तपाईंको उत्तर","restartWarningTitle":"फेरि सुरु गर्नुअघि","restartWarningHeading":"तपाईंको हालको प्रगति मेटिनेछ।","restartWarningText":"सुरक्षित नगरी फेरि सुरु गर्नुभयो भने यी उत्तरहरू हराउनेछन् र यस सत्रको नतिजा पनि रहनेछैन।","restartSave":"सुरक्षित गरेर फेरि सुरु गर्नुहोस्","restartDiscard":"सुरक्षित नगरी फेरि सुरु गर्नुहोस्","restartCancel":"रद्द गर्नुहोस्","fiftyUsed":"50/50 प्रयोगको संख्या","unanswered":"उत्तर नदिइएका","notCounted":"गलत उत्तरका रूपमा गणना हुँदैन","returnQuiz":"प्रश्नोत्तरीमा फर्कनुहोस्","reviewTitle":"व्याकरणको पुनरावृत्ति · पाठ १–८","reviewIntro":"सुरु गर्नुअघि सबै आठ पाठका व्याकरणिक रूप र प्रयोग दोहोर्‍याउनुहोस्।","referenceNote":"प्रश्न र विकल्पमा देखिने व्याकरणिक संरचनाहरू।"},"my":{"pageTitle":"N631 နောက်ဆုံးစာမေးပွဲ ပြင်ဆင်မှု · N2 သဒ္ဒါ","brandTitle":"နောက်ဆုံးစာမေးပွဲ ပြင်ဆင်မှု","brandSubtitle":"N631 အတန်း · ၂၀၂၆ ဒီဇင်ဘာ ၉ ရက်","homeEyebrow":"၂၀၂၆ ဒီဇင်ဘာ ၉ ရက် · နောက်ဆုံးစာမေးပွဲ","homeTitleA":"ဂျပန်ဘာသာကို","homeTitleB":"ကိုယ့်ရဲ့ အရည်အချင်းဖြစ်အောင်။","homeLede":"လေ့လာပါ၊ လေ့ကျင့်ပါ၊ တစ်ဆင့်ချင်း တိုးတက်ပါ။","metaGrammar":"သဒ္ဒါ ပြန်လည်လေ့လာခြင်း","metaLanguages":"ဘာသာစကား ၁၁ မျိုးဖြင့် ရှင်းလင်းချက်","metaHistory":"လေ့လာမှုမှတ်တမ်း","stepOne":"အဆင့် ၁","languageHeading":"ရှင်းလင်းချက်ဘာသာစကားကို ရွေးပါ","languagePrompt":"မေးခွန်းများနှင့် အဖြေရွေးချယ်စရာများကို ဂျပန်ဘာသာဖြင့်သာ ပြသပါမည်။","languageLabel":"ရှင်းလင်းချက်ဘာသာစကား","prepareHome":"နောက်တစ်ဆင့် - ဘာသာရပ်ရွေးရန်","savedHeading":"သိမ်းထားသော လေ့လာမှုအစီအစဉ်များ","savedIntro":"ဤဘရောက်ဆာတွင် သိမ်းဆည်းထားသော သင်၏လေ့လာမှုမှတ်တမ်း။","footerCourse":"N631 · နောက်ဆုံးစာမေးပွဲ ပြင်ဆင်မှု","creatorCredit":"Kenta မှ ဖန်တီးသည်","homePandaCaption":"အတူတူ ပြန်လေ့လာကြရအောင်။","subjectStep":"အဆင့် ၂","subjectHeading":"ဘာသာရပ်ကို ရွေးပါ","subjectIntro":"ပြန်လည်လေ့လာလိုသော ဘာသာရပ်ကို ရွေးပါ။","subjectGrammar":"N2 သဒ္ဒါ","subjectName":"N2 သဒ္ဒါ","subjectDescription":"Shin Kanzen Master · အခန်း ၁–၈","chapterLabel":"အခန်း {n}","grammarItems":"သဒ္ဒါအချက် {n} ခု","questionCount":"မေးခွန်း","questionOf":"ခုအနက်","reminder":"သတိပြုရန်","jumpLabel":"မေးခွန်းသို့ သွားရန်","jump":"သွားရန်","viewScore":"ရလဒ်ကြည့်ရန်","saveProgress":"တိုးတက်မှုကို သိမ်းဆည်းရန်","dontKnow":"မသိပါ","pausedEyebrow":"တိုးတက်မှုကို သိမ်းဆည်းပြီးပါပြီ","progressReviewEyebrow":"ယာယီရလဒ်","progressReviewTitle":"ယာယီအနှစ်ချုပ်","scoreHeadline":"လေ့လာမှုအစီအစဉ် အနှစ်ချုပ်","scoreSubline":"အခန်းတစ်ခန်းချင်းစီ၏ အသေးစိတ်ရလဒ်ကို ကြည့်ပါ။","answerUnavailable":"မရရှိနိုင်ပါ","chooseContinuation":"ဝါကျ၏ မှန်ကန်သော နောက်ဆက်တွဲကို ရွေးပါ","chooseGrammar":"မှန်ကန်သော သဒ္ဒါပုံစံကို ရွေးပါ","wrongAnswer":"သင်၏အဖြေ","notAnswered":"မဖြေဆိုရသေးပါ","translation":"ဘာသာပြန်ချက်","translationUnavailable":"ဤဘာသာစကားအတွက် ဘာသာပြန်ချက် မရရှိသေးပါ။","whyTitle":"ဤအဖြေသည် ဘာကြောင့် မှန်ကန်သနည်း။","whyContext":"ဤသဒ္ဒါပုံစံသည် ဝါကျတွင် ဖော်ပြထားသော အဓိပ္ပာယ်နှင့် ဆက်စပ်မှုနှင့် ကိုက်ညီသည်။","yourAnswer":"သင်၏အဖြေ","restartWarningTitle":"ပြန်လည်မစတင်မီ","restartWarningHeading":"လက်ရှိတိုးတက်မှုကို ဖျက်ပစ်မည်။","restartWarningText":"မသိမ်းဆည်းဘဲ ပြန်လည်စတင်ပါက ယခုအဖြေများ ပျောက်ဆုံးသွားပြီး ဤအစီအစဉ်၏ ရလဒ်အနှစ်ချုပ်လည်း မရှိတော့ပါ။","restartSave":"သိမ်းဆည်းပြီး ပြန်စရန်","restartDiscard":"မသိမ်းဘဲ ပြန်စရန်","restartCancel":"မလုပ်တော့ပါ","fiftyUsed":"50/50 အသုံးပြုမှုအကြိမ်ရေ","unanswered":"မဖြေဆိုရသေးသောမေးခွန်းများ","notCounted":"အမှားအဖြစ် မတွက်ပါ","returnQuiz":"မေးခွန်းစာမေးပွဲသို့ ပြန်သွားရန်","reviewTitle":"သဒ္ဒါ ပြန်လည်လေ့လာခြင်း · အခန်း ၁–၈","reviewIntro":"မစတင်မီ အခန်းရှစ်ခန်းလုံးရှိ သဒ္ဒါပုံစံများနှင့် အသုံးပြုပုံများကို ပြန်လည်လေ့လာပါ။","referenceNote":"မေးခွန်းနှင့် ရွေးချယ်စရာများတွင် ပါဝင်သော သဒ္ဒါပုံစံများ။"},"fr":{"pageTitle":"Révisions de l’examen final N631 · Grammaire N2","brandTitle":"Révisions de l’examen final","brandSubtitle":"Classe N631 · 9 décembre 2026","homeEyebrow":"9 décembre 2026 · Examen final","homeTitleA":"Fais du japonais","homeTitleB":"ta propre force.","homeLede":"Apprends, entraîne-toi et progresse pas à pas.","metaGrammar":"Révision de grammaire","metaLanguages":"Explications en 11 langues","metaHistory":"Historique des révisions","stepOne":"ÉTAPE 1","languageHeading":"Choisis la langue des explications","languagePrompt":"Les questions et les choix de réponse restent en japonais.","languageLabel":"Langue des explications","prepareHome":"Suivant : choisir une matière","savedHeading":"Sessions de révision enregistrées","savedIntro":"Ton historique d’apprentissage est enregistré dans ce navigateur.","footerCourse":"N631 · Révisions de l’examen final","creatorCredit":"Créé par Kenta","homePandaCaption":"Révisons ensemble !","subjectStep":"ÉTAPE 2","subjectHeading":"Choisis une matière","subjectIntro":"Sélectionne la matière que tu souhaites réviser.","subjectGrammar":"Grammaire","subjectName":"Grammaire N2","subjectDescription":"Shin Kanzen Master · chapitres 1 à 8","chapterLabel":"Chapitre {n}","grammarItems":"{n} points de grammaire","questionCount":"Question","questionOf":"sur","reminder":"Rappel","jumpLabel":"Aller à la question","jump":"Aller","viewScore":"Voir le bilan","saveProgress":"Sauvegarder la progression","dontKnow":"Je ne sais pas","pausedEyebrow":"PROGRESSION SAUVEGARDÉE","progressReviewEyebrow":"BILAN INTERMÉDIAIRE","progressReviewTitle":"Bilan provisoire","scoreHeadline":"Bilan de la session","scoreSubline":"Tes résultats détaillés, chapitre par chapitre.","answerUnavailable":"Non disponible","chooseContinuation":"Choisis la suite de la phrase","chooseGrammar":"Choisis la bonne réponse","wrongAnswer":"Ta réponse","notAnswered":"Sans réponse","translation":"Traduction","translationUnavailable":"La traduction n’est pas disponible dans cette langue.","whyTitle":"Pourquoi cette réponse est-elle correcte ?","whyContext":"Cette structure grammaticale correspond au sens et à la relation exprimés dans cette phrase.","yourAnswer":"Ta réponse","restartWarningTitle":"Avant de recommencer","restartWarningHeading":"Ta progression actuelle va être supprimée.","restartWarningText":"Si tu recommences sans sauvegarder, ces réponses seront perdues et tu n’auras pas de bilan pour cette session.","restartSave":"Sauvegarder et recommencer","restartDiscard":"Recommencer sans sauvegarder","restartCancel":"Annuler","fiftyUsed":"Utilisations du 50/50","unanswered":"Non répondues","notCounted":"Ne comptent pas comme des erreurs","returnQuiz":"Retour au quiz","reviewTitle":"Révision grammaticale · chapitres 1 à 8","reviewIntro":"Révise les formes grammaticales et leurs usages dans les huit chapitres avant de commencer.","referenceNote":"Formes grammaticales présentes dans les questions et les propositions."},"en":{"answerUnavailable":"Not available","chooseContinuation":"Choose the correct continuation of the sentence","chooseGrammar":"Choose the correct grammatical form","pausedEyebrow":"PROGRESS SAVED","progressReviewEyebrow":"PROGRESS RESULTS","progressReviewTitle":"Progress summary","subjectName":"N2 Grammar","viewScore":"View results","wrongAnswer":"Your answer","reviewTitle":"Grammar review · Chapters 1–8","reviewIntro":"Review the grammar forms and their uses across all eight chapters before starting.","referenceNote":"Grammar patterns appearing in the questions and answer choices."},"be":{"answerUnavailable":"Недаступна","chooseContinuation":"Выберы правільнае працягванне сказа","chooseGrammar":"Выберы правільную граматычную форму","pausedEyebrow":"ПРАГРЭС ЗАХАВАНЫ","progressReviewEyebrow":"ПРАМЕЖКАВЫЯ ВЫНІКІ","progressReviewTitle":"Прамежкавы вынік","subjectName":"Граматыка N2","viewScore":"Паглядзець вынікі","wrongAnswer":"Твой адказ","reviewTitle":"Паўтарэнне граматыкі · Раздзелы 1–8","reviewIntro":"Перад пачаткам паўтары граматычныя формы і іх ужыванне ва ўсіх васьмі раздзелах.","referenceNote":"Граматычныя формы, якія сустракаюцца ў пытаннях і варыянтах адказаў."}};
Object.entries(UI_PATCHES).forEach(([lang,translations])=>Object.assign(UI[lang],translations));
const UI_ACCESSIBILITY_PATCHES = {"vi":{"jumpInvalid":"Vui lòng nhập số từ 1 đến 100.","questionBankError":"Không thể tải bộ câu hỏi. Vui lòng tải lại trang.","homePandaAlt":"Chú gấu trúc pixel chào đón người học.","pandaAlt":"Nhân vật gấu trúc pixel."},"zh-CN":{"jumpInvalid":"请输入1到100之间的数字。","questionBankError":"题库无法使用，请重新加载页面。","homePandaAlt":"欢迎学习者的像素风熊猫。","pandaAlt":"像素风熊猫角色。"},"zh-TW":{"jumpInvalid":"請輸入1到100之間的數字。","questionBankError":"題庫無法使用，請重新載入頁面。","homePandaAlt":"歡迎學習者的像素風熊貓。","pandaAlt":"像素風熊貓角色。"},"ko":{"jumpInvalid":"1부터 100 사이의 숫자를 입력하세요.","questionBankError":"문제 은행을 불러올 수 없습니다. 페이지를 새로고침하세요.","homePandaAlt":"학습자를 반기는 픽셀 아트 판다.","pandaAlt":"픽셀 아트 판다 캐릭터."},"es":{"jumpInvalid":"Introduce un número del 1 al 100.","questionBankError":"No se puede cargar el banco de preguntas. Recarga la página.","homePandaAlt":"Panda pixelado que da la bienvenida a los estudiantes.","pandaAlt":"Personaje de panda en pixel art."},"it":{"jumpInvalid":"Inserisci un numero da 1 a 100.","questionBankError":"La banca dati delle domande non è disponibile. Ricarica la pagina.","homePandaAlt":"Panda in pixel art che dà il benvenuto agli studenti.","pandaAlt":"Mascotte panda in pixel art."},"ne":{"jumpInvalid":"कृपया १ देखि १०० सम्मको सङ्ख्या लेख्नुहोस्।","questionBankError":"प्रश्नहरूको सूची उपलब्ध छैन। कृपया पृष्ठ फेरि लोड गर्नुहोस्।","homePandaAlt":"विद्यार्थीहरूलाई स्वागत गर्ने पिक्सेल कला पाण्डा।","pandaAlt":"पिक्सेल कला पाण्डा पात्र।"},"my":{"jumpInvalid":"၁ မှ ၁၀၀ အတွင်း နံပါတ်တစ်ခု ထည့်ပါ။","questionBankError":"မေးခွန်းစာရင်းကို ဖွင့်မရပါ။ စာမျက်နှာကို ပြန်ဖွင့်ပါ။","homePandaAlt":"သင်ယူသူများကို ကြိုဆိုနေသော pixel art ပန်ဒါ။","pandaAlt":"Pixel art ပန်ဒါဇာတ်ကောင်။"},"fr":{"jumpInvalid":"Entre un numéro entre 1 et 100.","questionBankError":"La banque de questions est indisponible. Recharge la page.","homePandaAlt":"Petit panda en pixel art qui accueille les élèves.","pandaAlt":"Mascotte panda en pixel art."},"en":{"jumpInvalid":"Enter a number from 1 to 100.","questionBankError":"The question bank is unavailable. Please reload the page.","homePandaAlt":"Pixel-art panda welcoming learners.","pandaAlt":"Pixel-art panda mascot."},"be":{"jumpInvalid":"Увядзі лік ад 1 да 100.","questionBankError":"Банк пытанняў недаступны. Калі ласка, перазагрузі старонку.","homePandaAlt":"Панда ў піксельным стылі, якая вітае вучняў.","pandaAlt":"Панда-маскот у піксельным стылі."}};
Object.entries(UI_ACCESSIBILITY_PATCHES).forEach(([lang,translations])=>Object.assign(UI[lang],translations));

translateUi();
migrateLegacySave();

renderReview();
renderSaves();
updateHomePandaLine();
console.info("N631 N2 grammar practice ready",DATA.questions.length,"questions");


// The quiz panda makes one brief movement every 15 seconds, not continuously.
(function(){
  const stage=$("mascot-stage");
  if(!stage)return;
  const reduced=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduced)return;
  stage.addEventListener("animationend",event=>{
    if(event.target===stage)stage.classList.remove("panda-tick");
  });
  window.setInterval(()=>{
    if(!$("screen-quiz").classList.contains("active"))return;
    stage.classList.remove("panda-tick");
    void stage.offsetWidth;
    stage.classList.add("panda-tick");
  },15000);
})();

// Tap the small corner panda for a random, playful reaction.
(function(){
  const button=$("mascot-prank-button");
  if(!button)return;
  const moves=["hop","spin","dance","wiggle","flop"];
  let previous="";
  button.addEventListener("click",()=>{
    const choices=moves.filter(move=>move!==previous);
    const move=choices[Math.floor(Math.random()*choices.length)];
    previous=move;
    button.classList.remove(...moves.map(name=>"mascot-prank-"+name));
    void button.offsetWidth;
    button.classList.add("mascot-prank-"+move);
  });
  button.addEventListener("animationend",event=>{
    if(event.target===button.querySelector("img"))button.classList.remove(...moves.map(name=>"mascot-prank-"+name));
  });
})();
