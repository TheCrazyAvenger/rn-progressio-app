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
