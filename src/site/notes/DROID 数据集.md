---
{"dg-publish":true,"permalink":"/DROID 数据集/","title":"DROID 数据集","tags":["机器人数据集","遥操作","RLDS","分布式采集"],"created":"2026-08-10","updated":"2026-08-25","dg-note-properties":{"status":"processed","title":"DROID 数据集","aliases":["DROID"],"tags":["机器人数据集","遥操作","RLDS","分布式采集"],"sources":["raw/2026-08-10-开放机器人学习数据集与格式基线.md","raw/2026-08-10-DROID-v1.0.1与LeRobot镜像口径核验.md","raw/2026-08-10-DROID-76k与78864上游解释检索.md","https://droid-dataset.github.io/","https://arxiv.org/abs/2403.12945","https://droid-dataset.github.io/droid/the-droid-dataset.html","https://storage.googleapis.com/gresearch/robotics/droid/1.0.0/dataset_info.json","https://storage.googleapis.com/gresearch/robotics/droid/1.0.1/dataset_info.json","https://huggingface.co/KarlP/droid","https://github.com/Physical-Intelligence/openpi/commit/4eea7da317f88ba8a8aa6fa66cc606bcf0f04166","https://huggingface.co/datasets/lerobot/droid_1.0.1"],"created":"2026-08-10","updated":"2026-08-25","source_count":11,"authors":[],"publication_date":"2024-03","venue":"arXiv / project dataset","doi":null,"arxiv":"2403.12945","affiliations":[],"datasets":["DROID RLDS v1.0.0","DROID RLDS v1.0.1","lerobot/droid_1.0.1"],"related_companies":[],"as_of":"2026-08-10"}}
---

# DROID 数据集

DROID（Distributed Robot Interaction Dataset）是用基本同构的 Franka 采集套件在多机构、多场景分布式收集的真实机器人操作数据集。它用硬件一致性换取更可控的动作语义，同时把环境与操作者多样性扩展到多个地区。

## 规模必须按快照与统计层级表达

当前官方站点的摘要口径是约 76,000 条成功示范轨迹、350 小时、564 个场景和 86 个语义任务类，由 50 名采集者在 12 个月内完成。初版论文摘要曾写 84 tasks；当前站点和更新论文使用 86，比较时应保留版本。

Google 官方 RLDS v1.0.1 的 2,048 个 shard 实际合计 95,658 episodes。固定 revision `0eabc778f959c54b8c5aa3626cc1128d2d2e54d4` 的 [[LeRobotDataset\|LeRobotDataset]] 镜像与它一一对应，包含：

- 78,864 条成功 episode；
- 16,794 条失败 episode；
- 合计 95,658 条。

转换脚本逐条保存 RLDS episode，没有重新切分或过滤。因而 95,658 是完整发布快照中的成功与失败总和，不是 LeRobot 自行扩增后的数量。

上游版本历史把差异限定为“首发近似数与较晚精确快照”，但没有给出逐条原因。RLDS v1.0.0 于 2024-03-15 发布，2,048 个 shard 合计 92,233 episodes；同月维护者称正在处理“all 92k episodes”，论文则写 76k successful 加 roughly 16k not successful。RLDS v1.0.1 于 2025-07-15 发布，合计 95,658，较旧版总量净增 3,425。Karl Pertsch 在 openpi 的 2025-08-26 版本说明中确认 v1.0.1 相对 v1.0.0 补齐了约 75k episode 的语言标注，但没有说明 episode inventory 为什么变化；v1.0.1 metadata 自己仍复用 76k 描述，releaseNotes 也只有模板化的“Initial release”。

因此，76k 应标为 2024 论文／项目页沿用的成功轨迹概数，78,864 应标为 2025 RLDS v1.0.1 的精确成功数。由于 v1.0.0 没有公开逐版成功／失败分拆、episode-ID diff 或生产 builder，不能把名义上的 2,864 写成精确新增量，也不能归因于清洗、去重、成功标签重判或轨迹过滤。

DROID 官方说明还记录，公开 raw bucket 在人脸模糊与复制阶段漏掉约 20% episodes，只有 raw 版本受影响、RLDS 完整。不能用 raw bucket 的可枚举文件数替代 RLDS 发布总量。

## task 不是同一个统计对象

官方的 86 是语义归并后的任务类别。LeRobot 转换脚本把主 `language_instruction` 直接写入 `task` 字段，当前镜像的 49,630 是去重后主指令字符串的字典基数，并包含空字符串。

因此：

- 86 回答“语义上有多少类任务”；
- 49,630 回答“镜像 metadata 中有多少种主语言指令字符串”；
- 95,658 回答“发布快照中有多少 episode”。

三者不能互换，也不能放在同一列做规模排名。失败 episode 几乎没有语言标注；49,630 的高基数主要来自成功数据中的自然语言多样性。

## 采集、模态与本体边界

18 套 robot setups 主要采用相同 Franka Panda、Robotiq 夹爪和标准化视觉/遥操作配置，不能写成 18 种 embodiments。采集系统包含两台外部 ZED2 和一台腕部 ZED Mini，同步多视角 RGB、关节状态、末端状态、夹爪与动作，并通过 Quest 2 遥操作。

2024 年语言增强文件实际含 75,144 个 episode keys，项目页概括为约 75,000 个成功 episode、覆盖 95%；75,144／78,864＝95.28%，与 v1.0.1 的成功分母相容，但这只是算术交叉核验，不是版本增量解释。2025 年改进标定只覆盖 36,000 个 episode。子集增强不能被误写为全库同等标定精度。发布失败样本是人类全程遥操作失败，不是策略自主 rollout 或 [[HIL-SERL\|HIL-SERL]] 式部署接管数据。

## 许可与镜像 provenance

DROID 上游数据采用 CC BY 4.0。LeRobot 软件与转换脚本采用 Apache-2.0；当前 `lerobot/droid_1.0.1` 卡片的 Apache-2.0 来自通用 Hub 上传接口的默认参数，在 Dataset v3 引入时已经存在。没有证据表明 DROID 权利人重新许可。

所以格式转换、视频重编码和 metadata 生成不改变上游数据许可：使用镜像中的数据仍应遵循 CC BY 4.0。镜像 card 的 Apache-2.0 只能可靠地描述转换软件，作为数据许可具有误导性。完整映射保存在 原始资料快照（本地归档）。

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
- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [DROID 官方项目页](https://droid-dataset.github.io/)
- [DROID 论文](https://arxiv.org/abs/2403.12945)
- [数据格式与下载说明](https://droid-dataset.github.io/droid/the-droid-dataset.html)
- [官方 RLDS v1.0.0 metadata](https://storage.googleapis.com/gresearch/robotics/droid/1.0.0/dataset_info.json)
- [官方 RLDS v1.0.1 metadata](https://storage.googleapis.com/gresearch/robotics/droid/1.0.1/dataset_info.json)
- [DROID 官方作者数据卡](https://huggingface.co/KarlP/droid)
- [openpi 的 v1.0.1 版本说明](https://github.com/Physical-Intelligence/openpi/commit/4eea7da317f88ba8a8aa6fa66cc606bcf0f04166)
- [固定 LeRobot 镜像](https://huggingface.co/datasets/lerobot/droid_1.0.1/tree/0eabc778f959c54b8c5aa3626cc1128d2d2e54d4)
