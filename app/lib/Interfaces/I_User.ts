export interface I_User {
  id: string;
  vorname: string;
  nachname: string;
  passwort: string;
  genre: string; // MANN, FRAU
  land: string;
  stadt: string;
  strasse: string;
  plz: string; // Code postal
  hausNr: number;
  email: string;
  tel: string;
  geburtsdatum: string;
  anmeldungsDatum: string;
  status: string; // ADMIN, KUNDE
  online: boolean;
  messageNonLu: number;
}
