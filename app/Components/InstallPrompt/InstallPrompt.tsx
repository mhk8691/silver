'use client'

import { Box, SxProps } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function InstallPrompt() {
  const router = useRouter()
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent

    // تشخیص iOS
    const isIOS =
      /iPad|iPhone|iPod/.test(userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

    // تشخیص Android
    const isAndroid = /Android/i.test(userAgent)

    // دسکتاپ = نه iOS و نه Android
    const isDesktop = !isIOS && !isAndroid

    // فقط iOS و Desktop
    if (!isIOS && !isDesktop) {
      return
    }

    // بررسی اینکه PWA در حالت Standalone اجرا شده یا نه
    const isStandalone =
      ('standalone' in navigator &&
        (navigator as Navigator & { standalone?: boolean }).standalone === true) ||
      window.matchMedia('(display-mode: standalone)').matches

    // اگر PWA نصب شده و از حالت App اجرا شده، نمایش نده
    if (isStandalone) {
      return
    }

    // بررسی اینکه کاربر قبلاً بنر را بسته است
    const dismissed = localStorage.getItem('installBannerDismissed')

    if (dismissed) {
      const dismissedAt = parseInt(dismissed, 10)

      const daysPassed =
        (Date.now() - dismissedAt) / (1000 * 60 * 60 * 24)

      // تا 7 روز نمایش نده
      if (daysPassed < 7) {
        return
      }
    }

    // بعد از 3 ثانیه نمایش بده
    const timer = setTimeout(() => {
      setShowBanner(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleGoToAppPage = () => {
    localStorage.setItem(
      'installBannerDismissed',
      Date.now().toString()
    )

    setShowBanner(false)

    router.push('/application')
  }

  const handleDismiss = () => {
    localStorage.setItem(
      'installBannerDismissed',
      Date.now().toString()
    )

    setShowBanner(false)
  }

  if (!showBanner) return null

  const bannerStyle: SxProps = {
    position: 'fixed',
    bottom: 16,
    left: 16,
    right: 16,
    bgcolor: 'background.paper',
    borderRadius: 3,
    padding: '14px 16px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
    zIndex: 9999,
  }

  return (
    <Box sx={bannerStyle}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}
      >
        <span style={{ fontSize: 14 }}>
          دارینه رو نصب کن و راحت‌تر استفاده کن
        </span>

        <div
          style={{
            display: 'flex',
            gap: 8,
            flexShrink: 0,
          }}
        >
          <button
            onClick={handleGoToAppPage}
            style={{
              background: '#6DA9E1',
              color: 'black',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              padding: '8px 16px',
              fontSize: 14,
              fontWeight: 'bold',
            }}
          >
            نصب
          </button>

          <button
            onClick={handleDismiss}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: 14,
              color: '#757571',
              cursor: 'pointer',
            }}
          >
            بعداً
          </button>
        </div>
      </div>
    </Box>
  )
}