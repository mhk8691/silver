"use client";
import Card from "@/app/Components/Containers/Container/Container";
import CustomTabs from "@/app/Components/Tabs/CustomTabs";
import Typography from "@mui/material/Typography";
import { ReactNode, useState } from "react";

import Trade from "./Trade";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import LimitOrderGuide from "./LimitOrderGuide";
const tabs = [{ title: "خرید " }, { title: "فروش" }];
const children: ReactNode[] = [
  <Trade key={1} type="BUY" getData={async ()=>{}} />,
  <Trade key={2} type="SELL" getData={async ()=>{}} />,
];
export default function Trading() {
  const theme = useTheme();
  const [openModal,setOpenModal] = useState(false)
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
    <Card
      style={{
        px: 0,
        py: {
          xs: 1.5,
          sm: 3,
        },
      }}
    >
      {isDesktop && (
       
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} px={3} mb={2}>
           <Typography variant="h2" fontSize={22}>
            خرید و فروش نقره
          </Typography>
           <Typography component={'div'} onClick={()=>setOpenModal(true)} variant="h2" fontSize={22} sx={{textDecoration:'underline',color:'#0091F8',cursor:'pointer'}}>
           راهنما
          </Typography>
         </Stack>

      )}
      <CustomTabs
        tabList={tabs}
        style={{
          fontSize: {
            xs: 12,
            sm: 22,
          },
        }}
      >
        {children}
      </CustomTabs>
    </Card>
    <LimitOrderGuide open={openModal} setOpen={setOpenModal} />
    </>
  );
}
