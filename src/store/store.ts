import {configureStore} from '@reduxjs/toolkit';
import addSlice from './slices/addSlice';
import authSlice from './slices/authSlice';
import themeSlice from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    projects: addSlice,
    theme: themeSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
