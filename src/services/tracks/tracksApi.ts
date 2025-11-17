import axios from 'axios';
import { BASE_URL } from '../constants';
import TrackType from '@/sharedTypes/sharedTypes';

export const getTracks = async (): Promise<TrackType[]> => {
  return axios.get(BASE_URL + '/catalog/track/all/').then((res: any) => {
    return res.data.data;
  });
};
interface CategoryResponse {
  data: {
    name: string; // Название категории
    items: number[]; // id треков (или строки, если backend так делает)
  };
}
export const getCategories = async (id: string): Promise<CategoryResponse> => {
  // id приходит строкой ("1", "2"...), приводим к числу и прибавляем 1
  const realId = String(Number(id) + 1);

  return axios
    .get(BASE_URL + `/catalog/selection/${realId}/`)
    .then((res) => res.data);
};

export const addLike = (access: string, id: number) => {
  return axios.post(
    BASE_URL + `/catalog/track/${id}/favorite/`,
    {},
    {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    },
  );
};
export const removeLike = (access: string, id: number) => {
  return axios.delete(`${BASE_URL}/catalog/track/${id}/favorite/`, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
};
