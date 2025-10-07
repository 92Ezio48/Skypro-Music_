import Image from 'next/image';
import Link from 'next/link';
import styles from './Playlist.module.scss';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
export default function Playlist() {
  return (
    <div className={styles.content__playlist}>
      {/* ---- Трек 1 ---- */}
      <PlaylistItem />
      {/* ---- Трек 2 ---- */}
      <PlaylistItem />
      {/* ---- Трек 3 ---- */}
      <PlaylistItem />
      {/* ---- Трек 4 ---- */}
      <PlaylistItem />
      {/* ---- Трек 5 ---- */}
      <PlaylistItem />
    </div>
  );
}
