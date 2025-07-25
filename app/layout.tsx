import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammad Sohaib Jameel - Senior Mobile Application Developer',
  description: 'Senior Mobile Application Developer specializing in Flutter, React Native, and modern app development. View my portfolio showcasing innovative mobile solutions.',
  keywords: 'mobile developer, flutter developer, react native, app development, Muhammad Sohaib Jameel',
  authors: [{ name: 'Muhammad Sohaib Jameel' }],
  openGraph: {
    title: 'Muhammad Sohaib Jameel - Senior Mobile Application Developer',
    description: 'Senior Mobile Application Developer specializing in Flutter, React Native, and modern app development.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}