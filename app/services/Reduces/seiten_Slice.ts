import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { I_Seite } from '@/app/lib/Interfaces/I_Seite';
import { seiten } from '@/app/lib/Arrays/Seiten';

const usersList: I_Seite[] = [...seiten];

const seiten_Slice = createSlice({
  name: 'seiten',
  initialState: usersList || ([] as I_Seite[]),

  reducers: {
    addSeite: (state, action: PayloadAction<{ newSeite: I_Seite }>) => {
      const { newSeite } = action.payload;

      return [newSeite, ...state];
    },

    // Reducer zum Aktualisieren eines vorhandenen Seites im Seite
    updateSeite: (state, action: PayloadAction<{ updated_Seite: I_Seite }>) => {
      const { updated_Seite } = action.payload;
      const index = state.findIndex(
        (element) => element.id === updated_Seite.id
      );
      if (index !== -1) {
        state[index] = updated_Seite;
      }
    },

    deleteSeite: (
      state,
      action: PayloadAction<{
        id: string;
      }>
    ) => {
      const { id } = action.payload;
      //beispiel : {type: 'todo/deleteSeite', payload:20}
      state = state.filter((seite) => seite.id !== id);

      return state;
    },
  },
});

export const addSeite__Hilfe = (newSeite: I_Seite) => {
  /*  await handle_createData(newSeite); */

  return {
    type: 'seiten/addSeite',
    payload: {
      newSeite: newSeite,
    },
  };
};

export const updateSeite__Hilfe = (updated_Seite: I_Seite) => {
  /*  await handle_updateData(updated_Seite); */

  return {
    type: 'seiten/updateSeite',
    payload: {
      updated_Seite,
    },
  };
};

export const deleteSeite__Hilfe = (id: string) => {
  /*  await handle_deleteData(id); */

  return {
    type: 'seiten/deleteSeite',
    payload: {
      id,
    },
  };
};
export default seiten_Slice.reducer;
