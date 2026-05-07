import Container from "@/app/Components/Containers/Container/Container";
import OrderDetail from "@/app/Components/Tables/DetailTable/DetailTable";
import SilverCard from "@/app/Components/ProductCard/ProductCard";
import WalletStatus from "@/app/Components/Wallet/WalletStatus";
import { ToggleItemsType } from "@/app/core/Types";
import { Grid } from "@mui/material";
import { Metadata } from "next";
import Cart from "./Cart";
export const metadata: Metadata = {
  title: "دریافت نقره | دارینه",
  description: "",
};

const items: ToggleItemsType[] = [
  {
    title: "تحویل درب منزل",
    value: "doorstepdelivery",
    id: 1,
    emptyMessage: "سفارشی برای شما به ثبت نرسیده است",
  },
  {
    title: "تحویل حضوری",
    value: "personDelivery",
    id: 2,
    emptyMessage: "سفارشی برای شما به ثبت نرسیده است",
  },
];

export default function page() {
  return (
    <Grid
      container
      spacing={{
        xs: 1,
        sm: 3,
      }}
    >
      <Grid size={12}>
        <WalletStatus />
      </Grid>
      <Container
        style={{
          pb: 11,
          width: "100%",
          px: {
            xs: 0,
            sm: 4,
          },
          border: {
            xs: 0,
            sm: 1,
          },
          borderColor: {
            sm: "background.paper",
          },
        }}
      >
        <Grid container spacing={1} size={12}>
          <Grid
            size={{
              xs: 12,
              md: 8,
            }}
            container
            spacing={{
              xs: 1,
              md: 2,
            }}
          >
            <Grid
              size={{
                xs: 6,
                md: 4,
              }}
            >
              <SilverCard />
            </Grid>
            <Grid
              size={{
                xs: 6,
                md: 4,
              }}
            >
              <SilverCard />
            </Grid>
            <Grid
              size={{
                xs: 6,
                md: 4,
              }}
            >
              <SilverCard />
            </Grid>
            <Grid
              size={{
                xs: 6,
                md: 4,
              }}
            >
              <SilverCard />
            </Grid>
          </Grid>
          <Cart />
        </Grid>
      </Container>
      <Grid size={12}>
        <OrderDetail
          type="chip"
          title="لیست تحویل‌های اخیر"
          toggleItems={items}
        />
      </Grid>
    </Grid>
  );
}
