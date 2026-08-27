---
{"dg-publish":true,"permalink":"/MINE 数据集/","title":"MINE 数据集","tags":["情绪计算","多模态AI","意图理解","数据集","社交媒体"],"created":"2026-08-07","updated":"2026-08-25","dg-note-properties":{"status":"seed","title":"MINE 数据集","aliases":["MINE","Multimodal Intention and Emotion"],"source_count":2,"sources":["raw/2026-08-07-luyao-b056-275-MINE多模态意图情绪数据集-208ba6cc.md","https://proceedings.neurips.cc/paper_files/paper/2024/hash/65a39213d7d0e1eb5d192aa77e77eeb7-Abstract-Conference.html"],"tags":["情绪计算","多模态AI","意图理解","数据集","社交媒体"],"created":"2026-08-07","updated":"2026-08-25","authors":[],"publication_date":"2024","venue":"NeurIPS 2024","doi":null,"arxiv":null,"affiliations":[],"datasets":["MINE (>20,000 multimodal social-media posts)"],"related_companies":[],"as_of":"2026-08-07"}}
---

# MINE 数据集

MINE 数据集把社交媒体中的意图理解和情绪识别放在同一个多模态任务里。它的观察价值在于：现实表达往往同时包含情绪、行动意图和缺失/不完整模态，而不是干净的单一情绪标签。

## 观察

- MINE 面向文本、图像、视频和音频混合的社交媒体帖子，来源称规模超过 20,000 条，并保留现实中的模态缺失和组合不稳定性。
- 数据标注把意图和情绪拆开但联合建模：意图更接近多标签任务，情绪更接近主导情绪识别。这样可以观察批评、安慰、教学、同意、反对等交互意图如何与情绪状态共现。
- 对 [[情绪计算\|情绪计算]] 来说，MINE 的关键不是“多一个情绪数据集”，而是把情绪信号放回社交行动语境中。情绪标签如果脱离意图，容易把表达当作心理事实；意图如果脱离情绪，又会低估互动语气和关系位置。
- BEAR 框架用 BEIFormer 挖掘情绪-意图关系，用 Modality Asynchronous Prompt 处理缺失模态，说明多模态情绪理解正在从早期融合转向不确定性建模和标签关系建模。
- 与 [[MME-Emotion\|MME-Emotion]] 相比，MINE 更偏数据集和任务构造；MME-Emotion 更偏多模态大模型是否能识别并解释情绪线索的评测。

## 边界

- 微信标题称 “CVPR 2025”，但正文给出的论文入口是 NeurIPS 2024；本页按可见论文入口记录，不把标题会议归属提升为事实。
- 社交媒体意图和情绪标注具有主观性，不能直接等同于发帖者真实心理状态。
- 数据集如果包含用户生成内容，需要持续关注隐私、授权、去标识化和跨文化泛化问题。

## 相关页面

- [[情绪计算\|情绪计算]]
- [[MME-Emotion\|MME-Emotion]]
- [[多模态心理健康理解\|多模态心理健康理解]]
- [[社交媒体注意力资本\|社交媒体注意力资本]]

## 证据

- 原始资料快照（本地归档）
- [NeurIPS 2024 paper page](https://proceedings.neurips.cc/paper_files/paper/2024/hash/65a39213d7d0e1eb5d192aa77e77eeb7-Abstract-Conference.html)
