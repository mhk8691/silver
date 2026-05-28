import { SellSilverDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';

export const silverSell = async (silver: string) => {
  const response = await api.post<ApiResponse<SellSilverDataType>>('/silver/sell/', { weight: silver });
  return response;
};
