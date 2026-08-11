---
{"dg-publish":true,"permalink":"/Developer Certificate of Origin/","title":"Developer Certificate of Origin","tags":["#open-source-governance","#contribution-policy","#provenance","#licensing"],"created":"2026-08-11","updated":"2026-08-11","dg-note-properties":{"status":"processed","title":"Developer Certificate of Origin","aliases":["DCO","Developer's Certificate of Origin"],"tags":["#open-source-governance","#contribution-policy","#provenance","#licensing"],"sources":["raw/2026-08-11-Developer-Certificate-of-Origin治理与权利边界核验.md"],"created":"2026-08-11","updated":"2026-08-11"}}
---


<!-- issue: luwiki-xb4s -->

# Developer Certificate of Origin

Developer Certificate of Origin（DCO）是开放源码项目在接收贡献时使用的一项个人声明机制。贡献者并不是把权利集中转让给项目，而是在每次贡献时确认：自己创作了相关材料、依法取得了提交和修改既有材料的权利，或只是按可追踪的传递链转交他人已经作出同类声明的未修改贡献；同时知悉贡献记录及随附身份信息会作为公开项目记录长期保存。

截至 2026-08-11，官方文本仍是 1.1 版。Linux Foundation 的当前指引把它界定为单向的 certification／affirmation，而不是双方合同，也不是一份独立许可证。DCO 因而主要回答“谁在声明自己有权把这项贡献交给项目，以及它经过了谁”，不能单独回答版权最终归谁、雇主是否授权、代码是否正确安全、第三方材料是否真的兼容，或声明者身份是否已经被独立核验。

## 四项声明在治理上分别做什么

| 1.1 版条款 | 制度作用 | 仍然没有解决 |
| --- | --- | --- |
| 贡献全部或部分由本人创作，且本人有权按文件所示开源许可证提交 | 把原创贡献与具名责任人连接 | 不自动核验真实作者、雇佣作品归属或公司授权 |
| 贡献基于既有作品；据本人所知，该作品受适当开源许可证覆盖，且本人有权提交修改版 | 要求提交者对上游材料及许可链作出判断 | “据本人所知”不是完整来源审计，也不保证判断正确 |
| 贡献由另一位已作 DCO 声明的人直接提供，自己没有修改 | 为未修改转交保留一条声明链 | 不能为缺失的最初权利来源凭空补证 |
| 项目、贡献和随附个人信息是公开记录，可长期维护并按项目或相关许可证再分发 | 让参与者预先知悉公开留痕和长期保存 | 不等于项目可以忽略所有隐私法、数据最小化或纠错义务 |

这四项不是四个必须同时满足的权利来源：前三项是替代路径，贡献者无须说明自己具体依赖哪一项；第四项则单独处理公开记录。DCO 的证据价值来自具名声明和可审计传递链，而不是文字本身自动证明事实为真。

## 它依赖项目许可证，而不是取代项目许可证

DCO 文本把权利基础指向“文件中注明的开源许可证”。Linux Foundation 因此把它放在 [[开源贡献的 inbound=outbound 模型\|开源贡献的 inbound=outbound 模型]] 中理解：项目通常按对外分发所使用的同一许可证接收贡献，DCO 只补上一项来源与提交权声明。贡献者一般继续持有自己的版权，项目及后续接收者取得的是该开源许可证给予的权利。

这与 [[Contributor License Agreement\|Contributor License Agreement]] 是两种不同的入站治理安排。后者是一份项目与贡献者之间的协议，其实际文本可能授予更广的版权或专利权，也可能规定保证、再许可和项目方义务；有些文件虽被称为 CLA，实质却包含版权转让。判断时必须看具体条款，不能只看名称。

DCO 本身：

- 不授予一套独立许可权；
- 不把版权转让给 Linux Foundation、维护者或项目法人；
- 不当然授予超出项目开源许可证的再许可空间；
- 不自动处理专利、商标、保密、雇主批准或第三方保证；
- 不使分散的贡献版权变成一个主体可以任意重许可的权利池。

这种安排降低了参与门槛，也让贡献者与普通用户原则上获得相同范围的许可；代价是项目日后若想改变许可证，可能仍须处理分散权利人的同意。

## Signed-off-by 是声明载体，不是密码学签名

许多项目把姓名和邮箱写入每次提交的 `Signed-off-by` 记录，以表达该贡献受 DCO 声明约束。Linux Foundation 的指引同时强调，1.1 文本并不强制唯一的技术格式；项目可以为历史贡献、非标准工作流或重新许可活动另行记录声明。

因此，`Signed-off-by` 的存在最多证明仓库记录中出现了一项声明。自动检查只能确认这行记录是否存在或格式是否符合项目规则，不能判断：

- 姓名与邮箱是否对应真实权利人；
- 声明者是否理解或诚实履行声明；
- 雇主、客户或共同作者是否拥有相关权利；
- 贡献是否抄入未披露材料；
- 代码是否经过审查、测试或安全评估。

它也不是由私钥产生的密码学签名。密码学签名可以把特定内容与密钥连接，DCO 则记录贡献者对权利来源和公开留痕所作的陈述；两者可以并存，但不能互相替代。

## 起源、版本与制度扩散

DCO 起源于 2004 年的 Linux 内核社区。[[SCO 诉讼与 Linux 溯源治理\|SCO 诉讼与 Linux 溯源治理]]使“代码从哪里来、谁有权传递它”成为高可见度争议，内核维护者随后把个人声明和补丁传递链制度化。Linux Foundation 的当前历史说明把目标概括为两点：明确贡献者之间关于提交权的个人信任，以及留下谁提交、谁传递补丁的文档链。

当前官方文本标为 1.1，版权行列出 2004、2006；Linux Foundation 说明公开记录条款是在 1.1 版加入的。本轮没有找到由官方维护、带不可变版本标记的完整 1.0→1.1 修订档案，因此不把某个二手资料给出的具体改版日期写成已确定事实。

制度随后扩散到 Git、GCC、Linux Foundation 托管项目等不同社区，但“采用 DCO”不表示各项目的身份要求、接收流程或例外完全一致。Git 明确说核心文本来自 Linux 内核，同时提醒具体 sign-off 规则会因项目而异。

一个可核验的近年治理转换是 OpenStack：其 Technical Committee 于 2025-05-20 决定自 2025-07-01 起以 DCO 取代原 CLA，并把降低贡献门槛和行政负担作为理由。这个案例证明项目可以在两种入站安排之间作治理选择；它是 OpenStack 的制度决定，不是 DCO 比 CLA 在所有项目中更有效的实证结果。

Linux Foundation 称几乎所有其托管和支持的项目使用 DCO，但本轮没有找到可审计的全球项目总体、统一识别规则或独立采用率统计。最稳妥的结论是“DCO 被多个大型开放源码项目采用”，而不是给出未经复核的行业占比。

## 生成式 AI 暴露了声明机制的边界

DCO 要求人能够对贡献来源和提交权作出陈述；它没有为生成式 AI 输出自动建立一条新的权利链。Linux Foundation 的一般政策允许项目接收部分或全部由 AI 工具生成的内容，但要求贡献者检查工具条款、第三方材料、许可与归属，并允许各项目制定更严格规则。

Git 的当前贡献政策则更谨慎：它明确说，大量 AI 生成内容是否能够满足 DCO 仍有法律不确定性，并会拒绝提交者不能理解、不能解释或看似低质量自动生成的贡献。详见 [[Git 项目的生成式 AI 贡献政策\|Git 项目的生成式 AI 贡献政策]]。

两种政策并不等于 DCO 文本发生了变化。它们说明项目仍须在 DCO 之外制定质量、披露和工具使用规则；把人名写入 sign-off 也不能自动消除训练数据、相似输出、第三方权利或作者资格争议。

## 证据强度与不能推出

### 已核验

- 1.1 版是访问日的官方文本；前三项给出替代的权利来源路径，第四项处理公开记录。
- Linux Foundation 明确把 DCO界定为单向声明，而非合同或独立许可证。
- Linux 内核和 Git 都把 sign-off 用作来源与传递记录；Git、OpenStack 等项目可在核心文本之外制定自己的接收规则。
- 2025 年 OpenStack 从 CLA 转向 DCO 是可核验的组织治理事件。

### 不能推出

- 不能把 DCO 当成真实性、权属、雇主批准或许可证兼容性的独立审计。
- 不能把 `Signed-off-by` 当作密码学签名、代码审查结论或安全保证。
- 不能把 DCO 当成 CLA、版权转让、专利许可或集中重许可授权。
- 不能因为项目使用 DCO，就说其所有历史贡献都有完整且真实的权利链。
- 不能把某一基金会或项目的生成式 AI 指引外推为 DCO 1.1 的统一解释。
- 不能仅凭 Linux Foundation 的机构口径声称已知全球采用率或法律有效性已有因果验证。

## 相关页面

- [[Linux 内核\|Linux 内核]]
- [[Git\|Git]]
- [[Linux Foundation\|Linux Foundation]]
- [[Contributor License Agreement\|Contributor License Agreement]]
- [[开源贡献的 inbound=outbound 模型\|开源贡献的 inbound=outbound 模型]]
- [[SCO 诉讼与 Linux 溯源治理\|SCO 诉讼与 Linux 溯源治理]]
- [[Git 项目的生成式 AI 贡献政策\|Git 项目的生成式 AI 贡献政策]]

## 证据

- 原始资料快照（本地归档）
- [Developer Certificate of Origin 官方文本](https://developercertificate.org/)
- [Linux Foundation：DCO policy and best practices](https://bestpractices.linuxfoundation.org/ip/contribution-mechanisms-dco.html)
- [Linux 内核：Submitting patches／DCO](https://docs.kernel.org/process/submitting-patches.html#sign-your-work-the-developers-certificate-of-origin)
- [Git：SubmittingPatches](https://github.com/git/git/blob/master/Documentation/SubmittingPatches)
- [OpenStack 2025：Replace CLA with DCO](https://governance.openstack.org/tc/resolutions/20250520-replace-the-cla-with-dco-for-all-contributions.html)
- [Jilayne Lovejoy：Contributor Agreements](https://doi.org/10.1093/oso/9780198862345.003.0004)
- [Linux Foundation：生成式 AI 贡献指引](https://www.linuxfoundation.org/legal/generative-ai)
