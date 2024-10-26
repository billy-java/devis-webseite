import { format, addMonths } from "date-fns";

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
  };
}

export function initialiseWebseite(
  id?: string,
  user_id?: string,
  title_WB?: string,
  slogan?: string,
  farbe1?: string,
  farbe2?: string,
  schrift?: string,
  domain?: string,
  page_Anzahl?: number,
  liefert_Datum?: string,
  anprechPartner?: string,
  tel_anPart?: string,
  tel_WB?: string,
  fertig?: boolean,
  type?: string,
  img_Folder?: string,
  configuration?: {
    standart: boolean;
    startseite: boolean;
    contact: boolean;
    uberuns: boolean;
    datenschutz: boolean;
    impressum: boolean;
  }
): I_Webseite {
  const webseite = {
    id: id || '',
    user_id: user_id || '',
    title_WB: title_WB || '',
    slogan: slogan || '',
    farbe1: farbe1 || '',
    farbe2: farbe2 || '',
    schrift: schrift || '',
    domain: domain || '',
    page_Anzahl: page_Anzahl || 0,
    liefert_Datum: liefert_Datum || format(addMonths(new Date(), 2), 'yyyy-MM-dd'),
    anprechPartner: anprechPartner || '',
    tel_anPart: tel_anPart || '',
    tel_WB: tel_WB || '',
    fertig: fertig || false,
    type: type || '',
    img_Folder: img_Folder || '',
    configuration: configuration || {
      standart: false,
      startseite: false,
      contact: false,
      uberuns: false,
      datenschutz: false,
      impressum: false,
    },
  };
  return webseite;
}
