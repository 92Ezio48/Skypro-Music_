import axios from 'axios';
import { BASE_URL } from '../constants';
import { createUserProp } from './types';

type authUserProps = {
  email: string;
  password: string;
};

type authUserReturn = {
  email: string;
  username: string;
  _id: number;
};
export const authUser = (data: authUserProps): Promise<authUserReturn> => {
  return axios.post(
    BASE_URL + '/user/login/',
    data,

    {
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        'content-type': 'application/json',
      },
    },
  );
};
type RegisterUserProps = {
  email: string;
  password: string;
  username: string;
};

type RegisterUserReturn = {
  email: string;
  username: string;
  _id: number;
};

export const registerUser = (
  data: RegisterUserProps,
): Promise<RegisterUserReturn> => {
  return axios.post(
    BASE_URL + '/user/signup/', // или /user/signup/ если у тебя такой endpoint!
    data,
    {
      headers: {
        'content-type': 'application/json',
      },
    },
  );
};

type accessTokenType = {
  access: string;
};
type refreshTokenType = {
  refresh: string;
};

type tokensType = accessTokenType & refreshTokenType;

export const getTokens = (data: createUserProp): Promise<tokensType> => {
  return axios.post(BASE_URL + '/user/token/', data).then((res) => res.data);
};
export const refreshToken = (refresh: string): Promise<tokensType> => {
  return axios
    .post(BASE_URL + '/user/token/refresh', { refresh })
    .then((res) => res.data);
};
