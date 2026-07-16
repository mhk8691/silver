"use client";
import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AppbarItemsType } from "../core/Types";

const AppbarItems: AppbarItemsType[] = [
  {
    name: "خرید و فروش",
    image: "/images/appbar/trade-active.svg",
    link: "/trades",
  },
  {
    name: "واریز و برداشت",
    image: "/images/appbar/irtTransaction-active.svg",
    link: "/irt-transaction",
  },
  {
    name: "سفارش با قیمت",
    image: "/images/appbar/limitOrder-active.svg",
    link: "/limit-order",
  },


  {
    name: "تحویل فیزیکی",
    image: "/images/appbar/shop-active.svg",
    link: "/silver-receive",
  },
];
export default function MobileAppbar() {
  const router = useRouter();
  return (
    <Grid spacing={2} container>
      {AppbarItems.map((item) => (
        <Grid
          size={4}
          bgcolor={"background.paper"}
          border={1}
          borderColor={"background.paper"}
          borderRadius={2}
          key={item.name}
          p={1.5}
          component={"div"}
          onClick={() => {
            router.push(`/dashboard${item.link}`);
          }}
          sx={{ cursor: "pointer" }}
        >
          <Stack direction={"column"} alignItems={"center"} gap={1}>
            <Image src={item.image} alt="" width={30} height={30} />
            <Typography
              variant="body1"
              fontSize={12}
              fontWeight={500}
              sx={{ whiteSpace: "nowrap" }}
            >
              {item.name}
            </Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}
