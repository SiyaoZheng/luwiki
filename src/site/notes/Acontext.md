---
{"dg-publish":true,"permalink":"/Acontext/","title":"Acontext","tags":["#Agent","#Skills","#AI记忆","#工作流"],"created":"2026-08-07","updated":"2026-08-26","dg-note-properties":{"status":"processed","title":"Acontext","source_count":7,"sources":["raw/2026-08-07-luyao-b030-148-With-Acontext,-your-agents-can-improve-themselves-via-dynamic-skill-6529d466.md","https://acontext.io/","raw/2026-08-10-未决问题-Agent软件补证-batch-005.md","https://docs.acontext.io/","https://docs.acontext.io/store/skill","https://docs.acontext.io/security/encryption","https://github.com/memodb-io/Acontext"],"tags":["#Agent","#Skills","#AI记忆","#工作流"],"created":"2026-08-07","updated":"2026-08-26","product_name":"Acontext","developer":null,"operator":null,"owner":null,"manufacturer":null,"launch_date":null,"product_status":"active","category":null,"platforms":[],"related_products":[],"customers":[],"website":null,"as_of":"2026-08-10","status_note":"公开的agent skill memory产品"}}
---

# Acontext

Acontext 是一个面向 AI agent 的 skill memory 产品节点。它把 agent 运行过程中的成功经验沉淀成可读、可编辑、可同步到本地的 Markdown skill 文件，而不是只把历史对话塞进向量库。

## 观察

- Skill memory 把 agent 的“经验”从一次性会话转成可复用文件：任务过程被捕获、蒸馏成 `SKILL.md` 风格说明，再被后续 agent 读取。
- Acontext 与 [[AI 记忆系统\|AI 记忆系统]] 相邻，但它更偏程序性记忆和工作流记忆；核心不是记住用户事实，而是复用解决问题的方法。
- 对 [[Agentic 软件开发工作流\|Agentic 软件开发工作流]] 来说，skill memory 是把隐性操作经验显式化的一种基础设施。它可以和 `AGENTS.md`、工具权限、验证脚本、项目 runbook 共同构成 agent 的外部工作环境。
- Acontext 也提示 [[Agentive 系统\|Agentive 系统]] 的边界：一个系统可以表现出“越用越会”的改进循环，但如果目标、身份和评估仍主要由外部工具与人类定义，它仍然更像 agentic workflow 的记忆层，而不一定是 agentive 系统。
- 官方仓库采用 Apache-2.0 许可，并提供 Python、TypeScript 客户端和 Docker 自托管入口。`acontext server up` 会创建 `.env`、`config.yaml` 与持久化 `db` 目录；技能可以 ZIP 上传、逐文件读取、删除和下载，因此原先未知的 SDK、部署和导出路径已经有公开答案。
- 官方加密文档描述了按项目启用的 AES-256-GCM envelope encryption：API key 携带主密钥，服务端只保存密文和被包裹的数据密钥；只有项目 owner 可开关加密。其代价是加密项目不能文本搜索或去重，丢失密钥后也不能恢复。

## 截至 2026-08-10 的答案与边界

- **已回答**：SDK、自托管、默认持久化目录、技能 ZIP 结构、读取／删除／导出接口和项目级加密已有官方文档与源码入口，不再作为笼统未知项。
- **权限与删除边界**：公开材料能确认 API key、项目 owner 和单个 skill 删除接口；本批未取得按技能／文件细分的最小权限矩阵、所有 session／artifact 的保留期限、备份擦除证明或第三方安全审计。因此只能写“产品提供这些控制面”，不能写“企业数据治理已经完备”。
- **效果边界**：“improve themselves” 应理解为外部 skill-memory loop 的产品叙事。仓库公开和技能可编辑提高可检查性，但没有受控 benchmark 证明自动蒸馏技能能稳定降低错误率、跨任务泛化或节省总成本。
- **可复核门槛**：若要把产品效果升级为已验证结论，至少需要固定任务集、无记忆／原始历史／人工技能／自动技能四组对照，报告成功率、回归率、误记与冲突、token／时间成本，并公开生成技能和失败轨迹。

## 相关页面

- [[AI 记忆系统\|AI 记忆系统]]
- [[Agentic 软件开发工作流\|Agentic 软件开发工作流]]
- [[Agentive 系统\|Agentive 系统]]
- [[Matt Pocock Skills\|Matt Pocock Skills]]
- [[Codex CLI\|Codex CLI]]

## 身份与组织证据边界

- 公开仓库由 GitHub 组织 `memodb-io` 维护；截至本次检索，官网与仓库材料不足以建立创始人、学校、前任职或融资关系。因此本页只记录产品和技术事实，不从账号名或贡献记录推断人际关系。
- 可确认的关系是技术相邻：产品把可复用经验沉淀为本地技能文件，与 [[Matt Pocock Skills\|Matt Pocock Skills]]、[[AI 记忆系统\|AI 记忆系统]] 形成机制层连接。

## 证据

- 原始资料快照（本地归档）
- [Acontext](https://acontext.io/)
- 原始资料快照（本地归档）
- [Acontext 官方文档](https://docs.acontext.io/)
- [Agent Skill 存储与接口](https://docs.acontext.io/store/skill)
- [项目级端到端加密说明](https://docs.acontext.io/security/encryption)
- [Acontext 官方仓库](https://github.com/memodb-io/Acontext)
