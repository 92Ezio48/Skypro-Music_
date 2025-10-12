import Image from 'next/image';
import Link from 'next/link';
import styles from './PlaylistItem.module.scss';
import { data } from '@/data';
import TrackType from '@/sharedTypes/sharedTypes'; // Импорт интерфейса!
import { formatTime } from '@/utils/helper';

type PlaylistItemProps = {
  track: TrackType;
};
export default function PlaylistItem({ track }: PlaylistItemProps) {
  return (
    <div className={styles.playlist__item}>
      <div className={styles.playlist__track}>
        <div className={styles.track__title}>
          <div className={styles.track__titleImage}>
            <svg className={styles.track__titleSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className={styles.track__title_text}>
            <a className={styles.track__titleLink} href="">
              {track.name} <span className={styles.track__titleSpan}></span>
            </a>
          </div>
        </div>
        <div className={styles.track__author}>
          <a className={styles.track__authorLink} href="">
            {track.author}
          </a>
        </div>
        <div className={styles.track__album}>
          <a className={styles.track__albumLink} href="">
            {track.album}
          </a>
        </div>
        <div className={styles.track__time}>
          <svg className={styles.track__timeSvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className={styles.track__timeText}>
            {formatTime(track.duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
}
