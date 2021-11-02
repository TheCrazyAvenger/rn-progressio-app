import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getGoal, getProjects} from '../actions/projects';
export interface AddState {
  projects: any;
  bookmarks: any;
  goal: null | number;
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
  goal: null,
};

const saveProjects = async (data: any) => {
  try {
    await AsyncStorage.setItem('projects', JSON.stringify(data));
  } catch (e) {
    console.log(e);
  }
};

const saveGoal = async (goal: number | null) => {
  try {
    await AsyncStorage.setItem('goal', JSON.stringify(goal));
  } catch (e) {
    console.log(e);
  }
};

export const addSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<any>) => {
      state.projects.push(action.payload);

      saveProjects(state.projects);
    },
    toogleBookmarks: (state, action: PayloadAction<number>) => {
      const id = action.payload - 1;
      state.projects[id].booked = !state.projects[id].booked;
      state.bookmarks = state.projects.filter((item: any) => item.booked);

      saveProjects(state.projects);
    },
    removeProject: (state, action: PayloadAction<number>) => {
      state.projects = state.projects.filter(
        (item: any) => item.id !== action.payload,
      );
      state.bookmarks = state.bookmarks.filter(
        (item: any) => item.id !== action.payload,
      );
      saveProjects(state.projects);
    },
    updateProject: (state, action: PayloadAction<any>) => {
      state.projects = state.projects.map((item: any) => {
        if (item.id === action.payload.id) {
          item = action.payload.project;
        }
        return item;
      });
      state.bookmarks = state.bookmarks.map((item: any) => {
        if (item.id === action.payload.id) {
          item = action.payload.project;
        }
        return item;
      });
      saveProjects(state.projects);
    },
    setGoal: (state, action: PayloadAction<number | null>) => {
      state.goal = action.payload;
      saveGoal(action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.projects = action.payload;

      state.bookmarks = state.projects.filter((item: any) => item.booked);
    });
    builder.addCase(getGoal.fulfilled, (state, action) => {
      state.goal = action.payload;
    });
  },
});

export const {
  addProject,
  toogleBookmarks,
  removeProject,
  updateProject,
  setGoal,
} = addSlice.actions;

export default addSlice.reducer;
