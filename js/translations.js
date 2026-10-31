// =========================================================
// SISTEMA DI TRADUZIONE BILINGUE (ITALIANO / ROMÂNĂ)
// Parrocchia Ortodossa Romena Fossano/Mondovì
// Sotto la protezione di San Giacomo di Putna e Sant'Antonio il Grande
// =========================================================

const TRANSLATIONS = {
  it: {
    "brand.title": "Parrocchia Ortodossa Romena",
    "brand.subtitle": "Fossano/Mondovì",
    "nav.home": "Home",
    "nav.about": "Chi Siamo",
    "nav.schedule": "<i class=\"fa-solid fa-church\"></i> Orari Funzioni",
    "nav.priest": "Parola Della Parrocchia",
    "nav.gallery": "Galleria",
    "nav.notices": "Avvisi",
    "nav.contact": "Contatti",
    "nav.theme_toggle": "Cambia tema (Giorno / Notte)",
    "nav.lang_toggle": "Cambia lingua (Italiano / Română)",
    "index.title": "Parrocchia Ortodossa Romena Fossano/Mondovì | Santi Giacomo di Putna e Antonio il Grande",
    "about.title": "Chi Siamo | Parrocchia Ortodossa Romena Fossano/Mondovì",
    "schedule.title": "Orari Sante Funzioni | Parrocchia Ortodossa Romena Fossano/Mondovì",
    "priest.title": "Parola Della Parrocchia | Parrocchia Ortodossa Romena Fossano/Mondovì",
    "gallery.title": "Galleria Sacra & Icone | Parrocchia Ortodossa Romena Fossano/Mondovì",
    "notices.title": "Avvisi Parrocchiali | Parrocchia Ortodossa Romena Fossano/Mondovì",
    "contact.title": "Dove Siamo & Contatti | Parrocchia Ortodossa Romena Fossano/Mondovì",
    "footer.brand": "Parrocchia Ortodossa Romena Fossano/Mondovì",
    "footer.desc": "<strong>Parrocchia Ortodossa Romena Fossano/Mondovì</strong><br>Sotto la protezione spirituale di <strong>San Giacomo di Putna</strong> (15 Maggio) e <strong>Sant'Antonio il Grande</strong> (17 Gennaio).<br>Cura pastorale: <strong>Padre Nicolae Pușcașu</strong>. Sede attuale: Via Craveri 93, 12045 Fossano (CN). In cammino con raccolta fondi per la futura sede definitiva.",
    "footer.canonical": "In comunione canonica con la Diocesi Ortodossa Romena d'Italia.",
    "footer.heading_pages": "Pagine",
    "footer.heading_contact": "Contatti",
    "footer.rights": "© <span id=\"year\"></span> Parrocchia Ortodossa Romena Fossano/Mondovì. Tutti i diritti riservati.",
    "footer.tradition": "Nel rispetto della tradizione liturgica ortodossa.",
    "home.hero_badge": "<i class=\"fa-solid fa-church\"></i> Parrocchia Ortodossa Romena · Fossano/Mondovì",
    "home.hero_patrons_pill": "<span class=\"patron-pill\"><i class=\"fa-solid fa-person-praying\" style=\"color: var(--accent-gold); margin-right: 5px;\"></i> <strong>San Giacomo di Putna</strong> (15 Maggio)</span> <span style=\"opacity:0.4; margin: 0 6px;\">✦</span> <span class=\"patron-pill\"><i class=\"fa-solid fa-cross\" style=\"color: var(--accent-gold); margin-right: 5px;\"></i> <strong>Sant'Antonio il Grande</strong> (17 Gennaio)</span>",
    "home.hero_title": "Parrocchia Ortodossa Romena Fossano/Mondovì",
    "home.hero_subtitle": "Sotto la celeste protezione di San Giacomo di Putna e di Sant'Antonio il Grande",
    "home.hero_text": "Benvenuti nella casa spirituale della nostra comunità per Fossano, Mondovì e i territori limitrofi: un luogo sacro di preghiera, guida pastorale del sacerdote Padre Nicolae Pușcașu, celebrazione dei Santi Misteri e accoglienza fraterna.",
    "home.next_liturgy_prefix": "Prossimo Servizio:",
    "home.next_liturgy_default": "Domenica alle 10:00 — Divina Liturgia",
    "home.btn_schedule": "<i class=\"fa-solid fa-calendar-days\"></i> Orari delle Liturgie",
    "home.btn_contact": "<i class=\"fa-solid fa-location-dot\"></i> Dove Trovarci & Contatti",
    "home.verse_text": "\"Venite a me, voi tutti che siete affaticati e oppressi, e io vi darò riposo.\"",
    "home.verse_ref": "— Vangelo secondo Matteo 11, 28",
    "home.section_tag": "La Vita Della Parrocchia",
    "home.section_title": "La Nostra Comunità & La Cura Pastorale",
    "home.card1_title": "La Comunità Parrocchiale",
    "home.card1_text": "Attualmente accolta nella sede di <strong>Via Craveri 93</strong> a Fossano con raccolta fondi attiva per la futura sede definitiva: un ambiente solenne di preghiera, contemplazione delle sacre icone e pace dell'anima.",
    "home.card1_link": "Scopri la nostra parrocchia <i class=\"fa-solid fa-arrow-right\"></i>",
    "home.card2_title": "Padre Nicolae Pușcașu",
    "home.card2_text": "Incaricato della parrocchia, il sacerdote è a disposizione di fedeli e famiglie per la Santa Confessione, i sacramenti (Battesimi, Matrimoni), la benedizione delle case e il sostegno spirituale.",
    "home.card2_link": "Contatta il parroco <i class=\"fa-solid fa-arrow-right\"></i>",
    "home.card3_title": "Liturgie & Vita Spirituale",
    "home.card3_text": "Celebriamo la Divina Liturgia la domenica alle 10:00, il sabato mattina alle 09:30 con Parastas e le preghiere serali con Acatisto il mercoledì alle 19:30.",
    "home.card3_link": "Consulta tutti gli orari <i class=\"fa-solid fa-arrow-right\"></i>",
    "home.patrons_tag": "I Santi Protettori",
    "home.patrons_title": "Santi Giacomo di Putna e Antonio il Grande",
    "home.patrons_desc": "La nostra parrocchia è affidata all'intercessione celeste di due grandi fari della fede ortodossa:",
    "home.patron_iacob_title": "San Giacomo di Putna (15 Maggio)",
    "home.patron_iacob_desc": "Metropolita di Moldavia, instancabile pastore e difensore dei fedeli. La sua carità evangelica verso i bisognosi guida ogni giorno la nostra parrocchia.",
    "home.patron_antonio_title": "Sant'Antonio il Grande / Abate (17 Gennaio)",
    "home.patron_antonio_desc": "Padre del monachesimo cristiano e maestro insuperabile di preghiera e ascesi nel deserto. Esempio di fede celebrato in Oriente e in Occidente.",
    "home.troparion_tag": "Inno Liturgico",
    "home.troparion_title": "Tropario di San Giacomo di Putna",
    "home.troparion_text": "\"Fuggitore della gloria terrena e custode fedele della saggezza di Cristo, o Padre Santo Giacomo, con la tua preghiera hai illuminato i fedeli e con la tua carità hai sostenuto i poveri. Prega Cristo Dio di salvare le anime nostre.\"",
    "home.troparion_antonio_title": "Tropario di Sant'Antonio il Grande",
    "home.troparion_antonio_text": "\"Emulando i costumi del fervente Elia e seguendo i sentieri diritti del Battista, o Padre Antonio, hai popolato il deserto e rassodato l'universo con le tue preghiere. Intercedi presso Cristo Dio per la salvezza delle anime nostre.\"",
    "home.donations_tag": "PROGETTO NUOVA SEDE & RACCOLTA FONDI",
    "home.donations_title": "Progetto Nuova Chiesa: In Cammino Insieme",
    "home.donations_subtitle": "La raccolta fondi è aperta: un aiuto concreto per individuare e realizzare la nostra sede definitiva",
    "home.donations_text": "Per dare una casa definitiva alla nostra parrocchia e accogliere degnamente fedeli, famiglie e pellegrini di Fossano e Mondovì, la comunità ha avviato una raccolta fondi dedicata. Il luogo preciso e la sede definitiva saranno confermati e annunciati non appena il finanziamento sarà completato. Ogni offerta da parte di privati, famiglie, benefattori ed enti desiderosi di contribuire a riportare in piedi la chiesa è un dono prezioso per il futuro della nostra comunità.",
    "home.donations_btn": "<i class=\"fa-solid fa-hand-holding-heart\"></i> Informazioni per Donazioni & Raccolta Fondi",
    "home.news_tag": "Parola Della Parrocchia",
    "home.news_title": "Messaggi, Omelie & Avvisi della Parrocchia",
    "home.news_loading": "Caricamento in corso dei messaggi e avvisi parrocchiali da Google Fogli...",
    "home.news_empty_title": "Bacheca della Comunità Parrocchiale",
    "home.news_empty_text": "In questa sezione sono raccolti i messaggi ufficiali, le omelie domenicali, il Santo del Giorno e le riflessioni spirituali della Parrocchia Ortodossa Romena Fossano/Mondovì.",
    "home.news_empty_btn": "Visita la Parola Della Parrocchia <i class=\"fa-solid fa-arrow-right\"></i>",
    "home.news_read_more": "Leggi tutto il messaggio <i class=\"fa-solid fa-arrow-right\"></i>",
    "about.hero_badge": "<i class=\"fa-solid fa-church\"></i> Parrocchia Ortodossa Romena · Fossano/Mondovì",
    "about.hero_title": "La Comunità Parrocchiale & La Fede",
    "about.hero_subtitle": "Parrocchia Ortodossa Romena Fossano/Mondovì, sotto la protezione di San Giacomo di Putna e Sant'Antonio il Grande",
    "about.card1_title": "La Parrocchia & I Fedeli",
    "about.card1_p1": "La <strong>Parrocchia Ortodossa Romena Fossano/Mondovì</strong> è la casa spirituale e il focolare di preghiera per tutti i fedeli cristiani ortodossi e le loro famiglie residenti a Fossano, Mondovì, Savigliano, Saluzzo, Ceva e in tutta la provincia di Cuneo.",
    "about.card1_p2": "Le porte della nostra parrocchia sono aperte a chiunque cerchi Dio nella preghiera sincera, desideri accostarsi ai Santi Misteri o voglia conoscere la ricchezza liturgica e la luce spirituale dell'Oriente cristiano.",
    "about.card2_title": "Padre Nicolae Pușcașu & La Cura Pastorale",
    "about.card2_p1": "La vita pastorale della comunità è guidata da <strong>Padre Nicolae Pușcașu</strong>, sacerdote e incaricato della parrocchia, dedito alla cura paterna di ogni anima e famiglia.",
    "about.card2_p2": "Padre Nicolae celebra con fedeltà le Sante Liturgie, riceve i fedeli per la Santa Confessione, impartisce le benedizioni e i sacramenti ed è costantemente disponibile per le necessità spirituali dei fedeli.",
    "about.card2_btn_priest": "<i class=\"fa-solid fa-feather-pointed\"></i> Parola Della Parrocchia",
    "about.card2_btn_contact": "<i class=\"fa-solid fa-envelope\"></i> Contatta il Sacerdote",
    "about.church_tag": "Il Nostro Percorso & Il Luogo Sacro",
    "about.church_title": "L'Attuale Sede & Il Progetto per una Chiesa Definitiva",
    "about.church_p1": "Attualmente la parrocchia si riunisce per la preghiera comunitaria presso la sede di <strong>Via Craveri 93</strong> nel centro di Fossano. È iniziato un cammino fondamentale: una raccolta fondi per individuare, allestire e restaurare la sede definitiva della chiesa per le comunità di Fossano, Mondovì e dintorni. Il luogo esatto sarà reso noto non appena il percorso di finanziamento sarà portato a compimento.",
    "about.church_p2": "Anche in questa fase transitoria, il luogo di preghiera è custodito con profonda devozione: l'iconostasi separa e unisce il Santuario all'assemblea, e le sacre icone invitano al raccoglimento, alla pace del cuore e alla comunione fraterna.",
    "about.church_p3": "Chiunque visiti la nostra chiesa è accolto con amore: un luogo dove accendere una candela, pregare nel silenzio e condividere la liturgia.",
    "about.patrons_tag": "I Nostri Protettori Celesti",
    "about.patrons_title": "San Giacomo di Putna & Sant'Antonio il Grande",
    "about.patron_title": "I Santi Patroni: San Giacomo di Putna & Sant'Antonio il Grande",
    "about.patron_text": "La nostra comunità è posta sotto la celeste intercessione di due venerabili santi: <strong>San Giacomo di Putna</strong> (15 maggio), metropolita di Moldavia, modello di carità pastorale e guida dei semplici; e <strong>Sant'Antonio il Grande / Abate</strong> (17 gennaio), fondatore del monachesimo cristiano e padre universale dell'ascesi e del discernimento interiore, celebrato sia nella Chiesa Ortodossa che in quella Cattolica.",
    "about.pillars_tag": "La Vita Della Chiesa",
    "about.pillars_title": "I Pilastri della Nostra Parrocchia",
    "about.pillar1_title": "Liturgia & Preghiera Continua",
    "about.pillar1_text": "La Divina Liturgia domenicale e festiva, la confessione e la recita dei salmi costituiscono il fulcro spirituale della parrocchia.",
    "about.pillar2_title": "Tradizione Ortodossa & Sante Icone",
    "about.pillar2_text": "La fedeltà all'insegnamento dei Santi Padri della Chiesa, la venerazione delle sante icone e la celebrazione solenne delle grandi feste.",
    "about.pillar3_title": "Fratellanza & Solidarietà Attiva",
    "about.pillar3_text": "La cura per i bisognosi, l'accoglienza calorosa delle nuove famiglie, la catechesi dei bambini e il reciproco sostegno nella vita quotidiana.",
    "about.canonical_note": "La Parrocchia Ortodossa Romena Fossano/Mondovì opera in piena comunione canonica con la Diocesi Ortodossa Romena d'Italia.",
    "schedule.hero_badge": "<i class=\"fa-solid fa-church\"></i> Parrocchia Ortodossa Romena · Fossano/Mondovì",
    "schedule.hero_title": "Orari delle Sante Funzioni",
    "schedule.hero_subtitle": "Celebrazioni liturgiche, momenti di preghiera e presenza pastorale del Padre Parroco",
    "schedule.sun_badge": "OGNI DOMENICA",
    "schedule.sun_title": "Domenica: Giorno del Signore",
    "schedule.sun_item1_title": "09:00 — Mattutino (Utrenia)",
    "schedule.sun_item1_desc": "Rito mattutino di lode, lettura dei salmi e tempo di preparazione alla celebrazione eucaristica.",
    "schedule.sun_item2_title": "10:00 — Santa e Divina Liturgia & Omelia",
    "schedule.sun_item2_desc": "Solenne liturgia eucaristica comunitaria presieduta da Padre Nicolae Pușcașu con predicazione della Parola di Dio.",
    "schedule.sun_item3_title": "12:30 — Agape Fraterna & Incontro Comunitario",
    "schedule.sun_item3_desc": "Momento di fraternità e condivisione tra famiglie, accoglienza dei fedeli e scuola domenicale per bambini.",
    "schedule.sat_badge": "OGNI SABATO",
    "schedule.sat_title": "Sabato: Liturgia & Confessioni",
    "schedule.sat_morning_title": "09:30 — Santa Liturgia & Commemorazione dei Defunti (Parastas)",
    "schedule.sat_morning_desc": "Celebrazione eucaristica mattutina del sabato con le preghiere di suffragio per tutti i nostri cari defunti.",
    "schedule.sat_afternoon_title": "16:30 – 18:30 — Sante Confessioni & Colloquio Spirituale",
    "schedule.sat_afternoon_desc": "Disponibilità di Padre Nicolae in chiesa per le confessioni individuali e la direzione spirituale (su richiesta dei fedeli).",
    "schedule.sat_item1_title": "09:30 — Santa Liturgia & Parastas",
    "schedule.sat_item1_desc": "Celebrazione eucaristica del sabato e preghiere di suffragio per i defunti.",
    "schedule.sat_item2_title": "16:30 – 18:30 — Sante Confessioni",
    "schedule.sat_item2_desc": "Disponibilità per il sacramento della confessione e colloquio spirituale (su richiesta).",
    "schedule.sat_item3_badge": "Su richiesta",
    "schedule.sat_item3_title": "Necessità Pastorali dei Fedeli",
    "schedule.sat_item3_desc": "Incontri pastorali, preghiere speciali e benedizioni su accordo con Padre Nicolae.",
    "schedule.wed_badge": "OGNI MERCOLEDÌ",
    "schedule.wed_title": "Mercoledì Sera: Preghiere & Acatisto",
    "schedule.wed_item1_title": "19:30 – 20:30 (fino alle 21:00)",
    "schedule.wed_item1_desc": "Preghiere della Sera, Inno Acatisto al Santo Patrono e momento di approfondimento spirituale con i fedeli.",
    "schedule.pastoral_tag": "Cura Pastorale di Padre Nicolae Pușcașu",
    "schedule.pastoral_title": "I Santi Sacramenti & La Guida Spirituale",
    "schedule.pastoral_text": "<strong>Padre Nicolae Pușcașu</strong> è a disposizione per la celebrazione del <strong>Santo Battesimo</strong>, del <strong>Sacramento del Matrimonio (Incoronazione)</strong>, per la visita e l'unzione dei malati, la benedizione delle case e per qualunque necessità spirituale personale o familiare.",
    "schedule.pastoral_phone_btn": "<i class=\"fa-solid fa-phone\"></i> Chiama Padre Nicolae (+39 328 428 2810)",
    "schedule.pastoral_btn": "<i class=\"fa-solid fa-envelope\"></i> Scrivi a Padre Nicolae (fossano@dor-italia.it)",
    "priest.hero_badge": "<i class=\"fa-solid fa-church\"></i> Parrocchia Ortodossa Romena · Fossano/Mondovì",
    "priest.hero_title": "Parola Della Parrocchia",
    "priest.hero_subtitle": "Omelie, il Santo del Giorno, avvisi comunitari e riflessioni spirituali della Parrocchia Ortodossa Romena Fossano/Mondovì",
    "priest.filter_all": "Tutti i Messaggi",
    "priest.filter_homilies": "<i class=\"fa-solid fa-book-bible\"></i> Omelie",
    "priest.filter_notices": "<i class=\"fa-solid fa-bullhorn\"></i> Avvisi",
    "priest.filter_saint": "<i class=\"fa-solid fa-star-of-david\"></i> Santo del Giorno",
    "priest.filter_thought": "<i class=\"fa-solid fa-quote-left\"></i> Parola del Giorno",
    "priest.filter_letters": "<i class=\"fa-solid fa-envelope-open-text\"></i> Lettere Pastorali",
    "priest.filter_reflections": "<i class=\"fa-solid fa-dove\"></i> Riflessioni",
    "priest.login_btn": "<i class=\"fa-solid fa-key\"></i> Accesso Redazione / Parroco",
    "priest.logged_as": "<i class=\"fa-solid fa-cross\"></i> Redazione Connessa",
    "priest.write_btn": "<i class=\"fa-solid fa-pen-nib\"></i> Nuovo Messaggio",
    "priest.logout_btn": "<i class=\"fa-solid fa-right-from-bracket\"></i> Esci",
    "priest.empty_title": "Nessun messaggio presente",
    "priest.empty_desc": "Al momento non ci sono messaggi pubblicati in questa categoria.",
    "priest.login_modal_title": "Accesso Redazione & Parroco",
    "priest.login_modal_desc": "Accedi con la tua email e password autorizzata per pubblicare e gestire omelie, avvisi e il santo del giorno.",
    "priest.email_label": "Email Parroco / Redazione *",
    "priest.password_label": "Password Segreta *",
    "priest.remember_label": "Ricorda l'accesso su questo dispositivo",
    "priest.cancel_btn": "Annulla",
    "priest.verify_btn": "<i class=\"fa-solid fa-right-to-bracket\"></i> Accedi",
    "priest.write_modal_title": "Pubblica un Messaggio o Omelia",
    "priest.write_modal_desc": "Il messaggio verrà salvato nel database della parrocchia e sarà visibile immediatamente ai fedeli.",
    "priest.title_label": "Titolo del Messaggio / Notizia *",
    "priest.title_placeholder": "Es. Santo del Giorno: Vita e testimonianza / Omelia Domenicale...",
    "priest.cat_label": "Tipologia di Messaggio",
    "priest.cat_homily": "Omelia Domenicale / Festiva",
    "priest.cat_saint": "Santo del Giorno (Ortodosso / Concelebrato)",
    "priest.cat_thought": "Frase o Versetto del Giorno",
    "priest.cat_letter": "Lettera Pastorale",
    "priest.cat_reflection": "Riflessione Spirituale",
    "priest.cat_notice": "Avviso Parrocchiale",
    "priest.author_label": "Firma Autore / Sacerdote",
    "priest.content_label": "Testo del Messaggio *",
    "priest.content_placeholder": "Scrivi qui il testo (per il Santo del Giorno: 10-15 frasi su nascita, vita, morte e se celebrato da entrambe le Chiese)...",
    "priest.publish_btn": "<i class=\"fa-solid fa-cloud-arrow-up\"></i> Pubblica Messaggio",
    "gallery.hero_badge": "<i class=\"fa-solid fa-church\"></i> Parrocchia Ortodossa Romena · Fossano/Mondovì",
    "gallery.hero_title": "Galleria Sacra & Vita Comunitaria",
    "gallery.hero_subtitle": "Le sante icone dei patroni, la tradizione liturgica e i momenti di comunione della parrocchia",
    "gallery.section_tag": "Iconografia & Vita della Chiesa",
    "gallery.section_title": "Finestre sull'Eterno & Gioia Condivisa",
    "gallery.section_desc": "Nella tradizione ortodossa l'icona è presenza spirituale e finestra sul Regno di Dio, mentre la vita di comunità testimonia l'amore e la fratellanza cristiana.",
    "gallery.card1_title": "L'Iconostasi",
    "gallery.card1_desc": "La parete sacra che unisce il Santuario all'assemblea, ornata con le icone del Signore, della Madre di Dio e dei santi protettori.",
    "gallery.card2_title": "San Giacomo di Putna (15 Maggio)",
    "gallery.card2_desc": "L'icona del santo metropolita patrono della nostra parrocchia, instancabile protettore dei bisognosi e maestro di preghiera.",
    "gallery.card_antonio_title": "Sant'Antonio il Grande (17 Gennaio)",
    "gallery.card_antonio_desc": "L'icona del patriarca dell'ascesi e della preghiera monastica nel deserto, celeste protettore della parrocchia amato in tutta la cristianità.",
    "gallery.card3_title": "Nostro Signore Gesù Cristo Salvatore",
    "gallery.card3_desc": "L'icona sacra del Salvatore del mondo, Re dei re e fonte di luce eterna, misericordia e speranza per ogni fedele.",
    "gallery.card4_title": "La Santissima Madre di Dio con il Bambino Gesù",
    "gallery.card4_desc": "L'icona della Santissima Vergine Maria, Madre di Dio, celeste protettrice delle famiglie e instancabile intercessore dinanzi al trono di Suo Figlio.",
    "gallery.card5_title": "Sede Parrocchiale di Fossano",
    "gallery.card5_desc": "Il luogo sacro che attualmente accoglie i fedeli per le funzioni liturgiche in Via Craveri 93, in attesa della futura sede definitiva.",
    "gallery.card_community_title": "La Comunità & L'Agape Fraterna",
    "gallery.card_community_desc": "I momenti vissuti insieme con famiglie, giovani e bambini durante le feste patronali e i banchetti domenicali di agape fraterna.",
    "gallery.card6_title": "Il Canto Bizantino",
    "gallery.card6_desc": "La preghiera salmodiata che eleva l'assemblea durante la Divina Liturgia, secondo l'antica e solenne armonia dell'Oriente cristiano.",
    "notices.hero_badge": "<i class=\"fa-solid fa-church\"></i> Parrocchia Ortodossa Romena · Fossano/Mondovì",
    "notices.hero_title": "Avvisi, Feste Patronali & Vita Parrocchiale",
    "notices.hero_subtitle": "Le celebrazioni dei santi patroni, gli appuntamenti della comunità e il cammino della parrocchia",
    "notices.hram_badge": "FESTA PATRONALE",
    "notices.hram_cal": "<i class=\"fa-regular fa-calendar\"></i> Calendario Parrocchiale",
    "notices.hram_loc": "<i class=\"fa-solid fa-location-dot\"></i> Sede Parrocchiale, Fossano",
    "notices.hram_open": "<i class=\"fa-solid fa-users\"></i> Aperto a tutti i fedeli",
    "notices.hram_title": "Feste Patronali della Nostra Parrocchia (Hram)",
    "notices.hram_text": "La nostra parrocchia festeggia solennemente due grandi santi patroni: San Giacomo di Putna (15 Maggio) e Sant'Antonio il Grande (17 Gennaio).",
    "notices.hram_iacob_badge": "15 MAGGIO",
    "notices.hram_iacob_title": "Memoria di San Giacomo di Putna (Hramul Parohiei)",
    "notices.hram_iacob_text": "Festa parrocchiale primaverile in onore di San Giacomo di Putna. Celebrazione solenne della Divina Liturgia con sacerdoti concelebranti e agape fraterna con tutte le famiglie.",
    "notices.hram_antonio_badge": "17 GENNAIO",
    "notices.hram_antonio_title": "Solennità di Sant'Antonio il Grande (Hramul de Iarnă)",
    "notices.hram_antonio_text": "Festa patronale invernale di Sant'Antonio il Grande (Abate). Celebrazione della Santa Liturgia, benedizione solenne e preghiere di intercessione per la parrocchia.",
    "notices.relocation_badge": "PROGETTO NUOVA SEDE & RACCOLTA FONDI",
    "notices.relocation_title": "Cammino Verso la Sede Definitiva della Parrocchia",
    "notices.relocation_text": "Informiamo tutta la comunità che è attivo il percorso di raccolta fondi per la nuova chiesa di Fossano/Mondovì. Il luogo preciso del trasloco verrà stabilito e annunciato ufficialmente al completamento del finanziamento. Nel frattempo, tutte le celebrazioni e le attività pastorali proseguono regolarmente nell'attuale sede parrocchiale di Via Craveri 93 a Fossano.",
    "notices.relocation_donate_btn": "<i class=\"fa-solid fa-hand-holding-heart\"></i> Sostieni la Nuova Chiesa con una Donazione",
    "notices.section_tag": "Comunicazioni Pastorali",
    "notices.section_title": "Attività, Catechesi & Incontri",
    "notices.card1_title": "Scuola Domenicale per Bambini",
    "notices.card1_text": "Ogni domenica dopo la Divina Liturgia si tengono incontri di catechismo, lingua, canto e tradizione per bambini e ragazzi della comunità.",
    "notices.card1_time": "<i class=\"fa-regular fa-clock\"></i> Tutte le domeniche alle ore 12:45",
    "notices.card2_title": "I Grandi Digiuni della Chiesa",
    "notices.card2_text": "Nei periodi dei grandi digiuni (Quaresima, Natività, Dormizione, Apostoli), Padre Nicolae Pușcașu è disponibile per confessioni e colloqui anche nei giorni infrasettimanali.",
    "notices.card2_time": "<i class=\"fa-solid fa-cross\"></i> Su appuntamento con Padre Nicolae",
    "notices.card3_title": "Raccolta Solidale & Caritas Parrocchiale",
    "notices.card3_text": "Raccogliamo beni di prima necessità e generi alimentari non deperibili per sostenere le famiglie bisognose del territorio di Fossano e Mondovì.",
    "notices.card3_time": "<i class=\"fa-solid fa-heart\"></i> Raccolta attiva presso la chiesa",
    "notices.card4_title": "Fondo Nuova Chiesa & Offerte",
    "notices.card4_text": "Ringraziamo di cuore tutti i fedeli, le famiglie e i benefattori che contribuiscono alla raccolta fondi per la futura chiesa e per le necessità del culto.",
    "notices.card4_time": "<i class=\"fa-solid fa-hand-holding-hand\"></i> Info e coordinate presso il parroco",
    "contact.hero_badge": "<i class=\"fa-solid fa-church\"></i> Parrocchia Ortodossa Romena · Fossano/Mondovì",
    "contact.hero_title": "Dove Trovarci, Contatti & Donazioni",
    "contact.hero_subtitle": "Parrocchia Ortodossa Romena Fossano/Mondovì · Santi Giacomo di Putna e Antonio il Grande",
    "contact.card1_title": "La Parrocchia & I Recapiti Ufficiali",
    "contact.church_name": "Parrocchia Ortodossa Romena Fossano/Mondovì",
    "contact.church_street": "Via Craveri 93 (Sede attuale in attesa della sede definitiva)",
    "contact.church_city": "12045 Fossano (CN) — Piemonte, Italia",
    "contact.action_maps": "Apri Maps",
    "contact.pastoral_title": "Contatti & Cura Pastorale",
    "contact.priest_label": "Padre Nicolae Pușcașu (Parroco):",
    "contact.priest_desc": "Disponibile in chiesa prima e dopo le liturgie, per confessioni, benedizioni e colloqui spirituali su richiesta dei fedeli.",
    "contact.phone_label": "Telefono / WhatsApp (Padre Nicolae):",
    "contact.phone_call_btn": "<i class=\"fa-solid fa-phone\"></i> Chiama: +39 328 428 2810",
    "contact.email_label": "Email Ufficiale della Parrocchia:",
    "contact.sacraments_label": "Santi Sacramenti & Urgenze Pastorali:",
    "contact.sacraments_desc": "Per battesimi, matrimoni, benedizione delle case, unzione degli infermi o per parlare con Padre Nicolae, chiamare o scrivere al <a href=\"tel:+393284282810\" style=\"color: var(--accent-gold); font-weight: 700; text-decoration: underline;\">+39 328 428 2810</a> oppure via email a <a href=\"mailto:fossano@dor-italia.it\" style=\"color: var(--accent-gold); font-weight: 700; text-decoration: underline;\">fossano@dor-italia.it</a>.",
    "contact.write_btn": "<i class=\"fa-solid fa-paper-plane\"></i> Scrivi a: fossano@dor-italia.it",
    "contact.directions_title": "Come Raggiungerci",
    "contact.by_car_label": "<i class=\"fa-solid fa-car\" style=\"color: var(--accent-gold);\"></i> In Automobile:",
    "contact.by_car_desc": "La sede parrocchiale si trova nel centro di Fossano in Via Craveri 93. Sono presenti comodi parcheggi nelle immediate vicinanze.",
    "contact.by_train_label": "<i class=\"fa-solid fa-train\" style=\"color: var(--accent-gold);\"></i> In Treno:",
    "contact.by_train_desc": "La Stazione di Fossano dista 10-15 minuti a piedi, con frequenti collegamenti diretti da Torino, Cuneo, Mondovì e Savona.",
    "contact.welcome_label": "<i class=\"fa-solid fa-hands-holding-circle\" style=\"color: var(--accent-gold);\"></i> Accoglienza Pastorale:",
    "contact.welcome_desc": "Chiunque visiti la nostra parrocchia è accolto con gioia fraterna. Al termine della Divina Liturgia, Padre Nicolae è sempre disponibile per un saluto o una benedizione.",
    "contact.map_title": "Posizione della Sede Parrocchiale",
    "contact.map_btn": "<i class=\"fa-solid fa-arrow-up-right-from-square\"></i> Apri su Google Maps",
    "contact.donations_tag": "DONAZIONI & SOSTEGNO",
    "contact.donations_title": "Sostegno al Progetto Nuova Chiesa & Donazioni",
    "contact.donations_desc": "Per contribuire alla raccolta fondi destinata all'individuazione, al trasloco e al restauro della futura sede parrocchiale di Fossano/Mondovì, privati ed enti possono effettuare erogazioni liberali.",
    "contact.donations_iban_title": "Coordinate Bancarie & Erogazioni Liberali",
    "contact.donations_iban_note": "I dettagli bancari (IBAN parrocchiale) possono essere richiesti direttamente a Padre Nicolae chiamando il <a href=\"tel:+393284282810\" style=\"color: var(--accent-gold); font-weight: 700; text-decoration: underline;\"><strong>+39 328 428 2810</strong></a> o inviando un'email a: <a href=\"mailto:fossano@dor-italia.it\" style=\"color: var(--accent-gold); font-weight: 700; text-decoration: underline;\"><strong>fossano@dor-italia.it</strong></a> con causale: <em>\"Erogazione liberale per progetto nuova sede Parrocchia Ortodossa Fossano/Mondovì\"</em>.",
    "contact.donations_candles_title": "Offerta per le Candele e il Culto",
    "contact.donations_candles_desc": "È sempre possibile lasciare la propria offerta per le candele e le necessità della chiesa durante le funzioni liturgiche.",
    "footer.address": "<a href=\"https://www.google.com/maps/search/?api=1&query=Via+Craveri+93+12045+Fossano+CN\" target=\"_blank\" rel=\"noopener\" style=\"color: inherit; text-decoration: none;\"><i class=\"fa-solid fa-location-dot\" style=\"color: var(--accent-gold); margin-right: 6px;\"></i> Via Craveri 93, 12045 Fossano (CN)</a>"
},

  ro: {
    "brand.title": "Parohia Ortodoxă Română",
    "brand.subtitle": "Fossano/Mondovì",
    "nav.home": "Acasă",
    "nav.about": "Despre Noi",
    "nav.schedule": "<i class=\"fa-solid fa-church\"></i> Program Slujbe",
    "nav.priest": "Cuvântul Parohiei",
    "nav.gallery": "Galerie",
    "nav.notices": "Anunțuri",
    "nav.contact": "Contact",
    "nav.theme_toggle": "Schimbă tema (Luminos / Întunecat)",
    "nav.lang_toggle": "Schimbă limba (Italiană / Română)",
    "index.title": "Parohia Ortodoxă Română Fossano/Mondovì | Sf. Ierarh Iacob Putneanul și Sf. Antonie cel Mare",
    "about.title": "Despre Noi | Parohia Ortodoxă Română Fossano/Mondovì",
    "schedule.title": "Programul Sfintelor Slujbe | Parohia Ortodoxă Română Fossano/Mondovì",
    "priest.title": "Cuvântul Parohiei | Parohia Ortodoxă Română Fossano/Mondovì",
    "gallery.title": "Galeria Sfântă & Icoane | Parohia Ortodoxă Română Fossano/Mondovì",
    "notices.title": "Anunțuri Parohiale | Parohia Ortodoxă Română Fossano/Mondovì",
    "contact.title": "Unde Ne Găsiți & Contact | Parohia Ortodoxă Română Fossano/Mondovì",
    "footer.brand": "Parohia Ortodoxă Română Fossano/Mondovì",
    "footer.desc": "<strong>Parohia Ortodoxă Română Fossano/Mondovì</strong><br>Sub ocrotirea duhovnicească a <strong>Sfântului Ierarh Iacob Putneanul</strong> (15 Mai) și a <strong>Sfântului Antonie cel Mare</strong> (17 Ianuarie).<br>Păstorire: <strong>Pr. Nicolae Pușcașu</strong>. Sediu actual: Via Craveri 93, 12045 Fossano (CN). În campanie de strângere de fonduri pentru viitorul lăcaș definitiv.",
    "footer.canonical": "În comuniune canonică cu Episcopia Ortodoxă Română a Italiei.",
    "footer.heading_pages": "Pagini",
    "footer.heading_contact": "Contact",
    "footer.rights": "© <span id=\"year\"></span> Parohia Ortodoxă Română Fossano/Mondovì. Toate drepturile rezervate.",
    "footer.tradition": "Cu respectarea sfintei tradiții liturgice ortodoxe.",
    "home.hero_badge": "<i class=\"fa-solid fa-church\"></i> Parohia Ortodoxă Română · Fossano/Mondovì",
    "home.hero_patrons_pill": "<span class=\"patron-pill\"><i class=\"fa-solid fa-person-praying\" style=\"color: var(--accent-gold); margin-right: 5px;\"></i> <strong>Sf. Ierarh Iacob Putneanul</strong> (15 Mai)</span> <span style=\"opacity:0.4; margin: 0 6px;\">✦</span> <span class=\"patron-pill\"><i class=\"fa-solid fa-cross\" style=\"color: var(--accent-gold); margin-right: 5px;\"></i> <strong>Sf. Antonie cel Mare</strong> (17 Ianuarie)</span>",
    "home.hero_title": "Parohia Ortodoxă Română Fossano/Mondovì",
    "home.hero_subtitle": "Sub cereasca ocrotire a Sfântului Ierarh Iacob Putneanul și a Sfântului Antonie cel Mare",
    "home.hero_text": "Bine ați venit în căminul duhovnicesc al comunității noastre pentru Fossano, Mondovì și zonele învecinate: un lăcaș de rugăciune, călăuzire pastorală a părintelui Nicolae Pușcașu, săvârșire a Sfintelor Taine și dragoste frățească.",
    "home.next_liturgy_prefix": "Următoarea Slujbă:",
    "home.next_liturgy_default": "Duminică la ora 10:00 — Sfânta Liturghie",
    "home.btn_schedule": "<i class=\"fa-solid fa-calendar-days\"></i> Programul Slujbelor",
    "home.btn_contact": "<i class=\"fa-solid fa-location-dot\"></i> Unde Ne Găsiți & Contact",
    "home.verse_text": "\"Veniți la Mine toți cei osteniți și împovărați și Eu vă voi odihni pe voi.\"",
    "home.verse_ref": "— Evanghelia după Matei 11, 28",
    "home.section_tag": "Viața Parohiei",
    "home.section_title": "Comunitatea Noastră & Păstorirea Duhovnicească",
    "home.card1_title": "Comunitatea Parohială",
    "home.card1_text": "Găzduită în sediul din <strong>Via Craveri 93</strong> din Fossano cu campanie deschisă de fonduri pentru sediul definitiv: un spațiu de reculegere, cinstire a sfintelor icoane și pace sufletească.",
    "home.card1_link": "Află mai multe despre parohie <i class=\"fa-solid fa-arrow-right\"></i>",
    "home.card2_title": "Părintele Nicolae Pușcașu",
    "home.card2_text": "Preotul paroh este alături de credincioși și familii pentru Taina Spovedaniei, Sfintele Taine (Botezuri, Nunți), sfințirea caselor și îndrumare duhovnicească.",
    "home.card2_link": "Contactează preotul <i class=\"fa-solid fa-arrow-right\"></i>",
    "home.card3_title": "Slujbe & Viață Duhovnicească",
    "home.card3_text": "Săvârșim Sfânta Liturghie duminică dimineața la 10:00, sâmbătă dimineața la 09:30 (cu parastas) și rugăciunile de seară cu Acatist miercuri la 19:30.",
    "home.card3_link": "Vezi programul complet <i class=\"fa-solid fa-arrow-right\"></i>",
    "home.patrons_tag": "Sfinții Ocrotitori",
    "home.patrons_title": "Sfinții Ierarh Iacob Putneanul și Antonie cel Mare",
    "home.patrons_desc": "Parohia noastră este așezată sub cereasca ocrotire a doi mari luminători ai credinței ortodoxe:",
    "home.patron_iacob_title": "Sfântul Ierarh Iacob Putneanul (15 Mai)",
    "home.patron_iacob_desc": "Mitropolit al Moldovei, luminător al credinței, sprijinitor al școlilor populare și părinte al orfanilor și nevoiașilor. Pildă de jertfă pastorală.",
    "home.patron_antonio_title": "Sfântul Antonie cel Mare (17 Ianuarie)",
    "home.patron_antonio_desc": "Părintele monahismului creștin și dascăl neîntrecut al rugăciunii în pustie. Pildă vie de biruință duhovnicească, iubit și cinstit în toată creștinătatea.",
    "home.troparion_tag": "Imn Liturgic",
    "home.troparion_title": "Troparul Sfântului Ierarh Iacob Putneanul",
    "home.troparion_text": "\"Păstor înțelept și apărător al credinței arătându-te, Sfinte Ierarhe Iacob, turma ta ai povățuit-o pe cărările mântuirii și pe cei sărmani i-ai miluit. Roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.\"",
    "home.troparion_antonio_title": "Troparul Sfântului Antonie cel Mare",
    "home.troparion_antonio_text": "\"Locuitor al pustiului și înger în trup, de minuni făcător te-ai arătat, de Dumnezeu purtătorule, Părintele nostru Antonie. Cu postul, cu privegherea, cu rugăciunea, cerești daruri luând, vindeci pe cei bolnavi. Slavă Celui ce ți-a dat ție putere!\"",
    "home.donations_tag": "PROIECT NOU LĂCAȘ & STRÂNGERE DE FONDURI",
    "home.donations_title": "Proiectul Noii Biserici: În Drum Împreună",
    "home.donations_subtitle": "Campania de fonduri este deschisă: un ajutor concret pentru viitoarea biserică a comunității",
    "home.donations_text": "Pentru a oferi un cămin duhovnicesc definitiv parohiei noastre și a primi cu demnitate credincioșii, familiile și pelerinii din Fossano și Mondovì, comunitatea a lansat o strângere de fonduri dedicată. Locația precisă a noului lăcaș va fi stabilită și comunicată oficial de îndată ce finanțarea va fi completată. Orice sprijin din partea credincioșilor, a binefăcătorilor sau a entităților private este o mare binecuvântare pentru viitorul comunității noastre.",
    "home.donations_btn": "<i class=\"fa-solid fa-hand-holding-heart\"></i> Detalii Donații & Strângere de Fonduri",
    "home.news_tag": "Cuvântul Parohiei",
    "home.news_title": "Mesaje, Omilii & Anunțuri ale Parohiei",
    "home.news_loading": "Se încarcă mesajele și anunțurile parohiale din Google Fogli...",
    "home.news_empty_title": "Avizierul Comunității Parohiale",
    "home.news_empty_text": "În această secțiune sunt publicate mesajele oficiale, omiliile duminicale, Sfântul Zilei și anunțurile Parohiei Ortodoxe Române Fossano/Mondovì.",
    "home.news_empty_btn": "Vezi Cuvântul Parohiei <i class=\"fa-solid fa-arrow-right\"></i>",
    "home.news_read_more": "Citește întregul mesaj <i class=\"fa-solid fa-arrow-right\"></i>",
    "about.hero_badge": "<i class=\"fa-solid fa-church\"></i> Parohia Ortodoxă Română · Fossano/Mondovì",
    "about.hero_title": "Comunitatea Parohială & Credința",
    "about.hero_subtitle": "Parohia Ortodoxă Română Fossano/Mondovì, sub ocrotirea Sf. Ierarh Iacob Putneanul și a Sf. Antonie cel Mare",
    "about.card1_title": "Parohia & Credincioșii",
    "about.card1_p1": "<strong>Parohia Ortodoxă Română Fossano/Mondovì</strong> este vatra de rugăciune și călăuzire pentru toți credincioșii creștini ortodocși din Fossano, Mondovì, Savigliano, Saluzzo, Ceva și întreaga zonă a provinciei Cuneo.",
    "about.card1_p2": "Porțile comunității noastre sunt deschise tuturor celor care caută mângâierea rugăciunii curate, Sfintele Taine și frumusețea sfintei tradiții bizantine ortodoxe.",
    "about.card2_title": "Părintele Nicolae Pușcașu & Păstorirea",
    "about.card2_p1": "Grijă pastorală a comunității este încredințată <strong>Părintelui Nicolae Pușcașu</strong>, preot paroh dăruit slujirii credincioșilor și familiilor din parohie.",
    "about.card2_p2": "Părintele Nicolae săvârșește cu evlavie sfintele slujbe, ascultă mărturisirile credincioșilor, săvârșește sfințirea caselor și este pururea alături de nevoile sufletești ale comunității.",
    "about.card2_btn_priest": "<i class=\"fa-solid fa-feather-pointed\"></i> Cuvântul Parohiei",
    "about.card2_btn_contact": "<i class=\"fa-solid fa-envelope\"></i> Contactează Preotul",
    "about.church_tag": "Drumul Nostru & Lăcașul Sfânt",
    "about.church_title": "Sediul Actual & Proiectul Noii Biserici Definitive",
    "about.church_p1": "În prezent, sfintele slujbe se oficiază la adresa din <strong>Via Craveri 93</strong> din centrul orașului Fossano. Am pornit pe un drum esențial: o campanie de strângere de fonduri pentru găsirea, amenajarea și restaurarea unui lăcaș definitiv pentru credincioșii din Fossano, Mondovì și împrejurimi. Locația exactă va fi anunțată de îndată ce finanțarea va fi completată.",
    "about.church_p2": "Păstrăm cu evlavie rânduiala ortodoxă, cu iconostasul și sfintele icoane, îndreptând rugăciunea spre Dumnezeu și spre ocrotitorii noștri cerești în pace și lumină.",
    "about.church_p3": "Fiecare pelerin și oaspete este primit cu dragoste creștinească: un loc unde poți aprinde o lumânare, te poți ruga în tăcere și poți lua parte la rugăciunea obștească.",
    "about.patrons_tag": "Ocrotitorii Noștri Cerești",
    "about.patrons_title": "Sfântul Ierarh Iacob Putneanul & Sfântul Antonie cel Mare",
    "about.patron_title": "Sfinții Ocrotitori: Sfântul Iacob Putneanul & Sfântul Antonie cel Mare",
    "about.patron_text": "Parohia se bucură de dubla ocrotire a doi mari sfinți: <strong>Sfântul Ierarh Iacob Putneanul</strong> (15 mai), mare mitropolit și sprijinitor al celor necăjiți, și <strong>Sfântul Antonie cel Mare</strong> (17 ianuarie), părintele pustiei și învățător al rugăciunii, cinstit în întreaga lume creștină.",
    "about.pillars_tag": "Viața Bisericii",
    "about.pillars_title": "Pilonii Parohiei Noastre",
    "about.pillar1_title": "Liturghie & Rugăciune Neîncetată",
    "about.pillar1_text": "Sfânta Liturghie duminicală și de sărbători, spovedania deasă și pravila rugăciunii alcătuiesc inima vieții noastre parohiale.",
    "about.pillar2_title": "Tradiție Ortodoxă & Sfintele Icoane",
    "about.pillar2_text": "Fidelitatea față de învățătura Sfinților Părinți ai Bisericii, cinstirea sfintelor icoane și serbarea marilor praznice creștine.",
    "about.pillar3_title": "Frățietate & Solidaritate Activă",
    "about.pillar3_text": "Grija față de cei aflați în nevoi, primirea călduroasă a noilor familii, cateheza copiilor și sprijinul reciproc în viața de zi cu zi.",
    "about.canonical_note": "Parohia Ortodoxă Română Fossano/Mondovì funcționează în deplină comuniune canonică cu Episcopia Ortodoxă Română a Italiei.",
    "schedule.hero_badge": "<i class=\"fa-solid fa-church\"></i> Parohia Ortodoxă Română · Fossano/Mondovì",
    "schedule.hero_title": "Programul Sfintelor Slujbe",
    "schedule.hero_subtitle": "Slujbe liturgice, momente de rugăciune și asistență pastorală a Părintelui Paroh",
    "schedule.sun_badge": "ÎN FIECARE DUMINICĂ",
    "schedule.sun_title": "Duminică: Ziua Domnului",
    "schedule.sun_item1_title": "09:00 — Utrenia",
    "schedule.sun_item1_desc": "Rugăciunea de dimineață, citirea psalmilor și rânduiala de pregătire pentru Sfânta Liturghie.",
    "schedule.sun_item2_title": "10:00 — Sfânta și Dumnezeiasca Liturghie & Predica",
    "schedule.sun_item2_desc": "Sfânta Liturghie de sărbătoare a comunității oficiată de Pr. Nicolae Pușcașu și cuvântul de învățătură.",
    "schedule.sun_item3_title": "12:30 — Agapa Frățească & Comuniune",
    "schedule.sun_item3_desc": "Timp de comuniune între familii, primirea noilor credincioși și școala duminicală pentru copii.",
    "schedule.sat_badge": "ÎN FIECARE SÂMBĂTĂ",
    "schedule.sat_title": "Sâmbătă: Sfânta Liturghie & Spovedanii",
    "schedule.sat_morning_title": "09:30 — Sfânta Liturghie & Pomenirea Morților (Parastas)",
    "schedule.sat_morning_desc": "Sfânta Liturghie de sâmbătă dimineața urmată de rânduiala parastasului pentru cei adormiți.",
    "schedule.sat_afternoon_title": "16:30 – 18:30 — Sfintele Spovedanii & Convorbiri Duhovnicești",
    "schedule.sat_afternoon_desc": "Timp dedicat spovedaniei individuale și sfătuirii duhovnicești cu părintele paroh (la cererea credincioșilor).",
    "schedule.sat_item1_title": "09:30 — Sfânta Liturghie & Parastas",
    "schedule.sat_item1_desc": "Sfânta Liturghie de sâmbătă și pomenirea celor adormiți.",
    "schedule.sat_item2_title": "16:30 – 18:30 — Sfintele Spovedanii",
    "schedule.sat_item2_desc": "Timp dedicat tainei spovedaniei și convorbirilor duhovnicești (la cerere).",
    "schedule.sat_item3_badge": "La cerere",
    "schedule.sat_item3_title": "Nevoi Pastorale ale Credincioșilor",
    "schedule.sat_item3_desc": "Rugăciuni de binecuvântare și întâlniri duhovnicești stabilite cu preotul paroh.",
    "schedule.wed_badge": "ÎN FIECARE MIERCURI",
    "schedule.wed_title": "Miercuri Seara: Rugăciuni & Acatist",
    "schedule.wed_item1_title": "19:30 – 20:30 (până la 21:00)",
    "schedule.wed_item1_desc": "Rugăciunile de seară, Acatistul Sfântului Ocrotitor și dialog duhovnicesc de cateheză cu credincioșii.",
    "schedule.pastoral_tag": "Păstorirea Părintelui Nicolae Pușcașu",
    "schedule.pastoral_title": "Sfintele Taine & Călăuzirea Duhovnicească",
    "schedule.pastoral_text": "<strong>Părintele Nicolae Pușcașu</strong> este la dispoziția credincioșilor pentru săvârșirea <strong>Sfântului Botez</strong>, a <strong>Tainei Cununiei</strong>, pentru cercetarea și ungerea bolnavilor, sfințirea caselor și orice nevoie duhovnicească personală sau familială.",
    "schedule.pastoral_phone_btn": "<i class=\"fa-solid fa-phone\"></i> Sună Părintele Nicolae (+39 328 428 2810)",
    "schedule.pastoral_btn": "<i class=\"fa-solid fa-envelope\"></i> Scrie Părintelui Nicolae (fossano@dor-italia.it)",
    "priest.hero_badge": "<i class=\"fa-solid fa-church\"></i> Parohia Ortodoxă Română · Fossano/Mondovì",
    "priest.hero_title": "Cuvântul Parohiei",
    "priest.hero_subtitle": "Omilii, Sfântul Zilei, anunțuri comunitare și povățuiri duhovnicești ale Parohiei Ortodoxe Române Fossano/Mondovì",
    "priest.filter_all": "Toate Mesajele",
    "priest.filter_homilies": "<i class=\"fa-solid fa-book-bible\"></i> Omilii",
    "priest.filter_notices": "<i class=\"fa-solid fa-bullhorn\"></i> Anunțuri",
    "priest.filter_saint": "<i class=\"fa-solid fa-star-of-david\"></i> Sfântul Zilei",
    "priest.filter_thought": "<i class=\"fa-solid fa-quote-left\"></i> Cuvântul Zilei",
    "priest.filter_letters": "<i class=\"fa-solid fa-envelope-open-text\"></i> Scrisori Pastorale",
    "priest.filter_reflections": "<i class=\"fa-solid fa-dove\"></i> Reflecții",
    "priest.login_btn": "<i class=\"fa-solid fa-key\"></i> Autentificare Redacție / Preot",
    "priest.logged_as": "<i class=\"fa-solid fa-cross\"></i> Redacție Conectată",
    "priest.write_btn": "<i class=\"fa-solid fa-pen-nib\"></i> Mesaj Nou",
    "priest.logout_btn": "<i class=\"fa-solid fa-right-from-bracket\"></i> Ieșire",
    "priest.empty_title": "Niciun mesaj disponibil",
    "priest.empty_desc": "În acest moment nu există mesaje publicate în această categorie.",
    "priest.login_modal_title": "Autentificare Redacție & Preot",
    "priest.login_modal_desc": "Autentificați-vă cu adresa de email și parola autorizată pentru a publica sau gestiona omiliile, anunțurile și sfântul zilei.",
    "priest.email_label": "Email Preot / Redacție *",
    "priest.password_label": "Parolă Secretă *",
    "priest.remember_label": "Reține conectarea pe acest dispozitiv",
    "priest.cancel_btn": "Anulează",
    "priest.verify_btn": "<i class=\"fa-solid fa-right-to-bracket\"></i> Conectare",
    "priest.write_modal_title": "Publică un Mesaj sau Omilie",
    "priest.write_modal_desc": "Mesajul va fi salvat în baza de date a parohiei și va fi vizibil imediat credincioșilor.",
    "priest.title_label": "Titlul Mesajului / Știrii *",
    "priest.title_placeholder": "Ex: Sfântul Zilei: Viața și mărturia / Omilie Duminicală...",
    "priest.cat_label": "Categoria Mesajului",
    "priest.cat_homily": "Omilie Duminicală / de Sărbătoare",
    "priest.cat_saint": "Sfântul Zilei (Ortodox / Ecumenic)",
    "priest.cat_thought": "Cuvântul sau Versetul Zilei",
    "priest.cat_letter": "Scrisoare Pastorală",
    "priest.cat_reflection": "Reflecție Duhovnicească",
    "priest.cat_notice": "Anunț Parohial",
    "priest.author_label": "Semnătură Autor / Preot",
    "priest.content_label": "Textul Mesajului *",
    "priest.content_placeholder": "Scrieți textul (pentru Sfântul Zilei: 10-15 fraze despre naștere, viață, trecere la Domnul și dacă este cinstit de ambele Biserici)...",
    "priest.publish_btn": "<i class=\"fa-solid fa-cloud-arrow-up\"></i> Publică Mesajul",
    "gallery.hero_badge": "<i class=\"fa-solid fa-church\"></i> Parohia Ortodoxă Română · Fossano/Mondovì",
    "gallery.hero_title": "Galeria Sfântă & Viața Parohiei",
    "gallery.hero_subtitle": "Sfintele icoane ale ocrotitorilor, tradiția liturgică și bucuria comuniunii parohiale",
    "gallery.section_tag": "Iconografie & Viața Bisericii",
    "gallery.section_title": "Ferestre către Veșnicie & Bucurie Împărtășită",
    "gallery.section_desc": "În tradiția ortodoxă icoana este prezență harică și fereastră către Împărăția Cerurilor, iar viața de parohie mărturisește dragostea creștină.",
    "gallery.card1_title": "Iconostasul",
    "gallery.card1_desc": "Peretele sfânt care unește altarul cu naosul, împodobit cu icoanele Mântuitorului, Maicii Domnului și ale sfinților ocrotitori.",
    "gallery.card2_title": "Sfântul Ierarh Iacob Putneanul (15 Mai)",
    "gallery.card2_desc": "Icoana sfântului mitropolit ocrotitor al parohiei noastre, părinte al săracilor și dascăl al rugăciunii.",
    "gallery.card_antonio_title": "Sfântul Antonie cel Mare (17 Ianuarie)",
    "gallery.card_antonio_desc": "Icoana părintelui monahilor și a rugăciunii din pustie, ocrotitor ceresc cinstit în întreaga creștinătate.",
    "gallery.card3_title": "Mântuitorul Nostru Iisus Hristos",
    "gallery.card3_desc": "Icoana Domnului și Mântuitorului nostru Iisus Hristos, Biruitorul morții, Păstorul cel Bun și Lumina lumii care călăuzește credincioșii spre mântuire.",
    "gallery.card4_title": "Preasfânta Născătoare de Dumnezeu (Maica Domnului)",
    "gallery.card4_desc": "Icoana Preacuratei Maicii Domnului cu Pruncul Iisus, grabnic ajutătoare, ocrotitoarea caldă a familiilor și neobosita rugătoare înaintea Fiului Său.",
    "gallery.card5_title": "Sediul Parohial din Fossano",
    "gallery.card5_desc": "Locul de rugăciune din Via Craveri 93 care găzduiește comunitatea la sfintele slujbe, în așteptarea viitorului lăcaș definitiv.",
    "gallery.card_community_title": "Comunitatea & Agapa Frățească",
    "gallery.card_community_desc": "Momentele trăite împreună cu familiile, tinerii și copiii la hramurile parohiale și agapele duminicale.",
    "gallery.card6_title": "Cântarea Bizantină",
    "gallery.card6_desc": "Rugăciunea psalmodiată care înalță sufletele credincioșilor în timpul Sfintei Liturghii, fără instrumente muzicale.",
    "notices.hero_badge": "<i class=\"fa-solid fa-church\"></i> Parohia Ortodoxă Română · Fossano/Mondovì",
    "notices.hero_title": "Anunțuri, Hramuri & Viața Parohiei",
    "notices.hero_subtitle": "Sărbătorile sfinților ocrotitori, programul întâlnirilor și drumul parohiei noastre",
    "notices.hram_badge": "HRAMUL PAROHIEI",
    "notices.hram_cal": "<i class=\"fa-regular fa-calendar\"></i> Calendar Parohial",
    "notices.hram_loc": "<i class=\"fa-solid fa-location-dot\"></i> Sediul Parohial, Fossano",
    "notices.hram_open": "<i class=\"fa-solid fa-users\"></i> Deschis tuturor credincioșilor",
    "notices.hram_title": "Hramurile Parohiei Noastre",
    "notices.hram_text": "Parohia noastră cinstește cu aleasă evlavie doi mari sfinți ocrotitori: Sfântul Ierarh Iacob Putneanul (15 Mai) și Sfântul Antonie cel Mare (17 Ianuarie).",
    "notices.hram_iacob_badge": "15 MAI",
    "notices.hram_iacob_title": "Praznicul Sfântului Ierarh Iacob Putneanul (Hramul Parohiei)",
    "notices.hram_iacob_text": "Sărbătoarea de primăvară a comunității. Săvârșirea festivă a Sfintei Liturghii cu sobor de preoți și agapă frățească alături de familii.",
    "notices.hram_antonio_badge": "17 IANUARIE",
    "notices.hram_antonio_title": "Praznicul Sfântului Antonie cel Mare (Hramul de Iarnă)",
    "notices.hram_antonio_text": "Hramul de iarnă închinat Sfântului Antonie cel Mare. Sfânta Liturghie, rugăciuni de mijlocire și binecuvântarea credincioșilor.",
    "notices.relocation_badge": "PROIECT NOU LĂCAȘ & STRÂNGERE DE FONDURI",
    "notices.relocation_title": "Calea Către Sediul Definitiv al Parohiei",
    "notices.relocation_text": "Aducem la cunoștința comunității că este deschisă campania de strângere de fonduri pentru noua biserică din Fossano/Mondovì. Locul precis al mutării va fi stabilit și anunțat oficial la finalizarea fondurilor necesare. Până atunci, toate slujbele se oficiază neschimbat în actualul sediu din Via Craveri 93 din Fossano.",
    "notices.relocation_donate_btn": "<i class=\"fa-solid fa-hand-holding-heart\"></i> Susține Noua Biserică printr-o Donație",
    "notices.section_tag": "Comunicări Pastorale",
    "notices.section_title": "Activități, Cateheze & Întâlniri",
    "notices.card1_title": "Școala Duminicală pentru Copii",
    "notices.card1_text": "În fiecare duminică după Sfânta Liturghie se desfășoară ore de cateheză, limbă, cântec și tradiție pentru copiii și tinerii comunității.",
    "notices.card1_time": "<i class=\"fa-regular fa-clock\"></i> În fiecare duminică la ora 12:45",
    "notices.card2_title": "Marile Posturi ale Bisericii",
    "notices.card2_text": "În perioadele marilor posturi de peste an, Părintele Nicolae Pușcașu este la dispoziție pentru spovedanie și sfat duhovnicesc și în cursul săptămânii.",
    "notices.card2_time": "<i class=\"fa-solid fa-cross\"></i> Cu programare la Părintele Nicolae",
    "notices.card3_title": "Colecta Solidară & Caritas Parohial",
    "notices.card3_text": "Colectăm alimente neperisabile și bunuri de primă necesitate pentru sprijinirea familiilor aflate în dificultate din zonă.",
    "notices.card3_time": "<i class=\"fa-solid fa-heart\"></i> Colectă activă la biserică",
    "notices.card4_title": "Fondul Noii Biserici & Sprijin",
    "notices.card4_text": "Mulțumim din suflet credincioșilor și binefăcătorilor care contribuie la strângerea de fonduri pentru viitoarea biserică și pentru pangarul parohiei.",
    "notices.card4_time": "<i class=\"fa-solid fa-hand-holding-hand\"></i> Informații și detalii la preotul paroh",
    "contact.hero_badge": "<i class=\"fa-solid fa-church\"></i> Parohia Ortodoxă Română · Fossano/Mondovì",
    "contact.hero_title": "Unde Ne Găsiți, Contact & Donații",
    "contact.hero_subtitle": "Parohia Ortodoxă Română Fossano/Mondovì · Sf. Ierarh Iacob Putneanul și Sf. Antonie cel Mare",
    "contact.card1_title": "Parohia & Datele Oficiale de Contact",
    "contact.church_name": "Parohia Ortodoxă Română Fossano/Mondovì",
    "contact.church_street": "Via Craveri 93 (Sediu actual în așteptarea noului lăcaș definitiv)",
    "contact.church_city": "12045 Fossano (CN) — Piemont, Italia",
    "contact.action_maps": "Deschide Maps",
    "contact.pastoral_title": "Contact & Păstorire Duhovnicească",
    "contact.priest_label": "Părintele Nicolae Pușcașu (Preot Paroh):",
    "contact.priest_desc": "Disponibil la biserică înainte și după slujbe pentru spovedanie, binecuvântări și convorbiri duhovnicești la cererea credincioșilor.",
    "contact.phone_label": "Telefon / WhatsApp (Părintele Nicolae):",
    "contact.phone_call_btn": "<i class=\"fa-solid fa-phone\"></i> Sună: +39 328 428 2810",
    "contact.email_label": "Email Oficial al Parohiei:",
    "contact.sacraments_label": "Sfintele Taine & Urgențe Pastorale:",
    "contact.sacraments_desc": "Pentru botezuri, cununii, sfințirea caselor, cercetarea bolnavilor sau pentru a vorbi cu Părintele Nicolae, sunați sau scrieți la numărul <a href=\"tel:+393284282810\" style=\"color: var(--accent-gold); font-weight: 700; text-decoration: underline;\">+39 328 428 2810</a> ori prin email la <a href=\"mailto:fossano@dor-italia.it\" style=\"color: var(--accent-gold); font-weight: 700; text-decoration: underline;\">fossano@dor-italia.it</a>.",
    "contact.write_btn": "<i class=\"fa-solid fa-paper-plane\"></i> Scrie la: fossano@dor-italia.it",
    "contact.directions_title": "Cum Ajungeți la Noi",
    "contact.by_car_label": "<i class=\"fa-solid fa-car\" style=\"color: var(--accent-gold);\"></i> Cu Automobilul:",
    "contact.by_car_desc": "Sediul parohial se află în centrul istoric din Fossano pe Via Craveri 93. Există locuri de parcare în apropiere.",
    "contact.by_train_label": "<i class=\"fa-solid fa-train\" style=\"color: var(--accent-gold);\"></i> Cu Trenul:",
    "contact.by_train_desc": "Gara Feroviară Fossano se află la 10-15 minute de mers pe jos, cu legături directe din Torino, Cuneo, Mondovì și Savona.",
    "contact.welcome_label": "<i class=\"fa-solid fa-hands-holding-circle\" style=\"color: var(--accent-gold);\"></i> Primire Frățească:",
    "contact.welcome_desc": "Orice credincios sau oaspete este întâmpinat cu bucurie. La sfârșitul fiecărei Sfinte Liturghii, părintele paroh este disponibil pentru o binecuvântare.",
    "contact.map_title": "Amplasarea Sediului Parohial",
    "contact.map_btn": "<i class=\"fa-solid fa-arrow-up-right-from-square\"></i> Deschide în Google Maps",
    "contact.donations_tag": "DONAȚII & SPRIJIN",
    "contact.donations_title": "Susținerea Proiectului Noii Biserici & Donații",
    "contact.donations_desc": "Pentru susținerea fondului dedicat găsirii, mutării și restaurării viitorului lăcaș parohial din Fossano/Mondovì, persoanele fizice și asociațiile pot face donații.",
    "contact.donations_iban_title": "Cont Bancar & Donații Deductibile",
    "contact.donations_iban_note": "Datele contului bancar (IBAN parohial) pot fi solicitate direct Părintelui Nicolae sunând la <a href=\"tel:+393284282810\" style=\"color: var(--accent-gold); font-weight: 700; text-decoration: underline;\"><strong>+39 328 428 2810</strong></a> sau prin email la: <a href=\"mailto:fossano@dor-italia.it\" style=\"color: var(--accent-gold); font-weight: 700; text-decoration: underline;\"><strong>fossano@dor-italia.it</strong></a> cu mențiunea: <em>\"Donație pentru proiectul noii biserici a Parohiei Ortodoxe Fossano/Mondovì\"</em>.",
    "contact.donations_candles_title": "Contribuție pentru Lumânări și Cult",
    "contact.donations_candles_desc": "Fiecare credincios poate lăsa un prinos pentru lumânări și nevoile curente ale bisericii în timpul sfintelor slujbe.",
    "footer.address": "<a href=\"https://www.google.com/maps/search/?api=1&query=Via+Craveri+93+12045+Fossano+CN\" target=\"_blank\" rel=\"noopener\" style=\"color: inherit; text-decoration: none;\"><i class=\"fa-solid fa-location-dot\" style=\"color: var(--accent-gold); margin-right: 6px;\"></i> Via Craveri 93, 12045 Fossano (CN)</a>"
}
};

// =========================================================
// GESTORE INTERNAZIONALIZZAZIONE (I18nManager)
// =========================================================
const I18nManager = {
  STORAGE_KEY: "chiesa_fossano_lang",
  DEFAULT_LANG: "it",
  currentLang: "it",

  init() {
    this.currentLang = this.detectLanguage();
    this.applyLanguage(this.currentLang, false);
    this.setupListeners();
  },

  detectLanguage() {
    try {
      const urlParam = new URLSearchParams(window.location.search).get("lang");
      if (urlParam === "ro" || urlParam === "it") return urlParam;
    } catch (e) {}

    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored === "ro" || stored === "it") return stored;
    } catch (e) {}

    try {
      const session = sessionStorage.getItem(this.STORAGE_KEY);
      if (session === "ro" || session === "it") return session;
    } catch (e) {}

    if (document.cookie) {
      const match = document.cookie.match(/chiesa_fossano_lang=([^;]+)/);
      if (match && (match[1] === "ro" || match[1] === "it")) return match[1];
    }

    try {
      const docLang = document.documentElement.getAttribute("data-lang") || document.documentElement.getAttribute("lang");
      if (docLang === "ro" || docLang === "it") return docLang;
    } catch (e) {}

    return this.DEFAULT_LANG;
  },

  setLanguage(lang, persist = true) {
    if (lang !== "it" && lang !== "ro") return;
    this.currentLang = lang;
    this.applyLanguage(lang, persist);
  },

  toggleLanguage() {
    const nextLang = this.currentLang === "it" ? "ro" : "it";
    this.setLanguage(nextLang, true);
  },

  applyLanguage(lang, persist = true) {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);

    if (persist) {
      try { localStorage.setItem(this.STORAGE_KEY, lang); } catch (e) {}
      try { sessionStorage.setItem(this.STORAGE_KEY, lang); } catch (e) {}
      try { document.cookie = `chiesa_fossano_lang=${lang};path=/;max-age=31536000;SameSite=Lax`; } catch (e) {}
      
      // Aggiorna URL senza ricaricare la pagina
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", lang);
        window.history.replaceState({}, "", url.toString());
      } catch (e) {}

      // Sincronizza tra schede
      try {
        if ("BroadcastChannel" in window) {
          const channel = new BroadcastChannel("chiesa_fossano_sync");
          channel.postMessage({ type: "LANGUAGE_CHANGE", lang });
          channel.close();
        }
      } catch (e) {}
    }

    // 1. Traduce tutti gli elementi con [data-i18n]
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.it;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        if (el.tagName === "TITLE") {
          document.title = dict[key];
        } else {
          el.innerHTML = dict[key];
        }
      }
    });

    // 2. Traduce placeholder degli input
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    // 3. Traduce titoli e aria-label
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (dict[key] !== undefined) {
        el.setAttribute("title", dict[key]);
      }
    });

    // 4. Aggiorna stato visivo dei pulsanti selettore IT / RO
    document.querySelectorAll(".lang-opt").forEach((opt) => {
      const optLang = opt.getAttribute("data-lang");
      if (optLang === lang) {
        opt.classList.add("active");
      } else {
        opt.classList.remove("active");
      }
    });

    // 5. Aggiorna link interni affinché mantengano la lingua
    this.syncInternalLinks(lang);

    // 6. Notifica altri script
    window.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
  },

  syncInternalLinks(lang) {
    document.querySelectorAll('a[href$=".html"], a[href^="index.html"], a[href^="chi-siamo.html"], a[href^="orari.html"], a[href^="parola-della-parrocchia.html"], a[href^="avvisi.html"], a[href^="contatti.html"]').forEach((link) => {
      try {
        const href = link.getAttribute("href");
        if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")) return;
        
        const url = new URL(href, window.location.href);
        url.searchParams.set("lang", lang);
        
        // Conserva anche il tema se presente
        const currentTheme = document.documentElement.getAttribute("data-theme") === "night" ? "night" : "dawn";
        if (currentTheme === "night") {
          url.searchParams.set("theme", "night");
        }

        link.setAttribute("href", url.pathname.split("/").pop() + url.search + url.hash);
      } catch (e) {}
    });
  },

  t(key, fallback = "") {
    const dict = TRANSLATIONS[this.currentLang] || TRANSLATIONS.it;
    return dict[key] !== undefined ? dict[key] : fallback;
  },

  setupListeners() {
    const handleLangClick = (e) => {
      // 1. Click specifico su opzione IT o RO
      const opt = e.target.closest(".lang-opt");
      if (opt && opt.getAttribute("data-lang")) {
        e.preventDefault();
        e.stopPropagation();
        this.setLanguage(opt.getAttribute("data-lang"), true);
        return;
      }

      // 2. Click generale sul pulsante / contenitore
      const btn = e.target.closest("#langToggle, .lang-toggle-btn");
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        this.toggleLanguage();
        return;
      }
    };

    // Ascolto eventi di click su tutto il document (delegazione affidabile)
    document.addEventListener("click", handleLangClick);

    // E listener diretto su elemento per massima reattività
    const directBtn = document.getElementById("langToggle");
    if (directBtn) {
      directBtn.addEventListener("click", handleLangClick);
    }

    // Ascolto cambio lingua da altre schede
    try {
      if ("BroadcastChannel" in window) {
        const channel = new BroadcastChannel("chiesa_fossano_sync");
        channel.onmessage = (event) => {
          if (event.data && event.data.type === "LANGUAGE_CHANGE" && event.data.lang) {
            if (event.data.lang !== this.currentLang) {
              this.applyLanguage(event.data.lang, false);
            }
          }
        };
      }
    } catch (e) {}

    window.addEventListener("storage", (e) => {
      if (e.key === this.STORAGE_KEY && e.newValue) {
        if (e.newValue !== this.currentLang) {
          this.applyLanguage(e.newValue, false);
        }
      }
    });
  }
};

// Inizializzazione automatica quando il DOM è pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => I18nManager.init());
} else {
  I18nManager.init();
}

window.I18nManager = I18nManager;
