import { configureStore } from '@reduxjs/toolkit';
import inputValReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    inputVal: inputValReducer,
  },
});
