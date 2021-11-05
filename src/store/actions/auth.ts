import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

interface IAuth {
  email: string;
  password: string;
  isLogin: boolean;
}

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

export const auth = createAsyncThunk('auth/authHandle', async (data: IAuth) => {
  try {
    const {email, password, isLogin} = data;

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

    const userEmail = email;

    await AsyncStorage.setItem('userEmail', JSON.stringify(userEmail));
    await AsyncStorage.setItem('token', JSON.stringify(response.data.idToken));
    await AsyncStorage.setItem(
      'expirationDate',
      JSON.stringify(expirationDate),
    );

    return {
      token,
      userEmail,
    };
  } catch (e) {
    console.log(e);
    return {
      reg: 'This user already exist',
      login: 'Wrong login or/and password',
    };
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
