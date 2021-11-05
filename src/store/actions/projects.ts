import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

interface IData {
  projects: any;
  userEmail: string | null;
}

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

export const getGoal = createAsyncThunk('projects/getGoal', async () => {
  try {
    let goal = await AsyncStorage.getItem('goal');

    if (goal === null) {
      return goal;
    } else {
      return JSON.parse(goal);
    }
  } catch (e) {
    console.log(e);
  }
});

export const exportData = createAsyncThunk(
  'projects/exportData',
  async (data: IData) => {
    try {
      const {userEmail, projects} = data;

      const path = userEmail!.split('.')[0];

      const url = `https://rn-progressio-ccdee-default-rtdb.firebaseio.com/${path}.json`;

      await axios.put(url, projects);
    } catch (e) {
      console.log(e);
    }
  },
);

export const importData = createAsyncThunk(
  'projects/importData',
  async (userEmail: string | null) => {
    try {
      const path = userEmail!.split('.')[0];

      const url = `https://rn-progressio-ccdee-default-rtdb.firebaseio.com/${path}.json`;

      const response = await axios.get(url);
      const data = response.data;

      return data;
    } catch (e) {
      console.log(e);
    }
  },
);
