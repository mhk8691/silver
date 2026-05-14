'use client'
import Card from "@/app/Components/Containers/Container/Container";
import CustomTabs from "@/app/Components/Tabs/CustomTabs";
import { Grid, Typography } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";

import { Metadata } from "next";
import TradesTable from "./TradesTable";
import FinancialTable from "./FinancialTable";
import ReceiveTable from "./ReceiveTable";
import { getReports } from "@/lib/getReports/getReports";
// export const metadata: Metadata = {
//   title: "گزارشات | دارینه",
//   description: "",
// };
const tabUrl = ['trades', 'financial', 'physical'];



const children: ReactNode[] = [
  <TradesTable key={1} /> ,
  <FinancialTable key={2} /> ,
  <ReceiveTable key={3}/>
];
const tabs = [
  { title: "معاملات" },
  { title: "واریز و برداشت" },
  { title: "تحویل فیزیکی" },
];
export default function page() {
    const [value, setValue] = useState(0);
    const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await getReports(tabUrl[value]);
      setData(response);
    };
    getData();
  }, [value]);
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
            setCustomValue={setValue}
          >
            {children}
          </CustomTabs>
        </Card>
      </Grid>
    </Grid>
  );
}
