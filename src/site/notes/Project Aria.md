---
{"dg-publish":true,"permalink":"/Project Aria/","title":"Project Aria","tags":["#第一视角数据","#可穿戴传感","#数据治理","#机器感知"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"Project Aria","source_count":8,"sources":["raw/2026-08-10-EgoMimic数据许可与参与者授权核验.md","https://www.projectaria.com/","https://arxiv.org/abs/2308.13561","https://github.com/facebookresearch/projectaria_tools","https://www.projectaria.com/community-guidelines/","https://www.projectaria.com/research-kit/","https://about.fb.com/news/2020/09/privacy-matters-project-aria/","https://www.projectaria.com/partners/"],"tags":["#第一视角数据","#可穿戴传感","#数据治理","#机器感知"],"created":"2026-08-10","updated":"2026-08-10"}}
---


# Project Aria

Project Aria 是 Meta Reality Labs Research 的第一视角多模态研究平台。它把可穿戴眼镜、VRS 记录格式、设备控制软件、开源数据处理工具和云端感知服务组合起来，使研究伙伴能够采集并处理自己的 egocentric 数据。它不是一张覆盖所有 Aria 录制内容的统一数据许可证。

## 设备与数据流

Aria 眼镜可记录 RGB、SLAM／scene cameras、IMU、音频和眼动等同步流；具体硬件代际、配置与公开制品保留哪些模态必须分别核验。原始 VRS 可由 Project Aria Tools 解析，也可送入 [[Machine Perception Services\|Machine Perception Services]] 生成设备轨迹、点云、手部和 gaze 等派生输出。

这种链条至少有三个不同对象：

1. 设备、SDK 和工具；
2. 研究伙伴自行录制的 VRS 与 MPS 派生数据；
3. 另行发布、具有自己协议的数据集。

工具能够访问某种模态，不代表某个公开数据集实际包含该模态；研究伙伴能用设备创建数据，也不代表已获得被摄者、场所、声音、作品或下游再分发权。

## 三层权利边界

| 层 | 公开规则 | 不能推出 |
|---|---|---|
| 工具层 | Project Aria Tools 为 Apache-2.0；部分 ARK App、Client SDK 和服务另受伙伴条款约束 | 开源工具许可不覆盖 VRS 内容、参与者、旁观者、声音、场所或作品 |
| 采集层 | [[Project Aria Research Community Guidelines\|Project Aria Research Community Guidelines]] 要求伙伴处理通知、适用同意、录制指示、场地方授权、旁观者停止／删除、留存、访问、去标识和知识产权 | 社区指南是采集者义务，不是给数据接收者的商用、训练或再分发授权 |
| 发布层 | [[Aria Digital Twin\|Aria Digital Twin]]、Aria Pilot Dataset、Ego-Exo4D 等分别采用自己的数据协议和参与者治理 | 一个 Aria 数据集的许可不能横向迁移到其他数据集或伙伴自行录制的数据 |

[[Hugging Face 服务条款\|Hugging Face 服务条款]] 等托管平台规则还会形成第四个“平台层”，但平台 public-repository 条款不能替代仓库自己的数据许可证或上游参与者授权。

## 隐私控制与局限

Aria 的硬件和治理材料把可见 recording LED、隐私开关、停止录制、删除请求与去标识纳入研究流程。[[EgoBlur\|EgoBlur]] 可定位并模糊面孔与车牌，但它只是降低视觉识别风险的工具：

- 它不能替代参与者或旁观者同意；
- 它不处理声音、屏幕、场所规则、商业秘密或其他知识产权；
- 漏检与误检仍需研究流程管理；
- 只有项目特定材料才能证明某个数据集实际运行了何种模糊、人工复核和删除流程。

Meta 2020 年内部试点曾采用家庭成员／场地方同意、三日隔离期和公开场所人脸车牌模糊；这些是历史内部方案，不能自动描述外部伙伴的默认流程。

## 与 EgoMimic 的关系

[[EgoMimic\|EgoMimic]] 用 Aria 采集明确任务下的人类示范，并用 MPS 的 SLAM 与 hand tracking 构造训练 HDF5。论文附录描述的原始设备流比公开训练数据的已知处理路径更宽；不能因为原始 Aria 能记录音频和眼动，就断言公开 HDF5 保留了这些模态。

Project Aria 官方 partners 页面确认 Georgia Tech 的 EgoMimic 是合作案例，但合作关系不等于数据许可。EgoMimic 的 MIT 根许可覆盖代码仓软件；其公开 HDF5 截至 2026-08-10 没有 dataset-specific license 或项目级参与者授权说明。详细固定版本边界见 原始资料快照（本地归档）。

## 相关页面

- [[EgoMimic\|EgoMimic]]
- [[Ego4D\|Ego4D]]
- [[Ego-Exo4D\|Ego-Exo4D]]
- [[人类活动数据\|人类活动数据]]
- [[以人为中心的具身智能\|以人为中心的具身智能]]
- [[Machine Perception Services\|Machine Perception Services]]
- [[Project Aria Research Community Guidelines\|Project Aria Research Community Guidelines]]
- [[EgoBlur\|EgoBlur]]
- [[Aria Digital Twin\|Aria Digital Twin]]
- [[Hugging Face 服务条款\|Hugging Face 服务条款]]

## 证据

- 原始资料快照（本地归档）
- [Project Aria 论文](https://arxiv.org/abs/2308.13561)
- [Project Aria Research Kit](https://www.projectaria.com/research-kit/)
- [Project Aria Tools](https://github.com/facebookresearch/projectaria_tools)
- [Research Community Guidelines](https://www.projectaria.com/community-guidelines/)
- [Privacy Matters: Project Aria](https://about.fb.com/news/2020/09/privacy-matters-project-aria/)
- [Project Aria partners](https://www.projectaria.com/partners/)



## 后续拆分节点

- [[Aria Research Kit\|Aria Research Kit]]：设备、App、SDK、伙伴资格与合同边界。
- [[Project Aria Tools\|Project Aria Tools]]：开源 VRS／MPS 数据工具及其软件许可范围。
- [[Aria Pilot Dataset\|Aria Pilot Dataset]]：官方 pilot 数据制品、参与者协议与数据许可证。
- [[Visual Recordings System\|Visual Recordings System]]：多传感器记录格式及从 VRS 到训练制品的信息保留。