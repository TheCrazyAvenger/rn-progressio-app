import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getTheme} from '../actions/theme';

export interface ThemeState {
  theme: boolean;
}

const initialState: ThemeState = {
  theme: false,
};

const saveTheme = async (theme: boolean) => {
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
    changeTheme: state => {
      state.theme = !state.theme;
      saveTheme(state.theme);
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getTheme.fulfilled,
      (state, action: PayloadAction<boolean>) => {
        state.theme = action.payload;
      },
    );
  },
});

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;
