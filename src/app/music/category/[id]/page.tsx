'use client';
import { useParams } from 'next/navigation';
import styles from '@/app/music/main/page.module.css';
import CenterTopBlock from '@/components/CenterTopBlock/CenterTopBlock';
import CenterContent from '@/components/CenterContent/CenterContent';
import { useAppSelector } from '@/store/store';
import { useEffect, useState } from 'react';
import TrackType from '@/sharedTypes/sharedTypes';
import { AxiosError } from 'axios';
import { getCategories } from '@/services/tracks/tracksApi';

export default function CategoryPage() {
  const params = useParams<{ id: string }>();
  const { allTracks, fetchIsLoading, fetchError } = useAppSelector(
    (state) => state.tracks,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [errorRes, setErrorRes] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const id = params.id;

  useEffect(() => {
    const fetchCategory = async () => {
      setIsLoading(true);
      try {
        if (!fetchIsLoading && allTracks.length) {
          const res = await getCategories(id);
          setTitle(res.data.name);
          const tracksIds = res.data.items;
          // 🔥 Исправлено: корректный синтаксис filter!
          const resultTracks = allTracks.filter((el) =>
            tracksIds.includes(el._id),
          );
          setTracks(resultTracks);
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response) {
            setErrorRes(error.response.data);
          } else if (error.request) {
            setErrorRes('Ошибочка вышла');
          }
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategory();
  }, [fetchIsLoading, allTracks, id]);

  return (
    <>
      <div className={styles.centerTopBlock}>
        <CenterTopBlock title={title} />
      </div>
      <div className={styles.contentPlaylist}>
        <CenterContent
          errorRes={errorRes || fetchError}
          tracks={tracks}
          isLoading={isLoading}
          title={title}
        />
      </div>
    </>
  );
}
