'use client'
import { useAssets } from '@/app/AssetsProvider'
import Container from '@/app/Components/Containers/Container/Container'
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker'
import FilterToggleButton from '@/app/Components/FilterToggleButton/FilterToggleButton'
import InputField from '@/app/Components/InputField/InputField'
import Loading from '@/app/Components/Loading/Loading'
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar'
import { ToggleItemsType, TradeTableDataType } from '@/app/core/Types'
import { getReports } from '@/lib/getReports/getReports'
import { silverBuy } from '@/lib/silver/silverBuy'
import { silverSell } from '@/lib/silver/silverSell'
import { Button, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { isAxiosError } from 'axios'
import React, { Dispatch, SetStateAction, useState } from 'react'
import TradeSilverConfirmation from './TradeSilverConfirmation'
import TradeGuide from './TradeGuide'
import priceFormater from '@/app/core/PriceFormater'



const items: ToggleItemsType[] = [
  { title: 'خرید', value: 'buy', id: 1 },
  { title: 'فروش', value: 'sell', id: 2 },
];
interface Props{
    setData?: Dispatch<SetStateAction<TradeTableDataType[]>>
    reportsParams?:string
dateRange?:DatePickerValue | null
filter?:string
}
export default function Trading({setData,reportsParams,filter,dateRange}:Props) {
      const [price, setPrice] = useState('');
      const [silver, setSilver] = useState('');
      const [select, setSelect] = useState(items[0].value);
      const [open, setOpen] = useState(false);
      const [isLoading,setIsLoading] = useState(false)
      const [openModal,setOpenModal] = useState(false)
  const {assets,refetch} = useAssets()
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
      const handlePriceChange =  async (val: string) => {
    setPrice(val);
    const num = Number(val);
    if (!isNaN(num)) {
      if (select === 'buy'){
      setSilver(String(num / assets?.silver_price_with_fees.buy));

      }else{
      setSilver(String(num / assets?.silver_price_with_fees.sell));

      }
    } else {
      setSilver('');
    }
  };

  const handleSilverChange =async (val: string) => {
    setSilver(val);
    const num = Number(val);
    if (!isNaN(num)) {
        if (select === 'buy'){
        setPrice(String(num * assets?.silver_price_with_fees.buy));

      }else{
      setPrice(String(num * assets?.silver_price_with_fees.sell));

      }
    } else {
      setPrice('');
    }
  };

  const handleBuySilver = async () => {
    const methood = assets?.wallet_balance > 0 ? 'WALLET':'GATEWAY'
    try {
      setIsLoading(true)
      const response = await silverBuy(silver,methood);
      const newData = await getReports('silver',reportsParams||'',dateRange,filter)
      
      setData&&setData(newData)
      showSnackbar(response.data.message,'success')
      setSilver('')
      setPrice('')
      refetch()
      setOpen(false)
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
    }finally{
      setIsLoading(false)
    }
  };
  const handleSellSilver = async () => {
    try {
      setIsLoading(true)
      const response = await silverSell(silver);
      const newData = await getReports('silver',reportsParams || '',dateRange,filter)
      setData&&setData(newData)
      showSnackbar(response.data.message,'success')
      setOpen(true);
           setSilver('')
      setPrice('')
      refetch()
      setOpen(false)
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
    }finally{
      setIsLoading(false)
    }
  };
  return (
    <>
      <Container
        style={{
          gap: 3.15,
          py: 3,
          px: {
            xs: 2,
            sm: 4,
            md: 2,
            lg: 4,
          },
        }}
      >
             {isDesktop && (
         <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
           <Typography variant="h2" fontSize={22}>
            خرید و فروش نقره
          </Typography>
           <Typography component={'div'} onClick={()=>setOpenModal(true)} variant="h2" fontSize={22} sx={{textDecoration:'underline',color:'#0091F8',cursor:'pointer'}}>
           راهنما
          </Typography>
         </Stack>
        )}
        <FilterToggleButton
          items={items}
          active={select}
          setActive={setSelect}
          style={{
            fontSize: {
              xs: 16,
              sm: 20,
            },
          }}
        />
        <Stack gap={3.5} flexDirection={select === 'buy' ? 'column' : 'column-reverse'}>
          <Stack>
            <InputField
            type='number'
              placeholder={'ملبغ به تومان'}
              title={'تومان'}
              value={price}
              setValue={handlePriceChange}
            />
            {
              select === 'buy' && <Typography
                variant="body2"
                color="primary"
                component="div"
                sx={{
                  display: 'inline-flex',
                  width: 'fit-content',
                  ml: 1,
                  mt:1,
                  cursor: 'pointer',
                }}
                onClick={() => {    setPrice(assets.wallet_balance.toString())
                handlePriceChange(assets.wallet_balance.toString())
                }}
              >
                موجودی تومان دردسترس: {priceFormater(assets.wallet_balance)} تومان
              </Typography>
            }
          </Stack>
          <Stack>
            <InputField
            type='number'
              placeholder={'وزن نقره'}
              title={'گرم'}
              value={silver}
              setValue={handleSilverChange}
            />
            {
              select === 'sell' && <Typography
                variant="body2"
                color="primary"
                component="div"
                sx={{
                  display: 'inline-flex',
                  width: 'fit-content',
                  ml: 1,
                  cursor: 'pointer',
                  mt:1,
                }}
                onClick={() => {    setPrice(assets.silver_balance.toString())
                handleSilverChange(assets.silver_balance.toString())
                }}
              >
                 موجودی نقره ی در دسترس: {priceFormater(assets.silver_accessible)} گرم
              </Typography>
            }
          </Stack>
        </Stack>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(true)}
          sx={{ borderRadius: 2, fontSize: 16, height:60 }}
        >
          {select === 'buy' ? 'خرید' : 'فروش'}
        </Button>
      </Container>
       <TradeSilverConfirmation select={select}  isLoading={isLoading} handleSubmit={select === 'buy' ? handleBuySilver : handleSellSilver} title={select === 'buy' ? 'تایید خرید نقره':'تایید فروش نقره'} open={open} setOpen={setOpen} tradeData={{
        weight:silver,
        price:+price
       }} /> 
       <TradeGuide open={openModal} setOpen={setOpenModal} />
    </>
 
  )
}
