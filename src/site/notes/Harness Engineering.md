---
{"dg-publish":true,"permalink":"/Harness Engineering/","title":"Harness Engineering","tags":["Agent","软件工程","Harness","可靠性","安全"],"created":"2026-08-07","updated":"2026-08-10","dg-note-properties":{"status":"seed","title":"Harness Engineering","aliases":["驾驭工程"],"source_count":12,"sources":["raw/2026-08-07-luyao-b044-214-当我们在讨论-Harness-的时候，我们在讨论什么-深度对谈-MiniMax-×-Hermes-Agent-b6fcc9b9.md","raw/2026-08-07-luyao-b044-217-来自字节跳动TRAE的Harness-Engineering指南-be1c8dbc.md","[[OpenHarness\|OpenHarness]]","[[Hashline 编辑工具\|Hashline 编辑工具]]","[[Source Map 泄露\|Source Map 泄露]]","raw/2026-08-10-路遥最近一周文字对话知识摘录.md","raw/2026-08-10-一周对话外部补证.md","[[Emergence World\|Emergence World]]","[[Frontend Slides\|Frontend Slides]]","[[CC Switch\|CC Switch]]","raw/2026-08-10-路遥最近一周新增实体清单.md","raw/2026-08-10-最近一周新增实体外部补证.md"],"tags":["Agent","软件工程","Harness","可靠性","安全"],"created":"2026-08-07","updated":"2026-08-10"}}
---

# Harness Engineering

Harness Engineering 指围绕 AI agent 运行环境、工具调用、状态管理、权限控制、错误恢复、观测和评估构建的工程约束系统。它不是提示词工程的改名，而是把非确定性的模型能力接入可预测软件工程世界的基础设施层。

## 观察

- Harness 可以理解为 LLM 之外的一切生产化约束：上下文注入、工具路由、执行沙箱、状态持久化、预算控制、日志追踪和失败回退。
- 生产级 agent 的核心循环可以拆成感知、规划、行动、反馈/反思。Harness 的作用是在每一步定义边界：模型能看到什么、能调用什么、错误如何回传、任务何时终止。
- 可靠性、效率、安全性和可追踪性是 Harness 的底层目标。没有这些目标，agent 很容易停留在 demo 或 vibe coding 阶段，难以进入长期生产工作流。
- “状态分离”是关键原则：LLM 更像无状态计算单元，跨轮次会话、任务进度、用户偏好、工具结果和审计日志应由外部状态管理器或持久化层控制。
- 函数调用并不只是把工具列表塞进 prompt。生产系统需要处理 schema 序列化、调用拦截、参数校验、超时、权限、执行失败、重试和观察注入。
- Harness 成熟度决定 agent 能否从被动响应走向主动规划与反思，也决定它是否能高效使用上下文，而不是依赖人类不断点状投喂。
- [[Hermes Agent\|Hermes Agent]]、[[yoyo\|yoyo]] 和 [[Codex CLI\|Codex CLI]] 都可以被放进这个框架观察：模型能力之外，真正影响用户信任的是记忆、技能、工具边界、任务日志和失败后能否复现正确路径。
- [[OpenHarness\|OpenHarness]] 把这些抽象模块具体化为 Agent Loop、Toolkit、Context/Memory、Governance 和 Swarm，适合作为观察开源 harness 架构边界的项目节点。
- [[Hashline 编辑工具\|Hashline 编辑工具]] 显示，编辑格式本身就是 harness 能力的一部分：短哈希锚点、写入前状态校验和失败拒绝机制，可以让同一模型在代码修改环节表现出不同的可靠性。
- [[Source Map 泄露\|Source Map 泄露]] 提醒，harness 产品的边界还包括构建和发布工程：调试映射、包体内容和未公开结构如果进入公共包，也会暴露 agent runtime 的内部假设。
- 上下文入口需要区分“高带宽采集”和“结构化装载”。几分钟口述可以迅速提供背景和判断重点，但语音本身不保证目标、约束、受众和验收条件已经分栏；harness 应把转写内容规范化为任务状态，并允许用户检查关键约束是否被正确提取。
- 检索层不能只追求更小的 RAG chunk。过细切块会让说话者、前后轮次、时间邻接、引用对象和关系方向脱离正文；更稳健的做法是同时索引消息、相邻窗口和完整文档等多种粒度，在召回时扩展相邻块，并保留说话人、时间、回复/引用和来源元数据。
- 运行环境本身也需要状态管理。变更模型路由、provider、shell 环境、权限或工具版本前，应生成不含密钥值的运行清单和恢复点；变更后对配置摘要、环境变量名称、路由、版本与权限做差异审计，并执行启动和核心工具的最小验证。
- [[Emergence World\|Emergence World]] 是长程 harness 样本：持续世界、角色档案、工具目录、三层记忆、资源和治理共同塑造 agent 行为。平台中的模型差异必须连同这些运行时条件、随机性和重复次数一起解释，不能只归因于模型名称。
- [[Frontend Slides\|Frontend Slides]] 把 harness 压到一个制品管线：skill 负责需求澄清和视觉选择，脚本负责 PowerPoint 内容抽取、HTML 生成、浏览器渲染和 PDF 导出。这里的可靠性目标是新制品可回读、原件不被覆盖、转换边界明确，而不是把网页重建说成 PPTX 原位编辑。
- [[CC Switch\|CC Switch]] 把 harness 扩展到本地配置平面：SQLite、应用生效配置、本地代理、备份轮换和会话读取共同组成运行状态。原子写入和备份能降低损坏概率，但不能替代凭据隔离、变更审计和异常退出后的恢复验证。

## 边界

- Harness Engineering 是一个正在形成的工程语言，不是单一标准或固定架构。不同团队会把同类实践称为 agent runtime、orchestration、scaffold、context engineering 或 AI operating layer。
- Harness 不会消除模型错误，只能让错误更可见、可恢复、可审计，并尽量避免同类失败重复发生。

## 相关页面

- [[Agentic 软件开发工作流\|Agentic 软件开发工作流]]
- [[AI Agent 安全\|AI Agent 安全]]
- [[AI 记忆系统\|AI 记忆系统]]
- [[Hermes Agent\|Hermes Agent]]
- [[yoyo\|yoyo]]
- [[Codex CLI\|Codex CLI]]
- [[OpenHarness\|OpenHarness]]
- [[Hashline 编辑工具\|Hashline 编辑工具]]
- [[Source Map 泄露\|Source Map 泄露]]
- [[Emergence World\|Emergence World]]
- [[Frontend Slides\|Frontend Slides]]
- [[CC Switch\|CC Switch]]

## 证据

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [[OpenHarness\|OpenHarness]]
- [[Hashline 编辑工具\|Hashline 编辑工具]]
- [[Source Map 泄露\|Source Map 泄露]]
- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [[Emergence World\|Emergence World]]
- [[Frontend Slides\|Frontend Slides]]
- [[CC Switch\|CC Switch]]
- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
