import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {auth, getData} from '../actions/auth';
import {getTheme} from '../actions/theme';

export interface AuthState {
  token: string | null;
  userData: any;
}

const initialState: AuthState = {
  token: null,
  userData: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(auth.fulfilled, (state, action: PayloadAction<any>) => {
      const {token, userData} = action.payload;
      state.token = token;
      state.userData = userData;
    });
    builder.addCase(getData.fulfilled, (state, action: PayloadAction<any>) => {
      const {token, userData} = action.payload;
      state.token = token;
      state.userData = userData;
    });
  },
});
export const {} = authSlice.actions;

export default authSlice.reducer;
