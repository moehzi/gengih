import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { User } from '../interfaces/UserData';

interface UserState {
  value: User;
}

const initialState: UserState = {
  value: {} as User,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const user = (state: RootState) => state.user.value;
export default userSlice.reducer;
