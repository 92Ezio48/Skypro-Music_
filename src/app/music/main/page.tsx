'use client';
import styles from './page.module.css';
import CenterTopBlock from '../../../components/CenterTopBlock/CenterTopBlock';
import CenterContent from '../../../components/CenterContent/CenterContent';
import { useEffect, useState } from 'react';
import { getTracks } from '@/services/tracks/tracksApi';
import TrackType from '@/sharedTypes/sharedTypes';
import { AxiosError } from 'axios';
import { useAppSelector } from '@/store/store';

export default function Home() {
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const [error, setError] = useState('');
  const { fetchError, fetchIsLoading, allTracks } = useAppSelector(
    (state) => state.tracks,
  );

  useEffect(() => {
    getTracks()
      .then((res) => {
        setTracks(res);
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.response) {
            setError(error.response.data);
          } else if (error.request) {
            console.log(error.request);
            setError('Что-то с интернетом');
          } else {
            console.log('Error', error.message);
            setError('Неизвестная ошибка');
          }
        }
      });
  }, []);
  return (
    <>
      <div className={styles.centerTopBlock}>
        {error}
        <CenterTopBlock title="Главное" />
      </div>
      <div className={styles.contentPlaylist}>
        <CenterContent
          tracks={allTracks}
          isLoading={fetchIsLoading}
          errorRes={fetchError}
          title={'Треки'}
        />
      </div>
    </>
  );
}
