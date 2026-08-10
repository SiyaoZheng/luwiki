---
{"dg-publish":true,"permalink":"/MindClaw/","title":"MindClaw","tags":["具身智能","TheoryOfMind","心理世界模型","Agent","人机协作"],"created":"2026-08-07","updated":"2026-08-07","dg-note-properties":{"status":"seed","title":"MindClaw","source_count":2,"sources":["raw/2026-08-07-luyao-b032-156-FlerkenS-FlerkenS-波动智能-e26d3792.md","https://arxiv.org/pdf/2606.01063"],"tags":["具身智能","TheoryOfMind","心理世界模型","Agent","人机协作"],"created":"2026-08-07","updated":"2026-08-07"}}
---

# MindClaw

MindClaw 是一个面向实时人机协作的具身心智推理框架节点。它关注的不只是智能体能不能推断人的信念、欲望和意图，而是智能体什么时候应该更新记忆、什么时候推理、什么时候行动、什么时候保持沉默。

## 观察

- MindClaw 把 [[心理世界模型\|心理世界模型]] 从离线 Theory of Mind 问答推进到实时闭环：人会移动、目标会变化、信念会过期，机器人需要持续维护世界事实和角色信念。
- Belief Table 把视觉事实和角色信念分开记录，使机器人能识别 false belief，而不是只根据当前画面生成动作。
- Trigger 是关键机制：它调度 belief update、reasoning、action 或 noop，使“什么都不做”成为经过判断后的合法选择。
- 对 [[以人为中心的具身智能\|以人为中心的具身智能]] 来说，MindClaw 提供了精准干预的技术语言：好的助手不只是会帮忙，还要知道什么时候不该帮。
- 对 [[Agentive 系统\|Agentive 系统]] 来说，MindClaw 是一个边界样本：它引入内部认知操作、记忆和调度，但目标与任务结构仍来自实验设定，不应直接等同于开放世界自主性。

## 边界

- 当前来源是公众号解读和 arXiv PDF 链接，尚未完整核验论文实验设置、数据集、指标和 baseline。
- MindClaw 不等于读心。它仍然是基于观察、历史和规则/模型做可错的心理状态估计。

## 相关页面

- [[心理世界模型\|心理世界模型]]
- [[以人为中心的具身智能\|以人为中心的具身智能]]
- [[Agentive 系统\|Agentive 系统]]
- [[社会世界模型\|社会世界模型]]

## 证据

- 原始资料快照（本地归档）
- [arXiv PDF](https://arxiv.org/pdf/2606.01063)
