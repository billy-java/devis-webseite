import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Type de l'utilisateur
type I_CurrentUser = {
  id: string;
  info: string;
};

type AuthState = {
  user: I_CurrentUser | null;
};

// État initial
const initialState: AuthState = {
  user: { id: '2', info: '' },
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
  },
});

export const { login, logout } = authSLICE.actions;

export default authSLICE.reducer;
