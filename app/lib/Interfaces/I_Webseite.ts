export interface I_Webseite {
  id: string;
  user_id: string;
  title_WB: string;
  slogan: string;
  farbe1: string;
  farbe2: string;
  schrift: string;
  domain: string;
  page_Anzahl: number;
  liefert_Datum: string;
  anprechPartner: string;
  tel_anPart: string;
  tel_WB: string;
  fertig: boolean; //en cours de validation, in bearbeitung, termine
  type: string; //PORTFOLIO; E-COMMERCE
  img_Folder: string;
  configuration: {
    standart: boolean;
    startseite: boolean;
    contact: boolean;
    uberuns: boolean;
    datenschutz: boolean;
    impressum: boolean;
  }
}

