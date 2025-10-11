import Image from 'next/image';
import Link from 'next/link';
import styles from './SideBar.module.scss';

export default function SideBar() {
  return (
    <div className={styles.main__sidebar}>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personalName}>Sergey.Ivanov</p>
        <div className={styles.sidebar__icon}>
          <svg width="48" height="48" style={{ background: 'transparent' }}>
            <use xlinkHref="/img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} href="#">
              <Image
                className={styles.sidebar__img}
                src="/img/playlist01.png"
                alt="day's playlist"
                fill
                sizes="250px" // обязательно!
                priority // только для первой картинки!
                style={{ objectFit: 'cover', borderRadius: '0px' }}
              />
            </Link>
          </div>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} href="#">
              <Image
                className={styles.sidebar__img}
                src="/img/playlist02.png"
                alt="day's playlist"
                fill
                sizes="250px" // обязательно!
                style={{ objectFit: 'cover', borderRadius: '0px' }}
              />
            </Link>
          </div>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} href="#">
              <Image
                className={styles.sidebar__img}
                src="/img/playlist03.png"
                alt="day's playlist"
                fill
                sizes="250px" // обязательно!
                style={{ objectFit: 'cover', borderRadius: '0px' }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
