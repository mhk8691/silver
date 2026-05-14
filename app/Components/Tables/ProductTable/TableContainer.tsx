"use client";
import React from "react";
import { TableSilverDataType } from "@/app/core/Types";
import { Button, Stack, TableBody, TableCell, TableRow, Typography, useMediaQuery, useTheme } from "@mui/material";
import LaptopTable from "./LaptopTable";
import CustomTable from "../CustomTable";
import LineChart from "../../LineChart/LineChart";
import Link from "next/link";

interface Props {
  data: TableSilverDataType[];
}
export default function TableContainer({ data }: Props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {!isDesktop ? (
        <CustomTable
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
                    {row.isOns ? 'دلار': 'تومان'}
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
                    {row.isOns ? 'دلار': 'تومان'}
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
                    {row.isOns ? 'دلار': 'تومان'}
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
                  <LineChart
                    color="#D12F2F"
                    width={row.typeSilver ? "90%" : "70%"}
                    height="40px"
                    data={[1, 2, 3]}
                    label={["فروردین", "اردیبهشت", "خرداد"]}
                    noLabel={true}
                    isGradiant={false}
                  />
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
        <LaptopTable items={data} />
      )}
    </>
  );
}
