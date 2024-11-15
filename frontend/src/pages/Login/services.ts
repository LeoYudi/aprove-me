import { api } from 'utils/axios';

const signIn = async (login: string, password: string): Promise<any> => {
  try {
    const response = await api.post('/user/signin', { login, password });
    return response.data;
  } catch (error) {
    return error;
  }
};

export { signIn };
