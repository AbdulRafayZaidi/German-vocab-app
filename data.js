const vocabularyData = [
  // 1. abhängen von (+ Dat)
  { id: 1, pair: "abhängen von", sentence: "Der Erfolg des Projekts hängt ___ [[der Finanzierung]] ab.", answer: "von", case: "dat", translation: "The success of the project depends on the funding." },
  { id: 2, pair: "abhängen von", sentence: "Ob wir reisen können, hängt ___ [[dem Wetter]] ab.", answer: "von", case: "dat", translation: "Whether we can travel depends on the weather." },
  { id: 3, pair: "abhängen von", sentence: "Die Entscheidung hängt stark ___ [[den aktuellen Umständen]] ab.", answer: "von", case: "dat", translation: "The decision strongly depends on the current circumstances." },
  { id: 4, pair: "abhängen von", sentence: "Sein beruflicher Erfolg hängt ___ [[seinen Kontakten]] ab.", answer: "von", case: "dat", translation: "His professional success depends on his contacts." },

  // 2. ableiten aus (+ Dat)
  { id: 5, pair: "ableiten aus", sentence: "Diese Theorie lässt sich ___ [[praktischen Erfahrungen]] ableiten.", answer: "aus", case: "dat", translation: "This theory can be derived from practical experience." },
  { id: 6, pair: "ableiten aus", sentence: "Man kann viele Regeln ___ [[dem Kontext]] ableiten.", answer: "aus", case: "dat", translation: "Many rules can be derived from the context." },
  { id: 7, pair: "ableiten aus", sentence: "Seine Motivation leitet sich ___ [[persönlichen Zielen]] ab.", answer: "aus", case: "dat", translation: "His motivation is derived from personal goals." },
  { id: 8, pair: "ableiten aus", sentence: "Die Schlussfolgerung wurde ___ [[den Ergebnissen]] abgeleitet.", answer: "aus", case: "dat", translation: "The conclusion was derived from the results." },

  // 3. absehen von (+ Dat)
  { id: 9, pair: "absehen von", sentence: "Wir sollten ___ [[weiteren Diskussionen]] absehen.", answer: "von", case: "dat", translation: "We should refrain from further discussions." },
  { id: 10, pair: "absehen von", sentence: "Er sah ___ [[einer Beschwerde]] ab.", answer: "von", case: "dat", translation: "He refrained from filing a complaint." },
  { id: 11, pair: "absehen von", sentence: "Das Unternehmen sah ___ [[Entlassungen]] ab.", answer: "von", case: "dat", translation: "The company refrained from layoffs." },
  { id: 12, pair: "absehen von", sentence: "Wir sehen ___ [[radikalen Maßnahmen]] ab.", answer: "von", case: "dat", translation: "We refrain from radical measures." },

  // 4. achten auf (+ Acc)
  { id: 13, pair: "achten auf", sentence: "Man sollte ___ [[die Details]] achten.", answer: "auf", case: "acc", translation: "One should pay attention to the details." },
  { id: 14, pair: "achten auf", sentence: "Achte bitte ___ [[deine Wortwahl]]!", answer: "auf", case: "acc", translation: "Please pay attention to your choice of words!" },
  { id: 15, pair: "achten auf", sentence: "Sie achtet sehr ___ [[ihre Gesundheit]].", answer: "auf", case: "acc", translation: "She pays close attention to her health." },
  { id: 16, pair: "achten auf", sentence: "Wir müssen ___ [[die Sicherheitsregeln]] achten.", answer: "auf", case: "acc", translation: "We must pay attention to the safety rules." },

  // 5. anfangen mit (+ Dat)
  { id: 17, pair: "anfangen mit", sentence: "Wir fangen morgen ___ [[dem neuen Projekt]] an.", answer: "mit", case: "dat", translation: "We start the new project tomorrow." },
  { id: 18, pair: "anfangen mit", sentence: "Er hat ___ [[einer kurzen Erklärung]] angefangen.", answer: "mit", case: "dat", translation: "He started with a short explanation." },
  { id: 19, pair: "anfangen mit", sentence: "Man sollte ___ [[den Grundlagen]] anfangen.", answer: "mit", case: "dat", translation: "One should start with the basics." },
  { id: 20, pair: "anfangen mit", sentence: "Sie fängt ___ [[einem Praktikum]] an.", answer: "mit", case: "dat", translation: "She starts with an internship." },

  // 6. antworten auf (+ Acc)
  { id: 21, pair: "antworten auf", sentence: "Er hat noch nicht ___ [[die E-Mail]] geantwortet.", answer: "auf", case: "acc", translation: "He has not yet replied to the email." },
  { id: 22, pair: "antworten auf", sentence: "Kannst du ___ [[meine Frage]] antworten?", answer: "auf", case: "acc", translation: "Can you answer my question?" },
  { id: 23, pair: "antworten auf", sentence: "Sie antwortete höflich ___ [[die Kritik]].", answer: "auf", case: "acc", translation: "She responded politely to the criticism." },
  { id: 24, pair: "antworten auf", sentence: "Niemand hat ___ [[seine Nachricht]] geantwortet.", answer: "auf", case: "acc", translation: "No one responded to his message." },

  // 7. arbeiten an (+ Dat)
  { id: 25, pair: "arbeiten an", sentence: "Sie arbeitet derzeit ___ [[ihrer Masterarbeit]].", answer: "an", case: "dat", translation: "She is currently working on her master's thesis." },
  { id: 26, pair: "arbeiten an", sentence: "Das Team arbeitet ___ [[einer Lösung]] für das Problem.", answer: "an", case: "dat", translation: "The team is working on a solution to the problem." },
  { id: 27, pair: "arbeiten an", sentence: "Wir arbeiten ___ [[einem neuen Konzept]].", answer: "an", case: "dat", translation: "We are working on a new concept." },
  { id: 28, pair: "arbeiten an", sentence: "Er arbeitet seit Jahren ___ [[seiner Karriere]].", answer: "an", case: "dat", translation: "He has been working on his career for years." },

  // 8. sich ärgern über (+ Acc)
  { id: 29, pair: "sich ärgern über", sentence: "Ich ärgere mich ___ [[die Verspätung]].", answer: "über", case: "acc", translation: "I am annoyed about the delay." },
  { id: 30, pair: "sich ärgern über", sentence: "Sie ärgert sich ___ [[seine Unzuverlässigkeit]].", answer: "über", case: "acc", translation: "She is annoyed about his unreliability." },
  { id: 31, pair: "sich ärgern über", sentence: "Wir ärgern uns ___ [[die schlechte Organisation]].", answer: "über", case: "acc", translation: "We are annoyed about the poor organization." },
  { id: 32, pair: "sich ärgern über", sentence: "Er ärgerte sich ___ [[den verlorenen Vertrag]].", answer: "über", case: "acc", translation: "He was annoyed about the lost contract." },

  // 9. aufhören mit (+ Dat)
  { id: 33, pair: "aufhören mit", sentence: "Sie hat ___ [[dem Rauchen]] aufgehört.", answer: "mit", case: "dat", translation: "She quit smoking." },
  { id: 34, pair: "aufhören mit", sentence: "Er sollte ___ [[den Ausreden]] aufhören.", answer: "mit", case: "dat", translation: "He should stop making excuses." },
  { id: 35, pair: "aufhören mit", sentence: "Wir hören ___ [[diesem Thema]] auf.", answer: "mit", case: "dat", translation: "We stop with this topic." },
  { id: 36, pair: "aufhören mit", sentence: "Sie hat ___ [[der Kritik]] aufgehört.", answer: "mit", case: "dat", translation: "She stopped criticizing." },

  // 10. sich aufregen über (+ Acc)
  { id: 37, pair: "sich aufregen über", sentence: "Er regt sich ___ [[die Ungerechtigkeit]] auf.", answer: "über", case: "acc", translation: "He gets upset about the injustice." },
  { id: 38, pair: "sich aufregen über", sentence: "Sie regt sich ___ [[die Bürokratie]] auf.", answer: "über", case: "acc", translation: "She gets upset about the bureaucracy." },
  { id: 39, pair: "sich aufregen über", sentence: "Wir regen uns ___ [[die ständigen Fehler]] auf.", answer: "über", case: "acc", translation: "We get upset about the constant mistakes." },
  { id: 40, pair: "sich aufregen über", sentence: "Er regte sich ___ [[das Verhalten]] auf.", answer: "über", case: "acc", translation: "He got upset about the behavior." },

  // 11. ausgehen von (+ Dat)
  { id: 41, pair: "ausgehen von", sentence: "Wir gehen ___ [[einer positiven Entwicklung]] aus.", answer: "von", case: "dat", translation: "We assume a positive development." },
  { id: 42, pair: "ausgehen von", sentence: "Der Lehrer geht ___ [[guten Kenntnissen]] aus.", answer: "von", case: "dat", translation: "The teacher assumes good knowledge." },
  { id: 43, pair: "ausgehen von", sentence: "Man geht ___ [[realistischen Erwartungen]] aus.", answer: "von", case: "dat", translation: "One assumes realistic expectations." },
  { id: 44, pair: "ausgehen von", sentence: "Wir sind ___ [[falschen Annahmen]] ausgegangen.", answer: "von", case: "dat", translation: "We assumed false premises." },

  // 12. sich bedanken für (+ Acc)
  { id: 45, pair: "sich bedanken für", sentence: "Ich möchte mich herzlich ___ [[Ihre Unterstützung]] bedanken.", answer: "für", case: "acc", translation: "I would like to sincerely thank you for your support." },
  { id: 46, pair: "sich bedanken für", sentence: "Sie bedankte sich ___ [[das Geschenk]] mit einer langen Nachricht.", answer: "für", case: "acc", translation: "She thanked him for the gift with a long message." },
  { id: 47, pair: "sich bedanken für", sentence: "Wir bedanken uns ___ [[die Einladung]] zur Konferenz.", answer: "für", case: "acc", translation: "We thank you for the invitation to the conference." },
  { id: 48, pair: "sich bedanken für", sentence: "Er hat sich offiziell ___ [[die gute Zusammenarbeit]] bedankt.", answer: "für", case: "acc", translation: "He officially thanked them for the good cooperation." },

  // 13. sich befassen mit (+ Dat)
  { id: 49, pair: "sich befassen mit", sentence: "Sie befasst sich intensiv ___ [[dem Thema Nachhaltigkeit]].", answer: "mit", case: "dat", translation: "She is intensively dealing with the topic of sustainability." },
  { id: 50, pair: "sich befassen mit", sentence: "Wir befassen uns derzeit ___ [[komplexen Fragestellungen]].", answer: "mit", case: "dat", translation: "We are currently dealing with complex issues." },
  { id: 51, pair: "sich befassen mit", sentence: "Er möchte sich ___ [[aktuellen Forschungsergebnissen]] befassen.", answer: "mit", case: "dat", translation: "He wants to deal with current research results." },
  { id: 52, pair: "sich befassen mit", sentence: "Das Buch befasst sich ___ [[sozialen Problemen]] der Gegenwart.", answer: "mit", case: "dat", translation: "The book deals with social problems of the present." },

  // 14. beginnen mit (+ Dat)
  { id: 53, pair: "beginnen mit", sentence: "Der Vortrag beginnt ___ [[einer kurzen Einführung]].", answer: "mit", case: "dat", translation: "The lecture begins with a short introduction." },
  { id: 54, pair: "beginnen mit", sentence: "Wir beginnen ___ [[den wichtigsten Punkten]].", answer: "mit", case: "dat", translation: "We begin with the most important points." },
  { id: 55, pair: "beginnen mit", sentence: "Das Projekt begann ___ [[einer klaren Zielsetzung]].", answer: "mit", case: "dat", translation: "The project began with a clear goal definition." },
  { id: 56, pair: "beginnen mit", sentence: "Sie möchte ihre Karriere ___ [[einem Praktikum]] beginnen.", answer: "mit", case: "dat", translation: "She wants to start her career with an internship." },

  // 15. beitragen zu (+ Dat)
  { id: 57, pair: "beitragen zu", sentence: "Diese Maßnahme kann ___ [[einer Verbesserung]] beitragen.", answer: "zu", case: "dat", translation: "This measure can contribute to an improvement." },
  { id: 58, pair: "beitragen zu", sentence: "Seine Ideen haben ___ [[dem Erfolg]] des Projekts beigetragen.", answer: "zu", case: "dat", translation: "His ideas contributed to the project's success." },
  { id: 59, pair: "beitragen zu", sentence: "Gute Kommunikation trägt ___ [[einem besseren Arbeitsklima]] bei.", answer: "zu", case: "dat", translation: "Good communication contributes to a better work atmosphere." },
  { id: 60, pair: "beitragen zu", sentence: "Diese Entscheidung wird ___ [[einer langfristigen Lösung]] beitragen.", answer: "zu", case: "dat", translation: "This decision will contribute to a long-term solution." },

  // 16. sich bemühen um (+ Acc)
  { id: 61, pair: "sich bemühen um", sentence: "Er bemüht sich ___ [[eine Beförderung]].", answer: "um", case: "acc", translation: "He is striving for a promotion." },
  { id: 62, pair: "sich bemühen um", sentence: "Sie bemüht sich ___ [[eine ausgewogene Work-Life-Balance]].", answer: "um", case: "acc", translation: "She strives for a balanced work-life balance." },
  { id: 63, pair: "sich bemühen um", sentence: "Wir bemühen uns ___ [[eine schnelle Lösung]] des Problems.", answer: "um", case: "acc", translation: "We are striving for a quick solution to the problem." },
  { id: 64, pair: "sich bemühen um", sentence: "Er hat sich lange ___ [[einen Studienplatz]] bemüht.", answer: "um", case: "acc", translation: "He strived for a university place for a long time." },

  // 17. berichten über (+ Acc)
  { id: 65, pair: "berichten über", sentence: "Die Medien berichten ausführlich ___ [[den Skandal]].", answer: "über", case: "acc", translation: "The media report extensively about the scandal." },
  { id: 66, pair: "berichten über", sentence: "Sie berichtete ___ [[ihre Erfahrungen]] im Ausland.", answer: "über", case: "acc", translation: "She reported about her experiences abroad." },
  { id: 67, pair: "berichten über", sentence: "Der Journalist berichtet ___ [[aktuelle politische Entwicklungen]].", answer: "über", case: "acc", translation: "The journalist reports on current political developments." },
  { id: 68, pair: "berichten über", sentence: "Wir berichten ___ [[den Fortschritt]] des Projekts.", answer: "über", case: "acc", translation: "We report on the progress of the project." },

  // 18. beruhen auf (+ Dat)
  { id: 69, pair: "beruhen auf", sentence: "Die Entscheidung beruht ___ [[klaren Fakten]].", answer: "auf", case: "dat", translation: "The decision is based on clear facts." },
  { id: 70, pair: "beruhen auf", sentence: "Sein Erfolg beruht ___ [[jahrelanger Erfahrung]].", answer: "auf", case: "dat", translation: "His success is based on years of experience." },
  { id: 71, pair: "beruhen auf", sentence: "Das Konzept beruht ___ [[wissenschaftlichen Erkenntnissen]].", answer: "auf", case: "dat", translation: "The concept is based on scientific findings." },
  { id: 72, pair: "beruhen auf", sentence: "Der Vertrag beruht ___ [[gegenseitigem Vertrauen]].", answer: "auf", case: "dat", translation: "The contract is based on mutual trust." },

  // 19. sich beschäftigen mit (+ Dat)
  { id: 73, pair: "sich beschäftigen mit", sentence: "Er beschäftigt sich ___ [[digitalen Innovationen]].", answer: "mit", case: "dat", translation: "He deals with digital innovations." },
  { id: 74, pair: "sich beschäftigen mit", sentence: "Wir beschäftigen uns ___ [[gesellschaftlichen Veränderungen]].", answer: "mit", case: "dat", translation: "We deal with social changes." },
  { id: 75, pair: "sich beschäftigen mit", sentence: "Sie hat sich lange ___ [[diesem Thema]] beschäftigt.", answer: "mit", case: "dat", translation: "She dealt with this topic for a long time." },
  { id: 76, pair: "sich beschäftigen mit", sentence: "Das Seminar beschäftigt sich ___ [[aktuellen Herausforderungen]].", answer: "mit", case: "dat", translation: "The seminar deals with current challenges." },

  // 20. sich beschränken auf (+ Acc)
  { id: 77, pair: "sich beschränken auf", sentence: "Wir beschränken uns ___ [[die wichtigsten Aspekte]].", answer: "auf", case: "acc", translation: "We limit ourselves to the most important aspects." },
  { id: 78, pair: "sich beschränken auf", sentence: "Der Vortrag beschränkt sich ___ [[theoretische Grundlagen]].", answer: "auf", case: "acc", translation: "The lecture is limited to theoretical basics." },
  { id: 79, pair: "sich beschränken auf", sentence: "Sie beschränkte sich ___ [[eine kurze Zusammenfassung]].", answer: "auf", case: "acc", translation: "She limited herself to a short summary." },
  { id: 80, pair: "sich beschränken auf", sentence: "Das Angebot beschränkt sich ___ [[digitale Inhalte]].", answer: "auf", case: "acc", translation: "The offer is limited to digital content." },

  // 21. bestehen auf (+ Dat)
  { id: 81, pair: "bestehen auf", sentence: "Er besteht ___ [[einer schriftlichen Bestätigung]].", answer: "auf", case: "dat", translation: "He insists on a written confirmation." },
  { id: 82, pair: "bestehen auf", sentence: "Sie bestand ___ [[klaren Regeln]].", answer: "auf", case: "dat", translation: "She insisted on clear rules." },
  { id: 83, pair: "bestehen auf", sentence: "Wir bestehen ___ [[einem fairen Verfahren]].", answer: "auf", case: "dat", translation: "We insist on a fair procedure." },
  { id: 84, pair: "bestehen auf", sentence: "Der Kunde besteht ___ [[einer Rückerstattung]].", answer: "auf", case: "dat", translation: "The customer insists on a refund." },

  // 22. bestehen aus (+ Dat)
  { id: 85, pair: "bestehen aus", sentence: "Der Kurs besteht ___ [[mehreren Modulen]].", answer: "aus", case: "dat", translation: "The course consists of several modules." },
  { id: 86, pair: "bestehen aus", sentence: "Das Team besteht ___ [[internationalen Experten]].", answer: "aus", case: "dat", translation: "The team consists of international experts." },
  { id: 87, pair: "bestehen aus", sentence: "Der Bericht besteht ___ [[drei Kapiteln]].", answer: "aus", case: "dat", translation: "The report consists of three chapters." },
  { id: 88, pair: "bestehen aus", sentence: "Die Prüfung besteht ___ [[einem schriftlichen und einem mündlichen Teil]].", answer: "aus", case: "dat", translation: "The exam consists of a written and an oral part." },

  // 23. bestehen in (+ Dat)
  { id: 89, pair: "bestehen in", sentence: "Die Herausforderung besteht ___ [[einer realistischen Planung]].", answer: "in", case: "dat", translation: "The challenge consists in realistic planning." },
  { id: 90, pair: "bestehen in", sentence: "Seine Aufgabe besteht ___ [[der Koordination]] des Teams.", answer: "in", case: "dat", translation: "His task consists in coordinating the team." },
  { id: 91, pair: "bestehen in", sentence: "Der Unterschied besteht ___ [[der Herangehensweise]].", answer: "in", case: "dat", translation: "The difference consists in the approach." },
  { id: 92, pair: "bestehen in", sentence: "Das Problem besteht ___ [[mangelnder Kommunikation]].", answer: "in", case: "dat", translation: "The problem consists in poor communication." },

  // 24. sich beteiligen an (+ Dat)
  { id: 93, pair: "sich beteiligen an", sentence: "Viele Studierende beteiligen sich ___ [[dem Projekt]].", answer: "an", case: "dat", translation: "Many students participate in the project." },
  { id: 94, pair: "sich beteiligen an", sentence: "Er beteiligte sich aktiv ___ [[der Diskussion]].", answer: "an", case: "dat", translation: "He actively participated in the discussion." },
  { id: 95, pair: "sich beteiligen an", sentence: "Wir beteiligen uns ___ [[sozialen Initiativen]].", answer: "an", case: "dat", translation: "We participate in social initiatives." },
  { id: 96, pair: "sich beteiligen an", sentence: "Sie beteiligt sich ___ [[einer Spendenaktion]].", answer: "an", case: "dat", translation: "She participates in a fundraising campaign." },

  // 25. sich bewerben um (+ Acc)
  { id: 97, pair: "sich bewerben um", sentence: "Er bewirbt sich ___ [[eine Führungsposition]].", answer: "um", case: "acc", translation: "He is applying for a leadership position." },
  { id: 98, pair: "sich bewerben um", sentence: "Sie bewirbt sich ___ [[ein Stipendium]].", answer: "um", case: "acc", translation: "She is applying for a scholarship." },
  { id: 99, pair: "sich bewerben um", sentence: "Wir bewerben uns ___ [[den freien Arbeitsplatz]].", answer: "um", case: "acc", translation: "We are applying for the vacant position." },
  { id: 100, pair: "sich bewerben um", sentence: "Er hat sich ___ [[eine neue Stelle]] beworben.", answer: "um", case: "acc", translation: "He applied for a new job." },

  // 26. bitten um (+ Acc)
  { id: 101, pair: "bitten um", sentence: "Ich bitte Sie ___ [[eine ehrliche Antwort]].", answer: "um", case: "acc", translation: "I ask you for an honest answer." },
  { id: 102, pair: "bitten um", sentence: "Sie bat ___ [[mehr Geduld]].", answer: "um", case: "acc", translation: "She asked for more patience." },
  { id: 103, pair: "bitten um", sentence: "Wir bitten ___ [[Ihre Unterstützung]].", answer: "um", case: "acc", translation: "We ask for your support." },
  { id: 104, pair: "bitten um", sentence: "Er bat ___ [[eine Verlängerung]] der Frist.", answer: "um", case: "acc", translation: "He asked for an extension of the deadline." },

  // 27. danken für (+ Acc)
  { id: 105, pair: "danken für", sentence: "Ich danke Ihnen ___ [[Ihre Hilfe]].", answer: "für", case: "acc", translation: "I thank you for your help." },
  { id: 106, pair: "danken für", sentence: "Sie dankte ihm ___ [[seine Ehrlichkeit]].", answer: "für", case: "acc", translation: "She thanked him for his honesty." },
  { id: 107, pair: "danken für", sentence: "Wir danken ___ [[die gute Zusammenarbeit]].", answer: "für", case: "acc", translation: "We thank you for the good cooperation." },
  { id: 108, pair: "danken für", sentence: "Er dankte ___ [[die Unterstützung]] des Teams.", answer: "für", case: "acc", translation: "He thanked the team for their support." },

  // 28. denken an (+ Acc)
  { id: 109, pair: "denken an", sentence: "Ich denke oft ___ [[meine Zukunft]].", answer: "an", case: "acc", translation: "I often think about my future." },
  { id: 110, pair: "denken an", sentence: "Denkst du ___ [[den Termin]] morgen?", answer: "an", case: "acc", translation: "Are you thinking about the appointment tomorrow?" },
  { id: 111, pair: "denken an", sentence: "Er denkt ständig ___ [[seine Karriere]].", answer: "an", case: "acc", translation: "He constantly thinks about his career." },
  { id: 112, pair: "denken an", sentence: "Wir müssen ___ [[die Konsequenzen]] denken.", answer: "an", case: "acc", translation: "We must think about the consequences." },

  // 29. diskutieren über (+ Acc) (mit)
  { id: 113, pair: "diskutieren über", sentence: "Wir diskutieren ___ [[die aktuellen Entwicklungen]].", answer: "über", case: "acc", translation: "We discuss the current developments." },
  { id: 114, pair: "diskutieren über", sentence: "Sie diskutiert ___ [[politische Themen]] mit ihren Kollegen.", answer: "über", case: "acc", translation: "She discusses political topics with her colleagues." },
  { id: 115, pair: "diskutieren über", sentence: "Die Studierenden diskutieren ___ [[das Prüfungssystem]].", answer: "über", case: "acc", translation: "The students discuss the examination system." },
  { id: 116, pair: "diskutieren über", sentence: "Wir haben lange ___ [[die Strategie]] diskutiert.", answer: "über", case: "acc", translation: "We discussed the strategy for a long time." },


  // 30. sich eignen für (+ Acc)
  { id: 117, pair: "sich eignen für", sentence: "Dieses Programm eignet sich besonders ___ [[Anfänger]].", answer: "für", case: "acc", translation: "This program is especially suitable for beginners." },
  { id: 118, pair: "sich eignen für", sentence: "Das Buch eignet sich ___ [[den Unterricht]].", answer: "für", case: "acc", translation: "The book is suitable for teaching." },
  { id: 119, pair: "sich eignen für", sentence: "Diese Methode eignet sich ___ [[komplexe Analysen]].", answer: "für", case: "acc", translation: "This method is suitable for complex analyses." },
  { id: 120, pair: "sich eignen für", sentence: "Das Angebot eignet sich ___ [[internationale Studierende]].", answer: "für", case: "acc", translation: "The offer is suitable for international students." },

  // 31. sich eignen zu (+ Dat)
  { id: 121, pair: "sich eignen zu", sentence: "Dieses Werkzeug eignet sich ___ [[der Reparatur]] kleiner Geräte.", answer: "zu", case: "dat", translation: "This tool is suitable for repairing small devices." },
  { id: 122, pair: "sich eignen zu", sentence: "Das Material eignet sich ___ [[der Isolierung]] von Gebäuden.", answer: "zu", case: "dat", translation: "The material is suitable for insulating buildings." },
  { id: 123, pair: "sich eignen zu", sentence: "Die Software eignet sich ___ [[der Datenanalyse]].", answer: "zu", case: "dat", translation: "The software is suitable for data analysis." },
  { id: 124, pair: "sich eignen zu", sentence: "Das Gelände eignet sich ___ [[dem Bau]] eines Parks.", answer: "zu", case: "dat", translation: "The area is suitable for building a park." },

  // 32. eindringen in (+ Acc)
  { id: 125, pair: "eindringen in", sentence: "Wasser drang ___ [[die Keller]] des Hauses ein.", answer: "in", case: "acc", translation: "Water penetrated the basements of the house." },
  { id: 126, pair: "eindringen in", sentence: "Die Polizei drang ___ [[das Gebäude]] ein.", answer: "in", case: "acc", translation: "The police entered the building." },
  { id: 127, pair: "eindringen in", sentence: "Feuchtigkeit dringt langsam ___ [[die Wände]] ein.", answer: "in", case: "acc", translation: "Moisture slowly penetrates the walls." },
  { id: 128, pair: "eindringen in", sentence: "Der Lärm drang bis ___ [[meinen Kopf]] ein.", answer: "in", case: "acc", translation: "The noise penetrated into my head." },

  // 33. eingehen auf (+ Acc)
  { id: 129, pair: "eingehen auf", sentence: "Der Dozent ging ausführlich ___ [[die Fragen]] der Studierenden ein.", answer: "auf", case: "acc", translation: "The lecturer addressed the students' questions in detail." },
  { id: 130, pair: "eingehen auf", sentence: "Bitte gehen Sie ___ [[meinen Vorschlag]] ein.", answer: "auf", case: "acc", translation: "Please address my suggestion." },
  { id: 131, pair: "eingehen auf", sentence: "Der Artikel geht ___ [[die gesellschaftlichen Probleme]] ein.", answer: "auf", case: "acc", translation: "The article addresses social problems." },
  { id: 132, pair: "eingehen auf", sentence: "Er ging nicht ___ [[die Kritik]] ein.", answer: "auf", case: "acc", translation: "He did not address the criticism." },

  // 34. eintreten für (+ Acc)
  { id: 133, pair: "eintreten für", sentence: "Viele Organisationen treten ___ [[die Menschenrechte]] ein.", answer: "für", case: "acc", translation: "Many organizations stand up for human rights." },
  { id: 134, pair: "eintreten für", sentence: "Sie tritt aktiv ___ [[soziale Gerechtigkeit]] ein.", answer: "für", case: "acc", translation: "She actively advocates social justice." },
  { id: 135, pair: "eintreten für", sentence: "Wir treten ___ [[eine nachhaltige Politik]] ein.", answer: "für", case: "acc", translation: "We stand up for sustainable policies." },
  { id: 136, pair: "eintreten für", sentence: "Er trat öffentlich ___ [[den Umweltschutz]] ein.", answer: "für", case: "acc", translation: "He publicly advocated environmental protection." },

  // 35. einwirken auf (+ Acc)
  { id: 137, pair: "einwirken auf", sentence: "Stress wirkt sich negativ ___ [[die Gesundheit]] aus.", answer: "auf", case: "acc", translation: "Stress has a negative effect on health." },
  { id: 138, pair: "einwirken auf", sentence: "Medien wirken stark ___ [[die öffentliche Meinung]] ein.", answer: "auf", case: "acc", translation: "Media strongly influence public opinion." },
  { id: 139, pair: "einwirken auf", sentence: "Chemikalien wirken ___ [[das Material]] ein.", answer: "auf", case: "acc", translation: "Chemicals affect the material." },
  { id: 140, pair: "einwirken auf", sentence: "Musik kann positiv ___ [[unsere Stimmung]] einwirken.", answer: "auf", case: "acc", translation: "Music can positively influence our mood." },

  // 36. sich entscheiden für / gegen (+ Acc)
  { id: 141, pair: "sich entscheiden für", sentence: "Sie hat sich ___ [[eine internationale Karriere]] entschieden.", answer: "für", case: "acc", translation: "She decided on an international career." },
  { id: 142, pair: "sich entscheiden gegen", sentence: "Er hat sich bewusst ___ [[das Angebot]] entschieden.", answer: "gegen", case: "acc", translation: "He consciously decided against the offer." },
  { id: 143, pair: "sich entscheiden für", sentence: "Wir entscheiden uns ___ [[eine nachhaltige Lösung]].", answer: "für", case: "acc", translation: "We decide on a sustainable solution." },
  { id: 144, pair: "sich entscheiden gegen", sentence: "Sie entschied sich ___ [[eine schnelle Kündigung]].", answer: "gegen", case: "acc", translation: "She decided against a quick resignation." },

  // 37. entscheiden über (+ Acc)
  { id: 145, pair: "entscheiden über", sentence: "Das Gericht entscheidet ___ [[den Fall]] morgen.", answer: "über", case: "acc", translation: "The court decides the case tomorrow." },
  { id: 146, pair: "entscheiden über", sentence: "Der Vorstand entscheidet ___ [[die Strategie]].", answer: "über", case: "acc", translation: "The board decides on the strategy." },
  { id: 147, pair: "entscheiden über", sentence: "Die Kommission entscheidet ___ [[die Anträge]].", answer: "über", case: "acc", translation: "The committee decides on the applications." },
  { id: 148, pair: "entscheiden über", sentence: "Die Regierung entscheidet ___ [[neue Maßnahmen]].", answer: "über", case: "acc", translation: "The government decides on new measures." },

  // 38. sich entschließen zu (+ Dat)
  { id: 149, pair: "sich entschließen zu", sentence: "Er entschloss sich ___ [[einem Neustart]] im Ausland.", answer: "zu", case: "dat", translation: "He decided on a fresh start abroad." },
  { id: 150, pair: "sich entschließen zu", sentence: "Sie entschloss sich ___ [[einer beruflichen Veränderung]].", answer: "zu", case: "dat", translation: "She decided on a career change." },
  { id: 151, pair: "sich entschließen zu", sentence: "Wir haben uns ___ [[einer langfristigen Lösung]] entschlossen.", answer: "zu", case: "dat", translation: "We decided on a long-term solution." },
  { id: 152, pair: "sich entschließen zu", sentence: "Er entschloss sich schließlich ___ [[dem Studium]].", answer: "zu", case: "dat", translation: "He finally decided on studying." },

  // 39. sich entschuldigen für (+ Acc) (bei + Dat)
  { id: 153, pair: "sich entschuldigen für", sentence: "Ich entschuldige mich ___ [[die Verspätung]] bei Ihnen.", answer: "für", case: "acc", translation: "I apologize to you for the delay." },
  { id: 154, pair: "sich entschuldigen für", sentence: "Sie entschuldigte sich ___ [[den Fehler]] beim Kunden.", answer: "für", case: "acc", translation: "She apologized to the customer for the mistake." },
  { id: 155, pair: "sich entschuldigen für", sentence: "Er hat sich ___ [[sein Verhalten]] bei seinen Kollegen entschuldigt.", answer: "für", case: "acc", translation: "He apologized to his colleagues for his behavior." },
  { id: 156, pair: "sich entschuldigen für", sentence: "Wir entschuldigen uns ___ [[die Unannehmlichkeiten]] bei Ihnen.", answer: "für", case: "acc", translation: "We apologize to you for the inconvenience." },

  // 40. entstehen aus (+ Dat)
  { id: 157, pair: "entstehen aus", sentence: "Große Veränderungen entstehen oft ___ [[kleinen Ideen]].", answer: "aus", case: "dat", translation: "Big changes often arise from small ideas." },
  { id: 158, pair: "entstehen aus", sentence: "Innovation entsteht ___ [[kreativen Prozessen]].", answer: "aus", case: "dat", translation: "Innovation arises from creative processes." },
  { id: 159, pair: "entstehen aus", sentence: "Viele Konflikte entstehen ___ [[Missverständnissen]].", answer: "aus", case: "dat", translation: "Many conflicts arise from misunderstandings." },
  { id: 160, pair: "entstehen aus", sentence: "Erfolg entsteht ___ [[kontinuierlicher Arbeit]].", answer: "aus", case: "dat", translation: "Success arises from continuous work." },

  // 41. sich ergeben aus (+ Dat)
  { id: 161, pair: "sich ergeben aus", sentence: "Neue Chancen ergeben sich ___ [[den Veränderungen]].", answer: "aus", case: "dat", translation: "New opportunities arise from the changes." },
  { id: 162, pair: "sich ergeben aus", sentence: "Das Problem ergibt sich ___ [[der aktuellen Situation]].", answer: "aus", case: "dat", translation: "The problem arises from the current situation." },
  { id: 163, pair: "sich ergeben aus", sentence: "Diese Konsequenzen ergeben sich ___ [[den Entscheidungen]].", answer: "aus", case: "dat", translation: "These consequences arise from the decisions." },
  { id: 164, pair: "sich ergeben aus", sentence: "Viele Fragen ergeben sich ___ [[den neuen Regeln]].", answer: "aus", case: "dat", translation: "Many questions arise from the new rules." },

  // 42. erinnern an (+ Acc)
  { id: 165, pair: "erinnern an", sentence: "Das Lied erinnert mich ___ [[meine Kindheit]].", answer: "an", case: "acc", translation: "The song reminds me of my childhood." },
  { id: 166, pair: "erinnern an", sentence: "Der Film erinnert ___ [[wahre Ereignisse]].", answer: "an", case: "acc", translation: "The film is based on real events." },
  { id: 167, pair: "erinnern an", sentence: "Sein Verhalten erinnert ___ [[alte Muster]].", answer: "an", case: "acc", translation: "His behavior reminds one of old patterns." },
  { id: 168, pair: "erinnern an", sentence: "Das Gebäude erinnert ___ [[historische Zeiten]].", answer: "an", case: "acc", translation: "The building recalls historical times." },

  // 43. erkennen an (+ Dat)
  { id: 169, pair: "erkennen an", sentence: "Ich habe ihn sofort ___ [[seiner Stimme]] erkannt.", answer: "an", case: "dat", translation: "I recognized him immediately by his voice." },
  { id: 170, pair: "erkennen an", sentence: "Man erkennt Qualität ___ [[den Details]].", answer: "an", case: "dat", translation: "You recognize quality by the details." },
  { id: 171, pair: "erkennen an", sentence: "Sie erkannte das Problem ___ [[seinen Reaktionen]].", answer: "an", case: "dat", translation: "She recognized the problem by his reactions." },
  { id: 172, pair: "erkennen an", sentence: "Der Stil ist leicht ___ [[seiner Struktur]] zu erkennen.", answer: "an", case: "dat", translation: "The style is easy to recognize by its structure." },

  // 44. sich erkundigen nach (+ Dat)
  { id: 173, pair: "sich erkundigen nach", sentence: "Ich erkundige mich ___ [[den Kurszeiten]].", answer: "nach", case: "dat", translation: "I am inquiring about the course times." },
  { id: 174, pair: "sich erkundigen nach", sentence: "Sie erkundigte sich ___ [[dem Bewerbungsprozess]].", answer: "nach", case: "dat", translation: "She inquired about the application process." },
  { id: 175, pair: "sich erkundigen nach", sentence: "Wir erkundigen uns ___ [[den Teilnahmebedingungen]].", answer: "nach", case: "dat", translation: "We are inquiring about the participation conditions." },
  { id: 176, pair: "sich erkundigen nach", sentence: "Er erkundigte sich ___ [[den Öffnungszeiten]].", answer: "nach", case: "dat", translation: "He inquired about the opening hours." },

  // 45. ersetzen durch (+ Acc)
  { id: 177, pair: "ersetzen durch", sentence: "Man kann Zucker ___ [[Honig]] ersetzen.", answer: "durch", case: "acc", translation: "You can replace sugar with honey." },
  { id: 178, pair: "ersetzen durch", sentence: "Das Unternehmen ersetzt alte Systeme ___ [[moderne Technologien]].", answer: "durch", case: "acc", translation: "The company replaces old systems with modern technologies." },
  { id: 179, pair: "ersetzen durch", sentence: "Wir ersetzen Papier ___ [[digitale Dokumente]].", answer: "durch", case: "acc", translation: "We replace paper with digital documents." },
  { id: 180, pair: "ersetzen durch", sentence: "Er ersetzte den Termin ___ [[ein Online-Meeting]].", answer: "durch", case: "acc", translation: "He replaced the appointment with an online meeting." },

  // 46. fliehen vor (+ Dat)
  { id: 181, pair: "fliehen vor", sentence: "Viele Menschen fliehen ___ [[dem Krieg]].", answer: "vor", case: "dat", translation: "Many people flee from the war." },
  { id: 182, pair: "fliehen vor", sentence: "Sie flohen ___ [[politischer Verfolgung]].", answer: "vor", case: "dat", translation: "They fled from political persecution." },
  { id: 183, pair: "fliehen vor", sentence: "Die Familie floh ___ [[großer Armut]].", answer: "vor", case: "dat", translation: "The family fled from great poverty." },
  { id: 184, pair: "fliehen vor", sentence: "Er floh ___ [[der Gefahr]] ins Ausland.", answer: "vor", case: "dat", translation: "He fled abroad from the danger." },

  // 47. folgen aus (+ Dat)
  { id: 185, pair: "folgen aus", sentence: "Aus Fehlern folgen oft ___ [[wichtigen Lektionen]].", answer: "aus", case: "dat", translation: "Important lessons often follow from mistakes." },
  { id: 186, pair: "folgen aus", sentence: "Konsequenzen folgen ___ [[unüberlegten Entscheidungen]].", answer: "aus", case: "dat", translation: "Consequences follow from rash decisions." },
  { id: 187, pair: "folgen aus", sentence: "Viele Probleme folgen ___ [[schlechter Planung]].", answer: "aus", case: "dat", translation: "Many problems follow from poor planning." },
  { id: 188, pair: "folgen aus", sentence: "Diese Entwicklung folgt ___ [[globalen Trends]].", answer: "aus", case: "dat", translation: "This development follows from global trends." },

  // 48. fragen nach (+ Dat)
  { id: 189, pair: "fragen nach", sentence: "Er fragte ___ [[dem Weg]] zum Bahnhof.", answer: "nach", case: "dat", translation: "He asked for the way to the station." },
  { id: 190, pair: "fragen nach", sentence: "Sie fragte ___ [[weiteren Informationen]].", answer: "nach", case: "dat", translation: "She asked for further information." },
  { id: 191, pair: "fragen nach", sentence: "Wir fragten ___ [[einer Lösung]] für das Problem.", answer: "nach", case: "dat", translation: "We asked for a solution to the problem." },
  { id: 192, pair: "fragen nach", sentence: "Er fragte ___ [[deiner Meinung]].", answer: "nach", case: "dat", translation: "He asked for your opinion." },

  // 49. sich freuen auf (+ Acc)
  { id: 193, pair: "sich freuen auf", sentence: "Ich freue mich ___ [[das Wiedersehen]] mit dir.", answer: "auf", case: "acc", translation: "I am looking forward to seeing you again." },
  { id: 194, pair: "sich freuen auf", sentence: "Sie freut sich ___ [[die neue Herausforderung]].", answer: "auf", case: "acc", translation: "She is looking forward to the new challenge." },
  { id: 195, pair: "sich freuen auf", sentence: "Wir freuen uns ___ [[die kommenden Projekte]].", answer: "auf", case: "acc", translation: "We are looking forward to the upcoming projects." },
  { id: 196, pair: "sich freuen auf", sentence: "Er freut sich ___ [[seinen Urlaub]] im Sommer.", answer: "auf", case: "acc", translation: "He is looking forward to his vacation in summer." },

  // 50. sich freuen über (+ Acc)
  { id: 197, pair: "sich freuen über", sentence: "Ich freue mich ___ [[deine Nachricht]].", answer: "über", case: "acc", translation: "I am happy about your message." },
  { id: 198, pair: "sich freuen über", sentence: "Sie freut sich ___ [[den Erfolg]] des Projekts.", answer: "über", case: "acc", translation: "She is happy about the success of the project." },
  { id: 199, pair: "sich freuen über", sentence: "Wir freuen uns ___ [[das positive Feedback]].", answer: "über", case: "acc", translation: "We are happy about the positive feedback." },
  { id: 200, pair: "sich freuen über", sentence: "Er freute sich ___ [[das unerwartete Geschenk]].", answer: "über", case: "acc", translation: "He was happy about the unexpected gift." },

  // 51. führen zu (+ Dat)
  { id: 201, pair: "führen zu", sentence: "Diese Entscheidung führt ___ [[einer Verbesserung]].", answer: "zu", case: "dat", translation: "This decision leads to an improvement." },
  { id: 202, pair: "führen zu", sentence: "Stress kann ___ [[gesundheitlichen Problemen]] führen.", answer: "zu", case: "dat", translation: "Stress can lead to health problems." },
  { id: 203, pair: "führen zu", sentence: "Die Reformen führten ___ [[einer nachhaltigen Entwicklung]].", answer: "zu", case: "dat", translation: "The reforms led to sustainable development." },
  { id: 204, pair: "führen zu", sentence: "Unklare Kommunikation führt ___ [[Missverständnissen]].", answer: "zu", case: "dat", translation: "Unclear communication leads to misunderstandings." },

  // 52. sich fürchten vor (+ Dat)
  { id: 205, pair: "sich fürchten vor", sentence: "Viele Menschen fürchten sich ___ [[großen Veränderungen]].", answer: "vor", case: "dat", translation: "Many people are afraid of major changes." },
  { id: 206, pair: "sich fürchten vor", sentence: "Kinder fürchten sich ___ [[der Dunkelheit]].", answer: "vor", case: "dat", translation: "Children are afraid of the dark." },
  { id: 207, pair: "sich fürchten vor", sentence: "Er fürchtet sich ___ [[der Zukunft]].", answer: "vor", case: "dat", translation: "He is afraid of the future." },
  { id: 208, pair: "sich fürchten vor", sentence: "Sie fürchtete sich ___ [[den Konsequenzen]].", answer: "vor", case: "dat", translation: "She was afraid of the consequences." },

  // 53. gehören zu (+ Dat)
  { id: 209, pair: "gehören zu", sentence: "Teamarbeit gehört ___ [[den wichtigsten Fähigkeiten]] im Beruf.", answer: "zu", case: "dat", translation: "Teamwork belongs to the most important skills at work." },
  { id: 210, pair: "gehören zu", sentence: "Geduld gehört ___ [[einer erfolgreichen Kommunikation]].", answer: "zu", case: "dat", translation: "Patience is part of successful communication." },
  { id: 211, pair: "gehören zu", sentence: "Diese Aufgaben gehören ___ [[dem Verantwortungsbereich]] der Leitung.", answer: "zu", case: "dat", translation: "These tasks belong to the management's area of responsibility." },
  { id: 212, pair: "gehören zu", sentence: "Kreativität gehört ___ [[den zentralen Kompetenzen]] moderner Berufe.", answer: "zu", case: "dat", translation: "Creativity is among the key competencies of modern professions." },

  // 54. gelten für (+ Acc)
  { id: 213, pair: "gelten für", sentence: "Diese Regel gilt ___ [[alle Teilnehmenden]].", answer: "für", case: "acc", translation: "This rule applies to all participants." },
  { id: 214, pair: "gelten für", sentence: "Die Vorschriften gelten ___ [[den gesamten Zeitraum]].", answer: "für", case: "acc", translation: "The regulations apply to the entire period." },
  { id: 215, pair: "gelten für", sentence: "Das Angebot gilt nur ___ [[eine begrenzte Zeit]].", answer: "für", case: "acc", translation: "The offer is only valid for a limited time." },
  { id: 216, pair: "gelten für", sentence: "Diese Bedingungen gelten ___ [[internationale Studierende]].", answer: "für", case: "acc", translation: "These conditions apply to international students." },

  // 55. sich gewöhnen an (+ Acc)
  { id: 217, pair: "sich gewöhnen an", sentence: "Man muss sich ___ [[neue Arbeitsbedingungen]] gewöhnen.", answer: "an", case: "acc", translation: "One has to get used to new working conditions." },
  { id: 218, pair: "sich gewöhnen an", sentence: "Sie hat sich ___ [[das Leben im Ausland]] gewöhnt.", answer: "an", case: "acc", translation: "She has gotten used to life abroad." },
  { id: 219, pair: "sich gewöhnen an", sentence: "Wir müssen uns ___ [[den hohen Arbeitsdruck]] gewöhnen.", answer: "an", case: "acc", translation: "We have to get used to the high workload." },
  { id: 220, pair: "sich gewöhnen an", sentence: "Er gewöhnt sich langsam ___ [[die neue Rolle]] im Team.", answer: "an", case: "acc", translation: "He is slowly getting used to the new role in the team." },

  // 56. glauben an (+ Acc)
  { id: 221, pair: "glauben an", sentence: "Viele Menschen glauben ___ [[eine bessere Zukunft]].", answer: "an", case: "acc", translation: "Many people believe in a better future." },
  { id: 222, pair: "glauben an", sentence: "Sie glaubt fest ___ [[den Erfolg]] des Projekts.", answer: "an", case: "acc", translation: "She firmly believes in the success of the project." },
  { id: 223, pair: "glauben an", sentence: "Wir sollten ___ [[unsere Ziele]] glauben.", answer: "an", case: "acc", translation: "We should believe in our goals." },
  { id: 224, pair: "glauben an", sentence: "Er glaubt nicht mehr ___ [[alte Ideale]].", answer: "an", case: "acc", translation: "He no longer believes in old ideals." },

  // 57. gratulieren zu (+ Dat)
  { id: 225, pair: "gratulieren zu", sentence: "Ich gratuliere dir herzlich ___ [[deinem Erfolg]].", answer: "zu", case: "dat", translation: "I warmly congratulate you on your success." },
  { id: 226, pair: "gratulieren zu", sentence: "Wir gratulieren Ihnen ___ [[dem bestandenen Examen]].", answer: "zu", case: "dat", translation: "We congratulate you on passing the exam." },
  { id: 227, pair: "gratulieren zu", sentence: "Sie gratulierte ihm ___ [[seiner Beförderung]].", answer: "zu", case: "dat", translation: "She congratulated him on his promotion." },
  { id: 228, pair: "gratulieren zu", sentence: "Ich möchte dir ___ [[deiner Leistung]] gratulieren.", answer: "zu", case: "dat", translation: "I would like to congratulate you on your achievement." },

  // 58. halten für (+ Acc)
  { id: 229, pair: "halten für", sentence: "Viele halten ihn ___ [[einen Experten]] auf diesem Gebiet.", answer: "für", case: "acc", translation: "Many consider him an expert in this field." },
  { id: 230, pair: "halten für", sentence: "Ich halte diese Lösung ___ [[einen Fehler]].", answer: "für", case: "acc", translation: "I consider this solution a mistake." },
  { id: 231, pair: "halten für", sentence: "Man hielt das Projekt ___ [[einen großen Erfolg]].", answer: "für", case: "acc", translation: "The project was considered a great success." },
  { id: 232, pair: "halten für", sentence: "Sie hält ihn ___ [[einen zuverlässigen Kollegen]].", answer: "für", case: "acc", translation: "She considers him a reliable colleague." },

  // 59. handeln mit (+ Dat)
  { id: 233, pair: "handeln mit", sentence: "Das Unternehmen handelt ___ [[internationalen Partnern]].", answer: "mit", case: "dat", translation: "The company trades with international partners." },
  { id: 234, pair: "handeln mit", sentence: "Er handelt ___ [[gebrauchten Fahrzeugen]].", answer: "mit", case: "dat", translation: "He trades in used vehicles." },
  { id: 235, pair: "handeln mit", sentence: "Die Firma handelt ___ [[nachhaltigen Produkten]].", answer: "mit", case: "dat", translation: "The company trades in sustainable products." },
  { id: 236, pair: "handeln mit", sentence: "Sie handeln ___ [[modernen Technologien]].", answer: "mit", case: "dat", translation: "They trade in modern technologies." },

  // 60. hinausgehen über (+ Acc)
  { id: 237, pair: "hinausgehen über", sentence: "Seine Verantwortung geht weit ___ [[seine Aufgaben]] hinaus.", answer: "über", case: "acc", translation: "His responsibility goes far beyond his tasks." },
  { id: 238, pair: "hinausgehen über", sentence: "Das Angebot geht ___ [[die Erwartungen]] hinaus.", answer: "über", case: "acc", translation: "The offer exceeds expectations." },
  { id: 239, pair: "hinausgehen über", sentence: "Die Diskussion ging ___ [[das eigentliche Thema]] hinaus.", answer: "über", case: "acc", translation: "The discussion went beyond the actual topic." },
  { id: 240, pair: "hinausgehen über", sentence: "Seine Leistungen gehen ___ [[das Übliche]] hinaus.", answer: "über", case: "acc", translation: "His achievements go beyond the usual." },

  // 61. hinweisen auf (+ Acc)
  { id: 241, pair: "hinweisen auf", sentence: "Der Bericht weist ___ [[mögliche Risiken]] hin.", answer: "auf", case: "acc", translation: "The report points to possible risks." },
  { id: 242, pair: "hinweisen auf", sentence: "Die Studie weist ___ [[klare Zusammenhänge]] hin.", answer: "auf", case: "acc", translation: "The study indicates clear correlations." },
  { id: 243, pair: "hinweisen auf", sentence: "Das Schild weist ___ [[eine Gefahr]] hin.", answer: "auf", case: "acc", translation: "The sign warns of a danger." },
  { id: 244, pair: "hinweisen auf", sentence: "Er wies ___ [[die Bedeutung]] des Projekts hin.", answer: "auf", case: "acc", translation: "He pointed out the importance of the project." },

  // 62. hoffen auf (+ Acc)
  { id: 245, pair: "hoffen auf", sentence: "Wir hoffen ___ [[eine schnelle Lösung]].", answer: "auf", case: "acc", translation: "We hope for a quick solution." },
  { id: 246, pair: "hoffen auf", sentence: "Sie hofft ___ [[positive Ergebnisse]].", answer: "auf", case: "acc", translation: "She hopes for positive results." },
  { id: 247, pair: "hoffen auf", sentence: "Viele hoffen ___ [[eine bessere Zukunft]].", answer: "auf", case: "acc", translation: "Many hope for a better future." },
  { id: 248, pair: "hoffen auf", sentence: "Er hofft ___ [[Unterstützung]] von seinem Team.", answer: "auf", case: "acc", translation: "He hopes for support from his team." },

  // 63. informieren über (+ Acc)
  { id: 249, pair: "informieren über", sentence: "Die Webseite informiert ___ [[neue Regelungen]].", answer: "über", case: "acc", translation: "The website informs about new regulations." },
  { id: 250, pair: "informieren über", sentence: "Wir informieren Sie ___ [[den aktuellen Stand]].", answer: "über", case: "acc", translation: "We inform you about the current status." },
  { id: 251, pair: "informieren über", sentence: "Der Vortrag informiert ___ [[wissenschaftliche Erkenntnisse]].", answer: "über", case: "acc", translation: "The lecture informs about scientific findings." },
  { id: 252, pair: "informieren über", sentence: "Sie informierte sich ___ [[die neuen Vorschriften]].", answer: "über", case: "acc", translation: "She informed herself about the new regulations." },

  // 64. sich interessieren für (+ Acc)
  { id: 253, pair: "sich interessieren für", sentence: "Ich interessiere mich ___ [[moderne Technologien]].", answer: "für", case: "acc", translation: "I am interested in modern technologies." },
  { id: 254, pair: "sich interessieren für", sentence: "Sie interessiert sich ___ [[kulturelle Themen]].", answer: "für", case: "acc", translation: "She is interested in cultural topics." },
  { id: 255, pair: "sich interessieren für", sentence: "Wir interessieren uns ___ [[internationale Politik]].", answer: "für", case: "acc", translation: "We are interested in international politics." },
  { id: 256, pair: "sich interessieren für", sentence: "Er hat sich schon immer ___ [[Kunst]] interessiert.", answer: "für", case: "acc", translation: "He has always been interested in art." },

  // 65. sich irren in (+ Dat)
  { id: 257, pair: "sich irren in", sentence: "Ich habe mich ___ [[meiner Einschätzung]] geirrt.", answer: "in", case: "dat", translation: "I was mistaken in my assessment." },
  { id: 258, pair: "sich irren in", sentence: "Sie irrte sich ___ [[der Analyse]] des Problems.", answer: "in", case: "dat", translation: "She was mistaken in the analysis of the problem." },
  { id: 259, pair: "sich irren in", sentence: "Wir haben uns ___ [[unserer Entscheidung]] geirrt.", answer: "in", case: "dat", translation: "We were mistaken in our decision." },
  { id: 260, pair: "sich irren in", sentence: "Er irrte sich ___ [[seiner Prognose]].", answer: "in", case: "dat", translation: "He was wrong in his prediction." },

  // 66. kämpfen für / gegen (+ Acc)
  { id: 261, pair: "kämpfen für", sentence: "Viele Menschen kämpfen ___ [[soziale Gerechtigkeit]].", answer: "für", case: "acc", translation: "Many people fight for social justice." },
  { id: 262, pair: "kämpfen gegen", sentence: "Sie kämpfen ___ [[Diskriminierung]].", answer: "gegen", case: "acc", translation: "They fight against discrimination." },
  { id: 263, pair: "kämpfen für", sentence: "Er kämpft ___ [[seine Überzeugungen]].", answer: "für", case: "acc", translation: "He fights for his beliefs." },
  { id: 264, pair: "kämpfen gegen", sentence: "Wir kämpfen ___ [[Korruption]].", answer: "gegen", case: "acc", translation: "We fight against corruption." },

  // 67. klagen über (+ Acc)
  { id: 265, pair: "klagen über", sentence: "Die Mitarbeitenden klagen ___ [[hohe Arbeitsbelastung]].", answer: "über", case: "acc", translation: "The employees complain about high workload." },
  { id: 266, pair: "klagen über", sentence: "Er klagt ___ [[ständigen Stress]].", answer: "über", case: "acc", translation: "He complains about constant stress." },
  { id: 267, pair: "klagen über", sentence: "Viele klagen ___ [[schlechte Arbeitsbedingungen]].", answer: "über", case: "acc", translation: "Many complain about poor working conditions." },
  { id: 268, pair: "klagen über", sentence: "Sie klagte ___ [[die fehlende Unterstützung]].", answer: "über", case: "acc", translation: "She complained about the lack of support." },

  // 68. sich konzentrieren auf (+ Acc)
  { id: 269, pair: "sich konzentrieren auf", sentence: "Wir müssen uns ___ [[die wichtigsten Aufgaben]] konzentrieren.", answer: "auf", case: "acc", translation: "We must focus on the most important tasks." },
  { id: 270, pair: "sich konzentrieren auf", sentence: "Er konzentriert sich ___ [[sein Studium]].", answer: "auf", case: "acc", translation: "He focuses on his studies." },
  { id: 271, pair: "sich konzentrieren auf", sentence: "Sie konzentrierte sich ___ [[das Wesentliche]].", answer: "auf", case: "acc", translation: "She focused on the essentials." },
  { id: 272, pair: "sich konzentrieren auf", sentence: "Wir sollten uns ___ [[klare Ziele]] konzentrieren.", answer: "auf", case: "acc", translation: "We should focus on clear goals." },

  // 69. sich kümmern um (+ Acc)
  { id: 273, pair: "sich kümmern um", sentence: "Er kümmert sich ___ [[die Organisation]] des Events.", answer: "um", case: "acc", translation: "He takes care of organizing the event." },
  { id: 274, pair: "sich kümmern um", sentence: "Sie kümmert sich ___ [[ihre Familie]].", answer: "um", case: "acc", translation: "She takes care of her family." },
  { id: 275, pair: "sich kümmern um", sentence: "Wir kümmern uns ___ [[die Details]].", answer: "um", case: "acc", translation: "We take care of the details." },
  { id: 276, pair: "sich kümmern um", sentence: "Er hat sich ___ [[das Problem]] gekümmert.", answer: "um", case: "acc", translation: "He took care of the problem." },

  // 70. lachen über (+ Acc)
  { id: 277, pair: "lachen über", sentence: "Die Kinder lachen ___ [[den Witz]].", answer: "über", case: "acc", translation: "The children laugh about the joke." },
  { id: 278, pair: "lachen über", sentence: "Wir haben ___ [[seine Geschichte]] gelacht.", answer: "über", case: "acc", translation: "We laughed about his story." },
  { id: 279, pair: "lachen über", sentence: "Sie lachte ___ [[den lustigen Kommentar]].", answer: "über", case: "acc", translation: "She laughed about the funny comment." },
  { id: 280, pair: "lachen über", sentence: "Man sollte nicht ___ [[andere Menschen]] lachen.", answer: "über", case: "acc", translation: "One should not laugh at other people." },

  // 71. leiden an (+ Dat)
  { id: 281, pair: "leiden an", sentence: "Er leidet ___ [[einer chronischen Krankheit]].", answer: "an", case: "dat", translation: "He suffers from a chronic illness." },
  { id: 282, pair: "leiden an", sentence: "Viele Menschen leiden ___ [[psychischen Belastungen]].", answer: "an", case: "dat", translation: "Many people suffer from psychological stress." },
  { id: 283, pair: "leiden an", sentence: "Sie leidet ___ [[starken Kopfschmerzen]].", answer: "an", case: "dat", translation: "She suffers from severe headaches." },
  { id: 284, pair: "leiden an", sentence: "Er litt ___ [[einer schweren Infektion]].", answer: "an", case: "dat", translation: "He suffered from a severe infection." },

  // 72. leiden unter (+ Dat)
  { id: 285, pair: "leiden unter", sentence: "Viele Mitarbeitende leiden ___ [[hohem Zeitdruck]].", answer: "unter", case: "dat", translation: "Many employees suffer under high time pressure." },
  { id: 286, pair: "leiden unter", sentence: "Sie leidet ___ [[mangelnder Unterstützung]].", answer: "unter", case: "dat", translation: "She suffers from a lack of support." },
  { id: 287, pair: "leiden unter", sentence: "Das Team leidet ___ [[schlechter Kommunikation]].", answer: "unter", case: "dat", translation: "The team suffers from poor communication." },
  { id: 288, pair: "leiden unter", sentence: "Er litt lange ___ [[sozialer Isolation]].", answer: "unter", case: "dat", translation: "He suffered from social isolation for a long time." },

  // 73. liegen an (+ Dat)
  { id: 289, pair: "liegen an", sentence: "Das Problem liegt ___ [[der schlechten Planung]].", answer: "an", case: "dat", translation: "The problem is due to poor planning." },
  { id: 290, pair: "liegen an", sentence: "Der Fehler lag ___ [[einem Missverständnis]].", answer: "an", case: "dat", translation: "The mistake was due to a misunderstanding." },
  { id: 291, pair: "liegen an", sentence: "Der Erfolg liegt ___ [[dem engagierten Team]].", answer: "an", case: "dat", translation: "The success is due to the committed team." },
  { id: 292, pair: "liegen an", sentence: "Das liegt ___ [[äußeren Umständen]].", answer: "an", case: "dat", translation: "That is due to external circumstances." },

  // 74. nachdenken über (+ Acc)
  { id: 293, pair: "nachdenken über", sentence: "Ich denke ___ [[meine Zukunft]] nach.", answer: "über", case: "acc", translation: "I am thinking about my future." },
  { id: 294, pair: "nachdenken über", sentence: "Sie denkt ___ [[eine neue Strategie]] nach.", answer: "über", case: "acc", translation: "She is thinking about a new strategy." },
  { id: 295, pair: "nachdenken über", sentence: "Wir sollten ___ [[diese Entscheidung]] nachdenken.", answer: "über", case: "acc", translation: "We should think about this decision." },
  { id: 296, pair: "nachdenken über", sentence: "Er dachte lange ___ [[das Angebot]] nach.", answer: "über", case: "acc", translation: "He thought about the offer for a long time." },

  // 75. orientieren an (+ Dat)
  { id: 297, pair: "orientieren an", sentence: "Wir orientieren uns ___ [[klaren Zielen]].", answer: "an", case: "dat", translation: "We orient ourselves towards clear goals." },
  { id: 298, pair: "orientieren an", sentence: "Sie orientiert sich ___ [[modernen Standards]].", answer: "an", case: "dat", translation: "She aligns herself with modern standards." },
  { id: 299, pair: "orientieren an", sentence: "Das Unternehmen orientiert sich ___ [[den Bedürfnissen]] der Kunden.", answer: "an", case: "dat", translation: "The company aligns itself with customer needs." },
  { id: 300, pair: "orientieren an", sentence: "Man sollte sich ___ [[wissenschaftlichen Erkenntnissen]] orientieren.", answer: "an", case: "dat", translation: "One should orient oneself towards scientific findings." },

  // 76. profitieren von (+ Dat)
  { id: 301, pair: "profitieren von", sentence: "Viele Unternehmen profitieren ___ [[digitalen Lösungen]].", answer: "von", case: "dat", translation: "Many companies benefit from digital solutions." },
  { id: 302, pair: "profitieren von", sentence: "Studierende profitieren ___ [[internationalen Programmen]].", answer: "von", case: "dat", translation: "Students benefit from international programs." },
  { id: 303, pair: "profitieren von", sentence: "Die Region profitiert ___ [[dem Tourismus]].", answer: "von", case: "dat", translation: "The region benefits from tourism." },
  { id: 304, pair: "profitieren von", sentence: "Wir haben ___ [[den Erfahrungen]] anderer profitiert.", answer: "von", case: "dat", translation: "We benefited from others' experiences." },

  // 77. protestieren gegen (+ Acc)
  { id: 305, pair: "protestieren gegen", sentence: "Viele Menschen protestieren ___ [[die neuen Gesetze]].", answer: "gegen", case: "acc", translation: "Many people protest against the new laws." },
  { id: 306, pair: "protestieren gegen", sentence: "Studierende protestierten ___ [[die Studiengebühren]].", answer: "gegen", case: "acc", translation: "Students protested against tuition fees." },
  { id: 307, pair: "protestieren gegen", sentence: "Die Bevölkerung protestiert ___ [[die Maßnahmen]].", answer: "gegen", case: "acc", translation: "The population protests against the measures." },
  { id: 308, pair: "protestieren gegen", sentence: "Sie protestierte ___ [[die Entscheidung]] der Regierung.", answer: "gegen", case: "acc", translation: "She protested against the government's decision." },

  // 78. rechnen mit (+ Dat)
  { id: 309, pair: "rechnen mit", sentence: "Wir rechnen ___ [[starken Veränderungen]].", answer: "mit", case: "dat", translation: "We expect major changes." },
  { id: 310, pair: "rechnen mit", sentence: "Er rechnet ___ [[großer Unterstützung]].", answer: "mit", case: "dat", translation: "He expects strong support." },
  { id: 311, pair: "rechnen mit", sentence: "Man muss ___ [[unerwarteten Problemen]] rechnen.", answer: "mit", case: "dat", translation: "One must expect unexpected problems." },
  { id: 312, pair: "rechnen mit", sentence: "Wir rechnen ___ [[einem positiven Ergebnis]].", answer: "mit", case: "dat", translation: "We expect a positive result." },

  // 79. rechnen zu (+ Dat)
  { id: 313, pair: "rechnen zu", sentence: "Man rechnet ihn ___ [[den besten Fachkräften]].", answer: "zu", case: "dat", translation: "He is counted among the best professionals." },
  { id: 314, pair: "rechnen zu", sentence: "Diese Theorie wird ___ [[den klassischen Modellen]] gerechnet.", answer: "zu", case: "dat", translation: "This theory is classified among classical models." },
  { id: 315, pair: "rechnen zu", sentence: "Er wird ___ [[den erfahrensten Experten]] gerechnet.", answer: "zu", case: "dat", translation: "He is counted among the most experienced experts." },
  { id: 316, pair: "rechnen zu", sentence: "Das Werk wird ___ [[der modernen Literatur]] gerechnet.", answer: "zu", case: "dat", translation: "The work is classified as modern literature." },

  // 80. sich richten nach (+ Dat)
  { id: 317, pair: "sich richten nach", sentence: "Wir richten uns ___ [[den aktuellen Vorschriften]].", answer: "nach", case: "dat", translation: "We follow the current regulations." },
  { id: 318, pair: "sich richten nach", sentence: "Er richtet sich ___ [[klaren Prinzipien]].", answer: "nach", case: "dat", translation: "He follows clear principles." },
  { id: 319, pair: "sich richten nach", sentence: "Die Planung richtet sich ___ [[dem Budget]].", answer: "nach", case: "dat", translation: "The planning is based on the budget." },
  { id: 320, pair: "sich richten nach", sentence: "Man sollte sich ___ [[wissenschaftlichen Standards]] richten.", answer: "nach", case: "dat", translation: "One should follow scientific standards." },

 // 81. schätzen auf (+ Acc)
  { id: 321, pair: "schätzen auf", sentence: "Die Kosten werden ___ [[eine Million Euro]] geschätzt.", answer: "auf", case: "acc", translation: "The costs are estimated at one million euros." },
  { id: 322, pair: "schätzen auf", sentence: "Man schätzt die Teilnehmerzahl ___ [[rund 500 Personen]].", answer: "auf", case: "acc", translation: "The number of participants is estimated at around 500 people." },
  { id: 323, pair: "schätzen auf", sentence: "Der Schaden wird ___ [[einen hohen Betrag]] geschätzt.", answer: "auf", case: "acc", translation: "The damage is estimated at a high amount." },
  { id: 324, pair: "schätzen auf", sentence: "Experten schätzen den Wert ___ [[mehrere Millionen Euro]].", answer: "auf", case: "acc", translation: "Experts estimate the value at several million euros." },

  // 82. schützen vor (+ Dat)
  { id: 325, pair: "schützen vor", sentence: "Diese Maßnahmen schützen ___ [[den Mitarbeitenden]] vor Risiken.", answer: "vor", case: "dat", translation: "These measures protect the employees from risks." },
  { id: 326, pair: "schützen vor", sentence: "Helme schützen ___ [[schweren Verletzungen]].", answer: "vor", case: "dat", translation: "Helmets protect from serious injuries." },
  { id: 327, pair: "schützen vor", sentence: "Man muss Kinder ___ [[Gefahren]] schützen.", answer: "vor", case: "dat", translation: "Children must be protected from dangers." },
  { id: 328, pair: "schützen vor", sentence: "Das Gesetz schützt ___ [[unfairer Behandlung]].", answer: "vor", case: "dat", translation: "The law protects against unfair treatment." },

  // 83. sorgen für (+ Acc)
  { id: 329, pair: "sorgen für", sentence: "Gute Planung sorgt ___ [[reibungslose Abläufe]].", answer: "für", case: "acc", translation: "Good planning ensures smooth processes." },
  { id: 330, pair: "sorgen für", sentence: "Das Unternehmen sorgt ___ [[faire Arbeitsbedingungen]].", answer: "für", case: "acc", translation: "The company ensures fair working conditions." },
  { id: 331, pair: "sorgen für", sentence: "Er sorgt ___ [[eine angenehme Atmosphäre]].", answer: "für", case: "acc", translation: "He ensures a pleasant atmosphere." },
  { id: 332, pair: "sorgen für", sentence: "Die Maßnahmen sorgen ___ [[mehr Sicherheit]].", answer: "für", case: "acc", translation: "The measures ensure more safety." },

  // 84. sich spezialisieren auf (+ Acc)
  { id: 333, pair: "sich spezialisieren auf", sentence: "Das Unternehmen hat sich ___ [[digitale Lösungen]] spezialisiert.", answer: "auf", case: "acc", translation: "The company has specialized in digital solutions." },
  { id: 334, pair: "sich spezialisieren auf", sentence: "Sie spezialisiert sich ___ [[klinische Forschung]].", answer: "auf", case: "acc", translation: "She is specializing in clinical research." },
  { id: 335, pair: "sich spezialisieren auf", sentence: "Wir haben uns ___ [[nachhaltige Technologien]] spezialisiert.", answer: "auf", case: "acc", translation: "We have specialized in sustainable technologies." },
  { id: 336, pair: "sich spezialisieren auf", sentence: "Er hat sich ___ [[internationale Märkte]] spezialisiert.", answer: "auf", case: "acc", translation: "He has specialized in international markets." },

  // 85. sprechen über (+ Acc)
  { id: 337, pair: "sprechen über", sentence: "Wir sollten ___ [[diese Herausforderung]] sprechen.", answer: "über", case: "acc", translation: "We should talk about this challenge." },
  { id: 338, pair: "sprechen über", sentence: "Sie spricht ___ [[aktuelle Entwicklungen]].", answer: "über", case: "acc", translation: "She talks about current developments." },
  { id: 339, pair: "sprechen über", sentence: "Im Seminar wird ___ [[ethische Fragen]] gesprochen.", answer: "über", case: "acc", translation: "Ethical issues are discussed in the seminar." },
  { id: 340, pair: "sprechen über", sentence: "Er sprach offen ___ [[seine Erfahrungen]].", answer: "über", case: "acc", translation: "He spoke openly about his experiences." },

  // 86. sterben an (+ Dat)
  { id: 341, pair: "sterben an", sentence: "Viele Menschen sterben ___ [[schweren Krankheiten]].", answer: "an", case: "dat", translation: "Many people die from serious illnesses." },
  { id: 342, pair: "sterben an", sentence: "Er ist ___ [[einer Infektion]] gestorben.", answer: "an", case: "dat", translation: "He died from an infection." },
  { id: 343, pair: "sterben an", sentence: "Historisch gesehen starben viele ___ [[Hungersnöten]].", answer: "an", case: "dat", translation: "Historically, many died of famines." },
  { id: 344, pair: "sterben an", sentence: "Menschen können ___ [[Lungenkrankheiten]] sterben.", answer: "an", case: "dat", translation: "People can die from lung diseases." },

  // 87. stoßen auf (+ Acc)
  { id: 345, pair: "stoßen auf", sentence: "Wir sind ___ [[ein unerwartetes Problem]] gestoßen.", answer: "auf", case: "acc", translation: "We encountered an unexpected problem." },
  { id: 346, pair: "stoßen auf", sentence: "Sie stieß ___ [[große Herausforderungen]].", answer: "auf", case: "acc", translation: "She encountered major challenges." },
  { id: 347, pair: "stoßen auf", sentence: "Das Projekt stieß ___ [[positive Resonanz]].", answer: "auf", case: "acc", translation: "The project met with positive feedback." },
  { id: 348, pair: "stoßen auf", sentence: "Wir stoßen immer wieder ___ [[neue Ideen]].", answer: "auf", case: "acc", translation: "We keep coming across new ideas." },

  // 88. suchen nach (+ Dat)
  { id: 349, pair: "suchen nach", sentence: "Viele suchen ___ [[einer besseren Lösung]].", answer: "nach", case: "dat", translation: "Many are looking for a better solution." },
  { id: 350, pair: "suchen nach", sentence: "Er sucht ___ [[neuen beruflichen Perspektiven]].", answer: "nach", case: "dat", translation: "He is looking for new career perspectives." },
  { id: 351, pair: "suchen nach", sentence: "Wir suchen ___ [[innovativen Ansätzen]].", answer: "nach", case: "dat", translation: "We are looking for innovative approaches." },
  { id: 352, pair: "suchen nach", sentence: "Sie sucht ___ [[einer geeigneten Wohnung]].", answer: "nach", case: "dat", translation: "She is looking for a suitable apartment." },

  // 89. teilnehmen an (+ Dat)
  { id: 353, pair: "teilnehmen an", sentence: "Viele Studierende nehmen ___ [[dem Seminar]] teil.", answer: "an", case: "dat", translation: "Many students take part in the seminar." },
  { id: 354, pair: "teilnehmen an", sentence: "Er nimmt ___ [[einem internationalen Projekt]] teil.", answer: "an", case: "dat", translation: "He participates in an international project." },
  { id: 355, pair: "teilnehmen an", sentence: "Wir nehmen ___ [[der Konferenz]] teil.", answer: "an", case: "dat", translation: "We are taking part in the conference." },
  { id: 356, pair: "teilnehmen an", sentence: "Sie nahm ___ [[einer Fortbildung]] teil.", answer: "an", case: "dat", translation: "She took part in a training course." },

  // 90. trauern um (+ Acc)
  { id: 357, pair: "trauern um", sentence: "Die Familie trauert ___ [[den Verstorbenen]].", answer: "um", case: "acc", translation: "The family mourns the deceased." },
  { id: 358, pair: "trauern um", sentence: "Viele Menschen trauern ___ [[die Opfer]] der Katastrophe.", answer: "um", case: "acc", translation: "Many people mourn the victims of the disaster." },
  { id: 359, pair: "trauern um", sentence: "Sie trauert noch immer ___ [[ihren Freund]].", answer: "um", case: "acc", translation: "She is still mourning her friend." },
  { id: 360, pair: "trauern um", sentence: "Wir trauern ___ [[einen großen Verlust]].", answer: "um", case: "acc", translation: "We mourn a great loss." },

  // 91. trennen von (+ Dat)
  { id: 361, pair: "trennen von", sentence: "Er hat sich ___ [[seiner alten Firma]] getrennt.", answer: "von", case: "dat", translation: "He separated from his former company." },
  { id: 362, pair: "trennen von", sentence: "Man sollte Arbeit ___ [[dem Privatleben]] trennen.", answer: "von", case: "dat", translation: "One should separate work from private life." },
  { id: 363, pair: "trennen von", sentence: "Sie trennte sich ___ [[ihrem Partner]].", answer: "von", case: "dat", translation: "She separated from her partner." },
  { id: 364, pair: "trennen von", sentence: "Das Team wurde ___ [[der alten Struktur]] getrennt.", answer: "von", case: "dat", translation: "The team was separated from the old structure." },

  // 92. übereinstimmen mit (+ Dat)
  { id: 365, pair: "übereinstimmen mit", sentence: "Die Ergebnisse stimmen ___ [[den Erwartungen]] überein.", answer: "mit", case: "dat", translation: "The results match the expectations." },
  { id: 366, pair: "übereinstimmen mit", sentence: "Seine Aussage stimmt nicht ___ [[den Fakten]] überein.", answer: "mit", case: "dat", translation: "His statement does not match the facts." },
  { id: 367, pair: "übereinstimmen mit", sentence: "Der Bericht stimmt ___ [[den bisherigen Daten]] überein.", answer: "mit", case: "dat", translation: "The report matches the existing data." },
  { id: 368, pair: "übereinstimmen mit", sentence: "Die Planung stimmt ___ [[den Zielen]] überein.", answer: "mit", case: "dat", translation: "The planning aligns with the goals." },

  // 93. überreden zu (+ Dat)
  { id: 369, pair: "überreden zu", sentence: "Er wurde ___ [[einer Teilnahme]] überredet.", answer: "zu", case: "dat", translation: "He was persuaded to participate." },
  { id: 370, pair: "überreden zu", sentence: "Sie hat ihn ___ [[einem Kompromiss]] überredet.", answer: "zu", case: "dat", translation: "She persuaded him to a compromise." },
  { id: 371, pair: "überreden zu", sentence: "Wir wurden ___ [[einer Änderung]] überredet.", answer: "zu", case: "dat", translation: "We were persuaded to a change." },
  { id: 372, pair: "überreden zu", sentence: "Er ließ sich ___ [[einem Umzug]] überreden.", answer: "zu", case: "dat", translation: "He allowed himself to be persuaded to move." },

  // 94. sich unterhalten über (+ Acc)
  { id: 373, pair: "sich unterhalten über", sentence: "Wir haben uns ___ [[aktuelle Themen]] unterhalten.", answer: "über", case: "acc", translation: "We talked about current topics." },
  { id: 374, pair: "sich unterhalten über", sentence: "Sie unterhält sich ___ [[politische Entwicklungen]].", answer: "über", case: "acc", translation: "She talks about political developments." },
  { id: 375, pair: "sich unterhalten über", sentence: "Die Gruppe unterhielt sich ___ [[ihre Erfahrungen]].", answer: "über", case: "acc", translation: "The group talked about their experiences." },
  { id: 376, pair: "sich unterhalten über", sentence: "Wir haben uns lange ___ [[die Zukunft]] unterhalten.", answer: "über", case: "acc", translation: "We talked for a long time about the future." },

  // 95. unterscheiden von (+ Dat)
  { id: 377, pair: "unterscheiden von", sentence: "Dieses Modell unterscheidet sich ___ [[dem Vorgänger]].", answer: "von", case: "dat", translation: "This model differs from the predecessor." },
  { id: 378, pair: "unterscheiden von", sentence: "Die Strategie unterscheidet sich ___ [[anderen Ansätzen]].", answer: "von", case: "dat", translation: "The strategy differs from other approaches." },
  { id: 379, pair: "unterscheiden von", sentence: "Seine Meinung unterscheidet sich ___ [[der Mehrheit]].", answer: "von", case: "dat", translation: "His opinion differs from the majority." },
  { id: 380, pair: "unterscheiden von", sentence: "Das Produkt unterscheidet sich ___ [[vergleichbaren Lösungen]].", answer: "von", case: "dat", translation: "The product differs from comparable solutions." },

  // 96. unterscheiden zwischen (+ Dat)
  { id: 381, pair: "unterscheiden zwischen", sentence: "Man muss ___ [[Theorie und Praxis]] unterscheiden.", answer: "zwischen", case: "dat", translation: "One must distinguish between theory and practice." },
  { id: 382, pair: "unterscheiden zwischen", sentence: "Sie unterscheidet ___ [[Qualität und Quantität]].", answer: "zwischen", case: "dat", translation: "She distinguishes between quality and quantity." },
  { id: 383, pair: "unterscheiden zwischen", sentence: "Wir sollten ___ [[Fakten und Meinungen]] unterscheiden.", answer: "zwischen", case: "dat", translation: "We should distinguish between facts and opinions." },
  { id: 384, pair: "unterscheiden zwischen", sentence: "Er kann kaum ___ [[Realität und Fiktion]] unterscheiden.", answer: "zwischen", case: "dat", translation: "He can hardly distinguish between reality and fiction." },

  // 97. sich verabschieden von (+ Dat)
  { id: 385, pair: "sich verabschieden von", sentence: "Sie verabschiedete sich ___ [[ihren Kollegen]].", answer: "von", case: "dat", translation: "She said goodbye to her colleagues." },
  { id: 386, pair: "sich verabschieden von", sentence: "Wir verabschieden uns ___ [[der alten Phase]] unseres Lebens.", answer: "von", case: "dat", translation: "We say goodbye to the old phase of our lives." },
  { id: 387, pair: "sich verabschieden von", sentence: "Er verabschiedete sich ___ [[seiner Heimat]].", answer: "von", case: "dat", translation: "He said goodbye to his homeland." },
  { id: 388, pair: "sich verabschieden von", sentence: "Die Gruppe verabschiedete sich ___ [[dem Publikum]].", answer: "von", case: "dat", translation: "The group said goodbye to the audience." },

  // 98. verbinden mit (+ Dat)
  { id: 389, pair: "verbinden mit", sentence: "Viele verbinden Erfolg ___ [[harter Arbeit]].", answer: "mit", case: "dat", translation: "Many associate success with hard work." },
  { id: 390, pair: "verbinden mit", sentence: "Sie verbindet den Ort ___ [[positiven Erinnerungen]].", answer: "mit", case: "dat", translation: "She associates the place with positive memories." },
  { id: 391, pair: "verbinden mit", sentence: "Man verbindet Innovation ___ [[technologischem Fortschritt]].", answer: "mit", case: "dat", translation: "Innovation is associated with technological progress." },
  { id: 392, pair: "verbinden mit", sentence: "Er verbindet das Projekt ___ [[großen Erwartungen]].", answer: "mit", case: "dat", translation: "He associates the project with high expectations." },

  // 99. verfügen über (+ Acc)
  { id: 393, pair: "verfügen über", sentence: "Das Unternehmen verfügt ___ [[moderne Infrastruktur]].", answer: "über", case: "acc", translation: "The company has modern infrastructure." },
  { id: 394, pair: "verfügen über", sentence: "Sie verfügt ___ [[umfangreiche Erfahrung]].", answer: "über", case: "acc", translation: "She has extensive experience." },
  { id: 395, pair: "verfügen über", sentence: "Wir verfügen ___ [[alle notwendigen Mittel]].", answer: "über", case: "acc", translation: "We have all the necessary resources." },
  { id: 396, pair: "verfügen über", sentence: "Die Organisation verfügt ___ [[internationale Kontakte]].", answer: "über", case: "acc", translation: "The organization has international contacts." },

  // 100. vergleichen mit (+ Dat)
  { id: 397, pair: "vergleichen mit", sentence: "Man kann das nicht ___ [[anderen Fällen]] vergleichen.", answer: "mit", case: "dat", translation: "One cannot compare this with other cases." },
  { id: 398, pair: "vergleichen mit", sentence: "Er vergleicht seine Situation ___ [[früheren Erfahrungen]].", answer: "mit", case: "dat", translation: "He compares his situation with past experiences." },
  { id: 399, pair: "vergleichen mit", sentence: "Die Leistung wird ___ [[internationalen Standards]] verglichen.", answer: "mit", case: "dat", translation: "The performance is compared with international standards." },
  { id: 400, pair: "vergleichen mit", sentence: "Das Produkt lässt sich gut ___ [[der Konkurrenz]] vergleichen.", answer: "mit", case: "dat", translation: "The product can be well compared with the competition." },

  // 101. verhandeln über (+ Acc)
  { id: 401, pair: "verhandeln über", sentence: "Die Parteien verhandeln ___ [[neue Verträge]].", answer: "über", case: "acc", translation: "The parties are negotiating new contracts." },
  { id: 402, pair: "verhandeln über", sentence: "Man verhandelt ___ [[die Bedingungen]] des Abkommens.", answer: "über", case: "acc", translation: "The terms of the agreement are being negotiated." },
  { id: 403, pair: "verhandeln über", sentence: "Sie verhandeln ___ [[wirtschaftliche Reformen]].", answer: "über", case: "acc", translation: "They are negotiating economic reforms." },
  { id: 404, pair: "verhandeln über", sentence: "Es wird ___ [[finanzielle Unterstützung]] verhandelt.", answer: "über", case: "acc", translation: "Financial support is being negotiated." },

  // 102. sich verlassen auf (+ Acc)
  { id: 405, pair: "sich verlassen auf", sentence: "Man kann sich ___ [[klare Regeln]] verlassen.", answer: "auf", case: "acc", translation: "One can rely on clear rules." },
  { id: 406, pair: "sich verlassen auf", sentence: "Sie verlässt sich ___ [[ihr Team]].", answer: "auf", case: "acc", translation: "She relies on her team." },
  { id: 407, pair: "sich verlassen auf", sentence: "Wir verlassen uns ___ [[bewährte Methoden]].", answer: "auf", case: "acc", translation: "We rely on proven methods." },
  { id: 408, pair: "sich verlassen auf", sentence: "Er verlässt sich ___ [[seine Erfahrung]].", answer: "auf", case: "acc", translation: "He relies on his experience." },

  // 103. versorgen mit (+ Dat)
  { id: 409, pair: "versorgen mit", sentence: "Die Organisation versorgt Menschen ___ [[lebenswichtigen Gütern]].", answer: "mit", case: "dat", translation: "The organization supplies people with essential goods." },
  { id: 410, pair: "versorgen mit", sentence: "Das System versorgt die Region ___ [[Energie]].", answer: "mit", case: "dat", translation: "The system supplies the region with energy." },
  { id: 411, pair: "versorgen mit", sentence: "Sie versorgen die Kunden ___ [[wichtigen Informationen]].", answer: "mit", case: "dat", translation: "They provide customers with important information." },
  { id: 412, pair: "versorgen mit", sentence: "Das Team wird ___ [[aktuellen Daten]] versorgt.", answer: "mit", case: "dat", translation: "The team is supplied with current data." },

  // 104. verstehen unter (+ Dat)
  { id: 413, pair: "verstehen unter", sentence: "Was verstehst du ___ [[erfolgreicher Führung]]?", answer: "unter", case: "dat", translation: "What do you understand by successful leadership?" },
  { id: 414, pair: "verstehen unter", sentence: "Man versteht ___ [[Qualität]] mehr als nur ein gutes Produkt.", answer: "unter", case: "dat", translation: "Quality is understood as more than just a good product." },
  { id: 415, pair: "verstehen unter", sentence: "Was versteht man ___ [[nachhaltiger Entwicklung]]?", answer: "unter", case: "dat", translation: "What is meant by sustainable development?" },
  { id: 416, pair: "verstehen unter", sentence: "Er versteht ___ [[Teamarbeit]] gegenseitige Unterstützung.", answer: "unter", case: "dat", translation: "He understands teamwork as mutual support." },

  // 105. verstoßen gegen (+ Acc)
  { id: 417, pair: "verstoßen gegen", sentence: "Die Maßnahme verstößt ___ [[die geltenden Regeln]].", answer: "gegen", case: "acc", translation: "The measure violates the existing rules." },
  { id: 418, pair: "verstoßen gegen", sentence: "Das Unternehmen verstößt ___ [[gesetzliche Vorschriften]].", answer: "gegen", case: "acc", translation: "The company violates legal regulations." },
  { id: 419, pair: "verstoßen gegen", sentence: "Sein Verhalten verstößt ___ [[ethische Grundsätze]].", answer: "gegen", case: "acc", translation: "His behavior violates ethical principles." },
  { id: 420, pair: "verstoßen gegen", sentence: "Die Entscheidung verstößt ___ [[internationale Standards]].", answer: "gegen", case: "acc", translation: "The decision violates international standards." },

  // 106. verwechseln mit (+ Dat)
  { id: 421, pair: "verwechseln mit", sentence: "Man darf das nicht ___ [[einem Fehler]] verwechseln.", answer: "mit", case: "dat", translation: "One must not confuse this with a mistake." },
  { id: 422, pair: "verwechseln mit", sentence: "Er hat den Namen ___ [[einer anderen Person]] verwechselt.", answer: "mit", case: "dat", translation: "He confused the name with another person's." },
  { id: 423, pair: "verwechseln mit", sentence: "Das Konzept wird oft ___ [[etwas völlig anderem]] verwechselt.", answer: "mit", case: "dat", translation: "The concept is often confused with something else entirely." },
  { id: 424, pair: "verwechseln mit", sentence: "Sie hat das Symbol ___ [[einem Warnzeichen]] verwechselt.", answer: "mit", case: "dat", translation: "She confused the symbol with a warning sign." },

  // 107. verweisen auf (+ Acc)
  { id: 425, pair: "verweisen auf", sentence: "Der Artikel verweist ___ [[wichtige Quellen]].", answer: "auf", case: "acc", translation: "The article refers to important sources." },
  { id: 426, pair: "verweisen auf", sentence: "Der Bericht verweist ___ [[weitere Studien]].", answer: "auf", case: "acc", translation: "The report refers to further studies." },
  { id: 427, pair: "verweisen auf", sentence: "Er verwies ___ [[die geltenden Vorschriften]].", answer: "auf", case: "acc", translation: "He referred to the applicable regulations." },
  { id: 428, pair: "verweisen auf", sentence: "Die Analyse verweist ___ [[klare Zusammenhänge]].", answer: "auf", case: "acc", translation: "The analysis points to clear correlations." },

  // 108. verzichten auf (+ Acc)
  { id: 429, pair: "verzichten auf", sentence: "Viele verzichten ___ [[unnötige Ausgaben]].", answer: "auf", case: "acc", translation: "Many forgo unnecessary expenses." },
  { id: 430, pair: "verzichten auf", sentence: "Er verzichtet ___ [[persönliche Vorteile]].", answer: "auf", case: "acc", translation: "He forgoes personal advantages." },
  { id: 431, pair: "verzichten auf", sentence: "Wir verzichten bewusst ___ [[Plastikprodukte]].", answer: "auf", case: "acc", translation: "We consciously avoid plastic products." },
  { id: 432, pair: "verzichten auf", sentence: "Sie verzichtete ___ [[eine Beförderung]].", answer: "auf", case: "acc", translation: "She declined a promotion." },

  // 109. vorbereiten auf (+ Acc)
  { id: 433, pair: "vorbereiten auf", sentence: "Wir bereiten uns ___ [[die Prüfung]] vor.", answer: "auf", case: "acc", translation: "We are preparing for the exam." },
  { id: 434, pair: "vorbereiten auf", sentence: "Er bereitet sich ___ [[neue Herausforderungen]] vor.", answer: "auf", case: "acc", translation: "He is preparing for new challenges." },
  { id: 435, pair: "vorbereiten auf", sentence: "Das Team bereitet sich ___ [[den Projektstart]] vor.", answer: "auf", case: "acc", translation: "The team is preparing for the project launch." },
  { id: 436, pair: "vorbereiten auf", sentence: "Sie bereitet sich ___ [[eine wichtige Präsentation]] vor.", answer: "auf", case: "acc", translation: "She is preparing for an important presentation." },

  // 110. warnen vor (+ Dat)
  { id: 437, pair: "warnen vor", sentence: "Experten warnen ___ [[möglichen Risiken]].", answer: "vor", case: "dat", translation: "Experts warn about possible risks." },
  { id: 438, pair: "warnen vor", sentence: "Man warnt ___ [[unrealistischen Erwartungen]].", answer: "vor", case: "dat", translation: "People warn against unrealistic expectations." },
  { id: 439, pair: "warnen vor", sentence: "Die Polizei warnt ___ [[gefährlichen Situationen]].", answer: "vor", case: "dat", translation: "The police warn about dangerous situations." },
  { id: 440, pair: "warnen vor", sentence: "Er wurde ___ [[falschen Entscheidungen]] gewarnt.", answer: "vor", case: "dat", translation: "He was warned about wrong decisions." },

  // 111. warten auf (+ Acc)
  { id: 441, pair: "warten auf", sentence: "Wir warten ___ [[eine wichtige Antwort]].", answer: "auf", case: "acc", translation: "We are waiting for an important answer." },
  { id: 442, pair: "warten auf", sentence: "Sie wartet ___ [[den nächsten Schritt]].", answer: "auf", case: "acc", translation: "She is waiting for the next step." },
  { id: 443, pair: "warten auf", sentence: "Viele warten ___ [[bessere Bedingungen]].", answer: "auf", case: "acc", translation: "Many are waiting for better conditions." },
  { id: 444, pair: "warten auf", sentence: "Er wartet geduldig ___ [[eine Lösung]].", answer: "auf", case: "acc", translation: "He is patiently waiting for a solution." },

  // 112. sich wenden an (+ Acc)
  { id: 445, pair: "sich wenden an", sentence: "Bei Fragen wenden Sie sich ___ [[den Kundenservice]].", answer: "an", case: "acc", translation: "For questions, contact customer service." },
  { id: 446, pair: "sich wenden an", sentence: "Sie wandte sich ___ [[einen Experten]].", answer: "an", case: "acc", translation: "She turned to an expert." },
  { id: 447, pair: "sich wenden an", sentence: "Man sollte sich ___ [[die zuständige Behörde]] wenden.", answer: "an", case: "acc", translation: "One should contact the responsible authority." },
  { id: 448, pair: "sich wenden an", sentence: "Er wandte sich ___ [[seinen Vorgesetzten]].", answer: "an", case: "acc", translation: "He turned to his supervisor." },

  // 113. sich wenden gegen (+ Acc)
  { id: 449, pair: "sich wenden gegen", sentence: "Die Kritik richtet sich ___ [[die Entscheidung]] der Leitung.", answer: "gegen", case: "acc", translation: "The criticism is directed against the management's decision." },
  { id: 450, pair: "sich wenden gegen", sentence: "Viele wenden sich ___ [[ungerechte Maßnahmen]].", answer: "gegen", case: "acc", translation: "Many oppose unjust measures." },
  { id: 451, pair: "sich wenden gegen", sentence: "Der Protest richtet sich ___ [[die Reform]].", answer: "gegen", case: "acc", translation: "The protest is directed against the reform." },
  { id: 452, pair: "sich wenden gegen", sentence: "Die Bevölkerung wendet sich ___ [[die neue Regelung]].", answer: "gegen", case: "acc", translation: "The population opposes the new regulation." },

  // 114. werden aus (+ Dat)
  { id: 453, pair: "werden aus", sentence: "Was wird ___ [[dieser Idee]] in Zukunft?", answer: "aus", case: "dat", translation: "What will become of this idea in the future?" },
  { id: 454, pair: "werden aus", sentence: "Was ist ___ [[dem Projekt]] geworden?", answer: "aus", case: "dat", translation: "What happened to the project?" },
  { id: 455, pair: "werden aus", sentence: "Was wird ___ [[seinen Plänen]] nach dem Studium?", answer: "aus", case: "dat", translation: "What will become of his plans after his studies?" },
  { id: 456, pair: "werden aus", sentence: "Was ist ___ [[dem Unternehmen]] geworden?", answer: "aus", case: "dat", translation: "What happened to the company?" },

  // 115. werden zu (+ Dat)
  { id: 457, pair: "werden zu", sentence: "Die Diskussion wurde ___ [[einem ernsthaften Konflikt]].", answer: "zu", case: "dat", translation: "The discussion turned into a serious conflict." },
  { id: 458, pair: "werden zu", sentence: "Das Experiment wurde ___ [[einem großen Erfolg]].", answer: "zu", case: "dat", translation: "The experiment became a great success." },
  { id: 459, pair: "werden zu", sentence: "Die Idee wurde ___ [[einem konkreten Plan]].", answer: "zu", case: "dat", translation: "The idea turned into a concrete plan." },
  { id: 460, pair: "werden zu", sentence: "Das Treffen wurde ___ [[einer produktiven Sitzung]].", answer: "zu", case: "dat", translation: "The meeting turned into a productive session." },

  // 116. wirken auf (+ Acc)
  { id: 461, pair: "wirken auf", sentence: "Sein Verhalten wirkt sich negativ ___ [[das Team]] aus.", answer: "auf", case: "acc", translation: "His behavior has a negative effect on the team." },
  { id: 462, pair: "wirken auf", sentence: "Musik wirkt beruhigend ___ [[die Stimmung]].", answer: "auf", case: "acc", translation: "Music has a calming effect on the mood." },
  { id: 463, pair: "wirken auf", sentence: "Stress wirkt sich stark ___ [[die Leistungsfähigkeit]] aus.", answer: "auf", case: "acc", translation: "Stress strongly affects performance." },
  { id: 464, pair: "wirken auf", sentence: "Das Design wirkt positiv ___ [[die Wahrnehmung]] der Marke.", answer: "auf", case: "acc", translation: "The design positively affects the brand’s perception." },

  // 117. sich wundern über (+ Acc)
  { id: 465, pair: "sich wundern über", sentence: "Ich wundere mich ___ [[seine Reaktion]].", answer: "über", case: "acc", translation: "I am surprised by his reaction." },
  { id: 466, pair: "sich wundern über", sentence: "Sie wundert sich ___ [[die Entscheidung]] der Leitung.", answer: "über", case: "acc", translation: "She is surprised by the management’s decision." },
  { id: 467, pair: "sich wundern über", sentence: "Wir wundern uns ___ [[die plötzliche Änderung]].", answer: "über", case: "acc", translation: "We are surprised by the sudden change." },
  { id: 468, pair: "sich wundern über", sentence: "Er wunderte sich ___ [[das unerwartete Ergebnis]].", answer: "über", case: "acc", translation: "He was surprised by the unexpected result." },

  // 118. zählen zu (+ Dat)
  { id: 469, pair: "zählen zu", sentence: "Diese Stadt zählt ___ [[den wichtigsten Wirtschaftszentren]].", answer: "zu", case: "dat", translation: "This city is among the most important economic centers." },
  { id: 470, pair: "zählen zu", sentence: "Er zählt ___ [[den erfahrensten Fachkräften]].", answer: "zu", case: "dat", translation: "He is among the most experienced professionals." },
  { id: 471, pair: "zählen zu", sentence: "Diese Themen zählen ___ [[den aktuellen Schwerpunkten]].", answer: "zu", case: "dat", translation: "These topics are among the current priorities." },
  { id: 472, pair: "zählen zu", sentence: "Das Unternehmen zählt ___ [[den Marktführern]].", answer: "zu", case: "dat", translation: "The company is among the market leaders." },

  // 119. zurückführen auf (+ Acc)
  { id: 473, pair: "zurückführen auf", sentence: "Das Problem lässt sich ___ [[mangelnde Kommunikation]] zurückführen.", answer: "auf", case: "acc", translation: "The problem can be traced back to poor communication." },
  { id: 474, pair: "zurückführen auf", sentence: "Der Erfolg ist ___ [[klare Strategien]] zurückzuführen.", answer: "auf", case: "acc", translation: "The success can be attributed to clear strategies." },
  { id: 475, pair: "zurückführen auf", sentence: "Die Krise lässt sich ___ [[wirtschaftliche Faktoren]] zurückführen.", answer: "auf", case: "acc", translation: "The crisis can be traced back to economic factors." },
  { id: 476, pair: "zurückführen auf", sentence: "Die Verzögerung ist ___ [[technische Probleme]] zurückzuführen.", answer: "auf", case: "acc", translation: "The delay is due to technical problems." },

  // 120. zusammenhängen mit (+ Dat)
  { id: 477, pair: "zusammenhängen mit", sentence: "Der Erfolg hängt ___ [[guter Vorbereitung]] zusammen.", answer: "mit", case: "dat", translation: "Success is connected with good preparation." },
  { id: 478, pair: "zusammenhängen mit", sentence: "Die Entscheidung hängt ___ [[persönlichen Erfahrungen]] zusammen.", answer: "mit", case: "dat", translation: "The decision is related to personal experiences." },
  { id: 479, pair: "zusammenhängen mit", sentence: "Viele Probleme hängen ___ [[strukturellen Mängeln]] zusammen.", answer: "mit", case: "dat", translation: "Many problems are connected with structural flaws." },
  { id: 480, pair: "zusammenhängen mit", sentence: "Die Ergebnisse hängen ___ [[den Rahmenbedingungen]] zusammen.", answer: "mit", case: "dat", translation: "The results depend on the framework conditions." },

  // 121. zusammenstoßen mit (+ Dat)
  { id: 481, pair: "zusammenstoßen mit", sentence: "Das Schiff ist ___ [[einem anderen Boot]] zusammengestoßen.", answer: "mit", case: "dat", translation: "The ship collided with another boat." },
  { id: 482, pair: "zusammenstoßen mit", sentence: "Der Lkw stieß ___ [[einem Pkw]] zusammen.", answer: "mit", case: "dat", translation: "The truck collided with a car." },
  { id: 483, pair: "zusammenstoßen mit", sentence: "Das Flugzeug stieß ___ [[einem Vogel]] zusammen.", answer: "mit", case: "dat", translation: "The airplane collided with a bird." },
  { id: 484, pair: "zusammenstoßen mit", sentence: "Das Radfahrzeug stieß ___ [[einem Hindernis]] zusammen.", answer: "mit", case: "dat", translation: "The bicycle collided with an obstacle." },

  // 122. zweifeln an (+ Dat)
  { id: 485, pair: "zweifeln an", sentence: "Viele zweifeln ___ [[der Wirksamkeit]] der Maßnahmen.", answer: "an", case: "dat", translation: "Many doubt the effectiveness of the measures." },
  { id: 486, pair: "zweifeln an", sentence: "Er zweifelt ___ [[seinen eigenen Fähigkeiten]].", answer: "an", case: "dat", translation: "He doubts his own abilities." },
  { id: 487, pair: "zweifeln an", sentence: "Sie zweifelt ___ [[der Ehrlichkeit]] der Aussage.", answer: "an", case: "dat", translation: "She doubts the honesty of the statement." },
  { id: 488, pair: "zweifeln an", sentence: "Wir zweifeln ___ [[dem Erfolg]] des Projekts.", answer: "an", case: "dat", translation: "We doubt the success of the project." },

  // 123. es fehlt an (+ Dat)
  { id: 489, pair: "es fehlt an", sentence: "In vielen Regionen fehlt es ___ [[ausgebildeten Fachkräften]].", answer: "an", case: "dat", translation: "Many regions lack trained professionals." },
  { id: 490, pair: "es fehlt an", sentence: "Dem Konzept fehlt es ___ [[klarer Struktur]].", answer: "an", case: "dat", translation: "The concept lacks a clear structure." },
  { id: 491, pair: "es fehlt an", sentence: "Hier fehlt es ___ [[notwendigen Ressourcen]].", answer: "an", case: "dat", translation: "There is a lack of necessary resources here." },
  { id: 492, pair: "es fehlt an", sentence: "Dem Projekt fehlt es ___ [[finanzieller Unterstützung]].", answer: "an", case: "dat", translation: "The project lacks financial support." },

  // 124. es geht um (+ Acc)
  { id: 493, pair: "es geht um", sentence: "In diesem Vortrag geht es ___ [[aktuelle Herausforderungen]].", answer: "um", case: "acc", translation: "This lecture is about current challenges." },
  { id: 494, pair: "es geht um", sentence: "Es geht hier ___ [[grundlegende Fragen]].", answer: "um", case: "acc", translation: "This is about fundamental questions." },
  { id: 495, pair: "es geht um", sentence: "In der Diskussion geht es ___ [[soziale Verantwortung]].", answer: "um", case: "acc", translation: "The discussion is about social responsibility." },
  { id: 496, pair: "es geht um", sentence: "Es geht ___ [[die Zukunft]] unseres Unternehmens.", answer: "um", case: "acc", translation: "It’s about the future of our company." },

  // 125. es handelt sich um (+ Acc)
  { id: 497, pair: "es handelt sich um", sentence: "Dabei handelt es sich ___ [[ein komplexes Problem]].", answer: "um", case: "acc", translation: "This is a complex problem." },
  { id: 498, pair: "es handelt sich um", sentence: "Es handelt sich ___ [[eine langfristige Strategie]].", answer: "um", case: "acc", translation: "This is a long-term strategy." },
  { id: 499, pair: "es handelt sich um", sentence: "Hierbei handelt es sich ___ [[eine wichtige Entscheidung]].", answer: "um", case: "acc", translation: "This is an important decision." },
  { id: 500, pair: "es handelt sich um", sentence: "Es handelt sich ___ [[einen Sonderfall]].", answer: "um", case: "acc", translation: "This is a special case." },

  // 126. es kommt auf … an (+ Acc)
  { id: 501, pair: "es kommt auf an", sentence: "Es kommt ___ [[die richtige Strategie]] an.", answer: "auf", case: "acc", translation: "It depends on the right strategy." },
  { id: 502, pair: "es kommt auf an", sentence: "Es kommt ___ [[die Details]] an.", answer: "auf", case: "acc", translation: "It depends on the details." },
  { id: 503, pair: "es kommt auf an", sentence: "Es kommt ___ [[eine gute Vorbereitung]] an.", answer: "auf", case: "acc", translation: "It depends on good preparation." },
  { id: 504, pair: "es kommt auf an", sentence: "Am Ende kommt es ___ [[das Ergebnis]] an.", answer: "auf", case: "acc", translation: "In the end, it depends on the result." },

  // 127. es kommt zu (+ Dat)
  { id: 505, pair: "es kommt zu", sentence: "Es kam ___ [[einem Missverständnis]] zwischen den Parteien.", answer: "zu", case: "dat", translation: "There was a misunderstanding between the parties." },
  { id: 506, pair: "es kommt zu", sentence: "Es kommt ___ [[einer Verzögerung]] im Ablauf.", answer: "zu", case: "dat", translation: "There is a delay in the process." },
  { id: 507, pair: "es kommt zu", sentence: "Es kam ___ [[einem Konflikt]] im Team.", answer: "zu", case: "dat", translation: "There was a conflict in the team." },
  { id: 508, pair: "es kommt zu", sentence: "Es kommt ___ [[einer wichtigen Entscheidung]].", answer: "zu", case: "dat", translation: "There will be an important decision." }
];
