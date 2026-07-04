工造星球是一个面向机械基础、工程制图、制造工艺、数控加工、电气控制、传感器检测和智能产线学习的本地化训练应用。项目以闯关、题库、资料阅读、错题本、学习档案和维修任务等方式组织学习内容，适合继续扩展为课程练习系统或桌面学习工具。

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- 浏览器 `localStorage` 本地存档

## 功能模块

- 首页学习驾驶舱：展示学习进度、模块状态、快捷练习和维修任务入口。
- 八大学习区域：机械基础区、工程制图区、公差检测区、制造工艺区、数控加工区、电气控制区、传感器检测区、智能产线区。
- 题库训练：按学习区域和关卡组织题目，支持测试结算、经验值、成就和学习记录。
- 资料阅读区：通过阅读卡片提供知识点学习内容，并记录阅读进度。
- 题库浏览：集中查看不同模块的题目内容。
- 错题本：自动记录错题，支持标记掌握和清空错题。
- 个人档案：展示学习统计、成就、记录和本地数据管理。

## 本地运行

先安装 Node.js 18 或更高版本，然后在项目根目录运行：

```bash
npm install
npm run dev
```

启动后打开终端提示的本地地址，通常是：

```text
http://localhost:5173/
```

## Windows 快速启动

当前项目没有引入 Electron 或 Tauri 桌面打包工程，桌面端主要通过本地启动脚本打开浏览器运行。

Windows 用户可以双击以下文件之一：

- `Start-NeoFactory.ps1`
- `launcher/工造星球.cmd`
- `launcher/智能制造训练营.cmd`
- `launcher/NeoFactory 智能制造训练营.cmd`

脚本会进入项目根目录，启动 Vite 开发服务，并打开 `http://localhost:5173/`。

如果系统阻止 PowerShell 脚本运行，可以改用 `launcher` 目录里的 `.cmd` 文件，或在终端手动执行：

```bash
npm run dev -- --port 5173
```

## 打包方法

生成网页构建产物：

```bash
npm run build
```

构建完成后会生成 `dist/` 目录。`dist/` 是网页发布产物，可以上传到静态网站服务，也可以压缩后放到 GitHub Release。

预览构建结果：

```bash
npm run preview
```

## 用户数据保存说明

项目使用浏览器 `localStorage` 保存用户学习数据，不依赖服务器或外部账号。主要存档键为：

```text
gongzao-planet-progress-v1
```

保存内容包括学习进度、测试记录、错题、成就、资料阅读进度、维修任务状态等。清空浏览器站点数据或在应用内清空学习数据，会删除这些本地记录。

## 项目目录结构

```text
gongzao-planet-project/
├── launcher/                  # Windows 本地启动脚本
├── public/
│   └── assets/                # 图标、题目图片、工程制图与 CNC 图片资源
├── src/
│   ├── components/            # 通用组件和学习交互组件
│   ├── data/                  # 题库、阅读卡片、模块、关卡和默认用户数据
│   ├── pages/                 # 首页、题库、错题本、档案、百科等页面
│   ├── styles/                # 全局样式
│   └── utils/                 # 本地存档、题库抽取、测试结算等工具
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── README.md
```

## 关键数据文件

- 题库入口：`src/data/questions.ts`
- 各区域题库：`src/data/*Questions.ts`
- 资料阅读卡片：`src/data/readingCards.ts`
- 百科资料：`src/data/encyclopedia.ts`
- 工程制图图片映射：`src/data/engineeringDrawingImages.ts`
- 默认用户进度：`src/data/userProgress.ts`
- 本地存档逻辑：`src/utils/storage.ts`、`src/utils/localData.ts`
- 静态资源：`public/assets/`

## 后续优化方向

- 增加正式 Electron 或 Tauri 桌面端打包配置。
- 增加题库导入、导出和版本管理能力。
- 增加自动化测试，覆盖题库抽题、结算、本地存档和错题逻辑。
- 增加课程章节、知识点标签和学习路径管理。
- 增加跨设备同步或可选的本地备份导出功能。

