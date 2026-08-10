---
{"dg-publish":true,"permalink":"/FastUMI/","title":"FastUMI","tags":["机器人示范","数据采集","末端轨迹","规模化"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"FastUMI","source_count":7,"sources":["raw/2026-08-10-人类活动数据到机器人训练外部补证.md","https://www.fastumi.com/","https://arxiv.org/abs/2409.19499","https://github.com/zxzm-zak/FastUMI_Data","https://proceedings.mlr.press/v305/zhaxizhuoma25a.html","https://github.com/MrKeee/FastUMI-100K","https://arxiv.org/abs/2510.08022"],"tags":["机器人示范","数据采集","末端轨迹","规模化"],"created":"2026-08-10","updated":"2026-08-10"}}
---

# FastUMI

FastUMI 是 [[Universal Manipulation Interface\|Universal Manipulation Interface]] 的工程化后续：用现成视觉惯性追踪器、标准化法兰与相机安装、统一时钟和 HDF5 流程，减少原始 UMI 的 SLAM 后处理与硬件部署负担。

## 数据和动作

- 手持端使用 GoPro Hero 9 与 RealSense T265；T265 直接输出高频位姿，ROS 统一时钟并缓存图像、pose、qpos 和 action。
- 训练既支持 ACT 的 absolute joint trajectory，也支持 Diffusion Policy 的 relative TCP trajectory。两种表示在不同任务上各有优劣，不能宣布一种普遍最优。
- 原始论文数据为 10,000+ 条轨迹、22 个日常任务、19 类物体和 12 类技能，由五名操作者、三套设备采集。
- 默认策略评估使用 xArm 6。论文展示设备可安装在 Flexiv、Franka 和 Z1 上，但没有给出同一策略在这些机器人的受控跨本体成功率。

## 作者证据与局限

作者在 12 个任务上比较 ACT、Diffusion Policy、数据规模和深度输入，显示更多示范及深度在部分任务上有益；不同动作表示的优势具有任务依赖性。T265 降低了处理复杂度，但在强遮挡下仍有厘米级漂移。

系统只有视觉，没有力/触觉；不支持移动操作器的 whole-body control，并依赖有线传输。官方代码为 MIT，原始 10K 数据的独立数据许可没有在已核验页面中清楚给出。

FastUMI-100K 是后续独立版本，报告 100K+ 轨迹、54 个任务并转为 LeRobot 2.1。它的规模、格式、许可和结果属于另一个版本，不能回填为原始 FastUMI 的属性。

本轮没有找到对原论文 12-task 表格的同硬件、同协议独立复现。

## 相关页面

- [[Universal Manipulation Interface\|Universal Manipulation Interface]]
- [[人类活动数据\|人类活动数据]]
- [[具身智能数据基础设施\|具身智能数据基础设施]]

## 证据

- 原始资料快照（本地归档）
