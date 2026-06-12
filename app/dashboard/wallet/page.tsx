'use client'
import {
  default as Card,
} from '@/app/Components/Containers/Container/Container';
import Wallet from '@/app/Components/Wallet/Wallet';
import { RecentTransactionDataType } from '@/app/core/Types';
import { Grid, Stack, Typography } from '@mui/material';
import BackLink from '../BackLink';
import { useEffect, useState } from 'react';
import { getRecentTransaction } from '@/lib/transactions/recent-transactions/recentTransactions';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import TransactionTable from '../irt-transaction/TransactionTable';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import OrderDetail from '@/app/Components/Tables/DetailTable/DetailTable';
import { TransactionItems } from '../irt-transaction/TransactionContainer';
import Statistics from './Statistics';
// export const metadata: Metadata = {
//   title: 'کیف پول | دارینه',
//   description: '',
// };
export const statuses = [
  { label: 'در انتظار تایید', value: 'PENDING' },
  { label: 'تکمیل شده', value: 'COMPLETED' },
  { label: 'لغو شده', value: 'CANCELLED' },
  { label: 'ناموفق', value: 'FAILED' },
];
export default async function page() {
  const [transactionData,setTransactionData] = useState<RecentTransactionDataType[]>([])
  const [transactionParams,setTransactionParams] = useState('deposit')
    const [filter,setFilter] = useState('')
    const [dateRange,setDateRange] =useState<DatePickerValue| null>(null)
  // useEffect(()=>{
  //    const getData = async ()=>{
  //       try{
  //         const response = await getRecentTransaction(transactionParams,filter,dateRange)
  //         setTransactionData(response)
  //       }catch(error:unknown){
  //         if (isAxiosError(error)){
  //           showSnackbar(error.response?.data.message)
  //         }
  //       }
  //     }
  //     getData()
  // },[transactionParams,filter,dateRange])
  return (
    <Grid
      container
      spacing={{
        xs: 2,
        sm: 1,
        lg: 3,
      }}
    >
      <BackLink title="کیف پول شما" />

      <Grid size={{ xs: 12, md: 6 }}>
        <Wallet type="wallet" />
 
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
       
        <Statistics/>

     
      </Grid>
      <Grid size={12}>
           <Stack mt={{ xs: 1, sm: 3 }}>
          <OrderDetail
          statuses={statuses}
            type="chip"
            title="لیست تراکنش‌‌های اخیر"
            toggleItems={TransactionItems}
            tableBody={<TransactionTable data={transactionData} />}
            listLength={transactionData.length}
            setParams={setTransactionParams}
             tableHead={[
            'مبلغ',
            'نوع تراکنش',
            'روش',
            'وضعیت',
            'کد پیگیری',
            'تاریخ',
          ]}
          setDateRange={setDateRange}
          setStatus={setFilter}
          dateRange={dateRange}
          status={filter}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}
