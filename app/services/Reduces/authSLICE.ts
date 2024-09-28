// store/authSlice.ts
import { messagesList } from '@/app/lib/Arrays/MessagesList';
import { I_Message } from '@/app/lib/Interfaces/I_Message';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Type de l'utilisateur
type I_CurrentUser = {
  id: string;
  info: string;
  currentMessages: I_Message[];
};

type AuthState = {
  user: I_CurrentUser | null;
};

// État initial
const initialState: AuthState = {
  user: { id: '2', info: '', currentMessages: messagesList },
};

// Slice Redux pour l'authentification
export const authSLICE = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<I_CurrentUser>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    updateCurrentMessages: (state, action: PayloadAction<I_Message[]>) => {
      if (state.user) {
        state.user.currentMessages = action.payload;
      }
    },
  },
});

export const { login, logout, updateCurrentMessages } = authSLICE.actions;

export default authSLICE.reducer;
