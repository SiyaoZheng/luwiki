---
{"dg-publish":true,"permalink":"/GitHub Copilot/","title":"GitHub Copilot","tags":["#产品","#开发者工具","#商业实体"],"created":"2026-08-11","updated":"2026-08-11","dg-note-properties":{"status":"processed","title":"GitHub Copilot","aliases":["Copilot"],"source_count":14,"sources":["raw/2026-08-11-GitHub-Copilot商业产品与采用边界核验.md","https://docs.github.com/en/copilot/get-started/plans","https://docs.github.com/en/copilot/concepts/billing/organizations-and-enterprises","https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/","https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q4","https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q2","https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3","https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/","https://github.blog/news-insights/product-news/github-copilot-is-generally-available-to-all-developers/","https://github.blog/news-insights/product-news/github-copilot-is-generally-available-for-businesses/","https://github.blog/news-insights/product-news/github-copilot-enterprise-is-now-generally-available/","https://arxiv.org/abs/2302.06590","https://doi.org/10.1287/mnsc.2025.00535","https://blog.jetbrains.com/research/2026/04/which-ai-coding-tools-do-developers-actually-use-at-work/"],"tags":["#产品","#开发者工具","#商业实体"],"created":"2026-08-11","updated":"2026-08-11"}}
---

# GitHub Copilot

GitHub Copilot 是 [[GitHub\|GitHub]] 面向个人开发者、组织与企业销售的 AI 开发者产品；GitHub 由 [[微软\|微软]] 控股。它不是独立公司，也不能与 Microsoft 365 Copilot、Security Copilot 等其他“Copilot”产品混为同一 SKU。

## 产品身份与商业演化

| 时点 | 商业事件 | 边界 |
|---|---|---|
| 2021-06-29 | GitHub 与 OpenAI 合作推出技术预览 | 当时的产品和模型关系是历史起点，不能代替现行能力或供应商关系。 |
| 2022-06-21 | 面向个人开发者正式发布，定价 10 美元/月或 100 美元/年 | 这是个人订阅的商业化起点。 |
| 2022-12-07 | Copilot for Business 正式发布，19 美元/用户/月 | 增加组织级席位与管理，形成企业销售入口。 |
| 2024-02-27 | Copilot Enterprise 正式发布，39 美元/用户/月 | 需要 GitHub Enterprise Cloud；它是 Copilot 的企业方案，不是独立公司。 |
| 2026-06-01 | AI Credits 用量计费对全部计划生效，个人 Max 同期上线 | 月付订阅迁移到新制；既有年度 Pro／Pro+ 订阅在合同到期前仍沿用 premium requests，之后才迁移。基础订阅价保留，但收入结构从固定席位扩展为“席位＋消费”。 |

产品已经从编辑器中的建议工具扩展为覆盖 GitHub 网站、IDE、命令行、移动端和独立应用入口的产品组合。这里保留的是商业覆盖面；具体模型、接口和部署实现不属于本页范围。

## 现行计划与客户分层

截至 2026-08-11，GitHub 官方文档列出 Free、Student、Pro、Pro+、Max、Business 和 Enterprise 七类计划：

| 客户 | 计划与基础价格 | 商业含义 |
|---|---|---|
| 个人 | Pro 10 美元/月；Pro+ 39 美元/月；Max 100 美元/月；另有 Free 与验证学生 Student | 从获客入口到高用量个人订阅形成阶梯；个人计划的额外 flex credits 可变，不能写成永久固定权益。 |
| 组织 | Business 19 美元/授权席位/月 | 面向 GitHub Free／Team 组织或 GitHub Enterprise Cloud 企业，提供集中管理和组织级额度池。 |
| 企业 | Enterprise 39 美元/授权席位/月 | 仅面向 GitHub Enterprise Cloud，包含 Business 权益、更大的额度池和企业附加能力。 |

Copilot 当前不面向 GitHub Enterprise Server。官方计划页在访问日仍提示：自 2026-04-22 起，GitHub Free／Team 组织的新 Business 自助注册暂时暂停；这不等于 Business 产品停止销售或现有客户停用，企业采购仍可联系 GitHub Sales。

## 从席位订阅到“席位＋消费”

2026 年 6 月的计费迁移把 premium request 单位换成 GitHub AI Credits。Business 与 Enterprise 的标准月度额度分别为每席位 1,900 和 3,900 credits，并在组织或企业层面汇集；超出额度且预算允许时，每 credit 收费 0.01 美元。付费计划的代码补全和 next edit suggestions 不消耗 credits。

现有 Business／Enterprise 客户在 2026 年 6—8 月获得更高的临时促销额度，因此 2026 年夏季账单不能直接当作标准长期单位经济。GitHub 对迁移的公开解释是：长时、复杂使用提高了推理成本，旧计费方式不可持续；新模式把价格更直接地与实际使用挂钩。这个解释来自卖方，不能单独证明客户价值或涨价后的净留存。

Copilot 可以通过 GitHub Sales、Azure subscription 和 Microsoft Enterprise Agreement 等渠道采购或结算，也分布在 GitHub、Visual Studio／VS Code 等入口。入口共存和账单渠道本身不能证明交叉销售或使用黏性；目前可核验的具体扩展案例仍是微软披露的 Siemens 从 Copilot 部署转向采用完整 GitHub 平台。

## 采用、客户与财务披露

微软在 FY2026 不同季度使用了不同统计口径：

| 披露时点 | 披露数字 | 可以与不能如何解释 |
|---|---|---|
| FY2026 Q2（2026-01） | 超过 470 万付费订阅者，同比增长 75% | 是付费口径；不等于月活用户或企业席位。 |
| FY2026 Q3（2026-04） | 近 14 万个组织使用 Copilot；enterprise subscribers 同比接近三倍 | “组织使用”和“enterprise subscribers”没有公开统一分母，不能据此计算部署深度或留存。 |
| FY2026 Q4（2026-07） | 5,000 万 users；Business／Enterprise 席位继续增长；Copilot revenue 环比加速超过 60% | 5,000 万未被定义为付费、月活或累计用户；收入增速没有美元基数，也不是 ARR。 |

FY2026 Q2 还把 [[Siemens\|Siemens]] 向 30,000 名开发者部署 Copilot、随后采用完整 GitHub 平台作为客户扩展案例。这能支持“大型客户从单一产品扩展到平台”的关系，但只有微软一侧的业绩会口径，不能推出独立审计过的生产率、节省金额或合同总额。

微软 FY2026 10-K 把 GitHub cloud services 并入 Intelligent Cloud 下的 “Azure and other cloud services”，没有单列 GitHub Copilot 的收入、ARR、营业利润或毛利率。Q4 管理层称 Copilot 用量增长仍影响 Intelligent Cloud 分部毛利，同时用量计费上线后该影响在季度内改善；这不是 Copilot 单品已经盈利或具有某个毛利率的证据。

## 客户价值证据及其边界

- 2022 年一项包含 GitHub／Microsoft 关联研究者的随机实验招募 95 名 Upwork 专业开发者，在单一 JavaScript HTTP server 任务中，获得 Copilot 的实验组完成时间低 55.8%（95% 置信区间为 21%—89%）。它支持窄任务上的因果效果，不支持复杂代码库、长期团队协作、代码质量或企业财务 ROI。
- 2026 年《Management Science》发表的三项企业现场随机实验覆盖 Microsoft、Accenture 与一家匿名 Fortune 100 企业，共 4,867 名开发者。由于被分配访问后并非人人采用、对照组也存在交叉采用，研究以随机分配作为实际采用的工具变量；合并得到的完成任务量增加 26.08%（标准误 10.3%）是针对服从该分配而改变采用状态者的 IV／LATE 型估计，不是简单的授权 ITT 效应。单项实验噪声较大、效果异质；公开摘要没有把产品名作为识别对象，因此只能作为同类产品的组织采用证据，不能单独归因给现行 Copilot SKU。
- Siemens 等客户案例以及 GitHub 自行发布的调查仍属于卖方或共同发布证据。席位、建议接受率、满意度和自报节时不等于审计后的生产率、代码价值或财务回报。

## 竞争位置

JetBrains 2026 年 1 月 AI Pulse 调查覆盖超过 10,000 名专业开发者。其报告称，GitHub Copilot 的工作采用率为 29%，在 5,000 人以上企业中为 40%；[[Cursor\|Cursor]] 与 [[Claude Code\|Claude Code]] 均为 18%。这支持 Copilot 仍处在领先采用组，同时也显示 Cursor、Claude Code 等独立产品形成实质竞争。

该调查由同时销售开发工具和 AI 产品的 [[JetBrains\|JetBrains]] 发布，且是自报采用而非审计席位；29%、18% 不能写成互斥市场份额。报告还称 Copilot 的认知和采用增长停滞、Claude Code 增长较快，因此“用户总量领先”也不等于竞争优势稳定。

## 证据等级与待核验

- **A 级**：GitHub 现行计划、计费文档、公告；Microsoft SEC 文件与业绩会。
- **B 级**：同行评审随机现场实验；方法公开的 JetBrains 开发者调查，但发布者存在竞争者立场。
- **C 级**：GitHub／Microsoft 客户案例和联合研究中的自报效果。
- **待核验**：5,000 万 users 的活跃／累计／免费付费拆分；企业席位、流失率和净收入留存；Copilot 独立收入与利润；Siemens 客户侧对 30,000 人部署及结果的独立披露。

## 相关页面

- [[GitHub\|GitHub]]
- [[微软\|微软]]
- [[GitHub Enterprise\|GitHub Enterprise]]
- [[Siemens\|Siemens]]
- [[Cursor\|Cursor]]
- [[Anysphere\|Anysphere]]
- [[Claude Code\|Claude Code]]
- [[Anthropic\|Anthropic]]
- [[JetBrains\|JetBrains]]

## 证据

- 原始资料快照（本地归档）
- [GitHub Copilot 现行计划](https://docs.github.com/en/copilot/get-started/plans)
- [组织与企业计费](https://docs.github.com/en/copilot/concepts/billing/organizations-and-enterprises)
- [迁移到用量计费的公告](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/)
- [Microsoft FY2026 Q4 业绩会](https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q4)
- [Microsoft FY2026 Q2 业绩会](https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q2)
- [Microsoft FY2026 Q3 业绩会](https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3)
- [Copilot 技术预览公告](https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/)
- [个人版正式发布](https://github.blog/news-insights/product-news/github-copilot-is-generally-available-to-all-developers/)
- [Business 正式发布](https://github.blog/news-insights/product-news/github-copilot-is-generally-available-for-businesses/)
- [Enterprise 正式发布](https://github.blog/news-insights/product-news/github-copilot-enterprise-is-now-generally-available/)
- [Peng 等的 Copilot 随机实验](https://arxiv.org/abs/2302.06590)
- [三项企业现场随机实验](https://doi.org/10.1287/mnsc.2025.00535)
- [JetBrains AI Pulse 2026](https://blog.jetbrains.com/research/2026/04/which-ai-coding-tools-do-developers-actually-use-at-work/)
