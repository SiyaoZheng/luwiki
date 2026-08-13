---
{"dg-publish":true,"permalink":"/OpenDW/","title":"OpenDW","tags":["#开源项目","#世界模型","#具身智能"],"created":"2026-08-09","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"OpenDW","aliases":["dexmal/opendw"],"source_count":4,"sources":["https://github.com/dexmal/opendw","https://huggingface.co/Dexmal/DW05-Base","raw/2026-08-07-luyao-b009-46-最近我们发现，世界模型开始有了更务实的场景应用...-d117db3b.md","raw/2026-08-10-未决问题技术模型补证-batch-001.md"],"tags":["#开源项目","#世界模型","#具身智能"],"created":"2026-08-09","updated":"2026-08-10"}}
---

# OpenDW

OpenDW 是 [[原力灵机\|原力灵机]] 在 GitHub 发布的开源项目与仓库，用于提供 [[DW0.5\|DW0.5]] 的模型权重入口、训练和推理代码、数据格式及运行说明。

## 关系与边界

- **维护组织**：[[原力灵机\|原力灵机]] 的 Dexmal GitHub 组织。
- **核心模型**：[[DW0.5\|DW0.5]]；模型名称与仓库名称不同，不能相互充当 alias。
- **当前公开范围**：仓库以 Apache-2.0 发布训练/推理代码、数据格式、RoboTwin 风格示例和 Base 权重入口，支持 action-conditioned rollout 的复核。
- **边界**：仓库开源不表示训练数据、全部评测环境和生产部署方案均已公开。README 截至 2026-08-10 仍将 Value Expert 标为后续更新，因此现有 release 不能被描述为完整 VLA 后训练闭环；本轮也没有找到 LIBERO 或真实机器人部署的公开对照结果。

## 相关页面

- [[原力灵机\|原力灵机]]
- [[DW0.5\|DW0.5]]
- [[世界模型技术路线\|世界模型技术路线]]

## 证据

- [OpenDW GitHub 仓库](https://github.com/dexmal/opendw)
- [Dexmal/DW05-Base Hugging Face 模型页](https://huggingface.co/Dexmal/DW05-Base)
- 原始资料快照（本地归档）
- 原始资料快照（本地归档）



## 公开仓库的能力账本（2026-08-10）

截至本轮固定 commit 核验，OpenDW 的公开能力应分层记录：

- **已公开**：Apache-2.0 代码与权重入口、video/action 训练和推理路径、RobotWin recipe、RoboTwin2 evaluator、WorldArena rollout 脚手架。
- **代码可核验**：action expert 直接输出 32 步动作块，执行 8 步重规划；联合路径可生成动作与 9 帧视频，动作条件路径也可单独生成视频。
- **未公开**：Value Expert、完整 multi-source 数据卡、真实/合成比例、训练和生成成本、作者基线表、严格真机量化结果。
- **未独立复现**：当前检索未找到第三方在固定 checkpoint、normalization、任务和 seed 下的 RobotWin 对照；这只是日期化检索边界，不证明复现不存在。

这使 OpenDW 与 [[GR00T-Dreams\|GR00T-Dreams]] 的功能边界更清楚：前者当前是直接 action+video 的 world-action 组件，后者是生成视频后用 IDM 恢复伪动作的离线数据流水线。仓库 Apache-2.0 也不能自动替代未列明训练数据的许可。

证据：[OpenDW](https://github.com/dexmal/opendw)、[DW05-Base](https://huggingface.co/Dexmal/DW05-Base)、原始资料快照（本地归档）。



## RobotWin 适配器的可执行性审计（2026-08-10）

OpenDW 的“有评测脚手架”不能继续等同于“当前公开 release 可端到端复跑”：

- 代码固定在唯一 commit `e33befa8005a1585e0140dbf464566e90bc79aa1`；DW05-Robotwin 固定 revision `6ab5f9e2636610cba440d08264663efe70c3f761`，bundle 与 norm stats 已实际发布。
- current RoboTwin 已在 commit `85c7f84` 删除 OpenDW 调用的旧 `script/eval_policy.py` 并迁移 XPolicyLab；OpenDW launcher 在 current main 会因缺少 `policy/` 目录提前失败。
- 即使 pin 最后兼容旧入口，adapter 仍把 `text_cfg_scale`、`action_cfg_scale`、`negative_prompt` 传给不接受这些字段的 dataclass；episode 数与输出目录 overrides 也不被旧 evaluator 消费。
- 两次 `press_stapler` / `demo_clean` / seed 0 preflight 都在 0 episode 前结束，因此 success、partial progress、模型 latency、显存和失败视频只能记为 N/A。公开 runner 的 50 episodes 默认值也不符合 RoboTwin leaderboard 每任务 100 trials 的协议。
- README 引用的 `script/dw/infer_aloha_joint.py` 与三任务 demo split 均未进入固定 repo tree。精确检索未发现 issue、PR、带独立 commit 的 fork 或第三方复现。
- policy 的 `infer_action()` 仍依赖 joint video/action/MoT bundle，不能作为纯 action ablation。Value Expert、RL 更新路径、正式技术报告和 DW05 专属数据卡继续缺失。

因此，OpenDW 当前最准确的可复现性标签是：**静态代码与 checkpoint 可固定，公开 evaluator 尚未达到可执行 benchmark artifact**。完整审计见 原始资料快照（本地归档）。



## 压力测试标签（2026-08-10）

OpenDW 当前应标为“组件可固定、benchmark artifact 未执行”。[[机器人世界模型压力测试\|机器人世界模型压力测试]] 要求把静态接口、有效 episode、strict success、动力学/接触扰动与真机校准分开；现有 action/video 代码不能替代这些实验。固定版本两次前检均为 0 episode，所有执行结果为 N/A。证据见 原始资料快照（本地归档）。
