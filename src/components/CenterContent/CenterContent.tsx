import Playlist from '../Playlist/Playlist';
import styles from './CenterContent.module.scss';

export default function CenterContent() {
  return (
    <div className={styles.centerblock__content}>
      <div className={styles.content__title}>
        <div className={`${styles.playlistTitle__col} ${styles.col01}`}>
          ТРЕК
        </div>
        <div className={`${styles.playlistTitle__col} ${styles.col02}`}>
          ИСПОЛНИТЕЛЬ
        </div>
        <div className={`${styles.playlistTitle__col} ${styles.col03}`}>
          АЛЬБОМ
        </div>
        <div className={`${styles.playlistTitle__col} ${styles.col04}`}>
          <svg className={styles.playlistTitle__svg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>
      <div className={styles.playlist__scroll}>
        {' '}
        {/* Добавленный внутренний flex-скроллер */}
        <Playlist />
      </div>
    </div>
  );
}
