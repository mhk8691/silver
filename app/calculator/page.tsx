import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { Metadata } from "next";
import Calculator from "./Calculator";
export const metadata: Metadata = {
  title: "محاسبه قیمت آنلاین | نقرینه",
  description: "",
};

export default function page() {
  return (
    <>
      <Container maxWidth={"lg"} sx={{ mt: 5, px: "17px !important" }}>
        <Stack direction={"column"} gap={0.5} alignItems={"center"}>
          <Typography
            variant="h6"
            fontSize={22}
            sx={{ color: "text.title" }}
            fontWeight={700}
          >
            محاسبه آنلاین قیمت نقره
          </Typography>
          <Typography
            variant="h6"
            fontSize={{
              xs: 12,
              sm: 14,
            }}
            sx={{ color: "text.primary" }}
            fontWeight={700}
          >
            قیمت روز نقره ۱۱ اردیبهشت ۱۴۰۵ : 439,800 تومان
          </Typography>
          <Typography
            variant="h6"
            fontSize={12}
            sx={{ color: "text.secondary" }}
          >
            بر اساس فرمول محاسبه اتحادیه نقره
          </Typography>
        </Stack>
        <Grid container spacing={3} mt={4}>
          <Calculator />
        </Grid>
      </Container>
      <Divider sx={{ mt: 11.5 }} />
    </>
  );
}
