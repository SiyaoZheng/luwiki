---
{"dg-publish":true,"permalink":"/EgoMimic/","title":"EgoMimic","tags":["#机器人学习","#人类示范","#第一视角视频","#共同训练","#本体对齐"],"created":"2026-08-10","updated":"2026-08-26","dg-note-properties":{"status":"processed","title":"EgoMimic","source_count":8,"sources":["raw/2026-08-10-人类活动到机器人训练外部补证.md","raw/2026-08-10-Project-Aria-Research-Community-Guidelines核验.md","raw/2026-08-10-Hugging-Face-Gated-Repositories机制核验.md","https://egomimic.github.io/","https://arxiv.org/abs/2410.24221","https://github.com/SimarKareer/EgoMimic","https://huggingface.co/datasets/gatech/EgoMimic/tree/main","https://arxiv.org/abs/2503.00779"],"tags":["#机器人学习","#人类示范","#第一视角视频","#共同训练","#本体对齐"],"created":"2026-08-10","updated":"2026-08-26","product_name":"EgoMimic","developer":null,"operator":null,"owner":null,"manufacturer":null,"launch_date":null,"product_status":"active_research","category":null,"platforms":[],"related_products":[],"customers":[],"website":null,"as_of":"2026-08-10","status_note":"公开模仿学习框架"}}
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
- 截至 2026-08-10，Bead `luwiki-4i3.2.2` 的定向检索没有找到原始全栈、同任务、同 ViperX 硬件和同协议的端到端独立复现。Phantom 属于无作者重叠的组件负向测试，不是完整复现；出现公开工件齐全的同协议研究时重开。

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
- [[Hugging Face Gated Repositories\|Hugging Face Gated Repositories]]
- [[手亿科技\|手亿科技]]
- [[灵初智能\|灵初智能]]

## 证据

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [EgoMimic 项目页](https://egomimic.github.io/)
- [ICRA 2025 论文](https://arxiv.org/abs/2410.24221)
- [代码](https://github.com/SimarKareer/EgoMimic)
- [公开数据文件](https://huggingface.co/datasets/gatech/EgoMimic/tree/main)



## 数据许可、参与者与衍生使用边界（2026-08-10）

固定版本核验需要把“代码可用”“文件可下载”和“数据权利已清晰”分开：

| 问题 | 当前证据状态 |
|---|---|
| 根代码仓许可 | MIT，已确认；但个别文件头与 robomimic submodule 需按各自许可处理 |
| HF 文件访问 | main@065ffc0 公开、非 gated，六个 HDF5 合计 242.644 GB；已确认 |
| 官方示例训练 | README 明示下载 HDF5 训练 EgoMimic／ACT；已确认 |
| dataset-specific license | main 没有 README、LICENSE、license tag 或 cardData；未发现 |
| 站外再分发、商用训练、衍生数据发布 | 公开材料不足，needs_verification |
| IRB／同意／影像发布／旁观者／撤回传播 | 论文、补充、项目页、代码文档和官方新闻中未发现项目级记录，公开状态无法核验 |

未发现公开记录不等于研究者没有取得同意；同样，公开下载、作者 quick-start 和沉默也不等于第三方已经获得无限再使用权。HF 平台层条款、[[Hugging Face Gated Repositories\|gated access]] 与仓库专属数据许可证是不同层。EgoMimic 当前 non-gated 只表示无需个人账号申请，不能把平台 public-repository 规则简写成 MIT／CC 数据许可，也不能据此推断数据权利已清晰。

[[Project Aria\|Project Aria]] 的工具、伙伴采集义务与各数据集协议也相互独立。Aria Tools 的 Apache-2.0 不覆盖 VRS／HDF5、人物、声音、场所或作品；社区指南要求伙伴处理通知、适用同意、删除和去标识，但它不是给数据接收者的授权。EgoMimic 的 raw Aria 能包含比公开训练处理路径更多的传感流，不能据设备能力推断公开 HDF5 一定保留音频或原始眼动。

重开条件：官方 dataset card／LICENSE 合并到 main、HF revision 改变，或作者／Georgia Tech 发布项目特定 IRB、同意、发布与衍生使用范围。

证据：原始资料快照（本地归档）

<!-- issue: luwiki-4i3.5.1 -->


## Project Aria 伙伴规则不等于项目级合规披露（2026-08-10）

[[EgoMimic\|EgoMimic]] 使用 Project Aria Research Kit；官方准入文档与设备论文均把 原始资料快照（本地归档） 作为 partner 的制度要求。该链条足以说明其采集应受通知、适用同意、旁观者停止／删除、场所、留存、去标识和禁止重识别等规则约束。

但 EgoMimic 论文、补充、项目页与公开仓库中，本轮没有找到对 Guidelines 的直接文本引用，也没有找到公开 IRB 编号、同意书、旁观者告知文本、场所授权、保留／删除计划或去标识执行记录。正确结论是“制度适用已证实、项目执行公开状态未证实”，而不是“已证明逐项合规”或“未取得同意”。

[[Nymeria\|Nymeria]] 与 Ego-Exo4D 披露了各自的同意／审查或去标识流程，说明其他 Aria 项目可以提供更项目化的治理证据；它们不能替代 EgoMimic 的项目记录。无作者重叠团队对 EgoMimic 数据治理的独立审计截至本轮仍未找到。

证据：原始资料快照（本地归档）

<!-- issue: luwiki-s1f -->


## Hugging Face 平台许可层补充（2026-08-10）

上文“没有 dataset-specific license”应严格理解为：固定 revision 没有可观察到的 README/card、LICENSE、license tag 或其他具名、独立、可移植的数据集许可证；不是说平台上绝对不存在任何许可关系。

[[Hugging Face 服务条款\|Hugging Face 服务条款]] 对 public repository 确实写有面向每位 User 的长期公共内容 grant，包含复制、分发和衍生等动词，但原文以 Hugging Face 的服务与功能为范围语境。这个平台层 grant 不能自动证明任意站外商用训练、镜像、再分发或衍生发布，也不能补齐 HDF5 中人物、影像、场所、作品或参与者授权。EgoMimic 的准确状态因此是“public／non-gated + 平台条款基线 grant + 缺 repository-specific portable dataset license”，而不是“公开即开放许可”或“完全无许可”。

证据：原始资料快照（本地归档）
