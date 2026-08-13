---
{"dg-publish":true,"permalink":"/Hugging Face Gated Repositories/","title":"Hugging Face Gated Repositories","tags":["#Hugging Face","#访问控制","#数据治理","#许可证"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"Hugging Face Gated Repositories","source_count":11,"sources":["raw/2026-08-10-Hugging-Face-Content-Policy版本与执行边界核验.md","raw/2026-08-10-Hugging-Face-Gated-Repositories机制核验.md","raw/2026-08-10-数据集许可证漂移与Data-Provenance审计.md","https://huggingface.co/docs/hub/models-gated","https://huggingface.co/docs/hub/datasets-gated","https://huggingface.co/content-policy","https://huggingface.co/docs/hub/repositories-licenses","https://huggingface.co/terms-of-service","https://huggingface.co/privacy","https://huggingface.co/docs/huggingface_hub/en/package_reference/hf_api","https://huggingface.co/datasets/ut-vision/EgoBrain"],"tags":["#Hugging Face","#访问控制","#数据治理","#许可证"],"created":"2026-08-10","updated":"2026-08-10"}}
---

# Hugging Face Gated Repositories

Hugging Face Gated Repositories 是 Hub 对模型或数据集文件实施的个人账号访问控制。它回答“谁现在能从 Hub 取得受限制品”，不自动回答“取得后可以怎样使用”。仓库许可证、额外使用条款、参与者授权、研究伦理和数据保护仍需分别核验。

## Gated 不等于 private，也不等于 license

Hugging Face 2025-04-10 生效的 Content Policy 把 gated repository 定义为：仓库页面与 Community Content 对所有人可见，但模型权重或数据等 ML artifacts 需要用户接受 click-through 条件或得到维护者批准。它与另外两层机制不能合并：

| 层 | 控制对象 | 能确认 | 不能推出 |
|---|---|---|---|
| public／private | 仓库的可发现性与整体可见性 | gated 仓库不是 private；卡片、README、讨论和部分 metadata 仍可公开 | 卡片公开不等于文件可匿名下载 |
| gated access | 当前个人账号从 Hub 访问受限文件的资格 | 可自动批准、人工批准、拒绝、取消或直接授予 | 获批不等于允许商用、再分发、衍生发布或绕过地域条件 |
| license／terms | 下载后使用、复制、修改和分发的权利义务 | 由 card 的 `license`、LICENSE 文件和另行条款表达 | `gated: true` 本身不会生成或替换许可证 |

官方 EU 示例把 `license: mit`、`gated: true` 与 `extra_gated_eu_disallowed: true` 并列，直接显示许可、门控和地域限制是独立字段。若 card 标为 MIT，而 gate checkbox 又写“仅限非商业”，应同时保留两条记录并标成需作者澄清的条件冲突；不能把 MIT 静默改写为非商业许可，也不能假定 click-through 在所有法域都当然可执行。需要自定义许可时，官方规范是用 `license: other` 配合 `license_name`、`license_link` 或仓库中的许可文本，而不是只靠 gate prompt／checkbox。

## 申请与状态机

访问申请由已登录的个人用户在浏览器中的模型或数据集页面发起；官方没有用户用 API 发起申请的入口。访问资格始终落到个人账号，而不是申请人所在的整个组织。

- **Automatic approval**：默认门控模式。用户提交联系信息和自定义表单后立即获批；这是“提交后放行”，不是身份核验、研究伦理审查或用途合规认证。
- **Manual approval**：申请进入 `pending`，维护者决定 Accept 或 Reject；维护者也可在用户未申请时直接 Add／Grant access。
- **Accepted**：用户可通过已登录浏览器或 user token 下载仓库文件。维护者可 Cancel 使其回到 pending，也可 Reject 使其进入 rejected；两种操作都会阻止后续 Hub 访问。
- **Rejected**：用户不能访问，也不能自行再次申请；维护者仍可改变状态。拒绝理由可向用户显示。

维护者可在 UI、HTTP API 或 `huggingface_hub` 中管理请求。脚本下载必须携带已获批个人账号的 token；只有仓库读权限而没有获批 gate access 仍不足以取得文件。组织仓库还可要求普通组织成员申请，但组织管理员、仓库创建者与相应 Resource Group 管理员可绕过；Team／Enterprise 的跨仓集合机制已登记为独立待补节点 [[Hugging Face Gating Group Collections\|Hugging Face Gating Group Collections]]。

## 申请表与个人信息

默认申请会把 username 与 email 交给仓库作者。作者下载的 access report 还包含 Hub fullname、请求状态、初次申请时间和审核时间。`extra_gated_fields` 可另外收集单行文本、checkbox、日期、国家和下拉选项；作者也可改写 prompt、heading、说明和按钮文案。

Hugging Face 的 Privacy Policy 说明平台自身还会记录 IP、session location、设备和 cookie；EU 限制也按 IP 判断。但是官方 gate report 与 API 字段没有把 IP 列为默认交给仓库作者的信息，因此不能写成“作者默认获得申请者 IP”。该 Privacy Policy 约束平台自身处理；仓库作者决定额外字段、审批目的并可导出答案，作者侧保存和再使用不能被平台政策自动包办。用户可以编辑资料、取消账户或向 Hugging Face 请求删除，但官方文档没有提供申请人自行删除 gate submission、让作者端导出报告同步清除或远程删除既有副本的专门接口；涉及个人数据时，应另行核验数据最小化、收集目的、保存期限、删除渠道和适用法域。

## 地域、撤销与下载后边界

`extra_gated_eu_disallowed: true` 只在仓库已经 gated 时生效，由 Hub 根据 IP 阻止 EU 用户访问。它可以技术执行某项地域分发规则，但不会自己创造许可证限制，也不是 GDPR、参与者同意或数据出境合规认证。

维护者可以随时阻止未来下载，官方文档没有声称平台会远程删除本地缓存、追回已下载副本，或撤销用户已经依许可取得的权利。相同地，自动批准、人工批准和 Content Policy moderation 都不能证明上游数据已经清权、取得研究参与者授权或完成伦理审查。

## 门控不能修复许可漂移

gate 控制的是未来从 Hub 取件的资格；dataset card 的 `license` 则是维护者自报 metadata。即使申请表要求同意条款或维护者人工审批，也不会自动沿聚合、镜像、训练和应用链找回原作者许可、归因、share-alike 或第三方内容权。反过来，取消 gate 也不会把缺失、`unknown` 或过度宽松的标签变成有效许可。

[[数据集许可证漂移\|数据集许可证漂移]] 的外部证据显示，问题既包括平台 tag 缺失和类别错配，也包括许可证全文与版权声明不向下游传播。审计 gated artifact 时必须把 access decision、README/data revision、declared license、上游 observed license 与审计 concluded license 分列。

<!-- issue: luwiki-ne0 -->

## EgoBrain：卡片与实时 gate 状态漂移

[[EgoBrain\|EgoBrain]] 不是当前 active-gate 的正例，而是卡片、YAML 字段与服务器状态漂移的反例。2026-08-10 无 token API 返回 `private:false`、`gated:false`、`license:cc-by-nc-4.0`；卡片仍自称 gated 并保留姓名、邮箱、单位、用途和承诺等 `extra_gated_fields`，但匿名请求一个实际 survey CSV 会以 `user_id=public` 取得文件。只有在 gate 重新启用时，这些表单字段才会进入访问申请流程。

这说明 repository revision、卡片文字和表单配置都不能单独固定可变的 gate setting。审计时应在访问日同时保存 API 的 `private`／`gated` 值并匿名探测实际 artifact；字段存在不等于 gate 生效。CC BY-NC 4.0 与卡片附加条款仍是下载后使用边界，但不能把当前 public download 写成已走 click-through。

[[EgoMimic\|EgoMimic]] 当前 HDF5 同样是 public、non-gated，却没有 dataset-specific license。没有 gate 只表示无需走 Hub 访问申请，不表示商用、站外再分发、参与者影像或衍生数据权利已经清晰。

## 公开机制演化

以下日期是可定位的最早公开官方文档或客户端 commit，不等于私有 Hub backend 的精确上线日；未找到独立 launch blog。

- 2022-06-01／06-08：数据集与模型 gated 文档首次进入官方 hub-docs，当时已有联系信息、access report、text／checkbox 自定义字段。
- 2023-03-10：官方首次明确 manual approval，并把此前默认路径写为 automatic acceptance；同年 6 月公开管理 REST API，11 月完整文档化 pending／accepted／rejected 与撤销状态机。
- 2023-12：huggingface_hub v0.20.0 加入申请列表及 accept／cancel／reject／grant 方法。
- 2024-01：表单增加日期、国家和 select；2024-12 出现 Team／Enterprise 的集合级 gate。
- 2025-08：首次公开文档化按 IP 实施的 EU restriction。
- 2026-05：access report 文档增加 reviewedAt，并加入“组织内部普通成员也需申请”的可选规则；当前 Python AccessRequest 尚未映射 reviewedAt，不能把 report 字段误写成 SDK object 字段。

## 核验清单

评估一个 gated 模型或数据集时至少分别记录：

1. 固定 repository revision、`private`／`gated` 状态和受限文件；
2. automatic／manual、个人或集合级审批，以及申请字段；
3. card license、LICENSE、custom terms 与字段间冲突；
4. 获批、拒绝、取消与地域限制的实际语义；
5. 已下载副本、再分发、撤回传播和参与者权利；
6. 作者自述、平台技术执行与独立法律／伦理判断的证据等级。

## Gating 与 moderation 不是同一动作

[[Hugging Face Content Policy\|Hugging Face Content Policy]] 的 owner-side gate 与 platform-side disable 不能混称。owner 可以把 ML artifacts 设为 automatic／manual approval；Hugging Face 在举报或主动 flag 后则可请求修改、unrank、加 NFAA、remove／disable、限制互动或停／销号。gate denial／cancellation 控制未来 Hub 取件，现行正式申诉段只明确列举 content 被 disable 和 account 被 suspend／terminate，没有保证维护者拒绝 gate access 可走同一程序。

政策在 2025-04-10 重写后也不再承诺旧版“通常约 72 小时”回应期。无论 gate、NFAA 还是协作修改，都不是平台对许可、consent、PII 或安全的合规认可；disable 同样不承诺删除本地副本、缓存或衍生物。版本与执行证据见 原始资料快照（本地归档）。

<!-- issue: luwiki-s9t -->

## 相关页面

- [[Hugging Face 服务条款\|Hugging Face 服务条款]]
- [[Hugging Face Content Policy\|Hugging Face Content Policy]]
- [[数据集许可证漂移\|数据集许可证漂移]]
- [[Hugging Face 隐私政策\|Hugging Face 隐私政策]]
- [[Hugging Face 数据集卡片\|Hugging Face 数据集卡片]]
- [[Hugging Face Gating Group Collections\|Hugging Face Gating Group Collections]]
- [[EgoBrain\|EgoBrain]]
- [[EEG 数据共享困境\|EEG 数据共享困境]]
- [[EgoMimic\|EgoMimic]]
- [[Project Aria\|Project Aria]]
- [[具身智能数据基础设施\|具身智能数据基础设施]]

## 证据

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [Gated models](https://huggingface.co/docs/hub/models-gated)
- [Gated datasets](https://huggingface.co/docs/hub/datasets-gated)
- [Content Policy](https://huggingface.co/content-policy)
- [Hub licenses](https://huggingface.co/docs/hub/repositories-licenses)
- [Terms of Service](https://huggingface.co/terms-of-service)
- [Privacy Policy](https://huggingface.co/privacy)
- [`huggingface_hub` access request API](https://huggingface.co/docs/huggingface_hub/en/package_reference/hf_api)
- [EgoBrain dataset card](https://huggingface.co/datasets/ut-vision/EgoBrain)




## 跨平台治理中的定位（2026-08-10）

在 [[模型市场治理\|模型市场治理]] 的三段链条中，gating 是**分发前访问控制**：它能让平台按账号、审批或地域阻止后续取件，却不完成生产端的许可／provenance／安全审计，也不能替代分发后的举报、disable、事故响应与外部副本追踪。维护者撤销 access 后，平台仍没有远程删除既有下载、缓存、fork 或衍生物的能力。

截至 2026-08-10，本轮未找到模型 hub 层面对 gating 降低真实下游伤害的随机实验或严格自然实验。评估时应分别记录 request→decision 时间、拒绝／撤销／申诉／恢复、false denial、下载暴露与站外传播；政策存在、获批人数或 gate coverage 不能直接写成效果。证据矩阵见 原始资料快照（本地归档）。
