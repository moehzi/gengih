import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import inputValReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    inputValue: inputValReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
