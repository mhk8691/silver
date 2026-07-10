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

  const handlePriceChange = async (val: string) => {
    setPrice(val);
    const num = Number(val);
    if (!isNaN(num) && assets?.silver_price) {
      setSilver(String(num / assets.silver_price));
    } else {
      setSilver('');
    }
  };

  const handleSilverChange = async (val: string) => {
    setSilver(val);
    const num = Number(val);
    if (!isNaN(num) && assets?.silver_price) {
      setPrice(String(num * assets.silver_price));
    } else {
      setPrice('');
    }
  };

  const handleClick = async () => {
    setIsLoading(true);
    try {
      if (editMode) {
        const response = await editLimitOrder(id, targetPrice, silver, price);
        showSnackbar(response?.data?.message ?? response?.message, 'success');
        setEditMode(false);
        setId(0);
      } else {
        const response = await limitOrder(type, targetPrice, type === 'BUY' ? price : silver);
        showSnackbar(response?.data?.message ?? response?.message, 'success');
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

  // این تب فقط وقتی که واقعاً فعال (قابل مشاهده) هست، select پیش‌فرض خودش رو ست کنه
  // و اگر در حال ادیت هستیم دست به select نزنه (چون handleEdit خودش select درست رو ست کرده)
  useEffect(() => {
    const isActive = (type === 'BUY' && tab === 0) || (type === 'SELL' && tab === 1);
    if (isActive && !editMode) {
      setSelect(type === 'BUY' ? 'min' : 'max');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

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
                موجودی: {priceFormater(assets.wallet_balance)} تومان
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
                  handleSilverChange(assets.silver_balance.toString());
                }}
              >
                موجودی: {priceFormater(assets.silver_balance)} گرم
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