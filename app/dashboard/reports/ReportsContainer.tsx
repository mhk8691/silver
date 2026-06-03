'use client'
import CustomTabs from "@/app/Components/Tabs/CustomTabs"
import { ReactNode, useEffect, useState } from "react";
import TradesTable from "./TradesTable";
import DepositTable from "./DepositTable";
import WithdrawTable from "./WithdrawTable";
import { getReports } from "@/lib/getReports/getReports";
import { isAxiosError } from "axios";
import { showSnackbar } from "@/app/Components/Snackbar/Snackbar";
import { DatePickerValue } from "@/app/Components/DatePicker/CustomDatePicker";
const tabs = [
  { title: 'معاملات' },
  { title: 'واریز' },
  { title: 'برداشت' },
  // {
  //   title:'سفارش ها'
  // }
];

const tabUrl = ['silver', 'deposit', 'withdraw'];
export default function ReportsContainer() {
    const [filter,setFilter] = useState('')
    const [dateRange,setDateRange] =useState<DatePickerValue| null>(null)
  const [tradeParams,setTradeParams] = useState('BUY')
    const [depositParams,setDepositParams] = useState('ONLINE')
    const [withdrawParams,setWithdrawParams] = useState('BANK')
      const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try{
  const response = await getReports(tabUrl[value],tabUrl[value] === 'silver' ? tradeParams:tabUrl[value] === 'deposit' ? depositParams:withdrawParams,dateRange,filter);
      setData(response || []);
      }
    
      catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
    };
    getData();
  }, [value,tradeParams,depositParams,withdrawParams,filter,dateRange]);
    useEffect(()=>{
         if (tabUrl[value] === 'gold'){
      setDepositParams('ONLINE')
setWithdrawParams('BANK')
    }
    else if (tabUrl[value] === 'deposit'){
      setTradeParams('BUY')
      setWithdrawParams('BANK')
    }
    else{
      setTradeParams('BUY')
      setDepositParams('ONLINE')
    }
    setFilter('')
    setDateRange(null)
  },[value,setValue])
  const children: ReactNode[] = [
  <TradesTable dateRange={dateRange} setDateRange={setDateRange} setFilter={setFilter} filter={filter} setTradeParams={setTradeParams}  data={data}  key={1} />,
  <DepositTable  dateRange={dateRange} setDateRange={setDateRange} setFilter={setFilter} filter={filter} setDepositParams={setDepositParams} data={data}  key={2} />,
  <WithdrawTable  dateRange={dateRange} setDateRange={setDateRange} setFilter={setFilter} filter={filter} setWithdrawParams={setWithdrawParams} data={data}   key={3} />,
  // <OrdersTable  data={data} key={4} />,
];
  return (
         <CustomTabs
            tabList={tabs}
            style={{
              width: 'auto',
              fontSize: 18,
              mb: 0.5,
            }}
            lineHeight="6px"
            tabsStyle={{ px: 0, mt: 3, minWidth: 'auto' }}
            tabStyle={{ minWidth: 'auto' }}
            noPadding={true}
            setCustomValue={setValue}
          >
            {children}
          </CustomTabs>
  )
}
