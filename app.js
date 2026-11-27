"use strict";
const DATA=window.GRAMMAR_QUIZ_DATA, STORE_KEY="shinkanzen-n2-quiz-v1";
const LANGS=["vi","zh-CN","zh-TW","ko","es","it","ne","my","fr"];
const UI={
vi:{eyebrow:"Biến ngữ pháp thành kỹ năng.",subtitle:"新完全マスター文法 · Bài 1–8",step1:"BƯỚC 01",chooseLanguage:"Chọn ngôn ngữ giải thích",languageNote:"Câu hỏi và lựa chọn luôn bằng tiếng Nhật.",language:"Ngôn ngữ",prepare:"Xem bảng ôn tập",savedProgress:"Tìm thấy phiên học đã lưu.",resume:"Tiếp tục",step2:"BƯỚC 02",reviewTitle:"Ôn tập ngữ pháp · Bài 6–8",reviewIntro:"Xem lại cấu trúc, cách dùng và sắc thái trước khi bắt đầu.",back:"Quay lại",startQuiz:"Bắt đầu bài kiểm tra",practice:"LUYỆN TẬP",pause:"Tạm dừng",restart:"Làm lại",hint:"Gợi ý",fifty:"50/50",next:"Câu tiếp theo",quickReference:"TRA CỨU NHANH",referenceNote:"Bài 6–8 · cấu trúc trong các lựa chọn",paused:"Đã tạm dừng",pauseText:"Tiến độ đã được lưu trên thiết bị này.",continueQuiz:"Tiếp tục",home:"Trang chủ",finished:"HOÀN THÀNH",resultTitle:"Tổng kết buổi học",score:"Điểm",hintsUsed:"Số gợi ý đã dùng",noPenalty:"Không trừ điểm",completed:"Câu đã làm",outOf:"trên 100",chapterResults:"Kết quả theo bài",reviewMistakes:"Nội dung cần ôn lại",missedQuestions:"Câu trả lời sai",retry:"Làm lại 100 câu",correct:"Chính xác!",incorrect:"Chưa chính xác",correctAnswer:"Đáp án đúng",hintText:"Hãy chú ý mối quan hệ thời gian, nguyên nhân hoặc phạm vi trong câu.",fiftyDone:"Đã loại hai phương án sai.",allCorrect:"Tuyệt vời! Không có câu sai.",noMistakes:"Không có lỗi lặp lại đáng chú ý.",noMisses:"Không có câu sai.",reason:"Đây là cấu trúc phù hợp nhất với ngữ cảnh.",restartConfirm:"Xóa tiến độ hiện tại và bắt đầu lại?" },
"zh-CN":{eyebrow:"把语法变成真正的能力。",subtitle:"新完全マスター文法 · 第1–8课",step1:"步骤 01",chooseLanguage:"选择讲解语言",languageNote:"题目和选项均为日语。",language:"语言",prepare:"查看复习资料",savedProgress:"发现已保存的答题进度。",resume:"继续",step2:"步骤 02",reviewTitle:"语法复习 · 第6–8课",reviewIntro:"开始答题前，先复习语法形式、用法和语感。",back:"返回",startQuiz:"开始测验",practice:"练习模式",pause:"暂停",restart:"重新开始",hint:"提示",fifty:"二选一",next:"下一题",quickReference:"快速查阅",referenceNote:"第6–8课 · 选项中的语法",paused:"已暂停",pauseText:"进度已保存在这台设备上。",continueQuiz:"继续测验",home:"首页",finished:"已完成",resultTitle:"本次学习总结",score:"得分",hintsUsed:"使用提示次数",noPenalty:"不扣分",completed:"已完成题目",outOf:"共100题",chapterResults:"各课成绩",reviewMistakes:"需要复习的内容",missedQuestions:"答错的题目",retry:"重新做100题",correct:"回答正确！",incorrect:"回答错误",correctAnswer:"正确答案",hintText:"注意句子中时间、原因或范围之间的关系。",fiftyDone:"已排除两个错误选项。",noMistakes:"没有明显重复出现的错误。",noMisses:"没有答错的题目。",reason:"该语法形式最符合句子的语境。",restartConfirm:"要删除当前进度并重新开始吗？"},
"zh-TW":{eyebrow:"把文法轉化為真正的能力。",subtitle:"新完全マスター文法 · 第1–8課",step1:"步驟 01",chooseLanguage:"選擇解說語言",languageNote:"題目和選項皆為日文。",language:"語言",prepare:"查看複習資料",savedProgress:"找到已儲存的作答進度。",resume:"繼續",step2:"步驟 02",reviewTitle:"文法複習 · 第6–8課",reviewIntro:"開始作答前，先複習文法形式、用法與語感。",back:"返回",startQuiz:"開始測驗",practice:"練習模式",pause:"暫停",restart:"重新開始",hint:"提示",fifty:"二選一",next:"下一題",quickReference:"快速查閱",referenceNote:"第6–8課 · 選項中的文法",paused:"已暫停",pauseText:"進度已儲存在這台裝置上。",continueQuiz:"繼續測驗",home:"首頁",finished:"已完成",resultTitle:"本次學習總結",score:"得分",hintsUsed:"使用提示次數",noPenalty:"不扣分",completed:"已完成題目",outOf:"共100題",chapterResults:"各課成績",reviewMistakes:"需要複習的內容",missedQuestions:"答錯的題目",retry:"重新作答100題",correct:"回答正確！",incorrect:"回答錯誤",correctAnswer:"正確答案",hintText:"注意句子中時間、原因或範圍之間的關係。",fiftyDone:"已排除兩個錯誤選項。",noMistakes:"沒有明顯重複出現的錯誤。",noMisses:"沒有答錯的題目。",reason:"此文法形式最符合句子的語境。",restartConfirm:"要刪除目前進度並重新開始嗎？"},
ko:{eyebrow:"문법을 실력으로.",subtitle:"新完全マスター文法 · 1~8과",step1:"단계 01",chooseLanguage:"해설 언어 선택",languageNote:"문제와 선택지는 일본어로 제공됩니다.",language:"언어",prepare:"복습 자료 보기",savedProgress:"저장된 학습 기록을 찾았습니다.",resume:"이어하기",step2:"단계 02",reviewTitle:"문법 복습 · 6~8과",reviewIntro:"퀴즈를 시작하기 전에 문형, 용법, 뉘앙스를 복습하세요.",back:"뒤로",startQuiz:"퀴즈 시작",practice:"연습 모드",pause:"일시 정지",restart:"다시 시작",hint:"힌트",fifty:"50:50",next:"다음 문제",quickReference:"빠른 문법 참조",referenceNote:"6~8과 · 선택지에 등장하는 문형",paused:"일시 정지됨",pauseText:"진행 상황이 이 기기에 저장되었습니다.",continueQuiz:"퀴즈 계속하기",home:"홈",finished:"완료",resultTitle:"학습 결과",score:"점수",hintsUsed:"힌트 사용 횟수",noPenalty:"감점 없음",completed:"완료한 문제",outOf:"총 100문제",chapterResults:"과별 결과",reviewMistakes:"복습할 내용",missedQuestions:"틀린 문제",retry:"100문제 다시 풀기",correct:"정답입니다!",incorrect:"오답입니다",correctAnswer:"정답",hintText:"문장 속 시간, 원인 또는 범위의 관계에 주목하세요.",fiftyDone:"오답 두 개를 제외했습니다.",noMistakes:"반복적으로 틀린 문형이 없습니다.",noMisses:"틀린 문제가 없습니다.",reason:"이 문법 형식이 문맥에 가장 잘 맞습니다.",restartConfirm:"현재 진행 상황을 지우고 다시 시작할까요?"},
es:{eyebrow:"Convierte la gramática en habilidad.",subtitle:"新完全マスター文法 · Capítulos 1–8",step1:"PASO 01",chooseLanguage:"Elige el idioma de las explicaciones",languageNote:"Las preguntas y opciones están en japonés.",language:"Idioma",prepare:"Ver la ficha de repaso",savedProgress:"Se ha encontrado una sesión guardada.",resume:"Continuar",step2:"PASO 02",reviewTitle:"Repaso de gramática · capítulos 6–8",reviewIntro:"Repasa las formas, sus usos y matices antes de empezar.",back:"Volver",startQuiz:"Empezar el cuestionario",practice:"MODO DE PRÁCTICA",pause:"Pausa",restart:"Reiniciar",hint:"Pista",fifty:"50/50",next:"Siguiente pregunta",quickReference:"CONSULTA RÁPIDA",referenceNote:"Capítulos 6–8 · formas en las opciones",paused:"Sesión en pausa",pauseText:"Tu progreso se ha guardado en este dispositivo.",continueQuiz:"Continuar el cuestionario",home:"Inicio",finished:"SESIÓN COMPLETADA",resultTitle:"Balance de la sesión",score:"Puntuación",hintsUsed:"Pistas utilizadas",noPenalty:"Sin penalización",completed:"Preguntas completadas",outOf:"de 100",chapterResults:"Resultados por capítulo",reviewMistakes:"Temas que conviene repasar",missedQuestions:"Preguntas falladas",retry:"Repetir las 100 preguntas",correct:"¡Correcto!",incorrect:"No es correcto",correctAnswer:"Respuesta correcta",hintText:"Fíjate en la relación de tiempo, causa o alcance entre las partes de la frase.",fiftyDone:"Se han eliminado dos opciones incorrectas.",noMistakes:"No se observan errores repetidos.",noMisses:"No hay preguntas incorrectas.",reason:"Esta forma gramatical es la que mejor encaja en el contexto.",restartConfirm:"¿Borrar el progreso actual y empezar de nuevo?"},
it:{eyebrow:"Trasforma la grammatica in abilità.",subtitle:"新完全マスター文法 · Capitoli 1–8",step1:"PASSO 01",chooseLanguage:"Scegli la lingua delle spiegazioni",languageNote:"Domande e risposte sono in giapponese.",language:"Lingua",prepare:"Apri la scheda di ripasso",savedProgress:"È stata trovata una sessione salvata.",resume:"Riprendi",step2:"PASSO 02",reviewTitle:"Ripasso grammaticale · capitoli 6–8",reviewIntro:"Ripassa forme, usi e sfumature prima di iniziare il quiz.",back:"Indietro",startQuiz:"Inizia il quiz",practice:"MODALITÀ ESERCIZIO",pause:"Pausa",restart:"Ricomincia",hint:"Suggerimento",fifty:"50/50",next:"Domanda successiva",quickReference:"CONSULTAZIONE RAPIDA",referenceNote:"Capitoli 6–8 · forme nelle opzioni",paused:"Sessione in pausa",pauseText:"I tuoi progressi sono salvati su questo dispositivo.",continueQuiz:"Continua il quiz",home:"Home",finished:"SESSIONE COMPLETATA",resultTitle:"Riepilogo della sessione",score:"Punteggio",hintsUsed:"Suggerimenti usati",noPenalty:"Nessuna penalità",completed:"Domande completate",outOf:"su 100",chapterResults:"Risultati per capitolo",reviewMistakes:"Argomenti da ripassare",missedQuestions:"Domande sbagliate",retry:"Rifai le 100 domande",correct:"Corretto!",incorrect:"Non corretto",correctAnswer:"Risposta corretta",hintText:"Osserva il rapporto di tempo, causa o ambito tra le parti della frase.",fiftyDone:"Sono state eliminate due opzioni errate.",noMistakes:"Non emergono errori ricorrenti.",noMisses:"Nessuna risposta errata.",reason:"Questa forma grammaticale è la più adatta al contesto.",restartConfirm:"Cancellare i progressi attuali e ricominciare?"},
ne:{eyebrow:"व्याकरणलाई सीपमा बदल्नुहोस्।",subtitle:"新完全マスター文法 · पाठ १–८",step1:"चरण ०१",chooseLanguage:"व्याख्याको भाषा छान्नुहोस्",languageNote:"प्रश्न र विकल्प जापानी भाषामा छन्।",language:"भाषा",prepare:"पुनरावृत्ति सामग्री हेर्नुहोस्",savedProgress:"सुरक्षित गरिएको अभ्यास भेटियो।",resume:"जारी राख्नुहोस्",step2:"चरण ०२",reviewTitle:"व्याकरण पुनरावृत्ति · पाठ ६–८",reviewIntro:"क्विज सुरु गर्नुअघि रूप, प्रयोग र सूक्ष्म अर्थ पुनरावलोकन गर्नुहोस्।",back:"पछाडि",startQuiz:"क्विज सुरु गर्नुहोस्",practice:"अभ्यास मोड",pause:"रोक्नुहोस्",restart:"फेरि सुरु गर्नुहोस्",hint:"संकेत",fifty:"५०/५०",next:"अर्को प्रश्न",quickReference:"छिटो सन्दर्भ",referenceNote:"पाठ ६–८ · विकल्पमा आएका व्याकरण रूप",paused:"अभ्यास रोकिएको छ",pauseText:"तपाईंको प्रगति यही उपकरणमा सुरक्षित छ।",continueQuiz:"क्विज जारी राख्नुहोस्",home:"मुखपृष्ठ",finished:"सत्र पूरा भयो",resultTitle:"सत्रको नतिजा",score:"अङ्क",hintsUsed:"प्रयोग गरिएका संकेत",noPenalty:"अङ्क कटौती हुँदैन",completed:"पूरा गरिएका प्रश्न",outOf:"१०० मध्ये",chapterResults:"पाठअनुसार नतिजा",reviewMistakes:"पुनरावृत्ति गर्नुपर्ने विषय",missedQuestions:"गलत उत्तर भएका प्रश्न",retry:"१०० प्रश्न फेरि गर्नुहोस्",correct:"सही!",incorrect:"गलत उत्तर",correctAnswer:"सही उत्तर",hintText:"वाक्यका भागहरूबीचको समय, कारण वा दायराको सम्बन्धमा ध्यान दिनुहोस्।",fiftyDone:"दुईवटा गलत विकल्प हटाइयो।",noMistakes:"बारम्बार दोहोरिएका गल्ती भेटिएनन्।",noMisses:"गलत उत्तर छैन।",reason:"यो व्याकरण रूप वाक्यको सन्दर्भसँग सबैभन्दा उपयुक्त छ।",restartConfirm:"हालको प्रगति मेटाएर फेरि सुरु गर्ने?"},
my:{eyebrow:"သဒ္ဒါကို ကျွမ်းကျင်မှုအဖြစ် ပြောင်းလဲပါ။",subtitle:"新完全マスター文法 · အခန်း ၁–၈",step1:"အဆင့် ၀၁",chooseLanguage:"ရှင်းလင်းချက်ဘာသာစကား ရွေးပါ",languageNote:"မေးခွန်းနှင့် ရွေးချယ်စရာများသည် ဂျပန်ဘာသာဖြစ်သည်။",language:"ဘာသာစကား",prepare:"ပြန်လည်လေ့လာရန် ဖွင့်ပါ",savedProgress:"သိမ်းထားသော လေ့ကျင့်မှုကို တွေ့ရှိသည်။",resume:"ဆက်လုပ်ရန်",step2:"အဆင့် ၀၂",reviewTitle:"သဒ္ဒါ ပြန်လည်လေ့လာခြင်း · အခန်း ၆–၈",reviewIntro:"စတင်မဖြေဆိုမီ ပုံစံနှင့် အသုံးပြုပုံကို ပြန်ဖတ်ပါ။",back:"နောက်သို့",startQuiz:"မေးခွန်းစတင်ရန်",practice:"လေ့ကျင့်မှု",pause:"ခဏရပ်ရန်",restart:"ပြန်စရန်",hint:"အရိပ်အမြွက်",fifty:"၅၀/၅၀",next:"နောက်မေးခွန်း",quickReference:"အမြန်ကိုးကားရန်",referenceNote:"အခန်း ၆–၈ · ရွေးချယ်စရာများရှိ သဒ္ဒါပုံစံများ",paused:"ခဏရပ်ထားသည်",pauseText:"သင်၏တိုးတက်မှုကို ဤစက်တွင် သိမ်းထားသည်။",continueQuiz:"ဆက်လက်ဖြေဆိုရန်",home:"ပင်မစာမျက်နှာ",finished:"ပြီးဆုံးပါပြီ",resultTitle:"လေ့လာမှုရလဒ်",score:"ရမှတ်",hintsUsed:"အသုံးပြုသော အရိပ်အမြွက်",noPenalty:"အမှတ်မလျှော့ပါ",completed:"ဖြေဆိုပြီးသော မေးခွန်း",outOf:"၁၀၀ ခုအနက်",chapterResults:"အခန်းအလိုက် ရလဒ်",reviewMistakes:"ပြန်လည်လေ့လာရန်",missedQuestions:"မှားယွင်းသော မေးခွန်းများ",retry:"မေးခွန်း ၁၀၀ ကို ပြန်ဖြေပါ",correct:"မှန်ကန်ပါသည်!",incorrect:"မမှန်ပါ",correctAnswer:"အဖြေမှန်",hintText:"ဝါကျ၏ အချိန်၊ အကြောင်းရင်း သို့မဟုတ် အကျယ်အဝန်း ဆက်နွယ်မှုကို သတိပြုပါ။",fiftyDone:"မမှန်သော ရွေးချယ်စရာနှစ်ခုကို ဖယ်ရှားထားသည်။",noMistakes:"ထပ်ခါတလဲလဲ မှားသော ပုံစံမတွေ့ပါ။",noMisses:"မှားသောအဖြေ မရှိပါ။",reason:"ဤသဒ္ဒါပုံစံသည် ဝါကျအခြေအနေနှင့် အကိုက်ညီဆုံးဖြစ်သည်။",restartConfirm:"လက်ရှိတိုးတက်မှုကို ဖျက်ပြီး ပြန်စမလား။"},
fr:{eyebrow:"Fais de la grammaire une compétence active.",subtitle:"新完全マスター文法 · Chapitres 1–8",step1:"ÉTAPE 01",chooseLanguage:"Choisis la langue des explications",languageNote:"Les questions et les propositions sont en japonais.",language:"Langue",prepare:"Afficher la fiche de révision",savedProgress:"Une session sauvegardée a été trouvée.",resume:"Reprendre",step2:"ÉTAPE 02",reviewTitle:"Révision grammaticale · chapitres 6 à 8",reviewIntro:"Relis les formes, leurs usages et leurs nuances avant de commencer.",back:"Retour",startQuiz:"Commencer le quiz",practice:"MODE ENTRAÎNEMENT",pause:"Pause",restart:"Recommencer",hint:"Indice",fifty:"50/50",next:"Question suivante",quickReference:"RÉFÉRENCE RAPIDE",referenceNote:"Chapitres 6 à 8 · formes présentes dans les propositions",paused:"Session en pause",pauseText:"Ta progression est sauvegardée sur cet appareil.",continueQuiz:"Reprendre le quiz",home:"Accueil",finished:"SESSION TERMINÉE",resultTitle:"Bilan de ta session",score:"Score",hintsUsed:"Indices utilisés",noPenalty:"Sans pénalité",completed:"Questions terminées",outOf:"sur 100",chapterResults:"Résultats par chapitre",reviewMistakes:"Points à revoir",missedQuestions:"Questions ratées",retry:"Recommencer les 100 questions",correct:"Bonne réponse !",incorrect:"Ce n'est pas la bonne réponse",correctAnswer:"Bonne réponse",hintText:"Observe le lien de temps, de cause ou de portée entre les parties de la phrase.",fiftyDone:"Deux propositions incorrectes ont été éliminées.",noMistakes:"Aucune erreur récurrente notable.",noMisses:"Aucune réponse incorrecte.",reason:"Cette forme grammaticale est celle qui convient le mieux au contexte.",restartConfirm:"Effacer la progression actuelle et recommencer ?"}
};
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


let state = {lang:"fr",order:[],index:0,answers:{},hints:0,usedFifty:{},hinted:{},paused:false};
let savesUseJapanese = true;

const SAVE_UI={
  ja:{locale:"ja-JP",title:"保存した学習記録",description:"このブラウザに保存された学習履歴です。",empty:"まだ学習記録はありません。クイズを始めると、ここに自動で保存されます。",legacyDate:"以前のバージョンからの保存 · 日時不明",unknownDate:"保存日時不明",completed:"完了",inProgress:"学習中",questions:"問",answerCount:"回答済み",score:"得点",hints:"ヒント",hintUnit:"回",review:"復習ポイント",chapterPrefix:"第",chapterSuffix:"課",viewResults:"結果を見る",resume:"学習を再開",delete:"削除",deleteConfirm:"この学習記録を削除しますか？"},
  vi:{locale:"vi-VN",eyebrow:"Lịch sử học tập",title:"Lịch sử học tập đã lưu",description:"Các lần học được lưu trên trình duyệt này.",empty:"Chưa có lịch sử học tập. Bắt đầu làm bài, kết quả sẽ tự động được lưu tại đây.",legacyDate:"Bản lưu từ phiên bản cũ · Không rõ ngày giờ",unknownDate:"Không rõ ngày giờ lưu",completed:"Đã hoàn thành",inProgress:"Đang học",questions:"câu",answerCount:"Đã trả lời",score:"Điểm",hints:"Gợi ý",hintUnit:"lần",review:"Nội dung cần ôn lại",chapterPrefix:"Bài ",chapterSuffix:"",viewResults:"Xem kết quả",resume:"Tiếp tục làm bài",delete:"Xóa",deleteConfirm:"Bạn có muốn xóa lần học này không?"},
  "zh-CN":{locale:"zh-CN",eyebrow:"学习记录",title:"已保存的学习记录",description:"保存在这台设备浏览器中的学习记录。",empty:"还没有学习记录。开始答题后，记录会自动保存在这里。",legacyDate:"旧版本的保存记录 · 日期和时间未知",unknownDate:"保存时间未知",completed:"已完成",inProgress:"进行中",questions:"题",answerCount:"已回答",score:"得分",hints:"提示",hintUnit:"次",review:"需要复习的内容",chapterPrefix:"第",chapterSuffix:"课",viewResults:"查看结果",resume:"继续答题",delete:"删除",deleteConfirm:"确定要删除这条学习记录吗？"},
  "zh-TW":{locale:"zh-TW",eyebrow:"學習紀錄",title:"已儲存的學習紀錄",description:"儲存在這個瀏覽器中的學習紀錄。",empty:"目前還沒有學習紀錄。開始作答後，紀錄會自動儲存在這裡。",legacyDate:"舊版本的儲存紀錄 · 日期與時間不明",unknownDate:"儲存時間不明",completed:"已完成",inProgress:"進行中",questions:"題",answerCount:"已作答",score:"得分",hints:"提示",hintUnit:"次",review:"需要複習的內容",chapterPrefix:"第",chapterSuffix:"課",viewResults:"查看結果",resume:"繼續作答",delete:"刪除",deleteConfirm:"確定要刪除這筆學習紀錄嗎？"},
  ko:{locale:"ko-KR",eyebrow:"학습 기록",title:"저장된 학습 기록",description:"이 브라우저에 저장된 학습 기록입니다.",empty:"아직 학습 기록이 없습니다. 퀴즈를 시작하면 여기에 자동으로 저장됩니다.",legacyDate:"이전 버전에서 가져온 기록 · 날짜 및 시간 알 수 없음",unknownDate:"저장 시간 알 수 없음",completed:"완료",inProgress:"학습 중",questions:"문항",answerCount:"답변 완료",score:"점수",hints:"힌트",hintUnit:"회",review:"복습할 내용",chapterPrefix:"",chapterSuffix:"과",viewResults:"결과 보기",resume:"이어서 풀기",delete:"삭제",deleteConfirm:"이 학습 기록을 삭제할까요?"},
  es:{locale:"es-ES",eyebrow:"Historial de estudio",title:"Sesiones guardadas",description:"Historial de estudio guardado en este navegador.",empty:"Todavía no hay sesiones guardadas. Al empezar el cuestionario, tu progreso se guardará aquí automáticamente.",legacyDate:"Sesión guardada en una versión anterior · Fecha y hora desconocidas",unknownDate:"Fecha de guardado desconocida",completed:"Completada",inProgress:"En curso",questions:"preguntas",answerCount:"Respondidas",score:"Puntuación",hints:"Pistas",hintUnit:"usadas",review:"Temas que conviene repasar",chapterPrefix:"Cap. ",chapterSuffix:"",viewResults:"Ver resultados",resume:"Reanudar cuestionario",delete:"Eliminar",deleteConfirm:"¿Quieres eliminar esta sesión?"},
  it:{locale:"it-IT",eyebrow:"Cronologia dello studio",title:"Sessioni salvate",description:"Cronologia dello studio salvata in questo browser.",empty:"Non ci sono ancora sessioni salvate. Quando inizi il quiz, i progressi verranno salvati qui automaticamente.",legacyDate:"Sessione salvata in una versione precedente · Data e ora non disponibili",unknownDate:"Data di salvataggio non disponibile",completed:"Completata",inProgress:"In corso",questions:"domande",answerCount:"Risposte date",score:"Punteggio",hints:"Suggerimenti",hintUnit:"usati",review:"Argomenti da ripassare",chapterPrefix:"Cap. ",chapterSuffix:"",viewResults:"Vedi i risultati",resume:"Riprendi il quiz",delete:"Elimina",deleteConfirm:"Vuoi eliminare questa sessione?"},
  ne:{locale:"ne-NP",eyebrow:"अध्ययन विवरण",title:"सुरक्षित अध्ययन विवरण",description:"यस ब्राउजरमा सुरक्षित गरिएका अध्ययन विवरणहरू।",empty:"अहिलेसम्म कुनै अध्ययन विवरण छैन। क्विज सुरु गरेपछि प्रगति यहाँ स्वतः सुरक्षित हुनेछ।",legacyDate:"पुरानो संस्करणबाट सुरक्षित गरिएको · मिति र समय थाहा छैन",unknownDate:"सुरक्षित गरेको समय थाहा छैन",completed:"पूरा भयो",inProgress:"अभ्यास जारी छ",questions:"प्रश्न",answerCount:"उत्तर दिइएका",score:"अङ्क",hints:"संकेत",hintUnit:"पटक",review:"पुनरावृत्ति गर्नुपर्ने विषय",chapterPrefix:"पाठ ",chapterSuffix:"",viewResults:"नतिजा हेर्नुहोस्",resume:"अभ्यास जारी राख्नुहोस्",delete:"मेटाउनुहोस्",deleteConfirm:"यो अध्ययन विवरण मेटाउन चाहनुहुन्छ?"},
  my:{locale:"my-MM",eyebrow:"လေ့လာမှုမှတ်တမ်း",title:"သိမ်းဆည်းထားသော လေ့လာမှုမှတ်တမ်းများ",description:"ဤဘရောက်ဇာတွင် သိမ်းဆည်းထားသော လေ့လာမှုမှတ်တမ်းများဖြစ်သည်။",empty:"လေ့လာမှုမှတ်တမ်း မရှိသေးပါ။ မေးခွန်းစတင်ဖြေဆိုပါက ဤနေရာတွင် အလိုအလျောက် သိမ်းဆည်းမည်။",legacyDate:"ယခင်ဗားရှင်းမှ မှတ်တမ်း · ရက်စွဲနှင့်အချိန် မသိရပါ",unknownDate:"သိမ်းဆည်းချိန် မသိရပါ",completed:"ပြီးဆုံးပါပြီ",inProgress:"လေ့လာနေဆဲ",questions:"မေးခွန်း",answerCount:"ဖြေဆိုပြီး",score:"ရမှတ်",hints:"အရိပ်အမြွက်",hintUnit:"ကြိမ်",review:"ပြန်လည်လေ့လာရန်",chapterPrefix:"အခန်း ",chapterSuffix:"",viewResults:"ရလဒ်ကြည့်ရန်",resume:"ဆက်လက်ဖြေဆိုရန်",delete:"ဖျက်ရန်",deleteConfirm:"ဤလေ့လာမှုမှတ်တမ်းကို ဖျက်လိုပါသလား？"},
  fr:{locale:"fr-FR",eyebrow:"Historique des sessions",title:"Sessions enregistrées",description:"Historique des sessions conservées dans ce navigateur.",empty:"Aucune session pour le moment. Dès que tu commenceras le quiz, ta progression sera automatiquement enregistrée ici.",legacyDate:"Sauvegarde d'une ancienne version · Date et heure inconnues",unknownDate:"Date d'enregistrement inconnue",completed:"Terminée",inProgress:"En cours",questions:"questions",answerCount:"Répondues",score:"Score",hints:"Indices",hintUnit:"utilisés",review:"Points à revoir",chapterPrefix:"Chap. ",chapterSuffix:"",viewResults:"Voir les résultats",resume:"Reprendre le quiz",delete:"Supprimer",deleteConfirm:"Veux-tu supprimer cette session ?"}
};
function saveText(){return savesUseJapanese?SAVE_UI.ja:(SAVE_UI[state.lang]||SAVE_UI.ja);}


function t(key){return (UI[state.lang]&&UI[state.lang][key])||UI.fr[key]||key;}
function escapeHtml(value){
  return String(value==null?"":value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function rubyHtml(value){return escapeHtml(value);}
function getGrammar(id){return DATA.grammar.find(g=>g.id===id);}
function localizedGloss(id){
  const values=GLOSS[id];
  return values?values[LANGS.indexOf(state.lang)]||"": "";
}
function screen(name){
  document.querySelectorAll(".screen").forEach(el=>el.classList.remove("active"));
  $("screen-"+name).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  if(name==="home")renderSaves();
}
function translateUi(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(t(key))el.textContent=t(key);
  });
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
      legacy.sessionId="legacy-"+Date.now();
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
  const labels=saveText();
  const eyebrow=$("save-section-eyebrow"),heading=$("save-section-title"),description=$("save-section-intro");
  if(eyebrow)eyebrow.textContent=labels.eyebrow||SAVE_UI.ja.eyebrow;
  if(heading)heading.textContent=labels.title;
  if(description)description.textContent=labels.description;
  const sessions=loadSessions();
  if(!sessions.length){
    host.innerHTML='<p class="no-saves">'+escapeHtml(labels.empty)+'</p>';
    return;
  }
  host.innerHTML=sessions.map(session=>{
    const answered=Object.keys(session.answers||{}).length;
    const completed=!!session.completed;
    const result=session.result||null;
    const progress=Math.round(answered/100*100);
    const chapterName=number=>labels.chapterPrefix+number+labels.chapterSuffix;
    const graph=result&&Array.isArray(result.chapters)?'<div class="save-mini-chart">'+result.chapters.map(row=>'<div class="mini-chart-row"><span>'+escapeHtml(chapterName(row.ch))+'</span><i><b style="width:'+(row.total?row.correct/row.total*100:0)+'%"></b></i><small>'+row.correct+'/'+row.total+'</small></div>').join("")+'</div>':"";
    const errors=result&&Array.isArray(result.errors)&&result.errors.length?'<p class="save-review-note">'+escapeHtml(labels.review)+'：'+result.errors.slice(0,4).map(row=>escapeHtml((getGrammar(row.id)||{}).name||row.id)).join("・")+'</p>':"";
    const summary=completed
      ?labels.completed+' · '+(result?result.answered:answered)+'/100 '+labels.questions+' · '+labels.score+' '+(result?result.score:0)+'/100'
      :labels.inProgress+' · '+answered+'/100 '+labels.questions;
    const details=completed
      ?'<div class="save-completed-score"><strong>'+(result?result.score:0)+'/100</strong><span>'+escapeHtml(labels.hints)+' '+(result?result.hints:session.hints||0)+' '+escapeHtml(labels.hintUnit)+'</span></div>'+graph+errors
      :'<div class="save-progress"><div><span>'+escapeHtml(labels.answerCount)+'</span><b>'+answered+'/100</b></div><i><b style="width:'+progress+'%"></b></i></div>';
    const action=completed
      ?'<button data-action="view" data-id="'+escapeHtml(session.sessionId)+'">'+escapeHtml(labels.viewResults)+'</button>'
      :'<button data-action="resume" data-id="'+escapeHtml(session.sessionId)+'">'+escapeHtml(labels.resume)+'</button>';
    return '<details class="saved-session" data-save="'+escapeHtml(session.sessionId)+'"><summary><div class="save-summary-main"><strong>'+escapeHtml(dateLabel(session.createdAt))+'</strong><small>'+escapeHtml(summary)+'</small></div><span class="save-summary-arrow">＋</span></summary><div class="save-session-body">'+details+'<div class="save-actions">'+action+'<button class="delete-save" data-action="delete" data-id="'+escapeHtml(session.sessionId)+'">'+escapeHtml(labels.delete)+'</button></div></div></details>';
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
    return '<details class="chapter-accordion" '+(ch===1?"open":"")+'><summary><span>第'+ch+'課</span><small>'+entries.length+' 文法項目</small></summary><div class="grammar-grid">'+cards+'</div></details>';
  }).join("");
}
function startSession(){
  if(DATA.questions.length!==100){alert("Question bank error: expected 100 questions.");return;}
  const lang=state.lang;
  state={lang:lang,order:shuffle(DATA.questions.map((item,index)=>index)),index:0,answers:{},hints:0,usedFifty:{},hinted:{},paused:false,completed:false,sessionId:"session-"+Date.now()+"-"+Math.random().toString(36).slice(2,7),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};
  saveSession();renderQuestion();screen("quiz");setMascot("neutral");
}
function current(){return DATA.questions[state.order[state.index]];}
function matchGrammar(option){
  const source=option.replace(/[～〜]/g,"").replace(/[（）()]/g,"");
  for(const grammar of DATA.grammar.filter(item=>item.ch>=6)){
    const variants=grammar.name.replace(/[～〜]/g,"").split(/[・／]/);
    if(variants.some(variant=>variant.length>2&&source.includes(variant.replace(/[（）()]/g,""))))return grammar;
  }
  return null;
}
function renderQuick(question){
  const ids=[...new Set(question.choices.map(choice=>matchGrammar(choice)).filter(Boolean).map(grammar=>grammar.id))];
  $("quick-reference-panel").classList.toggle("hidden",ids.length===0);
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
function renderQuestion(){
  if(!state.order.length)return;
  const question=current(),answered=Object.prototype.hasOwnProperty.call(state.answers,state.index);
  $("question-count").textContent="問題 "+String(state.index+1).padStart(2,"0")+" / 100";
  $("question-kind").textContent=question.kind==="blank"?"文法形式の判断":"文の組み立て";
  $("progress-fill").style.width=(state.index+1)+"%";
  $("question-prompt").innerHTML=rubyHtml(question.prompt);
  $("options").innerHTML=question.choices.map((choice,index)=>'<button class="option-btn" data-choice="'+index+'" '+(answered?"disabled":"")+'><span class="letter">'+ "ABCD"[index] +'</span><span>'+rubyHtml(choice)+'</span></button>').join("");
  document.querySelectorAll(".option-btn").forEach(button=>button.addEventListener("click",()=>answer(Number(button.dataset.choice))));
  $("feedback").className="feedback hidden";$("feedback").innerHTML="";
  $("next-btn").classList.toggle("hidden",!answered);
  $("hint-btn").disabled=!!state.hinted[state.index]||answered;
  $("fifty-btn").disabled=!!state.usedFifty[state.index]||answered;
  $("dont-know-btn").disabled=answered;
  $("jump-input").value="";
  if(state.usedFifty[state.index])applyFifty();
  if(answered)showAnswer(state.answers[state.index],true);
  else setMascot("neutral");
  renderQuick(question);saveSession();
}
function completedSentence(question){
  const answer=question.choices[question.answer];
  return question.kind==="blank"?question.prompt.replace(/（[　\s]*）/,answer):question.prompt+answer;
}
function answer(choice){
  if(Object.prototype.hasOwnProperty.call(state.answers,state.index))return;
  state.answers[state.index]=choice;saveSession();showAnswer(choice,false);
}
function pickMessage(type){
  const options=(PRAISE[state.lang]||PRAISE.fr)[type]||PRAISE.fr[type];
  return options[Math.floor(Math.random()*options.length)];
}
function setMascot(mood){
  const stage=$("mascot-stage");if(!stage)return;
  stage.dataset.mood=mood;
  const lines={
    neutral:["準備はいいですか？","一問ずつ、落ち着いていきましょう！"],
    happy:["正解です！よくできました！","その調子です！","すばらしい！"],
    sad:["惜しい！次で取り返しましょう！","いい挑戦です！解説を見てみましょう！"],
    thinking:["ここに注目してみましょう！","文の意味を考えてみましょう！"],
    focus:["二つにしぼれました！","あと少しです！"]
  };
  const list=lines[mood]||lines.neutral;
  $("mascot-bubble").textContent=list[Math.floor(Math.random()*list.length)];
}
function showAnswer(choice,restoring){
  const question=current(),correct=choice===question.answer,didSkip=choice===-1;
  document.querySelectorAll(".option-btn").forEach((button,index)=>{
    button.disabled=true;
    if(index===question.answer)button.classList.add("correct");
    else if(index===choice)button.classList.add("incorrect");
  });
  const grammar=getGrammar(question.grammar);
  const sentence=completedSentence(question);
  let message=didSkip?pickMessage("skip"):pickMessage(correct?"ok":"ng");
  const detailParts=[];
  detailParts.push('<strong class="feedback-emotion">'+escapeHtml(message)+'</strong>');
  detailParts.push('<p class="feedback-answer">'+escapeHtml(t("correctAnswer"))+'：<b>'+escapeHtml(grammar?grammar.name:"")+'</b></p>');
  detailParts.push('<section class="feedback-explanation"><b>'+escapeHtml(t("completedSentence"))+'</b><p class="feedback-japanese">'+rubyHtml(sentence)+'</p><b>'+escapeHtml(t("explanation"))+'</b><p>'+escapeHtml(localizedGloss(question.grammar))+'</p></section>');
  if(state.lang==="fr"&&grammar&&grammar.dist){
    detailParts.push('<p class="feedback-context"><b>À retenir :</b> '+escapeHtml(grammar.dist)+(question.hint?' '+escapeHtml(question.hint):"")+'</p>');
  }else if(state.lang==="fr"&&question.hint){
    detailParts.push('<p class="feedback-context">'+escapeHtml(question.hint)+'</p>');
  }
  $("feedback").className="feedback"+(correct?"":" wrong");
  $("feedback").innerHTML=detailParts.join("");
  $("next-btn").classList.remove("hidden");
  $("hint-btn").disabled=true;$("fifty-btn").disabled=true;$("dont-know-btn").disabled=true;
  setMascot(didSkip?"thinking":(correct?"happy":"sad"));
  if(!restoring)saveSession();
}
function applyFifty(){
  const question=current();
  document.querySelectorAll(".option-btn").forEach((button,index)=>{
    if(index!==question.answer&&index!==((question.answer+1)%4))button.classList.add("eliminated");
  });
}
function useHint(){
  if(state.hinted[state.index]||Object.prototype.hasOwnProperty.call(state.answers,state.index))return;
  state.hinted[state.index]=true;state.hints++;saveSession();
  $("hint-btn").disabled=true;
  const question=current(),gloss=localizedGloss(question.grammar);
  const hint=state.lang==="fr"&&question.hint?question.hint:gloss;
  $("feedback").className="feedback hint-feedback";
  $("feedback").innerHTML="<strong>"+escapeHtml(t("hint"))+"</strong><p>"+escapeHtml(hint)+"</p>";
  setMascot("thinking");
}
function useFifty(){
  if(state.usedFifty[state.index]||Object.prototype.hasOwnProperty.call(state.answers,state.index))return;
  state.usedFifty[state.index]=true;saveSession();applyFifty();
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
    $("jump-input").setCustomValidity(state.lang==="fr"?"Entre un numéro entre 1 et 100.":"Enter a number from 1 to 100.");
    $("jump-input").reportValidity();return;
  }
  $("jump-input").setCustomValidity("");
  state.index=value-1;saveSession();renderQuestion();
}
function calculateResults(){
  const answered=Object.keys(state.answers).length;
  let score=0;
  Object.entries(state.answers).forEach(([position,answerValue])=>{
    const question=DATA.questions[state.order[Number(position)]];
    if(question&&answerValue===question.answer)score++;
  });
  const chapters=Array.from({length:8},(_,index)=>({ch:index+1,total:0,answered:0,correct:0}));
  const errors={};
  state.order.forEach((questionIndex,position)=>{
    const question=DATA.questions[questionIndex],row=chapters[question.ch-1];
    row.total++;
    if(Object.prototype.hasOwnProperty.call(state.answers,position)){
      row.answered++;
      if(state.answers[position]===question.answer)row.correct++;
      else errors[question.grammar]=(errors[question.grammar]||0)+1;
    }
  });
  const missed=state.order.map((questionIndex,position)=>({questionIndex:questionIndex,position:position,question:DATA.questions[questionIndex],answer:state.answers[position]}))
    .filter(item=>Object.prototype.hasOwnProperty.call(state.answers,item.position)&&item.answer!==item.question.answer)
    .map(item=>({position:item.position+1,prompt:item.question.prompt,correct:item.question.choices[item.question.answer],grammar:item.question.grammar,skipped:item.answer===-1}));
  const ranked=Object.entries(errors).sort((a,b)=>b[1]-a[1]).map(row=>({id:row[0],count:row[1]}));
  return {score:score,answered:answered,unanswered:100-answered,hints:state.hints||0,chapters:chapters,errors:ranked,missed:missed};
}
function renderResult(result){
  $("final-score").textContent=result.score+"/100";
  $("hint-total").textContent=result.hints;
  $("completed-total").textContent=result.answered;
  $("unanswered-total").textContent=result.unanswered;
  $("score-caption").textContent=result.score+"%";
  $("chapter-stats").innerHTML=result.chapters.map(row=>'<div class="chapter-row"><span>第'+row.ch+'課</span><div class="chapter-bar"><i style="width:'+(row.total?row.correct/row.total*100:0)+'%"></i></div><span class="chapter-score">'+row.correct+'/'+row.total+'</span></div>').join("");
  $("mistake-summary").innerHTML=result.errors.length?result.errors.slice(0,8).map(row=>'<div class="mistake-row"><span>'+escapeHtml((getGrammar(row.id)||{}).name||row.id)+'</span><strong>'+row.count+'</strong></div>').join(""):'<p class="success-note">'+escapeHtml(t("noMistakes"))+'</p>';
  $("missed-list").innerHTML=result.missed.length?result.missed.map(item=>'<div class="missed-item"><strong>Q'+item.position+' · '+rubyHtml(item.prompt)+'</strong><p>'+escapeHtml(t("correctAnswer"))+'：'+rubyHtml(item.correct)+' · '+rubyHtml((getGrammar(item.grammar)||{}).name||item.grammar)+(item.skipped?' · '+escapeHtml(t("dontKnow")):"")+'</p></div>').join(""):'<p class="success-note">'+escapeHtml(t("noMisses"))+'</p>';
}
function finish(){
  const result=calculateResults();
  state.completed=true;state.paused=false;state.result=result;
  saveSession();renderResult(result);screen("result");
}
function resumeSession(id){
  const session=loadSessions().find(item=>item.sessionId===id);
  if(!session)return;
  state=session;savesUseJapanese=false;
  $("language-select").value=state.lang;translateUi();renderSaves();
  if(state.completed){renderResult(state.result||calculateResults());screen("result");return;}
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
$("hint-btn").addEventListener("click",useHint);
$("fifty-btn").addEventListener("click",useFifty);
$("dont-know-btn").addEventListener("click",()=>answer(-1));
$("jump-btn").addEventListener("click",jumpToQuestion);
$("jump-input").addEventListener("keydown",event=>{if(event.key==="Enter")jumpToQuestion();});
$("pause-btn").addEventListener("click",()=>{state.paused=true;saveSession();screen("pause");});
$("continue-btn").addEventListener("click",()=>{state.paused=false;saveSession();screen("quiz");renderQuestion();});
$("restart-btn").addEventListener("click",()=>{if(confirm(t("restartConfirm")))startSession();});
$("pause-home-btn").addEventListener("click",()=>screen("home"));
$("result-home").addEventListener("click",()=>screen("home"));
$("result-restart").addEventListener("click",startSession);
$("language-select").addEventListener("change",event=>{state.lang=event.target.value;savesUseJapanese=false;renderSaves();});
$("save-list").addEventListener("click",event=>{
  const button=event.target.closest("button[data-action]");
  if(!button)return;
  const id=button.dataset.id,action=button.dataset.action;
  if(action==="resume"||action==="view"){resumeSession(id);return;}
  if(action==="delete"){
    if(!confirm(saveText().deleteConfirm))return;
    const sessions=loadSessions().filter(item=>item.sessionId!==id);
    localStorage.setItem(SESSIONS_KEY,JSON.stringify(sessions));renderSaves();
  }
});

translateUi();
migrateLegacySave();

renderReview();
renderSaves();
console.info("N631 N2 grammar practice ready",DATA.questions.length,"questions");
