import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: 'نقرینه',
    short_name: 'نقرینه',
    description: 'نقرینه | پلتفرم آنلاین خرید و فروش نقره',
    start_url: '/',
    display: 'standalone',
    dir: 'rtl',
    lang: 'fa',
    background_color: '#FFFFFF',
    theme_color: '#6DA9E1',
    icons: [
      { src: '/maskable_icon_x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/logo-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/maskable_icon_x192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
    ],
  }
}