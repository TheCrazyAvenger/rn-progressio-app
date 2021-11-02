import {configureStore} from '@reduxjs/toolkit';
import addSlice from './slices/addSlice';
import themeSlice from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    projects: addSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
