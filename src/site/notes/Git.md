---
{"dg-publish":true,"permalink":"/Git/","title":"Git","tags":["version-control","open-source-governance","software-history","software-supply-chain"],"created":"2026-08-11","updated":"2026-08-11","dg-note-properties":{"status":"processed","title":"Git","aliases":["Git SCM"],"tags":["version-control","open-source-governance","software-history","software-supply-chain"],"sources":["raw/2026-08-11-Git历史治理许可与维护边界核验.md"],"created":"2026-08-11","updated":"2026-08-11"}}
---


# Git

Git 是由 [[Linus Torvalds\|Linus Torvalds]] 在 2005 年启动的分布式版本控制系统，也是一个持续由公开邮件列表、具名维护者和法律／行政承载机构共同维持的软件项目。它把文件树的版本表示为由对象哈希连接的快照与提交图，使每个完整仓库都能在本地保存历史、创建分支和完成大量操作；这套数据模型并不意味着项目治理没有集成中心，也不等于托管平台 GitHub。

截至 2026-08-11，Git 官方手册仍写明项目由 Torvalds 发起、当前由 [[Junio C Hamano\|Junio C Hamano]] 维护。技术贡献主要在 `git@vger.kernel.org` 邮件列表审查，由维护者把 topic 从临时集成推进到发布分支；[[Software Freedom Conservancy\|Software Freedom Conservancy]]（SFC）承担 Git 的非营利法人、财务、合同和商标支持；[[Git Project Leadership Committee\|Git Project Leadership Committee]]（PLC）代表项目处理 SFC 与行为准则事务。这些角色不能彼此替换。

## Git 解决的是什么问题

Git 的逻辑模型是“快照加历史图”，不是把版本首先理解为逐文件差异链：每个提交指向一棵目录树、父提交和作者／提交者等元数据；blob、tree、commit 和 tag 等对象由内容导出的标识连接。底层 packfile 可以用 delta compression 节省空间，但这不改变上层对象和提交图的语义。

官方简史把最初目标概括为：速度、简单设计、强非线性开发支持、完全分布式，以及高效处理 Linux 内核规模。2005 年同期邮件还显示，更具体的约束是保留可信子维护者之间的分布式拉取／合并，让数百个补丁的整合可交互完成，并避免中央提交服务器或 Torvalds 的邮箱成为唯一瓶颈。

| 机制 | 提供的能力 | 不能推出 |
| --- | --- | --- |
| 每个开发者可持有完整仓库 | 大量浏览、提交、分支和合并可在本地完成；远端可有多个 | 分布式数据复制不等于没有维护者、发布分支或社会权威中心 |
| 内容寻址对象 | 内容改变会改变对象标识；历史对象间的引用可被一致性检查 | 哈希不证明作者身份、内容真实、代码安全或历史在语义上正确 |
| 提交有父节点 | 分支与合并形成有向无环图，可表达并行开发 | 图结构不自动决定哪条分支是官方发布，也不替代审查 |
| 暂存区／index | 把工作树修改与下一次提交的内容分开 | 不是远端 staging 环境，也不等于每个工作流都必须逐文件暂存 |

Git 最初使用 SHA-1。2017 年公开碰撞促使项目部署已知碰撞检测和更强的过渡安排；加固 SHA-1 能阻断已知攻击路径，却不会让 SHA-1 恢复为现代强哈希。Git 已支持选择 SHA-256 对象格式，但旧客户端、仓库互操作、协议和托管生态仍使默认切换成为长期迁移，而不是替换一个函数即可完成。详见 [[Git 哈希函数迁移\|Git 哈希函数迁移]]。

## 从 BitKeeper 断裂到自托管

Linux 内核自 2002 年起使用当时专有的 [[BitKeeper\|BitKeeper]]。它提供的分布式拉取、合并和维护者网络适合内核规模，却使开放源码项目依赖一套带免费使用条件的专有基础设施。2005 年合作与许可关系破裂后，Git 在数日内从原型进入自托管，并在数月内承接内核主线工作流。

| 日期 | 里程碑 | 边界 |
| --- | --- | --- |
| 2005-04-06 | Torvalds 宣布 Linux 内核不再使用 BitKeeper，并要求维护者准备可独立传递的补丁 | 当事人对 Andrew Tridgell 的互操作实验及其许可含义存在公开冲突；没有找到法院裁判证明其“非法破解” |
| 2005-04-07 | Git 首个可核验提交 `e83c516…`，含 11 个文件、1,244 行；README 称其为内容跟踪器 | 这是初始核心和可自托管里程碑，不是“完整 Git 已经写完” |
| 2005-04-16 至 04-21 | Linux 主线建立 Git 快照、完成实际合并，并发布首个完全以 Git 整合的预发布版本 | 快照、首次合并和可发布内核是不同里程碑，不能压成“十天完成” |
| 2005-06-17 | Linux 2.6.12 正式发布 | 说明新工作流进入正式发布周期，不代表后续对象格式、传输、porcelain 和治理已定型 |
| 2005-07-26／27 | Torvalds 把 Git 的正式维护职责交给 Hamano，自己继续贡献并回到内核主线 | 日期差来自邮件时区；交接不是 Torvalds 退出项目，也不是版权或商标转让 |

Git 的思想来源并非单一路线。Torvalds 后来把 BitKeeper 的分布式工作流、补丁序列中的 index／cache 思路和 [[Monotone（版本控制系统）\|Monotone]] 的哈希对象模型称为三个重要来源。Git 因而既不是 BitKeeper 的简单克隆，也不是脱离既有版本控制实践的凭空发明。BitKeeper 于 2016 年改以 Apache 2.0 发布；描述 2005 年事件时应保留“当时的专有许可”这一时间限定。

## 创建者、维护者与制度承载

| 层级 | 可核验职责 | 不拥有／不等于 |
| --- | --- | --- |
| [[Linus Torvalds\|Linus Torvalds]] | 创建初始对象模型与实现，并用 Git 承接 Linux 内核工作流 | 当前日常 Git 发布维护者；全部贡献版权或 Git 商标的个人所有人 |
| [[Junio C Hamano\|Junio C Hamano]] | 在项目最初数日内参与，2005 年 7 月后长期承担技术整合、分支推进和发布维护 | Git 的公司所有者；SFC 法律主体；凭个人身份拥有全部代码与商标 |
| 邮件列表、审阅者与子系统维护者 | 公开讨论、测试、评审和形成 topic 共识 | 每个参与者都有同等发布权；GitHub pull request 是唯一贡献入口 |
| [[Git Project Leadership Committee\|Git Project Leadership Committee]] | 与 SFC 沟通，处理项目行政／法律事务和行为准则执行 | 技术 steering committee、发布委员会或对每个补丁的合并机关 |
| [[Software Freedom Conservancy\|Software Freedom Conservancy]] | 非营利法人、独立项目账户、捐赠、合同和商标支持 | Git 技术路线制定者；Git 全部代码版权的集中持有人 |
| GitHub | Git 源码的 publish-only 镜像和 GitGitGadget 等桥接入口 | Git 软件、项目或 `git-scm.com` 的当然所有者 |

这形成一种“分布式参与、集中整合、法律行政外置”的治理结构。代码可以从多个仓库交换，讨论与审查有复数参与者，但进入 `next`、`master`、`maint` 和正式 tag 仍依赖维护流程与具名责任。现有证据不足以把 Git 称为“一人项目”，也不足以把长期集成集中量化为 bus factor 等于 1。

## 贡献、分支与发布

Git 官方贡献流程以邮件补丁为主。topic 首先可能进入 `seen` 作临时集成；这不代表接受。讨论形成共识并达到质量要求后，维护者在审阅者协助下把 topic 推进至 `next`，稳定后再进入 `master`。维护版通常从 `maint` 发布，功能版从 `master` 发布，并创建签名 tag。官方 GitHub 仓库明确是 publish-only mirror；pull request 可以借 GitGitGadget 转为邮件列表补丁，但平台界面没有取代上游评审路径。

`seen`、`next`、`master`、`maint` 的精确语义、topic 推进和签名发布由 [[Git 发布分支治理\|Git 发布分支治理]] 持续核验。

贡献者的 `Signed-off-by` 对应 [[Developer Certificate of Origin\|Developer Certificate of Origin]]：提交者声明自己创作了材料或有权按相应许可证传递，并同意该公开记录长期保存。这是来源和提交权限证明，不是 CLA、版权转让、密码学签名，也不能解决雇佣关系下的实际版权归属。

当前 `SubmittingPatches` 还单列生成式 AI 边界：项目认为把 DCO 适用于大量 AI 生成内容仍有法律不确定性，并会拒绝看似由 AI 生成、或提交者无法理解和解释的内容；谨慎的辅助性使用没有被一概禁止。它是访问日可核验的项目贡献政策，不是 Git 软件许可证的新增条款，也不能外推为所有开源项目的统一规则。形成过程、版本和执行证据由 [[Git 项目的生成式 AI 贡献政策\|Git 项目的生成式 AI 贡献政策]] 后续核验。

敏感漏洞不在公开列表直接披露，而通过私有 `git-security` 协调；上游会与发行版、打包者及嵌入 Git 的客户端准备 embargoed release。[[Git 安全响应机制\|Git 安全响应机制]] 负责追踪这条供应链。跨组织协同不等于 Git、GitHub、Git for Windows、Visual Studio 或各 Linux 发行版共享同一个安全边界。

## 代码许可、版权与商标

Git 顶层 `COPYING` 采用 GPL-2.0-only；README 同时说明若干部件另有 GPLv2-compatible 许可。因此“整个仓库每个文件都采用完全相同许可证”和“GPLv2 or later”都不准确。贡献者通过 DCO 证明传递权，没有公开证据显示项目要求把版权统一转让给 Hamano 或 SFC；Git 的项目状态报告也明确称 SFC 不持有 Git 代码版权。

代码许可与项目名称是两层权利。SFC 代表 Git Project 持有 `Git` 文字和 logo 等商标权，美国注册号为 4,680,534。政策允许事实性指称、基本未修改的 Git、组件说明、符合条件的派生项目和 `[产品] for Git` 等使用，同时禁止制造官方关联、继任、来源或背书混淆。GitHub 与 GitLab 是政策形成前已有的命名许可例外；这种例外不赋予它们 Git 的技术治理权。许可范围与例外由 [[Git 商标治理\|Git 商标治理]] 继续维护。

[[git-scm.com\|git-scm.com]] 的网站内容也不是单一许可：网站基础内容／设计、Pro Git 图书和从 Git 项目导入的 reference manual 分别有不同许可。不能把“Git 是 GPLv2”机械扩张为所有相关网站、书籍、logo 和托管服务都受同一许可证支配。

## SHA-256 与 Git 3.0 是迁移议程，不是既成事实

Git 当前的 SHA-256 支持与 Git 3.0 计划需要分开：前者是已经存在但仍受互操作限制的仓库格式能力，后者是会继续修订的兼容性规划文件。访问日的 `BreakingChanges` 明确称 Git 3.0 没有计划发布日期，所列事项可以因生态准备不足而推迟。

当前计划包括：新仓库默认 SHA-256、默认 reftable 引用格式、默认分支名 `main`、把 Rust 变为构建所需语言、收紧 bare repository 默认安全设置及移除若干旧接口。项目同时没有当前计划弃用 SHA-1 对象格式；Rust 等变化也会评估下游影响。最后一个 3.0 前版本拟提供延长维护窗口，但具体交接仍未决定。详见 [[Git 3.0 兼容性迁移\|Git 3.0 兼容性迁移]]。

因此，不能把计划项写成已发布默认值，也不能因为 SHA-256 可选就声称 Git 生态已经完成哈希迁移。托管服务、libgit2/JGit 等实现、子模块、shallow clone、alternates 和网络协议都可能成为迁移约束。

## 与 GitHub 的边界

Git 是本地可运行的软件、对象模型、协议与上游项目；GitHub 是建立在 Git 之上的商业托管和协作平台，增加账号、pull request、权限、Actions 与托管 API。GitHub 宕机不会使已有本地 Git 仓库停止提交或读取历史；Git 客户端漏洞也不能自动归因于 GitHub 服务。镜像、商标例外和所有权关系详见 [[Git 与 GitHub 的制度边界\|Git 与 GitHub 的制度边界]]。

同样，Git 的“分布式”不能推出任何托管副本都具有同等官方地位。Git 的 canonical 发布与贡献路径由项目自身的邮件列表、维护分支和签名发布决定；GitHub 镜像的可见度不是所有权或治理证据。

## 不能推出

- 不能写“Git 在十天内完成”：首个提交、自托管、承接内核合并、稳定发布和长期工程化是不同里程碑。
- 不能写 Andrew Tridgell 被证明违法逆向 BitKeeper；这是当事人争议，未找到法院裁判。
- 不能把 2005 年的 BitKeeper 写成今天仍是专有软件；其许可证后来发生变化。
- 不能把 Torvalds 的创建者身份、Hamano 的维护者身份、PLC 的行政角色、SFC 的法律承载或 GitHub 的镜像托管混成“项目所有者”。
- 不能把内容哈希当作作者认证、代码安全审计、可信时间戳或语义真实性证明。
- 不能把 DCO sign-off 当作 CLA、版权转让或 GPG 签名。
- 不能把 GPL 代码权利外推为 Git 商标、logo、网站、Pro Git 图书或 GitHub 服务的使用权。
- 不能把 `seen`／`next` 中的 topic 当作已接受或已经发布。
- 不能把 Git 3.0 的 living plan 写成已有发布日期、最终承诺或当前默认行为。

## 证据

- 原始资料快照（本地归档）
- [Git 官方简史](https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git)
- [Git 首个提交 `e83c516…`](https://github.com/git/git/commit/e83c5163316f89bfbde7d9ab23ca2e25604af290)
- [Git 官方手册](https://git-scm.com/docs/git)
- [Git README](https://github.com/git/git/blob/master/README.md)
- [SubmittingPatches](https://github.com/git/git/blob/master/Documentation/SubmittingPatches)
- [gitworkflows](https://git-scm.com/docs/gitworkflows)
- [Git 与 Software Freedom Conservancy](https://git-scm.com/sfc/)
- [Git 商标政策](https://git-scm.com/about/trademark.html)
- [Git hash function transition](https://git-scm.com/docs/hash-function-transition.html)
- [Git BreakingChanges](https://git-scm.com/docs/BreakingChanges)
