'use client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  useDispatch,
  useSelector,
  useStore,
  TypedUseSelectorHook,
} from 'react-redux';
import { trackSliceReducer } from '@/store/features/trackSlice';
import { authSliceReducer } from './features/authSlice';
import { initialState } from '@/store/features/trackSlice';

// 🟣 Функция-загрузчик лайков только на клиенте
function loadFavoritesFromStorage() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem('favoriteTracks');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export const makeStore = () => {
  // Подготовим состояние для стора
  const preloadedState = {
    tracks: {
      ...initialState,
      favoriteTracks: loadFavoritesFromStorage(),
    },
  };

  // Собираем store
  return configureStore({
    reducer: combineReducers({
      tracks: trackSliceReducer,
      auth: authSliceReducer,
    }),
    preloadedState,
    devTools: true,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Для новых версий:
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore as () => AppStore;
