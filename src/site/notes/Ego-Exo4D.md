---
{"dg-publish":true,"permalink":"/Ego-Exo4D/","title":"Ego-Exo4D","tags":["第一视角视频","多视角数据","人类技能","机器人学习","数据集"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"Ego-Exo4D","source_count":7,"sources":["raw/2026-08-10-人类活动到机器人训练外部补证.md","https://docs.ego-exo4d-data.org/","https://docs.ego-exo4d-data.org/changelog/","https://docs.ego-exo4d-data.org/overview/","https://arxiv.org/abs/2311.18259","https://arxiv.org/abs/2606.06627","https://ego4d-data.org/pdfs/Ego-Exo4D-Model-License.pdf"],"tags":["第一视角视频","多视角数据","人类技能","机器人学习","数据集"],"created":"2026-08-10","updated":"2026-08-10"}}
---

# Ego-Exo4D

Ego-Exo4D 是同步记录第一视角与第三视角的人类熟练活动数据集和 benchmark。它的核心价值是多相机同步、三维重建和技能步骤标注，而不是直接提供机器人控制轨迹。

## V2 可复现口径

| 维度 | V2 官方记录 |
|---|---|
| 发布时间 | 2024-03-25 |
| takes | 5,035 |
| ego-hours | 221.26 |
| total video-hours | 1,286.30，多个相机流相加 |
| 采集 | 至少 1 副 Aria + 4–5 台 GoPro |
| 主要模态 | RGB、音频、IMU、相机位姿、稀疏点云、gaze |
| 活动 | 自然场景中的预定义熟练任务 |

当前 landing page 另写超过 800 名参与者、131 场景与 1,422 combined hours；论文/V2 口径为 740 人、123 contexts 与 1,286 小时。官方尚未解释差异，因此本页优先使用可复现 V2 release 数字，并把冲突保留在 Bead `luwiki-4i3.2.1`。

## 标注与机器人转换

- 数据提供 keystep、procedure、proficiency、body/hand pose、object relation 和跨视角对应；大量 pose 含自动生成结果，不能统称人工真值。
- TriHands 从 532 个 cooking videos 重新三角化得到 28 小时、3,042,406 帧右手 3D 轨迹。
- 这条机器人路线仍需要相机尺度对齐、action-space remapping、本体专属视觉／动作网络，以及每任务 3 个训练环境 × 50 条机器人示范。作者报告六任务共同训练较 robot-only 平均提高 29.7 个百分点。
- 因此，同步 ego/exo 能降低高质量 3D 人手轨迹的重建成本，但不能替代机器人 action、proprioception、contact/force、reward 与安全验证。

## 访问与许可

- 数据免费但 gated；接受许可后获得有期限的 AWS 凭证，推荐下载约 14 TiB。
- 官方 model license 页面不等于每位使用者实际签署的 partner agreement。商业训练、衍生模型、再分发和第三方访问必须核对实际协议。
- 多视角和环境点云扩大了旁人、空间与身份泄露面；同步精度也不能被解释为参与者已经授权任意下游控制用途。

## 相关页面

- [[人类活动数据\|人类活动数据]]
- [[Ego4D\|Ego4D]]
- [[EgoMimic\|EgoMimic]]
- [[Universal Manipulation Interface\|Universal Manipulation Interface]]
- [[具身智能数据基础设施\|具身智能数据基础设施]]

## 证据

- 原始资料快照（本地归档）
- [Ego-Exo4D V2 changelog](https://docs.ego-exo4d-data.org/changelog/)
- [Ego-Exo4D Overview](https://docs.ego-exo4d-data.org/overview/)
- [TriHands](https://arxiv.org/abs/2606.06627)



<!-- issue: luwiki-4i3.8 -->
## VITRA 派生使用与许可边界（2026-08-10）

[[VITRA\|VITRA]] 当前公开 metadata 中有 67,053 个 Ego-Exo4D-derived episodes。VITRA 自动重建人手动作并只发布 metadata／labels，原始视频需要用户按 Ego-Exo4D 协议另行取得。VITRA 的 MIT 代码或 metadata 许可不能改变数据库的 non-transferable、non-sublicensable 权利边界。

VITRA 没有公布 Ego-Exo4D benchmark split 的 UID 排除清单。当前没有证据证明发生了 test leakage，但“没有使用原 action annotations”也不能排除视觉内容进入预训练。[[Ego2Robot\|Ego2Robot]] 再使用 249h VITRA 子集，却未披露其中 Ego4D、Ego-Exo4D、EPIC 与 SSv2 的 UID 构成，因此不能量化这条间接重叠。

证据：原始资料快照（本地归档）
