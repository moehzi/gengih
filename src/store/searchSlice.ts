import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface inputState {
  value: string;
}

const initialState: inputState = {
  value: '',
};
export const searchSlice = createSlice({
  name: 'inputValue',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setText } = searchSlice.actions;
export const inputValue = (state: RootState) => state.inputValue.value;
export default searchSlice.reducer;
