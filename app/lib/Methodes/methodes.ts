import { format, parse } from 'date-fns';

export const labelCSS =
  'mb-2 block text-base font-semibold text-gray-400 sm:text-xl';

export const getDate_und_Time = (date: string): string => {
  // Obtenir le jour de la semaine (lundi, mardi, etc.)
  const dayNames = [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
  ];
  const dayName = dayNames[new Date(date).getDay()];

  // Obtenir le mois
  const monthNames = [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ];
  const monthName = monthNames[new Date(date).getMonth()];

  // Formater l'heure
  const time = new Date(date).toLocaleTimeString('de-DE', {
    hour: '2-digit',
    minute: '2-digit',
  });

  // Créer le format final : Montag, 45 Juni 2024, um 14:55
  return `${dayName}, ${new Date(date).getDate()} ${monthName} ${new Date(
    date
  ).getFullYear()}, um ${time}`;
};

export const getAlter = (date: string): string => {
  const today = new Date(); // Date actuelle
  const geburtsdatum = new Date(date);

  let alter = today.getFullYear() - geburtsdatum.getFullYear(); // Différence entre l'année actuelle et l'année de naissance

  const monthDifference = today.getMonth() - geburtsdatum.getMonth(); // Différence entre les mois
  const dayDifference = today.getDate() - geburtsdatum.getDate(); // Différence entre les jours

  // Si l'anniversaire n'a pas encore eu lieu cette année, on soustrait 1 à l'âge
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    alter--;
  }

  return `${alter}`; // Retourne l'âge en années avec l'unité en allemand
};

export const liefertDatum = (date: Date): string => {
  // Obtenir le jour de la semaine (lundi, mardi, etc.)
  const dayNames = [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
  ];
  const dayName = dayNames[date.getDay()];

  // Obtenir le mois
  const monthNames = [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ];
  const monthName = monthNames[date.getMonth()];

  // Créer le format final : Montag, 45 Juni 2024, um 14:55
  return `${dayName}, ${date.getDate()} ${monthName} ${date.getFullYear()}`;
};

export const generateId = (anfang: string): string => {
  return anfang + Math.random().toString(36).substring(8);
};

export const date_to_french_Format = (dateString: string) => {
  const parsedDate = parse(dateString, 'yyyy-MM-dd', new Date());
  return format(parsedDate, 'dd-MM-yyyy');
};




/* export const userSuche = (wasIchSuche: string, lager_Liste) => {
  return lager_Liste.filter((lagerKey) => {
    for (const key in lagerKey) {
      if (lagerKey.hasOwnProperty(key)) {
        const value = lagerKey[key];
        if (typeof value === 'string' || typeof value === 'number') {
          if (String(value).toLowerCase().includes(wasIchSuche.toLowerCase())) {
            return true;
          }
        } else if (Array.isArray(value)) {
          if (
            value.some(
              (el) =>
                typeof el === 'string' &&
                el.toLowerCase().includes(wasIchSuche.toLowerCase())
            )
          ) {
            return true;
          }
        }
      }
    }
    return false;
  });
}; */
