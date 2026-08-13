---
{"dg-publish":true,"permalink":"/UMI-3D/","title":"UMI-3D","tags":["机器人示范","三维定位","LiDAR","人类示范","动作标签"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"UMI-3D","aliases":["UMI 3D"],"source_count":13,"sources":["raw/2026-08-10-UMI后续规模3D触觉谱系核验.md","https://arxiv.org/abs/2604.14089","https://umi-3d.github.io/","https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Hardware","https://github.com/hku-mars/UMI-3D","https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Policy","https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Dataset","https://huggingface.co/datasets/ZIMBOT/umi-3d-dataset-cup","https://huggingface.co/datasets/ZIMBOT/umi-3d-dataset-curtain","https://huggingface.co/datasets/ZIMBOT/umi-3d-dataset-door","https://www.livoxtech.com/cn/mid-360/specs","https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Policy/issues/1","https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Hardware/issues/1"],"tags":["机器人示范","三维定位","LiDAR","人类示范","动作标签"],"created":"2026-08-10","updated":"2026-08-10"}}
---

# UMI-3D

UMI-3D 是 [[Universal Manipulation Interface\|Universal Manipulation Interface]] 的 LiDAR-inertial 变体：在手持平行夹爪上结合 LiDAR、IMU、硬件触发相机和夹爪宽度标记，以公制 SLAM 生成末端轨迹与三维地图。它当前的“3D”主要改善采集与几何标签，公开策略并不直接消费点云或深度。

## 硬件、成本与同步

| 项目 | 已核验口径 | 不能据此推出什么 |
|---|---|---|
| 完整手持器 | 1120g、285×175×300mm、80mm夹爪行程 | 不等于轻于原 UMI；论文没有操作疲劳或人体工学对照 |
| 作者成本 | 3D打印夹爪约US$50，LiDAR+相机约US$650；目标约RMB5000／US$700 | 不含主机、机器人、GPU；BOM未给打印件、紧固件和工时完整单价，不能写成全系统成本 |
| 传感器 | Livox MID-360／S LiDAR与内置IMU、Hikrobot MV-CB013-A0UC-S相机、M12约185°鱼眼、ArUco夹爪宽度 | 软指形变只是被动顺应，不是触觉数据流 |
| 硬件时间 | STM32向LiDAR发1Hz PPS与伪GPRMC，并分频为20Hz相机触发；LiDAR 10Hz、相机20Hz | 两流不是“完全同频”；硬件触发也不替代后续匹配误差记录 |

采集时相机驱动读取共享内存中的 LiDAR ROS 时间戳并统一写入 rosbag。导出再以视频为主时间轴，把 SLAM 和辅助信号做最近邻匹配并设置容差，文档示例为10ms。因此更准确的描述是“共享时基的硬件同步采集 + 离线最近邻对齐”。

## 三层数据表示

1. **采集层**：RGB、LiDAR 点云、IMU 和夹爪宽度进入 rosbag。
2. **标签层**：LiDAR-inertial SLAM、外参和 ArUco 生成公制相机／末端 SE(3) 轨迹、三维地图与时序对齐。
3. **策略层**：当前公开 Zarr/config 只含 `camera0_rgb`、末端 position／rotation 和 gripper；动作是相对当前末端的未来 SE(3)+夹爪，horizon 16。策略实际输入为 RGB+proprio，没有 point cloud 或 depth。

作者在 [policy issue #1](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Policy/issues/1) 明确把直接3D观测策略列为未来方向。因而不能把“用 LiDAR 标定动作”写成“已证明点云策略更好”，也不能用采集端三维地图替代策略的部署观测说明。

## 数据、任务与作者结果

| 任务 | 训练数据 | 作者结果 | 关键失败边界 |
|---|---:|---|---|
| cup | 3500 demos | normalized seen／partial-unseen／full-unseen 为 .863/.788/.736 | 没有同任务原 UMI head-to-head |
| curtain | 769 demos | .88/.90/.96 | 任务与评分口径不同，不能与 cup 直接平均 |
| door→grasp→place | 340 demos | 开门97.5%、抓杯47.5%、最终放置5% | 32.5%已开门抓杯但因 IK／运动学约束放置失败 |
| mouse | 未用新的 UMI-3D demo 训练 | 4×4配置、每格5次，共80 trials，成功率.73–1.00 | 使用原 UMI 预训练策略零微调跨硬件部署，不能加进4609条训练 demos |

前三项合计4609 demos。论文没有 ground-truth SLAM 误差、同任务 original-UMI 对照或点云观测消融；它支持“LiDAR可生成可用公制标签与部署轨迹”，不支持量化断言定位普遍优于原 UMI，也不支持跨本体无约束。

## 开放物、许可与独立证据

- 硬件仓和策略仓为 Apache-2.0；SLAM／数据处理仓为 GPL-2.0；数据索引为 MIT。三个数据卡标 MIT；cup 模型卡没有 license tag。不同仓库与模型／数据卡的许可不可互相覆盖。
- 硬件 v0.1.0 明示 research preview、not production-ready。数据索引固定 revision 为 `47b4ffd0672875094dd2252ff7db8b7e1ef977fc`；SLAM tag v0.1.0 为 `ffd2b526f8db6e2e9690e90d0bdd2bb3e50c37cf`。
- 截至2026-08-10，未找到无作者重叠的完整硬件复建、相同四任务复跑、带 ground truth 的 SLAM 对照或独立负结果论文。硬件 [issue #1](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Hardware/issues/1) 只显示有人备料并指出紧固件／弹簧 BOM 缺口；尚未报告建成。fork 数与使用询问都不是复现。
- 重开独立证据检索的条件是：非作者公开完整 build log 与采集数据、复跑相同任务和评分，或给出带 ground truth 的定位对照与明确负结果。

## 相关页面

- [[Universal Manipulation Interface\|Universal Manipulation Interface]]
- [[FastUMI\|FastUMI]]
- [[DexUMI\|DexUMI]]
- [[TacUMI（多模态事件分割）\|TacUMI（多模态事件分割）]]
- [[人类活动数据\|人类活动数据]]
- [[具身智能数据基础设施\|具身智能数据基础设施]]
- [[具身智能系统工程\|具身智能系统工程]]

## 证据

- 原始资料快照（本地归档）
- [论文](https://arxiv.org/abs/2604.14089)
- [项目页](https://umi-3d.github.io/)
- [硬件 release v0.1.0](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Hardware/releases/tag/v0.1.0)
- [公开策略配置](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Policy/blob/583f4641cf4dceabbe5b0a46f2e2df9d5cc0dad5/umi_3d_training/diffusion_policy/config/task/umi.yaml)
