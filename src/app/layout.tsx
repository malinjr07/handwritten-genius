import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../styles/globals.css'

const aktivGroteskRegular = localFont({
  src: '../fonts/AktivGrotesk-Regular.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Handwrytten | Handwritten Notes Service and Card Automation',
  description:
    'The leading online handwritten notes service. Use AI to craft your message. Automated thank you and birthday cards! Send cards online.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <style>
          {` :root{
          --aktiv-grotesk: ${aktivGroteskRegular.style.fontFamily};
        }`}
        </style>
        {children}
      </body>
    </html>
  )
}
