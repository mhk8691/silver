'use client';

import { useAssets } from '@/app/AssetsProvider';
import Card from '@/app/Components/Containers/Container/Container';
import FilterToggleButton from '@/app/Components/FilterToggleButton/FilterToggleButton';
import InputField from '@/app/Components/InputField/InputField';
import priceFormater from '@/app/core/PriceFormater';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { editLimitOrder, limitOrder } from '@/lib/limit-order/limitOrder';

import { Button, Stack, Typography } from '@mui/material';
import { isAxiosError } from 'axios';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { buyItems, sellItems } from './LimitOrder';
import LimitOrderConfirmation from './LimitOrderConfirmation';
import { limitOrderBuyCalculate, limitOrderSellCalculate } from '@/lib/calculate/calculate';
import { LimitOrderCalculateType } from '@/app/core/Types';

interface Props {
  type: 'BUY' | 'SELL';
  getData: () => Promise<void>;
  price: string;
  setPrice: Dispatch<SetStateAction<string>>;
  id: number;
  setId: Dispatch<SetStateAction<number>>;
  targetPrice: string;
  setTargetPrice: Dispatch<SetStateAction<string>>;
  editMode: boolean;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  silver: string;
  setSilver: Dispatch<SetStateAction<string>>;
  select: string;
  setSelect: Dispatch<SetStateAction<string>>;
  tab: number;
}

export default function Trade({
  id,
  setId,
  editMode,
  setEditMode,
  type,
  getData,
  silver,
  price,
  select,
  setSilver,
  setPrice,
  setSelect,
  setTargetPrice,
  targetPrice,
  tab,
}: Props) {

  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
    const [data, setData] = useState<LimitOrderCalculateType>({} as LimitOrderCalculateType)

  const { assets } = useAssets();


const handlePriceChange = (val: string) => {
  setPrice(val);

  const total = Number(val);
  const target = Number(targetPrice);

  if (isNaN(total) || isNaN(target) || total <= 0 || target <= 0) {
    setSilver('');
    return;
  }

  if (type === 'BUY') {
    const fee = Number(assets?.fees?.silver_buy_fee ?? 0)/100;

    const weight = total / ((1 + fee) * target);

    setSilver(weight.toString());
  } else {
    const fee = Number(assets?.fees?.silver_sell_fee ?? 0)/100;

    const weight = total / (target * (1 - fee));

    setSilver(weight.toString());
  }
};

const handleSilverChange = (val: string) => {
  setSilver(val);

  const weight = Number(val);
  const target = Number(targetPrice);

  if (isNaN(weight) || isNaN(target) || weight <= 0 || target <= 0) {
    setPrice('');
    return;
  }

  if (type === 'BUY') {
    const fee = Number(assets?.fees?.silver_buy_fee ?? 0)/100;

    const total = weight * target * (1 + fee);

    setPrice(total.toString());
  } else {
    const fee = Number(assets?.fees?.silver_sell_fee ?? 0)/100;

    const total = weight * target * (1 - fee);

    setPrice(total.toString());
  }
};

useEffect(() => {
  if (!assets?.fees) return;

  const target = Number(targetPrice);

  if (!target || target <= 0) return;

  if (type === 'BUY') {
    const total = Number(price);

    if (total > 0) {
      const fee = Number(assets?.fees?.silver_buy_fee ?? 0)/100;

      const weight = total / ((1 + fee) * target);

      setSilver(weight.toString());
    }
  } else {
    if (silver) {
      const weight = Number(silver);

      if (weight > 0) {
        const fee = Number(assets?.fees?.silver_sell_fee ?? 0)/100;

        const total = weight * target * (1 - fee);

        setPrice(total.toString());
      }
    } else if (price) {
      const total = Number(price);

      if (total > 0) {
        const fee = Number(assets?.fees?.silver_sell_fee ?? 0)/100;

        const weight = total / (target * (1 - fee));

        setSilver(weight.toString());
      }
    }
  }
}, [
  targetPrice,
  type,
  price,
  silver,
  assets?.fees?.silver_buy_fee,
  assets?.fees?.silver_sell_fee,
]);

  const handleClick = async () => {

    setIsLoading(true);

    try {

      if(editMode){

        const response = await editLimitOrder(
          id,
          targetPrice,
          silver,
          price
        );

        showSnackbar(response?.message,'success');

        setEditMode(false);
        setId(0);

      }else{

        const response = await limitOrder(
          type,
          targetPrice,
          type === 'BUY' ? price : silver
        );

        showSnackbar(
          response?.data.message,
          'success'
        );

      }


      await getData();

      setPrice('');
      setSilver('');
      setTargetPrice('');
      setOpen(false);


    } catch(error:unknown){

      if(isAxiosError(error)){
        showSnackbar(
          error.response?.data.message
        );
      }

    } finally {

      setIsLoading(false);

    }

  };

  useEffect(()=>{

    if(!editMode){
      setPrice('');
      setSilver('');
    }


    const isActive =
      (type === 'BUY' && tab === 0) ||
      (type === 'SELL' && tab === 1);


    if(isActive && !editMode){
      setSelect(
        type === 'BUY'
          ? 'min'
          : 'max'
      );
    }


  },[tab]);

      const getDataBuy = async () => {
        try {
          const response = await limitOrderBuyCalculate(price, targetPrice)
          setData(response.data)
          setOpen(true)
        } catch (error: unknown) {
          if (isAxiosError(error)) {
            showSnackbar(error.response?.data.message, 'error')
          }
        }
      }
  
      const getDataSell = async () => {
        try {
          const response = await limitOrderSellCalculate(silver, targetPrice)
          setData(response.data)
           setOpen(true)
        } catch (error: unknown) {
          if (isAxiosError(error)) {
            showSnackbar(error.response?.data.message, 'error')
          }
        }
      }
  return (
    <>
      <Stack id="trade">

        <Card
          style={{
            gap:3.5,
            border:'none',
            py:1,
            px:{xs:0,sm:1}
          }}
        >

          {
            type === 'BUY'
            ?
            <FilterToggleButton
              style={{py:1.5}}
              items={buyItems}
              active={select}
              setActive={setSelect}
            />
            :
            <FilterToggleButton
              style={{py:1.5}}
              items={sellItems}
              active={select}
              setActive={setSelect}
            />
          }



          <Stack gap={3.5}>

            <InputField
              type="number"
              placeholder="قیمت مد نظر"
              title="تومان"
              value={targetPrice}
              setValue={setTargetPrice}
            />



            <Stack gap={1.5}>


              <InputField
                type="number"
                placeholder="مبلغ به تومان"
                title="تومان"
                value={price}
                setValue={handlePriceChange}
              />



              {
                type === 'BUY'
                ?
                <Typography
                  color="primary"
                  sx={{
                    cursor:'pointer',
                    ml:1
                  }}
                  onClick={()=>
                    handlePriceChange(
                      assets.wallet_balance.toString()
                    )
                  }
                >
                  موجودی تومان دردسترس:
                  {' '}
                  {priceFormater(assets.wallet_balance)}
                  {' '}
                  تومان
                </Typography>
                :
                <Typography
                  color="primary"
                  sx={{
                    cursor:'pointer',
                    ml:1
                  }}
                  onClick={()=>
                    handleSilverChange(
                      assets.silver_accessible.toString()
                    )
                  }
                >
                  موجودی نقره:
                  {' '}
                  {priceFormater(assets.silver_accessible)}
                  {' '}
                  گرم
                </Typography>
              }




              <Stack direction="row" justifyContent="center">

                <Stack
                  sx={{
                    bgcolor:'#E2EEF9',
                    borderRadius:'50%',
                    color:'black',
                    width:35,
                    height:35,
                    alignItems:'center',
                    justifyContent:'center'
                  }}
                >

                  ⇅

                </Stack>

              </Stack>




              <InputField
                type="number"
                placeholder="وزن نقره"
                title="گرم"
                value={silver}
                setValue={handleSilverChange}
              />


            </Stack>



            <Button
              variant="contained"
              disabled={isLoading}
              onClick={()=>select === 'min' ? getDataBuy():getDataSell()}
              sx={{
                borderRadius:2,
                fontSize:16,
                py:1.4
              }}
            >
              ثبت سفارش
            </Button>


          </Stack>


        </Card>

      </Stack>




      <LimitOrderConfirmation

        select={select}

        title={
          select === 'min'
          ?
          'تایید خرید نقره'
          :
          'تایید فروش نقره'
        }

        isLoading={isLoading}

        handleSubmit={handleClick}

        open={open}

        setOpen={setOpen}
data={data}

      />


    </>
  );
}