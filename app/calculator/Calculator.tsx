"use client";
import {
  Box,
  Grid,
  Stack,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
const inputStyle: SxProps = {
  width: "100%",

  

  "& .MuiInputLabel-root.MuiInputLabel-shrink": {
    color: "text.title",
    fontSize: "18",
    fontWeight: "bold",
  },

  "& .MuiOutlinedInput-root": {
    "& input": {
      textAlign: "center",
      py: 1.8,
    },
    borderRadius: 2.5,

   
  },
};
export default function Calculator() {
  const [goldRate, setGoldRate] = useState(439800);
  const [weight, setWeight] = useState(0);
  const [wagePercent, setWagePercent] = useState(18);
  const [profitPercent, setProfitPercent] = useState(7);

  const calculated = useMemo(() => {
    const gPrice = weight * goldRate;

    const w = gPrice * (wagePercent / 100);

    const p = (gPrice + w) * (profitPercent / 100);

    const t = (p + w) * 0.09;

    const profitOne = gPrice * 0.01;

    const total = gPrice + w + p + t;

    return {
      goldPrice: Math.round(gPrice),
      wage: Math.round(w),
      profit: Math.round(p),
      tax: Math.round(t),
      profitOne: Math.round(profitOne),
      total: Math.round(total),
    };
  }, [goldRate, weight, wagePercent, profitPercent]);
  return (
    <>
      <Grid container size={12} spacing={3}>
        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <TextField
            label="نرخ نقره"
            value={goldRate}
            onChange={(e) => setGoldRate(Number(e.target.value))}
            sx={inputStyle}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <TextField
            label="وزن نقره"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            sx={inputStyle}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <TextField
            label="اجرت ساخت"
            value={wagePercent}
            onChange={(e) => setWagePercent(Number(e.target.value))}
            sx={inputStyle}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <TextField
            label="سود فروش"
            value={profitPercent}
            onChange={(e) => setProfitPercent(Number(e.target.value))}
            sx={inputStyle}
          />
        </Grid>
      </Grid>
      <Grid
        size={{
          xs: 12,
          sm: 6,
        }}
        spacing={2}
        container
        mt={2}
      >
        <Stack
          py={2.5}
          width={"100%"}
          bgcolor={"primary.light"}
          borderRadius={4}
        >
          <Typography
            variant="body1"
            fontSize={{
              xs: 12,
              sm: 14,
            }}
            width={"100%"}
            textAlign={"center"}
          >
            خرید نقره از بازار
          </Typography>
        </Stack>
        <Stack
          p={3}
          width={"100%"}
          bgcolor={"primary.dark"}
          borderRadius={4}
          direction={"column"}
          gap={2}
          height={300}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"column"} gap={0.5}>
              <Typography
                variant="body1"
                fontSize={14}
                fontWeight={500}
                sx={{ color: "#10100F" }}
              >
                قیمت نقره محصول:
              </Typography>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: "#393936" }}
                fontWeight={500}
              >
                وزن ✕ نرخ روز نقره
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              fontSize={{
                xs: 12,
                sm: 14,
              }}
              fontWeight={500}
              sx={{
                color: "#10100F",
              }}
            >
              {calculated.goldPrice.toLocaleString()}
              <Box
                component={"span"}
                color={"#292926"}
                ml={0.5}
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
              >
                تومان
              </Box>
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"column"} gap={0.5}>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  sm: 14,
                }}
                fontWeight={500}
                sx={{ color: "#10100F" }}
              >
                اجرت ساخت:
              </Typography>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: "#393936" }}
                fontWeight={500}
              >
                قیمت نقره ✕ 18 %
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              fontSize={{
                xs: 12,
                sm: 14,
              }}
              fontWeight={500}
              sx={{
                color: "#10100F",
              }}
            >
              {calculated.wage.toLocaleString()}
              <Box
                component={"span"}
                color={"#292926"}
                ml={0.5}
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
              >
                تومان
              </Box>
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"column"} gap={0.5}>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  sm: 14,
                }}
                fontWeight={500}
                sx={{ color: "#10100F" }}
              >
                سود فروش نقره:
              </Typography>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: "#393936" }}
                fontWeight={500}
              >
                (قیمت نقره + اجرت ساخت) ✕ 7 %
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              fontSize={{
                xs: 12,
                sm: 14,
              }}
              fontWeight={500}
              sx={{
                color: "#10100F",
              }}
            >
              {calculated.profit.toLocaleString()}
              <Box
                component={"span"}
                color={"#292926"}
                ml={0.5}
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
              >
                تومان
              </Box>
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"column"} gap={0.5}>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  sm: 14,
                }}
                fontWeight={500}
                sx={{ color: "#10100F" }}
              >
                مالیات:
              </Typography>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: "#393936" }}
                fontWeight={500}
              >
                (سود فروش نقره + اجرت ساخت) ✕ 9 %
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              fontSize={{
                xs: 12,
                sm: 14,
              }}
              fontWeight={500}
              sx={{
                color: "#10100F",
              }}
            >
              {calculated.tax.toLocaleString()}
              <Box
                component={"span"}
                color={"#292926"}
                ml={0.5}
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
              >
                تومان
              </Box>
            </Typography>
          </Stack>
        </Stack>
        <Stack
          py={2.5}
          width={"100%"}
          bgcolor={"primary.dark"}
          borderRadius={4}
        >
          <Typography
            variant="body1"
            fontSize={14}
            width={"100%"}
            textAlign={"center"}
            color="#10100F"
            fontWeight={600}
          >
            مجموع: {calculated.total.toLocaleString()} تومان
          </Typography>
        </Stack>
      </Grid>
      <Grid
        size={{
          xs: 12,
          sm: 6,
        }}
        spacing={2}
        container
        mt={2}
      >
        <Stack
          py={2.5}
          width={"100%"}
          bgcolor={"primary.light"}
          borderRadius={4}
        >
          <Typography
            variant="body1"
            fontSize={{
              xs: 12,
              sm: 14,
            }}
            width={"100%"}
            textAlign={"center"}
          >
            خرید نقره از دارینه
          </Typography>
        </Stack>
        <Stack
          p={3}
          width={"100%"}
          bgcolor={"primary.dark"}
          borderRadius={4}
          direction={"column"}
          gap={2}
          height={300}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"column"} gap={0.5}>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  sm: 14,
                }}
                fontWeight={500}
                sx={{ color: "#10100F" }}
              >
                قیمت نقره محصول:
              </Typography>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: "#393936" }}
                fontWeight={500}
              >
                وزن ✕ نرخ روز نقره
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              fontSize={{
                xs: 12,
                sm: 14,
              }}
              fontWeight={500}
              sx={{
                color: "#10100F",
              }}
            >
              {calculated.goldPrice.toLocaleString()}
              <Box
                component={"span"}
                color={"#292926"}
                ml={0.5}
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
              >
                تومان
              </Box>
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"column"} gap={0.5}>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  sm: 14,
                }}
                fontWeight={500}
                sx={{ color: "#10100F" }}
              >
                سود فروش نقره:
              </Typography>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: "#393936" }}
                fontWeight={500}
              >
                قیمت نقره ✕ ۱.۰۰ %
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              fontSize={{
                xs: 12,
                sm: 14,
              }}
              fontWeight={500}
              sx={{
                color: "#10100F",
              }}
            >
              {calculated.profitOne.toLocaleString()}
              <Box
                component={"span"}
                color={"#292926"}
                ml={0.5}
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
              >
                تومان
              </Box>
            </Typography>
          </Stack>
        </Stack>
        <Stack
          py={2.5}
          width={"100%"}
          bgcolor={"primary.dark"}
          borderRadius={4}
        >
          <Typography
            variant="body1"
            fontSize={14}
            width={"100%"}
            textAlign={"center"}
            color="#10100F"
            fontWeight={600}
          >
            مجموع:{" "}
            {calculated.profitOne + calculated.goldPrice > 0
              ? (calculated.profitOne + calculated.goldPrice).toLocaleString()
              : "۰"}{" "}
            تومان
          </Typography>
        </Stack>
      </Grid>
    </>
  );
}
