import { BuyCalculateType, LimitOrderCalculateType } from "@/app/core/Types"
import api, { ApiResponse } from "../api"

export const buyCalculate = async (toman:string)=>{
     const roundSilver = Math.round(+toman * 1000) / 1000
    const response = await api.post<ApiResponse<BuyCalculateType>>('/silver/buy/calculate/',{
            "payment_method": "WALLET",
    "toman": roundSilver
    })
    return response.data
}

export const sellCalculate = async (weight:string)=>{
     const roundSilver = Math.round(+weight * 1000) / 1000
    const response = await api.post<ApiResponse<BuyCalculateType>>('/silver/sell/calculate/',{
            "payment_method": "WALLET",
    "weight": roundSilver
    })
    return response.data
}

export const limitOrderBuyCalculate = async (toman:string,target_price:string)=>{
     const roundSilver = Math.round(+toman * 1000) / 1000
    const response = await api.post<ApiResponse<LimitOrderCalculateType>>('/silver/limit-order/buy/confirm/',{
            target_price,
    "amount_toman": roundSilver
    })
    return response.data
}

export const limitOrderSellCalculate = async (weight:string,target_price:string)=>{
     const roundSilver = Math.round(+weight * 1000) / 1000
    const response = await api.post<ApiResponse<LimitOrderCalculateType>>('/silver/limit-order/sell/confirm/',{
            target_price,
    "silver_weight": roundSilver
    })
    return response.data
}