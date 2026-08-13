---
{"dg-publish":true,"permalink":"/Git 与 GitHub 的制度边界/","title":"Git 与 GitHub 的制度边界","tags":["商业实体","开源治理","平台治理","所有权","商标"],"created":"2026-08-11","updated":"2026-08-11","dg-note-properties":{"status":"processed","title":"Git 与 GitHub 的制度边界","tags":["商业实体","开源治理","平台治理","所有权","商标"],"sources":["raw/2026-08-11-Git-GitHub制度与所有权边界核验.md","raw/2026-08-11-Git历史治理许可与维护边界核验.md"],"created":"2026-08-11","updated":"2026-08-11"}}
---

# Git 与 GitHub 的制度边界

[[Git\|Git]] 是自由开源软件及其上游项目；[[GitHub\|GitHub]] 是由 GitHub, Inc. 运营、以 Git 仓库为重要对象的商业托管与协作平台。[[微软\|Microsoft]] 在 2018 年收购 GitHub 公司，但没有因此收购 Git 项目、全部 Git 代码版权或 Git 的上游治理权。名称相近、托管官方镜像和公司收购，是三种不同关系。

## 六层权力要分开

| 层次 | 当前主体 | 能确认的权力 | 不能顺带推出 |
| --- | --- | --- | --- |
| 公司所有权 | Microsoft → GitHub, Inc. | Microsoft 是 GitHub 的母公司；SEC 记录收购对象为 GitHub, Inc. | Microsoft 拥有 Git 项目或所有托管代码 |
| 平台运营 | GitHub, Inc. | 依据服务条款管理账户、仓库可见性、平台功能与内容处置 | GitHub 是所有托管项目的上游治理者 |
| 仓库行政 | 仓库所有者／组织管理员 | 在 GitHub 服务内配置和管理具体仓库 | 行政权限等于代码版权或项目合法代表权 |
| 内容权利 | 用户与实际权利人 | 条款表述用户保有自己创建内容的所有权；实际归属仍取决于作者、雇佣／转让安排与贡献历史 | 公开托管即向所有人转让版权，或保有所有权即没有授予平台许可 |
| 许可范围 | GitHub 服务条款、仓库许可证与其他适用协议 | 分别配置平台、其他用户及站外复制、修改、分发和衍生等权利 | 公开可见或可 fork 就一定是开源 |
| 项目治理 | Git 维护者、邮件列表与项目共同体 | 讨论、接受改动和维护项目；[[Git Project Leadership Committee\|Git Project Leadership Committee]] 代表项目处理与 [[Software Freedom Conservancy\|Software Freedom Conservancy]] 的关系 | GitHub 平台或 SFC 自动取得项目决策权 |

## 商业实体、产品和客户合同不是一回事

GitHub, Inc. 是平台运营和直接签约的公司主体；Microsoft 是其母公司，也可能成为企业客户的采购合同相对方。[[GitHub Enterprise\|GitHub Enterprise]] 则是面向组织客户的产品组合，不是另一家名为“GitHub Enterprise”的公司。2026-08-11 的官方定价与企业计费页显示，这一产品按独立用户许可证计费，并可叠加使用量、Copilot、Advanced Security 等附加产品；公开价格只是访问日标价，不能代替具体企业合同或 GitHub 的财务报表。

企业客户直接向 GitHub 采购时，基础协议是 GitHub Customer Agreement；经 Microsoft 采购时，GitHub 官方客户条款明确改由 Microsoft 协议适用。产品专用条款、数据处理协议、SLA、专业服务与其他附加条款再按购买内容叠加。因而，母公司、运营公司、产品品牌、合同文件、付款渠道和客户组织必须分别识别，不能把它们都叫作“GitHub”。

Microsoft FY2025 年报把 GitHub cloud services 放在 Intelligent Cloud 的 “Azure and other cloud services” 合并类别中，并未把 GitHub 列成单独的可报告分部或单列收入。财务合并说明 Microsoft 的母公司控制，却不会消灭 GitHub, Inc. 作为合同主体的身份；同样，合并类别的收入也不能反推 GitHub 单体收入或利润。

## Marketplace 中的商业主体要分开

[[GitHub Marketplace\|GitHub Marketplace]] 把 GitHub 放在交易与分发中介位置：第三方 Product Provider 提供产品及使用权并承担产品责任，购买付款则经 GitHub 处理。现行开发者协议进一步把 GitHub 定义为付费产品的 merchant of record；由提供者设价，GitHub 向提供者汇出售价的 95%，保留 5%。提供者保留产品知识产权，双方被定义为独立合同方而非合伙、合资、代理或雇佣关系。GitHub 同时保留 listing 的最终准入和下架决定权。

这里至少有三类商业角色：GitHub, Inc. 运营市场并处理付款；Product Provider 提供第三方产品和使用权；客户同时与 GitHub 及提供者形成条款所描述的交易关系。GitHub 掌握上架入口、支付和下架权，但这不等于它拥有每个第三方产品，也不意味着第三方争议和产品责任全部由 GitHub 承担。商业主体、知识产权和责任分配仍须分别看 Marketplace 条款、Product Provider 条款与具体交易。

## 官方镜像仍然只是渠道

Git 项目在 GitHub 的 [`git/git`](https://github.com/git/git) 页面把自己标为 **publish-only mirror**；项目 README 同时明确：Git 的讨论与开发发生在 `git@vger.kernel.org` 邮件列表。

因此，“官方镜像”最准确的含义是**由项目指定的发布端点**。它能证明镜像身份和来源关系，不能证明 GitHub 是 Git 的 canonical upstream、最终审议机关或软件所有者。入口更方便，不等于治理发生迁移。

## SFC 承载法律与财政，不接管开发

Git 是 Software Freedom Conservancy 的 member project。SFC 为项目提供财政、行政、资产、合同和商标法律支持；PLC 是 Git 与 SFC 之间的代表接口。Git／SFC 的 2024 状态报告同时明确：SFC 不持有 Git 项目代码版权，会员关系也不赋予 SFC 对项目开发方向的影响。

这使三件事可以同时成立：Git 在组织上由 SFC 提供非营利承载；[[Git 商标治理\|Git 商标]]由 SFC 代表项目管理；Git 的上游维护仍由项目共同体承担。不能把其中一层写成对其他层的全面所有权。

## GitHub 的母公司关系不延伸到托管内容

Microsoft 的 SEC 文件把 2018-10-25 记为收购 GitHub, Inc. 的会计日期；Microsoft 与 GitHub 在 10 月 26 日对外宣布交易完成。GitHub 当时承诺以社区、平台和业务身份独立运营，当前官方页面则仍把 Microsoft 称为母公司。两者分别描述运营安排与公司控制，并不矛盾。

GitHub 现行服务条款把合同主体定义为 GitHub, Inc.，并把 Microsoft 列为关联方。条款表述用户拥有自己创建的内容，但并非只授予维持页面显示所需的狭窄许可：用户同时授权 GitHub 及其关联方为提供、开发和改进服务而存储、托管、解析、展示和复制内容，且现行文本明确把训练、开发与改进 GitHub 及关联方的人工智能和机器学习模型与技术纳入该许可。公开内容还会在服务功能范围内获得面向其他用户的查看、使用、展示、表演和以 fork 方式复制的许可；私有仓库、企业协议及特定 AI 功能另有适用条款和控制。

GitHub 自己的许可说明进一步区分：公开仓库可以被查看和在平台内 fork，但要成为真正的开源项目仍需许可证；没有许可证时适用默认版权规则。保有内容所有权、授予平台许可和采用开源许可证可以同时成立，不能把其中任何一项替代另外两项。

所以，Microsoft 对 GitHub 的公司控制、GitHub 对平台的管理权、仓库管理员的账户权限、实际权利人的内容权利、GitHub 条款下的平台许可和仓库开源许可证，是并行的权利链。

## 商标例外不是项目背书

[Git 商标政策](https://git-scm.com/about/trademark.html)明确把商标与软件版权分开，并说明 “GitHub” 与 “GitLab” 受早于现行政策的明确许可安排约束。这证明存在先行的 Git 商标许可安排，但公开政策没有披露许可全文或具体范围。无论其具体范围如何，都不能仅由该例外推出 GitHub 或 Microsoft 拥有 Git 商标、获得 Git 项目治理权，或代表项目对平台作全面认证。

## 责任边界

- GitHub 的服务可用性、账户管理、内容处置和平台条款属于 GitHub 的平台责任边界。
- Git 的项目维护、发布判断、贡献规则和项目商标安排属于 Git 项目、PLC 与 SFC 各自的制度边界。
- 某个仓库托管在 GitHub，甚至是项目指定的官方镜像，也不能把项目自身责任自动转给平台；反过来，平台规则也不能改写项目许可证或贡献者权利。

## 快速判断

遇到“某项目在 GitHub 上，所以 GitHub／Microsoft 拥有或治理它”的说法，可以依次问：

1. 说的是公司股权、平台运营、仓库管理员权限，还是项目治理？
2. 说的是内容权利、平台许可、开源许可证，还是商标许可？
3. 仓库是 canonical upstream、官方发布镜像，还是普通副本？
4. 证据来自项目自身治理文件、平台条款，还是仅来自仓库所在域名？

只有把这几层分别找到证据，才可以谈“官方”“所有”“控制”或“负责”。

## 证据与时点

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [Git 项目镜像](https://github.com/git/git)
- [GitHub Terms of Service](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service)（2026-04-27 生效，2026-08-11 访问）
- [GitHub 仓库许可说明](https://docs.github.com/en/enterprise-cloud@latest/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
- [GitHub 定价](https://github.com/pricing)（动态标价页，2026-08-11 访问）
- [GitHub Customer Terms](https://github.com/customer-terms)（企业直接采购与 Microsoft 渠道边界，2026-08-11 访问）
- [GitHub Enterprise 计费](https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/enterprise-billing/billing-for-enterprises)
- [GitHub Marketplace Terms](https://docs.github.com/en/site-policy/github-terms/github-marketplace-terms-of-service)（2026-04-27 生效）
- [GitHub Marketplace Developer Agreement](https://docs.github.com/en/site-policy/github-terms/github-marketplace-developer-agreement)（2025-05-27 生效）
- [Microsoft FY2025 Annual Report](https://www.microsoft.com/investor/reports/ar25/index.html)（GitHub cloud services 的合并披露边界）
- [Microsoft 完成 GitHub 收购公告](https://blogs.microsoft.com/blog/2018/10/26/microsoft-completes-github-acquisition/)
- [Microsoft 向 SEC 披露的业务合并记录](https://www.sec.gov/Archives/edgar/data/789019/000156459019027952/R15.htm)
- [Git 商标政策](https://git-scm.com/about/trademark.html)

## 相关页面

- [[Git\|Git]]
- [[GitHub\|GitHub]]
- [[GitHub Enterprise\|GitHub Enterprise]]
- [[GitHub Marketplace\|GitHub Marketplace]]
- GitHub Customer Agreement
- [[微软\|微软]]
- [[Software Freedom Conservancy\|Software Freedom Conservancy]]
- [[Git Project Leadership Committee\|Git Project Leadership Committee]]
- [[Git 商标治理\|Git 商标治理]]
