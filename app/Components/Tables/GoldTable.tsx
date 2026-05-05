import { TableGoldDataType } from "@/app/core/Types";
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

export function createData({
  typeGold,
  currentRate,
  minPriceDay,
  maxPriceDay,
  dayChange,
  monthChange,
  weeklyChart,
}: TableGoldDataType) {
  return {
    typeGold,
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
  data: TableGoldDataType[];
}
export default function GoldTable({ heads, data }: Props) {
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
              {row.typeGold && (
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
                  {row.typeGold}
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
                    width={row.typeGold ? "90%" : "70%"}
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
      </Table>
    </TableContainer>
  );
}
