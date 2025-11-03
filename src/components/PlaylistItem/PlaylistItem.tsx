'use client';
import styles from './PlaylistItem.module.scss';
import TrackType from '@/sharedTypes/sharedTypes';
import { formatTime } from '@/utils/helper';
import { useAppDispatch, useAppSelector } from '@/store/store';
import {
  setCurrentPlaylist,
  setCurrentTrack,
  setIsPlay,
} from '@/store/features/trackSlice';

type PlaylistItemProps = {
  track: TrackType;
  playlist: TrackType[];
};

export default function PlaylistItem({ track, playlist }: PlaylistItemProps) {
  const dispatch = useAppDispatch();
  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);
  const isPlay = useAppSelector((state) => state.tracks.isPlay);
  // Предполагается, что track.id уникальный! Замени на нужное поле, если иначе.
  const isCurrent = currentTrack && currentTrack._id === track._id;

  const onClickTrack = () => {
    if (isCurrent) {
      // Если выбран этот же трек — просто toggl'им паузу
      dispatch(setIsPlay(!isPlay));
    } else {
      // Если другой — выбираем и сразу play
      dispatch(setCurrentTrack(track));
      dispatch(setIsPlay(true));
      dispatch(setCurrentPlaylist(playlist));
    }
  };

  return (
    <div
      className={styles.playlist__item}
      onClick={onClickTrack}
      style={{ cursor: 'pointer' }} // Для UX: подсказка, что элемент кликабелен
      tabIndex={0} // Для доступности (можно нажать Enter/Space)
    >
      <div className={styles.playlist__track}>
        <div className={styles.track__title}>
          <div className={styles.track__titleImage}>
            <svg className={styles.track__titleSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
            </svg>
            {isCurrent && (
              <span
                className={
                  isPlay
                    ? styles.track__indicator_pulse // анимация
                    : styles.track__indicator // статичная
                }
              ></span>
            )}
          </div>
          <div className={styles.track__title_text}>
            <div className={styles.track__titleLink}>
              {track.name} <span className={styles.track__titleSpan}></span>
            </div>
          </div>
        </div>
        <div className={styles.track__author}>
          <div className={styles.track__authorLink}>{track.author}</div>
        </div>
        <div className={styles.track__album}>
          <div className={styles.track__albumLink}>{track.album}</div>
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
