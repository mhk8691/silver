import api, { ApiResponse } from '@/lib/api';
  import { AddressesDataType, GiftCardListType } from '@/app/core/Types';

export const giftCardSubmit = async (serialNumber: string) => {
    const response = await api.post<{
      message: string;
    }>('/silver/gift-card/redeem/', { serial_number: serialNumber });
   return response.data
  
};

export const giftCardOrder = async (weight:string,quantity:number,province:string,city:string,address:string,plaque:string,unit:string,postCode:string,addressId?:number) => {
  const dataWithAddress = { weight_per_card: weight ,quantity,province,city,address,plaque,unit,postal_code:postCode}
  const dataWithoutAddress = { weight_per_card: weight ,quantity,address_id:addressId}
  const newData = addressId ?dataWithoutAddress :dataWithAddress
  const response = await api.post<{
      message: string;
    }>('/silver/gift-card/order/', newData);
    return response.data
  }

export const getGiftCardList = async () => {
    const response = await api.get<ApiResponse<GiftCardListType[]>>('/silver/gift-card/list/');
    return response.data.data;
};
export const getAddresses = async () => {
    const response = await api.get<ApiResponse<AddressesDataType[]>>('/silver/addresses/');
    return response.data.data;
};

export const removeAddress = async (id:number) => {
    const response = await api.delete<{
      message:string
    }>(`/silver/address/${id}`);
    return response.data;
};
