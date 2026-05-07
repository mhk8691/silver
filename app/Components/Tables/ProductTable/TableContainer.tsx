"use client";
import React from "react";
import ProcutTable from "./ProductTable";
import { TableSilverDataType } from "@/app/core/Types";
import { useMediaQuery, useTheme } from "@mui/material";
import LaptopTable from "./LaptopTable";

interface Props {
  data: TableSilverDataType[];
}
export default function TableContainer({ data }: Props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {!isDesktop ? (
        <ProcutTable
          data={data}
          heads={[
            "نوع طلا",
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
        <LaptopTable items={data} />
      )}
    </>
  );
}
