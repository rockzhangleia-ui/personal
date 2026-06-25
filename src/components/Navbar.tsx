import Link from 'next/link'
import { modules } from '@/lib/modules'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(0,240,255,0.08)] backdrop-blur-xl bg-[rgba(10,10,26,0.8)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-lg font-bold font-mono">
            <span className="gradient-text">~</span>
            <span className="text-white/60">/</span>
            <span className="text-white/90">lei</span>
          </span>
        </Link>

        <div className="hidden sm:flex items-center gap-1">
          {modules.map((m) => (
            <Link
              key={m.id}
              href={m.href}
              className="px-3 py-1.5 text-xs font-mono text-[var(--color-text-muted)] hover:text-white transition-colors rounded-md hover:bg-white/5"
            >
              {m.emoji} {m.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="status-badge text-[10px]">
            <span className="dot" />
            <span className="hidden sm:inline">system online</span>
          </span>
        </div>
      </div>
    </nav>
  )
}
