'use client';
import { useEffect } from 'react';
import { useAppSelector } from '@/store/store';

// !!! Больше не нужен dispatch и setFavoriteTracks !!!

export default function FavoriteTracksSync() {
  const favoriteTracks = useAppSelector((state) => state.tracks.favoriteTracks);

  useEffect(() => {
    
    localStorage.setItem('favoriteTracks', JSON.stringify(favoriteTracks));
  }, [favoriteTracks]);

  return null; // этот компонент просто сидит "невидимо" в дереве
}
