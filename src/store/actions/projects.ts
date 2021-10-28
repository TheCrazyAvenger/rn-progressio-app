import {createAsyncThunk} from '@reduxjs/toolkit';
import {GET_PROJECTS} from './actionsType';
import axios from 'axios';

export const getProjects = createAsyncThunk(
  'projects/getProjects',
  async () => {
    try {
      const response = await axios.get(
        `https://rn-progressio-default-rtdb.firebaseio.com/projects.json`,
      );

      let data = response.data;
      if (data === null || data === []) data = [];

      return data;
    } catch (e) {
      console.log(e);
    }
  },
);

export const saveProjects = createAsyncThunk<any>(
  'projects/saveProjects',
  async data => {
    try {
      await axios.put(
        `https://rn-progressio-default-rtdb.firebaseio.com/projects.json`,
        JSON.stringify(data),
      );
    } catch (e) {
      console.log(e);
    }
  },
);
