---
{"dg-publish":true,"permalink":"/EgoScale/","title":"EgoScale","tags":["#第一视角数据","#机器人预训练","#本体适配","#灵巧操作"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"seed","title":"EgoScale","source_count":5,"sources":["raw/2026-08-10-人类活动数据到机器人训练外部补证.md","raw/2026-08-10-规模化人类视频到机器人预训练路线核验.md","https://research.nvidia.com/labs/gear/egoscale/","https://arxiv.org/abs/2602.16710","https://arxiv.org/abs/2606.20521"],"tags":["#第一视角数据","#机器人预训练","#本体适配","#灵巧操作"],"created":"2026-08-10","updated":"2026-08-10"}}
---

# EgoScale

EgoScale 是 2026 年提出的第一视角人类视频到灵巧机器人策略的分阶段预训练路线。它的核心不是把原始视频直接当 robot action，而是先把估计的人类腕／手运动映射到统一表示，再用少量同场景、同视角的人类与机器人数据做对齐中训，最后以目标任务机器人示范后训练。

## 数据与动作真值

| 阶段 | 规模 | 标签来源 | 能支持的主张 |
|---|---|---|---|
| Stage I 大规模预训练 | 20,854h、9,869 scenes、6,015 tasks、43,237 objects | 其中 829h 为 EgoDex；其余 20,025h 来源未披露。相机位姿和 21 点手姿主要由 SLAM／hand-pose 模型估计，再重定向到 Sharpa 22-DoF | 提供大规模视觉和人体运动先验，不是 robot-native action truth |
| Stage II aligned mid-training | 344 tasks，约 50h human + 4h robot；每任务约 30 human + 5 robot trajectories | 人体侧用 Vive wrist tracker 与 Manus gloves；机器人侧为对齐遥操作 | 把大语料与目标相机、本体和任务分布连接起来 |
| Robot post-training | 目标任务少量 robot demos | 目标机器人原生示范 | 补充可达性、接触、控制与部署约束 |

论文没有披露 Stage II 的 minibatch sampling ratio。轨迹数约 6:1、小时约 12.5:1 都不能替代实际训练采样权重。

## 作者实验

作者用 256 张 GB200 训练 Stage I，再在 R1 Pro 双臂与双 22-DoF Sharpa hands 上评测 shirt rolling、tongs、card sorting、bottle unscrewing、syringe liquid transfer，并把策略迁移到 Unitree G1 的低 DoF 手。

作者报告 1k→20k 小时使 human validation completion 从约 0.30 升到 0.71，并在 1k–20k 五个规模点得到验证损失的高拟合度。最终策略相对 no-pretraining baseline 的平均成功率约提高 54%。这个 scaling 关系来自同一作者管线、有限规模点和 human validation loss，不能写成已获独立验证的普遍规律。

论文所称 one-shot 适配仍包含每个对象 100 条 aligned human demonstrations 和 1 条 robot demonstration；它不是整个任务只看一次人类或机器人示范。

## 外部证据与边界

- 截至 2026-08-10，官方项目页仍写 GitHub Coming Soon；20,854h 数据、source manifest、模型、checkpoint 与数据许可均未公开，无法核对未命名 20,025h 的来源、同意、重叠和再分发边界。
- 上游 EgoDex 数据为 CC BY-NC-ND；论文 CC BY 4.0 只约束论文，不能授权训练视频或衍生数据发布。
- 未找到同数据、同代码、同 R1 Pro／G1 协议的无作者重叠端到端复现。
- HumanScale 与 EgoScale 无共同作者，但也有 NVIDIA 机构参与。它用另一套 5,000h ego pipeline 支持“大规模人类视频可改善机器人策略”的广义命题，不复现 EgoScale 的动作、硬件或结果。
- [[Ego2Robot\|Ego2Robot]] 的不同混合比会出现退化，[[EgoHumanoid\|EgoHumanoid]] 的精细操作仍需要较高 robot-data 权重。这些相邻证据共同说明 alignment 与目标本体 grounding 不能由小时数替代。

因此 EgoScale 目前是证据强度较高但 artifact 不闭合的作者结果，页面保持 seed。

## 相关页面

- [[人类视频到机器人策略学习\|人类视频到机器人策略学习]]
- [[人类活动数据\|人类活动数据]]
- [[Ego2Robot\|Ego2Robot]]
- [[VITRA\|VITRA]]
- [[EgoHumanoid\|EgoHumanoid]]
- [[人形机器人基础模型\|人形机器人基础模型]]
- [[具身智能数据基础设施\|具身智能数据基础设施]]

## 证据

- 原始资料快照（本地归档）
- [EgoScale 论文](https://arxiv.org/html/2602.16710)
- [EgoScale 项目页](https://research.nvidia.com/labs/gear/egoscale/)
- [HumanScale](https://arxiv.org/abs/2606.20521)
