---
{"dg-publish":true,"permalink":"/Inkling/","title":"Inkling","tags":["开放权重模型","MoE","多模态","长上下文","模型定制"],"created":"2026-08-07","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"Inkling","source_count":5,"sources":["raw/2026-08-07-luyao-b010-48-刚刚，Thinking-Machines首发大模型：9750亿参数，完整开放权重-44733ba7.md","https://thinkingmachines.ai/news/introducing-inkling/","https://huggingface.co/thinkingmachines/Inkling","https://arcprize.org/results/thinky-inkling","raw/2026-08-10-未决问题技术模型补证-batch-001.md"],"tags":["开放权重模型","MoE","多模态","长上下文","模型定制"],"created":"2026-08-07","updated":"2026-08-10"}}
---

# Inkling

Inkling 是 [[Thinking Machines Lab\|Thinking Machines Lab]] 在 2026 年 7 月发布的开放权重 MoE 基础模型。它的核心定位不是“当前最强模型”，而是一个适合定制、微调和多模态 agent 工作流的开放权重底座。

## 观察

- 官方称 Inkling 有 975B 总参数、41B active parameters，支持最高 1M token context window，并用文本、图像、音频和视频数据预训练。
- Inkling 与 Inkling-Small 一起发布，说明 Thinking Machines Lab 从第一版开始就把成本/延迟梯度纳入模型家族设计，而不是只发布最大模型。
- 可控 thinking effort 是一个重要产品特性：如果模型要嵌入长流程 agent 工作流，用户需要在性能、token 成本和延迟之间切换，而不能只有固定推理模式。
- 官方把 agentic coding、工具调用、多页面 artifact、长迭代多人游戏、音频/视觉推理和自我微调作为能力展示。这使 Inkling 更像“可被训练和编排的工作流底座”，而不是单纯聊天模型。
- 开放权重并不自动等于开放治理。官方模型卡把外部红队、纵深防御、下游评测、人工监督和应用侧防护列为部署责任；Apache-2.0 解决的是权重使用许可，不会自动提供开放治理或替部署者承担安全责任。

## 截至 2026-08-10 的答案

- **权重、模型卡与许可已经公开。** Hugging Face 官方页面提供权重和完整模型卡，标注 Apache-2.0，并列出架构、模态、部署示例、官方评测与风险说明。因此，原来的“等待权重和许可”问题已经结题。
- **Tinker 是否降低真实定制成本，当前仍无可复核的控制比较。** 官方发布展示了微调、自微调和工作流案例，公开模型树与下载可作为早期采用信号；它们不能证明企业或研究团队的总成本、工时或迭代次数低于其他方案。可结题的证据门槛是公开的同任务、同质量、同算力/人工口径对照。
- **独立评测只覆盖了部分能力。** ARC Prize 已给出 ARC-AGI-1/2 的外部运行结果，说明并非所有成绩都停留在厂商自报；本轮仍未找到同时覆盖 agentic coding、多模态和安全拒答的独立复现，因而官方综合能力表不能整体升级为第三方共识。

## 相关页面

- [[Thinking Machines Lab\|Thinking Machines Lab]]
- [[Agentic 软件开发工作流\|Agentic 软件开发工作流]]
- [[AI Agent 安全\|AI Agent 安全]]

## 证据

- 原始资料快照（本地归档）
- [Inkling: Our Open-Weights Model](https://thinkingmachines.ai/news/introducing-inkling/)
- [Inkling 官方模型卡与权重](https://huggingface.co/thinkingmachines/Inkling)
- [ARC Prize：Inkling 外部评测](https://arcprize.org/results/thinky-inkling)
- 原始资料快照（本地归档）
