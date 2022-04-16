import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export const authSlice = createSlice({
  name: 'token',
  initialState: {
    value: '',
  },
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;
export const token = (state: RootState) => state.token.value;
export default authSlice.reducer;
