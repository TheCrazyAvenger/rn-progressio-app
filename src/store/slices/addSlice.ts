import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AddState {
  projects: Array<any>;
}

const initialState: AddState = {
  projects: [
    {
      name: 'Beach',
      id: 1,
      date: '14/08/2021',
      description:
        'Deserunt sint eu pariatur tempor ipsum duis sit deserunt adipisicing incididunt duis duis proident eiusmod. Aute adipisicing laboris enim dolore nulla adipisicing ex cillum aliquip commodo dolor nostrud nulla laborum. Aliqua do ad sit laborum. Reprehenderit incididunt laborum ad consectetur tempor ex et nulla.',
      info: [
        {name: 'Rating', value: 6, type: '/10'},
        {name: 'Time', value: 15, type: ' Min'},
        {name: 'Category', value: 'Art'},
      ],
    },

    {
      name: 'Apple',
      id: 2,
      date: '15/08/2021',
      description:
        'Deserunt sint eu pariatur tempor ipsum duis sit deserunt adipisicing incididunt duis duis proident eiusmod. Aute adipisicing laboris enim dolore nulla adipisicing ex cillum aliquip commodo dolor nostrud nulla laborum. Aliqua do ad sit laborum. Reprehenderit incididunt laborum ad consectetur tempor ex et nulla. Ad nisi laboris enim elit tempor ex. Sit excepteur aliquip voluptate dolore duis.',
      info: [
        {name: 'Rating', value: 6, type: '/10'},
        {name: 'Time', value: 15, type: ' Min'},
        {name: 'Category', value: 'Art'},
      ],
    },
    {
      name: 'Peach',
      id: 3,
      date: '16/08/2021',
      description:
        'Deserunt sint eu pariatur tempor ipsum duis sit deserunt adipisicing incididunt duis duis proident eiusmod. Aute adipisicing laboris enim dolore nulla adipisicing ex cillum aliquip commodo dolor nostrud nulla laborum. Aliqua do ad sit laborum. Reprehenderit incididunt laborum ad consectetur tempor ex et nulla. Ad nisi laboris enim elit tempor ex. Sit excepteur aliquip voluptate dolore duis.',
      info: [
        {name: 'Rating', value: 6, type: '/10'},
        {name: 'Time', value: 15, type: ' Min'},
        {name: 'Category', value: 'Art'},
      ],
    },
  ],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<any>) => {
      state.projects.push(action.payload);
    },
  },
});

export const {addProject} = counterSlice.actions;

export default counterSlice.reducer;
