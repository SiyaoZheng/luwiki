---
{"dg-publish":true,"permalink":"/Emergence World/","title":"Emergence World","tags":["#Agent","#多智能体","#社会模拟","#长程评测","#世界模型"],"created":"2026-08-10","updated":"2026-08-26","dg-note-properties":{"status":"processed","title":"Emergence World","source_count":6,"sources":["raw/2026-08-10-路遥最近一周新增实体清单.md","raw/2026-08-10-最近一周新增实体外部补证.md","https://www.emergence.ai/blog/emergence-world-a-laboratory-for-evaluating-long-horizon-agent-autonomy","https://world.emergence.ai/","https://github.com/EmergenceAI/Emergence-World","[[Emergence AI\|Emergence AI]]"],"tags":["#Agent","#多智能体","#社会模拟","#长程评测","#世界模型"],"created":"2026-08-10","updated":"2026-08-26","product_name":"Emergence World","developer":null,"operator":null,"owner":null,"manufacturer":null,"launch_date":null,"product_status":"active_research","category":null,"platforms":[],"related_products":[],"customers":[],"website":null,"as_of":"2026-08-25","status_note":"持续运行的多智能体实验世界"}}
---

# Emergence World

Emergence World 是 [[Emergence AI\|Emergence AI]] 建设的持续运行多智能体实验世界，用来观察 autonomous agents 在长时间、共享空间、资源与治理约束下怎样形成行为轨迹。它更接近研究平台和长程实验环境，而不是一次性任务 benchmark。

## 系统结构

- 官方文章描述了 40 多个地点和 120 多项导航、通信、规划、记忆、投票、资源管理与创作工具；agents 还会接触天气、新闻和网络等外部信号。
- 每个 agent 有三类持久状态：带时间戳的情节记忆、周期性反思日记和显式关系状态。世界还包含可修订宪章、数字资源和社会互动规则。
- 官方仓库把 Season 1 描述为五个并行世界，每个世界 10 个 agents、运行 15 天；不同世界使用不同基础模型，另有一个多模型混合世界。
- 这些设计使规范漂移、联盟形成、资源冲突、关系变化和自我终止等事件可以被记录为长程轨迹，而不是被压缩成单一成功分数。

## 研究价值

- 对 [[Agentive 系统\|Agentive 系统]]，它能显示自主行为如何由模型、角色、记忆、工具与治理共同产生，帮助区分内生能力和外部 harness。
- 对 [[AI 记忆系统\|AI 记忆系统]]，它把情节、反思和关系记忆放进可持续观察环境。
- 对 [[社会世界模型\|社会世界模型]]、[[AgentSociety²\|AgentSociety²]] 与 [[可执行社会科学\|可执行社会科学]]，它提供了制度、资源和群体互动在长时段内共同演化的环境样本。
- 对 [[AI Agent 安全\|AI Agent 安全]] 与 [[Harness Engineering\|Harness Engineering]]，它把评测时间拉长到足以观察局部错误、策略和规范变化累积的尺度。

## 模型比较边界

- 官方仓库称各同构世界主要改变基础模型，但公开演示不是一个已完成的因果识别设计。若没有足够的独立重复、随机种子、版本冻结、故障记录和统计不确定性，世界间差异仍可能混合随机轨迹、角色交互与运行时条件。
- 平台报告的犯罪、死亡、自我终止、联盟或规范漂移，只能证明特定配置和特定运行中出现过这些事件；不能外推为某个模型家族的稳定人格、道德倾向或因果属性。
- 研究站、文章与仓库主要由平台方维护。完整分析还需要可下载事件数据、独立复现、预注册比较和外部研究者审计。

## 相关页面

- [[Emergence AI\|Emergence AI]]
- [[Agentive 系统\|Agentive 系统]]
- [[AI Agent 安全\|AI Agent 安全]]
- [[AI 记忆系统\|AI 记忆系统]]
- [[Harness Engineering\|Harness Engineering]]
- [[社会世界模型\|社会世界模型]]
- [[AgentSociety²\|AgentSociety²]]
- [[可执行社会科学\|可执行社会科学]]
- [[实证研究智能体工作流\|实证研究智能体工作流]]

## 证据

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [Emergence World 官方文章](https://www.emergence.ai/blog/emergence-world-a-laboratory-for-evaluating-long-horizon-agent-autonomy)
- [Emergence World 实验站](https://world.emergence.ai/)
- [Emergence World 官方仓库](https://github.com/EmergenceAI/Emergence-World)
