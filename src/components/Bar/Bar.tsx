'use client';
import { useEffect, useRef, useState, ChangeEvent } from 'react';
import styles from './Bar.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/store';
import {
  setIsPlay,
  setNextTrack,
  setPrevTrack,
  toggleShuffle,
} from '@/store/features/trackSlice';
import ProgressBar from '../ProgressBar/ProgressBar';
export default function Bar() {
  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);
  const isPlay = useAppSelector((state) => state.tracks.isPlay);
  const dispatch = useAppDispatch();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isLoop, setIsLoop] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoadedTrack, setIsLoadedTrack] = useState(false);
  const isShuffle = useAppSelector((state) => state.tracks.isShuffle);
  const [isTrackLoading, setIsTrackLoading] = useState(false);

  const onPrevTrack = () => {
    dispatch(setPrevTrack());
  };
  const playlist = useAppSelector((state) => state.tracks.playlist);
  const curIndex = playlist.findIndex(
    (track) => track._id === currentTrack?._id,
  );
  const isPrevDisabled = curIndex <= 0;

  useEffect(() => {
    // Именно так — если трека нет, покажи заглушку для теста!
    if (!currentTrack) {
      setIsTrackLoading(true);
      return;
    }
    setIsTrackLoading(true);
    // ! автоматом убираем надпись через 2 секунды (для теста):
    const t = setTimeout(() => setIsTrackLoading(false), 2000);
    return () => clearTimeout(t);
  }, [currentTrack]);

  useEffect(() => {
    setIsLoadedTrack(false);
  }, [currentTrack]);
  const onToggleLoop = () => {
    setIsLoop(!isLoop);
  };
  const handleNotImplemented = () => {
    alert('Еще не реализовано');
  };
  // ⬇️ useEffect для автозапуска/паузы
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlay) {
      // Иногда play() кидает ошибку, если до этого не было user interaction, но при клике по треку все ок
      audioRef.current.play().catch((e) => {
        // Можешь вывести ошибку в консоль для отладки
        console.log('play error:', e);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlay, currentTrack]);

  if (!currentTrack) return <></>;

  const playTrack = () => {
    if (audioRef.current) {
      audioRef.current.play();
      dispatch(setIsPlay(true));
    }
  };

  const pauseTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      dispatch(setIsPlay(false));
    }
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      // console.log(audioRef.current.currentTime);
      // console.log(audioRef.current.duration);
    }
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      audioRef.current.play();
      dispatch(setIsPlay(true));
      setIsTrackLoading(false), 1000; // Трек полностью загружен!
    }
  };

  const onChangeProgress = (e: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const inputTime = Number(e.target.value);

      audioRef.current.currentTime = inputTime;
      setCurrentTime(inputTime);
      setIsLoadedTrack(true);
    }
  };
  const onNextTrack = () => {
    dispatch(setNextTrack());
  };

  const onToggleShuffle = () => {
    dispatch(toggleShuffle());
  };
  function formatTime(sec: number) {
    if (!sec || isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }
  const handleTrackEnded = () => {
    if (!isLoop) {
      dispatch(setNextTrack());
    }
    // Если нужен автоплей следующего — setIsPlay(true) обычно не требуется, он сам включится
  };
  return (
    <div className={styles.barWrap}>
      {isTrackLoading && (
        <div className={styles.bar__loader}>Загрузка трека...</div>
      )}
      <div className={styles.bar}>
        <div className={styles.bar__content}>
          <audio
            className={styles.audio}
            autoPlay
            ref={audioRef}
            src={currentTrack?.track_file}
            loop={isLoop}
            onTimeUpdate={onTimeUpdate}
            onLoadedMetadata={onLoadedMetadata}
            onEnded={handleTrackEnded}
          ></audio>
          <ProgressBar
            max={audioRef.current?.duration || 0}
            step={0.1}
            readOnly={!isLoadedTrack}
            value={currentTime}
            onChange={onChangeProgress}
          />
          <div className={styles.bar__playerBlock}>
            <div className={styles.bar__player}>
              <div className={styles.player__controls}>
                <div
                  className={styles.player__btnPrev}
                  onClick={isPrevDisabled ? undefined : onPrevTrack}
                >
                  <svg className={styles.player__btnPrevSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                  </svg>
                </div>
                <div
                  className={`${styles.player__btnPlay} ${styles.btn}`}
                  onClick={isPlay ? pauseTrack : playTrack}
                >
                  <svg className={styles.player__btnPlaySvg}>
                    <use
                      xlinkHref={
                        isPlay
                          ? '/img/icon/sprite.svg#icon-pause'
                          : '/img/icon/sprite.svg#icon-play'
                      }
                    ></use>
                  </svg>
                </div>
                <div className={styles.player__btnNext} onClick={onNextTrack}>
                  <svg className={styles.player__btnNextSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                  </svg>
                </div>
                <div
                  className={`${styles.player__btnRepeat} ${styles.btnIcon} ${
                    isLoop ? styles.active : ''
                  }`}
                  onClick={onToggleLoop}
                >
                  <svg className={styles.player__btnRepeatSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                  </svg>
                </div>
                <div
                  className={`${styles.player__btnShuffle} ${styles.btnIcon} ${
                    isShuffle ? styles.active : ''
                  }`}
                  onClick={onToggleShuffle}
                >
                  <svg className={styles.player__btnShuffleSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                  </svg>
                </div>
              </div>
              <div className={styles.player__trackPlay}>
                <div className={styles.trackPlay__contain}>
                  <div className={styles.trackPlay__image}>
                    <svg className={styles.trackPlay__svg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.trackPlay__author}>
                    <span className={styles.trackPlay__authorLink}>
                      {currentTrack?.author}
                    </span>
                  </div>
                  <div className={styles.trackPlay__album}>
                    <span className={styles.trackPlay__albumLink}>
                      {currentTrack?.album}
                    </span>
                  </div>
                </div>
                <div className={styles.trackPlay__dislike}>
                  <div
                    className={`${styles.player__btnShuffle} ${styles.btnIcon}`}
                  >
                    <svg className={styles.trackPlay__likeSvg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                    </svg>
                  </div>
                  <div
                    className={`${styles.trackPlay__dislike} ${styles.btnIcon}`}
                  >
                    <svg className={styles.trackPlay__dislikeSvg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bar__volumeBlock}>
              <div className={styles.volume__content}>
                <div className={styles.volume__image}>
                  <svg className={styles.volume__svg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                  </svg>
                </div>
                <div className={`${styles.volume__progress} ${styles.btn}`}>
                  <input
                    className={`${styles.volume__progressLine} ${styles.btn}`}
                    type="range"
                    name="range"
                    onChange={(e) => {
                      setVolume(Number(e.target.value));
                      if (audioRef.current)
                        audioRef.current.volume = Number(e.target.value) / 100;
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bar__timeBlock}>
          <span className={styles.bar__currentTime}>
            {formatTime(currentTime)}
          </span>
          {' / '}
          <span className={styles.bar__endTime}>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
