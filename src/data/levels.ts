export type Level = {
  id: string;
  moduleId: string;
  name: string;
  difficulty: "入门" | "进阶" | "挑战";
  time: string;
  reward: number;
};

const standardLevels = (moduleId: string, names: string[]): Level[] =>
  names.map((name, index) => ({
    id: `${moduleId}-${index + 1}`,
    moduleId,
    name,
    difficulty: index === 0 ? "入门" : index === 1 ? "进阶" : "挑战",
    time: `${8 + index * 4} 分钟`,
    reward: 5,
  }));

export const levels: Level[] = [
  ...standardLevels("mechanics", ["认识常见机械零件", "传动机构入门", "轴、轴承与连接"]),
  ...standardLevels("drawing", ["三视图识别", "尺寸标注巡检", "零件图读取"]),
  ...standardLevels("tolerance", ["公差符号解码", "游标卡尺读数", "配合关系判断"]),
  ...standardLevels("process", ["加工方法识别", "工艺路线选择", "装配流程规划"]),
  ...standardLevels("cnc", ["机床坐标入门", "刀具与切削参数", "简单程序识读"]),
  ...standardLevels("electric", ["电气元件识别", "控制回路分析", "PLC 输入输出"]),
  ...standardLevels("sensor", ["传感器类型识别", "检测距离调试", "信号异常排查"]),
  ...standardLevels("line", ["产线单元认识", "机器人协同任务", "AGV 调度入门"]),
];
