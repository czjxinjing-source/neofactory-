import {
  Bot,
  Cpu,
  DraftingCompass,
  Gauge,
  LucideIcon,
  Microscope,
  Network,
  ScanSearch,
  Wrench,
} from "lucide-react";

export type ModuleStatus = "待修复" | "维修中" | "已修复";

export type LearningModule = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  progress: number;
  status: ModuleStatus;
  icon: LucideIcon;
  color: string;
};

export const modules: LearningModule[] = [
  {
    id: "mechanics",
    name: "机械基础区",
    subtitle: "传动单元校准",
    description: "认识机械零件、传动机构与基础装配关系。",
    progress: 34,
    status: "维修中",
    icon: Wrench,
    color: "cyan",
  },
  {
    id: "drawing",
    name: "工程制图区",
    subtitle: "蓝图解析终端",
    description: "掌握工程图样、视图表达与尺寸标注。",
    progress: 18,
    status: "待修复",
    icon: DraftingCompass,
    color: "blue",
  },
  {
    id: "tolerance",
    name: "公差检测区",
    subtitle: "精度监测阵列",
    description: "理解公差配合、测量工具与质量判定。",
    progress: 12,
    status: "待修复",
    icon: ScanSearch,
    color: "violet",
  },
  {
    id: "process",
    name: "制造工艺区",
    subtitle: "工艺路线调度",
    description: "学习毛坯、切削加工、热处理与装配流程。",
    progress: 26,
    status: "维修中",
    icon: Gauge,
    color: "cyan",
  },
  {
    id: "cnc",
    name: "数控加工区",
    subtitle: "CNC 加工核心",
    description: "了解数控机床、坐标系、刀具与加工程序。",
    progress: 8,
    status: "待修复",
    icon: Cpu,
    color: "blue",
  },
  {
    id: "electric",
    name: "电气控制区",
    subtitle: "控制柜能量回路",
    description: "熟悉低压电器、控制回路和 PLC 基础。",
    progress: 20,
    status: "待修复",
    icon: Network,
    color: "violet",
  },
  {
    id: "sensor",
    name: "传感器检测区",
    subtitle: "感知节点重启",
    description: "认识常见工业传感器与检测信号。",
    progress: 42,
    status: "维修中",
    icon: Microscope,
    color: "cyan",
  },
  {
    id: "line",
    name: "智能产线区",
    subtitle: "柔性产线联调",
    description: "连接机器人、AGV、工站与产线协同。",
    progress: 5,
    status: "待修复",
    icon: Bot,
    color: "blue",
  },
];
