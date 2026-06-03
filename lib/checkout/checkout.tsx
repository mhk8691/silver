import { CheckoutDataType } from "@/app/core/Types"
import api, { ApiResponse } from "../api"

export const checkout = async (data:CheckoutDataType)=>{
    const response = await api.post<ApiResponse<CheckoutDataType>>('/silver/order/',data)
    return response
}