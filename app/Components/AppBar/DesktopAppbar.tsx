"use client";
import { Stack, SvgIcon, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Card from "../Containers/Container/Container";
import ModalNavigation from "./ModalNavigation";
import { AppbarItemsType } from "@/app/core/Types";

const AppbarItems: AppbarItemsType[] = [
  {
    name: "داشبورد",
    image: "/images/appbar/home-active.svg",
    link: "/dashboard",
  },
  {
    name: "خرید و فروش",
    image: "/images/appbar/trade-active.svg",
    link: "/dashboard/trades",
  },
  {
    name: "کیف پول",
    image: "/images/appbar/wallet-active.svg",
    link: "/dashboard/wallet",
  },

  {
    name: "واریز و برداشت",
    image: "/images/appbar/irtTransaction-active.svg",
    link: "/dashboard/irt-transaction",
  },
  {
    name: "تحویل فیزیکی",
    image: "/images/appbar/shop-active.svg",
    link: "/dashboard/silver-receive",
  },
  {
    name: "کارت های بانکی",
    image: "/images/appbar/bankCard-active.svg",
    link: "/dashboard/bank-card",
  },
  {
    name: "گزارش ها",
    image: "/images/appbar/reports-active.svg",
    link: "/dashboard/reports",
  },
  {
    name: "بیشتر",
    image: "/images/appbar/more.svg",
  },
];

export default function DesktopAppbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <Card
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          border: "none",
          pb: 0,
          bgcolor: "background.default",
          borderRadius: 1,
        }}
      >
        {AppbarItems.map((item, index) => (
          <Stack
            component={item.link ? Link : "div"}
            href={item.link}
            onClick={() => {
              !item.link ? setOpen(true) : setOpen(false);
            }}
            key={index}
            direction={"column"}
            gap={1}
            alignItems={"center"}
            sx={{ cursor: "pointer" }}
          >
            <Stack
              width={{
                xs: 28,
                md: 32,
              }}
              height={{
                xs: 28,
                md: 32,
              }}
            >
              <Image
                alt={item.name}
                width={100}
                height={100}
                src={item.image}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  scale: pathname === item.link ? 1.15 : 1,
                  transition: "all .3s ease",
                }}
              />
            </Stack>
            <Typography
              variant="body1"
              fontSize={{
                xs: 12,
                md: 16,
              }}
              sx={{
                color: pathname === item.link ? "text.primary" : "#535657",
                scale: pathname === item.link ? 1.1 : 1,
                transition: "all .3s ease",
              }}
            >
              {item.name}
            </Typography>
            {item.link && (
              <SvgIcon
                sx={{
                  mt: 0.5,
                  width: "48px",
                  height: 16,
                  scale: pathname === item.link ? 1 : 0,
                  opacity: pathname === item.link ? 1 : 0,
                  transition: "all .3s ease",
                }}
                color="primary"
              >
                <svg
                  width="48"
                  height="16"
                  viewBox="0 0 48 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48 16C44.3774 15.9998 13.5849 16.0001 0 16C14.4906 16 12.9323 0 24 0C36.2264 0 33.5094 15.9999 48 16Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </SvgIcon>
            )}
          </Stack>
        ))}
      </Card>
      <ModalNavigation open={open} setOpen={setOpen} />
    </>
  );
}
