/**
 * Funzione helper per convertire stringhe di data nel formato "Feb 2024" o "Gen 2021"
 * in oggetti Date parsabili per il confronto e l'ordinamento.
 * 
 * @param dateString - Stringa nel formato "Mese Anno" (es. "Feb 2024", "Gen 2021")
 * @returns Oggetto Date corrispondente
 */
export function parseDate(dateString: string): Date {
  const months: { [key: string]: number } = {
    'gen': 0, 'jan': 0, 'gennaio': 0, 'january': 0,
    'feb': 1, 'febbraio': 1, 'february': 1,
    'mar': 2, 'marzo': 2, 'march': 2,
    'apr': 3, 'aprile': 3, 'april': 3,
    'mag': 4, 'may': 4, 'maggio': 4,
    'giu': 5, 'jun': 5, 'giugno': 5, 'june': 5,
    'lug': 6, 'jul': 6, 'luglio': 6, 'july': 6,
    'ago': 7, 'aug': 7, 'agosto': 7, 'august': 7,
    'set': 8, 'sep': 8, 'settembre': 8, 'september': 8,
    'ott': 9, 'oct': 9, 'ottobre': 9, 'october': 9,
    'nov': 10, 'novembre': 10, 'november': 10,
    'dic': 11, 'dec': 11, 'dicembre': 11, 'december': 11,
  };

  const parts = dateString.toLowerCase().trim().split(' ');
  const monthStr = parts[0];
  const yearStr = parts[1];

  const month = months[monthStr] ?? 0;
  const year = parseInt(yearStr) || new Date().getFullYear();

  return new Date(year, month, 1);
}


