---
{"dg-publish":true,"permalink":"/Linux 内核 stable 与 LTS 维护/","title":"Linux 内核 stable 与 LTS 维护","tags":["linux","kernel","release-engineering","maintenance","security"],"created":"2026-08-11","updated":"2026-08-11","dg-note-properties":{"status":"processed","title":"Linux 内核 stable 与 LTS 维护","tags":["linux","kernel","release-engineering","maintenance","security"],"sources":["raw/2026-08-11-Linux-stable与LTS维护机制核验.md"],"created":"2026-08-11","updated":"2026-08-11"}}
---

<!-- issue: luwiki-oazi -->

# Linux 内核 stable 与 LTS 维护

Linux 内核的 stable 与 longterm（LTS）维护，是把已经进入 mainline 的适格修复回移到 kernel.org active 列表中、由 Stable/LTS team 维护的旧系列，再经过候选队列、公开审阅、release-candidate 测试和正式 tag 发布的上游机制。它不是把“重要补丁”直接复制到所有旧版本，也不是一份覆盖 Ubuntu、RHEL、Android 和设备厂商的统一支持合同。

这套机制要同时解决两个相反目标：让用户尽快获得真实 bugfix，又尽量不把新功能、依赖不全的改动或新的回归带进旧系列。stable 规则、`Cc: stable`／`Fixes:` 元数据、[[Linux stable AUTOSEL\|Linux stable AUTOSEL]]、人工审核和整组测试分别承担不同环节；任何一个信号都不能单独证明某修复已经进入所有适用分支。

## stable、LTS 与 distribution kernel 不是三个质量等级

| 层次 | 维护对象 | 典型期限与选择 | 不能推出 |
|---|---|---|---|
| ordinary stable `X.Y.Z` | 一个 mainline final `X.Y` 的后续 bugfix release | 通常维护到下一 mainline 周期附近；按需发布，常见约每周 | 固定发布 SLA、无回归或适合所有产品 |
| longterm／LTS `X.Y.Z` | stable 团队选中的旧系列，继续回移重要修复 | 先给 projected EOL，再按产业需求、资源与维护者可用性调整 | 所有安全修复必然覆盖、功能等同新 mainline、EOL 是合同承诺 |
| distribution／vendor kernel | 发行版或产品方选定的基础版本、配置、额外补丁和包 | 由该厂商自己的生命周期、测试、公告与服务合同决定 | kernel.org 的分支状态就是产品状态 |

kernel.org 首页的 `stable` 标签也不是不可变的分类证书：如果没有普通 stable 系列，首页可能为了兼容自动解析器而把一条 LTS 标为 stable。判断某系列角色应看 Active kernel releases，而不是只抓首页标签。

截至 2026-08-11，kernel.org 列出的活跃 LTS 系列是 6.18、6.12、6.6、6.1、5.15 和 5.10，projected EOL 依次是 2028-12、2028-12、2027-12、2027-12、2026-12、2026-12；当时均列 [[Greg Kroah-Hartman\|Greg Kroah-Hartman]] 与 [[Sasha Levin\|Sasha Levin]] 为维护者。这里的日期是带访问日的上游计划，不代表发行版或设备的服务终点。

## 哪些改动有资格进入 stable

现行 stable rules 的基本门槛是合取条件，而不是任选其一：

- 修复或等价修复已经进入 Linux mainline；stable 原则上不是先于上游承载功能开发的分支。
- 改动必须明显正确并经过测试，遵守一般补丁提交规范，而且不超过 100 行（含上下文）。
- 它要修复真实、影响用户的 bug，或增加设备 ID。oops、hang、数据损坏、真实安全问题、硬件 quirk 和构建错误属于典型对象；纯拼写、空白整理等没有用户收益的改动不合格。
- 只有“理论上可能出问题”的竞态并不足够，除非同时解释如何触发或利用。发行版用户报告的显著性能／交互问题可被考虑，但因回归风险更难判断，应由 distribution kernel maintainer 提交并补充用户可见影响和 bug tracker 证据。

“已在 mainline”只是必要条件，不是 stable 必收证明。旧系列 API、代码布局和依赖可能不同；一个补丁能干净 cherry-pick、编译或启动，也不能排除遗漏语义依赖。

未公开安全问题另有 [[Linux 内核安全报告流程\|Linux 内核安全报告流程]]。stable 文档明确说安全补丁不应只靠普通 stable review；安全团队协调的修复可直接进入 stable tree，而不是经过全部公开常规步骤。这是保密和修复协作的例外路径，不表示所有带安全影响的普通 bugfix 都自动跳过审核。

## 三条提交路径与四类信号

stable rules 提供三条正式路径：

1. **在送 mainline 的补丁上加 stable tag**：这是官方强烈偏好的路径。补丁进入 mainline 后，stable 工具会拾取候选；作者无需再发一次相同请求。
2. **请求拾取已经 mainlined 的提交**：当初没有考虑回移时，可向 stable 团队给出 commit、理由和目标系列。
3. **提交等价调整版**：旧系列 API 不同或原提交不能直接应用时，可以提交经调整的 backport，但必须标明 upstream commit，并明确解释与原改动的差异。

请求较老系列时，还要检查所有仍受支持、且比它新的 stable 系列是否已含有、适用或已提交等价修复；否则用户升级到中间系列可能反而丢失修复。

四类经常被误当成“已合入”证明的信号应分开：

- `Cc: stable@vger.kernel.org` 位于 commit sign-off 区，是给回移工具的路由标记。它可附起始版本、前置提交、延迟拾取和旧版本调整提示。未公开漏洞使用不实际投递邮件的 `stable@kernel.org` 地址，降低 `git send-email` 提前泄露风险。
- `Fixes:` 指向引入 bug 的 mainline commit，帮助推导受影响分支；它不是对每个配置、每条旧树的适用性判决。
- [[Linux stable AUTOSEL\|Linux stable AUTOSEL]] 与扫描 `Fixes:` 的工具用于发现候选；机器推荐不等于自动合入。
- `Cc: <stable+noautosel@kernel.org> # reason` 明确要求自动候选工具忽略该变更，但仍必须写出理由；它不是删除 mainline 提交或禁止人工评估。

因此，`Cc: stable`、`Fixes:`、AUTOSEL 命中、进入 mainline 和获得 CVE 分别属于路由元数据、候选发现信号、upstream 状态或漏洞标识；任何一个都不证明修复已经进入某个正式 stable tag。核验实际状态仍要查具体 `X.Y.y` 分支和 tag。

## 从候选队列到正式 release

普通路径的状态转换是：

1. stable 团队接受或拒绝提交者的请求；接受只表示进入 queue，响应本身可能需要数日。
2. 候选进入 stable queue，并发送给 review committee、相关 subsystem maintainer 和公开列表。常规审阅窗口是 48 小时；委员会或其他开发者提出未被发现的问题时，候选可被移除。
3. ACK 后形成 stable RC 测试集。通常只有一个 RC，但发现问题后可以修改、删除或增加补丁，再生成新的 RC。
4. 测试者通过邮件回传 `Tested-by:` 等证据；最后把经排队和测试的整组补丁发布成 `X.Y.Z`，进入 `linux-stable.git` 的对应分支和正式 tag。

这三类公开制品不可互换：

| 制品 | 语义 | 取证边界 |
|---|---|---|
| `stable-queue.git` | 组成 stable releases 的 canonical patch source；当前各系列 queue 是可变候选，仓库也保存 completed-release patch snapshots | 两种内容都不能替代正式内核 tag |
| `linux-stable-rc.git` | 上一正式 release 加当前 queue 的测试快照 | 频繁重建与 rebase，只适合测试／CI；当前 branch 不能固定过去某次 RC |
| `linux-stable.git` tag | 已发布的正式 stable／LTS 版本 | 才是特定 `X.Y.Z` release 的版本锚 |

当次 RC 的可复现输入还可以用 kernel.org `stable-review/` 目录中的 aggregate patch bundle 固定。[[Linux stable-queue 与 linux-stable-rc\|Linux stable-queue 与 linux-stable-rc]]继续承载队列、快照、测试与正式 tag 之间的证据映射。

## 为什么上游建议采用整组 stable update

Linux CNA 的官方 CVE 文档建议用户采用完整已发布 stable changes，而不是只挑带 CVE 的几个 commit，理由有三层：

- 同一 release 的改变作为统一整体由多名社区成员共同测试；stable rules 另表明候选先逐项进入 review，再作为 RC 组合测试。单项摘取不再复用同一组合证据。
- 一个底层问题往往由多项相互依赖或逐步完善的修复共同解决，单个 CVE 对应 commit 未必构成完整修复集。
- CVE 分配可能漏掉相关 bugfix；“没有 CVE”不能作为不需要更新的反证。

这是一项消费者安全建议，不是对 cherry-pick 的绝对禁令。stable 维护者本身也会 cherry-pick 或调整 mainline fix；发行版还可能因紧急漏洞先单独回移。区别在于，单项回移者要自己识别 prerequisite、解决 conflict、对其每条目标分支分别测试，并承担后续支持责任；若向 upstream stable 提交，还须为每个要覆盖的 active stable version 分开提交并分别测试。正式整组 update 也不保证零回归或覆盖每个配置，只是保留了上游共同审核和组合测试的边界。

## LTS 如何被选择、延长和终止

kernel.org 没有一个只看版本号或日历就能预测“最佳 LTS”的算法。当前官方列举的选择因素包括：重要新特性、主流商业发行版需求、设备制造商需求，以及维护者的工作量和可用性。流程文档把底层条件说得更直接：有人确有维护需要，并且有时间承担工作。

一条新 LTS 通常先显示约两年的 projected EOL；产业参与和维护资源足够时可延长。因此：

- “一年最后一个 final 常被选中”即便曾是维护者经验，也不是面向未来的保证。
- projected EOL 可以变化，不能写成不可撤销承诺。
- 老 LTS 通常发布频率更低，只接收重要修复；这不等于所有被标成 security 的修复都有硬性覆盖保证。
- upstream EOL 表示 kernel.org 不再给该系列发布 bugfix，用户应迁移；它不自动终止发行版、Android common kernel、CIP 或设备厂商的派生支持。

## 向发行版和设备交接的是责任，不只是 commit

kernel.org 明确把带发行版后缀、经过修改的内核交给相应 vendor 支持。上游 stable/LTS 维护者不掌握每个产品的配置、额外补丁、ABI、构建、硬件、发布节奏和合同，因此不能替发行版宣布“已修复”。

Ubuntu 的现行 post-release kernel policy 展示了一种混合路径：在 LTS 和非 LTS 生命周期内持续吸收对应 upstream stable update；紧急问题可以先直接进入 Ubuntu series，但需要本地 bug、测试和至少两名 senior kernel-team 成员 ACK，同时仍应提交 upstream。普通更新还要经过 kernel-ppa users PPA 预发布、`-proposed` 和回归验证。这说明“追随整组上游更新”与“对紧急项单独加速”可以并存，但最终交付责任仍在发行版。

Red Hat 对 backport 的通用说明则展示另一项审计边界：产品可以保留较旧的 upstream base／version string，同时选择性回移特定安全修复；只按上游版本号扫描会产生 false positive，需读取 vendor advisory、包 release 和机器可读状态。该说明覆盖 RHEL 的通用包策略，不能据此假定每个内核修复采用同一方法，也不能推出产品只包含安全 backport。

Android 官方对设备制造商的建议更直接：在完成产品测试后吸收完整 LTS update，因为 stable release 作为整体接受审核、内核修复通常不标 `security`，长期只筛“已知安全补丁”既会漏修复，也会累积后续合并冲突。[[Android Common Kernel\|Android Common Kernel]] 通常继续消费 LTS，又可能在 upstream EOL 后由 Google 延长维护；[[Generic Kernel Image\|Generic Kernel Image]]／KMI 把通用内核与 vendor modules 分层，但仍允许因 Android 适用性、KMI 或 out-of-tree 冲突调整补丁。该结构降低碎片化，不把 SoC、OEM、测试和 OTA 责任重新集中给 kernel.org。

[[Linux 发行版内核安全维护\|Linux 发行版内核安全维护]]继续承载产品版本、配置、包、公告和服务期限；[[Linux 内核补丁传播链\|Linux 内核补丁传播链]]则追踪 mainline→stable/LTS→distribution/vendor 的实际传播。上游 stable 已合入、发行版树已合入、二进制包已发布和设备已安装是四个不同时间点。

## 同行评审实证显示的是取舍，不是排行榜

Li 等人在 MSR 2024 研究 8 个流行发行版的 21 条分支（含 Android），并结合多个 LTS 分支、584,000 个 commits、公开仓库和对 23 名维护者的沟通，区分 group-port、individual pick、minor-version rebase 与 major-version rebase。在所观察分支中，较高 patch rate／频繁换 base 与较高 bug inheritance ratio 同时出现，保守策略则可能漏补丁或产生更长延迟；`Cc: stable` 与 `Fixes:` 提示也与较短传播延迟相关。该仓库挖掘研究不识别这些关系的因果效应。

这项研究支持“回移不是自动复制、不同 downstream 有独立责任”，但有四个重要限制：

- 数据来自历史公开树；RHEL 和许多 OEM 因缺少可用公开仓库被排除，不能外推全部产品。
- patch rate 是维护勤勉的近似指标，不知道某一分支真正应吸收的完整 ground truth。
- bug inheritance 主要借 `Fixes:` 识别引入 bug 的提交，会漏掉没有该标签的 bug。
- 论文只能比较其样本期策略，不能证明某个 2026 修复当前已经或尚未进入某条分支。

Zhang 等在 USENIX Security 2021 研究 402 个 ASB kernel CVEs（2015-08 至 2019-05）、8 个品牌、26 款手机和 701 个历史 kernel instances；签名配置覆盖 3.18、4.4、4.9 和 4.14，跨品牌对照机型集中于 2017 年发布。在作者能够生成并匹配签名的分析样本中，接近一半 CVE 从最早公开 patch 到 OEM 设备落地至少约 200 天，10%–30% 超过一年；binary patch-presence test 的平均准确率超过 96%，但约 10% 的 CVE 因无法生成签名或生成／匹配超过两小时而被排除。这种非随机排除和残余误分类限制总体外推。该论文有一名 Google 共同作者，历史样本支持区分“LTS/ACK 已有修复”与“设备已经交付”，但早于现代 GKI，不能当作 2026 Android 的当前效果估计或完全厂商外部证据。

## 实际核验清单

判断“这个修复是否已经覆盖我的系统”时，至少固定：

1. mainline 原始 fix commit，以及 `Fixes:`、前置依赖和后续修正；
2. 目标 upstream stable/LTS 系列的实际 backport commit 与首个正式 tag；
3. 如果只看到当前 in-progress stable queue 或 stable-rc，明确它仍是候选／可变测试快照；若看到 stable-queue 中的 completed-release snapshot，可用它固定该次 patch set，但最终内核版本仍以 `linux-stable.git` 的正式 tag 为锚；
4. 发行版 source package、flavour／配置、vendor release、advisory 和二进制 build；
5. 设备实际安装版本与重启／livepatch 状态；
6. CVE 只作为标识线索，不以“有／无 CVE”替代上述版本核验。

## 证据边界

- 本页版本和维护系列快照固定到 2026-08-11；动态状态须重查 kernel.org 与正式 tags。
- stable eligibility、`Cc: stable`、`Fixes:`、AUTOSEL 与 CVE 都不能替代逐分支核验。
- 48 小时是常规 review window，不是修复、响应或发布 SLA；安全团队协调路径另有例外。
- stable-rc 是频繁重写的测试树；不可把当前 branch HEAD 当作过去某次 RC 的不可变证据。
- 整组更新保留组合测试边界，但不保证零回归；单项 backport 不是被禁止，而是把依赖、测试和支持责任转给回移者。
- upstream projected EOL 与发行版／设备生命周期彼此独立。

## 相关页面

- [[Linux 内核\|Linux 内核]]
- [[Linux 内核补丁传播链\|Linux 内核补丁传播链]]
- [[Linux stable AUTOSEL\|Linux stable AUTOSEL]]
- [[Linux stable-queue 与 linux-stable-rc\|Linux stable-queue 与 linux-stable-rc]]
- [[Linux Kernel CVE Authority\|Linux Kernel CVE Authority]]
- [[Linux 内核安全报告流程\|Linux 内核安全报告流程]]
- [[Linux 发行版内核安全维护\|Linux 发行版内核安全维护]]
- [[Android Common Kernel\|Android Common Kernel]]
- [[Generic Kernel Image\|Generic Kernel Image]]
- [[Greg Kroah-Hartman\|Greg Kroah-Hartman]]
- [[Sasha Levin\|Sasha Levin]]

## 证据

- [Linux stable rules](https://docs.kernel.org/process/stable-kernel-rules.html)
- [Linux CVE process：整组更新与适用性边界](https://docs.kernel.org/process/cve.html)
- [kernel.org Active kernel releases](https://www.kernel.org/releases.html)
- [kernel.org FAQ：stable／LTS／EOL 与 distribution kernel](https://www.kernel.org/faq.html)
- [Linux kernel backporting guide](https://docs.kernel.org/process/backporting.html)
- [stable-queue](https://git.kernel.org/pub/scm/linux/kernel/git/stable/stable-queue.git/)
- [linux-stable-rc](https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux-stable-rc.git/)
- [正式 linux-stable tree](https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/)
- [Ubuntu post-release kernel update policy](https://ubuntu.com/project/docs/SRU/reference/exception-Kernel-Updates/)
- [Red Hat：backport 与版本号误判边界](https://access.redhat.com/solutions/57665)
- [Android：stable kernel releases and updates](https://source.android.com/docs/core/architecture/kernel/releases)
- [Android Common Kernel](https://source.android.com/docs/core/architecture/kernel/android-common)
- [Android security updates 与 OEM/OTA 边界](https://source.android.com/docs/security/overview/updates-resources)
- [Li et al., MSR 2024，Linux patch porting](https://doi.org/10.1145/3643991.3644902)；[可达全文](https://arxiv.org/html/2402.05212)
- [Zhang et al., USENIX Security 2021，Android patch delay](https://www.usenix.org/conference/usenixsecurity21/presentation/zhang-zheng)
- 原始资料快照（本地归档）
