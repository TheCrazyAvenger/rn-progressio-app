import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getGoal, getProjects} from '../actions/projects';
import {getTheme} from '../actions/theme';

export interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: 'light',
};

const saveTheme = async (theme: string) => {
  try {
    await AsyncStorage.setItem('theme', JSON.stringify(theme));
  } catch (e) {
    console.log(e);
  }
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
      saveTheme(state.theme);
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getTheme.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.theme = action.payload;
      },
    );
  },
});

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;
