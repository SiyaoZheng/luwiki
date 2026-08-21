---
{"dg-publish":true,"permalink":"/路遥 Daily Digest/","title":"路遥 Daily Digest","tags":["#Daily Digest","#路遥","#具身智能","#世界模型","#Human Model"],"created":"2026-08-21","updated":"2026-08-21","dg-note-properties":{"status":"processed","title":"路遥 Daily Digest","tags":["#Daily Digest","#路遥","#具身智能","#世界模型","#Human Model"],"sources":["https://current-robotics.com/blog/curr-0","https://www.brainco.cn/company","https://www.genrobot.ai/","https://lightwheel.ai/","https://kw.beijing.gov.cn/xwdt/kcyx/xwdtyqqy/202608/t20260807_4812762.html"],"created":"2026-08-21","updated":"2026-08-21"}}
---

# 路遥 Daily Digest

> [!abstract] 2026-08-21｜Human Model × 具身数据 × 世界模型 × MindSpace
> 这不是资讯列表，而是从噜 Wiki 的既有判断出发，只保留会改变研究、产品或下一步行动的信息。

## 今天最值得看的 5 个信号

### 1. Current Robotics 把人类纠正接入世界模型评测

Current Robotics 公开了 HumanEx 可穿戴采集系统、Curr-0 全身移动—灵巧操作模型，以及用于策略评测和 Human-in-the-World-Model 纠正的交互式多模态世界模拟器。

**为什么重要**：人的经验不再只用于预训练，而是在机器人失败附近进入评测、纠正和再训练。产品单元因此变成“失败状态 + 人类介入 + 可回滚分支 + 新训练片段”。

**证据边界**：21,000 小时人类数据、2,800 小时全身演示和评测相关性主要来自公司第一方披露；尚不能据此确认真机增益。

**下一步**：把 [[MindSpace\|MindSpace]] / Human Model 的机器人端接口写成 intervention event schema，至少记录策略原动作、失败类型、控制权、人类纠正、回滚节点、生成分支和真机结果。

### 2. BrainCo 展示了“神经信号 + 人类示范 + 真机触觉”的完整产品栈

[[BrainCo强脑科技\|BrainCo强脑科技]]把真机触觉数据、RevoHuman/RevoEgo 人类中心数据和第一视角/仿真数据放进同一矩阵，同时提供脑控机器人训练平台入口。

**为什么重要**：EEG 不必承担全部“读意图”使命。可穿戴手部动作、第一视角、触觉与真机状态可以先形成可训练数据；EEG 只作为任务阶段、错误或控制触发的候选增量信号。

**证据边界**：公开材料支持产品入口、演示和采集架构存在，但不能推出潜在意图已被读取，也不能推出 EEG 对机器人学习已有稳定增益。

**下一步**：[[Ego-NeuroLoop\|Ego-NeuroLoop]] 的最小实验先做视觉/动作基线，再加入 EEG，并报告跨人、跨日、伪同步与模态消融。

### 3. 简智机器人的 DPH 指标击中了“小时数虚胖”

[[简智机器人\|简智机器人]]提出：

`DPH = 独立任务数 × 采集者人数 ÷ 数据总时长`

**为什么重要**：它把跨人的行为差异和任务多样性放回数据价值判断，能区分“很多人采不同任务”与“少数人重复堆时长”。

**证据边界**：DPH 会奖励短任务和表面多样性，尚未处理任务相似度、模态缺失、同步错误、失败率与真实训练价值。

**下一步**：把 DPH 扩成数据价值面板：任务/人员/场景覆盖、有效样本率、模态完整率、同步误差、严格留出，以及相同预算下的模型增益。

### 4. 光轮智能把数据生产改写成“由模型失败驱动”

[[光轮智能\|光轮智能]]把 EgoSuite、RoboFinals、RoboStack 分别放在数据、评测与部署反馈层；其与黎曼动力的公开合作提出“真实数据—世界建模—能力评测—任务部署—数据再生产”。

**为什么重要**：数据公司可能不再按小时出售静态资产，而是围绕某个模型的失败分布持续生产新数据。这也定义了 Daily Digest 的信息价值：不是今天新增了多少消息，而是什么改变了当前模型的薄弱点。

**证据边界**：合作公告只证明双方宣布联合验证，不证明闭环已经在生产中跑通。

**下一步**：后续简报优先追踪“失败—评测—数据回流”的公开证据，而不是融资或总小时数。

### 5. “使用者中心的建筑具身智能体”给 MindSpace 更精确的产品语言

使用者中心的绿色建筑具身智能体可以被拆成：数据链融通、多目标权衡与个性化适应，并形成如下闭环：

`空间/设备/环境状态 → 使用者行为与主观反馈 → 偏好模型 → 舒适/能耗/健康/安全多目标控制 → 设备或空间界面执行 → 新反馈`

**为什么重要**：这让 [[MindSpace\|MindSpace]] 从“空间 + 传感 + 心理响应”推进到可以定义事件、控制与验收的产品结构。

**证据边界**：生理信号只是状态或舒适代理，不能直接当作心理响应或意图真值。

**下一步**：先公开一个最小空间—使用者—控制事件 schema；验收同时看个体舒适、能耗与真实控制日志。

## 暂不升级为正式结论

- 神舞科技 ND8S-VR：目前只有搜狗微信结果线索，尚未取得可核验全文或稳定官网产品页。
- CurrentWorld-0：近期转载密集，但大多是同一发布事件的改写；传播密度不等于独立验证。
- 章鱼动力 SynapX、雪梦未来等：当前主要来自行业综述，只适合作为官网与工商检索种子。
- YD/T 6771-2026 数据集质量标准：编号、发布日期与实施日仍需主管机构或正式标准平台确认。

## 本期 Wiki 更新

新建：[[BrainCo强脑科技\|BrainCo强脑科技]] · [[简智机器人\|简智机器人]] · [[Current Robotics\|Current Robotics]] · [[光轮智能\|光轮智能]]

Enrich：[[具身智能数据基础设施\|具身智能数据基础设施]] · [[世界模型技术路线\|世界模型技术路线]] · [[Ego-NeuroLoop\|Ego-NeuroLoop]] · [[MindSpace\|MindSpace]]

## 公开来源

- [Current Robotics｜Curr-0](https://current-robotics.com/blog/curr-0)
- [BrainCo 强脑科技](https://www.brainco.cn/company)
- [简智机器人 GenRobot AI](https://www.genrobot.ai/)
- [光轮智能 Lightwheel](https://lightwheel.ai/)
- [北京市科委转载：光轮智能与黎曼动力合作](https://kw.beijing.gov.cn/xwdt/kcyx/xwdtyqqy/202608/t20260807_4812762.html)

