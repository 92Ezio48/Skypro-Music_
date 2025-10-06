import Image from 'next/image';
import Link from 'next/link';
import styles from './CenterContent.module.scss';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
export default function CenterContent() {
  return (
    <div className={styles.centerblock__content}>
      <div className={styles.content__title}>
        <div className={`${styles.playlistTitle__col} ${styles.col01}`}>
          Трек
        </div>
        <div className={`${styles.playlistTitle__col} ${styles.col02}`}>
          Исполнитель
        </div>
        <div className={`${styles.playlistTitle__col} ${styles.col03}`}>
          Альбом
        </div>
        <div className={`${styles.playlistTitle__col} ${styles.col04}`}>
          <svg className={styles.playlistTitle__svg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>
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
      {/* content__playlist */}
    </div>
  );
}
