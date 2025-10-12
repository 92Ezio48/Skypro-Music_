export const filtersConfig = [
  { key: 'artist', label: 'исполнителю' },
  { key: 'year', label: 'году выпуска' },
  { key: 'genre', label: 'жанру' },
];
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
