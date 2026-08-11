---
{"dg-publish":true,"permalink":"/DexUMI/","title":"DexUMI","tags":["灵巧手","人类示范","外骨骼","触觉","动作映射"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"DexUMI","source_count":13,"sources":["raw/2026-08-10-UMI后续规模3D触觉谱系核验.md","https://arxiv.org/abs/2505.21864","https://proceedings.mlr.press/v305/xu25b.html","https://dex-umi.github.io/","https://dex-umi.github.io/tutorial/hardware.html","https://github.com/real-stanford/DexUMI","https://umi-data.github.io/","https://github.com/facebookresearch/sam2","https://github.com/sczhou/ProPainter","https://github.com/marek-simonik/record3d","https://arxiv.org/abs/2603.17323","https://arxiv.org/abs/2604.15013","https://github.com/real-stanford/DexUMI/issues/4"],"tags":["灵巧手","人类示范","外骨骼","触觉","动作映射"],"created":"2026-08-10","updated":"2026-08-10"}}
---

# DexUMI

DexUMI 把 [[Universal Manipulation Interface\|Universal Manipulation Interface]] 的手持平行夹爪改成目标机器人手专用的可穿戴外骨骼。编码器把人手动作直接映射到 Inspire Hand 或 XHand，iPhone ARKit 提供腕位姿，腕部相机和可选触觉进入策略。它降低了灵巧手动作的同构差距，却增加了逐手设计、标定、真实机器人手 replay、视觉转换和触觉漂移等约束。

## 硬件、成本与同步

| 组成 | Inspire 版本 | XHand 版本 | 证据边界 |
|---|---|---|---|
| 关节映射 | 12总关节／6主动，每个主动关节一只电阻编码器 | 12主动关节／12编码器 | 外骨骼按目标机器人手设计，不是一个装置无标定覆盖任意手 |
| 腕位姿与视觉 | iPhone 15 Pro Max + Record3D／ARKit；OAK-1 W、150° DFoV | 相同路线 | iPhone／mocap pose 用于动作标签；策略不直接消费三维手 mesh |
| 触觉 | 与机器人端匹配的 FSR，以 ADC voltage 作 proxy | 120点、3D force 的磁触觉阵列 | 人手直接接触提供自然 haptic feedback，不等于额外力反馈执行器 |
| 采样 | 45 FPS | 30 FPS，作者称更高帧率时触觉不稳定 | 各流记录接收时间，再减实测延迟并插值，不是共享硬件时钟 |

作者没有报告整机总价或组装后重量。按教程包装购买价机械相加约US$679／695只是外部推算，包含整包余量且不含 iPhone、UR5、目标机器人手、GPU／PC、3D打印机、PCB制造和工时；不能写成作者系统成本。400g／600g 是打印材料额度，不是设备重量。

iPhone／OAK延迟用滚动 QR 时钟测，编码器延迟靠外骨骼与机器人手叠加后手调；关节与触觉插值到 camera timestamps，再三倍降采样。同步设计能对齐流，但没有共享硬件 clock 或端到端 skew 分布。

## 从人手到策略的转换链

1. 外骨骼编码器经回归映射到目标机器人手 motor；ARKit 生成腕部 6DoF 末端动作。mocap fingertip pose 主要用于 Inspire 外骨骼设计与工作空间标定，不是每条示范的策略输入。
2. 仍需在真实目标机器人手上 replay 关节动作，录制 robot-hand video；SAM2 分割外骨骼／人手，ProPainter 修补背景，再合成目标机器人手画面。
3. 策略输入为处理后的 robot-hand RGB（DINOv2 CLS）与可选触觉；不直接输入人手 mesh、指尖3D、ARKit pose或 point cloud。
4. 输出为相对腕部的6DoF末端动作，加 Inspire 6DoF／XHand 12DoF 手动作。最佳配置使用 hand-relative action，预测16步、执行前8步、10Hz。

这条链比 UMI 更贴近灵巧手自由度，但不是“纯人类视频直接控制”：真实目标手 replay、手型特定标定和视觉转换都是必要机器人侧 grounding。

## 数据、作者结果与触觉反例

公开登记的五个数据包精确为309+175+404+440+464=1792 demos，分别对应 cube、carton、两套 tea 和 kitchen；每包只列一个 environment。论文使用约数310、175、约400／手和470，未找到官方清洗／剔除说明，因此只能记为论文近似数与打包版本差。

作者每任务评测20次，最佳 Relative+Tactile+Inpaint 的 stage-wise accumulated 结果为：

| 本体／任务 | 成功率 |
|---|---|
| Inspire cube／carton | 1.00／.85 |
| Inspire tea tool／leaf | 1.00／.85 |
| XHand tea tool／leaf | 1.00／.85 |
| XHand kitchen knob／pan／salt | .95／.95／.75 |

“平均86%”是聚合 headline，不能替代逐阶段表。触觉也不是普遍有益：XHand 触觉漂移／噪声在多数比较中无益或变差，只有干净的 salt-force cue 从无触觉.15升到.75；Inspire 的 FSR 更噪，加入触觉在全部作者比较中更差。原始／遮罩视觉基线显著低于 inpaint，说明外观转换仍是结果的一部分。

作者还列出逐手调参、只匹配指尖而非掌面、打印连杆形变不被编码器测到、backlash／hysteresis、固定腕相机、inpainting 模糊与光照不一致、XHand重启／时间漂移和手型尺寸不匹配等限制。

## 开放物、许可与独立证据

- 主代码、固件、CAD、处理和训练仓为 MIT；项目／硬件教程内容为 CC BY-SA 4.0；登记数据标 MIT。依赖许可独立适用：SAM2 为 Apache-2.0，ProPainter 的 S-Lab License 1.0 限非商业使用，Record3D client/fork 为 LGPL-2.1。完整视觉转换 pipeline 不是纯 MIT／无条件商用。
- 官方仓没有 tag/release；公开 issues 仍有训练 config 目标不存在、多 mask 融合、PCB源工程和 Inspire shape mismatch 等复建缺口。
- 非作者在 [issue #4](https://github.com/real-stanford/DexUMI/issues/4) 展示已组装 Inspire 外骨骼和参考 episode，作者确认视觉轨迹看起来合理但 iPhone tracking 未启用；[#3](https://github.com/real-stanford/DexUMI/issues/3) 暴露 ADS1256／reference-voltage 故障。它们是组件级复建与故障线索，不是全协议结果复现。
- 无作者重叠的 [[DexEXO\|DexEXO]] 对14名参与者直接比较设备：DexUMI scissors 为0，作者归因于外骨骼多余几何让手指无法进入剪刀孔；page flip／cup stack／piano 为.86/.80/.62。它是独立物理设备比较与明确负结果，但没有复现 replay→SAM2/ProPainter→policy 全链。
- DEX-Mouse 采用并修改 DexUMI 策略骨架，把手动作改为 absolute joints、以 motor torque 代替外部触觉；它是独立方法继承，不是同协议复现。截至2026-08-10仍未找到无作者重叠者完成完整视觉转换、训练和原任务评测。

## 相关页面

- [[Universal Manipulation Interface\|Universal Manipulation Interface]]
- [[FastUMI\|FastUMI]]
- [[UMI-3D\|UMI-3D]]
- [[TacUMI（多模态事件分割）\|TacUMI（多模态事件分割）]]
- [[DexEXO\|DexEXO]]
- [[人类活动数据\|人类活动数据]]
- [[机器人触觉感知\|机器人触觉感知]]
- [[具身智能数据基础设施\|具身智能数据基础设施]]

## 证据

- 原始资料快照（本地归档）
- [CoRL 2025 论文](https://proceedings.mlr.press/v305/xu25b.html)
- [官方仓库](https://github.com/real-stanford/DexUMI)
- [硬件教程](https://dex-umi.github.io/tutorial/hardware.html)
- [DexEXO 独立比较](https://arxiv.org/abs/2603.17323)
