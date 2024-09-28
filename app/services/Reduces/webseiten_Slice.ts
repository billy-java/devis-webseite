import { webseiten } from '@/app/lib/Arrays/Webseiten';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { I_Webseite } from '@/app/lib/Interfaces/I_Webseite';

const webseitenList: I_Webseite[] = [...webseiten];

const webseiten_Slice = createSlice({
  name: 'webseite',
  initialState: webseitenList || ([] as I_Webseite[]),

  reducers: {
    addWebseite: (
      state,
      action: PayloadAction<{ newWebseite: I_Webseite }>
    ) => {
      const { newWebseite } = action.payload;

      return [newWebseite, ...state];
    },

    updateWebseite: (
      state,
      action: PayloadAction<{ updated_Webseite: I_Webseite }>
    ) => {
      const { updated_Webseite } = action.payload;
      const index = state.findIndex(
        (element) => element.id === updated_Webseite.id
      );
      if (index !== -1) {
        state[index] = updated_Webseite;
      }
    },

    deleteWebseite: (
      state,
      action: PayloadAction<{
        id: string;
      }>
    ) => {
      const { id } = action.payload;

      state = state.filter((webseite) => webseite.id !== id);

      return state;
    },

    aLLupdateWebseite: (
      state,
      action: PayloadAction<I_Webseite[]>
    ) => {
      return action.payload; // Remplace toute la liste par la nouvelle liste
    },
  },
});

export const addWebseite__Hilfe = (newWebseite: I_Webseite) => {
 

  return {
    type: 'webseite/addWebseite',
    payload: {
      newWebseite: newWebseite,
    },
  };
};

export const updateWebseite__Hilfe = (updated_Webseite: I_Webseite) => {
 

  return {
    type: 'webseite/updateWebseite',
    payload: {
      updated_Webseite,
    },
  };
};

export const deleteWebseite__Hilfe = (id: string) => {
  

  return {
    type: 'webseite/deleteWebseite',
    payload: {
      id,
    },
  };
};

export const aLLupdateWebseite__Hilfe = (newWebseiten: I_Webseite[]) => {
  return {
    type: 'webseite/aLLupdateWebseite',
    payload: newWebseiten,
  };
};

export default webseiten_Slice.reducer;
