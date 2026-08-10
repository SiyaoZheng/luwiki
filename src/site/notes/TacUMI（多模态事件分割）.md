---
{"dg-publish":true,"permalink":"/TacUMI（多模态事件分割）/","title":"TacUMI（多模态事件分割）","tags":["#多模态感知","#事件分割","#触觉","#力觉","#人类示范"],"created":"2026-08-10","updated":"2026-08-10","dg-note-properties":{"status":"processed","title":"TacUMI（多模态事件分割）","aliases":["TacUMI arXiv 2601.14550"],"source_count":9,"sources":["raw/2026-08-10-UMI后续规模3D触觉谱系核验.md","https://arxiv.org/abs/2601.14550","https://tac-umi.github.io/TacUMI/","https://github.com/Tac-UMI/TacUMI","https://tac-umi.github.io/TacUMI/3d-print-models.html","https://tac-umi.github.io/TacUMI/downloads/TacUMI_Original_Design_3D_Print_Files.zip","https://tac-umi.github.io/TacUMI/downloads/TacUMI_Franka_3D_Print_Files.zip","https://arxiv.org/abs/2601.20239","https://huggingface.co/datasets/RAIDS666/TacUMI"],"tags":["#多模态感知","#事件分割","#触觉","#力觉","#人类示范"],"created":"2026-08-10","updated":"2026-08-10"}}
---

# TacUMI（多模态事件分割）

本页只指 Cheng 等人 arXiv:2601.14550／ICRA 2026 的 TacUMI：一套把力／力矩、视觉触觉、双手位姿与固定 RGB-D 对齐，用于双臂线缆安装事件分割的人类示范接口。它没有训练或部署机器人操控策略，不能用同名项目的 Diffusion Policy 或 π0.5 结果补足。

## 非对称双手硬件

| 位置 | 设备与频率 | 在任务中的作用 |
|---|---|---|
| 右手 TacUMI | Bota SensONE 6D F/T 1000Hz + HTC Vive Tracker 6DoF 60Hz | 引导线缆，记录 wrench 与腕位姿 |
| 左手 modified UMI | GelSight Mini 视觉触觉 16.67Hz + Vive Tracker 60Hz | 管理张力、放置和插入，记录触觉与腕位姿 |
| 环境 | 固定 Intel RealSense D435i 第三视角 RGB-D 60Hz | 记录任务视觉上下文 |

两手装置都有连续自锁齿条齿轮夹爪，但不是每只手都同时拥有 F/T 与触觉。论文没有报告 Vive 代际、base-station 配置、tracker 精度、标定细节、整机重量、完整成本、夹持力量程或供电。

## 同步、表示与任务数据

- 所有流下采样到共同16.67Hz。论文没有说明 shared hardware clock、timestamp 传递、offset correction 或实测 skew／jitter，因此只能称 rate-aligned，不能写成已验证硬同步。
- 每手用7D TCP pose 表示，双手拼为14D。事件分割输入共532D：256维触觉、256维 RGB、6维 wrench 与14维 pose；wrench 用标准旋转／力矩平移变换映射到机器人末端坐标。
- 五类事件为 idle、grasped、under linear force、under torque、released。任务只有一种双臂线缆安装：按顺序把线缆插入三个位置／朝向不同的 U-clips。
- 正文只披露约30k frames；没有 trajectory 数、小时、操作者、trial、场景或 train/val/test 划分。窗口50帧、stride 10，并剔除超过80% idle的窗口。
- F/T trigger pull／lock／release artifact 由第二个分割模型判定，再用首20帧估计的 Gaussian noise 替换。这是模型依赖的插补，不是直接观测到的 clean force ground truth。

## 它训练的是离线分割器，不是控制策略

论文训练 BiLSTM、TCN 与 Transformer 识别五类接触事件。触觉、F/T、RGB 与 pose 都是真实的分割模型输入；没有 manipulation-policy action、机器人 rollout 成功率或从手持示范训练控制器的实验。

所谓 cross-platform validation 是把手持数据训练的分割器测试在另采的双 Franka 遥操作数据上：机器人数据由 sigma.7 触觉设备遥操作，一臂腕部 F/T，另一臂指尖 tactile，pose 来自机器人本体。它支持“事件表征可跨采集平台测试”，不支持策略跨本体迁移。

BiLSTM 是双向模型，会使用未来帧，结果属于离线／非因果分割，不能直接解释为实时控制信号。

| 数据与模型组合 | accuracy | F1 | MCC |
|---|---:|---:|---:|
| 手持，BiLSTM camera-only | .7608 | .7217 | .3180 |
| 手持，BiLSTM 全模态 | .9402 | .8945 | .7596 |
| 机器人，BiLSTM camera-only | .2288 | .1820 | .2227 |
| 机器人，BiLSTM camera+tactile+F/T | .9155 | .8793 | .8092 |
| 机器人，BiLSTM 全模态 | .9104 | .7262 | .7796 |

机器人数据中加入 pose 后没有超过 camera+tactile+F/T；camera-only 又从手持.7608降到机器人.2288，暴露明显域差。不能概括成“每种新增模态稳定有益”。released 只持续2–5帧，也是最难分类事件之一。

作者称同任务遥操作平均4分钟、手持1分10秒，名义约3.43倍；未给计时样本数、方差、硬件／人工成本或设置时间，不能当作稳定吞吐 benchmark。

## 开放物、许可与独立证据

- 官方仓截至2026-08-10只有项目网站、图片／视频和两个 STL ZIP；无采集／预处理／分割训练代码、配置、数据、标签、checkpoint、BOM、tag或release，根目录也没有许可证。
- Original 与 Franka STL 包内均为 CC-BY-NC-SA-4.0；该许可只覆盖对应 STL，不能外推到网站、代码或尚未发布数据。论文页面是 arXiv non-exclusive distribution license。
- 论文局限包括 relabel／插补依赖、短 released 事件、跨平台视觉域差，以及尚未把多模态示范用于 imitation learning。
- 截至2026-08-10，未找到官方协议的独立硬件复建、30k-frame 数据重做、同分割协议复现、公开下游使用或机器人策略评估。重开条件是官方发布 code/data/checkpoint/划分，或第三方证明使用 SensONE+GelSight+Vive+D435i 并复算同任务事件分割。

## 同名边界

TouchGuide 论文中的另一套 TacUMI、RAIDS666/TacUMI 数据集与 yuchen-ji/tacumi 由不同团队构建，硬件、任务、数据和策略链也不同。它们与本系统的同名关系已登记为 [[TacUMI 同名冲突\|TacUMI 同名冲突]]；TouchGuide 的独立系统节点为 [[TouchGuide\|TouchGuide]]。名称相同不能建立版本、官方下游或许可继承关系。

## 相关页面

- [[Universal Manipulation Interface\|Universal Manipulation Interface]]
- [[FastUMI\|FastUMI]]
- [[UMI-3D\|UMI-3D]]
- [[DexUMI\|DexUMI]]
- [[TacUMI 同名冲突\|TacUMI 同名冲突]]
- [[TouchGuide\|TouchGuide]]
- [[人类活动数据\|人类活动数据]]
- [[机器人触觉感知\|机器人触觉感知]]
- [[具身智能数据基础设施\|具身智能数据基础设施]]

## 证据

- 原始资料快照（本地归档）
- [论文](https://arxiv.org/abs/2601.14550)
- [项目页](https://tac-umi.github.io/TacUMI/)
- [官方仓库](https://github.com/Tac-UMI/TacUMI)
