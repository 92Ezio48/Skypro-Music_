import { configureStore } from '@reduxjs/toolkit';
import {
  trackSliceReducer,
  initialState as tracksInitialState,
} from '@/store/features/trackSlice';
import { authSliceReducer } from '@/store/features/authSlice'; // или своя начальная auth'а

export const mockTrack = {
  _id: 1,
  author: 'Test Artist',
  album: 'Best Album',
  track_file: 'music.mp3',
};

export const preloadedState = {
  tracks: {
    ...tracksInitialState,
    currentTrack: mockTrack,
    playlist: [mockTrack],
    isPlay: false,
    isShuffle: false,
    // ... другие поля initialState по необходимости
  },
  auth: {
    access: 'mock-access-token', // ✅
    username: 'Test Tester', // Можно оставить пустым: ''
    refresh: 'mock-refresh', // Можно оставить пустым: ''
  },
};

export const testStore = configureStore({
  reducer: {
    tracks: trackSliceReducer,
    auth: authSliceReducer,
  },
  preloadedState,
});
