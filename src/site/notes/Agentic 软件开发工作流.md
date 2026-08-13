---
{"dg-publish":true,"permalink":"/Agentic 软件开发工作流/","title":"Agentic 软件开发工作流","tags":["Agent","软件开发","工作流","Codex","Skills"],"created":"2026-08-07","updated":"2026-08-10","dg-note-properties":{"status":"seed","title":"Agentic 软件开发工作流","source_count":36,"sources":["[[Codex CLI\|Codex CLI]]","[[Matt Pocock Skills\|Matt Pocock Skills]]","[[Acontext\|Acontext]]","[[Inkling\|Inkling]]","[[Raft\|Raft]]","[[智能体交易经济性\|智能体交易经济性]]","[[金融数据 MCP\|金融数据 MCP]]","[[AI 服务市场\|AI 服务市场]]","[[人工智能超级个体\|人工智能超级个体]]","[[自进化智能体\|自进化智能体]]","[[生成引擎优化\|生成引擎优化]]","[[Agentive 系统\|Agentive 系统]]","[[实证研究智能体工作流\|实证研究智能体工作流]]","[[扩散语言模型\|扩散语言模型]]","[[实时 AI 交互模型\|实时 AI 交互模型]]","[[Token Grant\|Token Grant]]","[[yoyo\|yoyo]]","[[Harness Engineering\|Harness Engineering]]","[[Hermes Agent\|Hermes Agent]]","[[GitHub Star 信号污染\|GitHub Star 信号污染]]","[[Token-maxxing\|Token-maxxing]]","[[OpenClaw\|OpenClaw]]","[[致远一号\|致远一号]]","[[OpenHarness\|OpenHarness]]","[[Hashline 编辑工具\|Hashline 编辑工具]]","[[Source Map 泄露\|Source Map 泄露]]","[[Step1\|Step1]]","raw/2026-08-10-路遥最近一周文字对话知识摘录.md","raw/2026-08-10-一周对话外部补证.md","[[Emergence World\|Emergence World]]","[[Frontend Slides\|Frontend Slides]]","[[Zara Zhang\|Zara Zhang]]","[[CC Switch\|CC Switch]]","[[Christopher Blattman\|Christopher Blattman]]","raw/2026-08-10-路遥最近一周新增实体清单.md","raw/2026-08-10-最近一周新增实体外部补证.md"],"tags":["Agent","软件开发","工作流","Codex","Skills"],"created":"2026-08-07","updated":"2026-08-10"}}
---

# Agentic 软件开发工作流

Agentic 软件开发工作流不是让模型一次性生成所有代码，而是把软件开发拆成可控的 agent 循环：读仓库、澄清问题、沉淀决策、编辑文件、运行验证、审查风险、继续迭代。

## 观察

- [[Codex CLI\|Codex CLI]] 代表终端内 agent loop：本地仓库、权限边界、命令执行、审查、resume、web search、cloud 和 MCP 共同组成可审计开发环境。
- [[Matt Pocock Skills\|Matt Pocock Skills]] 代表技能化流程：通过 `/wayfinder` 等技能，把模糊大型任务转换成决策地图和 issue frontier，再进入规格、ticket 和实现。
- [[Acontext\|Acontext]] 进一步把技能化流程做成记忆层：成功 session 可以被捕获、蒸馏成 Markdown skill，再同步到本地给后续 agent 使用。
- 两者共同说明：高质量 agentic 开发依赖流程结构，而不只是模型能力。关键对象包括 `AGENTS.md`、issue tracker、decision log、raw evidence、权限策略和回滚机制。
- 对复杂项目，最危险的失败模式是 agent 把未解决的架构决策伪装成实现任务；Wayfinder 这类技能正是为了防止过早实现。
- [[Inkling\|Inkling]] 的发布把 agentic coding、工具调用、长迭代 artifact 和可控推理强度纳入基础模型设计，说明模型能力本身也在向工作流优化。
- [[Raft\|Raft]] 把单 agent loop 推向团队协作：人、多个 agent、channel、任务和本地工具权限共同构成协作界面。
- [[智能体交易经济性\|智能体交易经济性]] 提醒：只看 agent 是否完成任务不够，还要记录成本、调用轨迹和增量价值，否则复杂工作流可能只是更贵的自动化。
- [[金融数据 MCP\|金融数据 MCP]] 说明 agentic 工作流正在扩展到领域数据接口：模型不只写代码，也会通过 MCP 读取实时或准实时外部数据，因此配置、凭据、数据 provenance 和工具版本成为工作流对象。
- [[AI 服务市场\|AI 服务市场]] 和 [[人工智能超级个体\|人工智能超级个体]] 从组织层面改变软件工作：AI 能力可以被拆成外包服务、微型创业主体和轻量团队，而不是只存在于传统软件公司内部。
- [[自进化智能体\|自进化智能体]] 把 agent loop 从人工编排推进到自我改进，但它要求更强的评估、权限和回滚机制。
- [[生成引擎优化\|生成引擎优化]] 说明 agentic 工作流也在改变内容生产：内容不只是发布，而是要持续版本化、可引用、可被 agent 当作决策支持材料。
- [[Agentive 系统\|Agentive 系统]] 提供了一个边界提醒：当前开发 agent 的能力大多来自仓库上下文、工具权限、prompt、技能和审查循环；这不等于系统已经拥有内生目标、身份和开放世界自主性。
- [[实证研究智能体工作流\|实证研究智能体工作流]] 把 agentic workflow 从软件开发扩展到实证论文：同样需要项目文件夹、skills、tools、verification、provenance、permissions 和 stopping rules。
- [[扩散语言模型\|扩散语言模型]] 提醒，agentic workflow 的成本结构还受生成架构影响；长任务的真实成本应按完成目标所需总调用、工具轨迹、重试和验证来核算，而不是只看单 token 价格。
- [[实时 AI 交互模型\|实时 AI 交互模型]] 提示 agentic workflow 还有时间结构问题：许多当前 agent 是回合制自动化，未来代码编辑、设计和数据分析可能需要模型在用户操作链中实时共创。
- [[Token Grant\|Token Grant]] 说明早期 AI 产品开发的基础资源正在从传统办公室、工资和云资源，转向可直接支撑 agent 原型迭代的模型 token 与算力额度。
- [[yoyo\|yoyo]] 把 agentic 软件开发推向自改写实验：coding agent 不只执行任务，也可能在 harness、skills、人类 issue 反馈和公开日志中持续改造自身。
- [[Harness Engineering\|Harness Engineering]] 把 agentic 工作流的重点从 prompt 转向运行时工程：状态管理、工具路由、沙箱、失败恢复、预算控制和可观测性共同决定 agent 是否能生产化。
- [[Hermes Agent\|Hermes Agent]] 说明 agent framework 竞争会围绕可用性、记忆、技能复用、模型适配和启动成本展开，而不只是模型基准分数。
- [[GitHub Star 信号污染\|GitHub Star 信号污染]] 提醒 agentic 开源工具选型不能再把 star 数当作首要信号；commit 连续性、真实 issue、作者历史和外部讨论更能反映项目质量。
- [[Token-maxxing\|Token-maxxing]] 把工作流成本问题推到组织层：并行 agent 和 coding assistant 的真实价值要用业务增量、缺陷率、返工率和审查成本衡量，而不是用 token 消耗量本身证明 AI-native。
- [[OpenClaw\|OpenClaw]] 把 agentic 工作流带进教学和组织部署：同一平台可以承载学生 agent、教师 agent、课程知识和城市治理 agent，而不只是个人开发工具。
- [[致远一号\|致远一号]] 说明 agentic 工作流还需要机构级算力和 API 基础设施：并发环境、模型选择、校内闭环和安全策略会影响工作流能否规模化。
- [[OpenHarness\|OpenHarness]] 显示开源框架正在把 agentic 工作流拆成 loop、toolkit、memory、governance 和 swarm 模块，方便团队按自身权限和任务结构重组 coding agent。
- [[Hashline 编辑工具\|Hashline 编辑工具]] 把工作流质量压到最小编辑动作：读文件、定位行、写回补丁和检测冲突的协议，会直接影响 coding agent 是否需要反复重试。
- [[Step1\|Step1]] 代表相邻的 AI 网站生成/克隆工具路线：前端开发不只被 coding agent 改造，也被“参考站点 -> 样式/动画/代码 -> AI 修改”的设计还原工作流改造。
- [[Source Map 泄露\|Source Map 泄露]] 提醒 agentic 开发工具自身也需要发布前审计；源代码映射、调试文件和未公开能力意外进入包管理器，会改变用户、竞争者和攻击者能看到的系统边界。
- 复杂任务开始前的高带宽说明可以快速暴露目标、受众、约束和隐含判断，但“口述更流畅”不等于需求已经结构化。语音或自由叙述之后仍应形成可检查的任务简报，至少写清目标、受众、输入制品、不可改变项、允许修改范围、验收标准和回滚点。
- 存量制品的稳健循环应是“复制原件 → 读取对象结构与依赖 → 提交对象级小补丁 → 渲染并回读受影响范围 → 对照验收 → 保留可回滚版本”。小补丁降低误伤面，但遇到跨页引用、统一样式或语义约束时，检查范围必须随依赖扩大，不能把“局部写入”等同于“局部影响”。
- 模型、provider、中转路由、shell 环境或 agent 配置变更也应作为可审计编辑处理。变更前的运行清单应记录生效配置路径与摘要、模型/路由、环境变量名称而非密钥值、工具与 skill 版本、权限/网络边界、备份与恢复命令；变更后再做差异审计和最小可用性验证，避免出现“系统坏了但不知道改了什么”的配置漂移。
- [[Christopher Blattman\|Christopher Blattman]] 的 Prompt、Plan、Review、Revise 工作流把复杂任务入口写成可复用的项目流程：先形成足够上下文，再显式计划、独立审查、修订和收尾。它不是软件工程专用方法，但与规格、review gate 和项目说明的功能高度同构。
- [[Frontend Slides\|Frontend Slides]] 是由 [[Zara Zhang\|Zara Zhang]] 维护的技能化前端工作流：coding agent 先让用户从视觉预览中选择方向，再生成固定画布的 HTML 演示；PowerPoint 转换是抽取内容和资产后重建网页，不是对 PPTX 原位修改。
- [[CC Switch\|CC Switch]] 把 provider、MCP、skills、本地路由和备份变成桌面配置工作流。它能降低手工切换成本，也说明配置工具自身必须进入变更管理：SQLite 中的状态、应用生效文件和本地代理三者需要明确真相来源与恢复路径。
- [[Emergence World\|Emergence World]] 把 agentic workflow 拉到持续数周的运行尺度：任务状态、记忆、资源、治理和工具调用会累积成系统行为。长程运行不能只靠最终成功率验收，还需要事件日志、配置版本、重复运行和异常归因。

## 相关页面

- [[Codex CLI\|Codex CLI]]
- [[Matt Pocock Skills\|Matt Pocock Skills]]
- [[Acontext\|Acontext]]
- [[Inkling\|Inkling]]
- [[Raft\|Raft]]
- [[智能体交易经济性\|智能体交易经济性]]
- [[金融数据 MCP\|金融数据 MCP]]
- [[AI 服务市场\|AI 服务市场]]
- [[人工智能超级个体\|人工智能超级个体]]
- [[自进化智能体\|自进化智能体]]
- [[生成引擎优化\|生成引擎优化]]
- [[Agentive 系统\|Agentive 系统]]
- [[实证研究智能体工作流\|实证研究智能体工作流]]
- [[扩散语言模型\|扩散语言模型]]
- [[实时 AI 交互模型\|实时 AI 交互模型]]
- [[Token Grant\|Token Grant]]
- [[yoyo\|yoyo]]
- [[Harness Engineering\|Harness Engineering]]
- [[Hermes Agent\|Hermes Agent]]
- [[GitHub Star 信号污染\|GitHub Star 信号污染]]
- [[Token-maxxing\|Token-maxxing]]
- [[OpenClaw\|OpenClaw]]
- [[致远一号\|致远一号]]
- [[OpenHarness\|OpenHarness]]
- [[Hashline 编辑工具\|Hashline 编辑工具]]
- [[Source Map 泄露\|Source Map 泄露]]
- [[Step1\|Step1]]
- [[Emergence World\|Emergence World]]
- [[Frontend Slides\|Frontend Slides]]
- [[Zara Zhang\|Zara Zhang]]
- [[CC Switch\|CC Switch]]
- [[Christopher Blattman\|Christopher Blattman]]

## 证据

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [[Emergence World\|Emergence World]]
- [[Frontend Slides\|Frontend Slides]]
- [[Zara Zhang\|Zara Zhang]]
- [[CC Switch\|CC Switch]]
- [[Christopher Blattman\|Christopher Blattman]]
- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
