import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getProjects} from '../actions/projects';
import axios from 'axios';
export interface AddState {
  projects: any;
}

const initialState: AddState = {
  projects: [],
  //[
  // {
  //   name: 'Beach',
  //   id: 1,
  //   date: '14/08/2021',
  //   description:
  //     'Deserunt sint eu pariatur tempor ipsum duis sit deserunt adipisicing incididunt duis duis proident eiusmod. Aute adipisicing laboris enim dolore nulla adipisicing ex cillum aliquip commodo dolor nostrud nulla laborum. Aliqua do ad sit laborum. Reprehenderit incididunt laborum ad consectetur tempor ex et nulla.',
  //   info: [
  //     {name: 'Rating', value: 6, type: '/10'},
  //     {name: 'Time', value: 15, type: ' Min'},
  //     {name: 'Category', value: 'Art'},
  //   ],
  // },
  //],
};

export const addSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<any>) =>
      void state.projects.push(action.payload),
  },
  extraReducers: builder => {
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
    });
  },
});

export const {addProject} = addSlice.actions;

export default addSlice.reducer;
