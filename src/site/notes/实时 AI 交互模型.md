---
{"dg-publish":true,"permalink":"/实时 AI 交互模型/","title":"实时 AI 交互模型","tags":["AI产品","Agent","人机协作","实时交互","工作流"],"created":"2026-08-07","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"实时 AI 交互模型","aliases":["Real-Time Model","RTM","Turn-Based Model","TBM"],"source_count":11,"sources":["raw/2026-08-07-luyao-b039-192-从《文明》的回合到《星际》的实时：AI-产品形态正在经历的范式迁移-b0d484fc.md","[[AirJelly\|AirJelly]]","raw/2026-08-10-路遥最近一周文字对话知识摘录.md","raw/2026-08-10-一周对话外部补证.md","raw/2026-08-10-未决问题-Agent软件补证-batch-005.md","https://arxiv.org/abs/2503.04721","https://arxiv.org/abs/2507.23159","https://arxiv.org/abs/2510.07838","https://arxiv.org/abs/2604.04847","https://github.com/DanielLin94144/Full-Duplex-Bench","https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/"],"tags":["AI产品","Agent","人机协作","实时交互","工作流"],"created":"2026-08-07","updated":"2026-08-10"}}
---

# 实时 AI 交互模型

实时 AI 交互模型指 AI 产品从“用户说完一轮、模型再回答一轮”的回合制交互，转向与用户动作、语音、编辑、创作或控制流同步推进的模型形态。它关注的不是单次响应速度，而是模型是否与用户处在同一条时间轴上。

## 观察

- 来源把传统聊天 LLM 称为 Turn-Based Model：输入冻结、模型生成、用户再输入。这个范式适合问答、写作和许多工具调用，但不适合操作密集、意图连续、不能等待的场景。
- Real-Time Model 的关键是流式输入输出和 micro-turn：所谓实时不是没有离散步骤，而是回合足够小，小到用户感知为连续协作。
- 音频对话、机器人控制、内容编辑和多模态交互会率先暴露回合制瓶颈。语音不能等人完全说完才“开始存在”，机器人不能等长推理结束才避障，创作工具也不能每一步都让用户等待。
- 对 [[Agentic 软件开发工作流\|Agentic 软件开发工作流]] 来说，这提示未来 agent 不只是“接任务-执行-汇报”，还可能进入代码编辑、数据分析、设计和文档写作的实时协作层。
- 对 [[Agentive 系统\|Agentive 系统]] 来说，实时性和自主性是不同维度：一个系统可以实时但不 agentive，也可以 agentive 但不实时。RTM 解决的是时间对齐，不自动解决目标、身份和自我学习问题。
- 来源中的 PACE 是产品方自述，适合作为范式样本，不应写成已验证的通用技术标准。
- [[AirJelly\|AirJelly]] 展示了另一种时间结构：不连续监听所有行为，而是在 Enter 等关键帧捕捉意图，再预测下一步并主动推送。
- 复杂任务开始前的语音沟通可以成为高带宽上下文入口：用户能较快讲清意图、背景和判断重点。但口述内容仍需被结构化为目标、约束、源文件、禁止改动项、交付物与验收条件；它不能替代可核对的任务说明，也没有证据表明语音天然优于结构化文字。
- full-duplex spoken dialogue 已经形成比 `RTM` 更可复核的研究对象。Full-Duplex-Bench 从停顿、backchannel、顺畅换轮和打断起步，后续版本扩展到重叠语音、旁人说话、动态多轮、纠错、实体跟踪、安全、真实口语不流利和多步工具调用。
- 2026 年的一手产品材料表明实时语音、流式转写和边说边处理已经进入 API 产品层；但单一供应商的可用功能和内部指标不能替代跨系统、人群、语言、网络和任务的独立评测。

## 截至 2026-08-10 的答案与最低评测要求

- **术语答案**：TBM/RTM 仍是本页采用的产品分析框架，不是通用学术分类；研究比较时应优先写清 half-duplex、full-duplex、streaming、VAD、micro-turn 或 fast/slow policy 的具体机制。
- **不能只测速度**：首 token 或首音频延迟低，只能说明响应快。full-duplex 至少要求模型在输出时持续处理输入，并分别报告用户打断后的停止延迟、对新输入的响应延迟、停顿误判、backchannel 时机、重叠语音和旁人语音处理。
- **不能只测对话感**：动态评测还应包含多轮纠错、实体跟踪、指令保持、工具选择／参数／顺序、最终任务正确性与安全接管。静态音频集可做回归测试，但不能单独证明真实会话中的连续协作。
- **端到端指标**：同时记录连接建立、媒体往返、jitter／丢包、首音频、停止、恢复和任务完成延迟，并报告 P50／P95；网络、模型和工具耗时应分解，否则“模型实时”可能只是区域网络或缓存效果。
- **人本控制**：界面必须持续显示采集状态，提供立即静音／中断／撤销，区分对用户说话与旁人说话，并在高风险写入、控制或承诺前切回人类确认。实时性不能成为绕开 [[AI Agent 安全\|AI Agent 安全]] 的理由。
- **证据边界**：一次五分钟语音前置沟通只能证明上下文入口存在；只有在真实流式输入、并发输出、打断和动态任务上通过上述测试，才能称产品具备实时协作能力。Full-Duplex-Bench 的分数也只对应特定模型版本和评测协议，不是永久能力排名。

## 相关页面

- [[Agentic 软件开发工作流\|Agentic 软件开发工作流]]
- [[Agentive 系统\|Agentive 系统]]
- [[AirJelly\|AirJelly]]

## 证据

- 原始资料快照（本地归档）
- [[AirJelly\|AirJelly]]
- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [Full-Duplex-Bench v1](https://arxiv.org/abs/2503.04721)
- [Full-Duplex-Bench v1.5](https://arxiv.org/abs/2507.23159)
- [Full-Duplex-Bench v2](https://arxiv.org/abs/2510.07838)
- [Full-Duplex-Bench v3](https://arxiv.org/abs/2604.04847)
- [Full-Duplex-Bench 官方仓库](https://github.com/DanielLin94144/Full-Duplex-Bench)
- [OpenAI 2026 实时语音模型说明](https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/)
