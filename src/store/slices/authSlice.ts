import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {auth, getData, logout} from '../actions/auth';

export interface AuthState {
  token: string | null;
  userEmail: string | null;
  error: {reg: string; login: string} | null;
}

const initialState: AuthState = {
  token: null,
  userEmail: null,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(auth.fulfilled, (state, action: PayloadAction<any>) => {
      const {token, userEmail} = action.payload;
      state.token = token;
      state.userEmail = userEmail;
    });
    builder.addCase(auth.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    });
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
export const {} = authSlice.actions;

export default authSlice.reducer;
