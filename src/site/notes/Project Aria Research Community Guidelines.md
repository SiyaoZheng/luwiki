---
{"dg-publish":true,"permalink":"/Project Aria Research Community Guidelines/","title":"Project Aria Research Community Guidelines","tags":["第一视角数据","数据治理","隐私","研究伦理","数据许可"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"Project Aria Research Community Guidelines","source_count":12,"sources":["raw/2026-08-10-Project-Aria-Research-Community-Guidelines核验.md","https://www.projectaria.com/community-guidelines/","https://web.archive.org/web/20211028173321id_/https://about.facebook.com/realitylabs/projectaria/community-guidelines","https://web.archive.org/web/20230927030157id_/https://www.projectaria.com/community-guidelines/","https://facebookresearch.github.io/projectaria_tools/gen2/ark/companion-app/start","https://arxiv.org/abs/2308.13561","https://www.projectaria.com/datasets/apd/license","https://arxiv.org/abs/2410.24221","https://arxiv.org/abs/2406.09905","https://doi.org/10.1007/s11263-025-02557-6","https://arxiv.org/abs/2508.07057","https://doi.org/10.1016/j.jrt.2021.100010"],"tags":["第一视角数据","数据治理","隐私","研究伦理","数据许可"],"created":"2026-08-10","updated":"2026-08-10"}}
---

# Project Aria Research Community Guidelines

Project Aria Research Community Guidelines 是 Meta 为 Project Aria 研究伙伴设定的采集行为、隐私与数据管理底线。它约束 partners 及获授权使用 Project Aria 的实体，保护佩戴者、参与者和旁观者；它不是数据许可证、软件许可证、伦理审批或某一项目的合规审计。

## 现行版本

旧 about.facebook.com 路径最早找到的公开快照是 2021-10-28，2022-05-25 快照也保留相同核心治理结构；两者没有版本号或 last updated。当前官方页面自报最后更新于 2023-09-07，并新增或明确地区性旁观者提示要求，以及 GDPR／UK GDPR 下 research partner 的 controller 与机构透明度责任。

当前 projectaria.com 域名最早找到的快照为 2023-09-27；该快照与 2026-08-10 当前页的规范化核心正文完全一致。Project Aria Gen 2 Companion App 的当前登录说明仍要求使用者阅读这份 Guidelines，设备论文也写明所有 partners 必须遵循社区指导。

因此可以确认规则不晚于 2021-10-28 已公开，2023-09-07 版仍是现行入口。Wayback 只界定公开可见区间，不能充当官方发布日期、正式版本数或完整 change log，也不能排除未公开伙伴合同或内部修订。

## 适用主体与责任

直接义务主体是 Project Aria partners、Research Community 中使用设备的人，以及授权其使用的实体。研究参与者、佩戴者和旁观者主要是保护对象与请求主体。

指南明确保留适用法律、伙伴与 Meta 或第三方之间的其他 terms／contracts。违反规则可导致被逐出计划并收回设备。这说明它属于伙伴准入与治理层，而不是完整权利文件。

在满足 GDPR／UK GDPR 要求的场景，research partner 是 controller，并应通过透明度／通知措施让旁观者知道研究者为谁工作。该句没有穷尽 Meta、MPS、云服务商、合作机构或下游数据接收者在所有处理环节中的 controller／processor 身份；具体项目仍需画出自己的数据流与责任链。

## 采集现场的要求

| 层 | 要求 | 不能简化成 |
|---|---|---|
| 法律与权利 | 遵守适用法律，尊重隐私和知识产权 | 加入 Project Aria 就自动取得场景、作品或人物权利 |
| 通知与同意 | 对可能被采集者适当通知，并在适用法要求时取得同意 | 全球所有场景一律逐人书面同意，或公共场景一律无需同意 |
| 录制信号 | 外部 LED 清楚可见，并遵守地区额外旁观者信号要求 | 灯亮就等于旁观者已看见、理解和同意 |
| 停止与说明 | 旁观者要求时停止，向查询者提供研究联系方式 | 设备有隐私开关就等于完整权利请求流程 |
| 场所 | 私人 venue／building 需授权；敏感活动和地点禁录 | 场地方授权替代所有个人同意 |
| 私人住宅 | 未获全体家庭成员同意不得录制 | 一名住户或设备佩戴者能替所有家庭成员授权 |

敏感地点的明确例子包括厕所、医疗／健康设施、卧室／酒店房间、宗教／祷告场所和更衣场所。未被列举的地点也不能自动解释为可自由录制，仍受适用法、场地规则、项目伦理与第三方权利约束。

## 数据生命周期

指南要求只为有效研究目的采集，给 research participants 适当培训，并建立安全数据管理。具体底线包括：

- 删除不需要或未使用的数据；
- 不同佩戴者之间恢复设备出厂设置；
- 为处理系统和软件维持安全措施；
- 设置留存期限、删除协议和访问协议；
- 对面孔、车牌等个人可识别信息进行遮挡或去标识；
- 不重新识别已模糊／遮挡的旁观者，也不把 Aria 数据关联到特定个人或标识符；
- 对参与者或旁观者的合理删除请求无不当延迟地处理。

这些条款没有给统一留存天数、算法或召回率门槛、请求者身份核验、备份例外，也没有说明删除如何传播到派生轨迹、HDF5、标注、模型、缓存和第三方副本。设备重置、删除当前录制或运行 [[EgoBlur\|EgoBlur]] 都只能覆盖数据生命周期的一部分。

## 为什么不是数据许可证

指南没有授予下载、复制、训练、修改、公开展示、再分发、商业使用、衍生作品或商标权，也没有分配数据、模型或论文成果的所有权。“尊重知识产权”是一项限制性义务，不是许可证授权。

[[Aria Pilot Dataset\|Aria Pilot Dataset]] 的独立 Dataset License Agreement 提供清楚对照：它才限定特定非商业研究领域、出版归属、禁止分发／公开展示／识别、终止后删除、反馈授权、赔偿和管辖。该协议只适用于 Pilot Dataset，不能横向迁移到伙伴自行录制的 VRS、[[EgoMimic\|EgoMimic]] HDF5、[[Nymeria\|Nymeria]]、[[Ego-Exo4D\|Ego-Exo4D]] 或其他 Aria 数据集。

软件层也要分开：Project Aria Tools 的 Apache-2.0 只覆盖被许可代码，不覆盖人物、声音、场所、视频、派生数据或下游训练权。

## 对伙伴项目能够证明什么

| 项目 | 可确认 | 不能外推 |
|---|---|---|
| [[EgoMimic\|EgoMimic]] | 使用 Project Aria Research Kit，因 partner 身份而受指南制度性约束 | 论文／补充未直接引用指南，公开材料未给 IRB、同意、旁观者、场地、留存、删除或去标识执行记录；不能写成逐项合规已证实，也不能写成没有执行 |
| [[Nymeria\|Nymeria]] | 论文称遵循指南、取得参与者及房主同意并对视频应用 EgoBlur | Meta 主导的作者披露，不是外部独立审计；不能替 EgoMimic 提供治理证据 |
| [[Ego-Exo4D\|Ego-Exo4D]] | 论文披露机构独立审查、知情同意、采集管理与封闭环境治理 | 与 EgoMimic 有作者重叠，各机构流程不能横向迁移 |
| 任意公开 Aria 数据集 | 可以核验项目自己的 license、card、consent 与处理说明 | 不能因为设备相同或都引用指南就共享授权 |

截至 2026-08-10，未找到无作者重叠团队对 EgoMimic 数据治理或 Guidelines 执行的独立审计；也未找到与 EgoMimic 直接相关的公开投诉、监管调查或已证实隐私事件。未找到只描述公开检索边界，不表示不存在。

## 外部压力测试

Bukhari 等 2025 年预印本研究分心或视力受限的 XR 旁观者：8 人焦点组与另 7 人用户研究中，纯视觉提示的主观有用性较低，多模态提示更受偏好。样本很小，也不是 Project Aria 现场审计；它只限制“LED 清楚可见就等于有效通知”的推论。该机制由 [[可穿戴设备录制提示\|可穿戴设备录制提示]] 继续积累。

Applin 与 Flick 2021 年的同行评议评论批评公共空间部署、旁观者集体能动性与 opt-out 结构。它早于 2023 版 Guidelines，是规范性批评，不是当前文本或 EgoMimic 的合规实证。

## 使用这份指南做审计

审计一个 Aria 项目时，至少分开问：

1. 哪个实体是各阶段 controller／processor，旁观者如何识别和联系它；
2. 采集场景、模态、参与者、旁观者、场地方与敏感地点规则是什么；
3. 通知、同意、LED／额外信号、停止请求是否分别有记录；
4. 原始数据、派生数据、模型服务、缓存和备份的留存、访问、去标识与删除如何执行；
5. 机构伦理／IRB、ARK 合同、软件许可、数据集许可和托管平台条款分别覆盖什么；
6. 项目公开的是制度适用、作者自述、执行记录，还是独立审计。

只有第一层政策引用时，最多写“应受规则约束”；不能升级为“合规已验证”。

## 相关页面

- [[Project Aria\|Project Aria]]
- [[EgoMimic\|EgoMimic]]
- [[人类活动数据\|人类活动数据]]
- [[以人为中心的具身智能\|以人为中心的具身智能]]
- [[EgoBlur\|EgoBlur]]
- [[Aria Pilot Dataset\|Aria Pilot Dataset]]
- [[Nymeria\|Nymeria]]
- [[可穿戴设备录制提示\|可穿戴设备录制提示]]

## 证据

- 原始资料快照（本地归档）
- [当前官方 Guidelines](https://www.projectaria.com/community-guidelines/)
- [2021-10-28 旧域名归档](https://web.archive.org/web/20211028173321id_/https://about.facebook.com/realitylabs/projectaria/community-guidelines)
- [2023-09-27 当前域名归档](https://web.archive.org/web/20230927030157id_/https://www.projectaria.com/community-guidelines/)
- [Project Aria Gen 2 Companion App](https://facebookresearch.github.io/projectaria_tools/gen2/ark/companion-app/start)
- [Project Aria 设备论文](https://arxiv.org/abs/2308.13561)
- [Project Aria Pilot Dataset License Agreement](https://www.projectaria.com/datasets/apd/license)
- [EgoMimic](https://arxiv.org/abs/2410.24221)
- [Nymeria](https://arxiv.org/abs/2406.09905)
- [XR 旁观者录制提示研究](https://arxiv.org/abs/2508.07057)

<!-- issue: luwiki-s1f -->
