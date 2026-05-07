import priceFormater from "@/app/core/PriceFormater";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import CircleAnimation from "../../CircleAnimation/CircleAnimation";
import Container from "../../Containers/Container/Container";

export default function TradeCard() {
  return (
    <Container
      style={{
        py: 1.5,
        px: 3,
        border: 1,
        borderColor: "#C5DDF3",
        bgcolor: "#F0F6FC",
        width: '100%',
        height: "100%",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
      >
        <Stack direction={"row"} gap={1.5} alignItems={"center"}>
          <Stack>
            <CircleAnimation type="red" />
          </Stack>
          <Typography
            variant="body2"
            sx={{ color: "#535657", mt: 0 }}
            fontSize={14}
            fontWeight={'bold'}
          >
            قیمت نقره (گرم)
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="body2" sx={{ color: "#717475" }} fontSize={10}>
            ۱۶:۳۷:۲۲ - ۲۵ فروردین ۱۴۰۵
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"flex-end"}
        justifyContent={"space-between"}
        mt={1.5}
      >
        <Typography
          variant="body2"
          sx={{ color: "text.title", mt: 1.5 }}
          fontSize={20}
          fontWeight={"bold"}
        >
          {priceFormater(17785000)}{" "}
          <Box component={"span"} fontSize={16} fontWeight={400}>
            تومان
          </Box>
        </Typography>
        <Stack direction={"row"} gap={1} alignItems={"center"}>
          <Typography variant="body2" fontSize={10} sx={{ color: "#75751" }}>
            (۲۴ ساعت)
          </Typography>
          <Stack
            bgcolor={"#FDF5F5 "}
            color={"#D12F2F"}
            borderRadius={1.5}
            px={1}
            py={0.5}
          >
            -0.875٪
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
