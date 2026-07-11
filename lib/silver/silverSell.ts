import { SellSilverDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';

export const silverSell = async (weight: string) => {
     const roundSilver = Math.round(+weight * 1000) / 1000
  const response = await api.post<ApiResponse<SellSilverDataType>>('/silver/sell/', { weight: roundSilver });
  return response;
};
