import { trackSliceReducer, setNextTrack, savedFavorites } from './trackSlice';

const fakeTrack1 = {
  _id: 1,
  name: 'Test Track 1',
  author: 'Test Author',
  release_date: '2023-01-01',
  genre: ['Test Genre'], // 👈 ПРАВИЛЬНО!
  duration_in_seconds: 123,
  album: 'Test Album',
  logo: null, // 👈 Обязательно!
  track_file: 'file.mp3',
  stared_user: [], // 👈 Обязательно!
  categoryId: 1, // 👈 Обязательно!
};
const fakeTrack2 = {
  _id: 2,
  name: 'Test Track 2',
  author: 'Test Author',
  release_date: '2023-01-02',
  genre: ['Test Genre'], // 👈 ПРАВИЛЬНО!
  duration_in_seconds: 150,
  album: 'Test Album',
  logo: null,
  track_file: 'file2.mp3',
  stared_user: [],
  categoryId: 1,
};
describe('trackSlice reducer', () => {
  it('должен переключать следующий трек', () => {
    const initial = {
      currentTrack: fakeTrack1,
      isPlay: false,
      playlist: [fakeTrack1, fakeTrack2],
      shuffledPlaylist: [],
      isShuffle: false,
      allTracks: [],
      fetchError: null,
      fetchIsLoading: true,
      favoriteTracks: [],
    };
    const nextState = trackSliceReducer(initial, setNextTrack());
    expect(nextState.currentTrack._id).toBe(2);
  });
});
