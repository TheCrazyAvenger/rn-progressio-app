import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getProjects, saveProjects} from '../actions/projects';
export interface AddState {
  projects: any;
  bookmarks: any;
}

const initialState: AddState = {
  projects: [
    //   {
    //     name: 'Room',
    //     id: 1,
    //     date: '10/29/21',
    //     booked: false,
    //     img: 'file:///storage/emulated/0/Android/data/com.progressio/files/Pictures/3642a18d-d75a-4269-b2c9-47de15477f6a.jpg',
    //     description:
    //       'Deserunt sint eu pariatur tempor ipsum duis sit deserunt adipisicing incididunt duis duis proident eiusmod. Aute adipisicing laboris enim dolore nulla adipisicing ex cillum aliquip commodo dolor nostrud nulla laborum. Aliqua do ad sit laborum. Reprehenderit incididunt laborum ad consectetur tempor ex et nulla.',
    //     info: [
    //       {name: 'Rating', value: 5, type: '/10'},
    //       {name: 'Time', value: 15, type: ' Min'},
    //       {name: 'Category', value: 'Interier'},
    //     ],
    //   },
  ],
  bookmarks: [],
};

export const addSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<any>) => {
      state.projects.push(action.payload);
    },
    toogleBookmarks: (state, action: PayloadAction<number>) =>
      void state.projects.map((item: any) => {
        if (item.id === action.payload) {
          item.booked = !item.booked;
          state.bookmarks = state.projects.filter((item: any) => item.booked);
        }
      }),
    removeProject: (state, action: PayloadAction<number>) => {
      state.projects = state.projects.filter(
        (item: any) => item.id !== action.payload,
      );
      state.bookmarks = state.bookmarks.filter(
        (item: any) => item.id !== action.payload,
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.projects = action.payload;

      state.bookmarks = state.projects.filter((item: any) => item.booked);
    });
    builder.addCase(saveProjects.fulfilled, () => {
      return;
    });
  },
});

export const {addProject, toogleBookmarks, removeProject} = addSlice.actions;

export default addSlice.reducer;
