import styles from './Playlist.module.scss';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import TrackType from '@/sharedTypes/sharedTypes';

type PlaylistProps = {
  tracks: TrackType[];
};

export default function Playlist({ tracks = [] }: PlaylistProps) {
  return (
    <div className={styles.content__playlist}>
      {tracks.map((track) => (
        <PlaylistItem key={track._id} track={track} playlist={tracks} />
      ))}
    </div>
  );
}
