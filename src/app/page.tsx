import Link from 'next/link'
import InteractivePanorama from '@/components/InteractivePanorama'
import ModuleCard from '@/components/ModuleCard'
import { modules } from '@/lib/modules'

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-20 pb-10 sm:pt-28 sm:pb-12 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* 顶部标签 */}
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full border border-[rgba(0,240,255,0.1)] bg-[rgba(0,240,255,0.03)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[var(--color-text-dim)]">
              Lei&apos;s Growth System v2.0
            </span>
          </div>

          {/* 主标题 */}
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
            用 <span className="gradient-text">AI</span>
            <span className="text-white/40">，</span>
            <br className="sm:hidden" />
            管理整个人生系统
          </h1>

          {/* 副标题 */}
          <p className="text-sm sm:text-base text-[var(--color-text-muted)] font-mono max-w-lg mx-auto leading-relaxed">
            基于 Obsidian + AI 助手的全场景成长管理体系
            <br className="hidden sm:inline" />
            <span className="text-[var(--color-text-dim)]">— 全景图可交互，点击探索 →</span>
          </p>
        </div>
      </section>

      {/* ─── 交互式全景图（核心） ─── */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-14">
        <div className="sci-fi-card p-4 sm:p-6 overflow-hidden">
          <InteractivePanorama />
        </div>
      </section>

      {/* ─── 六大模块（精简入口） ─── */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-14">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-[var(--color-text-dim)]">
            Growth Modules
          </h2>
          <span className="hidden sm:inline text-[10px] font-mono text-[var(--color-text-dim)]/40">
            6 modules · all active
          </span>
        </div>

        {/* 3×2 网格，更紧凑 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => (
            <ModuleCard key={m.id} module={m} />
          ))}
        </div>
      </section>

      {/* ─── Toolchain（极简一行） ─── */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16">
        <div className="section-title">Toolchain</div>
        <div className="flex flex-wrap gap-2.5">
          {[
            { name: 'Obsidian', color: '#a855f7' },
            { name: 'QClaw', color: '#00f0ff' },
            { name: '微信', color: '#34d399' },
            { name: '飞书', color: '#3b82f6' },
            { name: 'Claude', color: '#f59e0b' },
            { name: 'Vercel', color: '#f87171' },
          ].map((t) => (
            <span
              key={t.name}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-mono border transition-colors"
              style={{
                background: `${t.color}08`,
                borderColor: `${t.color}20`,
                color: t.color,
              }}
            >
              <span className="w-1 h-1 rounded-full" style={{ background: t.color }} />
              {t.name}
            </span>
          ))}
        </div>
      </section>
    </>
  )
}
