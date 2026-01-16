const vocabularyData = [
  // 1. warten auf (+ Acc)
  { id: 1, pair: "warten auf", sentence: "Ich warte ___ den Bus.", answer: "auf", translation: "I am waiting for the bus." },
  { id: 2, pair: "warten auf", sentence: "Wir warten ___ eine Antwort.", answer: "auf", translation: "We are waiting for an answer." },
  { id: 3, pair: "warten auf", sentence: "Wartest du schon lange ___ mich?", answer: "auf", translation: "Have you been waiting for me for a long time?" },
  { id: 4, pair: "warten auf", sentence: "Sie warten ___ den Beginn des Konzerts.", answer: "auf", translation: "They are waiting for the start of the concert." },

  // 2. denken an (+ Acc)
  { id: 5, pair: "denken an", sentence: "Ich denke oft ___ meinen Urlaub.", answer: "an", translation: "I often think about my vacation." },
  { id: 6, pair: "denken an", sentence: "Denkst du bitte ___ den Termin?", answer: "an", translation: "Will you please think of (remember) the appointment?" },
  { id: 7, pair: "denken an", sentence: "Er denkt immer nur ___ seine Arbeit.", answer: "an", translation: "He only ever thinks about his work." },
  { id: 8, pair: "denken an", sentence: "Wir müssen ___ die Zukunft denken.", answer: "an", translation: "We have to think about the future." },

  // 3. träumen von (+ Dat)
  { id: 9, pair: "träumen von", sentence: "Sie träumt ___ einem großen Haus.", answer: "von", translation: "She dreams of a big house." },
  { id: 10, pair: "träumen von", sentence: "Ich habe ___ dir geträumt.", answer: "von", translation: "I dreamed of you." },
  { id: 11, pair: "träumen von", sentence: "Träumst du auch ___ Weltfrieden?", answer: "von", translation: "Do you also dream of world peace?" },
  { id: 12, pair: "träumen von", sentence: "Er träumt ___ einer Karriere als Koch.", answer: "von", translation: "He dreams of a career as a chef." },

  // 4. sich freuen auf (+ Acc - Future)
  { id: 13, pair: "freuen auf", sentence: "Ich freue mich ___ das Wochenende.", answer: "auf", translation: "I am looking forward to the weekend." },
  { id: 14, pair: "freuen auf", sentence: "Freust du dich ___ die Party?", answer: "auf", translation: "Are you looking forward to the party?" },
  { id: 15, pair: "freuen auf", sentence: "Wir freuen uns ___ deinen Besuch.", answer: "auf", translation: "We are looking forward to your visit." },
  { id: 16, pair: "freuen auf", sentence: "Die Kinder freuen sich ___ Weihnachten.", answer: "auf", translation: "The children are looking forward to Christmas." },

  // 5. sich freuen über (+ Acc - Present/Past)
  { id: 17, pair: "freuen über", sentence: "Ich freue mich ___ das Geschenk.", answer: "über", translation: "I am happy about the gift (that I just received)." },
  { id: 18, pair: "freuen über", sentence: "Er freut sich sehr ___ deine Nachricht.", answer: "über", translation: "He is very happy about your message." },
  { id: 19, pair: "freuen über", sentence: "Wir haben uns ___ den Sieg gefreut.", answer: "über", translation: "We were happy about the victory." },
  { id: 20, pair: "freuen über", sentence: "Freust du dich ___ das gute Wetter?", answer: "über", translation: "Are you happy about the good weather?" },

  // 6. sprechen mit (+ Dat)
  { id: 21, pair: "sprechen mit", sentence: "Ich muss ___ meinem Chef sprechen.", answer: "mit", translation: "I have to speak with my boss." },
  { id: 22, pair: "sprechen mit", sentence: "Sprichst du oft ___ deinen Eltern?", answer: "mit", translation: "Do you often speak with your parents?" },
  { id: 23, pair: "sprechen mit", sentence: "Sie spricht gerade ___ der Lehrerin.", answer: "mit", translation: "She is currently speaking with the teacher." },
  { id: 24, pair: "sprechen mit", sentence: "Wir haben ___ dem Nachbarn gesprochen.", answer: "mit", translation: "We spoke with the neighbor." },

  // 7. sprechen über (+ Acc)
  { id: 25, pair: "sprechen über", sentence: "Wir sprechen ___ das neue Projekt.", answer: "über", translation: "We are talking about the new project." },
  { id: 26, pair: "sprechen über", sentence: "Worüber sprecht ihr? Wir sprechen ___ Politik.", answer: "über", translation: "What are you talking about? We are talking about politics." },
  { id: 27, pair: "sprechen über", sentence: "Sie spricht nicht gerne ___ ihre Probleme.", answer: "über", translation: "She doesn't like talking about her problems." },
  { id: 28, pair: "sprechen über", sentence: "Können wir ___ den Preis sprechen?", answer: "über", translation: "Can we talk about the price?" },

  // 8. sich interessieren für (+ Acc)
  { id: 29, pair: "interessieren für", sentence: "Ich interessiere mich ___ Kunst.", answer: "für", translation: "I am interested in art." },
  { id: 30, pair: "interessieren für", sentence: "Interessierst du dich ___ Fußball?", answer: "für", translation: "Are you interested in football?" },
  { id: 31, pair: "interessieren für", sentence: "Er interessiert sich gar nicht ___ Musik.", answer: "für", translation: "He isn't interested in music at all." },
  { id: 32, pair: "interessieren für", sentence: "Wir interessieren uns ___ die deutsche Kultur.", answer: "für", translation: "We are interested in German culture." },

  // 9. sich erinnern an (+ Acc)
  { id: 33, pair: "erinnern an", sentence: "Erinnerst du dich ___ unseren Urlaub?", answer: "an", translation: "Do you remember our vacation?" },
  { id: 34, pair: "erinnern an", sentence: "Ich erinnere mich nicht ___ seinen Namen.", answer: "an", translation: "I don't remember his name." },
  { id: 35, pair: "erinnern an", sentence: "Sie erinnert mich ___ meine Schwester.", answer: "an", translation: "She reminds me of my sister." },
  { id: 36, pair: "erinnern an", sentence: "Wir erinnern uns gerne ___ die Schulzeit.", answer: "an", translation: "We like remembering our school days." },

  // 10. sich beschweren über (+ Acc)
  { id: 37, pair: "beschweren über", sentence: "Der Gast beschwert sich ___ das Essen.", answer: "über", translation: "The guest is complaining about the food." },
  { id: 38, pair: "beschweren über", sentence: "Ich möchte mich ___ den Lärm beschweren.", answer: "über", translation: "I would like to complain about the noise." },
  { id: 39, pair: "beschweren über", sentence: "Beschwerst du dich ___ den Service?", answer: "über", translation: "Are you complaining about the service?" },
  { id: 40, pair: "beschweren über", sentence: "Sie beschweren sich immer ___ das Wetter.", answer: "über", translation: "They always complain about the weather." },

  // 11. hoffen auf (+ Acc)
  { id: 41, pair: "hoffen auf", sentence: "Wir hoffen ___ ein Wunder.", answer: "auf", translation: "We are hoping for a miracle." },
  { id: 42, pair: "hoffen auf", sentence: "Hoffst du ___ eine Beförderung?", answer: "auf", translation: "Are you hoping for a promotion?" },
  { id: 43, pair: "hoffen auf", sentence: "Ich hoffe ___ besseres Wetter morgen.", answer: "auf", translation: "I hope for better weather tomorrow." },
  { id: 44, pair: "hoffen auf", sentence: "Bauern hoffen ___ viel Regen.", answer: "auf", translation: "Farmers hope for plenty of rain." },

  // 12. lachen über (+ Acc)
  { id: 45, pair: "lachen über", sentence: "Wir lachen ___ seinen Witz.", answer: "über", translation: "We are laughing at his joke." },
  { id: 46, pair: "lachen über", sentence: "Lachst du ___ mich?", answer: "über", translation: "Are you laughing at me?" },
  { id: 47, pair: "lachen über", sentence: "Alle lachen ___ den lustigen Film.", answer: "über", translation: "Everyone is laughing at the funny movie." },
  { id: 48, pair: "lachen über", sentence: "Man sollte nicht ___ andere Leute lachen.", answer: "über", translation: "One should not laugh at other people." },

  // 13. passen zu (+ Dat)
  { id: 49, pair: "passen zu", sentence: "Der Schlüssel passt nicht ___ der Tür.", answer: "zu", translation: "The key doesn't fit the door." },
  { id: 50, pair: "passen zu", sentence: "Diese Krawatte passt gut ___ deinem Hemd.", answer: "zu", translation: "This tie fits your shirt well." },
  { id: 51, pair: "passen zu", sentence: "Sie passt perfekt ___ ihm.", answer: "zu", translation: "She is a perfect match for him." },
  { id: 52, pair: "passen zu", sentence: "Das rote Sofa passt nicht ___ den grünen Wänden.", answer: "zu", translation: "The red sofa doesn't go with the green walls." },

  // 14. gehören zu (+ Dat)
  { id: 53, pair: "gehören zu", sentence: "Dieses Buch gehört ___ mir.", answer: "zu", translation: "This book belongs to me (is part of my collection/group)." },
  { id: 54, pair: "gehören zu", sentence: "Gehörst du auch ___ der Gruppe?", answer: "zu", translation: "Do you also belong to the group?" },
  { id: 55, pair: "gehören zu", sentence: "Österreich gehört ___ der EU.", answer: "zu", translation: "Austria belongs to the EU." },
  { id: 56, pair: "gehören zu", sentence: "Das gehört nicht ___ meinen Aufgaben.", answer: "zu", translation: "That is not part of my tasks." },

  // 15. sich kümmern um (+ Acc)
  { id: 57, pair: "kümmern um", sentence: "Ich kümmere mich ___ den Hund.", answer: "um", translation: "I am taking care of the dog." },
  { id: 58, pair: "kümmern um", sentence: "Wer kümmert sich ___ die Gäste?", answer: "um", translation: "Who is taking care of the guests?" },
  { id: 59, pair: "kümmern um", sentence: "Du musst dich ___ deine Hausaufgaben kümmern.", answer: "um", translation: "You need to take care of (attend to) your homework." },
  { id: 60, pair: "kümmern um", sentence: "Wir kümmern uns ___ das Problem.", answer: "um", translation: "We are taking care of the problem." }
];
