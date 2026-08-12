---
{"dg-publish":true,"permalink":"/GitHub Enterprise/","title":"GitHub Enterprise","tags":["#产品","#企业软件","#订阅","#开发者平台","#Microsoft生态"],"created":"2026-08-12","updated":"2026-08-12","dg-note-properties":{"status":"processed","title":"GitHub Enterprise","aliases":["GHE","GHE Unified"],"source_count":24,"sources":["raw/2026-08-12-GitHub-Enterprise产品定价合同渠道与客户核验.md","https://github.com/pricing","https://docs.github.com/en/get-started/learning-about-github/githubs-plans","https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud","https://docs.github.com/en/billing/concepts/enterprise-billing/combined-enterprise-use","https://docs.github.com/en/billing/concepts/enterprise-billing/usage-based-licenses","https://docs.github.com/en/billing/reference/github-license-users","https://docs.github.com/en/enterprise-cloud@latest/billing/reference/product-usage-included","https://docs.github.com/en/enterprise-cloud@latest/billing/get-started/how-billing-works","https://docs.github.com/en/billing/concepts/azure-subscriptions","https://github.com/customer-terms","https://github.com/customer-terms/general-terms","https://github.com/customer-terms/github-enterprise-cloud-product-specific-terms","https://github.com/customer-terms/github-data-protection-agreement","https://github.com/customer-terms/github-online-services-sla","https://github.com/customer-terms/updates","https://www.microsoft.com/licensing/terms/en-US/productoffering/GitHubOfferings/MCA","https://learn.microsoft.com/en-us/visualstudio/subscriptions/access-github","https://www.contractsfinder.service.gov.uk/Notice/Attachment/4f5612c1-0e02-47b3-8b47-41dbcb55d74a","https://github.com/resources/insights/wayfair-enterprise-scale-migration","https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm","https://about.gitlab.com/pricing/","https://www.atlassian.com/software/bitbucket/pricing","https://github.com/customer-stories?type=enterprise"],"tags":["#产品","#企业软件","#订阅","#开发者平台","#Microsoft生态"],"created":"2026-08-12","updated":"2026-08-12"}}
---

<!-- issue: luwiki-lzdm -->

# GitHub Enterprise

GitHub Enterprise 是 [[GitHub\|GitHub, Inc.]] 面向组织销售的企业级订阅计划／产品族。它不是单一部署产品：客户可使用由 GitHub 托管的 [[GitHub Enterprise Cloud\|GitHub Enterprise Cloud]]（GHEC），也可使用由客户运营的 [[GitHub Enterprise Server\|GitHub Enterprise Server]]（GHES）；在符合许可与同步规则时，同一 Enterprise 许可还可组合覆盖两种部署。GitHub Free、Team 与 Enterprise 是计划梯度，Cloud 与 Server 则是 Enterprise 内的部署产品，不能放在同一层级比较。

## 产品与部署层级

| 层级 | 商业对象 | 运营与许可边界 |
|---|---|---|
| 企业计划 | GitHub Enterprise | 包含企业账户、集中治理与企业许可；当前资料也称组合许可为 GHE Unified |
| 托管产品 | [[GitHub Enterprise Cloud\|GitHub Enterprise Cloud]] | GitHub 托管的多租户 SaaS，公开定价页称运行于 [[Microsoft Azure\|Microsoft Azure]]；Azure 是承载基础设施，不等于每名客户都经 Microsoft 采购 |
| 自主管理产品 | [[GitHub Enterprise Server\|GitHub Enterprise Server]] | 客户运营的软件产品；同一 Enterprise 计划可赋予使用权，但客户仍承担自身基础设施与运营成本 |

usage-based 模式按云端实际消费许可证的唯一用户计费，并赋予相应用户 Server 使用权；传统 volume／subscription 的 GHE Unified 则把 Cloud 与 Server 组合为固定数量许可。跨部署去重依赖许可证同步及账户匹配，不能概括成“任意多个环境永远只计一个席位”。

## 公开价格与实际账单

截至 2026-08-12，GitHub 公共定价页把 Enterprise 标为“每用户每月 21 美元起”，并明确这是首 12 个月页面价，同时引导客户联系销售。该数字是动态公开起价，不是所有客户的成交价、续约价、全球统一价或 GHES 独立全包价。

企业账单通常由三部分组成：

- 计划许可证：usage-based 模式按月内实际消费许可的唯一用户计费；既有 volume／subscription 合同按预购数量收费，并可持续到合同到期。
- 用量：GHEC 当前公开 allowance 包括每月 50,000 分钟 [[GitHub Actions\|GitHub Actions]]、50GB Actions storage，以及 Packages、LFS 的相应额度；超额用量可能另计。
- 附加产品与服务：[[GitHub Copilot\|GitHub Copilot]]、Advanced Security、Codespaces、Premium Support 等不应自动算入 21 美元基础价。

当前计费文档使用 license 而非旧称 seat。组织成员、部分外部协作者和休眠用户等都可能计入，且规则随计费模型、产品与合同而变；用“公开单价 × 员工数”无法核验客户总合同价值。

## 四条采购与付款路径

| 路径 | 合同／付款结构 | 不能推出 |
|---|---|---|
| GitHub 直采 | 标准 [[GitHub Customer Agreement\|GitHub Customer Agreement]] 由 General Terms、产品专项条款与订单组成，标准文本中的供应方为 GitHub, Inc. | 实际订单一定没有折扣、地区主体或谈判条款 |
| Microsoft 量采 | 经 [[微软\|Microsoft]] agreement 采购时，适用 Microsoft agreement 与 GitHub Offerings Product Terms；GitHub 的 GCA General Terms 不适用 | 所有地区合同方都是 Microsoft Corporation，或 Microsoft 取代 GitHub 提供产品支持 |
| Azure 计费连接 | 企业账户可连接 [[Microsoft Azure\|Microsoft Azure]] subscription，使 metered usage 进入 Azure 账单；基础 plan charges 仍可能按 GitHub 原账期收费 | Azure 发票等于基础许可经 Marketplace 购买，或 GitHub, Inc. 不再是产品运营方 |
| 组合采购 | [[Visual Studio订阅与GitHub Enterprise组合\|Visual Studio订阅与GitHub Enterprise组合]] 是符合条件的 Microsoft Enterprise Agreement 客户可购买的特殊组合 | 每个 GitHub Enterprise 客户都拥有 Visual Studio 订阅 |

这四条路径可以在同一客户关系中组合，却不是同一个法律或结算事实。尤其应分别核对订单、地区、许可计划、账单账户与 Azure subscription，不能统称为“Azure Marketplace 采购”。

## DPA、SLA 与支持边界

直采渠道现行 GitHub Data Protection Agreement 把客户与 GitHub, Inc. 的数据处理安排纳入 GCA；一般场景下客户为 controller、GitHub 为 processor，但具体角色仍依处理目的而定。Microsoft 渠道需按实际 Microsoft agreement、DPA、Product Terms 与订单判断，不能把 GitHub 直采 DPA 原样套用。

June 2026 GitHub Online Services SLA 对 GHEC 等列明每个自然季度至少 99.9% uptime。低于门槛时，批准后的 service credit 分为适用费用的 5%、10% 或 25%；客户必须在期限内提出申请，且该 credit 是 SLA 下的唯一救济。直采客户经 GitHub Support 申领，Microsoft 渠道经 Microsoft support ticket 申领。

该 SLA 版本适用于 2026-06-01 起的新客户和续约，不能追溯覆盖所有存量合同；它也不覆盖客户自行运营的整个 GHES 环境。因而“所有 GitHub 功能、所有合同、每月统一保证 99.9%”不是现行条款的准确概括。

## 客户、渠道与采用证据

- 英国 UK Research and Innovation／Innovate UK 2024 年 call-off 文件显示，其通过 CDW Limited 采购包含 GitHub Enterprise、Okta 与 SonarCloud 的组合，初始期为 2024-12-10 至 2025-12-09，首年整包金额为 45,198.44 英镑（未含 VAT）。这证明特定时间的经销商采购关系；整包金额不能归为 GitHub 收入，也不能证明 2026 年已续约。
- GitHub 于 2025-02-28 发布的 Wayfair 案例称，其把约 15,000 个仓库从 GHES 迁往 Cloud，并估算每年节省 150,000 美元托管费用。该数字是交易方／服务案例口径，不是独立审计、因果估计或 2026 年实时状态。
- GitHub 客户故事中的企业标识、席位和效率指标，只能证明 GitHub 发布过相应案例；不能自动证明当前合同、当前席位、独家供应或整个组织均已迁移至 Cloud。

## 免费公共生态与竞争实体

GitHub Enterprise 共享 [[GitHub\|GitHub]] 的仓库协作与开发者网络，但企业付费客户获得额外的企业账户、身份与组织治理、支持和部署选择。GitHub 全平台的开发者数、组织数、公共仓库数或 Copilot 用户数均不能换算成 Enterprise 客户数、席位、收入或续约率。

[[GitLab\|GitLab]] 和 [[Bitbucket\|Bitbucket]] 均提供云端与自主管理的企业产品组合，是可核验的竞争实体。各家公开价格的计费单位、功能包、部署成本、折扣与访问日期不同，因此本页不据供应商比较页推导价格优胜、市场份额或产品质量排名。

## 财务披露边界

Microsoft FY2026 Form 10-K 把 GitHub cloud services 纳入 “Azure and other cloud services”，并把 GitHub 的 cloud 与 on-premises offerings 纳入聚合业务说明；Microsoft 没有单独披露 GitHub Enterprise、GHEC 或 GHES 收入、客户数或席位。微软“server products and cloud services”收入、Azure 增速与 GitHub 平台采用数据都不是 GitHub Enterprise 独立财务指标。

## 证据边界

- 价格、allowance、计费术语、Product Terms 与 SLA 都是动态页面；续约或采购判断应保存当时版本并读取实际订单。
- GitHub 与 Microsoft 的标准条款不能替代客户 MSA、order form、地区主体、折扣和采购计划。
- “Server 无额外许可费”只描述同一 Enterprise 许可下的产品权利，不等于自托管基础设施、迁移、支持与运营成本为零。
- GitHub 客户案例和营销采用数字保留发布方归属；未获得客户、采购或监管侧证据时不升格为独立核验事实。

## 相关页面

- [[GitHub\|GitHub]]
- [[GitHub Enterprise Cloud\|GitHub Enterprise Cloud]]
- [[GitHub Enterprise Server\|GitHub Enterprise Server]]
- [[GitHub Customer Agreement\|GitHub Customer Agreement]]
- [[Microsoft Azure\|Microsoft Azure]]
- [[Visual Studio订阅与GitHub Enterprise组合\|Visual Studio订阅与GitHub Enterprise组合]]
- [[GitHub Pre-Purchase Plan\|GitHub Pre-Purchase Plan]]
- [[GitHub Copilot\|GitHub Copilot]]
- [[GitHub Actions\|GitHub Actions]]
- [[GitLab\|GitLab]]
- [[Bitbucket\|Bitbucket]]
- 原始资料快照（本地归档）
