import { api } from 'utils/axios';

export type PayableType = {
  id: string;
  value: number;
  emissionDate: Date;
};

const list = async (page: number, limit: number): Promise<any> => {
  try {
    const response = await api.get(
      `/integration/payable?page=${page}&limit=${limit}`
    );

    return response.data;
  } catch (error) {
    return error;
  }
};

export { list };
