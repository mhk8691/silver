import { BuySilverDataType } from '@/app/core/Types';
import api from '../api';

export const silverBuy = async (price: string) => {
  const response = await api.post<BuySilverDataType>('/silver/buy/', { toman: price });
  return response;
};
