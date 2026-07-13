import { ChartSilverDataType } from "@/app/core/Types"
import api, { ApiResponse } from "../api"

export const getChartSilver = async (filter:string)=>{
    const response = await api.get<ApiResponse<ChartSilverDataType>>(`/silver/chart/?filter_type=${filter}/`)
    return response.data.data
}