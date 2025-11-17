import TrackType from '@/sharedTypes/sharedTypes';
import Playlist from '../Playlist/Playlist';
import styles from './CenterContent.module.scss';
import classNames from 'classnames';

type centerBlockProp = {
  tracks: TrackType[];
  isLoading: boolean;
  errorRes: string | null;
  title: string;
};

export default function CenterContent({
  tracks,
  isLoading,
  errorRes,
  title,
}: centerBlockProp) {
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
        {/* Добавленный внутренний flex-скроллер */}
        {errorRes ? (
          errorRes
        ) : isLoading ? (
          'Загрузка'
        ) : (
          <Playlist tracks={tracks} />
        )}
      </div>
    </div>
  );
}
