export default interface TrackType {
  _id: number;
  name: string;
  author: string;
  release_date: string; // ISO дата в виде строки
  genre: string[];
  duration_in_seconds: number;
  album: string;
  logo: string | null;
  track_file: string;
  stared_user: any[]; // <--- Если знаешь тип пользователей, укажи, например, string[] или User[]
}
