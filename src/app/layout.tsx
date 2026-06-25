import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SciFiBackground from '@/components/SciFiBackground'

export const metadata: Metadata = {
  title: 'AI 驱动的个人成长管理体系',
  description: '基于 Obsidian + AI 助手的全场景成长管理系统',
  openGraph: {
    title: 'AI 驱动的个人成长管理体系',
    description: '基于 Obsidian + AI 助手的全场景成长管理系统',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <SciFiBackground />
        <Navbar />
        <main className="content-stack min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
