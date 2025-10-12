import classNames from 'classnames';
import styles from '../ContentFilter/ContentFilter.module.scss';

export default function FilterButton({
  label,
  filterKey,
  activeFilter,
  setActiveFilter,
  values,
}) {
  const isActive = activeFilter === filterKey;
  return (
    <div
      className={classNames(styles.filter__button, {
        [styles.active]: isActive,
      })}
      onClick={() => setActiveFilter(isActive ? null : filterKey)}
    >
      {label}
      {isActive && (
        <div className={styles.filter__list}>
          {values.map((value) => (
            <div className={styles.filter__item} key={value}>
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
