---
{"dg-publish":true,"permalink":"/Qlib/","title":"Qlib","tags":["#量化研究","#金融数据","#机器学习","#开源工具","#Agent"],"created":"2026-08-07","updated":"2026-08-07","dg-note-properties":{"status":"seed","title":"Qlib","source_count":4,"sources":["raw/2026-08-07-luyao-b029-142-Microsoft-Qlib-33cef784.md","raw/2026-08-07-luyao-b051-252-微软Qlib量化交易神器-899023e3.md","https://github.com/microsoft/qlib","https://qlib.readthedocs.io/en/latest/"],"tags":["#量化研究","#金融数据","#机器学习","#开源工具","#Agent"],"created":"2026-08-07","updated":"2026-08-07"}}
---

# Qlib

Qlib 是 Microsoft 开源的 AI-oriented quantitative investment platform，用于数据处理、模型训练、回测、风险建模、组合优化和订单执行等量化研究流程。这里记录的是研究基础设施，不是投资建议或交易策略推荐。

## 观察

- Qlib 把量化研究拆成数据、模型、回测、组合和执行等模块，说明金融 AI 的基础设施不只是“模型预测涨跌”，还包括数据质量、时间点一致性、概念漂移、成本假设和可复现实验。
- README 中出现 RD-Agent-Quant，说明量化研究也在 agent 化：大模型/多智能体被用于因子挖掘、模型优化和数据中心研发流程。但这仍然属于研究自动化，不等于自动交易可以盈利。
- 与 [[金融数据 MCP\|金融数据 MCP]] 相比，Qlib 更偏离线研究和完整 pipeline；MCP 更偏把实时行情和指标暴露给 agent 工具链。二者都需要严格记录数据来源、版本、时间戳和权限。
- 与 [[智能体交易经济性\|智能体交易经济性]] 的关系是评估边界：Qlib 可以支撑回测和研究流程，但 agent 的动态判断是否覆盖推理、数据、工具和执行成本，仍需要单独做利润/成本归因。
- 新增的微信二次传播来源继续把 Qlib 包装成“量化交易神器”，这强化了本页边界：开源研究平台、star 数和交易盈利能力是三件不同的事。

## 边界

- 回测平台不等于真实收益。交易费用、滑点、市场冲击、幸存者偏差、数据泄漏和执行约束都可能让回测表现失真。
- 本页不记录或推荐任何策略、因子、标的或交易动作。

## 相关页面

- [[金融数据 MCP\|金融数据 MCP]]
- [[智能体交易经济性\|智能体交易经济性]]
- [[AI Agent 安全\|AI Agent 安全]]
- [[Agentic 软件开发工作流\|Agentic 软件开发工作流]]

## 证据

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [Microsoft Qlib GitHub](https://github.com/microsoft/qlib)
- [Qlib documentation](https://qlib.readthedocs.io/en/latest/)
