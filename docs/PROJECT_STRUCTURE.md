# 项目结构与改版框架

## 当前保留结构

```text
ripk1/
├─ app/
│  ├─ layout.tsx        # 根布局、站点元数据与全局资源
│  ├─ page.tsx          # 当前单页内容与页面区块
│  └─ globals.css       # 全局设计变量、布局和响应式样式
├─ public/              # 页面实际引用的图片、视频与站点图标
├─ docs/
│  └─ PROJECT_STRUCTURE.md
├─ .github/workflows/
│  └─ pages.yml         # 唯一的 GitHub Pages 构建部署流程
├─ next.config.ts       # 静态导出与仓库 basePath 配置
├─ postcss.config.mjs   # Tailwind CSS / PostCSS 配置
├─ eslint.config.mjs    # Next.js ESLint 配置
├─ tsconfig.json        # TypeScript 配置及目录别名
└─ package.json         # 依赖与开发命令
```

当前项目是一套单页静态科研网站，不需要数据库、服务端 Worker 或第二套 Vite 构建链路。

## 后续整体优化建议框架

改版时建议按下面的职责拆分，避免继续扩大 `page.tsx` 和 `globals.css`：

```text
app/
├─ layout.tsx
├─ page.tsx             # 只负责组合页面区块
└─ globals.css          # 设计令牌、基础样式、少量全局规则
components/
├─ layout/              # Header、Footer、SectionShell
├─ sections/            # Hero、Finding、Architecture、Methods 等
└─ ui/                  # Button、Metric、Figure、Card 等通用组件
content/
└─ site-content.ts      # 文案、指标、图注和导航数据
lib/
└─ assets.ts            # basePath 与静态资源路径工具
public/
├─ images/
└─ media/
```

推荐按以下顺序推进整体优化：

1. 先确定信息架构、区块顺序和中英文策略。
2. 抽离内容数据与静态资源路径，降低组件内硬编码。
3. 建立颜色、字体、间距、容器和断点等设计令牌。
4. 按区块拆分组件，再沉淀可复用的 Figure、Metric 和 Card。
5. 最后处理动效、移动端、无障碍、媒体性能与 SEO。

## 约束与边界

- 保持 `output: "export"`，页面逻辑必须兼容静态导出。
- GitHub Pages 部署需要 `NEXT_PUBLIC_BASE_PATH=/ripk1`。
- 新增公共资源应通过统一资源路径工具引用，避免仓库子路径下出现 404。
- `node_modules/`、`.next/`、`out/` 等均为可重建目录，不应提交到 Git。
