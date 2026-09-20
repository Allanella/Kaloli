import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'St. Kalooli Lwanga SS Mulajje | Only the Best is Good Enough',
  description: 'St. Kalooli Lwanga SS Mulajje is a Catholic-founded, government-aided secondary school in Mulajje Parish, Luweero District, Uganda, committed to academic excellence, self-reliance, character and holistic student development.',
  generator: 'v0.app',
  keywords: ['St. Kalooli Lwanga', 'Mulajje', 'Luweero schools', 'Uganda secondary school'],
  openGraph: {
    title: 'St. Kalooli Lwanga SS Mulajje',
    description: 'Faith, education, discipline and excellence in Mulajje Parish, Luweero District.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
