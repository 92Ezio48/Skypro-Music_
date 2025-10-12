'use client';
import { useState } from 'react';
import styles from './ContentFilter.module.scss';
import classNames from 'classnames';
import { data } from '../../data';
import { filtersConfig } from '../../filtersConfig.js';
import FilterButton from '../FilterButton/FilterButton';

function getFilterValues(data, filterKey) {
  switch (filterKey) {
    case 'artist':
      return [...new Set(data.map((track) => track.author))];
    case 'year':
      return [...new Set(data.map((track) => track.release_date.slice(0, 4)))];
    case 'genre':
      return [...new Set(data.flatMap((track) => track.genre))];
    default:
      return [];
  }
}

export default function ContentFilter() {
  const [activeFilter, setActiveFilter] = useState(null);

  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>Искать по:</div>
      {filtersConfig.map((filter) => (
        <FilterButton
          key={filter.key}
          label={filter.label}
          filterKey={filter.key}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          values={getFilterValues(data, filter.key)}
        />
      ))}
    </div>
  );
}
