---
{"dg-publish":true,"permalink":"/Worldscape-MoE/","title":"Worldscape-MoE","tags":["#世界模型","#MoE","#具身智能","#控制","#仿真"],"created":"2026-08-07","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"Worldscape-MoE","source_count":9,"sources":["raw/2026-08-07-luyao-b008-37-锦秋基金被投企业「Manifold-AI-流形空间」开源业内首个面向异源动作控制的世界模型-MoE-训练框架-Worldscape-MoE-04802bd6.md","https://worldscape-moe.com","[[世界模型\|世界模型]]","https://arxiv.org/abs/2607.03964","https://github.com/EmbodiedCity/Worldscape-MoE.code","https://huggingface.co/EmbodiedCity/Worldscape-MoE","https://huggingface.co/datasets/EmbodiedCity/Worldscape-MoE-Dataset","https://arxiv.org/abs/2602.08971","raw/2026-08-10-未决问题技术模型补证-batch-001.md"],"tags":["#世界模型","#MoE","#具身智能","#控制","#仿真"],"created":"2026-08-07","updated":"2026-08-10"}}
---

# Worldscape-MoE

Worldscape-MoE 是 Manifold AI 流形空间相关团队发布的异源动作控制世界模型框架。它关注的问题是：locomotion、robotic manipulation、egocentric hand motion 等不同控制接口，如何在同一个世界模型中共同学习，而不是各自训练成互不相通的孤岛。

## 观察

- Worldscape-MoE 把异源动作控制视为 scaling bottleneck：相机轨迹、机械臂动作、手部关节信号表示不同，但都约束同一个物理世界中的时空连续性、物体一致性、接触和动作因果。
- 它采用 DiT-based world model 和 control-aware Mixture-of-Experts：共享专家沉淀跨控制的世界动态，控制专属专家解释不同动作接口的细粒度语义。
- 关键观察不是“把所有动作翻译成统一 token”，而是“统一动作作用于世界之后的动态规律”。这比单纯做视频生成更接近 [[世界模型\|世界模型]] 作为 simulator/planner 的方向。
- 对 [[具身智能数据基础设施\|具身智能数据基础设施]] 来说，Worldscape-MoE 指向一种可扩展数据路线：每新增一种控制信号，不必重训一个模型，而是给同一世界模型接入新控制专家。

## 截至 2026-08-10 的答案

- **论文、代码、数据子集和模型权重均已出现。** arXiv 论文、Apache-2.0 代码仓库、训练/推理与校验工具、四类模态各 5,000 个样本的公开子集，以及 Hugging Face 权重/数据入口，使“尚未公开技术材料”这一问题过时。
- **公开不等于完整开放。** 当前仓库明确写的是数据子集；模型页采用单独的 `other` 许可标签，不能把代码的 Apache-2.0 自动外推给权重或数据，更不能据此推断全部训练数据和评测环境已公开。
- **作者指标与独立复现仍需分开。** WorldArena 提供同时评价视觉质量与功能效用的框架，项目方也报告了相应指标；本轮没有找到独立团队对训练、榜单和下游机器人收益的完整复现。因此“业内首个”“长期榜首”仍只保留为项目方主张，不写成行业事实。

## 相关页面

- [[世界模型\|世界模型]]
- [[世界模型创业热\|世界模型创业热]]
- [[具身智能数据基础设施\|具身智能数据基础设施]]

## 证据

- 原始资料快照（本地归档）
- [Worldscape-MoE 项目站](https://worldscape-moe.com)
- [Worldscape-MoE 论文](https://arxiv.org/abs/2607.03964)
- [Worldscape-MoE 代码仓库](https://github.com/EmbodiedCity/Worldscape-MoE.code)
- [Worldscape-MoE 模型权重](https://huggingface.co/EmbodiedCity/Worldscape-MoE)
- [Worldscape-MoE 数据集](https://huggingface.co/datasets/EmbodiedCity/Worldscape-MoE-Dataset)
- [WorldArena 论文](https://arxiv.org/abs/2602.08971)
- 原始资料快照（本地归档）
