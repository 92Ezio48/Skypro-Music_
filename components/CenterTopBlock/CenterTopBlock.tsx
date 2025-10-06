import Image from 'next/image';
import Link from 'next/link';
import styles from './CenterTopBlock.module.scss';
import ContentFilter from '../ContentFilter/ContentFilter';
export default function CenterTopBlock() {
  return (
    <div className={styles.centerblock}>
      <div className={styles.centerblock__search}>
        <svg className={styles.search__svg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className={styles.search__text}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <ContentFilter />

      {/* centerblock__content */}
    </div>
  );
}
