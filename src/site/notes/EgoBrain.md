---
{"dg-publish":true,"permalink":"/EgoBrain/","title":"EgoBrain","tags":["NeuroAI","EEG","第一视角视频","动作分类","多模态数据集"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"EgoBrain","source_count":5,"sources":["raw/2026-08-10-路遥最近一周新增实体清单.md","raw/2026-08-10-最近一周新增实体外部补证.md","raw/2026-08-10-Hugging-Face-Gated-Repositories机制核验.md","https://arxiv.org/abs/2506.01353","https://huggingface.co/datasets/ut-vision/EgoBrain"],"tags":["NeuroAI","EEG","第一视角视频","动作分类","多模态数据集"],"created":"2026-08-10","updated":"2026-08-10"}}
---

# EgoBrain

EgoBrain 是一项把第一视角视觉与脑电同步用于人类动作分类的论文及配套数据集。论文于 2025-06-02 首次提交 arXiv，作者为 Nie Lin、Yansen Wang、Dongqi Han、Weibang Jiang、Jingyuan Li、Ryosuke Furuta、Yoichi Sato 和 Dongsheng Li，后录用为 ICLR 2026。

## 数据与任务

| 维度 | 公开记录 |
|---|---|
| 任务 | 29 类受控日常动作的动作分类 / action recognition |
| 规模 | 61 小时、40 名参与者 |
| 核心模态 | 第一视角视频、32 通道 EEG |
| 补充模态 | 官方数据页另列 IMU |
| 明确不含 | EMG、sEMG、ECG |
| 发布 | Hugging Face public、实时 `gated:false`，CC BY-NC 4.0；卡片仍自称 gated 并保留申请字段，维护者标注总量约 1.6 TB |

论文研究的是跨被试、跨环境的多模态动作分类，而不是潜在意图识别。第一视角视频与 EEG 的时间同步可以用于比较模态贡献，但不能仅凭分类结果识别“感知→神经表征→意图→行动”的因果链。

## 开放数据与组织关系

- 官方数据页把项目写为东京大学 UT-Vision 与 [[微软亚洲研究院\|微软亚洲研究院]] 相关研究者的合作。
- 这支持论文/数据集层面的共同研究，不等于两个机构形成长期联盟或产品合作。
- 数据页列出 32 通道 EEG、第一视角视频与 IMU 的目录结构；卡片正文仍要求申请访问，并写有非商业、不得重新分发原始数据和不得尝试识别参与者等条款。
- 但 2026-08-10 无 token API 返回 `private:false`、`gated:false`，匿名实际 survey CSV 可由 `user_id=public` 下载；`extra_gated_fields` 残留不等于 [[Hugging Face Gated Repositories\|gate]] 当前生效。CC BY-NC 4.0 与卡片附加条款仍需分别核验，不能把公开下载写成已走 click-through。
- 维护者于 2026-07-05 宣布全部数据发布完成；这是维护者口径，使用者仍需自行核验文件完整性、匿名化处理和本地伦理许可。

## 能支持与不能支持的判断

- **可以支持**：在受控日常动作分类中研究第一视角视觉与 EEG 的多模态融合、跨被试与跨环境泛化，以及敏感视频/脑电数据中“卡片声明、申请字段与实时访问状态”可能漂移的发布治理问题。
- **不能支持**：把动作标签改写成潜在意图、动机或主观体验；把时间同步改写成因果机制；把动作分类改写成真实机器人策略训练或闭环控制。
- **不能混入模态**：EgoBrain 的公开模态没有 EMG、sEMG 或 ECG；不能因为相邻页面讨论 Ego-NeuroLoop、OriginFlow 或 Human Model 就把这些信号补进数据集。

## 相关页面

- [[NeuroAI\|NeuroAI]]
- [[脑电与具身智能\|脑电与具身智能]]
- [[EEG 数据共享困境\|EEG 数据共享困境]]
- [[Hugging Face Gated Repositories\|Hugging Face Gated Repositories]]
- [[具身智能数据基础设施\|具身智能数据基础设施]]
- [[Ego-NeuroLoop\|Ego-NeuroLoop]]
- [[MindSpace\|MindSpace]]
- [[人体模型\|人体模型]]
- [[脑电进入机器人训练\|脑电进入机器人训练]]
- [[Conduit\|Conduit]]

## 证据

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [arXiv：EgoBrain](https://arxiv.org/abs/2506.01353)
- [官方 Hugging Face 数据页](https://huggingface.co/datasets/ut-vision/EgoBrain)
