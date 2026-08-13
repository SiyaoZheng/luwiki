---
{"dg-publish":true,"permalink":"/CISA BOD 26-04/","title":"CISA BOD 26-04","tags":["#cybersecurity","#vulnerability-management","#federal-policy","#cisa"],"created":"2026-08-11","updated":"2026-08-11","dg-note-properties":{"status":"processed","title":"CISA BOD 26-04","tags":["#cybersecurity","#vulnerability-management","#federal-policy","#cisa"],"sources":["raw/2026-08-11-CISA-BOD-26-04风险优先级与实施边界核验.md"],"created":"2026-08-11","updated":"2026-08-11"}}
---

<!-- issue: luwiki-4ah6 -->

# CISA BOD 26-04

CISA BOD 26-04《Prioritizing Security Updates Based on Risk》是 2026 年 6 月 10 日发布的美国联邦漏洞修复强制指令。它取代了 BOD 19-02 的 CVSS 分级时限和 BOD 22-01 的 KEV 固定期限，改用**资产是否公网暴露、是否进入 KEV、利用能否自动化、利用后的技术控制程度**四输入逐资产矩阵，映射为 3／14／60 个日历日或“随下次重大升级修复”期限。

它是面向 [[Federal Civilian Executive Branch\|Federal Civilian Executive Branch]]（FCEB）范围内联邦信息系统的 [[Binding Operational Directive\|Binding Operational Directive]]，不是全球漏洞管理标准，也不会自动成为私营组织或所有联邦承包商的统一 SLA。[[Cybersecurity and Infrastructure Security Agency\|Cybersecurity and Infrastructure Security Agency]]（CISA）鼓励其他组织自愿借鉴，但法律义务、合同义务和方法参考必须分开。

作为 [[漏洞优先级信号组合\|漏洞优先级信号组合]] 的一项联邦政策实现，它把多个来源不同的信号直接转成行动期限；这不等于这些输入已被因果验证为最优组合。

## 权限与适用范围

[正式指令](https://www.cisa.gov/news-events/directives/bod-26-04-prioritizing-security-updates-based-risk)依据 44 U.S.C. §§ 3552—3554：[[Office of Management and Budget\|Office of Management and Budget]] 提供上位政策，DHS Secretary 获授权制定并监督 BOD，机构负责人须遵守。CISA 负责发布、运营实施和执行监测；法定制定与监督权限归 DHS Secretary。这不等于 CISA 获得了脱离 DHS／OMB 法源链的普遍立法权。指令也与 [[OMB Circular A-130\|OMB Circular A-130]] 和 [[Federal Information Security Modernization Act of 2014\|Federal Information Security Modernization Act of 2014]] 的联邦信息资源管理框架衔接。

范围包括机构自有、机构管理，以及由第三方代表机构运行并处理机构信息的 federal information systems。法定 national security systems 与法律列明的部分国防、情报系统不在这一 BOD 范围内。CISA 网页使用 “Department of War”，但它引用的现行法条仍写 Department of Defense；范围判断应依实际法条类别，而不是网页称谓变化。

指令明确写明：除非 governing procurement contract 另有约定，它**不直接适用于 contractors**。FCEB 机构需要审查合同并与 contracting officer 决定必要修改；第三方或云环境中的合规责任仍由机构通过库存、持续监控和合同关系落实。因此，“服务联邦政府”本身不能推出某家私人供应商直接受 3／14／60 天法定义务约束。

## 四个输入由谁判断

| 输入 | 含义 | 主要证据／责任 |
|---|---|---|
| Publicly Exposed | 资产能否被未经认证或不受信任实体经公共网络访问 | 机构结合本地资产清单、[[CISA Cyber Hygiene Services\|CISA Cyber Hygiene Services]]、扫描器等判断；任一可靠方法发现暴露即按 Yes |
| In the KEV | 该 CVE 是否进入 [[CISA Known Exploited Vulnerabilities Catalog\|CISA Known Exploited Vulnerabilities Catalog]] | CISA 维护的二元目录信号；公开 PoC 不是收录必要条件 |
| Automatable by Adversary | 攻击者能否自动完成利用所需全部步骤 | CISA 通过 [[CISA Vulnrichment\|CISA Vulnrichment]]／CVE ADP 元数据发布 |
| Technical Impact | 利用后对受影响组件是 total control 还是 partial control | CISA 通过 Vulnrichment 发布；它描述组件控制程度，不等于业务、任务或公共安全后果 |

“Total control”包括可靠取得登录凭据等可完全控制软件行为的结果；“Partial control”涵盖有限控制、信息暴露、低概率完全控制和拒绝服务。二者不是 Common Vulnerability Scoring System（CVSS）数值的别名，也没有把本地资产价值自动纳入。

## 完整期限矩阵

以下均为**最大日历日数**；机构应尽快行动，可以早于上限。表中“升级时修复”指下一次计划中的 major upgrade 或 rebuild，不是永久豁免。

| 公网暴露 | KEV | 可自动化 | Total control | Partial control |
|---|---|---|---|---|
| Yes | Yes | Yes | 3 天＋forensic triage | 3 天 |
| Yes | Yes | No | 3 天＋forensic triage | 14 天 |
| Yes | No | Yes | 3 天 | 14 天 |
| Yes | No | No | 14 天 | 60 天 |
| No | Yes | Yes | 3 天＋forensic triage | 14 天 |
| No | Yes | No | 14 天 | 14 天 |
| No | No | Yes | 60 天 | 60 天 |
| No | No | No | 下次重大升级／重建时修复 | 下次重大升级／重建时修复 |

因此，“进入 KEV 就一律三天”是错误简化：是否公网暴露、能否自动化和技术影响仍会改变期限。反过来，一个不在 KEV 的公网漏洞，只要可自动化并导致完全控制，也会进入三天档。

正式正文规定，计时从以下两件事中**较早发生者**开始：

1. CISA 把漏洞加入 KEV；
2. 机构依据 [[CISA BOD 23-01\|CISA BOD 23-01]] 在资产上识别到漏洞并更新 [[Continuous Diagnostics and Mitigation Program\|Continuous Diagnostics and Mitigation Program]]（CDM）dashboard。

事实变化会动态改变档位。例如，把资产从互联网移除可以把暴露状态由 Yes 改为 No；后来进入 KEV 则会缩短期限。修复可以是补丁、退役系统或其他能消除漏洞的行动。CISA 不为 directive required actions 签发 waiver／exception；高价值或 mission-critical 资产仍须通过变更管理、连续运行计划、隔离和与 CISA 协商缓解来处理，而不是自动延长期限。

## 三阶段执行

- **Phase I，立即生效**：更新机构政策和职责；持续监测 KEV；经 CDM 自动报告，尚未自动化者双周手工报告；继续 Cyber Hygiene 扫描，并按季度核验公网 IP 与域名范围。
- **Phase II，发布后 60 天内**：让漏洞管理流程持续消费 CVE 数据库和 KEV。正式文本没有打印绝对日期。
- **Phase III，发布后 180 天内**：执行矩阵时限；持续标记可从机构外部触达的资产；尚未自动化者每七天报告；CDM 资产记录要带全部相关公网与 RFC1918／RFC4193 私网地址。

从 2026 年 6 月 10 日顺延 180 天是 12 月 7 日。顺延 60 天则是 8 月 9 日，但 [[FedRAMP\|FedRAMP]] 的 6 月 16 日公告把 Phase II 写成 8 月 7 日；两者相差两天。因为正式 BOD 只给相对时限，本页不替官方把 8 月 7 日改写成无争议的 BOD 绝对截止日。

## Forensic triage：三天要求与建议步骤

“3 天＋forensic triage”只出现在 16 种组合中的三种。它要求在三天内完成修复或缓解，并对资产做足以判断是否已经失陷的取证分诊。

[实施指南](https://www.cisa.gov/news-events/directives/bod-26-04-implementation-guidance-prioritizing-security-updates-based-risk)给出六阶段目标：0—2 小时 scoping，2—24 小时保存和收集证据，2—24 小时关键补丁与稳定，6—24 小时 containment，24—48 小时分析，48—72 小时决定是否升级为完整事件响应。指南明确说，这些细分时间是 **recommended best practices**，不是各自独立的强制期限；强制项是三天窗口内完成合格 triage。若具体 KEV Notes 给出专项步骤，则以专项说明为准。

## BOD 22-01、KEV、SSVC、CVSS 与 EPSS

- **[[CISA BOD 22-01\|CISA BOD 22-01]]**：BOD 26-04 明文 supersede and revoke 22-01，也撤销 [[CISA BOD 19-02\|CISA BOD 19-02]]。被撤销的是旧指令，KEV 目录和基本收录机制并未废止；KEV 状态被吸收到新矩阵。
- **KEV**：它是“已有可靠在野利用证据”的确认信号，不是连续概率分数；加入旧 CVE 不表示 CISA 此刻仍观察到持续利用，也不要求公开 PoC。
- **[[Stakeholder-Specific Vulnerability Categorization\|Stakeholder-Specific Vulnerability Categorization]]（SSVC）**：正式文本说矩阵受 SSVC 启发，并复用／改造 Automatable 与 Technical Impact。它没有完整照搬旧 CISA SSVC 的 exploitation、mission prevalence、public well-being、mitigation status 或 Track／Attend／Act 输出。
- **[[Common Vulnerability Scoring System\|CVSS]]**：撤销 BOD 19-02 后，FCEB 不再被要求按 CVSS 等级决定修复优先级；这不是禁止或废除 CVSS。BOD 的 Technical Impact 与 CVSS severity 有概念相似处，Automatable 也是 CVSS v4 supplemental metric，但 CVSS Base score 不是矩阵输入。这个方向与 FIRST 关于“CVSS-B 不能单独代表风险”的现行指南一致。
- **EPSS**：正式 BOD、FAQ 和当前数据 schema 都没有 EPSS 字段、阈值或期限映射。它可以作为组织自愿增加的未来 30 天利用概率信号，但不能改变 BOD 合规期限；在已有直接利用证据时，FIRST 自己也要求以证据优先。

## 云服务的下游落地不是普遍外推

[[FedRAMP Vulnerability Detection and Response\|FedRAMP Vulnerability Detection and Response]]（VDR）和 VER 是最清晰的制度下游。FedRAMP 宣布 2026 年 12 月 7 日起，所有取得或维持认证的 cloud service offerings 必须采用两套规则；2027 年 3 月 7 日前可以在 corrective action plan 下维持认证，此后仍不合规则可能被撤销认证。

FedRAMP 声称 VDR／VER meet or exceed BOD 26-04。它的适用对象更窄，但若干评估与默认规则比 BOD 更严，并非逐字复制：它使用 internet reachability、在缺少反证时默认 exploit automatable，并允许更多评估因素。这个案例证明 BOD 的逻辑已经在 FedRAMP 认证制度中形成下游规则；合同传导仍取决于明确采购条款，本轮未找到普遍采用率。它也不能证明所有云厂商或私人组织自动受 BOD 本身约束。

## 实施证据与现实边界

公开证据目前主要描述**设计和潜在工作量**，还不是政策成效：

- CISA 经 CyberScoop 转述称，某个未具名大型 FCEB 机构的初步分析中约 1% 漏洞实例进入三天档，60% 以上可以等到下次系统升级。机构、分母、方法和执行结果没有公开，不能当成独立验证。
- Macnica Security Research Center 对 159,792 个带 SSVC 字段的 Vulnrichment CVE 做情境模拟：假设全部公网暴露时，51.6% 进入 60 天、8.7% 进入普通三天档，另有 0.8% 进入三天＋triage；假设全部不暴露时，76.6% 可以随升级处理。暴露是人为极端假设，研究没有观测 FCEB 资产、入侵或修复结果。
- 律所、媒体和安全厂商普遍指出三天窗口、取证人力、资产清单、补丁可用性与 OT／医疗维护窗口可能成为约束；这些是可行性判断，不是失败率或因果效果。
- 截至 2026 年 8 月 11 日，未找到 GAO／DHS OIG 审计、具名机构复盘、跨机构合规率、事件减少、误延期、补丁回归或私营合同普遍采用率。CISA 要求未来每财年数据驱动地重估时限并持续做案例研究，这只说明官方承诺继续评估；不能据此声称已经完成或公开了实证验证。

因此，最稳妥的判断是：BOD 26-04 取代 BOD 19-02 的 CVSS 分级时限和 BOD 22-01 的 KEV 固定期限，改成资产暴露、利用事实、自动化和技术影响的动态期限模型；它目前是**已生效的联邦制度与可检验假设**，还不是“该矩阵已经降低真实网络风险”的实证结论。

## 当前文本与实施工件的冲突

截至 2026 年 8 月 11 日，至少有六处不能静默统一：

1. **计时起点**：正式 BOD 用 KEV 加入／资产发现两者中较早者；8 月 7 日发布的数据 schema 的 elapsed 字段却使用较晚者。合规叙述应优先引用正式指令，并记录工件冲突。
2. **Phase II 日期**：正式文本是“发布后 60 天”；FedRAMP 公告写 8 月 7 日，实际只相隔 58 天。
3. **元数据完整性**：正文称为 every CVE ID 提供字段，FAQ 却规定元数据缺失时的 fallback，Vulnrichment 也只声称处理 new and recent CVEs。
4. **KEV 标准**：专门 criteria 页列 CVE ID、可靠在野利用证据、明确修复行动三项；FAQ 另加“对美国政府信息系统构成显著风险”一项，却未把它定义为独立可计算门槛。
5. **版本标签**：FAQ 链接到 FIRST CVSS v4.0 User Guide，却把链接文字写成“v4.2”；FIRST 当前正式版本仍是 v4.0。
6. **单一 dueDate 与逐资产矩阵**：KEV JSON 仍为每个 CVE 给一个 dueDate，而新矩阵的期限依资产暴露状态变化；当前公开页面没有完整解释两者的优先级或旧 22-01 逾期项目的迁移。

两个 CISA HTML 页面也没有逐项 changelog 或文档版本号。页面显示的 6 月 10 日是发布日期，不应被当作最后修订日期：sitemap 显示实施指南 6 月 23 日修改，正式指令页 8 月 7 日修改并加入 standardized data schema。

## 相关页面

- [[Cybersecurity and Infrastructure Security Agency\|Cybersecurity and Infrastructure Security Agency]]
- [[Binding Operational Directive\|Binding Operational Directive]]
- [[Federal Civilian Executive Branch\|Federal Civilian Executive Branch]]
- [[Office of Management and Budget\|Office of Management and Budget]]
- [[OMB Circular A-130\|OMB Circular A-130]]
- [[Federal Information Security Modernization Act of 2014\|Federal Information Security Modernization Act of 2014]]
- [[CISA BOD 19-02\|CISA BOD 19-02]]
- [[CISA BOD 22-01\|CISA BOD 22-01]]
- [[CISA BOD 23-01\|CISA BOD 23-01]]
- [[CISA Emergency Directive\|CISA Emergency Directive]]
- [[CISA Known Exploited Vulnerabilities Catalog\|CISA Known Exploited Vulnerabilities Catalog]]
- [[CISA Vulnrichment\|CISA Vulnrichment]]
- [[CISA Cyber Hygiene Services\|CISA Cyber Hygiene Services]]
- [[Continuous Diagnostics and Mitigation Program\|Continuous Diagnostics and Mitigation Program]]
- [[Stakeholder-Specific Vulnerability Categorization\|Stakeholder-Specific Vulnerability Categorization]]
- [[Common Vulnerability Scoring System\|Common Vulnerability Scoring System]]
- [[FedRAMP\|FedRAMP]]
- [[FedRAMP Vulnerability Detection and Response\|FedRAMP Vulnerability Detection and Response]]
- [[CVE Authorized Data Publisher\|CVE Authorized Data Publisher]]
- [[漏洞优先级信号组合\|漏洞优先级信号组合]]
- 原始资料快照（本地归档）
