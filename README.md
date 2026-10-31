# ⛪ Parrocchia Ortodossa Romena Fossano/Mondovì — Sito Web

[![Sito Statico](https://img.shields.io/badge/Sito-100%25_Statico-blue.svg)](index.html)
[![Google Fogli](https://img.shields.io/badge/Contenuti-Google_Fogli-emerald.svg)](#manuale-fogli)
[![Lingue](https://img.shields.io/badge/Lingue-2_Supportate-gold.svg)](js/translations.js)
[![Temi](https://img.shields.io/badge/Temi-Alba_e_Notte-amber.svg)](css/style.css)

> *Sotto la protezione spirituale di **San Giacomo di Putna** (15 Maggio) e **Sant'Antonio il Grande** (17 Gennaio).*

Sito ufficiale della **Parrocchia Ortodossa Romena Fossano/Mondovì**, in comunione canonica con la Diocesi Ortodossa Romena d'Italia. Cura pastorale: **Padre Nicolae Pușcașu**.

Il sito è statico, bilingue (italiano e rumeno), con tema chiaro e scuro. I messaggi della sezione **Parola Della Parrocchia** (omelie, avvisi, santo del giorno e altro) si pubblicano da un normale **Foglio Google**, senza accessi, password o token sul sito.

---

## 📑 Indice

1. [Pagine del sito](#pagine)
2. [Funzionalità](#funzionalita)
3. [Struttura dei file](#struttura)
4. [Manuale 1 — Google Fogli](#manuale-fogli)
5. [Manuale 2 — Immagini](#manuale-immagini)
6. [Installazione e pubblicazione](#installazione)
7. [Risoluzione dei problemi](#problemi)
8. [Contatti](#contatti)

---

<a id="pagine"></a>

## 🗺️ Pagine del sito

| Pagina | File | Contenuto |
|---|---|---|
| **Home** | `index.html` | Presentazione, santi patroni, ultimo messaggio dal foglio, avvisi in evidenza |
| **Chi Siamo** | `chi-siamo.html` | Storia, santi patroni, cura pastorale |
| **Orari Funzioni** | `orari.html` | Celebrazioni liturgiche, preghiera, servizi pastorali e sacramenti |
| **Parola Della Parrocchia** | `parola-della-parrocchia.html` | Bacheca con filtri per categoria, alimentata da Google Fogli |
| **Avvisi** | `avvisi.html` | Avvisi parrocchiali e cammino verso la nuova chiesa |
| **Contatti** | `contatti.html` | Indirizzo, mappa, email e telefono |

---

<a id="funzionalita"></a>

## ✨ Funzionalità

### 🌐 Bilingue Italiano / Română
- Interruttore **IT / RO** nel menu: tutti i testi, le etichette delle categorie e le date cambiano lingua.
- La scelta viene ricordata tra una pagina e l'altra (memoria del browser, con cookie come alternativa).
- Si può forzare con l'indirizzo: `?lang=ro` oppure `?lang=it`.
- Le traduzioni sono tutte in `js/translations.js`.

### 🌙 Tema chiaro e scuro
- Tema **Alba** (chiaro, dorato) e tema **Notte** (scuro), con interruttore nel menu.
- La scelta viene ricordata su tutto il sito e applicata subito al caricamento, senza lampeggi.
- Si può forzare con `?theme=night`.

### 📰 Parola Della Parrocchia da Google Fogli
- Omelie, avvisi, Santo del Giorno, versetto, lettere pastorali e riflessioni si aggiornano dal Foglio Google.
- **Filtri per categoria** nella pagina dedicata.
- **Ordine automatico** dal più recente al meno recente, in base a data e ora.
- Titoli e testi possono andare a capo.
- Una o più immagini per messaggio, con galleria a griglia automatica.
- Gli **avvisi** compaiono anche in `index.html` e nel riquadro dorato di `avvisi.html`.
- Le righe con categoria `NULL`, `nascosto` o `bozza` **non** vengono mostrate.

### 📱 Responsive
- Menu mobile, griglie e immagini adattate a telefono, tablet e computer.

### 🔒 Privacy
- Nessun account, nessun tracciamento, nessuna pubblicità.
- Il sito legge solo il CSV pubblicato dal foglio: non servono chiavi o password nel codice.

---

<a id="struttura"></a>

## 📁 Struttura dei file

```
sito/
├── index.html                      # Home
├── chi-siamo.html
├── orari.html
├── parola-della-parrocchia.html    # Bacheca messaggi (da Google Fogli)
├── avvisi.html
├── contatti.html
├── README.md                       # Questo file
├── css/
│   └── style.css                   # Stile del sito (temi, layout, componenti)
├── js/
│   ├── script.js                   # Logica: menu, tema, lingua, lettura del foglio
│   ├── translations.js             # Testi in italiano e rumeno
│   └── google-sheets-config.js     # Link CSV del Foglio Google
└── img/                            # Immagini fisse del sito (non toccare)
    ├── favicon.png                 # Logo
    ├── divisore-alloro.svg         # Divisore decorativo
    ├── san-giacomo-putna.jpg       # Santo patrono
    └── sant-antonio-grande.jpg     # Santo patrono
```

> Le immagini fisse del sito (logo, divisore, santi patroni) restano nella cartella `img/`. Le immagini dei messaggi **non** si salvano nel sito: si inseriscono dal foglio (vedi Manuale 2).

---

<a id="manuale-fogli"></a>

## 📗 Manuale 1 — Gestire "Parola Della Parrocchia" da Google Fogli

Tutti i contenuti della bacheca (omelie, avvisi, Santo del Giorno, lettere, riflessioni, immagini) si gestiscono da un **Foglio Google**, dal computer o dal telefono, **senza registrazione, token o password** da inserire sul sito.

### 1. Creare il foglio

1. Vai su [Google Fogli](https://sheets.google.com) e crea un foglio vuoto (ad esempio `Parola Della Parrocchia - Fossano`).
2. Nella **prima riga** scrivi queste 7 colonne (anche in minuscolo):

| A | B | C | D | E | F | G (opzionale) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **data** | **ora** | **titolo** | **categoria** | **messaggio** | **autore** | **immagini** |

### 2. Esempi di righe

| data | ora | titolo | categoria | messaggio | autore | immagini |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `25/10/2026` | `10:30` | Omelia della Domenica | `omelia` | Cari fedeli, oggi meditiamo sul Vangelo... | Padre Nicolae Pușcașu | `https://drive.google.com/file/d/ID_FILE/view` |
| `23/10/2026` | `18:00` | Lavori Nuova Sede Parrocchiale | `avviso` | Si informano i fedeli dei progressi dei lavori per la nuova chiesa... | Padre Nicolae Pușcașu | `img/san-giacomo-putna.jpg` |
| `24/10/2026` | `08:00` | San Demetrio il Nuovo | `santo` | Vita, testimonianza e memoria del santo... | Padre Nicolae Pușcașu | |
| `22/10/2026` | `09:00` | Versetto per la settimana | `frase` | "Il Signore è la mia luce e la mia salvezza: di chi avrò paura?" | Padre Nicolae Pușcașu | |

### 3. Valori ammessi nella colonna `categoria`

| Valore | Dove compare |
| :--- | :--- |
| `omelia` | Filtro *Omelie* e in evidenza nella Home |
| `avviso` | Bacheca, **e** riquadro dorato sotto "Cammino Verso la Nuova Chiesa Parrocchiale" in `avvisi.html` e `index.html` |
| `santo` | Filtro *Santo del Giorno* |
| `frase` | Filtro *Parola / Versetto del Giorno* |
| `lettera` | Lettere pastorali per le feste liturgiche |
| `riflessione` | Catechesi e meditazioni spirituali |
| `NULL` (oppure `nascosto` / `bozza`) | **Il messaggio NON viene mostrato sul sito.** Utile per nascondere un vecchio avviso o preparare una bozza |

**Consiglio:** imposta un menu a discesa sulla colonna D. Seleziona `D2` in giù, tasto destro > **Menu a discesa** (oppure *Dati > Convalida dati > Aggiungi regola*) e aggiungi le opzioni: `omelia`, `avviso`, `santo`, `frase`, `lettera`, `riflessione`, `NULL`.

### 4. Andare a capo nei titoli e nei messaggi

- **Con la tastiera:** **Alt + Invio** (Windows/Linux) oppure **Option + Invio** (Mac) dentro la cella.
- **Con `<br>`:** scrivi `<br>` dove vuoi spezzare la riga (es. `Titolo Prima Riga<br>Seconda Riga`).

### 5. Ordinamento automatico

Il sito ordina **da solo** tutti i messaggi dal più recente al meno recente, combinando **data** (`25/10/2026` o `2026-10-25`) e **ora** (`10:30`). Non importa in che ordine scrivi le righe nel foglio.

### 6. Collegare il foglio al sito (una sola volta)

1. Nel Foglio Google: **File > Condividi > Pubblica sul Web** (in inglese *File > Share > Publish to web*).
2. Nella finestra:
   - lascia **Intero documento** (o *Foglio 1*);
   - nel menu a tendina seleziona **Valori separati da virgola (.csv)**;
   - clicca **Pubblica** e conferma.
3. Copia il link generato (finisce per `/pub?output=csv`).
4. Apri `js/google-sheets-config.js` e incollalo tra virgolette:

```javascript
const GOOGLE_SHEETS_CONFIG = {
  csvUrl: "INCOLLA_QUI_IL_LINK_CSV",
  sheetId: ""
};
```

5. Fatto. Da ora ogni riga aggiunta o modificata sul foglio compare sul sito. Dopo una modifica, ricarica la pagina; Google può impiegare qualche minuto ad aggiornare il CSV pubblicato.

> Se la pubblicazione sul web viene interrotta, il sito non riesce più a leggere il foglio.

---

<a id="manuale-immagini"></a>

## 🖼️ Manuale 2 — Immagini

### Immagini dei messaggi: si inseriscono dal Foglio Google

Le immagini dei messaggi vengono prese **solo dalla colonna `immagini`** del foglio: non si salvano in cartelle del sito.

Nella cella incolla uno dei seguenti:

1. **Link Google Drive (consigliato)**
   - Carica la foto su Google Drive.
   - Tasto destro > **Condividi** > imposta *"Chiunque abbia il link"* come **Visualizzatore**.
   - Copia il link (`https://drive.google.com/file/d/.../view`) e incollalo nella cella.
   - Se il file non è condiviso pubblicamente, l'immagine non compare.
   - Suggerimento: crea una cartella Drive per le foto della parrocchia e condividi la cartella, così ogni file che ci metti è già pubblico.
2. **Link diretto a un'immagine**
   - Un indirizzo completo che inizia con `https://` e porta direttamente alla foto (imgur, un altro sito, ecc.). Anche i link Dropbox vengono convertiti.
3. **Immagine precaricata del sito**
   - Scrivi il percorso nella cartella `img/`, ad esempio `img/san-giacomo-putna.jpg`.
4. **Formula `=IMAGE("https://...")`**
   - Funziona se nel CSV pubblicato compare il link.
5. **Nessuna immagine**
   - Lascia la cella vuota, oppure scrivi `NULL` o `-`.

**Più immagini nello stesso messaggio:** separale con una virgola `,` oppure vai a capo con **Alt + Invio**. Il sito crea una galleria a griglia. Cliccando sull'immagine si apre ingrandita.

### ⚠️ Limite di Google Fogli

Le immagini inserite **dentro la cella** (*Inserisci > Immagine > Immagine nella cella*) **non vengono esportate** da Google nel CSV, quindi non si vedono sul sito. Usa sempre i link.

### Immagini fisse del sito (cartella `img/`)

Queste immagini fanno parte del sito e restano nella cartella `img/`. Non vanno spostate o rinominate:

| File | Uso |
| :--- | :--- |
| `favicon.png` | Logo nel menu, nel footer e nella scheda del browser |
| `divisore-alloro.svg` | Divisore decorativo sotto i titoli |
| `san-giacomo-putna.jpg` | Santo patrono (Home e Chi Siamo) |
| `sant-antonio-grande.jpg` | Santo patrono (Home e Chi Siamo) |

Per sostituirne una, mantieni lo **stesso nome di file** e carica la nuova versione nella cartella `img/`.

---

<a id="installazione"></a>

## 🚀 Installazione e pubblicazione

Il sito è statico: nessuna compilazione, nessun database, nessun server speciale.

**Provarlo in locale:**

```bash
# Dalla cartella del sito, avvia un piccolo server
python3 -m http.server 8080

# poi apri nel browser
# http://localhost:8080
```

Meglio usare un server locale che aprire i file con doppio clic, perché la lettura del foglio e la memoria del browser funzionano in modo più affidabile.

**Pubblicarlo:** carica tutta la cartella (HTML, `css/`, `js/`, `img/`) su un qualsiasi hosting statico (hosting del dominio, GitHub Pages, Netlify, ecc.).

---

<a id="problemi"></a>

## 🛠️ Risoluzione dei problemi

| Problema | Cosa controllare |
| :--- | :--- |
| Non compare nessun messaggio | Il link in `js/google-sheets-config.js` è quello del CSV pubblicato? Il foglio è ancora pubblicato sul web? |
| Un messaggio non si vede | La categoria è `NULL`, `nascosto` o `bozza`? Titolo e messaggio sono entrambi vuoti? |
| Un'immagine non compare | Il file Drive è condiviso come "Chiunque abbia il link"? Il link inizia con `https://`? Oppure è un'immagine incollata dentro la cella (non esportata)? |
| La modifica non si vede | Ricarica la pagina e attendi qualche minuto: Google aggiorna il CSV con un po' di ritardo. |
| Ordine sbagliato | Controlla che data e ora siano scritte come `25/10/2026` (o `2026-10-25`) e `10:30`. |
| Tema o lingua non cambiano | Svuota la memoria del sito dal browser oppure prova con `?lang=ro` / `?theme=night` nell'indirizzo. |

---

<a id="contatti"></a>

## 📍 Contatti

- 📍 **Sede attuale:** Via Craveri 93, 12045 Fossano (CN) — in cammino con raccolta fondi per la futura sede definitiva
- ✉️ **Email:** fossano@dor-italia.it
- 📞 **Telefono:** +39 328 428 2810

---

*Parrocchia Ortodossa Romena Fossano/Mondovì • Nel rispetto della tradizione liturgica ortodossa.*
