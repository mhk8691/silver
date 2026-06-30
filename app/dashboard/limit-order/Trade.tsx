"use client";

import { useAssets } from "@/app/AssetsProvider";
import Card from "@/app/Components/Containers/Container/Container";
import FilterToggleButton from "@/app/Components/FilterToggleButton/FilterToggleButton";
import InputField from "@/app/Components/InputField/InputField";
import priceFormater from "@/app/core/PriceFormater";
import { ToggleItemsType } from "@/app/core/Types";
import { Button, Stack, SvgIcon, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  type: "buy" | "sell";
}

const items: ToggleItemsType[] = [
  { title: "در قیمت بالاتر", value: "max", id: 1 },
  { title: "در قیمت پایین تر", value: "min", id: 2 },
];

const RATE = 17999000;

export default function Trade({ type }: Props) {
  const [price, setPrice] = useState("");
  const [targetPrice, setTargetPrice] = useState("");
  const {assets} = useAssets()
  const [select, setSelect] = useState(
    type === "sell" ? items[0].value : items[1].value,
  );

  const silver = price ? String(Number(price) / RATE) : "";

  return (
    <Card
      style={{
        gap: 3.5,
        border: "none",
        py: 1,
        px: { xs: 0, sm: 1 },
      }}
    >
      <FilterToggleButton items={items} active={select} setActive={setSelect} />

      <Stack gap={3.5}>
        <InputField
        type='number'
          placeholder={type === "buy" ? "قیمت مد نظر خرید" : "قیمت مد نظر فروش"}
          title="تومان"
          value={targetPrice}
          setValue={setTargetPrice}
        />

        <Stack gap={1.5}>
          <InputField
          type='number'
            placeholder="مبلغ به تومان"
            title="تومان"
            value={price}
            setValue={setPrice}
          />
 {
          type === 'BUY' ? <Typography
  variant="body2"
  color="primary"
  component="div"
  sx={{
    display: 'inline-flex',
    width: 'fit-content',
    ml: 1,
    cursor: 'pointer',
  }}
  onClick={() => {    setPrice(assets.wallet_balance.toString())
  // handlePriceChange(assets.wallet_balance.toString())
  }}
>
  موجودی: {priceFormater(assets.wallet_balance)} تومان
</Typography>:<Typography
  variant="body2"
  color="primary"
  component="div"
  sx={{
    display: 'inline-flex',
    width: 'fit-content',
    ml: 1,
    cursor: 'pointer',
  }}
  onClick={() => {    setPrice(assets.silver_balance.toString())
  // handleGoldChange(assets.silver_balance.toString())
  }}
>
  موجودی: {priceFormater(assets.silver_balance)} گرم
</Typography>
        }
          <Stack direction="row" justifyContent="center">
            <SvgIcon
              sx={{
                bgcolor: "background.paper",
                borderRadius: "50%",
                color: "black",
                width: 35,
                height: 35,
                p: 1,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M6.9 4.4L4.4 2 2 4.4" stroke="currentColor" />
                <path d="M4.4 14V2" stroke="currentColor" />
                <path d="M9 11.5l2.5 2.5 2.5-2.5" stroke="currentColor" />
                <path d="M11.5 2v12" stroke="currentColor" />
              </svg>
            </SvgIcon>
          </Stack>

          <InputField
          type='number'
            placeholder="وزن نقره"
            title="گرم"
            value={silver}
            setValue={() => {}}
          />
        </Stack>
      </Stack>

      <Button
        variant="contained"
        color="primary"
        disableRipple
        sx={{
          borderRadius: 2,
          fontSize: 16,
          py: 1.4,
          "&:hover": {
            bgcolor: "primary.main",
          },
        }}
      >
        ثبت سفارش
      </Button>
    </Card>
  );
}
