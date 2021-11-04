import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncThunkPayloadCreator, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

interface IAuth {
  nickname: string;
  email: string;
  password: string;
  isLogin: boolean;
}

export const getData = createAsyncThunk('auth/getData', async () => {
  try {
    let token = await AsyncStorage.getItem('token');
    let userData = await AsyncStorage.getItem('userData');

    if (token === null && userData === null) {
      return {token: null, userData: null};
    } else {
      return {token: JSON.parse(token!), userData: JSON.parse(userData!)};
    }
  } catch (e) {
    console.log(e);
  }
});

export const auth = createAsyncThunk('auth/authHandle', async (data: IAuth) => {
  try {
    const {nickname, email, password, isLogin} = data;

    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCnJXnI7jzSpr3JbfQlbl00j7q1sS58EH4';
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCnJXnI7jzSpr3JbfQlbl00j7q1sS58EH4';
    }

    const response = await axios.post(url, authData);
    console.log(response.data);

    const expirationDate = new Date(
      new Date().getTime() + response.data.expiresIn * 1000,
    );

    const token = response.data.idToken;

    const userData = {nickname, token, email};

    await AsyncStorage.setItem('userData', JSON.stringify(userData));
    await AsyncStorage.setItem('token', JSON.stringify(response.data.idToken));
    await AsyncStorage.setItem(
      'expirationDate',
      JSON.stringify(expirationDate),
    );

    return {
      token,
      userData,
    };
  } catch (e) {
    console.log(e);
  }
});
