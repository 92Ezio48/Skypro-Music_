'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MainNav.module.scss';

export default function MainNav() {
  // Если бургер нужен только на мобилке, можно добавить window.matchMedia…
  const [open, setOpen] = useState(false);

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
          <p className={styles.menu__item}>
            <a href="#" className={styles.menu__link}>
              Мой плейлист
            </a>
          </p>
          <p className={styles.menu__item}>
            <Link href="/auth/signin" className={styles.menu__link}>
              Выйти
            </Link>
          </p>
          <Link href="/auth/signin" className={styles.menu__link}>
            <Image
              className={styles.menu__icon}
              src="/img/nav_svg.svg"
              width={39}
              height={39}
              alt="logo"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
