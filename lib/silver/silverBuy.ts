import { BuySilverDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';

export const silverBuy = async (price: string,method:'WALLET'|'GATEWAY') => {
  const response = await api.post<ApiResponse<BuySilverDataType>>('/silver/buy/', { toman: price,payment_method:method });
  return response;
};
