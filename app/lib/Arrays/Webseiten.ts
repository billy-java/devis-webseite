import { I_Webseite } from '../Interfaces/I_Webseite';
import { format } from 'date-fns';

export const webseiten: I_Webseite[] = [
  {
    id: '0',
    user_id: '2',
    title_WB: 'Creative Minds',
    slogan: 'Innovating the Future',
    farbe1: '#3498db', // Couleur principale : bleu clair
    farbe2: '#2ecc71', // Couleur secondaire : vert
    schrift: 'Arial, sans-serif',
    domain: 'creative-minds.de',
    page_Anzahl: 5,
    liefert_Datum: format(new Date('2024-02-15'), 'yyyy-MM-dd'), // Format correct pour input type="date"
    anprechPartner: 'Alice Dupont',
    tel_anPart: '+49 30 9876543',
    tel_WB: '+49 171 2345678',
    fertig: false,
    type: 'PORTFOLIO',
    img_Folder: 'www.google.de',
    configuration: {
      standart: false,
      startseite: false,
      contact: false,
      uberuns: false,
      datenschutz: false,
      impressum: false,
    },
  },
  {
    id: '1',
    user_id: '2',
    title_WB: 'Green Horizon',
    slogan: 'Sustainable Solutions for a Better World',
    farbe1: '#27ae60', // Couleur principale : vert
    farbe2: '#f39c12', // Couleur secondaire : orange
    schrift: 'Roboto, sans-serif',
    domain: 'green-horizon.de',
    page_Anzahl: 8,
    liefert_Datum: format(new Date('2024-03-10'), 'yyyy-MM-dd'), // Format correct pour input type="date"
    anprechPartner: 'Bob Müller',
    tel_anPart: '+49 30 9876543',
    tel_WB: '+49 30 9876543',
    fertig: true,
    type: 'PORTFOLIO',
    img_Folder: 'www.youtube.de',
    configuration: {
      standart: true,
      startseite: true,
      contact: true,
      uberuns: true,
      datenschutz: true,
      impressum: true,
    },
  },
  {
    id: '2',
    user_id: '2',
    title_WB: 'TechWave',
    slogan: 'Empowering the Digital Age',
    farbe1: '#e74c3c', // Couleur principale : rouge
    farbe2: '#8e44ad', // Couleur secondaire : violet
    schrift: 'Helvetica, sans-serif',
    domain: 'tech-wave.de',
    page_Anzahl: 12,
    liefert_Datum: format(new Date('2024-04-01'), 'yyyy-MM-dd'), // Format correct pour input type="date"
    anprechPartner: 'Clara Schmidt',
    tel_anPart: '+49 30 9876543',
    tel_WB: '+49 89 4567890',
    fertig: true,
    type: 'E-COMMERCE',
    img_Folder: 'www.github.com',
    configuration: {
      standart: false,
      startseite: false,
      contact: false,
      uberuns: false,
      datenschutz: false,
      impressum: false,
    },
  },
];
