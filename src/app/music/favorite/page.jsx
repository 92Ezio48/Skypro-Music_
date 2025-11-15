'use client';
import { useAppSelector } from '@/store/store';
import CenterTopBlock from '@/components/CenterTopBlock/CenterTopBlock';
import Playlist from '@/components/Playlist/Playlist';
import styles from '../main/page.module.css';
import { useState, useEffect } from 'react';

export default function FavoritePage() {
  const [mounted, setMounted] = useState(false);

  // fix: добавь useEffect
  useEffect(() => {
    setMounted(true);
  }, []);

  const favoriteTracks = useAppSelector((state) => state.tracks.favoriteTracks);

  if (!mounted) return null;

  return (
    <>
      <div className={styles.centerTopBlock}>
        <CenterTopBlock title="Избранные треки" />
      </div>
      <div className={styles.contentPlaylist}>
        <Playlist tracks={favoriteTracks} />
      </div>
    </>
  );
}
