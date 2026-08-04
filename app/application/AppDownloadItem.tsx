'use client'
import { Box, Link, Stack, useTheme } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import QRCode from "react-qr-code"
import StarIcon from '@mui/icons-material/Star'

interface Props {
  url?: string
  image: string
  isSuggested?: boolean
  onClick?: () => void
}

export default function AppDownloadItem({ image, url, isSuggested = false, onClick }: Props) {
  const [isHover, setIsHover] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <Stack
      component={'div'}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      sx={{
        position: 'relative',
        width: 'fit-content',
        zIndex: isHover ? 99 : 1,
      }}
    >
      {isSuggested && (
        <Box
          sx={{
            position: 'absolute',
            top: -12,
            right: -8,
            display: 'flex',
            alignItems: 'center',
            gap: 0.4,
            background: 'linear-gradient(135deg, #6DA9E1 0%, #1d84e6 100%)',
            color: 'white',
            fontSize: '0.65rem',
            fontWeight: 800,
            px: 1.1,
            py: 0.4,
            borderRadius: '20px',
            zIndex: 4,
            pointerEvents: 'none',
            border: '1.5px solid',
            borderColor: '#ffffff',
            whiteSpace: 'nowrap',
          }}
        >
          <StarIcon sx={{ fontSize: '0.75rem' }} />
          مناسب دستگاه شما
        </Box>
      )}

      <Link
        onClick={handleClick}
        sx={{
          display: 'block',
          borderColor:  isHover ? '#C9CDCF' : 'transparent',
          borderWidth: 1,
          borderStyle: 'solid',
          bgcolor: isHover ? 'background.default' : 'transparent',
          borderRadius: 2,
          transition: 'all 0.2s ease-in-out',
          position: 'relative',
          zIndex: 3,
          cursor: 'pointer',
          ...(isSuggested && {
   
          }),
        }}
        href={url || '#'}
      >
        <Image
          src={`/images/application-download/application/${image}`}
          width={200}
          height={56}
          style={{
            border:'1px solid black',
            borderRadius: 8,
            display: 'block',
          }}
          alt=''
        />
      </Link>

      {url && isHover && (
        <Stack
          p={1.5}
          pb={11}
          pt={2}
          borderRadius={2}
          position={'absolute'}
          bgcolor={'background.default'}
          bottom={'-5px'}
          left={'50%'}
          width={'105%'}
          border={1}
          borderColor={'#C9CDCF'}
          direction={'row'}
          justifyContent={'center'}
          sx={{
            transform: 'translateX(-50%)',
            zIndex: 2,
          }}
        >
          <QRCode
            bgColor={ '#000000'}
            fgColor={ '#ffffff'}
            size={120}
            style={{ height: "auto", maxWidth: "100%", width: "80%" }}
            value={url}
          />
        </Stack>
      )}
    </Stack>
  )
}