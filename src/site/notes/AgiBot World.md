---
{"dg-publish":true,"permalink":"/AgiBot World/","title":"AgiBot World","tags":["#人形机器人","#机器人数据集","#双臂操作","#LeRobot"],"created":"2026-08-10","updated":"2026-08-12","dg-note-properties":{"status":"processed","title":"AgiBot World","tags":["#人形机器人","#机器人数据集","#双臂操作","#LeRobot"],"sources":["raw/2026-08-10-开放机器人学习数据集与格式基线.md","https://arxiv.org/abs/2503.06669","https://github.com/OpenDriveLab/AgiBot-World","https://huggingface.co/datasets/agibot-world/AgiBotWorld2026","https://agibot-world.com/challenge2026","raw/2026-08-12-中国具身智能商业实体法律主体数据产品融资与采用核验.md","https://www.agibot.com.cn/article/315/detail/148.html","https://www.agibot.com/article/231/detail/72.html"],"created":"2026-08-10","updated":"2026-08-12","source_count":8}}
---

# AgiBot World

AgiBot World 是围绕智元 G1/G2 人形机器人建立的真实操作数据、基础模型、工具和 benchmark 平台。它代表同构人形硬件上的垂直整合语料路线，与跨机构异构的 [[Open X-Embodiment\|Open X-Embodiment]]、机械臂分布式采集的 [[DROID 数据集\|DROID 数据集]] 和格式层的 [[LeRobotDataset\|LeRobotDataset]] 不在同一层。

## 三条版本线

### Alpha（2024-12）

官方仓库记录 92,214 条 trajectories、约 8.5 TB，是后续 Beta 的早期子集。论文相关口径约为 236 小时。Alpha 规模不能与 Beta 相加。

### Beta / Colosseo（2025-03）

仓库 manifest 记录 1,003,672 条 trajectories、约 43.8 TB；论文快照为 1,001,552 条 trajectories、2,976.4 小时，覆盖 217 个 specific tasks、87 个 skills、106 个 scenes。两套总轨迹相差 2,120，属于版本快照差异，应分别引用。

平台使用 100 多台 G1 采集机器人。这是同构 robot units，而不是 100 多种 embodiments。任务横跨家居、餐饮、工业、商业和办公等部署场景，但数量与 [[Open X-Embodiment\|Open X-Embodiment]] 的 task instances、DROID 的语义任务类不可直接换算。

### AgiBot World 2026

2026 数据线改用 G2、自由式真实场景采集并按主题发布，当前数据卡沿用 LeRobot v2.1 目录并增加 key-frame 与 instruction-segment 等标注层。卡片尚未公布可与 2025 直接比较的总 episodes、hours、tasks 和 scenes，因此不得继承 Beta 的百万轨迹或 2,976.4 小时。

## 数据与生产闭环

2025 平台以 G1 双臂、移动底盘、腰部和不同末端执行器采集，多路相机、RGB-D、本体状态、末端或关节动作按统一硬件与标注流程记录。VR 与全身 mocap 是遥操作接口，不意味着这些轨迹属于自然人类活动数据。生产流程还包括有效性检查、失败原因、恢复轨迹、任务/子任务和关键帧标注。

仓库基于固定 commit 的 LeRobot v2.1。格式一致不等于所有版本可直接混训；硬件代际、末端执行器、标定、动作字段、失败保留和标注 schema 都需要版本化 provenance。

## 访问、许可与效果边界

2025 数据需要通过托管平台申请访问；数据与代码标为 CC BY-NC-SA 4.0。2026 数据卡也使用 CC BY-NC-SA 4.0。它们可以公开研究使用，但不能被写成无限制商业训练基础设施。

GO-1 作者团队报告相对其他数据或模型基线的成功率增益。InternVLA-A1 和 ICRA 2026 Challenge 说明外部团队正在采用平台，但存在作者生态重叠、混合自有数据和不同评测协议；参赛结果不能独立验证数据集本身或 GO-1 的原始效果量。

## 相关页面

- [[具身智能数据基础设施\|具身智能数据基础设施]]
- [[人形机器人基础模型\|人形机器人基础模型]]
- [[Open X-Embodiment\|Open X-Embodiment]]
- [[DROID 数据集\|DROID 数据集]]
- [[LeRobotDataset\|LeRobotDataset]]
- [[具身智能系统工程\|具身智能系统工程]]

## 证据

- 原始资料快照（本地归档）
- [AgiBot World Colosseo 论文](https://arxiv.org/abs/2503.06669)
- [Alpha/Beta 仓库与 manifest](https://github.com/OpenDriveLab/AgiBot-World)
- [AgiBot World 2026 数据卡](https://huggingface.co/datasets/agibot-world/AgiBotWorld2026)
- [AGIBOT WORLD 2026 Theme 1 官方发布](https://www.agibot.com.cn/article/315/detail/148.html)
- [AGIBOT WORLD 2026 Theme 2 官方发布](https://www.agibot.com/article/231/detail/72.html)
- [ICRA 2026 Challenge](https://agibot-world.com/challenge2026)


## 2026-08-12 运营主体、版本与采用补证

AgiBot World 由 [[智元创新（上海）科技股份有限公司\|智元创新（上海）科技股份有限公司]] 以 [[智元机器人\|智元机器人]] 品牌推动，并在 2024 年与多家机构联合发布；项目合作不等于共同股权、共同运营或产权分配。Theme 1 于 2026-04-07 发布，Theme 2 于 2026-06-03 发布；当前数据卡约 12.8 TB，未公布与 Beta 同口径的百万轨迹或小时总量。

Beta 与 2026 数据卡均标注 CC BY-NC-SA 4.0，且 Hugging Face 页面存在联系信息门控，因此“开放”不等于允许商用、匿名无条件访问或放弃权利。ICRA 官网确认 2026 AgiBot World Challenge；526 支团队与 27 国是主办方统计，不等于客户、付费采用或完全独立复现。智元机器人整机下线和龙旗产线验证也不能反推使用 AgiBot World。

证据：原始资料快照（本地归档）。
