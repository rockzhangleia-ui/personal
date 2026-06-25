import Link from 'next/link'
import type { Module } from '@/lib/modules'

interface ModuleCardProps {
  module: Module
}

export default function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Link
      href={module.href}
      className="sci-fi-card group p-6 sm:p-8 flex flex-col h-full"
      style={{
        ['--glow-color' as string]: module.color,
        ['--glow-shadow' as string]: `${module.color}33`,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{module.emoji}</span>
        <span
          className="text-[10px] font-mono uppercase tracking-widest"
          style={{ color: module.color }}
        >
          {module.status === 'active' ? '● active' : '○ planned'}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold mb-1 text-white group-hover:text-[var(--glow-color)] transition-colors">
        {module.title}
      </h3>
      <p className="text-sm text-[var(--color-text-muted)] mb-1">
        {module.subtitle}
      </p>
      <p className="text-xs text-[var(--color-text-dim)] mb-5 leading-relaxed">
        {module.description}
      </p>

      {/* Features */}
      <ul className="space-y-1.5 mt-auto">
        {module.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-[var(--color-text-dim)]">
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: module.color, boxShadow: `0 0 4px ${module.color}` }}
            />
            {f}
          </li>
        ))}
      </ul>

      {/* Hover arrow */}
      <div className="mt-4 flex justify-end">
        <span
          className="text-sm opacity-0 group-hover:opacity-100 transition-opacity font-mono"
          style={{ color: module.color }}
        >
          explore →
        </span>
      </div>
    </Link>
  )
}
