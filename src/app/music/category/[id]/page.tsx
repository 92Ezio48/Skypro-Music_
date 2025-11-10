'use client';
import { useParams } from 'next/navigation';
import styles from '@/app/music/main/page.module.css';
import CenterTopBlock from '@/components/CenterTopBlock/CenterTopBlock';
import Playlist from '@/components/Playlist/Playlist';
import CenterContent from '@/components/CenterContent/CenterContent';
import '@/app/globals.css';

const categoryTitles = {
  1: 'Плейлист дня',
  2: '100 танцевальных хитов',
  3: 'Инди-жара',
};

export default function CategoryPage() {
  const params = useParams<{ id: string }>();
  const title = categoryTitles[params.id] || `Категория ${params.id}`;

  return (
    <>
      <div className={styles.centerTopBlock}>
        <CenterTopBlock title={title} />
      </div>
      <div className={styles.contentPlaylist}>
        <CenterContent />
      </div>
    </>
  );
}
