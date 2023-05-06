import './globals.css'
import { Open_Sans } from 'next/font/google'

const fonter = Open_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-google',
})

export const metadata = {
  title: 'Cây Sen Đá',
  description: 'Cây Sen Đá',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fonter.className}>{children}</body>
    </html>
  )
}
