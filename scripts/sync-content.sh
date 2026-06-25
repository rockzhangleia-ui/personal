#!/bin/bash
# ──────────────────────────────────────────────
# Obsidian → Next.js 安全内容同步脚本
# 
# 使用方式:
#   bash scripts/sync-content.sh
#
# 作用: 将 Obsidian 知识库中标记为"可公开"的
#       目录同步到网站项目的 content/ 目录中。
#       ⚠️ 仅同步安全内容，不会泄露隐私信息
# ──────────────────────────────────────────────

set -e

VAULT="/Users/leizhang/Library/Mobile Documents/iCloud~md~obsidian/Documents/lei的仓库"
PROJECT="$(cd "$(dirname "$0")/.." && pwd)"
CONTENT_DIR="$PROJECT/content"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

echo "⚡ [sync] 开始同步 Obsidian 安全内容 — $TIMESTAMP"
echo ""

# ── 清理旧内容 ──
rm -rf "$CONTENT_DIR"
mkdir -p "$CONTENT_DIR"

# ── 1. 认知思维（安全：纯方法论） ──
echo "  → 认知思维..."
rsync -a --delete \
  "$VAULT/02学习库/01认知思维/" \
  "$CONTENT_DIR/认知思维/"

# ── 2. 能力管理（安全：方法论为主） ──
echo "  → 能力管理..."
rsync -a --delete \
  "$VAULT/02学习库/02能力管理/" \
  "$CONTENT_DIR/能力管理/"

# ── 3. 金融投资 - 01投资理念（安全） ──
echo "  → 投资理念..."
if [ -d "$VAULT/02学习库/03金融投资/01投资理念" ]; then
  rsync -a --delete \
    "$VAULT/02学习库/03金融投资/01投资理念/" \
    "$CONTENT_DIR/金融投资/投资理念/"
fi

# ── 4. 兴趣爱好（安全） ──
echo "  → 兴趣爱好..."
rsync -a --delete \
  "$VAULT/02学习库/04兴趣爱好/" \
  "$CONTENT_DIR/兴趣爱好/"

# ── 5. 归档 - 全景图（安全） ──
echo "  → 归档（全景图）..."
if [ -f "$VAULT/06归档/全景图_2026-06-19_v3.png" ]; then
  cp "$VAULT/06归档/全景图_2026-06-19_v3.png" "$PROJECT/public/panorama.png"
  echo "    ↳ 全景图已更新"
fi

# ── 统计 ──
FILE_COUNT=$(find "$CONTENT_DIR" -type f -name "*.md" | wc -l | tr -d ' ')
echo ""
echo "✅ [sync] 同步完成 — 共复制 $FILE_COUNT 个文件"
echo "   路径: $CONTENT_DIR"
echo ""
echo "⚠️  提示：同步后请在项目中运行 npm run build 验证"
echo "   然后 git add . && git commit -m 'sync: update content' && git push"
