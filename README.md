# RIPK1 Kinase Activity · Necrosome Architecture

RIPK1 激酶活性与坏死小体结构的交互式科研展示网站。项目采用 Next.js App Router，构建为纯静态站点并部署到 GitHub Pages。

## 本地开发

环境要求：Node.js 22.13 或更高版本。

```bash
npm ci
npm run dev
```

访问 `http://localhost:3000`。

## 常用命令

```bash
npm run dev        # 启动本地开发服务
npm run lint       # ESLint 检查
npm run typecheck  # TypeScript 类型检查
npm run build      # 生成静态站点到 out/
npm run check      # 依次执行上述三项质量检查
```

## 部署

推送到 `main` 后，[GitHub Actions](.github/workflows/pages.yml) 会设置仓库子路径、构建静态站点并部署到：

<https://weslin8817.github.io/ripk1/>

## 项目结构

当前目录职责与后续整体改版建议见 [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md)。
