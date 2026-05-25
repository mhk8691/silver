import api, { ApiResponse } from '@/lib/api';
export const getReports = async (key: string) => {
    const response = await api.get<ApiResponse<[]>>(`/silver/reports/?type=${key}`);
    return response.data.data;
  
};
