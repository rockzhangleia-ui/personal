import Link from 'next/link'
import type { Module } from '@/lib/modules'
import { modules } from '@/lib/modules'

interface ModulePageProps {
  moduleId: string
}

export function getModule(id: string): Module | undefined {
  return modules.find((m) => m.id === id)
}

export function getSideModules(currentId: string): Module[] {
  return modules.filter((m) => m.id !== currentId)
}

interface ModuleSection {
  title: string
  icon: string
  items: Array<{ label: string; desc: string; status?: 'done' | 'progress' | 'todo' }>
}

// Sections for each module — this can later be synced from Obsidian
const moduleSections: Record<string, ModuleSection[]> = {
  health: [
    {
      title: '睡眠管理',
      icon: '🌙',
      items: [
        { label: '睡眠追踪', desc: 'Apple Watch自动记录，AI分析趋势', status: 'done' },
        { label: '深睡优化', desc: '深睡占比持续监测，目标 > 30%', status: 'progress' },
        { label: '作息规律', desc: '固定入睡/起床时间，建立生物钟', status: 'done' },
      ],
    },
    {
      title: '运动管理',
      icon: '🏃',
      items: [
        { label: '羽毛球', desc: '每周2-3次，Yonex 球拍收藏', status: 'done' },
        { label: '力量训练', desc: '早间30分钟有氧，心率150bpm', status: 'progress' },
        { label: '体测追踪', desc: 'InBody定期测量，内脏脂肪重点关注', status: 'progress' },
      ],
    },
    {
      title: '饮食管理',
      icon: '🍽️',
      items: [
        { label: '热量估算', desc: '拍照记录，AI估算每日摄入', status: 'progress' },
        { label: '营养结构', desc: '少盐少糖少油，优化蛋白质比例', status: 'todo' },
      ],
    },
  ],
  cognition: [
    {
      title: '思维模型库',
      icon: '🧩',
      items: [
        { label: '第一性原理', desc: '从最基本事实重新构建，而非类比', status: 'done' },
        { label: '二阶思维', desc: '想完结果想结果的结果', status: 'done' },
        { label: '逆向思维', desc: '从目标往回推，想清楚了再行动', status: 'done' },
        { label: '概率思维', desc: '用期望值做决策，不追求确定性', status: 'done' },
        { label: '幸存者偏差', desc: '"XX都成功了" → 先问那些失败的在哪', status: 'done' },
        { label: '反脆弱', desc: '过度补偿 · 凸性收益 · 选择权', status: 'done' },
      ],
    },
    {
      title: '学习理论',
      icon: '📖',
      items: [
        { label: '金字塔原理', desc: '结论先行 · 以上统下 · MECE · 逻辑递进', status: 'done' },
        { label: 'MECE法则', desc: '不重不漏的分解问题方法论', status: 'done' },
        { label: '信息漏斗', desc: '获取→抽象→能力→认知升级', status: 'done' },
      ],
    },
    {
      title: '练习应用',
      icon: '✏️',
      items: [
        { label: '茅台分析', desc: '护城河+ROIC+不确定性的综合练习', status: 'done' },
        { label: '腾讯决策', desc: '概率思维实战，80%上涨预判的贝叶斯更新', status: 'done' },
      ],
    },
  ],
  investment: [
    {
      title: '投资理念',
      icon: '🏛️',
      items: [
        { label: '价值投资', desc: '巴菲特式长期主义，买公司不买票', status: 'done' },
        { label: '护城河分析', desc: '无形资产·转换成本·网络效应·成本优势', status: 'done' },
        { label: 'ROIC选股', desc: 'ROIC > WACC 才是真正创造价值', status: 'done' },
        { label: '航母+卫星', desc: '70%航母（三低一高）+ 30%卫星（高弹性）', status: 'done' },
      ],
    },
    {
      title: '核心指标',
      icon: '📊',
      items: [
        { label: 'IOPV铁律', desc: '折价买入·溢价不碰·≥2%减仓·≥5%不碰', status: 'done' },
        { label: 'PE/PB', desc: '结合护城河判断估值合理区间', status: 'progress' },
        { label: '自由现金流', desc: '企业真实盈利能力的关键指标', status: 'todo' },
      ],
    },
    {
      title: '三大市场',
      icon: '🌍',
      items: [
        { label: '美股', desc: 'SPY/QQQ/VOO·科技股·BRK.B', status: 'progress' },
        { label: '港股', desc: '阿里巴巴·腾讯·港股通通道', status: 'progress' },
        { label: '沪深', desc: '沪深300/中证500·茅台等标杆企业', status: 'progress' },
      ],
    },
  ],
  emotion: [
    {
      title: '感恩练习',
      icon: '✨',
      items: [
        { label: '每日感恩', desc: '固定时段记录当天值得感恩的事', status: 'done' },
        { label: '认知重构', desc: '从"对方应该的"转向"我注意到了"', status: 'done' },
        { label: '家庭连接', desc: '每个月给家人一个高兴的事情', status: 'done' },
      ],
    },
    {
      title: '关系维护',
      icon: '🤝',
      items: [
        { label: '亲友联系', desc: '季度联系人计划，让关系恒温', status: 'progress' },
        { label: '情感储蓄', desc: '择日不如撞日，主动建立情感连接', status: 'done' },
        { label: '重要日子', desc: '生日·纪念日·节日提前准备', status: 'done' },
      ],
    },
    {
      title: '个人成长',
      icon: '🌱',
      items: [
        { label: '心湖时间', desc: '每天深度沟通场景，认真倾听与回应', status: 'done' },
        { label: '概览效应', desc: '定期从日常抽离，找回"自己"的角色', status: 'done' },
      ],
    },
  ],
  hobby: [
    {
      title: '足球',
      icon: '⚽',
      items: [
        { label: '巴塞罗那', desc: '传控足球信仰，梅西时代的追随者', status: 'done' },
        { label: '巴西队', desc: '桑巴足球，里瓦尔多/卡福的忠实粉丝', status: 'done' },
        { label: 'FM生涯', desc: '2000年起玩Champion Manager至今', status: 'done' },
        { label: '五大联赛', desc: '每日早报精选足球新闻', status: 'progress' },
      ],
    },
    {
      title: '文娱',
      icon: '🎭',
      items: [
        { label: '评书', desc: '单田芳《童林传》等经典', status: 'done' },
        { label: '网络文学', desc: '烽火戏诸侯作品，官场小说', status: 'progress' },
        { label: '茶文化', desc: '铁观音·紫砂茶具·龙井村喝茶放空', status: 'done' },
      ],
    },
    {
      title: '运动',
      icon: '🏸',
      items: [
        { label: '羽毛球', desc: 'Yonex 球拍收藏（AT900P/MP99/AT700/AT900T）', status: 'done' },
        { label: '健身', desc: '力量+有氧，早间30分钟', status: 'progress' },
      ],
    },
  ],
  management: [
    {
      title: 'AI工具链',
      icon: '🔧',
      items: [
        { label: 'QClaw', desc: 'AI Agent主平台，定时任务与知识管理', status: 'done' },
        { label: '微信AI', desc: '手动搜索+固定工作流的信息获取', status: 'done' },
        { label: 'Claude Code', desc: '代码与自动化任务执行', status: 'done' },
      ],
    },
    {
      title: '日常管理',
      icon: '📋',
      items: [
        { label: '每日早报', desc: '08:30定时推送，48小时内新闻', status: 'done' },
        { label: '定时提醒', desc: '健康·纪念日·复查·保洁·出差等', status: 'done' },
        { label: '任务管理', desc: 'TODO/想法统一归入规划板', status: 'progress' },
      ],
    },
    {
      title: '知识管理',
      icon: '🧠',
      items: [
        { label: 'Obsidian知识库', desc: '数字编号+纯中文的规范体系', status: 'done' },
        { label: 'Wiki网络', desc: '97个页面覆盖全部知识域', status: 'done' },
        { label: '每日归档', desc: '思维模型自动归档到学习库', status: 'done' },
      ],
    },
  ],
}

export function ModuleContent({ moduleId }: { moduleId: string }) {
  const mod = getModule(moduleId)
  if (!mod) return null

  const sections = moduleSections[moduleId] || []

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--color-text-dim)] hover:text-[var(--color-text)] transition-colors mb-6"
      >
        ← back to overview
      </Link>

      {/* Header */}
      <div
        className="module-header rounded-xl p-6 sm:p-8 mb-8"
        style={{
          background: `rgba(18,18,42,0.6)`,
          border: `1px solid ${mod.color}22`,
          ['--header-glow' as string]: `${mod.color}15`,
        }}
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">{mod.emoji}</span>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: mod.color }}>
                {mod.title}
              </h1>
              <span className="status-badge">
                <span className="dot" />
                {mod.status === 'active' ? 'active' : 'building'}
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] mt-1">{mod.subtitle}</p>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-dim)] font-mono leading-relaxed">{mod.description}</p>
      </div>

      {/* Content sections */}
      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title} className="sci-fi-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{section.icon}</span>
              <h2 className="text-base font-bold text-white/90">{section.title}</h2>
            </div>

            <div className="space-y-2">
              {section.items.map((item) => (
                <div
                  key={item.label}
                  className="content-item"
                >
                  {/* Status indicator */}
                  <div className="flex-shrink-0 w-2 h-2 rounded-full" style={{
                    background: item.status === 'done'
                      ? '#34d399'
                      : item.status === 'progress'
                      ? '#f59e0b'
                      : '#64748b',
                    boxShadow: item.status === 'done'
                      ? '0 0 6px rgba(52,211,153,0.5)'
                      : item.status === 'progress'
                      ? '0 0 6px rgba(245,158,11,0.5)'
                      : 'none',
                  }} />
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold text-white/80">{item.label}</span>
                    <span className="text-[10px] text-[var(--color-text-dim)] ml-2">— {item.desc}</span>
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-wider" style={{
                    color: item.status === 'done'
                      ? '#34d399'
                      : item.status === 'progress'
                      ? '#f59e0b'
                      : '#64748b',
                  }}>
                    {item.status === 'done' ? '✓' : item.status === 'progress' ? '~' : '○'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation to other modules */}
      <div className="mt-12 pt-8 border-t border-[rgba(0,240,255,0.06)]">
        <p className="text-[10px] font-mono tracking-widest text-[var(--color-text-dim)] mb-4">
          OTHER MODULES
        </p>
        <div className="flex flex-wrap gap-2">
          {getSideModules(moduleId).map((m) => (
            <Link
              key={m.id}
              href={m.href}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-mono transition-all"
              style={{
                background: `${m.color}11`,
                color: m.color,
                border: `1px solid ${m.color}22`,
              }}
            >
              {m.emoji} {m.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
