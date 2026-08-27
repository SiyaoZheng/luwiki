---
{"dg-publish":true,"permalink":"/Ego2Robot/","title":"Ego2Robot","tags":["#第一视角数据","#动作重定向","#视觉合成","#机器人预训练"],"created":"2026-08-10","updated":"2026-08-26","dg-note-properties":{"status":"seed","title":"Ego2Robot","source_count":4,"sources":["raw/2026-08-10-人类活动数据到机器人训练外部补证.md","raw/2026-08-10-规模化人类视频到机器人预训练路线核验.md","https://arxiv.org/abs/2608.02580","https://www-ye.github.io/ego2robot_blog/"],"tags":["#第一视角数据","#动作重定向","#视觉合成","#机器人预训练"],"created":"2026-08-10","updated":"2026-08-26","product_name":"Ego2Robot","developer":null,"operator":null,"owner":null,"manufacturer":null,"launch_date":"2026-08-03","product_status":"active_research","category":null,"platforms":[],"related_products":[],"customers":[],"website":null,"as_of":"2026-08-10","status_note":"2026年公开的预印本路线"}}
---

# Ego2Robot

Ego2Robot 是 2026-08-03 发布的第一视角人类视频到机器人格式训练数据的预印本路线。它把转换拆成动作重定向、机器人手臂视觉合成和多层质量筛选，而不是假设原视频已经包含可执行 robot action。

## 规模口径

论文的原始输入约为 1,942 小时：

| 来源 | 原始小时 |
|---|---:|
| ANT | 7 |
| EgoDex | 732 |
| [[VITRA\|VITRA]] | 249 |
| [[EgoVerse\|EgoVerse]] | 954 |

这些视频经速度处理、质量筛选并在 15 种机器人形态上分别渲染后，形成 18,561 synthetic robot morphology-hours。这个数字不是 18,561 小时独立人类行为；按单形态折算约 1,237 小时，而且与 VITRA、EgoVerse、EgoDex 的规模重叠，不能相加成新的行为总量。

## 从人体 pose 到机器人样本

1. 对已有或未标注视频取得手姿；后者使用 WiLoR 与 DynHaMR 估计，并由 Qwen3.5 切分任务和生成描述。
2. 把 21 点手姿映射为 parallel-gripper EEF trajectory，做时序平滑和 source-specific speed alignment。
3. 用 SAM3 分割手臂、ProPainter 去除人体，再对目标本体搜索 base pose、用 MuJoCo IK 求解并做 depth-aware compositing。
4. 以 IK／碰撞／workspace、统计异常和 VLM semantic consistency 做三层过滤。
5. 每个样本包含 robot-composited frame、camera-frame relative EEF action、相机参数与 instruction。

支持的 15 种形态包括 Panda、UR5e、ARX-L5、xArm7、Sawyer、Kinova、IIWA、Jaco、FR3、UR10e、ViperX、WidowX、Piper、YAM 与 Aloha。合成动作比原始视频更接近目标机器人格式，但仍不包含真实接触力、执行时延、控制误差或安全结果。

## 训练与作者结果

预训练还使用 6,565 小时 robot pool：DROID 511h real、AgiBotWorld 2,404h real、InternData 3,650h simulation。因此约 55.6% 的所谓 robot pool 是仿真，不能写成 6,565h 真实机器人数据。

所有配置固定 200k steps 和相同样本数，比较 Ego2R:Robot 为 1:3、3:1、1:1 的采样权重，再用 RoboTwin2.0 的 50 tasks×50 demos 和 EBench 7 tasks×400 demos 微调。1:1 相对 robot-only 在 Clean、Visual、Scene、Task 有改善，但并非单调：

- 1:3 在 Clean、Visual、Scene、Embodiment 均低于 robot-only。
- 3:1 的 randomized score 从 50.9 降到 49.2。
- 三种 mixture 在 unseen Franka 上都低于 robot-only。
- EBench 的 3:1 为 51.7，对 robot-only 39.6 为 +12.1 points。

真机 ARX ACone 的五项任务仍使用每任务 20 robot demos，并加入约 35 分钟 ego play 生成的 675 episodes；这不是 robot-data-free 或 zero-shot 部署。

## 开放性与证据边界

- 截至 2026-08-10，未找到官方代码、18,561h 数据、模型、checkpoint 或数据许可；论文发布仅七天，也未找到无作者重叠的使用、复现或 counter-benchmark。
- 项目页所称 Qwen-RobotManip 采用 Ego2Robot 数据，但两边大量作者重叠，属于作者内部证据。
- 249h VITRA 子集间接来自 Ego4D／Ego-Exo4D 等上游库；论文没有给 source UID composition、授权传播或未来合成视频再分发方案。当前数据未发布，所以不能指控公开泄漏，正确状态是不可审计。
- RoboTwin／EBench 结果都在评测任务上微调；source task semantic overlap 与 benchmark decontamination 未公开，不能称完全零样本 task generalization。
- 同名的 msunbot/ego2robot 是 2025 年的另一项目，不是本论文官方仓库。

因此 Ego2Robot 的证据支持“目标本体渲染和动作合成可以作为有条件的预训练扩增”，不支持把 morphology-hours 当作新的独立经验，也不支持视觉合成已经解决动力学与接触差距。

## 相关页面

- [[人类视频到机器人策略学习\|人类视频到机器人策略学习]]
- [[人类活动数据\|人类活动数据]]
- [[EgoScale\|EgoScale]]
- [[VITRA\|VITRA]]
- [[EgoVerse\|EgoVerse]]
- [[具身智能数据基础设施\|具身智能数据基础设施]]

## 证据

- 原始资料快照（本地归档）
- [Ego2Robot 论文](https://arxiv.org/html/2608.02580)
- [项目页](https://www-ye.github.io/ego2robot_blog/)
