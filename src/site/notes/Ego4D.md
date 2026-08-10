---
{"dg-publish":true,"permalink":"/Ego4D/","title":"Ego4D","tags":["第一视角视频","人类活动数据","机器人学习","数据集"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"Ego4D","source_count":7,"sources":["raw/2026-08-10-人类活动到机器人训练外部补证.md","https://openaccess.thecvf.com/content/CVPR2022/html/Grauman_Ego4D_Around_the_World_in_3000_Hours_of_Egocentric_Video_CVPR_2022_paper.html","https://ego4d-data.org/docs/","https://ego4d-data.org/docs/updates/","https://arxiv.org/abs/2309.13041","https://proceedings.mlr.press/v205/nair23a.html","https://ego4d-data.org/pdfs/Ego4D-Licenses-Draft.pdf"],"tags":["第一视角视频","人类活动数据","机器人学习","数据集"],"created":"2026-08-10","updated":"2026-08-10"}}
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
