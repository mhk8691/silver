"use client";
import React from "react";
import {
  Button,
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LaptopTable from "../Components/Tables/ProductTable/LaptopTable";
import LineChart from "../Components/LineChart/LineChart";
import Link from "next/link";
import CustomTable from "../Components/Tables/CustomTable";

export default function ProductTableContainer() {
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const data = [
    {
      typeSilver: "نقره عیار (گرم)",
      currentRate: 17596000,
      minPriceDay: 17580000,
      maxPriceDay: 17831000,
      dayChange: -0.694,
      monthChange: 4.246,
      weeklyChart: 1,
      isOns: false,
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
      isOns: true,
    },
  ];
  return (
    <>
      {isUpMd ? (
        <CustomTable
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
        >
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.currentRate}
                sx={{
                  "&:last-child td": {
                    border: 0,
                  },
                  "&:last-child th": { border: 0 },
                  "&:hover": {
                    bgcolor: "background.secondary",
                  },
                }}
              >
                {row.typeSilver && (
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{
                      fontSize: {
                        xs: 14,
                        lg: "16px",
                      },
                      py: 2,
                      px: 2.5,
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.typeSilver}
                  </TableCell>
                )}
                <TableCell
                  align="center"
                  sx={{
                    py: 2,
                    px: 2.5,
                  }}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    gap={0.5}
                    justifyContent={"center"}
                  >
                    <Typography variant="body1" fontWeight={"bold"}>
                      {row.currentRate.toLocaleString()}
                    </Typography>
                    <Typography variant="body2" fontSize={12}>
                      {row.isOns ? "دلار" : "تومان"}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    py: 2,
                    px: 2.5,
                  }}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    gap={0.5}
                    justifyContent={"center"}
                  >
                    <Typography variant="body1" fontWeight={"bold"}>
                      {row.minPriceDay.toLocaleString()}
                    </Typography>
                    <Typography variant="body2" fontSize={12}>
                      {row.isOns ? "دلار" : "تومان"}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    py: 2,
                    px: 2.5,
                  }}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    gap={0.5}
                    justifyContent={"center"}
                  >
                    <Typography variant="body1" fontWeight={"bold"}>
                      {row.maxPriceDay.toLocaleString()}
                    </Typography>
                    <Typography variant="body2" fontSize={12}>
                      {row.isOns ? "دلار" : "تومان"}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: {
                      xs: 14,
                      lg: "16px",
                    },
                    py: 2,
                    px: 2.5,
                    color: row.dayChange >= 0 ? "success.main" : "error.main",
                    direction: "rtl",
                  }}
                >
                  {row.dayChange}%
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: {
                      xs: 14,
                      lg: "16px",
                    },
                    py: 2,
                    px: 2.5,
                    color: row.monthChange >= 0 ? "success.main" : "error.main",
                    direction: "rtl",
                  }}
                >
                  {row.monthChange}%
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: {
                      xs: 14,
                      lg: "16px",
                    },
                    py: 2,
                    px: 2.5,
                  }}
                >
                  <Stack direction={"row"} justifyContent={"center"}>
                    {/* <LineChart
                      color="#D12F2F"
                      width={row.typeSilver ? "90%" : "70%"}
                      height="40px"
                      data={[1, 2, 3]}
                      label={["فروردین", "اردیبهشت", "خرداد"]}
                      noLabel={true}
                      isGradiant={false}
                    /> */}
                  </Stack>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: {
                      xs: 14,
                      lg: "16px",
                    },
                    py: 2,
                    px: 2.5,
                  }}
                >
                  {row.url && (
                    <Link href={row.url}>
                      <Button
                        variant="outlined"
                        color="inherit"
                        sx={{ borderRadius: 2, p: 0.8, whiteSpace: "nowrap" }}
                      >
                        مشاهده جزئیات
                      </Button>
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </CustomTable>
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
              isOns: true,
            },
            {
              typeSilver: "نقره (گرم)",
              currentRate: 439800,
              minPriceDay: 432020,
              maxPriceDay: 452400,
              dayChange: -0.694,
              monthChange: 4.246,
              weeklyChart: 1,
              isOns: false,
            },
          ]}
        />
      )}
    </>
  );
}
