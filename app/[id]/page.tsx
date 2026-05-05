import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ChartGold from "../Components/ChartGold/ChartGold";
import ApplicationDownload from "../Components/Tables/ApplicationDownload";
import HowBuyGold from "../Components/Tables/HowBuyGold";
import TradeCard from "../Components/Tables/TradeCard";
import { TableGoldDataType } from "../core/Types";
import Trading from "../dashboard/trades/Trading/Trading";
import ProductTableContainer from "./ProductTableContainer";

export const goldData: {
  title: string;
  order: number;
  data: TableGoldDataType[];
}[] = [
  {
    title: "طلا",
    order: 1,
    data: [
      {
        typeGold: "طلای ۱۸ عیار(گرم)",
        currentRate: 17785000,
        minPriceDay: 17687000,
        maxPriceDay: 18000000,
        dayChange: 0.875,
        monthChange: 3.587,
        weeklyChart: 2,
      },
      {
        typeGold: "طلای ۲۱ عیار(گرم)",
        currentRate: 20703666,
        minPriceDay: 20634833,
        maxPriceDay: 20927666,
        dayChange: 0.987,
        monthChange: 3.783,
        weeklyChart: 2,
      },
      {
        typeGold: " طلای ۲۴ عیار(گرم)",
        currentRate: 23543026,
        minPriceDay: 23464753,
        maxPriceDay: 23797746,
        dayChange: 0.987,
        monthChange: 3.783,
        weeklyChart: 2,
      },
      {
        typeGold: "۱ مثقال طلا ",
        currentRate: 76872122,
        minPriceDay: 76616546,
        maxPriceDay: 77703828,
        dayChange: 0.987,
        monthChange: 3.783,
        weeklyChart: 2,
      },
      {
        typeGold: "انس جهانی طلا ",
        currentRate: 4785,
        minPriceDay: 4714,
        maxPriceDay: 4787,
        dayChange: 1.506,
        monthChange: 9.342,
        weeklyChart: 2,
      },
      {
        typeGold: "آبشده نقدی",
        currentRate: 76872122,
        minPriceDay: 76616546,
        maxPriceDay: 77703828,
        dayChange: 0.987,
        monthChange: 3.783,
        weeklyChart: 2,
      },
      {
        typeGold: " طلای دست دوم",
        currentRate: 17509445,
        minPriceDay: 17451232,
        maxPriceDay: 17698886,
        dayChange: 0.987,
        monthChange: 3.783,
        weeklyChart: 2,
      },
    ],
  },
  {
    title: "سکه",
    order: 2,
    data: [
      {
        typeGold: "سکه امامی",
        currentRate: 186510000,
        minPriceDay: 186480000,
        maxPriceDay: 186510000,
        dayChange: 0.847,
        monthChange: 7.9,
        weeklyChart: 2,
      },
      {
        typeGold: "سکه تمام بهار آزادی",
        currentRate: 179020000,
        minPriceDay: 178980000,
        maxPriceDay: 179020000,
        dayChange: 0.016,
        monthChange: 9.315,
        weeklyChart: 2,
      },
      {
        typeGold: "نیم سکه",
        currentRate: 103900000,
        minPriceDay: 98900000,
        maxPriceDay: 103900000,
        dayChange: 5.055,
        monthChange: 0.45,
        weeklyChart: 2,
      },
      {
        typeGold: "ربع سکه",
        currentRate: 59800000,
        minPriceDay: 56300000,
        maxPriceDay: 59800000,
        dayChange: 6.216,
        monthChange: 3.981,
        weeklyChart: 2,
      },
      {
        typeGold: "سکه گرمی",
        currentRate: 29200000,
        minPriceDay: 27200000,
        maxPriceDay: 29200000,
        dayChange: 7.352,
        monthChange: 0,
        weeklyChart: 2,
      },
      {
        typeGold: "سکه پارسیان ۱ گرمی",
        currentRate: 21295200,
        minPriceDay: 21224400,
        maxPriceDay: 21525600,
        dayChange: 0.987,
        monthChange: 3.783,
        weeklyChart: 2,
      },
    ],
  },
];

interface Props {
  params: { productId: string };
}

export default function page({ params }: Props) {
  const newData = [goldData[0].data];
  newData.push(goldData[1].data);
  return (
    <Container
      maxWidth={"xl"}
      sx={{
        px: {
          xs: "16px !important",
          md: "24px !important",
          lg: "40px !important",
        },
        mt: 5,
      }}
    >
      <Grid container spacing={7}>
        <Grid size={12} container spacing={3}>
          <Grid size={12} container spacing={3}>
            <Grid
              size={{
                xs: 12,
                md: 7,
                lg: 7.5,
              }}
            >
              <Stack
                direction={"row"}
                gap={{
                  xs: 1,
                  md: 3.5,
                }}
                alignItems={"center"}
              >
                <Stack
                  width={{
                    xs: "40px",
                    md: "100px",
                  }}
                  height={{
                    xs: "28px",
                    md: "70px",
                  }}
                >
                  <Image
                    alt=""
                    src={"/images/silver.webp"}
                    width={80}
                    height={80}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Stack>
                <Typography
                  variant="h6"
                  fontSize={{
                    xs: 16,
                    md: 38,
                  }}
                  fontWeight={600}
                  sx={{ color: "text.title" }}
                >
                  قیمت نقره
                </Typography>
              </Stack>
            </Grid>
            <Grid
              size={{
                xs: 12,
                md: 5,
                lg: 4.5,
              }}
            >
              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <TradeCard />
              </Stack>
            </Grid>
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 7,
              lg: 7.5,
            }}
          >
            <ChartGold
              positionPrice="top"
              cardStyle={{ pt: 3.5, pb: 2.5 }}
              chartHeight="240px"
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 5,
              lg: 4.5,
            }}
          >
            <Trading />
          </Grid>
        </Grid>
        <Grid size={12}>
          <Typography
            variant="h6"
            fontWeight={700}
            fontSize={{
              xs: 14,
              md: 22,
            }}
            sx={{ color: "text.title" }}
          >
            قیمت نقره امروز
          </Typography>
          <Typography
            variant="body2"
            fontSize={{
              xs: 10,
              md: 14,
            }}
            sx={{
              color: "#535657",
              mb: 1.5,
              mt: {
                xs: 1,
                md: 2,
              },
            }}
          >
            بازه‌ی تغییرات قیمت ۲۴ ساعت تعیین شده است
          </Typography>
          <ProductTableContainer />
        </Grid>
        <Grid size={12} container spacing={3}>
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <ApplicationDownload />
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <HowBuyGold />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
