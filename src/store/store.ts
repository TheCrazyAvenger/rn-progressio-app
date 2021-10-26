import {configureStore} from '@reduxjs/toolkit';
import addSlice from './slices/addSlice';

export const store = configureStore({
  reducer: {
    add: addSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
