import { Box, Divider, Stack, SxProps, Typography } from "@mui/material";
import priceFormater from "../../core/PriceFormater";
import { ChartSilverDataType } from "@/app/core/Types";

export default function BottomPrice({
  priceStyle,
  dividerStyle,
  chartData,
  select
}: {
  priceStyle?: SxProps;
  dividerStyle?: SxProps;
  chartData:ChartSilverDataType
  select:string
}) {
  return (
    <>
      <Divider sx={dividerStyle} />

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={1.5}
        mb={1}
        sx={priceStyle}
      >
        <Stack direction={"column"} alignItems={"center"} gap={0.5}>
          <Typography
            variant="body2"
            fontSize={{
              xs: 10,
              sm: 14,
            }}
            sx={{ color: "#535657" }}
          >
            بالاترین قیمت
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.title" }}
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            {priceFormater(chartData.stats.highest_price)} تومان
        
          </Typography>
        </Stack>
        <Stack direction={"column"} alignItems={"center"} gap={0.5}>
          <Typography
            variant="body2"
            fontSize={{
              xs: 10,
              sm: 14,
            }}
            sx={{ color: "#535657" }}
          >
            پایین‌ترین قیمت
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.title" }}
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            {priceFormater(chartData.stats.lowest_price)} تومان
       
          </Typography>
        </Stack>
        <Stack direction={"column"} alignItems={"center"} gap={0.5}>
          <Typography
            variant="body2"
            fontSize={{
              xs: 10,
              sm: 14,
            }}
            sx={{ color: "#535657" }}
          >
            تغییرات قیمت
          </Typography>
          <Typography
            variant="body1"
            color={chartData.stats.change_percent >= 0 ? 'success' : 'error'}
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            {new Intl.NumberFormat("fa-IR").format(select === '24TH' ? chartData.stats.daily_change_percent :select === 'WEEK'?chartData.stats.weekly_change_percent:chartData.stats.monthly_change_percent)} درصد
         
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
