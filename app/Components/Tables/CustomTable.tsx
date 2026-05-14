import { TableSilverDataType } from "@/app/core/Types";
import { Button, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import LineChart from "../LineChart/LineChart";
import { ReactNode } from "react";

export function createData({
  typeSilver,
  currentRate,
  minPriceDay,
  maxPriceDay,
  dayChange,
  monthChange,
  weeklyChart,
}: TableSilverDataType) {
  return {
    typeSilver,
    currentRate,
    minPriceDay,
    maxPriceDay,
    dayChange,
    monthChange,
    weeklyChart,
  };
}

interface Props {
  heads: string[];
  children: ReactNode;
}
export default function CustomTable({ heads, children }: Props) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        background: "rgb(255, 255, 255,1) !important",
        border: "1px solid #DBDEDF",
        borderRadius: 3,
        boxShadow: "none",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ bgcolor: "background.secondary" }}>
          <TableRow>
            {heads.map((head, index) => (
              <TableCell
                align="center"
                key={index}
                sx={{
                  color: "#717475",
                  fontSize: {
                    xs: 14,
                    lg: "16px",
                  },
                  px: 2,
                  py: 2.5,
                  whiteSpace: "nowrap",
                }}
              >
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        {children}
      </Table>
    </TableContainer>
  );
}
