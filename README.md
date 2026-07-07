# 工造星球

工造星球是一款面向智能制造工程基础学习的 Windows 本地桌面应用，覆盖机械基础、工程制图、公差检测、制造工艺、数控加工、电气控制、传感器检测和智能产线等内容。

当前版本已从普通网页源码形态升级为 Tauri 桌面应用，可在 Windows 本机离线安装和运行。项目适合作为智能制造、机械类课程训练、题库练习和个人学习记录工具的早期版本。

## 当前版本

v0.2.0

这是早期打包发布版本，题库、资料内容和界面体验后续仍会继续补充优化。

## 核心功能

- 本地用户档案：支持昵称、头像和学习身份展示。
- 本地学习记录保存：经验、等级、错题、测试记录、阅读进度等保存在本机。
- 资料阅读区：按八个智能制造学习区域组织知识卡片。
- 训练题库：支持自由练习、答题解析、跳过、看答案和错题记录。
- 关卡诊断：按模块完成整轮诊断测试，结算成绩和经验。
- 实际维修区：模拟设备异常诊断任务，完成后记录维修结果。
- 经验与等级系统：根据学习和训练结果积累 XP。
- 做题记录和错题本：保存错误题目、解析和掌握状态。
- 题库管理页：查看各区域题目、答案、解析、配图绑定情况。
- 离线使用：应用本身不依赖服务器，安装后可在本机离线学习。

> 说明：当前版本是本地档案模式，不是账号密码登录系统，也不支持云端同步。清除应用数据或浏览器站点数据会删除本地学习记录。

## 下载安装

普通用户请进入 GitHub Releases 页面下载最新版应用文件：

<https://github.com/czjxinjing-source/neofactory-training/releases>

Windows 用户下载 Assets 中的安装包：

```text
工造星球_0.2.0_x64-setup.exe
```

下载后双击安装程序，根据提示安装即可。安装完成后可从开始菜单或安装目录启动：

```text
C:\Program Files\工造星球\gongzao-planet.exe
```

如果 Windows 提示“未知发布者”或 SmartScreen 风险提示，这是因为当前安装包暂未购买代码签名证书。自用测试时可选择“更多信息”后继续运行；公开分发前建议补充代码签名。

## 项目截图

当前仓库暂未整理正式截图。后续建议补充：

- 首页总控台截图
- 资料阅读区截图
- 训练题库截图
- 错题本和个人中心截图
- Windows 安装包运行截图

## 开发运行

本项目使用 React、TypeScript、Vite、Tailwind CSS 和 Tauri 2。

安装依赖：

```bash
npm install
```

启动网页开发环境：

```bash
npm run dev
```

默认地址：

```text
http://localhost:5173/
```

构建网页静态文件：

```bash
npm run build
```

预览网页构建结果：

```bash
npm run preview
```

启动桌面开发模式：

```bash
npm run tauri:dev
```

打包 Windows 桌面应用：

```bash
npm run tauri:build
```

打包需要本机安装 Rust、Microsoft C++ Build Tools 和 WebView2 Runtime。如果普通终端找不到 `link.exe`，请使用 Visual Studio Developer Command Prompt，或先运行：

```bat
"C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\Common7\Tools\VsDevCmd.bat" -arch=x64
```

然后再执行：

```bash
npm run tauri:build
```

## 用户数据

当前版本使用 WebView / 浏览器的 `localStorage` 保存本地学习数据，主要存档键为：

```text
gongzao-planet-progress-v1
```

保存内容包括：

- 昵称和头像
- 经验值和等级进度
- 阅读卡片进度
- 自由训练统计
- 关卡测试记录
- 错题本和掌握状态
- 实际维修挑战记录

这些数据只保存在本机，不会上传到服务器。卸载应用、清理应用数据或清理站点数据时，请注意可能会删除学习记录。

## 项目结构

```text
工造星球/
├── public/assets/             # 图标、题目图片、工程制图与 CNC 图片资源
├── src/
│   ├── components/            # 通用组件和学习交互组件
│   ├── data/                  # 题库、阅读卡片、模块、关卡和默认用户数据
│   ├── pages/                 # 首页、题库、错题本、档案、图鉴等页面
│   ├── styles/                # 全局样式
│   └── utils/                 # 本地存档、题库抽取、测试结算等工具
├── src-tauri/                 # Tauri 2 桌面程序配置和 Rust 壳
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## 发布文件

当前 Windows 安装包通常生成在：

```text
src-tauri/target/release/bundle/nsis/工造星球_0.2.0_x64-setup.exe
```

源码仓库不建议直接提交 `src-tauri/target/`、`dist/`、`node_modules/` 等大型构建产物。正式给用户下载的安装包应上传到 GitHub Release 的 Assets。

## 简历项目亮点

- 本地化学习数据管理：使用本地存储记录学习进度、错题和训练结果。
- 题库与资料阅读联动：围绕智能制造八大模块组织阅读、训练和诊断流程。
- 面向智能制造工程基础知识训练：覆盖机械、制图、公差、工艺、数控、电气、传感器和产线知识。
- 桌面端应用打包发布：使用 Tauri 将前端应用封装为 Windows 桌面程序。
- GitHub Release 版本管理：源码与安装包分离，便于用户下载正式应用。

## 已知问题

- 当前版本仍处于早期测试阶段，部分页面视觉风格和内容密度后续还会继续统一。
- 当前是本地档案模式，不支持账号密码登录、多人独立账号切换或云端同步。
- Windows 安装包暂未代码签名，安装时可能出现未知发布者提示。
- 主前端包体积偏大，后续可通过按页面拆分代码降低首包体积。
