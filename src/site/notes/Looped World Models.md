---
{"dg-publish":true,"permalink":"/Looped World Models/","title":"Looped World Models","tags":["#世界模型","#LoopEngineering","#语言模型"],"created":"2026-08-07","updated":"2026-08-26","dg-note-properties":{"status":"processed","title":"Looped World Models","source_count":4,"sources":["raw/2026-08-26-脸谱心智官网产品论文与商业化核验.md","raw/2026-08-07-luyao-b015-72-AI圈刚开始谈Loop-Engineering，两位95后博士已经盯上了人类闭环数据-1e42d860.md","https://arxiv.org/abs/2606.18208","raw/2026-08-10-研究制品复核-batch-014.md"],"tags":["#世界模型","#LoopEngineering","#语言模型"],"created":"2026-08-07","updated":"2026-08-26","product_name":"Looped World Models","developer":"[[脸谱心智\|脸谱心智]]","product_status":"active_research","category":"technical_report","as_of":"2026-08-26","status_note":"FaceMind Research Asia公开的文本世界模型技术报告"}}
---


# Looped World Models

Looped World Models（LoopWM）是[[脸谱心智\|脸谱心智]]在2026年6月发布的一种文本世界模型架构。它用同一组Transformer参数反复更新潜在状态，使模型在输出预测前进行多轮内部计算。这里的“loop”发生在模型内部，区别于智能体在外部调用工具、检查结果并重试的工作流循环。

## 架构

普通Transformer通过堆叠不同参数的层增加深度。LoopWM改为反复调用参数共享的模块，并用谱约束的状态保留机制避免迭代过程中丢失关键信息。训练时采用可变循环深度，使模型不只适应固定轮数；推理时则可通过提前退出为不同样本分配不同计算量，最后再一次性解码输出。它因此用“计算时间”而非“增加每层参数”换取更深的状态修正。

这一设计更接近一种循环深度的语言模型，而不是常见的像素级视频世界模型。论文输入初始文本状态和一串动作，目标是预测五个动作后的文本状态；模型学习的是环境状态如何随动作变化，而不是直接生成视频或机器人控制信号。

## 实验

技术报告使用ScienceWorld和ALFWorld两个文本交互环境。作者的约10亿参数模型在ScienceWorld上报告68.4%的整体精确匹配率，高于论文所列Claude基线的47.2%；在ALFWorld上，它的精确匹配率为51.6%，略低于Claude的53.0%，但在F1和BLEU等指标上更高。不同闭源模型在不同任务和指标上的表现并非一致，不能把单个数字概括成全面领先。

论文把结果表述为最高约100倍的参数效率。这一比较依赖对闭源模型参数规模的估计，而且参数量不是推理计算、延迟或成本的完整代理。报告没有给出同计算预算下的广泛缩放实验，也没有公开代码、权重或训练数据。截至2026年8月26日，尚无同行评议版本或独立复现。

论文另有在线弹幕生成评测，与脸谱心智的[[叠叠社\|叠叠社]]产品相连。这说明LoopWM首先延续了公司在语言模型、角色互动和数字环境状态上的研发，而不是已经在机器人上得到验证。

## 与物理智能路线的关系

脸谱心智后来把[[Ego-NeuroLoop\|Ego-NeuroLoop]]描述为面向人类操作闭环的数据范式。两者在叙事上都强调反复更新和反馈，但公开证据尚未把它们接成一个实证系统：LoopWM论文没有使用第一视角视频、视线、EEG或肌电，也没有真机任务；Ego-NeuroLoop则没有公开数据集或模型消融。因此，LoopWM可以为公司进入物理智能提供架构语言，却不能当作机器人世界模型已经成立的证据。

## 来源

- [Li et al., “Looped World Models”](https://arxiv.org/abs/2606.18208)
- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
