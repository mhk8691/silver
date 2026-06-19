import { SellSilverDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';

export const silverSell = async (silver: string) => {
   const roundSilver = Math.round(+silver * 1000) / 1000

  const response = await api.post<ApiResponse<SellSilverDataType>>('/silver/sell/', { weight: roundSilver });
  return response;
};
