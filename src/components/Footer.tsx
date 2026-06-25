export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,240,255,0.06)] mt-16 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-dim)] font-mono">
            <span className="text-[#00f0ff]/40">$</span>
            <span>© 2026 · personal growth system</span>
            <span className="hidden sm:inline text-[var(--color-text-dim)]/40">|</span>
            <span className="hidden sm:inline">powered by AI</span>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-mono text-[var(--color-text-dim)]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_4px_#00f0ff]" />
              obsidian
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] shadow-[0_0_4px_#a855f7]" />
              next.js
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_4px_#f59e0b]" />
              vercel
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
