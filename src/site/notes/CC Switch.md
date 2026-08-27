---
{"dg-publish":true,"permalink":"/CC Switch/","title":"CC Switch","tags":["#Agent","#配置管理","#Provider","#MCP","#本地路由"],"created":"2026-08-10","updated":"2026-08-26","dg-note-properties":{"status":"processed","title":"CC Switch","source_count":10,"sources":["raw/2026-08-10-路遥最近一周新增实体清单.md","raw/2026-08-10-最近一周新增实体外部补证.md","https://ccswitch.io/zh/","https://github.com/farion1231/cc-switch","https://github.com/farion1231/cc-switch/blob/main/docs/user-manual/en/4-proxy/4.2-routing.md","raw/2026-08-10-未决问题-Agent软件补证-batch-005.md","https://github.com/farion1231/cc-switch/security/policy","https://github.com/farion1231/cc-switch/releases/tag/v3.19.2","https://github.com/farion1231/cc-switch/blob/main/docs/user-manual/en/5-faq/5.1-config-files.md","https://github.com/farion1231/cc-switch/blob/main/docs/user-manual/en/1-getting-started/1.5-settings.md"],"tags":["#Agent","#配置管理","#Provider","#MCP","#本地路由"],"created":"2026-08-10","updated":"2026-08-26","product_name":"CC Switch","developer":null,"operator":null,"owner":null,"manufacturer":null,"launch_date":null,"product_status":"active_open_source","category":null,"platforms":[],"related_products":[],"customers":[],"website":null,"as_of":"2026-08-10","status_note":"官方GitHub仓库当前维护的开源桌面工具"}}
---

# CC Switch

CC Switch 是跨平台桌面配置工具，用来统一管理 Claude Code、Claude Desktop、[[Codex CLI\|Codex CLI]]、Gemini CLI、OpenCode、OpenClaw 与 Hermes 等应用的 provider、MCP、skills、会话和本地路由。官方仓库由 GitHub 账号 `farion1231` 维护。

## 系统边界

- 项目把 `~/.cc-switch/cc-switch.db` 的 SQLite 数据库作为 provider、MCP、prompt 和 skill 等同步状态的主要真相来源，并用本地 JSON 保存设备级设置。
- 非路由模式下，切换 provider 会把选择写入受管应用的生效配置；本地路由开启后，工具会把应用 endpoint 改到本地服务，由代理转发、记录使用量并执行 failover。
- 官方仓库描述了原子写入、自动轮换备份、应用配置回填和本地代理热切换；这些机制降低配置损坏和手工维护成本，但也意味着 CC Switch 对多个 agent 工具拥有高权限写入能力。
- GitHub 账号的公开显示名为 Jason Young，但除账号自述外缺少独立人物履历证据，因此本轮不建立维护者人物页。
- 截至 2026-08-10，GitHub 的最新正式版是 v3.19.2（2026-08-06）。该版本对无界文件读取、代理缓冲、深链导入确认和配置写盘做了加固；版本说明同时记录了历史用量可能虚高、部分存量 skill 需重装等迁移边界，说明“成功安装”并不等于旧状态已经自动纠正。

## 安全与恢复

- provider API key、OAuth 缓存、SQLite、应用配置副本和路由日志属于不同敏感层。启用前应确认每层的保存位置、文件权限、备份策略和删除方式，不能把“本地存储”等同于“低风险”。
- 本地路由会改写 live 配置；异常退出、另一个程序同时写入或版本升级都可能造成恢复不完整。切换前应保存脱敏配置摘要和可用恢复点，关闭路由后再核对 endpoint、认证方式与核心命令。
- 官方发布说明提示，某些 Codex OAuth 反向代理用法可能触及服务条款。CC Switch 提供协议转换或路由能力，不代表上游平台授权所有用法。
- CC Switch 不是 Claude、OpenAI、Google 或其他模型供应商的官方统一控制面。第三方 provider 的可用性、计费、隐私和账号风险仍由用户分别核验。
- 官方安全策略把威胁模型写得更具体：项目没有自营云后端、没有多用户隔离，也不与运行用户做权限隔离；本地 HTTP 代理可被配置到非 loopback，远程同步载荷、导入文件、上游响应、live 配置以及凭据进入日志都属于不可信边界。只有 latest 3.x 获得安全更新。
- 官方仓库、威胁模型和修复说明提高了可审计性，但不是第三方渗透测试或形式化安全证明。尤其是配置导入、WebDAV／S3 同步、MCP／skill 执行与 OAuth 反向代理仍需按高权限本地软件治理。

## 截至 2026-08-10 的最低运行门槛

1. 只从官网或官方 GitHub Releases 安装 latest 3.x；升级后核对 release note 中需要人工重建或重装的存量状态。
2. 没有明确跨机需求时把本地代理限制在 loopback；若必须暴露到局域网，需另加访问控制和主机防火墙，不能依赖“本地应用”标签。
3. 首次接管或大版本升级前，保存不含密钥值的配置摘要与数据库备份，并实际演练一次“关闭接管 → 恢复 endpoint／认证 → 核心命令成功”的路径。
4. WebDAV／S3 同步默认关闭；启用时使用独立凭据和私有存储，确认远端删除、版本保留和恢复覆盖语义。配置导出与日志在分享前必须做密钥、OAuth token、请求头和私人路径扫描。
5. 用量日志只能作为本地估算与故障线索；涉及计费或合规时要与供应商账单、原始会话和当前版本的统计口径交叉核验。
6. Codex OAuth 等反向代理功能只有在上游条款明确允许时才能启用；“工具能够转发”不能推出“账号与服务条款风险已消失”。

## 相关页面

- [[Codex CLI\|Codex CLI]]
- [[AI Agent 安全\|AI Agent 安全]]
- [[AI 记忆系统\|AI 记忆系统]]
- [[Agentic 软件开发工作流\|Agentic 软件开发工作流]]
- [[Harness Engineering\|Harness Engineering]]

## 证据

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [CC Switch 官网](https://ccswitch.io/zh/)
- [CC Switch 官方仓库](https://github.com/farion1231/cc-switch)
- [CC Switch 本地路由说明](https://github.com/farion1231/cc-switch/blob/main/docs/user-manual/en/4-proxy/4.2-routing.md)
- 原始资料快照（本地归档）
- [CC Switch 安全策略与威胁模型](https://github.com/farion1231/cc-switch/security/policy)
- [CC Switch v3.19.2](https://github.com/farion1231/cc-switch/releases/tag/v3.19.2)
- [配置文件与备份说明](https://github.com/farion1231/cc-switch/blob/main/docs/user-manual/en/5-faq/5.1-config-files.md)
- [备份、云同步与日志设置](https://github.com/farion1231/cc-switch/blob/main/docs/user-manual/en/1-getting-started/1.5-settings.md)
