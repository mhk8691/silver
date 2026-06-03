import { WithdrawDataType } from '@/app/core/Types';
import api, { ApiResponse } from '@/lib/api';

export const silverWithdraw = async (amount: string, target: string, cardId?: number) => {
    const response = await api.post<ApiResponse<WithdrawDataType>>('/silver/wallet/withdraw/', {
      amount,
      target,
      card_id: cardId,
    });
    return response.data;
};
