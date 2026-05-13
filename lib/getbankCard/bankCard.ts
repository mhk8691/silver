import { BankCardDataType } from '@/app/core/Types';
import api from '../api';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';

export const getBankCard = async () => {
  try {
    const res = await api.get<BankCardDataType[]>('/silver/cards/');
    return res.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};

export const removeBankCard = async (id: number) => {
  try {
    const res = await api.delete<{
      message: string;
    }>(`/silver/cards/${id}/`);
    showSnackbar(res.data.message, true);
    return res.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};

export const addBankCard = async (cardNumber: string) => {
  try {
    const res = await api.post<BankCardDataType[]>('/silver/cards/', { card_number: cardNumber });
    return res.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.error);
    }
  }
};
