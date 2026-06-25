'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Module } from '@/lib/modules'

interface PanoramaCell {
  layer: number
  moduleId: string
  label: string
  status: 'active' | 'core' | 'planning'
}

const LAYERS = [
  { id: 1, name: '认知迭代层', short: 'L1', desc: '思维模型·认知升级·决策优化' },
  { id: 2, name: '能力应用层', short: 'L2', desc: '投资实践·健康管理·效率提升' },
  { id: 3, name: '知识结构化层', short: 'L3', desc: 'Obsidian笔记·Wiki体系·知识网络' },
  { id: 4, name: '信息获取层', short: 'L4', desc: 'AI搜索·每日早报·专题研究' },
  { id: 5, name: '工具层', short: 'L5', desc: '微信·QClaw·Obsidian·Claude' },
]

const MODULES_SHORT = [
  { id: 'health', name: '健康', icon: '💪' },
  { id: 'cognition', name: '认知', icon: '🧠' },
  { id: 'investment', name: '投资', icon: '💰' },
  { id: 'emotion', name: '情感', icon: '❤️' },
  { id: 'hobby', name: '兴趣', icon: '🎯' },
  { id: 'management', name: '管理', icon: '🤖' },
]

// 每个格子里的描述文字
const CELL_CONTENT: Record<string, string> = {
  '1-health': '思维模型指导健康决策',
  '1-cognition': '思维模型学习与认知升级',
  '1-investment': '概率思维·二阶思维投资决策',
  '1-emotion': '感恩练习·情感认知重构',
  '1-hobby': '学习方法论·兴趣驱动学习',
  '1-management': 'AI工具思维·效率认知',
  '2-health': '健康习惯养成·运动计划执行',
  '2-cognition': '思维模型实战应用',
  '2-investment': '航母+卫星策略执行',
  '2-emotion': '情感目标设定与追踪',
  '2-hobby': '足球·羽毛球·茶文化实践',
  '2-management': '定时任务·提醒系统运行',
  '3-health': '睡眠/运动/饮食数据记录',
  '3-cognition': '思维模型笔记·学习方法论',
  '3-investment': '投资理念·护城河分析笔记',
  '3-emotion': '感恩日记·情感连接记录',
  '3-hobby': '足球赛事·评书·阅读笔记',
  '3-management': 'AI交互记录·任务归档',
  '4-health': '健康资讯·营养研究',
  '4-cognition': '认知科学前沿·AI辅助学习',
  '4-investment': '财报解读·市场动态分析',
  '4-emotion': '关系维护资讯·心理学研究',
  '4-hobby': '赛事资讯·文化历史研究',
  '4-management': 'AI行业动态·工具评测',
  '5-health': 'Apple Watch·InBody·QClaw',
  '5-cognition': 'Obsidian·QClaw·AI搜索',
  '5-investment': '富途·华夏寰宇·QClaw',
  '5-emotion': '微信·日历·QClaw提醒',
  '5-hobby': '微信读书·播客·FM2026',
  '5-management': 'QClaw·微信·飞书·Claude Code',
}

export default function InteractivePanorama() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px]">
        {/* 顶部 Module 标签 */}
        <div className="grid grid-cols-[80px_repeat(6,1fr)] gap-1.5 mb-1.5">
          <div /> {/* 左上角空白 */}
          {MODULES_SHORT.map((m) => (
            <Link
              key={m.id}
              href={`/module/${m.id}`}
              className="text-center py-2 px-1 rounded-lg bg-white/[0.02] border border-[rgba(0,240,255,0.06)] hover:border-[rgba(0,240,255,0.2)] transition-all group"
            >
              <span className="text-lg block mb-0.5">{m.icon}</span>
              <span className="text-[10px] font-mono text-[var(--color-text-dim)] group-hover:text-[#00f0ff] transition-colors">
                {m.name}
              </span>
            </Link>
          ))}
        </div>

        {/* 层级格子 */}
        {LAYERS.map((layer) => (
          <div key={layer.id} className="grid grid-cols-[80px_repeat(6,1fr)] gap-1.5 mb-1.5">
            {/* 左侧层级标签 */}
            <div
              className="rounded-lg p-2 flex flex-col justify-center border border-[rgba(0,240,255,0.06)] bg-white/[0.01]"
            >
              <div className="text-[9px] font-mono text-[var(--color-text-dim)] uppercase tracking-wider">
                {layer.short}
              </div>
              <div className="text-[10px] font-bold text-white/60 leading-tight mt-0.5">
                {layer.name.replace('层', '')}
              </div>
            </div>

            {/* 6个模块格子 */}
            {MODULES_SHORT.map((m) => {
              const key = `${layer.id}-${m.id}`
              const isHovered = hovered === key
              const cellKey = `${layer.id}-${m.id}`
              const content = CELL_CONTENT[cellKey] || ''

              return (
                <Link
                  key={key}
                  href={`/module/${m.id}`}
                  className="rounded-lg p-2 border transition-all duration-200 relative group"
                  style={{
                    background: isHovered
                      ? `rgba(0,240,255,0.04)`
                      : 'rgba(255,255,255,0.005)',
                    borderColor: isHovered
                      ? 'rgba(0,240,255,0.2)'
                      : 'rgba(0,240,255,0.04)',
                  }}
                  onMouseEnter={() => setHovered(key)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* 悬停时的发光效果 */}
                  {isHovered && (
                    <div
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 15px rgba(0,240,255,0.03), 0 0 10px rgba(0,240,255,0.05)`,
                      }}
                    />
                  )}
                  <div className="text-[9px] font-mono text-[var(--color-text-dim)]/50 mb-0.5">
                    {layer.short} × {m.name}
                  </div>
                  <div className="text-[10px] text-white/50 leading-relaxed">
                    {content}
                  </div>
                  {/* 悬停箭头 */}
                  <div
                    className="absolute bottom-1 right-1.5 text-[9px] font-mono transition-opacity"
                    style={{ color: '#00f0ff', opacity: isHovered ? 0.6 : 0 }}
                  >
                    →
                  </div>
                </Link>
              )
            })}
          </div>
        ))}

        {/* 底部图例 */}
        <div className="flex items-center gap-4 mt-3 justify-center">
          <span className="text-[9px] font-mono text-[var(--color-text-dim)] tracking-wider uppercase">
            Interactive Panorama — Hover to explore · Click to enter module
          </span>
        </div>
      </div>
    </div>
  )
}
