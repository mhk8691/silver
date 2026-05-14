import DetailTable from '@/app/Components/Tables/DetailTable/DetailTable';
import { ToggleItemsType } from '@/app/core/Types';
import React from 'react';

const trades: ToggleItemsType[] = [
  {
    title: 'خرید',
    value: 'buy',
    id: 1,
    emptyMessage: 'معامله ای برای شما به ثبت نرسیده است',
  },
  {
    title: 'فروش',
    value: 'sell',
    id: 2,
    emptyMessage: 'معامله ای برای شما به ثبت نرسیده است',
  },
];

export default function TradesTable() {
  return (
    <DetailTable
      key={1}
      noCard
      toggleItems={trades}
      type="toggle"
      tableBody={<></>}
      tableHead={[]}
      listLength={0}
    />
  );
}
