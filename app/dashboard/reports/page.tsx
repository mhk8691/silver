import Card from "@/app/Components/Containers/Container/Container";
import OrderDetail from "@/app/Components/Tables/DetailTable/DetailTable";
import CustomTabs from "@/app/Components/Tabs/CustomTabs";
import { ToggleItemsType } from "@/app/core/Types";
import { Grid, Typography } from "@mui/material";
import { ReactNode } from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "گزارشات | دارینه",
  description: "",
};

const dealItems: ToggleItemsType[] = [
  {
    title: "خرید",
    value: "buy",
    id: 1,
    emptyMessage: "معامله ای برای شما به ثبت نرسیده است",
  },
  {
    title: "فروش",
    value: "sell",
    id: 2,
    emptyMessage: "معامله ای برای شما به ثبت نرسیده است",
  },
];
const depositItems: ToggleItemsType[] = [
  {
    title: "درگاه پرداخت",
    value: "paymentGateway",
    id: 1,
    emptyMessage: "واریزی برای شما به ثبت نرسیده است",
  },

  {
    title: "واریز از طلاسی",
    value: "silverDeposit",
    id: 2,
    emptyMessage: "واریزی برای شما به ثبت نرسیده است",
  },
];
const withdrawItems: ToggleItemsType[] = [
  {
    title: "برداشت به حساب بانکی",
    value: "bankAccount",
    id: 1,
    emptyMessage: "برداشتی برای شما به ثبت نرسیده است",
  },
  {
    title: "برداشت به طلاسی",
    value: "silver",
    id: 2,
    emptyMessage: "برداشتی برای شما به ثبت نرسیده است",
  },
];

const receiveItems: ToggleItemsType[] = [
  {
    title: "حضوری",
    value: "buy",
    id: 1,
    emptyMessage: "سفارشی برای شما به ثبت نرسیده است",
  },
  {
    title: "درب منزل",
    value: "recive",
    id: 2,
    emptyMessage: "سفارشی برای شما به ثبت نرسیده است",
  },
];


const children: ReactNode[] = [
  <OrderDetail key={1} noCard toggleItems={dealItems} type="toggle" />,
  <OrderDetail key={2} noCard toggleItems={depositItems} type="toggle" />,
  <OrderDetail key={3} noCard toggleItems={withdrawItems} type="toggle" />,
  <OrderDetail key={4} noCard toggleItems={[]} type="toggle" />,
  <OrderDetail key={5} noCard toggleItems={receiveItems} type="toggle" />,
  <OrderDetail
    key={6}
    noCard
    toggleItems={[]}
    type="toggle"
    emptyMessage={"سفارشی برای شما به ثبت نرسیده است"}
  />,
];
const tabs = [
  { title: "معاملات" },
  { title: "واریز" },
  { title: "برداشت" },
  { title: "هدیه های دریافت شده" },
  { title: "تحویل فیزیکی" },
  { title: "سفارش با قیمت" },
];
export default function page() {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card
          style={{
            px: {
              sx: 0,
              sm: 4,
            },
            border: {
              sx: 0,
              sm: 1,
            },
            borderColor: {
              sm: "background.paper",
            },
          }}
        >
          <Typography
            variant="h6"
            fontSize={{
              xs: 16,
              sm: 22,
            }}
          >
            گزارش ها
          </Typography>
          <CustomTabs
            tabList={tabs}
            style={{
              width: "auto",
              fontSize: 18,
              mb: 0.5,
            }}
            lineHeight="6px"
            tabsStyle={{ px: 0, mt: 3, minWidth: "auto" }}
            tabStyle={{ minWidth: "auto" }}
            noPadding={true}
          >
            {children}
          </CustomTabs>
        </Card>
      </Grid>
    </Grid>
  );
}
