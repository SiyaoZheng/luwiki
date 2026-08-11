---
{"dg-publish":true,"permalink":"/Linux Kernel CVE Authority/","title":"Linux Kernel CVE Authority","tags":["linux","security","cve","governance"],"created":"2026-08-11","updated":"2026-08-11","dg-note-properties":{"status":"processed","title":"Linux Kernel CVE Authority","tags":["linux","security","cve","governance"],"sources":["raw/2026-08-11-Linux-Kernel-CVE-Authority制度与证据边界核验.md"],"created":"2026-08-11","updated":"2026-08-11"}}
---

<!-- issue: luwiki-d6qg -->

# Linux Kernel CVE Authority

Linux Kernel CVE Authority 是 kernel.org 自 2024 年 2 月 13 日起承担的 [[CVE Numbering Authority\|CVE Numbering Authority]]（CNA）职能：它为范围内的潜在安全问题分配 CVE ID，并更新或拒绝记录；自动化候选发现通常从已进入 stable release 的修复出发。这里的 “Authority” 是 **CVE 编号与记录范围内的授权**，不是对漏洞严重度、现实可利用性、每个发行版是否受影响或补丁优先级作出统一裁决。

这项制度改变显著增加了 Linux 内核 CVE 的可见数量，但不能据此推断内核突然出现了同等数量的严重漏洞。CVE 解决“我们在谈哪一个公开弱点”；产品适用性、严重度、利用状态和组织风险仍是后续的不同判断层。

## 制度范围

[CVE Program 在 2024 年 2 月 13 日宣布 kernel.org 成为 CNA](https://www.cve.org/Media/News/item/news/2024/02/13/kernel-org-Added-as-CNA)。其[当前 partner scope](https://www.cve.org/PartnerInformation/ListofPartners/partner/Linux)覆盖 kernel.org 列出的、仍处于支持期的 Linux 内核，不覆盖已经 EOL 的上游版本。发行版私有补丁、已经离开 kernel.org 支持期但仍由厂商维护的内核，以及具体二进制包的状态，属于 [[Linux 发行版内核安全维护\|Linux 发行版内核安全维护]] 的判断范围。这里的“不覆盖”只是 Linux CNA 的 scope 边界：其他适当 CNA 或 CNA-LR 仍可能为 EOL 产品分配记录；同一弱点若同时影响受支持与 EOL 版本，不应复制成两个 CVE ID。

2024 年并入主线文档的[首版 CVE 流程提交](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/Documentation/process/cve.rst?id=5928d411557ec5d53832cdd39fc443704a3e5b77)把编号工作嵌入既有维护链，而不是另建一条先定级、后修复的安全流水线。当前[官方流程](https://www.kernel.org/doc/html/latest/process/cve.html)采取谨慎分配原则：由于内核配置、攻击面和未来用途难以穷尽，一个进入受支持 stable 树的潜在安全修复通常可以获得 CVE；这不等于每个构建或部署都可利用。

## 从修复到记录

典型路径是：

1. 未公开且符合内核安全威胁模型的问题先走 [[Linux 内核安全报告流程\|Linux 内核安全报告流程]]：直接报告相关 subsystem maintainers，并按团队规模和求助需要抄送 `security@kernel.org`；仅无法识别维护者时才单独联系该私密列表。security team 协助验证与修复，但不分配 CVE，也不是公开披露频道。
2. 修复进入主线并被纳入受支持的 [[Linux 内核 stable 与 LTS 维护\|Linux 内核 stable 与 LTS 维护]] 流程。官方规则通常要求修复进入 stable 树后再分配 CVE；确有需要时，可向 `cve@kernel.org` 提前申请保留编号。
3. Linux CNA 团队把受影响与修复提交、版本范围和说明发布为 CVE Record，并同步到 CVE List；可审计材料保存在 [[Linux kernel CVE repository\|Linux kernel CVE repository]]。
4. 初始记录与 REJECTED 通知通过 [[linux-cve-announce\|linux-cve-announce]] 发布。该列表是 announcements-only、moderated 的公告通道，不是独立决策者；后续 stable backport 引起的版本矩阵更新通常只改 CVE.org/JSON，并不重发邮件。
5. [[National Vulnerability Database\|National Vulnerability Database]] 等聚合系统再消费 CVE Record，补充 CPE、CWE、[[Common Vulnerability Scoring System\|Common Vulnerability Scoring System]] 等 enrichment；发行版则按自己的版本、配置、backport 和包生命周期给出产品状态。

官方流程还提醒：稳定版修复往往有依赖，应整体升级到最新 stable release，而不是只按 CVE 逐个 cherry-pick。某个修复没有 CVE 也不表示它与安全无关。

## 责任分层

| 层 | 回答的问题 | 不负责什么 |
|---|---|---|
| Linux kernel CNA | 哪个上游内核问题获得哪个 CVE；记录如何更新或拒绝 | 不替所有部署给出统一风险结论 |
| `security@kernel.org` | 未公开问题如何私密报告、验证并推动修复 | 不分配 CVE，不是公告列表 |
| 主线、stable 与 LTS 维护者 | 修复如何进入主线、回移并随上游版本发布 | 不决定发行版私有包的最终状态 |
| `linux-cve-announce` | 初始分配与 REJECTED 事件如何公告 | 不独立认定漏洞或打分，也不保证承载后续版本矩阵更新 |
| CVE Program | 授权 CNA，并维护全球 CVE 标识、记录与争议规则 | 不替代产品厂商的适用性判断 |
| [[MITRE\|MITRE]] | 当前承担 CVE Secretariat，并作为 kernel.org 的 TL-Root 与 CNA-LR | 在 kernel.org scope 内不是一线 Linux CVE 分配者 |
| NVD/NIST | 基于公开资料补充 reference、CPE、CWE、CVSS 与 configuration applicability mapping | 不分配 Linux CNA 范围内的编号，也不主动测试；其映射不是厂商版本裁决 |
| [[CVE Authorized Data Publisher\|CVE Authorized Data Publisher]] | 向 CVE Record 增补带 provider attribution 的 container | provider enrichment 不自动代表 CNA 或产品厂商结论 |
| [[CISA Known Exploited Vulnerabilities Catalog\|CISA Known Exploited Vulnerabilities Catalog]] | 是否已有足以收录的在野利用证据 | 不证明所有 Linux 配置都可利用 |
| 发行版安全团队 | 某 release、flavour、source/binary package 是否受影响及何时修复 | 其结论不能自动外推到其他产品 |

在 Linux CNA 对某项 upstream change 的 CVE 进行 dispute 或 modify 的语境中，官方文档把技术权限归于相关 subsystem maintainer；发行版仍独立判断自身产品与包的适用性，并可按 CVE Program 正式流程提交证据。争议可逐级升级至 Root、TL-Root 或 Council of Roots，技术判断权与记录裁决权不能压成同一层。

## CVE 不等于风险

一个可操作的判断链是：

**CVE 标识 → 产品适用性 → 技术严重度 → 现实可利用性 → 组织风险**

- **CVE 标识**：给公开弱点一个稳定 ID，并保留描述、参考资料和变更历史。
- **产品适用性**：目标内核是否包含引入提交，修复是否已 backport，相关代码是否编译，CONFIG 是否启用，接口是否可达；产品／包身份、NVD 配置、供应商状态与本地证据的完整连接见 [[CPE 与 CVE 资产适用性\|CPE 与 CVE 资产适用性]]。
- **技术严重度**：CVSS 描述一组技术影响与攻击前提。FIRST 明确提醒，base score 不是风险，不能单独用于补丁优先级。
- **现实可利用性**：还需权限、命名空间、硬件、缓解措施、PoC 和在野情报。KEV 是已知在野利用目录；[[Exploit Prediction Scoring System\|Exploit Prediction Scoring System]] 是未来一段时间内被利用的概率模型；二者都不是 CVE 编号本身。
- **组织风险**：再叠加资产价值、外部暴露、业务影响、现有补丁与本地威胁模型。

美国 FCEB 的 [[CISA BOD 26-04\|CISA BOD 26-04]] 把公网暴露、KEV、利用自动化与技术影响映射为逐资产修复期限，是这条分层链的一项制度化应用；它不是所有 Linux 部署或私人组织的统一 SLA。

三个常见误读应分开：

- **REJECTED** 表示该 CVE ID 已失效，原因可能是重复、撤回、错误分配或行政处理；不自动证明底层 bug 从未存在。
- **发行版标为 Not affected** 表示特定产品、版本、配置或补丁集不可达；不自动证明上游记录是误报。
- **NVD 没有 CVSS** 可能只是尚未或不计划 enrichment；不等于低危，也不等于不可利用。

## 规模跃升与下游筛选

CNA 团队成员 Lee Jones 对早期流程的说明显示，在 v6.7.1 至 v6.8.9 的 16,514 个 stable commits 中，团队分配了 863 个 CVE，约占 5%。这是“候选修复占该段 stable commits”的快照，不是 2024 年全年漏洞总数，也不是严重漏洞比例。

[Red Hat 2024 年产品安全报告](https://www.redhat.com/rhdc/managed-files/rh-product-security-risk-report-2024-1880602pr-202504-en%20%281%29.pdf)记录 kernel.org 当年分配 4,465 个 CVE，其中 2,009 个（45%）影响当时的 RHEL kernels，2,456 个不影响。这个差异展示了产品筛选的必要性，不能外推为“55% 的上游 CVE 都是错误的”。

[SUSE 2024 年报告](https://documentation.suse.com/en-us/sbp/security/html/SBP-SUSE-security-report-2024/index.html)把状态进一步拆开：代码未编译或 CONFIG 关闭属于产品不可达；另一些条目是在 SUSE Linux 威胁模型下判为无可利用风险或 Won’t Fix，root/CAP_SYSADMIN-only 场景则需个案判断。Siemens/CIP 2025 工业演示得到 90%–95% 不相关，但该数字只适用于 CIP kernels 与其 defconfig，不能代表通用发行版。跨厂商共享基础分析及其有限覆盖另见 [[Linux CVE Workgroup\|Linux CVE Workgroup]]。

这些结果支持一个更窄的结论：系统性编号扩大了可审计范围，也把大量产品适用性和威胁建模工作留给了下游。

## 争议与纠正

CVE-2024-35906 与 CVE-2024-35881 展示了一个可核验的误分配链：同一开发版中的修复与随后 revert 分别获得 CVE。SUSE 工程师 Michal Hocko 公开指出两项只短暂存在于 6.9-rc1；Greg Kroah-Hartman 随后承认 revert 缺少 `Fixes:` tag，自动检查因此漏掉。两个编号后来都被标记为 REJECTED。

这个案例证明流程会发生、也能纠正人为和元数据错误；它不能用来估算总体“假漏洞率”。2024 年 6 月的早期快照曾记录 65 个 reject，但其中包含重复编号等不同原因，分母与类别都不足以支持误报率推断。

CVE-2024-35918 则是在安全维护者 Kees Cook 反对其漏洞定性后，由 CNA 依据邮件讨论标为 REJECTED。该案说明相关维护者的公开技术异议可以促成 CNA 更改记录，而不是说明所有安全加固提交都不应获得 CVE。

## 一个分层实例

CVE-2024-53197 的[官方 CVE Record](https://raw.githubusercontent.com/CVEProject/cvelistV5/main/cves/2024/53xxx/CVE-2024-53197.json)中，Linux CNA container 提供受影响与修复提交，但没有 CVSS；CISA 的 ADP container 后加 CVSS 3.1 7.8、SSVC active exploitation 与 KEV 信息。[Ubuntu 产品页](https://ubuntu.com/security/CVE-2024-53197)把优先级设为 High，并明确归因于 KEV，同时在不同 release/flavour 上分别给出 Fixed、Not affected 和 Ignored。[SUSE 产品页](https://www.suse.com/security/cve/CVE-2024-53197.html)则给出自己的产品评分。

因此，同一个页面或 JSON 中可以同时存在 CNA 事实、不同 provider 的评分、利用情报和多个发行版状态。引用时必须保留 provider 与产品范围，不能选一个数字当作“所有 Linux 的统一风险”。

## 证据边界

- 尚无覆盖 2024–2026、逐条审计且把 duplicate、administrative rejection 与真正误分配分开的完整撤回率。
- NIST 对 NVD backlog 的说明指向全生态记录增长、资源和数据导入变化；没有证据证明 Linux CNA 是 backlog 的主要或直接原因。
- 六条 LTS 分支的[MSR 2026 研究](https://arxiv.org/abs/2601.22196)发现 6,464 个 unique CVEs 中 58% 有 CVSS v3.1 metadata，但其“修复延迟”从引入提交算起，且引入点存在推断误差；不能把结果泛化为全部内核或 disclosure-to-fix 时长。
- [KernJC](https://arxiv.org/abs/2404.11107)在 66 个有 PoC 的样本中发现 48.5% 需要非默认配置，并识别出 NVD 版本范围错误；论文于 2024 年 4 月提交，样本覆盖此前五年，它不是对新 CNA 后记录质量的评估，不能用于断言新制度制造了这些错误。
- 没有 CVE、没有 CVSS 或未进入 KEV 都是“某层记录缺失”，不是安全性的反证。

## 相关页面

- [[Linux 内核\|Linux 内核]]
- [[CVE Numbering Authority\|CVE Numbering Authority]]
- [[CVE Authorized Data Publisher\|CVE Authorized Data Publisher]]
- [[MITRE\|MITRE]]
- [[Linux kernel CVE repository\|Linux kernel CVE repository]]
- [[linux-cve-announce\|linux-cve-announce]]
- [[Linux 内核安全报告流程\|Linux 内核安全报告流程]]
- [[Linux 内核 stable 与 LTS 维护\|Linux 内核 stable 与 LTS 维护]]
- [[National Vulnerability Database\|National Vulnerability Database]]
- [[Linux 发行版内核安全维护\|Linux 发行版内核安全维护]]
- [[Common Vulnerability Scoring System\|Common Vulnerability Scoring System]]
- [[CISA Known Exploited Vulnerabilities Catalog\|CISA Known Exploited Vulnerabilities Catalog]]
- [[Exploit Prediction Scoring System\|Exploit Prediction Scoring System]]
- [[Linux CVE Workgroup\|Linux CVE Workgroup]]
- 原始资料快照（本地归档）
