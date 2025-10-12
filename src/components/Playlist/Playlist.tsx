import Image from 'next/image';
import Link from 'next/link';
import styles from './Playlist.module.scss';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import { data } from '@/data';
export default function Playlist() {
  return (
    <div className={styles.content__playlist}>
      {data.map((track) => (
        //* ---- Трек 1 ---- *
        <PlaylistItem key={track._id} track={track} />
      ))}
    </div>
  );
}
