'use client';

import { Stack, SxProps, Typography } from '@mui/material';
import Image from 'next/image';
interface Props{
  title:string
  width?:number
  height?:number
  style?:SxProps
}
export default function EmptyMessage({title,width,height,style}:Props) {
  return (
<Stack
                    mt={10}
                    mb={8}
                    direction={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    width={'100%'}
                    gap={4}
                    sx={style}
                  >
    <Image
      src={`/images/emptyTable.webp`}
      width={width || 300}
      height={height || 270}
      alt=""
    />
         <Typography variant="body2" fontSize={12} sx={{ color: 'text.muted' }}>
                    {title}
                    </Typography>
                    </Stack>

  );
}
