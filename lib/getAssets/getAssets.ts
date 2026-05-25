import {  AssetsDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';

export const getAssets = async () => {
  const res = await api.get<ApiResponse<AssetsDataType>>('/silver/balance/');
  return res.data.data;
};

// export const getAllAssets = async () => {
//   const res = await api.get<AllAssetsDataType>('/gold/assets/');
//   return res.data;
// };
