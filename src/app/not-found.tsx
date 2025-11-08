import Link from 'next/link';
import styles from './not-found.module.scss'; // стили отдельным файлом

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.center}>
        <h1 className={styles.code}>404</h1>
        <div className={styles.title}>
          Страница не найдена <span className={styles.emoji}>😢</span>
        </div>
        <div className={styles.subtitle}>
          Возможно, она была удалена
          <br />
          или перенесена на другой адрес
        </div>
        <Link href="/" className={styles.button}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
