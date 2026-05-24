import Chart from "@/app/Components/Chart/Chart";
import DetailTable from "@/app/Components/Tables/DetailTable/DetailTable";
import { Grid } from "@mui/material";
import Trading from "./Trading";
import { Metadata } from "next";
import BackLink from "../BackLink";
import WalletHeader from "@/app/Components/Wallet/WalletHeader";
export const metadata: Metadata = {
  title: "سفارش با قیمت | دارینه",
  description: "",
};
export default function page() {
  return (
    <Grid
      container
      spacing={{
        xs: 2,
        sm: 1,
        lg: 3,
      }}
    >
      <BackLink title="سفارش با قیمت" />

      <Grid size={12}>
        <WalletHeader />
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 4.8,
        }}
      >
        <Trading />
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 7.2,
        }}
      >
        <Chart
          positionPrice="bottom"
          priceStyle={{
            mt: {
              xs: 2,
              md: 5,
            },
            mb: {
              xs: 0,
              md: 2.5,
            },
          }}
          cardStyle={{
            pt: {
              xs: 2,
              md: 5.5,
            },
          }}
          dividerStyle={{
            mt: {
              xs: 0,
              md: 1,
            },
          }}
        />
      </Grid>
      <Grid size={12}>
        <DetailTable
          title="لیست معاملات اخیر"
          toggleItems={[]}
          type="chip"
          emptyMessage="سفارشی برای شما به ثبت نرسیده است"
          listLength={0}
          tableBody={<></>}
          tableHead={[]}
        />
      </Grid>
    </Grid>
  );
}
