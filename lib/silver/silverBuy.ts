import { BuySilverDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';

export const silverBuy = async (price: string,method:'WALLET'|'GATEWAY',weight:string) => {
   const roundSilver = Math.round(+weight * 1000) / 1000
  const response = await api.post<ApiResponse<BuySilverDataType>>('/silver/buy/', { toman: price,weight:roundSilver,payment_method:method });
  return response;
};
