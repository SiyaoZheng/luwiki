---
{"dg-publish":true,"permalink":"/Frontend Slides/","title":"Frontend Slides","tags":["Agent","演示文稿","HTML","Skills","前端"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"Frontend Slides","source_count":5,"sources":["raw/2026-08-10-路遥最近一周新增实体清单.md","raw/2026-08-10-最近一周新增实体外部补证.md","https://github.com/zarazhangrui/frontend-slides","https://github.com/zarazhangrui/frontend-slides/blob/main/SKILL.md","[[Zara Zhang\|Zara Zhang]]"],"tags":["Agent","演示文稿","HTML","Skills","前端"],"created":"2026-08-10","updated":"2026-08-10"}}
---

# Frontend Slides

Frontend Slides 是 [[Zara Zhang\|Zara Zhang]] 维护的开源 coding-agent skill，用前端代码生成单文件 HTML 演示。它既可以从零构建网页幻灯片，也可以抽取 PowerPoint 的文本、图片和备注后重建为 HTML。

## 工作方式

- skill 先生成视觉预览，让用户通过“看见并选择”确定风格，再进入完整 deck 生成。
- 输出采用固定 1920×1080 的 16:9 画布，整体缩放到浏览器视口；HTML 以行内 CSS/JavaScript 为主，不依赖前端构建框架。
- PowerPoint 转换由脚本抽取已有内容与资产，再在网页媒介中重新布局；仓库还提供浏览器渲染、PDF 导出和可选网页部署路径。
- 项目以 MIT 许可发布，可作为 Claude Code plugin 使用；其他具备文件和 shell 能力的 coding agents（包括 [[Codex CLI\|Codex CLI]]）也可直接读取核心 `SKILL.md`。

## 边界

- Frontend Slides 不是 PPTX 原位编辑器。它不会在原 PowerPoint 对象树中进行局部修改，也不保证动画、母版、字体、图表、备注或跨页关系一比一保真。
- “转换 PowerPoint”应理解为把内容和资产迁移到 HTML，而不是无损回写 PPTX；原文件应保持只读或另存副本，输出需逐页渲染核对。
- star、fork 和演示画面是流行度与展示信号，不是内容准确性、无障碍、跨设备稳定性或设计质量的独立评测。
- 使用部署脚本公开演示前，应检查私人图片、备注、引用、外部字体和链接；PDF 导出是静态快照，不保留网页动画和全部交互。

## 相关页面

- [[Zara Zhang\|Zara Zhang]]
- [[Codex CLI\|Codex CLI]]
- [[Agentic 软件开发工作流\|Agentic 软件开发工作流]]
- [[Harness Engineering\|Harness Engineering]]
- [[AI Agent 安全\|AI Agent 安全]]

## 证据

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [Frontend Slides 官方仓库](https://github.com/zarazhangrui/frontend-slides)
- [Frontend Slides 核心 skill](https://github.com/zarazhangrui/frontend-slides/blob/main/SKILL.md)
