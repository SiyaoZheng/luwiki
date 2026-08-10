---
{"dg-publish":true,"permalink":"/Universal Manipulation Interface/","title":"Universal Manipulation Interface","tags":["机器人学习","人类示范","数据采集接口","动作表示","本体对齐"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"Universal Manipulation Interface","aliases":["UMI"],"source_count":6,"sources":["raw/2026-08-10-人类活动到机器人训练外部补证.md","https://www.roboticsproceedings.org/rss20/p045.html","https://umi-gripper.github.io/","https://github.com/real-stanford/universal_manipulation_interface","https://proceedings.mlr.press/v305/zhaxizhuoma25a.html","https://arxiv.org/abs/2506.09494"],"tags":["机器人学习","人类示范","数据采集接口","动作表示","本体对齐"],"created":"2026-08-10","updated":"2026-08-10"}}
---

# Universal Manipulation Interface

Universal Manipulation Interface（UMI）是用机器人化手持夹爪采集人类操作示范，并把视觉、末端轨迹和夹爪状态转成可部署策略的接口与训练框架。它在采集端主动缩小人手与机器人末端执行器的差距。

## 采集与动作表示

- 780g 平行夹爪搭载 GoPro RGB/IMU；鱼眼、侧镜和标记点提供宽视野、夹爪状态与几何线索，ORB-SLAM3 恢复 metric 6-DoF 末端轨迹。
- 一个视频对应一个 demonstration；处理脚本将 MP4、同步双手视频、SLAM 轨迹和夹爪宽度转成 Zarr。
- relative trajectory 把每个未来 SE(3) 目标相对同一个当前末端位姿表达，不是逐步 delta；双臂还加入两夹爪相对位姿。
- 部署时需要目标机器人的运动学过滤、碰撞边界、控制频率和 latency matching。坐标表示减少全局依赖，但不会消除本体约束。

## 作者实验与外部复核

- 作者报告杯子任务 UR5 为 20/20，同一 checkpoint 转到 Franka FR2 为 18/20，两个失败都是 joint-limit violation。
- 动作表示消融中 relative trajectory 为 20/20，逐步 delta 为 16/20，absolute 为 5/20；关闭 latency matching 也显著降低动态投掷结果。
- 野外杯子数据为 1,400 demos、3 人、12 person-hours、30 地点；公开下载明确覆盖该 processed Zarr 和 checkpoint，不等于论文所有任务数据均已发布。
- 独立农业场景复核发现原版 ORB-SLAM3 在果园不能稳定恢复轨迹，需外部相机、标记和 IMU+EKF。它说明 UMI 可被外部改造，也说明视觉 SLAM 的可靠性依赖场景纹理与标定。
- FastUMI 等后续工作扩展了硬件和数据规模，但不是原版同协议端到端复现。

## 开放状态与边界

- 代码为 MIT；公开数据未找到单独明确的数据许可，代码许可不能替代视频和示范数据权利。
- “hardware agnostic”不等于任意机器人直接可执行：关节极限、工作空间、碰撞、抓取几何、动力学和控制带宽仍会改变可行性。
- UMI 收集的是任务化、工具化人类示范，不是自然日常活动；平行夹爪也限制了手部自由度和接触形态。

## 相关页面

- [[人类活动数据\|人类活动数据]]
- [[EgoMimic\|EgoMimic]]
- [[Ego4D\|Ego4D]]
- [[Ego-Exo4D\|Ego-Exo4D]]
- [[具身智能数据基础设施\|具身智能数据基础设施]]
- [[具身智能系统工程\|具身智能系统工程]]
- [[手亿科技\|手亿科技]]
- [[灵初智能\|灵初智能]]

## 证据

- 原始资料快照（本地归档）
- [RSS 2024](https://www.roboticsproceedings.org/rss20/p045.html)
- [项目页](https://umi-gripper.github.io/)
- [代码与 processed data](https://github.com/real-stanford/universal_manipulation_interface)
- [独立农业场景复核](https://arxiv.org/abs/2506.09494)
