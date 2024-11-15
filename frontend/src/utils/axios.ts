import axios, { AxiosError } from 'axios';
import { auth } from './auth';

type ApiError = {
  code?: number;
  detail?: any;
  status: number;
  type: string;
}[];

class CustomError extends Error {
  errors: ApiError;

  constructor(message: string, errors: ApiError) {
    super(message);
    this.errors = errors;
  }
}

const api_url = process.env.REACT_APP_API_URL;

const api = axios.create({ baseURL: api_url });

api.interceptors.request.use((config) => {
  if (!config.headers.Authorization) config.headers.Authorization = auth.token;

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError): CustomError => {
    if (error.code === 'ERR_NETWORK')
      throw new CustomError('Erro de conexão', [
        {
          type: 'ERR_NETWORK',
          status: 200,
        },
      ]);

    if (error.code === 'ERR_CANCELED')
      throw new CustomError('Requisição cancelada!', [
        {
          type: 'ERR_CANCELED',
          status: 200,
        },
      ]);

    if (error.response) {
      throw new CustomError('', error.response.data as ApiError).errors;
    }

    throw new CustomError('Erro!', [
      {
        type: 'ERR_UNKNOWN',
        status: 200,
      },
    ]);
  }
);

export { api };

export type { CustomError };
