---
{"dg-publish":true,"permalink":"/Claude Platform/","title":"Claude Platform","tags":["Anthropic","企业软件","开发者平台","计费","云渠道"],"created":"2026-08-11","updated":"2026-08-11","dg-note-properties":{"status":"processed","title":"Claude Platform","aliases":[],"source_count":16,"sources":["raw/2026-08-11-Claude-Platform商业产品计费合同与云渠道核验.md","raw/2026-08-11-Anthropic公司产品融资治理与合作关系核验.md","https://claude.com/platform/api","https://support.claude.com/en/articles/9876003-i-have-a-paid-claude-subscription-pro-max-team-or-enterprise-plans-why-do-i-have-to-pay-separately-to-use-the-claude-api-and-console","https://support.claude.com/en/articles/8977456-how-do-i-pay-for-my-claude-api-usage","https://support.claude.com/en/articles/8114526-how-will-i-be-billed-for-claude-api-use","https://www.anthropic.com/legal/commercial-terms","https://www.anthropic.com/legal/credit-terms","https://www.anthropic.com/news/expanded-legal-protections-api-improvements","https://claude.com/pricing","https://aws.amazon.com/about-aws/whats-new/2026/05/claude-platform-aws/","https://aws.amazon.com/blogs/machine-learning/introducing-claude-platform-on-aws-anthropics-native-platform-through-your-aws-account/","https://apnews.com/article/amazon-anthropic-ai-artificial-intelligence-aws-claude-cffa2cc19f9928d9ac44e44f2d967d36","https://claude.com/customers/gitlab","https://about.gitlab.com/press/releases/2026-04-28-gitlab-deepens-integration-with-anthropic-claude-models/","https://www.snowflake.com/en/news/press-releases/snowflake-and-anthropic-announce-200-million-partnership-to-bring-agentic-ai-to-global-enterprises/"],"tags":["Anthropic","企业软件","开发者平台","计费","云渠道"],"created":"2026-08-11","updated":"2026-08-11"}}
---

<!-- issue: luwiki-n7ow -->
# Claude Platform

Claude Platform 是 [[Anthropic\|Anthropic]] 运营、归入 [[Claude\|Claude]] 产品体系的开发者商业平台。它把 Claude API、Claude Console 和用量管理组织为同一商业入口；这里的技术识别只用于说明产品边界。Claude Platform 不是独立法律主体，也不是 Claude 网页、桌面或移动聊天应用的别名。

官方帮助中心明确把 Claude Pro、Max、Team、[[Claude Enterprise\|Claude Enterprise]] 等 app 订阅与 Claude Platform／Console 分开：购买 app 计划不会自动取得平台用量，企业同时使用两者时也需要分别开通和结算。Enterprise 的 app 使用量即使参照平台费率计价，也不等于该席位包含 API 或 Console 权限。

## 商业产品与账单

Claude Platform 同时存在自助和销售协助两条直接采购路径。

| 路径 | 公开计费与采购结构 | 不能推出 |
|---|---|---|
| 自助 Console／平台账户 | 先购买 usage credits，再按实际使用扣减；可设置自动充值；credits 一年到期、不可退款、无现金价值且不能转让 | 不代表客户签有年度企业合同，也不能把充值额当作 Anthropic 已确认收入 |
| 付费平台合同 | 官方支持页说明可汇总月度使用并开具月度账单；销售路径还可约定自定义额度、支持和条款 | 不代表所有账户都后付费，公开说明也未披露折扣、最低承诺或毛利 |
| 公开价目 | 模型和部分可选功能按用量定价；价格页会更新 | 公开标价不能反推单个客户账单、成交价或 Claude Platform 单独收入 |
| app 企业订阅 | 企业可另行购买 Claude Enterprise 席位并支付相应 app 用量 | 席位与平台账本不能合并，Enterprise 也不是 Claude Platform 的别名 |

Anthropic 没有公开 Claude Platform 的独立审计收入、利润、客户数或渠道收入分成。公司发布的 run-rate revenue 是把某一时点的公司整体收入速度年化，不是 GAAP／IFRS 全年收入，也没有把 Platform 与 app、Claude Code 或云渠道拆开。

## 合同主体与内容权利

2025-06-17 生效的 Commercial Terms 对签约主体采用地区口径：EEA、瑞士和英国客户的合同方是 [[Anthropic Ireland, Limited\|Anthropic Ireland, Limited]]，其他地区通常是 Anthropic, PBC。该条款足以确认两个法律主体承担不同地区的商业合同角色，但不能仅据此证明二者的直接持股层级、全资关系或全球统一签约权。

在这些商业条款下，客户保留输入内容的权利，Anthropic 将其可能拥有的输出权利转让给客户，并承诺不以 Commercial Services 的 Customer Content 训练模型。它仍不是对每个输出在所有法域都可获版权、唯一或不侵权的保证；消费者服务另受 Consumer Terms，不能把商业条款的内容处理承诺无条件外推到个人 app。

## 云采购与分销

直接 Claude Platform 与第三方云渠道共享 Claude 品牌，但运营、签约、账单和数据处理责任并不相同。

- [[Claude Platform on AWS\|Claude Platform on AWS]] 于 2026-05-11 正式可用。客户通过既有 AWS 账户、身份与 Marketplace 账单取得 Anthropic 的原生平台体验；服务由 Anthropic 运营，数据在 AWS 安全边界之外处理。它是本平台的 AWS 采购形态。
- [[Amazon Bedrock\|Amazon Bedrock]] 是 AWS 运营的另一条 Claude 分销路径。它与 Claude Platform on AWS 平行存在，二者不应互作 alias，也不能只凭同一张 AWS 发票合并产品或责任边界。
- [[Google Vertex AI\|Google Vertex AI]] 和 [[Microsoft Foundry\|Microsoft Foundry]] 也提供 Claude 的云采购入口。它们属于 Anthropic 商业分销网络，但具体托管方式、合同方、价格、SLA 和数据处理安排必须分别核验；“三家云均可用”不代表产品条件相同。
- [[Claude Marketplace\|Claude Marketplace]] 是 Anthropic 让企业使用既有承诺额度采购合作伙伴产品的渠道，不是 Claude Platform 本身，也不等同于 AWS、Azure 或 Google Cloud 的 Marketplace。
- [[Claude Partner Network\|Claude Partner Network]] 承接咨询、实施、培训与联合市场进入，不能与产品购买渠道合并。

云合作、账单代收和承诺额度抵扣都不证明云平台拥有 Claude 的知识产权、控制 Anthropic、取得独家经销权或分享某一固定比例收入。

## 客户与市场进入证据

[[GitLab\|GitLab]] 是可由双方材料交叉核验的采用与产品合作案例。Anthropic 将其列为 Claude Platform 客户案例；GitLab 又公告把 Claude 纳入自身产品、加入 Claude Marketplace，并通过多条云路径提供相关能力。这支持“客户、集成伙伴和 Marketplace 供应商可以是同一公司承担的不同关系”，但不支持排他采购、未公开合同金额或厂商案例中的生产率数字可外推到全部客户。

[[Snowflake\|Snowflake]] 与 Anthropic 2025 年公告的多年期 2 亿美元协议，则支持 Claude 经第三方数据平台分销和双方联合市场进入。协议标称金额不等于 Anthropic 已确认收入、Snowflake 已付款或 Claude Platform 直销收入；客户数量和使用量也来自交易双方的公开口径。

美联社对 2026 年 Amazon—Anthropic 扩展合作的报道独立确认了 AWS 客户将获得 Anthropic 原生 Claude 平台入口，但后续 2026-05-11 的正式可用状态仍以 AWS 产品公告为准。

## 时间线

- 2023-03：Claude 首次公开发布时已同时提供聊天产品和 API 商业入口。
- 2023-12：Anthropic 宣布扩展面向付费商业客户的版权保护；这属于合同风险分配，不是对所有输出不侵权的事实认证。
- 2024-03-04：Supplemental Credit Terms 生效，明确 credits 的期限、不可退款、不可转让和非现金属性。
- 2025-06-17：现行 Commercial Terms 生效，明确地区签约主体与商业内容权利边界。
- 2025-09：开发者产品统一到 Claude 品牌；Console 名称保留，域名迁往 platform.claude.com。品牌整合不是公司合并或产品收购。
- 2026-05-11：Claude Platform on AWS 正式可用。

## 证据边界

- Claude Platform、Claude app、Enterprise 席位、Claude Marketplace 和各云渠道是相邻但不同的商业产品或采购入口。
- 自助预付 credits 与合同月结并存；不能把其中一种计费方式写成所有客户的统一制度。
- 地区合同主体、产品运营方、云账单方和数据处理者可能不同，具体客户关系仍以订单、地区与适用条款为准。
- 公开价格、客户案例、合作协议总额和公司 run-rate revenue 均不足以计算 Platform 单独收入、市场份额、续约率或盈利能力。
- 本页只保留识别商业产品、合同与渠道所需的一句话技术背景，不记录 API 实现、部署步骤或 cybersecurity。

## 证据

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [Claude Platform 产品页](https://claude.com/platform/api)
- [Claude app 订阅与 Platform／Console 分开计费](https://support.claude.com/en/articles/9876003-i-have-a-paid-claude-subscription-pro-max-team-or-enterprise-plans-why-do-i-have-to-pay-separately-to-use-the-claude-api-and-console)
- [Claude Platform 自助 credits 计费](https://support.claude.com/en/articles/8977456-how-do-i-pay-for-my-claude-api-usage)
- [付费平台合同的月度账单](https://support.claude.com/en/articles/8114526-how-will-i-be-billed-for-claude-api-use)
- [Anthropic Commercial Terms](https://www.anthropic.com/legal/commercial-terms)
- [Anthropic Credit Terms](https://www.anthropic.com/legal/credit-terms)
- [Anthropic：面向商业客户扩展版权保护](https://www.anthropic.com/news/expanded-legal-protections-api-improvements)
- [Claude Pricing](https://claude.com/pricing)
- [AWS：Claude Platform on AWS 正式可用](https://aws.amazon.com/about-aws/whats-new/2026/05/claude-platform-aws/)
- [AWS：运营、账单与 Bedrock 边界](https://aws.amazon.com/blogs/machine-learning/introducing-claude-platform-on-aws-anthropics-native-platform-through-your-aws-account/)
- [美联社：Amazon—Anthropic 扩展合作](https://apnews.com/article/amazon-anthropic-ai-artificial-intelligence-aws-claude-cffa2cc19f9928d9ac44e44f2d967d36)
- [Anthropic：GitLab Claude Platform 客户案例](https://claude.com/customers/gitlab)
- [GitLab：与 Anthropic 的产品及 Marketplace 合作](https://about.gitlab.com/press/releases/2026-04-28-gitlab-deepens-integration-with-anthropic-claude-models/)
- [Snowflake：与 Anthropic 的 2 亿美元多年期协议](https://www.snowflake.com/en/news/press-releases/snowflake-and-anthropic-announce-200-million-partnership-to-bring-agentic-ai-to-global-enterprises/)
