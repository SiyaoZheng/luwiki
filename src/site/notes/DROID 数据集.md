---
{"dg-publish":true,"permalink":"/DROID 数据集/","title":"DROID 数据集","tags":["机器人数据集","遥操作","RLDS","分布式采集"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"DROID 数据集","aliases":["DROID"],"tags":["机器人数据集","遥操作","RLDS","分布式采集"],"sources":["raw/2026-08-10-开放机器人学习数据集与格式基线.md","https://droid-dataset.github.io/","https://arxiv.org/abs/2403.12945","https://droid-dataset.github.io/droid/the-droid-dataset.html","https://huggingface.co/KarlP/droid","https://huggingface.co/datasets/lerobot/droid_1.0.1"],"created":"2026-08-10","updated":"2026-08-10","source_count":6}}
---

# DROID 数据集

DROID（Distributed Robot Interaction Dataset）是用基本同构的 Franka 采集套件在多机构、多场景分布式收集的真实机器人操作数据集。它用硬件一致性换取更可控的动作语义，同时把环境与操作者多样性扩展到多个地区。

## 规模与版本

- 当前官方站点口径是约 76,000 条成功示范轨迹、350 小时、564 个场景和 86 个语义任务类，由 50 名采集者在 12 个月内完成。
- 初版论文摘要曾写 84 tasks；当前站点和更新论文使用 86，比较时应保留版本。
- 发布数据另含约 16,000 条失败轨迹。它们是人类全程遥操作失败，不是策略自主 rollout 或 [[HIL-SERL\|HIL-SERL]] 式部署接管数据。
- 2024 年语言增强覆盖约 75,000 个成功 episode 的 95%，每条三种自然语言标注；2025 年改进标定只覆盖 36,000 个 episode。子集增强不能被误写为全库同等标定精度。

18 套 robot setups 主要采用相同 Franka Panda、Robotiq 夹爪和标准化视觉/遥操作配置，不能写成 18 种 embodiments。

## 采集与格式

采集系统包含两台外部 ZED2 和一台腕部 ZED Mini，同步多视角 RGB、关节状态、末端状态、夹爪与动作，并通过 Quest 2 遥操作。训练版按 RLDS 提供，原始高分辨率双目视频另存；数据规模、存储体积和交互小时是不同单位。

DROID 的优势是同构 action space 与多地点 scene diversity。限制是本体覆盖窄、远程采集仍受统一硬件和任务设计约束，失败样本也不等于策略在部署分布上自动暴露的失败。

## 许可与镜像冲突

官方数据采用 CC BY 4.0。Hugging Face 的 lerobot/droid_1.0.1 转换版当前卡片却显示 Apache-2.0、95,658 episodes 与 49,630 tasks。后两项很可能分别包含不同成功/失败边界和自然语言 task 索引，而不是官方 86 个语义任务类；Apache-2.0 也不能未经核验替换上游数据许可。

这一有限冲突由 Bead luwiki-4i3.1.1 追踪。在映射完成前，本页以官方上游为事实基线，并把转换镜像标为待核验衍生制品。

## 效果证据

作者团队在六个任务、四个地点的实验中报告 DROID co-training 相对次优基线提高约 22 个分布内成功率点和 17 个分布外成功率点；每条件 rollout 数较少。openpi、DreamZero 等后续训练管线和 RoboArena 的 DROID 平台评测说明其可复用性，但外部采用与平台重叠不能替代对原始效果量的独立复现。

## 相关页面

- [[具身智能数据基础设施\|具身智能数据基础设施]]
- [[Open X-Embodiment\|Open X-Embodiment]]
- [[LeRobotDataset\|LeRobotDataset]]
- [[人类活动数据\|人类活动数据]]
- [[具身智能系统工程\|具身智能系统工程]]

## 证据

- 原始资料快照（本地归档）
- [DROID 官方项目页](https://droid-dataset.github.io/)
- [DROID 论文](https://arxiv.org/abs/2403.12945)
- [数据格式与下载说明](https://droid-dataset.github.io/droid/the-droid-dataset.html)
- [增强数据卡](https://huggingface.co/KarlP/droid)
- [待核验的 LeRobot 转换版](https://huggingface.co/datasets/lerobot/droid_1.0.1)
