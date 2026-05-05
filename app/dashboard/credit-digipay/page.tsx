import CreditContainer from "@/app/Components/CreditContainer/CreditContainer";
import SilverUnderline from "@/app/Components/CreditContainer/SilverUnderline";
import { Box, Grid, Typography } from "@mui/material";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "خرید اعتباری با دیجی پی | دارینه",
  description: "",
};
export default function page() {
  return (
    <Grid container>
      <Grid size={12}>
        <CreditContainer
          description="با استفاده از سرویس خرید اقساطی نقره، می‌توانید بدون نیاز به پرداخت نقدی، طلا بخرید."
          title={
            <Typography
              variant="h6"
              fontSize={{
                xs: 16,
                sm: 22,
              }}
            >
              خرید اعتباری با
              <Box component={"span"} color={"#0040FF"}>
                {" "}
                دیجی پی
              </Box>
            </Typography>
          }
          options={[
            "خرید آنی طلا بدون نیاز به پرداخت نقدی",
            "امکان نقدکردن طلای خریداری شده در لحظه",
            "تحویل فیزیکی به‌صورت شمش در هر زمان",
          ]}
          tooltip="توجه: خرید شما با 5.5 درصد کارمزد محاسبه می‌شود."
          icon={
            <svg
              width="32"
              height="32"
              id="digipay"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              fill="#0040ff"
            >
              <path
                fillRule="evenodd"
                d="M14 4.833A3.333 3.333 0 0010.667 1.5H4v1.111a3.333 3.333 0 003.333 3.333H14v-1.11zm0 3.334V7.056H7.333l-.125.002A3.333 3.333 0 004 10.388V16.5h1.111l.125-.002a3.333 3.333 0 003.208-3.331V11.5h2.223l.125-.002A3.333 3.333 0 0014 8.167z"
                clipRule="evenodd"
              ></path>
            </svg>
          }
          options2={["دریافت آنی تا سقف ۲۰ میلیون تومان", "بازپرداخت در ۴ قسط"]}
          optionTitle2="دیجی‌پی اعتبار اقساطی (۴ قسطه)"
          optionTitle3="دیجی‌پی وام (۱۲ قسطه)"
          options3={[
            "دریافت تسهیلات بانکی تا سقف ۱۰۰ میلیون تومان",
            "بازپرداخت ۱۲ ماه",
            "تنها با یک چک صیادی یا سفته الکترونیک",
          ]}
          description2="پس از ثبت مبلغ و ورود به دیجی‌پی، می‌توانید یکی از دو طرح زیر را انتخاب کنید:"
          banner={
            <Typography
              variant="h6"
              fontSize={{
                xs: 14,
                sm: 22,
              }}
              sx={{
                wordSpacing: 7,
                flexDirection: "row",
                alignItems: "center",
                mt: 3,
              }}
            >
              خرید <SilverUnderline>اقساطـــی</SilverUnderline> طلا،{"  "}
              <SilverUnderline> ساده‌تر </SilverUnderline>
              {"  "} از <SilverUnderline> همیشه </SilverUnderline>
            </Typography>
          }
        />
      </Grid>
    </Grid>
  );
}
