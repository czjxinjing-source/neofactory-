import type { Question } from "./questions";

export type ManufacturingProcessQuestion = Question & {
  category: "制造工艺区";
  question: string;
  answer: string | string[];
  acceptableAnswers: string[];
  image: null;
  knowledgePoint: string;
};

export const manufacturingProcessQuestions: ManufacturingProcessQuestion[] = [
  {
    "id": "zzgy_001",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "生产形状复杂、内腔较多的箱体类毛坯时，通常优先考虑哪种毛坯制造方法？",
    "question": "生产形状复杂、内腔较多的箱体类毛坯时，通常优先考虑哪种毛坯制造方法？",
    "options": [
      "铸造",
      "冷拔",
      "滚齿",
      "研磨"
    ],
    "answerIndex": 0,
    "explanation": "铸造适合制造形状复杂、带内腔的毛坯，箱体类零件常先铸出基本形状再加工基准面和孔系；冷拔、滚齿和研磨不适合直接形成复杂箱体毛坯。",
    "image": null,
    "knowledgePoint": "铸造工艺",
    "knowledgePoints": [
      "制造工艺",
      "铸造工艺"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "铸造工艺"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_002",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "承受冲击载荷的轴类零件常选锻件毛坯，主要原因是什么？",
    "question": "承受冲击载荷的轴类零件常选锻件毛坯，主要原因是什么？",
    "options": [
      "锻造可以取消所有机械加工",
      "锻造只适合制造塑料件",
      "锻造后一定不需要热处理",
      "锻造能改善金属纤维组织和综合力学性能"
    ],
    "answerIndex": 3,
    "explanation": "锻造可使金属组织更致密、纤维流线更合理，适合受力较大的轴、齿轮坯等；它不能替代全部机加工，也不等于不需要热处理。",
    "image": null,
    "knowledgePoint": "锻造工艺",
    "knowledgePoints": [
      "制造工艺",
      "锻造工艺"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "锻造工艺"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_003",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "大批量生产薄板支架、垫片等零件时，哪种工艺效率通常较高？",
    "question": "大批量生产薄板支架、垫片等零件时，哪种工艺效率通常较高？",
    "options": [
      "单件砂型铸造",
      "刮研",
      "冲压",
      "手工锉削"
    ],
    "answerIndex": 2,
    "explanation": "冲压利用模具和压力机成形或分离薄板，适合大批量、形状重复的板料零件；手工锉削和刮研效率低，砂型铸造也不适合薄板垫片。",
    "image": null,
    "knowledgePoint": "冲压工艺",
    "knowledgePoints": [
      "制造工艺",
      "冲压工艺"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "冲压工艺"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_004",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "焊接结构件在焊后出现明显变形，优先应从哪方面分析？",
    "question": "焊接结构件在焊后出现明显变形，优先应从哪方面分析？",
    "options": [
      "刀具补偿半径",
      "焊接热输入、焊接顺序和刚性约束",
      "切削液颜色",
      "量具包装方式"
    ],
    "answerIndex": 1,
    "explanation": "焊接变形主要来自局部加热和冷却收缩，焊接顺序、热输入和夹持约束都会影响变形；切削液、量具包装和刀补不是焊接变形主因。",
    "image": null,
    "knowledgePoint": "焊接工艺",
    "knowledgePoints": [
      "制造工艺",
      "焊接工艺"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "焊接工艺"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_005",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "粉末冶金特别适合制造哪类零件？",
    "question": "粉末冶金特别适合制造哪类零件？",
    "options": [
      "形状较复杂、材料利用率要求高的烧结零件",
      "超大型焊接船体",
      "一次成形长轴外圆",
      "现场临时切割钢板"
    ],
    "answerIndex": 0,
    "explanation": "粉末冶金通过压制和烧结成形，材料利用率高，适合小型复杂零件和含油轴承等；不适合超大型结构或长轴外圆的最终成形。",
    "image": null,
    "knowledgePoint": "粉末冶金",
    "knowledgePoints": [
      "制造工艺",
      "粉末冶金"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "粉末冶金"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_006",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "3D打印/增材制造的基本特点是什么？",
    "question": "3D打印/增材制造的基本特点是什么？",
    "options": [
      "必须先制造砂型",
      "只能加工回转体",
      "只用于最终检验",
      "按数字模型逐层堆积材料形成零件"
    ],
    "answerIndex": 3,
    "explanation": "增材制造依据数字模型逐层堆积材料，适合快速样件和复杂结构验证；它不是砂型铸造，也不局限于回转体。",
    "image": null,
    "knowledgePoint": "增材制造",
    "knowledgePoints": [
      "制造工艺",
      "增材制造"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "增材制造"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_007",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "选择毛坯时，通常不应只看哪一个因素？",
    "question": "选择毛坯时，通常不应只看哪一个因素？",
    "options": [
      "生产批量",
      "使用性能要求",
      "单件材料价格",
      "零件材料、形状、批量、性能和后续加工"
    ],
    "answerIndex": 2,
    "explanation": "毛坯选择要综合材料、结构、批量、性能和加工余量。只看单件材料价格可能导致加工成本高、质量不稳定或性能不足。",
    "image": null,
    "knowledgePoint": "毛坯选择原则",
    "knowledgePoints": [
      "制造工艺",
      "毛坯选择原则"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "毛坯选择原则"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_008",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "单选题",
    "difficulty": "hard",
    "text": "铸件加工后局部出现气孔暴露，合理的首要处理是什么？",
    "question": "铸件加工后局部出现气孔暴露，合理的首要处理是什么？",
    "options": [
      "用更高转速把气孔切掉",
      "按质量要求评估缺陷位置、大小和是否允许修补",
      "直接继续装配并隐瞒缺陷",
      "把所有铸件全部报废"
    ],
    "answerIndex": 1,
    "explanation": "气孔是否可接受取决于位置、大小、受力和密封要求，应按检验规范评估并决定返修或报废；隐瞒缺陷和盲目处理都不符合质量管理。",
    "image": null,
    "knowledgePoint": "铸造缺陷",
    "knowledgePoints": [
      "制造工艺",
      "铸造缺陷"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "铸造缺陷"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_009",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "加工轴类零件外圆时，最常用的切削加工方法是？",
    "question": "加工轴类零件外圆时，最常用的切削加工方法是？",
    "options": [
      "车削",
      "插齿",
      "拉削键槽",
      "线切割内齿"
    ],
    "answerIndex": 0,
    "explanation": "车削适合加工回转表面，如外圆、端面和螺纹；插齿、拉削和线切割用于其他特定形面。",
    "image": null,
    "knowledgePoint": "车削加工",
    "knowledgePoints": [
      "制造工艺",
      "车削加工"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "车削加工"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_010",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "加工平面、台阶面和沟槽时，常用的机加工方法是？",
    "question": "加工平面、台阶面和沟槽时，常用的机加工方法是？",
    "options": [
      "渗碳",
      "退火",
      "超声清洗",
      "铣削"
    ],
    "answerIndex": 3,
    "explanation": "铣削利用旋转铣刀加工平面、台阶和沟槽，是生产现场常用方法；渗碳和退火是热处理，清洗不是成形加工。",
    "image": null,
    "knowledgePoint": "铣削加工",
    "knowledgePoints": [
      "制造工艺",
      "铣削加工"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "铣削加工"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_011",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "在实体材料上加工一般圆孔，常见的第一步加工方法是？",
    "question": "在实体材料上加工一般圆孔，常见的第一步加工方法是？",
    "options": [
      "喷丸",
      "发黑",
      "钻削",
      "镀铬"
    ],
    "answerIndex": 2,
    "explanation": "钻削用于在实体上加工孔，之后可根据精度要求扩孔、铰孔或镗孔；表面处理不能代替孔加工。",
    "image": null,
    "knowledgePoint": "钻削加工",
    "knowledgePoints": [
      "制造工艺",
      "钻削加工"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "钻削加工"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_012",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "箱体孔系已有预孔，要求提高孔的尺寸精度和位置精度时，常采用什么加工？",
    "question": "箱体孔系已有预孔，要求提高孔的尺寸精度和位置精度时，常采用什么加工？",
    "options": [
      "手工折弯",
      "镗削",
      "剪板",
      "喷漆"
    ],
    "answerIndex": 1,
    "explanation": "镗削常用于孔系精加工，能改善孔径、圆度和孔轴线位置；剪板和折弯是板料加工，喷漆不提高孔精度。",
    "image": null,
    "knowledgePoint": "镗削加工",
    "knowledgePoints": [
      "制造工艺",
      "镗削加工"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "镗削加工"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_013",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "淬硬钢件需要获得较高尺寸精度和较小表面粗糙度时，常用哪种方法？",
    "question": "淬硬钢件需要获得较高尺寸精度和较小表面粗糙度时，常用哪种方法？",
    "options": [
      "磨削",
      "普通锯割",
      "砂型造型",
      "气割下料"
    ],
    "answerIndex": 0,
    "explanation": "磨削适合硬材料和精加工，可获得较高精度和较好表面质量；锯割、造型和气割属于下料或毛坯环节。",
    "image": null,
    "knowledgePoint": "磨削加工",
    "knowledgePoints": [
      "制造工艺",
      "磨削加工"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "磨削加工"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_014",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "粗加工的主要任务通常是什么？",
    "question": "粗加工的主要任务通常是什么？",
    "options": [
      "获得最终最高表面质量",
      "代替最终检验",
      "只改变零件颜色",
      "快速去除大部分余量并形成后续加工基础"
    ],
    "answerIndex": 3,
    "explanation": "粗加工重在去除余量、提高效率并为半精加工和精加工留下合理余量；最终精度和表面质量通常由后续工序保证。",
    "image": null,
    "knowledgePoint": "粗精加工",
    "knowledgePoints": [
      "制造工艺",
      "粗精加工"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "粗精加工"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_015",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "加工余量过小可能造成什么问题？",
    "question": "加工余量过小可能造成什么问题？",
    "options": [
      "必然降低刀具磨损为零",
      "能取消装夹定位",
      "不能完全去除毛坯缺陷或前道工序误差",
      "一定提高所有表面质量"
    ],
    "answerIndex": 2,
    "explanation": "余量过小可能保留氧化皮、变形层或位置误差，影响最终质量；余量需要结合毛坯精度和工艺能力合理确定。",
    "image": null,
    "knowledgePoint": "加工余量",
    "knowledgePoints": [
      "制造工艺",
      "加工余量"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "加工余量"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_016",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "精加工表面出现明显刀纹，优先应检查哪些因素？",
    "question": "精加工表面出现明显刀纹，优先应检查哪些因素？",
    "options": [
      "员工工号长度",
      "刀具状态、进给量、振动和切削参数",
      "工件条码字体",
      "仓库照明颜色"
    ],
    "answerIndex": 1,
    "explanation": "刀纹与刀具磨损、进给量过大、系统振动和参数不当密切相关；条码、照明和工号不是加工纹理的直接原因。",
    "image": null,
    "knowledgePoint": "表面质量",
    "knowledgePoints": [
      "制造工艺",
      "表面质量"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "表面质量"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_017",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "切削用量三要素通常包括切削速度、进给量和什么？",
    "question": "切削用量三要素通常包括切削速度、进给量和什么？",
    "options": [
      "背吃刀量",
      "焊接电流",
      "淬火温度",
      "包装重量"
    ],
    "answerIndex": 0,
    "explanation": "切削用量三要素是切削速度、进给量和背吃刀量，直接影响效率、刀具寿命、加工质量和切削力。",
    "image": null,
    "knowledgePoint": "切削用量",
    "knowledgePoints": [
      "制造工艺",
      "切削用量"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "切削用量"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_018",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "单选题",
    "difficulty": "hard",
    "text": "某轴粗车后直接精磨，尺寸稳定性差，常见原因可能是什么？",
    "question": "某轴粗车后直接精磨，尺寸稳定性差，常见原因可能是什么？",
    "options": [
      "砂轮颜色太浅",
      "图纸标题栏太小",
      "包装箱太轻",
      "缺少消除内应力或稳定组织的中间工序"
    ],
    "answerIndex": 3,
    "explanation": "粗加工会释放和重新分布内应力，直接精磨可能导致后续变形。常需安排时效、调质或去应力处理，再进行精加工。",
    "image": null,
    "knowledgePoint": "工艺稳定性",
    "knowledgePoints": [
      "制造工艺",
      "工艺稳定性"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工艺稳定性"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_019",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "同一刀具加工一段时间后尺寸逐渐偏大或偏小，首先应关注什么？",
    "question": "同一刀具加工一段时间后尺寸逐渐偏大或偏小，首先应关注什么？",
    "options": [
      "零件名称字体",
      "工装颜色",
      "刀具磨损和刀补调整",
      "厂房门牌号"
    ],
    "answerIndex": 2,
    "explanation": "刀具磨损会改变实际切削刃位置和切削状态，批量加工中要结合测量结果及时修正刀补或换刀。",
    "image": null,
    "knowledgePoint": "刀具磨损",
    "knowledgePoints": [
      "制造工艺",
      "刀具磨损"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "刀具磨损"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_020",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "数控加工相对普通手动加工的主要优势之一是什么？",
    "question": "数控加工相对普通手动加工的主要优势之一是什么？",
    "options": [
      "可以不看图纸要求",
      "程序控制重复性好，适合复杂轨迹和批量稳定加工",
      "完全不需要装夹",
      "永远不会产生废品"
    ],
    "answerIndex": 1,
    "explanation": "CNC通过程序控制运动，重复性和复杂轨迹加工能力强；但仍需正确装夹、对刀、检验和工艺控制。",
    "image": null,
    "knowledgePoint": "CNC加工特点",
    "knowledgePoints": [
      "制造工艺",
      "CNC加工特点"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "CNC加工特点"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_021",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "数控加工设置工件坐标系的主要目的是什么？",
    "question": "数控加工设置工件坐标系的主要目的是什么？",
    "options": [
      "建立程序坐标与工件实际位置的对应关系",
      "提高车间照明",
      "改变材料牌号",
      "替代夹紧力"
    ],
    "answerIndex": 0,
    "explanation": "工件坐标系把程序中的坐标位置与实际工件装夹位置对应起来，坐标系错误会导致尺寸偏移甚至撞机。",
    "image": null,
    "knowledgePoint": "工件坐标系",
    "knowledgePoints": [
      "制造工艺",
      "工件坐标系"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工件坐标系"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_022",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "数控机床对刀的主要作用是什么？",
    "question": "数控机床对刀的主要作用是什么？",
    "options": [
      "检查员工考勤",
      "改变主轴颜色",
      "自动消除所有毛刺",
      "确定刀具与工件坐标之间的相对位置"
    ],
    "answerIndex": 3,
    "explanation": "对刀用于获取刀具长度、半径或刀尖位置等信息，使程序运动与实际切削位置一致；它不能代替去毛刺或质量检验。",
    "image": null,
    "knowledgePoint": "对刀",
    "knowledgePoints": [
      "制造工艺",
      "对刀"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "对刀"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_023",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "加工轮廓尺寸整体偏大或偏小时，常需要检查什么？",
    "question": "加工轮廓尺寸整体偏大或偏小时，常需要检查什么？",
    "options": [
      "工件包装标签",
      "车间温度计颜色",
      "刀具半径补偿或刀具磨损补偿",
      "冷却风扇品牌"
    ],
    "answerIndex": 2,
    "explanation": "轮廓尺寸系统性偏差常与刀补、刀具实际尺寸和磨损有关；应结合测量结果调整补偿，不能盲目改程序。",
    "image": null,
    "knowledgePoint": "刀具补偿",
    "knowledgePoints": [
      "制造工艺",
      "刀具补偿"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "刀具补偿"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_024",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "新程序正式切削前进行空运行的主要目的是什么？",
    "question": "新程序正式切削前进行空运行的主要目的是什么？",
    "options": [
      "增加材料硬度",
      "检查程序路径、换刀和机床动作是否存在明显风险",
      "让零件表面更光亮",
      "替代首件检验"
    ],
    "answerIndex": 1,
    "explanation": "空运行不切削或远离工件运行，可发现路径、坐标、换刀等明显问题；它不能代替首件尺寸检验。",
    "image": null,
    "knowledgePoint": "程序试运行",
    "knowledgePoints": [
      "制造工艺",
      "程序试运行"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "程序试运行"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_025",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "调试数控程序时使用单段运行有什么作用？",
    "question": "调试数控程序时使用单段运行有什么作用？",
    "options": [
      "逐段观察程序动作，降低调试风险",
      "让程序自动生成图纸",
      "取消夹具定位",
      "提高材料含碳量"
    ],
    "answerIndex": 0,
    "explanation": "单段运行每次执行一段程序，便于观察刀具路径和机床状态，特别适合新程序、新装夹的调试。",
    "image": null,
    "knowledgePoint": "单段运行",
    "knowledgePoints": [
      "制造工艺",
      "单段运行"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "单段运行"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_026",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "加工中心自动换刀前应重点确认什么？",
    "question": "加工中心自动换刀前应重点确认什么？",
    "options": [
      "产品销售价格",
      "仓库货架高度",
      "量具外包装",
      "刀具号、刀长补偿、刀柄装夹和换刀区域安全"
    ],
    "answerIndex": 3,
    "explanation": "换刀错误会导致加工尺寸错误或碰撞，应确认刀具号、补偿、刀柄夹紧和换刀空间；与销售价格等无关。",
    "image": null,
    "knowledgePoint": "加工中心换刀",
    "knowledgePoints": [
      "制造工艺",
      "加工中心换刀"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "加工中心换刀"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_027",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "单选题",
    "difficulty": "hard",
    "text": "数控加工中发现切削声音异常且负载升高，正确做法是？",
    "question": "数控加工中发现切削声音异常且负载升高，正确做法是？",
    "options": [
      "用手靠近旋转刀具清屑",
      "关闭报警继续加工",
      "暂停或停机检查刀具、切削参数和排屑状况",
      "继续提高进给速度观察"
    ],
    "answerIndex": 2,
    "explanation": "异常声音和负载升高可能预示刀具崩刃、排屑堵塞或参数过大，应停机检查；强行加工会扩大损失并带来安全风险。",
    "image": null,
    "knowledgePoint": "CNC现场安全",
    "knowledgePoints": [
      "制造工艺",
      "CNC现场安全"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "CNC现场安全"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_028",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "数控车削加工细长轴时，容易出现的问题是什么？",
    "question": "数控车削加工细长轴时，容易出现的问题是什么？",
    "options": [
      "冷却液失去颜色",
      "刚性不足导致振动、弯曲和尺寸不稳定",
      "工件自动变成铸件",
      "程序不需要坐标系"
    ],
    "answerIndex": 1,
    "explanation": "细长轴刚性差，车削中受切削力影响容易让刀和振动，应考虑中心架、跟刀架、合理切削参数和分步加工。",
    "image": null,
    "knowledgePoint": "数控车床",
    "knowledgePoints": [
      "制造工艺",
      "数控车床"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "数控车床"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_029",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "铣削薄壁件时，为什么常采用分层、对称和小切削力加工？",
    "question": "铣削薄壁件时，为什么常采用分层、对称和小切削力加工？",
    "options": [
      "减少变形和振动，提高尺寸稳定性",
      "增加无效切削时间即可",
      "让毛坯自动退火",
      "取消所有检验"
    ],
    "answerIndex": 0,
    "explanation": "薄壁件刚性差，切削力和夹紧力都会引起变形，合理路径和参数能降低变形风险。",
    "image": null,
    "knowledgePoint": "数控铣削",
    "knowledgePoints": [
      "制造工艺",
      "数控铣削"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "数控铣削"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_030",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "单选题",
    "difficulty": "easy",
    "text": "一个或一组工人在同一工作地对同一工件连续完成的工艺过程部分称为？",
    "question": "一个或一组工人在同一工作地对同一工件连续完成的工艺过程部分称为？",
    "options": [
      "毛坯",
      "库存",
      "节拍表颜色",
      "工序"
    ],
    "answerIndex": 3,
    "explanation": "工序是工艺过程的基本组成单位，常用于编制工艺路线、安排设备和统计生产。",
    "image": null,
    "knowledgePoint": "工序",
    "knowledgePoints": [
      "制造工艺",
      "工序"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工序"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_031",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "单选题",
    "difficulty": "easy",
    "text": "在一道工序中，使用同一刀具和切削用量加工同一表面的连续过程称为？",
    "question": "在一道工序中，使用同一刀具和切削用量加工同一表面的连续过程称为？",
    "options": [
      "发黑",
      "装箱",
      "工步",
      "终检"
    ],
    "answerIndex": 2,
    "explanation": "工步用于细分工序内容，便于确定刀具、参数和操作顺序；终检和表面处理不是工步概念。",
    "image": null,
    "knowledgePoint": "工步",
    "knowledgePoints": [
      "制造工艺",
      "工步"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工步"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_032",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "单选题",
    "difficulty": "medium",
    "text": "工件一次装夹后完成的那部分工艺内容通常称为一次什么？",
    "question": "工件一次装夹后完成的那部分工艺内容通常称为一次什么？",
    "options": [
      "报价",
      "安装",
      "喷涂",
      "采购"
    ],
    "answerIndex": 1,
    "explanation": "安装强调工件在机床或夹具中的一次定位夹紧。减少不必要的安装次数有利于提高相互位置精度。",
    "image": null,
    "knowledgePoint": "安装",
    "knowledgePoints": [
      "制造工艺",
      "安装"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "安装"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_033",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "单选题",
    "difficulty": "medium",
    "text": "加工中心一次装夹完成多个面的孔、槽和平面加工，体现了哪种原则？",
    "question": "加工中心一次装夹完成多个面的孔、槽和平面加工，体现了哪种原则？",
    "options": [
      "工序集中",
      "工序分散到每台机床只做一步",
      "完全取消定位",
      "只按颜色排工序"
    ],
    "answerIndex": 0,
    "explanation": "工序集中可减少装夹次数，提高位置精度和生产效率，但也要求设备和工装能力匹配。",
    "image": null,
    "knowledgePoint": "工序集中",
    "knowledgePoints": [
      "制造工艺",
      "工序集中"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工序集中"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_034",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "单选题",
    "difficulty": "medium",
    "text": "在通用设备多、单件小批生产中，常采用较灵活的哪种工艺组织？",
    "question": "在通用设备多、单件小批生产中，常采用较灵活的哪种工艺组织？",
    "options": [
      "所有工序合并到一把刀",
      "不设检验工序",
      "不留加工余量",
      "工序分散"
    ],
    "answerIndex": 3,
    "explanation": "工序分散便于利用通用设备和灵活安排人员，适合单件小批；大批量生产可更多采用专用夹具和工序集中。",
    "image": null,
    "knowledgePoint": "工序分散",
    "knowledgePoints": [
      "制造工艺",
      "工序分散"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工序分散"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_035",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "单选题",
    "difficulty": "easy",
    "text": "安排机械加工顺序时，“先粗后精”的主要原因是什么？",
    "question": "安排机械加工顺序时，“先粗后精”的主要原因是什么？",
    "options": [
      "省略所有半精加工",
      "使刀具不接触工件",
      "先去除大余量并释放误差，再保证最终精度",
      "让精加工先把毛坯缺陷保留下来"
    ],
    "answerIndex": 2,
    "explanation": "先粗加工可去除大余量和毛坯缺陷，精加工在较稳定的基础上保证尺寸与表面质量。",
    "image": null,
    "knowledgePoint": "先粗后精",
    "knowledgePoints": [
      "制造工艺",
      "先粗后精"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "先粗后精"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_036",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "单选题",
    "difficulty": "medium",
    "text": "箱体零件常先加工基准平面再加工孔系，主要体现什么原则？",
    "question": "箱体零件常先加工基准平面再加工孔系，主要体现什么原则？",
    "options": [
      "先检验后下料",
      "先面后孔和基准先行",
      "先孔后毛坯",
      "先包装后加工"
    ],
    "answerIndex": 1,
    "explanation": "基准平面加工好后可作为稳定定位基准，再加工孔系有利于保证孔的位置精度和一致性。",
    "image": null,
    "knowledgePoint": "先面后孔",
    "knowledgePoints": [
      "制造工艺",
      "先面后孔"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "先面后孔"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_037",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "单选题",
    "difficulty": "medium",
    "text": "为了改善钢件切削加工性，退火或正火通常安排在什么阶段？",
    "question": "为了改善钢件切削加工性，退火或正火通常安排在什么阶段？",
    "options": [
      "粗加工前或毛坯后",
      "最终检验之后",
      "成品包装之后",
      "所有尺寸加工完成后且不再检验"
    ],
    "answerIndex": 0,
    "explanation": "改善切削性的热处理通常在毛坯后、粗加工前进行，使材料硬度和组织适合切削。",
    "image": null,
    "knowledgePoint": "热处理安排",
    "knowledgePoints": [
      "制造工艺",
      "热处理安排"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "热处理安排"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_038",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "单选题",
    "difficulty": "hard",
    "text": "薄壁套筒先精加工内孔再强力夹外圆精车，松夹后圆度超差，主要问题是什么？",
    "question": "薄壁套筒先精加工内孔再强力夹外圆精车，松夹后圆度超差，主要问题是什么？",
    "options": [
      "检验记录太详细",
      "零件名称太短",
      "切削液一定过多",
      "装夹和加工顺序未控制薄壁变形"
    ],
    "answerIndex": 3,
    "explanation": "薄壁件受夹紧力和切削力影响明显，应优化夹紧方式、支承位置、切削参数和粗精加工顺序，避免松夹后弹性恢复造成超差。",
    "image": null,
    "knowledgePoint": "工艺路线分析",
    "knowledgePoints": [
      "制造工艺",
      "工艺路线分析"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工艺路线分析"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_039",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "单选题",
    "difficulty": "medium",
    "text": "批量生产中设置首件检验的主要目的是什么？",
    "question": "批量生产中设置首件检验的主要目的是什么？",
    "options": [
      "替代所有巡检和终检",
      "让机床自动维修",
      "确认工艺、程序、装夹和刀补是否满足要求",
      "统计员工午餐时间"
    ],
    "answerIndex": 2,
    "explanation": "首件检验用于发现批量加工前的系统性错误，如坐标、刀补、装夹和程序问题；不能完全代替过程巡检和最终检验。",
    "image": null,
    "knowledgePoint": "检验工序",
    "knowledgePoints": [
      "制造工艺",
      "检验工序"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "检验工序"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_040",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "单选题",
    "difficulty": "easy",
    "text": "六点定位原理的核心是限制工件的什么？",
    "question": "六点定位原理的核心是限制工件的什么？",
    "options": [
      "切削液容量",
      "六个自由度",
      "材料颜色",
      "刀具数量"
    ],
    "answerIndex": 1,
    "explanation": "工件在空间有六个自由度，合理定位就是按加工要求限制必要自由度，保证位置确定。",
    "image": null,
    "knowledgePoint": "六点定位原理",
    "knowledgePoints": [
      "制造工艺",
      "六点定位原理"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "六点定位原理"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_041",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "单选题",
    "difficulty": "medium",
    "text": "工件六个自由度均被合理限制的定位称为什么？",
    "question": "工件六个自由度均被合理限制的定位称为什么？",
    "options": [
      "完全定位",
      "欠定位",
      "自由定位",
      "热定位"
    ],
    "answerIndex": 0,
    "explanation": "完全定位表示六个自由度都被限制，适用于需要完全确定工件空间位置的加工；但仍要避免不合理过定位。",
    "image": null,
    "knowledgePoint": "完全定位",
    "knowledgePoints": [
      "制造工艺",
      "完全定位"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "完全定位"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_042",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "单选题",
    "difficulty": "medium",
    "text": "加工要求必须限制的自由度没有被限制，属于哪种定位问题？",
    "question": "加工要求必须限制的自由度没有被限制，属于哪种定位问题？",
    "options": [
      "完全定位",
      "表面处理",
      "质量追溯",
      "欠定位"
    ],
    "answerIndex": 3,
    "explanation": "欠定位会使工件位置不确定，直接影响尺寸和位置精度，是夹具设计中必须避免的问题。",
    "image": null,
    "knowledgePoint": "欠定位",
    "knowledgePoints": [
      "制造工艺",
      "欠定位"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "欠定位"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_043",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "单选题",
    "difficulty": "hard",
    "text": "两个定位元件同时限制同一自由度且毛坯精度较差，可能造成什么问题？",
    "question": "两个定位元件同时限制同一自由度且毛坯精度较差，可能造成什么问题？",
    "options": [
      "切削速度自动提高",
      "材料韧性一定增加",
      "过定位引起装夹困难或工件变形",
      "定位更自由不会有影响"
    ],
    "answerIndex": 2,
    "explanation": "过定位会因定位基准之间误差互相冲突导致夹紧变形、定位不稳或装夹困难，现场需合理释放重复约束。",
    "image": null,
    "knowledgePoint": "过定位",
    "knowledgePoints": [
      "制造工艺",
      "过定位"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "过定位"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_044",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "单选题",
    "difficulty": "easy",
    "text": "直接用未加工毛坯面定位的基准称为什么？",
    "question": "直接用未加工毛坯面定位的基准称为什么？",
    "options": [
      "装配基准",
      "粗基准",
      "精基准",
      "测量基准"
    ],
    "answerIndex": 1,
    "explanation": "粗基准是未加工表面，用于初始加工。其精度较低，一般应合理选择并尽快加工出精基准。",
    "image": null,
    "knowledgePoint": "粗基准",
    "knowledgePoints": [
      "制造工艺",
      "粗基准"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "粗基准"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_045",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "单选题",
    "difficulty": "medium",
    "text": "用已加工表面作为定位基准通常称为什么？",
    "question": "用已加工表面作为定位基准通常称为什么？",
    "options": [
      "精基准",
      "冒口",
      "浇口",
      "飞边"
    ],
    "answerIndex": 0,
    "explanation": "精基准表面精度较高、稳定性好，适合后续工序定位，有助于提高加工一致性。",
    "image": null,
    "knowledgePoint": "精基准",
    "knowledgePoints": [
      "制造工艺",
      "精基准"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "精基准"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_046",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "单选题",
    "difficulty": "medium",
    "text": "设计基准、工艺基准和测量基准尽量一致，主要为了什么？",
    "question": "设计基准、工艺基准和测量基准尽量一致，主要为了什么？",
    "options": [
      "增加装夹次数",
      "让毛坯更重",
      "取消刀具补偿",
      "减少基准不重合误差"
    ],
    "answerIndex": 3,
    "explanation": "基准重合可减少尺寸换算和定位误差，是保证加工精度的重要原则。",
    "image": null,
    "knowledgePoint": "基准重合",
    "knowledgePoints": [
      "制造工艺",
      "基准重合"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "基准重合"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_047",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "单选题",
    "difficulty": "medium",
    "text": "夹紧力方向选择通常应尽量怎样？",
    "question": "夹紧力方向选择通常应尽量怎样？",
    "options": [
      "只按操作者习惯",
      "必须与切削速度相同",
      "指向主要定位支承并减少工件变形",
      "远离所有支承点"
    ],
    "answerIndex": 2,
    "explanation": "夹紧力应把工件可靠压向定位面，并尽量作用在刚性好、支承可靠的位置，避免夹紧变形。",
    "image": null,
    "knowledgePoint": "夹紧力方向",
    "knowledgePoints": [
      "制造工艺",
      "夹紧力方向"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "夹紧力方向"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_048",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "单选题",
    "difficulty": "hard",
    "text": "薄壁件夹紧后加工合格，松开后尺寸变形明显，应优先改进什么？",
    "question": "薄壁件夹紧后加工合格，松开后尺寸变形明显，应优先改进什么？",
    "options": [
      "员工站位编号",
      "夹紧方式、支承位置、切削力和工序安排",
      "成品标签颜色",
      "仓库温度记录表"
    ],
    "answerIndex": 1,
    "explanation": "薄壁件加工合格但松夹变形，说明装夹变形参与了加工结果，应降低夹紧力、增加支承、优化路径和热处理或时效安排。",
    "image": null,
    "knowledgePoint": "夹具变形控制",
    "knowledgePoints": [
      "制造工艺",
      "夹具变形控制"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "夹具变形控制"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_049",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "单选题",
    "difficulty": "medium",
    "text": "专用夹具在批量生产中的主要作用是什么？",
    "question": "专用夹具在批量生产中的主要作用是什么？",
    "options": [
      "提高定位夹紧效率和加工一致性",
      "替代材料检验",
      "改变零件化学成分",
      "保证零件永不磨损"
    ],
    "answerIndex": 0,
    "explanation": "夹具可快速可靠定位、夹紧并引导加工，适合批量生产提高效率和稳定性，但不能替代材料和质量检验。",
    "image": null,
    "knowledgePoint": "夹具作用",
    "knowledgePoints": [
      "制造工艺",
      "夹具作用"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "夹具作用"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_050",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "单选题",
    "difficulty": "easy",
    "text": "钢件退火的常见目的是什么？",
    "question": "钢件退火的常见目的是什么？",
    "options": [
      "增加零件齿数",
      "形成最终包装",
      "代替所有机加工",
      "降低硬度、改善切削加工性或消除应力"
    ],
    "answerIndex": 3,
    "explanation": "退火可软化材料、改善组织并降低内应力，常用于毛坯或粗加工前后；不能代替成形和机械加工。",
    "image": null,
    "knowledgePoint": "退火",
    "knowledgePoints": [
      "制造工艺",
      "退火"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "退火"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_051",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "单选题",
    "difficulty": "medium",
    "text": "与退火相比，正火通常采用哪种冷却方式？",
    "question": "与退火相比，正火通常采用哪种冷却方式？",
    "options": [
      "水中急冷到开裂为止",
      "油漆自然干燥",
      "空气冷却",
      "炉内极慢冷却"
    ],
    "answerIndex": 2,
    "explanation": "正火通常加热后在空气中冷却，可细化组织、改善切削性和力学性能；炉冷更接近退火，水急冷多用于淬火。",
    "image": null,
    "knowledgePoint": "正火",
    "knowledgePoints": [
      "制造工艺",
      "正火"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "正火"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_052",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "单选题",
    "difficulty": "easy",
    "text": "钢件淬火的主要目的通常是什么？",
    "question": "钢件淬火的主要目的通常是什么？",
    "options": [
      "生成工艺卡片",
      "提高硬度和耐磨性",
      "降低所有强度",
      "增加铸造砂粒"
    ],
    "answerIndex": 1,
    "explanation": "淬火通过快速冷却获得高硬度组织，常用于需要耐磨的零件；淬火后通常需要回火降低脆性。",
    "image": null,
    "knowledgePoint": "淬火",
    "knowledgePoints": [
      "制造工艺",
      "淬火"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "淬火"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_053",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "单选题",
    "difficulty": "medium",
    "text": "淬火后安排回火的主要目的是什么？",
    "question": "淬火后安排回火的主要目的是什么？",
    "options": [
      "降低脆性、稳定组织并调整性能",
      "让零件重新变成毛坯",
      "取消尺寸检验",
      "增加焊缝数量"
    ],
    "answerIndex": 0,
    "explanation": "回火能释放淬火应力、降低脆性并获得需要的综合性能，是淬火后常见配套工序。",
    "image": null,
    "knowledgePoint": "回火",
    "knowledgePoints": [
      "制造工艺",
      "回火"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "回火"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_054",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "单选题",
    "difficulty": "medium",
    "text": "调质处理通常指什么？",
    "question": "调质处理通常指什么？",
    "options": [
      "退火后喷漆",
      "铸造后包装",
      "钻孔后清洗",
      "淬火后高温回火"
    ],
    "answerIndex": 3,
    "explanation": "调质可获得较好的强度、韧性综合性能，轴类和受力件粗加工后常安排调质以稳定组织。",
    "image": null,
    "knowledgePoint": "调质",
    "knowledgePoints": [
      "制造工艺",
      "调质"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "调质"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_055",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "单选题",
    "difficulty": "medium",
    "text": "表面淬火适合解决哪类需求？",
    "question": "表面淬火适合解决哪类需求？",
    "options": [
      "消除所有尺寸误差",
      "替代夹具定位",
      "表面耐磨而心部保持较好韧性",
      "整体变成软材料"
    ],
    "answerIndex": 2,
    "explanation": "表面淬火只强化表层，适合齿面、轴颈等耐磨表面，同时保持心部韧性。",
    "image": null,
    "knowledgePoint": "表面淬火",
    "knowledgePoints": [
      "制造工艺",
      "表面淬火"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "表面淬火"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_056",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "单选题",
    "difficulty": "medium",
    "text": "低碳钢零件渗碳淬火的主要目的是什么？",
    "question": "低碳钢零件渗碳淬火的主要目的是什么？",
    "options": [
      "提高包装强度",
      "提高表层含碳量并增强表面硬度和耐磨性",
      "减少所有碳元素",
      "使零件变成塑料"
    ],
    "answerIndex": 1,
    "explanation": "渗碳让表层获得较高碳含量，再经淬火形成硬化层，常用于齿轮等耐磨件。",
    "image": null,
    "knowledgePoint": "渗碳",
    "knowledgePoints": [
      "制造工艺",
      "渗碳"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "渗碳"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_057",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "单选题",
    "difficulty": "medium",
    "text": "氮化处理的特点之一是什么？",
    "question": "氮化处理的特点之一是什么？",
    "options": [
      "可提高表面硬度、耐磨性和抗疲劳性能，变形较小",
      "必须在室温下用水冲洗完成",
      "只用于木材",
      "会自动修复尺寸超差"
    ],
    "answerIndex": 0,
    "explanation": "氮化温度相对较低，处理变形小，适合要求高的耐磨表面；它不能修复已超差尺寸。",
    "image": null,
    "knowledgePoint": "氮化",
    "knowledgePoints": [
      "制造工艺",
      "氮化"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "氮化"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_058",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "单选题",
    "difficulty": "easy",
    "text": "钢件发黑处理的主要作用是什么？",
    "question": "钢件发黑处理的主要作用是什么？",
    "options": [
      "提高孔的位置精度",
      "代替淬火硬化",
      "消除铸造气孔",
      "形成氧化膜改善防锈和外观"
    ],
    "answerIndex": 3,
    "explanation": "发黑是在表面形成黑色氧化膜，主要改善防锈和外观，不能替代热处理强化或机械加工。",
    "image": null,
    "knowledgePoint": "发黑",
    "knowledgePoints": [
      "制造工艺",
      "发黑"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "发黑"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_059",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "单选题",
    "difficulty": "medium",
    "text": "铝合金阳极氧化的主要目的是什么？",
    "question": "铝合金阳极氧化的主要目的是什么？",
    "options": [
      "加工内螺纹",
      "替代焊接坡口",
      "提高耐蚀性、耐磨性并改善外观",
      "增加钢件含碳量"
    ],
    "answerIndex": 2,
    "explanation": "阳极氧化常用于铝合金表面形成氧化膜，提高耐蚀、耐磨和装饰效果；它不是钢的增碳或孔加工方法。",
    "image": null,
    "knowledgePoint": "阳极氧化",
    "knowledgePoints": [
      "制造工艺",
      "阳极氧化"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "阳极氧化"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_060",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "单选题",
    "difficulty": "easy",
    "text": "首件检验通常发生在什么时候？",
    "question": "首件检验通常发生在什么时候？",
    "options": [
      "销售合同结束后",
      "批量加工开始或工艺调整后第一件完成时",
      "全部产品包装后",
      "设备报废后"
    ],
    "answerIndex": 1,
    "explanation": "首件检验用于确认工艺状态是否正确，避免批量性错误；它应在批量继续生产前完成。",
    "image": null,
    "knowledgePoint": "首件检验",
    "knowledgePoints": [
      "制造工艺",
      "首件检验"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "首件检验"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_061",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "单选题",
    "difficulty": "medium",
    "text": "批量生产过程中的巡检主要目的是什么？",
    "question": "批量生产过程中的巡检主要目的是什么？",
    "options": [
      "及时发现过程漂移和异常，防止批量不合格",
      "替代操作者自检",
      "只统计人员数量",
      "改变零件材料"
    ],
    "answerIndex": 0,
    "explanation": "巡检关注过程稳定性，如刀具磨损、尺寸趋势和设备状态；不能完全替代自检和终检。",
    "image": null,
    "knowledgePoint": "巡检",
    "knowledgePoints": [
      "制造工艺",
      "巡检"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "巡检"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_062",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "单选题",
    "difficulty": "easy",
    "text": "产品入库或交付前的最终质量确认通常称为什么？",
    "question": "产品入库或交付前的最终质量确认通常称为什么？",
    "options": [
      "粗加工",
      "对刀",
      "下料",
      "终检"
    ],
    "answerIndex": 3,
    "explanation": "终检用于确认成品是否满足图纸和工艺要求，是交付前的重要质量控制环节。",
    "image": null,
    "knowledgePoint": "终检",
    "knowledgePoints": [
      "制造工艺",
      "终检"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "终检"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_063",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "单选题",
    "difficulty": "medium",
    "text": "操作者加工后按要求检查自己的产品，属于什么检验？",
    "question": "操作者加工后按要求检查自己的产品，属于什么检验？",
    "options": [
      "专检",
      "终审采购",
      "自检",
      "互检"
    ],
    "answerIndex": 2,
    "explanation": "自检是操作者对本人加工结果的检查，可尽早发现问题；互检是工序间或人员间检查，专检由检验人员实施。",
    "image": null,
    "knowledgePoint": "自检互检专检",
    "knowledgePoints": [
      "制造工艺",
      "自检互检专检"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "自检互检专检"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_064",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "单选题",
    "difficulty": "medium",
    "text": "加工尺寸连续向同一方向偏移，常见原因是什么？",
    "question": "加工尺寸连续向同一方向偏移，常见原因是什么？",
    "options": [
      "照明开关位置",
      "刀具磨损、热变形或补偿设置不当",
      "产品名称改变",
      "包装袋过薄"
    ],
    "answerIndex": 1,
    "explanation": "连续偏移多属于过程漂移或系统误差，应检查刀具、机床热态、夹具和补偿。",
    "image": null,
    "knowledgePoint": "尺寸超差",
    "knowledgePoints": [
      "制造工艺",
      "尺寸超差"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "尺寸超差"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_065",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "单选题",
    "difficulty": "medium",
    "text": "表面粗糙度达不到要求时，不合理的做法是？",
    "question": "表面粗糙度达不到要求时，不合理的做法是？",
    "options": [
      "不分析原因直接放行",
      "检查刀具磨损",
      "优化进给量和切削速度",
      "检查机床振动"
    ],
    "answerIndex": 0,
    "explanation": "粗糙度不合格会影响配合、密封和寿命，应分析刀具、参数、振动和材料等原因，不能直接放行。",
    "image": null,
    "knowledgePoint": "表面粗糙度",
    "knowledgePoints": [
      "制造工艺",
      "表面粗糙度"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "表面粗糙度"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_066",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "单选题",
    "difficulty": "easy",
    "text": "机械加工后边缘产生毛刺，通常应如何处理？",
    "question": "机械加工后边缘产生毛刺，通常应如何处理？",
    "options": [
      "用手直接快速撕掉所有毛刺",
      "完全忽略",
      "用毛刺代替倒角",
      "按工艺要求去毛刺并防止划伤装配面"
    ],
    "answerIndex": 3,
    "explanation": "毛刺会影响装配、安全和测量，应使用合适工具去除，并避免损伤功能面。",
    "image": null,
    "knowledgePoint": "毛刺",
    "knowledgePoints": [
      "制造工艺",
      "毛刺"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "毛刺"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_067",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "单选题",
    "difficulty": "hard",
    "text": "发现尺寸超差件混入合格品周转箱，正确做法是什么？",
    "question": "发现尺寸超差件混入合格品周转箱，正确做法是什么？",
    "options": [
      "只口头提醒不记录",
      "把标识撕掉重新入库",
      "立即隔离标识并按不合格品流程评审处理",
      "继续流转减少停线"
    ],
    "answerIndex": 2,
    "explanation": "不合格品必须隔离、标识、记录和评审，防止误用误装；继续流转会造成批量质量风险。",
    "image": null,
    "knowledgePoint": "不合格品处理",
    "knowledgePoints": [
      "制造工艺",
      "不合格品处理"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "不合格品处理"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_068",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "单选题",
    "difficulty": "hard",
    "text": "磨削后表面出现发蓝和硬度异常，可能是什么问题？",
    "question": "磨削后表面出现发蓝和硬度异常，可能是什么问题？",
    "options": [
      "终检太早",
      "磨削烧伤，应检查砂轮、冷却和进给参数",
      "铸造浇口太大",
      "条码贴歪"
    ],
    "answerIndex": 1,
    "explanation": "磨削烧伤与局部温度过高有关，会影响表层组织和疲劳性能，应检查砂轮状态、冷却和磨削用量。",
    "image": null,
    "knowledgePoint": "磨削烧伤",
    "knowledgePoints": [
      "制造工艺",
      "磨削烧伤"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "磨削烧伤"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_069",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "单选题",
    "difficulty": "medium",
    "text": "现场擅自改变切削参数和检验频次，主要违反什么？",
    "question": "现场擅自改变切削参数和检验频次，主要违反什么？",
    "options": [
      "工艺纪律",
      "仓库摆放美观",
      "员工着装颜色",
      "产品宣传要求"
    ],
    "answerIndex": 0,
    "explanation": "工艺纪律要求按批准的工艺文件执行。擅自改参数或检验频次会破坏过程稳定和质量追溯。",
    "image": null,
    "knowledgePoint": "工艺纪律",
    "knowledgePoints": [
      "制造工艺",
      "工艺纪律"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工艺纪律"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_070",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "单选题",
    "difficulty": "easy",
    "text": "切削液在切削加工中的常见作用不包括哪一项？",
    "question": "切削液在切削加工中的常见作用不包括哪一项？",
    "options": [
      "冷却",
      "润滑",
      "排屑和防锈",
      "决定零件图纸比例"
    ],
    "answerIndex": 3,
    "explanation": "切削液主要起冷却、润滑、清洗排屑和防锈作用；图纸比例由设计图样确定。",
    "image": null,
    "knowledgePoint": "切削液作用",
    "knowledgePoints": [
      "制造工艺",
      "切削液作用"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "切削液作用"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_071",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "单选题",
    "difficulty": "medium",
    "text": "清理机床切屑时，正确做法是什么？",
    "question": "清理机床切屑时，正确做法是什么？",
    "options": [
      "在主轴旋转时戴手套缠绕切屑",
      "用压缩空气对人吹扫",
      "停机后使用刷子、钩子等工具清理",
      "用手直接抓取长切屑"
    ],
    "answerIndex": 2,
    "explanation": "切屑锋利且可能缠绕，清理应停机并使用工具。用手抓取或旋转中处理有割伤、卷入风险。",
    "image": null,
    "knowledgePoint": "安全防护",
    "knowledgePoints": [
      "制造工艺",
      "安全防护"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "安全防护"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_072",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "单选题",
    "difficulty": "medium",
    "text": "焊接作业必须重视面罩和通风，主要为了防护什么？",
    "question": "焊接作业必须重视面罩和通风，主要为了防护什么？",
    "options": [
      "量具磨损",
      "弧光、飞溅、烟尘和有害气体",
      "产品条码丢失",
      "机床坐标偏移"
    ],
    "answerIndex": 1,
    "explanation": "焊接会产生强弧光、飞溅、烟尘和气体，需要面罩、防护服和通风措施。",
    "image": null,
    "knowledgePoint": "焊接安全",
    "knowledgePoints": [
      "制造工艺",
      "焊接安全"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "焊接安全"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_073",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "单选题",
    "difficulty": "medium",
    "text": "吊装较重工件前，首先应确认什么？",
    "question": "吊装较重工件前，首先应确认什么？",
    "options": [
      "吊具额定载荷、重心、捆绑和人员避让",
      "工件颜色是否一致",
      "手机电量",
      "仓库门牌号"
    ],
    "answerIndex": 0,
    "explanation": "起吊风险来自超载、重心不稳、捆绑不牢和人员站位不当，吊装前必须确认这些要点。",
    "image": null,
    "knowledgePoint": "起吊搬运安全",
    "knowledgePoints": [
      "制造工艺",
      "起吊搬运安全"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "起吊搬运安全"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_074",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "单选题",
    "difficulty": "easy",
    "text": "设备点检的主要目的是什么？",
    "question": "设备点检的主要目的是什么？",
    "options": [
      "只为了填写表格",
      "替代所有维修",
      "让设备不需要润滑",
      "提前发现异常，保持设备安全稳定运行"
    ],
    "answerIndex": 3,
    "explanation": "点检通过检查声音、温升、润滑、泄漏和安全装置等，提前发现隐患；不能替代必要维修和保养。",
    "image": null,
    "knowledgePoint": "设备点检",
    "knowledgePoints": [
      "制造工艺",
      "设备点检"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "设备点检"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_075",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "单选题",
    "difficulty": "easy",
    "text": "5S管理中的“整顿”重点是什么？",
    "question": "5S管理中的“整顿”重点是什么？",
    "options": [
      "提高主轴转速",
      "改变材料硬度",
      "物品定置、标识清楚，方便取用和归还",
      "只把垃圾扫走"
    ],
    "answerIndex": 2,
    "explanation": "整顿强调定置定位和标识，减少寻找和误用，提高现场效率与安全。",
    "image": null,
    "knowledgePoint": "5S管理",
    "knowledgePoints": [
      "制造工艺",
      "5S管理"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "5S管理"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_076",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "单选题",
    "difficulty": "medium",
    "text": "产线节拍主要用来描述什么？",
    "question": "产线节拍主要用来描述什么？",
    "options": [
      "焊缝宽度",
      "按需求完成相邻产品的时间节奏",
      "零件硬度单位",
      "刀具齿数"
    ],
    "answerIndex": 1,
    "explanation": "节拍反映生产节奏，帮助平衡工位能力和交付需求；它不是尺寸或材料性能指标。",
    "image": null,
    "knowledgePoint": "节拍",
    "knowledgePoints": [
      "制造工艺",
      "节拍"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "节拍"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_077",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "单选题",
    "difficulty": "medium",
    "text": "单件小批生产通常更适合哪种工艺装备策略？",
    "question": "单件小批生产通常更适合哪种工艺装备策略？",
    "options": [
      "通用设备和可调整夹具，保持灵活性",
      "大量专用自动线且永不换型",
      "每件都开一套昂贵专用模",
      "不需要工艺文件"
    ],
    "answerIndex": 0,
    "explanation": "单件小批品种多、数量少，宜采用通用设备和柔性工装；专用自动线更适合大批大量稳定产品。",
    "image": null,
    "knowledgePoint": "生产类型",
    "knowledgePoints": [
      "制造工艺",
      "生产类型"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "生产类型"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_078",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "单选题",
    "difficulty": "medium",
    "text": "大批大量生产中，采用专用夹具和自动化设备的主要原因是什么？",
    "question": "大批大量生产中，采用专用夹具和自动化设备的主要原因是什么？",
    "options": [
      "增加换型难度作为目标",
      "减少所有检验记录",
      "让工人无法操作",
      "提高效率、重复精度和过程稳定性"
    ],
    "answerIndex": 3,
    "explanation": "批量稳定时专用夹具和自动化可降低单件时间、提高一致性，但仍需检验和维护。",
    "image": null,
    "knowledgePoint": "批量生产",
    "knowledgePoints": [
      "制造工艺",
      "批量生产"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "批量生产"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_079",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "单选题",
    "difficulty": "hard",
    "text": "绿色制造中优化切削液使用的合理目标是什么？",
    "question": "绿色制造中优化切削液使用的合理目标是什么？",
    "options": [
      "把废液直接排入下水道",
      "用更多切削液掩盖参数问题",
      "在满足加工质量前提下降低消耗、污染和职业健康风险",
      "完全不用考虑冷却润滑"
    ],
    "answerIndex": 2,
    "explanation": "绿色制造强调资源效率和环境安全。切削液应按规定选用、维护、回收和处理，不能随意排放。",
    "image": null,
    "knowledgePoint": "绿色制造",
    "knowledgePoints": [
      "制造工艺",
      "绿色制造"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "绿色制造"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_080",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "焊缝中夹渣较多时，较合理的原因分析方向是什么？",
    "question": "焊缝中夹渣较多时，较合理的原因分析方向是什么？",
    "options": [
      "铝件阳极氧化时间太短",
      "层间清理不足、焊接参数或操作方法不当",
      "工件坐标系设置过低",
      "刀具半径补偿过大"
    ],
    "answerIndex": 1,
    "explanation": "夹渣常与熔渣未清理、坡口和焊接参数不合理有关，会降低焊缝质量；坐标系、刀补和阳极氧化不是焊缝夹渣主因。",
    "image": null,
    "knowledgePoint": "焊接缺陷",
    "knowledgePoints": [
      "制造工艺",
      "焊接缺陷"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "焊接缺陷"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_081",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "用3D打印制作功能样件后，仍要评估其强度和表面质量，主要原因是什么？",
    "question": "用3D打印制作功能样件后，仍要评估其强度和表面质量，主要原因是什么？",
    "options": [
      "打印方向、材料和后处理会影响实际性能",
      "打印件一定等同于锻件性能",
      "3D打印不需要任何检验",
      "打印件不会有尺寸误差"
    ],
    "answerIndex": 0,
    "explanation": "增材制造件性能受材料、成形方向、层间结合和后处理影响，功能样件必须结合用途检验验证。",
    "image": null,
    "knowledgePoint": "增材制造",
    "knowledgePoints": [
      "制造工艺",
      "增材制造"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "增材制造"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_082",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "钻孔后为了提高孔的尺寸精度和表面质量，常采用哪种后续加工？",
    "question": "钻孔后为了提高孔的尺寸精度和表面质量，常采用哪种后续加工？",
    "options": [
      "发黑",
      "喷砂清理地面",
      "焊后矫正",
      "铰孔"
    ],
    "answerIndex": 3,
    "explanation": "铰孔常用于中小孔的半精或精加工，可改善孔径精度和表面质量；发黑、喷砂和矫正不是孔精加工方法。",
    "image": null,
    "knowledgePoint": "铰孔加工",
    "knowledgePoints": [
      "制造工艺",
      "铰孔加工"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "铰孔加工"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_083",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "已有孔径需要扩大并改善孔壁质量时，可采用什么加工？",
    "question": "已有孔径需要扩大并改善孔壁质量时，可采用什么加工？",
    "options": [
      "渗碳",
      "油漆烘干",
      "扩孔",
      "冲裁落料"
    ],
    "answerIndex": 2,
    "explanation": "扩孔用于扩大已有孔并改善孔加工质量，常位于钻孔之后、铰孔或镗孔之前。",
    "image": null,
    "knowledgePoint": "扩孔加工",
    "knowledgePoints": [
      "制造工艺",
      "扩孔加工"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "扩孔加工"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_084",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "单选题",
    "difficulty": "hard",
    "text": "加工中突然出现尺寸异常、表面划伤并伴随异响，可能优先检查什么？",
    "question": "加工中突然出现尺寸异常、表面划伤并伴随异响，可能优先检查什么？",
    "options": [
      "库房货架编号",
      "刀具崩刃或刀片松动",
      "产品合格证纸张",
      "工位看板颜色"
    ],
    "answerIndex": 1,
    "explanation": "刀具崩刃或松动会立即改变切削状态，造成尺寸和表面异常，应停机检查刀具和装夹。",
    "image": null,
    "knowledgePoint": "刀具崩刃",
    "knowledgePoints": [
      "制造工艺",
      "刀具崩刃"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "刀具崩刃"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_085",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "同一程序换到另一台机床加工前，必须重新确认什么？",
    "question": "同一程序换到另一台机床加工前，必须重新确认什么？",
    "options": [
      "工件坐标系、刀具补偿和机床行程安全",
      "产品宣传语",
      "员工班次名称",
      "包装箱尺寸"
    ],
    "answerIndex": 0,
    "explanation": "换机加工时机床状态、刀具和坐标可能不同，必须重新确认坐标、补偿和行程，避免偏移和碰撞。",
    "image": null,
    "knowledgePoint": "程序零点",
    "knowledgePoints": [
      "制造工艺",
      "程序零点"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "程序零点"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_086",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "单选题",
    "difficulty": "hard",
    "text": "现场为赶工临时修改数控程序，正确做法是什么？",
    "question": "现场为赶工临时修改数控程序，正确做法是什么？",
    "options": [
      "直接覆盖原程序且不记录",
      "只改一处就批量加工",
      "让操作者凭记忆口头说明",
      "按变更流程确认、备份并首件验证"
    ],
    "answerIndex": 3,
    "explanation": "程序变更必须可追溯并经过验证，否则容易造成批量尺寸错误或安全事故。",
    "image": null,
    "knowledgePoint": "程序修改",
    "knowledgePoints": [
      "制造工艺",
      "程序修改"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "程序修改"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_087",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "单选题",
    "difficulty": "medium",
    "text": "工艺路线中先加工主要表面，主要考虑什么？",
    "question": "工艺路线中先加工主要表面，主要考虑什么？",
    "options": [
      "减少所有检验记录",
      "按零件名称笔画排序",
      "优先保证影响装配和使用功能的关键表面",
      "让次要表面永远不加工"
    ],
    "answerIndex": 2,
    "explanation": "主要表面对装配、定位和使用性能影响大，优先加工和控制有利于保证关键质量。",
    "image": null,
    "knowledgePoint": "先主后次",
    "knowledgePoints": [
      "制造工艺",
      "先主后次"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "先主后次"
    ],
    "answer": "C",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_088",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "单选题",
    "difficulty": "hard",
    "text": "多道工序加工同一表面时，余量分配应避免什么？",
    "question": "多道工序加工同一表面时，余量分配应避免什么？",
    "options": [
      "给磨削保留合理余量",
      "前道余量过小导致缺陷留到精加工",
      "粗加工去除全部余量后仍能精加工",
      "根据工序能力分配余量"
    ],
    "answerIndex": 1,
    "explanation": "余量分配要保证每道工序能去除前道误差并留出后续加工量；前道过小或后道无余量都会影响质量。",
    "image": null,
    "knowledgePoint": "工艺余量分配",
    "knowledgePoints": [
      "制造工艺",
      "工艺余量分配"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工艺余量分配"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_089",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "单选题",
    "difficulty": "medium",
    "text": "夹具中的辅助支承主要作用是什么？",
    "question": "夹具中的辅助支承主要作用是什么？",
    "options": [
      "提高工件刚性和支承稳定性，通常不作为主要定位点",
      "重复限制所有自由度",
      "代替全部夹紧元件",
      "改变工件材料硬度"
    ],
    "answerIndex": 0,
    "explanation": "辅助支承用于增强局部刚性、减少振动或变形，使用时要避免破坏原有定位。",
    "image": null,
    "knowledgePoint": "辅助支承",
    "knowledgePoints": [
      "制造工艺",
      "辅助支承"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "辅助支承"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_090",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "单选题",
    "difficulty": "medium",
    "text": "喷丸处理常用于改善零件表层什么性能？",
    "question": "喷丸处理常用于改善零件表层什么性能？",
    "options": [
      "加工精确内螺纹",
      "增加铸件内腔数量",
      "替代首件检验",
      "提高表面抗疲劳能力并形成有利残余压应力"
    ],
    "answerIndex": 3,
    "explanation": "喷丸通过高速弹丸冲击表面，可改善疲劳性能和表面状态，但不能代替切削加工和质量检验。",
    "image": null,
    "knowledgePoint": "喷丸处理",
    "knowledgePoints": [
      "制造工艺",
      "喷丸处理"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "喷丸处理"
    ],
    "answer": "D",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_091",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "多选题",
    "difficulty": "medium",
    "text": "选择零件毛坯时通常需要综合考虑哪些因素？",
    "question": "选择零件毛坯时通常需要综合考虑哪些因素？",
    "options": [
      "零件形状复杂程度",
      "生产批量和成本",
      "只看毛坯颜色",
      "零件材料和力学性能要求"
    ],
    "answerIndex": [
      0,
      1,
      3
    ],
    "explanation": "毛坯选择要兼顾材料、形状、批量、成本和后续加工。颜色不是工艺选择依据。",
    "image": null,
    "knowledgePoint": "毛坯选择原则",
    "knowledgePoints": [
      "制造工艺",
      "毛坯选择原则"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "毛坯选择原则"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_092",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "多选题",
    "difficulty": "medium",
    "text": "铸件常见缺陷可能包括哪些？",
    "question": "铸件常见缺陷可能包括哪些？",
    "options": [
      "夹渣",
      "刀具半径补偿",
      "气孔",
      "缩孔或缩松"
    ],
    "answerIndex": [
      0,
      2,
      3
    ],
    "explanation": "气孔、缩孔缩松和夹渣都是铸造过程可能产生的缺陷；刀补属于数控加工参数。",
    "image": null,
    "knowledgePoint": "铸造缺陷",
    "knowledgePoints": [
      "制造工艺",
      "铸造缺陷"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "铸造缺陷"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_093",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "多选题",
    "difficulty": "medium",
    "text": "锻件毛坯的优点通常包括哪些？",
    "question": "锻件毛坯的优点通常包括哪些？",
    "options": [
      "一定不需要机械加工",
      "组织较致密",
      "力学性能较好",
      "适合承受较大载荷的零件"
    ],
    "answerIndex": [
      1,
      2,
      3
    ],
    "explanation": "锻造改善组织和性能，常用于受力件；锻件仍通常需要后续机加工保证尺寸。",
    "image": null,
    "knowledgePoint": "锻造工艺",
    "knowledgePoints": [
      "制造工艺",
      "锻造工艺"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "锻造工艺"
    ],
    "isMultiple": true,
    "answer": [
      "B",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_094",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "多选题",
    "difficulty": "medium",
    "text": "冲压生产薄板件时应关注哪些问题？",
    "question": "冲压生产薄板件时应关注哪些问题？",
    "options": [
      "模具间隙",
      "板料方向和厚度",
      "回弹和毛刺",
      "砂轮粒度"
    ],
    "answerIndex": [
      0,
      1,
      2
    ],
    "explanation": "冲压质量受模具间隙、材料厚度方向、回弹和毛刺影响；砂轮粒度属于磨削。",
    "image": null,
    "knowledgePoint": "冲压工艺",
    "knowledgePoints": [
      "制造工艺",
      "冲压工艺"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "冲压工艺"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "C"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_095",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "多选题",
    "difficulty": "hard",
    "text": "焊接接头质量受哪些因素影响？",
    "question": "焊接接头质量受哪些因素影响？",
    "options": [
      "焊接电流电压",
      "焊接顺序和层间清理",
      "数控刀具半径补偿",
      "坡口和装配间隙"
    ],
    "answerIndex": [
      0,
      1,
      3
    ],
    "explanation": "焊接参数、接头准备和清理都会影响熔合、变形和缺陷；刀补不控制焊缝质量。",
    "image": null,
    "knowledgePoint": "焊接质量",
    "knowledgePoints": [
      "制造工艺",
      "焊接质量"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "焊接质量"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_096",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "多选题",
    "difficulty": "medium",
    "text": "切削用量三要素包括哪些？",
    "question": "切削用量三要素包括哪些？",
    "options": [
      "背吃刀量",
      "焊接电压",
      "切削速度",
      "进给量"
    ],
    "answerIndex": [
      0,
      2,
      3
    ],
    "explanation": "切削速度、进给量和背吃刀量决定切削过程；焊接电压属于焊接参数。",
    "image": null,
    "knowledgePoint": "切削用量",
    "knowledgePoints": [
      "制造工艺",
      "切削用量"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "切削用量"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_097",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "多选题",
    "difficulty": "medium",
    "text": "粗加工阶段通常关注哪些目标？",
    "question": "粗加工阶段通常关注哪些目标？",
    "options": [
      "直接达到最终粗糙度和全部尺寸精度",
      "去除大部分余量",
      "提高加工效率",
      "为后续工序留下合理余量"
    ],
    "answerIndex": [
      1,
      2,
      3
    ],
    "explanation": "粗加工重在效率和余量分配，最终精度通常由后续半精和精加工保证。",
    "image": null,
    "knowledgePoint": "粗精加工",
    "knowledgePoints": [
      "制造工艺",
      "粗精加工"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "粗精加工"
    ],
    "isMultiple": true,
    "answer": [
      "B",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_098",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "多选题",
    "difficulty": "medium",
    "text": "磨削质量异常时应检查哪些因素？",
    "question": "磨削质量异常时应检查哪些因素？",
    "options": [
      "砂轮状态",
      "冷却是否充分",
      "进给量和磨削深度",
      "工件包装箱图案"
    ],
    "answerIndex": [
      0,
      1,
      2
    ],
    "explanation": "砂轮、冷却和参数直接影响磨削烧伤、粗糙度和尺寸；包装图案无关。",
    "image": null,
    "knowledgePoint": "磨削加工",
    "knowledgePoints": [
      "制造工艺",
      "磨削加工"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "磨削加工"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "C"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_099",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "多选题",
    "difficulty": "hard",
    "text": "薄壁件加工变形通常与哪些因素有关？",
    "question": "薄壁件加工变形通常与哪些因素有关？",
    "options": [
      "切削力和切削热",
      "工件刚性不足",
      "产品名称太长",
      "夹紧力过大"
    ],
    "answerIndex": [
      0,
      1,
      3
    ],
    "explanation": "薄壁件刚性差，夹紧力、切削力和热影响会造成变形；名称长短无关。",
    "image": null,
    "knowledgePoint": "加工变形",
    "knowledgePoints": [
      "制造工艺",
      "加工变形"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "加工变形"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_100",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "多选题",
    "difficulty": "medium",
    "text": "影响已加工表面粗糙度的因素包括哪些？",
    "question": "影响已加工表面粗糙度的因素包括哪些？",
    "options": [
      "机床和工件振动",
      "员工工号",
      "刀具刃口状态",
      "进给量"
    ],
    "answerIndex": [
      0,
      2,
      3
    ],
    "explanation": "刃口、进给和振动直接决定表面纹理和粗糙度；员工工号不是技术因素。",
    "image": null,
    "knowledgePoint": "表面质量",
    "knowledgePoints": [
      "制造工艺",
      "表面质量"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "表面质量"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_101",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "多选题",
    "difficulty": "medium",
    "text": "新数控程序正式加工前常用哪些降低风险的措施？",
    "question": "新数控程序正式加工前常用哪些降低风险的措施？",
    "options": [
      "跳过对刀直接批量生产",
      "空运行",
      "单段运行",
      "首件检验"
    ],
    "answerIndex": [
      1,
      2,
      3
    ],
    "explanation": "空运行、单段运行和首件检验可发现路径和尺寸问题；跳过对刀风险很高。",
    "image": null,
    "knowledgePoint": "CNC调试",
    "knowledgePoints": [
      "制造工艺",
      "CNC调试"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "CNC调试"
    ],
    "isMultiple": true,
    "answer": [
      "B",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_102",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "多选题",
    "difficulty": "medium",
    "text": "工件坐标系设置错误可能造成哪些后果？",
    "question": "工件坐标系设置错误可能造成哪些后果？",
    "options": [
      "加工位置整体偏移",
      "刀具碰撞风险增加",
      "首件尺寸不合格",
      "材料自动变硬"
    ],
    "answerIndex": [
      0,
      1,
      2
    ],
    "explanation": "坐标系错误会让程序位置与实际工件不一致，导致偏移和碰撞；不会改变材料硬度。",
    "image": null,
    "knowledgePoint": "工件坐标系",
    "knowledgePoints": [
      "制造工艺",
      "工件坐标系"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工件坐标系"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "C"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_103",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "多选题",
    "difficulty": "hard",
    "text": "批量CNC加工中刀具补偿管理应注意哪些？",
    "question": "批量CNC加工中刀具补偿管理应注意哪些？",
    "options": [
      "记录补偿调整原因",
      "磨损超限及时换刀",
      "随意大幅改补偿不记录",
      "按测量结果小幅修正"
    ],
    "answerIndex": [
      0,
      1,
      3
    ],
    "explanation": "刀补管理要可追溯、基于测量并结合刀具寿命；随意大改会破坏过程稳定。",
    "image": null,
    "knowledgePoint": "刀具补偿",
    "knowledgePoints": [
      "制造工艺",
      "刀具补偿"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "刀具补偿"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_104",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "多选题",
    "difficulty": "medium",
    "text": "加工中心换刀相关风险包括哪些？",
    "question": "加工中心换刀相关风险包括哪些？",
    "options": [
      "刀柄夹持不牢",
      "工件颜色不鲜艳",
      "刀具号调用错误",
      "刀长补偿错误"
    ],
    "answerIndex": [
      0,
      2,
      3
    ],
    "explanation": "换刀错误会导致尺寸错误、撞刀或掉刀；颜色不是换刀安全因素。",
    "image": null,
    "knowledgePoint": "加工中心换刀",
    "knowledgePoints": [
      "制造工艺",
      "加工中心换刀"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "加工中心换刀"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_105",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "多选题",
    "difficulty": "medium",
    "text": "数控加工现场发现异常时，正确措施包括哪些？",
    "question": "数控加工现场发现异常时，正确措施包括哪些？",
    "options": [
      "戴手套接触旋转刀具",
      "按规程暂停或急停",
      "确认主轴停止后检查",
      "记录并反馈异常原因"
    ],
    "answerIndex": [
      1,
      2,
      3
    ],
    "explanation": "异常应先控制风险并检查记录；接触旋转刀具严重危险。",
    "image": null,
    "knowledgePoint": "数控现场安全",
    "knowledgePoints": [
      "制造工艺",
      "数控现场安全"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "数控现场安全"
    ],
    "isMultiple": true,
    "answer": [
      "B",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_106",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "多选题",
    "difficulty": "medium",
    "text": "安排机械加工工艺路线常遵循哪些原则？",
    "question": "安排机械加工工艺路线常遵循哪些原则？",
    "options": [
      "先粗后精",
      "先主后次",
      "基准先行",
      "所有热处理都放在终检之后"
    ],
    "answerIndex": [
      0,
      1,
      2
    ],
    "explanation": "先粗后精、先主后次和基准先行是常用原则；热处理位置要按目的安排。",
    "image": null,
    "knowledgePoint": "工艺路线原则",
    "knowledgePoints": [
      "制造工艺",
      "工艺路线原则"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工艺路线原则"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "C"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_107",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "多选题",
    "difficulty": "medium",
    "text": "工艺过程常用的组成概念包括哪些？",
    "question": "工艺过程常用的组成概念包括哪些？",
    "options": [
      "安装",
      "工步",
      "发票编号",
      "工序"
    ],
    "answerIndex": [
      0,
      1,
      3
    ],
    "explanation": "工序、安装、工步用于描述加工过程层次；发票编号不是工艺过程单位。",
    "image": null,
    "knowledgePoint": "工艺组成",
    "knowledgePoints": [
      "制造工艺",
      "工艺组成"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工艺组成"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_108",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "多选题",
    "difficulty": "hard",
    "text": "粗加工后、精加工前安排去应力或调质可能带来哪些好处？",
    "question": "粗加工后、精加工前安排去应力或调质可能带来哪些好处？",
    "options": [
      "减少精加工后变形",
      "完全取消尺寸检验",
      "释放或降低内应力",
      "稳定组织"
    ],
    "answerIndex": [
      0,
      2,
      3
    ],
    "explanation": "中间热处理可提高尺寸稳定性，但不能代替最终尺寸检验。",
    "image": null,
    "knowledgePoint": "热处理安排",
    "knowledgePoints": [
      "制造工艺",
      "热处理安排"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "热处理安排"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_109",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "多选题",
    "difficulty": "medium",
    "text": "工艺路线中检验工序的作用包括哪些？",
    "question": "工艺路线中检验工序的作用包括哪些？",
    "options": [
      "提高材料含碳量",
      "发现前道工序问题",
      "防止不合格继续流转",
      "为质量追溯提供记录"
    ],
    "answerIndex": [
      1,
      2,
      3
    ],
    "explanation": "检验用于质量控制和追溯，不能改变材料成分。",
    "image": null,
    "knowledgePoint": "检验安排",
    "knowledgePoints": [
      "制造工艺",
      "检验安排"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "检验安排"
    ],
    "isMultiple": true,
    "answer": [
      "B",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_110",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "多选题",
    "difficulty": "hard",
    "text": "工序集中可能带来哪些影响？",
    "question": "工序集中可能带来哪些影响？",
    "options": [
      "减少装夹次数",
      "提高相互位置精度",
      "对设备和夹具能力要求更高",
      "必然适合所有单件生产"
    ],
    "answerIndex": [
      0,
      1,
      2
    ],
    "explanation": "工序集中有精度和效率优势，但不一定适合所有产品和生产类型。",
    "image": null,
    "knowledgePoint": "工序集中",
    "knowledgePoints": [
      "制造工艺",
      "工序集中"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工序集中"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "C"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_111",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "多选题",
    "difficulty": "medium",
    "text": "夹具的基本作用包括哪些？",
    "question": "夹具的基本作用包括哪些？",
    "options": [
      "夹紧工件",
      "保证加工位置稳定",
      "改变材料牌号",
      "定位工件"
    ],
    "answerIndex": [
      0,
      1,
      3
    ],
    "explanation": "夹具保证工件位置和夹紧可靠性，不改变材料牌号。",
    "image": null,
    "knowledgePoint": "定位夹紧",
    "knowledgePoints": [
      "制造工艺",
      "定位夹紧"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "定位夹紧"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_112",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "多选题",
    "difficulty": "medium",
    "text": "选择粗基准时应注意哪些原则？",
    "question": "选择粗基准时应注意哪些原则？",
    "options": [
      "一般避免重复使用",
      "优先选毛刺最多的表面",
      "保证重要表面加工余量",
      "尽量选平整可靠表面"
    ],
    "answerIndex": [
      0,
      2,
      3
    ],
    "explanation": "粗基准精度较低，应选可靠表面并保证余量分配；毛刺多会影响定位。",
    "image": null,
    "knowledgePoint": "粗基准选择",
    "knowledgePoints": [
      "制造工艺",
      "粗基准选择"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "粗基准选择"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_113",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "多选题",
    "difficulty": "medium",
    "text": "精基准选择常用原则包括哪些？",
    "question": "精基准选择常用原则包括哪些？",
    "options": [
      "基准越随机越好",
      "基准重合",
      "基准统一",
      "定位稳定可靠"
    ],
    "answerIndex": [
      1,
      2,
      3
    ],
    "explanation": "基准重合和统一可减少误差，提高一致性；随机选择会增加误差。",
    "image": null,
    "knowledgePoint": "精基准选择",
    "knowledgePoints": [
      "制造工艺",
      "精基准选择"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "精基准选择"
    ],
    "isMultiple": true,
    "answer": [
      "B",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_114",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "多选题",
    "difficulty": "hard",
    "text": "避免不合理过定位可采取哪些措施？",
    "question": "避免不合理过定位可采取哪些措施？",
    "options": [
      "分析自由度限制是否重复",
      "提高定位基准精度或释放重复约束",
      "使用浮动或可调定位元件",
      "增加互相冲突的硬定位面"
    ],
    "answerIndex": [
      0,
      1,
      2
    ],
    "explanation": "过定位控制要避免约束冲突；盲目增加硬定位面会加重变形和装夹困难。",
    "image": null,
    "knowledgePoint": "过定位控制",
    "knowledgePoints": [
      "制造工艺",
      "过定位控制"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "过定位控制"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "C"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_115",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "多选题",
    "difficulty": "hard",
    "text": "减少夹紧变形的措施包括哪些？",
    "question": "减少夹紧变形的措施包括哪些？",
    "options": [
      "增加合理支承",
      "采用分散或均匀夹紧",
      "把夹紧力无限增大",
      "夹紧力作用在刚性较好处"
    ],
    "answerIndex": [
      0,
      1,
      3
    ],
    "explanation": "合理支承和夹紧方向可降低变形；无限增大夹紧力会适得其反。",
    "image": null,
    "knowledgePoint": "夹紧变形",
    "knowledgePoints": [
      "制造工艺",
      "夹紧变形"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "夹紧变形"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_116",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "多选题",
    "difficulty": "medium",
    "text": "热处理常用于改善哪些性能或状态？",
    "question": "热处理常用于改善哪些性能或状态？",
    "options": [
      "组织稳定性和内应力",
      "零件外包装颜色",
      "硬度和耐磨性",
      "韧性和综合力学性能"
    ],
    "answerIndex": [
      0,
      2,
      3
    ],
    "explanation": "热处理通过组织变化改善性能和稳定性，不影响包装颜色。",
    "image": null,
    "knowledgePoint": "热处理目的",
    "knowledgePoints": [
      "制造工艺",
      "热处理目的"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "热处理目的"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_117",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "多选题",
    "difficulty": "medium",
    "text": "淬火后回火的作用包括哪些？",
    "question": "淬火后回火的作用包括哪些？",
    "options": [
      "增加螺纹数量",
      "降低脆性",
      "稳定组织",
      "调整硬度和韧性配合"
    ],
    "answerIndex": [
      1,
      2,
      3
    ],
    "explanation": "回火改善淬火后的内应力和脆性，不能增加几何结构数量。",
    "image": null,
    "knowledgePoint": "淬火回火",
    "knowledgePoints": [
      "制造工艺",
      "淬火回火"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "淬火回火"
    ],
    "isMultiple": true,
    "answer": [
      "B",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_118",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "多选题",
    "difficulty": "medium",
    "text": "常见表面处理目的包括哪些？",
    "question": "常见表面处理目的包括哪些？",
    "options": [
      "防腐蚀",
      "提高耐磨性",
      "改善外观或疲劳性能",
      "代替所有机械加工尺寸控制"
    ],
    "answerIndex": [
      0,
      1,
      2
    ],
    "explanation": "表面处理改善表面性能，但不能替代尺寸加工和检验。",
    "image": null,
    "knowledgePoint": "表面处理",
    "knowledgePoints": [
      "制造工艺",
      "表面处理"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "表面处理"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "C"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_119",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "多选题",
    "difficulty": "medium",
    "text": "属于化学热处理或表层强化思路的有哪几项？",
    "question": "属于化学热处理或表层强化思路的有哪几项？",
    "options": [
      "氮化",
      "表面淬火",
      "终检入库",
      "渗碳"
    ],
    "answerIndex": [
      0,
      1,
      3
    ],
    "explanation": "渗碳、氮化和表面淬火用于强化表层；终检是质量控制环节。",
    "image": null,
    "knowledgePoint": "化学热处理",
    "knowledgePoints": [
      "制造工艺",
      "化学热处理"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "化学热处理"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_120",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "多选题",
    "difficulty": "hard",
    "text": "热处理后尺寸变形可能与哪些因素有关？",
    "question": "热处理后尺寸变形可能与哪些因素有关？",
    "options": [
      "前期残余应力",
      "检验员姓名",
      "加热和冷却不均",
      "零件结构刚性差"
    ],
    "answerIndex": [
      0,
      2,
      3
    ],
    "explanation": "热处理变形受温度场、结构和应力影响；人员姓名不是技术原因。",
    "image": null,
    "knowledgePoint": "热处理变形",
    "knowledgePoints": [
      "制造工艺",
      "热处理变形"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "热处理变形"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_121",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "多选题",
    "difficulty": "medium",
    "text": "生产现场常见检验方式包括哪些？",
    "question": "生产现场常见检验方式包括哪些？",
    "options": [
      "盲检不记录",
      "自检",
      "互检",
      "专检"
    ],
    "answerIndex": [
      1,
      2,
      3
    ],
    "explanation": "自检、互检、专检形成质量控制链；不记录会破坏追溯。",
    "image": null,
    "knowledgePoint": "质量检测",
    "knowledgePoints": [
      "制造工艺",
      "质量检测"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "质量检测"
    ],
    "isMultiple": true,
    "answer": [
      "B",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_122",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "多选题",
    "difficulty": "medium",
    "text": "不合格品处理通常应包含哪些动作？",
    "question": "不合格品处理通常应包含哪些动作？",
    "options": [
      "隔离",
      "标识",
      "评审处置",
      "混入合格品继续流转"
    ],
    "answerIndex": [
      0,
      1,
      2
    ],
    "explanation": "隔离、标识和评审可防止误用；混放会扩大质量风险。",
    "image": null,
    "knowledgePoint": "不合格品控制",
    "knowledgePoints": [
      "制造工艺",
      "不合格品控制"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "不合格品控制"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "C"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_123",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "多选题",
    "difficulty": "hard",
    "text": "尺寸超差分析时应检查哪些方面？",
    "question": "尺寸超差分析时应检查哪些方面？",
    "options": [
      "刀具磨损或补偿",
      "装夹定位和工艺参数",
      "产品宣传海报",
      "测量方法和量具状态"
    ],
    "answerIndex": [
      0,
      1,
      3
    ],
    "explanation": "尺寸超差可能来自测量、刀具、装夹和参数；宣传海报无关。",
    "image": null,
    "knowledgePoint": "尺寸超差分析",
    "knowledgePoints": [
      "制造工艺",
      "尺寸超差分析"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "尺寸超差分析"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_124",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "多选题",
    "difficulty": "medium",
    "text": "加工表面常见质量问题包括哪些？",
    "question": "加工表面常见质量问题包括哪些？",
    "options": [
      "烧伤或划伤",
      "工牌颜色",
      "毛刺",
      "刀纹"
    ],
    "answerIndex": [
      0,
      2,
      3
    ],
    "explanation": "毛刺、刀纹、烧伤和划伤都会影响装配与使用；工牌颜色不属于表面缺陷。",
    "image": null,
    "knowledgePoint": "表面缺陷",
    "knowledgePoints": [
      "制造工艺",
      "表面缺陷"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "表面缺陷"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_125",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "多选题",
    "difficulty": "medium",
    "text": "遵守工艺纪律通常包括哪些要求？",
    "question": "遵守工艺纪律通常包括哪些要求？",
    "options": [
      "随意替换材料不说明",
      "按工艺文件加工",
      "按规定频次检验",
      "变更参数需批准并记录"
    ],
    "answerIndex": [
      1,
      2,
      3
    ],
    "explanation": "工艺纪律保证过程稳定和可追溯；随意替换材料会造成严重质量风险。",
    "image": null,
    "knowledgePoint": "工艺纪律",
    "knowledgePoints": [
      "制造工艺",
      "工艺纪律"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工艺纪律"
    ],
    "isMultiple": true,
    "answer": [
      "B",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_126",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "多选题",
    "difficulty": "medium",
    "text": "切削液的作用包括哪些？",
    "question": "切削液的作用包括哪些？",
    "options": [
      "冷却",
      "润滑",
      "排屑和防锈",
      "确定员工绩效"
    ],
    "answerIndex": [
      0,
      1,
      2
    ],
    "explanation": "切削液服务于加工过程和设备防护，不决定员工绩效。",
    "image": null,
    "knowledgePoint": "切削液管理",
    "knowledgePoints": [
      "制造工艺",
      "切削液管理"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "切削液管理"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "C"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_127",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "多选题",
    "difficulty": "medium",
    "text": "机床操作安全要求包括哪些？",
    "question": "机床操作安全要求包括哪些？",
    "options": [
      "工件夹紧后再开机",
      "异常时停机检查",
      "拆除防护罩提高效率",
      "穿戴合适防护用品"
    ],
    "answerIndex": [
      0,
      1,
      3
    ],
    "explanation": "安全操作要防飞溅、卷入和误动作；拆防护罩会显著增加风险。",
    "image": null,
    "knowledgePoint": "机床安全",
    "knowledgePoints": [
      "制造工艺",
      "机床安全"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "机床安全"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_128",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "多选题",
    "difficulty": "medium",
    "text": "焊接作业安全防护包括哪些？",
    "question": "焊接作业安全防护包括哪些？",
    "options": [
      "清理易燃物",
      "裸眼近距离观察电弧",
      "佩戴面罩和手套",
      "保持通风"
    ],
    "answerIndex": [
      0,
      2,
      3
    ],
    "explanation": "焊接有弧光、烟尘、飞溅和火灾风险，必须做好防护和现场清理。",
    "image": null,
    "knowledgePoint": "焊接安全",
    "knowledgePoints": [
      "制造工艺",
      "焊接安全"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "焊接安全"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_129",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "多选题",
    "difficulty": "hard",
    "text": "起吊搬运大型工件时应注意哪些？",
    "question": "起吊搬运大型工件时应注意哪些？",
    "options": [
      "站在吊物下方扶正",
      "核对吊具载荷",
      "确认重心和捆绑可靠",
      "人员远离吊物下方"
    ],
    "answerIndex": [
      1,
      2,
      3
    ],
    "explanation": "吊装最怕超载、失稳和人员站位危险；站在吊物下方严禁。",
    "image": null,
    "knowledgePoint": "起吊安全",
    "knowledgePoints": [
      "制造工艺",
      "起吊安全"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "起吊安全"
    ],
    "isMultiple": true,
    "answer": [
      "B",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_130",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "多选题",
    "difficulty": "medium",
    "text": "5S管理对制造现场的作用包括哪些？",
    "question": "5S管理对制造现场的作用包括哪些？",
    "options": [
      "减少寻找时间",
      "降低误用和绊倒风险",
      "改善现场可视化管理",
      "直接提高材料硬度"
    ],
    "answerIndex": [
      0,
      1,
      2
    ],
    "explanation": "5S改善秩序、效率和安全，不改变材料性能。",
    "image": null,
    "knowledgePoint": "5S管理",
    "knowledgePoints": [
      "制造工艺",
      "5S管理"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "5S管理"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "C"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_131",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "多选题",
    "difficulty": "medium",
    "text": "不同生产类型会影响哪些工艺决策？",
    "question": "不同生产类型会影响哪些工艺决策？",
    "options": [
      "工序集中或分散程度",
      "检验和物流节奏",
      "零件物理定律",
      "设备和夹具选择"
    ],
    "answerIndex": [
      0,
      1,
      3
    ],
    "explanation": "批量、品种和节拍会影响工装设备和流程组织；不改变物理规律。",
    "image": null,
    "knowledgePoint": "生产组织",
    "knowledgePoints": [
      "制造工艺",
      "生产组织"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "生产组织"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_132",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "多选题",
    "difficulty": "hard",
    "text": "绿色制造现场措施包括哪些？",
    "question": "绿色制造现场措施包括哪些？",
    "options": [
      "降低能耗和污染",
      "随意排放废液",
      "减少材料浪费",
      "规范切削液回收处理"
    ],
    "answerIndex": [
      0,
      2,
      3
    ],
    "explanation": "绿色制造强调资源、环境和职业健康；废液必须合规处理。",
    "image": null,
    "knowledgePoint": "绿色制造",
    "knowledgePoints": [
      "制造工艺",
      "绿色制造"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "绿色制造"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_133",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "多选题",
    "difficulty": "hard",
    "text": "加工中出现振动纹，可能相关因素有哪些？",
    "question": "加工中出现振动纹，可能相关因素有哪些？",
    "options": [
      "产品说明书页码",
      "刀具伸出过长",
      "工件或夹具刚性不足",
      "切削参数不合理"
    ],
    "answerIndex": [
      1,
      2,
      3
    ],
    "explanation": "振动纹通常来自系统刚性、刀具状态和参数匹配问题；说明书页码无关。",
    "image": null,
    "knowledgePoint": "质量问题分析",
    "knowledgePoints": [
      "制造工艺",
      "质量问题分析"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "质量问题分析"
    ],
    "isMultiple": true,
    "answer": [
      "B",
      "C",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_134",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "多选题",
    "difficulty": "hard",
    "text": "首件加工不合格时，正确处理包括哪些？",
    "question": "首件加工不合格时，正确处理包括哪些？",
    "options": [
      "停止批量继续生产",
      "分析程序、坐标、刀补和装夹",
      "修正后重新确认首件",
      "把不合格首件直接混入成品"
    ],
    "answerIndex": [
      0,
      1,
      2
    ],
    "explanation": "首件不合格说明过程未确认，应停下分析并复验；混入成品会造成质量事故。",
    "image": null,
    "knowledgePoint": "首件调试",
    "knowledgePoints": [
      "制造工艺",
      "首件调试"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "首件调试"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "C"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_135",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "多选题",
    "difficulty": "medium",
    "text": "使用游标卡尺或千分尺测量前，应注意哪些事项？",
    "question": "使用游标卡尺或千分尺测量前，应注意哪些事项？",
    "options": [
      "确认量具在有效校准状态",
      "控制合适测量力并避免把量具当工具",
      "只看量具外壳颜色",
      "检查量具清洁和零位"
    ],
    "answerIndex": [
      0,
      1,
      3
    ],
    "explanation": "量具清洁、零位、校准状态和测量力都会影响读数；把量具当划针或夹具使用会损伤量具并造成误判。",
    "image": null,
    "knowledgePoint": "量具使用",
    "knowledgePoints": [
      "制造工艺",
      "量具使用"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "量具使用"
    ],
    "isMultiple": true,
    "answer": [
      "A",
      "B",
      "D"
    ],
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_136",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "铸造适合制造形状复杂、内腔较多的毛坯。",
    "question": "铸造适合制造形状复杂、内腔较多的毛坯。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "铸造可通过型腔形成复杂外形和内腔，常用于箱体、机座等毛坯。",
    "image": null,
    "knowledgePoint": "铸造工艺",
    "knowledgePoints": [
      "制造工艺",
      "铸造工艺"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "铸造工艺"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_137",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "锻造毛坯通常比同材料普通铸件组织更致密。",
    "question": "锻造毛坯通常比同材料普通铸件组织更致密。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "锻造使金属发生塑性变形，可改善组织致密性和力学性能。",
    "image": null,
    "knowledgePoint": "锻造工艺",
    "knowledgePoints": [
      "制造工艺",
      "锻造工艺"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "锻造工艺"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_138",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "判断题",
    "difficulty": "medium",
    "text": "冲压只适合单件修配，不适合批量生产。",
    "question": "冲压只适合单件修配，不适合批量生产。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "explanation": "冲压依靠模具，特别适合薄板件的大批量稳定生产。",
    "image": null,
    "knowledgePoint": "冲压工艺",
    "knowledgePoints": [
      "制造工艺",
      "冲压工艺"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "冲压工艺"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_139",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "判断题",
    "difficulty": "medium",
    "text": "焊接热输入和焊接顺序会影响焊后变形。",
    "question": "焊接热输入和焊接顺序会影响焊后变形。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "焊接局部热循环造成收缩变形，顺序和热输入是关键控制因素。",
    "image": null,
    "knowledgePoint": "焊接变形",
    "knowledgePoints": [
      "制造工艺",
      "焊接变形"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "焊接变形"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_140",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-1",
    "type": "判断题",
    "difficulty": "medium",
    "text": "铸件出现气孔时，无论位置和大小都必须直接报废。",
    "question": "铸件出现气孔时，无论位置和大小都必须直接报废。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "explanation": "气孔应按标准评估位置、大小和用途，有些可修补，有些必须报废。",
    "image": null,
    "knowledgePoint": "毛坯缺陷",
    "knowledgePoints": [
      "制造工艺",
      "毛坯缺陷"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "毛坯缺陷"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_141",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "车削常用于加工轴类零件的外圆和端面。",
    "question": "车削常用于加工轴类零件的外圆和端面。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "车削加工回转表面效率高，是轴类零件常见工艺。",
    "image": null,
    "knowledgePoint": "车削加工",
    "knowledgePoints": [
      "制造工艺",
      "车削加工"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "车削加工"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_142",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "钻削是实体材料上加工孔的常用方法。",
    "question": "钻削是实体材料上加工孔的常用方法。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "钻孔常作为孔加工的第一道工序，后续可扩、铰、镗。",
    "image": null,
    "knowledgePoint": "钻削加工",
    "knowledgePoints": [
      "制造工艺",
      "钻削加工"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "钻削加工"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_143",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "判断题",
    "difficulty": "medium",
    "text": "磨削一般只用于粗加工大量去除毛坯余量。",
    "question": "磨削一般只用于粗加工大量去除毛坯余量。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "explanation": "磨削多用于精加工或硬材料加工，追求精度和表面质量。",
    "image": null,
    "knowledgePoint": "磨削加工",
    "knowledgePoints": [
      "制造工艺",
      "磨削加工"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "磨削加工"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_144",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "判断题",
    "difficulty": "medium",
    "text": "加工余量越大越好，因为一定能提高效率和质量。",
    "question": "加工余量越大越好，因为一定能提高效率和质量。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "explanation": "余量过大会增加切削时间、变形和刀具磨损，应合理分配。",
    "image": null,
    "knowledgePoint": "加工余量",
    "knowledgePoints": [
      "制造工艺",
      "加工余量"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "加工余量"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_145",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "判断题",
    "difficulty": "medium",
    "text": "刀具磨损、进给量和振动都可能影响表面粗糙度。",
    "question": "刀具磨损、进给量和振动都可能影响表面粗糙度。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "这些因素会改变切削纹理和稳定性，直接影响表面质量。",
    "image": null,
    "knowledgePoint": "表面质量",
    "knowledgePoints": [
      "制造工艺",
      "表面质量"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "表面质量"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_146",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "数控加工仍然需要正确装夹、对刀和检验。",
    "question": "数控加工仍然需要正确装夹、对刀和检验。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "CNC提高重复性，但装夹、对刀和检验仍决定加工是否可靠。",
    "image": null,
    "knowledgePoint": "CNC加工",
    "knowledgePoints": [
      "制造工艺",
      "CNC加工"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "CNC加工"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_147",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "判断题",
    "difficulty": "medium",
    "text": "工件坐标系设置错误可能导致刀具实际加工位置偏移。",
    "question": "工件坐标系设置错误可能导致刀具实际加工位置偏移。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "坐标系是程序坐标和工件实际位置的桥梁，设置错误会产生系统偏差。",
    "image": null,
    "knowledgePoint": "工件坐标系",
    "knowledgePoints": [
      "制造工艺",
      "工件坐标系"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工件坐标系"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_148",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "判断题",
    "difficulty": "medium",
    "text": "空运行合格后就可以取消首件检验。",
    "question": "空运行合格后就可以取消首件检验。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "explanation": "空运行主要检查路径和动作，不能确认实际切削尺寸，首件检验仍需要。",
    "image": null,
    "knowledgePoint": "空运行",
    "knowledgePoints": [
      "制造工艺",
      "空运行"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "空运行"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_149",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "判断题",
    "difficulty": "medium",
    "text": "单段运行有助于新程序调试时逐步观察机床动作。",
    "question": "单段运行有助于新程序调试时逐步观察机床动作。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "单段执行降低调试风险，便于发现路径和换刀异常。",
    "image": null,
    "knowledgePoint": "单段运行",
    "knowledgePoints": [
      "制造工艺",
      "单段运行"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "单段运行"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_150",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "判断题",
    "difficulty": "hard",
    "text": "加工中发现异常振动时，继续提高进给速度通常是安全做法。",
    "question": "加工中发现异常振动时，继续提高进给速度通常是安全做法。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "explanation": "异常振动可能导致崩刀、报废或事故，应停机分析刀具、参数和装夹。",
    "image": null,
    "knowledgePoint": "数控安全",
    "knowledgePoints": [
      "制造工艺",
      "数控安全"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "数控安全"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_151",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "判断题",
    "difficulty": "easy",
    "text": "工序是编制工艺路线时常用的基本单位。",
    "question": "工序是编制工艺路线时常用的基本单位。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "工序用于安排设备、人员、工装和检验，是工艺规程核心概念。",
    "image": null,
    "knowledgePoint": "工序",
    "knowledgePoints": [
      "制造工艺",
      "工序"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工序"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_152",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "判断题",
    "difficulty": "medium",
    "text": "工序集中通常能减少装夹次数，但对设备和工装要求更高。",
    "question": "工序集中通常能减少装夹次数，但对设备和工装要求更高。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "集中加工提高位置精度和效率，同时需要加工中心或复合工装支持。",
    "image": null,
    "knowledgePoint": "工序集中",
    "knowledgePoints": [
      "制造工艺",
      "工序集中"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工序集中"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_153",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "判断题",
    "difficulty": "medium",
    "text": "机械加工顺序通常应先精加工，再粗加工。",
    "question": "机械加工顺序通常应先精加工，再粗加工。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "explanation": "通常先粗后精，先去除余量和误差，再保证最终精度。",
    "image": null,
    "knowledgePoint": "工艺路线",
    "knowledgePoints": [
      "制造工艺",
      "工艺路线"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工艺路线"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_154",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "判断题",
    "difficulty": "medium",
    "text": "先加工可靠基准面有利于后续表面加工精度。",
    "question": "先加工可靠基准面有利于后续表面加工精度。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "基准先行能提高定位稳定性，减少后续工序误差。",
    "image": null,
    "knowledgePoint": "基准先行",
    "knowledgePoints": [
      "制造工艺",
      "基准先行"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "基准先行"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_155",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "判断题",
    "difficulty": "hard",
    "text": "所有热处理都必须安排在最终检验之后。",
    "question": "所有热处理都必须安排在最终检验之后。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "explanation": "热处理位置取决于目的，可在粗加工前、粗加工后或精加工前后安排。",
    "image": null,
    "knowledgePoint": "热处理安排",
    "knowledgePoints": [
      "制造工艺",
      "热处理安排"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "热处理安排"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_156",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "判断题",
    "difficulty": "easy",
    "text": "工件在空间有六个自由度，定位就是按要求限制自由度。",
    "question": "工件在空间有六个自由度，定位就是按要求限制自由度。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "六点定位原理用于分析工件位置是否确定。",
    "image": null,
    "knowledgePoint": "六点定位原理",
    "knowledgePoints": [
      "制造工艺",
      "六点定位原理"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "六点定位原理"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_157",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "判断题",
    "difficulty": "medium",
    "text": "必须限制的自由度未被限制，会影响加工精度。",
    "question": "必须限制的自由度未被限制，会影响加工精度。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "欠定位会使工件位置不确定，是夹具设计应避免的问题。",
    "image": null,
    "knowledgePoint": "欠定位",
    "knowledgePoints": [
      "制造工艺",
      "欠定位"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "欠定位"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_158",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "判断题",
    "difficulty": "medium",
    "text": "粗基准一般应尽量多次重复使用，以提高精度。",
    "question": "粗基准一般应尽量多次重复使用，以提高精度。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "explanation": "粗基准是毛坯表面，精度低，通常应避免重复使用并尽快转为精基准。",
    "image": null,
    "knowledgePoint": "粗基准",
    "knowledgePoints": [
      "制造工艺",
      "粗基准"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "粗基准"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_159",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "判断题",
    "difficulty": "medium",
    "text": "基准重合有助于减少基准不重合误差。",
    "question": "基准重合有助于减少基准不重合误差。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "设计、定位和测量基准一致可减少换算误差。",
    "image": null,
    "knowledgePoint": "基准重合",
    "knowledgePoints": [
      "制造工艺",
      "基准重合"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "基准重合"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_160",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "判断题",
    "difficulty": "hard",
    "text": "夹紧力越大越好，薄壁件也不会变形。",
    "question": "夹紧力越大越好，薄壁件也不会变形。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "explanation": "夹紧力过大会造成薄壁件变形，应合理选择方向、大小和支承。",
    "image": null,
    "knowledgePoint": "夹紧力",
    "knowledgePoints": [
      "制造工艺",
      "夹紧力"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "夹紧力"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_161",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "判断题",
    "difficulty": "easy",
    "text": "退火可用于降低硬度、改善切削加工性。",
    "question": "退火可用于降低硬度、改善切削加工性。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "退火软化材料并改善组织，常用于加工前准备。",
    "image": null,
    "knowledgePoint": "退火",
    "knowledgePoints": [
      "制造工艺",
      "退火"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "退火"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_162",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "判断题",
    "difficulty": "medium",
    "text": "淬火后钢件通常脆性较大，常需回火。",
    "question": "淬火后钢件通常脆性较大，常需回火。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "回火能降低脆性、释放应力并调整性能。",
    "image": null,
    "knowledgePoint": "淬火",
    "knowledgePoints": [
      "制造工艺",
      "淬火"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "淬火"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_163",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "判断题",
    "difficulty": "medium",
    "text": "调质通常是淬火后高温回火。",
    "question": "调质通常是淬火后高温回火。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "调质获得较好强韧性配合，常用于轴类和受力件。",
    "image": null,
    "knowledgePoint": "调质",
    "knowledgePoints": [
      "制造工艺",
      "调质"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "调质"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_164",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "判断题",
    "difficulty": "medium",
    "text": "发黑主要用于提高钢件防锈能力和外观，不能替代尺寸加工。",
    "question": "发黑主要用于提高钢件防锈能力和外观，不能替代尺寸加工。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "发黑是表面防护处理，不形成精确几何尺寸。",
    "image": null,
    "knowledgePoint": "表面处理",
    "knowledgePoints": [
      "制造工艺",
      "表面处理"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "表面处理"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_165",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "判断题",
    "difficulty": "hard",
    "text": "热处理不会引起任何尺寸或形状变化。",
    "question": "热处理不会引起任何尺寸或形状变化。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "explanation": "加热冷却和组织变化可能引起变形，精密件需预留和控制。",
    "image": null,
    "knowledgePoint": "热处理变形",
    "knowledgePoints": [
      "制造工艺",
      "热处理变形"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "热处理变形"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_166",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "判断题",
    "difficulty": "easy",
    "text": "首件检验可以帮助避免程序或刀补错误造成批量报废。",
    "question": "首件检验可以帮助避免程序或刀补错误造成批量报废。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "首件确认能尽早发现系统性问题。",
    "image": null,
    "knowledgePoint": "首件检验",
    "knowledgePoints": [
      "制造工艺",
      "首件检验"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "首件检验"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_167",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "判断题",
    "difficulty": "medium",
    "text": "巡检的目的之一是发现过程漂移，如刀具磨损导致的尺寸变化。",
    "question": "巡检的目的之一是发现过程漂移，如刀具磨损导致的尺寸变化。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "巡检关注批量加工过程趋势和异常。",
    "image": null,
    "knowledgePoint": "巡检",
    "knowledgePoints": [
      "制造工艺",
      "巡检"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "巡检"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_168",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "判断题",
    "difficulty": "medium",
    "text": "毛刺可能影响装配、安全和测量结果。",
    "question": "毛刺可能影响装配、安全和测量结果。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "毛刺会划伤、干涉装配并影响尺寸测量。",
    "image": null,
    "knowledgePoint": "毛刺",
    "knowledgePoints": [
      "制造工艺",
      "毛刺"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "毛刺"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_169",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "判断题",
    "difficulty": "medium",
    "text": "发现不合格品后，只要外观差不多就可以混入合格品。",
    "question": "发现不合格品后，只要外观差不多就可以混入合格品。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "explanation": "不合格品必须隔离、标识和评审，防止误用。",
    "image": null,
    "knowledgePoint": "不合格品",
    "knowledgePoints": [
      "制造工艺",
      "不合格品"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "不合格品"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_170",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "判断题",
    "difficulty": "hard",
    "text": "磨削烧伤可能改变表层组织并影响零件寿命。",
    "question": "磨削烧伤可能改变表层组织并影响零件寿命。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "烧伤会造成硬度异常和残余应力，影响疲劳和耐磨。",
    "image": null,
    "knowledgePoint": "磨削烧伤",
    "knowledgePoints": [
      "制造工艺",
      "磨削烧伤"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "磨削烧伤"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_171",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "判断题",
    "difficulty": "easy",
    "text": "切削液具有冷却、润滑、排屑和防锈等作用。",
    "question": "切削液具有冷却、润滑、排屑和防锈等作用。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "合理使用切削液能改善加工质量、刀具寿命和设备防护。",
    "image": null,
    "knowledgePoint": "切削液",
    "knowledgePoints": [
      "制造工艺",
      "切削液"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "切削液"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_172",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "判断题",
    "difficulty": "medium",
    "text": "主轴旋转时可以戴手套直接清理缠绕切屑。",
    "question": "主轴旋转时可以戴手套直接清理缠绕切屑。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "explanation": "旋转部位有卷入风险，清屑必须停机并使用工具。",
    "image": null,
    "knowledgePoint": "机床安全",
    "knowledgePoints": [
      "制造工艺",
      "机床安全"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "机床安全"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_173",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "判断题",
    "difficulty": "medium",
    "text": "5S管理有助于减少误用、寻找和现场安全风险。",
    "question": "5S管理有助于减少误用、寻找和现场安全风险。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "整理整顿和可视化管理能提升效率和安全。",
    "image": null,
    "knowledgePoint": "5S管理",
    "knowledgePoints": [
      "制造工艺",
      "5S管理"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "5S管理"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_174",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "判断题",
    "difficulty": "medium",
    "text": "节拍与产线能力平衡和交付节奏有关。",
    "question": "节拍与产线能力平衡和交付节奏有关。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "explanation": "节拍反映按需求生产的时间节奏，是产线组织的重要指标。",
    "image": null,
    "knowledgePoint": "节拍",
    "knowledgePoints": [
      "制造工艺",
      "节拍"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "节拍"
    ],
    "answer": "A",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_175",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "判断题",
    "difficulty": "hard",
    "text": "废切削液可以直接排入下水道，只要不影响当天生产。",
    "question": "废切削液可以直接排入下水道，只要不影响当天生产。",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "explanation": "废切削液必须按环保和安全要求收集处理，不能随意排放。",
    "image": null,
    "knowledgePoint": "绿色制造",
    "knowledgePoints": [
      "制造工艺",
      "绿色制造"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "绿色制造"
    ],
    "answer": "B",
    "acceptableAnswers": []
  },
  {
    "id": "zzgy_176",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "填空题",
    "difficulty": "easy",
    "text": "机械加工中，用来确定工件在夹具或机床上正确位置的基准称为____。",
    "question": "机械加工中，用来确定工件在夹具或机床上正确位置的基准称为____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "定位基准用于确定工件位置，合理选择可减少定位误差。",
    "image": null,
    "knowledgePoint": "定位基准",
    "knowledgePoints": [
      "制造工艺",
      "定位基准"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "定位基准"
    ],
    "answer": "定位基准",
    "answerText": "定位基准",
    "fillAnswers": [
      "定位基准",
      "定位基准面",
      "定位基准点",
      "定位基准线"
    ],
    "acceptableAnswers": [
      "定位基准面",
      "定位基准点",
      "定位基准线"
    ]
  },
  {
    "id": "zzgy_177",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "填空题",
    "difficulty": "easy",
    "text": "用未经加工的毛坯表面作为定位基准，称为____。",
    "question": "用未经加工的毛坯表面作为定位基准，称为____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "粗基准精度较低，通常用于初始定位并应合理控制重复使用。",
    "image": null,
    "knowledgePoint": "粗基准",
    "knowledgePoints": [
      "制造工艺",
      "粗基准"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "粗基准"
    ],
    "answer": "粗基准",
    "answerText": "粗基准",
    "fillAnswers": [
      "粗基准",
      "毛坯基准"
    ],
    "acceptableAnswers": [
      "毛坯基准"
    ]
  },
  {
    "id": "zzgy_178",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "填空题",
    "difficulty": "easy",
    "text": "用已经加工过的表面作为定位基准，称为____。",
    "question": "用已经加工过的表面作为定位基准，称为____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "精基准稳定性和精度较高，适合后续工序定位。",
    "image": null,
    "knowledgePoint": "精基准",
    "knowledgePoints": [
      "制造工艺",
      "精基准"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "精基准"
    ],
    "answer": "精基准",
    "answerText": "精基准",
    "fillAnswers": [
      "精基准",
      "加工基准"
    ],
    "acceptableAnswers": [
      "加工基准"
    ]
  },
  {
    "id": "zzgy_179",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "填空题",
    "difficulty": "easy",
    "text": "切削用量三要素是切削速度、进给量和____。",
    "question": "切削用量三要素是切削速度、进给量和____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "背吃刀量决定切削层厚度，与切削力和效率直接相关。",
    "image": null,
    "knowledgePoint": "切削用量",
    "knowledgePoints": [
      "制造工艺",
      "切削用量"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "切削用量"
    ],
    "answer": "背吃刀量",
    "answerText": "背吃刀量",
    "fillAnswers": [
      "背吃刀量",
      "切深",
      "吃刀量"
    ],
    "acceptableAnswers": [
      "切深",
      "吃刀量"
    ]
  },
  {
    "id": "zzgy_180",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "填空题",
    "difficulty": "easy",
    "text": "钢件降低硬度、改善切削加工性的常见热处理方法之一是____。",
    "question": "钢件降低硬度、改善切削加工性的常见热处理方法之一是____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "退火可软化材料和改善组织，便于后续加工。",
    "image": null,
    "knowledgePoint": "退火",
    "knowledgePoints": [
      "制造工艺",
      "退火"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "退火"
    ],
    "answer": "退火",
    "answerText": "退火",
    "fillAnswers": [
      "退火",
      "完全退火",
      "球化退火"
    ],
    "acceptableAnswers": [
      "完全退火",
      "球化退火"
    ]
  },
  {
    "id": "zzgy_181",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "填空题",
    "difficulty": "easy",
    "text": "钢件加热到一定温度后在空气中冷却的热处理方法称为____。",
    "question": "钢件加热到一定温度后在空气中冷却的热处理方法称为____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "正火常用于细化组织和改善切削加工性。",
    "image": null,
    "knowledgePoint": "正火",
    "knowledgePoints": [
      "制造工艺",
      "正火"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "正火"
    ],
    "answer": "正火",
    "answerText": "正火",
    "fillAnswers": [
      "正火",
      "正火处理"
    ],
    "acceptableAnswers": [
      "正火处理"
    ]
  },
  {
    "id": "zzgy_182",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "填空题",
    "difficulty": "easy",
    "text": "淬火后为降低脆性、稳定组织，通常还要进行____。",
    "question": "淬火后为降低脆性、稳定组织，通常还要进行____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "回火是淬火后的常见配套工序，可调整硬度和韧性。",
    "image": null,
    "knowledgePoint": "回火",
    "knowledgePoints": [
      "制造工艺",
      "回火"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "回火"
    ],
    "answer": "回火",
    "answerText": "回火",
    "fillAnswers": [
      "回火",
      "回火处理"
    ],
    "acceptableAnswers": [
      "回火处理"
    ]
  },
  {
    "id": "zzgy_183",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-6",
    "type": "填空题",
    "difficulty": "medium",
    "text": "淬火后高温回火的复合热处理通常称为____。",
    "question": "淬火后高温回火的复合热处理通常称为____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "调质可获得较好的综合力学性能，常用于轴类受力件。",
    "image": null,
    "knowledgePoint": "调质",
    "knowledgePoints": [
      "制造工艺",
      "调质"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "调质"
    ],
    "answer": "调质",
    "answerText": "调质",
    "fillAnswers": [
      "调质",
      "调质处理"
    ],
    "acceptableAnswers": [
      "调质处理"
    ]
  },
  {
    "id": "zzgy_184",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "填空题",
    "difficulty": "easy",
    "text": "一个或一组工人在同一工作地对同一工件连续完成的工艺过程部分称为____。",
    "question": "一个或一组工人在同一工作地对同一工件连续完成的工艺过程部分称为____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "工序是工艺路线和生产组织的基本单位。",
    "image": null,
    "knowledgePoint": "工序",
    "knowledgePoints": [
      "制造工艺",
      "工序"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工序"
    ],
    "answer": "工序",
    "answerText": "工序",
    "fillAnswers": [
      "工序",
      "一道工序"
    ],
    "acceptableAnswers": [
      "一道工序"
    ]
  },
  {
    "id": "zzgy_185",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "填空题",
    "difficulty": "medium",
    "text": "一道工序中使用同一刀具和切削用量加工同一表面的连续过程称为____。",
    "question": "一道工序中使用同一刀具和切削用量加工同一表面的连续过程称为____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "工步细化工序内容，便于确定刀具和参数。",
    "image": null,
    "knowledgePoint": "工步",
    "knowledgePoints": [
      "制造工艺",
      "工步"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工步"
    ],
    "answer": "工步",
    "answerText": "工步",
    "fillAnswers": [
      "工步",
      "加工工步"
    ],
    "acceptableAnswers": [
      "加工工步"
    ]
  },
  {
    "id": "zzgy_186",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "填空题",
    "difficulty": "medium",
    "text": "工件一次装夹后完成的工艺过程部分通常称为一次____。",
    "question": "工件一次装夹后完成的工艺过程部分通常称为一次____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "安装与工件定位夹紧有关，影响位置精度。",
    "image": null,
    "knowledgePoint": "安装",
    "knowledgePoints": [
      "制造工艺",
      "安装"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "安装"
    ],
    "answer": "安装",
    "answerText": "安装",
    "fillAnswers": [
      "安装",
      "装夹",
      "一次安装"
    ],
    "acceptableAnswers": [
      "装夹",
      "一次安装"
    ]
  },
  {
    "id": "zzgy_187",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "填空题",
    "difficulty": "medium",
    "text": "把较多加工内容安排在少数工序中完成的组织方式称为____。",
    "question": "把较多加工内容安排在少数工序中完成的组织方式称为____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "工序集中可减少装夹次数，提高相互位置精度和效率。",
    "image": null,
    "knowledgePoint": "工序集中",
    "knowledgePoints": [
      "制造工艺",
      "工序集中"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工序集中"
    ],
    "answer": "工序集中",
    "answerText": "工序集中",
    "fillAnswers": [
      "工序集中",
      "集中工序"
    ],
    "acceptableAnswers": [
      "集中工序"
    ]
  },
  {
    "id": "zzgy_188",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-4",
    "type": "填空题",
    "difficulty": "medium",
    "text": "把加工内容分散到较多工序中完成的组织方式称为____。",
    "question": "把加工内容分散到较多工序中完成的组织方式称为____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "工序分散灵活，常适合单件小批和通用设备生产。",
    "image": null,
    "knowledgePoint": "工序分散",
    "knowledgePoints": [
      "制造工艺",
      "工序分散"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工序分散"
    ],
    "answer": "工序分散",
    "answerText": "工序分散",
    "fillAnswers": [
      "工序分散",
      "分散工序"
    ],
    "acceptableAnswers": [
      "分散工序"
    ]
  },
  {
    "id": "zzgy_189",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "填空题",
    "difficulty": "easy",
    "text": "批量生产开始或工艺调整后，对第一件产品进行确认的检验称为____。",
    "question": "批量生产开始或工艺调整后，对第一件产品进行确认的检验称为____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "首件检验可避免程序、装夹或刀补错误造成批量不合格。",
    "image": null,
    "knowledgePoint": "首件检验",
    "knowledgePoints": [
      "制造工艺",
      "首件检验"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "首件检验"
    ],
    "answer": "首件检验",
    "answerText": "首件检验",
    "fillAnswers": [
      "首件检验",
      "首检"
    ],
    "acceptableAnswers": [
      "首检"
    ]
  },
  {
    "id": "zzgy_190",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "填空题",
    "difficulty": "easy",
    "text": "生产过程中按规定间隔进行的质量检查通常称为____。",
    "question": "生产过程中按规定间隔进行的质量检查通常称为____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "巡检用于发现过程漂移和异常，保持批量稳定。",
    "image": null,
    "knowledgePoint": "巡检",
    "knowledgePoints": [
      "制造工艺",
      "巡检"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "巡检"
    ],
    "answer": "巡检",
    "answerText": "巡检",
    "fillAnswers": [
      "巡检",
      "过程巡检"
    ],
    "acceptableAnswers": [
      "过程巡检"
    ]
  },
  {
    "id": "zzgy_191",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-7",
    "type": "填空题",
    "difficulty": "medium",
    "text": "发现不合格品后首先应进行隔离和____，防止误用。",
    "question": "发现不合格品后首先应进行隔离和____，防止误用。",
    "options": [],
    "answerIndex": -1,
    "explanation": "隔离和标识是不合格品控制的基本动作，可防止混入合格品。",
    "image": null,
    "knowledgePoint": "不合格品",
    "knowledgePoints": [
      "制造工艺",
      "不合格品"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "不合格品"
    ],
    "answer": "标识",
    "answerText": "标识",
    "fillAnswers": [
      "标识",
      "标记",
      "挂牌标识"
    ],
    "acceptableAnswers": [
      "标记",
      "挂牌标识"
    ]
  },
  {
    "id": "zzgy_192",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "填空题",
    "difficulty": "easy",
    "text": "现场整理、整顿、清扫、清洁、素养通常简称为____管理。",
    "question": "现场整理、整顿、清扫、清洁、素养通常简称为____管理。",
    "options": [],
    "answerIndex": -1,
    "explanation": "5S管理改善现场秩序、效率和安全。",
    "image": null,
    "knowledgePoint": "5S管理",
    "knowledgePoints": [
      "制造工艺",
      "5S管理"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "5S管理"
    ],
    "answer": "5S",
    "answerText": "5S",
    "fillAnswers": [
      "5S",
      "五S",
      "5S管理"
    ],
    "acceptableAnswers": [
      "五S",
      "5S管理"
    ]
  },
  {
    "id": "zzgy_193",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-8",
    "type": "填空题",
    "difficulty": "easy",
    "text": "切削液常见作用包括冷却、润滑、排屑和____。",
    "question": "切削液常见作用包括冷却、润滑、排屑和____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "切削液能保护机床和工件表面，减少锈蚀风险。",
    "image": null,
    "knowledgePoint": "切削液",
    "knowledgePoints": [
      "制造工艺",
      "切削液"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "切削液"
    ],
    "answer": "防锈",
    "answerText": "防锈",
    "fillAnswers": [
      "防锈",
      "防腐",
      "防锈防腐"
    ],
    "acceptableAnswers": [
      "防腐",
      "防锈防腐"
    ]
  },
  {
    "id": "zzgy_194",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "为保证后续加工去除误差和缺陷而预留的材料层称为____。",
    "question": "为保证后续加工去除误差和缺陷而预留的材料层称为____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "加工余量需要合理分配，过大浪费，过小难以保证质量。",
    "image": null,
    "knowledgePoint": "加工余量",
    "knowledgePoints": [
      "制造工艺",
      "加工余量"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "加工余量"
    ],
    "answer": "加工余量",
    "answerText": "加工余量",
    "fillAnswers": [
      "加工余量",
      "余量",
      "工艺余量"
    ],
    "acceptableAnswers": [
      "余量",
      "工艺余量"
    ]
  },
  {
    "id": "zzgy_195",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "数控加工中用于建立程序坐标与工件实际位置对应关系的是____。",
    "question": "数控加工中用于建立程序坐标与工件实际位置对应关系的是____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "工件坐标系错误会导致加工位置偏移甚至碰撞。",
    "image": null,
    "knowledgePoint": "工件坐标系",
    "knowledgePoints": [
      "制造工艺",
      "工件坐标系"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "工件坐标系"
    ],
    "answer": "工件坐标系",
    "answerText": "工件坐标系",
    "fillAnswers": [
      "工件坐标系",
      "加工坐标系",
      "工件坐标"
    ],
    "acceptableAnswers": [
      "加工坐标系",
      "工件坐标"
    ]
  },
  {
    "id": "zzgy_196",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "确定刀具与工件坐标之间相对位置的操作称为____。",
    "question": "确定刀具与工件坐标之间相对位置的操作称为____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "对刀是数控加工前确认实际切削位置的重要步骤。",
    "image": null,
    "knowledgePoint": "对刀",
    "knowledgePoints": [
      "制造工艺",
      "对刀"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "对刀"
    ],
    "answer": "对刀",
    "answerText": "对刀",
    "fillAnswers": [
      "对刀",
      "刀具对刀"
    ],
    "acceptableAnswers": [
      "刀具对刀"
    ]
  },
  {
    "id": "zzgy_197",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "根据刀具实际尺寸或磨损修正加工轨迹和尺寸的功能称为刀具____。",
    "question": "根据刀具实际尺寸或磨损修正加工轨迹和尺寸的功能称为刀具____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "刀具补偿用于修正刀长、半径或磨损带来的尺寸偏差。",
    "image": null,
    "knowledgePoint": "刀具补偿",
    "knowledgePoints": [
      "制造工艺",
      "刀具补偿"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "刀具补偿"
    ],
    "answer": "补偿",
    "answerText": "补偿",
    "fillAnswers": [
      "补偿",
      "刀补",
      "刀具补偿"
    ],
    "acceptableAnswers": [
      "刀补",
      "刀具补偿"
    ]
  },
  {
    "id": "zzgy_198",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "填空题",
    "difficulty": "medium",
    "text": "工件六个自由度全部被合理限制的定位称为____。",
    "question": "工件六个自由度全部被合理限制的定位称为____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "完全定位使工件空间位置确定，但仍需避免不合理过定位。",
    "image": null,
    "knowledgePoint": "完全定位",
    "knowledgePoints": [
      "制造工艺",
      "完全定位"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "完全定位"
    ],
    "answer": "完全定位",
    "answerText": "完全定位",
    "fillAnswers": [
      "完全定位",
      "全定位"
    ],
    "acceptableAnswers": [
      "全定位"
    ]
  },
  {
    "id": "zzgy_199",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "填空题",
    "difficulty": "medium",
    "text": "必须限制的自由度没有被限制，称为____。",
    "question": "必须限制的自由度没有被限制，称为____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "欠定位会使加工位置不确定，影响尺寸和位置精度。",
    "image": null,
    "knowledgePoint": "欠定位",
    "knowledgePoints": [
      "制造工艺",
      "欠定位"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "欠定位"
    ],
    "answer": "欠定位",
    "answerText": "欠定位",
    "fillAnswers": [
      "欠定位",
      "定位不足"
    ],
    "acceptableAnswers": [
      "定位不足"
    ]
  },
  {
    "id": "zzgy_200",
    "category": "制造工艺区",
    "area": "制造工艺区",
    "module": "制造工艺",
    "moduleName": "制造工艺区",
    "levelId": "process-5",
    "type": "填空题",
    "difficulty": "hard",
    "text": "同一自由度被重复限制且约束发生冲突，可能形成____。",
    "question": "同一自由度被重复限制且约束发生冲突，可能形成____。",
    "options": [],
    "answerIndex": -1,
    "explanation": "过定位可能导致装夹困难或工件变形，应结合基准精度合理处理。",
    "image": null,
    "knowledgePoint": "过定位",
    "knowledgePoints": [
      "制造工艺",
      "过定位"
    ],
    "tags": [
      "制造工艺区",
      "制造工艺",
      "过定位"
    ],
    "answer": "过定位",
    "answerText": "过定位",
    "fillAnswers": [
      "过定位",
      "重复定位"
    ],
    "acceptableAnswers": [
      "重复定位"
    ]
  }
];
