import { SellSilverDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';

export const silverSell = async (gold: string) => {
  const response = await api.post<ApiResponse<SellSilverDataType>>('/silver/sell/', { weight: gold });
  return response;
};
