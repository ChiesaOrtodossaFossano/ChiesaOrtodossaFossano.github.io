// =========================================================
// CONFIGURAZIONE GOOGLE FOGLI (GOOGLE SHEETS)
// Parrocchia Ortodossa Romena Fossano/Mondovì
// =========================================================
// Per pubblicare omelie, avvisi e il Santo del Giorno da Google Fogli:
//
// 1. Crea un Foglio Google con le seguenti colonne nella prima riga:
//    data | ora | titolo | categoria | messaggio | autore | immagini
//
//    Esempio di riga compilata:
//    - data: 25/10/2026 (oppure 2026-10-25)
//    - ora: 10:30
//    - titolo: Omelia Domenicale
//    - categoria: omelia (oppure: avviso, santo, frase, lettera, riflessione)
//                 Nota: se imposti la categoria a "NULL" o "nascosto", il messaggio NON viene mostrato sul sito!
//    - messaggio: Testo dell'omelia o della comunicazione...
//    - autore: Padre Nicolae Pușcașu
//    - immagini: (Opzionale) Link Google Drive (condiviso con "Chiunque abbia il link") o link web diretto https://. Anche più immagini separate da virgola.
//
// 2. In Google Fogli, clicca in alto su:
//    File > Condividi > Pubblica sul Web (File > Share > Publish to web)
//    - Seleziona: "Intero documento" (o "Foglio 1")
//    - Formato: "Valori separati da virgola (.csv)"
//    - Clicca sul pulsante blu "Pubblica"
//
// 3. Incolla il link generato qui sotto nella proprietà "csvUrl":
// =========================================================

const GOOGLE_SHEETS_CONFIG = {
  // URL CSV generato da "Pubblica sul Web" di Google Fogli:
  csvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQVXlalDgpTUAxy9bsx3Z1uEGXMC5pJkS0sdE1thihVc7LSaEkbtklpYFLvkSdfPm0XK2WL0DWO27mO/pub?gid=0&single=true&output=csv",

  // Metodo alternativo: incolla solo l'ID del foglio se condiviso con "Chiunque abbia il link può visualizzare"
  sheetId: ""
};

// Funzione helper per ottenere l'URL CSV effettivo
function getGoogleSheetsCsvUrl() {
  if (typeof GOOGLE_SHEETS_CONFIG === "undefined") return "";
  if (GOOGLE_SHEETS_CONFIG.csvUrl && GOOGLE_SHEETS_CONFIG.csvUrl.trim() !== "") {
    return GOOGLE_SHEETS_CONFIG.csvUrl.trim();
  }
  if (GOOGLE_SHEETS_CONFIG.sheetId && GOOGLE_SHEETS_CONFIG.sheetId.trim() !== "") {
    return `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEETS_CONFIG.sheetId.trim()}/gviz/tq?tqx=out:csv`;
  }
  return "";
}

function isGoogleSheetsConfigured() {
  const url = getGoogleSheetsCsvUrl();
  return Boolean(url && (url.startsWith("https://docs.google.com/spreadsheets") || url.startsWith("https://")));
}
