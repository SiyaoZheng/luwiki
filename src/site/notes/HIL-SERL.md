---
{"dg-publish":true,"permalink":"/HIL-SERL/","title":"HIL-SERL","tags":["#机器人强化学习","#人类在环","#部署纠错","#真机数据"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"HIL-SERL","tags":["#机器人强化学习","#人类在环","#部署纠错","#真机数据"],"sources":["raw/2026-08-10-人类活动到机器人训练公开证据.md","https://arxiv.org/abs/2410.21845","https://hil-serl.github.io/","https://github.com/huggingface/lerobot/blob/main/docs/source/hil_data_collection.mdx","https://github.com/huggingface/lerobot/blob/main/docs/source/hilserl.mdx","raw/2026-08-10-LeRobot-v0.6-HIL记录语义核验.md","https://arxiv.org/abs/2605.19924"],"created":"2026-08-10","updated":"2026-08-10"}}
---

# HIL-SERL

HIL-SERL 是把离线人类示范、真机在线强化学习和部署时人工干预组合起来的视觉机器人学习系统。它采集的是机器人本体实际经历的状态、动作、奖励与恢复，因此与自然人类视频和接口示范处在不同数据层。

## 数据闭环

- 少量遥操作样本同时用于训练二元奖励分类器和初始化示范 replay buffer。
- 真机 actor 持续探索，learner 用 Soft Actor-Critic 更新策略；人类可在危险或无效行为出现时接管并示范恢复。
- LeRobot v0.6 的通用 HIL 专页把“自动策略与人类在同一 task episode 中多次交接并连续记录”写成概念流程；但 v0.6.0、v0.6.1 与截至 2026-08-10 的 main 默认均为 corrections-only。只有显式 `record_autonomous=true` 才记录两类帧，而且其 episode 是按文件大小估算的时间切片，并不等于任务 episode。
- 与只记录成功示范相比，这种结构主动采集策略自己的分布偏移和失败邻域。

## 作者结果与范围

HIL-SERL 论文通常使用约 20–30 条离线示范；作者报告在动态操作、精密装配与双臂协作等任务上，1–2.5 小时真机训练达到接近满分的成功率，并相对其基线平均约 2 倍成功率、1.8 倍执行速度。

这些是作者在特定工作台、视觉配置、任务与安全控制下的结果，不是普适部署保证。LeRobot 教程也建议从 5–10 秒短任务开始，说明长程任务和复杂场景并未被教程默认覆盖。

## 独立负面边界

2026 年 RoHIL 论文报告，标准 HIL-RL 策略在移动到几米外、仅光照不同的工作台时可能显著失效。该工作使用世界模型重照明、旧环境 replay 和策略锚定改善跨光照迁移。这是对“训练工作台近乎完美成功率”的重要外部限制，但不是对 HIL-SERL 所有任务和硬件的全面复现。

因此 HIL 数据的价值应同时报告接管策略、人工负担、干预选择偏差、场景/光照留出、安全事件和无人工接管时的成功率，而不能只报告训练末期峰值。

## 相关页面

- [[人类活动数据\|人类活动数据]]
- [[Universal Manipulation Interface\|Universal Manipulation Interface]]
- [[具身智能数据基础设施\|具身智能数据基础设施]]
- [[具身智能系统工程\|具身智能系统工程]]
- [[世界模型技术路线\|世界模型技术路线]]

## 证据

- 原始资料快照（本地归档）
- [HIL-SERL 论文](https://arxiv.org/abs/2410.21845)
- [HIL-SERL 项目页](https://hil-serl.github.io/)
- [LeRobot HIL 数据采集文档](https://github.com/huggingface/lerobot/blob/main/docs/source/hil_data_collection.mdx)
- [LeRobot HIL-SERL 教程](https://github.com/huggingface/lerobot/blob/main/docs/source/hilserl.mdx)
- [RoHIL 论文](https://arxiv.org/abs/2605.19924)

## 与 LeRobot DAgger 数据采集的区分

HIL-SERL 把奖励分类器、在线 Soft Actor-Critic、示范 replay 与人工接管组合为强化学习系统；LeRobot v0.6.x 的通用 DAgger/HIL 数据采集默认只保存人工纠错窗口，显式开启 continuous 才把自主片段与人工片段写入同一文件切片，之后继续做模仿学习微调。两者共享“在策略访问的失败邻域采数据”，但训练目标、数据字段、风险与效果证据不同，不能用 HIL-SERL 的论文成功率替代 LeRobot DAgger 实现的独立验证。精确实现的复现缺口见 Bead luwiki-4i3.7。



## 与 LeRobot 统一 rewards API 的边界（2026-08-10）

LeRobot v0.6 中真正进入在线 actor→SAC learner 的，是 HIL-SERL 的 reward classifier 专用链：环境 `step` 后由 RewardClassifierProcessorStep 直接调用 `Classifier.predict_reward()`，把结果写入 transition 的 reward/done，再交给 learner。这条链没有调用统一的 `PreTrainedRewardModel.compute_reward()`。

因此，HIL-SERL 的在线奖励闭环不能替 Robometer、TOPReward 或 SARM 证明通用在线接线。后二者在当前仓库中的生产调用只到离线 progress 标注与 RA-BC；SARM 虽可训练并可生成 progress，文档中的 online/offline RL 仍是应用前景。详见 [[机器人奖励模型\|机器人奖励模型]] 与 原始资料快照（本地归档）。

<!-- issue: luwiki-4i3.3.1 -->

## LeRobot DAgger 版本边界（2026-08-10）

LeRobot 仓库中至少有两条不能按字段名近似合并的数据路径：

- 通用 `lerobot-rollout` DAgger 路径把控制来源写为 dataset 字段 `intervention`；v0.6.0、v0.6.1 与当日 main 都默认只保存纠错窗口。
- HIL-SERL 在线 RL 路径把介入状态放进 actor→learner transition／replay 语义，并与 reward、done 和 SAC 更新相连。它不是给通用 DAgger parquet 自动补 reward 或 outcome 的同一 writer 路径。

这一区分也决定评测分母：默认 DAgger 制品没有自主段，不能计算介入率；显式 continuous 制品虽能给出帧级控制权序列，但 episode 是存储切片且没有任务 outcome。含人工纠错后的完成只能报告 assisted completion，不能用 HIL-SERL 的成功率或一个 `success=true` 标签替代 autonomous success。

证据：原始资料快照（本地归档）
