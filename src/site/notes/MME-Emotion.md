---
{"dg-publish":true,"permalink":"/MME-Emotion/","title":"MME-Emotion","tags":["情绪计算","多模态AI","评测基准","情感智能"],"created":"2026-08-07","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"MME-Emotion","aliases":["MME Emotion"],"source_count":6,"sources":["raw/2026-08-07-luyao-b039-193-ICLR-2026｜多模态大模型真的理解情绪吗？MME-Emotion给出了系统答案-1c97ce30.md","[[MINE 数据集\|MINE 数据集]]","https://arxiv.org/abs/2508.09210","https://github.com/QwenAudio/MME-Emotion","https://huggingface.co/datasets/FunAudioLLM/MME-Emotion","raw/2026-08-10-研究制品复核-batch-014.md"],"tags":["情绪计算","多模态AI","评测基准","情感智能"],"created":"2026-08-07","updated":"2026-08-10"}}
---

# MME-Emotion

MME-Emotion 是面向多模态大模型情感智能的评测基准节点。它的价值不只是给模型排名，而是把“识别情绪标签”与“解释情绪线索和原因”区分开来。

## 观察

- MME-Emotion 把多模态情绪能力拆成识别和推理两个层面：模型不仅要说出情绪类别，还要指出面部表情、语音语调、语言内容或场景线索如何支持判断。
- 来源称该基准包含约 6500 段视频、27 类真实场景和 8 类情感任务，覆盖实验室情绪识别、真实场景、噪声条件、细粒度情绪、多标签情绪、情感倾向和意图识别等方向。
- 评测指标包括 Recognition Score、Reasoning Score 和 Chain-of-Thought Score，说明 [[情绪计算\|情绪计算]] 的评估正在从单一准确率转向“答案是否对、理由是否合理、证据是否来自多模态线索”。
- 与 [[多模态心理健康理解\|多模态心理健康理解]] 相比，MME-Emotion 更偏通用情感智能 benchmark；前者更偏心理健康场景中的情绪-认知画像生成。
- 与 [[MINE 数据集\|MINE 数据集]] 相比，MME-Emotion 更强调模型能否识别并解释情绪线索；MINE 更强调社交媒体中情绪、意图和缺失模态的联合任务构造。
- 来源提到主流多模态模型在该基准上情绪识别和综合推理表现仍低，说明“看懂图像/视频”不等于“理解情绪”。

## 边界

- 情绪推理 benchmark 不等于真实人的情绪事实。模型解释看起来合理，也可能只是事后合理化。
- 自动评测可以降低人工成本，但对情绪、语境和文化差异的评分仍需要人工审计和跨人群验证；五名专家验证评估策略，不等于建立了跨文化人群效度。

## 截至 2026-08-10 的复现状态

- 官方仓库已公开评测代码、MIT 许可证和完整数据入口，仓库在 2026-01 标注 6,500 段视频数据已全部上传。因此“是否只有论文而无数据/代码”的问题已回答：不是。
- 评估链会把被测模型回答、预提取音频线索交给 GPT-4o 做步骤抽取/评分，再计算 Recognition、Reasoning 与 CoT 指标。这使评测可运行，也引入评估器版本、提示、音频线索提取和 API 随机性的依赖。
- 榜单可用于同协议比较，不应直接解释为模型读出了人的真实情绪。跨语言、跨文化、临床或高风险部署仍需预注册的人类标注协议、群体分层和误差审计。
- 重开条件是官方冻结评估器版本与完整配置，或独立团队报告同一数据上的可重复结果和跨人群效度。

## 相关页面

- [[情绪计算\|情绪计算]]
- [[多模态心理健康理解\|多模态心理健康理解]]
- [[NeuroAI\|NeuroAI]]
- [[MINE 数据集\|MINE 数据集]]
- [MME-Emotion paper](https://arxiv.org/abs/2508.09210)
- [MME-Emotion official repository](https://github.com/QwenAudio/MME-Emotion)
- [MME-Emotion dataset](https://huggingface.co/datasets/FunAudioLLM/MME-Emotion)
- 原始资料快照（本地归档）

## 证据

- 原始资料快照（本地归档）
- [[MINE 数据集\|MINE 数据集]]
