---
{"dg-publish":true,"permalink":"/FastUMI/","title":"FastUMI","tags":["#机器人示范","#数据采集","#末端轨迹","#规模化"],"created":"2026-08-10","updated":"2026-08-26","dg-note-properties":{"status":"processed","title":"FastUMI","source_count":11,"sources":["raw/2026-08-10-人类活动数据到机器人训练外部补证.md","raw/2026-08-10-UMI后续规模3D触觉谱系核验.md","https://www.fastumi.com/","https://arxiv.org/abs/2409.19499","https://github.com/zxzm-zak/FastUMI_Data","https://proceedings.mlr.press/v305/zhaxizhuoma25a.html","https://huggingface.co/datasets/IPEC-COMMUNITY/FastUMI-Data","https://github.com/zxzm-zak/FastUMI-ACT","https://github.com/MrKeee/FastUMI-100K","https://arxiv.org/abs/2510.08022","https://huggingface.co/datasets/IPEC-COMMUNITY/FastUMI_100k_lerobot"],"tags":["#机器人示范","#数据采集","#末端轨迹","#规模化"],"created":"2026-08-10","updated":"2026-08-26","product_name":"FastUMI","developer":null,"operator":null,"owner":null,"manufacturer":null,"launch_date":null,"product_status":"active_research","category":null,"platforms":[],"related_products":[],"customers":[],"website":null,"as_of":"2026-08-10","status_note":"公开工程化研究artifact"}}
---

# FastUMI

FastUMI 是 [[Universal Manipulation Interface\|Universal Manipulation Interface]] 的工程化后续：用现成视觉惯性追踪器、标准化法兰与相机安装、统一 ROS 时间和 HDF5 流程，减少原始 UMI 的视觉 SLAM 后处理与部署负担。它扩大了采集吞吐，但 T265 漂移、动作 schema、目标本体工作空间、数据版本和公开 artifact 覆盖仍须单独核对。

## 三个不能合并的发布口径

| 版本 | 论文规模 | 当前可核验公开物 | 边界 |
|---|---|---|---|
| arXiv v2（2025-02） | 10,000 trajectories、22 tasks、19 object categories、12 skills；5操作者、3设备 | HF revision `3f1edeca…` 为约2.372TB、22个任务档案 | 这是原始公开数据快照，不是 PMLR 最终规模 |
| CoRL／PMLR final（2025-09） | 15,000+ demonstrations、24 tasks、21 object categories、13 skills | 没有找到同步更新到15k／24 tasks的固定数据快照 | 论文扩大不能自动写成 artifact 已完整发布 |
| FastUMI-100K（2025-10） | 含原版的总体：100k+ trajectories、54 tasks、600h、数百物体、5标准环境，含单／双臂 | 2026-04 HF revision `4cf7cca…` 只核实 `dual_arm/` 下12 tasks、34,052 episodes、12,859,459 timesteps，即20Hz下约178.60轨迹小时 | 100k+/54/600h 是论文总体，不是当前公开子集，也不是在原版之外新增100k；15,000 textual annotations 不是额外轨迹 |

FastUMI-100K 论文总体与公开 artifact 的覆盖差已登记 Bead `luwiki-4i3.9.2`，等待剩余单臂／任务数据、版本 manifest、生成与过滤代码及机器可读许可。

## 硬件、同步与动作

- 原版手持端为 GoPro Hero 9（1920×1080、60Hz）、RealSense T265（200Hz）和两个 ArUco 指尖 marker；机器人端复制相机视角但不安装 T265。整机精确成本和重量未报告；附录中的 T265 55g、RoboBaton MINI 68g 只是追踪模块重量。
- ROS 统一时间，图像和 pose 进入独立队列，再降到20Hz并为每个保留图像匹配最近 T265 pose。作者称 sub-millisecond offsets，但没有外部时钟测量或误差分布；代码证实近邻配对，不能升级成经仪器验证的亚毫秒硬同步。
- T265 confidence 低时做排除／插值，并检查速度、加速度与方向异常；漂移时重启或回到 groove 做 loop closure。过滤阈值、删除数和保留率没有完整公开。
- ACT 预测 absolute joint trajectory；Diffusion Policy 使用相对当前末端的 TCP 轨迹。不同任务胜负反转，不能宣布一种表示普遍最优。公共 HDF5/card 与转换脚本对 pose／夹爪索引仍有 [issue #6](https://github.com/zxzm-zak/FastUMI_Data/issues/6) 所示歧义。
- Depth-Enhanced Diffusion Policy 的深度不是只用于标签：训练与部署观测都实际加入 Depth Anything V2 的单目估计深度。原版仍无力／触觉输入，也不覆盖移动操作器 whole-body control。
- 100K 双臂使用两套 T265 200Hz 与两路 GoPro 60Hz；RGB approximate-sync 容差为1/120秒，再降到20Hz并匹配最近 pose。单臂 action 为7D `[x,y,z,roll,pitch,yaw,gripper]`，双臂拼为14D relative EEF action；README 切片文字存在疑似索引笔误，生成代码未公开，不能逐项复核坐标约定。

## 作者结果与跨本体边界

- 原版作者主要在 xArm6 上从每任务随机200 demonstrations训练，15次评测。PMLR 12任务表中 DP 与 ACT 成功率都分布在约6.67%–93.33%，不同任务胜负反转。pick-cup 的 ACT 随200／400／800 demos从20%／26.67%／53.33%上升，只是单任务规模消融。
- 作者报告的失败包括 absolute-joint ACT 产生不可达目标或越出工作空间、relative DP 深度精度不足，以及 T265 在强光、近距离遮挡下漂移。
- 100K 作者 DP 真机任务约33.33%–66.67%，π0短任务常为73.33%–93.33%。`Heat Food` 第一阶段100%，后两阶段0，作者归因于只有腕视角、缺少固定第三人称全局上下文。
- 100K 在 xArm6 与 Flexiv Rizon4 间不微调部署，但仍先做坐标映射和目标机器人3D工作空间过滤；`Wash Clothes` 整个任务超出 xArm6 工作空间而不可执行。这是作者跨平台实验，不是任意机器人零适配或独立复现。

## 开放物与独立证据

- 原版采集／转换仓为 MIT，提供部分 CAD、采购链接和转换流程，但无 costed BOM、完整数量表或硬件专用许可；数据固定卡标 MIT。策略仓为 MIT，却到2026-07才创建，且无数据、checkpoint和完整机器人 SDK 配置，不能当作论文发表时同步存在的复现包。
- 100K 项目仓当前 Apache-2.0，但无采集／过滤／训练源码、CAD 或 BOM。HF README 写 Apache-2.0；固定 revision 的 card metadata 没有 `license` 字段且根目录无 LICENSE，机器可读许可仍不完整。
- 截至2026-08-10，未找到独立团队完成“同硬件采集→同过滤→同训练→同机器人15次评测”。第三方 [FastUMI replay utility](https://github.com/Loki-Lu/FastUMI_replay_singleARM)证明数据可下载、转换和回放，但机器人 SDK仍为TODO、没有成功率。
- [issue #5](https://github.com/zxzm-zak/FastUMI_Data/issues/5) 暴露默认配置下单条采集极慢，[#4](https://github.com/zxzm-zak/FastUMI_Data/issues/4) 暴露短 episode 空时间戳，[#8](https://github.com/zxzm-zak/FastUMI_Data/issues/8) 暴露 fingertip 模型断链。[#9](https://github.com/zxzm-zak/FastUMI_Data/issues/9) 有第三方自采65 demos、转 Zarr 并在 Franka 部署后动作失常和触发关节极限的未受控自报。它们是可实施性／失败信号，不是正式同协议复现。
- 100K [issue #2](https://github.com/MrKeee/FastUMI-100K/issues/2) 显示物体品牌、尺寸和购买链接不足；截至核验没有作者回复，也不能把对象规格缺口写成策略失败。

## 相关页面

- [[Universal Manipulation Interface\|Universal Manipulation Interface]]
- [[UMI-3D\|UMI-3D]]
- [[DexUMI\|DexUMI]]
- [[TacUMI（多模态事件分割）\|TacUMI（多模态事件分割）]]
- [[人类活动数据\|人类活动数据]]
- [[具身智能数据基础设施\|具身智能数据基础设施]]

## 证据

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [FastUMI PMLR](https://proceedings.mlr.press/v305/zhaxizhuoma25a.html)
- [FastUMI 数据 revision](https://huggingface.co/datasets/IPEC-COMMUNITY/FastUMI-Data/tree/3f1edeca5621ac0703da0ec51882faa73dcf79c6)
- [FastUMI-100K 论文](https://arxiv.org/abs/2510.08022)
- [FastUMI-100K 数据 revision](https://huggingface.co/datasets/IPEC-COMMUNITY/FastUMI_100k_lerobot/tree/4cf7cca8fdc15d6f71ee0055553ce8a5e78aa9a0)
