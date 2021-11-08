import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getData, logout} from '../actions/auth';

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
        reg: 'User is already exist',
        login: 'Wrong login or/and password',
      };
    },
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(getData.fulfilled, (state, action: PayloadAction<any>) => {
      const {token, userEmail} = action.payload;
      state.token = token;
      state.userEmail = userEmail;
    });
    builder.addCase(logout.fulfilled, state => {
      state.token = null;
      state.userEmail = null;
    });
  },
});
export const {authSucces, setError, clearError} = authSlice.actions;

export default authSlice.reducer;
