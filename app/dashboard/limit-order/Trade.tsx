'use client';

import { useAssets } from '@/app/AssetsProvider';
import Card from '@/app/Components/Containers/Container/Container';

import FilterToggleButton from '@/app/Components/FilterToggleButton/FilterToggleButton';
import InputField from '@/app/Components/InputField/InputField';
import Loading from '@/app/Components/Loading/Loading';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import priceFormater from '@/app/core/PriceFormater';
import { editLimitOrder, limitOrder } from '@/lib/limit-order/limitOrder';
import { Button, Stack, Typography } from '@mui/material';
import { isAxiosError } from 'axios';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { buyItems, sellItems } from './LimitOrder';

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
  tab: number; // تب فعال والد - برای تشخیص اینکه این Trade خودش الان دیده می‌شه یا نه
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

  const { assets } = useAssets();

  const handlePriceChange = (val: string) => {
  setPrice(val);

  const total = Number(val);
  const price = Number(targetPrice);
  const fee = 1 + Number(assets.fees.silver_buy_fee);

  if (!isNaN(total) && !isNaN(price) && price > 0) {
    setSilver((total / (fee * price)).toString());
  } else {
    setSilver('');
  }
};

const handleSilverChange = (val: string) => {
  setSilver(val);

  const weight = Number(val);
  const price = Number(targetPrice);
  const fee = 1 + Number(assets.fees.silver_buy_fee);

  if (!isNaN(weight) && !isNaN(price) && price > 0) {
    setPrice((weight * price * fee).toString());
  } else {
    setPrice('');
  }
};

  const handleClick = async () => {
    setIsLoading(true);
    try {
      if (editMode) {
        const response = await editLimitOrder(id, targetPrice, silver, price);
        showSnackbar( response?.message, 'success');
        setEditMode(false);
        setId(0);
      } else {
        const response = await limitOrder(type, targetPrice, type === 'BUY' ? price : silver);
        showSnackbar( response?.data.message, 'success');
      }

      getData();
      setPrice('');
      setSilver('');
      setTargetPrice('');
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleClearInput()
    const isActive = (type === 'BUY' && tab === 0) || (type === 'SELL' && tab === 1);
    if (isActive && !editMode) {
      setSelect(type === 'BUY' ? 'min' : 'max');
    }
  }, [tab]);

    const handleClearInput = ()=>{
    setPrice('')
    setSilver('')
  }

  return (
    <Stack component={'div'} id="trade">
      <Card
        style={{
          gap: 3.5,
          border: 'none',
          py: 1,
          px: { xs: 0, sm: 1 },
        }}
      >
        {type === 'BUY' ? (
          <FilterToggleButton style={{ py: 1.5 }} items={buyItems} active={select} setActive={setSelect} />
        ) : (
          <FilterToggleButton style={{ py: 1.5 }} items={sellItems} active={select} setActive={setSelect} />
        )}

        <Stack gap={3.5} component={'div'}>
          <InputField
            type="number"
            placeholder={type === 'BUY' ? 'قیمت مد نظر خرید' : 'قیمت مد نظر فروش'}
            title="تومان"
            value={targetPrice}
            setValue={setTargetPrice}
          />

          <Stack gap={1.5}>
            <InputField type="number" placeholder="مبلغ به تومان" title="تومان" value={price} setValue={handlePriceChange} />
            {type === 'BUY' ? (
              <Typography
                variant="body2"
                color="primary"
                component="div"
                sx={{
                  display: 'inline-flex',
                  width: 'fit-content',
                  ml: 1,
                  cursor: 'pointer',
                }}
                onClick={() => {
                  handlePriceChange(assets.wallet_balance.toString());
                }}
              >
                موجودی تومان دردسترس: {priceFormater(assets.wallet_balance)} تومان
              </Typography>
            ) : (
              <Typography
                variant="body2"
                color="primary"
                component="div"
                sx={{
                  display: 'inline-flex',
                  width: 'fit-content',
                  ml: 1,
                  cursor: 'pointer',
                }}
                onClick={() => {
                  handleSilverChange(assets.silver_accessible.toString());
                }}
              >
                موجودی نقره ی در دسترس: {priceFormater(assets.silver_accessible)} گرم
              </Typography>
            )}
            <Stack direction="row" justifyContent="center">
              <Stack
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: '#E2EEF9',
                  borderRadius: '50%',
                  color: 'black',
                  width: 35,
                  height: 35,
                }}
              >
                 <svg width="16" height="16" viewBox="0 0 16 16">
    <path d="M6.9 4.4L4.4 2 2 4.4" stroke="currentColor" />
    <path d="M4.4 14V2" stroke="currentColor" />
    <path d="M9 11.5l2.5 2.5 2.5-2.5" stroke="currentColor" />
    <path d="M11.5 2v12" stroke="currentColor" />
  </svg>
              </Stack>
            </Stack>

            <InputField type="number" placeholder="وزن نقره" title="گرم" value={silver} setValue={handleSilverChange} />
          </Stack>
        </Stack>

        <Button variant="contained" disabled={isLoading} onClick={handleClick} color="primary" sx={{ borderRadius: 2, fontSize: 16, py: 1.4 }}>
          {isLoading ? <Loading size={30} /> : ' ثبت سفارش'}
        </Button>
      </Card>
    </Stack>
  );
}