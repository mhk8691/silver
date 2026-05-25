"use client";

import priceFormater from "@/app/core/PriceFormater";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

import {  ProductDateType } from "@/app/core/Types";
import { Close } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CustomModal from "../CustomModal/CustomModal";
import { showSnackbar } from "../Snackbar/Snackbar";
import { isAxiosError } from "axios";
import { addToCart } from "@/lib/cart/cart";
import Counter from "@/app/silver-shop-basket/Counter";
import Link from "next/link";


export default function ProductCard({ item }: { item: ProductDateType }) {
    const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);
  const router = useRouter();
    const handleAddToCart = async (id:number) => {
   try{
     const response = await addToCart(id)
     showSnackbar(response.message,true)
   }catch(error:unknown){
    if (isAxiosError(error)){
      showSnackbar(error.response?.data.message)
    }
   }
    
  };

  return (
    <>
      <Card
        sx={{
          border: 1,
          borderColor: "background.paper",
          bgcolor: "background.default",
          py: 1.5,
          borderRadius: 2,
          boxShadow: "none",
        }}
      >
        <Stack px={1.5}>
           <Link href={'/gold-shop/test/'}>
              <CardMedia
                sx={{
                  height: {
                    xs: 150,
                    sm: 180,
                  },
                  width: '100%',
                }}
                image="/images/product.webp"
                title="green iguana"
              />
            </Link>
        </Stack>
        <CardContent
          sx={{
            px: {
              xs: 1,
              sm: 1.5,
            },
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={{
              xs: "flex-start",
              sm: "center",
            }}
          >
             <Link href={`/gold-shop/${item.id}`}>
              <Typography
                gutterBottom
                variant="h5"
                fontSize={{
                  xs: 14,
                  sm: 18,
                }}
                sx={{ px: 0.5 }}
              >
                {item.name}
              </Typography>
            </Link>
          </Stack>
          <Stack direction={"column"} gap={1} sx={{ mt: 3.5 }}>
            <Stack
              direction={{
                xs: "column",
                sm: "row",
                md: "column",
                lg: "row",
              }}
              alignItems={{
                xs: "flex-start",
                sm: "center",
                md: "flex-start",
                lg: "center",
              }}
              justifyContent={"space-between"}
            >
              
              <Typography
                variant="body2"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: "#535657" }}
              >
                
                گرم نقره:
              </Typography>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 14,
                  sm: 16,
                  lg: 14,
                  xl: 16,
                }}
                sx={{ alignSelf: "flex-end" }}
              >
                
               
                <Box
                  component={"span"}
                  fontSize={{
                    xs: 12,
                    sm: 14,
                  }}
                >
                  
                  {priceFormater(+item.weight)} گرم 
                </Box>
              </Typography>
            </Stack>
            <Stack
              direction={{
                xs: "column",
                sm: "row",
                md: "column",
                lg: "row",
              }}
              alignItems={{
                xs: "flex-start",
                sm: "center",
                md: "flex-start",
                lg: "center",
              }}
              justifyContent={"space-between"}
            >
              
              <Typography
                variant="body2"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: "#535657" }}
              >
                
                ارزش تومان:
              </Typography>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 14,
                  sm: 16,
                  lg: 14,
                  xl: 16,
                }}
                sx={{ alignSelf: "flex-end" }}
              >
                
                {priceFormater(+item.price)}{' '}
                <Box
                  component={"span"}
                  fontSize={{
                    xs: 12,
                    sm: 14,
                  }}
                >
                  
                  تومان
                </Box>
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
        {1 ? (
          <Stack px={1}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: 2,
                width: "100%",
                mt: 3,
                py: 1.5,
                "&:hover": {
                  bgcolor: "background.default",
                },
              }}
              onClick={() => {
                handleAddToCart(item.id);
                setOpen(true);
              }}
              disableRipple
              disabled
            >
              افزودن به سبد خرید
            </Button>
          </Stack>
        ) : (
          <Counter count={count} setCount={setCount} />
        )}
      </Card>
      <CustomModal open={open} setOpen={setOpen} modalStyle={{ p: 2 }}>
        <Stack direction={"row"} justifyContent={"flex-end"}>
          <IconButton onClick={() => setOpen(false)} disableRipple>
            <Close />
          </IconButton>
        </Stack>
        <Typography variant="h6" fontSize={22} sx={{ color: "#43AB79", mb: 4 }}>
          این محصول به سبد خرید شما افزوده شد.
        </Typography>
        <Typography variant="body1" fontSize={16}>
          {item?.name}
        </Typography>
        <Stack direction={"row"} gap={2} mt={5}>
          <Button
            onClick={() => {
              router.push("/silver-shop-basket");
              setOpen(false);
            }}
            variant="contained"
            color="primary"
            sx={{
              width: "50%",
              color: "#10100F",
              py: 1.3,
              borderRadius: 2,
              fontSize: 16,
              fontWeight: 600,
              "&:hover": {
                bgcolor: "primary.main",
              },
            }}
            disableRipple
          >
            سبد خرید
          </Button>
          <Button
            onClick={() => setOpen(false)}
            variant="outlined"
            color="inherit"
            sx={{
              width: "50%",
              py: 1.3,
              borderRadius: 2,
              fontSize: 16,
              fontWeight: 600,
              "&:hover": {
                bgcolor: "background.default",
              },
            }}
            disableRipple
          >
            ادامه خرید
          </Button>
        </Stack>
      </CustomModal>
    </>
  );
}
