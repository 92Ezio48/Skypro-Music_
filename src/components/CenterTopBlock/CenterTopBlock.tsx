import Image from 'next/image';
import Link from 'next/link';
import styles from './CenterTopBlock.module.scss';
import ContentFilter from '../ContentFilter/ContentFilter';
import Search from '../Search/Search';
type CenterTopBlockProps = {
  title: string;
};
export default function CenterTopBlock({ title }: CenterTopBlockProps) {
  return (
    <div className={styles.centerblock}>
      <Search title="Заголовок" />
      <h2 className={styles.centerblock__h2}>{title}</h2>
      <ContentFilter />

      {/* centerblock__content */}
    </div>
  );
}
