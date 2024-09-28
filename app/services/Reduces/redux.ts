//fichier redux.ts

import { configureStore } from '@reduxjs/toolkit';
import benutzer_Slice from './benutzer_Slice';
import messages_Slice from './messages_Slice';
import webseiten_Slice from './webseiten_Slice';
import seiten_Slice from './seiten_Slice';

import authSLICE from "./authSLICE";

// Konfiguration des Redux-Stores mit den definierten Reduzierern
export const store = configureStore({
  reducer: {
    users: benutzer_Slice,
    messages: messages_Slice,
    webseiten: webseiten_Slice,
    seiten: seiten_Slice,
    auth:authSLICE,
  },
});

export type RootState = ReturnType<typeof store.getState>;
