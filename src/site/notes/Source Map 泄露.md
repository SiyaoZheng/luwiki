---
{"dg-publish":true,"permalink":"/Source Map 泄露/","title":"Source Map 泄露","tags":["软件供应链","源码泄露","AI安全","Agent","发布工程"],"created":"2026-08-07","updated":"2026-08-07","dg-note-properties":{"status":"seed","title":"Source Map 泄露","source_count":1,"sources":["raw/2026-08-07-luyao-b052-255-Claude-Code源码泄露-2683509d.md"],"tags":["软件供应链","源码泄露","AI安全","Agent","发布工程"],"created":"2026-08-07","updated":"2026-08-07"}}
---

# Source Map 泄露

Source map 泄露是指前端、CLI 或打包产物在发布时意外携带 `.map` 文件，使压缩或混淆后的代码可以映射回更接近原始源码的结构。对闭源 agent 产品来说，这既是发布工程问题，也是供应链安全问题。

## 观察

- 微信来源称 Claude Code 的 npm 包曾因 source map 暴露而被第三方还原大量 TypeScript 代码。该说法目前作为二次传播来源记录，本页不传播泄露仓库地址或复刻步骤。
- Source map 本身是正常调试工具，风险来自发布边界：哪些调试符号、内部路径、未发布功能、注释和结构信息不应进入公共包。
- 对 [[AI Agent 安全\|AI Agent 安全]] 来说，agent 产品的安全边界不只在 prompt、权限和工具调用，也在构建产物、包管理器、source map、符号表和 CI 发布配置。
- 对 [[Agentic 软件开发工作流\|Agentic 软件开发工作流]] 来说，发布前检查不应只跑测试，还要检查包体内容、许可证、私有路径、密钥痕迹、调试文件和未公开接口。
- 这类事件也会污染开源叙事：意外泄露不是开源，围观源码不等于获得合法复用授权。

## 边界

- 当前页不复述泄露代码细节，不链接泄露仓库，不提供下载、还原或使用方法。
- 若后续有官方说明，应优先用官方说明校正事件事实和影响范围。

## 相关页面

- [[AI Agent 安全\|AI Agent 安全]]
- [[Agentic 软件开发工作流\|Agentic 软件开发工作流]]
- [[Harness Engineering\|Harness Engineering]]
- [[Codex CLI\|Codex CLI]]

## 证据

- 原始资料快照（本地归档）
