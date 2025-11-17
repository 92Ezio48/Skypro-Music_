import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { access } from 'fs';
import { act } from 'react';

type initialStateType = {
  username: string;
  access: string;
  refresh: string;
};
const initialState: initialStateType = {
  username:
    typeof window !== 'undefined' ? localStorage.getItem('username') || '' : '',
  access:
    typeof window !== 'undefined' ? localStorage.getItem('access') || '' : '',
  refresh:
    typeof window !== 'undefined' ? localStorage.getItem('refresh') || '' : '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      localStorage.setItem('username', action.payload);
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.access = action.payload;
      localStorage.setItem('access', action.payload);
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refresh = action.payload;
      localStorage.setItem('refresh', action.payload);
    },
    clearUser: (state) => {
      state.username = '';
      state.access = '';
      state.refresh = '';
      localStorage.removeItem('username');
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
    },
  },
});
export const { setUsername, setAccessToken, setRefreshToken, clearUser } =
  authSlice.actions;
export const authSliceReducer = authSlice.reducer;
