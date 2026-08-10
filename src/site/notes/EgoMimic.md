---
{"dg-publish":true,"permalink":"/EgoMimic/","title":"EgoMimic","tags":["机器人学习","人类示范","第一视角视频","共同训练","本体对齐"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"EgoMimic","source_count":5,"sources":["raw/2026-08-10-人类活动到机器人训练外部补证.md","https://egomimic.github.io/","https://arxiv.org/abs/2410.24221","https://github.com/SimarKareer/EgoMimic","https://huggingface.co/datasets/gatech/EgoMimic/tree/main"],"tags":["机器人学习","人类示范","第一视角视频","共同训练","本体对齐"],"created":"2026-08-10","updated":"2026-08-10"}}
---

# EgoMimic

EgoMimic 是把第一视角裸手人类示范与目标机器人遥操作数据共同训练的模仿学习框架。它不把人手轨迹强行当成机器人关节动作，而是共享姿态监督、保留本体专属归一化与机器人控制头。

## 数据与动作桥梁

- 人类端用 75g Project Aria 获取 RGB、设备位姿和双手 SE(3)；机器人端使用同一 ViperX 双臂本体、腕部相机与关节控制。
- 人手与机器人末端轨迹都转到当前观测相机坐标系，并分别 Gaussian normalize。
- 共享视觉与策略 transformer；人类和机器人数据共同提供 pose loss，joint loss 只来自机器人数据。最终执行机器人 joint action，而不是直接执行人手动作。
- 实验合计人类 2,150 demos／4h、机器人 1,000 demos／12h，覆盖 Object-in-Bowl、Groceries 和 Laundry 三类真实任务。

## 作者结果与独立边界

- Object-in-Bowl 的 full method 为 128 points，无 human data 为 68；作者同时说明部分增益来自架构。
- 未见颜色衬衫测试中 EgoMimic 为 85% success，ACT 为 25%；所有核心实验仍在同一种 ViperX 本体上。
- Phantom 的独立组件评测显示 EgoMimic-inspired red line 单独使用在四个准静态任务均为 0；加入大量多场景人类示范可改善 OOD。它没有完整复现目标机器人共同训练、相机硬件匹配和 joint grounding，因此说明“单一视觉技巧不足”，不是对 EgoMimic 全栈的直接反驳。
- 截至 2026-08-10，没有找到原始全栈、同协议、端到端的严格独立复现。跨本体增益继续由 Bead `luwiki-4i3.2.2` 跟踪。

## 开放状态与许可

- 训练/处理代码和 Eve 硬件代码为 MIT。
- Hugging Face 发布六个 processed HDF5，约 243GB；截至访问日没有 dataset card 或明确数据许可。
- 代码许可不自动覆盖视频、人物、场景和衍生 HDF5；“公开可下载”不能写成可无条件商用或再分发。

## 机制意义

- 人类数据的优势主要是吞吐量和环境多样性，不是单条示范必然更精确。
- human+robot co-training 的关键是用机器人数据把人类动作语义锚定到可执行控制。
- “被动人类数据”是更长期愿景；当前实证来自明确任务目标下的策划式示范。

## 相关页面

- [[人类活动数据\|人类活动数据]]
- [[Ego4D\|Ego4D]]
- [[Ego-Exo4D\|Ego-Exo4D]]
- [[Universal Manipulation Interface\|Universal Manipulation Interface]]
- [[具身智能数据基础设施\|具身智能数据基础设施]]
- [[手亿科技\|手亿科技]]
- [[灵初智能\|灵初智能]]

## 证据

- 原始资料快照（本地归档）
- [EgoMimic 项目页](https://egomimic.github.io/)
- [ICRA 2025 论文](https://arxiv.org/abs/2410.24221)
- [代码](https://github.com/SimarKareer/EgoMimic)
- [公开数据文件](https://huggingface.co/datasets/gatech/EgoMimic/tree/main)
