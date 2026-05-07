"use client";
import React from "react";
import ProcutTable from "../Components/Tables/ProductTable/ProductTable";
import { useMediaQuery, useTheme } from "@mui/material";
import LaptopTable from "../Components/Tables/ProductTable/LaptopTable";

export default function ProductTableContainer() {
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      {isUpMd ? (
        <ProcutTable
          data={[
            {
              typeSilver: "نقره عیار ۹۹۹ (گرم)",
              currentRate: 17596000,
              minPriceDay: 17580000,
              maxPriceDay: 17831000,
              dayChange: -0.694,
              monthChange: 4.246,
              weeklyChart: 1,
              isOns:false
            },
            {
              typeSilver: "انس جهانی نقره",
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
              typeSilver: "انس جهانی نقره",
              currentRate: 74.2,
              minPriceDay: 73.03,
              maxPriceDay: 74.51,
              dayChange: -0.694,
              monthChange: 4.246,
              weeklyChart: 1,
              isOns:true
            },
            {
              typeSilver: "نقره (گرم)",
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
