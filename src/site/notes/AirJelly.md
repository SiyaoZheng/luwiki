---
{"dg-publish":true,"permalink":"/AirJelly/","title":"AirJelly","tags":["#AI助手","#Agent","#AI记忆","#上下文工程","#主动式AI"],"created":"2026-08-07","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"AirJelly","source_count":5,"sources":["raw/2026-08-07-luyao-b041-201-字节出来的-00-后团队，做了一款主动式-AI-桌面助手：只记录意图，想「预测你的下一步」-e6bc092d.md","raw/2026-08-10-平台主体身份补证-batch-019.md","https://www.airjelly.ai/","https://www.airjelly.ai/privacy-policy","https://www.airjelly.ai/terms"],"tags":["#AI助手","#Agent","#AI记忆","#上下文工程","#主动式AI"],"created":"2026-08-07","updated":"2026-08-10"}}
---

# AirJelly

AirJelly 是一款主动式桌面 AI 助手产品节点，由 [[持续低熵\|持续低熵]]（Low Entropy AI）团队/品牌开发。产品、团队品牌和法律主体分别建模：隐私政策把运营者写作 `LowEntropyAI, Inc. (doing business as AirJelly)`，但服务条款正文使用 `Low Entropy Group`，两份官方法律文本尚未解释二者关系。

## 观察

- AirJelly 不追求全量记录，而以 Enter 键作为意图锚点：在用户明确表达意图的瞬间截取上下文，再让 AI 补全两点之间的行为轨迹。
- 这一路线把 [[AI 记忆系统\|AI 记忆系统]] 从时间线记录推进到 Task/Event 结构：静态信息建模为 Entity，动态过程建模为 Task，再由 Event、摘要、进度、下一步和关键词组成可召回记忆。
- 对 [[实时 AI 交互模型\|实时 AI 交互模型]] 来说，AirJelly 是另一种时间对齐样本：它不是持续 full-duplex，而是用关键帧和主动推送预测用户下一步。
- 对 [[Agentive 系统\|Agentive 系统]] 来说，AirJelly 仍更像外部脚手架驱动的 proactive agent 产品；它有主动触发和任务执行，但目标、权限和确认仍应由用户控制。
- Proactive 接收率和任务执行 token 消耗被产品方视为关键指标，说明主动式 agent 的评估不只看日活，也看推送是否真正相关、执行是否创造价值。

## 截至 2026-08-10 的核验结论

| 事项 | 当前答案 | 证据边界与重开条件 |
|---|---|---|
| 产品可用状态 | 官网提供 macOS early access；条款也明确产品处于 early access | 这只能证明公开入口和测试阶段，不能推出活跃用户、收入、稳定性或任务完成率；正式版发布或可复核产品数据出现时再更新 |
| 英文运营者 | 隐私政策明确写 `LowEntropyAI, Inc. (d/b/a AirJelly)`，并给出 Dover, Delaware 联系地址 | 服务条款正文却把合同方和知识产权主体写作 `Low Entropy Group`，页脚又写 `LowEntropyAI, Inc.`；修订条款、州登记或公司正式说明才能关闭主体名称差异 |
| 中国主体 | 本轮没有在 AirJelly 官网、隐私政策、条款或 ICP 信息中找到与中国候选公司的官方映射 | “持续低熵（北京）科技有限公司”只能作为第三方工商线索，不能与英文运营者合并；ICP备案、跨境数据说明或公司公告是重开证据 |
| 数据流 | 隐私政策称原始截图在本地加密且不上传；触发 AI 功能时，派生文本或结构化上下文可能发送给外部 AI provider，并收集账户、设备、崩溃与 PostHog 使用数据 | 因而官网“屏幕活动不离开电脑”的表述应限定到原始截图，不能解释为所有上下文和遥测均零外发；应以新版数据处理协议、第三方审计或网络实测复核 |
| 能力与效果 | Enter 意图锚点、Task/Event 记忆和主动触发来自产品方与创始人访谈 | 本轮仍未找到独立任务基准、误触发率、越权率、Proactive 接受率或长期用户研究；公开评测出现时重开 |

屏幕截图、Accessibility 权限、聊天窗口和本地数据库都可能包含敏感信息。当前官方文本至少给出了暂停捕捉、账户删除和数据权利入口，但没有替代组织级部署所需的权限最小化、旁观者同意和实测审计。

## 相关页面

- [[AI 记忆系统\|AI 记忆系统]]
- [[实时 AI 交互模型\|实时 AI 交互模型]]
- [[Agentive 系统\|Agentive 系统]]
- [[AI Agent 安全\|AI Agent 安全]]
- [[持续低熵\|持续低熵]]

## 三同关系线索

- **团队—产品**：媒体访谈把 [[持续低熵\|持续低熵]] / Low Entropy AI 写作 AirJelly 的开发团队；产品和团队已拆成不同节点。
- **人物/前任职线索**：媒体访谈与活动主办方把黄柏特写作创始人，并提到字节跳动 MineContext 经历；这支持个人履历线索，不能由此扩展出具体前同事、团队成员、股权或投资关系。
- **证据边界**：英文运营者已经由隐私政策确认，完整成员名单、股权和中英文主体对应关系仍未公开；这属于日期化的公共证据边界，不再保留为无期限动作句。

## 证据

- 原始资料快照（本地归档）
- 原始资料快照（本地归档）
- [AirJelly 官网](https://www.airjelly.ai/)
- [AirJelly 隐私政策](https://www.airjelly.ai/privacy-policy)
- [AirJelly 服务条款](https://www.airjelly.ai/terms)
