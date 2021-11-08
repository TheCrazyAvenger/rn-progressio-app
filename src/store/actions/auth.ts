import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getData = createAsyncThunk('auth/getData', async () => {
  try {
    let token = await AsyncStorage.getItem('token');
    let userEmail = await AsyncStorage.getItem('userEmail');

    if (token === null && userEmail === null) {
      return {token: null, userEmail: null};
    } else {
      return {token: JSON.parse(token!), userEmail: JSON.parse(userEmail!)};
    }
  } catch (e) {
    console.log(e);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await AsyncStorage.removeItem('userEmail');
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('expirationDate');
  } catch (e) {
    console.log(e);
  }
});
