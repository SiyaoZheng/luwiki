---
{"dg-publish":true,"permalink":"/Thinking Machines Lab/","title":"Thinking Machines Lab","tags":["#AI公司","#开放权重模型","#模型定制","#Tinker","#MiraMurati"],"created":"2026-08-07","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"Thinking Machines Lab","source_count":6,"sources":["raw/2026-08-07-luyao-b010-48-刚刚，Thinking-Machines首发大模型：9750亿参数，完整开放权重-44733ba7.md","https://thinkingmachines.ai/news/introducing-inkling/","https://thinkingmachines.ai/","https://www.reuters.com/technology/artificial-intelligence/mira-muratis-new-ai-startup-poaches-20-openai-researchers-sources-say-2025-02-19/","https://huggingface.co/thinkingmachines/Inkling","raw/2026-08-10-未决问题技术模型补证-batch-001.md"],"tags":["#AI公司","#开放权重模型","#模型定制","#Tinker","#MiraMurati"],"created":"2026-08-07","updated":"2026-08-10"}}
---

# Thinking Machines Lab

Thinking Machines Lab 是 Mira Murati 创立的 AI 公司。它在 2026 年 7 月发布 [[Inkling\|Inkling]] 时，把公司定位放在“开放权重基础模型 + Tinker 微调平台 + 交互式协作模型系统”上，而不是只追求单一 benchmark 第一。

## 观察

- Thinking Machines Lab 的公开叙事强调“extend human will and judgment”，这使其产品重心更接近模型定制和人机协作，而不只是通用聊天模型。
- [[Inkling\|Inkling]] 是公司第一次完整公开的大规模模型训练成果，也把开放权重、可控推理强度、多模态和可微调性绑定在一起。
- Tinker 是公司路线中的关键基础设施：如果开放权重模型的核心价值在“让用户改成自己的模型”，那么微调服务、cookbook、playground 和部署合作伙伴就会和模型参数同样重要。
- 这一路线与 [[Agentic 软件开发工作流\|Agentic 软件开发工作流]] 有交集：官方展示的 agentic coding、工具调用、长迭代游戏生成和自我微调案例，都把模型放进可执行工作流中评估。

## 截至 2026-08-10 的答案

- **采用已经有早期公开信号，但没有成熟采用证据。** 权重、模型卡、部署示例、Tinker 微调入口和下游模型树已经公开；下载量、模型树和厂商案例只能证明有人试用，不能证明长期留存、企业生产负载或真实成本下降。
- **治理边界是“开放许可 + 共享责任”，不是开放治理。** Inkling 权重标注 Apache-2.0，模型卡同时要求下游部署者做任务级评测、人工监督与应用侧防护。公司没有把微调和部署风险集中承担，也没有公开一套由外部社区共同决策的模型治理制度。
- **当前产品分工可以明确到两层半。** Inkling 是开放权重基础模型；Tinker 承担微调、playground 与 cookbook；“更自然的交互式协作模型系统”仍是公司方向和设计原则，本轮没有找到一个可与前两者并列、边界清晰且已成熟发布的独立产品。

## 相关页面

- [[Inkling\|Inkling]]
- [[Agentic 软件开发工作流\|Agentic 软件开发工作流]]
- [[AI Agent 安全\|AI Agent 安全]]
- [[Mira Murati\|Mira Murati]]

## 三同关系线索

- 核心人物是 [[Mira Murati\|Mira Murati]]；其本人前任职见人物页。Reuters 和公司官网还把团队概括为来自 OpenAI、Meta、Mistral 等机构，并包含曾参与 ChatGPT、Character.ai、Mistral、PyTorch、OpenAI Gym、Fairseq、Segment Anything 等产品/开源项目的人；在逐名核验前，这些聚合团队画像不建公司到前雇主的直接图边。
- 同事/共事线索最强，不是同乡或同校：OpenAI 前员工网络、开源 AI 工具网络和模型工程团队是公司早期组织能力来源。
- 由于 AI 人才流动很快，具体联合创始人、CTO 和返聘关系需要按日期核验；本页只保留“前 OpenAI/Meta/Mistral/开源项目共事网络”这一结构性观察。

## 证据

- 原始资料快照（本地归档）
- [Inkling: Our Open-Weights Model](https://thinkingmachines.ai/news/introducing-inkling/)
- [Thinking Machines Lab 官网](https://thinkingmachines.ai/)
- [Reuters: Mira Murati's startup poaches OpenAI researchers](https://www.reuters.com/technology/artificial-intelligence/mira-muratis-new-ai-startup-poaches-20-openai-researchers-sources-say-2025-02-19/)
- [Inkling 官方模型卡与权重](https://huggingface.co/thinkingmachines/Inkling)
- 原始资料快照（本地归档）
