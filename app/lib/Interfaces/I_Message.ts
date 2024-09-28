export interface I_Message {
    id: string;
    senderID: string;
    senderVorname: string;
    empfaengerID: string;
    text: string;
    sendungszeit: string;
    tag: string;
    isSent: boolean;
    gelesen: boolean;
    delete: boolean;
}