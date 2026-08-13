---
{"dg-publish":true,"permalink":"/LeRobotDataset/","title":"LeRobotDataset","tags":["机器人数据格式","数据基础设施","Parquet","流式访问"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"LeRobotDataset","aliases":["LeRobot Dataset"],"tags":["机器人数据格式","数据基础设施","Parquet","流式访问"],"sources":["raw/2026-08-10-开放机器人学习数据集与格式基线.md","raw/2026-08-10-DROID-v1.0.1与LeRobot镜像口径核验.md","raw/2026-08-10-DROID-76k与78864上游解释检索.md","https://huggingface.co/blog/lerobot-datasets-v3","https://huggingface.co/docs/lerobot/lerobot-dataset-v3","https://github.com/huggingface/lerobot","https://github.com/NVIDIA/Isaac-GR00T/blob/main/getting_started/data_preparation.md"],"created":"2026-08-10","updated":"2026-08-10","source_count":7}}
---

# LeRobotDataset

LeRobotDataset 是机器人学习数据的存储格式、元数据约定、加载器与 Hub 分发接口，不是一个具有统一轨迹总量的 corpus。它解决“如何存、读、流式访问和进入训练管线”，不自动解决动作语义、质量、许可或跨本体可比性。

## v3 格式

2025 年 9 月发布的 v3 把多个 episode 聚合进较大的文件，避免 v2.1 的逐 episode 小文件压力：

- 低维、高频状态和动作存入 Apache Parquet。
- 多相机视频按相机流编码并分片为 MP4。
- schema、fps、特征形状、episode 边界、task 映射、文件偏移和统计量由 JSON/Parquet metadata 管理。
- Hub-native streaming 允许不先下载整个仓库就读取样本。
- stats 文件保存 mean、std、min 和 max，供训练处理器归一化；它不等于磁盘中的每个数据集已经用相同方式归一化。

v3 的 episode API 与底层文件边界分离。一个文件含多个 episode，episode 数不能从文件数推断。

## 四个必须分开的版本面

1. LeRobot 库发布版本，例如 v0.4 或 v0.6。
2. LeRobotDataset schema 版本，例如 v2.1 或 v3.0。
3. 某个 Hub 数据仓库的 revision 与转换脚本 commit。
4. 模型训练实际使用的数据 mixture、过滤与 feature mapping。

“转换为 LeRobot 格式”只说明能被同一 API 读取。坐标系、absolute/delta/velocity action、夹爪含义、控制频率、相机标定、失败定义和 task ontology 仍需显式映射。NVIDIA Isaac-GR00T 等工具链曾要求把 v3 再转回 v2 变体，也说明格式统一仍受版本兼容约束。

## DROID 镜像显示了 metadata 的语义风险

固定 revision `0eabc778f959c54b8c5aa3626cc1128d2d2e54d4` 的 `lerobot/droid_1.0.1` 报告 95,658 episodes 与 49,630 tasks。逐项追踪后可知：

- 95,658 与 Google 官方 RLDS v1.0.1 的 shard 长度总和完全相同；转换脚本逐条保存 episode，没有重切或过滤。
- 95,658 中有 78,864 条成功、16,794 条失败。
- 转换脚本执行 `frame["task"] = frame["language_instruction"]`；49,630 是去重后的主语言指令字符串字典基数（含空字符串），不是 [[DROID 数据集\|DROID 数据集]] 的 86 个语义任务类。

这个镜像还固定了上游版本边界：GCS RLDS v1.0.0 的 92,233 episodes 属于 2024-03 首发快照，v1.0.1 的 95,658 episodes 属于 2025-07 较晚快照。作者公开说明 v1.0.1 相对 v1.0.0 补齐了约 75k episode 的语言标注，但没有发布 episode-ID diff、逐版成功／失败分拆或总量变更说明。因此不能拿 v1.0.1 的 78,864 精确成功数与论文 76k 概数相减后，把 2,864 写成已证实的新增量。

这说明 `total_tasks` 是 schema 内部 task dictionary 的大小，不是跨数据集可比的 ontology 统计。只有读取转换代码与具体字段定义，才能解释 Hub metadata。

## 许可边界

LeRobot 软件仓库采用 Apache-2.0；每个 Hub 数据仓库的数据许可独立。格式转换、重新编码视频或生成 metadata 不会自动改变上游许可。

DROID 镜像 card 标成 Apache-2.0，是通用 `push_to_hub` 与上传脚本默认 license 参数的产物；该默认值在 Dataset v3 引入 commit 时已经存在。DROID 上游数据是 CC BY 4.0，未发现权利人重新许可证据。因此镜像 card 的 Apache-2.0 不能传播为 DROID 数据许可。详细审计见 原始资料快照（本地归档）。

这一案例说明数据格式应该分别记录：

- 上游数据集及版本；
- 转换脚本 commit；
- schema 版本；
- 镜像 revision；
- 上游数据许可与转换软件许可；
- task、success 与 episode 字段的生成规则。

## 相关页面

- [[具身智能数据基础设施\|具身智能数据基础设施]]
- [[Open X-Embodiment\|Open X-Embodiment]]
- [[DROID 数据集\|DROID 数据集]]
- [[AgiBot World\|AgiBot World]]
- [[具身智能系统工程\|具身智能系统工程]]
- [[HIL-SERL\|HIL-SERL]]

## 证据

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [LeRobotDataset v3 发布](https://huggingface.co/blog/lerobot-datasets-v3)
- [LeRobotDataset v3 文档](https://huggingface.co/docs/lerobot/lerobot-dataset-v3)
- [LeRobot 仓库](https://github.com/huggingface/lerobot)
- [DROID 转换脚本固定 revision](https://github.com/huggingface/lerobot/blob/c903b114a90e703b3f7d0c46cb38727c328c55ff/examples/port_datasets/port_droid.py)
- [Isaac-GR00T 数据准备](https://github.com/NVIDIA/Isaac-GR00T/blob/main/getting_started/data_preparation.md)



## 派生进度标签与 RA-BC（2026-08-10）

LeRobot v0.6 的 progress parquet 是从既有 episode 派生的训练工件，不是传感器原始真值。Robometer/TOPReward 离线扫描视频—指令后写入稀疏或插值 progress，RABCWeights 再比较当前帧与未来 action chunk 的进度差，生成 per-sample BC 权重。训练器请求逐样本 loss、加权归一化并反传，因此这些派生标签真实改变策略更新。

这一数据流不证明 reward 已校准，也不等于在线 RL：TOPReward 的轨迹内 min-max 需要完整 episode，非因果且不能保留跨轨迹绝对尺度；Robometer 的训练 progress 又大量依赖时间位置代理与 source-specific cutoff。数据格式只保证字段可存取，模型、prompt、prefix 抽样、frame cadence 和标注 provenance 仍须单独记录。见 [[机器人奖励模型\|机器人奖励模型]] 与 原始资料快照（本地归档）。

<!-- issue: luwiki-4i3.3.1 -->
