---
{"dg-publish":true,"permalink":"/LeRobotDataset/","title":"LeRobotDataset","tags":["机器人数据格式","数据基础设施","Parquet","流式访问"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"LeRobotDataset","aliases":["LeRobot Dataset"],"tags":["机器人数据格式","数据基础设施","Parquet","流式访问"],"sources":["raw/2026-08-10-开放机器人学习数据集与格式基线.md","https://huggingface.co/blog/lerobot-datasets-v3","https://huggingface.co/docs/lerobot/lerobot-dataset-v3","https://github.com/huggingface/lerobot","https://github.com/NVIDIA/Isaac-GR00T/blob/main/getting_started/data_preparation.md"],"created":"2026-08-10","updated":"2026-08-10","source_count":5}}
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

v3 的 episode API 与底层文件边界分离。一个文件含多个 episode，episode 数不能再从文件数推断。

## 四个必须分开的版本面

1. LeRobot 库发布版本，例如 v0.4 或 v0.6。
2. LeRobotDataset schema 版本，例如 v2.1 或 v3.0。
3. 某个 Hub 数据仓库的 revision 与转换脚本 commit。
4. 模型训练实际使用的数据 mixture、过滤与 feature mapping。

“转换为 LeRobot 格式”只说明能被同一 API 读取。坐标系、absolute/delta/velocity action、夹爪含义、控制频率、相机标定、失败定义和 task ontology 仍需显式映射。NVIDIA Isaac-GR00T 等工具链曾要求把 v3 再转回 v2 变体，也说明格式统一仍受版本兼容约束。

## 许可边界

LeRobot 软件仓库采用 Apache-2.0；每个 Hub 数据仓库的数据许可独立。格式转换、重新编码视频或生成 metadata 不会自动把上游数据变成 Apache-2.0。[[DROID 数据集\|DROID 数据集]] 转换镜像的许可冲突正是这一风险的实例。

## 相关页面

- [[具身智能数据基础设施\|具身智能数据基础设施]]
- [[Open X-Embodiment\|Open X-Embodiment]]
- [[DROID 数据集\|DROID 数据集]]
- [[AgiBot World\|AgiBot World]]
- [[具身智能系统工程\|具身智能系统工程]]
- [[HIL-SERL\|HIL-SERL]]

## 证据

- 原始资料快照（本地归档）
- [LeRobotDataset v3 发布](https://huggingface.co/blog/lerobot-datasets-v3)
- [LeRobotDataset v3 文档](https://huggingface.co/docs/lerobot/lerobot-dataset-v3)
- [LeRobot 仓库](https://github.com/huggingface/lerobot)
- [Isaac-GR00T 数据准备](https://github.com/NVIDIA/Isaac-GR00T/blob/main/getting_started/data_preparation.md)
