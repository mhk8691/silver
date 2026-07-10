import { BuyCalculateType } from "@/app/core/Types"
import api, { ApiResponse } from "../api"

export const buyCalculate = async (toman:string)=>{
     const roundSilver = Math.round(+toman * 1000) / 1000
    const response = await api.post<ApiResponse<BuyCalculateType>>('/silver/buy/calculate/',{
            "payment_method": "WALLET",
    "toman": roundSilver
    })
    return response.data
}

export const sellCalculate = async (toman:string)=>{
     const roundSilver = Math.round(+toman * 1000) / 1000
    const response = await api.post<ApiResponse<BuyCalculateType>>('/silver/sell/calculate/',{
            "payment_method": "WALLET",
    "toman": roundSilver
    })
    return response.data
}