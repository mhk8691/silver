import { ReactNode } from "react";

export interface ToggleItemsType {
  title: string;
  value: string;
  id: number;
  emptyMessage?: string;
}
export interface MenuType {
  id?: number;
  title: string;
  link?: string;
  subMenu?: MenuType[];
}
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
export interface TableSilverDataType {
  typeSilver?: string;
  currentRate: number;
  minPriceDay: number;
  maxPriceDay: number;
  dayChange: number;
  monthChange: number;
  weeklyChart: number;
  url?: string;
  isOns?: boolean;
}

export interface NotifItemsType {
  title: string;
  message: string;
  date: string;
}



export interface CartItem extends ProductDateType
 {
  quantity: number;
}
export interface ActionButtonType {
  title: string;
  icon: ReactNode | string;
  link: string;
}

export interface AppbarItemsType {
  name: string;
  image: string;
  link?: string;
}

export interface AssetsDataType {
  silver_balance_gr: number;
  current_silver_price: number;
toman_balance	:number
total_assets	:number
}
export interface LoginDtaType {
  refresh: string;
  access: string;
  role: string;
  status: string;
  full_name: string;
}

export interface BuySilverDataType {
  details: {
    weight_gr: number;
    price_per_gram: number;
    fee_toman: number;
    total_paid_toman: number;
  };
}

export interface SellSilverDataType {
  details: {
    sold_weight: number;
    payout_toman: number;
    wallet_balance: number;
  };
}

export interface BankCardDataType {
  id: number;
  card_number: string;
  bank_name: string;
  is_active: boolean;
}
export interface DepositDataType {
  card_number: string;
  sheba: string;
  full_name: string;
}

export interface WithdrawDataType {
  added_weight?: string;
  new_wallet_balance: string;
}

export interface AllAssetsDataType {
"total_asset_value":number, 
  "gold_balance":number,
  "silver_balance":number, 
  "wallet_balance":number, 
  "gold_asset_value":number, 
  "silver_asset_value":number, 
  "gold_price":number, 
  "silver_price": number
}
export interface StatisticsDataType {
 "total_assets": number,
  "profit": number,
  "withdrawn_silver": number,
  "purchased_giftcards": number,
  "received_giftcards": number,
  "pending_toman": number,
  "pending_silver": number
}
export interface ProductDateType {
  id: number;
  name: string;
  category?: string;
  weight: number;
  total_price:number;
  image?: string;
}

export interface CartItemDataType {
  id: number;
  product_name: string;
  weight: number;
  toman: number;
  quantity: number;
}
export interface CartDataType {
  items: CartItemDataType[];
  total_gold: number;
  total_toman: number;
  user_gold_balance: number;
  user_wallet_balance: number;
}

export interface OrderItemDataType {
  id: number;
  status: string;
  total_gold: number;
  created_at: string;
}
export interface GiftCardSubmitDataType {
  message: string;
  total_price: number;
  order_id: number;
}
export interface GiftCardListType {
  serial_number: string;
  weight: string;
  is_used: boolean;
  created_at: string;
}
export interface WalletHeaderDataType {
  total_assets_value: number;
  description: string;
  gold_balance_gr: number;
  toman_balance: number;
}
export interface RefrraDataType {
  referral_code: string;
  total_invited: number;
  total_earned: number;
  referral_link:string
  // commission_rate: string;
  // message: string;
}
export type StatusType="COMPLETED" | 'FAILED' | 'PENDING'
export interface PriceAlertsDataType {
  id: number;
  target_price: number;
  alert_type: string;
  alert_type_display: string;
  is_active: boolean;
  created_at: string;
}



export interface RecentTransactionDataType{
    "id": number,
      "amount": number,
      "type":'DEPOSIT'|'WITHDRAW',
      "method_display": string,
      "status":  StatusType,
      "tracking_code": string,
      "created_at": string,
}
export interface TradeTableDataType {
    "id": number,      "type": "BUY" | 'SELL',      "status": StatusType,      "amount_gr": number,      "price_per_gram": number,      "fee": number,      "total_amount": number,      "tracking_code": string,      "created_at": string
}
export interface ChartGoldDataType {
  "chart": {
      "labels": string[],
      "prices": number[]  },
    "stats": {
      "current_price": number,
      "highest_price": number,
      "lowest_price": number,
      "change_percent": number   }  }




export interface AddressesDataType {
    "id"?: number,
      "type"?: string,
      "province": string,
      "city":string,
      "address":string
      "postal_code": string,
      "plaque": string,
      "unit": string
}
export interface CategoriesDataType {
            "id": number,
            "name": string,
            "slug": string
}

export interface OrdersDataType {
  id:number,
  tracking_code: string;
  status: StatusType;
  payment_method_display: string;
  delivery_type_display: string;
  total_toman_amount: number;
  created_at: string;
unit:string
plaque:string
  province: string;
  city: string;
  address: string;
    items: {
                    "id": number,
                    "product": number,
                    "product_name": string,
                    "quantity": number,
                    "price_at_time": number,
                    "weight_at_time": number
                }[]
}
export interface CheckoutDataType {
  products:{
    product_id:number
    quantity:number
  }[],
    "payment_method": string,
  "delivery_type": string,
  "address_id": number
}