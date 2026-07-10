import { SellSilverDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';

export const silverSell = async (toman: string) => {

  const response = await api.post<ApiResponse<SellSilverDataType>>('/silver/sell/', { toman: toman });
  return response;
};
