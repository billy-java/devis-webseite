import { I_Message } from '../Interfaces/I_Message';
import { format } from 'date-fns';

export const messagesList: I_Message[] = [
  // Conversation entre Alice et Bob
  {
    id: '1',
    senderID: '2',
    senderVorname: 'Alice',
    empfaengerID: '1',
    text: "Bonjour Bob, avez-vous une idée du coût pour la création d'un site internet ?",
    sendungszeit: format(new Date('2024-09-20T08:00:00Z'), 'HH:mm'), // 10:00 CEST
    tag: format(new Date('2024-09-20T08:00:00Z'), 'yyyy-MM-dd'),
    isSent: true,
    gelesen: false,
    delete: false,
  },
  {
    id: '2',
    senderID: '1',
    senderVorname: 'Bob',
    empfaengerID: '2',
    text: 'Bonjour Alice, cela dépend des fonctionnalités. Avez-vous des spécifications précises ?',
    sendungszeit: format(new Date('2024-09-20T08:05:00Z'), 'HH:mm'), // 10:05 CEST
    tag: format(new Date('2024-09-20T08:05:00Z'), 'yyyy-MM-dd'),
    isSent: true,
    gelesen: false,
    delete: false,
  },
  {
    id: '3',
    senderID: '2',
    senderVorname: 'Alice',
    empfaengerID: '1',
    text: "Oui, nous aurions besoin d'un site e-commerce avec paiement en ligne.",
    sendungszeit: format(new Date('2024-09-20T08:10:00Z'), 'HH:mm'), // 10:10 CEST
    tag: format(new Date('2024-09-20T08:10:00Z'), 'yyyy-MM-dd'),
    isSent: true,
    gelesen: false,
    delete: false,
  },
  {
    id: '4',
    senderID: '1',
    senderVorname: 'Bob',
    empfaengerID: '2',
    text: "D'accord, je vais préparer une estimation et vous l'envoyer bientôt.",
    sendungszeit: format(new Date('2024-09-20T08:15:00Z'), 'HH:mm'), // 10:15 CEST
    tag: format(new Date('2024-09-20T08:15:00Z'), 'yyyy-MM-dd'),
    isSent: true,
    gelesen: false,
    delete: false,
  },
  // Nouvelle conversation entre Paul et Bob
  {
    id: '5',
    senderID: '3',
    senderVorname: 'Paul',
    empfaengerID: '1',
    text: "Bonjour Bob, pouvez-vous m'aider à optimiser le référencement de mon site internet ?",
    sendungszeit: format(new Date('2024-09-20T08:20:00Z'), 'HH:mm'), // 10:20 CEST
    tag: format(new Date('2024-09-20T08:20:00Z'), 'yyyy-MM-dd'),
    isSent: true,
    gelesen: false,
    delete: false,
  },
  {
    id: '6',
    senderID: '1',
    senderVorname: 'Bob',
    empfaengerID: '3',
    text: 'Bonjour Paul, bien sûr ! Avez-vous déjà effectué une analyse SEO de votre site ?',
    sendungszeit: format(new Date('2024-09-20T08:25:00Z'), 'HH:mm'), // 10:25 CEST
    tag: format(new Date('2024-09-20T08:25:00Z'), 'yyyy-MM-dd'),
    isSent: true,
    gelesen: false,
    delete: false,
  },
  {
    id: '7',
    senderID: '3',
    senderVorname: 'Paul',
    empfaengerID: '1',
    text: "Non, pas encore. Pouvez-vous m'expliquer comment faire ?",
    sendungszeit: format(new Date('2024-09-20T08:30:00Z'), 'HH:mm'), // 10:30 CEST
    tag: format(new Date('2024-09-20T08:30:00Z'), 'yyyy-MM-dd'),
    isSent: true,
    gelesen: false,
    delete: false,
  },
  {
    id: '8',
    senderID: '1',
    senderVorname: 'Bob',
    empfaengerID: '3',
    text: 'Bien sûr, je vais vous envoyer un guide détaillé sur les étapes à suivre pour une analyse SEO efficace.',
    sendungszeit: format(new Date('2024-09-20T08:35:00Z'), 'HH:mm'), // 10:35 CEST
    tag: format(new Date('2024-09-20T08:35:00Z'), 'yyyy-MM-dd'),
    isSent: true,
    gelesen: false,
    delete: false,
  },
];
