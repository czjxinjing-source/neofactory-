export type EncyclopediaItem = {
  id: string;
  name: string;
  type: string;
  description: string;
  moduleId?: string;
  knowledgePoints?: string[];
  unlocked: boolean;
};

export const encyclopedia: EncyclopediaItem[] = [
  { id: "gear", moduleId: "mechanics", name: "齿轮", type: "机械基础", description: "通过轮齿啮合传递运动和动力，学习时重点看模数、齿数、传动比和润滑磨损。", knowledgePoints: ["齿轮传动", "传动比", "润滑"], unlocked: true },
  { id: "bearing", moduleId: "mechanics", name: "轴承", type: "机械基础", description: "支撑旋转轴并降低摩擦，现场常关注安装方向、游隙、润滑和异常发热噪声。", knowledgePoints: ["轴承", "装配", "故障征兆"], unlocked: true },
  { id: "drawing-views", moduleId: "drawing", name: "三视图与尺寸", type: "工程制图", description: "工程图要能表达形状、尺寸、基准和技术要求；读图时先看视图关系，再看尺寸链和加工面。", knowledgePoints: ["三视图", "尺寸标注", "技术要求"], unlocked: true },
  { id: "drawing-tolerance", moduleId: "drawing", name: "图样技术要求", type: "工程制图", description: "粗糙度、公差、基准和形位要求决定加工和检验方法，不能只看轮廓线。", knowledgePoints: ["粗糙度", "基准", "形位公差"], unlocked: true },

  { id: "tol-basic", moduleId: "tolerance", name: "尺寸公差", type: "公差检测", description: "公称尺寸、上偏差、下偏差、极限尺寸和公差共同决定零件是否合格。训练题会要求按实测值判断合格性。", knowledgePoints: ["上偏差", "下偏差", "极限尺寸", "合格判定"], unlocked: true },
  { id: "tol-fit", moduleId: "tolerance", name: "孔轴配合", type: "公差检测", description: "间隙、过盈、过渡配合用于不同装配需求；H7/g6 常见为间隙配合，适合相对运动。", knowledgePoints: ["间隙配合", "过盈配合", "基孔制", "基轴制"], unlocked: true },
  { id: "tol-tools", moduleId: "tolerance", name: "量具读数", type: "公差检测", description: "游标卡尺、千分尺、百分表读数要先确认分度值，再合成主尺和副尺读数。", knowledgePoints: ["游标卡尺", "千分尺", "百分表"], unlocked: true },
  { id: "tol-surface", moduleId: "tolerance", name: "粗糙度与几何公差", type: "公差检测", description: "Ra 表示表面微观不平度；平面度、垂直度、同轴度、圆跳动用于限制形状和位置误差。", knowledgePoints: ["Ra", "垂直度", "同轴度", "圆跳动"], unlocked: true },
  { id: "tol-field", moduleId: "tolerance", name: "现场检测流程", type: "公差检测", description: "检测前清洁量具和工件，按公差选择量具，测量复核后判定并记录，避免零位、温度和测量力误差。", knowledgePoints: ["检测流程", "测量误差", "记录追溯"], unlocked: true },

  { id: "process-route", moduleId: "process", name: "工艺路线", type: "制造工艺", description: "工艺路线要考虑毛坯、基准、粗精加工、热处理和检验，顺序错误会影响尺寸稳定和加工效率。", knowledgePoints: ["毛坯", "基准", "热处理", "检验"], unlocked: true },
  { id: "process-cutting", moduleId: "process", name: "切削与装配", type: "制造工艺", description: "车削、铣削、钻削、磨削各有适用表面；装配前要检查配合、清洁、润滑和紧固顺序。", knowledgePoints: ["车削", "铣削", "钻削", "装配"], unlocked: true },

  { id: "cnc-lathe", moduleId: "cnc", name: "CNC 车床", type: "数控加工", description: "适合回转类零件加工。程序训练重点是 G90/G54、G00/G01、M03/M05、起刀点和安全退刀。", knowledgePoints: ["G90", "G54", "G00", "G01", "安全退刀"], unlocked: true },
  { id: "cnc-program", moduleId: "cnc", name: "数控程序安全", type: "数控加工", description: "切削前确认坐标系、主轴和进给；G00 走空路，G01 做切削，结束前退刀、关液、停主轴、M30。", knowledgePoints: ["程序阅读", "程序补全", "程序纠错"], unlocked: true },

  { id: "plc", moduleId: "electric", name: "PLC 控制柜", type: "电气控制", description: "PLC 采集按钮、传感器等输入信号，再控制接触器、指示灯和执行机构输出。", knowledgePoints: ["PLC 输入", "PLC 输出", "I/O 点位"], unlocked: true },
  { id: "electric-devices", moduleId: "electric", name: "低压电器", type: "电气控制", description: "按钮、接触器、继电器、热继电器、熔断器和断路器各司其职，不能混淆短路保护和过载保护。", knowledgePoints: ["按钮", "接触器", "热继电器", "熔断器"], unlocked: true },
  { id: "electric-motor", moduleId: "electric", name: "电机控制回路", type: "电气控制", description: "点动、自锁、正反转和互锁是电机控制基础。正反转必须互锁，急停通常用常闭触点串入安全回路。", knowledgePoints: ["点动", "自锁", "正反转", "互锁", "急停"], unlocked: true },
  { id: "electric-trouble", moduleId: "electric", name: "电气故障排查", type: "电气控制", description: "维修前断电挂牌、验电确认；排查时先看报警和保护动作，再检查线圈、触点、端子和负载。", knowledgePoints: ["断电挂牌", "过载", "线圈", "端子"], unlocked: true },

  { id: "photo-sensor", moduleId: "sensor", name: "光电传感器", type: "传感器检测", description: "光电传感器可用于有无检测，透明体、反光背景和安装角度会影响稳定性。", knowledgePoints: ["对射", "漫反射", "误检"], unlocked: true },
  { id: "sensor-switches", moduleId: "sensor", name: "接近与磁性开关", type: "传感器检测", description: "电感式接近开关适合检测金属，气缸磁性开关常用于伸出和缩回到位检测。", knowledgePoints: ["接近开关", "磁性开关", "到位检测"], unlocked: true },
  { id: "sensor-signal", moduleId: "sensor", name: "开关量与模拟量", type: "传感器检测", description: "开关量只有通断状态；0-10V、4-20mA 属于模拟量，常用于压力、位移、温度等连续量。", knowledgePoints: ["NPN", "PNP", "0-10V", "4-20mA"], unlocked: true },
  { id: "sensor-trouble", moduleId: "sensor", name: "传感器异常排查", type: "传感器检测", description: "信号不稳常与安装距离、线缆端子、干扰、目标材质和 PLC 输入公共端接法有关。", knowledgePoints: ["抗干扰", "漏检", "接线", "公共端"], unlocked: true },

  { id: "robot", moduleId: "line", name: "工业机器人协同", type: "智能产线", description: "机器人与输送线、夹具、检测工站协同要依赖请求、允许、完成和复位等握手信号。", knowledgePoints: ["机器人", "握手信号", "工站联动"], unlocked: true },
  { id: "agv", moduleId: "line", name: "AGV/AMR 送料", type: "智能产线", description: "AGV/AMR 用于物料配送，调度时要考虑站点就绪、路径安全、缓存区和任务优先级。", knowledgePoints: ["AGV", "AMR", "缓存区", "调度"], unlocked: true },
  { id: "line-flow", moduleId: "line", name: "智能产线流程", type: "智能产线", description: "常见流程为上料、定位、加工或装配、检测、分拣、下料；瓶颈工序决定整线节拍。", knowledgePoints: ["上料", "定位", "检测", "节拍", "瓶颈"], unlocked: true },
  { id: "line-safety", moduleId: "line", name: "产线安全与报警", type: "智能产线", description: "安全光栅、急停、门禁互锁被触发时应停止危险运动；报警处理要先保安全，再查代码和原因。", knowledgePoints: ["安全光栅", "急停", "门禁互锁", "报警处理"], unlocked: true },
  { id: "line-mes", moduleId: "line", name: "MES、PLC 与 HMI", type: "智能产线", description: "MES 管生产信息和追溯，PLC 负责实时控制，HMI 负责显示、操作和报警交互。", knowledgePoints: ["MES", "PLC", "HMI", "追溯"], unlocked: true },
];
