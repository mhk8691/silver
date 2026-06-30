'use client'
import Chart from "@/app/Components/Chart/Chart";
import DetailTable from "@/app/Components/Tables/DetailTable/DetailTable";
import { Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Trading from "./Trading";
import { Metadata } from "next";
import BackLink from "../BackLink";
import WalletHeader from "@/app/Components/Wallet/WalletHeader";
import { statuses } from "../wallet/page";
import { useState } from "react";
import LimitOrderGuide from "./LimitOrderGuide";
// export const metadata: Metadata = {
//   title: "سفارش با قیمت | نقرینه",
//   description: "",
// };
export default function page() {
  const [openModal,setOpenModal] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <>
    <Grid
      container
      spacing={{
        xs: 2,
        sm: 1,
        lg: 3,
      }}
    >
{
  isMobile &&   <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} px={3} mb={2} width={'100%'}>
      <BackLink title="سفارش با قیمت" />
         
           <Typography component={'div'} onClick={()=>setOpenModal(true)} variant="h2" fontSize={18} sx={{mb:.5,textDecoration:'underline',color:'#0091F8',cursor:'pointer'}}>
           راهنما
          </Typography>
         </Stack>
}
 
      <Grid
        size={{
          xs: 12,
          md: 4.8,
        }}
      >
        <Trading />
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 7.2,
        }}
      >
        <Chart
          positionPrice="bottom"
          priceStyle={{
            mt: {
              xs: 2,
              md: 5,
            },
            mb: {
              xs: 0,
              md: 2.5,
            },
          }}
          cardStyle={{
            pt: {
              xs: 2,
              md: 5.5,
            },
          }}
          dividerStyle={{
            mt: {
              xs: 0,
              md: 1,
            },
          }}
        />
      </Grid>
      <Grid size={12}>
        {/* <DetailTable
          title="لیست معاملات اخیر"
          toggleItems={[]}
          type="chip"
          emptyMessage="سفارشی برای شما به ثبت نرسیده است"
          listLength={0}
          tableBody={<></>}
          tableHead={[]}
          statuses={statuses}
        /> */}
      </Grid>
    </Grid>
    <LimitOrderGuide open={openModal} setOpen={setOpenModal} />
    </>
  );
}
