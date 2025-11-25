'use client';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MainNav.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { clearUser } from '@/store/features/authSlice';

export default function MainNav() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const username = useAppSelector((state) => state.auth.username);
  const isAuth = !!username; // авторизован, если есть имя
  const router = useRouter();
  const pathname = usePathname();
  // Если бургер нужен только на мобилке, можно добавить window.matchMedia…

  const logout = () => {
    dispatch(clearUser());

    // Если на избранных треках — редирект на главную
    if (pathname === '/music/favorite') {
      router.push('/');
    }
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <nav className={styles.main__nav}>
      <div className={styles.nav__logoWrap}>
        <Image
          src="/img/logo.png"
          width={113}
          height={43}
          alt="logo"
          className={styles.logo__image}
        />
        {/* Бургер в левой панели */}
        <div className={styles.nav__burger} onClick={() => setOpen(!open)}>
          <span className={styles.burger__line}></span>
          <span className={styles.burger__line}></span>
          <span className={styles.burger__line}></span>
        </div>
      </div>

      {/* Меню (по желанию показывать по open; если всегда, то просто стиль) */}
      <div
        className={styles.nav__menu}
        style={{ display: open ? 'block' : 'none' }}
      >
        <div className={styles.menu__list}>
          <p className={styles.menu__item}>
            <Link href="/" className={styles.menu__link}>
              Главное
            </Link>
          </p>
          {/* Только если залогинен — отображаем плейлист и Выйти */}
          {isAuth && (
            <>
              <p className={styles.menu__item}>
                <Link href="/music/favorite" className={styles.menu__link}>
                  Мой плейлист
                </Link>
              </p>
              <p className={styles.menu__item}>
                <button
                  className={styles.menu__link}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    cursor: 'pointer',
                  }}
                  onClick={logout}
                >
                  Выйти
                </button>
              </p>
            </>
          )}
          {/* Если НЕ залогинен — показывай "Войти" */}
          {!isAuth && (
            <p className={styles.menu__item}>
              <Link href="/auth/signin" className={styles.menu__link}>
                Войти
              </Link>
            </p>
          )}
        </div>
      </div>
    </nav>
  );
}
