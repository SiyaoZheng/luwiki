---
{"dg-publish":true,"permalink":"/Current Robotics/","title":"Current Robotics","tags":["#公司","#人形机器人","#HumanEx","#Curr-0","#世界模型"],"created":"2026-08-21","updated":"2026-08-26","dg-note-properties":{"status":"processed","title":"Current Robotics","aliases":["元流","Current"],"source_count":3,"sources":["https://current-robotics.com/","https://current-robotics.com/blog/curr-0","https://current-robotics.com/research/dworldeval"],"tags":["#公司","#人形机器人","#HumanEx","#Curr-0","#世界模型"],"created":"2026-08-21","updated":"2026-08-26","legal_name":null,"english_name":"Current Robotics","jurisdiction":null,"legal_form":null,"registration_number":null,"legal_status":null,"founded":null,"headquarters":null,"registration_authority":null,"stock_code":null,"market":null,"founders":[],"chairperson":null,"legal_representatives":[],"key_people":[],"directors":[],"parent_organization":null,"owners":[],"shareholders":[],"subsidiaries":[],"brands":["Current Robotics","元流","Current"],"products":["HumanEx","Curr-0","Interactive multimodal world simulator"],"services":["Human-behavior data collection","Whole-body humanoid policies","World-model evaluation and correction"],"business_areas":["Humanoid robotics","Human data","Whole-body intelligence","World models"],"related_parties":[],"governance_entities":[],"relationship_events":[],"website":"https://current-robotics.com/","authorized_capital":null,"paid_in_capital":null,"issued_shares":null,"par_value":null,"as_of":"2026-08-21"}}
---

# Current Robotics

Current Robotics（元流）公开构建一套从人类行为采集、人形机器人全身策略到世界模型评测和纠正的全栈系统。核心节点包括 HumanEx 可穿戴采集系统、Curr-0 全身移动—灵巧操作模型和交互式多模态世界模拟器。

## 技术栈

- HumanEx 从第一视角和手部数据扩展到全身本体感觉、IMU、力和肌电等人体行为信号，目标是把自然人类任务转成可同步、可对齐的机器人学习数据。
- Curr-0 面向 70+ DoF 人形本体，把语言/视觉推理、全身运动与灵巧接触组织成耦合策略。公司称其使用 21,000 小时人类数据，其中 2,800 小时为全身演示。
- 世界模型承担策略评测和 Human-in-the-World-Model 纠正：在失败或不确定 rollout 附近由人介入，并通过回滚、分支生成后训练片段。

## 对噜 Wiki 的意义

- 对[[具身智能数据基础设施\|具身智能数据基础设施]]而言，它把人类数据、全身本体映射、模型训练和部署反馈接成同一条价值链。
- 对[[世界模型技术路线\|世界模型技术路线]]而言，它是 evaluator + intervention + post-training 路线，而不只是未来视频生成。
- 对[[全身智能\|全身智能]]而言，它明确主张移动、平衡、躯干、双臂与灵巧手不能被简单拆成先移动后操作。

## 证据边界

- 数据小时数、任务能力与评测相关性主要来自公司第一方，不能替代独立真机复现。
- 世界模型中的回滚和纠正降低硬件占用，但不消除模型偏差；必须保留真机校准、失败保持、action shuffle、OOD、接触和长时漂移测试。
- HumanEx 的人类动作仍需目标本体映射和机器人监督，不能由“高保真人类数据”直接推出跨本体可执行性。

## 证据

- 原始资料快照（本地归档）

