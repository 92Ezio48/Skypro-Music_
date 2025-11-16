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
import { useLikeTrack } from '@/hooks/useLikeTracks';

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
  const { toggleLike, isLike } = useLikeTrack(track);
  const isAuth = useAppSelector((state) => state.auth.access);
  let iconName = 'icon-dislike';
  let iconStyle = {};

  if (isAuth) {
    iconName = 'icon-like';
    iconStyle = { stroke: '#696969', fill: 'none' }; // Серый контур, не залито
    if (isLike) {
      iconStyle = {
        stroke: 'rgba(182, 114, 255, 1)',
      }; // Фиолетовый!
    }
  }
  // Клик только для авторизованных:
  const handleLikeClick = (e) => {
    e.stopPropagation();
    if (isAuth) {
      toggleLike();
    }
  };

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
          <svg
            className={styles.track__timeSvg}
            style={iconStyle}
            onClick={(e) => {
              e.stopPropagation(); // <-- ВАЖНО!
              if (isAuth) toggleLike();
            }}
          >
            <use xlinkHref={`/img/icon/sprite.svg#${iconName}`}></use>
          </svg>
          <span className={styles.track__timeText}>
            {formatTime(track.duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
}
