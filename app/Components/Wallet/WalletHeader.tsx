"use client";
import priceFormater from "@/app/core/PriceFormater";
import {
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import CircleAnimation from "../CircleAnimation/CircleAnimation";
import MobileWalletHeader from "./MobileWalletHeader";
import Container from "../Containers/Container/Container";
import { useAssets } from "@/app/dashboard/AssetsProvider";

export default function WalletHeader() {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const {assets} = useAssets()
  useEffect(() => {
    const stored = localStorage.getItem("eyeState");
    if (stored !== null) {
      setVisible(stored === "true");
    }
  }, []);
  return (
    <>
      {isDesktop ? (
        <Grid
          container
          spacing={{
            xs: 1,
            md: 3,
          }}
          mb={{
            xs: 0,
            sm: 2,
            lg: 0,
          }}
        >
          <Grid size={4}>
            <Container
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 0.5,
                py: "27px",
              }}
            >
              <Typography
                variant="body1"
                fontSize={14}
                sx={{ color: "#535657" }}
              >
                موجودی نقره
              </Typography>
              <Stack direction={"row"} gap={0.5} alignItems={"center"}>
                <Typography
                  variant="body1"
                  fontSize={20}
                  fontWeight={500}
                  sx={{ color: "text.title" }}
                >
                 {visible ? assets?.silver_balance_gr || 0 : '***'}
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={18}
                  fontWeight={500}
                  sx={{ color: "text.title" }}
                >
                  گرم
                </Typography>
              </Stack>
            </Container>
          </Grid>
          <Grid size={4}>
            <Container
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 0.5,
                py: "27px",
              }}
            >
              <Typography
                variant="body1"
                fontSize={14}
                sx={{ color: "#535657" }}
              >
                موجودی تومان
              </Typography>
              <Stack
                direction={"row"}
                gap={0.5}
                alignItems={"center"}
                fontWeight={500}
              >
                <Typography
                  variant="body1"
                  fontSize={20}
                  sx={{ color: "text.title" }}
                >
                  {visible ? priceFormater(assets?.toman_balance) || 0 : '***'}
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={18}
                  fontWeight={500}
                  sx={{ color: "text.title" }}
                >
                  تومان
                </Typography>
              </Stack>
            </Container>
          </Grid>
          <Grid size={4}>
            <Container
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                py: "27px",
              }}
            >
              <Stack
                display={{
                  xs: "none",
                  md: "flex",
                }}
              >
                <CircleAnimation type="red" />
              </Stack>
              <Stack direction={"column"} gap={0.5} justifyContent={"center"}>
                <Typography
                  variant="body1"
                  fontSize={14}
                  sx={{ color: "#535657" }}
                >
                  قیمت فعلی نقره ۹۹۹
                </Typography>
                <Stack direction={"row"} gap={0.5} alignItems={"center"}>
                  <Typography
                    variant="body1"
                    fontSize={20}
                    sx={{ color: "text.title" }}
                    fontWeight={500}
                  >
                    {priceFormater(assets?.current_silver_price)}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize={18}
                    sx={{ color: "text.title" }}
                    fontWeight={500}
                  >
                    تومان
                  </Typography>
                </Stack>
              </Stack>
            </Container>
          </Grid>
        </Grid>
      ) : (
        <MobileWalletHeader isDesktop={isDesktop} visible={visible} assets={assets} />
      )}
    </>
  );
}
