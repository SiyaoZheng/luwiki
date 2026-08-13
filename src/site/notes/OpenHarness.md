---
{"dg-publish":true,"permalink":"/OpenHarness/","title":"OpenHarness","tags":["#Agent","#Harness","#开源","#软件工程","#多智能体"],"created":"2026-08-07","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"OpenHarness","source_count":6,"sources":["raw/2026-08-07-luyao-b048-238-港大的OpenHarness太硬了-刚开源就狂揽3.9k星标-6a16dea7.md","https://github.com/HKUDS/OpenHarness","https://github.com/HKUDS","raw/2026-08-10-全库硬未决最终收口-batch-033.md","https://raw.githubusercontent.com/HKUDS/OpenHarness/main/LICENSE","https://github.com/HKUDS/OpenHarness/releases"],"tags":["#Agent","#Harness","#开源","#软件工程","#多智能体"],"created":"2026-08-07","updated":"2026-08-10"}}
---

# OpenHarness

OpenHarness 是一个开源 agent harness 项目节点。GitHub 仓库位于 HKUDS 组织下，本 wiki 将项目归入[[香港大学数据智能实验室\|香港大学数据智能实验室]]的开源生态。许可证、维护活动、模型适配和文档化安全机制已在 2026-08-10 用官方仓库核验；star 数、代码量和功能覆盖比例仍只按来源口径保留。

## 观察

- OpenHarness 把 coding agent 拆成 Agent Loop、Toolkit、Context/Memory、Governance 和 Swarm 五个模块，说明 [[Harness Engineering\|Harness Engineering]] 正在从抽象理念变成可读源码架构。
- Agent Loop 的关键不只是 while 循环，而是状态机、流式工具调用、依赖分析、并行执行、重试、token 统计和错误回传。
- Toolkit 让 agent 能读写文件、执行 shell、搜索代码、访问 Web 和接入 MCP；这把能力问题直接推向 [[AI Agent 安全\|AI Agent 安全]] 中的权限、路径、命令和审计边界。
- Context/Memory 使 agent 能读取项目规范、压缩上下文并维护跨会话记忆；这与 [[AI 记忆系统\|AI 记忆系统]] 中“记住怎样做对”和“记住项目决策”的方向一致。
- Governance 模块把权限模式、路径/命令规则、pre/post tool hooks 和审计组织在一起，显示生产级 agent 需要可配置的安全边界，而不是只靠模型自律。
- Swarm 模块把多 agent 协作、父子任务、依赖调度、状态同步和结果合并放进同一框架，说明 agentic 开发正在从单 agent 辅助转向团队式编排。

## 边界

- 当前页面先记录架构线索，不把“复刻 Claude Code 98% 功能”或 GitHub star 数当作质量结论。
- 截至 2026-08-10，官方仓库采用 MIT 许可证，README 列出 Anthropic/OpenAI-compatible、Claude/Codex subscription、Copilot 与 Ollama 等接入路径，也列出多级权限、路径/命令规则、tool hooks、交互审批及 sensitive-path protection。Releases 页面可见 2026-05-07 的 v0.1.9，主分支 README 还有未发布 dry-run 变更，足以说明项目仍有公开维护活动。
- 官方 README 自报 114 个测试通过和 6 个 E2E suites，但本轮没有执行本地安装、生产负载测试或独立安全审计，不能据此推出生产成熟度。只有 GitHub Security Advisory、新 release、独立复现或正式审计报告出现时，才重开安全与可用性结论。

## 相关页面

- [[香港大学数据智能实验室\|香港大学数据智能实验室]]
- [[Harness Engineering\|Harness Engineering]]
- [[Agentic 软件开发工作流\|Agentic 软件开发工作流]]
- [[AI Agent 安全\|AI Agent 安全]]
- [[AI 记忆系统\|AI 记忆系统]]

## 三同关系线索

- `项目—实验室`：GitHub 组织页和 OpenHarness 仓库支持其属于 HKUDS 开源生态，连接到[[香港大学数据智能实验室\|香港大学数据智能实验室]]；大学层级继续由实验室机构页承接，不把项目直接写成大学行政单位。
- 本页把同事/项目线索限定为 HKUDS 既有开源项目群，例如 LightRAG、nanobot、CLI-Anything 等与 OpenHarness 共享组织背景；GitHub stars 不支持个人能力或学校网络推断。
- OpenHarness 页的三同重点是“同一实验室/开源组织的项目关系”，不是公司融资或私人同学关系。

## 证据

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [GitHub: HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness)
- [GitHub: HKUDS](https://github.com/HKUDS)
- [OpenHarness LICENSE](https://raw.githubusercontent.com/HKUDS/OpenHarness/main/LICENSE)
- [OpenHarness releases](https://github.com/HKUDS/OpenHarness/releases)
