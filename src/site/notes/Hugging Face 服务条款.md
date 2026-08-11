---
{"dg-publish":true,"permalink":"/Hugging Face 服务条款/","title":"Hugging Face 服务条款","tags":["数据许可","平台治理","数据仓库","权利边界"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"Hugging Face 服务条款","source_count":11,"sources":["raw/2026-08-10-Hugging-Face-Content-Policy版本与执行边界核验.md","raw/2026-08-10-数据集许可证漂移与Data-Provenance审计.md","raw/2026-08-10-Hugging-Face-服务条款与仓库许可边界.md","https://huggingface.co/terms-of-service","https://huggingface.co/content-policy","https://huggingface.co/docs/hub/repositories-licenses","https://huggingface.co/docs/hub/datasets-cards","https://huggingface.co/docs/hub/datasets-gated","https://huggingface.co/docs/hub/repositories-getting-started","https://huggingface.co/privacy","https://cdn-media.huggingface.co/landing/assets/Supplemental+Terms.pdf"],"tags":["数据许可","平台治理","数据仓库","权利边界"],"created":"2026-08-10","updated":"2026-08-10"}}
---


# Hugging Face 服务条款

Hugging Face 服务条款是用户与 Hugging Face Inc. 之间的平台层合同，不是某个模型、数据集或 Space 的专属许可证。截至 2026-08-10，官方 live page 仍显示生效日为 2022-09-15，但页面没有 revision ID、不可变链接或 changelog；审计时必须同时记录访问日期与当时文本，不能把生效日当成版本号。

公共仓库也不只是“任何人可见”：上传者通过条款给每位 User 一项真实的公共内容许可。但原文把该项权利放在 “through our Services and functionalities” 的范围语境中。因此，平台条款不能被简写成 MIT、CC 或其他可移植的 artifact license，也不足以单独确认任意站外复制、商用训练、再分发、转许可或衍生发布。

## 文书栈与冲突顺位

服务条款把 Terms 定义为一组文件，而不是单页文本。除非文件另有明确规定，冲突顺位是：

1. 适用的 Order Form；
2. 适用的 Scope of Work；
3. 双方签署的其他约束性文件；
4. [[Hugging Face Supplemental Terms\|Hugging Face Supplemental Terms]]；
5. 服务条款；
6. 其他被并入的通知与政策，包括 [[Hugging Face Content Policy\|Hugging Face Content Policy]]。

仓库随附的惯常许可证不是任意低位附件。服务条款另行说明：内容带有合理、惯常的许可证通知时，后续访问、分发和使用仍意图受该许可证约束；开放源码、Creative Commons 等条款不被平台条款替代，也不能被平台条款扩张。自定义许可证与公共仓 grant 的冲突没有一条可普遍套用的简化顺位，需要把平台功能许可和随附用途条件同时保留。

## 访问状态不等于用途许可

| 仓库状态 | 可以确认 | 不能据此推出 |
|---|---|---|
| Public | 互联网用户可见；上传者对每位 User 的公共内容 grant 明示包含使用、展示、发布、复制、分发和制作衍生物，并以平台服务与功能为范围语境 | 任意站外镜像、商用训练、再分发、转许可、出售，或第三方数据权利已经清理 |
| Private | 仅 owner／organization 可见；Hugging Face 承诺采用合理适当的保密措施，同时保留依 [[Hugging Face 隐私政策\|Hugging Face 隐私政策]] 访问或分享的可能 | 对其他 User 存在公共仓同款授权，或私有状态本身证明采集、隐私和知识产权合规 |
| Gated | 仓库页与社区内容可见，机器学习制品需 click-through 或维护者批准；维护者可撤销访问 | `gated=true` 自动等于许可证、伦理审查、参与者同意、逐人审核，或默认 “Agree” 包含商用／非商用条件 |
| Disabled | 平台阻断除 owner 外的访问 | 内容违法的最终裁定、下游副本已召回，或既有衍生物自动消失 |

Gated 与 Public 的合同映射还存在文本缝隙：Content Policy 单列 Gated，但服务条款的公共 User grant 只明确写 “set your Repository public”。没有仓库实际 gate prompt 和随附条款时，不应替文本完成归类。

## 三层许可不能互相代替

1. **上传者到平台。** 上传内容会给 Hugging Face 一项全球、免版税、非独占许可，用于提供服务及条款／隐私政策允许的事项；这层不区分 public 与 private。
2. **上传者到平台用户。** 只有公共仓库条款明确写出面向 each User 的永久、不可撤销、全球、免版税、非独占 grant，并列出复制、分发和衍生等动词。
3. **仓库或制品专属许可。** README/card 的 `license`、LICENSE 文件、自定义条款和上游文件级许可证说明具体 artifact 的可移植用途边界。官方文档允许 license 留空；元数据由上传者填写，平台不因此认证 chain of title。

所以，“没有 repository-specific license”不等于平台上绝对不存在任何许可关系；更精确的说法是：只观察到平台条款下的基线 grant，没有可观察到的具名、独立、可移植制品许可证。反过来，一个 MIT 代码仓也不会自动许可同项目的 HDF5、模型权重、人像、声音或训练数据。

## License tag 与权利链漂移

Hugging Face dataset card 的 `license` 是仓库维护者写入 README YAML、供页面展示与过滤的 self-declared metadata，不是平台的权属认证。Nature Machine Intelligence 2024 对 1,858 条 alignment constituent records 的 Table 2 可复算出：Hugging Face 69.38% 未指定许可、64.75% 与原作者/上游重标用途类别不一致、27.18% 过度宽松；正文把第二项写成 66%，应保留内部差异。无作者重叠的后续研究又显示，许可全文、版权声明和 attribution payload 在 dataset→model→application 链中很少完整传播。详见 [[数据集许可证漂移\|数据集许可证漂移]]。

这些发现不消灭本页所述的 ToS 基线 grant，也不把类别不一致直接判成违法；它们说明平台合同、仓库 tag、随附许可文本、上游逐层权利和第三方内容权必须分别记录。

<!-- issue: luwiki-ne0 -->

## 上传者保证不是平台认证

上传者向 Hugging Face 声明自己拥有、控制或有权发布内容，并负责避免违法、误导、侵权或盗用第三方权利。[[Hugging Face Content Policy\|Hugging Face Content Policy]] 也限制侵犯隐私或知识产权的内容，并提供报告、DMCA、移除、禁用和停号机制。

这些是上传者义务和平台治理，不是 Hugging Face 面向下载者出具的权属、参与者同意、IRB、肖像权或可商用认证。平台同时按现状提供内容，排除包括 non-infringement 在内的保证，并把下载与使用风险留给用户。上传者本来不拥有的第三方权利，不会因为 public、gated、license tag 或平台合同而被创造出来。

## 删除、撤回与下游传播

用户取消账户后，Hugging Face 承诺以商业上合理的努力在 90 天内删除其自己仓库中的 public／private 内容；条款明确排除其对他人仓库的贡献以及平台或其他用户已制作的副本，并允许为法律、监管、备份与恢复保留信息。因而：

- 删除仓库、撤销 gate 或 disabled 不等于召回既有下载；
- 平台移除不自动撤销已经产生的模型、派生数据或站外镜像；
- 参与者撤回能否传播到下游，必须由项目自己的标识、通知、删除与许可证机制另行回答。

## 版本漂移的审计方法

官方 Terms、Content Policy 与 Privacy Policy 都是 live policy，而不是固定到 Git commit 的文档。当前 Terms 页面显示 2022-09-15，Content Policy 显示 2025-04-10，Privacy Policy 显示 2023-03-28；页面声明更新发布 10 天后生效，但没有公开逐版差异。

Internet Archive 固定快照显示，2021-05-31 版 public grant 还带有“与上传者选择的许可证一致”的附加限定；自称 2021-09-27 生效的版本删除该短语，但保留平台服务范围语境。2022 页面与当前页面的服务名称也已改变，而可见生效日仍停在 2022-09-15。这证明 live text 会漂移，但不能仅凭动态页面 digest 确定每一处法律改动的发布日期。

可复核审计应保存：

- official live URL、页面生效日、访问时间和本地 raw；
- 仓库 immutable revision、当时的 private／gated／disabled 状态；
- README/card、license tag、LICENSE/COPYING 与自定义 gate prompt；
- 上游、文件级、参与者、隐私与公开发布授权证据；
- 删除、禁用与下游召回是否有明确机制。

## 对 EgoMimic 的应用

[[EgoMimic\|EgoMimic]] 的 Hugging Face 数据仓截至 2026-08-10 是 public、non-gated；固定 revision `065ffc0c697069982d58b695db38d9943a28d54a` 未见 README、LICENSE 或 card license metadata。准确结论不是“完全没有许可”，而是：

- 有一层平台条款下、按原文范围理解的公共内容 grant；
- 没有可观察到的 repository-specific portable dataset license；
- 站外复制、商用训练、再分发和衍生发布范围仍需项目方澄清；
- 平台条款不能补齐 HDF5 中人物、影像、场所、作品或参与者授权链。

这是一项文本与证据审计，不是法律意见。详见 原始资料快照（本地归档）。

## Content Policy 的版本与执行边界

现行 [[Hugging Face Content Policy\|Hugging Face Content Policy]] 标示生效日 2025-04-10，但没有 Last updated、不可变 revision 或集中 changelog。归档显示，2025-03-21 仍是 effective 2023-08-30 的旧结构，04-25 已切换到新版；后续澳大利亚附加段和 DSA 报告链接改变时，页面生效日没有同步更新。因此，服务条款把政策并入 Agreement 只说明合同关系，不能消除 live policy 的版本漂移。

2025 版还删除旧版“通常约 72 小时”回应窗口，改用非穷尽的协作修改、unrank、NFAA、remove／disable、限制互动与停／销号清单，并新增 DMCA counter-notice、一般申诉与 DSA 庭外争议渠道。disable 仍只定义为阻断非 owner 访问；政策没有承诺物理删除、缓存／备份清除或既有下载召回。平台处置、仓库专属许可和第三方权利链仍须分别审计。

详见 原始资料快照（本地归档）。

<!-- issue: luwiki-s9t -->

## 相关页面

- [[Hugging Face Content Policy\|Hugging Face Content Policy]]
- [[数据集许可证漂移\|数据集许可证漂移]]
- [[Hugging Face 数据集卡片\|Hugging Face 数据集卡片]]
- [[Hugging Face Gated Repositories\|Hugging Face Gated Repositories]]
- [[Hugging Face Supplemental Terms\|Hugging Face Supplemental Terms]]
- [[Hugging Face 隐私政策\|Hugging Face 隐私政策]]
- [[Project Aria\|Project Aria]]
- [[EgoMimic\|EgoMimic]]
- [[人类活动数据\|人类活动数据]]

## 证据

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [Hugging Face Terms of Service](https://huggingface.co/terms-of-service)
- [Hugging Face Content Policy](https://huggingface.co/content-policy)
- [Repository licenses](https://huggingface.co/docs/hub/repositories-licenses)
- [Dataset cards](https://huggingface.co/docs/hub/datasets-cards)
- [Gated datasets](https://huggingface.co/docs/hub/datasets-gated)
