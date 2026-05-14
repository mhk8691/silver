"use client";
import Card from "@/app/Components/Containers/Container/Container";
import FilterToggleButton from "@/app/Components/FilterToggleButton/FilterToggleButton";
import InputField from "@/app/Components/InputField/InputField";
import {
  BankCardDataType,
  DepositDataType,
  ToggleItemsType,
} from "@/app/core/Types";
import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import BankCard from "./BankCard";
import { getBankCard } from "@/lib/getbankCard/bankCard";
import { silverDeposit } from "@/lib/deposit/deposit";
import DepositConfirm from "./DepositConfirm";
import Container from "@/app/Components/Containers/Container/Container";

const items: ToggleItemsType[] = [
  { title: "درگاه پرداخت", value: "payment", id: 1 },
  { title: "واریز مستقیم", value: "directPayment", id: 2 },
];
export default function Deposit() {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState("");
  const [select, setSelect] = useState(items[0].value);
  const [selectedCard, setSelectedCard] = useState<number>(2);
  const [bankCardsData, setBankCardsData] = useState<BankCardDataType[]>([]);
  const [depositData, setDepositData] = useState<DepositDataType>(
    {} as DepositDataType,
  );
  useEffect(() => {
    const getData = async () => {
      const response = await getBankCard();
      setBankCardsData(response && response.length > 0 ? response : []);
    };
    getData();
  }, []);
  const handleClick = async () => {
    if (select === "payment") {
      const response = await silverDeposit(price);
    } else {
      setOpen(true);
    }
  };
  return (
    <>
      <Card
        style={{
          gap: 3.5,
          p: 0,
          border: "none",
        }}
      >
        <FilterToggleButton
          items={items}
          select={select}
          setSelect={setSelect}
          style={{
            fontSize: {
              xs: 12,
              sm: 18,
            },
          }}
        />
        <Stack gap={3.5}>
          {select === "payment" && (
            <Stack direction={"column"} gap={3}>
              <InputField
                placeholder={"ملبغ"}
                title={"تومان"}
                value={price}
                setValue={setPrice}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "primary.light",
                  color: "#535657",
                  borderRadius: 1.5,
                  px: 1,
                  width: "fit-content",
                  fontSize: {
                    xs: 12,
                    sm: 14,
                  },
                }}
              >
                انتخاب حداکثر مقدار واریز
              </Button>
            </Stack>
          )}
          {select === "directPayment" && (
            <BankCard
              bankCardsData={bankCardsData}
              selectedCard={selectedCard}
              setBankCardsData={setBankCardsData}
              setSelectedCard={setSelectedCard}
            />
          )}
        </Stack>
        <Typography variant="body2" fontSize={12} fontWeight={"bold"}>
          اطلاعات واریز
        </Typography>
        <Container
          style={{
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}

          >
            <Typography variant="body2" fontSize={12}>
              کارت مبدا:
            </Typography>
            <Typography variant="body2" fontSize={12}>
              {depositData.card_number}
            </Typography>
          </Stack>
         <Stack>
           <Typography variant="body2" fontSize={12}>
            کارت مقصد:
          </Typography>
         </Stack>
          <Stack
            direction={"row"}
                  justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body2" fontSize={10}>
              شماره شبا
            </Typography>
            <Typography variant="body2" fontSize={12}>
              {depositData.shaba}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
                  justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body2" fontSize={10}>
              به نام
            </Typography>
            <Typography variant="body2" fontSize={12}>
              {depositData.owner}
            </Typography>
          </Stack>
          <Typography variant="body2" fontSize={12}>
            به اپلیکیشن همراه‌بانک یا خودپرداز بانک بروید و مبلغ مورد نظرتان را
            واریز کنید.مبلغ واریزی مطابق با سیکل پایا به حساب شما در طلاسی
            افزوده می‌شود.
          </Typography>
        </Container>
        <Button
          variant="contained"
          color="primary"
          sx={{
            borderRadius: 2,
            fontSize: {
              xs: 14,
              sm: 16,
            },
            py: 1.4,
          }}
          onClick={handleClick}
        >
          {select === "payment" ? "واریز" : "نمایش اطلاعات مقصد"}
        </Button>
      </Card>
      <DepositConfirm
        open={open}
        setOpen={setOpen}
        setDepositData={setDepositData}
      />
    </>
  );
}
