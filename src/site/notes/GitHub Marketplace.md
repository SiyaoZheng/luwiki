---
{"dg-publish":true,"permalink":"/GitHub Marketplace/","title":"GitHub Marketplace","tags":["商业平台","应用市场","开发者生态","交易中介","渠道"],"created":"2026-08-12","updated":"2026-08-12","dg-note-properties":{"status":"processed","title":"GitHub Marketplace","aliases":[],"source_count":13,"sources":["raw/2026-08-12-GitHub-Marketplace商业主体交易分发与责任核验.md","https://docs.github.com/en/site-policy/github-terms/github-marketplace-terms-of-service","https://docs.github.com/en/site-policy/github-terms/github-marketplace-developer-agreement","https://docs.github.com/en/billing/concepts/third-party-payments/github-marketplace-apps","https://docs.github.com/en/billing/concepts/azure-subscriptions","https://docs.github.com/en/apps/github-marketplace/github-marketplace-overview/about-github-marketplace-for-apps","https://docs.github.com/en/apps/github-marketplace/creating-apps-for-github-marketplace/requirements-for-listing-an-app","https://docs.github.com/en/apps/github-marketplace/github-marketplace-overview/about-marketplace-badges","https://docs.github.com/en/apps/github-marketplace/creating-apps-for-github-marketplace/viewing-metrics-for-your-listing","https://github.blog/news-insights/product-news/introducing-github-marketplace-and-more-tools-to-customize-your-workflow/","https://github.blog/news-insights/company-news/github-reduces-marketplace-transaction-fees-revamps-technology-partner-program/","https://github.blog/news-insights/marketplace-anniversary/","https://doi.org/10.1016/j.infsof.2024.107522"],"tags":["商业平台","应用市场","开发者生态","交易中介","渠道"],"created":"2026-08-12","updated":"2026-08-12"}}
---

# GitHub Marketplace

**GitHub Marketplace** 是由 [[GitHub\|GitHub]] 运营的开发者产品发现、分发与交易平台。现行官方材料把平台上的产品分为 [[GitHub Actions\|GitHub Actions]] 与 [[GitHub Apps\|GitHub Apps]]；产品可以免费提供，也可在符合条件时收费。Marketplace 不是独立法律主体，也不是所有上架产品的所有者或开发商。

Marketplace 同时承担目录、准入、账单与交易入口：对经平台购买的付费产品，GitHub, Inc. 作为 merchant of record（交易记名商户）收款并出具收据；但第三方 Product Provider 仍提供产品使用权、最终用户许可、支持与维护，并承担主要产品责任。客户、GitHub 与提供者之间不是一条可以压成“GitHub 销售自有软件”的单一合同链。

## 商业主体与合同角色

| 角色 | 可确认的关系 | 不能顺带推出 |
| --- | --- | --- |
| GitHub, Inc. | 运营 Marketplace；处理经平台发生的付款与收据；对付费产品充当 merchant of record；制定准入、展示、重分类和下架规则 | GitHub 拥有每个第三方产品，或为每个产品的开发、支持和结果担保 |
| Product Provider | 提供第三方产品及使用权，设置最终用户许可与支持条款，负责产品维护、隐私、内容和知识产权 | “Product Provider” 是合同角色，不是一家统一公司，也不表示发布者与 GitHub 构成合伙、合资或代理 |
| 个人或组织客户 | 通过 GitHub 账户选择、安装或购买产品；付费交易向 GitHub 付款，同时接受提供者的产品条款 | 付款给 GitHub 不等于只与 GitHub 建立关系，也不等于客户取得转售权 |
| GitHub 自有产品提供方 | GitHub 也可在 Marketplace 提供自有 Developer Product | 第三方产品的责任分配不能机械套用于 GitHub 自有产品 |

2026-04-27 生效的客户侧 Marketplace Terms 写明：客户购买时向 GitHub 付款，但第三方产品的访问权和使用权来自 Product Provider；每次购买同时构成客户与 GitHub、客户与提供者之间的电子合同。GitHub 不是提供者—客户产品协议的当事方，却被约定为第三方受益人并可执行相关权利。合同层级还会叠加客户适用的 GitHub ToS、GitHub Customer Agreement、Corporate Terms、旧版合同或 Microsoft 批量许可协议，因此不能假设所有客户使用同一份基础合同。

## 产品类型与上架门槛

现行目录把工具分成两条不同的分发路径：

- **GitHub Actions**：满足公开仓库、单一根目录元数据文件、唯一名称等现行条件后可即时发布，不经过 GitHub 事前审核；部分合作组织会显示 verified creator 标记。该标记不能替代对具体产品的质量、维护能力或适用性的判断。
- **GitHub Apps**：免费 app 可由个人或组织分享；付费 app 必须归属于通过验证的组织发布者，并完成财务 onboarding。官方当前门槛还包括 GitHub App 至少 100 次安装或 OAuth app 至少 200 名用户，以及能处理购买、试用、升级、降级与取消等计费状态。
- **展示与验证标记**：发布者验证主要确认组织域名、联系邮箱与双因素认证状态。GitHub 明确说不会分析或检查第三方代码；badge 证明的是列示条件或发布者身份条件，不是产品认证、审计或安全保证。

所有 app listing 还要提供有效联系信息、隐私政策、支持方式、定价计划和可用的条款链接，并须公开可用而非仅限邀请。GitHub 对 Marketplace 收录保留最终裁量权；它可以因条款、法律、数据风险或用户体验问题暂停数据传输、移除或重分类 listing。提供者也可提前 30 日通知停止未来分发，但既有客户的许可、交付与支持义务不会仅因下架自动消失。

## 付费、结算与取消

| 环节 | 当前规则 | 证据边界 |
| --- | --- | --- |
| 定价 | 提供者以美元设置 listing 价格 | 公开价格不等于实际收入、续费率、折扣或客户终身价值 |
| 平台分配 | 开发者协议规定 GitHub 向提供者汇出售价的 95%，保留 5% | 该比例只适用于经 Marketplace 购买的相关付费产品，不能乘以未知 GMV 推算 GitHub 收入 |
| 客户账单 | 付费 app 与账户或组织已有付款方式、月度／年度账单日和汇总收据对齐；已有账单周期时首次购买可按剩余期间比例计费 | 汇总收据不表示第三方产品并入 GitHub 自有产品，亦不证明所有 Marketplace 费用都可经 Azure 订阅支付 |
| 试用与变更 | 付费 app 可提供 14 日免费试用；升级或加量通常即时生效并可能按比例计费；付费降级／取消在本计费周期结束时生效 | 免费计划或免费试用的取消可即时停止访问；各账户的账单仍要分别管理 |
| 退款 | 客户侧条款把月度／年度预付订阅列为通常不退款，且不补偿未使用月份或降级差额；开发者协议同时要求提供者说明其退款条件并承担退款责任 | 这是默认合同分配，不应写成任何法域、任何事实下绝对没有法定退款或救济 |

GitHub 处理付款和收据，发布者只获得开通服务所需的购买方、计划、日期、席位或单位等信息，不会看到完整付款详情、其他产品发票或无关账户数据。支付集中降低了客户重复设置付款方式的摩擦，但不把第三方产品的收入、知识产权或支持团队并入 GitHub。

## 知识产权、数据与责任

开发者协议让提供者保留产品与品牌权利，只向 GitHub 授予展示、处理 listing 和 Marketplace 营销所需的非独占许可。第三方 EULA 由提供者与最终用户订立；提供者负责支持、维护、隐私告知、数据处理和知识产权保证。GitHub 与提供者被定义为独立合同方，而非合伙、特许经营、合资、代理、信义或雇佣关系。

客户授权产品时，GitHub 会显示所请求的权限；依产品需求，提供者可能只接收账户识别信息，也可能获得仓库内容访问权。客户撤销 GitHub 侧授权后，提供者不再通过该授权访问账户，但提供者系统中的既有个人信息仍须按其规则删除。由此不能把“通过 GitHub 安装”理解为数据始终只由 GitHub 保管。

责任限制条款把第三方产品的功能、内容、支持、隐私和争议主要留在提供者—客户关系中，同时保留 GitHub 对市场入口、账单和政策执行的控制。合同中的免责声明、赔偿和责任上限也不等于在所有司法辖区和事实下绝对免责。

## 采用与规模证据

| 时间 | 可确认的里程碑 | 证据边界 |
| --- | --- | --- |
| 2017-05-22 | GitHub 发布 Marketplace，首批有 14 家集成商，主打在同一入口发现和购买开发者工具 | 发布公告是公司口径，不是独立市场份额 |
| 2018-05 | GitHub 一周年回顾称平台服务超过 10 万用户、约 50 个工具；支持试用的 listing 占当时 Marketplace 收入 60% 以上 | 是 2018 年历史自报，不能当作 2026 当前规模、收入结构或因果证明 |
| 2021-02 | GitHub 把开发者到手比例从 75% 提高到 95%，平台保留比例降至 5%，并简化发布者验证 | 费率变更不能证明交易量、发布者盈利或产品质量同步提高 |
| 2024 | Information and Software Technology 的同行评审研究以较早快照分析 440 个 Apps 与 7,878 个 Actions、共 32 类工具 | 样本说明 Marketplace 是可观测的自动化工具生态；不能把 8,318 当作当前 listing 数，也不提供平台 GMV、收入或全部客户采用 |

GitHub 给单个发布者提供 listing 访问、转化、订阅与交易指标。官方特别说明 “subscription value” 是在试用不取消、付款成功等假设下的潜在值，可能远高于同期实际交易。发布者能看到自己的指标，不等于公众可以获得 Marketplace 总 GMV、净收入、付费客户数、活跃安装量、卖家集中度或利润率。

## 商业意义与竞争边界

Marketplace 把 GitHub 账户、产品发现、权限授权和付款整合为一个渠道，使第三方厂商能触达 GitHub 用户，也让 GitHub 控制目录入口、交易费率和政策执行。开发者协议明确允许 GitHub 与提供者各自开发或发布相似、相互竞争的应用，因此“生态伙伴”不表示产品层面不存在竞争或利益冲突。

本轮所核公开材料没有披露 Marketplace 的当前总交易额、独立收入、利润、付费客户数或同口径市场份额。AWS Marketplace、Atlassian Marketplace、Google Cloud Marketplace 等相邻渠道面向不同采购对象和合同范围，不能用 listing 数、云采购额或母公司收入直接排名。GitHub 平台规模也不能自动证明 Marketplace 具有法定支配地位。

## 不能推出

- GitHub 是 merchant of record，不等于 GitHub 是第三方产品所有者、开发商、许可方或支持方。
- 发布者获得 verified badge，不等于 GitHub 已审查第三方代码、财务状况、持续经营或产品质量。
- 95%／5% 是售价分配规则，不等于已披露 GMV、平台净收入或发布者利润。
- 客户在 GitHub 付款，不等于第三方产品收入可全部归为 GitHub 自有产品收入，也不等于所有交易经 Microsoft 或 Azure 结算。
- listing 被移除，不等于既有客户许可和提供者支持义务自动终止；平台保留下架权也不等于承担全部第三方责任。
- 历史用户数、工具数、论文样本和潜在 subscription value 不能平移成 2026 当前采用或经审计财务。
- Marketplace 中的 Actions、Apps、第三方公司、产品 listing 与合同角色必须分层，不能互作法律主体 alias。

## 证据

- 原始资料快照（本地归档）
- [GitHub Marketplace Terms of Service](https://docs.github.com/en/site-policy/github-terms/github-marketplace-terms-of-service)（2026-04-27 生效）
- [GitHub Marketplace Developer Agreement](https://docs.github.com/en/site-policy/github-terms/github-marketplace-developer-agreement)（2025-05-27 生效）
- [GitHub Marketplace app subscriptions](https://docs.github.com/en/billing/concepts/third-party-payments/github-marketplace-apps)
- [Billing for GitHub usage through Azure](https://docs.github.com/en/billing/concepts/azure-subscriptions)（列示可由 Azure 订阅计费的 GitHub 自有用量与许可；未列第三方 Marketplace app subscriptions）
- [About GitHub Marketplace for apps](https://docs.github.com/en/apps/github-marketplace/github-marketplace-overview/about-github-marketplace-for-apps)
- [Requirements for listing an app](https://docs.github.com/en/apps/github-marketplace/creating-apps-for-github-marketplace/requirements-for-listing-an-app)
- [About marketplace badges](https://docs.github.com/en/apps/github-marketplace/github-marketplace-overview/about-marketplace-badges)
- [Viewing metrics for your listing](https://docs.github.com/en/apps/github-marketplace/creating-apps-for-github-marketplace/viewing-metrics-for-your-listing)
- [GitHub Marketplace launch](https://github.blog/news-insights/product-news/introducing-github-marketplace-and-more-tools-to-customize-your-workflow/)
- [GitHub Marketplace transaction fee change](https://github.blog/news-insights/company-news/github-reduces-marketplace-transaction-fees-revamps-technology-partner-program/)
- [GitHub Marketplace first anniversary](https://github.blog/news-insights/marketplace-anniversary/)
- [GitHub marketplace for automation and innovation in software production](https://doi.org/10.1016/j.infsof.2024.107522)
