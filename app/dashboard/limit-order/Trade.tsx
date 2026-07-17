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

  const { assets } = useAssets();


  // تغییر مبلغ
  const handlePriceChange = (val: string) => {
    setPrice(val);

    const total = Number(val);
    const target = Number(targetPrice);

    const fee =
      1 + Number(
        type === 'BUY'
          ? assets.fees?.silver_buy_fee
          : assets.fees?.silver_sell_fee
      );


    if (type === 'BUY') {

      if (!isNaN(total) && target > 0) {
        setSilver(
          (total / ((1 + Number(assets.fees?.silver_buy_fee)) * target))
          .toString()
        );
      } else {
        setSilver('');
      }

    }
  };


  // تغییر وزن نقره
  const handleSilverChange = (val: string) => {
    setSilver(val);

    const weight = Number(val);
    const target = Number(targetPrice);


    if (!isNaN(weight) && target > 0) {

      setPrice(
        (
          weight *
          target *
          (1 + Number(assets.fees?.silver_sell_fee))
        ).toString()
      );

    } else {
      setPrice('');
    }

  };



  // مهم:
  // وقتی تارگت پرایس تغییر کند دوباره محاسبه کن
  useEffect(() => {

    const target = Number(targetPrice);


    if (!target || target <= 0)
      return;


    if (type === 'BUY') {

      const total = Number(price);

      if (total > 0) {

        setSilver(
          (
            total /
            ((1 + Number(assets.fees?.silver_buy_fee)) * target)
          ).toString()
        );

      }

    }


    if (type === 'SELL') {

      const weight = Number(silver);

      if (weight > 0) {

        setPrice(
          (
            weight *
            target *
            (1 + Number(assets.fees?.silver_sell_fee))
          ).toString()
        );

      }

    }


  }, [targetPrice]);




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
              onClick={()=>setOpen(true)}
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

        tradeData={{
          weight:silver,
          price:+price
        }}

        targetPrice={targetPrice}

      />


    </>
  );
}