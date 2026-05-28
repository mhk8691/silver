"use client";
import Card from "@/app/Components/Containers/Container/Container";
import FilterToggleButton from "@/app/Components/FilterToggleButton/FilterToggleButton";
import InputField from "@/app/Components/InputField/InputField";
import { showSnackbar } from "@/app/Components/Snackbar/Snackbar";
import { ToggleItemsType } from "@/app/core/Types";
import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { isAxiosError } from "axios";
import { useState } from "react";
import { silverSell } from "@/lib/silver/silverSell";
import { silverBuy } from "@/lib/silver/silverBuy";
import Loading from "@/app/Components/Loading/Loading";
import { useAssets } from "@/app/AssetsProvider";

const items: ToggleItemsType[] = [
  { title: "خرید", value: "buy", id: 1 },
  { title: "فروش", value: "sell", id: 2 },
];
export default function Trading() {
   const [price, setPrice] = useState('');
  const [silver, setSilver] = useState('');
  const [select, setSelect] = useState(items[0].value);
  const [open, setOpen] = useState(false);
  const [isLoading,setIsLoading] = useState(false)
  // const [buyInfo, setBuyInfo] = useState<BuySilverDataType>({} as BuySilverDataType);
  const {assets,refetch} = useAssets()
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  
  const handlePriceChange =  async (val: string) => {
    setPrice(val);
    const num = Number(val);
    if (!isNaN(num)) {
      setSilver(String(num / assets?.current_silver_price));
    } else {
      setSilver('');
    }
  };

  const handleSilverChange =async (val: string) => {
    setSilver(val);
    const num = Number(val);
    if (!isNaN(num)) {
      setPrice(String(num * assets?.current_silver_price));
    } else {
      setPrice('');
    }
  };

  const handleBuySilver = async () => {
    const methood = assets?.toman_balance > 0 ? 'WALLET':'GATEWAY'
    try {
      setIsLoading(true)
      const response = await silverBuy(price,methood,silver);
      showSnackbar(response.data.message,true)
      setSilver('')
      setPrice('')
      refetch()
      // setBuyInfo(response.data.details)
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
      showSnackbar(response.data.message,true)
      setOpen(true);
           setSilver('')
      setPrice('')
      refetch()
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
    }finally{
      setIsLoading(false)
    }
  };
  return (
    <Card
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
        <Typography variant="h2" fontSize={22}>
          خرید و فروش نقره
        </Typography>
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
      <Stack
        gap={3.5}
        flexDirection={select === "buy" ? "column" : "column-reverse"}
      >
        <Stack>
          <InputField
          type="number"
            placeholder={"ملبغ به تومان"}
            title={"تومان"}
            value={price}
            setValue={handlePriceChange}
          />
        </Stack>
        <Stack>
          <InputField
          type="number"
            placeholder={"وزن نقره"}
            title={"گرم"}
            value={silver}
            setValue={handleSilverChange}
          />
        </Stack>
      </Stack>
        <Button
          variant="contained"
          color="primary"
          onClick={() => (select === 'buy' ? handleBuySilver() : handleSellSilver())}
          sx={{ borderRadius: 2, fontSize: 16, height:60 }}
          disabled={isLoading}
        >
          {isLoading ? <Loading size={30}/>:select === 'buy' ? 'خرید' : 'فروش'}
        </Button>
    </Card>
  );
}
