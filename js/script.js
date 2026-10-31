document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const icon = mobileToggle.querySelector("i");
      if (icon) {
        if (navLinks.classList.contains("open")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-xmark");
        } else {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }
    });

    // Chiudi il menu quando si tocca un link su mobile
    navLinks.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 900) {
          navLinks.classList.remove("open");
          const icon = mobileToggle.querySelector("i");
          if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
          }
        }
      });
    });
  }

  // 2. Dynamic Copyright Year
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 3. Highlight current active page in navigation
  const currentPath = (window.location.pathname.split("/").pop() || "index.html").split("?")[0].split("#")[0];
  const links = document.querySelectorAll(".nav-link");
  links.forEach(link => {
    const rawHref = link.getAttribute("href") || "";
    const cleanHref = rawHref.split("?")[0].split("#")[0];
    if (cleanHref === currentPath || (currentPath === "" && cleanHref === "index.html")) {
      link.classList.add("active");
    }
  });

  // =========================================================
  // 4. SACRED THEME SWITCHER (AURA SACRA: DAWN / NIGHT)
  // Sincronizzato istantaneamente su tutte le pagine del sito
  // =========================================================
  const themeToggle = document.getElementById("themeToggle");
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  // BroadcastChannel per sincronizzazione immediata tra finestre/schede aperte
  let themeChannel = null;
  try {
    if (typeof window.BroadcastChannel !== "undefined") {
      themeChannel = new BroadcastChannel("chiesa_fossano_theme_sync");
    }
  } catch (e) {}

  function getSavedTheme() {
    try {
      const urlTheme = new URLSearchParams(window.location.search).get("theme");
      if (urlTheme === "night" || urlTheme === "dawn") return urlTheme;
    } catch (e) {}

    try {
      const localTheme = localStorage.getItem("chiesa_fossano_theme");
      if (localTheme) return localTheme;
    } catch (e) {}

    try {
      const sessionTheme = sessionStorage.getItem("chiesa_fossano_theme");
      if (sessionTheme) return sessionTheme;
    } catch (e) {}

    try {
      if (document.cookie) {
        const m = document.cookie.match(/chiesa_fossano_theme=([^;]+)/);
        if (m) return m[1];
      }
    } catch (e) {}

    return "dawn";
  }

  function syncInternalLinks(theme) {
    // Sincronizza i link interni per preservare il tema anche su file:// e browser con restrizioni
    const internalLinks = document.querySelectorAll("a[href]");
    internalLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (!href) return;
      if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http://") || href.startsWith("https://") || href.startsWith("javascript:")) {
        return;
      }
      try {
        const relativePath = href.split("?")[0].split("#")[0];
        const hash = href.includes("#") ? "#" + href.split("#")[1] : "";
        const queryParams = new URLSearchParams(href.includes("?") ? href.split("?")[1].split("#")[0] : "");
        
        if (theme === "night") {
          queryParams.set("theme", "night");
        } else {
          queryParams.delete("theme");
        }

        const currentLang = (window.I18nManager && window.I18nManager.currentLang) || document.documentElement.getAttribute("lang") || "it";
        if (currentLang === "ro") {
          queryParams.set("lang", "ro");
        } else {
          queryParams.delete("lang");
        }
        
        const qs = queryParams.toString();
        link.setAttribute("href", relativePath + (qs ? "?" + qs : "") + hash);
      } catch (err) {}
    });
  }

  function applyTheme(theme, broadcast = true) {
    if (theme === "night") {
      document.documentElement.setAttribute("data-theme", "night");
      if (themeToggle) {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        themeToggle.setAttribute("title", "Passa al tema Aurora");
        themeToggle.setAttribute("aria-label", "Passa al tema Aurora");
      }
      if (metaThemeColor) metaThemeColor.setAttribute("content", "#121214");
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (themeToggle) {
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        themeToggle.setAttribute("title", "Passa al tema Notte");
        themeToggle.setAttribute("aria-label", "Passa al tema Notte");
      }
      if (metaThemeColor) metaThemeColor.setAttribute("content", "#c69214");
    }

    // Salva in tutti i contenitori di persistenza
    try { localStorage.setItem("chiesa_fossano_theme", theme); } catch (e) {}
    try { sessionStorage.setItem("chiesa_fossano_theme", theme); } catch (e) {}
    try { document.cookie = "chiesa_fossano_theme=" + theme + "; path=/; max-age=31536000; SameSite=Lax"; } catch (e) {}

    // Propaga su tutti i collegamenti della pagina
    syncInternalLinks(theme);

    // Notifica le altre schede
    if (broadcast && themeChannel) {
      try {
        themeChannel.postMessage({ type: "THEME_CHANGE", theme: theme });
      } catch (e) {}
    }
  }

  // Applica subito il tema calcolato
  const initialTheme = getSavedTheme();
  applyTheme(initialTheme, false);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isNight = document.documentElement.getAttribute("data-theme") === "night";
      const newTheme = isNight ? "dawn" : "night";
      applyTheme(newTheme, true);
    });
  }

  // Ascolta cambi tema da altre schede/finestre del browser
  if (themeChannel) {
    themeChannel.onmessage = (event) => {
      if (event.data && event.data.type === "THEME_CHANGE" && event.data.theme) {
        applyTheme(event.data.theme, false);
      }
    };
  }

  window.addEventListener("storage", (e) => {
    if (e.key === "chiesa_fossano_theme" && e.newValue) {
      applyTheme(e.newValue, false);
    }
  });

  // 5. Floating "Torna Su" Button
  const scrollTopBtn = document.createElement("button");
  scrollTopBtn.className = "scroll-top-btn";
  scrollTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  scrollTopBtn.setAttribute("aria-label", "Torna all'inizio della pagina");
  scrollTopBtn.setAttribute("title", "Torna su");
  document.body.appendChild(scrollTopBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // 6. Prossima Liturgia Indicator (Bilingue IT / RO)
  const nextLiturgyElement = document.getElementById("nextLiturgyText");
  function updateNextLiturgyText() {
    if (!nextLiturgyElement) return;
    const now = new Date();
    const day = now.getDay(); // 0 = Domenica, 3 = Mercoledì, 6 = Sabato
    const hour = now.getHours();
    const isRo = ((window.I18nManager && window.I18nManager.currentLang) || document.documentElement.getAttribute("lang")) === "ro";
    
    let message = "";

    if (day === 3) { // Mercoledì
      if (hour < 21) {
        message = isRo ? "Astăzi la 19:30 — Rugăciunile de seară și Acatist" : "Oggi alle 19:30 — Preghiere della Sera & Acatisto";
      } else {
        message = isRo ? "Sâmbătă la 09:30 — Sfânta Liturghie & Pomenire" : "Sabato alle 09:30 — Santa Liturgia & Parastas";
      }
    } else if (day === 4 || day === 5) { // Giovedì o Venerdì
      message = isRo ? "Sâmbătă la 09:30 — Sfânta Liturghie & Pomenire" : "Sabato alle 09:30 — Santa Liturgia & Parastas";
    } else if (day === 6) { // Sabato
      if (hour < 11) {
        message = isRo ? "Astăzi la 09:30 — Sfânta Liturghie & Parastas" : "Oggi alle 09:30 — Santa Liturgia & Parastas";
      } else if (hour < 19) {
        message = isRo ? "Astăzi (16:30 – 18:30) — Spovedanii și dialog (la cerere)" : "Oggi (16:30 – 18:30) — Sante Confessioni (su richiesta)";
      } else {
        message = isRo ? "Mâine (Duminică) la ora 10:00 — Sfânta Liturghie" : "Domani (Domenica) alle 10:00 — Divina Liturgia";
      }
    } else if (day === 0) { // Domenica
      if (hour < 12) {
        message = isRo ? "Astăzi la ora 10:00 — Sfânta Liturghie și Predica" : "Oggi alle 10:00 — Divina Liturgia & Omelia";
      } else {
        message = isRo ? "Miercuri la ora 19:30 — Rugăciunile de seară și Acatist" : "Mercoledì alle 19:30 — Preghiere della Sera & Acatisto";
      }
    } else { // Lunedì (1) o Martedì (2)
      message = isRo ? "Miercuri la ora 19:30 — Rugăciunile de seară și Acatist" : "Mercoledì alle 19:30 — Preghiere della Sera & Acatisto";
    }

    nextLiturgyElement.textContent = message;
  }
  updateNextLiturgyText();
  window.addEventListener("languagechange", updateNextLiturgyText);

  // =========================================================
  // 7. BACHECA PARROCCHIALE & NOTIZIE (GOOGLE FOGLI / SHEETS)
  // I messaggi, le omelie, il Santo del Giorno e gli avvisi parrocchiali
  // vengono gestiti comodamente su Google Fogli tramite le colonne:
  // Data | Ora | Titolo | Categoria | Messaggio | Autore
  // I messaggi vengono ordinati rigorosamente per Data e per Ora
  // in ordine decrescente (i più recenti in alto).
  // =========================================================

  function escapeHtml(text) {
    if (!text) return "";
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  // Formatta testo e titoli supportando gli a capo (sia da cella multiriga che da <br>)
  function formatMultiline(text) {
    if (!text) return "";
    return escapeHtml(text)
      .replace(/&lt;br\s*\/?&gt;/gi, "<br>")
      .replace(/\r\n|\r|\n/g, "<br>");
  }

  // Parser CSV conforme RFC 4180 (supporta virgolette, virgole e a capo nelle celle)
  function parseCSV(text) {
    const rows = [];
    let currentRow = [];
    let currentCell = "";
    let insideQuotes = false;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const nextChar = text[i + 1];

      if (char === '"') {
        if (insideQuotes && nextChar === '"') {
          currentCell += '"';
          i++; // salta virgoletta di escape
        } else {
          insideQuotes = !insideQuotes;
        }
      } else if (char === ',' && !insideQuotes) {
        currentRow.push(currentCell.trim());
        currentCell = "";
      } else if ((char === '\r' || char === '\n') && !insideQuotes) {
        if (char === '\r' && nextChar === '\n') {
          i++; // salta \r\n
        }
        currentRow.push(currentCell.trim());
        if (currentRow.some(c => c.length > 0)) {
          rows.push(currentRow);
        }
        currentRow = [];
        currentCell = "";
      } else {
        currentCell += char;
      }
    }
    if (currentCell.length > 0 || currentRow.length > 0) {
      currentRow.push(currentCell.trim());
      if (currentRow.some(c => c.length > 0)) {
        rows.push(currentRow);
      }
    }
    return rows;
  }

  // Normalizza e ricava timestamp comparabile da Data e Ora
  function parseDateTimeToTimestamp(dateStr, timeStr) {
    if (!dateStr) return 0;
    dateStr = String(dateStr).trim();
    timeStr = String(timeStr || "00:00").trim();

    let year = 1970, month = 1, day = 1;
    if (dateStr.includes("-") && dateStr.split("-")[0].length === 4) {
      // YYYY-MM-DD
      const parts = dateStr.split("-");
      year = parseInt(parts[0], 10) || 1970;
      month = parseInt(parts[1], 10) || 1;
      day = parseInt(parts[2], 10) || 1;
    } else if (dateStr.includes("/")) {
      // DD/MM/YYYY
      const parts = dateStr.split("/");
      day = parseInt(parts[0], 10) || 1;
      month = parseInt(parts[1], 10) || 1;
      year = parseInt(parts[2], 10) || 1970;
    } else if (dateStr.includes(".")) {
      // DD.MM.YYYY
      const parts = dateStr.split(".");
      day = parseInt(parts[0], 10) || 1;
      month = parseInt(parts[1], 10) || 1;
      year = parseInt(parts[2], 10) || 1970;
    } else if (dateStr.includes("-")) {
      // DD-MM-YYYY
      const parts = dateStr.split("-");
      day = parseInt(parts[0], 10) || 1;
      month = parseInt(parts[1], 10) || 1;
      year = parseInt(parts[2], 10) || 1970;
    }

    let hours = 0, minutes = 0;
    if (timeStr.includes(":")) {
      const tParts = timeStr.split(":");
      hours = parseInt(tParts[0], 10) || 0;
      minutes = parseInt(tParts[1], 10) || 0;
    }

    const d = new Date(year, month - 1, day, hours, minutes);
    return isNaN(d.getTime()) ? 0 : d.getTime();
  }

  // Normalizza nome categoria
  function normalizeCategory(cat) {
    if (!cat) return "omelia";
    cat = cat.toLowerCase().trim();
    if (cat === "null" || cat === "nessuna" || cat === "vuoto" || cat === "-" || cat === "none") return "omelia";
    if (cat.includes("avvis") || cat.includes("anunt") || cat.includes("comunic")) return "avviso";
    if (cat.includes("omeli") || cat.includes("predic")) return "omelia";
    if (cat.includes("sant") || cat.includes("sfant")) return "santo";
    if (cat.includes("frase") || cat.includes("versett") || cat.includes("cuvant")) return "frase";
    if (cat.includes("letter") || cat.includes("scrisoare")) return "lettera";
    if (cat.includes("riflession") || cat.includes("reflect")) return "riflessione";
    return "omelia";
  }

  // Normalizza URL immagine: le immagini arrivano SOLO dal Foglio Google (colonna "immagini").
  // Accetta link Google Drive (condiviso con "Chiunque abbia il link"), link diretti http/https
  // (es. imgur, sito web, Google Foto/googleusercontent) e Dropbox. I percorsi locali non sono più usati.
  function normalizeImageUrl(url) {
    if (!url) return "";
    let clean = String(url).trim();
    // Se la cella contiene =IMAGE("url") o un tag <img>, estrae l'URL
    const wrapped = clean.match(/(?:IMAGE\(\s*["']|src=["'])(https?:\/\/[^"']+)/i);
    if (wrapped) clean = wrapped[1];
    if (!clean || clean.toUpperCase() === "NULL" || clean === "-" || clean.toUpperCase() === "NONE") return "";

    // Google Drive: /file/d/ID/..., open?id=ID, uc?id=ID, thumbnail?id=ID
    if (clean.includes("drive.google.com") || clean.includes("drive.usercontent.google.com")) {
      const m = clean.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || clean.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (m && m[1]) return `https://drive.google.com/thumbnail?id=${m[1]}&sz=w1600`;
      return "";
    }

    // Dropbox: forza il file diretto
    if (clean.includes("dropbox.com")) {
      clean = clean.replace(/[?&]dl=0/, "").replace("www.dropbox.com", "dl.dropboxusercontent.com");
    }

    // Solo link web diretti
    if (clean.startsWith("https://") || clean.startsWith("http://")) return clean;
    return "";
  }

  // Suddivide celle con più URL (separati da virgola, punto e virgola o a capo)
  function splitMediaUrls(cell) {
    if (!cell) return [];
    const tokens = String(cell).split(/[\r\n,;]+/);
    return tokens.map(t => t.trim()).filter(t => t && t.toUpperCase() !== "NULL" && t !== "-" && t.toUpperCase() !== "NONE");
  }

  // Helper per renderizzare le immagini (singola o griglia multipla per "Parola Della Parrocchia")
  function renderImagesHtml(images, title = "", isRo = false) {
    if (!images || images.length === 0) return "";
    const tooltip = isRo ? "Vezi imaginea mărită" : "Visualizza immagine ingrandita";

    if (images.length === 1) {
      return `
        <div class="article-image-container" style="margin: 1rem 0 1.2rem; border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color); max-height: 520px; background: var(--bg-card-alt); box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
          <a href="${escapeHtml(images[0])}" target="_blank" rel="noopener" title="${tooltip}">
            <img src="${escapeHtml(images[0])}" alt="${escapeHtml(title)}" style="width: 100%; max-height: 520px; object-fit: cover; display: block; transition: transform 0.3s ease;" loading="lazy" onerror="this.closest('.article-image-container').style.display='none'">
          </a>
        </div>
      `;
    }

    return `
      <div class="article-images-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin: 1rem 0 1.2rem;">
        ${images.map(imgUrl => `
          <div class="article-image-container" style="border-radius: 10px; overflow: hidden; border: 1px solid var(--border-color); height: 230px; background: var(--bg-card-alt); box-shadow: 0 3px 12px rgba(0,0,0,0.06);">
            <a href="${escapeHtml(imgUrl)}" target="_blank" rel="noopener" title="${tooltip}">
              <img src="${escapeHtml(imgUrl)}" alt="${escapeHtml(title)}" style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s ease;" loading="lazy" onerror="this.closest('.article-image-container').style.display='none'">
            </a>
          </div>
        `).join("")}
      </div>
    `;
  }

  let cachedArticles = [];

  // Caricamento Notizie:
  // 1. Prova da Google Fogli (se configurato in js/google-sheets-config.js)
  // 2. Se non configurato o offline, fallback su notizie/indice.json o localStorage
  async function loadArticles() {
    const isRo = ((window.I18nManager && window.I18nManager.currentLang) || document.documentElement.getAttribute("lang")) === "ro";

    // 1. Google Fogli (CSV export pubblico)
    if (typeof isGoogleSheetsConfigured === "function" && isGoogleSheetsConfigured()) {
      try {
        const csvUrl = getGoogleSheetsCsvUrl();
        const fetchUrl = csvUrl.includes("?") ? `${csvUrl}&t=${Date.now()}` : `${csvUrl}?t=${Date.now()}`;
        const res = await fetch(fetchUrl);

        if (res.ok) {
          const csvText = await res.text();
          const rows = parseCSV(csvText);

          if (rows.length >= 2) {
            // Analizza gli indici delle colonne dall'intestazione
            const headers = rows[0].map(h => h.toLowerCase().trim());
            const idxDate = headers.findIndex(h => h.includes("data") || h.includes("date") || h.includes("zi"));
            const idxTime = headers.findIndex(h => h.includes("ora") || h.includes("time") || h.includes("timp"));
            const idxTitle = headers.findIndex(h => h.includes("titol") || h.includes("titl"));
            const idxCat = headers.findIndex(h => h.includes("categ"));
            const idxContent = headers.findIndex(h => h.includes("messagg") || h.includes("testo") || h.includes("contin") || h.includes("mesaj"));
            const idxAuthor = headers.findIndex(h => h.includes("autor") || h.includes("preot") || h.includes("parroco") || h.includes("firma"));
            const idxStatus = headers.findIndex(h => h.includes("stat") || h.includes("visib") || h.includes("attiv") || h.includes("pubblic"));
            const idxImages = headers.findIndex(h => h.includes("immagin") || h.includes("image") || h.includes("foto") || h.includes("poze") || h.includes("poza") || h.includes("pic") || h.includes("img"));

            const articles = [];
            for (let r = 1; r < rows.length; r++) {
              const row = rows[r];
              if (!row || row.length === 0) continue;

              const rawDate = idxDate >= 0 && row[idxDate] ? row[idxDate] : "";
              const rawTime = idxTime >= 0 && row[idxTime] ? row[idxTime] : "";
              const rawTitle = idxTitle >= 0 && row[idxTitle] ? row[idxTitle] : "";
              const rawCat = idxCat >= 0 && row[idxCat] ? row[idxCat] : "omelia";
              const rawContent = idxContent >= 0 && row[idxContent] ? row[idxContent] : "";
              const rawAuthor = idxAuthor >= 0 && row[idxAuthor] ? row[idxAuthor] : "";
              const rawStatus = idxStatus >= 0 && row[idxStatus] ? row[idxStatus].trim().toUpperCase() : "";
              const rawImagesCell = idxImages >= 0 && row[idxImages] ? row[idxImages].trim() : "";

              if (!rawTitle && !rawContent) continue;

              // Se categoria o stato è NULL / NASCOSTO / BOZZA, NON mostrare il messaggio sul sito!
              const catUpper = (rawCat || "").trim().toUpperCase();
              if (catUpper === "NULL" || catUpper === "NASCOSTO" || catUpper === "BOZZA" || catUpper === "OFF" || catUpper === "DRAFT" || catUpper === "INATTIVO") {
                continue;
              }
              if (rawStatus === "NULL" || rawStatus === "NO" || rawStatus === "FALSE" || rawStatus === "0" || rawStatus === "NASCOSTO" || rawStatus === "BOZZA") {
                continue;
              }

              const normCat = normalizeCategory(rawCat);

              // Elaborazione media (immagini)
              const rawImgTokens = splitMediaUrls(rawImagesCell);
              const imagesList = [];

              for (const token of rawImgTokens) {
                const normImg = normalizeImageUrl(token);
                if (normImg) imagesList.push(normImg);
              }

              const timestamp = parseDateTimeToTimestamp(rawDate, rawTime);

              // Formattazione data leggibile
              let dateFormatted = rawDate;
              if (timestamp > 0) {
                dateFormatted = new Date(timestamp).toLocaleDateString(isRo ? 'ro-RO' : 'it-IT', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                });
              }

              const categoryLabels = {
                omelia: isRo ? "Omilie Duminicală" : "Omelia Domenicale",
                santo: isRo ? "Sfântul Zilei" : "Santo del Giorno",
                frase: isRo ? "Cuvântul / Versetul Zilei" : "Parola del Giorno",
                lettera: isRo ? "Scrisoare Pastorală" : "Lettera Pastorale",
                riflessione: isRo ? "Reflecție Duhovnicească" : "Riflessione Spirituale",
                avviso: isRo ? "Anunț Parohial" : "Avviso Parrocchiale"
              };

              articles.push({
                id: `sheet-msg-${r}`,
                title: rawTitle,
                category: normCat,
                categoryLabel: categoryLabels[normCat] || (normCat.charAt(0).toUpperCase() + normCat.slice(1)),
                content: rawContent,
                author: rawAuthor || (isRo ? "Părintele Nicolae Pușcașu" : "Padre Nicolae Pușcașu"),
                authorRole: isRo ? "Parohia Ortodoxă Română Fossano/Mondovì" : "Parrocchia Ortodossa Romena Fossano/Mondovì",
                date: rawDate,
                dateFormatted: dateFormatted,
                time: rawTime,
                timestamp: timestamp,
                image: imagesList.length > 0 ? imagesList[0] : "",
                images: imagesList
              });
            }

            // Ordinamento rigoroso per Data e Ora in ordine decrescente (più recenti in alto)
            articles.sort((a, b) => b.timestamp - a.timestamp);

            return articles;
          }
        }
      } catch (err) {
        console.warn("Avviso lettura da Google Fogli:", err);
      }
    }

    // 2. Fallback: notizie/indice.json
    try {
      const res = await fetch(`notizie/indice.json?t=${Date.now()}`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          return data;
        }
      }
    } catch (e) {}

    // 3. Fallback: localStorage
    try {
      const local = localStorage.getItem("chiesa_fossano_articles");
      if (local) return JSON.parse(local);
    } catch (e) {}

    return [];
  }

  // B. Rendering Avvisi Parrocchiali sotto il blocco "Cammino Verso la Nuova Chiesa Parrocchiale"
  // (In avvisi.html)
  function renderRelocationNotices(articles) {
    const churchNoticeContainer = document.getElementById("churchRelocationNoticeContainer");
    if (!churchNoticeContainer) return;

    const isRo = ((window.I18nManager && window.I18nManager.currentLang) || document.documentElement.getAttribute("lang")) === "ro";
    const avvisi = (articles || []).filter(a => {
      const cat = (a.category || "").toLowerCase();
      return cat.includes("avvis") || cat.includes("anunt") || cat.includes("comunic");
    });

    if (avvisi.length === 0) {
      churchNoticeContainer.innerHTML = "";
      return;
    }

    const htmlContent = avvisi.map(avviso => {
      const dateDisplay = avviso.dateFormatted || avviso.date || "";
      const timeDisplay = avviso.time ? `· <i class="fa-regular fa-clock" style="margin-left: 4px;"></i> ${escapeHtml(avviso.time)}` : "";

      const imagesHtml = renderImagesHtml(avviso.images || (avviso.image ? [avviso.image] : []), avviso.title, isRo);

      return `
        <div class="card-sacred alert-notice-card" style="border-left: 5px solid var(--accent-gold); background: linear-gradient(135deg, rgba(198, 146, 20, 0.08) 0%, var(--bg-card) 100%); margin-bottom: 1.5rem; box-shadow: 0 4px 18px rgba(0,0,0,0.06);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem; flex-wrap: wrap; gap: 8px;">
            <span class="category-tag avviso" style="display: inline-flex; align-items: center; gap: 6px; font-weight: 700;">
              <i class="fa-solid fa-bullhorn"></i> ${isRo ? "Anunț Parohial" : "Avviso Parrocchiale"}
            </span>
            <span style="font-family: var(--font-sans); font-size: 0.88rem; color: var(--text-muted);">
              <i class="fa-regular fa-calendar"></i> ${dateDisplay} ${timeDisplay}
            </span>
          </div>
          <h3 style="font-family: var(--font-display); font-size: 1.35rem; margin-bottom: 0.8rem; color: var(--text-primary); line-height: 1.35;">${formatMultiline(avviso.title)}</h3>
          ${imagesHtml}
          <div class="article-body" style="font-size: 1.05rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 1.2rem;">
            <p>${formatMultiline(avviso.content)}</p>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 15px; flex-wrap: wrap; border-top: 1px dashed var(--border-color); padding-top: 0.9rem; margin-top: 1rem;">
            <div style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: var(--text-muted);">
              <i class="fa-solid fa-cross" style="color: var(--accent-gold);"></i>
              <span><strong>${escapeHtml(avviso.author || (isRo ? "Părintele Nicolae Pușcașu" : "Padre Nicolae Pușcașu"))}</strong> · ${escapeHtml(avviso.authorRole || (isRo ? "Parohia Ortodoxă Română Fossano/Mondovì" : "Parrocchia Ortodossa Romena Fossano/Mondovì"))}</span>
            </div>
            <div>
              <a href="contatti.html#donazioni" class="btn btn-primary" style="font-size: 0.9rem; padding: 0.5rem 1rem;">
                <i class="fa-solid fa-hand-holding-heart"></i> ${isRo ? "Susține Noua Biserică" : "Sostieni la Nuova Chiesa"}
              </a>
            </div>
          </div>
        </div>
      `;
    }).join("");

    churchNoticeContainer.innerHTML = htmlContent;
  }

  // A. Rendering Lista Articoli nella pagina parola-della-parrocchia.html
  const articlesContainer = document.getElementById("articlesContainer");
  let currentFilter = "all";

  function renderArticles(filter = "all") {
    if (!articlesContainer) return;
    const isRo = ((window.I18nManager && window.I18nManager.currentLang) || document.documentElement.getAttribute("lang")) === "ro";
    const filtered = filter === "all" 
      ? cachedArticles 
      : cachedArticles.filter(a => a.category === filter);

    if (filtered.length === 0) {
      if (cachedArticles.length === 0) {
        articlesContainer.innerHTML = `
          <div class="card-sacred" style="text-align: center; padding: 3.5rem 2rem; max-width: 750px; margin: 0 auto;">
            <div style="font-size: 2.4rem; color: var(--accent-gold); margin-bottom: 1rem;">
              <i class="fa-solid fa-feather-pointed"></i>
            </div>
            <h3 style="font-family: var(--font-display); font-size: 1.45rem; margin-bottom: 0.8rem; color: var(--text-primary);">
              ${isRo ? "Cuvântul Parohiei" : "Parola Della Parrocchia"}
            </h3>
            <p style="color: var(--text-secondary); font-size: 1.15rem; line-height: 1.7; margin-bottom: 1.5rem;">
              ${isRo 
                ? "În acest spațiu sunt publicate mesajele oficiale, omiliile, sfântul zilei și anunțurile parohiei pentru comunitate."
                : "In questo spazio sono raccolti i messaggi ufficiali, le omelie, il santo del giorno e gli avvisi della parrocchia per la comunità."}
            </p>
            <div style="display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-sans); font-size: 0.9rem; color: var(--text-muted); background: var(--bg-parchment); padding: 8px 16px; border-radius: 20px; border: 1px solid var(--border-color);">
              <i class="fa-solid fa-table" style="color: var(--accent-gold);"></i> ${isRo ? "Actualizat prin Google Sheets în ordine cronologică" : "Aggiornato direttamente tramite Google Fogli in ordine cronologico"}
            </div>
          </div>
        `;
      } else {
        articlesContainer.innerHTML = `
          <div class="card-sacred" style="text-align: center; padding: 3rem 1.5rem; max-width: 750px; margin: 0 auto;">
            <div style="font-size: 2.2rem; color: var(--accent-gold); margin-bottom: 0.8rem;">
              <i class="fa-solid fa-folder-open"></i>
            </div>
            <h3 style="font-family: var(--font-display); font-size: 1.35rem; margin-bottom: 0.6rem;">${isRo ? "Niciun mesaj în această categorie" : "Nessun messaggio in questa categoria"}</h3>
            <p style="color: var(--text-secondary); font-size: 1.05rem;">
              ${isRo 
                ? "Nu există încă mesaje publicate sub această categorie. Faceți clic pe 'Toate Mesajele' pentru a vedea celelalte conținuturi."
                : "Non ci sono ancora messaggi sotto questa specifica categoria. Clicca su 'Tutti i Messaggi' per visualizzare gli altri contenuti."}
            </p>
          </div>
        `;
      }
      return;
    }

    articlesContainer.innerHTML = filtered.map(item => {
      const dateDisplay = item.dateFormatted || item.date || "";
      const timeDisplay = item.time ? `· <i class="fa-regular fa-clock" style="margin-left: 4px;"></i> ${escapeHtml(item.time)}` : "";

      const imagesHtml = renderImagesHtml(item.images || (item.image ? [item.image] : []), item.title, isRo);

      return `
        <article class="article-card" id="msg-${item.id}">
          <div class="article-meta">
            <span class="category-tag ${item.category}">${item.categoryLabel || item.category}</span>
            <span><i class="fa-regular fa-calendar"></i> ${dateDisplay} ${timeDisplay}</span>
          </div>
          <h2 class="article-title">${formatMultiline(item.title)}</h2>
          ${imagesHtml}
          <div class="article-body">
            <p>${formatMultiline(item.content)}</p>
          </div>
          <div class="article-signature">
            <i class="fa-solid fa-cross"></i>
            <div>
              <span class="article-signature-text">${escapeHtml(item.author || (isRo ? "Părintele Nicolae Pușcașu" : "Padre Nicolae Pușcașu"))}</span>
              <span class="article-signature-sub">${escapeHtml(item.authorRole || (isRo ? "Parohia Ortodoxă Română Fossano/Mondovì" : "Parrocchia Ortodossa Romena Fossano/Mondovì"))}</span>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  async function refreshArticlesDisplay() {
    cachedArticles = await loadArticles();
    renderArticles(currentFilter);
    renderRelocationNotices(cachedArticles);
  }

  // Registrazione controlli su pagina parola-della-parrocchia.html
  if (articlesContainer) {
    refreshArticlesDisplay();

    // Filtri Categorie
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.getAttribute("data-filter");
        renderArticles(currentFilter);
      });
    });
  }

  // Inizializza anche il container degli avvisi su avvisi.html
  if (document.getElementById("churchRelocationNoticeContainer")) {
    refreshArticlesDisplay();
  }

  // C. Anteprima dell'ultimo messaggio o avviso nella Home Page (index.html)
  const homeLatestMessageContainer = document.getElementById("homeLatestMessageContainer");
  if (homeLatestMessageContainer) {
    async function renderHomeLatest() {
      const articles = await loadArticles();
      const isRo = ((window.I18nManager && window.I18nManager.currentLang) || document.documentElement.getAttribute("lang")) === "ro";

      if (articles.length > 0) {
        const latest = articles[0];
        const isLong = (latest.content || "").length > 1200;
        const displayText = isLong 
          ? latest.content.substring(0, 950).replace(/\s+\S*$/, "") + "..." 
          : latest.content;

        const dateDisplay = latest.dateFormatted || latest.date || (latest.timestamp > 0 ? new Date(latest.timestamp).toLocaleDateString(isRo ? 'ro-RO' : 'it-IT', { day: 'numeric', month: 'long', year: 'numeric' }) : '');
        const timeDisplay = latest.time ? ` · <i class="fa-regular fa-clock" style="margin-left: 4px;"></i> ${escapeHtml(latest.time)}` : '';

        // Icona e badge specifici per la categoria
        let catIcon = '<i class="fa-solid fa-feather-pointed"></i>';
        let catLabel = latest.categoryLabel || latest.category;
        if (latest.category === "avviso") {
          catIcon = '<i class="fa-solid fa-bullhorn"></i>';
          catLabel = isRo ? "Anunț Parohial" : "Avviso Parrocchiale";
        } else if (latest.category === "omelia") {
          catIcon = '<i class="fa-solid fa-book-bible"></i>';
          catLabel = isRo ? "Omilie Duminicală" : "Omelia Domenicale";
        } else if (latest.category === "santo") {
          catIcon = '<i class="fa-solid fa-star-of-david"></i>';
          catLabel = isRo ? "Sfântul Zilei" : "Santo del Giorno";
        } else if (latest.category === "frase") {
          catIcon = '<i class="fa-solid fa-quote-left"></i>';
          catLabel = isRo ? "Cuvântul Zilei" : "Parola del Giorno";
        } else if (latest.category === "lettera") {
          catIcon = '<i class="fa-solid fa-envelope-open-text"></i>';
          catLabel = isRo ? "Scrisoare Pastorală" : "Lettera Pastorale";
        } else if (latest.category === "riflessione") {
          catIcon = '<i class="fa-solid fa-dove"></i>';
          catLabel = isRo ? "Reflecție Duhovnicească" : "Riflessione Spirituale";
        }

        const isNotice = latest.category === "avviso";
        const noticeBtnHtml = isNotice 
          ? `<a href="avvisi.html" class="btn btn-secondary" style="padding: 7px 16px; font-size: 0.88rem;">
               <i class="fa-solid fa-bullhorn"></i> ${isRo ? "Bacheca Anunțuri" : "Bacheca Avvisi"}
             </a>`
          : "";

        const readMoreText = isLong 
          ? (isRo ? "Citește tot mesajul" : "Leggi tutto il messaggio") 
          : (isRo ? "Toate Mesajele & Omiliile" : "Tutti i Messaggi & Omelie");

        const primaryBtnHtml = `
          <a href="parola-della-parrocchia.html" class="btn btn-primary" style="padding: 7px 18px; font-size: 0.88rem;">
            ${readMoreText} <i class="fa-solid fa-arrow-right"></i>
          </a>
        `;

        const imagesHtml = renderImagesHtml(latest.images || (latest.image ? [latest.image] : []), latest.title, isRo);

        let cardHtml = `
          <div class="card-sacred" style="border-left: 4px solid var(--accent-gold); background: linear-gradient(135deg, ${isNotice ? 'rgba(198, 146, 20, 0.08)' : 'var(--bg-card)'} 0%, var(--bg-card-alt) 100%); box-shadow: 0 4px 18px rgba(0,0,0,0.06);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.9rem; flex-wrap: wrap; gap: 8px;">
              <span class="category-tag ${latest.category}" style="display: inline-flex; align-items: center; gap: 6px; font-weight: 700;">
                ${catIcon} ${catLabel}
              </span>
              <span style="font-family: var(--font-sans); font-size: 0.88rem; color: var(--text-muted);">
                <i class="fa-regular fa-calendar"></i> ${dateDisplay} ${timeDisplay}
              </span>
            </div>
            <h3 class="article-title" style="font-size: 1.4rem; margin-bottom: 0.9rem; line-height: 1.35;">${formatMultiline(latest.title)}</h3>
            ${imagesHtml}
            <div style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
              <p>${formatMultiline(displayText)}</p>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; border-top: 1px dashed var(--border-color); padding-top: 1rem; margin-top: 1rem;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fa-solid fa-cross" style="color: var(--accent-gold); font-size: 1.1rem;"></i>
                <div>
                  <span style="font-family: var(--font-sans); font-size: 0.92rem; font-weight: 700; color: var(--text-primary); display: block;">${escapeHtml(latest.author || (isRo ? "Părintele Nicolae Pușcașu" : "Padre Nicolae Pușcașu"))}</span>
                  <span style="font-family: var(--font-sans); font-size: 0.82rem; color: var(--text-muted);">${escapeHtml(latest.authorRole || (isRo ? "Parohia Ortodoxă Română Fossano/Mondovì" : "Parrocchia Ortodossa Romena Fossano/Mondovì"))}</span>
                </div>
              </div>
              <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                ${noticeBtnHtml}
                ${primaryBtnHtml}
              </div>
            </div>
          </div>
        `;

        if (articles.length > 1) {
          cardHtml += `
            <div style="margin-top: 0.9rem; text-align: right; font-size: 0.88rem; color: var(--text-muted);">
              ${isRo ? `Publicate în total ${articles.length} mesaje și anunțuri în arhiva parohiei.` : `Pubblicati in totale ${articles.length} messaggi e avvisi nell'archivio parrocchiale.`}
              <a href="parola-della-parrocchia.html" style="color: var(--accent-gold); font-weight: 600; text-decoration: underline; margin-left: 6px;">
                ${isRo ? "Deschide arhiva completă" : "Apri archivio completo"} &rarr;
              </a>
            </div>
          `;
        }

        homeLatestMessageContainer.innerHTML = cardHtml;
      } else {
        const emptyTitle = isRo ? "Bacheca Parohiei" : "Bacheca della Comunità Parrocchiale";
        const emptyText = isRo 
          ? "În această secțiune sunt publicate mesajele oficiale, omiliile duminicale, Sfântul Zilei și anunțurile Parohiei Ortodoxe Române Fossano/Mondovì."
          : "In questa sezione sono raccolti i messaggi ufficiali, le omelie, il Santo del Giorno e gli avvisi della Parrocchia Ortodossa Romena Fossano/Mondovì.";
        const emptyBtn = isRo ? "Vezi Cuvântul Parohiei" : "Visita Parola Della Parrocchia";

        homeLatestMessageContainer.innerHTML = `
          <div class="card-sacred" style="text-align: center; padding: 2.2rem 1.5rem; background: var(--bg-card-alt);">
            <div style="font-size: 2rem; color: var(--accent-gold); margin-bottom: 0.8rem;"><i class="fa-solid fa-feather-pointed"></i></div>
            <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 0.5rem;">${emptyTitle}</h3>
            <p style="color: var(--text-secondary); max-width: 580px; margin: 0 auto 1.4rem; font-size: 1.05rem;">
              ${emptyText}
            </p>
            <a href="parola-della-parrocchia.html" class="btn btn-secondary">
              ${emptyBtn} <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        `;
      }
    }
    renderHomeLatest();
    window.addEventListener("languagechange", renderHomeLatest);
  }

  // Aggiornamento dinamico su cambio lingua per le altre pagine con articoli
  window.addEventListener("languagechange", () => {
    if (articlesContainer || document.getElementById("churchRelocationNoticeContainer")) {
      refreshArticlesDisplay();
    }
  });
});
