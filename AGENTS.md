# 噜Wiki 维护说明

Address the user as Adrian.

本目录是一个由 LLM Agent 维护的 Obsidian-style wiki。Karpathy 的 LLM Wiki 文档是本项目的运行范式参考，不是第一条语料。不要把运行范式、项目说明、用户指令误当作待摄入资料。

本 vault 采用扁平 wiki：生成的 wiki 页面默认直接放在 vault 根目录，不按 `sources/concepts/entities/synthesis` 建多层目录，也不在普通页面上用 `type` 区分概念、实体、综合或来源。组织主要依靠页面标题、Obsidian 双向链接、tags 和 `index.md` 的主题地图完成。

## 基本原则

- Adrian 负责提供链接、文件、问题和判断重点。
- **本项目是 Wiki 维护，不是 coding 项目**：Agent 只执行来源发现与核验、raw 快照、知识页面、关系链接、`index.md` / `log.md`、QMD 与内容型 Beads 维护；不得自行认领或实施脚本、helper、适配器、测试、CI/CD、基础设施等 coding 任务。危险 cybersecurity issue 按本文件规则直接 delete；其他非危险纯实现 issue 必须添加 `scope:out-technical-implementation`、降为 P4 并长期 defer，不得释放回 ready 队列。只有 Adrian 对具体编码工作作出明确指令时才能例外。
- **研究对象以商业实体为主、学术实体为辅**：主语优先是可稳定指认的公司、法律主体、品牌、产品／平台、业务单元、基金与投资机构、创始人和关键人物，以及融资、投资、并购、客户、供应商、渠道、合作、许可和市场进入／退出等具体关系或事件。学术机构、实验室、研究者、论文和数据集只在它们与商业实体存在可核验关系，或能核验具体实体／产品主张时作为辅助节点。
- **做实体研究，不做商学理论研究**：实体页应核验标准名与别名、法律／运营主体、所有权、创始与管理团队、产品线、客户与用例、融资并购、合作伙伴、竞争实体、时间线和证据边界。商业模式、市场采用和竞争只是实体观察维度；不得因此创建抽象的商业理论、泛市场机制或管理学框架页。技术能力只写到识别实体和产品定位所需的高层事实。
- **Cybersecurity 与技术实现不是本项目的研究目标**：不得主动研究、认领、建页或建立 redlink/Bead 来追踪漏洞／CVE、攻击与绕过方法、恶意载荷、凭据、反序列化利用链、scanner 规则、API/schema、源码、补丁、版本复现、部署或工程验收。危险 cybersecurity issue 按下一条直接 delete；非危险、非实现型但仍属 cybersecurity 的 issue 添加 `scope:out-cybersecurity`、降为 P4 并长期 defer，不得研究、建页、建 redlink 或释放回 ready。商业实体若发生公开安全事件，只能在确有必要时记录不含操作细节的高层治理影响，不把事件扩成独立技术任务。
- **危险 Bead 直接删除，普通实现题长期延期**：凡任务本身要求可操作的漏洞利用、攻击／绕过、恶意载荷、凭据获取、恶意软件、scanner 规避或远程代码执行复现，必须使用 `./scripts/bd-agent delete <明确 ID>` 直接删除，不得关闭、延期、转交或重建；其配对的空白 redlink 同时经 Obsidian CLI 删除，避免巡检再次建回。若配对页面已有实质内容，先停止工作并报告，不得盲删非空页面。其他非危险纯 API/schema、源码、补丁、版本复现、部署或工程实现题添加 `scope:out-technical-implementation`、降为 P4 并长期 defer，不得释放回 ready。随后立即原子领取下一项合规的商业实体任务，或直接支撑商业实体关系／产品主张的辅助学术任务。
- Agent 负责读取资料、保存原始快照、提取要点、维护页面、建立链接、更新索引和记录日志。
- `raw/` 是来源层，尽量保持不可变；vault 根目录中的普通 markdown 页面是生成和维护层，可以随新资料持续修订。
- 所有知识性主张都要能追溯到 raw 快照、外部来源或其他明确证据。
- 新资料进入后，知识库应当变得更好，而不是只增加一篇孤立摘要。
- 普通 wiki 页面以可稳定指认的商业实体及其具体关系／事件为主要主语，而不是以“某篇文章如何表述”为中心。学术实体仅作辅助；抽象机制、趋势和商学概念默认写入相关实体页的小节，不独立建页，除非 Adrian 对该对象作出明确指令。来源是证据，不是知识页面的主语。
- **QMD-first 是每次 ingest 的硬规则**：必须从 vault 根目录使用项目本地 `.qmd/index.sqlite` 作为第一搜索入口；Obsidian CLI 的 `search`、`files` 和对 `index.md` 的 `read` 只用于补充核对，不能代替 QMD 检索，也不能用名称相似的全局 collection 代替项目本地索引。
- **新页数量不设固定上限或下限**：先更新所有相关旧页，再为 vault 尚未覆盖、证据足够且符合实体范围的公司、法律主体、品牌、产品／平台、投资机构、人物或具体关系／事件建页；学术节点仅作直接辅助，数量由本轮实体关系结构决定。

## Obsidian CLI-only 文件边界

- **本 vault 内所有 Markdown 操作都必须经过 Obsidian CLI**：列举、搜索、读取、创建、追加、覆写、重命名、移动、删除和 frontmatter/property 修改，均使用 `obsidian vault="噜Wiki" ...`。调用时必须显式指定 vault，不能依赖最近聚焦的 vault。
- 禁止用 `cat`、`sed`、`awk`、`rg`、`grep`、`find`、`apply_patch`、shell 重定向／heredoc、Python/Node 文件 API 或编辑器直接读取、扫描或修改本 vault 的 `.md` 文件。非 Markdown 附件和工具状态可用适当工具处理，但由它们生成的 Markdown 快照仍必须经 Obsidian CLI 写入。
- QMD 只承担项目本地索引健康检查和候选检索。QMD 的命中路径与摘要可用于定位候选，但凡要理解、引用或修改页面，必须再用 `obsidian read` 读取当前全文；精确文本核对使用 `obsidian search` / `obsidian search:context`，文件枚举使用 `obsidian files`。
- Obsidian CLI 或目标 vault 不可用时，Markdown 相关 issue 视为阻塞；不得静默回退到直接文件访问。写入后先用 `obsidian read` 核对页面，再运行 `qmd update` 并验证项目本地索引。
- **长中文整页写入的 UTF-8 安全边界**：当前 Obsidian 1.13.4（installer 1.12.7）的 `create ... content=... overwrite` 在约 8 KB CLI 传输边界可能把多字节字符写成 U+FFFD；在 shell 中先解码 base64 再塞回 `content=` 不能规避。凡整页写入或 `content` 可能接近该边界，先运行 `./scripts/obsidian-safe-write --vault "噜Wiki" --path "<path>" --check` 固定原始字节 SHA-256；现有页把新全文从 stdin 送入同一 helper 并加 `--expect-sha256 "<sha256>"`，新页则显式加 `--expect-absent`。该 helper 只接受 vault-relative `.md` 路径，将 UTF-8 保持为 ASCII base64 直到进入 Obsidian 应用，在同步 `app.vault.process` callback 内执行 SHA-256/字节数 CAS，并用 `readBinary` 做写后原始字节核验。局部修改也必须使用同步 `app.vault.process` 和旧全文 CAS，不要把 `obsidian read` 的长页输出重新塞入原始 `content=`。
- **U+FFFD 写后门槛**：每轮 Markdown 写入后，用 `obsidian vault="噜Wiki" search query=$'\uFFFD'` 与 `search:context` 检查新增 replacement character；长页还要在应用内核对 UTF-8 byte count、SHA-256 和全文相等性。发现新增 U+FFFD 时不得更新 QMD 或关闭 issue，必须先恢复原文并再次全库核验。
- Agent skills、工具说明等 vault 外部 Markdown 不属于本规则的内容层，但不得借此绕过对本 vault 的限制。

## 联网搜索硬门槛

- 凡涉及知识内容的新建、更新、核验、实体 enrich 或可复用 query 综合，都必须主动联网搜索；不能只整理本地材料。纯工具诊断可以是 local-only，但不得据此新增或改写知识主张。
- 无人值守／夜间维护每轮必须包含外部发现或补证分支，不能只做本地 lint、改链接、重排或索引刷新。
- 普通网页检索先使用 `web.run` 的 `search_query`；特定平台、学术库或已接入服务优先使用对应 connector、API 或 CLI。先查官方页面、论文原文、监管／交易所文件、机构公告和其他一手来源，再用独立可靠来源交叉核验。
- 搜索结果摘要只能作为线索，不能直接作为证据。必须打开并核对实际页面；记录标题、作者／机构、发布日期、访问日期、URL，以及能支持具体主张的内容。无法访问全文时明确标成 abstract-only、metadata-only 或 needs_verification。
- 对近期、争议性、身份关系、融资金额、产品能力和因果性主张，原则上寻找至少两个相互独立的来源；只有单一来源时保留来源归属和证据限制，不把宣传口径写成已核验事实。
- 搜索应覆盖实体标准名与别名、关键机制词、反例／争议词和时间限定；停止时明确写出已核验事实、矛盾、未找到的证据与下次重开条件。

## 目录结构

保持扁平，避免过早分类：

- `raw/`：外部链接、网页、论文、报告、访谈、笔记等资料的原始快照或来源记录。只有 raw 层需要用 frontmatter 区分来源类型、抽取方法、可用状态等。
- `raw/assets/`：图片、PDF、附件、网页下载资源等。
- vault 根目录：仅放商业实体、直接辅助商业实体核验的学术实体，以及具体关系／事件页面，不通过 `type` 字段分类；机制、趋势、问题和综合观察写入相关实体页，不独立建页。
- `index.md`：内容地图。每次新增或显著修改页面后更新。
- `log.md`：追加式操作记录。每次 ingest、query、lint 或结构调整后追加。
- `AGENTS.md`：本文件，定义 Agent 如何维护这个 wiki。

## 会话启动

每次开始处理本 vault：

1. 先用 `obsidian vault="噜Wiki" read path="index.md"` 和 `obsidian vault="噜Wiki" read path="log.md"` 读取内容地图与日志。
2. 判断用户输入属于哪一类：待摄入资料、查询问题、结构维护、还是项目指令。
3. 如果是待摄入资料，先按下文的 QMD-first 门槛搜索本 vault；之后再用 `obsidian files`、`obsidian search`、`obsidian links` / `backlinks` 核对文件名、链接和遗漏，避免重复建页。
4. 如果用户只给出外部链接，默认将其视为待摄入资料；如果链接明显是方法说明或项目规范，先把它转化为维护规则，而不是摄入为语料。

## Ingest 工作流

### QMD-first 硬门槛

每次新的 ingest 都必须先用普通 `qmd query <单行查询文本>` 检索本 vault，然后才能判断旧页如何更新或新页写什么：

1. 所有 QMD 命令都从本 vault 根目录运行。先执行 `qmd status`，确认输出的 `Index:` 是本项目的 `/Users/siyaozheng/噜Wiki/.qmd/index.sqlite`；不能仅凭 collection 名称判断，也绝不能改用名称相似的全局 collection。
2. 如果 `.qmd/index.sqlite` 不存在，先在 vault 根目录运行 `qmd init`，再运行 `qmd collection add .`。如果项目本地索引存在但 collection 缺失，运行 `qmd collection add .`；如果文件数为零或索引陈旧，运行 `qmd update`。完成后再次用 `qmd status` 确认项目本地路径和已索引文件数，再继续 ingest。空的、陈旧的或错误路径上的索引结果不能被解释为“没有相关页面”。
3. 候选检索统一运行普通 `qmd query <单行查询文本>`，分别以标题、别名、实体、罕见短语和机制词做多轮查询，并保留 QMD 默认的 query expansion、向量检索与 reranking。不得改用 `search` / `vsearch` 子命令，也不得加入 `--no-rerank`、`intent:` / `lex:` / `vec:` / `hyde:` 改写、结果数上限、分数阈值或其他改变召回与排序的参数，除非 Adrian 明确要求。
4. ingest 过程不得自动运行 `qmd embed`，也不得为了本轮摄入安装或刷新 embedding、reranking 或 query-expansion 模型；模型安装和向量生成由专门的 QMD 维护工作流负责。即使 `Vectors: 0 embedded` 也先运行普通 `qmd query` 并保留默认流程；若查询因模型缺失或损坏失败，明确报告阻塞，不得静默降级为其他检索子命令，也不得因此跳过 QMD-first 检索。
5. 先对用户给出的标题、文件名、URL 可见信息、实体名和判断重点运行一轮普通 `qmd query`；读完来源并提取术语后，再运行一轮定向 `qmd query`。QMD query 用于返回候选路径和摘要；随后必须用 `obsidian read path="<候选路径>"` 读取完整页面，不能用 `qmd get` / `qmd multi-get` 代替 Obsidian CLI 全文读取，也不能只凭 query 摘要决定新建页面或修改主张。
6. QMD 检索完成后，再用 `obsidian files`、`obsidian search` / `search:context` 和 `obsidian read path="index.md"` 做文件清单、精确文本与主题地图交叉核对。QMD 是主搜索引擎，Obsidian CLI 是本 vault 唯一页面访问入口。

### 先更新旧页，再按知识结构新增页面

每次完成的 ingest 必须遵循固定顺序：**使用项目本地 QMD 检索候选 → 用 Obsidian CLI 读取候选旧页 → 主动联网检索与补证 → 用 Obsidian CLI 更新所有相关旧页 → 仅为尚未覆盖且证据充分的商业实体、直接辅助商业实体核验的学术实体或具体关系／事件新增页面 → 用 Obsidian CLI 更新 `index.md` 和 `log.md` → 运行 `qmd update` 并验证本轮页面可检索**。

- 旧页更新优先。凡新资料能补充、修正、反驳或限定的相关旧页，都应先写入；不能用新页面替代本应完成的旧页维护。
- 新页只承载已有页面尚未覆盖、能够独立积累且符合实体范围的节点。页面主语优先是商业实体或具体关系／事件；学术实体只作直接辅助。抽象机制、趋势和商学概念写入相关实体页，不另建页；不得创建来源摘要页、同义重复页或空壳页，也不得为了追求页数机械拆分观察。
- 一个 source 可以不新建页面，也可以支撑多个新页面；判断标准是对象是否独立、证据是否充分以及未来是否值得持续积累，而不是固定配额。
- 每个新页都必须直接保留 raw 或外部证据链接，并说明证据状态、边界、矛盾和待核验点。
- 如果现有证据不足以诚实支撑一个独立世界节点，只保存 raw 并标记 `needs_verification`；不得编造或创建填充页。
- 新增实体的关系若依赖尚不存在的稳定机构端点，应同时按机构节点化规则补齐必要页面；如果端点身份仍不确定，则把线索保留在 raw，不写会制造错误图谱边的 wikilink。

### 写入哲学

每个 source file 或 source link 先作为证据进入判断流程，而不是天然变成孤立页面。Agent 必须先读取资料、分析它与已有页面的关系，再决定写入方式：

- 先通过 QMD 找出所有相关已有页面，优先更新这些页面，并把新 source 作为证据、反例、补充或限定条件加入。
- 已有页面充分覆盖主题时可以只更新旧页；只有出现多个尚未覆盖且证据充分的商业实体、直接辅助商业实体核验的学术实体或具体关系／事件时，才可以分别建页。机制、趋势、问题和综合写入相关实体页；页面选题和数量由实体关系结构与证据强度决定。
- `raw/` 快照应尽量为每个 source 保留；根目录不再创建“source 类型页面”。如果某个来源支撑值得长期积累的商业实体、直接辅助商业实体核验的学术实体或具体关系／事件，页面标题直接指向该实体或事件；机制和观察写入相关实体页。
- 公司、法律主体、品牌、产品／平台、业务单元、投资机构、关键人物和商业项目，以及直接支撑其关系或产品主张的学校、实验室、研究者、论文和数据集，可以作为单独页面；一般地点、抽象项目或与商业实体无直接关系的学术对象不独立建页。
- 人物、公司和机构页不能只记录孤立履历；要把它们放回中国语境下的关系网络。尤其要外部补证“三同”线索：同乡/地缘、同学/同校/同门、同事/共事/任职重叠。三同是关系基础设施，不是八卦；只记录公开、可核验、与主题相关的关系。
- 写入时维护双向链接：普通 wiki 页面之间尽量互链；普通页面必须在“证据”段链接到 raw 或外部来源。raw 文件可在 frontmatter 中用 `related_pages` 记录它支撑的页面。

### Redlink 直接进入 Beads

- **本项目把 redlink 定义为 Agent 有意创建的空白 Markdown 页面**。允许并鼓励为符合下述实体范围的商业实体、辅助学术实体或具体关系／事件创建空页，把它们先放进知识网络；空页是显式 backlog 节点，不要求当场用低质量内容填满。
- **Redlink 服从实体范围**：默认只为可稳定指认的公司、法律主体、品牌、产品／平台、业务单元、投资机构、关键人物，以及融资并购、客户供应商、合作许可等具体关系或事件建立 redlink；学校、学术机构、实验室、研究者、论文和数据集仅在直接支撑商业实体关系或产品主张时作为辅助节点。不得为抽象商学理论、泛市场机制、通用技术标准、算法、API/schema、源码／部署或 cybersecurity 主题创建 redlink/Bead。
- redlink 空页只能通过 `obsidian vault="噜Wiki" create ...` 创建。每创建一张 redlink 空页，必须在同一任务中立即创建一个对应的 Beads issue，默认使用 `type=task`、`labels=redlink,knowledge-gap`，在 description 中记录页面标题／路径、触发来源和需要回答的问题；若来自某个 ingest 或巡检 issue，再增加 `discovered-from` 关系。
- **持续发现、即时建红链、即时建 Bead 是每个知识任务的常驻动作，不是收尾动作**：在 QMD 检索、Obsidian 回读、联网补证、旧页更新和关系核对的任一阶段，只要遇到当前未覆盖、可稳定指认、值得后续研究且符合实体范围的商业实体、辅助学术实体或具体关系／事件，就立即用 Obsidian CLI 创建 redlink 空页，并在同一工作段立即用 `./scripts/bd-agent create` 建立对应 issue；禁止为抽象理论、技术实现或 cybersecurity 缺口建单，也禁止等到收尾再批量补。
- 每次准备关闭知识 issue 或领取下一项前，必须核对本轮创建的全部 redlink 与未完成 Beads issue 一一对应，并在当前 issue 的完成证据中列出“页面路径 → issue ID”；如果本轮确实没有符合条件的知识缺口，也要明确记录“未发现可稳定指认的新 redlink”，不得静默跳过检查。
- **一张 redlink 空页对应一个未完成 Beads issue，不设频次、中心性或证据阈值，也不等待周期巡检后再入队。** 优先级可按研究价值、关联页面数量、时效性和证据可得性调整。
- redlink issue 的默认验收包括：项目本地 QMD 候选检索、Obsidian CLI 读取相关旧页、主动联网搜索与来源边界、通过 Obsidian CLI 补全或合并页面、维护相关链接与证据、更新 `index.md` / `log.md`、运行 `qmd update` 并用 QMD 命中加 `obsidian read` 回读。
- 如果联网研究后确认它是重复节点、错误名称、不可消歧对象或不值得独立成页，允许通过 Obsidian CLI 合并、改名或移除空页，并在对应 Beads issue 中记录理由后关闭；不得为了关闭 issue 编造内容。
- redlink 空页仍可能成为图谱端点。只在对象可稳定指认、当前上下文确实需要该节点时创建；身份不明的候选、否定／排除／举例语境对象和仅凭名称相似推测的关系仍写成纯文本。
- 定期巡检必须用 Obsidian CLI 核对“空页 ↔ 未完成 redlink issue”是否一一对应：漏建 issue 立即补建，已补全或已移除页面的 issue 及时验收关闭。
- 写成 wiki 页面时，先抽取可沉淀的 observation：发生了什么、谁在做什么、机制是什么、趋势如何变化、证据强弱如何、还有什么不确定。不要把正文写成“这篇文章报道/认为/介绍……”。这类表述只放在“证据”“来源”“待核验”段落。
- 如果只能得到未经核验的 statement，就不要把它提升为世界 observation；保留 raw，并标记 `unverified`、`unavailable` 或 `needs_verification`。

当 Adrian 提供待摄入链接或文件时：

1. 先从 vault 根目录执行项目本地 QMD 健康检查，并用当前可见的标题、文件名、URL 信息、实体名或问题重点运行普通 `qmd query <单行查询文本>`；在确认 `Index:` 指向本项目 `.qmd/index.sqlite` 且完成初始 query 候选检索前，不进入页面写入。
2. 获取资料内容，并记录标题、作者/机构、发布日期、访问日期、URL 或本地路径。
3. 在 `raw/` 保存原始快照；如果无法完整保存，至少保存来源记录和可访问片段。
4. 读资料并提取核心主张、证据、定义、案例、数据、方法和限制。
5. 用提取出的标题、别名、实体和机制词再次运行普通 `qmd query <单行查询文本>` 定向检索，并保留默认 query expansion、向量检索与 reranking；再用 `obsidian read` 读取候选旧页全文，随后用 `obsidian search`、`obsidian files` 和通过 `obsidian read` 获取的 `index.md` 交叉核对遗漏。
6. 先更新所有相关旧页，把新来源作为证据、反例、补充或限定条件写入，并维护这些旧页的来源和反向链接。
7. 旧页更新完成后，仅为 vault 尚未覆盖、证据足够且值得独立积累的商业实体、直接辅助商业实体核验的学术实体或具体关系／事件创建根目录页面。机制、趋势、问题和综合写入相关实体页；新页面不写 `type` 字段，数量不设配额。
8. 不为普通链接创建专门的来源页面；raw 通常已经足够承担 provenance。制度文件本身不独立建知识页；论文、数据集、学校、实验室或研究者只有在直接支撑商业实体关系或产品主张时，才作为辅助学术实体建根目录页。
9. 维护双向链接：普通 wiki 页面之间尽量互链；被更新页面和所有新页面都必须直接链接到 raw 快照或来源 URL。raw 快照可在 frontmatter 中用 `related_pages` 记录相关页面。
10. 明确标注矛盾、分歧、不确定性和需要进一步查证的点；不得因建页数量影响证据标准。
11. 核验每张新页面都有独立对象和充分证据，且没有来源摘要页、同义重复页、空壳页或错误图谱边；不以固定页数作为完成标准。
12. 通过 Obsidian CLI 更新 `index.md`。
13. 通过 `obsidian append path="log.md"` 追加记录；证据不足而停在 raw 层的候选应明确记为待核验，不能写成已确认实体或关系。
14. 完成 `index.md` 和 `log.md` 写入后，从 vault 根目录运行 `qmd update`，把本轮新增和修改写回项目本地索引；不得在此步骤运行 `qmd embed`。
15. 用普通 `qmd query <页面标题或独特短语>` 逐一查找本轮每个新增或修改的 Markdown 页面，保留默认查询扩展、向量检索与重排，并用 `obsidian read` 核对页面当前全文与命中内容已经是最新版本。任何页面无法检索时，本轮 ingest 尚未完成；修复项目本地索引并重新验证，不能切换到全局 collection 或其他检索子命令规避失败。

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

1. 先用 Obsidian CLI 读取 `index.md`，并结合 QMD 定位相关页面。
2. 用 Obsidian CLI 读取相关 wiki 页面和必要的 raw source。
3. 凡回答涉及可外部核验的知识主张，主动联网搜索；对最新、争议性或高影响事实执行交叉核验。
4. 回答时区分来源事实、wiki 综合、以及 Agent 的推论。
5. 如果回答形成可复用综合，通过 Obsidian CLI 写入相关商业实体、辅助学术实体或具体关系／事件页面，不为综合本身另建根目录页，并通过 Obsidian CLI 记录到 `log.md`。

## Lint 工作流

定期检查：

- 孤立页面和缺少反向链接的页面。
- redlink 空页与未完成 Beads issue 的一一对应；同时修复未解析链接中的拼写错误、改名残留和错误路径。
- 多个页面对同一概念的重复定义。
- 新资料推翻或限定了旧判断但旧页未更新。
- 只有结论、缺少来源链接的主张。
- `index.md` 与实际文件不一致。
- 反复出现但尚未建页、且符合本项目范围的商业实体、辅助学术实体或具体关系／事件；不得把抽象概念、技术实现或 cybersecurity 主题转成 Bead。

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

- 页面文件名应短、稳定、可读，例如 `GitHub.md`、`GitHub Copilot.md`、`2026-08 GitLab 重组.md`。
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
- 共享 Obsidian vault 的本地 GitButler target 当前是 `gb-local/main`，与公开仓库的 Digital Garden `main` 历史不相关。禁止在共享 workspace 直接改 target、pull、push 或 land，也不得把发布站点工作树拉进 vault。
- 每个 task 完成并验收 Wiki 工作后，先在共享 vault 中用 GitButler 形成只含其独占变化的 commit，并向协调者报告 branch、commit ID 与允许公开的文件；不能把本地 commit 当作已经完成 GitHub 落地。
- GitHub 落地只在 `/Users/siyaozheng/luwiki-public-main` 的干净 GitButler 发布克隆执行。该 clone 只用于版本落地，不作为第二个 Obsidian/QMD 维护 vault。
- 发布克隆必须保持 target=`origin/main`、push remote=`origin`。先运行 `but pull --check`，把允许公开的普通 Wiki 页面映射到 `src/site/notes/<文件名>.md`，不得发布 `raw/`、`log.md`、`.qmd/`、`.obsidian/`、Beads DB 或其他本地状态；核对专属 diff 后使用 `but land <branch> --yes`。仅 `but push` feature branch 不等于已进入 `main`。
- 若远端前进、路径冲突、来源不允许公开、会夹带其他 Agent 内容或需要 force-push，则必须 fail closed 并向 Adrian 报告；禁止静默覆盖或强推 `main`。

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

- 本协议中的持续 worker 仅指 Wiki-only 实体知识维护 worker；不得将“持续工作”解释为可以认领脚本、helper、适配器、测试、CI/CD 或基础设施等 coding issue。危险 cybersecurity issue 按本文件规则直接 delete；其他非危险纯实现 issue 添加 `scope:out-technical-implementation`、降为 P4 并长期 defer，不得释放回 ready 队列；只有 Adrian 对具体编码任务明确授权时才能例外。
- 每次原子 claim 后、开始检索或写入前，必须先做实体范围检查：商业实体与具体关系／事件可继续，学术对象只能作为直接辅助。危险 cybersecurity issue 直接用 `./scripts/bd-agent delete <明确 ID>` 删除并清除配对空 redlink；非危险、非实现型但仍属 cybersecurity 的 issue 添加 `scope:out-cybersecurity`、降为 P4 并长期 defer；其他非危险纯实现型 issue 添加 `scope:out-technical-implementation`、降为 P4 并长期 defer；其他不以商业实体、直接辅助学术实体或具体商业关系／事件为对象的 issue 添加 `scope:out-entity-research`、降为 P4 并长期 defer。三类延期项均不得研究、建页、建 redlink 或释放回 ready。完成处置后立即原子 claim 下一项。
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
