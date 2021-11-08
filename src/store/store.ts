import {configureStore} from '@reduxjs/toolkit';
import {authApi} from './api/authApi';
import addSlice from './slices/addSlice';
import authSlice from './slices/authSlice';
import themeSlice from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    projects: addSlice,
    theme: themeSlice,
    auth: authSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
