---
{"dg-publish":true,"permalink":"/DW0.5/","title":"DW0.5","tags":["世界模型","具身智能","VLA","后训练","开源模型"],"created":"2026-08-07","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"DW0.5","aliases":["DW05"],"source_count":5,"sources":["raw/2026-08-07-luyao-b009-46-最近我们发现，世界模型开始有了更务实的场景应用...-d117db3b.md","https://github.com/dexmal/opendw","https://huggingface.co/Dexmal/DW05-Base","raw/2026-08-10-未决问题技术模型补证-batch-001.md","raw/2026-08-10-残余任务信号收口-batch-032.md"],"tags":["世界模型","具身智能","VLA","后训练","开源模型"],"created":"2026-08-07","updated":"2026-08-10"}}
---

# DW0.5

DW0.5 / DW05 是 [[原力灵机\|原力灵机]]（Dexmal）发布、通过 [[OpenDW\|OpenDW]] 仓库开放的 action-conditioned embodied world model。它把 [[世界模型\|世界模型]] 放在 [[具身智能数据基础设施\|具身智能数据基础设施]] 的后训练环节中：世界模型不是单纯打榜或生成视频，而是作为 VLA 的 learned environment，帮助机器人策略低成本试错。

## 观察

- DW0.5 的核心定位是为 VLA 构建闭环后训练环境：VLA 采样候选动作，世界模型根据动作生成未来 rollout，评分模型或 value expert 对候选未来打分，再把反馈用于动作选择、偏好数据构造或 RL 后训练。
- 这一路线把世界模型从 renderer 推向 simulator/planner 的中间层。模型需要对动作有响应，能模拟成功和失败，而不是只生成看起来顺利完成任务的视频。
- [[OpenDW\|OpenDW]] 官方 README 将 DW05 描述为面向 embodied decision-making 的 multimodal world model，输入包括语言、图像/视频、机器人类型、状态和动作，并把 future video prediction、action generation 和 state-value estimation 放在同一框架下。
- 官方仓库已公开权重、推理代码和训练代码；Hugging Face 上的 `Dexmal/DW05-Base` 是对应的 Base 模型入口。
- 媒体来源提到“真机训练数据需求下降约 60%、整体训练成本下降约 40%”。截至 2026-08-10，公开仓库与模型卡没有给出能复算这两个比例的对照表、成本口径或真实机器人部署结果，因此它们只能标为媒体披露值，不能写成已建立的模型效果。只有同任务、同策略、同成功率口径的官方实验表或独立复现同时披露真实数据量、人工、算力与部署结果时，才重开这两个比例的证据等级。

## 截至 2026-08-10 的答案

- **Value Expert 仍未形成可复核的公开实现。** OpenDW README 截至本轮仍明确提示该组件将在后续更新；因此不能把现有 release 写成完整开源的“world model + value feedback + VLA 后训练”闭环。
- **当前可复核范围是 RoboTwin 风格的 action-conditioned rollout。** 公开仓库提供 episode 格式、模型入口、训练/推理代码和相应示例；本轮没有找到 LIBERO 或真实机器人任务的公开对照结果，原问题中把这些 benchmark 并列为已有评测范围并不准确。
- **真实部署增益和成本—偏差边界尚无控制比较。** 媒体所述真机数据和总成本降幅缺少可复算实验；要结题至少需要相同任务、策略和成功率口径下，对传统仿真、遥操作、真实 rollout 与 learned environment 的数据量、人工、算力、误差和部署成功率比较。
- **OpenDW 已是公开训练/推理底座，但不是完整 VLA 管线。** video/action/value heads 的总体结构和 Base checkpoint 已公开；Value Expert 与可复现的 VLA 更新环节仍缺失，所以更准确的定位是“可扩展的世界模型组件发布”。

## 相关页面

- [[世界模型\|世界模型]]
- [[具身智能数据基础设施\|具身智能数据基础设施]]
- [[世界模型创业热\|世界模型创业热]]
- [[清华具身智能创业生态\|清华具身智能创业生态]]
- [[原力灵机\|原力灵机]]
- [[OpenDW\|OpenDW]]

## 证据

- 原始资料快照（本地归档）
- [OpenDW GitHub 仓库](https://github.com/dexmal/opendw)
- [Dexmal/DW05-Base Hugging Face 模型页](https://huggingface.co/Dexmal/DW05-Base)
- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
