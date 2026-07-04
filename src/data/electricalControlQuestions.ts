import type { Question } from "./questions";

export const electricalControlQuestions: Question[] = [
  {
    "id": "dqkz_001",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 1）",
    "question": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 1）",
    "options": [
      "自锁控制",
      "点动控制",
      "反接制动",
      "短路保护"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "自锁控制利用接触器辅助常开触点并联启动按钮，松开按钮后线圈仍能得电。",
    "image": "/assets/questions/electric/electrical_self_hold_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_self_hold_001.svg",
    "imageAlt": "电机自锁控制梯形图",
    "imageDescription": "启动按钮与 KM 常开辅助触点并联，形成自锁保持。",
    "knowledgePoint": "电机自锁控制",
    "knowledgePoints": [
      "电气控制",
      "电机自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "电机自锁控制",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_002",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 1）",
    "question": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 1）",
    "options": [
      "提高电机转速",
      "减少按钮数量",
      "取消过载保护",
      "防止正反转接触器同时吸合造成短路"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "正反转接触器同时吸合会造成相序冲突甚至短路，必须用电气或机械互锁。",
    "image": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageAlt": "正反转互锁简图",
    "imageDescription": "两个接触器必须互锁，防止电源相间短路。",
    "knowledgePoint": "正反转互锁",
    "knowledgePoints": [
      "电气控制",
      "正反转互锁"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "正反转互锁",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_003",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "PLC 中 X0、X1 通常表示什么类型点位？（任务 1）",
    "question": "PLC 中 X0、X1 通常表示什么类型点位？（任务 1）",
    "options": [
      "模拟量输出",
      "高速脉冲输出",
      "输入点",
      "输出点"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "常见教学型 PLC 中 X 表示输入，Y 表示输出；按钮、传感器通常接输入点。",
    "image": "/assets/questions/electric/electrical_plc_io_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_plc_io_001.svg",
    "imageAlt": "PLC I/O 点位示意",
    "imageDescription": "输入点接按钮/保护信号，输出点驱动接触器线圈或指示灯。",
    "knowledgePoint": "PLC I/O",
    "knowledgePoints": [
      "电气控制",
      "PLC I/O"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC I/O",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_004",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "热继电器动作后，最应优先怀疑什么？（任务 1）",
    "question": "热继电器动作后，最应优先怀疑什么？（任务 1）",
    "options": [
      "机械图纸比例不对",
      "电机过载或缺相",
      "按钮颜色错误",
      "HMI 亮度太高"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "热继电器用于过载保护，动作说明电流热效应超过设定，应检查负载、缺相和电机状态。",
    "image": "/assets/questions/electric/electrical_overload_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_overload_001.svg",
    "imageAlt": "热继电器过载保护",
    "imageDescription": "热继电器用于过载保护，不能代替短路保护。",
    "knowledgePoint": "过载保护",
    "knowledgePoints": [
      "电气控制",
      "过载保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "过载保护",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_005",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "急停按钮在控制回路中通常采用哪类触点？（任务 1）",
    "question": "急停按钮在控制回路中通常采用哪类触点？（任务 1）",
    "options": [
      "常闭触点",
      "常开触点",
      "随机触点",
      "无触点"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "急停常用常闭触点串入安全回路，断线或按下时都能使设备停止，更符合失效安全思路。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "急停保护",
    "knowledgePoints": [
      "电气控制",
      "急停保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "急停保护",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_006",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 1）（工位 006）",
    "question": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 1）（工位 006）",
    "options": [
      "点动控制",
      "反接制动",
      "短路保护",
      "自锁控制"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "自锁控制利用接触器辅助常开触点并联启动按钮，松开按钮后线圈仍能得电。",
    "image": "/assets/questions/electric/electrical_self_hold_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_self_hold_001.svg",
    "imageAlt": "电机自锁控制梯形图",
    "imageDescription": "启动按钮与 KM 常开辅助触点并联，形成自锁保持。",
    "knowledgePoint": "电机自锁控制",
    "knowledgePoints": [
      "电气控制",
      "电机自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "电机自锁控制",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_007",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 1）（工位 007）",
    "question": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 1）（工位 007）",
    "options": [
      "减少按钮数量",
      "取消过载保护",
      "防止正反转接触器同时吸合造成短路",
      "提高电机转速"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "正反转接触器同时吸合会造成相序冲突甚至短路，必须用电气或机械互锁。",
    "image": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageAlt": "正反转互锁简图",
    "imageDescription": "两个接触器必须互锁，防止电源相间短路。",
    "knowledgePoint": "正反转互锁",
    "knowledgePoints": [
      "电气控制",
      "正反转互锁"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "正反转互锁",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_008",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "PLC 中 X0、X1 通常表示什么类型点位？（任务 1）（工位 008）",
    "question": "PLC 中 X0、X1 通常表示什么类型点位？（任务 1）（工位 008）",
    "options": [
      "高速脉冲输出",
      "输入点",
      "输出点",
      "模拟量输出"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "常见教学型 PLC 中 X 表示输入，Y 表示输出；按钮、传感器通常接输入点。",
    "image": "/assets/questions/electric/electrical_plc_io_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_plc_io_001.svg",
    "imageAlt": "PLC I/O 点位示意",
    "imageDescription": "输入点接按钮/保护信号，输出点驱动接触器线圈或指示灯。",
    "knowledgePoint": "PLC I/O",
    "knowledgePoints": [
      "电气控制",
      "PLC I/O"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC I/O",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_009",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "多选题",
    "difficulty": "medium",
    "text": "电机自锁控制通常包含哪些元件或触点？（多选 1）",
    "question": "电机自锁控制通常包含哪些元件或触点？（多选 1）",
    "options": [
      "停止按钮常闭触点",
      "启动按钮常开触点",
      "接触器线圈",
      "砂轮粗糙度样块"
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
    "explanation": "停止常闭、启动常开和接触器线圈是基本控制回路要素；粗糙度样块属于检测工具。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "自锁控制",
    "knowledgePoints": [
      "电气控制",
      "自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "自锁控制",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_010",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "多选题",
    "difficulty": "hard",
    "text": "PLC 输出点控制接触器时，应注意哪些事项？（多选 1）",
    "question": "PLC 输出点控制接触器时，应注意哪些事项？（多选 1）",
    "options": [
      "线圈电压是否匹配",
      "必要时加中间继电器",
      "随意短接急停",
      "输出容量是否足够"
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
    "explanation": "输出容量、电压和隔离保护都要考虑；急停不能被短接。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输出",
    "knowledgePoints": [
      "电气控制",
      "PLC 输出"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输出",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_011",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "多选题",
    "difficulty": "easy",
    "text": "设备电气维修前的安全措施包括哪些？（多选 1）",
    "question": "设备电气维修前的安全措施包括哪些？（多选 1）",
    "options": [
      "释放残余能量",
      "直接带电更换线圈",
      "断电挂牌",
      "验电确认"
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
    "explanation": "维修前应断电、验电并释放残余能量；带电更换元件风险很高。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全用电",
    "knowledgePoints": [
      "电气控制",
      "安全用电"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "安全用电",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_012",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "多选题",
    "difficulty": "easy",
    "text": "电机自锁控制通常包含哪些元件或触点？（多选 1）（工位 012）",
    "question": "电机自锁控制通常包含哪些元件或触点？（多选 1）（工位 012）",
    "options": [
      "砂轮粗糙度样块",
      "停止按钮常闭触点",
      "启动按钮常开触点",
      "接触器线圈"
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
    "explanation": "停止常闭、启动常开和接触器线圈是基本控制回路要素；粗糙度样块属于检测工具。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "自锁控制",
    "knowledgePoints": [
      "电气控制",
      "自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "自锁控制",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_013",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "常闭停止按钮断线时，设备应不能启动。（判断 1）",
    "question": "常闭停止按钮断线时，设备应不能启动。（判断 1）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。停止按钮常闭串联在控制回路中，断线相当于停止状态，符合安全设计。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "停止回路",
    "knowledgePoints": [
      "电气控制",
      "停止回路"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "停止回路",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_014",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "熔断器主要用于过载长期保护，不能用于短路保护。（判断 1）",
    "question": "熔断器主要用于过载长期保护，不能用于短路保护。（判断 1）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。熔断器主要用于短路保护，过载保护通常由热继电器等承担。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "低压电器",
    "knowledgePoints": [
      "电气控制",
      "低压电器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "低压电器",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_015",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "PLC 输入点可直接读取按钮或传感器的开关量状态。（判断 1）",
    "question": "PLC 输入点可直接读取按钮或传感器的开关量状态。（判断 1）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。按钮、限位、接近开关等开关量信号常接入 PLC 输入点。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输入",
    "knowledgePoints": [
      "电气控制",
      "PLC 输入"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输入",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_016",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "接触器用于频繁接通和分断电动机主电路，其线圈常用字母 ____ 表示。（填空 1）",
    "question": "接触器用于频繁接通和分断电动机主电路，其线圈常用字母 ____ 表示。（填空 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "KM",
    "acceptableAnswers": [
      "KM",
      "km"
    ],
    "fillAnswers": [
      "KM",
      "km"
    ],
    "answerText": "KM",
    "explanation": "KM 是接触器的常用文字符号，辅助触点可用于自锁和互锁。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接触器",
    "knowledgePoints": [
      "电气控制",
      "接触器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "接触器",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_017",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "热继电器的常用文字符号是 ____。（填空 1）",
    "question": "热继电器的常用文字符号是 ____。（填空 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "FR",
    "acceptableAnswers": [
      "FR",
      "fr"
    ],
    "fillAnswers": [
      "FR",
      "fr"
    ],
    "answerText": "FR",
    "explanation": "FR 常用于表示热继电器，其常闭触点串入控制回路实现过载断开。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "热继电器",
    "knowledgePoints": [
      "电气控制",
      "热继电器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "热继电器",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_018",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "PLC 中常用 Y0 表示一个 ____ 点。（填空 1）",
    "question": "PLC 中常用 Y0 表示一个 ____ 点。（填空 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "输出",
    "acceptableAnswers": [
      "输出",
      "输出点"
    ],
    "fillAnswers": [
      "输出",
      "输出点"
    ],
    "answerText": "输出",
    "explanation": "Y 点通常为输出点，可驱动指示灯、继电器或接触器线圈。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输出",
    "knowledgePoints": [
      "电气控制",
      "PLC 输出"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输出",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_019",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将电机自锁控制调试步骤排序，答案写数字串。（流程 1）",
    "question": "将电机自锁控制调试步骤排序，答案写数字串。（流程 1）",
    "promptCode": "1. 低压点动试运行\n2. 检查接线和绝缘\n3. 合闸前确认急停复位\n4. 测试启动、停止和自锁\n5. 记录异常并断电整改",
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
    "explanation": "调试先做接线和绝缘检查，再确认急停状态；低压或空载试运行后测试启动停止和自锁，发现异常要断电整改。",
    "image": "/assets/questions/electric/electrical_self_hold_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_self_hold_001.svg",
    "imageAlt": "电机自锁控制梯形图",
    "imageDescription": "启动按钮与 KM 常开辅助触点并联，形成自锁保持。",
    "knowledgePoint": "电气调试流程",
    "knowledgePoints": [
      "电气控制",
      "电气调试流程"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "电气调试流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_020",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将正反转故障排查步骤排序，答案写数字串。（流程 1）",
    "question": "将正反转故障排查步骤排序，答案写数字串。（流程 1）",
    "promptCode": "1. 检查互锁触点\n2. 断电挂牌\n3. 检查 KM 正反线圈\n4. 单独点动测试\n5. 恢复并试运行",
    "options": [],
    "answerIndex": -1,
    "answer": "2-1-3-4-5",
    "acceptableAnswers": [
      "2-1-3-4-5",
      "21345"
    ],
    "fillAnswers": [
      "2-1-3-4-5",
      "21345"
    ],
    "answerText": "2-1-3-4-5",
    "explanation": "电气排查必须先断电挂牌，再检查互锁和线圈，随后在安全条件下点动测试，最后恢复试运行。",
    "image": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageAlt": "正反转互锁简图",
    "imageDescription": "两个接触器必须互锁，防止电源相间短路。",
    "knowledgePoint": "正反转排故",
    "knowledgePoints": [
      "电气控制",
      "正反转排故"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "正反转排故",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_021",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 2）",
    "question": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 2）",
    "options": [
      "防止正反转接触器同时吸合造成短路",
      "提高电机转速",
      "减少按钮数量",
      "取消过载保护"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正反转接触器同时吸合会造成相序冲突甚至短路，必须用电气或机械互锁。",
    "image": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageAlt": "正反转互锁简图",
    "imageDescription": "两个接触器必须互锁，防止电源相间短路。",
    "knowledgePoint": "正反转互锁",
    "knowledgePoints": [
      "电气控制",
      "正反转互锁"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "正反转互锁",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_022",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "PLC 中 X0、X1 通常表示什么类型点位？（任务 2）",
    "question": "PLC 中 X0、X1 通常表示什么类型点位？（任务 2）",
    "options": [
      "输出点",
      "模拟量输出",
      "高速脉冲输出",
      "输入点"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "常见教学型 PLC 中 X 表示输入，Y 表示输出；按钮、传感器通常接输入点。",
    "image": "/assets/questions/electric/electrical_plc_io_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_plc_io_001.svg",
    "imageAlt": "PLC I/O 点位示意",
    "imageDescription": "输入点接按钮/保护信号，输出点驱动接触器线圈或指示灯。",
    "knowledgePoint": "PLC I/O",
    "knowledgePoints": [
      "电气控制",
      "PLC I/O"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC I/O",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_023",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "热继电器动作后，最应优先怀疑什么？（任务 2）",
    "question": "热继电器动作后，最应优先怀疑什么？（任务 2）",
    "options": [
      "HMI 亮度太高",
      "机械图纸比例不对",
      "电机过载或缺相",
      "按钮颜色错误"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "热继电器用于过载保护，动作说明电流热效应超过设定，应检查负载、缺相和电机状态。",
    "image": "/assets/questions/electric/electrical_overload_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_overload_001.svg",
    "imageAlt": "热继电器过载保护",
    "imageDescription": "热继电器用于过载保护，不能代替短路保护。",
    "knowledgePoint": "过载保护",
    "knowledgePoints": [
      "电气控制",
      "过载保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "过载保护",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_024",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "急停按钮在控制回路中通常采用哪类触点？（任务 2）",
    "question": "急停按钮在控制回路中通常采用哪类触点？（任务 2）",
    "options": [
      "无触点",
      "常闭触点",
      "常开触点",
      "随机触点"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "急停常用常闭触点串入安全回路，断线或按下时都能使设备停止，更符合失效安全思路。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "急停保护",
    "knowledgePoints": [
      "电气控制",
      "急停保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "急停保护",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_025",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 2）",
    "question": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 2）",
    "options": [
      "自锁控制",
      "点动控制",
      "反接制动",
      "短路保护"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "自锁控制利用接触器辅助常开触点并联启动按钮，松开按钮后线圈仍能得电。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "电机自锁控制",
    "knowledgePoints": [
      "电气控制",
      "电机自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "电机自锁控制",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_026",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 2）（工位 026）",
    "question": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 2）（工位 026）",
    "options": [
      "提高电机转速",
      "减少按钮数量",
      "取消过载保护",
      "防止正反转接触器同时吸合造成短路"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "正反转接触器同时吸合会造成相序冲突甚至短路，必须用电气或机械互锁。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "正反转互锁",
    "knowledgePoints": [
      "电气控制",
      "正反转互锁"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "正反转互锁",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_027",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "PLC 中 X0、X1 通常表示什么类型点位？（任务 2）（工位 027）",
    "question": "PLC 中 X0、X1 通常表示什么类型点位？（任务 2）（工位 027）",
    "options": [
      "模拟量输出",
      "高速脉冲输出",
      "输入点",
      "输出点"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "常见教学型 PLC 中 X 表示输入，Y 表示输出；按钮、传感器通常接输入点。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC I/O",
    "knowledgePoints": [
      "电气控制",
      "PLC I/O"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC I/O",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_028",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "热继电器动作后，最应优先怀疑什么？（任务 2）（工位 028）",
    "question": "热继电器动作后，最应优先怀疑什么？（任务 2）（工位 028）",
    "options": [
      "机械图纸比例不对",
      "电机过载或缺相",
      "按钮颜色错误",
      "HMI 亮度太高"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "热继电器用于过载保护，动作说明电流热效应超过设定，应检查负载、缺相和电机状态。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "过载保护",
    "knowledgePoints": [
      "电气控制",
      "过载保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "过载保护",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_029",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "多选题",
    "difficulty": "medium",
    "text": "设备电气维修前的安全措施包括哪些？（多选 2）",
    "question": "设备电气维修前的安全措施包括哪些？（多选 2）",
    "options": [
      "断电挂牌",
      "验电确认",
      "释放残余能量",
      "直接带电更换线圈"
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
    "explanation": "维修前应断电、验电并释放残余能量；带电更换元件风险很高。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全用电",
    "knowledgePoints": [
      "电气控制",
      "安全用电"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "安全用电",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_030",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "多选题",
    "difficulty": "hard",
    "text": "电机自锁控制通常包含哪些元件或触点？（多选 2）",
    "question": "电机自锁控制通常包含哪些元件或触点？（多选 2）",
    "options": [
      "启动按钮常开触点",
      "接触器线圈",
      "砂轮粗糙度样块",
      "停止按钮常闭触点"
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
    "explanation": "停止常闭、启动常开和接触器线圈是基本控制回路要素；粗糙度样块属于检测工具。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "自锁控制",
    "knowledgePoints": [
      "电气控制",
      "自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "自锁控制",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_031",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "多选题",
    "difficulty": "easy",
    "text": "PLC 输出点控制接触器时，应注意哪些事项？（多选 2）",
    "question": "PLC 输出点控制接触器时，应注意哪些事项？（多选 2）",
    "options": [
      "必要时加中间继电器",
      "随意短接急停",
      "输出容量是否足够",
      "线圈电压是否匹配"
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
    "explanation": "输出容量、电压和隔离保护都要考虑；急停不能被短接。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输出",
    "knowledgePoints": [
      "电气控制",
      "PLC 输出"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输出",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_032",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "多选题",
    "difficulty": "easy",
    "text": "设备电气维修前的安全措施包括哪些？（多选 2）（工位 032）",
    "question": "设备电气维修前的安全措施包括哪些？（多选 2）（工位 032）",
    "options": [
      "直接带电更换线圈",
      "断电挂牌",
      "验电确认",
      "释放残余能量"
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
    "explanation": "维修前应断电、验电并释放残余能量；带电更换元件风险很高。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全用电",
    "knowledgePoints": [
      "电气控制",
      "安全用电"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "安全用电",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_033",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "PLC 输入点可直接读取按钮或传感器的开关量状态。（判断 2）",
    "question": "PLC 输入点可直接读取按钮或传感器的开关量状态。（判断 2）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。按钮、限位、接近开关等开关量信号常接入 PLC 输入点。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输入",
    "knowledgePoints": [
      "电气控制",
      "PLC 输入"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输入",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_034",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "常闭停止按钮断线时，设备应不能启动。（判断 2）",
    "question": "常闭停止按钮断线时，设备应不能启动。（判断 2）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。停止按钮常闭串联在控制回路中，断线相当于停止状态，符合安全设计。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "停止回路",
    "knowledgePoints": [
      "电气控制",
      "停止回路"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "停止回路",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_035",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "熔断器主要用于过载长期保护，不能用于短路保护。（判断 2）",
    "question": "熔断器主要用于过载长期保护，不能用于短路保护。（判断 2）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。熔断器主要用于短路保护，过载保护通常由热继电器等承担。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "低压电器",
    "knowledgePoints": [
      "电气控制",
      "低压电器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "低压电器",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_036",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "PLC 中常用 Y0 表示一个 ____ 点。（填空 2）",
    "question": "PLC 中常用 Y0 表示一个 ____ 点。（填空 2）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "输出",
    "acceptableAnswers": [
      "输出",
      "输出点"
    ],
    "fillAnswers": [
      "输出",
      "输出点"
    ],
    "answerText": "输出",
    "explanation": "Y 点通常为输出点，可驱动指示灯、继电器或接触器线圈。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输出",
    "knowledgePoints": [
      "电气控制",
      "PLC 输出"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输出",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_037",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "接触器用于频繁接通和分断电动机主电路，其线圈常用字母 ____ 表示。（填空 2）",
    "question": "接触器用于频繁接通和分断电动机主电路，其线圈常用字母 ____ 表示。（填空 2）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "KM",
    "acceptableAnswers": [
      "KM",
      "km"
    ],
    "fillAnswers": [
      "KM",
      "km"
    ],
    "answerText": "KM",
    "explanation": "KM 是接触器的常用文字符号，辅助触点可用于自锁和互锁。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接触器",
    "knowledgePoints": [
      "电气控制",
      "接触器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "接触器",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_038",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "热继电器的常用文字符号是 ____。（填空 2）",
    "question": "热继电器的常用文字符号是 ____。（填空 2）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "FR",
    "acceptableAnswers": [
      "FR",
      "fr"
    ],
    "fillAnswers": [
      "FR",
      "fr"
    ],
    "answerText": "FR",
    "explanation": "FR 常用于表示热继电器，其常闭触点串入控制回路实现过载断开。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "热继电器",
    "knowledgePoints": [
      "电气控制",
      "热继电器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "热继电器",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_039",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将电机自锁控制调试步骤排序，答案写数字串。（流程 2）",
    "question": "将电机自锁控制调试步骤排序，答案写数字串。（流程 2）",
    "promptCode": "1. 低压点动试运行\n2. 检查接线和绝缘\n3. 合闸前确认急停复位\n4. 测试启动、停止和自锁\n5. 记录异常并断电整改",
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
    "explanation": "调试先做接线和绝缘检查，再确认急停状态；低压或空载试运行后测试启动停止和自锁，发现异常要断电整改。",
    "image": "/assets/questions/electric/electrical_self_hold_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_self_hold_001.svg",
    "imageAlt": "电机自锁控制梯形图",
    "imageDescription": "启动按钮与 KM 常开辅助触点并联，形成自锁保持。",
    "knowledgePoint": "电气调试流程",
    "knowledgePoints": [
      "电气控制",
      "电气调试流程"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "电气调试流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_040",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将正反转故障排查步骤排序，答案写数字串。（流程 2）",
    "question": "将正反转故障排查步骤排序，答案写数字串。（流程 2）",
    "promptCode": "1. 检查互锁触点\n2. 断电挂牌\n3. 检查 KM 正反线圈\n4. 单独点动测试\n5. 恢复并试运行",
    "options": [],
    "answerIndex": -1,
    "answer": "2-1-3-4-5",
    "acceptableAnswers": [
      "2-1-3-4-5",
      "21345"
    ],
    "fillAnswers": [
      "2-1-3-4-5",
      "21345"
    ],
    "answerText": "2-1-3-4-5",
    "explanation": "电气排查必须先断电挂牌，再检查互锁和线圈，随后在安全条件下点动测试，最后恢复试运行。",
    "image": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageAlt": "正反转互锁简图",
    "imageDescription": "两个接触器必须互锁，防止电源相间短路。",
    "knowledgePoint": "正反转排故",
    "knowledgePoints": [
      "电气控制",
      "正反转排故"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "正反转排故",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_041",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "PLC 中 X0、X1 通常表示什么类型点位？（任务 3）",
    "question": "PLC 中 X0、X1 通常表示什么类型点位？（任务 3）",
    "options": [
      "输入点",
      "输出点",
      "模拟量输出",
      "高速脉冲输出"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "常见教学型 PLC 中 X 表示输入，Y 表示输出；按钮、传感器通常接输入点。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC I/O",
    "knowledgePoints": [
      "电气控制",
      "PLC I/O"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC I/O",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_042",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "热继电器动作后，最应优先怀疑什么？（任务 3）",
    "question": "热继电器动作后，最应优先怀疑什么？（任务 3）",
    "options": [
      "按钮颜色错误",
      "HMI 亮度太高",
      "机械图纸比例不对",
      "电机过载或缺相"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "热继电器用于过载保护，动作说明电流热效应超过设定，应检查负载、缺相和电机状态。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "过载保护",
    "knowledgePoints": [
      "电气控制",
      "过载保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "过载保护",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_043",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "急停按钮在控制回路中通常采用哪类触点？（任务 3）",
    "question": "急停按钮在控制回路中通常采用哪类触点？（任务 3）",
    "options": [
      "随机触点",
      "无触点",
      "常闭触点",
      "常开触点"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "急停常用常闭触点串入安全回路，断线或按下时都能使设备停止，更符合失效安全思路。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "急停保护",
    "knowledgePoints": [
      "电气控制",
      "急停保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "急停保护",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_044",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 3）",
    "question": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 3）",
    "options": [
      "短路保护",
      "自锁控制",
      "点动控制",
      "反接制动"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "自锁控制利用接触器辅助常开触点并联启动按钮，松开按钮后线圈仍能得电。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "电机自锁控制",
    "knowledgePoints": [
      "电气控制",
      "电机自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "电机自锁控制",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_045",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 3）",
    "question": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 3）",
    "options": [
      "防止正反转接触器同时吸合造成短路",
      "提高电机转速",
      "减少按钮数量",
      "取消过载保护"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正反转接触器同时吸合会造成相序冲突甚至短路，必须用电气或机械互锁。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "正反转互锁",
    "knowledgePoints": [
      "电气控制",
      "正反转互锁"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "正反转互锁",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_046",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "PLC 中 X0、X1 通常表示什么类型点位？（任务 3）（工位 046）",
    "question": "PLC 中 X0、X1 通常表示什么类型点位？（任务 3）（工位 046）",
    "options": [
      "输出点",
      "模拟量输出",
      "高速脉冲输出",
      "输入点"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "常见教学型 PLC 中 X 表示输入，Y 表示输出；按钮、传感器通常接输入点。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC I/O",
    "knowledgePoints": [
      "电气控制",
      "PLC I/O"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC I/O",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_047",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "热继电器动作后，最应优先怀疑什么？（任务 3）（工位 047）",
    "question": "热继电器动作后，最应优先怀疑什么？（任务 3）（工位 047）",
    "options": [
      "HMI 亮度太高",
      "机械图纸比例不对",
      "电机过载或缺相",
      "按钮颜色错误"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "热继电器用于过载保护，动作说明电流热效应超过设定，应检查负载、缺相和电机状态。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "过载保护",
    "knowledgePoints": [
      "电气控制",
      "过载保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "过载保护",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_048",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "急停按钮在控制回路中通常采用哪类触点？（任务 3）（工位 048）",
    "question": "急停按钮在控制回路中通常采用哪类触点？（任务 3）（工位 048）",
    "options": [
      "无触点",
      "常闭触点",
      "常开触点",
      "随机触点"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "急停常用常闭触点串入安全回路，断线或按下时都能使设备停止，更符合失效安全思路。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "急停保护",
    "knowledgePoints": [
      "电气控制",
      "急停保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "急停保护",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_049",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "多选题",
    "difficulty": "medium",
    "text": "PLC 输出点控制接触器时，应注意哪些事项？（多选 3）",
    "question": "PLC 输出点控制接触器时，应注意哪些事项？（多选 3）",
    "options": [
      "输出容量是否足够",
      "线圈电压是否匹配",
      "必要时加中间继电器",
      "随意短接急停"
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
    "explanation": "输出容量、电压和隔离保护都要考虑；急停不能被短接。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输出",
    "knowledgePoints": [
      "电气控制",
      "PLC 输出"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输出",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_050",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "多选题",
    "difficulty": "hard",
    "text": "设备电气维修前的安全措施包括哪些？（多选 3）",
    "question": "设备电气维修前的安全措施包括哪些？（多选 3）",
    "options": [
      "验电确认",
      "释放残余能量",
      "直接带电更换线圈",
      "断电挂牌"
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
    "explanation": "维修前应断电、验电并释放残余能量；带电更换元件风险很高。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全用电",
    "knowledgePoints": [
      "电气控制",
      "安全用电"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "安全用电",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_051",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "多选题",
    "difficulty": "easy",
    "text": "电机自锁控制通常包含哪些元件或触点？（多选 3）",
    "question": "电机自锁控制通常包含哪些元件或触点？（多选 3）",
    "options": [
      "接触器线圈",
      "砂轮粗糙度样块",
      "停止按钮常闭触点",
      "启动按钮常开触点"
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
    "explanation": "停止常闭、启动常开和接触器线圈是基本控制回路要素；粗糙度样块属于检测工具。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "自锁控制",
    "knowledgePoints": [
      "电气控制",
      "自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "自锁控制",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_052",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "多选题",
    "difficulty": "easy",
    "text": "PLC 输出点控制接触器时，应注意哪些事项？（多选 3）（工位 052）",
    "question": "PLC 输出点控制接触器时，应注意哪些事项？（多选 3）（工位 052）",
    "options": [
      "随意短接急停",
      "输出容量是否足够",
      "线圈电压是否匹配",
      "必要时加中间继电器"
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
    "explanation": "输出容量、电压和隔离保护都要考虑；急停不能被短接。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输出",
    "knowledgePoints": [
      "电气控制",
      "PLC 输出"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输出",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_053",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "熔断器主要用于过载长期保护，不能用于短路保护。（判断 3）",
    "question": "熔断器主要用于过载长期保护，不能用于短路保护。（判断 3）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。熔断器主要用于短路保护，过载保护通常由热继电器等承担。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "低压电器",
    "knowledgePoints": [
      "电气控制",
      "低压电器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "低压电器",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_054",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "PLC 输入点可直接读取按钮或传感器的开关量状态。（判断 3）",
    "question": "PLC 输入点可直接读取按钮或传感器的开关量状态。（判断 3）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。按钮、限位、接近开关等开关量信号常接入 PLC 输入点。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输入",
    "knowledgePoints": [
      "电气控制",
      "PLC 输入"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输入",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_055",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "常闭停止按钮断线时，设备应不能启动。（判断 3）",
    "question": "常闭停止按钮断线时，设备应不能启动。（判断 3）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。停止按钮常闭串联在控制回路中，断线相当于停止状态，符合安全设计。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "停止回路",
    "knowledgePoints": [
      "电气控制",
      "停止回路"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "停止回路",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_056",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "热继电器的常用文字符号是 ____。（填空 3）",
    "question": "热继电器的常用文字符号是 ____。（填空 3）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "FR",
    "acceptableAnswers": [
      "FR",
      "fr"
    ],
    "fillAnswers": [
      "FR",
      "fr"
    ],
    "answerText": "FR",
    "explanation": "FR 常用于表示热继电器，其常闭触点串入控制回路实现过载断开。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "热继电器",
    "knowledgePoints": [
      "电气控制",
      "热继电器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "热继电器",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_057",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "PLC 中常用 Y0 表示一个 ____ 点。（填空 3）",
    "question": "PLC 中常用 Y0 表示一个 ____ 点。（填空 3）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "输出",
    "acceptableAnswers": [
      "输出",
      "输出点"
    ],
    "fillAnswers": [
      "输出",
      "输出点"
    ],
    "answerText": "输出",
    "explanation": "Y 点通常为输出点，可驱动指示灯、继电器或接触器线圈。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输出",
    "knowledgePoints": [
      "电气控制",
      "PLC 输出"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输出",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_058",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "接触器用于频繁接通和分断电动机主电路，其线圈常用字母 ____ 表示。（填空 3）",
    "question": "接触器用于频繁接通和分断电动机主电路，其线圈常用字母 ____ 表示。（填空 3）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "KM",
    "acceptableAnswers": [
      "KM",
      "km"
    ],
    "fillAnswers": [
      "KM",
      "km"
    ],
    "answerText": "KM",
    "explanation": "KM 是接触器的常用文字符号，辅助触点可用于自锁和互锁。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接触器",
    "knowledgePoints": [
      "电气控制",
      "接触器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "接触器",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_059",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将电机自锁控制调试步骤排序，答案写数字串。（流程 3）",
    "question": "将电机自锁控制调试步骤排序，答案写数字串。（流程 3）",
    "promptCode": "1. 低压点动试运行\n2. 检查接线和绝缘\n3. 合闸前确认急停复位\n4. 测试启动、停止和自锁\n5. 记录异常并断电整改",
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
    "explanation": "调试先做接线和绝缘检查，再确认急停状态；低压或空载试运行后测试启动停止和自锁，发现异常要断电整改。",
    "image": "/assets/questions/electric/electrical_self_hold_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_self_hold_001.svg",
    "imageAlt": "电机自锁控制梯形图",
    "imageDescription": "启动按钮与 KM 常开辅助触点并联，形成自锁保持。",
    "knowledgePoint": "电气调试流程",
    "knowledgePoints": [
      "电气控制",
      "电气调试流程"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "电气调试流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_060",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将正反转故障排查步骤排序，答案写数字串。（流程 3）",
    "question": "将正反转故障排查步骤排序，答案写数字串。（流程 3）",
    "promptCode": "1. 检查互锁触点\n2. 断电挂牌\n3. 检查 KM 正反线圈\n4. 单独点动测试\n5. 恢复并试运行",
    "options": [],
    "answerIndex": -1,
    "answer": "2-1-3-4-5",
    "acceptableAnswers": [
      "2-1-3-4-5",
      "21345"
    ],
    "fillAnswers": [
      "2-1-3-4-5",
      "21345"
    ],
    "answerText": "2-1-3-4-5",
    "explanation": "电气排查必须先断电挂牌，再检查互锁和线圈，随后在安全条件下点动测试，最后恢复试运行。",
    "image": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageAlt": "正反转互锁简图",
    "imageDescription": "两个接触器必须互锁，防止电源相间短路。",
    "knowledgePoint": "正反转排故",
    "knowledgePoints": [
      "电气控制",
      "正反转排故"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "正反转排故",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_061",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "热继电器动作后，最应优先怀疑什么？（任务 4）",
    "question": "热继电器动作后，最应优先怀疑什么？（任务 4）",
    "options": [
      "电机过载或缺相",
      "按钮颜色错误",
      "HMI 亮度太高",
      "机械图纸比例不对"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "热继电器用于过载保护，动作说明电流热效应超过设定，应检查负载、缺相和电机状态。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "过载保护",
    "knowledgePoints": [
      "电气控制",
      "过载保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "过载保护",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_062",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "急停按钮在控制回路中通常采用哪类触点？（任务 4）",
    "question": "急停按钮在控制回路中通常采用哪类触点？（任务 4）",
    "options": [
      "常开触点",
      "随机触点",
      "无触点",
      "常闭触点"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "急停常用常闭触点串入安全回路，断线或按下时都能使设备停止，更符合失效安全思路。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "急停保护",
    "knowledgePoints": [
      "电气控制",
      "急停保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "急停保护",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_063",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 4）",
    "question": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 4）",
    "options": [
      "反接制动",
      "短路保护",
      "自锁控制",
      "点动控制"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "自锁控制利用接触器辅助常开触点并联启动按钮，松开按钮后线圈仍能得电。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "电机自锁控制",
    "knowledgePoints": [
      "电气控制",
      "电机自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "电机自锁控制",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_064",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 4）",
    "question": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 4）",
    "options": [
      "取消过载保护",
      "防止正反转接触器同时吸合造成短路",
      "提高电机转速",
      "减少按钮数量"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "正反转接触器同时吸合会造成相序冲突甚至短路，必须用电气或机械互锁。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "正反转互锁",
    "knowledgePoints": [
      "电气控制",
      "正反转互锁"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "正反转互锁",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_065",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "PLC 中 X0、X1 通常表示什么类型点位？（任务 4）",
    "question": "PLC 中 X0、X1 通常表示什么类型点位？（任务 4）",
    "options": [
      "输入点",
      "输出点",
      "模拟量输出",
      "高速脉冲输出"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "常见教学型 PLC 中 X 表示输入，Y 表示输出；按钮、传感器通常接输入点。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC I/O",
    "knowledgePoints": [
      "电气控制",
      "PLC I/O"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC I/O",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_066",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "热继电器动作后，最应优先怀疑什么？（任务 4）（工位 066）",
    "question": "热继电器动作后，最应优先怀疑什么？（任务 4）（工位 066）",
    "options": [
      "按钮颜色错误",
      "HMI 亮度太高",
      "机械图纸比例不对",
      "电机过载或缺相"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "热继电器用于过载保护，动作说明电流热效应超过设定，应检查负载、缺相和电机状态。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "过载保护",
    "knowledgePoints": [
      "电气控制",
      "过载保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "过载保护",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_067",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "急停按钮在控制回路中通常采用哪类触点？（任务 4）（工位 067）",
    "question": "急停按钮在控制回路中通常采用哪类触点？（任务 4）（工位 067）",
    "options": [
      "随机触点",
      "无触点",
      "常闭触点",
      "常开触点"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "急停常用常闭触点串入安全回路，断线或按下时都能使设备停止，更符合失效安全思路。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "急停保护",
    "knowledgePoints": [
      "电气控制",
      "急停保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "急停保护",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_068",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 4）（工位 068）",
    "question": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 4）（工位 068）",
    "options": [
      "短路保护",
      "自锁控制",
      "点动控制",
      "反接制动"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "自锁控制利用接触器辅助常开触点并联启动按钮，松开按钮后线圈仍能得电。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "电机自锁控制",
    "knowledgePoints": [
      "电气控制",
      "电机自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "电机自锁控制",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_069",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "多选题",
    "difficulty": "medium",
    "text": "电机自锁控制通常包含哪些元件或触点？（多选 4）",
    "question": "电机自锁控制通常包含哪些元件或触点？（多选 4）",
    "options": [
      "停止按钮常闭触点",
      "启动按钮常开触点",
      "接触器线圈",
      "砂轮粗糙度样块"
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
    "explanation": "停止常闭、启动常开和接触器线圈是基本控制回路要素；粗糙度样块属于检测工具。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "自锁控制",
    "knowledgePoints": [
      "电气控制",
      "自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "自锁控制",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_070",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "多选题",
    "difficulty": "hard",
    "text": "PLC 输出点控制接触器时，应注意哪些事项？（多选 4）",
    "question": "PLC 输出点控制接触器时，应注意哪些事项？（多选 4）",
    "options": [
      "线圈电压是否匹配",
      "必要时加中间继电器",
      "随意短接急停",
      "输出容量是否足够"
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
    "explanation": "输出容量、电压和隔离保护都要考虑；急停不能被短接。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输出",
    "knowledgePoints": [
      "电气控制",
      "PLC 输出"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输出",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_071",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "多选题",
    "difficulty": "easy",
    "text": "设备电气维修前的安全措施包括哪些？（多选 4）",
    "question": "设备电气维修前的安全措施包括哪些？（多选 4）",
    "options": [
      "释放残余能量",
      "直接带电更换线圈",
      "断电挂牌",
      "验电确认"
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
    "explanation": "维修前应断电、验电并释放残余能量；带电更换元件风险很高。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全用电",
    "knowledgePoints": [
      "电气控制",
      "安全用电"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "安全用电",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_072",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "多选题",
    "difficulty": "easy",
    "text": "电机自锁控制通常包含哪些元件或触点？（多选 4）（工位 072）",
    "question": "电机自锁控制通常包含哪些元件或触点？（多选 4）（工位 072）",
    "options": [
      "砂轮粗糙度样块",
      "停止按钮常闭触点",
      "启动按钮常开触点",
      "接触器线圈"
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
    "explanation": "停止常闭、启动常开和接触器线圈是基本控制回路要素；粗糙度样块属于检测工具。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "自锁控制",
    "knowledgePoints": [
      "电气控制",
      "自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "自锁控制",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_073",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "常闭停止按钮断线时，设备应不能启动。（判断 4）",
    "question": "常闭停止按钮断线时，设备应不能启动。（判断 4）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。停止按钮常闭串联在控制回路中，断线相当于停止状态，符合安全设计。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "停止回路",
    "knowledgePoints": [
      "电气控制",
      "停止回路"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "停止回路",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_074",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "熔断器主要用于过载长期保护，不能用于短路保护。（判断 4）",
    "question": "熔断器主要用于过载长期保护，不能用于短路保护。（判断 4）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。熔断器主要用于短路保护，过载保护通常由热继电器等承担。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "低压电器",
    "knowledgePoints": [
      "电气控制",
      "低压电器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "低压电器",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_075",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "PLC 输入点可直接读取按钮或传感器的开关量状态。（判断 4）",
    "question": "PLC 输入点可直接读取按钮或传感器的开关量状态。（判断 4）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。按钮、限位、接近开关等开关量信号常接入 PLC 输入点。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输入",
    "knowledgePoints": [
      "电气控制",
      "PLC 输入"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输入",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_076",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "接触器用于频繁接通和分断电动机主电路，其线圈常用字母 ____ 表示。（填空 4）",
    "question": "接触器用于频繁接通和分断电动机主电路，其线圈常用字母 ____ 表示。（填空 4）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "KM",
    "acceptableAnswers": [
      "KM",
      "km"
    ],
    "fillAnswers": [
      "KM",
      "km"
    ],
    "answerText": "KM",
    "explanation": "KM 是接触器的常用文字符号，辅助触点可用于自锁和互锁。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接触器",
    "knowledgePoints": [
      "电气控制",
      "接触器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "接触器",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_077",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "热继电器的常用文字符号是 ____。（填空 4）",
    "question": "热继电器的常用文字符号是 ____。（填空 4）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "FR",
    "acceptableAnswers": [
      "FR",
      "fr"
    ],
    "fillAnswers": [
      "FR",
      "fr"
    ],
    "answerText": "FR",
    "explanation": "FR 常用于表示热继电器，其常闭触点串入控制回路实现过载断开。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "热继电器",
    "knowledgePoints": [
      "电气控制",
      "热继电器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "热继电器",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_078",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "PLC 中常用 Y0 表示一个 ____ 点。（填空 4）",
    "question": "PLC 中常用 Y0 表示一个 ____ 点。（填空 4）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "输出",
    "acceptableAnswers": [
      "输出",
      "输出点"
    ],
    "fillAnswers": [
      "输出",
      "输出点"
    ],
    "answerText": "输出",
    "explanation": "Y 点通常为输出点，可驱动指示灯、继电器或接触器线圈。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输出",
    "knowledgePoints": [
      "电气控制",
      "PLC 输出"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输出",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_079",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将电机自锁控制调试步骤排序，答案写数字串。（流程 4）",
    "question": "将电机自锁控制调试步骤排序，答案写数字串。（流程 4）",
    "promptCode": "1. 低压点动试运行\n2. 检查接线和绝缘\n3. 合闸前确认急停复位\n4. 测试启动、停止和自锁\n5. 记录异常并断电整改",
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
    "explanation": "调试先做接线和绝缘检查，再确认急停状态；低压或空载试运行后测试启动停止和自锁，发现异常要断电整改。",
    "image": "/assets/questions/electric/electrical_self_hold_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_self_hold_001.svg",
    "imageAlt": "电机自锁控制梯形图",
    "imageDescription": "启动按钮与 KM 常开辅助触点并联，形成自锁保持。",
    "knowledgePoint": "电气调试流程",
    "knowledgePoints": [
      "电气控制",
      "电气调试流程"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "电气调试流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_080",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将正反转故障排查步骤排序，答案写数字串。（流程 4）",
    "question": "将正反转故障排查步骤排序，答案写数字串。（流程 4）",
    "promptCode": "1. 检查互锁触点\n2. 断电挂牌\n3. 检查 KM 正反线圈\n4. 单独点动测试\n5. 恢复并试运行",
    "options": [],
    "answerIndex": -1,
    "answer": "2-1-3-4-5",
    "acceptableAnswers": [
      "2-1-3-4-5",
      "21345"
    ],
    "fillAnswers": [
      "2-1-3-4-5",
      "21345"
    ],
    "answerText": "2-1-3-4-5",
    "explanation": "电气排查必须先断电挂牌，再检查互锁和线圈，随后在安全条件下点动测试，最后恢复试运行。",
    "image": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageAlt": "正反转互锁简图",
    "imageDescription": "两个接触器必须互锁，防止电源相间短路。",
    "knowledgePoint": "正反转排故",
    "knowledgePoints": [
      "电气控制",
      "正反转排故"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "正反转排故",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_081",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "急停按钮在控制回路中通常采用哪类触点？（任务 5）",
    "question": "急停按钮在控制回路中通常采用哪类触点？（任务 5）",
    "options": [
      "常闭触点",
      "常开触点",
      "随机触点",
      "无触点"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "急停常用常闭触点串入安全回路，断线或按下时都能使设备停止，更符合失效安全思路。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "急停保护",
    "knowledgePoints": [
      "电气控制",
      "急停保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "急停保护",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_082",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 5）",
    "question": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 5）",
    "options": [
      "点动控制",
      "反接制动",
      "短路保护",
      "自锁控制"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "自锁控制利用接触器辅助常开触点并联启动按钮，松开按钮后线圈仍能得电。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "电机自锁控制",
    "knowledgePoints": [
      "电气控制",
      "电机自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "电机自锁控制",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_083",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 5）",
    "question": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 5）",
    "options": [
      "减少按钮数量",
      "取消过载保护",
      "防止正反转接触器同时吸合造成短路",
      "提高电机转速"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "正反转接触器同时吸合会造成相序冲突甚至短路，必须用电气或机械互锁。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "正反转互锁",
    "knowledgePoints": [
      "电气控制",
      "正反转互锁"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "正反转互锁",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_084",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "PLC 中 X0、X1 通常表示什么类型点位？（任务 5）",
    "question": "PLC 中 X0、X1 通常表示什么类型点位？（任务 5）",
    "options": [
      "高速脉冲输出",
      "输入点",
      "输出点",
      "模拟量输出"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "常见教学型 PLC 中 X 表示输入，Y 表示输出；按钮、传感器通常接输入点。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC I/O",
    "knowledgePoints": [
      "电气控制",
      "PLC I/O"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC I/O",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_085",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "热继电器动作后，最应优先怀疑什么？（任务 5）",
    "question": "热继电器动作后，最应优先怀疑什么？（任务 5）",
    "options": [
      "电机过载或缺相",
      "按钮颜色错误",
      "HMI 亮度太高",
      "机械图纸比例不对"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "热继电器用于过载保护，动作说明电流热效应超过设定，应检查负载、缺相和电机状态。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "过载保护",
    "knowledgePoints": [
      "电气控制",
      "过载保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "过载保护",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_086",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "急停按钮在控制回路中通常采用哪类触点？（任务 5）（工位 086）",
    "question": "急停按钮在控制回路中通常采用哪类触点？（任务 5）（工位 086）",
    "options": [
      "常开触点",
      "随机触点",
      "无触点",
      "常闭触点"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "急停常用常闭触点串入安全回路，断线或按下时都能使设备停止，更符合失效安全思路。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "急停保护",
    "knowledgePoints": [
      "电气控制",
      "急停保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "急停保护",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_087",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 5）（工位 087）",
    "question": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 5）（工位 087）",
    "options": [
      "反接制动",
      "短路保护",
      "自锁控制",
      "点动控制"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "自锁控制利用接触器辅助常开触点并联启动按钮，松开按钮后线圈仍能得电。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "电机自锁控制",
    "knowledgePoints": [
      "电气控制",
      "电机自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "电机自锁控制",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_088",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 5）（工位 088）",
    "question": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 5）（工位 088）",
    "options": [
      "取消过载保护",
      "防止正反转接触器同时吸合造成短路",
      "提高电机转速",
      "减少按钮数量"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "正反转接触器同时吸合会造成相序冲突甚至短路，必须用电气或机械互锁。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "正反转互锁",
    "knowledgePoints": [
      "电气控制",
      "正反转互锁"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "正反转互锁",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_089",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "多选题",
    "difficulty": "medium",
    "text": "设备电气维修前的安全措施包括哪些？（多选 5）",
    "question": "设备电气维修前的安全措施包括哪些？（多选 5）",
    "options": [
      "断电挂牌",
      "验电确认",
      "释放残余能量",
      "直接带电更换线圈"
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
    "explanation": "维修前应断电、验电并释放残余能量；带电更换元件风险很高。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全用电",
    "knowledgePoints": [
      "电气控制",
      "安全用电"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "安全用电",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_090",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "多选题",
    "difficulty": "hard",
    "text": "电机自锁控制通常包含哪些元件或触点？（多选 5）",
    "question": "电机自锁控制通常包含哪些元件或触点？（多选 5）",
    "options": [
      "启动按钮常开触点",
      "接触器线圈",
      "砂轮粗糙度样块",
      "停止按钮常闭触点"
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
    "explanation": "停止常闭、启动常开和接触器线圈是基本控制回路要素；粗糙度样块属于检测工具。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "自锁控制",
    "knowledgePoints": [
      "电气控制",
      "自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "自锁控制",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_091",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "多选题",
    "difficulty": "easy",
    "text": "PLC 输出点控制接触器时，应注意哪些事项？（多选 5）",
    "question": "PLC 输出点控制接触器时，应注意哪些事项？（多选 5）",
    "options": [
      "必要时加中间继电器",
      "随意短接急停",
      "输出容量是否足够",
      "线圈电压是否匹配"
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
    "explanation": "输出容量、电压和隔离保护都要考虑；急停不能被短接。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输出",
    "knowledgePoints": [
      "电气控制",
      "PLC 输出"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输出",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_092",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "多选题",
    "difficulty": "easy",
    "text": "设备电气维修前的安全措施包括哪些？（多选 5）（工位 092）",
    "question": "设备电气维修前的安全措施包括哪些？（多选 5）（工位 092）",
    "options": [
      "直接带电更换线圈",
      "断电挂牌",
      "验电确认",
      "释放残余能量"
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
    "explanation": "维修前应断电、验电并释放残余能量；带电更换元件风险很高。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全用电",
    "knowledgePoints": [
      "电气控制",
      "安全用电"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "安全用电",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_093",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "PLC 输入点可直接读取按钮或传感器的开关量状态。（判断 5）",
    "question": "PLC 输入点可直接读取按钮或传感器的开关量状态。（判断 5）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。按钮、限位、接近开关等开关量信号常接入 PLC 输入点。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输入",
    "knowledgePoints": [
      "电气控制",
      "PLC 输入"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输入",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_094",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "常闭停止按钮断线时，设备应不能启动。（判断 5）",
    "question": "常闭停止按钮断线时，设备应不能启动。（判断 5）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。停止按钮常闭串联在控制回路中，断线相当于停止状态，符合安全设计。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "停止回路",
    "knowledgePoints": [
      "电气控制",
      "停止回路"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "停止回路",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_095",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "熔断器主要用于过载长期保护，不能用于短路保护。（判断 5）",
    "question": "熔断器主要用于过载长期保护，不能用于短路保护。（判断 5）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。熔断器主要用于短路保护，过载保护通常由热继电器等承担。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "低压电器",
    "knowledgePoints": [
      "电气控制",
      "低压电器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "低压电器",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_096",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "PLC 中常用 Y0 表示一个 ____ 点。（填空 5）",
    "question": "PLC 中常用 Y0 表示一个 ____ 点。（填空 5）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "输出",
    "acceptableAnswers": [
      "输出",
      "输出点"
    ],
    "fillAnswers": [
      "输出",
      "输出点"
    ],
    "answerText": "输出",
    "explanation": "Y 点通常为输出点，可驱动指示灯、继电器或接触器线圈。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输出",
    "knowledgePoints": [
      "电气控制",
      "PLC 输出"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输出",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_097",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "接触器用于频繁接通和分断电动机主电路，其线圈常用字母 ____ 表示。（填空 5）",
    "question": "接触器用于频繁接通和分断电动机主电路，其线圈常用字母 ____ 表示。（填空 5）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "KM",
    "acceptableAnswers": [
      "KM",
      "km"
    ],
    "fillAnswers": [
      "KM",
      "km"
    ],
    "answerText": "KM",
    "explanation": "KM 是接触器的常用文字符号，辅助触点可用于自锁和互锁。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接触器",
    "knowledgePoints": [
      "电气控制",
      "接触器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "接触器",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_098",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "热继电器的常用文字符号是 ____。（填空 5）",
    "question": "热继电器的常用文字符号是 ____。（填空 5）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "FR",
    "acceptableAnswers": [
      "FR",
      "fr"
    ],
    "fillAnswers": [
      "FR",
      "fr"
    ],
    "answerText": "FR",
    "explanation": "FR 常用于表示热继电器，其常闭触点串入控制回路实现过载断开。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "热继电器",
    "knowledgePoints": [
      "电气控制",
      "热继电器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "热继电器",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_099",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将电机自锁控制调试步骤排序，答案写数字串。（流程 5）",
    "question": "将电机自锁控制调试步骤排序，答案写数字串。（流程 5）",
    "promptCode": "1. 低压点动试运行\n2. 检查接线和绝缘\n3. 合闸前确认急停复位\n4. 测试启动、停止和自锁\n5. 记录异常并断电整改",
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
    "explanation": "调试先做接线和绝缘检查，再确认急停状态；低压或空载试运行后测试启动停止和自锁，发现异常要断电整改。",
    "image": "/assets/questions/electric/electrical_self_hold_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_self_hold_001.svg",
    "imageAlt": "电机自锁控制梯形图",
    "imageDescription": "启动按钮与 KM 常开辅助触点并联，形成自锁保持。",
    "knowledgePoint": "电气调试流程",
    "knowledgePoints": [
      "电气控制",
      "电气调试流程"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "电气调试流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_100",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将正反转故障排查步骤排序，答案写数字串。（流程 5）",
    "question": "将正反转故障排查步骤排序，答案写数字串。（流程 5）",
    "promptCode": "1. 检查互锁触点\n2. 断电挂牌\n3. 检查 KM 正反线圈\n4. 单独点动测试\n5. 恢复并试运行",
    "options": [],
    "answerIndex": -1,
    "answer": "2-1-3-4-5",
    "acceptableAnswers": [
      "2-1-3-4-5",
      "21345"
    ],
    "fillAnswers": [
      "2-1-3-4-5",
      "21345"
    ],
    "answerText": "2-1-3-4-5",
    "explanation": "电气排查必须先断电挂牌，再检查互锁和线圈，随后在安全条件下点动测试，最后恢复试运行。",
    "image": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageAlt": "正反转互锁简图",
    "imageDescription": "两个接触器必须互锁，防止电源相间短路。",
    "knowledgePoint": "正反转排故",
    "knowledgePoints": [
      "电气控制",
      "正反转排故"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "正反转排故",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_101",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 6）",
    "question": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 6）",
    "options": [
      "自锁控制",
      "点动控制",
      "反接制动",
      "短路保护"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "自锁控制利用接触器辅助常开触点并联启动按钮，松开按钮后线圈仍能得电。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "电机自锁控制",
    "knowledgePoints": [
      "电气控制",
      "电机自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "电机自锁控制",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_102",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 6）",
    "question": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 6）",
    "options": [
      "提高电机转速",
      "减少按钮数量",
      "取消过载保护",
      "防止正反转接触器同时吸合造成短路"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "正反转接触器同时吸合会造成相序冲突甚至短路，必须用电气或机械互锁。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "正反转互锁",
    "knowledgePoints": [
      "电气控制",
      "正反转互锁"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "正反转互锁",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_103",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "PLC 中 X0、X1 通常表示什么类型点位？（任务 6）",
    "question": "PLC 中 X0、X1 通常表示什么类型点位？（任务 6）",
    "options": [
      "模拟量输出",
      "高速脉冲输出",
      "输入点",
      "输出点"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "常见教学型 PLC 中 X 表示输入，Y 表示输出；按钮、传感器通常接输入点。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC I/O",
    "knowledgePoints": [
      "电气控制",
      "PLC I/O"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC I/O",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_104",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "热继电器动作后，最应优先怀疑什么？（任务 6）",
    "question": "热继电器动作后，最应优先怀疑什么？（任务 6）",
    "options": [
      "机械图纸比例不对",
      "电机过载或缺相",
      "按钮颜色错误",
      "HMI 亮度太高"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "热继电器用于过载保护，动作说明电流热效应超过设定，应检查负载、缺相和电机状态。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "过载保护",
    "knowledgePoints": [
      "电气控制",
      "过载保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "过载保护",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_105",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "急停按钮在控制回路中通常采用哪类触点？（任务 6）",
    "question": "急停按钮在控制回路中通常采用哪类触点？（任务 6）",
    "options": [
      "常闭触点",
      "常开触点",
      "随机触点",
      "无触点"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "急停常用常闭触点串入安全回路，断线或按下时都能使设备停止，更符合失效安全思路。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "急停保护",
    "knowledgePoints": [
      "电气控制",
      "急停保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "急停保护",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_106",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 6）（工位 106）",
    "question": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 6）（工位 106）",
    "options": [
      "点动控制",
      "反接制动",
      "短路保护",
      "自锁控制"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "自锁控制利用接触器辅助常开触点并联启动按钮，松开按钮后线圈仍能得电。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "电机自锁控制",
    "knowledgePoints": [
      "电气控制",
      "电机自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "电机自锁控制",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_107",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 6）（工位 107）",
    "question": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 6）（工位 107）",
    "options": [
      "减少按钮数量",
      "取消过载保护",
      "防止正反转接触器同时吸合造成短路",
      "提高电机转速"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "正反转接触器同时吸合会造成相序冲突甚至短路，必须用电气或机械互锁。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "正反转互锁",
    "knowledgePoints": [
      "电气控制",
      "正反转互锁"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "正反转互锁",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_108",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "PLC 中 X0、X1 通常表示什么类型点位？（任务 6）（工位 108）",
    "question": "PLC 中 X0、X1 通常表示什么类型点位？（任务 6）（工位 108）",
    "options": [
      "高速脉冲输出",
      "输入点",
      "输出点",
      "模拟量输出"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "常见教学型 PLC 中 X 表示输入，Y 表示输出；按钮、传感器通常接输入点。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC I/O",
    "knowledgePoints": [
      "电气控制",
      "PLC I/O"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC I/O",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_109",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "多选题",
    "difficulty": "medium",
    "text": "PLC 输出点控制接触器时，应注意哪些事项？（多选 6）",
    "question": "PLC 输出点控制接触器时，应注意哪些事项？（多选 6）",
    "options": [
      "输出容量是否足够",
      "线圈电压是否匹配",
      "必要时加中间继电器",
      "随意短接急停"
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
    "explanation": "输出容量、电压和隔离保护都要考虑；急停不能被短接。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输出",
    "knowledgePoints": [
      "电气控制",
      "PLC 输出"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输出",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_110",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "多选题",
    "difficulty": "hard",
    "text": "设备电气维修前的安全措施包括哪些？（多选 6）",
    "question": "设备电气维修前的安全措施包括哪些？（多选 6）",
    "options": [
      "验电确认",
      "释放残余能量",
      "直接带电更换线圈",
      "断电挂牌"
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
    "explanation": "维修前应断电、验电并释放残余能量；带电更换元件风险很高。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全用电",
    "knowledgePoints": [
      "电气控制",
      "安全用电"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "安全用电",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_111",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "多选题",
    "difficulty": "easy",
    "text": "电机自锁控制通常包含哪些元件或触点？（多选 6）",
    "question": "电机自锁控制通常包含哪些元件或触点？（多选 6）",
    "options": [
      "接触器线圈",
      "砂轮粗糙度样块",
      "停止按钮常闭触点",
      "启动按钮常开触点"
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
    "explanation": "停止常闭、启动常开和接触器线圈是基本控制回路要素；粗糙度样块属于检测工具。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "自锁控制",
    "knowledgePoints": [
      "电气控制",
      "自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "自锁控制",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_112",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "多选题",
    "difficulty": "easy",
    "text": "PLC 输出点控制接触器时，应注意哪些事项？（多选 6）（工位 112）",
    "question": "PLC 输出点控制接触器时，应注意哪些事项？（多选 6）（工位 112）",
    "options": [
      "随意短接急停",
      "输出容量是否足够",
      "线圈电压是否匹配",
      "必要时加中间继电器"
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
    "explanation": "输出容量、电压和隔离保护都要考虑；急停不能被短接。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输出",
    "knowledgePoints": [
      "电气控制",
      "PLC 输出"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输出",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_113",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "熔断器主要用于过载长期保护，不能用于短路保护。（判断 6）",
    "question": "熔断器主要用于过载长期保护，不能用于短路保护。（判断 6）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。熔断器主要用于短路保护，过载保护通常由热继电器等承担。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "低压电器",
    "knowledgePoints": [
      "电气控制",
      "低压电器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "低压电器",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_114",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "PLC 输入点可直接读取按钮或传感器的开关量状态。（判断 6）",
    "question": "PLC 输入点可直接读取按钮或传感器的开关量状态。（判断 6）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。按钮、限位、接近开关等开关量信号常接入 PLC 输入点。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输入",
    "knowledgePoints": [
      "电气控制",
      "PLC 输入"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输入",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_115",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "常闭停止按钮断线时，设备应不能启动。（判断 6）",
    "question": "常闭停止按钮断线时，设备应不能启动。（判断 6）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。停止按钮常闭串联在控制回路中，断线相当于停止状态，符合安全设计。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "停止回路",
    "knowledgePoints": [
      "电气控制",
      "停止回路"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "停止回路",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_116",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "热继电器的常用文字符号是 ____。（填空 6）",
    "question": "热继电器的常用文字符号是 ____。（填空 6）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "FR",
    "acceptableAnswers": [
      "FR",
      "fr"
    ],
    "fillAnswers": [
      "FR",
      "fr"
    ],
    "answerText": "FR",
    "explanation": "FR 常用于表示热继电器，其常闭触点串入控制回路实现过载断开。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "热继电器",
    "knowledgePoints": [
      "电气控制",
      "热继电器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "热继电器",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_117",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "PLC 中常用 Y0 表示一个 ____ 点。（填空 6）",
    "question": "PLC 中常用 Y0 表示一个 ____ 点。（填空 6）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "输出",
    "acceptableAnswers": [
      "输出",
      "输出点"
    ],
    "fillAnswers": [
      "输出",
      "输出点"
    ],
    "answerText": "输出",
    "explanation": "Y 点通常为输出点，可驱动指示灯、继电器或接触器线圈。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输出",
    "knowledgePoints": [
      "电气控制",
      "PLC 输出"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输出",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_118",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "接触器用于频繁接通和分断电动机主电路，其线圈常用字母 ____ 表示。（填空 6）",
    "question": "接触器用于频繁接通和分断电动机主电路，其线圈常用字母 ____ 表示。（填空 6）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "KM",
    "acceptableAnswers": [
      "KM",
      "km"
    ],
    "fillAnswers": [
      "KM",
      "km"
    ],
    "answerText": "KM",
    "explanation": "KM 是接触器的常用文字符号，辅助触点可用于自锁和互锁。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接触器",
    "knowledgePoints": [
      "电气控制",
      "接触器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "接触器",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_119",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将电机自锁控制调试步骤排序，答案写数字串。（流程 6）",
    "question": "将电机自锁控制调试步骤排序，答案写数字串。（流程 6）",
    "promptCode": "1. 低压点动试运行\n2. 检查接线和绝缘\n3. 合闸前确认急停复位\n4. 测试启动、停止和自锁\n5. 记录异常并断电整改",
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
    "explanation": "调试先做接线和绝缘检查，再确认急停状态；低压或空载试运行后测试启动停止和自锁，发现异常要断电整改。",
    "image": "/assets/questions/electric/electrical_self_hold_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_self_hold_001.svg",
    "imageAlt": "电机自锁控制梯形图",
    "imageDescription": "启动按钮与 KM 常开辅助触点并联，形成自锁保持。",
    "knowledgePoint": "电气调试流程",
    "knowledgePoints": [
      "电气控制",
      "电气调试流程"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "电气调试流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_120",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将正反转故障排查步骤排序，答案写数字串。（流程 6）",
    "question": "将正反转故障排查步骤排序，答案写数字串。（流程 6）",
    "promptCode": "1. 检查互锁触点\n2. 断电挂牌\n3. 检查 KM 正反线圈\n4. 单独点动测试\n5. 恢复并试运行",
    "options": [],
    "answerIndex": -1,
    "answer": "2-1-3-4-5",
    "acceptableAnswers": [
      "2-1-3-4-5",
      "21345"
    ],
    "fillAnswers": [
      "2-1-3-4-5",
      "21345"
    ],
    "answerText": "2-1-3-4-5",
    "explanation": "电气排查必须先断电挂牌，再检查互锁和线圈，随后在安全条件下点动测试，最后恢复试运行。",
    "image": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageAlt": "正反转互锁简图",
    "imageDescription": "两个接触器必须互锁，防止电源相间短路。",
    "knowledgePoint": "正反转排故",
    "knowledgePoints": [
      "电气控制",
      "正反转排故"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "正反转排故",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_121",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 7）",
    "question": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 7）",
    "options": [
      "防止正反转接触器同时吸合造成短路",
      "提高电机转速",
      "减少按钮数量",
      "取消过载保护"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正反转接触器同时吸合会造成相序冲突甚至短路，必须用电气或机械互锁。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "正反转互锁",
    "knowledgePoints": [
      "电气控制",
      "正反转互锁"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "正反转互锁",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_122",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "PLC 中 X0、X1 通常表示什么类型点位？（任务 7）",
    "question": "PLC 中 X0、X1 通常表示什么类型点位？（任务 7）",
    "options": [
      "输出点",
      "模拟量输出",
      "高速脉冲输出",
      "输入点"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "常见教学型 PLC 中 X 表示输入，Y 表示输出；按钮、传感器通常接输入点。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC I/O",
    "knowledgePoints": [
      "电气控制",
      "PLC I/O"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC I/O",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_123",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "热继电器动作后，最应优先怀疑什么？（任务 7）",
    "question": "热继电器动作后，最应优先怀疑什么？（任务 7）",
    "options": [
      "HMI 亮度太高",
      "机械图纸比例不对",
      "电机过载或缺相",
      "按钮颜色错误"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "热继电器用于过载保护，动作说明电流热效应超过设定，应检查负载、缺相和电机状态。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "过载保护",
    "knowledgePoints": [
      "电气控制",
      "过载保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "过载保护",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_124",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "急停按钮在控制回路中通常采用哪类触点？（任务 7）",
    "question": "急停按钮在控制回路中通常采用哪类触点？（任务 7）",
    "options": [
      "无触点",
      "常闭触点",
      "常开触点",
      "随机触点"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "急停常用常闭触点串入安全回路，断线或按下时都能使设备停止，更符合失效安全思路。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "急停保护",
    "knowledgePoints": [
      "电气控制",
      "急停保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "急停保护",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_125",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "场景分析题",
    "difficulty": "easy",
    "text": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 7）",
    "question": "按下启动按钮后接触器吸合，松开按钮后仍保持运行，这属于什么控制？（任务 7）",
    "options": [
      "自锁控制",
      "点动控制",
      "反接制动",
      "短路保护"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "自锁控制利用接触器辅助常开触点并联启动按钮，松开按钮后线圈仍能得电。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "电机自锁控制",
    "knowledgePoints": [
      "电气控制",
      "电机自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "电机自锁控制",
      "场景分析题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_126",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 7）（工位 126）",
    "question": "电机正反转控制中必须设置互锁，主要目的是什么？（任务 7）（工位 126）",
    "options": [
      "提高电机转速",
      "减少按钮数量",
      "取消过载保护",
      "防止正反转接触器同时吸合造成短路"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "正反转接触器同时吸合会造成相序冲突甚至短路，必须用电气或机械互锁。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "正反转互锁",
    "knowledgePoints": [
      "电气控制",
      "正反转互锁"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "正反转互锁",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_127",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "PLC 中 X0、X1 通常表示什么类型点位？（任务 7）（工位 127）",
    "question": "PLC 中 X0、X1 通常表示什么类型点位？（任务 7）（工位 127）",
    "options": [
      "模拟量输出",
      "高速脉冲输出",
      "输入点",
      "输出点"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "常见教学型 PLC 中 X 表示输入，Y 表示输出；按钮、传感器通常接输入点。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC I/O",
    "knowledgePoints": [
      "电气控制",
      "PLC I/O"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC I/O",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_128",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "热继电器动作后，最应优先怀疑什么？（任务 7）（工位 128）",
    "question": "热继电器动作后，最应优先怀疑什么？（任务 7）（工位 128）",
    "options": [
      "机械图纸比例不对",
      "电机过载或缺相",
      "按钮颜色错误",
      "HMI 亮度太高"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "热继电器用于过载保护，动作说明电流热效应超过设定，应检查负载、缺相和电机状态。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "过载保护",
    "knowledgePoints": [
      "电气控制",
      "过载保护"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "过载保护",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_129",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "多选题",
    "difficulty": "medium",
    "text": "电机自锁控制通常包含哪些元件或触点？（多选 7）",
    "question": "电机自锁控制通常包含哪些元件或触点？（多选 7）",
    "options": [
      "停止按钮常闭触点",
      "启动按钮常开触点",
      "接触器线圈",
      "砂轮粗糙度样块"
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
    "explanation": "停止常闭、启动常开和接触器线圈是基本控制回路要素；粗糙度样块属于检测工具。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "自锁控制",
    "knowledgePoints": [
      "电气控制",
      "自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "自锁控制",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_130",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "多选题",
    "difficulty": "hard",
    "text": "PLC 输出点控制接触器时，应注意哪些事项？（多选 7）",
    "question": "PLC 输出点控制接触器时，应注意哪些事项？（多选 7）",
    "options": [
      "线圈电压是否匹配",
      "必要时加中间继电器",
      "随意短接急停",
      "输出容量是否足够"
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
    "explanation": "输出容量、电压和隔离保护都要考虑；急停不能被短接。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输出",
    "knowledgePoints": [
      "电气控制",
      "PLC 输出"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输出",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_131",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "多选题",
    "difficulty": "easy",
    "text": "设备电气维修前的安全措施包括哪些？（多选 7）",
    "question": "设备电气维修前的安全措施包括哪些？（多选 7）",
    "options": [
      "释放残余能量",
      "直接带电更换线圈",
      "断电挂牌",
      "验电确认"
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
    "explanation": "维修前应断电、验电并释放残余能量；带电更换元件风险很高。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全用电",
    "knowledgePoints": [
      "电气控制",
      "安全用电"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "安全用电",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_132",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "多选题",
    "difficulty": "easy",
    "text": "电机自锁控制通常包含哪些元件或触点？（多选 7）（工位 132）",
    "question": "电机自锁控制通常包含哪些元件或触点？（多选 7）（工位 132）",
    "options": [
      "砂轮粗糙度样块",
      "停止按钮常闭触点",
      "启动按钮常开触点",
      "接触器线圈"
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
    "explanation": "停止常闭、启动常开和接触器线圈是基本控制回路要素；粗糙度样块属于检测工具。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "自锁控制",
    "knowledgePoints": [
      "电气控制",
      "自锁控制"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "自锁控制",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "dqkz_133",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "常闭停止按钮断线时，设备应不能启动。（判断 7）",
    "question": "常闭停止按钮断线时，设备应不能启动。（判断 7）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。停止按钮常闭串联在控制回路中，断线相当于停止状态，符合安全设计。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "停止回路",
    "knowledgePoints": [
      "电气控制",
      "停止回路"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "停止回路",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_134",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "熔断器主要用于过载长期保护，不能用于短路保护。（判断 7）",
    "question": "熔断器主要用于过载长期保护，不能用于短路保护。（判断 7）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。熔断器主要用于短路保护，过载保护通常由热继电器等承担。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "低压电器",
    "knowledgePoints": [
      "电气控制",
      "低压电器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "低压电器",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_135",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "PLC 输入点可直接读取按钮或传感器的开关量状态。（判断 7）",
    "question": "PLC 输入点可直接读取按钮或传感器的开关量状态。（判断 7）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。按钮、限位、接近开关等开关量信号常接入 PLC 输入点。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输入",
    "knowledgePoints": [
      "电气控制",
      "PLC 输入"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输入",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_136",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "接触器用于频繁接通和分断电动机主电路，其线圈常用字母 ____ 表示。（填空 7）",
    "question": "接触器用于频繁接通和分断电动机主电路，其线圈常用字母 ____ 表示。（填空 7）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "KM",
    "acceptableAnswers": [
      "KM",
      "km"
    ],
    "fillAnswers": [
      "KM",
      "km"
    ],
    "answerText": "KM",
    "explanation": "KM 是接触器的常用文字符号，辅助触点可用于自锁和互锁。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "接触器",
    "knowledgePoints": [
      "电气控制",
      "接触器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "接触器",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_137",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "热继电器的常用文字符号是 ____。（填空 7）",
    "question": "热继电器的常用文字符号是 ____。（填空 7）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "FR",
    "acceptableAnswers": [
      "FR",
      "fr"
    ],
    "fillAnswers": [
      "FR",
      "fr"
    ],
    "answerText": "FR",
    "explanation": "FR 常用于表示热继电器，其常闭触点串入控制回路实现过载断开。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "热继电器",
    "knowledgePoints": [
      "电气控制",
      "热继电器"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "热继电器",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_138",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "PLC 中常用 Y0 表示一个 ____ 点。（填空 7）",
    "question": "PLC 中常用 Y0 表示一个 ____ 点。（填空 7）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "输出",
    "acceptableAnswers": [
      "输出",
      "输出点"
    ],
    "fillAnswers": [
      "输出",
      "输出点"
    ],
    "answerText": "输出",
    "explanation": "Y 点通常为输出点，可驱动指示灯、继电器或接触器线圈。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "PLC 输出",
    "knowledgePoints": [
      "电气控制",
      "PLC 输出"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "PLC 输出",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_139",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-1",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将电机自锁控制调试步骤排序，答案写数字串。（流程 7）",
    "question": "将电机自锁控制调试步骤排序，答案写数字串。（流程 7）",
    "promptCode": "1. 低压点动试运行\n2. 检查接线和绝缘\n3. 合闸前确认急停复位\n4. 测试启动、停止和自锁\n5. 记录异常并断电整改",
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
    "explanation": "调试先做接线和绝缘检查，再确认急停状态；低压或空载试运行后测试启动停止和自锁，发现异常要断电整改。",
    "image": "/assets/questions/electric/electrical_self_hold_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_self_hold_001.svg",
    "imageAlt": "电机自锁控制梯形图",
    "imageDescription": "启动按钮与 KM 常开辅助触点并联，形成自锁保持。",
    "knowledgePoint": "电气调试流程",
    "knowledgePoints": [
      "电气控制",
      "电气调试流程"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "电气调试流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "dqkz_140",
    "category": "电气控制区",
    "area": "电气控制区",
    "module": "电气控制",
    "moduleName": "电气控制区",
    "levelId": "electric-2",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将正反转故障排查步骤排序，答案写数字串。（流程 7）",
    "question": "将正反转故障排查步骤排序，答案写数字串。（流程 7）",
    "promptCode": "1. 检查互锁触点\n2. 断电挂牌\n3. 检查 KM 正反线圈\n4. 单独点动测试\n5. 恢复并试运行",
    "options": [],
    "answerIndex": -1,
    "answer": "2-1-3-4-5",
    "acceptableAnswers": [
      "2-1-3-4-5",
      "21345"
    ],
    "fillAnswers": [
      "2-1-3-4-5",
      "21345"
    ],
    "answerText": "2-1-3-4-5",
    "explanation": "电气排查必须先断电挂牌，再检查互锁和线圈，随后在安全条件下点动测试，最后恢复试运行。",
    "image": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageUrl": "/assets/questions/electric/electrical_interlock_001.svg",
    "imageAlt": "正反转互锁简图",
    "imageDescription": "两个接触器必须互锁，防止电源相间短路。",
    "knowledgePoint": "正反转排故",
    "knowledgePoints": [
      "电气控制",
      "正反转排故"
    ],
    "tags": [
      "电气控制区",
      "电气控制",
      "正反转排故",
      "process_order"
    ],
    "isMultiple": false
  }
];

export const electricalControlQuestionsStats = {
  "total": 140,
  "type": {
    "场景分析题": 14,
    "单选题": 42,
    "多选题": 28,
    "判断题": 21,
    "填空题": 21,
    "process_order": 14
  },
  "difficulty": {
    "easy": 70,
    "medium": 56,
    "hard": 14
  },
  "imageCount": 24,
  "dedupedTextCount": 28
};
