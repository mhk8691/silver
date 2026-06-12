import { AllAssetsDataType, StatisticsDataType } from '@/app/core/Types';
import api from '../api';

export const getAssets = async (): Promise<AllAssetsDataType | null> => {
  const res = await api.get<AllAssetsDataType>('/silver/asset-value/');
  return res.data;
};



export const getStatistics = async (): Promise<StatisticsDataType | null> => {
  const res = await api.get<StatisticsDataType>('/silver/statistics/');
  return res.data;
};