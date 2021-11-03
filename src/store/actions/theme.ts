import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getTheme = createAsyncThunk('projects/getTheme', async () => {
  try {
    let theme = await AsyncStorage.getItem('theme');

    if (theme === null) {
      return false;
    } else {
      return JSON.parse(theme);
    }
  } catch (e) {
    console.log(e);
  }
});
