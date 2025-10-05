import Image from 'next/image';
import Link from 'next/link';
import styles from './CenterContent.module.scss';
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
                  Guilt <span className={styles.track__titleSpan}></span>
                </a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="">
                Nero
              </a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="">
                Welcome Reality
              </a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>4:44</span>
            </div>
          </div>
        </div>
        {/* ---- Трек 2 ---- */}
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
                  Elektro <span className={styles.track__titleSpan}></span>
                </a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="">
                Dynoro, Outwork, Mr. Gee
              </a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="">
                Elektro
              </a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>2:22</span>
            </div>
          </div>
        </div>
        {/* ---- Трек 3 ---- */}
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
                  I’m Fire <span className={styles.track__titleSpan}></span>
                </a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="">
                Ali Bakgor
              </a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="">
                I’m Fire
              </a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>2:22</span>
            </div>
          </div>
        </div>
        {/* ---- Трек 4 ---- */}
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
                  Non Stop
                  <span className={styles.track__titleSpan}>(Remix)</span>
                </a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="">
                Стоункат, Psychopath
              </a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="">
                Non Stop
              </a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>4:12</span>
            </div>
          </div>
        </div>
        {/* ---- Трек 5 ---- */}
        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__titleImage}>
                <svg className={styles.track__titleSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div>
                <a className={styles.track__titleLink} href="">
                  Run Run
                  <span className={styles.track__titleSpan}>(feat. AR/CO)</span>
                </a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="">
                Jaded, Will Clarke, AR/CO
              </a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="">
                Run Run
              </a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>2:54</span>
            </div>
          </div>
        </div>
      </div>
      {/* content__playlist */}
    </div>
  );
}
