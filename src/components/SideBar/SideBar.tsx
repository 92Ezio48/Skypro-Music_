'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './SideBar.module.scss';
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/store';
import { useRouter } from 'next/navigation';
import { clearUser } from '@/store/features/authSlice';

export default function SideBar() {
  const username = useAppSelector((state) => state.auth.username);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Обработчик выхода
  const logout = async () => {
    dispatch(clearUser());
    router.push('/auth/signin');
    // Если хочется — можешь вызвать withReauth/getTracks как и в MainNav
    // await withReauth((newToken) => getTracks(), '', dispatch);
  };

  return (
    <div className={styles.main__sidebar}>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personalName}>
          {isLoaded && (username || 'Анонимус')}
        </p>
        <div
          className={styles.sidebar__icon}
          onClick={logout}
          style={{ cursor: 'pointer' }}
        >
          <svg width="48" height="48" style={{ background: 'transparent' }}>
            <use xlinkHref="/img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} href="/music/category/1">
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
            <Link className={styles.sidebar__link} href="/music/category/2">
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
            <Link className={styles.sidebar__link} href="/music/category/3">
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
