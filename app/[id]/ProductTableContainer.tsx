"use client";
import React from "react";
import GoldTable from "../Components/Tables/GoldTable";
import { useMediaQuery, useTheme } from "@mui/material";
import LaptopTable from "../Components/Tables/LaptopTable";

export default function ProductTableContainer() {
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      {isUpMd ? (
        <GoldTable
          data={[
            {
              typeGold: "نقره عیار ۹۹۹ (گرم)",
              currentRate: 17596000,
              minPriceDay: 17580000,
              maxPriceDay: 17831000,
              dayChange: -0.694,
              monthChange: 4.246,
              weeklyChart: 1,
              isOns:false
            },
            {
              typeGold: "انس جهانی نقره",
              currentRate: 17596000,
              minPriceDay: 17580000,
              maxPriceDay: 17831000,
              dayChange: -0.694,
              monthChange: 4.246,
              weeklyChart: 1,
              url: "/",
              isOns:true
            },
          ]}
          heads={[
            "نوع نقره",
            "نرخ فعلی",
            "پایین‌ترین قیمت روز",
            "بالاترین قیمت روز",
            "تغییر ۱ روزه",
            "تغییر ۱ ماهه",
            "نمودار هفتگی",
            "عملیات",
          ]}
        />
      ) : (
        <LaptopTable
          isDetail={false}
          items={[
            {
              typeGold: "انس جهانی نقره",
              currentRate: 74.2,
              minPriceDay: 73.03,
              maxPriceDay: 74.51,
              dayChange: -0.694,
              monthChange: 4.246,
              weeklyChart: 1,
              isOns:true
            },
            {
              typeGold: "نقره (گرم)",
              currentRate: 439800,
              minPriceDay: 432020,
              maxPriceDay: 452400,
              dayChange: -0.694,
              monthChange: 4.246,
              weeklyChart: 1,
              isOns:false
            },
          ]}
        />
      )}
    </>
  );
}
