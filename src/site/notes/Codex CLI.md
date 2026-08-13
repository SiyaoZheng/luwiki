---
{"dg-publish":true,"permalink":"/Codex CLI/","title":"Codex CLI","tags":["#OpenAI","#Codex","#CLI","#Agent","#开发工具"],"created":"2026-08-07","updated":"2026-08-10","dg-note-properties":{"status":"seed","title":"Codex CLI","source_count":5,"sources":["raw/2026-08-07-luyao-b006-26-Inspect,-edit,-and-run-code-from-your-terminal-2c5be618.md","[[Frontend Slides\|Frontend Slides]]","[[CC Switch\|CC Switch]]","raw/2026-08-10-路遥最近一周新增实体清单.md","raw/2026-08-10-最近一周新增实体外部补证.md"],"tags":["#OpenAI","#Codex","#CLI","#Agent","#开发工具"],"created":"2026-08-07","updated":"2026-08-10"}}
---

# Codex CLI

Codex CLI 是 OpenAI 的终端内编码 Agent 工具。它把代码阅读、编辑、命令执行、审查、脚本化执行和云端交接放进同一个终端工作流，使开发者可以在本地仓库里直接把任务交给 Codex。

## 观察

- Codex CLI 的核心场景不是聊天，而是在本地 repository 中检查文件、修改代码、运行已有工具并保留可审计的终端循环。
- 官方文档把控制权作为产品重点：用户可以选择模型、reasoning effort、权限边界和具体命令，并通过 `/status`、`/permissions`、`/model`、`/review` 等命令管理当前会话。
- `codex exec`、脚本和 CI 让 Codex 从交互式工具扩展到可重复工作流；`codex resume`、`codex --image`、subagents、`codex --search`、`codex cloud`、`codex mcp` 则把上下文恢复、视觉输入、任务拆分、联网搜索、云端运行和外部工具接入串在一起。
- 对这个 wiki 来说，Codex CLI 是 Agent 工作流本身的工具节点：它解释了为什么 `AGENTS.md`、本地权限、raw 快照、日志和回滚习惯需要作为知识工作基础设施保存。
- [[Frontend Slides\|Frontend Slides]] 说明 Codex 可以直接读取通用 `SKILL.md` 并把前端能力用于 HTML 演示生成或 PowerPoint 到网页的转换；这是外部技能扩展，不是 Codex 自带的 PPTX 原位编辑能力。
- [[CC Switch\|CC Switch]] 可以从 Codex 外部管理 provider 与本地路由，并会改写 Codex 的生效配置。它不是 Codex CLI 的官方配置层；切换前后需要备份、差异审计、重启/启动验证，并单独保护 API key 与 OAuth 登录态。

## 相关页面

- [[Agentic 软件开发工作流\|Agentic 软件开发工作流]]
- [[Harness Engineering\|Harness Engineering]]
- [[Frontend Slides\|Frontend Slides]]
- [[CC Switch\|CC Switch]]

## 证据

- 原始资料快照（本地归档）
- [OpenAI Codex CLI 官方文档](https://developers.openai.com/codex/cli)
- [[Frontend Slides\|Frontend Slides]]
- [[CC Switch\|CC Switch]]
- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
