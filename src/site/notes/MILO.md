---
{"dg-publish":true,"permalink":"/MILO/","title":"MILO","tags":["3DGS","三维重建","网格","可微渲染","数字孪生"],"created":"2026-08-07","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"MILO","aliases":["MILo","Mesh-in-the-Loop Gaussian Splatting","Mesh-In-The-Loop"],"source_count":6,"sources":["raw/2026-08-07-luyao-b040-197-一种细节丰富且高效的网格回路（Mesh-In-The-Loop）高斯泼溅方法-99930974.md","https://arxiv.org/abs/2506.24096","https://github.com/Anttwo/MILo","https://anttwo.github.io/milo/","https://isprs-archives.copernicus.org/articles/XLIX-B2-2026/801/2026/","raw/2026-08-10-研究制品复核-batch-014.md"],"tags":["3DGS","三维重建","网格","可微渲染","数字孪生"],"created":"2026-08-07","updated":"2026-08-10"}}
---

# MILO

MILO 是一种 Mesh-in-the-Loop Gaussian Splatting 路线，用于把 3D Gaussian Splatting 的高质量渲染能力与可用于下游任务的显式表面网格连接起来。

## 观察

- 传统 3DGS 到网格的路线往往是“先优化体渲染表示，再后处理提取网格”。问题是薄结构会被侵蚀，几何和颜色可能不一致，后处理网格过密且难以进入实时渲染、物理模拟或编辑流程。
- MILO 的关键是把网格提取放进训练循环：每次迭代中从高斯基元构造显式表面网格，让网格质量反过来约束高斯表示。
- 这种“网格在环”的设计把高斯基元和三角网格做成双向耦合：网格提供深度/法线一致性和几何正则，高斯则作为网格的隐式参数化。
- 方法中涉及 Delaunay 顶点采样、动态三角剖分、可优化 SDF 值和可微移动四面体，说明 3D 表示竞争正在从“能不能渲染好看”转向“能不能生成干净、轻量、可用的几何资产”。
- 对 [[消费级空间相机\|消费级空间相机]]、[[ABot-Earth\|ABot-Earth]] 和 [[VAST\|VAST]] 来说，MILO 提供的是底层表示路线：真实空间捕获、城市级 3D 生成和 AI 3D 资产生产都需要从可视化走向可编辑表面。

## 边界

- 原论文、项目页和官方实现已经公开，因而“只有论文解读”的缺口已关闭。仓库包含安装、训练、数据和部分评估流程，但 mesh-based rendering evaluation 仍列为待办，且部分代码受 Gaussian Splatting 许可证约束。
- 轻量网格不等于完整语义模型。建筑、机器人或仿真任务仍需要尺度、物体语义、材质、物理属性和权限边界。

## 截至 2026-08-10 的外部验证

- 2026 年 ISPRS Archives 的独立研究把 MILO 用于树木、反光陶瓷和建筑立面，并以 TLS 点云作几何参照。结果显示，MILO 在复杂有机几何上减少离群点、保留薄结构，但传统 MVS 在稳定建筑表面略优。
- 这构成了独立应用证据，却不是对原论文全部数据集、训练时间和 SOTA 表格的逐项复现。当前最诚实的结论是：方法已有公开实现和外部任务验证，优势具有场景条件，不应写成全面取代摄影测量。
- 后续只有在官方补齐剩余 mesh evaluation，或出现固定环境下的多数据集独立复现时，才更新通用性能判断。

## 相关页面

- [[消费级空间相机\|消费级空间相机]]
- [[ABot-Earth\|ABot-Earth]]
- [[VAST\|VAST]]
- [[AI 建筑设计工具\|AI 建筑设计工具]]

## 证据

- 原始资料快照（本地归档）
- [MILo paper](https://arxiv.org/abs/2506.24096)
- [MILo official implementation](https://github.com/Anttwo/MILo)
- [MILo project page](https://anttwo.github.io/milo/)
- [ISPRS independent application study](https://isprs-archives.copernicus.org/articles/XLIX-B2-2026/801/2026/)
- 原始资料快照（本地归档）
