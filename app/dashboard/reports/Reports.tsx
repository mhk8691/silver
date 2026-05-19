'use client'
import CustomTabs from '@/app/Components/Tabs/CustomTabs'
import { getReports } from '@/lib/getReports/getReports';
import React, { ReactNode, useEffect, useState } from 'react'
import TradesTable from './TradesTable';
import FinancialTable from './FinancialTable';
import ReceiveTable from './ReceiveTable';

const tabUrl = ["trades", "financial", "physical"];

const children: ReactNode[] = [
  <TradesTable key={1} />,
  <FinancialTable key={2} />,
  <ReceiveTable key={3} />,
];
const tabs = [
  { title: "معاملات" },
  { title: "واریز و برداشت" },
  { title: "تحویل فیزیکی" },
];

export default function Reports() {
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
  )
}
