'use client';
import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './ContentFilter.module.scss';
// Путь поправь, если data лежит в другом месте!
import { data } from '../../data';

export default function ContentFilter() {
  const [activeFilter, setActiveFilter] = useState(null);

  // Получаем уникальные значения
  const artists = [...new Set(data.map((track) => track.author))];
  const years = [
    ...new Set(data.map((track) => track.release_date.slice(0, 4))),
  ];
  const genres = [...new Set(data.flatMap((track) => track.genre))];

  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>Искать по:</div>

      <div
        className={classNames(styles.filter__button, {
          [styles.active]: activeFilter === 'artist',
        })}
        onClick={() =>
          setActiveFilter(activeFilter === 'artist' ? null : 'artist')
        }
      >
        исполнителю
        {activeFilter === 'artist' && (
          <div className={styles.filter__list}>
            {artists.map((artist) => (
              <div className={styles.filter__item} key={artist}>
                {artist}
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className={classNames(styles.filter__button, {
          [styles.active]: activeFilter === 'year',
        })}
        onClick={() => setActiveFilter(activeFilter === 'year' ? null : 'year')}
      >
        году выпуска
        {activeFilter === 'year' && (
          <div className={styles.filter__list}>
            {years.map((year) => (
              <div className={styles.filter__item} key={year}>
                {year}
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className={classNames(styles.filter__button, {
          [styles.active]: activeFilter === 'genre',
        })}
        onClick={() =>
          setActiveFilter(activeFilter === 'genre' ? null : 'genre')
        }
      >
        жанру
        {activeFilter === 'genre' && (
          <div className={styles.filter__list}>
            {genres.map((genre) => (
              <div className={styles.filter__item} key={genre}>
                {genre}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
