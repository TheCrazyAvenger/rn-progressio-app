import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {autoLogin, logout} from '../actions/auth';
import i18n from 'i18n-js';

export interface AuthState {
  token: string | null;
  userEmail: string | null;
  error: any;
}

const initialState: AuthState = {
  token: null,
  userEmail: null,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSucces: (state, action: PayloadAction<any>) => {
      const {token, userEmail} = action.payload;
      state.token = token;
      state.userEmail = userEmail;
    },
    setError: state => {
      state.error = {
        reg: i18n.t('signInError'),
        login: i18n.t('signUpError'),
      };
    },
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      autoLogin.fulfilled,
      (state, action: PayloadAction<any>) => {
        const {token, userEmail} = action.payload;
        state.token = token;
        state.userEmail = userEmail;
      },
    );
    builder.addCase(logout.fulfilled, state => {
      state.token = null;
      state.userEmail = null;
    });
  },
});
export const {authSucces, setError, clearError} = authSlice.actions;

export default authSlice.reducer;
