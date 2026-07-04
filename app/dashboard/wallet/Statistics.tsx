'use client'

import { useEffect, useMemo, useState } from 'react'
import { Stack, Typography } from '@mui/material'
import { isAxiosError } from 'axios'

import { useAssets } from '@/app/AssetsProvider'
import Container from '@/app/Components/Containers/Container/Container'
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar'
import priceFormater from '@/app/core/PriceFormater'
import { StatisticsDataType } from '@/app/core/Types'
import { getStatistics } from '@/lib/getAssets/getAssets'

export default function Statistics() {
  const { isVisible } = useAssets()

  const [statisticsData, setStatisticsData] = useState<StatisticsDataType>(
    {} as StatisticsDataType
  )

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getStatistics()
        setStatisticsData(response ?? ({} as StatisticsDataType))
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          showSnackbar(error.response?.data.message, 'error')
        }
      }
    }

    getData()
  }, [])

 const statistics = [
  {
    title: 'مجموع دارایی شما',
    value: `${priceFormater(statisticsData.total_assets ?? 0)} تومان`,
    color: 'text.title',
  },
  {
    title: 'موجودی کیف پول',
    value: `${priceFormater(statisticsData.wallet_balance ?? 0)} تومان`,
    color: 'text.title',
  },
  {
    title: 'موجودی بلوکه‌شده کیف پول',
    value: `${priceFormater(statisticsData.blocked_wallet_balance ?? 0)} تومان`,
    color: 'warning.main',
  },
  {
    title: 'موجودی نقره',
    value: `${priceFormater(statisticsData.silver_balance ?? 0)} گرم`,
    color: 'text.title',
  },
  {
    title: 'نقره بلوکه‌شده',
    value: `${priceFormater(statisticsData.blocked_silver_balance ?? 0)} گرم`,
    color: 'warning.main',
  },
  {
    title: 'ارزش دارایی نقره',
    value: `${priceFormater(statisticsData.silver_asset_value ?? 0)} تومان`,
    color: 'text.title',
  },
  {
    title: 'قیمت هر گرم نقره',
    value: `${priceFormater(statisticsData.silver_price ?? 0)} تومان`,
    color: 'text.title',
  },
  {
    title: 'سود شما',
    value: `${priceFormater(statisticsData.profit ?? 0)} تومان`,
    color: (statisticsData.profit ?? 0) >= 0 ? 'success.main' : 'error.main',
  },
  {
    title: 'نقره برداشت شده',
    value: `${priceFormater(statisticsData.withdrawn_silver ?? 0)} گرم`,
    color: 'text.title',
  },
  {
    title: 'کارت هدیه‌های خریداری شده',
    value: priceFormater(statisticsData.purchased_giftcards ?? 0),
    color: 'text.title',
  },
  {
    title: 'کارت هدیه‌های دریافت شده',
    value: priceFormater(statisticsData.received_giftcards ?? 0),
    color: 'text.title',
  },
  {
    title: 'تومان در انتظار پردازش',
    value: `${priceFormater(statisticsData.pending_toman ?? 0)} تومان`,
    color: 'text.title',
  },
  {
    title: 'نقره در انتظار پردازش',
    value: `${priceFormater(statisticsData.pending_silver ?? 0)} گرم`,
    color: 'text.title',
  },
]

  return (
    <Container
      style={{
        mb: {
          xs: 4,
          sm: 3,
        },
        px: {
          xs: 2,
          lg: 4,
        },
        py: {
          xs: 3.5,
          lg: 3,
        },
      }}
    >
      <Typography
        variant="h2"
        fontSize={{
          xs: 12,
          sm: 20,
          lg: 22,
        }}
        sx={{ color: 'text.primary' }}
        fontWeight="900"
      >
        خلاصه فعالیت‌های شما
      </Typography>

      <Stack
        mt={3}
        direction="column"
        gap={{
          xs: 2,
          sm: 2.5,
        }}
      >
        {statistics.map((item) => (
          <Stack
            key={item.title}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="body1"
              sx={{ color: 'text.muted' }}
              fontSize={{ xs: 10, sm: 14, lg: 16 }}
            >
              {item.title}
            </Typography>

            <Typography
              variant="h6"
              fontSize={{ xs: 12, sm: 18, lg: 20 }}
              sx={{ color: item.color }}
            >
              {isVisible ? item.value : '***'}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Container>
  )
}