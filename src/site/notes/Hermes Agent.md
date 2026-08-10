---
{"dg-publish":true,"permalink":"/Hermes Agent/","title":"Hermes Agent","tags":["Agent","开源","Harness","记忆系统","NousResearch"],"created":"2026-08-07","updated":"2026-08-09","dg-note-properties":{"status":"seed","title":"Hermes Agent","source_count":3,"sources":["raw/2026-08-07-luyao-b044-214-当我们在讨论-Harness-的时候，我们在讨论什么-深度对谈-MiniMax-×-Hermes-Agent-b6fcc9b9.md","https://github.com/NousResearch/hermes-agent","https://hermes-agent.nousresearch.com/docs/"],"tags":["Agent","开源","Harness","记忆系统","NousResearch"],"created":"2026-08-07","updated":"2026-08-09"}}
---

# Hermes Agent

Hermes Agent 是 Nous Research 相关的开源 agent 框架节点。它把模型接入工具编排、主循环、状态管理、错误处理和记忆/技能系统，使模型能够在真实任务环境中持续执行。

## 观察

- Hermes Agent 的产品定位不是单纯模型，而是 [[Harness Engineering\|Harness Engineering]] 层：如果把模型看作“大脑”，agent framework 就承担“手”、工具和运行时协调。
- 记忆和技能是其叙事核心。成功工作流可以被保存为技能，从而提高跨任务和跨模型的一致性；这与 [[AI 记忆系统\|AI 记忆系统]] 和 [[自进化智能体\|自进化智能体]] 相邻。
- Hermes 与 OpenClaw 的差异被来源归纳为可用性、快速部署、记忆系统和社区品牌。这提示 agent 框架竞争不只比 benchmark，也比启动成本、工作流复现和用户信任。
- Hermes 与 MiniMax 的互动说明开源模型和 agent 框架会相互塑造：模型需要在 agent harness 中表现更好，框架则需要适配不同模型的能力和成本结构。
- “把成功路径蒸馏成 skill”是 agent 框架进入生产场景的关键动作。它把一次性执行结果变成可复用工作流，而不是每次都从头探索。

## 边界

- 来源中的 token 消耗、模型排名、抄袭争议和未来模型计划都属于访谈口径，需要后续用项目仓库、官方公告或第三方评测核验。
- Hermes Agent 的“自我进化”更应理解为技能、记忆和工作流改进，不应直接等同于开放世界自主性。

## 相关页面

- [[Harness Engineering\|Harness Engineering]]
- [[自进化智能体\|自进化智能体]]
- [[AI 记忆系统\|AI 记忆系统]]
- [[Agentic 软件开发工作流\|Agentic 软件开发工作流]]
- [[yoyo\|yoyo]]
- [[Nous Research\|Nous Research]]

## 三同关系线索

- 机构关系是 [[Nous Research\|Nous Research]]。GitHub 仓库和官方文档均把 Hermes Agent 放在 Nous Research 组织下，适合写成开源项目与研究/模型社区的组织关系。
- 同事/团队线索目前不写具体个人：仓库能证明贡献者网络和开源协作，但不能直接推出核心成员的学校、前任职或私人关系。
- 与 [[Raft\|Raft]] 的关系应写成产品/网络集成线索，而不是三同关系；release notes 提到 Hermes reached Raft agent network 时，才能作为工具生态互操作证据。

## 证据

- 原始资料快照（本地归档）
- [GitHub: NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)
- [Hermes Agent documentation](https://hermes-agent.nousresearch.com/docs/)
