---
{"dg-publish":true,"permalink":"/GitLab/","title":"GitLab","tags":["#公司","#上市公司","#软件平台","#开源商业化","#企业软件"],"created":"2026-08-11","updated":"2026-08-12","dg-note-properties":{"status":"processed","title":"GitLab","aliases":["GitLab Inc."],"source_count":18,"sources":["raw/2026-08-11-GitLab公司身份产品线客户与竞争关系核验.md","raw/2026-08-11-Anthropic公司产品融资治理与合作关系核验.md","raw/2026-08-12-GitLab-Duo-Agent-Platform产品计费客户与渠道核验.md","https://claude.com/customers/gitlab-enterprise","https://about.gitlab.com/press/releases/2026-04-28-gitlab-deepens-integration-with-anthropic-claude-models/","https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm","https://ir.gitlab.com/news/news-details/2026/GitLab-Reports-First-Quarter-Fiscal-Year-2027-Financial-Results/default.aspx","https://about.gitlab.com/company/","https://about.gitlab.com/pricing/","https://handbook.gitlab.com/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/tiers/","https://www.sec.gov/Archives/edgar/data/1653482/000165348226000085/gtlb-20260501.htm","https://www.sec.gov/Archives/edgar/data/1653482/000165348226000107/gtlb-20260518.htm","https://www.sec.gov/Archives/edgar/data/1653482/000162828026039805/gtlb-20260601.htm","https://www.sec.gov/Archives/edgar/data/1653482/000162828026039793/gtlb-20260430.htm","https://www.sec.gov/Archives/edgar/data/1653482/000165348226000145/gtlb-20260708.htm","https://s204.q4cdn.com/984476563/files/doc_financials/2027/q1/GitLab-Q1FY2027-Earnings-Transcript.pdf","https://about.gitlab.com/blog/gitlab-act-2/","https://techcrunch.com/2026/06/03/gitlab-cuts-14-of-staff-as-it-scales-its-platform-to-serve-ai-workloads/"],"tags":["#公司","#上市公司","#软件平台","#开源商业化","#企业软件"],"created":"2026-08-11","updated":"2026-08-12"}}
---

<!-- issue: luwiki-00yn -->
# GitLab

GitLab 同时指一个始于 2011 年的开源项目、围绕该项目形成的产品品牌，以及运营该产品的 GitLab Inc.。GitLab Inc. 是 Delaware 公司，Class A 普通股在 [[Nasdaq\|Nasdaq]] Global Select Market 以 GTLB 交易。产品以 [[Git\|Git]] 仓库和软件开发协作为基础；公司把更广的产品组合称为面向软件交付全流程的“智能编排平台”。本文只用这一高层定位识别商业产品，不展开技术实现或网络安全议题。

这三个层次不能混写：开源项目不是上市公司的另一种法律名称，GitLab 品牌也不意味着所有产品功能采用同一许可证。GitLab Inc. 公开称自己是“GitLab 背后的公司”，公司财务、客户合同、管理层和上市关系均应回到 GitLab Inc.；具体功能和许可证则要回到相应产品与版本。

## 实体、品牌与产品分层

| 层次 | 可核对象 | 关系与边界 |
|---|---|---|
| 法律／上市主体 | GitLab Inc. | Delaware 公司、Nasdaq: GTLB，承担发行人披露、财务与公司治理 |
| 项目与品牌 | GitLab | 2011 年开始的项目及其后形成的统一产品品牌；不等于公司全部法律权利 |
| 基础付费层 | Free、Premium、Ultimate | Free 是免费进入层；Premium 与 Ultimate 是付费层 |
| 交付产品 | GitLab.com、Self-Managed、Dedicated | 分别对应公司托管、客户自行管理、公司管理的单租户 SaaS |
| 用量产品 | [[GitLab Duo Agent Platform\|GitLab Duo Agent Platform]] | 与席位订阅并存，以 GitLab Credits 承载部分用量收费 |
| 中国实体 | [[极狐GitLab\|极狐GitLab]]／GitLab Information Technology (Hubei) Co., Ltd. | 独立中国法律实体与业务品牌，纳入 GitLab 合并口径，但不是 GitLab Inc. 的别名 |

公司官方时间线把项目起点、公司成立与资本市场事件明确分开：2011 年项目开始，2014 年 GitLab 公司化，2015 年进入 [[Y Combinator\|Y Combinator]]，2016 年完成 2,000 万美元 B 轮融资，2021 年成为 Nasdaq 上市公司。它们是项目、组织、融资与上市的不同里程碑。

GitLab 还把自己描述为 remote-only company。FY2026 10-K 封面把主要行政办公室地址写作“不适用”，并称公司不维持总部；EDGAR 页眉中的邮寄／业务地址因此不能自动写成总部。全远程既是组织身份，也在 10-K 中被列为招聘、协作、文化和运营风险的来源。

## 产品线、开源边界与收费路径

GitLab 采用 open-core 结构。公司 handbook 把 Free 描述为开源且不付费的层，把 Premium 和 Ultimate 描述为付费、source-available 的层；12.3 版本后转向单代码库，也没有把所有功能自动改成同一开源许可证。判断某段代码、功能或贡献的权利，仍需看具体版本与文件，不能只凭“GitLab 是开源项目”概括整个平台。

截至 2026-08-11，官方价格页列出的基本商业入口是：

- **Free**：0 美元，面向个人项目和开源贡献。
- **Premium**：每用户每月 29 美元，按年计费。
- **Ultimate**：询价，由销售接洽。
- **GitLab Credits**：Premium 与 Ultimate 当前分别附带每用户每月 12 与 24 credits，但页面明确标为限时促销；超额按标准每 credit 1 美元，承诺量可能获得折扣。
- **GitLab Flex**：销售辅助的年度承诺安排，可在席位与 credits 之间配置预算；未使用的承诺额和实际合同条款受具体协议约束。

这使 GitLab 的收费同时包含免费进入、按席位订阅、销售询价、承诺消费和按用量收费。公开标价、促销 credits 和用户数不能相乘推算收入，Ultimate 合同价、折扣、伙伴转售和税费也未由价格页披露。

交付方式同样是商业产品差异，而不只是部署术语：

- **GitLab.com** 由 GitLab 托管，价格页称当前运行在美国的 [[Google Cloud\|Google Cloud]]。
- **Self-Managed** 由客户在自己的基础设施中管理，客户保留环境和数据控制。
- **Dedicated** 是 GitLab Inc. 托管和管理的单租户 SaaS，部署在客户选择的 [[Amazon Web Services\|Amazon Web Services]] 区域。

因此，云服务与自管产品都可以产生订阅收入；不能把 Self-Managed 简化为“免费开源”、也不能把 GitLab.com 视为公司全部业务。FY2026 财务表把 self-managed 与 SaaS subscription 合并披露，没有提供两者的独立收入占比。

## 收入、客户与采用口径

GitLab FY2026 收入为 **9.552 亿美元**，FY2025 为 7.592 亿美元，同比增长 26%；归属于 GitLab 的净亏损由 630 万美元扩大到 5,600 万美元。收入构成中，subscription（self-managed 与 SaaS 合并）约 8.647 亿美元，license self-managed 与 other 约 9,052 万美元。前者没有继续拆分 SaaS 和 self-managed，不能据此判断哪一种交付贡献更大。

截至 2026-01-31：

- 超过 70% ARR 来自公共部门和企业客户；
- ARR 超过 10 万美元的客户为 1,456 家，超过 100 万美元的客户为 155 家；
- Dollar-Based Net Retention Rate 为 118%；
- 公司称注册用户超过 5,000 万、超过一半 Fortune 100 是客户，并明确后者基于 GitLab 自有数据。

注册用户、付费客户和 ARR 阈值客户是不同口径。GitLab 把 Base Customers 定义为单期 ARR 超过 5,000 美元的组织；一个拥有多个部门或子公司的组织在该计算中可被视为一个客户。Fortune 100 与用户规模均是发行人自报，本轮没有找到同口径独立审计。

Q1 FY2027（截至 2026-04-30）收入为 2.642 亿美元，同比增长 23%；ARR 超过 5,000 美元的客户达到 10,831 家，超过 10 万美元的达到 1,519 家，DBNR 为 117%。这些时点指标能说明客户扩张，却不能直接变成市场份额、合同平均价格或持续增长保证。

## 管理层、投票权与关联交易

现任 CEO [[Bill Staples\|Bill Staples]] 自 2024-12 起同时任董事；共同创办人 [[Sid Sijbrandij\|Sid Sijbrandij]] 在同月由 CEO 转任 Executive Chair。董事会把 Executive Chair 与 CEO 分开，并另设 lead independent director；公开头衔支持角色分工，不足以还原每项经营决定的完整授权链。

投票权必须按时点处理。2026 proxy 以 4 月 1 日为快照，曾显示 Sijbrandij 持有 50.43% 总投票权；但他在 5 月 14 日把全部 Class B 普通股转为 Class A。Class B 每股 10 票、Class A 每股 1 票，所以 proxy 数字不是转换后的当前控制比例。公司称转换出于个人税务规划、与公司不存在分歧，并称他仍是最大个人 Class A 股东；实时股权与投票权仍应以后续披露为准。

proxy 还披露一项窄关联交易：GitLab 于 2025-11 支付 1,000 美元，取得对 [[Kilo Code\|Kilo Code]] 真诚第三方收购提议的优先购买权，期限至 2026-08-24；Kilo Code 是 Sijbrandij 的关联公司。这证明两家主体存在受披露的选择权安排，不证明 GitLab 已经收购 Kilo Code。

## 中国业务、合作伙伴与销售

GitLab 于 2021 年与两家中国投资伙伴建立 GitLab Information Technology (Hubei) Co., Ltd.，即 JiHu。FY2026 10-K 把 JiHu 作为 variable interest entity 合并，称 GitLab Inc. 约持有 54% 股权并保持控制；JiHu FY2026 收入为 933.6 万美元。由于它有独立法律主体、股权与员工激励安排，[[极狐GitLab\|极狐GitLab]] 应作为中国业务实体单独研究，不能写成 GitLab Inc. 的普通分公司或产品别名。

GitLab 的客户获取路径包括直接销售、自助网站和合作伙伴生态；价格页还列出全球许可转售伙伴。公司材料披露了三类正向关系：

- GitLab.com 由 [[Google Cloud\|Google Cloud]] 承载；
- Dedicated 在 [[Amazon Web Services\|Amazon Web Services]] 上提供客户选择的区域；
- Q1 FY2027 业务更新披露与 Google Cloud、AWS 的联合客户动作，以及把 [[Anthropic\|Anthropic]] Claude 纳入产品合作。

这些关系说明托管、联合销售与产品合作的存在，但没有公开每一伙伴贡献的收入、客户转化、排他性或责任分配。平台运营主体、底层云供应商和模型提供者仍是不同公司。

GitLab 与 Anthropic 的关系还包括客户、产品和采购渠道三个层次：Anthropic 的客户案例称 GitLab 内部采用 [[Claude Enterprise\|Claude Enterprise]] 并使用 Anthropic 平台；GitLab 官方公告把 Claude 纳入 [[GitLab Duo Agent Platform\|GitLab Duo Agent Platform]]；GitLab 同时是 [[Claude Marketplace\|Claude Marketplace]] 的供应商。案例中的生产率区间来自厂商与客户调查，不是独立实验；Marketplace 额度转换也不等于所有客户实际采购。

## 竞争关系

GitLab FY2026 10-K 把 [[微软\|Microsoft]] 和 [[Atlassian\|Atlassian]] 列为成熟竞争者。对应到现实产品，GitLab 与 Microsoft 旗下 [[GitHub\|GitHub]]、Atlassian 旗下 [[Bitbucket\|Bitbucket]] 在代码托管、协作、企业采购和相邻软件交付产品上竞争。

这是一项发行人风险披露，不是独立市场调查。GitLab 没有在该披露中提供 GitLab、GitHub 与 Bitbucket 的同口径收入、客户、迁移率或市场份额，因此不能据此排出行业名次、认定“第二大”，或推出法定市场地位。GitHub 的公司、产品、母公司与单体财务边界见 [[GitHub\|GitHub]]。

## 2026 年组织重组

董事会于 2026-06-01 批准 [[GitLab 2026 重组\|GitLab 2026 重组]]。8-K 预计约 14% 的 2026-01-31 全球员工可能受影响，公司将退出 22 个国家，团队成员地理覆盖减少约 37%，预计税前费用 3,000 万至 3,500 万美元，并计划在 2027-01-31 前大致完成。TechCrunch 把规模报道为约 350 人；法定文件本身只写“约 14% 可能受影响”。

CEO 的公开信把调整描述为管理层级压缩、较小团队重组和把多数节余再投入优先事项。这里应保留归属：这是管理层对动机和预期的解释，不是成本、创新速度或客户结果已经改善的证据。最终人数、退出国家后的销售覆盖和再投资效果，要等后续财报及组织披露复核。

## 证据边界

- GitLab 所称“唯一”的智能编排平台是公司市场定位，不是独立验证后的排他事实。
- open-core、单代码库、Free 和付费 tiers 回答不同问题；任何一项都不能代表平台全部内容的许可证。
- 公开标价、促销 credit、注册用户、Base Customers、ARR 阈值客户和收入不能互换。
- 公司没有在 FY2026 表中拆分 self-managed 与 SaaS subscription，相关占比仍未知。
- Fortune 100 客户比例和注册用户数是 GitLab 自报；本轮未找到同口径外部审计。
- 4 月 proxy 投票权快照已被 5 月 Class B 转换改变，不能当作当前控制权。
- JiHu、GitLab Inc.、GitLab 品牌和具体产品不是同一法律主体。
- Microsoft／Atlassian 的竞争者披露不能推出市场份额或法定支配地位。
- 2026 重组仍在实施期，管理层所述再投资效果尚待后续证据。
- 本页不延伸到漏洞、攻击、绕过、凭据、scanner、源码、API 或部署实现。

## 证据

- 原始资料快照（本地归档）
- [GitLab FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm)
- [GitLab Q1 FY2027 results](https://ir.gitlab.com/news/news-details/2026/GitLab-Reports-First-Quarter-Fiscal-Year-2027-Financial-Results/default.aspx)
- [About GitLab](https://about.gitlab.com/company/)
- [GitLab Pricing](https://about.gitlab.com/pricing/)
- [GitLab tier definitions](https://handbook.gitlab.com/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/tiers/)
- [GitLab 2026 proxy](https://www.sec.gov/Archives/edgar/data/1653482/000165348226000085/gtlb-20260501.htm)
- [Class B conversion Form 8-K](https://www.sec.gov/Archives/edgar/data/1653482/000165348226000107/gtlb-20260518.htm)
- [Restructuring Form 8-K](https://www.sec.gov/Archives/edgar/data/1653482/000162828026039805/gtlb-20260601.htm)
- [JiHu quarterly disclosure](https://www.sec.gov/Archives/edgar/data/1653482/000162828026039793/gtlb-20260430.htm)
- [July 2026 business update Form 8-K](https://www.sec.gov/Archives/edgar/data/1653482/000165348226000145/gtlb-20260708.htm)
- [GitLab Act 2](https://about.gitlab.com/blog/gitlab-act-2/)
- [TechCrunch restructuring report](https://techcrunch.com/2026/06/03/gitlab-cuts-14-of-staff-as-it-scales-its-platform-to-serve-ai-workloads/)



## 相关页面

- 客户覆盖率自报所依赖的年度榜单产品：[[Fortune 100\|Fortune 100]]。


## Duo Agent Platform 同步核验（2026-08-12）

[[GitLab Duo Agent Platform\|GitLab Duo Agent Platform]] 属于 [[GitLab Duo\|GitLab Duo]] 产品组合，并以 [[GitLab Credits\|GitLab Credits]] 承载用量计费；[[GitLab Flex\|GitLab Flex]] 是覆盖席位与 credits 的销售辅助年度采购模型，不是新订阅 tier。现行文档把 Premium／Ultimate 附带 credits 与另购共享池分开：前者为个人额度、每月刷新且不结转，后者可由组织共享但年度承诺按月分配。2026-06-02 电话会最初把 2026-04-30 的指标称为 DAP paid Consumption Run Rate，并报为接近 2,000 万美元；2026-07-08 的 8-K 随后把现行指标扩展为 paid consumption-based products、把电话会后推出的 Flex 纳入往后口径，并明确因剔除某些一次性 credit 激励而把 4 月历史数值重述为更接近 1,500 万美元。2026-06-30 按新口径超过 2,000 万美元。旧 DAP 指标与新消费产品指标不可无时点混写，且都不等于 DAP 单产品收入、ARR 或 GAAP revenue。详见 原始资料快照（本地归档）、[GitLab Credits 文档](https://docs.gitlab.com/subscriptions/gitlab_credits/)、[Q1 FY2027 earnings transcript](https://s204.q4cdn.com/984476563/files/doc_financials/2027/q1/GitLab-Q1FY2027-Earnings-Transcript.pdf) 与 [2026-07-08 Form 8-K](https://www.sec.gov/Archives/edgar/data/1653482/000165348226000145/gtlb-20260708.htm)。
