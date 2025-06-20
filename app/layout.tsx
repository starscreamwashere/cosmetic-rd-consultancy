import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GreenTint Research & Consultancy',
  description: 'Leading cosmetic R&D consultancy with innovative formulations.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        {/* You can also use PNG/SVG:
        <link rel="icon" type="image/png" href="/favicon.png" />
        */}
      </head>
      <body>{children}</body>
    </html>
  )
  
}
