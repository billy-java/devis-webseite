export interface I_Seite {
  id: string;
  wb_id: string;
  wb_name: string;
  content: { titel: string; absatz: string }[];
  kathegorie: string;
}

export function initialiseSeite(
  id?: string,
  wb_id?: string,
  wb_name?: string,
  content?: { titel: string; absatz: string }[],
  kathegorie?: string
): I_Seite {
  const seite = {
    id: id || '',
    wb_id: wb_id || '',
    wb_name: wb_name || '',
    content: content || [{ titel: '', absatz: '' }],
    kathegorie: kathegorie || 'STANDART',
  };
  return seite;
}
