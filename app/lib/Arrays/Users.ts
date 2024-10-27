import { I_User } from '../Interfaces/I_User';
import { format } from 'date-fns';

export const users: I_User[] = [
  {
    id: '0',
    vorname: '',
    nachname: '',
    passwort: '0@gmail.com',
    genre: '', // MANN, FRAU
    land: '',
    stadt: '',
    strasse: '',
    plz: '', // Code postal
    hausNr: 0,
    email: '0@gmail.com',
    tel: '',
    geburtsdatum: '',
    anmeldungsDatum: format(new Date(), 'yyyy-MM-dd'),
    status: 'ADMIN', //ADMIN, KUNDE
    messages:[]
  },
  {
    id: '1',
    vorname: 'Louis',
    nachname: 'Vuitton',
    passwort: '0000',
    genre: 'MANN',
    land: 'France',
    stadt: 'Paris',
    strasse: 'Rue de Rivoli',
    plz: '75001',
    hausNr: 7,
    email: 'louis.vuitton@exemple.com',
    tel: '+33 1 23 45 67 89',
    geburtsdatum: format(new Date(1980, 4, 15), 'yyyy-MM-dd'), // 15 mai 1980
    anmeldungsDatum: format(new Date(2023, 5, 15), 'yyyy-MM-dd'), // 15 juin 2023
    status: 'KUNDE', 
    messages:[]
  },
  {
    id: '2',
    vorname: 'Anna',
    nachname: 'Smith',
    passwort: '0000',
    genre: 'FRAU',
    land: 'Germany',
    stadt: 'Berlin',
    strasse: 'Unter den Linden',
    plz: '10117',
    hausNr: 25,
    email: 'anna.smith@exemple.com',
    tel: '+49 30 12345678',
    geburtsdatum: format(new Date(1990, 7, 23), 'yyyy-MM-dd'), // 23 août 1990
    anmeldungsDatum: format(new Date(2023, 6, 20), 'yyyy-MM-dd'), // 20 juillet 2023
    status: 'KUNDE',
    messages:[]
  },
  {
    id: '3',
    vorname: 'John',
    nachname: 'Doe',
    passwort: '0000',
    genre: 'Mann',
    land: 'USA',
    stadt: 'New York',
    strasse: '5th Avenue',
    plz: '10001',
    hausNr: 350,
    email: 'john.doe@exemple.com',
    tel: '+1 212-555-0100',
    geburtsdatum: format(new Date(1985, 11, 30), 'yyyy-MM-dd'), // 30 décembre 1985
    anmeldungsDatum: format(new Date(2023, 7, 10), 'yyyy-MM-dd'), // 10 août 2023
    status: 'ADMIN', 
    messages:[]
  },
  {
    id: '4',
    vorname: 'Maria',
    nachname: 'Garcia',
    passwort: '0000',
    genre: 'FRAU',
    land: 'Spain',
    stadt: 'Madrid',
    strasse: 'Gran Vía',
    plz: '28013',
    hausNr: 42,
    email: 'maria.garcia@exemple.com',
    tel: '+34 91 123 45 67',
    geburtsdatum: format(new Date(1988, 2, 18), 'yyyy-MM-dd'), // 18 mars 1988
    anmeldungsDatum: format(new Date(2023, 8, 5), 'yyyy-MM-dd'), // 5 septembre 2023
    status: 'KUNDE', 
    messages:[]
  },
  {
    id: '5',
    vorname: 'David',
    nachname: 'Brown',
    passwort: '0000',
    genre: 'Mann',
    land: 'UK',
    stadt: 'London',
    strasse: 'Baker Street',
    plz: 'NW1 6XE',
    hausNr: 221,
    email: 'david.brown@exemple.com',
    tel: '+44 20 7946 0958',
    geburtsdatum: format(new Date(1992, 1, 11), 'yyyy-MM-dd'), // 11 février 1992
    anmeldungsDatum: format(new Date(2023, 8, 12), 'yyyy-MM-dd'), // 12 septembre 2023
    status: 'KUNDE', 
    messages:[]
  },
  {
    id: '6',
    vorname: 'Emily',
    nachname: 'Johnson',
    passwort: '0000',
    genre: 'FRAU',
    land: 'Canada',
    stadt: 'Toronto',
    strasse: 'Queen Street',
    plz: 'M5H 2M9',
    hausNr: 123,
    email: 'emily.johnson@exemple.com',
    tel: '+1 416-555-1234',
    geburtsdatum: format(new Date(1995, 9, 2), 'yyyy-MM-dd'), // 2 octobre 1995
    anmeldungsDatum: format(new Date(2023, 9, 1), 'yyyy-MM-dd'), // 1er octobre 2023
    status: 'ADMIN', 
    messages:[]
  },
];
