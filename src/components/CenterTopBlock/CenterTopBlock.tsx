import Image from 'next/image';
import Link from 'next/link';
import styles from './CenterTopBlock.module.scss';
import ContentFilter from '../ContentFilter/ContentFilter';
import Search from '../Search/Search';
export default function CenterTopBlock() {
  return (
    <div className={styles.centerblock}>
      <Search title='Заголовок'/>
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <ContentFilter />

      {/* centerblock__content */}
    </div>
  );
}
