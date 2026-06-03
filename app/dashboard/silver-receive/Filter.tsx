'use client';

import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import FilterButton from '@/app/Components/Tables/DetailTable/FilterButton';
import {
  CartItem,
  CategoriesDataType,
  ToggleItemsType,
} from '@/app/core/Types';
import { getCategories } from '@/lib/getCategories/getCategories';
import { Badge, BadgeProps, IconButton, Stack, styled } from '@mui/material';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 5,
    top: 5,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

interface Props {
  cart: CartItem[];
  setProductParams: Dispatch<SetStateAction<string>>;
}

export default function Filter({
  cart,
  setProductParams,
}: Props) {
  const router = useRouter();

  const [toggleItems, setToggleItems] = useState<ToggleItemsType[]>([]);
  const [active, setActive] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();

        const items: ToggleItemsType[] = response.data.map(
          (item: CategoriesDataType) => ({
            id: item.id,
            title: item.name,
            value: item.slug,
          })
        );

        setToggleItems(items);

        if (items.length > 0) {
          setActive(items[0].value);
          setProductParams(items[0].value);
        }
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          showSnackbar(
            error.response?.data?.message ||
              'خطا در دریافت دسته‌بندی‌ها'
          );
        } else {
          showSnackbar('خطایی رخ داد');
        }
      }
    };

    fetchCategories();
  }, [setProductParams]);

  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mb={3}
    >
      <Stack direction="row" gap={1.5}>
        {toggleItems.map((item) => (
          <FilterButton
            key={item.id}
            active={active}
            setActive={setActive}
            item={item}
            setParams={setProductParams}
          />
        ))}
      </Stack>

      <IconButton
        onClick={() => router.push('/gold-shop-basket')}
      >
        <StyledBadge
          badgeContent={totalQuantity}
          color="error"
        >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.75 8.9481V7.81643C8.75 5.19143 10.8617 2.6131 13.4867 2.3681C16.6133 2.06477 19.25 4.52643 19.25 7.59477V9.20477"
      stroke={'currentColor'}
      strokeWidth="1.75"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M10.5022 25.6668H17.5022C22.1922 25.6668 23.0322 23.7885 23.2772 21.5018L24.1522 14.5018C24.4672 11.6552 23.6506 9.3335 18.6689 9.3335H9.33557C4.35391 9.3335 3.53724 11.6552 3.85224 14.5018L4.72724 21.5018C4.97224 23.7885 5.81224 25.6668 10.5022 25.6668Z"
      stroke={'currentColor'}
      strokeWidth="1.75"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M18.0769 13.9998H18.0874"
      stroke={'currentColor'}
      strokeWidth="2.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9.90896 13.9998H9.91944"
      stroke={'currentColor'}
      strokeWidth="2.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
        </StyledBadge>
      </IconButton>
    </Stack>
  );
}