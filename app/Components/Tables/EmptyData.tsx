import { Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'


interface Props{
    emptyMessage?:string
message?:string
}
export default function EmptyData({emptyMessage,message}:Props) {
  return (
    <Stack
          mt={10}
          mb={8}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          width={'100%'}
          gap={4}
        >
          <Image
            src={"/images/emptyTable.webp"}
            width={300}
            height={270}
            alt=""
          />
          <Typography variant="body2" fontSize={12} sx={{ color: "#535657" }}>
            {emptyMessage || message}
          </Typography>
        </Stack>
  )
}
