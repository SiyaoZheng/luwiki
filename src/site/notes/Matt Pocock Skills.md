---
{"dg-publish":true,"permalink":"/Matt Pocock Skills/","title":"Matt Pocock Skills","tags":["Agent","Skills","软件开发工作流","计划","Issue"],"created":"2026-08-07","updated":"2026-08-07","dg-note-properties":{"status":"seed","title":"Matt Pocock Skills","source_count":3,"sources":["raw/2026-08-07-luyao-b007-34-Github-171k-star-的-MattPocock-Skills-又更新了-a9bca9ae.md","https://www.aihero.dev/skills-wayfinder","https://github.com/mattpocock/skills"],"tags":["Agent","Skills","软件开发工作流","计划","Issue"],"created":"2026-08-07","updated":"2026-08-07"}}
---

# Matt Pocock Skills

Matt Pocock Skills 是一组面向 AI coding agent 的可组合工作流技能。它不像强约束的端到端开发框架那样默认接管全部流程，而是把 grilling、to-spec、to-tickets、wayfinder 等技能作为用户可选择的工程工具。

## 观察

- `/wayfinder` 是上游规划技能：当目标大致清楚但路径仍然模糊、单个 agent session 容不下全部决策时，它把工作整理成共享地图和 decision tickets。
- Wayfinder 的边界很重要：它解决决策，不交付最终实现；地图清晰后再交给 to-spec、to-tickets 和后续实现流程。
- 这套技能体现了 [[Agentic 软件开发工作流\|Agentic 软件开发工作流]] 的一个分支：把软件开发中的不确定性显性化，先用地图、frontier、阻塞关系和决策记录管理，再让 agent 执行。
- 与“全自动开发”叙事相比，Matt Pocock Skills 更接近人类工程经理熟悉的分解方式：问题澄清、决策沉淀、任务拆分、实现和审查分阶段进行。

## 相关页面

- [[Agentic 软件开发工作流\|Agentic 软件开发工作流]]
- [[Codex CLI\|Codex CLI]]

## 证据

- 原始资料快照（本地归档）
- [The /wayfinder Skill](https://www.aihero.dev/skills-wayfinder)
- [GitHub: mattpocock/skills](https://github.com/mattpocock/skills)
