import { DepositDataType } from "@/app/core/Types";
import api, { ApiResponse } from "@/lib/api";

export const silverDeposit = async (data:FormData) => {
    const response = await api.post<{ message: string }>("/silver/wallet/deposit/", {
      amount:data.get('amount'),
      method:data.get('method'),
      receipt:data.get('receipt')
    },{
       headers: {
      'Content-Type': 'multipart/form-data',
    }
    });
    return response.data;
  }

export const getSilverDeposit = async () => {
    const response = await api.get<ApiResponse<DepositDataType>>("/silver/deposit/info/");
   
    return response.data;
  } 
