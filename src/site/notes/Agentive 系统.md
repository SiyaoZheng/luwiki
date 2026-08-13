---
{"dg-publish":true,"permalink":"/Agentive 系统/","title":"Agentive 系统","tags":["Agent","AI安全","自主性","世界模型","身份"],"created":"2026-08-07","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"Agentive 系统","source_count":14,"sources":["raw/2026-08-07-luyao-b014-71-Critique-of-Agent-Model-9b56c796.md","[[有益特质强化学习\|有益特质强化学习]]","[[GEZHI 观察台\|GEZHI 观察台]]","[[Acontext\|Acontext]]","[[MindClaw\|MindClaw]]","[[实时 AI 交互模型\|实时 AI 交互模型]]","[[AirJelly\|AirJelly]]","[[yoyo\|yoyo]]","raw/2026-08-10-路遥最近一周文字对话知识摘录.md","[[Emergence World\|Emergence World]]","raw/2026-08-10-路遥最近一周新增实体清单.md","raw/2026-08-10-最近一周新增实体外部补证.md","raw/2026-08-10-未决问题-Agent软件补证-batch-005.md","https://arxiv.org/abs/2606.23991"],"tags":["Agent","AI安全","自主性","世界模型","身份"],"created":"2026-08-07","updated":"2026-08-10"}}
---

# Agentive 系统

Agentive 系统指能力和自主性内生于系统自身的 agent，而不是主要依赖外部脚手架、预设工作流或人工编排来表现出“agentic”能力的自动化系统。这个区分用于判断哪里是普通自动化，哪里开始出现更强的机器自主性。

## 观察

- 《Critique of Agent Model》把 agent 架构拆成 goal、identity、decision-making、self-regulation 和 learning 五个维度，并提出真正的 agency 要求这些结构被系统内化，而不是只靠外部 workflow 组合。
- 这个区分能帮助校准 [[Agentic 软件开发工作流\|Agentic 软件开发工作流]]：当前许多 coding agent 的能力来自工具、prompt、权限和审查循环，并不必然说明系统已经拥有开放世界自主性。
- 对 [[AI Agent 安全\|AI Agent 安全]] 来说，agentive 系统的风险边界更高，因为它可能形成持续目标、自我调节、身份演化和自我学习，而不只是执行一个被人类定义好的任务。
- 论文提出的 Goal-Identity-Configurator 方向把身份演化、层级目标、模拟推理、世界模型和自我学习放在一起；这与 [[AI 记忆系统\|AI 记忆系统]] 和 [[世界模型\|世界模型]] 形成直接连接。
- [[有益特质强化学习\|有益特质强化学习]] 提供了另一条相关线索：如果高层行为特质能通过 RL 跨域泛化，agentive 系统的身份/目标塑造也许不能只靠规则约束，还要关注稳定行为倾向如何形成。
- [[GEZHI 观察台\|GEZHI 观察台]] 提供了一个反向边界样本：它表现出 agentic 工作流，包括异常队列、证据补入和查证更新，但目标与规则仍明显由外部设计，不应直接称为 agentive 系统。
- [[Acontext\|Acontext]] 是另一个边界样本：skill memory 可以让 agent 工作流随经验积累变强，但如果改进对象主要是外部 Markdown 技能和工具配置，就仍然需要和内生目标、身份演化区分开。
- [[MindClaw\|MindClaw]] 把内部认知操作显式化为 belief update、reasoning、action 和 noop，但它仍是在实验任务中调度认知流程，不能直接等同于开放世界 agentive 系统。
- [[实时 AI 交互模型\|实时 AI 交互模型]] 补充了另一个正交维度：实时系统可以和用户同频协作，但这并不自动意味着它具有内生目标、身份演化或开放世界自主性。
- [[AirJelly\|AirJelly]] 是主动式 agent 产品样本：它会预测下一步和推送执行建议，但仍需要与内生目标、自我调节和开放世界自主性区分。
- [[yoyo\|yoyo]] 是 agentive 边界更暧昧的样本：它有目标叙事、公开运行、反馈吸收和自我改写，但其行动空间仍由 harness、skills、token 预算和人类 issue 机制限定。
- [[Emergence World\|Emergence World]] 把持续记忆、工具、资源、治理和多智能体互动放进长程共享环境，适合观察行为漂移与群体动力；但这些行为同时受平台规则、角色设定和工具集合塑造，不能仅凭演示运行认定底层模型已经形成内生目标或稳定身份。

## 截至 2026-08-10 的结论与判定门槛

- **术语状态**：`agentic/agentive` 的严格区分来自 2026-06-22 发布的 `Critique of Agent Model`。本批公开检索没有找到把同一五维框架变成独立标准、通用 benchmark 或广泛复现的材料，因此它目前是来源明确的分析框架，不是行业共识分类。
- **GIC 状态**：公开稿把 Goal-Identity-Configurator 写作架构提案，未提供 checkpoint、训练 recipe、实现代码、实验章节或对照 benchmark。它可以组织研究问题，但不能写成已验证的通用 agent 系统。
- **经验边界**：私人对话中的自动化失败只能显示脚手架、配置与恢复劳动可能被低估；除非能干预并测量内生目标、身份状态、自我调节和学习更新，否则不能把失败归因为“agency 不足”。
- **最低判定门槛**：若要把一个系统称为 agentive，至少应分别证明目标能在系统内持续、分解和受约束地修订；身份状态可版本化并对行为有因果影响；决策不只复述外部 workflow；自我调节是可学习而非固定守则；学习更新由系统发起且能在冻结评测上带来可复现增益。
- **排除脚手架效应**：评测必须冻结模型、工具、prompt、权限和人类介入，分别消融记忆、规划器、世界模型、身份状态与学习模块；同时报告目标漂移、奖励投机、可纠正性、回滚和跨运行方差。缺少这些对照时，应写“agentic workflow 展现了某种行为”，而不是推断内生 agency。
- **监测触发条件**：出现独立团队的公开实现、五维可操作测量、预注册／重复运行 benchmark，或多个研究群体采用相同定义时，再更新“术语采用”和“GIC 验证”状态；普通产品营销沿用 `agentive` 一词不构成触发。

## 相关页面

- [[AI Agent 安全\|AI Agent 安全]]
- [[Agentic 软件开发工作流\|Agentic 软件开发工作流]]
- [[AI 记忆系统\|AI 记忆系统]]
- [[世界模型\|世界模型]]
- [[AgentSociety²\|AgentSociety²]]
- [[有益特质强化学习\|有益特质强化学习]]
- [[GEZHI 观察台\|GEZHI 观察台]]
- [[Acontext\|Acontext]]
- [[MindClaw\|MindClaw]]
- [[实时 AI 交互模型\|实时 AI 交互模型]]
- [[AirJelly\|AirJelly]]
- [[yoyo\|yoyo]]
- [[Emergence World\|Emergence World]]

## 证据

- 原始资料快照（本地归档）
- [[GEZHI 观察台\|GEZHI 观察台]]
- [[实时 AI 交互模型\|实时 AI 交互模型]]
- [[AirJelly\|AirJelly]]
- [[yoyo\|yoyo]]
- 原始资料快照（本地归档）
- [[Emergence World\|Emergence World]]
- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [Critique of Agent Model](https://arxiv.org/abs/2606.23991)
