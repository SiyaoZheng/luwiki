---
{"dg-publish":true,"permalink":"/Ego4D/","title":"Ego4D","tags":["第一视角视频","人类活动数据","机器人学习","数据集"],"created":"2026-08-10","updated":"2026-08-25","dg-note-properties":{"status":"processed","title":"Ego4D","source_count":11,"sources":["raw/2026-08-10-人类活动到机器人训练外部补证.md","https://openaccess.thecvf.com/content/CVPR2022/html/Grauman_Ego4D_Around_the_World_in_3000_Hours_of_Egocentric_Video_CVPR_2022_paper.html","https://ego4d-data.org/docs/","https://ego4d-data.org/docs/updates/","https://arxiv.org/abs/2309.13041","https://proceedings.mlr.press/v205/nair23a.html","https://github.com/facebookresearch/r3m","https://proceedings.mlr.press/v202/hansen23c.html","https://www.roboticsproceedings.org/rss20/p133.html","https://arxiv.org/abs/2406.14235","https://ego4d-data.org/pdfs/Ego4D-Licenses-Draft.pdf"],"tags":["第一视角视频","人类活动数据","机器人学习","数据集"],"created":"2026-08-10","updated":"2026-08-25","authors":[],"publication_date":null,"venue":null,"doi":null,"arxiv":"2406.14235","affiliations":[],"datasets":[],"related_companies":[],"as_of":null}}
---

# Ego4D

Ego4D 是面向大规模第一视角人类活动理解的数据集与 benchmark。它为机器人学习提供视觉、语言、时序和人手交互先验，但没有原生机器人动作、力、奖励或控制轨迹。

## 发布与规模

- CVPR 2022 论文口径为 3,670 小时第一视角视频、931 名 camera wearers、74 地点、9 国；大部分为 in-the-wild 日常活动。
- 当前官网与文档首页又分别出现 923 与 926 名佩戴者，官方未解释三者差异。发布版本与人数口径在 Bead `luwiki-4i3.2.3` 继续收口。
- 全库与 benchmark 子集不能混写。v2 的 FHO 为 243 annotated hours；音频、gaze、3D mesh、stereo、IMU 和同步多视角只覆盖部分数据。

## 对机器人学习的作用

- R3M 把 Ego4D 用于视觉表征预训练，再用机器人示范学习下游策略；作者报告 12 个模拟任务较从头训练提高超过 20 个百分点，并在真实公寓以每任务 20 次示范训练 Franka Panda。
- V-PTR 用 Ego4D 做 action-free value pretraining，再接 150k Bridge robot transitions 和目标任务示范；作者真实 WidowX 六任务汇总为 44/72，对 BC 为 8/72。
- 两条路线都说明人类视频可以降低表征或价值学习对机器人数据的需求；它们都没有把 Ego4D 直接变成可执行机器人 action。

### R3M 的外部证据与复现边界

- [官方仓库](https://github.com/facebookresearch/r3m)公开 ResNet18／34／50 加载、训练入口与模拟 BC eval 分支，采用 MIT 许可，但要求用户自行准备拆帧 Ego4D 和 manifest；仓库于 2026-08-06 归档为只读。Ego4D 预处理代码、语言视觉头权重、真实 Franka 数据与硬件评测脚本不在完整公开链内。
- 有 R3M 作者重叠的 [ICML 2023 研究](https://proceedings.mlr.press/v202/hansen23c.html)显示，强 Learning-from-Scratch + augmentation 可在多域与真实 xArm7 上追平或反超冻结表征。无作者重叠的 [THE COLOSSEUM](https://www.roboticsproceedings.org/rss20/p133.html)显示 20 个 RLBench 任务面对颜色、纹理、光照、相机位姿等扰动时显著退化；无作者重叠的 [HR-Align](https://arxiv.org/abs/2406.14235)则用 56k 人机配对视频适配 R3M，并在模拟与真实任务上再提高至少 7 个百分点。
- 这些研究证明 R3M 可被外部复用，也证明冻结的人类视频表征仍受环境与 human→robot domain gap 约束；它们没有从 Ego4D 预处理到原 12 个模拟任务和 5 个真实 Franka 任务完整复跑原协议。截至 2026-08-10，Bead luwiki-4i3.2.2 未找到这种无作者重叠的端到端独立复现。

## 访问与许可

- 下载需要接受许可并取得有期限的 AWS 凭证；这不是无条件公开数据。
- 官方公开的 draft/model agreement 只能帮助理解一般边界，实际使用以签署协议为准；代码或衍生模型许可不能反向授权原始视频再分发。
- 第一视角视频涉及旁人、家庭环境与屏幕内容，研究可访问不等于任意二次使用。

## 边界

- “3,670 小时”是人类第一视角视频时长，不是机器人示范时长。
- 自然活动并不表示完全无任务设计；部分 benchmark 场景为研究目标专门采集。
- 机器人迁移结论限于具体表征、机器人、本体、示范预算与评测，不能外推为通用 VLA 能力。

## 相关页面

- [[人类活动数据\|人类活动数据]]
- [[Ego-Exo4D\|Ego-Exo4D]]
- [[EgoMimic\|EgoMimic]]
- [[具身智能数据基础设施\|具身智能数据基础设施]]
- [[人形机器人基础模型\|人形机器人基础模型]]

## 证据

- 原始资料快照（本地归档）
- [Ego4D CVPR 2022](https://openaccess.thecvf.com/content/CVPR2022/html/Grauman_Ego4D_Around_the_World_in_3000_Hours_of_Egocentric_Video_CVPR_2022_paper.html)
- [Ego4D 文档](https://ego4d-data.org/docs/)
- [V-PTR](https://arxiv.org/abs/2309.13041)
- [R3M](https://proceedings.mlr.press/v205/nair23a.html)



<!-- issue: luwiki-4i3.8 -->
## VITRA 派生使用与 benchmark 去污染边界（2026-08-10）

[[VITRA\|VITRA]] 当前公开 metadata 中有 948,683 个 Ego4D-derived episodes，其中 cooking／cleaning 454,244、other 494,439。它用自动重建的 camera pose、depth、MANO hand action 和语言标注，不使用 Ego4D 原始 action annotations；但“未使用原标注”不等于没有视觉内容重叠。

VITRA 的代码和 metadata 标为 MIT，原始 Ego4D 视频并未随之再分发，使用者仍需单独签署 Ego4D 协议。衍生标注许可不能反向授权原视频。当前未找到 VITRA 对 Ego4D challenge test UIDs 的排除清单或 decontamination report，因此不能断言已经发生 benchmark leakage，也不能声称已排除；未来若用 VITRA 预训练模型评测 Ego4D benchmark，应把 released video_name／UID 与 licensed split manifests 对照。

[[Ego2Robot\|Ego2Robot]] 又使用 249h VITRA 子集，但未公开这部分的 source UID composition。其 18,561 synthetic morphology-hours 因而不能作为与 Ego4D 完全独立的新经验量。

证据：原始资料快照（本地归档）
