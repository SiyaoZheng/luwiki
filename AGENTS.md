# 噜Wiki 维护说明

Address the user as Adrian.

本目录是一个由 LLM Agent 维护的 Obsidian-style wiki。Karpathy 的 LLM Wiki 文档是本项目的运行范式参考，不是第一条语料。不要把运行范式、项目说明、用户指令误当作待摄入资料。

本 vault 采用扁平 wiki：生成的 wiki 页面默认直接放在 vault 根目录，不按 `sources/concepts/entities/synthesis` 建多层目录，也不在普通页面上用 `type` 区分概念、实体、综合或来源。组织主要依靠页面标题、Obsidian 双向链接、tags 和 `index.md` 的主题地图完成。

## 基本原则

- Adrian 负责提供链接、文件、问题和判断重点。
- Agent 负责读取资料、保存原始快照、提取要点、维护页面、建立链接、更新索引和记录日志。
- `raw/` 是来源层，尽量保持不可变；vault 根目录中的普通 markdown 页面是生成和维护层，可以随新资料持续修订。
- 所有知识性主张都要能追溯到 raw 快照、外部来源或其他明确证据。
- 新资料进入后，知识库应当变得更好，而不是只增加一篇孤立摘要。
- 普通 wiki 页面必须以“世界中的对象、机制、趋势、事件或关系”为中心，而不是以“某篇文章如何表述”为中心。来源是证据，不是知识页面的主语。
- **QMD-first 是每次 ingest 的硬规则**：必须从 vault 根目录使用项目本地 `.qmd/index.sqlite` 作为第一搜索入口；`rg` 和 `index.md` 只用于补充核对，不能代替 QMD 检索，也不能用名称相似的全局 collection 代替项目本地索引。
- **新页数量不设固定上限或下限**：先更新所有相关旧页，再为 vault 尚未覆盖、证据足够且值得独立积累的对象、机制、趋势、事件或关系建页；数量由本轮知识结构决定。

## 目录结构

保持扁平，避免过早分类：

- `raw/`：外部链接、网页、论文、报告、访谈、笔记等资料的原始快照或来源记录。只有 raw 层需要用 frontmatter 区分来源类型、抽取方法、可用状态等。
- `raw/assets/`：图片、PDF、附件、网页下载资源等。
- vault 根目录：所有 LLM 生成的普通 wiki 页面。页面可以是实体、机制、事件、趋势、问题或综合观察，但不通过 `type` 字段分类。
- `index.md`：内容地图。每次新增或显著修改页面后更新。
- `log.md`：追加式操作记录。每次 ingest、query、lint 或结构调整后追加。
- `AGENTS.md`：本文件，定义 Agent 如何维护这个 wiki。

## 会话启动

每次开始处理本 vault：

1. 先读 `index.md` 和 `log.md`。
2. 判断用户输入属于哪一类：待摄入资料、查询问题、结构维护、还是项目指令。
3. 如果是待摄入资料，先按下文的 QMD-first 门槛搜索本 vault；之后再用 `rg` 核对根目录文件名、链接和遗漏，避免重复建页。
4. 如果用户只给出外部链接，默认将其视为待摄入资料；如果链接明显是方法说明或项目规范，先把它转化为维护规则，而不是摄入为语料。

## Ingest 工作流

### QMD-first 硬门槛

每次新的 ingest 都必须先用 QMD 搜索本 vault，然后才能判断旧页如何更新或新页写什么：

1. 所有 QMD 命令都从本 vault 根目录运行。先执行 `qmd status`，确认输出的 `Index:` 是本项目的 `/Users/siyaozheng/噜Wiki/.qmd/index.sqlite`；不能仅凭 collection 名称判断，也绝不能改用名称相似的全局 collection。
2. 如果 `.qmd/index.sqlite` 不存在，先在 vault 根目录运行 `qmd init`，再运行 `qmd collection add .`。如果项目本地索引存在但 collection 缺失，运行 `qmd collection add .`；如果文件数为零或索引陈旧，运行 `qmd update`。完成后再次用 `qmd status` 确认项目本地路径和已索引文件数，再继续 ingest。空的、陈旧的或错误路径上的索引结果不能被解释为“没有相关页面”。
3. `Vectors: 0 embedded` 不妨碍 BM25 全文检索：此时使用 `qmd search`，分别以标题、别名、实体、罕见短语和机制词做多轮检索。只有在 `qmd status` 明确显示向量数大于零后，才可使用 `qmd vsearch`、`vec:`、`hyde:` 或包含向量检索字段的 `qmd query`。
4. ingest 过程不得自动运行 `qmd embed`，也不得为了本轮摄入安装 embedding、reranking 或 query-expansion 模型；模型安装和向量生成由专门的 QMD 维护工作流负责。在向量就绪前，始终使用 BM25 `qmd search`，不能等待向量而跳过 QMD-first 检索。
5. 先对用户给出的标题、文件名、URL 可见信息、实体名和判断重点做初始检索；读完来源并提取术语后，再做一轮定向检索。对候选结果使用 `qmd get` 或 `qmd multi-get` 读取完整页面；不能只凭搜索摘要决定新建页面或修改主张。
6. QMD 检索完成后，再用 `rg` 和 `index.md` 做文件系统与主题地图交叉核对。QMD 是主搜索引擎，`rg` 是完整性检查和故障时的诊断工具。

### 先更新旧页，再按知识结构新增页面

每次完成的 ingest 必须遵循固定顺序：**使用项目本地 QMD 检索并读取候选旧页 → 更新所有相关旧页 → 为尚未覆盖且证据充分的世界节点新增页面 → 更新 `index.md` 和 `log.md` → 运行 `qmd update` 并验证本轮页面可检索**。

- 旧页更新优先。凡新资料能补充、修正、反驳或限定的相关旧页，都应先写入；不能用新页面替代本应完成的旧页维护。
- 新页只承载已有页面尚未覆盖、能够独立积累的世界节点。页面主语只能是对象、机制、趋势、事件或关系；不得创建来源摘要页、同义重复页或空壳页，也不得为了追求页数把一个观察机械拆开。
- 一个 source 可以不新建页面，也可以支撑多个新页面；判断标准是对象是否独立、证据是否充分以及未来是否值得持续积累，而不是固定配额。
- 每个新页都必须直接保留 raw 或外部证据链接，并说明证据状态、边界、矛盾和待核验点。
- 如果现有证据不足以诚实支撑一个独立世界节点，只保存 raw 并标记 `needs_verification`；不得编造或创建填充页。
- 新增实体的关系若依赖尚不存在的稳定机构端点，应同时按机构节点化规则补齐必要页面；如果端点身份仍不确定，则把线索保留在 raw，不写会制造错误图谱边的 wikilink。

### 写入哲学

每个 source file 或 source link 先作为证据进入判断流程，而不是天然变成孤立页面。Agent 必须先读取资料、分析它与已有页面的关系，再决定写入方式：

- 先通过 QMD 找出所有相关已有页面，优先更新这些页面，并把新 source 作为证据、反例、补充或限定条件加入。
- 已有页面充分覆盖主题时可以只更新旧页；出现多个尚未覆盖且证据充分的独立世界节点时，可以分别建页。页面选题和数量由知识结构与证据强度决定。
- `raw/` 快照应尽量为每个 source 保留；根目录不再创建“source 类型页面”。如果某个来源引出一个值得保留的事件、机制、对象或观察，页面标题直接指向那个世界对象。
- 人、公司、机构、产品、项目、地点等实体名可以作为单独页面。它们是世界中的稳定节点，适合积累不同来源的观察、关系和时间线。
- 人物、公司和机构页不能只记录孤立履历；要把它们放回中国语境下的关系网络。尤其要外部补证“三同”线索：同乡/地缘、同学/同校/同门、同事/共事/任职重叠。三同是关系基础设施，不是八卦；只记录公开、可核验、与主题相关的关系。
- 写入时维护双向链接：普通 wiki 页面之间尽量互链；普通页面必须在“证据”段链接到 raw 或外部来源。raw 文件可在 frontmatter 中用 `related_pages` 记录它支撑的页面。
- 写成 wiki 页面时，先抽取可沉淀的 observation：发生了什么、谁在做什么、机制是什么、趋势如何变化、证据强弱如何、还有什么不确定。不要把正文写成“这篇文章报道/认为/介绍……”。这类表述只放在“证据”“来源”“待核验”段落。
- 如果只能得到未经核验的 statement，就不要把它提升为世界 observation；保留 raw，并标记 `unverified`、`unavailable` 或 `needs_verification`。

当 Adrian 提供待摄入链接或文件时：

1. 先从 vault 根目录执行项目本地 QMD 健康检查，并用当前可见的标题、文件名、URL 信息、实体名或问题重点搜索本 vault；在确认 `Index:` 指向本项目 `.qmd/index.sqlite` 且完成初始 BM25 检索前，不进入页面写入。
2. 获取资料内容，并记录标题、作者/机构、发布日期、访问日期、URL 或本地路径。
3. 在 `raw/` 保存原始快照；如果无法完整保存，至少保存来源记录和可访问片段。
4. 读资料并提取核心主张、证据、定义、案例、数据、方法和限制。
5. 用提取出的标题、别名、实体和机制词再次运行 `qmd search` 定向检索，使用 `qmd get` 或 `qmd multi-get` 读取候选旧页全文；随后用 `rg` 和 `index.md` 交叉核对遗漏。只有本地状态确认已有向量时，才可增加向量检索。
6. 先更新所有相关旧页，把新来源作为证据、反例、补充或限定条件写入，并维护这些旧页的来源和反向链接。
7. 旧页更新完成后，为 vault 尚未覆盖、证据足够且值得独立积累的世界节点创建根目录页面。新页面不写 `type` 字段；数量不设配额。
8. 不为普通链接创建专门的来源页面；raw 通常已经足够承担 provenance。只有来源本身就是世界对象，例如一份重要制度文件、数据集或论文，需要被长期讨论时，才以对象名建根目录页。
9. 维护双向链接：普通 wiki 页面之间尽量互链；被更新页面和所有新页面都必须直接链接到 raw 快照或来源 URL。raw 快照可在 frontmatter 中用 `related_pages` 记录相关页面。
10. 明确标注矛盾、分歧、不确定性和需要进一步查证的点；不得因建页数量影响证据标准。
11. 核验每张新页面都有独立对象和充分证据，且没有来源摘要页、同义重复页、空壳页或错误图谱边；不以固定页数作为完成标准。
12. 更新 `index.md`。
13. 在 `log.md` 追加记录；证据不足而停在 raw 层的候选应明确记为待核验，不能写成已确认实体或关系。
14. 完成 `index.md` 和 `log.md` 写入后，从 vault 根目录运行 `qmd update`，把本轮新增和修改写回项目本地索引；不得在此步骤运行 `qmd embed`。
15. 用 BM25 `qmd search` 按标题或独特短语逐一查找本轮每个新增或修改的 Markdown 页面，并用 `qmd get` 核对命中内容已经是最新版本。任何页面无法检索时，本轮 ingest 尚未完成；修复项目本地索引并重新验证，不能切换到全局 collection 规避失败。

### 实体外部 enrich：三同关系

当资料涉及人物、团队、公司、学院、投资机构、实验室、项目创始人或密集合作网络时，Agent 应主动用外部来源补充关系线索，而不是只复写来源材料。

优先补充三类公开事实：

- **同乡/地缘**：出生地、籍贯、长期成长地、城市/园区/地方政府平台、地方校友会、地方产业集群。
- **同学/同校/同门**：学校、院系、导师、实验室、校友组织、同一训练项目、同一竞赛/课程/研究组。只有公开资料明确支持时才写“同门”或“同学”；否则写“同校/同机构线索”。
- **同事/共事**：共同任职、同一公司/实验室/项目/投资机构、联合创办、联合论文、董事/顾问/投资关系、共同参加的组织平台。

写入方式：

- 可在实体页加入“关系线索”或“外部补证”小节，按证据强弱写成 `已核验 / 待核验 / 只作为线索`。
- 三同线索必须链接到公开来源，例如官网人物页、学校/公司公告、论文作者页、工商/交易所公告、活动主办方页面、可信媒体报道。
- **机构节点化是硬规则**：凡被用作三同关系证据端点的稳定机构（学校、学院、实验室、公司、投资机构、创业平台、校友组织、地方平台等），必须在 vault 根目录建立独立机构页，并在人物或公司页使用实际的 `[[机构标准名]]` 双链；只在正文写机构名称不算建立关系边。
- 如果大学—学院、集团—业务单元或机构—平台的层级会影响判断，应分别建立节点并互链，不能把“同校”“同院系”“同平台”压成同一条边。
- 独立机构页不能是空壳：至少要写明标准名称与别名、上级或运营主体、与相关实体的关系类型、证据状态、不能推出的结论、相关页面和证据。关系仍未得到机构一侧确认时，可以建页，但必须把具体关系标为 `待核验` 或 `媒体/交易方线索`。
- **wikilink 就是图谱边**：Obsidian 不理解否定、待核验或举例语境；只要写出 `[[某节点]]`，图谱就会把两页直接相连。因此“不属于”“尚未证明”“候选对象”“不能推出”等语句中的对象名必须写成纯文本，不能用 wikilink。
- **固定中转路径**：创始人或团队履历按“公司 → 人物 → 学校/前雇主”连接；融资关系按“公司 → 融资事件 → 投资机构/财务顾问”连接。人物履历不能造成公司—学校或公司—前雇主直边，产品不能直接连接投资机构，人物也不能因公司融资而直接连接资本。
- 品牌、法律主体、业务单元、产品和基金载体分别建模；只有公开证据确认同一身份时才能互作 alias。名称相近、媒体简称或待穿透载体只能写成有证据边界的关系，不得用 alias 强行合并。
- 学籍、任职、同项目参与可以作为三同核验基础；投资、财务顾问、孵化、路演和产业合作属于其他组织关系。后几类也可建立机构节点以完善网络，但不得伪装成同学、同门、同事或私人关系。
- 不从姓名、籍贯、学校或行业相似性推断私人关系；不记录住址、家庭成员、私生活、未公开婚恋、私人微信圈层或敏感身份。
- 投融资和招聘文章中的“清华系”“人大系”“大厂系”“校友系”等标签只能作为叙事线索，除非外部来源逐项证实。
- “三同关系”是实体 enrich 的写入规范，不单独建立概念页；若关系会改变对技术路线、融资网络、组织能力或资源动员的理解，应在人物、机构或事件页直接说明机制，并只回链到具体相关生态页。

## Query 工作流

当 Adrian 提问时：

1. 先从 `index.md` 定位相关页面。
2. 读取相关 wiki 页面和必要的 raw source。
3. 如果问题依赖最新外部事实，先联网核验。
4. 回答时区分来源事实、wiki 综合、以及 Agent 的推论。
5. 如果回答形成了可复用综合，保存为根目录页面或更新相关页面，并记录到 `log.md`。

## Lint 工作流

定期检查：

- 孤立页面和缺少反向链接的页面。
- 多个页面对同一概念的重复定义。
- 新资料推翻或限定了旧判断但旧页未更新。
- 只有结论、缺少来源链接的主张。
- `index.md` 与实际文件不一致。
- 反复出现但尚未建页的重要概念、实体或研究问题。

## 页面格式

生成的 wiki 页面使用简短 frontmatter 记录标题、来源、tags 和时间，不使用 `type` 做类别分类：

```yaml
---
status: processed
title: 标题
tags: []
sources:
  - raw/2026-08-07-title.md
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

raw 页面可以记录来源类型和抽取状态，例如：

```yaml
---
type: raw_source
source_type: article
source_url: https://example.com
extraction_method: defuddle
ingest_status: extracted
related_pages:
  - Existing Page Name
---
```

raw 常用 `source_type`：

- `paper`
- `article`
- `report`
- `book`
- `dataset`
- `interview`
- `webpage`
- `note`

内部链接使用 Obsidian 语法，例如 `[[index]]`。页面命名优先稳定、短、可复用，不要机械复制长标题。

## 扁平命名规则

- 页面文件名应短、稳定、可读，例如 `组织惯例.md`、`某个事件短标题.md`、`2026-08 科研笔记综合.md`。
- 不用目录或 `type` 字段表达类别；用页面标题、tags、链接和 `index.md` 组织。
- 避免与系统文件重名：`AGENTS.md`、`index.md`、`log.md`、`欢迎.md`。
- 原始快照可放入 `raw/`，文件名可加日期前缀，例如 `raw/2026-08-07-title.md`。

## 日志格式

`log.md` 使用可解析标题：

```markdown
## [YYYY-MM-DD] init | 初始化说明
## [YYYY-MM-DD] structure | 结构调整说明
## [YYYY-MM-DD] ingest | 资料标题
## [YYYY-MM-DD] query | 问题标题
## [YYYY-MM-DD] lint | 检查范围
```

日志只追加，不重写历史，除非是在纠正同一会话内的误操作。

## GitButler 版本落地规则

- 所有版本控制检查与写操作都使用 GitButler CLI（`but`）；每个 task 使用独立分支，只提交自己负责的变更，不得夹带其他 Agent 的工作。
- 已完成并验收的 Wiki 工作不能只停留在本地 commit。正确 GitHub remote 与 target 配置完成后，使用 `but land <branch> --yes` 把专属分支落到 `origin/main`；这才算 GitButler 语义下完成 push to main。仅把 feature branch `but push` 到远端不等于已经落到 `main`。
- 落地前必须用 GitButler 确认 target 是正确仓库的 `origin/main` 且历史兼容。若仍是 `gb-local/main`、remote 缺失、远端历史不相关、会公开私密 raw，或需要 force-push 才能完成，则必须 fail closed 并向 Adrian 报告具体差异；禁止静默覆盖或强推 `main`。
- 只落地明确属于本轮且允许进入该 GitHub 仓库的内容；不得因为文件位于共享 workspace 就把其他 Agent 的未提交工作、私密 raw 或本地状态一并推送。

<!-- BEGIN BEADS CODEX SETUP: generated by bd setup codex -->
## Beads Issue Tracker

Use Beads (`bd`) for durable task tracking in repositories that include it. Use the `beads` skill at `.agents/skills/beads/SKILL.md` (project install) or `~/.agents/skills/beads/SKILL.md` (global install) for Beads workflow guidance, then use the repository wrapper `./scripts/bd-agent` for issue operations.

### Quick Reference

```bash
./scripts/bd-agent claim          # Atomically claim one ready issue
./scripts/bd-agent claim-id <id>  # Claim an explicitly assigned issue
./scripts/bd-agent mine           # List only this Codex task's active work
./scripts/bd-agent show <id>      # View issue details
./scripts/bd-agent close <id>     # Complete explicit issue
./scripts/bd-agent prime          # Refresh Beads context with unique actor
```

### Rules

- Codex tasks must use `./scripts/bd-agent`; do not use bare `bd`.
- Use Beads for all task tracking; do not create markdown TODO lists.
- 每个涉及知识内容的 issue 都要在验收标准中包含 Obsidian CLI 读写证据、联网搜索与来源边界、`index.md` / `log.md` 更新，以及 `qmd update` 后的检索回读。
- Beads 记录工作状态、依赖和验收，不承载知识正文；知识与证据仍写回 Obsidian vault。
- 每创建一张 redlink 空页，必须立即创建对应 Beads issue；不得把空页留到后续批量登记。
- Run `./scripts/bd-agent prime` when Beads context is missing or stale. Codex 0.129.0+ can load Beads context automatically through native hooks; use `/hooks` to inspect or toggle them.
- Keep persistent project memory in Beads via `bd remember`; do not create ad hoc memory files.

**Architecture in one line:** issues live in a local Dolt DB; sync uses `refs/dolt/data` on your git remote; `.beads/issues.jsonl` is a passive export. See https://github.com/gastownhall/beads/blob/main/docs/SYNC_CONCEPTS.md for details and anti-patterns.
<!-- END BEADS CODEX SETUP -->

<!-- BEGIN CODEX THREAD BEADS PROTOCOL -->
## Codex 多任务 Beads 领取协议（硬规则）

本节是项目级覆盖规则，优先于上方由 `bd setup codex` 自动生成的通用示例。

- 本协议中的持续 worker 仅指 Wiki-only 知识维护 worker；不得将“持续工作”解释为可以认领脚本、helper、适配器、测试、CI/CD 或基础设施等 coding issue。coding issue 必须保留证据后释放或延期，除非 Adrian 对具体编码任务明确授权。
- 本仓库中的 Codex task 只能通过 `./scripts/bd-agent` 操作 Beads；禁止 Agent 直接使用裸 `bd` 读取、认领或修改 issue。脚本以 `CODEX_THREAD_ID` 生成唯一 assignee `codex:<thread-id>`；缺少该变量时必须 fail closed，不能回退到共享的 Git 用户名。
- 自主领取只能运行一次 `./scripts/bd-agent claim`，它调用原子的 `bd ready --claim --json`。禁止先运行 `bd ready` 再单独运行 `bd update <id> --claim`。
- Codex task 是持续 worker：完成并关闭当前归属 issue 后，必须立即再次运行 `./scripts/bd-agent claim`，领取并执行下一项；只要仍有 ready 工作就不得把单个 issue 的完成当作会话终点。仅在原子 claim 明确返回无可领取项时，才报告队列证据与阻塞。
- 只有协调者明确指定或完成显式 handoff 时，才使用 `./scripts/bd-agent claim-id <id>`。不得因为某 issue 是 `in_progress` 就把它解释为“应由当前 task 续做”。
- `in_progress` 是全项目状态，不是“我的任务”。当前 task 只能用 `./scripts/bd-agent mine` 查看自己的工作，并且只处理 assignee 与 `./scripts/bd-agent actor` 完全一致的 issue。
- 所有修改既有 issue 的命令都必须带明确 ID；禁止依赖仓库共享的 `.beads/last-touched`。wrapper 会拒绝无 ID 的 `update`、`close`、`reopen`、`defer`、`undefer`、`delete` 和 `done`。
- `claim`、`claim-id`、`mine` 的接口固定，不接受任何透传参数；前置全局 flags、未知命令、`edit`、`update --claim` 都必须 fail closed，不能借参数顺序绕过 actor/status/显式 ID 防护。
- handoff 必须同时完成三件事：在 Beads 中把 assignee 改成接收方的 thread actor、在目标 Codex task 中发送包含 issue ID 的消息、由接收方用 `claim-id` 核验。仅在对话中说“继续”不构成 handoff。
- Embedded Dolt 的 single-writer 只串行化数据库写入，不提供 Agent 身份隔离，也不保护多个不同 issue 对同一组 Wiki 页面产生语义冲突；页面级并发仍按本项目 semantic-footprint 规则协调。
<!-- END CODEX THREAD BEADS PROTOCOL -->
