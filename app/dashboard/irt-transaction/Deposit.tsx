"use client";
import Card from "@/app/Components/Containers/Container/Container";
import FilterToggleButton from "@/app/Components/FilterToggleButton/FilterToggleButton";
import InputField from "@/app/Components/InputField/InputField";
import {
  BankCardDataType,
  DepositDataType,
  ToggleItemsType,
} from "@/app/core/Types";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import BankCard from "./BankCard";
import { getBankCard } from "@/lib/getbankCard/bankCard";
import { silverDeposit, uploadreceipt } from "@/lib/deposit/deposit";
import DepositConfirm from "./DepositConfirm";
import Container from "@/app/Components/Containers/Container/Container";
import { isAxiosError } from "axios";
import { showSnackbar } from "@/app/Components/Snackbar/Snackbar";
import UploadIcon from '@mui/icons-material/Upload';
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
  const [receipt,setreceipt] = useState<File | null>(null)
  const [depositData, setDepositData] = useState<DepositDataType | null>(
    null
  );
  useEffect(() => {
    const getData = async () => {
      const response = await getBankCard();
      setBankCardsData(response && response.length > 0 ? response : []);
    };
    getData();
  }, []);

  const handleDirectPayment =  () => {
    setOpen(true)
  };
  const handleUploadReceipt = async()=>{
    if (!receipt) return null
    const formData = new FormData()
      formData.append('receipt',receipt)
    try{
      const response =await uploadreceipt(formData)
        showSnackbar(response?.message)
    }catch(error:unknown){
      if (isAxiosError(error)){
        showSnackbar(error.response?.data.message)
      }
    }
  }
  const handleClick = ()=>{
    if (depositData){
      handleDirectPayment()
    }else{
      handleUploadReceipt()
    }
  }
  const handlePayment = async ()=>{
  const response = await silverDeposit(price);
  }
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
      {
      !depositData && select != 'payment'&&<>
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
              {depositData?.card_number}
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
              {depositData?.shaba}
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
              {depositData?.owner}
            </Typography>
          </Stack>
<Stack component={'label'} htmlFor="upload-file" width={'100%'} direction={'row'} justifyContent={'center'} mt={3}>
  <Button 
    variant="outlined" 
    color="secondary" 
    startIcon={<UploadIcon/>}
    component="span" 
    sx={{
      width:'100%',
      py:1.5,borderRadius:2
    }}
  >
    بارگذاری رسید
  </Button>
</Stack>

          <Box 
          component={'input'}
            type="file" 
  id="upload-file" 
  style={{ display: 'none' }} 
    accept="image/*"
  onChange={(e) => {
    const image =e?.target?.files[0]
    setreceipt(image)
     }}
          />
        </Container>
        </>
      }
        {
      select === 'payment'?
       <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: 2,
          fontSize: {
            xs: 14,
            sm: 16,
          },
          py: 1.5,
        }}
        onClick={handlePayment}
      >
        واریز
      </Button>
     : <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: 2,
          fontSize: {
            xs: 14,
            sm: 16,
          },
          py: 1.5,
        }}
        onClick={handleClick}
      >
        {
          depositData ? 'نمایش اطلاعات مقصد' : 'تایید'
        }
      </Button>}
      </Card>
      <DepositConfirm
        open={open}
        setOpen={setOpen}
        setDepositData={setDepositData}
      />
    </>
  );
}
