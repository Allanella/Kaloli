import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'St. Kalooli Lwanga SS Mulajje | Only the Best is Good Enough',
  description:
    'St. Kalooli Lwanga SS Mulajje is a Catholic-founded, government-aided secondary school in Mulajje Parish, Luweero District, Uganda, committed to academic excellence, self-reliance, character and holistic student development.',
  generator: 'v0.app',
  keywords: [
    'St. Kalooli Lwanga',
    'Mulajje',
    'Luweero schools',
    'Uganda secondary school',
    'Catholic school Uganda',
    'government aided school',
    'Kasana Luweero Diocese',
  ],
  authors: [{ name: 'St. Kalooli Lwanga SS Mulajje' }],
  openGraph: {
    title: 'St. Kalooli Lwanga SS Mulajje',
    description:
      'Faith, education, discipline and excellence in Mulajje Parish, Luweero District.',
    type: 'website',
    siteName: 'St. Kalooli Lwanga SS Mulajje',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'St. Kalooli Lwanga SS Mulajje',
    description:
      'Faith, education, discipline and excellence in Mulajje Parish, Luweero District.',
  },
  // ===== FAVICON — uses the school badge =====
  icons: {
    icon: [
      { url: '/images/school-badge.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/school-badge.png', type: 'image/png' },
    ],
    shortcut: ['/images/school-badge.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Explicit favicon links for maximum browser compatibility */}
        <link rel="icon" type="image/png" href="/images/school-badge.png" />
        <link rel="shortcut icon" type="image/png" href="/images/school-badge.png" />
        <link rel="apple-touch-icon" href="/images/school-badge.png" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}