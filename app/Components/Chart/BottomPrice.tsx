import { Box, Divider, Stack, SxProps, Typography } from "@mui/material";
import priceFormater from "../../core/PriceFormater";

export default function BottomPrice({
  priceStyle,
  dividerStyle,
}: {
  priceStyle?: SxProps;
  dividerStyle?: SxProps;
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
            {priceFormater(493000)}
            <Box
              component={"span"}
              fontSize={{
                xs: 8,
                sm: 14,
              }}
            >
              تومان
            </Box>
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
            {priceFormater(391920)}
            <Box
              component={"span"}
              fontSize={{
                xs: 8,
                sm: 14,
              }}
            >
              تومان
            </Box>
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
            color="success"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            {new Intl.NumberFormat("fa-IR").format(15.43)}
            <Box
              component={"span"}
              fontSize={{
                xs: 8,
                sm: 14,
              }}
            >
              درصد
            </Box>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
