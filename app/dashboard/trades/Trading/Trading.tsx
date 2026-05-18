"use client";
import Card from "@/app/Components/Containers/Container/Container";
import FilterToggleButton from "@/app/Components/FilterToggleButton/FilterToggleButton";
import InputField from "@/app/Components/InputField/InputField";
import { showSnackbar } from "@/app/Components/Snackbar/Snackbar";
import { ToggleItemsType } from "@/app/core/Types";
import { silverBuy } from "@/lib/silver/silverBuy";
import { silverSell } from "@/lib/silver/silverSell";
import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { isAxiosError } from "axios";
import { useState } from "react";

const items: ToggleItemsType[] = [
  { title: "خرید", value: "buy", id: 1 },
  { title: "فروش", value: "sell", id: 2 },
];
export default function Trading() {
  const [price, setPrice] = useState("");
  const [silver, setSilver] = useState("");
  const [select, setSelect] = useState(items[0].value);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const handlePriceChange = (val: string) => {
    setPrice(val);

    const num = Number(val);
    if (!isNaN(num)) {
      setSilver(String(num / 17999000));
    } else {
      setSilver("");
    }
  };

  const handleSilverChange = (val: string) => {
    setSilver(val);

    const num = Number(val);
    if (!isNaN(num)) {
      setPrice(String(num * 17999000));
    } else {
      setPrice("");
    }
  };
  const handleBuySilver = async () => {
    try {
      const response = await silverBuy(price);
      setOpen(true);
      // setBuyInfo(response.data.details)
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
    }
  };
  const handleSellSilver = async () => {
    try {
      const response = await silverSell(silver);
      setOpen(true);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
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
        select={select}
        setSelect={setSelect}
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
            placeholder={"ملبغ به تومان"}
            title={"تومان"}
            value={price}
            setValue={handlePriceChange}
          />
        </Stack>
        <Stack>
          <InputField
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
        disableRipple
        onClick={() =>
          select === "buy" ? handleBuySilver() : handleSellSilver()
        }
        sx={{
          borderRadius: 2,
          fontSize: 16,
          py: 1.4,
          "&:hover": {
            bgcolor: "primary.main",
          },
        }}
      >
        {select === "buy" ? "خرید" : "فروش"}
      </Button>
    </Card>
  );
}
