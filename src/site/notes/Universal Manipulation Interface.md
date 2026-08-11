---
{"dg-publish":true,"permalink":"/Universal Manipulation Interface/","title":"Universal Manipulation Interface","tags":["机器人学习","人类示范","数据采集接口","动作表示","本体对齐"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"Universal Manipulation Interface","aliases":["UMI"],"source_count":7,"sources":["raw/2026-08-10-人类活动到机器人训练外部补证.md","raw/2026-08-10-UMI后续规模3D触觉谱系核验.md","https://www.roboticsproceedings.org/rss20/p045.html","https://umi-gripper.github.io/","https://github.com/real-stanford/universal_manipulation_interface","https://proceedings.mlr.press/v305/zhaxizhuoma25a.html","https://arxiv.org/abs/2506.09494"],"tags":["机器人学习","人类示范","数据采集接口","动作表示","本体对齐"],"created":"2026-08-10","updated":"2026-08-10"}}
---

# Universal Manipulation Interface

Universal Manipulation Interface（UMI）是用机器人化手持夹爪采集人类操作示范，并把视觉、末端轨迹和夹爪状态转成可部署策略的接口与训练框架。它在采集端主动缩小人手与机器人末端执行器的差距；后续工作分别扩大采集规模、改善几何标签、增加灵巧手同构或接触事件监督，并没有形成一条可以按单一指标排序的升级链。

## 采集与动作表示

- 780g 平行夹爪搭载 GoPro RGB/IMU；鱼眼、侧镜和标记点提供宽视野、夹爪状态与几何线索，ORB-SLAM3 恢复 metric 6-DoF 末端轨迹。
- 一个视频对应一个 demonstration；处理脚本将 MP4、同步双手视频、SLAM 轨迹和夹爪宽度转成 Zarr。
- relative trajectory 把每个未来 SE(3) 目标相对同一个当前末端位姿表达，不是逐步 delta；双臂还加入两夹爪相对位姿。
- 部署时需要目标机器人的运动学过滤、碰撞边界、控制频率和 latency matching。坐标表示减少全局依赖，但不会消除本体约束。

## 原版作者实验与外部复核

- 作者报告杯子任务 UR5 为 20/20，同一 checkpoint 转到 Franka FR2 为 18/20，两个失败都是 joint-limit violation。
- 动作表示消融中 relative trajectory 为 20/20，逐步 delta 为 16/20，absolute 为 5/20；关闭 latency matching 也显著降低动态投掷结果。
- 野外杯子数据为 1,400 demos、3 人、12 person-hours、30 地点；公开下载明确覆盖该 processed Zarr 和 checkpoint，不等于论文所有任务数据均已发布。
- 独立农业场景复核发现原版 ORB-SLAM3 在果园不能稳定恢复轨迹，需外部相机、标记和 IMU+EKF。它说明 UMI 可被外部改造，也说明视觉 SLAM 的可靠性依赖场景纹理与标定。
- 截至 2026-08-10，Bead `luwiki-4i3.2.2` 未找到同任务、同采集处理链、同机器人和同评测协议的完整独立复现；果园改造属于无作者重叠的场景迁移与故障暴露，不能替代原结果复跑。

## 后续谱系解决的是不同误差项

| 系统 | 主要新增能力 | 采集／标签信息 | 策略实际输入 | 新约束与证据边界 |
|---|---|---|---|---|
| [[FastUMI\|FastUMI]] | 用 T265、标准化安装与 ROS 流程提高吞吐 | RGB、视觉惯性位姿与夹爪／机器人状态 | RGB；深度版实际使用单目估计深度 | T265 仍会遮挡漂移；论文规模与公开 artifact 有版本差，尚无同协议独立复现 |
| FastUMI-100K | 扩到单／双臂、论文总体 100k+ 与 54 tasks | 双套 GoPro/T265，relative EEF action | 腕部 RGB 与相对末端动作 | 当前公开 artifact 只核实 34,052 条双臂 episode、12 tasks；跨机器人仍需坐标映射和工作空间过滤 |
| [[UMI-3D\|UMI-3D]] | 用 LiDAR-inertial SLAM 改善公制轨迹与几何标签 | RGB、LiDAR、IMU、夹爪宽度 | 当前公开策略仍为 RGB+proprio | “3D”不等于点云策略；长任务最终放置仅 5%，运动学仍是瓶颈 |
| [[DexUMI\|DexUMI]] | 用目标手专用外骨骼提高灵巧手动作同构 | 编码器、ARKit、RGB 与手型特定触觉 | 处理后 RGB+可选触觉 | 需要每种目标手重做映射和真实手 replay；触觉只在部分干净接触信号上增益 |
| [[TacUMI（多模态事件分割）\|TacUMI（多模态事件分割）]] | 把触觉、F/T、RGB 与双手 pose 用于接触阶段监督 | 非对称双手多模态流 | 没有操控策略；这些信号进入离线事件分割器 | 只有单任务约 30k frames；cross-platform 是分割评测，不是控制迁移 |

这组比较要求把四层输入分开：采集传感器、标签生成输入、训练观测和部署观测。LiDAR、mocap、ARKit、触觉或 F/T 出现在采集端，不足以证明策略直接使用这些模态，更不能自动推出跨本体控制增益。

## 开放状态与边界

- 原版代码为 MIT；公开数据未找到单独明确的数据许可，代码许可不能替代视频和示范数据权利。
- FastUMI、UMI-3D、DexUMI 与 TacUMI 的论文、代码、硬件、数据和依赖许可彼此不同；必须逐 artifact 核对，不能把一个仓库的宽松许可证覆盖到整个系统。
- “hardware agnostic”不等于任意机器人直接可执行：关节极限、工作空间、碰撞、抓取几何、动力学、控制带宽和策略视野仍会改变可行性。
- UMI 收集的是任务化、工具化人类示范，不是自然日常活动；平行夹爪也限制了手部自由度和接触形态。DexUMI 的外骨骼增加灵巧动作维度，但代价是目标手专用设计和几何干扰。

## 相关页面

- [[人类活动数据\|人类活动数据]]
- [[FastUMI\|FastUMI]]
- [[UMI-3D\|UMI-3D]]
- [[DexUMI\|DexUMI]]
- [[TacUMI（多模态事件分割）\|TacUMI（多模态事件分割）]]
- [[EgoMimic\|EgoMimic]]
- [[Ego4D\|Ego4D]]
- [[Ego-Exo4D\|Ego-Exo4D]]
- [[具身智能数据基础设施\|具身智能数据基础设施]]
- [[具身智能系统工程\|具身智能系统工程]]
- [[手亿科技\|手亿科技]]
- [[灵初智能\|灵初智能]]

## 证据

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [RSS 2024](https://www.roboticsproceedings.org/rss20/p045.html)
- [项目页](https://umi-gripper.github.io/)
- [代码与 processed data](https://github.com/real-stanford/universal_manipulation_interface)
- [独立农业场景复核](https://arxiv.org/abs/2506.09494)
