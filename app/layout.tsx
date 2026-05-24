import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Omar | Red Teamer & Developer',
  description: 'CSE is everything. A young cybersecurity enthusiast, red teamer, exploit analyst, and multi-platform developer crafting secure systems and breaking them down.',
  keywords: ['cybersecurity', 'red teaming', 'exploit analysis', 'developer', 'reverse engineering', 'ethical hacking'],
  authors: [{ name: 'Omar' }],
  creator: 'Omar',
  openGraph: {
    title: 'Omar | Red Teamer & Developer',
    description: 'CSE is everything. Cybersecurity enthusiast showcasing skills in red teaming and multi-platform development.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar | Red Teamer & Developer',
    description: 'CSE is everything.',
  },
}

export const viewport: Viewport = {
  themeColor: '#00ff41',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className={`${geist.className} antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
