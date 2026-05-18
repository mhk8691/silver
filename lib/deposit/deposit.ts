import { isAxiosError } from "axios";
import api from "../api";
import { showSnackbar } from "@/app/Components/Snackbar/Snackbar";
import { DepositDataType, WithdrawDataType } from "@/app/core/Types";

export const silverDeposit = async (amount: string) => {
  try {
    const response = await api.post<{ message: string }>("/silver/deposit/", {
      amount,
    });
    //  showSnackbar(response.data.message,true)
    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};
export const getSilverDeposit = async () => {
  try {
    const response = await api.get<DepositDataType>("/silver/deposit/");
    //  showSnackbar(response.data.message,true)
    return response;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.detail);
    }
  }
};
