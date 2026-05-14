import { SellSilverDataType } from "@/app/core/Types";
import api from "../api";

export const silverSell = async (silver: string) => {
  const response = await api.post<SellSilverDataType>("/silver/sell/", {
    weight: silver,
  });
  return response;
};
