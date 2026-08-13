---
{"dg-publish":true,"permalink":"/Hugging Face Content Policy/","title":"Hugging Face Content Policy","tags":["#Hugging Face","#平台治理","#内容审核","#数据治理","#权利边界"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"Hugging Face Content Policy","source_count":14,"sources":["raw/2026-08-10-Hugging-Face-Content-Policy版本与执行边界核验.md","raw/2026-08-10-数据集许可证漂移与Data-Provenance审计.md","https://huggingface.co/content-policy","https://huggingface.co/terms-of-service","https://huggingface.co/privacy","https://huggingface.co/blog/content-guidelines-update","https://web.archive.org/web/20250321014135/https://huggingface.co/content-policy","https://huggingface.co/docs/hub/moderation","https://cdn-media.huggingface.co/landing/assets/DSA_HF_2025.pdf","https://www.nature.com/articles/s42256-024-00878-8","https://proceedings.iclr.cc/paper_files/paper/2024/hash/8c67fc501a50977947c5bebbc39ca8f6-Abstract-Conference.html","https://facctconference.org/static/docs/facct2025-206archivalpdfs/facct2025-final603-acmpaginated.pdf","https://huggingface.co/litert-community","https://huggingface.co/datasets/bloomberg/entsum/discussions/2"],"tags":["#Hugging Face","#平台治理","#内容审核","#数据治理","#权利边界"],"created":"2026-08-10","updated":"2026-08-10"}}
---


# Hugging Face Content Policy

Hugging Face Content Policy 是 Hub 上机器学习制品与社区内容的准入、举报和处置规则。它被并入 [[Hugging Face 服务条款\|Hugging Face 服务条款]]，但不是模型或数据集许可证，也不是参与者同意书、隐私合规证书、权属审计或平台预审合格证。仓库仍在线、设为 public／private／gated、带有 license tag 或未被举报，都不能单独证明来源合法、授权链完整或个人信息处理合规。

<!-- issue: luwiki-s9t -->

## 当前版本与可复核历史

截至 2026-08-10，官方 live page 标示 **Effective Date: 2025-04-10**，没有独立的版本号、Last updated、逐版差异或不可变 revision。政策说明修改在网站发布十天后生效，继续使用平台被视为接受；因此页面上的“生效日”不能被当作当前每个段落的最后编辑日。

Internet Archive 对 content-policy URL 可返回的首个 memento 是 2025-03-21。该快照仍显示 **Effective Date: 2023-08-30**；2025-04-25 的快照已经是 2025-04-10 版。归档只能把切换窗口夹在两次抓取之间，不能证明精确发布日期。现行页后来还链接 2025 年 DSA 透明度报告并加入澳大利亚补充条款，却没有为这些追加段落提供单独日期。2023-06-15 的官方博客曾宣布更新 Community Policy 并把 consent 作为核心价值，但博客发布日期、旧页生效日和现行页生效日不是同一个版本标识。

更早的 content-guidelines URL 显示：2022 初版用 Technical／Human Content 与三级处置；2023-06-09 生效的重写版首次明确并入 ToS、定义 ML Artifacts 与四种仓库状态；2023-08-30 版主要新增禁止以 proxy 绕过原服务商限制。官方没有集中 changelog，Wayback 抓取日只能证明“当时已可见”。

| 维度 | 2023 版（2025-03-21 快照） | 2025-04-10 版 |
|---|---|---|
| 结构 | 把内容分为 Restricted 与需协作处理的 Moderated Content | 把限制内容归为五组，再用统一的举报、审核和申诉流程处置 |
| 响应承诺 | 报告 ML artifact 后“通常约 72 小时”供 owner 回应 | 删除 72 小时口径；没有固定审核、移除或申诉 SLA |
| 工具 | 细列 documentation、gating、private、NFAA、downgrade、disable 与社区警告层级 | 概括为协作修改、unrank、NFAA、remove／disable、限制互动、停号／销号 |
| 同意与隐私 | 明列“未经被呈现者明确同意发布”以及未满 13 岁个人信息的移除条款 | 明列第三方私人信息须有明确许可、非自愿性内容受限；同时保留开放式“consent 是核心价值”条款 |
| 纠错 | 只有较简短的 IP 投诉入口 | 明确 DMCA counter-notice、14 个美国工作日窗口，以及一般 moderation 申诉和 DSA 庭外争议渠道 |

版本变化说明制度设计发生过实质调整；不能拿旧版 72 小时窗口、旧 NFAA 分类或旧社区警告层级解释当前个案。澳大利亚附加段可由快照界定为 2025-06-04 后、07-04 前出现；DSA 报告链接从 2024 换为 2025 可界定在 2025-12-01 后、2026-01-16 前，但页面 Effective Date 均未随之改变。

## 覆盖对象与仓库状态

“Content”覆盖网站或 Hub 上发布、展示或访问的代码、数据、文本、图像、用户名、应用和软件。政策进一步区分：

- **ML Artifacts**：Models、Datasets、Spaces 等仓库代码与制品；
- **Community Content**：讨论、评论、用户名、README、model/data card、pull request 与 merge 等。

Repository 的四种状态首先是可见性或访问状态：

| 状态 | 政策能确认 | 不能据此推出 |
|---|---|---|
| Public | 互联网任何人可见；只有 owner 或组织成员可修改 | public domain、OSI／CC 许可、第三方权利已清理或任意站外使用 |
| Private | 只有 owner 与组织成员可见和修改 | 绝对保密、NDA、采集合规或平台不可能依法访问／披露 |
| Gated | 页面与社区内容公开，artifact 须接受 click-through 或经维护者批准 | 审核认证、数据主体同意、下载后用途控制或本地副本可远程删除 |
| Disabled | 除 owner 外的社区成员被阻断访问 | 物理删除、最终违法裁定、既有许可撤销或下游副本召回 |

owner 主动设置 gate 与平台依 moderation 决定 disable 是两个动作。前者控制当前账号能否取件；后者是平台处置。[[Hugging Face Gated Repositories\|Hugging Face Gated Repositories]] 的申请人被拒或取消访问，不在现行政策明确列举的正式申诉对象中。

## 受限内容

现行政策把受限内容列为五组，同时保留随机器学习风险演化处理其他内容的开放条款：

1. **违法内容**：违反适用法律，或推动武器、非法药物、诈骗、赌博、伪药品、抄袭等高风险非法活动；
2. **欺诈或恶意活动**：诽谤、故意欺骗、虚假信息、钓鱼、诈骗、虚假身份／行为、违法金融交易及无证医疗／法律／金融服务；
3. **有害或滥用内容**：伤害个人或群体、歧视、仇恨、骚扰、霸凌、贬损，未经明确同意制作或用于骚扰的性内容，未成年人性内容，恐怖主义或美化暴力、痛苦与羞辱；
4. **隐私与知识产权**：未经明确许可发布他人私人信息，或侵犯第三方知识产权；
5. **平台滥用、安全与垃圾内容**：破坏系统、恶意代码、未授权 bot／远程管理、无关或过量托管、绕过限制、操纵 likes、挖矿与 spam。

“subject to immediate action”表示平台保留立即行动权，不等于承诺固定分钟或小时内移除，也不表示所有上传物都经过事前扫描。澳大利亚附加条款另要求上传者、特别是 ML artifact 上传者采取适当措施，降低生成儿童性剥削材料或亲恐材料的风险；其监管范围和证据边界另见 [[澳大利亚指定互联网服务DIS标准\|澳大利亚指定互联网服务DIS标准]]。

## 举报、审核、移除与申诉

一般举报可通过平台内 Report 或 safety@huggingface.co 提交。Repository 举报会建立公开 report 并通知团队；Posts／Comments 举报直接通知团队。报告本身属于 Community Content，滥用举报也可能被处置。平台还可依据社交媒体线索、自动检测或内部问题主动 flag；这些通道的存在不等于全量预审。

审核流程是逐案、迭代判断内容是否及在何种条件下可以继续托管。可能措施包括：

- 请求 owner 协作或修改；
- unrank；
- 加 Not For All Audiences（NFAA）标签；
- remove 或 disable；
- 限制互动；
- suspend 或 terminate account。

政策没有定义 remove 是否等于物理删除，也没有给历史 revision、缓存、备份、恢复或最终删除期限。disabled 只被定义为阻断非 owner 访问，不能推出此前下载已消失。

知识产权争议另走 DMCA：权利主张方向 dmca@huggingface.co 提交通知；平台核查法律要件与滥用后通知上传者并 disable；上传者可交 counter-notice；合格反通知后，原主张方有 14 个美国工作日采取法律行动阻止恢复。DMCA 只解决特定版权程序，不覆盖全部隐私、数据保护、合同、商标或 consent 争议，也不是法院对权属的最终裁判。

对 disable content、suspend 或 terminate account 的一般 moderation 决定，用户可向 legal@huggingface.co 提交理由与证据。政策承诺复核和回复，但未给时限、执行暂停或临时恢复规则，也未明确把 unranking、NFAA、互动限制或维护者拒绝 gated access 纳入同一申诉保证。EU 路径还允许诉诸经认证的 DSA 庭外争议解决机构；这不是全球用户当然享有的同一外部救济。

## 权利、隐私与 consent 的边界

Content Policy 规定上传内容不得侵犯第三方隐私或知识产权，但没有要求每个训练数据集上传前统一提交 consent form、IRB、provenance manifest、PII 扫描报告、敏感属性清单或数据主体删除 SLA。Hugging Face 对平台用户自身个人信息的处理另受 [[Hugging Face 隐私政策\|Hugging Face 隐私政策]] 约束；该政策不能替代上传者对数据集中第三方个人信息的责任。

制品许可仍应分别核对 [[Hugging Face 服务条款\|Hugging Face 服务条款]]、仓库 card／LICENSE、custom gate 条款、上游来源和适用法。Content Policy 可触发 moderation，却不会创造上传者原本没有的版权、肖像权、数据保护基础或再分发权。[[数据集许可证漂移\|数据集许可证漂移]] 尤其说明平台元数据与上游许可不能只核一个端点。

## 外部执行证据

<!-- issue: luwiki-ne0 -->

- **许可证与来源链。** Nature Machine Intelligence 2024 的分母是 44 个常用 alignment collections 中 1,858 条、允许重叠的 constituent-dataset records，不是 Hub 全库随机样本。Table 2 可复算：Hugging Face 未指定许可为 69.38%，与人工重标用途类别不一致为 64.75%（正文写 66%），平台标签过度宽松为 27.18%；三者不能混成一项“违法率”。无原作者重叠的 JCSS 2024 对 65,761 个 Hugging Face dataset repositories 又发现 72.13% 无 license tag，独立支持“缺失普遍”，但没有核对原作者许可。完整口径与后续跨平台证据见 [[数据集许可证漂移\|数据集许可证漂移]]。
- **卡片披露。** ICLR 2024 分析 7,433 张 Hugging Face dataset cards：下载量前 100 的建议栏目完整率为 86.0%，零下载组只有 7.9%；热门卡片中“使用数据的考虑”仅占约 2.1% 文本。它测的是文档，不是违法率或 PII 含量；结论是 card 存在不能替代授权与来源审计。
- **同意执行压力测试。** FAccT 2025 在截至 2024-12 的公开样本识别接近 200 个 Stable Diffusion／Flux deepfake variants，所查 model cards 未发现被呈现者 consent 说明，据此判断执行似乎偏反应式。研究针对 2023 版政策、只看公开模型且没有生成图片核验输出，不能直接证明 2025 版仍以同样方式失效。
- **第三方采用。** Google AI Edge 的 LiteRT Community 要求投稿遵守本政策、说明训练数据并确认 PII 已清除；同页却允许无许可证模型，并明确团队不主动审核社区贡献、只对明显 spam／abuse 反应式移除。采用一项平台政策不等于第三方完成实质审查。
- **DMCA 纠错个案。** Bloomberg Entsum 讨论记录：纽约时报代理人通知后平台先移除访问，进一步分析发现数据不含 NYT corpus，次日恢复。它证明 disable 与恢复都实际发生，不提供总体错误率、处理时长分布或下游副本状态；后续档案审计见 [[Hugging Face Legal Takedown Repository\|Hugging Face Legal Takedown Repository]]。
- **平台自报。** [[Hugging Face DSA Transparency Report 2025\|Hugging Face DSA Transparency Report 2025]] 报告 2025 年内部申诉 86 宗，其中 62 宗维持、24 宗推翻；PDF 同时保留大量 YYYY-MM-DD、空值和模板行。数字是平台自报而非监管审计，需先区分实际观测与未填模板字段。

[[模型市场治理\|模型市场治理]] 的关键难题由此可见：license、card、gating、NFAA、自动检测、人工协作、disable 和申诉是相互衔接但不可互相替代的工具。Gorwa 与 Veale 对 Hugging Face、GitHub 与 Civitai 的比较把这些工具概括为重要但有限的治理手段；其材料主要观察 2022–2023 年演化，不是现行政策效果评估。截至 2026-08-10，本轮没有找到 Arcom、欧委会或 eSafety 对 Hugging Face Content Policy 作出的公开最终违法裁决或合规认证。

## 核验清单

审计某个 Hub artifact 时，至少分别记录：

1. policy live URL、生效日、访问日与固定快照；
2. repository immutable revision 及 public／private／gated／disabled 状态；
3. card license、LICENSE、custom terms 与上游逐层许可；
4. consent、PII、参与者通知／撤回、IRB 或其他实际适用依据；
5. report、NFAA、unrank、disable、remove 与 account action 的具体事件；
6. 一般申诉、DMCA counter-notice 和监管外部救济是否适用；
7. 既有下载、缓存、镜像、衍生数据和模型是否有独立召回机制。

这是一项政策与证据审计，不是法律意见。

## 相关页面

- [[Hugging Face 服务条款\|Hugging Face 服务条款]]
- [[Hugging Face Gated Repositories\|Hugging Face Gated Repositories]]
- [[Hugging Face 隐私政策\|Hugging Face 隐私政策]]
- [[Hugging Face DSA Transparency Report 2025\|Hugging Face DSA Transparency Report 2025]]
- [[Hugging Face Legal Takedown Repository\|Hugging Face Legal Takedown Repository]]
- [[数据集许可证漂移\|数据集许可证漂移]]
- [[模型市场治理\|模型市场治理]]
- [[澳大利亚指定互联网服务DIS标准\|澳大利亚指定互联网服务DIS标准]]
- [[具身智能数据基础设施\|具身智能数据基础设施]]
- [[人类活动数据\|人类活动数据]]

## 证据

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [Hugging Face Content Policy](https://huggingface.co/content-policy)
- [2025-03-21 Internet Archive snapshot](https://web.archive.org/web/20250321014135/https://huggingface.co/content-policy)
- [Hugging Face Terms of Service](https://huggingface.co/terms-of-service)
- [2023 Community Policy announcement](https://huggingface.co/blog/content-guidelines-update)
- [Hugging Face DSA Transparency Report 2025](https://cdn-media.huggingface.co/landing/assets/DSA_HF_2025.pdf)
- [A large-scale audit of dataset licensing and attribution in AI](https://www.nature.com/articles/s42256-024-00878-8)
- [Navigating Dataset Documentations in AI](https://proceedings.iclr.cc/paper_files/paper/2024/hash/8c67fc501a50977947c5bebbc39ca8f6-Abstract-Conference.html)
- [Deepfakes on Demand](https://facctconference.org/static/docs/facct2025-206archivalpdfs/facct2025-final603-acmpaginated.pdf)
- [LiteRT Community submission policy](https://huggingface.co/litert-community)
- [Bloomberg Entsum DMCA discussion](https://huggingface.co/datasets/bloomberg/entsum/discussions/2)



## 在模型市场三段治理链中的位置（2026-08-10）

[[模型市场治理\|模型市场治理]] 将生产端预防、分发前控制和分发后响应分开后，本政策主要覆盖第三段，并向第二段延伸：NFAA、unrank、disable／remove、账号措施和申诉属于分发后响应；owner gate 是分发前访问控制；malware／Pickle scanner 又是另一条制品安全链。license、card、consent、hash／签名和安全格式仍须独立核验，不能由“政策未处置”反推已通过权利或安全审查。

2025 DSA 报告的 5,859 项 solely automated measures、147,144 项非自动措施和 24 次申诉推翻能够证明行动与纠错存在，但其由 24／5,859 得出的 99.59 同时被填作 accuracy、precision、recall；没有 false-negative 分母便不能测 recall，也不能把活动量写成下游伤害降幅。跨平台机制、恶意制品事件、扫描器 benchmark 与因果证据缺口见 原始资料快照（本地归档）。
