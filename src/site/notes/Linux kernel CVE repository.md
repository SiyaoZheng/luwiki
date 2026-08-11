---
{"dg-publish":true,"permalink":"/Linux kernel CVE repository/","title":"Linux kernel CVE repository","tags":["#linux","#kernel","#cve","#vulnerability-management","#data-provenance"],"created":"2026-08-10","updated":"2026-08-11","dg-note-properties":{"status":"processed","title":"Linux kernel CVE repository","tags":["#linux","#kernel","#cve","#vulnerability-management","#data-provenance"],"sources":["raw/2026-08-11-Linux-kernel-CVE-repository结构同步与复现边界核验.md"],"created":"2026-08-10","updated":"2026-08-11"}}
---


# Linux kernel CVE repository

Linux kernel CVE repository 是 kernel.org CNA 用来维护 Linux 内核 CVE 的公开 Git 工作数据库。它把 reserved／published／rejected artifacts、stable 分支范围推导、JSON 与邮件生成、中央提交和人工审核放在同一套可审计文件树里；它不是“当前 CVE 真值”的单一镜像，也不是自动判定某台设备是否可利用的扫描器。

本页把仓库固定到 [`b951b5b499ec8ef8df85207807a70c48aec6041b`](https://git.kernel.org/pub/scm/linux/security/vulns.git/commit/?id=b951b5b499ec8ef8df85207807a70c48aec6041b)（2026-08-10）。该提交自称 7.1.8 review 的 first cut、only half done，所以固定 SHA 只解决“看的是哪棵树”，不构成完整性 release。kernel.org 当前是 [[CVE Program\|CVE Program]] 的 Linux kernel CNA，范围排除 EOL kernel，TL-Root 为 MITRE；这与 [[Linux Kernel CVE Authority\|Linux Kernel CVE Authority]] 的制度边界相接，但不能推出 CISA、MITRE 或 Linux Foundation 对每条记录独立作过技术验证。

## 文件树是一套工作数据库

固定 [`cve/README`](https://git.kernel.org/pub/scm/linux/security/vulns.git/plain/cve/README?id=b951b5b499ec8ef8df85207807a70c48aec6041b) 与 [`schema`](https://git.kernel.org/pub/scm/linux/security/vulns.git/plain/cve/schema?id=b951b5b499ec8ef8df85207807a70c48aec6041b) 定义四个业务目录：

| 目录 | 本地语义 | 不能直接推出 |
|---|---|---|
| `reserved/` | 空占位，可带内部备注 | 已有可公开漏洞细节 |
| `published/` | 已发布 CNA artifacts | 每个 artifact 都是当前中央 record 的字节镜像 |
| `rejected/` | 保留被拒绝记录的历史 artifacts | 目录内旧 JSON 的 `state` 已原地改成 REJECTED |
| `returned/` | 未使用 ID 的本地便利状态；中央以 never-used rejection 处理 | CVE Program 存在第四种 RETURNED 正式状态 |

`review/` 与 `testing/` 是流程目录，不是额外 CVE 状态。固定快照也不存在 `announcements/` 目录；公告载荷是 published 下的 `.mbox`，已发送历史在 `linux-cve-announce` 邮件档案。

一条 published 记录通常不是一份 JSON，而是一组互补文件：

| 文件 | 作用 | 关键边界 |
|---|---|---|
| 裸文件 | 初始占位或备注 | 不是结构化记录 |
| `.sha1` | 项目认定的主修复 commit，可多值 | 不是所有 stable 分支的唯一 patch 身份 |
| `.json` | 提交 [[CVE Services API\|CVE Services API]] 的 CNA payload | 不是完整中央 [[CVE Record Format\|CVE Record]] 的永久镜像 |
| `.mbox` | 可再生成的人类可读公告载荷 | 不等于历史上实际发送的不可变邮件 |
| `.dyad` | vulnerable:fixed version／Git-ID pairs | `0:0` 是缺少可用边界，不是真实 Git SHA |

可选 `.vulnerable`、`.message`、`.reference`、`.cvss` 分别补充或覆盖引入点、描述、引用和评分。缺 `.cvss` 是 schema 允许的选择，不应自动标成数据缺损。

## 自动推导并没有取消人工判断

[[bippy\|bippy]] 从修复 commit、sidecars 与 [[dyad\|dyad]] 生成 JSON／mbox；`programFiles` 来自 fix diff 触及的路径，标题和描述主要来自 commit subject/message。dyad 则用完整 mainline／stable 历史推导不同分支的 vulnerable/fixed pairs。新 release、backport 或人工修正会触发重新生成，所以这些字段是“在某一代码拓扑与判断时点派生的记录”，不是永不改变的事实表。

同时，固定 [`HOWTO`](https://git.kernel.org/pub/scm/linux/security/vulns.git/plain/HOWTO?id=b951b5b499ec8ef8df85207807a70c48aec6041b) 要求发布前人工检查受影响／修复版本、Git IDs、链接、sender 与 JSON；`cve_review` 最后也由 reviewer 回答是否分配 CVE。公开的 `voting_results` 只证明有汇总工具，未给出可外推的正式“两票／三票”阈值。因此准确描述是：工具自动化候选提示、历史推导、序列化与发布动作，但关键分配和 sanity check 仍由人承担。

## 三个发布时钟不是一个事务

公开流程的顺序是：

1. 在仓库生成 artifacts 并人工核对；
2. 先把 JSON 提交中央 CVE Services；
3. 再向 `linux-cve-announce@vger.kernel.org` 发邮件；
4. 最后 commit/push Git 仓库。

所以 API、邮件、Git 三处短暂不一致是流程结构的一部分，Git commit 时间也不等于首次公开时间。稳定分支新增 backport 后，脚本要求重发中央 JSON，但通常不重发 mbox；邮件档案是历史公告流，不是完整更新日志。反过来，仓库里的 `.mbox` 可随范围／CVSS 重生成，也不是已发送邮件的不可变副本。

当前 vger/Subspace 清单、HOWTO、发送脚本和实际归档都使用 `linux-cve-announce`。仓库 README 从 2024 初版起却写作 `linux-announce-cve`，同时给出正确 archive；现有证据支持文档字序错误，而不支持一段真实改名或地址迁移史。

## 拒绝会保留互相矛盾的历史视图

`cve_reject` 把已发布 artifacts 原样移到 rejected、另造 `.mbox.rejected`，再分别提示发邮件与调用中央 reject API。`CVE-2024-26609` 因而同时留下：

- rejected 目录里仍写 `state: PUBLISHED` 的旧 [JSON](https://git.kernel.org/pub/scm/linux/security/vulns.git/plain/cve/rejected/2024/CVE-2024-26609.json?id=4e5183bcd74575d843065d31431abd50bba71003)；
- 已为 REJECTED 的[中央 API](https://cveawg.mitre.org/api/cve/CVE-2024-26609)；
- 保存 PUBLISHED→REJECTED 变化的 [cvelistV5 commit](https://github.com/CVEProject/cvelistV5/commit/27f637ab300d84bddc97e6b6d988fbe50859ec1d)；
- 分开的[原公告](https://lore.kernel.org/linux-cve-announce/20240229155245.1571576-41-lee@kernel.org/T/)与[拒绝通知](https://lore.kernel.org/linux-cve-announce/20240312135714.1522772-2-lee@kernel.org/T/)。

这不是哪一层必然“错”，而是历史 artifact、当前状态与变更轨迹回答不同问题。核验当前有效性至少要结合目录、拒绝 follow-up 与中央 record；重建历史还需 Git／邮件时序。正式状态仍只有 RESERVED、PUBLISHED、REJECTED；withdrawal 是进入 REJECTED 的原因，不是第四种状态。

## 仓库 JSON 与中央 CVE Record 各自回答什么

固定仓库保存 kernel.org CNA 的工作 payload；中央 [[CVE Services API\|CVE Services API]] 还能加入服务时间戳、schema 升级和其他提供者的 ADP containers。实证中，仓库的 `CVE-2026-63922` 仍是 CVE JSON 5.1.1，而 2026-08-11 中央 API 返回 5.2；`CVE-2024-53197` 的中央 record 也比本地 CNA JSON 多 ADP containers。两侧 metadata 不完全相同，公开证据不足以解释其中 org UUID 的变化，不能猜测。

[[CVE List V5\|CVE List V5]] 是从 CVE Services 周期生成的 bulk cache，文件级 Git history有利于追踪状态变化，但仍不是每次 API 尝试和中间状态的完整服务器审计日志。实践上：用固定 vulns.git SHA 复现 Linux CNA 工作流；用带访问时间的中央 API／CVE List 核验当前状态和完整 record，不把二者当成字节级同一快照。

## 实际下游暴露了 schema 与复现风险

公开消费者并不只“读取 CVE ID”：

- Debian kernel security tracker 按 vulns.git HEAD 增量处理 published／rejected JSON，再以 Linux release tags 把 Git ranges 映射到 Debian 分支；代码对 `affected` 数量和排序有强假设，2025 年还修复了“漏洞在 stable 分支才引入”的旧启发式缺口。
- Yocto/OpenEmbedded 把 `programFiles` 与目标 kernel version、SPDX 或 debug-sources 中的已编译文件相交，产生构建感知筛选。官方自报可减少 70%–80% false positives，但没有公开 benchmark 的分母、抽样和误差，不能泛化为所有内核构建。
- Red Hat CKI 的固定 [`kernel-workflow/webhook/cvedb.py`](https://gitlab.com/cki-project/kernel-workflow/-/blob/3747b60bd76e1dc40c9738569d52b28a6cd18a50/webhook/cvedb.py) 用 `.sha1` 建 fix-SHA→CVE 查表，并读取 `programFiles`；它是身份／路径查询，不是漏洞可利用性检测器。
- Analog Devices 的固定 [`build-post-db.py`](https://github.com/analogdevicesinc/linux-security-vulns/blob/43b2ef6fd4c78faf7858691dee73842ec45d2be1/build-post-db.py) 合并 `.dyad`、Verhaal stable-backport 映射和构建 artifacts；[`check-artifact.yml`](https://github.com/analogdevicesinc/linux-security-vulns/blob/43b2ef6fd4c78faf7858691dee73842ec45d2be1/.github/workflows/check-artifact.yml) 自称 demo，只保留 depth-1 latest snapshot 也无法复现旧输出。
- IEEE S&P 2026 的 PORTGPT 从记录中后选择 18 个困难 backport 案例，9 个生成 patch 经维护者审查合入。18 例不是总体抽样；9/18 不能验证 CVE 覆盖率或字段准确率。

这些实例共同指向 [[Linux 内核 CVE 下游消费生态\|Linux 内核 CVE 下游消费生态]]、[[构建感知的内核漏洞适用性\|构建感知的内核漏洞适用性]] 与 [[稳定分支漏洞起源与回移映射\|稳定分支漏洞起源与回移映射]]：schema 排序、分支拓扑、构建输入或更新时点一变，消费者可能报错，也可能静默漏读。

## 复现与解释的最低边界

可复现分析至少固定：vulns.git commit SHA、完整 Linux tree/tag snapshot、consumer commit/version、目标 kernel source/config/build，以及实际使用的 cvelistV5、SPDX、Verhaal DB 等次级输入。只写“clone latest”无法重建过去输出。

还必须分开三个身份：CVE ID 标识记录；`.sha1` 标识 producer 指定的主修复；`.dyad`／JSON ranges 表达跨分支传播。它们不是一一对应，详见 [[CVE 标识与补丁身份\|CVE 标识与补丁身份]] 与 [[Linux 内核 CVE 记录时间漂移\|Linux 内核 CVE 记录时间漂移]]。

因此不能从本仓库单独推出：

- 某版本落在 affected range，就等于具体设备配置、编译产物和运行路径可被利用；
- `programFiles` 出现，就等于文件已编译、配置启用或代码可达；
- 有 `.sha1`，就能安全地在所有分支单独 cherry-pick；完整修复可能依赖多次变更；
- 没命中 CVE，就没有漏洞；官方流程聚焦进入受支持 stable 分支的已修复问题，也可能漏分配；
- 分配了 CVE，就已有 PoC、在野利用或高严重度。

## 许可不是“全仓 GPL”

固定 README 只明确把 CVE information data 置于 [[CVE Terms of Use\|CVE Terms of Use]]，把 `scripts/` 与 `tools/` 置于 GPL-2.0-only。CVE-ToU 允许复制、派生、展示、再许可和分发，但要求副本保留 MITRE copyright designation 与许可，并按 AS-IS 提供。它不等于 public domain、准确性认证、商标／logo 授权或官方背书。

README、HOWTO、justfile、邮件头与额外原创文本没有逐文件统一归类；也不能因为 GPL 脚本生成 JSON／mbox，就把输出自动说成 GPL。再利用时应按 artifact 类型保留许可与来源，不给出“全仓每个字节均已清权”的保证。

## 相关页面

- [[Linux 内核\|Linux 内核]]
- [[Linux Kernel CVE Authority\|Linux Kernel CVE Authority]]
- [[CVE Program\|CVE Program]]
- [[CVE Services API\|CVE Services API]]
- [[CVE Record Format\|CVE Record Format]]
- [[CVE List V5\|CVE List V5]]
- [[CVE Terms of Use\|CVE Terms of Use]]
- [[bippy\|bippy]]、[[dyad\|dyad]]、[[Strak\|Strak]]、[[Grondig\|Grondig]]、[[Verhaal\|Verhaal]]
- [[Linux 内核 CVE 下游消费生态\|Linux 内核 CVE 下游消费生态]]
- [[Linux 内核 CVE 记录时间漂移\|Linux 内核 CVE 记录时间漂移]]
- [[CVE 标识与补丁身份\|CVE 标识与补丁身份]]
- [[构建感知的内核漏洞适用性\|构建感知的内核漏洞适用性]]
- [[稳定分支漏洞起源与回移映射\|稳定分支漏洞起源与回移映射]]

## 证据

- 原始资料快照（本地归档）
- canonical repository：<https://git.kernel.org/pub/scm/linux/security/vulns.git/>
- Linux kernel CVE 流程：<https://www.kernel.org/doc/html/latest/process/cve.html>
- kernel.org CNA Partner 页：<https://www.cve.org/PartnerInformation/ListofPartners/partner/Linux>

<!-- issue: luwiki-1xh0 -->
