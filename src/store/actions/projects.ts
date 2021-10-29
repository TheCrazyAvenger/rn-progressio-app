import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getProjects = createAsyncThunk(
  'projects/getProjects',
  async () => {
    try {
      let data = await AsyncStorage.getItem('projects');

      if (data === null) {
        return [];
      } else {
        return JSON.parse(data);
      }
    } catch (e) {
      console.log(e);
    }
  },
);

export const saveProjects = createAsyncThunk<any>(
  'projects/saveProjects',
  async data => {
    try {
      console.log(data);
      await AsyncStorage.setItem('projects', JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  },
);
