---
{"dg-publish":true,"permalink":"/GitLab Duo Agent Platform/","title":"GitLab Duo Agent Platform","tags":["#产品","#AI平台","#企业软件","#用量计费","#GitLab"],"created":"2026-08-12","updated":"2026-08-12","dg-note-properties":{"status":"processed","title":"GitLab Duo Agent Platform","aliases":["Duo Agent Platform","DAP"],"source_count":30,"sources":["raw/2026-08-12-GitLab-Duo-Agent-Platform产品计费客户与渠道核验.md","https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm","https://docs.gitlab.com/user/duo_agent_platform/","https://docs.gitlab.com/user/duo_agent_platform/flows/foundational_flows/software_development/","https://docs.gitlab.com/subscriptions/gitlab_credits/","https://docs.gitlab.com/subscriptions/gitlab_flex/","https://about.gitlab.com/blog/meet-gitlab-duo-workflow-the-future-of-ai-driven-development/","https://about.gitlab.com/blog/gitlab-duo-agent-platform-what-is-next-for-intelligent-devsecops/","https://about.gitlab.com/press/releases/2025-07-17-gitlab-announces-the-public-beta-of-gitlab-duo-agent-platform/","https://about.gitlab.com/press/releases/2026-01-15-gitlab-announces-duo-agent-platform-general-availability/","https://about.gitlab.com/blog/gitlab-duo-agent-platform-is-generally-available/","https://about.gitlab.com/blog/gitlab-18-10-agentic-ai-now-open-to-even-more-teams-on-gitlab/","https://about.gitlab.com/pricing/","https://about.gitlab.com/blog/introducing-gitlab-credits/","https://about.gitlab.com/blog/introducing-gitlab-flex/","https://www.sec.gov/Archives/edgar/data/1653482/000165348226000145/gtlb-20260708.htm","https://www.sec.gov/Archives/edgar/data/1653482/000165348226000145/exhibit991-businessupdat.htm","https://s204.q4cdn.com/984476563/files/doc_financials/2027/q1/GitLab-Q1FY2027-Earnings-Transcript.pdf","https://about.gitlab.com/press/releases/2026-04-21-gitlab-collaborates-with-aws-to-bring-agentic-devsecops/","https://about.gitlab.com/press/releases/2026-04-14-gitlab-google-collaborate-to-bring-agentic-devsecops-to-enterprise-teams-using-vertexai/","https://about.gitlab.com/press/releases/2026-06-10-gitlab-expands-collaboration-with-google-to-deliver-fully-managed-devsecops-platform/","https://about.gitlab.com/press/releases/2026-04-28-gitlab-deepens-integration-with-anthropic-claude-models/","https://about.gitlab.com/blog/gitlab-and-anthropic-governed-ai-for-enterprise-development/","https://about.gitlab.com/blog/more-ai-models-for-duo-agent-platform-self-hosted/","https://about.gitlab.com/customers/cube/","https://cube.nl/en/digital-transformation/data-ai/ai-powered-software-development","https://investors.natwestgroup.com/~/media/Files/R/RBS-IR-V2/results-center/13022026/nwg-annual-report-and-accounts-2025.pdf","https://tei.forrester.com/go/gitlab/duoagentplatform/?lang=en-us","https://about.gitlab.com/blog/gitlab-duo-cli-generally-available/","https://about.gitlab.com/blog/multi-step-software-delivery-with-agentic-flows/"],"tags":["#产品","#AI平台","#企业软件","#用量计费","#GitLab"],"created":"2026-08-12","updated":"2026-08-12"}}
---

<!-- issue: luwiki-mzmf -->
# GitLab Duo Agent Platform

GitLab Duo Agent Platform 是 [[GitLab\|GitLab]] 运营、纳入 [[GitLab Duo\|GitLab Duo]] 产品组合的用量型 AI 软件平台，官方也简称 Duo Agent Platform 或 DAP。GitLab Inc. 把它定位为在软件交付全流程中协调人员与多个 AI agents 的平台；本文仅记录识别产品、商业化、客户和供应渠道所需的高层事实，不展开代码、API、部署或 cybersecurity 操作。

它不是独立法律主体，也不是 GitLab 的第四个订阅 tier。GitLab Free、Premium、Ultimate 是主平台层级；Duo Pro 与 Duo Enterprise 是既有按席位 AI add-on；[[GitLab Credits\|GitLab Credits]] 是 DAP 的用量计费单位；[[GitLab Flex\|GitLab Flex]] 是覆盖席位与 credits 的年度采购模型。这些名称共享 GitLab Duo 品牌，但不能互作 alias。

## 产品演进与市场进入

| 时点 | 公开状态 | 可证边界 |
|---|---|---|
| 2024-06-27 | GitLab 宣布 Duo Workflow 愿景／产品方向 | 当日官方使用 announced；现行文档记录 GitLab 17.4 才进入 private beta，并把 Duo Workflow 归为 Software Development Flow 的旧称，故它不是整个平台别名 |
| 2025-06-24 | GitLab 将 DAP 称为 Duo Workflow 的“next evolution” | 公司称正与数十家客户测试；这是厂商自报的测试规模 |
| 2025-07-17 | GitLab 18.2 public beta | 面向 Premium、Ultimate，经 IDE 与 Web 使用；不能把当时路线图写成已交付功能 |
| 2026-01-15 | [[2026 GitLab Duo Agent Platform正式发布\|GitLab 18.8 正式发布]] | GitLab.com 与 Self-Managed 当日 GA，Dedicated 表述为 18.8 发布周期内提供，并非三种方式当天已完全同等 |
| 2026-03-19 | GitLab 18.10 扩大 Free 入口 | GitLab.com Free 顶层 group 可购买月度 credits，故现状不能简化为“仅 Premium／Ultimate 可用” |
| 2026-07-16 | Duo CLI 与 Custom Flows 分别 GA | 这是后续组件里程碑，不能倒写成它们在 1 月平台 GA 时已达到各自 GA |

当前文档把 DAP 描述为贯穿 GitLab 项目上下文的多 agent 产品，包含对话式协助、由 GitLab 提供或客户自定义的 agents、外部 agents，以及由多个步骤组成的 flows。这里的 agents、flows、chat、catalog 和 CLI 是平台能力或界面，不分别等同于运营主体或独立订阅层。功能列表和模型选择会随版本变化，页面只保留产品识别层，不把技术路线图写成稳定能力承诺。

## 交付方式与商业入口

截至 2026-08-12，官方文档列 GitLab.com、Self-Managed 与 Dedicated 三种 offering。Self-Managed 还可采用 GitLab 连接的模型或客户自托管模型；交付选择影响责任、采购和数据路径，但不改变运营产品仍为 GitLab Duo Agent Platform。

收费采用“席位层 + 用量层”并存：

- Premium 与 Ultimate 在限时促销期分别附带每用户每月 12 与 24 credits。现行 credits 文档把这些 included credits 记到个人、每月刷新且不结转，不能与另购的共享池混同。
- 另购 monthly commitment 形成 namespace／organization 可共享的 credits 池；年度承诺会按月分配，未用部分不自动结转。
- on-demand 公开标价为每 credit 1 美元，年度或多年承诺可有折扣。1 美元是标价，不是每个客户实际成交价、现金收入或 GAAP 收入。
- Free 不自动附带 included credits；GitLab.com 自 18.10 可购买共享承诺，Self-Managed 的 Free 入口在 19.0 后另有版本条件。
- GitLab Flex 允许一个年度美元承诺按规则在席位、credits 与合格能力间调配。它是销售辅助的购买方式，不是产品 tier，也不等于客户已消耗全部承诺。

不同功能或模型按不同倍率消耗 credits。2026-08-12 的公开文档例如列 Code Review Flow 每 credit 4 次、Code Suggestions 每 credit 50 次；这类费率是日期化产品价格，不应被固化成长期单位成本。

## 模型、云与采购渠道

DAP 可调用不同模型，模型提供者、推理云、采购市场与平台运营方必须分开：

- [[2026 GitLab Duo Agent Platform接入Amazon Bedrock\|Amazon Bedrock 接入事件]]承载经客户 AWS 环境路由模型推理及 AWS Marketplace 采购路径；这不表示 AWS 拥有或运营 DAP。
- [[2026 GitLab Duo Agent Platform接入Google Vertex AI\|Google Vertex AI 接入事件]]承载 DAP agents 调用 Vertex AI 模型、相关 GitLab 组件运行在 Google Cloud 及特定云承诺采购路径；它不等于 2026-06 由 GitLab 认证 MSP 提供的 managed GitLab offering on Google Cloud。
- [[2026 GitLab深化Anthropic Claude集成\|GitLab 深化 Claude 集成事件]]承载 Claude 模型来源、经 Vertex AI／Bedrock 调用及 Claude Marketplace 采购关系。符合条件的客户可把既有 Anthropic commitment 用于 GitLab，但不能外推为所有合同通用或 GitLab Credits 与 Anthropic 额度可普遍互换。
- GitLab 19.0 的官方材料还列出 Mistral Devstral 2 123B 等可供 DAP Self-Hosted 使用的模型；这只是日期化产品支持，不自动等于 Mistral AI 与 GitLab 存在战略投资、排他供应、已确认收入或所有客户生产采用。

这些关系属于产品供应和采购渠道，不是股权、所有权或控制关系。GitLab 仍是 DAP 的产品运营主体，具体客户的数据、推理与账单路径依部署和合同而变。

## 客户与采用

公开证据能确认采用路径，但效果多数来自厂商或客户自报：

- GitLab 的客户案例称 [[2026 Cube采用GitLab Duo Agent Platform\|Cube]] 于 2026 年在 DAP 上运行 custom agents。Cube 同时是 GitLab Channel Partner，故客户使用与渠道身份是两类关系；该案例自报项目启动快 50%、每日生产部署次数为原来的 5 倍，以及 GitLab Ultimate with Duo Agent Platform 组合 ROI 400%，不能拆成 DAP 单独因果效果或外推所有客户。
- GitLab public-beta 与 GA 新闻稿引用 NatWest 工程负责人对 DAP 的使用评价；NatWest 2025 年报只确认集团 rollout GitLab Duo。两份证据合起来支持较宽的 [[NatWest采用GitLab Duo\|NatWest采用GitLab Duo]] 关系，却不足以由客户侧独立确认 DAP 的精确部署范围或量化效果。
- GitLab 电话会称匿名美国 top-10 bank 的 rollout 当时已在数百名开发者中进行；客户计划在 2026 年稍后完全部署时使 active user base 接近原来的 20 倍。试点自报平均每名开发者每项任务节省 1.5 小时；节省值与扩展计划均未获客户侧公开文件独立确认，匿名对象也不能被猜成某家银行。
- Q1 FY2027 十笔最大交易中有四笔购买或包含 DAP。它只描述这个特定交易子集，不能写成 40% 的全部客户、全部交易或收入。
- GitLab 委托的 Forrester TEI 以四名客户决策者访谈构造 composite organization，得出三年 400% ROI、750 万美元 NPV 与半年内回本。它是受委托的综合模型，不是四家客户实测均值或普遍回报。

NatWest 的客户侧文件、Cube 的客户／伙伴材料以及 GitLab 客户案例强度不同。页面保留来源归属，不把厂商新闻稿中的引语、计划和模型收益提升为经审计的市场采用结论。

## 付费消费指标

GitLab 在 2026-06-02 电话会中，最初把截至 2026-04-30 的指标称为 DAP paid Consumption Run Rate，并报为接近 2,000 万美元。2026-07-08 Form 8-K 随后把现行指标扩展为 paid consumption-based products，把电话会后推出的 Flex 纳入往后口径，并剔除给予付费客户的某些一次性 credit 激励；公司明确说，正是对这些激励作调整后，4 月末历史数值被重述为更接近 1,500 万美元，而不是 Flex 导致历史数值下降。按新口径，2026-06-30 的 CRR 已超过 2,000 万美元。

CRR 是 GitLab 的内部年化速度指标，且公司明确称当时对财务表现不重大、计算方式还会演进。6 月旧披露是 DAP paid CRR，7 月现行定义则覆盖付费 consumption-based products；两者不可无时点混写。CRR 也不等于 ARR、bookings、现金流、GAAP revenue 或已经确认的销售额，后续定义还可能纳入新的产品和采购计划。

## 证据边界

- “唯一”“完整上下文”“更快”“提高生产率”等是 GitLab 或客户的产品叙述，除非另有独立评估，不作排他或因果结论。
- DAP、GitLab Duo、Duo Pro、Duo Enterprise、Credits 与 Flex 分属产品组合、add-on、计费单位和采购模型，不能因同品牌合并。
- GA 发生于 2026-01-15；当日可用范围与整个 18.8 release cycle 最终覆盖范围不是一回事。
- Free、Premium、Ultimate 的入口与 included credits 不相同，功能和费率还受版本、部署、合同和促销影响。
- 云 commitment 的合格采购路径不等于 credits 普遍互换，也不证明生产部署、数据驻留或独家供应。
- 7 月现行 CRR 不只覆盖 DAP；6 月旧披露明确为 DAP paid CRR。历史数值及定义均已重述，引用时须写明日期、定义和非 GAAP 边界。
- 客户案例、匿名试点、交易子集与受委托 composite 模型不能互相替代，更不能推出通用 ROI 或市场份额。
- 本页不记录漏洞、攻击、绕过、凭据、scanner、API、源码、部署步骤或其他技术实现。

## 证据

- 原始资料快照（本地归档）
- [GitLab FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm)
- [GitLab Duo Agent Platform documentation](https://docs.gitlab.com/user/duo_agent_platform/)
- [GitLab Duo Workflow 2024 announcement](https://about.gitlab.com/blog/meet-gitlab-duo-workflow-the-future-of-ai-driven-development/)
- [Software Development Flow history](https://docs.gitlab.com/user/duo_agent_platform/flows/foundational_flows/software_development/)
- [GitLab DAP next-evolution update](https://about.gitlab.com/blog/gitlab-duo-agent-platform-what-is-next-for-intelligent-devsecops/)
- [GitLab Credits documentation](https://docs.gitlab.com/subscriptions/gitlab_credits/)
- [GitLab Flex documentation](https://docs.gitlab.com/subscriptions/gitlab_flex/)
- [GitLab public beta announcement](https://about.gitlab.com/press/releases/2025-07-17-gitlab-announces-the-public-beta-of-gitlab-duo-agent-platform/)
- [GitLab GA announcement](https://about.gitlab.com/press/releases/2026-01-15-gitlab-announces-duo-agent-platform-general-availability/)
- [GitLab Free access expansion](https://about.gitlab.com/blog/gitlab-18-10-agentic-ai-now-open-to-even-more-teams-on-gitlab/)
- [GitLab pricing](https://about.gitlab.com/pricing/)
- [GitLab Q1 FY2027 earnings transcript](https://s204.q4cdn.com/984476563/files/doc_financials/2027/q1/GitLab-Q1FY2027-Earnings-Transcript.pdf)
- [GitLab paid consumption update Form 8-K](https://www.sec.gov/Archives/edgar/data/1653482/000165348226000145/gtlb-20260708.htm)
- [GitLab–AWS product and procurement relationship](https://about.gitlab.com/press/releases/2026-04-21-gitlab-collaborates-with-aws-to-bring-agentic-devsecops/)
- [GitLab–Google Cloud product relationship](https://about.gitlab.com/press/releases/2026-04-14-gitlab-google-collaborate-to-bring-agentic-devsecops-to-enterprise-teams-using-vertexai/)
- [MSP-delivered managed GitLab on Google Cloud](https://about.gitlab.com/press/releases/2026-06-10-gitlab-expands-collaboration-with-google-to-deliver-fully-managed-devsecops-platform/)
- [GitLab–Anthropic product relationship](https://about.gitlab.com/press/releases/2026-04-28-gitlab-deepens-integration-with-anthropic-claude-models/)
- [GitLab self-hosted model support](https://about.gitlab.com/blog/more-ai-models-for-duo-agent-platform-self-hosted/)
- [Duo CLI GA](https://about.gitlab.com/blog/gitlab-duo-cli-generally-available/)
- [Custom Flows GA](https://about.gitlab.com/blog/multi-step-software-delivery-with-agentic-flows/)
- [GitLab Cube customer case](https://about.gitlab.com/customers/cube/)
- [Cube customer-side account](https://cube.nl/en/digital-transformation/data-ai/ai-powered-software-development)
- [NatWest Group 2025 Annual Report](https://investors.natwestgroup.com/~/media/Files/R/RBS-IR-V2/results-center/13022026/nwg-annual-report-and-accounts-2025.pdf)
- [Forrester TEI study](https://tei.forrester.com/go/gitlab/duoagentplatform/?lang=en-us)
