import Image from 'next/image';
import Link from 'next/link';
import styles from './CenterContent.module.scss';
import Playlist from '../Playlist/Playlist';
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
      <Playlist />
      {/* content__playlist */}
    </div>
  );
}
