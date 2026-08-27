---
{"dg-publish":true,"permalink":"/SounDiT/","title":"SounDiT","tags":["#GeoAI","#声景","#多模态生成","#城市规划","#环境心理"],"created":"2026-08-07","updated":"2026-08-26","dg-note-properties":{"status":"seed","title":"SounDiT","source_count":3,"sources":["raw/2026-08-07-luyao-b050-247-SounDiT-声景生成地点语境环境图像-c76db9c5.md","https://arxiv.org/abs/2505.12734","https://gisense.github.io/SounDiT-Page/"],"tags":["#GeoAI","#声景","#多模态生成","#城市规划","#环境心理"],"created":"2026-08-07","updated":"2026-08-26","product_name":"SounDiT","developer":null,"operator":null,"owner":null,"manufacturer":null,"launch_date":null,"product_status":"active_research","category":null,"platforms":[],"related_products":[],"customers":[],"website":null,"as_of":"2026-08-25","status_note":"公开研究模型"}}
---

# SounDiT

SounDiT 是一个面向地理语境声景到景观生成的多模态生成模型。它把环境声景和可选场景提示作为输入，生成与地点语境一致的环境图像，用于观察“听到的声音”如何指向“可能看到的场所”。

## 观察

- GeoS2L 任务把声景理解为地点信息，而不只是声源识别。鸟鸣、车流、海浪或人群声并不只对应单个物体，也暗示了湿地、街道、海滩、商业区等空间语境。
- SounDiT 的数据基础包括 SoundingSVI 和 SonicUrban：前者把地理标注录音与附近街景匹配，后者从城市视频中抽取音频与视觉帧。两者共同把声景、图像和地点语境组织成可训练样本。
- 模型层面，SounDiT 使用 DiT 主干，并通过声景条件、场景低秩混合器和场景自适应归一化把声学、语义和视觉线索融合起来。
- 场所相似性分数 PSS 把评测从“图像好不好看”推进到“图像是否像这个场所”：要素层看树木、天空、水体、建筑等组成，场景层看整体类别，感知层看安全、活力、美感等地点感受。
- 对 [[人本城市模拟\|人本城市模拟]] 和 [[城市情绪反应建模\|城市情绪反应建模]] 来说，SounDiT 提供了听觉-视觉-感知之间的桥。它可以把声环境转成可讨论的场所图像，用于参与式规划、环境心理研究和声环境治理沟通。
- 对 [[AI 建筑设计工具\|AI 建筑设计工具]] 来说，声景到景观生成提示设计工具不应只把空间当作可视对象，也可以把噪声、愉悦度、安全感和场所氛围纳入反馈变量。

## 边界

- 生成图像不是现场实测图像。它更适合作为假设生成、沟通和辅助评估工具，不能直接替代实地调查、街景采样或环境测量。
- 数据集来源、地理覆盖和视频平台偏差会影响模型对“典型场所”的想象，后续研究需要关注跨文化、跨城市和弱覆盖地区的偏差。

## 相关页面

- [[人本城市模拟\|人本城市模拟]]
- [[城市情绪反应建模\|城市情绪反应建模]]
- [[AI 建筑设计工具\|AI 建筑设计工具]]
- [[情绪计算\|情绪计算]]

## 证据

- 原始资料快照（本地归档）
- https://arxiv.org/abs/2505.12734
- https://gisense.github.io/SounDiT-Page/
