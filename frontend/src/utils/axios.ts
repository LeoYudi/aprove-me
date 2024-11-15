import axios, { AxiosError } from 'axios';
import { auth } from './auth';

type ApiError = {
  error: string;
  message: string;
  statusCode: number;
};

class CustomError extends Error {
  apiError: ApiError;

  constructor(error: ApiError) {
    super(error.message);
    this.apiError = error;
  }
}

const api_url = import.meta.env.VITE_API_URL;

const api = axios.create({ baseURL: api_url });

api.interceptors.request.use((config) => {
  if (!config.headers.Authorization) config.headers.Authorization = auth.token;

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError): CustomError => {
    if (error.code === 'ERR_NETWORK')
      throw new CustomError({
        error: 'ERR_NETWORK',
        message: 'Connection error',
        statusCode: 200,
      });

    if (error.code === 'ERR_CANCELED')
      throw new CustomError({
        error: 'ERR_CANCELED',
        message: 'Canceled',
        statusCode: 200,
      });

    if (error.response) {
      throw new CustomError(error.response.data as ApiError);
    }

    throw new CustomError({
      error: 'ERR_UNKNOWN',
      message: 'Something went wrong',
      statusCode: 200,
    });
  }
);

export { api };

export type { CustomError };
