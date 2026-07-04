import type { Question } from "./questions";

export const sensorDetectionQuestions: Question[] = [
  {
    "id": "cgqjc_001",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "输送线上检测金属工件到位，优先选哪种传感器？（任务 1）",
    "question": "输送线上检测金属工件到位，优先选哪种传感器？（任务 1）",
    "options": [
      "电感式接近开关",
      "热电偶",
      "压力变送器",
      "编码器"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "电感式接近开关对金属目标响应稳定，适合到位检测；热电偶测温，压力变送器测压力。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接近开关",
    "knowledgePoints": [
      "传感器检测",
      "接近开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "接近开关",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_002",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 1）",
    "question": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 1）",
    "options": [
      "把传感器拆掉",
      "换成热继电器",
      "只提高输送线速度",
      "选用适合透明体检测的光电方案并重新调试灵敏度"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "透明物体反射弱且透光，需选专用光电或调整安装方式，不能简单提高速度。",
    "image": "/assets/questions/sensor/sensor_photoelectric_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_photoelectric_001.svg",
    "imageAlt": "对射光电检测",
    "imageDescription": "对射光电适合稳定检测经过光束的工件。",
    "knowledgePoint": "光电传感器选型",
    "knowledgePoints": [
      "传感器检测",
      "光电传感器选型"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电传感器选型",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_003",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 1）",
    "question": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 1）",
    "options": [
      "1.2MPa",
      "1.6MPa",
      "0.4MPa",
      "0.8MPa"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "12mA 位于 4-20mA 量程中点，对应压力也为量程中点 0.8MPa。",
    "image": "/assets/questions/sensor/sensor_analog_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_analog_001.svg",
    "imageAlt": "4-20mA 压力信号",
    "imageDescription": "线性换算：12mA 位于 4 和 20 的中点，对应 0.8MPa。",
    "knowledgePoint": "模拟量换算",
    "knowledgePoints": [
      "传感器检测",
      "模拟量换算"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量换算",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_004",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "气缸两端位置检测常用什么元件？（任务 1）",
    "question": "气缸两端位置检测常用什么元件？（任务 1）",
    "options": [
      "粗糙度仪",
      "磁性开关",
      "千分尺",
      "断路器"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "气缸活塞常带磁环，两端用磁性开关检测伸出和缩回到位。",
    "image": "/assets/questions/sensor/sensor_cylinder_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_cylinder_001.svg",
    "imageAlt": "气缸磁性开关",
    "imageDescription": "气缸两端位置常用磁性开关检测。",
    "knowledgePoint": "磁性开关",
    "knowledgePoints": [
      "传感器检测",
      "磁性开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "磁性开关",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_005",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 1）",
    "question": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 1）",
    "options": [
      "PLC 输入公共端接法",
      "零件硬度",
      "刀具半径",
      "图纸比例"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "PNP/NPN 输出方式必须与 PLC 输入公共端匹配，否则信号可能无法被正确识别。",
    "image": "/assets/questions/sensor/sensor_pnp_npn_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_pnp_npn_001.svg",
    "imageAlt": "PNP/NPN 输出简化",
    "imageDescription": "PNP/NPN 要与 PLC 输入公共端接法匹配。",
    "knowledgePoint": "PNP/NPN 接线",
    "knowledgePoints": [
      "传感器检测",
      "PNP/NPN 接线"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "PNP/NPN 接线",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_006",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "输送线上检测金属工件到位，优先选哪种传感器？（任务 1）（工位 006）",
    "question": "输送线上检测金属工件到位，优先选哪种传感器？（任务 1）（工位 006）",
    "options": [
      "热电偶",
      "压力变送器",
      "编码器",
      "电感式接近开关"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "电感式接近开关对金属目标响应稳定，适合到位检测；热电偶测温，压力变送器测压力。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接近开关",
    "knowledgePoints": [
      "传感器检测",
      "接近开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "接近开关",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_007",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 1）（工位 007）",
    "question": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 1）（工位 007）",
    "options": [
      "换成热继电器",
      "只提高输送线速度",
      "选用适合透明体检测的光电方案并重新调试灵敏度",
      "把传感器拆掉"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "透明物体反射弱且透光，需选专用光电或调整安装方式，不能简单提高速度。",
    "image": "/assets/questions/sensor/sensor_photoelectric_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_photoelectric_001.svg",
    "imageAlt": "对射光电检测",
    "imageDescription": "对射光电适合稳定检测经过光束的工件。",
    "knowledgePoint": "光电传感器选型",
    "knowledgePoints": [
      "传感器检测",
      "光电传感器选型"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电传感器选型",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_008",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 1）（工位 008）",
    "question": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 1）（工位 008）",
    "options": [
      "1.6MPa",
      "0.4MPa",
      "0.8MPa",
      "1.2MPa"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "12mA 位于 4-20mA 量程中点，对应压力也为量程中点 0.8MPa。",
    "image": "/assets/questions/sensor/sensor_analog_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_analog_001.svg",
    "imageAlt": "4-20mA 压力信号",
    "imageDescription": "线性换算：12mA 位于 4 和 20 的中点，对应 0.8MPa。",
    "knowledgePoint": "模拟量换算",
    "knowledgePoints": [
      "传感器检测",
      "模拟量换算"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量换算",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_009",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "多选题",
    "difficulty": "medium",
    "text": "传感器信号时有时无，可能原因有哪些？（多选 1）",
    "question": "传感器信号时有时无，可能原因有哪些？（多选 1）",
    "options": [
      "安装距离接近临界值",
      "线缆接触不良",
      "现场干扰较强",
      "产品名称太长"
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
    "explanation": "距离、接线和干扰都会造成信号不稳定；产品名称无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "信号异常排查",
    "knowledgePoints": [
      "传感器检测",
      "信号异常排查"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "信号异常排查",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_010",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "多选题",
    "difficulty": "hard",
    "text": "下列哪些属于模拟量信号？（多选 1）",
    "question": "下列哪些属于模拟量信号？（多选 1）",
    "options": [
      "4-20mA",
      "1-5V",
      "启动按钮常开触点",
      "0-10V"
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
    "explanation": "电压和电流连续量属于模拟量；按钮触点是开关量。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量信号",
    "knowledgePoints": [
      "传感器检测",
      "模拟量信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量信号",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_011",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "多选题",
    "difficulty": "easy",
    "text": "选择光电传感器安装位置时应考虑哪些因素？（多选 1）",
    "question": "选择光电传感器安装位置时应考虑哪些因素？（多选 1）",
    "options": [
      "工件颜色/透明度",
      "接触器线圈型号",
      "检测距离",
      "背景反光"
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
    "explanation": "光电检测受距离、背景和目标表面影响；接触器型号不是光电安装条件。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "光电安装",
    "knowledgePoints": [
      "传感器检测",
      "光电安装"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电安装",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_012",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "多选题",
    "difficulty": "easy",
    "text": "传感器信号时有时无，可能原因有哪些？（多选 1）（工位 012）",
    "question": "传感器信号时有时无，可能原因有哪些？（多选 1）（工位 012）",
    "options": [
      "产品名称太长",
      "安装距离接近临界值",
      "线缆接触不良",
      "现场干扰较强"
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
    "explanation": "距离、接线和干扰都会造成信号不稳定；产品名称无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "信号异常排查",
    "knowledgePoints": [
      "传感器检测",
      "信号异常排查"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "信号异常排查",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_013",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "限位开关属于接触式位置检测元件。（判断 1）",
    "question": "限位开关属于接触式位置检测元件。（判断 1）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。限位开关通过机械触碰动作，适合行程终点等位置检测。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "限位开关",
    "knowledgePoints": [
      "传感器检测",
      "限位开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "限位开关",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_014",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "4-20mA 信号的 4mA 通常可作为断线判断的基础。（判断 1）",
    "question": "4-20mA 信号的 4mA 通常可作为断线判断的基础。（判断 1）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。工程上常用 4mA 作为零点，低于正常范围可提示断线或故障。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "4-20mA 信号",
    "knowledgePoints": [
      "传感器检测",
      "4-20mA 信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "4-20mA 信号",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_015",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "NPN 和 PNP 传感器可以不看 PLC 公共端随意互换。（判断 1）",
    "question": "NPN 和 PNP 传感器可以不看 PLC 公共端随意互换。（判断 1）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。NPN/PNP 输出接法不同，必须匹配 PLC 输入公共端。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "传感器接线",
    "knowledgePoints": [
      "传感器检测",
      "传感器接线"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "传感器接线",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_016",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "工业现场常用的电流型模拟量标准信号是 ____ mA。（填空 1）",
    "question": "工业现场常用的电流型模拟量标准信号是 ____ mA。（填空 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "4-20",
    "acceptableAnswers": [
      "4-20",
      "4-20mA",
      "4~20"
    ],
    "fillAnswers": [
      "4-20",
      "4-20mA",
      "4~20"
    ],
    "answerText": "4-20",
    "explanation": "4-20mA 抗干扰能力较好，常用于压力、液位等变送器。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量信号",
    "knowledgePoints": [
      "传感器检测",
      "模拟量信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量信号",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_017",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "检测金属有无的非接触开关常用 ____ 式接近开关。（填空 1）",
    "question": "检测金属有无的非接触开关常用 ____ 式接近开关。（填空 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "电感",
    "acceptableAnswers": [
      "电感",
      "电感式"
    ],
    "fillAnswers": [
      "电感",
      "电感式"
    ],
    "answerText": "电感",
    "explanation": "电感式接近开关对金属目标敏感，常用于到位、有无检测。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接近开关",
    "knowledgePoints": [
      "传感器检测",
      "接近开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "接近开关",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_018",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "气缸磁性开关一般安装在气缸 ____ 位置附近。（填空 1）",
    "question": "气缸磁性开关一般安装在气缸 ____ 位置附近。（填空 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "两端",
    "acceptableAnswers": [
      "两端",
      "端部",
      "行程两端"
    ],
    "fillAnswers": [
      "两端",
      "端部",
      "行程两端"
    ],
    "answerText": "两端",
    "explanation": "磁性开关用于确认气缸伸出、缩回到位，通常布置在两端。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "磁性开关",
    "knowledgePoints": [
      "传感器检测",
      "磁性开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "磁性开关",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_019",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将传感器信号不稳定排查步骤排序，答案写数字串。（流程 1）",
    "question": "将传感器信号不稳定排查步骤排序，答案写数字串。（流程 1）",
    "promptCode": "1. 检查安装距离\n2. 查看 PLC 输入状态\n3. 检查线缆和端子\n4. 排查干扰源\n5. 重新固定并试运行",
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
    "explanation": "先看 PLC 输入状态确认故障现象，再查线缆端子、安装距离和干扰源，最后固定并试运行。",
    "image": "/assets/questions/sensor/sensor_photoelectric_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_photoelectric_001.svg",
    "imageAlt": "对射光电检测",
    "imageDescription": "对射光电适合稳定检测经过光束的工件。",
    "knowledgePoint": "传感器排故流程",
    "knowledgePoints": [
      "传感器检测",
      "传感器排故流程"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "传感器排故流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_020",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将模拟量压力信号校验流程排序，答案写数字串。（流程 1）",
    "question": "将模拟量压力信号校验流程排序，答案写数字串。（流程 1）",
    "promptCode": "1. 对照量程换算\n2. 接入标准信号或压力源\n3. 检查 4mA 零点\n4. 检查 20mA 满量程\n5. 记录偏差",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-1-5",
    "acceptableAnswers": [
      "2-3-4-1-5",
      "23415"
    ],
    "fillAnswers": [
      "2-3-4-1-5",
      "23415"
    ],
    "answerText": "2-3-4-1-5",
    "explanation": "校验要先接标准源，再检查零点和满量程，按量程关系换算中间点，最后记录偏差。",
    "image": "/assets/questions/sensor/sensor_analog_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_analog_001.svg",
    "imageAlt": "4-20mA 压力信号",
    "imageDescription": "线性换算：12mA 位于 4 和 20 的中点，对应 0.8MPa。",
    "knowledgePoint": "模拟量校验",
    "knowledgePoints": [
      "传感器检测",
      "模拟量校验"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量校验",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_021",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 2）",
    "question": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 2）",
    "options": [
      "选用适合透明体检测的光电方案并重新调试灵敏度",
      "把传感器拆掉",
      "换成热继电器",
      "只提高输送线速度"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "透明物体反射弱且透光，需选专用光电或调整安装方式，不能简单提高速度。",
    "image": "/assets/questions/sensor/sensor_photoelectric_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_photoelectric_001.svg",
    "imageAlt": "对射光电检测",
    "imageDescription": "对射光电适合稳定检测经过光束的工件。",
    "knowledgePoint": "光电传感器选型",
    "knowledgePoints": [
      "传感器检测",
      "光电传感器选型"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电传感器选型",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_022",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 2）",
    "question": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 2）",
    "options": [
      "0.8MPa",
      "1.2MPa",
      "1.6MPa",
      "0.4MPa"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "12mA 位于 4-20mA 量程中点，对应压力也为量程中点 0.8MPa。",
    "image": "/assets/questions/sensor/sensor_analog_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_analog_001.svg",
    "imageAlt": "4-20mA 压力信号",
    "imageDescription": "线性换算：12mA 位于 4 和 20 的中点，对应 0.8MPa。",
    "knowledgePoint": "模拟量换算",
    "knowledgePoints": [
      "传感器检测",
      "模拟量换算"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量换算",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_023",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "气缸两端位置检测常用什么元件？（任务 2）",
    "question": "气缸两端位置检测常用什么元件？（任务 2）",
    "options": [
      "断路器",
      "粗糙度仪",
      "磁性开关",
      "千分尺"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "气缸活塞常带磁环，两端用磁性开关检测伸出和缩回到位。",
    "image": "/assets/questions/sensor/sensor_cylinder_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_cylinder_001.svg",
    "imageAlt": "气缸磁性开关",
    "imageDescription": "气缸两端位置常用磁性开关检测。",
    "knowledgePoint": "磁性开关",
    "knowledgePoints": [
      "传感器检测",
      "磁性开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "磁性开关",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_024",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 2）",
    "question": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 2）",
    "options": [
      "图纸比例",
      "PLC 输入公共端接法",
      "零件硬度",
      "刀具半径"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "PNP/NPN 输出方式必须与 PLC 输入公共端匹配，否则信号可能无法被正确识别。",
    "image": "/assets/questions/sensor/sensor_pnp_npn_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_pnp_npn_001.svg",
    "imageAlt": "PNP/NPN 输出简化",
    "imageDescription": "PNP/NPN 要与 PLC 输入公共端接法匹配。",
    "knowledgePoint": "PNP/NPN 接线",
    "knowledgePoints": [
      "传感器检测",
      "PNP/NPN 接线"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "PNP/NPN 接线",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_025",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "输送线上检测金属工件到位，优先选哪种传感器？（任务 2）",
    "question": "输送线上检测金属工件到位，优先选哪种传感器？（任务 2）",
    "options": [
      "电感式接近开关",
      "热电偶",
      "压力变送器",
      "编码器"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "电感式接近开关对金属目标响应稳定，适合到位检测；热电偶测温，压力变送器测压力。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接近开关",
    "knowledgePoints": [
      "传感器检测",
      "接近开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "接近开关",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_026",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 2）（工位 026）",
    "question": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 2）（工位 026）",
    "options": [
      "把传感器拆掉",
      "换成热继电器",
      "只提高输送线速度",
      "选用适合透明体检测的光电方案并重新调试灵敏度"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "透明物体反射弱且透光，需选专用光电或调整安装方式，不能简单提高速度。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "光电传感器选型",
    "knowledgePoints": [
      "传感器检测",
      "光电传感器选型"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电传感器选型",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_027",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 2）（工位 027）",
    "question": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 2）（工位 027）",
    "options": [
      "1.2MPa",
      "1.6MPa",
      "0.4MPa",
      "0.8MPa"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "12mA 位于 4-20mA 量程中点，对应压力也为量程中点 0.8MPa。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量换算",
    "knowledgePoints": [
      "传感器检测",
      "模拟量换算"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量换算",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_028",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "气缸两端位置检测常用什么元件？（任务 2）（工位 028）",
    "question": "气缸两端位置检测常用什么元件？（任务 2）（工位 028）",
    "options": [
      "粗糙度仪",
      "磁性开关",
      "千分尺",
      "断路器"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "气缸活塞常带磁环，两端用磁性开关检测伸出和缩回到位。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "磁性开关",
    "knowledgePoints": [
      "传感器检测",
      "磁性开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "磁性开关",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_029",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "多选题",
    "difficulty": "medium",
    "text": "选择光电传感器安装位置时应考虑哪些因素？（多选 2）",
    "question": "选择光电传感器安装位置时应考虑哪些因素？（多选 2）",
    "options": [
      "检测距离",
      "背景反光",
      "工件颜色/透明度",
      "接触器线圈型号"
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
    "explanation": "光电检测受距离、背景和目标表面影响；接触器型号不是光电安装条件。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "光电安装",
    "knowledgePoints": [
      "传感器检测",
      "光电安装"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电安装",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_030",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "多选题",
    "difficulty": "hard",
    "text": "传感器信号时有时无，可能原因有哪些？（多选 2）",
    "question": "传感器信号时有时无，可能原因有哪些？（多选 2）",
    "options": [
      "线缆接触不良",
      "现场干扰较强",
      "产品名称太长",
      "安装距离接近临界值"
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
    "explanation": "距离、接线和干扰都会造成信号不稳定；产品名称无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "信号异常排查",
    "knowledgePoints": [
      "传感器检测",
      "信号异常排查"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "信号异常排查",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_031",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "多选题",
    "difficulty": "easy",
    "text": "下列哪些属于模拟量信号？（多选 2）",
    "question": "下列哪些属于模拟量信号？（多选 2）",
    "options": [
      "1-5V",
      "启动按钮常开触点",
      "0-10V",
      "4-20mA"
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
    "explanation": "电压和电流连续量属于模拟量；按钮触点是开关量。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量信号",
    "knowledgePoints": [
      "传感器检测",
      "模拟量信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量信号",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_032",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "多选题",
    "difficulty": "easy",
    "text": "选择光电传感器安装位置时应考虑哪些因素？（多选 2）（工位 032）",
    "question": "选择光电传感器安装位置时应考虑哪些因素？（多选 2）（工位 032）",
    "options": [
      "接触器线圈型号",
      "检测距离",
      "背景反光",
      "工件颜色/透明度"
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
    "explanation": "光电检测受距离、背景和目标表面影响；接触器型号不是光电安装条件。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "光电安装",
    "knowledgePoints": [
      "传感器检测",
      "光电安装"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电安装",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_033",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "NPN 和 PNP 传感器可以不看 PLC 公共端随意互换。（判断 2）",
    "question": "NPN 和 PNP 传感器可以不看 PLC 公共端随意互换。（判断 2）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。NPN/PNP 输出接法不同，必须匹配 PLC 输入公共端。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "传感器接线",
    "knowledgePoints": [
      "传感器检测",
      "传感器接线"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "传感器接线",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_034",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "限位开关属于接触式位置检测元件。（判断 2）",
    "question": "限位开关属于接触式位置检测元件。（判断 2）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。限位开关通过机械触碰动作，适合行程终点等位置检测。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "限位开关",
    "knowledgePoints": [
      "传感器检测",
      "限位开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "限位开关",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_035",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "4-20mA 信号的 4mA 通常可作为断线判断的基础。（判断 2）",
    "question": "4-20mA 信号的 4mA 通常可作为断线判断的基础。（判断 2）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。工程上常用 4mA 作为零点，低于正常范围可提示断线或故障。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "4-20mA 信号",
    "knowledgePoints": [
      "传感器检测",
      "4-20mA 信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "4-20mA 信号",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_036",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "气缸磁性开关一般安装在气缸 ____ 位置附近。（填空 2）",
    "question": "气缸磁性开关一般安装在气缸 ____ 位置附近。（填空 2）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "两端",
    "acceptableAnswers": [
      "两端",
      "端部",
      "行程两端"
    ],
    "fillAnswers": [
      "两端",
      "端部",
      "行程两端"
    ],
    "answerText": "两端",
    "explanation": "磁性开关用于确认气缸伸出、缩回到位，通常布置在两端。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "磁性开关",
    "knowledgePoints": [
      "传感器检测",
      "磁性开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "磁性开关",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_037",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "工业现场常用的电流型模拟量标准信号是 ____ mA。（填空 2）",
    "question": "工业现场常用的电流型模拟量标准信号是 ____ mA。（填空 2）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "4-20",
    "acceptableAnswers": [
      "4-20",
      "4-20mA",
      "4~20"
    ],
    "fillAnswers": [
      "4-20",
      "4-20mA",
      "4~20"
    ],
    "answerText": "4-20",
    "explanation": "4-20mA 抗干扰能力较好，常用于压力、液位等变送器。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量信号",
    "knowledgePoints": [
      "传感器检测",
      "模拟量信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量信号",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_038",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "检测金属有无的非接触开关常用 ____ 式接近开关。（填空 2）",
    "question": "检测金属有无的非接触开关常用 ____ 式接近开关。（填空 2）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "电感",
    "acceptableAnswers": [
      "电感",
      "电感式"
    ],
    "fillAnswers": [
      "电感",
      "电感式"
    ],
    "answerText": "电感",
    "explanation": "电感式接近开关对金属目标敏感，常用于到位、有无检测。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接近开关",
    "knowledgePoints": [
      "传感器检测",
      "接近开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "接近开关",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_039",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将传感器信号不稳定排查步骤排序，答案写数字串。（流程 2）",
    "question": "将传感器信号不稳定排查步骤排序，答案写数字串。（流程 2）",
    "promptCode": "1. 检查安装距离\n2. 查看 PLC 输入状态\n3. 检查线缆和端子\n4. 排查干扰源\n5. 重新固定并试运行",
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
    "explanation": "先看 PLC 输入状态确认故障现象，再查线缆端子、安装距离和干扰源，最后固定并试运行。",
    "image": "/assets/questions/sensor/sensor_photoelectric_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_photoelectric_001.svg",
    "imageAlt": "对射光电检测",
    "imageDescription": "对射光电适合稳定检测经过光束的工件。",
    "knowledgePoint": "传感器排故流程",
    "knowledgePoints": [
      "传感器检测",
      "传感器排故流程"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "传感器排故流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_040",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将模拟量压力信号校验流程排序，答案写数字串。（流程 2）",
    "question": "将模拟量压力信号校验流程排序，答案写数字串。（流程 2）",
    "promptCode": "1. 对照量程换算\n2. 接入标准信号或压力源\n3. 检查 4mA 零点\n4. 检查 20mA 满量程\n5. 记录偏差",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-1-5",
    "acceptableAnswers": [
      "2-3-4-1-5",
      "23415"
    ],
    "fillAnswers": [
      "2-3-4-1-5",
      "23415"
    ],
    "answerText": "2-3-4-1-5",
    "explanation": "校验要先接标准源，再检查零点和满量程，按量程关系换算中间点，最后记录偏差。",
    "image": "/assets/questions/sensor/sensor_analog_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_analog_001.svg",
    "imageAlt": "4-20mA 压力信号",
    "imageDescription": "线性换算：12mA 位于 4 和 20 的中点，对应 0.8MPa。",
    "knowledgePoint": "模拟量校验",
    "knowledgePoints": [
      "传感器检测",
      "模拟量校验"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量校验",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_041",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 3）",
    "question": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 3）",
    "options": [
      "0.4MPa",
      "0.8MPa",
      "1.2MPa",
      "1.6MPa"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "12mA 位于 4-20mA 量程中点，对应压力也为量程中点 0.8MPa。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量换算",
    "knowledgePoints": [
      "传感器检测",
      "模拟量换算"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量换算",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_042",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "气缸两端位置检测常用什么元件？（任务 3）",
    "question": "气缸两端位置检测常用什么元件？（任务 3）",
    "options": [
      "千分尺",
      "断路器",
      "粗糙度仪",
      "磁性开关"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "气缸活塞常带磁环，两端用磁性开关检测伸出和缩回到位。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "磁性开关",
    "knowledgePoints": [
      "传感器检测",
      "磁性开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "磁性开关",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_043",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 3）",
    "question": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 3）",
    "options": [
      "刀具半径",
      "图纸比例",
      "PLC 输入公共端接法",
      "零件硬度"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "PNP/NPN 输出方式必须与 PLC 输入公共端匹配，否则信号可能无法被正确识别。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PNP/NPN 接线",
    "knowledgePoints": [
      "传感器检测",
      "PNP/NPN 接线"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "PNP/NPN 接线",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_044",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "输送线上检测金属工件到位，优先选哪种传感器？（任务 3）",
    "question": "输送线上检测金属工件到位，优先选哪种传感器？（任务 3）",
    "options": [
      "编码器",
      "电感式接近开关",
      "热电偶",
      "压力变送器"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "电感式接近开关对金属目标响应稳定，适合到位检测；热电偶测温，压力变送器测压力。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接近开关",
    "knowledgePoints": [
      "传感器检测",
      "接近开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "接近开关",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_045",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 3）",
    "question": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 3）",
    "options": [
      "选用适合透明体检测的光电方案并重新调试灵敏度",
      "把传感器拆掉",
      "换成热继电器",
      "只提高输送线速度"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "透明物体反射弱且透光，需选专用光电或调整安装方式，不能简单提高速度。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "光电传感器选型",
    "knowledgePoints": [
      "传感器检测",
      "光电传感器选型"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电传感器选型",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_046",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 3）（工位 046）",
    "question": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 3）（工位 046）",
    "options": [
      "0.8MPa",
      "1.2MPa",
      "1.6MPa",
      "0.4MPa"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "12mA 位于 4-20mA 量程中点，对应压力也为量程中点 0.8MPa。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量换算",
    "knowledgePoints": [
      "传感器检测",
      "模拟量换算"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量换算",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_047",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "气缸两端位置检测常用什么元件？（任务 3）（工位 047）",
    "question": "气缸两端位置检测常用什么元件？（任务 3）（工位 047）",
    "options": [
      "断路器",
      "粗糙度仪",
      "磁性开关",
      "千分尺"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "气缸活塞常带磁环，两端用磁性开关检测伸出和缩回到位。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "磁性开关",
    "knowledgePoints": [
      "传感器检测",
      "磁性开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "磁性开关",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_048",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 3）（工位 048）",
    "question": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 3）（工位 048）",
    "options": [
      "图纸比例",
      "PLC 输入公共端接法",
      "零件硬度",
      "刀具半径"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "PNP/NPN 输出方式必须与 PLC 输入公共端匹配，否则信号可能无法被正确识别。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PNP/NPN 接线",
    "knowledgePoints": [
      "传感器检测",
      "PNP/NPN 接线"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "PNP/NPN 接线",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_049",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "多选题",
    "difficulty": "medium",
    "text": "下列哪些属于模拟量信号？（多选 3）",
    "question": "下列哪些属于模拟量信号？（多选 3）",
    "options": [
      "0-10V",
      "4-20mA",
      "1-5V",
      "启动按钮常开触点"
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
    "explanation": "电压和电流连续量属于模拟量；按钮触点是开关量。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量信号",
    "knowledgePoints": [
      "传感器检测",
      "模拟量信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量信号",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_050",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "多选题",
    "difficulty": "hard",
    "text": "选择光电传感器安装位置时应考虑哪些因素？（多选 3）",
    "question": "选择光电传感器安装位置时应考虑哪些因素？（多选 3）",
    "options": [
      "背景反光",
      "工件颜色/透明度",
      "接触器线圈型号",
      "检测距离"
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
    "explanation": "光电检测受距离、背景和目标表面影响；接触器型号不是光电安装条件。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "光电安装",
    "knowledgePoints": [
      "传感器检测",
      "光电安装"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电安装",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_051",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "多选题",
    "difficulty": "easy",
    "text": "传感器信号时有时无，可能原因有哪些？（多选 3）",
    "question": "传感器信号时有时无，可能原因有哪些？（多选 3）",
    "options": [
      "现场干扰较强",
      "产品名称太长",
      "安装距离接近临界值",
      "线缆接触不良"
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
    "explanation": "距离、接线和干扰都会造成信号不稳定；产品名称无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "信号异常排查",
    "knowledgePoints": [
      "传感器检测",
      "信号异常排查"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "信号异常排查",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_052",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "多选题",
    "difficulty": "easy",
    "text": "下列哪些属于模拟量信号？（多选 3）（工位 052）",
    "question": "下列哪些属于模拟量信号？（多选 3）（工位 052）",
    "options": [
      "启动按钮常开触点",
      "0-10V",
      "4-20mA",
      "1-5V"
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
    "explanation": "电压和电流连续量属于模拟量；按钮触点是开关量。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量信号",
    "knowledgePoints": [
      "传感器检测",
      "模拟量信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量信号",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_053",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "4-20mA 信号的 4mA 通常可作为断线判断的基础。（判断 3）",
    "question": "4-20mA 信号的 4mA 通常可作为断线判断的基础。（判断 3）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。工程上常用 4mA 作为零点，低于正常范围可提示断线或故障。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "4-20mA 信号",
    "knowledgePoints": [
      "传感器检测",
      "4-20mA 信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "4-20mA 信号",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_054",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "NPN 和 PNP 传感器可以不看 PLC 公共端随意互换。（判断 3）",
    "question": "NPN 和 PNP 传感器可以不看 PLC 公共端随意互换。（判断 3）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。NPN/PNP 输出接法不同，必须匹配 PLC 输入公共端。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "传感器接线",
    "knowledgePoints": [
      "传感器检测",
      "传感器接线"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "传感器接线",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_055",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "限位开关属于接触式位置检测元件。（判断 3）",
    "question": "限位开关属于接触式位置检测元件。（判断 3）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。限位开关通过机械触碰动作，适合行程终点等位置检测。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "限位开关",
    "knowledgePoints": [
      "传感器检测",
      "限位开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "限位开关",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_056",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "检测金属有无的非接触开关常用 ____ 式接近开关。（填空 3）",
    "question": "检测金属有无的非接触开关常用 ____ 式接近开关。（填空 3）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "电感",
    "acceptableAnswers": [
      "电感",
      "电感式"
    ],
    "fillAnswers": [
      "电感",
      "电感式"
    ],
    "answerText": "电感",
    "explanation": "电感式接近开关对金属目标敏感，常用于到位、有无检测。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接近开关",
    "knowledgePoints": [
      "传感器检测",
      "接近开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "接近开关",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_057",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "气缸磁性开关一般安装在气缸 ____ 位置附近。（填空 3）",
    "question": "气缸磁性开关一般安装在气缸 ____ 位置附近。（填空 3）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "两端",
    "acceptableAnswers": [
      "两端",
      "端部",
      "行程两端"
    ],
    "fillAnswers": [
      "两端",
      "端部",
      "行程两端"
    ],
    "answerText": "两端",
    "explanation": "磁性开关用于确认气缸伸出、缩回到位，通常布置在两端。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "磁性开关",
    "knowledgePoints": [
      "传感器检测",
      "磁性开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "磁性开关",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_058",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "工业现场常用的电流型模拟量标准信号是 ____ mA。（填空 3）",
    "question": "工业现场常用的电流型模拟量标准信号是 ____ mA。（填空 3）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "4-20",
    "acceptableAnswers": [
      "4-20",
      "4-20mA",
      "4~20"
    ],
    "fillAnswers": [
      "4-20",
      "4-20mA",
      "4~20"
    ],
    "answerText": "4-20",
    "explanation": "4-20mA 抗干扰能力较好，常用于压力、液位等变送器。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量信号",
    "knowledgePoints": [
      "传感器检测",
      "模拟量信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量信号",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_059",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将传感器信号不稳定排查步骤排序，答案写数字串。（流程 3）",
    "question": "将传感器信号不稳定排查步骤排序，答案写数字串。（流程 3）",
    "promptCode": "1. 检查安装距离\n2. 查看 PLC 输入状态\n3. 检查线缆和端子\n4. 排查干扰源\n5. 重新固定并试运行",
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
    "explanation": "先看 PLC 输入状态确认故障现象，再查线缆端子、安装距离和干扰源，最后固定并试运行。",
    "image": "/assets/questions/sensor/sensor_photoelectric_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_photoelectric_001.svg",
    "imageAlt": "对射光电检测",
    "imageDescription": "对射光电适合稳定检测经过光束的工件。",
    "knowledgePoint": "传感器排故流程",
    "knowledgePoints": [
      "传感器检测",
      "传感器排故流程"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "传感器排故流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_060",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将模拟量压力信号校验流程排序，答案写数字串。（流程 3）",
    "question": "将模拟量压力信号校验流程排序，答案写数字串。（流程 3）",
    "promptCode": "1. 对照量程换算\n2. 接入标准信号或压力源\n3. 检查 4mA 零点\n4. 检查 20mA 满量程\n5. 记录偏差",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-1-5",
    "acceptableAnswers": [
      "2-3-4-1-5",
      "23415"
    ],
    "fillAnswers": [
      "2-3-4-1-5",
      "23415"
    ],
    "answerText": "2-3-4-1-5",
    "explanation": "校验要先接标准源，再检查零点和满量程，按量程关系换算中间点，最后记录偏差。",
    "image": "/assets/questions/sensor/sensor_analog_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_analog_001.svg",
    "imageAlt": "4-20mA 压力信号",
    "imageDescription": "线性换算：12mA 位于 4 和 20 的中点，对应 0.8MPa。",
    "knowledgePoint": "模拟量校验",
    "knowledgePoints": [
      "传感器检测",
      "模拟量校验"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量校验",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_061",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "气缸两端位置检测常用什么元件？（任务 4）",
    "question": "气缸两端位置检测常用什么元件？（任务 4）",
    "options": [
      "磁性开关",
      "千分尺",
      "断路器",
      "粗糙度仪"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "气缸活塞常带磁环，两端用磁性开关检测伸出和缩回到位。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "磁性开关",
    "knowledgePoints": [
      "传感器检测",
      "磁性开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "磁性开关",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_062",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 4）",
    "question": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 4）",
    "options": [
      "零件硬度",
      "刀具半径",
      "图纸比例",
      "PLC 输入公共端接法"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "PNP/NPN 输出方式必须与 PLC 输入公共端匹配，否则信号可能无法被正确识别。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PNP/NPN 接线",
    "knowledgePoints": [
      "传感器检测",
      "PNP/NPN 接线"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "PNP/NPN 接线",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_063",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "输送线上检测金属工件到位，优先选哪种传感器？（任务 4）",
    "question": "输送线上检测金属工件到位，优先选哪种传感器？（任务 4）",
    "options": [
      "压力变送器",
      "编码器",
      "电感式接近开关",
      "热电偶"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "电感式接近开关对金属目标响应稳定，适合到位检测；热电偶测温，压力变送器测压力。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接近开关",
    "knowledgePoints": [
      "传感器检测",
      "接近开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "接近开关",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_064",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 4）",
    "question": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 4）",
    "options": [
      "只提高输送线速度",
      "选用适合透明体检测的光电方案并重新调试灵敏度",
      "把传感器拆掉",
      "换成热继电器"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "透明物体反射弱且透光，需选专用光电或调整安装方式，不能简单提高速度。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "光电传感器选型",
    "knowledgePoints": [
      "传感器检测",
      "光电传感器选型"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电传感器选型",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_065",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 4）",
    "question": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 4）",
    "options": [
      "0.4MPa",
      "0.8MPa",
      "1.2MPa",
      "1.6MPa"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "12mA 位于 4-20mA 量程中点，对应压力也为量程中点 0.8MPa。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量换算",
    "knowledgePoints": [
      "传感器检测",
      "模拟量换算"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量换算",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_066",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "气缸两端位置检测常用什么元件？（任务 4）（工位 066）",
    "question": "气缸两端位置检测常用什么元件？（任务 4）（工位 066）",
    "options": [
      "千分尺",
      "断路器",
      "粗糙度仪",
      "磁性开关"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "气缸活塞常带磁环，两端用磁性开关检测伸出和缩回到位。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "磁性开关",
    "knowledgePoints": [
      "传感器检测",
      "磁性开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "磁性开关",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_067",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 4）（工位 067）",
    "question": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 4）（工位 067）",
    "options": [
      "刀具半径",
      "图纸比例",
      "PLC 输入公共端接法",
      "零件硬度"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "PNP/NPN 输出方式必须与 PLC 输入公共端匹配，否则信号可能无法被正确识别。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PNP/NPN 接线",
    "knowledgePoints": [
      "传感器检测",
      "PNP/NPN 接线"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "PNP/NPN 接线",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_068",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "输送线上检测金属工件到位，优先选哪种传感器？（任务 4）（工位 068）",
    "question": "输送线上检测金属工件到位，优先选哪种传感器？（任务 4）（工位 068）",
    "options": [
      "编码器",
      "电感式接近开关",
      "热电偶",
      "压力变送器"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "电感式接近开关对金属目标响应稳定，适合到位检测；热电偶测温，压力变送器测压力。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接近开关",
    "knowledgePoints": [
      "传感器检测",
      "接近开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "接近开关",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_069",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "多选题",
    "difficulty": "medium",
    "text": "传感器信号时有时无，可能原因有哪些？（多选 4）",
    "question": "传感器信号时有时无，可能原因有哪些？（多选 4）",
    "options": [
      "安装距离接近临界值",
      "线缆接触不良",
      "现场干扰较强",
      "产品名称太长"
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
    "explanation": "距离、接线和干扰都会造成信号不稳定；产品名称无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "信号异常排查",
    "knowledgePoints": [
      "传感器检测",
      "信号异常排查"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "信号异常排查",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_070",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "多选题",
    "difficulty": "hard",
    "text": "下列哪些属于模拟量信号？（多选 4）",
    "question": "下列哪些属于模拟量信号？（多选 4）",
    "options": [
      "4-20mA",
      "1-5V",
      "启动按钮常开触点",
      "0-10V"
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
    "explanation": "电压和电流连续量属于模拟量；按钮触点是开关量。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量信号",
    "knowledgePoints": [
      "传感器检测",
      "模拟量信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量信号",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_071",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "多选题",
    "difficulty": "easy",
    "text": "选择光电传感器安装位置时应考虑哪些因素？（多选 4）",
    "question": "选择光电传感器安装位置时应考虑哪些因素？（多选 4）",
    "options": [
      "工件颜色/透明度",
      "接触器线圈型号",
      "检测距离",
      "背景反光"
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
    "explanation": "光电检测受距离、背景和目标表面影响；接触器型号不是光电安装条件。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "光电安装",
    "knowledgePoints": [
      "传感器检测",
      "光电安装"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电安装",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_072",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "多选题",
    "difficulty": "easy",
    "text": "传感器信号时有时无，可能原因有哪些？（多选 4）（工位 072）",
    "question": "传感器信号时有时无，可能原因有哪些？（多选 4）（工位 072）",
    "options": [
      "产品名称太长",
      "安装距离接近临界值",
      "线缆接触不良",
      "现场干扰较强"
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
    "explanation": "距离、接线和干扰都会造成信号不稳定；产品名称无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "信号异常排查",
    "knowledgePoints": [
      "传感器检测",
      "信号异常排查"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "信号异常排查",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_073",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "限位开关属于接触式位置检测元件。（判断 4）",
    "question": "限位开关属于接触式位置检测元件。（判断 4）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。限位开关通过机械触碰动作，适合行程终点等位置检测。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "限位开关",
    "knowledgePoints": [
      "传感器检测",
      "限位开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "限位开关",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_074",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "4-20mA 信号的 4mA 通常可作为断线判断的基础。（判断 4）",
    "question": "4-20mA 信号的 4mA 通常可作为断线判断的基础。（判断 4）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。工程上常用 4mA 作为零点，低于正常范围可提示断线或故障。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "4-20mA 信号",
    "knowledgePoints": [
      "传感器检测",
      "4-20mA 信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "4-20mA 信号",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_075",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "NPN 和 PNP 传感器可以不看 PLC 公共端随意互换。（判断 4）",
    "question": "NPN 和 PNP 传感器可以不看 PLC 公共端随意互换。（判断 4）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。NPN/PNP 输出接法不同，必须匹配 PLC 输入公共端。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "传感器接线",
    "knowledgePoints": [
      "传感器检测",
      "传感器接线"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "传感器接线",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_076",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "工业现场常用的电流型模拟量标准信号是 ____ mA。（填空 4）",
    "question": "工业现场常用的电流型模拟量标准信号是 ____ mA。（填空 4）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "4-20",
    "acceptableAnswers": [
      "4-20",
      "4-20mA",
      "4~20"
    ],
    "fillAnswers": [
      "4-20",
      "4-20mA",
      "4~20"
    ],
    "answerText": "4-20",
    "explanation": "4-20mA 抗干扰能力较好，常用于压力、液位等变送器。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量信号",
    "knowledgePoints": [
      "传感器检测",
      "模拟量信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量信号",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_077",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "检测金属有无的非接触开关常用 ____ 式接近开关。（填空 4）",
    "question": "检测金属有无的非接触开关常用 ____ 式接近开关。（填空 4）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "电感",
    "acceptableAnswers": [
      "电感",
      "电感式"
    ],
    "fillAnswers": [
      "电感",
      "电感式"
    ],
    "answerText": "电感",
    "explanation": "电感式接近开关对金属目标敏感，常用于到位、有无检测。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接近开关",
    "knowledgePoints": [
      "传感器检测",
      "接近开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "接近开关",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_078",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "气缸磁性开关一般安装在气缸 ____ 位置附近。（填空 4）",
    "question": "气缸磁性开关一般安装在气缸 ____ 位置附近。（填空 4）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "两端",
    "acceptableAnswers": [
      "两端",
      "端部",
      "行程两端"
    ],
    "fillAnswers": [
      "两端",
      "端部",
      "行程两端"
    ],
    "answerText": "两端",
    "explanation": "磁性开关用于确认气缸伸出、缩回到位，通常布置在两端。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "磁性开关",
    "knowledgePoints": [
      "传感器检测",
      "磁性开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "磁性开关",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_079",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将传感器信号不稳定排查步骤排序，答案写数字串。（流程 4）",
    "question": "将传感器信号不稳定排查步骤排序，答案写数字串。（流程 4）",
    "promptCode": "1. 检查安装距离\n2. 查看 PLC 输入状态\n3. 检查线缆和端子\n4. 排查干扰源\n5. 重新固定并试运行",
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
    "explanation": "先看 PLC 输入状态确认故障现象，再查线缆端子、安装距离和干扰源，最后固定并试运行。",
    "image": "/assets/questions/sensor/sensor_photoelectric_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_photoelectric_001.svg",
    "imageAlt": "对射光电检测",
    "imageDescription": "对射光电适合稳定检测经过光束的工件。",
    "knowledgePoint": "传感器排故流程",
    "knowledgePoints": [
      "传感器检测",
      "传感器排故流程"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "传感器排故流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_080",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将模拟量压力信号校验流程排序，答案写数字串。（流程 4）",
    "question": "将模拟量压力信号校验流程排序，答案写数字串。（流程 4）",
    "promptCode": "1. 对照量程换算\n2. 接入标准信号或压力源\n3. 检查 4mA 零点\n4. 检查 20mA 满量程\n5. 记录偏差",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-1-5",
    "acceptableAnswers": [
      "2-3-4-1-5",
      "23415"
    ],
    "fillAnswers": [
      "2-3-4-1-5",
      "23415"
    ],
    "answerText": "2-3-4-1-5",
    "explanation": "校验要先接标准源，再检查零点和满量程，按量程关系换算中间点，最后记录偏差。",
    "image": "/assets/questions/sensor/sensor_analog_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_analog_001.svg",
    "imageAlt": "4-20mA 压力信号",
    "imageDescription": "线性换算：12mA 位于 4 和 20 的中点，对应 0.8MPa。",
    "knowledgePoint": "模拟量校验",
    "knowledgePoints": [
      "传感器检测",
      "模拟量校验"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量校验",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_081",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 5）",
    "question": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 5）",
    "options": [
      "PLC 输入公共端接法",
      "零件硬度",
      "刀具半径",
      "图纸比例"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "PNP/NPN 输出方式必须与 PLC 输入公共端匹配，否则信号可能无法被正确识别。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PNP/NPN 接线",
    "knowledgePoints": [
      "传感器检测",
      "PNP/NPN 接线"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "PNP/NPN 接线",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_082",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "输送线上检测金属工件到位，优先选哪种传感器？（任务 5）",
    "question": "输送线上检测金属工件到位，优先选哪种传感器？（任务 5）",
    "options": [
      "热电偶",
      "压力变送器",
      "编码器",
      "电感式接近开关"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "电感式接近开关对金属目标响应稳定，适合到位检测；热电偶测温，压力变送器测压力。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接近开关",
    "knowledgePoints": [
      "传感器检测",
      "接近开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "接近开关",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_083",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 5）",
    "question": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 5）",
    "options": [
      "换成热继电器",
      "只提高输送线速度",
      "选用适合透明体检测的光电方案并重新调试灵敏度",
      "把传感器拆掉"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "透明物体反射弱且透光，需选专用光电或调整安装方式，不能简单提高速度。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "光电传感器选型",
    "knowledgePoints": [
      "传感器检测",
      "光电传感器选型"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电传感器选型",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_084",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 5）",
    "question": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 5）",
    "options": [
      "1.6MPa",
      "0.4MPa",
      "0.8MPa",
      "1.2MPa"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "12mA 位于 4-20mA 量程中点，对应压力也为量程中点 0.8MPa。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量换算",
    "knowledgePoints": [
      "传感器检测",
      "模拟量换算"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量换算",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_085",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "气缸两端位置检测常用什么元件？（任务 5）",
    "question": "气缸两端位置检测常用什么元件？（任务 5）",
    "options": [
      "磁性开关",
      "千分尺",
      "断路器",
      "粗糙度仪"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "气缸活塞常带磁环，两端用磁性开关检测伸出和缩回到位。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "磁性开关",
    "knowledgePoints": [
      "传感器检测",
      "磁性开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "磁性开关",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_086",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 5）（工位 086）",
    "question": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 5）（工位 086）",
    "options": [
      "零件硬度",
      "刀具半径",
      "图纸比例",
      "PLC 输入公共端接法"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "PNP/NPN 输出方式必须与 PLC 输入公共端匹配，否则信号可能无法被正确识别。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PNP/NPN 接线",
    "knowledgePoints": [
      "传感器检测",
      "PNP/NPN 接线"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "PNP/NPN 接线",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_087",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "输送线上检测金属工件到位，优先选哪种传感器？（任务 5）（工位 087）",
    "question": "输送线上检测金属工件到位，优先选哪种传感器？（任务 5）（工位 087）",
    "options": [
      "压力变送器",
      "编码器",
      "电感式接近开关",
      "热电偶"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "电感式接近开关对金属目标响应稳定，适合到位检测；热电偶测温，压力变送器测压力。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接近开关",
    "knowledgePoints": [
      "传感器检测",
      "接近开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "接近开关",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_088",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 5）（工位 088）",
    "question": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 5）（工位 088）",
    "options": [
      "只提高输送线速度",
      "选用适合透明体检测的光电方案并重新调试灵敏度",
      "把传感器拆掉",
      "换成热继电器"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "透明物体反射弱且透光，需选专用光电或调整安装方式，不能简单提高速度。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "光电传感器选型",
    "knowledgePoints": [
      "传感器检测",
      "光电传感器选型"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电传感器选型",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_089",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "多选题",
    "difficulty": "medium",
    "text": "选择光电传感器安装位置时应考虑哪些因素？（多选 5）",
    "question": "选择光电传感器安装位置时应考虑哪些因素？（多选 5）",
    "options": [
      "检测距离",
      "背景反光",
      "工件颜色/透明度",
      "接触器线圈型号"
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
    "explanation": "光电检测受距离、背景和目标表面影响；接触器型号不是光电安装条件。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "光电安装",
    "knowledgePoints": [
      "传感器检测",
      "光电安装"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电安装",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_090",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "多选题",
    "difficulty": "hard",
    "text": "传感器信号时有时无，可能原因有哪些？（多选 5）",
    "question": "传感器信号时有时无，可能原因有哪些？（多选 5）",
    "options": [
      "线缆接触不良",
      "现场干扰较强",
      "产品名称太长",
      "安装距离接近临界值"
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
    "explanation": "距离、接线和干扰都会造成信号不稳定；产品名称无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "信号异常排查",
    "knowledgePoints": [
      "传感器检测",
      "信号异常排查"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "信号异常排查",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_091",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "多选题",
    "difficulty": "easy",
    "text": "下列哪些属于模拟量信号？（多选 5）",
    "question": "下列哪些属于模拟量信号？（多选 5）",
    "options": [
      "1-5V",
      "启动按钮常开触点",
      "0-10V",
      "4-20mA"
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
    "explanation": "电压和电流连续量属于模拟量；按钮触点是开关量。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量信号",
    "knowledgePoints": [
      "传感器检测",
      "模拟量信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量信号",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_092",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "多选题",
    "difficulty": "easy",
    "text": "选择光电传感器安装位置时应考虑哪些因素？（多选 5）（工位 092）",
    "question": "选择光电传感器安装位置时应考虑哪些因素？（多选 5）（工位 092）",
    "options": [
      "接触器线圈型号",
      "检测距离",
      "背景反光",
      "工件颜色/透明度"
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
    "explanation": "光电检测受距离、背景和目标表面影响；接触器型号不是光电安装条件。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "光电安装",
    "knowledgePoints": [
      "传感器检测",
      "光电安装"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电安装",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_093",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "NPN 和 PNP 传感器可以不看 PLC 公共端随意互换。（判断 5）",
    "question": "NPN 和 PNP 传感器可以不看 PLC 公共端随意互换。（判断 5）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。NPN/PNP 输出接法不同，必须匹配 PLC 输入公共端。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "传感器接线",
    "knowledgePoints": [
      "传感器检测",
      "传感器接线"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "传感器接线",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_094",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "限位开关属于接触式位置检测元件。（判断 5）",
    "question": "限位开关属于接触式位置检测元件。（判断 5）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。限位开关通过机械触碰动作，适合行程终点等位置检测。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "限位开关",
    "knowledgePoints": [
      "传感器检测",
      "限位开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "限位开关",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_095",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "4-20mA 信号的 4mA 通常可作为断线判断的基础。（判断 5）",
    "question": "4-20mA 信号的 4mA 通常可作为断线判断的基础。（判断 5）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。工程上常用 4mA 作为零点，低于正常范围可提示断线或故障。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "4-20mA 信号",
    "knowledgePoints": [
      "传感器检测",
      "4-20mA 信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "4-20mA 信号",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_096",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "气缸磁性开关一般安装在气缸 ____ 位置附近。（填空 5）",
    "question": "气缸磁性开关一般安装在气缸 ____ 位置附近。（填空 5）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "两端",
    "acceptableAnswers": [
      "两端",
      "端部",
      "行程两端"
    ],
    "fillAnswers": [
      "两端",
      "端部",
      "行程两端"
    ],
    "answerText": "两端",
    "explanation": "磁性开关用于确认气缸伸出、缩回到位，通常布置在两端。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "磁性开关",
    "knowledgePoints": [
      "传感器检测",
      "磁性开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "磁性开关",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_097",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "工业现场常用的电流型模拟量标准信号是 ____ mA。（填空 5）",
    "question": "工业现场常用的电流型模拟量标准信号是 ____ mA。（填空 5）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "4-20",
    "acceptableAnswers": [
      "4-20",
      "4-20mA",
      "4~20"
    ],
    "fillAnswers": [
      "4-20",
      "4-20mA",
      "4~20"
    ],
    "answerText": "4-20",
    "explanation": "4-20mA 抗干扰能力较好，常用于压力、液位等变送器。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量信号",
    "knowledgePoints": [
      "传感器检测",
      "模拟量信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量信号",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_098",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "检测金属有无的非接触开关常用 ____ 式接近开关。（填空 5）",
    "question": "检测金属有无的非接触开关常用 ____ 式接近开关。（填空 5）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "电感",
    "acceptableAnswers": [
      "电感",
      "电感式"
    ],
    "fillAnswers": [
      "电感",
      "电感式"
    ],
    "answerText": "电感",
    "explanation": "电感式接近开关对金属目标敏感，常用于到位、有无检测。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接近开关",
    "knowledgePoints": [
      "传感器检测",
      "接近开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "接近开关",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_099",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将传感器信号不稳定排查步骤排序，答案写数字串。（流程 5）",
    "question": "将传感器信号不稳定排查步骤排序，答案写数字串。（流程 5）",
    "promptCode": "1. 检查安装距离\n2. 查看 PLC 输入状态\n3. 检查线缆和端子\n4. 排查干扰源\n5. 重新固定并试运行",
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
    "explanation": "先看 PLC 输入状态确认故障现象，再查线缆端子、安装距离和干扰源，最后固定并试运行。",
    "image": "/assets/questions/sensor/sensor_photoelectric_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_photoelectric_001.svg",
    "imageAlt": "对射光电检测",
    "imageDescription": "对射光电适合稳定检测经过光束的工件。",
    "knowledgePoint": "传感器排故流程",
    "knowledgePoints": [
      "传感器检测",
      "传感器排故流程"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "传感器排故流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_100",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将模拟量压力信号校验流程排序，答案写数字串。（流程 5）",
    "question": "将模拟量压力信号校验流程排序，答案写数字串。（流程 5）",
    "promptCode": "1. 对照量程换算\n2. 接入标准信号或压力源\n3. 检查 4mA 零点\n4. 检查 20mA 满量程\n5. 记录偏差",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-1-5",
    "acceptableAnswers": [
      "2-3-4-1-5",
      "23415"
    ],
    "fillAnswers": [
      "2-3-4-1-5",
      "23415"
    ],
    "answerText": "2-3-4-1-5",
    "explanation": "校验要先接标准源，再检查零点和满量程，按量程关系换算中间点，最后记录偏差。",
    "image": "/assets/questions/sensor/sensor_analog_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_analog_001.svg",
    "imageAlt": "4-20mA 压力信号",
    "imageDescription": "线性换算：12mA 位于 4 和 20 的中点，对应 0.8MPa。",
    "knowledgePoint": "模拟量校验",
    "knowledgePoints": [
      "传感器检测",
      "模拟量校验"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量校验",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_101",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "输送线上检测金属工件到位，优先选哪种传感器？（任务 6）",
    "question": "输送线上检测金属工件到位，优先选哪种传感器？（任务 6）",
    "options": [
      "电感式接近开关",
      "热电偶",
      "压力变送器",
      "编码器"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "电感式接近开关对金属目标响应稳定，适合到位检测；热电偶测温，压力变送器测压力。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接近开关",
    "knowledgePoints": [
      "传感器检测",
      "接近开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "接近开关",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_102",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 6）",
    "question": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 6）",
    "options": [
      "把传感器拆掉",
      "换成热继电器",
      "只提高输送线速度",
      "选用适合透明体检测的光电方案并重新调试灵敏度"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "透明物体反射弱且透光，需选专用光电或调整安装方式，不能简单提高速度。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "光电传感器选型",
    "knowledgePoints": [
      "传感器检测",
      "光电传感器选型"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电传感器选型",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_103",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 6）",
    "question": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 6）",
    "options": [
      "1.2MPa",
      "1.6MPa",
      "0.4MPa",
      "0.8MPa"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "12mA 位于 4-20mA 量程中点，对应压力也为量程中点 0.8MPa。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量换算",
    "knowledgePoints": [
      "传感器检测",
      "模拟量换算"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量换算",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_104",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "气缸两端位置检测常用什么元件？（任务 6）",
    "question": "气缸两端位置检测常用什么元件？（任务 6）",
    "options": [
      "粗糙度仪",
      "磁性开关",
      "千分尺",
      "断路器"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "气缸活塞常带磁环，两端用磁性开关检测伸出和缩回到位。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "磁性开关",
    "knowledgePoints": [
      "传感器检测",
      "磁性开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "磁性开关",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_105",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 6）",
    "question": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 6）",
    "options": [
      "PLC 输入公共端接法",
      "零件硬度",
      "刀具半径",
      "图纸比例"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "PNP/NPN 输出方式必须与 PLC 输入公共端匹配，否则信号可能无法被正确识别。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PNP/NPN 接线",
    "knowledgePoints": [
      "传感器检测",
      "PNP/NPN 接线"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "PNP/NPN 接线",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_106",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "输送线上检测金属工件到位，优先选哪种传感器？（任务 6）（工位 106）",
    "question": "输送线上检测金属工件到位，优先选哪种传感器？（任务 6）（工位 106）",
    "options": [
      "热电偶",
      "压力变送器",
      "编码器",
      "电感式接近开关"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "电感式接近开关对金属目标响应稳定，适合到位检测；热电偶测温，压力变送器测压力。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接近开关",
    "knowledgePoints": [
      "传感器检测",
      "接近开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "接近开关",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_107",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 6）（工位 107）",
    "question": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 6）（工位 107）",
    "options": [
      "换成热继电器",
      "只提高输送线速度",
      "选用适合透明体检测的光电方案并重新调试灵敏度",
      "把传感器拆掉"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "透明物体反射弱且透光，需选专用光电或调整安装方式，不能简单提高速度。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "光电传感器选型",
    "knowledgePoints": [
      "传感器检测",
      "光电传感器选型"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电传感器选型",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_108",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 6）（工位 108）",
    "question": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 6）（工位 108）",
    "options": [
      "1.6MPa",
      "0.4MPa",
      "0.8MPa",
      "1.2MPa"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "12mA 位于 4-20mA 量程中点，对应压力也为量程中点 0.8MPa。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量换算",
    "knowledgePoints": [
      "传感器检测",
      "模拟量换算"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量换算",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_109",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "多选题",
    "difficulty": "medium",
    "text": "下列哪些属于模拟量信号？（多选 6）",
    "question": "下列哪些属于模拟量信号？（多选 6）",
    "options": [
      "0-10V",
      "4-20mA",
      "1-5V",
      "启动按钮常开触点"
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
    "explanation": "电压和电流连续量属于模拟量；按钮触点是开关量。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量信号",
    "knowledgePoints": [
      "传感器检测",
      "模拟量信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量信号",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_110",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "多选题",
    "difficulty": "hard",
    "text": "选择光电传感器安装位置时应考虑哪些因素？（多选 6）",
    "question": "选择光电传感器安装位置时应考虑哪些因素？（多选 6）",
    "options": [
      "背景反光",
      "工件颜色/透明度",
      "接触器线圈型号",
      "检测距离"
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
    "explanation": "光电检测受距离、背景和目标表面影响；接触器型号不是光电安装条件。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "光电安装",
    "knowledgePoints": [
      "传感器检测",
      "光电安装"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电安装",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_111",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "多选题",
    "difficulty": "easy",
    "text": "传感器信号时有时无，可能原因有哪些？（多选 6）",
    "question": "传感器信号时有时无，可能原因有哪些？（多选 6）",
    "options": [
      "现场干扰较强",
      "产品名称太长",
      "安装距离接近临界值",
      "线缆接触不良"
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
    "explanation": "距离、接线和干扰都会造成信号不稳定；产品名称无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "信号异常排查",
    "knowledgePoints": [
      "传感器检测",
      "信号异常排查"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "信号异常排查",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_112",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "多选题",
    "difficulty": "easy",
    "text": "下列哪些属于模拟量信号？（多选 6）（工位 112）",
    "question": "下列哪些属于模拟量信号？（多选 6）（工位 112）",
    "options": [
      "启动按钮常开触点",
      "0-10V",
      "4-20mA",
      "1-5V"
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
    "explanation": "电压和电流连续量属于模拟量；按钮触点是开关量。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量信号",
    "knowledgePoints": [
      "传感器检测",
      "模拟量信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量信号",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_113",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "4-20mA 信号的 4mA 通常可作为断线判断的基础。（判断 6）",
    "question": "4-20mA 信号的 4mA 通常可作为断线判断的基础。（判断 6）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。工程上常用 4mA 作为零点，低于正常范围可提示断线或故障。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "4-20mA 信号",
    "knowledgePoints": [
      "传感器检测",
      "4-20mA 信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "4-20mA 信号",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_114",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "NPN 和 PNP 传感器可以不看 PLC 公共端随意互换。（判断 6）",
    "question": "NPN 和 PNP 传感器可以不看 PLC 公共端随意互换。（判断 6）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。NPN/PNP 输出接法不同，必须匹配 PLC 输入公共端。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "传感器接线",
    "knowledgePoints": [
      "传感器检测",
      "传感器接线"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "传感器接线",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_115",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "限位开关属于接触式位置检测元件。（判断 6）",
    "question": "限位开关属于接触式位置检测元件。（判断 6）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。限位开关通过机械触碰动作，适合行程终点等位置检测。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "限位开关",
    "knowledgePoints": [
      "传感器检测",
      "限位开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "限位开关",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_116",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "检测金属有无的非接触开关常用 ____ 式接近开关。（填空 6）",
    "question": "检测金属有无的非接触开关常用 ____ 式接近开关。（填空 6）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "电感",
    "acceptableAnswers": [
      "电感",
      "电感式"
    ],
    "fillAnswers": [
      "电感",
      "电感式"
    ],
    "answerText": "电感",
    "explanation": "电感式接近开关对金属目标敏感，常用于到位、有无检测。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接近开关",
    "knowledgePoints": [
      "传感器检测",
      "接近开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "接近开关",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_117",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "气缸磁性开关一般安装在气缸 ____ 位置附近。（填空 6）",
    "question": "气缸磁性开关一般安装在气缸 ____ 位置附近。（填空 6）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "两端",
    "acceptableAnswers": [
      "两端",
      "端部",
      "行程两端"
    ],
    "fillAnswers": [
      "两端",
      "端部",
      "行程两端"
    ],
    "answerText": "两端",
    "explanation": "磁性开关用于确认气缸伸出、缩回到位，通常布置在两端。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "磁性开关",
    "knowledgePoints": [
      "传感器检测",
      "磁性开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "磁性开关",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_118",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "工业现场常用的电流型模拟量标准信号是 ____ mA。（填空 6）",
    "question": "工业现场常用的电流型模拟量标准信号是 ____ mA。（填空 6）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "4-20",
    "acceptableAnswers": [
      "4-20",
      "4-20mA",
      "4~20"
    ],
    "fillAnswers": [
      "4-20",
      "4-20mA",
      "4~20"
    ],
    "answerText": "4-20",
    "explanation": "4-20mA 抗干扰能力较好，常用于压力、液位等变送器。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量信号",
    "knowledgePoints": [
      "传感器检测",
      "模拟量信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量信号",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_119",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将传感器信号不稳定排查步骤排序，答案写数字串。（流程 6）",
    "question": "将传感器信号不稳定排查步骤排序，答案写数字串。（流程 6）",
    "promptCode": "1. 检查安装距离\n2. 查看 PLC 输入状态\n3. 检查线缆和端子\n4. 排查干扰源\n5. 重新固定并试运行",
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
    "explanation": "先看 PLC 输入状态确认故障现象，再查线缆端子、安装距离和干扰源，最后固定并试运行。",
    "image": "/assets/questions/sensor/sensor_photoelectric_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_photoelectric_001.svg",
    "imageAlt": "对射光电检测",
    "imageDescription": "对射光电适合稳定检测经过光束的工件。",
    "knowledgePoint": "传感器排故流程",
    "knowledgePoints": [
      "传感器检测",
      "传感器排故流程"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "传感器排故流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_120",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将模拟量压力信号校验流程排序，答案写数字串。（流程 6）",
    "question": "将模拟量压力信号校验流程排序，答案写数字串。（流程 6）",
    "promptCode": "1. 对照量程换算\n2. 接入标准信号或压力源\n3. 检查 4mA 零点\n4. 检查 20mA 满量程\n5. 记录偏差",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-1-5",
    "acceptableAnswers": [
      "2-3-4-1-5",
      "23415"
    ],
    "fillAnswers": [
      "2-3-4-1-5",
      "23415"
    ],
    "answerText": "2-3-4-1-5",
    "explanation": "校验要先接标准源，再检查零点和满量程，按量程关系换算中间点，最后记录偏差。",
    "image": "/assets/questions/sensor/sensor_analog_001.svg",
    "imageUrl": "/assets/questions/sensor/sensor_analog_001.svg",
    "imageAlt": "4-20mA 压力信号",
    "imageDescription": "线性换算：12mA 位于 4 和 20 的中点，对应 0.8MPa。",
    "knowledgePoint": "模拟量校验",
    "knowledgePoints": [
      "传感器检测",
      "模拟量校验"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量校验",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_121",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 7）",
    "question": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 7）",
    "options": [
      "选用适合透明体检测的光电方案并重新调试灵敏度",
      "把传感器拆掉",
      "换成热继电器",
      "只提高输送线速度"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "透明物体反射弱且透光，需选专用光电或调整安装方式，不能简单提高速度。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "光电传感器选型",
    "knowledgePoints": [
      "传感器检测",
      "光电传感器选型"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电传感器选型",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_122",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 7）",
    "question": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 7）",
    "options": [
      "0.8MPa",
      "1.2MPa",
      "1.6MPa",
      "0.4MPa"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "12mA 位于 4-20mA 量程中点，对应压力也为量程中点 0.8MPa。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量换算",
    "knowledgePoints": [
      "传感器检测",
      "模拟量换算"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量换算",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_123",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "气缸两端位置检测常用什么元件？（任务 7）",
    "question": "气缸两端位置检测常用什么元件？（任务 7）",
    "options": [
      "断路器",
      "粗糙度仪",
      "磁性开关",
      "千分尺"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "气缸活塞常带磁环，两端用磁性开关检测伸出和缩回到位。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "磁性开关",
    "knowledgePoints": [
      "传感器检测",
      "磁性开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "磁性开关",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_124",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 7）",
    "question": "PNP 传感器接 PLC 输入时，最需要匹配什么？（任务 7）",
    "options": [
      "图纸比例",
      "PLC 输入公共端接法",
      "零件硬度",
      "刀具半径"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "PNP/NPN 输出方式必须与 PLC 输入公共端匹配，否则信号可能无法被正确识别。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PNP/NPN 接线",
    "knowledgePoints": [
      "传感器检测",
      "PNP/NPN 接线"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "PNP/NPN 接线",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_125",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "输送线上检测金属工件到位，优先选哪种传感器？（任务 7）",
    "question": "输送线上检测金属工件到位，优先选哪种传感器？（任务 7）",
    "options": [
      "电感式接近开关",
      "热电偶",
      "压力变送器",
      "编码器"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "电感式接近开关对金属目标响应稳定，适合到位检测；热电偶测温，压力变送器测压力。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接近开关",
    "knowledgePoints": [
      "传感器检测",
      "接近开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "接近开关",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_126",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 7）（工位 126）",
    "question": "检测透明塑料瓶时普通漫反射误检较多，较合理的改进是什么？（任务 7）（工位 126）",
    "options": [
      "把传感器拆掉",
      "换成热继电器",
      "只提高输送线速度",
      "选用适合透明体检测的光电方案并重新调试灵敏度"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "透明物体反射弱且透光，需选专用光电或调整安装方式，不能简单提高速度。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "光电传感器选型",
    "knowledgePoints": [
      "传感器检测",
      "光电传感器选型"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "光电传感器选型",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_127",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 7）（工位 127）",
    "question": "4-20mA 压力传感器 4mA=0MPa、20mA=1.6MPa，12mA 对应多少？（任务 7）（工位 127）",
    "options": [
      "1.2MPa",
      "1.6MPa",
      "0.4MPa",
      "0.8MPa"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "12mA 位于 4-20mA 量程中点，对应压力也为量程中点 0.8MPa。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量换算",
    "knowledgePoints": [
      "传感器检测",
      "模拟量换算"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量换算",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_128",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "气缸两端位置检测常用什么元件？（任务 7）（工位 128）",
    "question": "气缸两端位置检测常用什么元件？（任务 7）（工位 128）",
    "options": [
      "粗糙度仪",
      "磁性开关",
      "千分尺",
      "断路器"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "气缸活塞常带磁环，两端用磁性开关检测伸出和缩回到位。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "磁性开关",
    "knowledgePoints": [
      "传感器检测",
      "磁性开关"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "磁性开关",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "cgqjc_129",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-3",
    "type": "多选题",
    "difficulty": "medium",
    "text": "传感器信号时有时无，可能原因有哪些？（多选 7）",
    "question": "传感器信号时有时无，可能原因有哪些？（多选 7）",
    "options": [
      "安装距离接近临界值",
      "线缆接触不良",
      "现场干扰较强",
      "产品名称太长"
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
    "explanation": "距离、接线和干扰都会造成信号不稳定；产品名称无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "信号异常排查",
    "knowledgePoints": [
      "传感器检测",
      "信号异常排查"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "信号异常排查",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "cgqjc_130",
    "category": "传感器检测区",
    "area": "传感器检测区",
    "module": "传感器检测",
    "moduleName": "传感器检测区",
    "levelId": "sensor-1",
    "type": "多选题",
    "difficulty": "hard",
    "text": "下列哪些属于模拟量信号？（多选 7）",
    "question": "下列哪些属于模拟量信号？（多选 7）",
    "options": [
      "4-20mA",
      "1-5V",
      "启动按钮常开触点",
      "0-10V"
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
    "explanation": "电压和电流连续量属于模拟量；按钮触点是开关量。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "模拟量信号",
    "knowledgePoints": [
      "传感器检测",
      "模拟量信号"
    ],
    "tags": [
      "传感器检测区",
      "传感器检测",
      "模拟量信号",
      "多选题"
    ],
    "isMultiple": true
  }
];

export const sensorDetectionQuestionsStats = {
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
  "imageCount": 22,
  "dedupedTextCount": 27
};
