---
{"dg-publish":true,"permalink":"/DW0.5/","title":"DW0.5","tags":["#世界模型","#具身智能","#VLA","#后训练","#开源模型"],"created":"2026-08-07","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"DW0.5","aliases":["DW05"],"source_count":5,"sources":["raw/2026-08-07-luyao-b009-46-最近我们发现，世界模型开始有了更务实的场景应用...-d117db3b.md","https://github.com/dexmal/opendw","https://huggingface.co/Dexmal/DW05-Base","raw/2026-08-10-未决问题技术模型补证-batch-001.md","raw/2026-08-10-残余任务信号收口-batch-032.md"],"tags":["#世界模型","#具身智能","#VLA","#后训练","#开源模型"],"created":"2026-08-07","updated":"2026-08-10"}}
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



## 固定 commit 的 video-action 核验（2026-08-10）

对 OpenDW 初始公开 commit 的代码回读进一步限定了上文“learned environment”定位：

- 当前 policy 路径由 action expert **直接预测动作**，不是先生成视频再用 IDM 恢复动作。默认 action horizon=32，执行 8 步后重规划，使用 10 个 denoise steps。
- 联合路径可以同时输出动作与 9 帧视频；另一个 rollout 路径接收外部绝对动作作为条件生成视频。两者都不同于 [[DreamGen\|DreamGen]] / [[GR00T-Dreams\|GR00T-Dreams]] 的离线 video→IDM→伪动作链。
- RobotWin 14 维动作需依赖公开 normalization statistics 做 quantile/z-score 反归一化；delta-first-frame 模式只对关节维加回当前 qpos，夹爪保持绝对量。checkpoint 与 stats 是同一个复现单元。
- Base 卡只披露 step=140000、32D action/proprio 与 bf16；multi-source 数据的来源、规模、真实/合成比例仍不可恢复。
- 公开 artifact 有 RoboTwin2 evaluator 和 WorldArena rollout 脚手架，但没有 DW0.5 自己的基线表、效果量或真机试验。Value Expert 仍待发布。

因此，当前可验证定位是 video/action world-action component；“三头完整后训练闭环”、60% 真机数据下降和 40% 成本下降仍是待技术报告或独立实验核验的上游宣称。

证据：[固定 policy 代码](https://github.com/dexmal/opendw/blob/e33befa8005a1585e0140dbf464566e90bc79aa1/dexbotic/policy/dw05_policy.py)、[action transform](https://github.com/dexmal/opendw/blob/e33befa8005a1585e0140dbf464566e90bc79aa1/dexbotic/data/dataset/dw05/transform/action.py)、原始资料快照（本地归档）。



## 版本化复跑审计（2026-08-10）

固定 OpenDW commit `e33befa8005a1585e0140dbf464566e90bc79aa1`、DW05-Base revision `0f9e8bc1e1352211cf260f80c7455d147b38baec` 和 DW05-Robotwin revision `6ab5f9e2636610cba440d08264663efe70c3f761` 后，公开物边界可以进一步收紧：

- RobotWin bundle 约 26.24 GB，已包含匹配的 `norm_stats.json`。统计文件记录 27,500 episodes 与 6,075,103 transitions，但不含任务、clean/random 配比、数据 revision 或真实/合成 provenance，不能直接当作 checkpoint 数据卡。
- 复跑前检在 current RoboTwin 与最后兼容旧入口两个 revision 上都只启动了 0 episode；前者因上游已迁移 XPolicyLab 而找不到旧 `policy/`，后者在模型前因 `sapien` 缺失终止。严格 success、partial progress、模型延迟、显存和失败视频均为 **N/A**，不是 0%。
- 更关键的阻塞来自公开代码：adapter 传入 dataclass 不接受的三个参数；episode 数与输出路径 overrides 不被旧 evaluator 消费；README 引用的单样本脚本和三任务 demo 也未随 release 发布。换 Linux/NVIDIA 之前仍需先修接口。
- 当前 `infer_action()` 是使用联合 bundle 与首帧 video cache 的 action-only inference path，不是“去掉 video expert”的纯 action 消融。没有 matched pure-action checkpoint 或结果，因而 video 联训增益、延迟和显存差仍不可计算。
- RoboTwin 官方 clean-to-random co-training board 提供 π0.5、X-WAM、FastWAM 等 50 tasks × 100 trials 基线，但 DW05 没有同协议 Easy/Hard 分数，不能计算 effect。精确检索也未发现第三方 DW0.5/OpenDW 复现。
- Value Expert、正式技术报告和 DW05 专属数据卡仍没有可调用、可训练、可评测的公开物；当前证据仍是 simulation artifact 审计，不是真机验证。

完整命令、版本、失败表和重开条件见 原始资料快照（本地归档）。



## 在压力测试矩阵中的当前状态（2026-08-10）

[[DW0.5\|DW0.5]] / [[OpenDW\|OpenDW]] 的静态代码说明 action expert 可直接输出动作块、联合路径可生成视频，但固定版本的两次 RobotWin 前检均在 0 episode 前终止。因而在 [[机器人世界模型压力测试\|机器人世界模型压力测试]] 中，视觉、运动学、动力学、接触、长程、动作可执行、真机闭环结果和真机相关性都不能凭仓库结构记为实验覆盖；IDM/动作执行列必须写 **N/A**，不是 0%。

action horizon、replan、normalization 与输出接口只能记入工件能力账本，不能标成间接运动学实验；当前运动学列为 ×。只有公开 runner 能进入有效 episode 并报告 matched baseline 后，才可升级对应实验列。证据见 原始资料快照（本地归档）。
