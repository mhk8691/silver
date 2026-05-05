import { InfoOutlineRounded } from "@mui/icons-material";
import { Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import FilterToggleButton from "../Components/FilterToggleButton/FilterToggleButton";
import { ToggleItemsType } from "../core/Types";
import DirectDelivery from "./DirectDelivery";
import HouseDelivery from "./HouseDelivery";

const toggleItems: ToggleItemsType[] = [
  { title: "تحویل درب منزل", value: "delivery", id: 1 },
  { title: "تحویل حضوری", value: "directDelivery", id: 2 },
];

export default function Delivery() {
  const [select, setSelect] = useState("delivery");

  return (
    <Grid container spacing={3}>
      <Grid
        size={{
          xs: 12,
          md: 7.5,
        }}
      >
        {/* <Typography variant="body1" fontSize={22} sx={{ mb: 2 }}>
          نحوه تحویل
        </Typography> */}
        <FilterToggleButton
          select={select}
          setSelect={setSelect}
          items={toggleItems}
          style={{ py: 1.5 }}
        />
        {select === "delivery" ? <HouseDelivery /> : <DirectDelivery />}
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 4.5,
        }}
        border={{
          xs: 1,
          md: 1,
        }}
        borderColor={{
          xs: "background.paper",
          md: "background.default",
        }}
        p={{
          xs: 2,
          md: 0,
        }}
        borderRadius={2}
      >
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <InfoOutlineRounded sx={{ color: "#ff8000" }} />
          <Typography variant="body1" fontSize={22} sx={{ color: "#ff8000" }}>
            توجه
          </Typography>
        </Stack>
        <Stack>
          <Typography
            variant="body1"
            fontSize={{
              xs: 14,
              md: 18,
            }}
            sx={{ color: "text.secondary", fontWeight: "600", mt: "10px" }}
          >
            {select === "delivery"
              ? "تحویل امن نقره به سرتاسر ایران"
              : "تحویل حضوری نقره شما"}
          </Typography>
          <Typography
            variant="body1"
            fontSize={{
              xs: 12,
              md: 16,
            }}
            sx={{ color: "text.secondary", mt: 1 }}
          >
            {select === "delivery"
              ? `نقره‌سی نقره شما را، به هر نقطه از کشور که بخواهید ارسال می‌کند. تمامی مرسولات ارسالی بیمه می‌شوند؛ در صورت بروز هرگونه خسارت، جبران آن با نقره‌سی است.
تحویل فیزیکی شمش تنها با ارائه کارت ملی هوشمند و یا شناسنامه جدید امکان‌پذیر می‌باشد.
خرید و فروش نقره بدون اجرت است اما ضرب نقره فیزیکی شامل اجرت می‌شود که روی محصول نهایی لحاظ شده و نیازی به پرداخت جداگانه نیست.
هماهنگی مراجعه حضوری بابت فروش از طریق پشتیبانی نقره‌سی امکان پذیر می باشد`
              : `تحویل فیزیکی شمش تنها با ارائه کارت ملی هوشمند و یا شناسنامه جدید امکان‌پذیر می‌باشد.
خرید و فروش نقره بدون اجرت است اما ضرب نقره فیزیکی شامل اجرت می‌شود که روی محصول نهایی لحاظ شده و نیازی به پرداخت جداگانه نیست.
برای تحویل حضوری، لطفاً کارت شناسایی خود را همراه داشته باشید. مراجعه تنها در ساعت و آدرس تعیین‌شده امکان‌پذیر است.`}
          </Typography>
          {/* {select === "delivery" && (
            <Typography
              variant="body1"
              fontSize={16}
              sx={{ color: "#D9D9D3", fontWeight: "600", mt: 1 }}
            >
              سفارش شما تا ۵ روز کاری به آدرس تعیین شده تحویل داده می‌شود.
            </Typography>
          )} */}
        </Stack>
      </Grid>
    </Grid>
  );
}
