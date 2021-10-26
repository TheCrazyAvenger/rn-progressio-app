import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AddState {
  projects: Array<any>;
}

const initialState: AddState = {
  projects: [
    {name: 'Beach', id: 1, date: '14/08/2021'},
    {name: 'Apple', id: 2, date: '15/08/2021'},
    {name: 'Peach', id: 3, date: '16/08/2021'},
  ],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state;
    },
  },
});

export const {increment} = counterSlice.actions;

export default counterSlice.reducer;
