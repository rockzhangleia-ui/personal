export interface Module {
  id: string
  title: string
  subtitle: string
  description: string
  emoji: string
  color: string
  href: string
  features: string[]
  status: 'active' | 'building' | 'planned'
}

export const modules: Module[] = [
  {
    id: 'health',
    title: '健康管理',
    subtitle: '数据驱动的科学健康',
    description: '通过AI助手追踪和分析健康数据，建立科学的健康管理闭环',
    emoji: '💪',
    color: '#00f0ff',
    href: '/module/health',
    features: [
      '睡眠数据追踪与优化建议',
      '运动计划制定与进度监控',
      '饮食记录与营养分析',
      '身体指标趋势可视化',
    ],
    status: 'active',
  },
  {
    id: 'cognition',
    title: '认知学习',
    subtitle: '思维模型与知识体系',
    description: '系统化的思维模型学习和知识管理，构建个人认知升级体系',
    emoji: '🧠',
    color: '#a855f7',
    href: '/module/cognition',
    features: [
      '100+ 思维模型学习与实践',
      '认知偏差识别与应对',
      '决策框架与概率思维',
      '每日认知练习与复盘',
    ],
    status: 'active',
  },
  {
    id: 'investment',
    title: '投资管理',
    subtitle: '长期主义价值投资',
    description: '基于价值投资理念的系统性投资学习与实践',
    emoji: '💰',
    color: '#f59e0b',
    href: '/module/investment',
    features: [
      '护城河分析与公司研究',
      'ROIC / PE / IOPV 核心指标',
      '航母+卫星投资组合策略',
      '投资理念与方法论沉淀',
    ],
    status: 'active',
  },
  {
    id: 'emotion',
    title: '情感管理',
    subtitle: '感恩练习与关系维护',
    description: '通过结构化的情感管理，提升生活幸福感和人际关系质量',
    emoji: '❤️',
    color: '#f87171',
    href: '/module/emotion',
    features: [
      '每日感恩练习记录',
      '家庭成员情感连接',
      '重要日子提醒与准备',
      '情感目标设定与追踪',
    ],
    status: 'active',
  },
  {
    id: 'hobby',
    title: '兴趣爱好',
    subtitle: '多元兴趣与终身学习',
    description: '培养多元兴趣，丰富精神生活，保持终身学习的热情',
    emoji: '🎯',
    color: '#34d399',
    href: '/module/hobby',
    features: [
      '足球赛事追踪与分析',
      '评书与有声内容消费',
      '羽毛球运动与技能提升',
      '阅读笔记与知识沉淀',
    ],
    status: 'active',
  },
  {
    id: 'management',
    title: '个人管理',
    subtitle: 'AI辅助的效率提升',
    description: '利用AI工具优化个人管理流程，提升生活和工作效率',
    emoji: '🤖',
    color: '#6366f1',
    href: '/module/management',
    features: [
      '每日早报与新闻摘要',
      '定时提醒与任务管理',
      '文档自动化整理',
      '心湖时间深度思考',
    ],
    status: 'active',
  },
]
