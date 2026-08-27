---
{"dg-publish":true,"permalink":"/Raft/","title":"Raft","tags":["#Agent","#协作工具","#群聊","#本地Agent","#工作流"],"created":"2026-08-07","updated":"2026-08-26","dg-note-properties":{"status":"processed","title":"Raft","source_count":11,"sources":["raw/2026-08-07-luyao-b010-50-Raft说明AI应用不会亡！-74d1100f.md","raw/2026-08-10-未决问题-Agent市场补证-batch-010.md","https://raft.build/","https://raft.build/resources/blog/","https://www.linkedin.com/company/rafthq","https://docs.raft.build/features/agents/external/","https://docs.raft.build/features/agents/lifecycle/","https://raft.build/privacy/","https://raft.build/terms/","https://raft.build/resources/blog/dau-was-never-counting-half-your-team/","https://raft.build/resources/blog/is-having-agents-in-the-room-meant-to-be-chaotic/"],"tags":["#Agent","#协作工具","#群聊","#本地Agent","#工作流"],"created":"2026-08-07","updated":"2026-08-26","product_name":"Raft","developer":null,"operator":null,"owner":null,"manufacturer":null,"launch_date":null,"product_status":"active","category":null,"platforms":[],"related_products":[],"customers":[],"website":null,"as_of":"2026-08-10","status_note":"官方当前展示的人机协作产品"}}
---

# Raft

Raft 是一个把人和 AI agent 放进同一协作空间的产品。它的关键不是“再做一个聊天工具”，而是把 channel、thread、task、@mention、本地 agent、持久记忆和人工最终决策组合成 agent-native collaboration layer。

## 观察

- Raft 官方把自己定位为“where humans and AI agents build together”，强调 agent 不只是工具按钮，而是带身份、记忆和任务状态的团队成员。
- Raft 的 Computer/daemon 设计让 agent 贴近本地文件、工具和已有 AI 订阅；这解释了为什么它和纯云端办公 IM 或普通 Slack bot 不同。
- 葬AI来源中的关键用户观察是：AI 群聊的价值可能首先出现在“不想直接操作复杂办公软件”的场景。用户把在线文档、表格或任务交给群聊中的 agent，由人类在同一 conversation 中审阅和协调。
- Raft 与 [[Agentic 软件开发工作流\|Agentic 软件开发工作流]] 的关系在于它把单 agent loop 扩展为团队 loop：多个 agent 共享上下文、分工、交接、互评，人类负责方向和最终判断。
- 官方文档已经给出一部分控制面：外部 agent 的消息和任务权限受 server membership 限定；agent 的创建、停止、reset 和删除由 owner/admin 操作；channel、thread、task claim、agent inbox 和 held draft 用来分隔工作与抑制重复发言。
- “本地运行”不是“数据不出本地”。Raft Computer/daemon 在连接的计算机上执行 agent，但平台政策说明云端会保存明确发送到 channel、DM 或 workspace 的消息、附件和任务，以及工具名、截断工具输入、agent reasoning/text output 等活动元数据。

## 截至 2026-08-10 的答案

- **是否已证明降低真实团队协作成本：没有。** Raft 披露的第一方样本显示，最近一个 14 日窗口平均每天约有 3.65 个 active agent 对应一个 active human，约四分之一 active thread 出现 agent-to-agent relay；但 Raft 自己也明确 DAA 只描述活动形态，不是质量分数。消息量、agent 数和 relay 都不能替代 cycle time、返工率、重复劳动、错误率或总成本的基线比较。
- **隐私与同步边界：已经能够写清，但不是纯本地系统。** 本地 workspace 与执行过程留在连接的计算机；进入协作空间的消息、附件、任务和部分 daemon 活动元数据进入平台记录。成员资格限制 agent 可见范围，owner/admin 控制 lifecycle；删除 agent 不删除既有 channel 历史。接入代码仓库或在线文档后的具体写权限仍由底层工具和凭据决定，Raft membership 不能替代资源侧最小权限。
- **责任、重复工作与冲突：有产品机制，没有完整保证。** task claim、thread、inbox、held draft 和人类最终批准可以减少同时响应和上下文噪音；但目前没有公开的不可篡改审计保证、跨工具授权矩阵、冲突仲裁 SLA 或独立安全评估。责任仍应落到任务 owner、资源凭据 owner 和最终批准人，不能由“agent 是团队成员”的产品语言替代。
- **后续只在出现可复核触发条件时更新。** 有效触发包括：第三方团队按采用前后或并行对照披露周期、消息负担、重复劳动、返工/事故和总成本；公开安全审计或数据保留/删除测试；以及平台发布可导出的权限变更、工具调用、批准和回滚日志。新增第一方案例或活跃 agent 数不再单独视为“降本”证据。

## 相关页面

- [[Agentic 软件开发工作流\|Agentic 软件开发工作流]]
- [[AI 记忆系统\|AI 记忆系统]]
- [[AI Agent 安全\|AI Agent 安全]]

## 三同关系线索

- 核心人物线索来自 Raft blog 和 LinkedIn：Richard Qian 是 Founder/CEO，Tenny 是 Cofounder/CTO/AX Designer。当前可写共同创业关系和产品角色，暂不写学校或前任职。
- 同事/产品关系是“人类 + 持久 AI agents + shared channels”的协作空间。与 [[Hermes Agent\|Hermes Agent]] 的关系属于 agent network/工具生态，不等于私人关系。
- 地缘线索不足；先不写公司所在地或融资关系。

## 证据

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [Raft 官方网站](https://raft.build/)
- [Raft Blog](https://raft.build/resources/blog/)
- [Raft LinkedIn](https://www.linkedin.com/company/rafthq)
- [Raft External Agents 文档](https://docs.raft.build/features/agents/external/)
- [Raft agent lifecycle 文档](https://docs.raft.build/features/agents/lifecycle/)
- [Raft Privacy Policy](https://raft.build/privacy/)
- [Raft Terms of Service](https://raft.build/terms/)
- [Raft DAA 方法与内部样本](https://raft.build/resources/blog/dau-was-never-counting-half-your-team/)
- [Raft 关于 agent 群聊噪音的机制说明](https://raft.build/resources/blog/is-having-agents-in-the-room-meant-to-be-chaotic/)
