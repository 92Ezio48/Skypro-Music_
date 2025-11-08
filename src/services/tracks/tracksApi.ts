import axios from 'axios';
import { BASE_URL } from '../constants';
import TrackType from '@/sharedTypes/sharedTypes';

export const getTracks = async (): Promise<TrackType[]> => {
  return axios.get(BASE_URL + '/catalog/track/all/').then((res: any) => {
    return res.data.data;
  });
};
