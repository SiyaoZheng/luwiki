---
{"dg-publish":true,"permalink":"/QA-MoE/","title":"QA-MoE","tags":["#情绪计算","#多模态AI","#MoE","#鲁棒性","#不确定性"],"created":"2026-08-07","updated":"2026-08-26","dg-note-properties":{"status":"seed","title":"QA-MoE","source_count":3,"sources":["raw/2026-08-07-luyao-b028-138-QA-MoE-Towards-a-Continuous-Reliability-Spectrum-with-Quality-Aware-Mi-35be616e.md","raw/2026-08-07-luyao-b049-242-多模态情感分析-QA-MoE-791e91da.md","https://arxiv.org/abs/2604.05704"],"tags":["#情绪计算","#多模态AI","#MoE","#鲁棒性","#不确定性"],"created":"2026-08-07","updated":"2026-08-26","product_name":"QA-MoE","developer":null,"operator":null,"owner":null,"manufacturer":null,"launch_date":null,"product_status":"active_research","category":null,"platforms":[],"related_products":[],"customers":[],"website":null,"as_of":"2026-08-25","status_note":"公开研究方法"}}
---

# QA-MoE

QA-MoE 是面向鲁棒多模态情感分析的质量感知 Mixture-of-Experts 方法。它的核心问题是：真实输入中的文本、音频和视觉模态不会简单地“有/没有”，而是在噪声、缺失和质量退化之间连续变化。

## 观察

- QA-MoE 把模态缺失、模态噪声和混合缺陷统一成连续可靠性谱，而不是把它们当作互不相关的离散场景。
- 概率特征建模让模态表征带有不确定性；方差越高，质量分数越低，模型越不应盲目信任该模态。
- 质量感知路由把语义 gating 和质量 gating 结合起来，使 MoE 专家选择同时考虑“输入说了什么”和“输入是否可靠”。
- 双分支预测和异方差损失让模型同时输出情感预测与不确定性，在噪声样本上降低过度惩罚。
- 这一方法对 [[情绪计算\|情绪计算]] 的意义是：情绪识别系统不能假设多模态输入始终干净完整；可靠性估计应成为模型结构的一部分。
- 当前来源主要是论文元数据和中文技术解读；实验结论、数据集和对比结果应以 arXiv 论文为准。

## 相关页面

- [[情绪计算\|情绪计算]]
- [[多模态心理健康理解\|多模态心理健康理解]]
- [[MME-Emotion\|MME-Emotion]]

## 证据

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [arXiv: QA-MoE](https://arxiv.org/abs/2604.05704)
