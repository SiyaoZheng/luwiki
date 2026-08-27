---
{"dg-publish":true,"permalink":"/Open X-Embodiment/","title":"Open X-Embodiment","tags":["机器人数据集","跨本体学习","RLDS","开放数据"],"created":"2026-08-10","updated":"2026-08-25","dg-note-properties":{"status":"processed","title":"Open X-Embodiment","aliases":["OXE"],"tags":["机器人数据集","跨本体学习","RLDS","开放数据"],"sources":["raw/2026-08-10-开放机器人学习数据集与格式基线.md","https://arxiv.org/abs/2310.08864","https://github.com/google-deepmind/open_x_embodiment","https://deepmind.google/blog/scaling-up-learning-across-many-different-robot-types","https://arxiv.org/abs/2406.09246","https://arxiv.org/abs/2408.14037"],"created":"2026-08-10","updated":"2026-08-25","source_count":6,"authors":[],"publication_date":"2023","venue":"ICRA 2024","doi":null,"arxiv":"2310.08864","affiliations":["21 participating institutions"],"datasets":["Open X-Embodiment (60 datasets; >1 million trajectories; 22 robot embodiments)"],"related_companies":["Google DeepMind"],"as_of":"2026-08-10"}}
---

# Open X-Embodiment

Open X-Embodiment（OXE）是跨机构汇聚异构机器人操作数据的联盟式数据基础设施。它证明不同实验室的数据可以装进共同训练管线，但不等于这些数据已经拥有相同动作语义、质量或许可。

## 公开基线

2023 年公开版和 ICRA 2024 论文汇聚 60 个数据集、超过 100 万条真实机器人轨迹，覆盖 22 个机器人本体、527 项 skills 与 160,266 个 task instances，来自 21 个机构的协作。这里的 task 数是组成数据集的任务实例汇总，不能与 [[DROID 数据集\|DROID 数据集]] 的 86 个语义任务类或 [[AgiBot World\|AgiBot World]] 的 217 个 specific tasks 直接排名。

完整联盟库覆盖 22 个本体；RT-X 论文实验使用的是其中更小的数据 mixture。数据集覆盖面与实际训练 mixture 必须分开记录。

## 格式与动作语义

OXE 主要用 RLDS/TFDS 把 episode 包装为一致的读取结构。RT-X 训练选择规范相机输入，并把可用动作映射为包含末端位移、旋转与夹爪的 7D 表示，再按数据集处理尺度。

这种统一仍停在存储包络和训练接口层。各来源的坐标系、绝对或相对动作、速度含义、控制频率、末端执行器、标定和失败样本处理并未自动同质化。跨本体训练效果因而取决于 mixture、映射规则和任务覆盖，而不只取决于总轨迹数。

## 许可与来源边界

官方仓库的软件为 Apache-2.0，其他仓库材料为 CC BY 4.0。组成数据集的引用和适用许可仍应逐项保留；联盟入口不能把来源数据的权利与限制抹成一个统一许可。

## 效果证据

RT-X 作者团队报告跨机器人训练在多个实验室相对各自单数据集模型产生正迁移，并改善 emergent skills。[[OpenVLA\|OpenVLA]] 使用约 97 万条 OXE 轨迹，Re-Mix 则说明重新加权数据 mixture 会显著改变结果。这些后续工作证明 OXE 可被外部训练管线采用，也说明 mixture 不是中性选择；它们不是对原始所有机器人和效果量的独立同协议复现。

## 相关页面

- [[具身智能数据基础设施\|具身智能数据基础设施]]
- [[DROID 数据集\|DROID 数据集]]
- [[LeRobotDataset\|LeRobotDataset]]
- [[AgiBot World\|AgiBot World]]
- [[人形机器人基础模型\|人形机器人基础模型]]
- [[具身智能系统工程\|具身智能系统工程]]

## 证据

- 原始资料快照（本地归档）
- [Open X-Embodiment 论文](https://arxiv.org/abs/2310.08864)
- [官方仓库与许可](https://github.com/google-deepmind/open_x_embodiment)
- [Google DeepMind 发布说明](https://deepmind.google/blog/scaling-up-learning-across-many-different-robot-types)
- [OpenVLA](https://arxiv.org/abs/2406.09246)
- [Re-Mix](https://arxiv.org/abs/2408.14037)
