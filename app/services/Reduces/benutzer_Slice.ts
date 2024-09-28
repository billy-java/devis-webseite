import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { I_User } from '@/app/lib/Interfaces/I_User';
import { users } from '@/app/lib/Arrays/Users';

const usersList: I_User[] = [...users];

const benutzer_Slice = createSlice({
  name: 'benutzer',
  initialState: usersList || ([] as I_User[]),

  reducers: {
    // Reducer zum Hinzufügen eines neuen Benutzers zum Benutzer

    addBenutzer: (state, action: PayloadAction<{ newBenutzer: I_User }>) => {
      const { newBenutzer } = action.payload;

      return [newBenutzer, ...state];
    },

    // Reducer zum Aktualisieren eines vorhandenen Benutzers im Benutzer
    updateBenutzer: (
      state,
      action: PayloadAction<{ updated_Benutzer: I_User }>
    ) => {
      const { updated_Benutzer } = action.payload;
      const index = state.findIndex(
        (element) => element.id === updated_Benutzer.id
      );
      if (index !== -1) {
        state[index] = updated_Benutzer;
      }
    },

    deleteBenutzer: (
      state,
      action: PayloadAction<{
        id: string;
      }>
    ) => {
      const { id } = action.payload;
      //beispiel : {type: 'todo/deleteBenutzer', payload:20}
      state = state.filter((benutzer) => benutzer.id !== id);

      return state;
    },
  },
});

export const addBenutzer__Hilfe = (newBenutzer: I_User) => {
  /*  await handle_createData(newBenutzer); */

  return {
    type: 'benutzer/addBenutzer',
    payload: {
      newBenutzer: newBenutzer,
    },
  };
};

export const updateBenutzer__Hilfe = (updated_Benutzer: I_User) => {
  /*  await handle_updateData(updated_Benutzer); */

  return {
    type: 'benutzer/updateBenutzer',
    payload: {
      updated_Benutzer,
    },
  };
};

export const deleteBenutzer__Hilfe = (id: string) => {
  /*  await handle_deleteData(id); */

  return {
    type: 'benutzer/deleteBenutzer',
    payload: {
      id,
    },
  };
};
export default benutzer_Slice.reducer;
