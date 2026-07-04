import type { Question } from "./questions";

export const intelligentLineQuestions: Question[] = [
  {
    "id": "zncx_001",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 1）",
    "question": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 1）",
    "options": [
      "下游工站就绪信号和互锁条件",
      "零件表面粗糙度",
      "刀具补偿号",
      "图纸比例"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "提示下游未就绪时，应先查下游工站、传感器和互锁信号，确认是否允许输送线启动。",
    "image": "/assets/questions/line/production_robot_ready_001.svg",
    "imageUrl": "/assets/questions/line/production_robot_ready_001.svg",
    "imageAlt": "机器人与输送线握手",
    "imageDescription": "设备协同需要请求、允许、完成、复位等握手信号。",
    "knowledgePoint": "工站联动",
    "knowledgePoints": [
      "智能产线",
      "工站联动"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "工站联动",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_002",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 1）",
    "question": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 1）",
    "options": [
      "检测工序",
      "分拣工序",
      "随机决定",
      "加工工序"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "产线节拍由最长或瓶颈工序决定，本例加工 52s 最长。",
    "image": "/assets/questions/line/production_takt_001.svg",
    "imageUrl": "/assets/questions/line/production_takt_001.svg",
    "imageAlt": "节拍瓶颈判断",
    "imageDescription": "加工工序 52s 最长，是当前瓶颈。",
    "knowledgePoint": "产线节拍",
    "knowledgePoints": [
      "智能产线",
      "产线节拍"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线节拍",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_003",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "安全光栅被遮挡时，设备应如何响应？（任务 1）",
    "question": "安全光栅被遮挡时，设备应如何响应？（任务 1）",
    "options": [
      "关闭报警继续运行",
      "只记录不处理",
      "停止危险运动或禁止启动",
      "提高速度绕过"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "安全光栅属于安全防护装置，被遮挡时应使危险运动停止或禁止启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全联锁",
    "knowledgePoints": [
      "智能产线",
      "安全联锁"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "安全联锁",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_004",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "MES、PLC、HMI 三者关系较合理的是？（任务 1）",
    "question": "MES、PLC、HMI 三者关系较合理的是？（任务 1）",
    "options": [
      "PLC 只存放图纸",
      "MES 管生产信息，PLC 控制设备，HMI 负责人机交互",
      "MES 直接代替所有传感器",
      "HMI 只负责润滑"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "MES 偏生产管理和追溯，PLC 执行控制，HMI 用于显示、操作和报警交互。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "MES/PLC/HMI",
    "knowledgePoints": [
      "智能产线",
      "MES/PLC/HMI"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "MES/PLC/HMI",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_005",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "智能产线中设置缓存区的主要作用是什么？（任务 1）",
    "question": "智能产线中设置缓存区的主要作用是什么？（任务 1）",
    "options": [
      "吸收上下游节拍波动",
      "替代所有检测",
      "取消安全门",
      "改变材料硬度"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "缓存区可以缓冲前后工序节拍差，减少短暂停顿对整线的影响。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "缓存区",
    "knowledgePoints": [
      "智能产线",
      "缓存区"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "缓存区",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_006",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 1）（工位 006）",
    "question": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 1）（工位 006）",
    "options": [
      "零件表面粗糙度",
      "刀具补偿号",
      "图纸比例",
      "下游工站就绪信号和互锁条件"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "提示下游未就绪时，应先查下游工站、传感器和互锁信号，确认是否允许输送线启动。",
    "image": "/assets/questions/line/production_robot_ready_001.svg",
    "imageUrl": "/assets/questions/line/production_robot_ready_001.svg",
    "imageAlt": "机器人与输送线握手",
    "imageDescription": "设备协同需要请求、允许、完成、复位等握手信号。",
    "knowledgePoint": "工站联动",
    "knowledgePoints": [
      "智能产线",
      "工站联动"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "工站联动",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_007",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 1）（工位 007）",
    "question": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 1）（工位 007）",
    "options": [
      "分拣工序",
      "随机决定",
      "加工工序",
      "检测工序"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "产线节拍由最长或瓶颈工序决定，本例加工 52s 最长。",
    "image": "/assets/questions/line/production_takt_001.svg",
    "imageUrl": "/assets/questions/line/production_takt_001.svg",
    "imageAlt": "节拍瓶颈判断",
    "imageDescription": "加工工序 52s 最长，是当前瓶颈。",
    "knowledgePoint": "产线节拍",
    "knowledgePoints": [
      "智能产线",
      "产线节拍"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线节拍",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_008",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "安全光栅被遮挡时，设备应如何响应？（任务 1）（工位 008）",
    "question": "安全光栅被遮挡时，设备应如何响应？（任务 1）（工位 008）",
    "options": [
      "只记录不处理",
      "停止危险运动或禁止启动",
      "提高速度绕过",
      "关闭报警继续运行"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "安全光栅属于安全防护装置，被遮挡时应使危险运动停止或禁止启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全联锁",
    "knowledgePoints": [
      "智能产线",
      "安全联锁"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "安全联锁",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_009",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "多选题",
    "difficulty": "medium",
    "text": "智能产线基本组成通常包括哪些？（多选 1）",
    "question": "智能产线基本组成通常包括哪些？（多选 1）",
    "options": [
      "传感器",
      "执行器",
      "PLC/HMI",
      "随机摆放的杂物"
    ],
    "answerIndex": [
      0,
      1,
      2
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "acceptableAnswers": [],
    "explanation": "感知、执行和控制/交互是产线基础；现场杂物会影响安全和5S。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线组成",
    "knowledgePoints": [
      "智能产线",
      "产线组成"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线组成",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_010",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "多选题",
    "difficulty": "hard",
    "text": "产线报警处理时应注意哪些？（多选 1）",
    "question": "产线报警处理时应注意哪些？（多选 1）",
    "options": [
      "保证人员安全",
      "查明原因后复位",
      "直接屏蔽报警",
      "确认报警代码"
    ],
    "answerIndex": [
      0,
      1,
      3
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "acceptableAnswers": [],
    "explanation": "报警处理要先安全、再定位原因、最后复位；屏蔽报警会掩盖风险。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "报警处理",
    "knowledgePoints": [
      "智能产线",
      "报警处理"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "报警处理",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_011",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "多选题",
    "difficulty": "easy",
    "text": "机器人与输送线协同通常需要哪些信号？（多选 1）",
    "question": "机器人与输送线协同通常需要哪些信号？（多选 1）",
    "options": [
      "动作完成",
      "量具零位",
      "请求取放",
      "允许进入"
    ],
    "answerIndex": [
      0,
      2,
      3
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "acceptableAnswers": [],
    "explanation": "设备协同依赖请求、允许、完成等握手信号；量具零位属于检测准备。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "设备协同",
    "knowledgePoints": [
      "智能产线",
      "设备协同"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "设备协同",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_012",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "多选题",
    "difficulty": "easy",
    "text": "智能产线基本组成通常包括哪些？（多选 1）（工位 012）",
    "question": "智能产线基本组成通常包括哪些？（多选 1）（工位 012）",
    "options": [
      "随机摆放的杂物",
      "传感器",
      "执行器",
      "PLC/HMI"
    ],
    "answerIndex": [
      1,
      2,
      3
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "acceptableAnswers": [],
    "explanation": "感知、执行和控制/交互是产线基础；现场杂物会影响安全和5S。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线组成",
    "knowledgePoints": [
      "智能产线",
      "产线组成"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线组成",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_013",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "产线瓶颈通常是耗时最长或限制产出的工序。（判断 1）",
    "question": "产线瓶颈通常是耗时最长或限制产出的工序。（判断 1）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。瓶颈决定整线最大产能，改善瓶颈比优化非瓶颈更有效。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "瓶颈工序",
    "knowledgePoints": [
      "智能产线",
      "瓶颈工序"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "瓶颈工序",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_014",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "安全门互锁可以在调试时长期短接以提高效率。（判断 1）",
    "question": "安全门互锁可以在调试时长期短接以提高效率。（判断 1）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。安全互锁不能随意短接，调试也应按安全模式和授权流程进行。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全联锁",
    "knowledgePoints": [
      "智能产线",
      "安全联锁"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "安全联锁",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_015",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "HMI 可以显示报警、状态和操作画面。（判断 1）",
    "question": "HMI 可以显示报警、状态和操作画面。（判断 1）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。HMI 是现场人机交互界面，用于状态显示、参数设定和报警处理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "HMI",
    "knowledgePoints": [
      "智能产线",
      "HMI"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "HMI",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_016",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "智能产线中用于生产计划、追溯和工单管理的系统常称为 ____。（填空 1）",
    "question": "智能产线中用于生产计划、追溯和工单管理的系统常称为 ____。（填空 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "MES",
    "acceptableAnswers": [
      "MES",
      "mes"
    ],
    "fillAnswers": [
      "MES",
      "mes"
    ],
    "answerText": "MES",
    "explanation": "MES 连接生产计划、执行和追溯，是智能制造信息层的重要系统。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "MES",
    "knowledgePoints": [
      "智能产线",
      "MES"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "MES",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_017",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "产线节拍通常受 ____ 工序限制。（填空 1）",
    "question": "产线节拍通常受 ____ 工序限制。（填空 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "瓶颈",
    "acceptableAnswers": [
      "瓶颈",
      "瓶颈工序"
    ],
    "fillAnswers": [
      "瓶颈",
      "瓶颈工序"
    ],
    "answerText": "瓶颈",
    "explanation": "瓶颈工序耗时最长或能力最低，决定整线输出能力。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线节拍",
    "knowledgePoints": [
      "智能产线",
      "产线节拍"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线节拍",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_018",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "机器人与工站之间的请求、允许、完成等信号常称为 ____ 信号。（填空 1）",
    "question": "机器人与工站之间的请求、允许、完成等信号常称为 ____ 信号。（填空 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "握手",
    "acceptableAnswers": [
      "握手",
      "握手信号"
    ],
    "fillAnswers": [
      "握手",
      "握手信号"
    ],
    "answerText": "握手",
    "explanation": "握手信号保证设备动作顺序清楚，避免同时动作或等待失控。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "设备协同",
    "knowledgePoints": [
      "智能产线",
      "设备协同"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "设备协同",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_019",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将智能装配产线一般流程排序，答案写数字串。（流程 1）",
    "question": "将智能装配产线一般流程排序，答案写数字串。（流程 1）",
    "promptCode": "1. 分拣\n2. 上料\n3. 检测\n4. 定位\n5. 加工或装配\n6. 下料",
    "options": [],
    "answerIndex": -1,
    "answer": "2-4-5-3-1-6",
    "acceptableAnswers": [
      "2-4-5-3-1-6",
      "245316"
    ],
    "fillAnswers": [
      "2-4-5-3-1-6",
      "245316"
    ],
    "answerText": "2-4-5-3-1-6",
    "explanation": "典型流程是先上料并定位，再加工或装配，随后检测，根据结果分拣，最后下料。",
    "image": "/assets/questions/line/production_line_flow_001.svg",
    "imageUrl": "/assets/questions/line/production_line_flow_001.svg",
    "imageAlt": "智能产线基本流程",
    "imageDescription": "常见流程：上料、定位、加工、检测、分拣、下料。",
    "knowledgePoint": "产线流程",
    "knowledgePoints": [
      "智能产线",
      "产线流程"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_020",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将产线报警处理流程排序，答案写数字串。（流程 1）",
    "question": "将产线报警处理流程排序，答案写数字串。（流程 1）",
    "promptCode": "1. 查明原因\n2. 确认人员安全\n3. 查看报警代码\n4. 排除故障\n5. 复位并试运行",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-1-4-5",
    "acceptableAnswers": [
      "2-3-1-4-5",
      "23145"
    ],
    "fillAnswers": [
      "2-3-1-4-5",
      "23145"
    ],
    "answerText": "2-3-1-4-5",
    "explanation": "报警处理先确保人员安全，再查看报警代码、查明原因、排除故障，最后复位试运行。",
    "image": "/assets/questions/line/production_robot_ready_001.svg",
    "imageUrl": "/assets/questions/line/production_robot_ready_001.svg",
    "imageAlt": "机器人与输送线握手",
    "imageDescription": "设备协同需要请求、允许、完成、复位等握手信号。",
    "knowledgePoint": "报警处理流程",
    "knowledgePoints": [
      "智能产线",
      "报警处理流程"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "报警处理流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_021",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 2）",
    "question": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 2）",
    "options": [
      "加工工序",
      "检测工序",
      "分拣工序",
      "随机决定"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "产线节拍由最长或瓶颈工序决定，本例加工 52s 最长。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线节拍",
    "knowledgePoints": [
      "智能产线",
      "产线节拍"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线节拍",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_022",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "安全光栅被遮挡时，设备应如何响应？（任务 2）",
    "question": "安全光栅被遮挡时，设备应如何响应？（任务 2）",
    "options": [
      "提高速度绕过",
      "关闭报警继续运行",
      "只记录不处理",
      "停止危险运动或禁止启动"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "安全光栅属于安全防护装置，被遮挡时应使危险运动停止或禁止启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全联锁",
    "knowledgePoints": [
      "智能产线",
      "安全联锁"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "安全联锁",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_023",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "MES、PLC、HMI 三者关系较合理的是？（任务 2）",
    "question": "MES、PLC、HMI 三者关系较合理的是？（任务 2）",
    "options": [
      "HMI 只负责润滑",
      "PLC 只存放图纸",
      "MES 管生产信息，PLC 控制设备，HMI 负责人机交互",
      "MES 直接代替所有传感器"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "MES 偏生产管理和追溯，PLC 执行控制，HMI 用于显示、操作和报警交互。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "MES/PLC/HMI",
    "knowledgePoints": [
      "智能产线",
      "MES/PLC/HMI"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "MES/PLC/HMI",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_024",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "智能产线中设置缓存区的主要作用是什么？（任务 2）",
    "question": "智能产线中设置缓存区的主要作用是什么？（任务 2）",
    "options": [
      "改变材料硬度",
      "吸收上下游节拍波动",
      "替代所有检测",
      "取消安全门"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "缓存区可以缓冲前后工序节拍差，减少短暂停顿对整线的影响。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "缓存区",
    "knowledgePoints": [
      "智能产线",
      "缓存区"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "缓存区",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_025",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 2）",
    "question": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 2）",
    "options": [
      "下游工站就绪信号和互锁条件",
      "零件表面粗糙度",
      "刀具补偿号",
      "图纸比例"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "提示下游未就绪时，应先查下游工站、传感器和互锁信号，确认是否允许输送线启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "工站联动",
    "knowledgePoints": [
      "智能产线",
      "工站联动"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "工站联动",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_026",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 2）（工位 026）",
    "question": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 2）（工位 026）",
    "options": [
      "检测工序",
      "分拣工序",
      "随机决定",
      "加工工序"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "产线节拍由最长或瓶颈工序决定，本例加工 52s 最长。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线节拍",
    "knowledgePoints": [
      "智能产线",
      "产线节拍"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线节拍",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_027",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "安全光栅被遮挡时，设备应如何响应？（任务 2）（工位 027）",
    "question": "安全光栅被遮挡时，设备应如何响应？（任务 2）（工位 027）",
    "options": [
      "关闭报警继续运行",
      "只记录不处理",
      "停止危险运动或禁止启动",
      "提高速度绕过"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "安全光栅属于安全防护装置，被遮挡时应使危险运动停止或禁止启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全联锁",
    "knowledgePoints": [
      "智能产线",
      "安全联锁"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "安全联锁",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_028",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "MES、PLC、HMI 三者关系较合理的是？（任务 2）（工位 028）",
    "question": "MES、PLC、HMI 三者关系较合理的是？（任务 2）（工位 028）",
    "options": [
      "PLC 只存放图纸",
      "MES 管生产信息，PLC 控制设备，HMI 负责人机交互",
      "MES 直接代替所有传感器",
      "HMI 只负责润滑"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "MES 偏生产管理和追溯，PLC 执行控制，HMI 用于显示、操作和报警交互。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "MES/PLC/HMI",
    "knowledgePoints": [
      "智能产线",
      "MES/PLC/HMI"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "MES/PLC/HMI",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_029",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "多选题",
    "difficulty": "medium",
    "text": "机器人与输送线协同通常需要哪些信号？（多选 2）",
    "question": "机器人与输送线协同通常需要哪些信号？（多选 2）",
    "options": [
      "请求取放",
      "允许进入",
      "动作完成",
      "量具零位"
    ],
    "answerIndex": [
      0,
      1,
      2
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "acceptableAnswers": [],
    "explanation": "设备协同依赖请求、允许、完成等握手信号；量具零位属于检测准备。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "设备协同",
    "knowledgePoints": [
      "智能产线",
      "设备协同"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "设备协同",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_030",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "多选题",
    "difficulty": "hard",
    "text": "智能产线基本组成通常包括哪些？（多选 2）",
    "question": "智能产线基本组成通常包括哪些？（多选 2）",
    "options": [
      "执行器",
      "PLC/HMI",
      "随机摆放的杂物",
      "传感器"
    ],
    "answerIndex": [
      0,
      1,
      3
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "acceptableAnswers": [],
    "explanation": "感知、执行和控制/交互是产线基础；现场杂物会影响安全和5S。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线组成",
    "knowledgePoints": [
      "智能产线",
      "产线组成"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线组成",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_031",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "多选题",
    "difficulty": "easy",
    "text": "产线报警处理时应注意哪些？（多选 2）",
    "question": "产线报警处理时应注意哪些？（多选 2）",
    "options": [
      "查明原因后复位",
      "直接屏蔽报警",
      "确认报警代码",
      "保证人员安全"
    ],
    "answerIndex": [
      0,
      2,
      3
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "acceptableAnswers": [],
    "explanation": "报警处理要先安全、再定位原因、最后复位；屏蔽报警会掩盖风险。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "报警处理",
    "knowledgePoints": [
      "智能产线",
      "报警处理"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "报警处理",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_032",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "多选题",
    "difficulty": "easy",
    "text": "机器人与输送线协同通常需要哪些信号？（多选 2）（工位 032）",
    "question": "机器人与输送线协同通常需要哪些信号？（多选 2）（工位 032）",
    "options": [
      "量具零位",
      "请求取放",
      "允许进入",
      "动作完成"
    ],
    "answerIndex": [
      1,
      2,
      3
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "acceptableAnswers": [],
    "explanation": "设备协同依赖请求、允许、完成等握手信号；量具零位属于检测准备。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "设备协同",
    "knowledgePoints": [
      "智能产线",
      "设备协同"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "设备协同",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_033",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "HMI 可以显示报警、状态和操作画面。（判断 2）",
    "question": "HMI 可以显示报警、状态和操作画面。（判断 2）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。HMI 是现场人机交互界面，用于状态显示、参数设定和报警处理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "HMI",
    "knowledgePoints": [
      "智能产线",
      "HMI"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "HMI",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_034",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "产线瓶颈通常是耗时最长或限制产出的工序。（判断 2）",
    "question": "产线瓶颈通常是耗时最长或限制产出的工序。（判断 2）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。瓶颈决定整线最大产能，改善瓶颈比优化非瓶颈更有效。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "瓶颈工序",
    "knowledgePoints": [
      "智能产线",
      "瓶颈工序"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "瓶颈工序",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_035",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "安全门互锁可以在调试时长期短接以提高效率。（判断 2）",
    "question": "安全门互锁可以在调试时长期短接以提高效率。（判断 2）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。安全互锁不能随意短接，调试也应按安全模式和授权流程进行。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全联锁",
    "knowledgePoints": [
      "智能产线",
      "安全联锁"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "安全联锁",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_036",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "机器人与工站之间的请求、允许、完成等信号常称为 ____ 信号。（填空 2）",
    "question": "机器人与工站之间的请求、允许、完成等信号常称为 ____ 信号。（填空 2）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "握手",
    "acceptableAnswers": [
      "握手",
      "握手信号"
    ],
    "fillAnswers": [
      "握手",
      "握手信号"
    ],
    "answerText": "握手",
    "explanation": "握手信号保证设备动作顺序清楚，避免同时动作或等待失控。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "设备协同",
    "knowledgePoints": [
      "智能产线",
      "设备协同"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "设备协同",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_037",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "智能产线中用于生产计划、追溯和工单管理的系统常称为 ____。（填空 2）",
    "question": "智能产线中用于生产计划、追溯和工单管理的系统常称为 ____。（填空 2）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "MES",
    "acceptableAnswers": [
      "MES",
      "mes"
    ],
    "fillAnswers": [
      "MES",
      "mes"
    ],
    "answerText": "MES",
    "explanation": "MES 连接生产计划、执行和追溯，是智能制造信息层的重要系统。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "MES",
    "knowledgePoints": [
      "智能产线",
      "MES"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "MES",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_038",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "产线节拍通常受 ____ 工序限制。（填空 2）",
    "question": "产线节拍通常受 ____ 工序限制。（填空 2）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "瓶颈",
    "acceptableAnswers": [
      "瓶颈",
      "瓶颈工序"
    ],
    "fillAnswers": [
      "瓶颈",
      "瓶颈工序"
    ],
    "answerText": "瓶颈",
    "explanation": "瓶颈工序耗时最长或能力最低，决定整线输出能力。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线节拍",
    "knowledgePoints": [
      "智能产线",
      "产线节拍"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线节拍",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_039",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将智能装配产线一般流程排序，答案写数字串。（流程 2）",
    "question": "将智能装配产线一般流程排序，答案写数字串。（流程 2）",
    "promptCode": "1. 分拣\n2. 上料\n3. 检测\n4. 定位\n5. 加工或装配\n6. 下料",
    "options": [],
    "answerIndex": -1,
    "answer": "2-4-5-3-1-6",
    "acceptableAnswers": [
      "2-4-5-3-1-6",
      "245316"
    ],
    "fillAnswers": [
      "2-4-5-3-1-6",
      "245316"
    ],
    "answerText": "2-4-5-3-1-6",
    "explanation": "典型流程是先上料并定位，再加工或装配，随后检测，根据结果分拣，最后下料。",
    "image": "/assets/questions/line/production_line_flow_001.svg",
    "imageUrl": "/assets/questions/line/production_line_flow_001.svg",
    "imageAlt": "智能产线基本流程",
    "imageDescription": "常见流程：上料、定位、加工、检测、分拣、下料。",
    "knowledgePoint": "产线流程",
    "knowledgePoints": [
      "智能产线",
      "产线流程"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_040",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将产线报警处理流程排序，答案写数字串。（流程 2）",
    "question": "将产线报警处理流程排序，答案写数字串。（流程 2）",
    "promptCode": "1. 查明原因\n2. 确认人员安全\n3. 查看报警代码\n4. 排除故障\n5. 复位并试运行",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-1-4-5",
    "acceptableAnswers": [
      "2-3-1-4-5",
      "23145"
    ],
    "fillAnswers": [
      "2-3-1-4-5",
      "23145"
    ],
    "answerText": "2-3-1-4-5",
    "explanation": "报警处理先确保人员安全，再查看报警代码、查明原因、排除故障，最后复位试运行。",
    "image": "/assets/questions/line/production_robot_ready_001.svg",
    "imageUrl": "/assets/questions/line/production_robot_ready_001.svg",
    "imageAlt": "机器人与输送线握手",
    "imageDescription": "设备协同需要请求、允许、完成、复位等握手信号。",
    "knowledgePoint": "报警处理流程",
    "knowledgePoints": [
      "智能产线",
      "报警处理流程"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "报警处理流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_041",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "安全光栅被遮挡时，设备应如何响应？（任务 3）",
    "question": "安全光栅被遮挡时，设备应如何响应？（任务 3）",
    "options": [
      "停止危险运动或禁止启动",
      "提高速度绕过",
      "关闭报警继续运行",
      "只记录不处理"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "安全光栅属于安全防护装置，被遮挡时应使危险运动停止或禁止启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全联锁",
    "knowledgePoints": [
      "智能产线",
      "安全联锁"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "安全联锁",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_042",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "MES、PLC、HMI 三者关系较合理的是？（任务 3）",
    "question": "MES、PLC、HMI 三者关系较合理的是？（任务 3）",
    "options": [
      "MES 直接代替所有传感器",
      "HMI 只负责润滑",
      "PLC 只存放图纸",
      "MES 管生产信息，PLC 控制设备，HMI 负责人机交互"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "MES 偏生产管理和追溯，PLC 执行控制，HMI 用于显示、操作和报警交互。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "MES/PLC/HMI",
    "knowledgePoints": [
      "智能产线",
      "MES/PLC/HMI"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "MES/PLC/HMI",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_043",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "智能产线中设置缓存区的主要作用是什么？（任务 3）",
    "question": "智能产线中设置缓存区的主要作用是什么？（任务 3）",
    "options": [
      "取消安全门",
      "改变材料硬度",
      "吸收上下游节拍波动",
      "替代所有检测"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "缓存区可以缓冲前后工序节拍差，减少短暂停顿对整线的影响。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "缓存区",
    "knowledgePoints": [
      "智能产线",
      "缓存区"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "缓存区",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_044",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 3）",
    "question": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 3）",
    "options": [
      "图纸比例",
      "下游工站就绪信号和互锁条件",
      "零件表面粗糙度",
      "刀具补偿号"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "提示下游未就绪时，应先查下游工站、传感器和互锁信号，确认是否允许输送线启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "工站联动",
    "knowledgePoints": [
      "智能产线",
      "工站联动"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "工站联动",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_045",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 3）",
    "question": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 3）",
    "options": [
      "加工工序",
      "检测工序",
      "分拣工序",
      "随机决定"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "产线节拍由最长或瓶颈工序决定，本例加工 52s 最长。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线节拍",
    "knowledgePoints": [
      "智能产线",
      "产线节拍"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线节拍",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_046",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "安全光栅被遮挡时，设备应如何响应？（任务 3）（工位 046）",
    "question": "安全光栅被遮挡时，设备应如何响应？（任务 3）（工位 046）",
    "options": [
      "提高速度绕过",
      "关闭报警继续运行",
      "只记录不处理",
      "停止危险运动或禁止启动"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "安全光栅属于安全防护装置，被遮挡时应使危险运动停止或禁止启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全联锁",
    "knowledgePoints": [
      "智能产线",
      "安全联锁"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "安全联锁",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_047",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "MES、PLC、HMI 三者关系较合理的是？（任务 3）（工位 047）",
    "question": "MES、PLC、HMI 三者关系较合理的是？（任务 3）（工位 047）",
    "options": [
      "HMI 只负责润滑",
      "PLC 只存放图纸",
      "MES 管生产信息，PLC 控制设备，HMI 负责人机交互",
      "MES 直接代替所有传感器"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "MES 偏生产管理和追溯，PLC 执行控制，HMI 用于显示、操作和报警交互。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "MES/PLC/HMI",
    "knowledgePoints": [
      "智能产线",
      "MES/PLC/HMI"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "MES/PLC/HMI",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_048",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "智能产线中设置缓存区的主要作用是什么？（任务 3）（工位 048）",
    "question": "智能产线中设置缓存区的主要作用是什么？（任务 3）（工位 048）",
    "options": [
      "改变材料硬度",
      "吸收上下游节拍波动",
      "替代所有检测",
      "取消安全门"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "缓存区可以缓冲前后工序节拍差，减少短暂停顿对整线的影响。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "缓存区",
    "knowledgePoints": [
      "智能产线",
      "缓存区"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "缓存区",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_049",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "多选题",
    "difficulty": "medium",
    "text": "产线报警处理时应注意哪些？（多选 3）",
    "question": "产线报警处理时应注意哪些？（多选 3）",
    "options": [
      "确认报警代码",
      "保证人员安全",
      "查明原因后复位",
      "直接屏蔽报警"
    ],
    "answerIndex": [
      0,
      1,
      2
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "acceptableAnswers": [],
    "explanation": "报警处理要先安全、再定位原因、最后复位；屏蔽报警会掩盖风险。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "报警处理",
    "knowledgePoints": [
      "智能产线",
      "报警处理"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "报警处理",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_050",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "多选题",
    "difficulty": "hard",
    "text": "机器人与输送线协同通常需要哪些信号？（多选 3）",
    "question": "机器人与输送线协同通常需要哪些信号？（多选 3）",
    "options": [
      "允许进入",
      "动作完成",
      "量具零位",
      "请求取放"
    ],
    "answerIndex": [
      0,
      1,
      3
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "acceptableAnswers": [],
    "explanation": "设备协同依赖请求、允许、完成等握手信号；量具零位属于检测准备。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "设备协同",
    "knowledgePoints": [
      "智能产线",
      "设备协同"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "设备协同",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_051",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "多选题",
    "difficulty": "easy",
    "text": "智能产线基本组成通常包括哪些？（多选 3）",
    "question": "智能产线基本组成通常包括哪些？（多选 3）",
    "options": [
      "PLC/HMI",
      "随机摆放的杂物",
      "传感器",
      "执行器"
    ],
    "answerIndex": [
      0,
      2,
      3
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "acceptableAnswers": [],
    "explanation": "感知、执行和控制/交互是产线基础；现场杂物会影响安全和5S。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线组成",
    "knowledgePoints": [
      "智能产线",
      "产线组成"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线组成",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_052",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "多选题",
    "difficulty": "easy",
    "text": "产线报警处理时应注意哪些？（多选 3）（工位 052）",
    "question": "产线报警处理时应注意哪些？（多选 3）（工位 052）",
    "options": [
      "直接屏蔽报警",
      "确认报警代码",
      "保证人员安全",
      "查明原因后复位"
    ],
    "answerIndex": [
      1,
      2,
      3
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "acceptableAnswers": [],
    "explanation": "报警处理要先安全、再定位原因、最后复位；屏蔽报警会掩盖风险。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "报警处理",
    "knowledgePoints": [
      "智能产线",
      "报警处理"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "报警处理",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_053",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "安全门互锁可以在调试时长期短接以提高效率。（判断 3）",
    "question": "安全门互锁可以在调试时长期短接以提高效率。（判断 3）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。安全互锁不能随意短接，调试也应按安全模式和授权流程进行。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全联锁",
    "knowledgePoints": [
      "智能产线",
      "安全联锁"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "安全联锁",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_054",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "HMI 可以显示报警、状态和操作画面。（判断 3）",
    "question": "HMI 可以显示报警、状态和操作画面。（判断 3）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。HMI 是现场人机交互界面，用于状态显示、参数设定和报警处理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "HMI",
    "knowledgePoints": [
      "智能产线",
      "HMI"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "HMI",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_055",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "产线瓶颈通常是耗时最长或限制产出的工序。（判断 3）",
    "question": "产线瓶颈通常是耗时最长或限制产出的工序。（判断 3）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。瓶颈决定整线最大产能，改善瓶颈比优化非瓶颈更有效。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "瓶颈工序",
    "knowledgePoints": [
      "智能产线",
      "瓶颈工序"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "瓶颈工序",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_056",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "产线节拍通常受 ____ 工序限制。（填空 3）",
    "question": "产线节拍通常受 ____ 工序限制。（填空 3）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "瓶颈",
    "acceptableAnswers": [
      "瓶颈",
      "瓶颈工序"
    ],
    "fillAnswers": [
      "瓶颈",
      "瓶颈工序"
    ],
    "answerText": "瓶颈",
    "explanation": "瓶颈工序耗时最长或能力最低，决定整线输出能力。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线节拍",
    "knowledgePoints": [
      "智能产线",
      "产线节拍"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线节拍",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_057",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "机器人与工站之间的请求、允许、完成等信号常称为 ____ 信号。（填空 3）",
    "question": "机器人与工站之间的请求、允许、完成等信号常称为 ____ 信号。（填空 3）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "握手",
    "acceptableAnswers": [
      "握手",
      "握手信号"
    ],
    "fillAnswers": [
      "握手",
      "握手信号"
    ],
    "answerText": "握手",
    "explanation": "握手信号保证设备动作顺序清楚，避免同时动作或等待失控。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "设备协同",
    "knowledgePoints": [
      "智能产线",
      "设备协同"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "设备协同",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_058",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "智能产线中用于生产计划、追溯和工单管理的系统常称为 ____。（填空 3）",
    "question": "智能产线中用于生产计划、追溯和工单管理的系统常称为 ____。（填空 3）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "MES",
    "acceptableAnswers": [
      "MES",
      "mes"
    ],
    "fillAnswers": [
      "MES",
      "mes"
    ],
    "answerText": "MES",
    "explanation": "MES 连接生产计划、执行和追溯，是智能制造信息层的重要系统。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "MES",
    "knowledgePoints": [
      "智能产线",
      "MES"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "MES",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_059",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将智能装配产线一般流程排序，答案写数字串。（流程 3）",
    "question": "将智能装配产线一般流程排序，答案写数字串。（流程 3）",
    "promptCode": "1. 分拣\n2. 上料\n3. 检测\n4. 定位\n5. 加工或装配\n6. 下料",
    "options": [],
    "answerIndex": -1,
    "answer": "2-4-5-3-1-6",
    "acceptableAnswers": [
      "2-4-5-3-1-6",
      "245316"
    ],
    "fillAnswers": [
      "2-4-5-3-1-6",
      "245316"
    ],
    "answerText": "2-4-5-3-1-6",
    "explanation": "典型流程是先上料并定位，再加工或装配，随后检测，根据结果分拣，最后下料。",
    "image": "/assets/questions/line/production_line_flow_001.svg",
    "imageUrl": "/assets/questions/line/production_line_flow_001.svg",
    "imageAlt": "智能产线基本流程",
    "imageDescription": "常见流程：上料、定位、加工、检测、分拣、下料。",
    "knowledgePoint": "产线流程",
    "knowledgePoints": [
      "智能产线",
      "产线流程"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_060",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将产线报警处理流程排序，答案写数字串。（流程 3）",
    "question": "将产线报警处理流程排序，答案写数字串。（流程 3）",
    "promptCode": "1. 查明原因\n2. 确认人员安全\n3. 查看报警代码\n4. 排除故障\n5. 复位并试运行",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-1-4-5",
    "acceptableAnswers": [
      "2-3-1-4-5",
      "23145"
    ],
    "fillAnswers": [
      "2-3-1-4-5",
      "23145"
    ],
    "answerText": "2-3-1-4-5",
    "explanation": "报警处理先确保人员安全，再查看报警代码、查明原因、排除故障，最后复位试运行。",
    "image": "/assets/questions/line/production_robot_ready_001.svg",
    "imageUrl": "/assets/questions/line/production_robot_ready_001.svg",
    "imageAlt": "机器人与输送线握手",
    "imageDescription": "设备协同需要请求、允许、完成、复位等握手信号。",
    "knowledgePoint": "报警处理流程",
    "knowledgePoints": [
      "智能产线",
      "报警处理流程"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "报警处理流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_061",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "MES、PLC、HMI 三者关系较合理的是？（任务 4）",
    "question": "MES、PLC、HMI 三者关系较合理的是？（任务 4）",
    "options": [
      "MES 管生产信息，PLC 控制设备，HMI 负责人机交互",
      "MES 直接代替所有传感器",
      "HMI 只负责润滑",
      "PLC 只存放图纸"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "MES 偏生产管理和追溯，PLC 执行控制，HMI 用于显示、操作和报警交互。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "MES/PLC/HMI",
    "knowledgePoints": [
      "智能产线",
      "MES/PLC/HMI"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "MES/PLC/HMI",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_062",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "智能产线中设置缓存区的主要作用是什么？（任务 4）",
    "question": "智能产线中设置缓存区的主要作用是什么？（任务 4）",
    "options": [
      "替代所有检测",
      "取消安全门",
      "改变材料硬度",
      "吸收上下游节拍波动"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "缓存区可以缓冲前后工序节拍差，减少短暂停顿对整线的影响。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "缓存区",
    "knowledgePoints": [
      "智能产线",
      "缓存区"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "缓存区",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_063",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 4）",
    "question": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 4）",
    "options": [
      "刀具补偿号",
      "图纸比例",
      "下游工站就绪信号和互锁条件",
      "零件表面粗糙度"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "提示下游未就绪时，应先查下游工站、传感器和互锁信号，确认是否允许输送线启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "工站联动",
    "knowledgePoints": [
      "智能产线",
      "工站联动"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "工站联动",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_064",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 4）",
    "question": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 4）",
    "options": [
      "随机决定",
      "加工工序",
      "检测工序",
      "分拣工序"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "产线节拍由最长或瓶颈工序决定，本例加工 52s 最长。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线节拍",
    "knowledgePoints": [
      "智能产线",
      "产线节拍"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线节拍",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_065",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "安全光栅被遮挡时，设备应如何响应？（任务 4）",
    "question": "安全光栅被遮挡时，设备应如何响应？（任务 4）",
    "options": [
      "停止危险运动或禁止启动",
      "提高速度绕过",
      "关闭报警继续运行",
      "只记录不处理"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "安全光栅属于安全防护装置，被遮挡时应使危险运动停止或禁止启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全联锁",
    "knowledgePoints": [
      "智能产线",
      "安全联锁"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "安全联锁",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_066",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "MES、PLC、HMI 三者关系较合理的是？（任务 4）（工位 066）",
    "question": "MES、PLC、HMI 三者关系较合理的是？（任务 4）（工位 066）",
    "options": [
      "MES 直接代替所有传感器",
      "HMI 只负责润滑",
      "PLC 只存放图纸",
      "MES 管生产信息，PLC 控制设备，HMI 负责人机交互"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "MES 偏生产管理和追溯，PLC 执行控制，HMI 用于显示、操作和报警交互。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "MES/PLC/HMI",
    "knowledgePoints": [
      "智能产线",
      "MES/PLC/HMI"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "MES/PLC/HMI",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_067",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "智能产线中设置缓存区的主要作用是什么？（任务 4）（工位 067）",
    "question": "智能产线中设置缓存区的主要作用是什么？（任务 4）（工位 067）",
    "options": [
      "取消安全门",
      "改变材料硬度",
      "吸收上下游节拍波动",
      "替代所有检测"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "缓存区可以缓冲前后工序节拍差，减少短暂停顿对整线的影响。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "缓存区",
    "knowledgePoints": [
      "智能产线",
      "缓存区"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "缓存区",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_068",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 4）（工位 068）",
    "question": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 4）（工位 068）",
    "options": [
      "图纸比例",
      "下游工站就绪信号和互锁条件",
      "零件表面粗糙度",
      "刀具补偿号"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "提示下游未就绪时，应先查下游工站、传感器和互锁信号，确认是否允许输送线启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "工站联动",
    "knowledgePoints": [
      "智能产线",
      "工站联动"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "工站联动",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_069",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "多选题",
    "difficulty": "medium",
    "text": "智能产线基本组成通常包括哪些？（多选 4）",
    "question": "智能产线基本组成通常包括哪些？（多选 4）",
    "options": [
      "传感器",
      "执行器",
      "PLC/HMI",
      "随机摆放的杂物"
    ],
    "answerIndex": [
      0,
      1,
      2
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "acceptableAnswers": [],
    "explanation": "感知、执行和控制/交互是产线基础；现场杂物会影响安全和5S。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线组成",
    "knowledgePoints": [
      "智能产线",
      "产线组成"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线组成",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_070",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "多选题",
    "difficulty": "hard",
    "text": "产线报警处理时应注意哪些？（多选 4）",
    "question": "产线报警处理时应注意哪些？（多选 4）",
    "options": [
      "保证人员安全",
      "查明原因后复位",
      "直接屏蔽报警",
      "确认报警代码"
    ],
    "answerIndex": [
      0,
      1,
      3
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "acceptableAnswers": [],
    "explanation": "报警处理要先安全、再定位原因、最后复位；屏蔽报警会掩盖风险。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "报警处理",
    "knowledgePoints": [
      "智能产线",
      "报警处理"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "报警处理",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_071",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "多选题",
    "difficulty": "easy",
    "text": "机器人与输送线协同通常需要哪些信号？（多选 4）",
    "question": "机器人与输送线协同通常需要哪些信号？（多选 4）",
    "options": [
      "动作完成",
      "量具零位",
      "请求取放",
      "允许进入"
    ],
    "answerIndex": [
      0,
      2,
      3
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "acceptableAnswers": [],
    "explanation": "设备协同依赖请求、允许、完成等握手信号；量具零位属于检测准备。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "设备协同",
    "knowledgePoints": [
      "智能产线",
      "设备协同"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "设备协同",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_072",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "多选题",
    "difficulty": "easy",
    "text": "智能产线基本组成通常包括哪些？（多选 4）（工位 072）",
    "question": "智能产线基本组成通常包括哪些？（多选 4）（工位 072）",
    "options": [
      "随机摆放的杂物",
      "传感器",
      "执行器",
      "PLC/HMI"
    ],
    "answerIndex": [
      1,
      2,
      3
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "acceptableAnswers": [],
    "explanation": "感知、执行和控制/交互是产线基础；现场杂物会影响安全和5S。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线组成",
    "knowledgePoints": [
      "智能产线",
      "产线组成"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线组成",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_073",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "产线瓶颈通常是耗时最长或限制产出的工序。（判断 4）",
    "question": "产线瓶颈通常是耗时最长或限制产出的工序。（判断 4）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。瓶颈决定整线最大产能，改善瓶颈比优化非瓶颈更有效。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "瓶颈工序",
    "knowledgePoints": [
      "智能产线",
      "瓶颈工序"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "瓶颈工序",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_074",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "安全门互锁可以在调试时长期短接以提高效率。（判断 4）",
    "question": "安全门互锁可以在调试时长期短接以提高效率。（判断 4）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。安全互锁不能随意短接，调试也应按安全模式和授权流程进行。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全联锁",
    "knowledgePoints": [
      "智能产线",
      "安全联锁"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "安全联锁",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_075",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "HMI 可以显示报警、状态和操作画面。（判断 4）",
    "question": "HMI 可以显示报警、状态和操作画面。（判断 4）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。HMI 是现场人机交互界面，用于状态显示、参数设定和报警处理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "HMI",
    "knowledgePoints": [
      "智能产线",
      "HMI"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "HMI",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_076",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "智能产线中用于生产计划、追溯和工单管理的系统常称为 ____。（填空 4）",
    "question": "智能产线中用于生产计划、追溯和工单管理的系统常称为 ____。（填空 4）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "MES",
    "acceptableAnswers": [
      "MES",
      "mes"
    ],
    "fillAnswers": [
      "MES",
      "mes"
    ],
    "answerText": "MES",
    "explanation": "MES 连接生产计划、执行和追溯，是智能制造信息层的重要系统。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "MES",
    "knowledgePoints": [
      "智能产线",
      "MES"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "MES",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_077",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "产线节拍通常受 ____ 工序限制。（填空 4）",
    "question": "产线节拍通常受 ____ 工序限制。（填空 4）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "瓶颈",
    "acceptableAnswers": [
      "瓶颈",
      "瓶颈工序"
    ],
    "fillAnswers": [
      "瓶颈",
      "瓶颈工序"
    ],
    "answerText": "瓶颈",
    "explanation": "瓶颈工序耗时最长或能力最低，决定整线输出能力。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线节拍",
    "knowledgePoints": [
      "智能产线",
      "产线节拍"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线节拍",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_078",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "机器人与工站之间的请求、允许、完成等信号常称为 ____ 信号。（填空 4）",
    "question": "机器人与工站之间的请求、允许、完成等信号常称为 ____ 信号。（填空 4）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "握手",
    "acceptableAnswers": [
      "握手",
      "握手信号"
    ],
    "fillAnswers": [
      "握手",
      "握手信号"
    ],
    "answerText": "握手",
    "explanation": "握手信号保证设备动作顺序清楚，避免同时动作或等待失控。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "设备协同",
    "knowledgePoints": [
      "智能产线",
      "设备协同"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "设备协同",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_079",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将智能装配产线一般流程排序，答案写数字串。（流程 4）",
    "question": "将智能装配产线一般流程排序，答案写数字串。（流程 4）",
    "promptCode": "1. 分拣\n2. 上料\n3. 检测\n4. 定位\n5. 加工或装配\n6. 下料",
    "options": [],
    "answerIndex": -1,
    "answer": "2-4-5-3-1-6",
    "acceptableAnswers": [
      "2-4-5-3-1-6",
      "245316"
    ],
    "fillAnswers": [
      "2-4-5-3-1-6",
      "245316"
    ],
    "answerText": "2-4-5-3-1-6",
    "explanation": "典型流程是先上料并定位，再加工或装配，随后检测，根据结果分拣，最后下料。",
    "image": "/assets/questions/line/production_line_flow_001.svg",
    "imageUrl": "/assets/questions/line/production_line_flow_001.svg",
    "imageAlt": "智能产线基本流程",
    "imageDescription": "常见流程：上料、定位、加工、检测、分拣、下料。",
    "knowledgePoint": "产线流程",
    "knowledgePoints": [
      "智能产线",
      "产线流程"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_080",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将产线报警处理流程排序，答案写数字串。（流程 4）",
    "question": "将产线报警处理流程排序，答案写数字串。（流程 4）",
    "promptCode": "1. 查明原因\n2. 确认人员安全\n3. 查看报警代码\n4. 排除故障\n5. 复位并试运行",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-1-4-5",
    "acceptableAnswers": [
      "2-3-1-4-5",
      "23145"
    ],
    "fillAnswers": [
      "2-3-1-4-5",
      "23145"
    ],
    "answerText": "2-3-1-4-5",
    "explanation": "报警处理先确保人员安全，再查看报警代码、查明原因、排除故障，最后复位试运行。",
    "image": "/assets/questions/line/production_robot_ready_001.svg",
    "imageUrl": "/assets/questions/line/production_robot_ready_001.svg",
    "imageAlt": "机器人与输送线握手",
    "imageDescription": "设备协同需要请求、允许、完成、复位等握手信号。",
    "knowledgePoint": "报警处理流程",
    "knowledgePoints": [
      "智能产线",
      "报警处理流程"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "报警处理流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_081",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "智能产线中设置缓存区的主要作用是什么？（任务 5）",
    "question": "智能产线中设置缓存区的主要作用是什么？（任务 5）",
    "options": [
      "吸收上下游节拍波动",
      "替代所有检测",
      "取消安全门",
      "改变材料硬度"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "缓存区可以缓冲前后工序节拍差，减少短暂停顿对整线的影响。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "缓存区",
    "knowledgePoints": [
      "智能产线",
      "缓存区"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "缓存区",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_082",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 5）",
    "question": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 5）",
    "options": [
      "零件表面粗糙度",
      "刀具补偿号",
      "图纸比例",
      "下游工站就绪信号和互锁条件"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "提示下游未就绪时，应先查下游工站、传感器和互锁信号，确认是否允许输送线启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "工站联动",
    "knowledgePoints": [
      "智能产线",
      "工站联动"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "工站联动",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_083",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 5）",
    "question": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 5）",
    "options": [
      "分拣工序",
      "随机决定",
      "加工工序",
      "检测工序"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "产线节拍由最长或瓶颈工序决定，本例加工 52s 最长。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线节拍",
    "knowledgePoints": [
      "智能产线",
      "产线节拍"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线节拍",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_084",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "安全光栅被遮挡时，设备应如何响应？（任务 5）",
    "question": "安全光栅被遮挡时，设备应如何响应？（任务 5）",
    "options": [
      "只记录不处理",
      "停止危险运动或禁止启动",
      "提高速度绕过",
      "关闭报警继续运行"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "安全光栅属于安全防护装置，被遮挡时应使危险运动停止或禁止启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全联锁",
    "knowledgePoints": [
      "智能产线",
      "安全联锁"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "安全联锁",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_085",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "MES、PLC、HMI 三者关系较合理的是？（任务 5）",
    "question": "MES、PLC、HMI 三者关系较合理的是？（任务 5）",
    "options": [
      "MES 管生产信息，PLC 控制设备，HMI 负责人机交互",
      "MES 直接代替所有传感器",
      "HMI 只负责润滑",
      "PLC 只存放图纸"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "MES 偏生产管理和追溯，PLC 执行控制，HMI 用于显示、操作和报警交互。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "MES/PLC/HMI",
    "knowledgePoints": [
      "智能产线",
      "MES/PLC/HMI"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "MES/PLC/HMI",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_086",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "智能产线中设置缓存区的主要作用是什么？（任务 5）（工位 086）",
    "question": "智能产线中设置缓存区的主要作用是什么？（任务 5）（工位 086）",
    "options": [
      "替代所有检测",
      "取消安全门",
      "改变材料硬度",
      "吸收上下游节拍波动"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "缓存区可以缓冲前后工序节拍差，减少短暂停顿对整线的影响。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "缓存区",
    "knowledgePoints": [
      "智能产线",
      "缓存区"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "缓存区",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_087",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 5）（工位 087）",
    "question": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 5）（工位 087）",
    "options": [
      "刀具补偿号",
      "图纸比例",
      "下游工站就绪信号和互锁条件",
      "零件表面粗糙度"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "提示下游未就绪时，应先查下游工站、传感器和互锁信号，确认是否允许输送线启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "工站联动",
    "knowledgePoints": [
      "智能产线",
      "工站联动"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "工站联动",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_088",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 5）（工位 088）",
    "question": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 5）（工位 088）",
    "options": [
      "随机决定",
      "加工工序",
      "检测工序",
      "分拣工序"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "产线节拍由最长或瓶颈工序决定，本例加工 52s 最长。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线节拍",
    "knowledgePoints": [
      "智能产线",
      "产线节拍"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线节拍",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_089",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "多选题",
    "difficulty": "medium",
    "text": "机器人与输送线协同通常需要哪些信号？（多选 5）",
    "question": "机器人与输送线协同通常需要哪些信号？（多选 5）",
    "options": [
      "请求取放",
      "允许进入",
      "动作完成",
      "量具零位"
    ],
    "answerIndex": [
      0,
      1,
      2
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "acceptableAnswers": [],
    "explanation": "设备协同依赖请求、允许、完成等握手信号；量具零位属于检测准备。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "设备协同",
    "knowledgePoints": [
      "智能产线",
      "设备协同"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "设备协同",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_090",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "多选题",
    "difficulty": "hard",
    "text": "智能产线基本组成通常包括哪些？（多选 5）",
    "question": "智能产线基本组成通常包括哪些？（多选 5）",
    "options": [
      "执行器",
      "PLC/HMI",
      "随机摆放的杂物",
      "传感器"
    ],
    "answerIndex": [
      0,
      1,
      3
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "acceptableAnswers": [],
    "explanation": "感知、执行和控制/交互是产线基础；现场杂物会影响安全和5S。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线组成",
    "knowledgePoints": [
      "智能产线",
      "产线组成"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线组成",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_091",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "多选题",
    "difficulty": "easy",
    "text": "产线报警处理时应注意哪些？（多选 5）",
    "question": "产线报警处理时应注意哪些？（多选 5）",
    "options": [
      "查明原因后复位",
      "直接屏蔽报警",
      "确认报警代码",
      "保证人员安全"
    ],
    "answerIndex": [
      0,
      2,
      3
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "acceptableAnswers": [],
    "explanation": "报警处理要先安全、再定位原因、最后复位；屏蔽报警会掩盖风险。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "报警处理",
    "knowledgePoints": [
      "智能产线",
      "报警处理"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "报警处理",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_092",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "多选题",
    "difficulty": "easy",
    "text": "机器人与输送线协同通常需要哪些信号？（多选 5）（工位 092）",
    "question": "机器人与输送线协同通常需要哪些信号？（多选 5）（工位 092）",
    "options": [
      "量具零位",
      "请求取放",
      "允许进入",
      "动作完成"
    ],
    "answerIndex": [
      1,
      2,
      3
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "acceptableAnswers": [],
    "explanation": "设备协同依赖请求、允许、完成等握手信号；量具零位属于检测准备。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "设备协同",
    "knowledgePoints": [
      "智能产线",
      "设备协同"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "设备协同",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_093",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "HMI 可以显示报警、状态和操作画面。（判断 5）",
    "question": "HMI 可以显示报警、状态和操作画面。（判断 5）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。HMI 是现场人机交互界面，用于状态显示、参数设定和报警处理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "HMI",
    "knowledgePoints": [
      "智能产线",
      "HMI"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "HMI",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_094",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "产线瓶颈通常是耗时最长或限制产出的工序。（判断 5）",
    "question": "产线瓶颈通常是耗时最长或限制产出的工序。（判断 5）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。瓶颈决定整线最大产能，改善瓶颈比优化非瓶颈更有效。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "瓶颈工序",
    "knowledgePoints": [
      "智能产线",
      "瓶颈工序"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "瓶颈工序",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_095",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "安全门互锁可以在调试时长期短接以提高效率。（判断 5）",
    "question": "安全门互锁可以在调试时长期短接以提高效率。（判断 5）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。安全互锁不能随意短接，调试也应按安全模式和授权流程进行。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全联锁",
    "knowledgePoints": [
      "智能产线",
      "安全联锁"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "安全联锁",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_096",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "机器人与工站之间的请求、允许、完成等信号常称为 ____ 信号。（填空 5）",
    "question": "机器人与工站之间的请求、允许、完成等信号常称为 ____ 信号。（填空 5）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "握手",
    "acceptableAnswers": [
      "握手",
      "握手信号"
    ],
    "fillAnswers": [
      "握手",
      "握手信号"
    ],
    "answerText": "握手",
    "explanation": "握手信号保证设备动作顺序清楚，避免同时动作或等待失控。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "设备协同",
    "knowledgePoints": [
      "智能产线",
      "设备协同"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "设备协同",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_097",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "智能产线中用于生产计划、追溯和工单管理的系统常称为 ____。（填空 5）",
    "question": "智能产线中用于生产计划、追溯和工单管理的系统常称为 ____。（填空 5）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "MES",
    "acceptableAnswers": [
      "MES",
      "mes"
    ],
    "fillAnswers": [
      "MES",
      "mes"
    ],
    "answerText": "MES",
    "explanation": "MES 连接生产计划、执行和追溯，是智能制造信息层的重要系统。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "MES",
    "knowledgePoints": [
      "智能产线",
      "MES"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "MES",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_098",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "产线节拍通常受 ____ 工序限制。（填空 5）",
    "question": "产线节拍通常受 ____ 工序限制。（填空 5）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "瓶颈",
    "acceptableAnswers": [
      "瓶颈",
      "瓶颈工序"
    ],
    "fillAnswers": [
      "瓶颈",
      "瓶颈工序"
    ],
    "answerText": "瓶颈",
    "explanation": "瓶颈工序耗时最长或能力最低，决定整线输出能力。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线节拍",
    "knowledgePoints": [
      "智能产线",
      "产线节拍"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线节拍",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_099",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将智能装配产线一般流程排序，答案写数字串。（流程 5）",
    "question": "将智能装配产线一般流程排序，答案写数字串。（流程 5）",
    "promptCode": "1. 分拣\n2. 上料\n3. 检测\n4. 定位\n5. 加工或装配\n6. 下料",
    "options": [],
    "answerIndex": -1,
    "answer": "2-4-5-3-1-6",
    "acceptableAnswers": [
      "2-4-5-3-1-6",
      "245316"
    ],
    "fillAnswers": [
      "2-4-5-3-1-6",
      "245316"
    ],
    "answerText": "2-4-5-3-1-6",
    "explanation": "典型流程是先上料并定位，再加工或装配，随后检测，根据结果分拣，最后下料。",
    "image": "/assets/questions/line/production_line_flow_001.svg",
    "imageUrl": "/assets/questions/line/production_line_flow_001.svg",
    "imageAlt": "智能产线基本流程",
    "imageDescription": "常见流程：上料、定位、加工、检测、分拣、下料。",
    "knowledgePoint": "产线流程",
    "knowledgePoints": [
      "智能产线",
      "产线流程"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_100",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将产线报警处理流程排序，答案写数字串。（流程 5）",
    "question": "将产线报警处理流程排序，答案写数字串。（流程 5）",
    "promptCode": "1. 查明原因\n2. 确认人员安全\n3. 查看报警代码\n4. 排除故障\n5. 复位并试运行",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-1-4-5",
    "acceptableAnswers": [
      "2-3-1-4-5",
      "23145"
    ],
    "fillAnswers": [
      "2-3-1-4-5",
      "23145"
    ],
    "answerText": "2-3-1-4-5",
    "explanation": "报警处理先确保人员安全，再查看报警代码、查明原因、排除故障，最后复位试运行。",
    "image": "/assets/questions/line/production_robot_ready_001.svg",
    "imageUrl": "/assets/questions/line/production_robot_ready_001.svg",
    "imageAlt": "机器人与输送线握手",
    "imageDescription": "设备协同需要请求、允许、完成、复位等握手信号。",
    "knowledgePoint": "报警处理流程",
    "knowledgePoints": [
      "智能产线",
      "报警处理流程"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "报警处理流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_101",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 6）",
    "question": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 6）",
    "options": [
      "下游工站就绪信号和互锁条件",
      "零件表面粗糙度",
      "刀具补偿号",
      "图纸比例"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "提示下游未就绪时，应先查下游工站、传感器和互锁信号，确认是否允许输送线启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "工站联动",
    "knowledgePoints": [
      "智能产线",
      "工站联动"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "工站联动",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_102",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 6）",
    "question": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 6）",
    "options": [
      "检测工序",
      "分拣工序",
      "随机决定",
      "加工工序"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "产线节拍由最长或瓶颈工序决定，本例加工 52s 最长。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线节拍",
    "knowledgePoints": [
      "智能产线",
      "产线节拍"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线节拍",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_103",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "安全光栅被遮挡时，设备应如何响应？（任务 6）",
    "question": "安全光栅被遮挡时，设备应如何响应？（任务 6）",
    "options": [
      "关闭报警继续运行",
      "只记录不处理",
      "停止危险运动或禁止启动",
      "提高速度绕过"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "安全光栅属于安全防护装置，被遮挡时应使危险运动停止或禁止启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全联锁",
    "knowledgePoints": [
      "智能产线",
      "安全联锁"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "安全联锁",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_104",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "MES、PLC、HMI 三者关系较合理的是？（任务 6）",
    "question": "MES、PLC、HMI 三者关系较合理的是？（任务 6）",
    "options": [
      "PLC 只存放图纸",
      "MES 管生产信息，PLC 控制设备，HMI 负责人机交互",
      "MES 直接代替所有传感器",
      "HMI 只负责润滑"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "MES 偏生产管理和追溯，PLC 执行控制，HMI 用于显示、操作和报警交互。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "MES/PLC/HMI",
    "knowledgePoints": [
      "智能产线",
      "MES/PLC/HMI"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "MES/PLC/HMI",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_105",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "智能产线中设置缓存区的主要作用是什么？（任务 6）",
    "question": "智能产线中设置缓存区的主要作用是什么？（任务 6）",
    "options": [
      "吸收上下游节拍波动",
      "替代所有检测",
      "取消安全门",
      "改变材料硬度"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "缓存区可以缓冲前后工序节拍差，减少短暂停顿对整线的影响。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "缓存区",
    "knowledgePoints": [
      "智能产线",
      "缓存区"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "缓存区",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_106",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 6）（工位 106）",
    "question": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 6）（工位 106）",
    "options": [
      "零件表面粗糙度",
      "刀具补偿号",
      "图纸比例",
      "下游工站就绪信号和互锁条件"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "提示下游未就绪时，应先查下游工站、传感器和互锁信号，确认是否允许输送线启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "工站联动",
    "knowledgePoints": [
      "智能产线",
      "工站联动"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "工站联动",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_107",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 6）（工位 107）",
    "question": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 6）（工位 107）",
    "options": [
      "分拣工序",
      "随机决定",
      "加工工序",
      "检测工序"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "产线节拍由最长或瓶颈工序决定，本例加工 52s 最长。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线节拍",
    "knowledgePoints": [
      "智能产线",
      "产线节拍"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线节拍",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_108",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "安全光栅被遮挡时，设备应如何响应？（任务 6）（工位 108）",
    "question": "安全光栅被遮挡时，设备应如何响应？（任务 6）（工位 108）",
    "options": [
      "只记录不处理",
      "停止危险运动或禁止启动",
      "提高速度绕过",
      "关闭报警继续运行"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "安全光栅属于安全防护装置，被遮挡时应使危险运动停止或禁止启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全联锁",
    "knowledgePoints": [
      "智能产线",
      "安全联锁"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "安全联锁",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_109",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "多选题",
    "difficulty": "medium",
    "text": "产线报警处理时应注意哪些？（多选 6）",
    "question": "产线报警处理时应注意哪些？（多选 6）",
    "options": [
      "确认报警代码",
      "保证人员安全",
      "查明原因后复位",
      "直接屏蔽报警"
    ],
    "answerIndex": [
      0,
      1,
      2
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "acceptableAnswers": [],
    "explanation": "报警处理要先安全、再定位原因、最后复位；屏蔽报警会掩盖风险。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "报警处理",
    "knowledgePoints": [
      "智能产线",
      "报警处理"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "报警处理",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_110",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "多选题",
    "difficulty": "hard",
    "text": "机器人与输送线协同通常需要哪些信号？（多选 6）",
    "question": "机器人与输送线协同通常需要哪些信号？（多选 6）",
    "options": [
      "允许进入",
      "动作完成",
      "量具零位",
      "请求取放"
    ],
    "answerIndex": [
      0,
      1,
      3
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "acceptableAnswers": [],
    "explanation": "设备协同依赖请求、允许、完成等握手信号；量具零位属于检测准备。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "设备协同",
    "knowledgePoints": [
      "智能产线",
      "设备协同"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "设备协同",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_111",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "多选题",
    "difficulty": "easy",
    "text": "智能产线基本组成通常包括哪些？（多选 6）",
    "question": "智能产线基本组成通常包括哪些？（多选 6）",
    "options": [
      "PLC/HMI",
      "随机摆放的杂物",
      "传感器",
      "执行器"
    ],
    "answerIndex": [
      0,
      2,
      3
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "acceptableAnswers": [],
    "explanation": "感知、执行和控制/交互是产线基础；现场杂物会影响安全和5S。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线组成",
    "knowledgePoints": [
      "智能产线",
      "产线组成"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线组成",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_112",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "多选题",
    "difficulty": "easy",
    "text": "产线报警处理时应注意哪些？（多选 6）（工位 112）",
    "question": "产线报警处理时应注意哪些？（多选 6）（工位 112）",
    "options": [
      "直接屏蔽报警",
      "确认报警代码",
      "保证人员安全",
      "查明原因后复位"
    ],
    "answerIndex": [
      1,
      2,
      3
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "acceptableAnswers": [],
    "explanation": "报警处理要先安全、再定位原因、最后复位；屏蔽报警会掩盖风险。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "报警处理",
    "knowledgePoints": [
      "智能产线",
      "报警处理"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "报警处理",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_113",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "安全门互锁可以在调试时长期短接以提高效率。（判断 6）",
    "question": "安全门互锁可以在调试时长期短接以提高效率。（判断 6）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。安全互锁不能随意短接，调试也应按安全模式和授权流程进行。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全联锁",
    "knowledgePoints": [
      "智能产线",
      "安全联锁"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "安全联锁",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_114",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "HMI 可以显示报警、状态和操作画面。（判断 6）",
    "question": "HMI 可以显示报警、状态和操作画面。（判断 6）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。HMI 是现场人机交互界面，用于状态显示、参数设定和报警处理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "HMI",
    "knowledgePoints": [
      "智能产线",
      "HMI"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "HMI",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_115",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "产线瓶颈通常是耗时最长或限制产出的工序。（判断 6）",
    "question": "产线瓶颈通常是耗时最长或限制产出的工序。（判断 6）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。瓶颈决定整线最大产能，改善瓶颈比优化非瓶颈更有效。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "瓶颈工序",
    "knowledgePoints": [
      "智能产线",
      "瓶颈工序"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "瓶颈工序",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_116",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "产线节拍通常受 ____ 工序限制。（填空 6）",
    "question": "产线节拍通常受 ____ 工序限制。（填空 6）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "瓶颈",
    "acceptableAnswers": [
      "瓶颈",
      "瓶颈工序"
    ],
    "fillAnswers": [
      "瓶颈",
      "瓶颈工序"
    ],
    "answerText": "瓶颈",
    "explanation": "瓶颈工序耗时最长或能力最低，决定整线输出能力。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线节拍",
    "knowledgePoints": [
      "智能产线",
      "产线节拍"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线节拍",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_117",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "机器人与工站之间的请求、允许、完成等信号常称为 ____ 信号。（填空 6）",
    "question": "机器人与工站之间的请求、允许、完成等信号常称为 ____ 信号。（填空 6）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "握手",
    "acceptableAnswers": [
      "握手",
      "握手信号"
    ],
    "fillAnswers": [
      "握手",
      "握手信号"
    ],
    "answerText": "握手",
    "explanation": "握手信号保证设备动作顺序清楚，避免同时动作或等待失控。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "设备协同",
    "knowledgePoints": [
      "智能产线",
      "设备协同"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "设备协同",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_118",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "智能产线中用于生产计划、追溯和工单管理的系统常称为 ____。（填空 6）",
    "question": "智能产线中用于生产计划、追溯和工单管理的系统常称为 ____。（填空 6）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "MES",
    "acceptableAnswers": [
      "MES",
      "mes"
    ],
    "fillAnswers": [
      "MES",
      "mes"
    ],
    "answerText": "MES",
    "explanation": "MES 连接生产计划、执行和追溯，是智能制造信息层的重要系统。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "MES",
    "knowledgePoints": [
      "智能产线",
      "MES"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "MES",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_119",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将智能装配产线一般流程排序，答案写数字串。（流程 6）",
    "question": "将智能装配产线一般流程排序，答案写数字串。（流程 6）",
    "promptCode": "1. 分拣\n2. 上料\n3. 检测\n4. 定位\n5. 加工或装配\n6. 下料",
    "options": [],
    "answerIndex": -1,
    "answer": "2-4-5-3-1-6",
    "acceptableAnswers": [
      "2-4-5-3-1-6",
      "245316"
    ],
    "fillAnswers": [
      "2-4-5-3-1-6",
      "245316"
    ],
    "answerText": "2-4-5-3-1-6",
    "explanation": "典型流程是先上料并定位，再加工或装配，随后检测，根据结果分拣，最后下料。",
    "image": "/assets/questions/line/production_line_flow_001.svg",
    "imageUrl": "/assets/questions/line/production_line_flow_001.svg",
    "imageAlt": "智能产线基本流程",
    "imageDescription": "常见流程：上料、定位、加工、检测、分拣、下料。",
    "knowledgePoint": "产线流程",
    "knowledgePoints": [
      "智能产线",
      "产线流程"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_120",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将产线报警处理流程排序，答案写数字串。（流程 6）",
    "question": "将产线报警处理流程排序，答案写数字串。（流程 6）",
    "promptCode": "1. 查明原因\n2. 确认人员安全\n3. 查看报警代码\n4. 排除故障\n5. 复位并试运行",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-1-4-5",
    "acceptableAnswers": [
      "2-3-1-4-5",
      "23145"
    ],
    "fillAnswers": [
      "2-3-1-4-5",
      "23145"
    ],
    "answerText": "2-3-1-4-5",
    "explanation": "报警处理先确保人员安全，再查看报警代码、查明原因、排除故障，最后复位试运行。",
    "image": "/assets/questions/line/production_robot_ready_001.svg",
    "imageUrl": "/assets/questions/line/production_robot_ready_001.svg",
    "imageAlt": "机器人与输送线握手",
    "imageDescription": "设备协同需要请求、允许、完成、复位等握手信号。",
    "knowledgePoint": "报警处理流程",
    "knowledgePoints": [
      "智能产线",
      "报警处理流程"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "报警处理流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_121",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 7）",
    "question": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 7）",
    "options": [
      "加工工序",
      "检测工序",
      "分拣工序",
      "随机决定"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "产线节拍由最长或瓶颈工序决定，本例加工 52s 最长。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线节拍",
    "knowledgePoints": [
      "智能产线",
      "产线节拍"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线节拍",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_122",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "安全光栅被遮挡时，设备应如何响应？（任务 7）",
    "question": "安全光栅被遮挡时，设备应如何响应？（任务 7）",
    "options": [
      "提高速度绕过",
      "关闭报警继续运行",
      "只记录不处理",
      "停止危险运动或禁止启动"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "安全光栅属于安全防护装置，被遮挡时应使危险运动停止或禁止启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全联锁",
    "knowledgePoints": [
      "智能产线",
      "安全联锁"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "安全联锁",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_123",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "MES、PLC、HMI 三者关系较合理的是？（任务 7）",
    "question": "MES、PLC、HMI 三者关系较合理的是？（任务 7）",
    "options": [
      "HMI 只负责润滑",
      "PLC 只存放图纸",
      "MES 管生产信息，PLC 控制设备，HMI 负责人机交互",
      "MES 直接代替所有传感器"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "MES 偏生产管理和追溯，PLC 执行控制，HMI 用于显示、操作和报警交互。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "MES/PLC/HMI",
    "knowledgePoints": [
      "智能产线",
      "MES/PLC/HMI"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "MES/PLC/HMI",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_124",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "智能产线中设置缓存区的主要作用是什么？（任务 7）",
    "question": "智能产线中设置缓存区的主要作用是什么？（任务 7）",
    "options": [
      "改变材料硬度",
      "吸收上下游节拍波动",
      "替代所有检测",
      "取消安全门"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "缓存区可以缓冲前后工序节拍差，减少短暂停顿对整线的影响。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "缓存区",
    "knowledgePoints": [
      "智能产线",
      "缓存区"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "缓存区",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_125",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 7）",
    "question": "机器人已完成抓取，但输送线没有启动，HMI 显示“下游未就绪”，应优先检查什么？（任务 7）",
    "options": [
      "下游工站就绪信号和互锁条件",
      "零件表面粗糙度",
      "刀具补偿号",
      "图纸比例"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "提示下游未就绪时，应先查下游工站、传感器和互锁信号，确认是否允许输送线启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "工站联动",
    "knowledgePoints": [
      "智能产线",
      "工站联动"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "工站联动",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_126",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 7）（工位 126）",
    "question": "一条产线各工序中加工 52s、检测 28s、分拣 40s，节拍通常由哪个决定？（任务 7）（工位 126）",
    "options": [
      "检测工序",
      "分拣工序",
      "随机决定",
      "加工工序"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "产线节拍由最长或瓶颈工序决定，本例加工 52s 最长。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线节拍",
    "knowledgePoints": [
      "智能产线",
      "产线节拍"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线节拍",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_127",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "安全光栅被遮挡时，设备应如何响应？（任务 7）（工位 127）",
    "question": "安全光栅被遮挡时，设备应如何响应？（任务 7）（工位 127）",
    "options": [
      "关闭报警继续运行",
      "只记录不处理",
      "停止危险运动或禁止启动",
      "提高速度绕过"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "安全光栅属于安全防护装置，被遮挡时应使危险运动停止或禁止启动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全联锁",
    "knowledgePoints": [
      "智能产线",
      "安全联锁"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "安全联锁",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_128",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "MES、PLC、HMI 三者关系较合理的是？（任务 7）（工位 128）",
    "question": "MES、PLC、HMI 三者关系较合理的是？（任务 7）（工位 128）",
    "options": [
      "PLC 只存放图纸",
      "MES 管生产信息，PLC 控制设备，HMI 负责人机交互",
      "MES 直接代替所有传感器",
      "HMI 只负责润滑"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "MES 偏生产管理和追溯，PLC 执行控制，HMI 用于显示、操作和报警交互。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "MES/PLC/HMI",
    "knowledgePoints": [
      "智能产线",
      "MES/PLC/HMI"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "MES/PLC/HMI",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "zncx_129",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-3",
    "type": "多选题",
    "difficulty": "medium",
    "text": "智能产线基本组成通常包括哪些？（多选 7）",
    "question": "智能产线基本组成通常包括哪些？（多选 7）",
    "options": [
      "传感器",
      "执行器",
      "PLC/HMI",
      "随机摆放的杂物"
    ],
    "answerIndex": [
      0,
      1,
      2
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "acceptableAnswers": [],
    "explanation": "感知、执行和控制/交互是产线基础；现场杂物会影响安全和5S。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "产线组成",
    "knowledgePoints": [
      "智能产线",
      "产线组成"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "产线组成",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "zncx_130",
    "category": "智能产线区",
    "area": "智能产线区",
    "module": "智能产线",
    "moduleName": "智能产线区",
    "levelId": "line-1",
    "type": "多选题",
    "difficulty": "hard",
    "text": "产线报警处理时应注意哪些？（多选 7）",
    "question": "产线报警处理时应注意哪些？（多选 7）",
    "options": [
      "保证人员安全",
      "查明原因后复位",
      "直接屏蔽报警",
      "确认报警代码"
    ],
    "answerIndex": [
      0,
      1,
      3
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "acceptableAnswers": [],
    "explanation": "报警处理要先安全、再定位原因、最后复位；屏蔽报警会掩盖风险。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "报警处理",
    "knowledgePoints": [
      "智能产线",
      "报警处理"
    ],
    "tags": [
      "智能产线区",
      "智能产线",
      "报警处理",
      "多选题"
    ],
    "isMultiple": true
  }
];

export const intelligentLineQuestionsStats = {
  "total": 130,
  "type": {
    "场景分析题": 14,
    "单选题": 42,
    "多选题": 26,
    "判断题": 18,
    "填空题": 18,
    "process_order": 12
  },
  "difficulty": {
    "easy": 65,
    "medium": 52,
    "hard": 13
  },
  "imageCount": 16,
  "dedupedTextCount": 27
};
