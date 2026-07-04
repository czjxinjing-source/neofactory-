import type { Question } from "./questions";

export const toleranceDetectionQuestions: Question[] = [
  {
    "id": "gcjc_001",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "读数题",
    "difficulty": "easy",
    "text": "φ30 +0.021/0 的孔，实测 30.018 mm，应如何判定？（检测任务 1）",
    "question": "φ30 +0.021/0 的孔，实测 30.018 mm，应如何判定？（检测任务 1）",
    "options": [
      "合格",
      "偏小不合格",
      "偏大不合格",
      "无法根据尺寸判断"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "该尺寸允许范围为 30.000 至 30.021 mm，30.018 mm 落在范围内，因此合格；偏小和偏大都不符合实测情况。",
    "image": "/assets/questions/tolerance/tolerance_band_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_band_001.svg",
    "imageAlt": "公差带与极限尺寸",
    "imageDescription": "φ30 +0.021/0 的合格范围为 30.000 至 30.021 mm。",
    "knowledgePoint": "极限尺寸判定",
    "knowledgePoints": [
      "公差检测",
      "极限尺寸判定"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "极限尺寸判定",
      "读数题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_002",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "千分尺主尺 12.5 mm，微分筒对准 36 格，读数是多少？（检测任务 1）",
    "question": "千分尺主尺 12.5 mm，微分筒对准 36 格，读数是多少？（检测任务 1）",
    "options": [
      "12.50 mm",
      "12.86 mm",
      "13.36 mm",
      "12.36 mm"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "外径千分尺常按 0.01 mm 读微分筒，36 格为 0.36 mm，总读数为 12.5 + 0.36 = 12.86 mm。",
    "image": "/assets/questions/tolerance/tolerance_micrometer_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_micrometer_001.svg",
    "imageAlt": "外径千分尺读数 12.86 mm",
    "imageDescription": "读数为 12.5 + 0.36 = 12.86 mm。",
    "knowledgePoint": "千分尺读数",
    "knowledgePoints": [
      "公差检测",
      "千分尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "千分尺读数",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_003",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "百分表每格 0.01 mm，指针转过 23 格，位移量是多少？（检测任务 1）",
    "question": "百分表每格 0.01 mm，指针转过 23 格，位移量是多少？（检测任务 1）",
    "options": [
      "2.3 mm",
      "23 mm",
      "0.023 mm",
      "0.23 mm"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "百分表每格 0.01 mm，23 格为 0.23 mm。读数题要先确认每格代表的量，再乘以格数。",
    "image": "/assets/questions/tolerance/tolerance_dial_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_dial_001.svg",
    "imageAlt": "百分表读数 0.23 mm",
    "imageDescription": "位移为 23 x 0.01 = 0.23 mm。",
    "knowledgePoint": "百分表读数",
    "knowledgePoints": [
      "公差检测",
      "百分表读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "百分表读数",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_004",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "孔为 φ40H7，轴为 φ40g6，通常属于哪类配合？（检测任务 1）",
    "question": "孔为 φ40H7，轴为 φ40g6，通常属于哪类配合？（检测任务 1）",
    "options": [
      "无法装配",
      "间隙配合",
      "过盈配合",
      "过渡配合"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "H7 孔下偏差为 0，g6 轴位于零线下方，轴通常小于孔，装配后形成间隙，适合相对转动。",
    "image": "/assets/questions/tolerance/tolerance_fit_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_fit_001.svg",
    "imageAlt": "孔轴间隙配合示意",
    "imageDescription": "孔为 H7、轴为 g6 时通常形成间隙配合。",
    "knowledgePoint": "孔轴配合",
    "knowledgePoints": [
      "公差检测",
      "孔轴配合"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "孔轴配合",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_005",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "粗糙度标注 Ra 1.6 主要限制什么？（检测任务 1）",
    "question": "粗糙度标注 Ra 1.6 主要限制什么？（检测任务 1）",
    "options": [
      "表面微观不平度",
      "零件总长度",
      "孔轴配合间隙",
      "材料硬度"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "Ra 是轮廓算术平均偏差，反映表面微观起伏程度，不是尺寸、配合或硬度指标。",
    "image": "/assets/questions/tolerance/tolerance_roughness_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_roughness_001.svg",
    "imageAlt": "粗糙度 Ra 1.6 标注",
    "imageDescription": "Ra 1.6 是表面粗糙度要求，不是尺寸公差。",
    "knowledgePoint": "表面粗糙度",
    "knowledgePoints": [
      "公差检测",
      "表面粗糙度"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "表面粗糙度",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_006",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "读数题",
    "difficulty": "medium",
    "text": "几何公差框格“⊥ 0.05 A”表示什么？（检测任务 1）",
    "question": "几何公差框格“⊥ 0.05 A”表示什么？（检测任务 1）",
    "options": [
      "相对基准 A 的粗糙度 0.05",
      "尺寸上偏差 0.05",
      "孔径为 0.05",
      "相对基准 A 的垂直度公差 0.05"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "符号 ⊥ 表示垂直度，0.05 是公差值，A 是基准。它控制方向误差，不直接表示尺寸大小。",
    "image": "/assets/questions/tolerance/tolerance_gdandt_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_gdandt_001.svg",
    "imageAlt": "几何公差框格",
    "imageDescription": "框格含义：垂直度 0.05，相对基准 A。",
    "knowledgePoint": "几何公差框格",
    "knowledgePoints": [
      "公差检测",
      "几何公差框格"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "几何公差框格",
      "读数题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_007",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "用通止规检验孔时，正确判定方法是什么？（检测任务 1）",
    "question": "用通止规检验孔时，正确判定方法是什么？（检测任务 1）",
    "options": [
      "两端都通过才合格",
      "两端都不通过才合格",
      "通端通过、止端不通过为合格",
      "通端不通过、止端通过为合格"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "通端代表最大实体边界，应能通过；止端代表另一极限，不应通过。两端都通过常说明孔偏大。",
    "image": "/assets/questions/tolerance/tolerance_go_nogo_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_go_nogo_001.svg",
    "imageAlt": "通止规检验孔",
    "imageDescription": "通端应能通过，止端不应通过，用于快速判断孔是否合格。",
    "knowledgePoint": "通止规检验",
    "knowledgePoints": [
      "公差检测",
      "通止规检验"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "通止规检验",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_008",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "游标卡尺主尺读到 23 mm，游标第 4 格对齐且分度值 0.10 mm，读数为多少？（检测任务 1）",
    "question": "游标卡尺主尺读到 23 mm，游标第 4 格对齐且分度值 0.10 mm，读数为多少？（检测任务 1）",
    "options": [
      "22.60 mm",
      "23.04 mm",
      "23.40 mm",
      "24.30 mm"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "读数等于主尺整数 23 mm 加游标 4 x 0.10 mm，即 23.40 mm。",
    "image": "/assets/questions/tolerance/tolerance_caliper_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_caliper_001.svg",
    "imageAlt": "游标卡尺读数 23.40 mm",
    "imageDescription": "读数为 23 + 0.40 = 23.40 mm。",
    "knowledgePoint": "游标卡尺读数",
    "knowledgePoints": [
      "公差检测",
      "游标卡尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "游标卡尺读数",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_009",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "多选题",
    "difficulty": "medium",
    "text": "影响测量误差的常见因素有哪些？（现场复核 1）",
    "question": "影响测量误差的常见因素有哪些？（现场复核 1）",
    "options": [
      "量具零位误差",
      "测量力过大",
      "工件温度变化",
      "零件颜色鲜艳"
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
    "explanation": "零位、测量力、温度都会影响测量结果；颜色本身不是尺寸测量误差来源。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "测量误差",
    "knowledgePoints": [
      "公差检测",
      "测量误差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "测量误差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_010",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "多选题",
    "difficulty": "hard",
    "text": "下列哪些属于几何公差项目？（现场复核 1）",
    "question": "下列哪些属于几何公差项目？（现场复核 1）",
    "options": [
      "同轴度",
      "圆跳动",
      "毛坯成本",
      "平面度"
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
    "explanation": "平面度、同轴度、圆跳动都是几何公差项目；毛坯成本不是公差项目。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "几何公差",
    "knowledgePoints": [
      "公差检测",
      "几何公差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "几何公差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_011",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "多选题",
    "difficulty": "easy",
    "text": "选择检测方法时应考虑哪些因素？（现场复核 1）",
    "question": "选择检测方法时应考虑哪些因素？（现场复核 1）",
    "options": [
      "检测效率",
      "操作者衣服颜色",
      "尺寸公差大小",
      "生产批量"
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
    "explanation": "公差越严、批量越大，对量具精度和效率要求越高；衣服颜色无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "检测方法选择",
    "knowledgePoints": [
      "公差检测",
      "检测方法选择"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "检测方法选择",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_012",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "多选题",
    "difficulty": "easy",
    "text": "影响测量误差的常见因素有哪些？（现场复核 1）（工位 012）",
    "question": "影响测量误差的常见因素有哪些？（现场复核 1）（工位 012）",
    "options": [
      "零件颜色鲜艳",
      "量具零位误差",
      "测量力过大",
      "工件温度变化"
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
    "explanation": "零位、测量力、温度都会影响测量结果；颜色本身不是尺寸测量误差来源。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "测量误差",
    "knowledgePoints": [
      "公差检测",
      "测量误差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "测量误差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_013",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "公差等于上极限尺寸减下极限尺寸。（判断 1）",
    "question": "公差等于上极限尺寸减下极限尺寸。（判断 1）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。公差反映允许尺寸变动范围，数值为上极限尺寸与下极限尺寸之差。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "尺寸公差",
    "knowledgePoints": [
      "公差检测",
      "尺寸公差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "尺寸公差",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_014",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "间隙配合适用于两个零件装配后需要相对运动的场合。（判断 1）",
    "question": "间隙配合适用于两个零件装配后需要相对运动的场合。（判断 1）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。需要转动或滑动时通常要留出合理间隙，并配合润滑和精度要求。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "间隙配合",
    "knowledgePoints": [
      "公差检测",
      "间隙配合"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "间隙配合",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_015",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "测量前不需要检查游标卡尺零位。（判断 1）",
    "question": "测量前不需要检查游标卡尺零位。（判断 1）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。零位偏差会直接带入读数，现场检测前应先合拢量爪检查零位。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "量具使用",
    "knowledgePoints": [
      "公差检测",
      "量具使用"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "量具使用",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_016",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "尺寸 30 +0.021/0 中，上偏差是 ____ mm。（填空 1）",
    "question": "尺寸 30 +0.021/0 中，上偏差是 ____ mm。（填空 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "0.021",
    "acceptableAnswers": [
      "0.021",
      "+0.021"
    ],
    "fillAnswers": [
      "0.021",
      "+0.021"
    ],
    "answerText": "0.021",
    "explanation": "上偏差是上极限尺寸相对公称尺寸的偏差，本题为 +0.021 mm。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "上偏差",
    "knowledgePoints": [
      "公差检测",
      "上偏差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "上偏差",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_017",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "外径千分尺微分筒 1 格通常表示 ____ mm。（填空 1）",
    "question": "外径千分尺微分筒 1 格通常表示 ____ mm。（填空 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "0.01",
    "acceptableAnswers": [
      "0.01",
      "0.01mm"
    ],
    "fillAnswers": [
      "0.01",
      "0.01mm"
    ],
    "answerText": "0.01",
    "explanation": "常用千分尺分度值为 0.01 mm，读数时要加到主尺读数上。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "千分尺读数",
    "knowledgePoints": [
      "公差检测",
      "千分尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "千分尺读数",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_018",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "表面粗糙度常用参数 Ra 表示轮廓算术平均 ____。（填空 1）",
    "question": "表面粗糙度常用参数 Ra 表示轮廓算术平均 ____。（填空 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "偏差",
    "acceptableAnswers": [
      "偏差",
      "高度偏差",
      "轮廓偏差"
    ],
    "fillAnswers": [
      "偏差",
      "高度偏差",
      "轮廓偏差"
    ],
    "answerText": "偏差",
    "explanation": "Ra 是轮廓算术平均偏差，用于描述表面微观不平度。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "表面粗糙度",
    "knowledgePoints": [
      "公差检测",
      "表面粗糙度"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "表面粗糙度",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_019",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将生产现场尺寸检测流程排序（批次 1）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。",
    "question": "将生产现场尺寸检测流程排序（批次 1）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。",
    "promptCode": "1. 记录结果\n2. 清洁量具和工件\n3. 选择合适量具\n4. 测量并复核\n5. 判定是否合格",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-5-1",
    "acceptableAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "fillAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "answerText": "2-3-4-5-1",
    "explanation": "检测前先清洁量具和工件，再按公差要求选择量具；测量要复核，随后与极限尺寸比较判定，最后记录结果，形成可追溯的质量数据。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "现场检测流程",
    "knowledgePoints": [
      "公差检测",
      "现场检测流程"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "现场检测流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_020",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将生产现场尺寸检测流程排序（批次 1）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。（工位 020）",
    "question": "将生产现场尺寸检测流程排序（批次 1）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。（工位 020）",
    "promptCode": "1. 记录结果\n2. 清洁量具和工件\n3. 选择合适量具\n4. 测量并复核\n5. 判定是否合格",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-5-1",
    "acceptableAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "fillAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "answerText": "2-3-4-5-1",
    "explanation": "检测前先清洁量具和工件，再按公差要求选择量具；测量要复核，随后与极限尺寸比较判定，最后记录结果，形成可追溯的质量数据。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "现场检测流程",
    "knowledgePoints": [
      "公差检测",
      "现场检测流程"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "现场检测流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_021",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "读数题",
    "difficulty": "easy",
    "text": "几何公差框格“⊥ 0.05 A”表示什么？（检测任务 2）",
    "question": "几何公差框格“⊥ 0.05 A”表示什么？（检测任务 2）",
    "options": [
      "相对基准 A 的垂直度公差 0.05",
      "相对基准 A 的粗糙度 0.05",
      "尺寸上偏差 0.05",
      "孔径为 0.05"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "符号 ⊥ 表示垂直度，0.05 是公差值，A 是基准。它控制方向误差，不直接表示尺寸大小。",
    "image": "/assets/questions/tolerance/tolerance_gdandt_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_gdandt_001.svg",
    "imageAlt": "几何公差框格",
    "imageDescription": "框格含义：垂直度 0.05，相对基准 A。",
    "knowledgePoint": "几何公差框格",
    "knowledgePoints": [
      "公差检测",
      "几何公差框格"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "几何公差框格",
      "读数题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_022",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "用通止规检验孔时，正确判定方法是什么？（检测任务 2）",
    "question": "用通止规检验孔时，正确判定方法是什么？（检测任务 2）",
    "options": [
      "通端不通过、止端通过为合格",
      "两端都通过才合格",
      "两端都不通过才合格",
      "通端通过、止端不通过为合格"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "通端代表最大实体边界，应能通过；止端代表另一极限，不应通过。两端都通过常说明孔偏大。",
    "image": "/assets/questions/tolerance/tolerance_go_nogo_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_go_nogo_001.svg",
    "imageAlt": "通止规检验孔",
    "imageDescription": "通端应能通过，止端不应通过，用于快速判断孔是否合格。",
    "knowledgePoint": "通止规检验",
    "knowledgePoints": [
      "公差检测",
      "通止规检验"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "通止规检验",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_023",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "游标卡尺主尺读到 23 mm，游标第 4 格对齐且分度值 0.10 mm，读数为多少？（检测任务 2）",
    "question": "游标卡尺主尺读到 23 mm，游标第 4 格对齐且分度值 0.10 mm，读数为多少？（检测任务 2）",
    "options": [
      "24.30 mm",
      "22.60 mm",
      "23.04 mm",
      "23.40 mm"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "读数等于主尺整数 23 mm 加游标 4 x 0.10 mm，即 23.40 mm。",
    "image": "/assets/questions/tolerance/tolerance_caliper_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_caliper_001.svg",
    "imageAlt": "游标卡尺读数 23.40 mm",
    "imageDescription": "读数为 23 + 0.40 = 23.40 mm。",
    "knowledgePoint": "游标卡尺读数",
    "knowledgePoints": [
      "公差检测",
      "游标卡尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "游标卡尺读数",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_024",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "φ30 +0.021/0 的孔，实测 30.018 mm，应如何判定？（检测任务 2）",
    "question": "φ30 +0.021/0 的孔，实测 30.018 mm，应如何判定？（检测任务 2）",
    "options": [
      "无法根据尺寸判断",
      "合格",
      "偏小不合格",
      "偏大不合格"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "该尺寸允许范围为 30.000 至 30.021 mm，30.018 mm 落在范围内，因此合格；偏小和偏大都不符合实测情况。",
    "image": "/assets/questions/tolerance/tolerance_band_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_band_001.svg",
    "imageAlt": "公差带与极限尺寸",
    "imageDescription": "φ30 +0.021/0 的合格范围为 30.000 至 30.021 mm。",
    "knowledgePoint": "极限尺寸判定",
    "knowledgePoints": [
      "公差检测",
      "极限尺寸判定"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "极限尺寸判定",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_025",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "千分尺主尺 12.5 mm，微分筒对准 36 格，读数是多少？（检测任务 2）",
    "question": "千分尺主尺 12.5 mm，微分筒对准 36 格，读数是多少？（检测任务 2）",
    "options": [
      "12.36 mm",
      "12.50 mm",
      "12.86 mm",
      "13.36 mm"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "外径千分尺常按 0.01 mm 读微分筒，36 格为 0.36 mm，总读数为 12.5 + 0.36 = 12.86 mm。",
    "image": "/assets/questions/tolerance/tolerance_micrometer_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_micrometer_001.svg",
    "imageAlt": "外径千分尺读数 12.86 mm",
    "imageDescription": "读数为 12.5 + 0.36 = 12.86 mm。",
    "knowledgePoint": "千分尺读数",
    "knowledgePoints": [
      "公差检测",
      "千分尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "千分尺读数",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_026",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "读数题",
    "difficulty": "medium",
    "text": "百分表每格 0.01 mm，指针转过 23 格，位移量是多少？（检测任务 2）",
    "question": "百分表每格 0.01 mm，指针转过 23 格，位移量是多少？（检测任务 2）",
    "options": [
      "0.23 mm",
      "2.3 mm",
      "23 mm",
      "0.023 mm"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "百分表每格 0.01 mm，23 格为 0.23 mm。读数题要先确认每格代表的量，再乘以格数。",
    "image": "/assets/questions/tolerance/tolerance_dial_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_dial_001.svg",
    "imageAlt": "百分表读数 0.23 mm",
    "imageDescription": "位移为 23 x 0.01 = 0.23 mm。",
    "knowledgePoint": "百分表读数",
    "knowledgePoints": [
      "公差检测",
      "百分表读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "百分表读数",
      "读数题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_027",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "孔为 φ40H7，轴为 φ40g6，通常属于哪类配合？（检测任务 2）",
    "question": "孔为 φ40H7，轴为 φ40g6，通常属于哪类配合？（检测任务 2）",
    "options": [
      "过渡配合",
      "无法装配",
      "间隙配合",
      "过盈配合"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "H7 孔下偏差为 0，g6 轴位于零线下方，轴通常小于孔，装配后形成间隙，适合相对转动。",
    "image": "/assets/questions/tolerance/tolerance_fit_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_fit_001.svg",
    "imageAlt": "孔轴间隙配合示意",
    "imageDescription": "孔为 H7、轴为 g6 时通常形成间隙配合。",
    "knowledgePoint": "孔轴配合",
    "knowledgePoints": [
      "公差检测",
      "孔轴配合"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "孔轴配合",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_028",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "粗糙度标注 Ra 1.6 主要限制什么？（检测任务 2）",
    "question": "粗糙度标注 Ra 1.6 主要限制什么？（检测任务 2）",
    "options": [
      "材料硬度",
      "表面微观不平度",
      "零件总长度",
      "孔轴配合间隙"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "Ra 是轮廓算术平均偏差，反映表面微观起伏程度，不是尺寸、配合或硬度指标。",
    "image": "/assets/questions/tolerance/tolerance_roughness_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_roughness_001.svg",
    "imageAlt": "粗糙度 Ra 1.6 标注",
    "imageDescription": "Ra 1.6 是表面粗糙度要求，不是尺寸公差。",
    "knowledgePoint": "表面粗糙度",
    "knowledgePoints": [
      "公差检测",
      "表面粗糙度"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "表面粗糙度",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_029",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "多选题",
    "difficulty": "medium",
    "text": "选择检测方法时应考虑哪些因素？（现场复核 2）",
    "question": "选择检测方法时应考虑哪些因素？（现场复核 2）",
    "options": [
      "尺寸公差大小",
      "生产批量",
      "检测效率",
      "操作者衣服颜色"
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
    "explanation": "公差越严、批量越大，对量具精度和效率要求越高；衣服颜色无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "检测方法选择",
    "knowledgePoints": [
      "公差检测",
      "检测方法选择"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "检测方法选择",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_030",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "多选题",
    "difficulty": "hard",
    "text": "影响测量误差的常见因素有哪些？（现场复核 2）",
    "question": "影响测量误差的常见因素有哪些？（现场复核 2）",
    "options": [
      "测量力过大",
      "工件温度变化",
      "零件颜色鲜艳",
      "量具零位误差"
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
    "explanation": "零位、测量力、温度都会影响测量结果；颜色本身不是尺寸测量误差来源。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "测量误差",
    "knowledgePoints": [
      "公差检测",
      "测量误差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "测量误差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_031",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "多选题",
    "difficulty": "easy",
    "text": "下列哪些属于几何公差项目？（现场复核 2）",
    "question": "下列哪些属于几何公差项目？（现场复核 2）",
    "options": [
      "圆跳动",
      "毛坯成本",
      "平面度",
      "同轴度"
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
    "explanation": "平面度、同轴度、圆跳动都是几何公差项目；毛坯成本不是公差项目。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "几何公差",
    "knowledgePoints": [
      "公差检测",
      "几何公差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "几何公差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_032",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "多选题",
    "difficulty": "easy",
    "text": "选择检测方法时应考虑哪些因素？（现场复核 2）（工位 032）",
    "question": "选择检测方法时应考虑哪些因素？（现场复核 2）（工位 032）",
    "options": [
      "操作者衣服颜色",
      "尺寸公差大小",
      "生产批量",
      "检测效率"
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
    "explanation": "公差越严、批量越大，对量具精度和效率要求越高；衣服颜色无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "检测方法选择",
    "knowledgePoints": [
      "公差检测",
      "检测方法选择"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "检测方法选择",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_033",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "公差等于上极限尺寸减下极限尺寸。（判断 2）",
    "question": "公差等于上极限尺寸减下极限尺寸。（判断 2）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。公差反映允许尺寸变动范围，数值为上极限尺寸与下极限尺寸之差。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "尺寸公差",
    "knowledgePoints": [
      "公差检测",
      "尺寸公差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "尺寸公差",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_034",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "间隙配合适用于两个零件装配后需要相对运动的场合。（判断 2）",
    "question": "间隙配合适用于两个零件装配后需要相对运动的场合。（判断 2）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。需要转动或滑动时通常要留出合理间隙，并配合润滑和精度要求。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "间隙配合",
    "knowledgePoints": [
      "公差检测",
      "间隙配合"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "间隙配合",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_035",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "测量前不需要检查游标卡尺零位。（判断 2）",
    "question": "测量前不需要检查游标卡尺零位。（判断 2）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。零位偏差会直接带入读数，现场检测前应先合拢量爪检查零位。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "量具使用",
    "knowledgePoints": [
      "公差检测",
      "量具使用"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "量具使用",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_036",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "表面粗糙度常用参数 Ra 表示轮廓算术平均 ____。（填空 2）",
    "question": "表面粗糙度常用参数 Ra 表示轮廓算术平均 ____。（填空 2）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "偏差",
    "acceptableAnswers": [
      "偏差",
      "高度偏差",
      "轮廓偏差"
    ],
    "fillAnswers": [
      "偏差",
      "高度偏差",
      "轮廓偏差"
    ],
    "answerText": "偏差",
    "explanation": "Ra 是轮廓算术平均偏差，用于描述表面微观不平度。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "表面粗糙度",
    "knowledgePoints": [
      "公差检测",
      "表面粗糙度"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "表面粗糙度",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_037",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "尺寸 30 +0.021/0 中，上偏差是 ____ mm。（填空 2）",
    "question": "尺寸 30 +0.021/0 中，上偏差是 ____ mm。（填空 2）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "0.021",
    "acceptableAnswers": [
      "0.021",
      "+0.021"
    ],
    "fillAnswers": [
      "0.021",
      "+0.021"
    ],
    "answerText": "0.021",
    "explanation": "上偏差是上极限尺寸相对公称尺寸的偏差，本题为 +0.021 mm。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "上偏差",
    "knowledgePoints": [
      "公差检测",
      "上偏差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "上偏差",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_038",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "外径千分尺微分筒 1 格通常表示 ____ mm。（填空 2）",
    "question": "外径千分尺微分筒 1 格通常表示 ____ mm。（填空 2）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "0.01",
    "acceptableAnswers": [
      "0.01",
      "0.01mm"
    ],
    "fillAnswers": [
      "0.01",
      "0.01mm"
    ],
    "answerText": "0.01",
    "explanation": "常用千分尺分度值为 0.01 mm，读数时要加到主尺读数上。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "千分尺读数",
    "knowledgePoints": [
      "公差检测",
      "千分尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "千分尺读数",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_039",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将生产现场尺寸检测流程排序（批次 2）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。",
    "question": "将生产现场尺寸检测流程排序（批次 2）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。",
    "promptCode": "1. 记录结果\n2. 清洁量具和工件\n3. 选择合适量具\n4. 测量并复核\n5. 判定是否合格",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-5-1",
    "acceptableAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "fillAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "answerText": "2-3-4-5-1",
    "explanation": "检测前先清洁量具和工件，再按公差要求选择量具；测量要复核，随后与极限尺寸比较判定，最后记录结果，形成可追溯的质量数据。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "现场检测流程",
    "knowledgePoints": [
      "公差检测",
      "现场检测流程"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "现场检测流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_040",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将生产现场尺寸检测流程排序（批次 2）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。（工位 040）",
    "question": "将生产现场尺寸检测流程排序（批次 2）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。（工位 040）",
    "promptCode": "1. 记录结果\n2. 清洁量具和工件\n3. 选择合适量具\n4. 测量并复核\n5. 判定是否合格",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-5-1",
    "acceptableAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "fillAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "answerText": "2-3-4-5-1",
    "explanation": "检测前先清洁量具和工件，再按公差要求选择量具；测量要复核，随后与极限尺寸比较判定，最后记录结果，形成可追溯的质量数据。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "现场检测流程",
    "knowledgePoints": [
      "公差检测",
      "现场检测流程"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "现场检测流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_041",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "读数题",
    "difficulty": "easy",
    "text": "百分表每格 0.01 mm，指针转过 23 格，位移量是多少？（检测任务 3）",
    "question": "百分表每格 0.01 mm，指针转过 23 格，位移量是多少？（检测任务 3）",
    "options": [
      "0.023 mm",
      "0.23 mm",
      "2.3 mm",
      "23 mm"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "百分表每格 0.01 mm，23 格为 0.23 mm。读数题要先确认每格代表的量，再乘以格数。",
    "image": "/assets/questions/tolerance/tolerance_dial_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_dial_001.svg",
    "imageAlt": "百分表读数 0.23 mm",
    "imageDescription": "位移为 23 x 0.01 = 0.23 mm。",
    "knowledgePoint": "百分表读数",
    "knowledgePoints": [
      "公差检测",
      "百分表读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "百分表读数",
      "读数题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_042",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "孔为 φ40H7，轴为 φ40g6，通常属于哪类配合？（检测任务 3）",
    "question": "孔为 φ40H7，轴为 φ40g6，通常属于哪类配合？（检测任务 3）",
    "options": [
      "过盈配合",
      "过渡配合",
      "无法装配",
      "间隙配合"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "H7 孔下偏差为 0，g6 轴位于零线下方，轴通常小于孔，装配后形成间隙，适合相对转动。",
    "image": "/assets/questions/tolerance/tolerance_fit_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_fit_001.svg",
    "imageAlt": "孔轴间隙配合示意",
    "imageDescription": "孔为 H7、轴为 g6 时通常形成间隙配合。",
    "knowledgePoint": "孔轴配合",
    "knowledgePoints": [
      "公差检测",
      "孔轴配合"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "孔轴配合",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_043",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "粗糙度标注 Ra 1.6 主要限制什么？（检测任务 3）",
    "question": "粗糙度标注 Ra 1.6 主要限制什么？（检测任务 3）",
    "options": [
      "孔轴配合间隙",
      "材料硬度",
      "表面微观不平度",
      "零件总长度"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "Ra 是轮廓算术平均偏差，反映表面微观起伏程度，不是尺寸、配合或硬度指标。",
    "image": "/assets/questions/tolerance/tolerance_roughness_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_roughness_001.svg",
    "imageAlt": "粗糙度 Ra 1.6 标注",
    "imageDescription": "Ra 1.6 是表面粗糙度要求，不是尺寸公差。",
    "knowledgePoint": "表面粗糙度",
    "knowledgePoints": [
      "公差检测",
      "表面粗糙度"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "表面粗糙度",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_044",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "几何公差框格“⊥ 0.05 A”表示什么？（检测任务 3）",
    "question": "几何公差框格“⊥ 0.05 A”表示什么？（检测任务 3）",
    "options": [
      "孔径为 0.05",
      "相对基准 A 的垂直度公差 0.05",
      "相对基准 A 的粗糙度 0.05",
      "尺寸上偏差 0.05"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "符号 ⊥ 表示垂直度，0.05 是公差值，A 是基准。它控制方向误差，不直接表示尺寸大小。",
    "image": "/assets/questions/tolerance/tolerance_gdandt_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_gdandt_001.svg",
    "imageAlt": "几何公差框格",
    "imageDescription": "框格含义：垂直度 0.05，相对基准 A。",
    "knowledgePoint": "几何公差框格",
    "knowledgePoints": [
      "公差检测",
      "几何公差框格"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "几何公差框格",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_045",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "用通止规检验孔时，正确判定方法是什么？（检测任务 3）",
    "question": "用通止规检验孔时，正确判定方法是什么？（检测任务 3）",
    "options": [
      "通端通过、止端不通过为合格",
      "通端不通过、止端通过为合格",
      "两端都通过才合格",
      "两端都不通过才合格"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "通端代表最大实体边界，应能通过；止端代表另一极限，不应通过。两端都通过常说明孔偏大。",
    "image": "/assets/questions/tolerance/tolerance_go_nogo_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_go_nogo_001.svg",
    "imageAlt": "通止规检验孔",
    "imageDescription": "通端应能通过，止端不应通过，用于快速判断孔是否合格。",
    "knowledgePoint": "通止规检验",
    "knowledgePoints": [
      "公差检测",
      "通止规检验"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "通止规检验",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_046",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "读数题",
    "difficulty": "medium",
    "text": "游标卡尺主尺读到 23 mm，游标第 4 格对齐且分度值 0.10 mm，读数为多少？（检测任务 3）",
    "question": "游标卡尺主尺读到 23 mm，游标第 4 格对齐且分度值 0.10 mm，读数为多少？（检测任务 3）",
    "options": [
      "23.40 mm",
      "24.30 mm",
      "22.60 mm",
      "23.04 mm"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "读数等于主尺整数 23 mm 加游标 4 x 0.10 mm，即 23.40 mm。",
    "image": "/assets/questions/tolerance/tolerance_caliper_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_caliper_001.svg",
    "imageAlt": "游标卡尺读数 23.40 mm",
    "imageDescription": "读数为 23 + 0.40 = 23.40 mm。",
    "knowledgePoint": "游标卡尺读数",
    "knowledgePoints": [
      "公差检测",
      "游标卡尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "游标卡尺读数",
      "读数题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_047",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "φ30 +0.021/0 的孔，实测 30.018 mm，应如何判定？（检测任务 3）",
    "question": "φ30 +0.021/0 的孔，实测 30.018 mm，应如何判定？（检测任务 3）",
    "options": [
      "偏大不合格",
      "无法根据尺寸判断",
      "合格",
      "偏小不合格"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "该尺寸允许范围为 30.000 至 30.021 mm，30.018 mm 落在范围内，因此合格；偏小和偏大都不符合实测情况。",
    "image": "/assets/questions/tolerance/tolerance_band_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_band_001.svg",
    "imageAlt": "公差带与极限尺寸",
    "imageDescription": "φ30 +0.021/0 的合格范围为 30.000 至 30.021 mm。",
    "knowledgePoint": "极限尺寸判定",
    "knowledgePoints": [
      "公差检测",
      "极限尺寸判定"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "极限尺寸判定",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_048",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "千分尺主尺 12.5 mm，微分筒对准 36 格，读数是多少？（检测任务 3）",
    "question": "千分尺主尺 12.5 mm，微分筒对准 36 格，读数是多少？（检测任务 3）",
    "options": [
      "13.36 mm",
      "12.36 mm",
      "12.50 mm",
      "12.86 mm"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "外径千分尺常按 0.01 mm 读微分筒，36 格为 0.36 mm，总读数为 12.5 + 0.36 = 12.86 mm。",
    "image": "/assets/questions/tolerance/tolerance_micrometer_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_micrometer_001.svg",
    "imageAlt": "外径千分尺读数 12.86 mm",
    "imageDescription": "读数为 12.5 + 0.36 = 12.86 mm。",
    "knowledgePoint": "千分尺读数",
    "knowledgePoints": [
      "公差检测",
      "千分尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "千分尺读数",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_049",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "多选题",
    "difficulty": "medium",
    "text": "下列哪些属于几何公差项目？（现场复核 3）",
    "question": "下列哪些属于几何公差项目？（现场复核 3）",
    "options": [
      "平面度",
      "同轴度",
      "圆跳动",
      "毛坯成本"
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
    "explanation": "平面度、同轴度、圆跳动都是几何公差项目；毛坯成本不是公差项目。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "几何公差",
    "knowledgePoints": [
      "公差检测",
      "几何公差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "几何公差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_050",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "多选题",
    "difficulty": "hard",
    "text": "选择检测方法时应考虑哪些因素？（现场复核 3）",
    "question": "选择检测方法时应考虑哪些因素？（现场复核 3）",
    "options": [
      "生产批量",
      "检测效率",
      "操作者衣服颜色",
      "尺寸公差大小"
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
    "explanation": "公差越严、批量越大，对量具精度和效率要求越高；衣服颜色无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "检测方法选择",
    "knowledgePoints": [
      "公差检测",
      "检测方法选择"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "检测方法选择",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_051",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "多选题",
    "difficulty": "easy",
    "text": "影响测量误差的常见因素有哪些？（现场复核 3）",
    "question": "影响测量误差的常见因素有哪些？（现场复核 3）",
    "options": [
      "工件温度变化",
      "零件颜色鲜艳",
      "量具零位误差",
      "测量力过大"
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
    "explanation": "零位、测量力、温度都会影响测量结果；颜色本身不是尺寸测量误差来源。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "测量误差",
    "knowledgePoints": [
      "公差检测",
      "测量误差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "测量误差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_052",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "多选题",
    "difficulty": "easy",
    "text": "下列哪些属于几何公差项目？（现场复核 3）（工位 052）",
    "question": "下列哪些属于几何公差项目？（现场复核 3）（工位 052）",
    "options": [
      "毛坯成本",
      "平面度",
      "同轴度",
      "圆跳动"
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
    "explanation": "平面度、同轴度、圆跳动都是几何公差项目；毛坯成本不是公差项目。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "几何公差",
    "knowledgePoints": [
      "公差检测",
      "几何公差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "几何公差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_053",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "公差等于上极限尺寸减下极限尺寸。（判断 3）",
    "question": "公差等于上极限尺寸减下极限尺寸。（判断 3）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。公差反映允许尺寸变动范围，数值为上极限尺寸与下极限尺寸之差。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "尺寸公差",
    "knowledgePoints": [
      "公差检测",
      "尺寸公差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "尺寸公差",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_054",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "间隙配合适用于两个零件装配后需要相对运动的场合。（判断 3）",
    "question": "间隙配合适用于两个零件装配后需要相对运动的场合。（判断 3）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。需要转动或滑动时通常要留出合理间隙，并配合润滑和精度要求。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "间隙配合",
    "knowledgePoints": [
      "公差检测",
      "间隙配合"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "间隙配合",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_055",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "测量前不需要检查游标卡尺零位。（判断 3）",
    "question": "测量前不需要检查游标卡尺零位。（判断 3）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。零位偏差会直接带入读数，现场检测前应先合拢量爪检查零位。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "量具使用",
    "knowledgePoints": [
      "公差检测",
      "量具使用"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "量具使用",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_056",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "外径千分尺微分筒 1 格通常表示 ____ mm。（填空 3）",
    "question": "外径千分尺微分筒 1 格通常表示 ____ mm。（填空 3）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "0.01",
    "acceptableAnswers": [
      "0.01",
      "0.01mm"
    ],
    "fillAnswers": [
      "0.01",
      "0.01mm"
    ],
    "answerText": "0.01",
    "explanation": "常用千分尺分度值为 0.01 mm，读数时要加到主尺读数上。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "千分尺读数",
    "knowledgePoints": [
      "公差检测",
      "千分尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "千分尺读数",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_057",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "表面粗糙度常用参数 Ra 表示轮廓算术平均 ____。（填空 3）",
    "question": "表面粗糙度常用参数 Ra 表示轮廓算术平均 ____。（填空 3）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "偏差",
    "acceptableAnswers": [
      "偏差",
      "高度偏差",
      "轮廓偏差"
    ],
    "fillAnswers": [
      "偏差",
      "高度偏差",
      "轮廓偏差"
    ],
    "answerText": "偏差",
    "explanation": "Ra 是轮廓算术平均偏差，用于描述表面微观不平度。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "表面粗糙度",
    "knowledgePoints": [
      "公差检测",
      "表面粗糙度"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "表面粗糙度",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_058",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "尺寸 30 +0.021/0 中，上偏差是 ____ mm。（填空 3）",
    "question": "尺寸 30 +0.021/0 中，上偏差是 ____ mm。（填空 3）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "0.021",
    "acceptableAnswers": [
      "0.021",
      "+0.021"
    ],
    "fillAnswers": [
      "0.021",
      "+0.021"
    ],
    "answerText": "0.021",
    "explanation": "上偏差是上极限尺寸相对公称尺寸的偏差，本题为 +0.021 mm。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "上偏差",
    "knowledgePoints": [
      "公差检测",
      "上偏差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "上偏差",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_059",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将生产现场尺寸检测流程排序（批次 3）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。",
    "question": "将生产现场尺寸检测流程排序（批次 3）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。",
    "promptCode": "1. 记录结果\n2. 清洁量具和工件\n3. 选择合适量具\n4. 测量并复核\n5. 判定是否合格",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-5-1",
    "acceptableAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "fillAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "answerText": "2-3-4-5-1",
    "explanation": "检测前先清洁量具和工件，再按公差要求选择量具；测量要复核，随后与极限尺寸比较判定，最后记录结果，形成可追溯的质量数据。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "现场检测流程",
    "knowledgePoints": [
      "公差检测",
      "现场检测流程"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "现场检测流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_060",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将生产现场尺寸检测流程排序（批次 3）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。（工位 060）",
    "question": "将生产现场尺寸检测流程排序（批次 3）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。（工位 060）",
    "promptCode": "1. 记录结果\n2. 清洁量具和工件\n3. 选择合适量具\n4. 测量并复核\n5. 判定是否合格",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-5-1",
    "acceptableAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "fillAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "answerText": "2-3-4-5-1",
    "explanation": "检测前先清洁量具和工件，再按公差要求选择量具；测量要复核，随后与极限尺寸比较判定，最后记录结果，形成可追溯的质量数据。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "现场检测流程",
    "knowledgePoints": [
      "公差检测",
      "现场检测流程"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "现场检测流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_061",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "读数题",
    "difficulty": "easy",
    "text": "游标卡尺主尺读到 23 mm，游标第 4 格对齐且分度值 0.10 mm，读数为多少？（检测任务 4）",
    "question": "游标卡尺主尺读到 23 mm，游标第 4 格对齐且分度值 0.10 mm，读数为多少？（检测任务 4）",
    "options": [
      "23.04 mm",
      "23.40 mm",
      "24.30 mm",
      "22.60 mm"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "读数等于主尺整数 23 mm 加游标 4 x 0.10 mm，即 23.40 mm。",
    "image": "/assets/questions/tolerance/tolerance_caliper_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_caliper_001.svg",
    "imageAlt": "游标卡尺读数 23.40 mm",
    "imageDescription": "读数为 23 + 0.40 = 23.40 mm。",
    "knowledgePoint": "游标卡尺读数",
    "knowledgePoints": [
      "公差检测",
      "游标卡尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "游标卡尺读数",
      "读数题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_062",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "φ30 +0.021/0 的孔，实测 30.018 mm，应如何判定？（检测任务 4）",
    "question": "φ30 +0.021/0 的孔，实测 30.018 mm，应如何判定？（检测任务 4）",
    "options": [
      "偏小不合格",
      "偏大不合格",
      "无法根据尺寸判断",
      "合格"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "该尺寸允许范围为 30.000 至 30.021 mm，30.018 mm 落在范围内，因此合格；偏小和偏大都不符合实测情况。",
    "image": "/assets/questions/tolerance/tolerance_band_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_band_001.svg",
    "imageAlt": "公差带与极限尺寸",
    "imageDescription": "φ30 +0.021/0 的合格范围为 30.000 至 30.021 mm。",
    "knowledgePoint": "极限尺寸判定",
    "knowledgePoints": [
      "公差检测",
      "极限尺寸判定"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "极限尺寸判定",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_063",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "千分尺主尺 12.5 mm，微分筒对准 36 格，读数是多少？（检测任务 4）",
    "question": "千分尺主尺 12.5 mm，微分筒对准 36 格，读数是多少？（检测任务 4）",
    "options": [
      "12.86 mm",
      "13.36 mm",
      "12.36 mm",
      "12.50 mm"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "外径千分尺常按 0.01 mm 读微分筒，36 格为 0.36 mm，总读数为 12.5 + 0.36 = 12.86 mm。",
    "image": "/assets/questions/tolerance/tolerance_micrometer_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_micrometer_001.svg",
    "imageAlt": "外径千分尺读数 12.86 mm",
    "imageDescription": "读数为 12.5 + 0.36 = 12.86 mm。",
    "knowledgePoint": "千分尺读数",
    "knowledgePoints": [
      "公差检测",
      "千分尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "千分尺读数",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_064",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "百分表每格 0.01 mm，指针转过 23 格，位移量是多少？（检测任务 4）",
    "question": "百分表每格 0.01 mm，指针转过 23 格，位移量是多少？（检测任务 4）",
    "options": [
      "23 mm",
      "0.023 mm",
      "0.23 mm",
      "2.3 mm"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "百分表每格 0.01 mm，23 格为 0.23 mm。读数题要先确认每格代表的量，再乘以格数。",
    "image": "/assets/questions/tolerance/tolerance_dial_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_dial_001.svg",
    "imageAlt": "百分表读数 0.23 mm",
    "imageDescription": "位移为 23 x 0.01 = 0.23 mm。",
    "knowledgePoint": "百分表读数",
    "knowledgePoints": [
      "公差检测",
      "百分表读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "百分表读数",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_065",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "孔为 φ40H7，轴为 φ40g6，通常属于哪类配合？（检测任务 4）",
    "question": "孔为 φ40H7，轴为 φ40g6，通常属于哪类配合？（检测任务 4）",
    "options": [
      "间隙配合",
      "过盈配合",
      "过渡配合",
      "无法装配"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "H7 孔下偏差为 0，g6 轴位于零线下方，轴通常小于孔，装配后形成间隙，适合相对转动。",
    "image": "/assets/questions/tolerance/tolerance_fit_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_fit_001.svg",
    "imageAlt": "孔轴间隙配合示意",
    "imageDescription": "孔为 H7、轴为 g6 时通常形成间隙配合。",
    "knowledgePoint": "孔轴配合",
    "knowledgePoints": [
      "公差检测",
      "孔轴配合"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "孔轴配合",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_066",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "读数题",
    "difficulty": "medium",
    "text": "粗糙度标注 Ra 1.6 主要限制什么？（检测任务 4）",
    "question": "粗糙度标注 Ra 1.6 主要限制什么？（检测任务 4）",
    "options": [
      "零件总长度",
      "孔轴配合间隙",
      "材料硬度",
      "表面微观不平度"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "Ra 是轮廓算术平均偏差，反映表面微观起伏程度，不是尺寸、配合或硬度指标。",
    "image": "/assets/questions/tolerance/tolerance_roughness_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_roughness_001.svg",
    "imageAlt": "粗糙度 Ra 1.6 标注",
    "imageDescription": "Ra 1.6 是表面粗糙度要求，不是尺寸公差。",
    "knowledgePoint": "表面粗糙度",
    "knowledgePoints": [
      "公差检测",
      "表面粗糙度"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "表面粗糙度",
      "读数题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_067",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "几何公差框格“⊥ 0.05 A”表示什么？（检测任务 4）",
    "question": "几何公差框格“⊥ 0.05 A”表示什么？（检测任务 4）",
    "options": [
      "尺寸上偏差 0.05",
      "孔径为 0.05",
      "相对基准 A 的垂直度公差 0.05",
      "相对基准 A 的粗糙度 0.05"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "符号 ⊥ 表示垂直度，0.05 是公差值，A 是基准。它控制方向误差，不直接表示尺寸大小。",
    "image": "/assets/questions/tolerance/tolerance_gdandt_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_gdandt_001.svg",
    "imageAlt": "几何公差框格",
    "imageDescription": "框格含义：垂直度 0.05，相对基准 A。",
    "knowledgePoint": "几何公差框格",
    "knowledgePoints": [
      "公差检测",
      "几何公差框格"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "几何公差框格",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_068",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "用通止规检验孔时，正确判定方法是什么？（检测任务 4）",
    "question": "用通止规检验孔时，正确判定方法是什么？（检测任务 4）",
    "options": [
      "两端都不通过才合格",
      "通端通过、止端不通过为合格",
      "通端不通过、止端通过为合格",
      "两端都通过才合格"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "通端代表最大实体边界，应能通过；止端代表另一极限，不应通过。两端都通过常说明孔偏大。",
    "image": "/assets/questions/tolerance/tolerance_go_nogo_001.svg",
    "imageUrl": "/assets/questions/tolerance/tolerance_go_nogo_001.svg",
    "imageAlt": "通止规检验孔",
    "imageDescription": "通端应能通过，止端不应通过，用于快速判断孔是否合格。",
    "knowledgePoint": "通止规检验",
    "knowledgePoints": [
      "公差检测",
      "通止规检验"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "通止规检验",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_069",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "多选题",
    "difficulty": "medium",
    "text": "影响测量误差的常见因素有哪些？（现场复核 4）",
    "question": "影响测量误差的常见因素有哪些？（现场复核 4）",
    "options": [
      "量具零位误差",
      "测量力过大",
      "工件温度变化",
      "零件颜色鲜艳"
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
    "explanation": "零位、测量力、温度都会影响测量结果；颜色本身不是尺寸测量误差来源。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "测量误差",
    "knowledgePoints": [
      "公差检测",
      "测量误差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "测量误差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_070",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "多选题",
    "difficulty": "hard",
    "text": "下列哪些属于几何公差项目？（现场复核 4）",
    "question": "下列哪些属于几何公差项目？（现场复核 4）",
    "options": [
      "同轴度",
      "圆跳动",
      "毛坯成本",
      "平面度"
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
    "explanation": "平面度、同轴度、圆跳动都是几何公差项目；毛坯成本不是公差项目。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "几何公差",
    "knowledgePoints": [
      "公差检测",
      "几何公差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "几何公差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_071",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "多选题",
    "difficulty": "easy",
    "text": "选择检测方法时应考虑哪些因素？（现场复核 4）",
    "question": "选择检测方法时应考虑哪些因素？（现场复核 4）",
    "options": [
      "检测效率",
      "操作者衣服颜色",
      "尺寸公差大小",
      "生产批量"
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
    "explanation": "公差越严、批量越大，对量具精度和效率要求越高；衣服颜色无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "检测方法选择",
    "knowledgePoints": [
      "公差检测",
      "检测方法选择"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "检测方法选择",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_072",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "多选题",
    "difficulty": "easy",
    "text": "影响测量误差的常见因素有哪些？（现场复核 4）（工位 072）",
    "question": "影响测量误差的常见因素有哪些？（现场复核 4）（工位 072）",
    "options": [
      "零件颜色鲜艳",
      "量具零位误差",
      "测量力过大",
      "工件温度变化"
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
    "explanation": "零位、测量力、温度都会影响测量结果；颜色本身不是尺寸测量误差来源。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "测量误差",
    "knowledgePoints": [
      "公差检测",
      "测量误差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "测量误差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_073",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "公差等于上极限尺寸减下极限尺寸。（判断 4）",
    "question": "公差等于上极限尺寸减下极限尺寸。（判断 4）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。公差反映允许尺寸变动范围，数值为上极限尺寸与下极限尺寸之差。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "尺寸公差",
    "knowledgePoints": [
      "公差检测",
      "尺寸公差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "尺寸公差",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_074",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "间隙配合适用于两个零件装配后需要相对运动的场合。（判断 4）",
    "question": "间隙配合适用于两个零件装配后需要相对运动的场合。（判断 4）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。需要转动或滑动时通常要留出合理间隙，并配合润滑和精度要求。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "间隙配合",
    "knowledgePoints": [
      "公差检测",
      "间隙配合"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "间隙配合",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_075",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "测量前不需要检查游标卡尺零位。（判断 4）",
    "question": "测量前不需要检查游标卡尺零位。（判断 4）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。零位偏差会直接带入读数，现场检测前应先合拢量爪检查零位。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "量具使用",
    "knowledgePoints": [
      "公差检测",
      "量具使用"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "量具使用",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_076",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "尺寸 30 +0.021/0 中，上偏差是 ____ mm。（填空 4）",
    "question": "尺寸 30 +0.021/0 中，上偏差是 ____ mm。（填空 4）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "0.021",
    "acceptableAnswers": [
      "0.021",
      "+0.021"
    ],
    "fillAnswers": [
      "0.021",
      "+0.021"
    ],
    "answerText": "0.021",
    "explanation": "上偏差是上极限尺寸相对公称尺寸的偏差，本题为 +0.021 mm。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "上偏差",
    "knowledgePoints": [
      "公差检测",
      "上偏差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "上偏差",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_077",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "外径千分尺微分筒 1 格通常表示 ____ mm。（填空 4）",
    "question": "外径千分尺微分筒 1 格通常表示 ____ mm。（填空 4）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "0.01",
    "acceptableAnswers": [
      "0.01",
      "0.01mm"
    ],
    "fillAnswers": [
      "0.01",
      "0.01mm"
    ],
    "answerText": "0.01",
    "explanation": "常用千分尺分度值为 0.01 mm，读数时要加到主尺读数上。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "千分尺读数",
    "knowledgePoints": [
      "公差检测",
      "千分尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "千分尺读数",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_078",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "表面粗糙度常用参数 Ra 表示轮廓算术平均 ____。（填空 4）",
    "question": "表面粗糙度常用参数 Ra 表示轮廓算术平均 ____。（填空 4）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "偏差",
    "acceptableAnswers": [
      "偏差",
      "高度偏差",
      "轮廓偏差"
    ],
    "fillAnswers": [
      "偏差",
      "高度偏差",
      "轮廓偏差"
    ],
    "answerText": "偏差",
    "explanation": "Ra 是轮廓算术平均偏差，用于描述表面微观不平度。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "表面粗糙度",
    "knowledgePoints": [
      "公差检测",
      "表面粗糙度"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "表面粗糙度",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_079",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将生产现场尺寸检测流程排序（批次 4）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。",
    "question": "将生产现场尺寸检测流程排序（批次 4）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。",
    "promptCode": "1. 记录结果\n2. 清洁量具和工件\n3. 选择合适量具\n4. 测量并复核\n5. 判定是否合格",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-5-1",
    "acceptableAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "fillAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "answerText": "2-3-4-5-1",
    "explanation": "检测前先清洁量具和工件，再按公差要求选择量具；测量要复核，随后与极限尺寸比较判定，最后记录结果，形成可追溯的质量数据。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "现场检测流程",
    "knowledgePoints": [
      "公差检测",
      "现场检测流程"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "现场检测流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_080",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将生产现场尺寸检测流程排序（批次 4）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。（工位 080）",
    "question": "将生产现场尺寸检测流程排序（批次 4）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。（工位 080）",
    "promptCode": "1. 记录结果\n2. 清洁量具和工件\n3. 选择合适量具\n4. 测量并复核\n5. 判定是否合格",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-5-1",
    "acceptableAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "fillAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "answerText": "2-3-4-5-1",
    "explanation": "检测前先清洁量具和工件，再按公差要求选择量具；测量要复核，随后与极限尺寸比较判定，最后记录结果，形成可追溯的质量数据。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "现场检测流程",
    "knowledgePoints": [
      "公差检测",
      "现场检测流程"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "现场检测流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_081",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "读数题",
    "difficulty": "easy",
    "text": "粗糙度标注 Ra 1.6 主要限制什么？（检测任务 5）",
    "question": "粗糙度标注 Ra 1.6 主要限制什么？（检测任务 5）",
    "options": [
      "表面微观不平度",
      "零件总长度",
      "孔轴配合间隙",
      "材料硬度"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "Ra 是轮廓算术平均偏差，反映表面微观起伏程度，不是尺寸、配合或硬度指标。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "表面粗糙度",
    "knowledgePoints": [
      "公差检测",
      "表面粗糙度"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "表面粗糙度",
      "读数题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_082",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "几何公差框格“⊥ 0.05 A”表示什么？（检测任务 5）",
    "question": "几何公差框格“⊥ 0.05 A”表示什么？（检测任务 5）",
    "options": [
      "相对基准 A 的粗糙度 0.05",
      "尺寸上偏差 0.05",
      "孔径为 0.05",
      "相对基准 A 的垂直度公差 0.05"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "符号 ⊥ 表示垂直度，0.05 是公差值，A 是基准。它控制方向误差，不直接表示尺寸大小。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "几何公差框格",
    "knowledgePoints": [
      "公差检测",
      "几何公差框格"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "几何公差框格",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_083",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "用通止规检验孔时，正确判定方法是什么？（检测任务 5）",
    "question": "用通止规检验孔时，正确判定方法是什么？（检测任务 5）",
    "options": [
      "两端都通过才合格",
      "两端都不通过才合格",
      "通端通过、止端不通过为合格",
      "通端不通过、止端通过为合格"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "通端代表最大实体边界，应能通过；止端代表另一极限，不应通过。两端都通过常说明孔偏大。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "通止规检验",
    "knowledgePoints": [
      "公差检测",
      "通止规检验"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "通止规检验",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_084",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "游标卡尺主尺读到 23 mm，游标第 4 格对齐且分度值 0.10 mm，读数为多少？（检测任务 5）",
    "question": "游标卡尺主尺读到 23 mm，游标第 4 格对齐且分度值 0.10 mm，读数为多少？（检测任务 5）",
    "options": [
      "22.60 mm",
      "23.04 mm",
      "23.40 mm",
      "24.30 mm"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "读数等于主尺整数 23 mm 加游标 4 x 0.10 mm，即 23.40 mm。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "游标卡尺读数",
    "knowledgePoints": [
      "公差检测",
      "游标卡尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "游标卡尺读数",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_085",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "φ30 +0.021/0 的孔，实测 30.018 mm，应如何判定？（检测任务 5）",
    "question": "φ30 +0.021/0 的孔，实测 30.018 mm，应如何判定？（检测任务 5）",
    "options": [
      "合格",
      "偏小不合格",
      "偏大不合格",
      "无法根据尺寸判断"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "该尺寸允许范围为 30.000 至 30.021 mm，30.018 mm 落在范围内，因此合格；偏小和偏大都不符合实测情况。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "极限尺寸判定",
    "knowledgePoints": [
      "公差检测",
      "极限尺寸判定"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "极限尺寸判定",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_086",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "读数题",
    "difficulty": "medium",
    "text": "千分尺主尺 12.5 mm，微分筒对准 36 格，读数是多少？（检测任务 5）",
    "question": "千分尺主尺 12.5 mm，微分筒对准 36 格，读数是多少？（检测任务 5）",
    "options": [
      "12.50 mm",
      "12.86 mm",
      "13.36 mm",
      "12.36 mm"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "外径千分尺常按 0.01 mm 读微分筒，36 格为 0.36 mm，总读数为 12.5 + 0.36 = 12.86 mm。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "千分尺读数",
    "knowledgePoints": [
      "公差检测",
      "千分尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "千分尺读数",
      "读数题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_087",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "百分表每格 0.01 mm，指针转过 23 格，位移量是多少？（检测任务 5）",
    "question": "百分表每格 0.01 mm，指针转过 23 格，位移量是多少？（检测任务 5）",
    "options": [
      "2.3 mm",
      "23 mm",
      "0.023 mm",
      "0.23 mm"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "百分表每格 0.01 mm，23 格为 0.23 mm。读数题要先确认每格代表的量，再乘以格数。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "百分表读数",
    "knowledgePoints": [
      "公差检测",
      "百分表读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "百分表读数",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_088",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "孔为 φ40H7，轴为 φ40g6，通常属于哪类配合？（检测任务 5）",
    "question": "孔为 φ40H7，轴为 φ40g6，通常属于哪类配合？（检测任务 5）",
    "options": [
      "无法装配",
      "间隙配合",
      "过盈配合",
      "过渡配合"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "H7 孔下偏差为 0，g6 轴位于零线下方，轴通常小于孔，装配后形成间隙，适合相对转动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "孔轴配合",
    "knowledgePoints": [
      "公差检测",
      "孔轴配合"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "孔轴配合",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_089",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "多选题",
    "difficulty": "medium",
    "text": "选择检测方法时应考虑哪些因素？（现场复核 5）",
    "question": "选择检测方法时应考虑哪些因素？（现场复核 5）",
    "options": [
      "尺寸公差大小",
      "生产批量",
      "检测效率",
      "操作者衣服颜色"
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
    "explanation": "公差越严、批量越大，对量具精度和效率要求越高；衣服颜色无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "检测方法选择",
    "knowledgePoints": [
      "公差检测",
      "检测方法选择"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "检测方法选择",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_090",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "多选题",
    "difficulty": "hard",
    "text": "影响测量误差的常见因素有哪些？（现场复核 5）",
    "question": "影响测量误差的常见因素有哪些？（现场复核 5）",
    "options": [
      "测量力过大",
      "工件温度变化",
      "零件颜色鲜艳",
      "量具零位误差"
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
    "explanation": "零位、测量力、温度都会影响测量结果；颜色本身不是尺寸测量误差来源。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "测量误差",
    "knowledgePoints": [
      "公差检测",
      "测量误差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "测量误差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_091",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "多选题",
    "difficulty": "easy",
    "text": "下列哪些属于几何公差项目？（现场复核 5）",
    "question": "下列哪些属于几何公差项目？（现场复核 5）",
    "options": [
      "圆跳动",
      "毛坯成本",
      "平面度",
      "同轴度"
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
    "explanation": "平面度、同轴度、圆跳动都是几何公差项目；毛坯成本不是公差项目。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "几何公差",
    "knowledgePoints": [
      "公差检测",
      "几何公差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "几何公差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_092",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "多选题",
    "difficulty": "easy",
    "text": "选择检测方法时应考虑哪些因素？（现场复核 5）（工位 092）",
    "question": "选择检测方法时应考虑哪些因素？（现场复核 5）（工位 092）",
    "options": [
      "操作者衣服颜色",
      "尺寸公差大小",
      "生产批量",
      "检测效率"
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
    "explanation": "公差越严、批量越大，对量具精度和效率要求越高；衣服颜色无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "检测方法选择",
    "knowledgePoints": [
      "公差检测",
      "检测方法选择"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "检测方法选择",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_093",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "公差等于上极限尺寸减下极限尺寸。（判断 5）",
    "question": "公差等于上极限尺寸减下极限尺寸。（判断 5）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。公差反映允许尺寸变动范围，数值为上极限尺寸与下极限尺寸之差。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "尺寸公差",
    "knowledgePoints": [
      "公差检测",
      "尺寸公差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "尺寸公差",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_094",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "间隙配合适用于两个零件装配后需要相对运动的场合。（判断 5）",
    "question": "间隙配合适用于两个零件装配后需要相对运动的场合。（判断 5）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。需要转动或滑动时通常要留出合理间隙，并配合润滑和精度要求。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "间隙配合",
    "knowledgePoints": [
      "公差检测",
      "间隙配合"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "间隙配合",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_095",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "测量前不需要检查游标卡尺零位。（判断 5）",
    "question": "测量前不需要检查游标卡尺零位。（判断 5）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。零位偏差会直接带入读数，现场检测前应先合拢量爪检查零位。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "量具使用",
    "knowledgePoints": [
      "公差检测",
      "量具使用"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "量具使用",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_096",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "表面粗糙度常用参数 Ra 表示轮廓算术平均 ____。（填空 5）",
    "question": "表面粗糙度常用参数 Ra 表示轮廓算术平均 ____。（填空 5）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "偏差",
    "acceptableAnswers": [
      "偏差",
      "高度偏差",
      "轮廓偏差"
    ],
    "fillAnswers": [
      "偏差",
      "高度偏差",
      "轮廓偏差"
    ],
    "answerText": "偏差",
    "explanation": "Ra 是轮廓算术平均偏差，用于描述表面微观不平度。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "表面粗糙度",
    "knowledgePoints": [
      "公差检测",
      "表面粗糙度"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "表面粗糙度",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_097",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "尺寸 30 +0.021/0 中，上偏差是 ____ mm。（填空 5）",
    "question": "尺寸 30 +0.021/0 中，上偏差是 ____ mm。（填空 5）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "0.021",
    "acceptableAnswers": [
      "0.021",
      "+0.021"
    ],
    "fillAnswers": [
      "0.021",
      "+0.021"
    ],
    "answerText": "0.021",
    "explanation": "上偏差是上极限尺寸相对公称尺寸的偏差，本题为 +0.021 mm。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "上偏差",
    "knowledgePoints": [
      "公差检测",
      "上偏差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "上偏差",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_098",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "外径千分尺微分筒 1 格通常表示 ____ mm。（填空 5）",
    "question": "外径千分尺微分筒 1 格通常表示 ____ mm。（填空 5）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "0.01",
    "acceptableAnswers": [
      "0.01",
      "0.01mm"
    ],
    "fillAnswers": [
      "0.01",
      "0.01mm"
    ],
    "answerText": "0.01",
    "explanation": "常用千分尺分度值为 0.01 mm，读数时要加到主尺读数上。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "千分尺读数",
    "knowledgePoints": [
      "公差检测",
      "千分尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "千分尺读数",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_099",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将生产现场尺寸检测流程排序（批次 5）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。",
    "question": "将生产现场尺寸检测流程排序（批次 5）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。",
    "promptCode": "1. 记录结果\n2. 清洁量具和工件\n3. 选择合适量具\n4. 测量并复核\n5. 判定是否合格",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-5-1",
    "acceptableAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "fillAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "answerText": "2-3-4-5-1",
    "explanation": "检测前先清洁量具和工件，再按公差要求选择量具；测量要复核，随后与极限尺寸比较判定，最后记录结果，形成可追溯的质量数据。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "现场检测流程",
    "knowledgePoints": [
      "公差检测",
      "现场检测流程"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "现场检测流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_100",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将生产现场尺寸检测流程排序（批次 5）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。（工位 100）",
    "question": "将生产现场尺寸检测流程排序（批次 5）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。（工位 100）",
    "promptCode": "1. 记录结果\n2. 清洁量具和工件\n3. 选择合适量具\n4. 测量并复核\n5. 判定是否合格",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-5-1",
    "acceptableAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "fillAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "answerText": "2-3-4-5-1",
    "explanation": "检测前先清洁量具和工件，再按公差要求选择量具；测量要复核，随后与极限尺寸比较判定，最后记录结果，形成可追溯的质量数据。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "现场检测流程",
    "knowledgePoints": [
      "公差检测",
      "现场检测流程"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "现场检测流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_101",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "读数题",
    "difficulty": "easy",
    "text": "千分尺主尺 12.5 mm，微分筒对准 36 格，读数是多少？（检测任务 6）",
    "question": "千分尺主尺 12.5 mm，微分筒对准 36 格，读数是多少？（检测任务 6）",
    "options": [
      "12.36 mm",
      "12.50 mm",
      "12.86 mm",
      "13.36 mm"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "外径千分尺常按 0.01 mm 读微分筒，36 格为 0.36 mm，总读数为 12.5 + 0.36 = 12.86 mm。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "千分尺读数",
    "knowledgePoints": [
      "公差检测",
      "千分尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "千分尺读数",
      "读数题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_102",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "百分表每格 0.01 mm，指针转过 23 格，位移量是多少？（检测任务 6）",
    "question": "百分表每格 0.01 mm，指针转过 23 格，位移量是多少？（检测任务 6）",
    "options": [
      "0.23 mm",
      "2.3 mm",
      "23 mm",
      "0.023 mm"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "百分表每格 0.01 mm，23 格为 0.23 mm。读数题要先确认每格代表的量，再乘以格数。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "百分表读数",
    "knowledgePoints": [
      "公差检测",
      "百分表读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "百分表读数",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_103",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "孔为 φ40H7，轴为 φ40g6，通常属于哪类配合？（检测任务 6）",
    "question": "孔为 φ40H7，轴为 φ40g6，通常属于哪类配合？（检测任务 6）",
    "options": [
      "过渡配合",
      "无法装配",
      "间隙配合",
      "过盈配合"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "H7 孔下偏差为 0，g6 轴位于零线下方，轴通常小于孔，装配后形成间隙，适合相对转动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "孔轴配合",
    "knowledgePoints": [
      "公差检测",
      "孔轴配合"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "孔轴配合",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_104",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "粗糙度标注 Ra 1.6 主要限制什么？（检测任务 6）",
    "question": "粗糙度标注 Ra 1.6 主要限制什么？（检测任务 6）",
    "options": [
      "材料硬度",
      "表面微观不平度",
      "零件总长度",
      "孔轴配合间隙"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "Ra 是轮廓算术平均偏差，反映表面微观起伏程度，不是尺寸、配合或硬度指标。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "表面粗糙度",
    "knowledgePoints": [
      "公差检测",
      "表面粗糙度"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "表面粗糙度",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_105",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "几何公差框格“⊥ 0.05 A”表示什么？（检测任务 6）",
    "question": "几何公差框格“⊥ 0.05 A”表示什么？（检测任务 6）",
    "options": [
      "相对基准 A 的垂直度公差 0.05",
      "相对基准 A 的粗糙度 0.05",
      "尺寸上偏差 0.05",
      "孔径为 0.05"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "符号 ⊥ 表示垂直度，0.05 是公差值，A 是基准。它控制方向误差，不直接表示尺寸大小。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "几何公差框格",
    "knowledgePoints": [
      "公差检测",
      "几何公差框格"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "几何公差框格",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_106",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "读数题",
    "difficulty": "medium",
    "text": "用通止规检验孔时，正确判定方法是什么？（检测任务 6）",
    "question": "用通止规检验孔时，正确判定方法是什么？（检测任务 6）",
    "options": [
      "通端不通过、止端通过为合格",
      "两端都通过才合格",
      "两端都不通过才合格",
      "通端通过、止端不通过为合格"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "通端代表最大实体边界，应能通过；止端代表另一极限，不应通过。两端都通过常说明孔偏大。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "通止规检验",
    "knowledgePoints": [
      "公差检测",
      "通止规检验"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "通止规检验",
      "读数题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_107",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "游标卡尺主尺读到 23 mm，游标第 4 格对齐且分度值 0.10 mm，读数为多少？（检测任务 6）",
    "question": "游标卡尺主尺读到 23 mm，游标第 4 格对齐且分度值 0.10 mm，读数为多少？（检测任务 6）",
    "options": [
      "24.30 mm",
      "22.60 mm",
      "23.04 mm",
      "23.40 mm"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "读数等于主尺整数 23 mm 加游标 4 x 0.10 mm，即 23.40 mm。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "游标卡尺读数",
    "knowledgePoints": [
      "公差检测",
      "游标卡尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "游标卡尺读数",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_108",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "φ30 +0.021/0 的孔，实测 30.018 mm，应如何判定？（检测任务 6）",
    "question": "φ30 +0.021/0 的孔，实测 30.018 mm，应如何判定？（检测任务 6）",
    "options": [
      "无法根据尺寸判断",
      "合格",
      "偏小不合格",
      "偏大不合格"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "该尺寸允许范围为 30.000 至 30.021 mm，30.018 mm 落在范围内，因此合格；偏小和偏大都不符合实测情况。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "极限尺寸判定",
    "knowledgePoints": [
      "公差检测",
      "极限尺寸判定"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "极限尺寸判定",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_109",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "多选题",
    "difficulty": "medium",
    "text": "下列哪些属于几何公差项目？（现场复核 6）",
    "question": "下列哪些属于几何公差项目？（现场复核 6）",
    "options": [
      "平面度",
      "同轴度",
      "圆跳动",
      "毛坯成本"
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
    "explanation": "平面度、同轴度、圆跳动都是几何公差项目；毛坯成本不是公差项目。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "几何公差",
    "knowledgePoints": [
      "公差检测",
      "几何公差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "几何公差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_110",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "多选题",
    "difficulty": "hard",
    "text": "选择检测方法时应考虑哪些因素？（现场复核 6）",
    "question": "选择检测方法时应考虑哪些因素？（现场复核 6）",
    "options": [
      "生产批量",
      "检测效率",
      "操作者衣服颜色",
      "尺寸公差大小"
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
    "explanation": "公差越严、批量越大，对量具精度和效率要求越高；衣服颜色无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "检测方法选择",
    "knowledgePoints": [
      "公差检测",
      "检测方法选择"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "检测方法选择",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_111",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "多选题",
    "difficulty": "easy",
    "text": "影响测量误差的常见因素有哪些？（现场复核 6）",
    "question": "影响测量误差的常见因素有哪些？（现场复核 6）",
    "options": [
      "工件温度变化",
      "零件颜色鲜艳",
      "量具零位误差",
      "测量力过大"
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
    "explanation": "零位、测量力、温度都会影响测量结果；颜色本身不是尺寸测量误差来源。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "测量误差",
    "knowledgePoints": [
      "公差检测",
      "测量误差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "测量误差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_112",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "多选题",
    "difficulty": "easy",
    "text": "下列哪些属于几何公差项目？（现场复核 6）（工位 112）",
    "question": "下列哪些属于几何公差项目？（现场复核 6）（工位 112）",
    "options": [
      "毛坯成本",
      "平面度",
      "同轴度",
      "圆跳动"
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
    "explanation": "平面度、同轴度、圆跳动都是几何公差项目；毛坯成本不是公差项目。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "几何公差",
    "knowledgePoints": [
      "公差检测",
      "几何公差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "几何公差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_113",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "公差等于上极限尺寸减下极限尺寸。（判断 6）",
    "question": "公差等于上极限尺寸减下极限尺寸。（判断 6）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。公差反映允许尺寸变动范围，数值为上极限尺寸与下极限尺寸之差。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "尺寸公差",
    "knowledgePoints": [
      "公差检测",
      "尺寸公差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "尺寸公差",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_114",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "间隙配合适用于两个零件装配后需要相对运动的场合。（判断 6）",
    "question": "间隙配合适用于两个零件装配后需要相对运动的场合。（判断 6）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。需要转动或滑动时通常要留出合理间隙，并配合润滑和精度要求。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "间隙配合",
    "knowledgePoints": [
      "公差检测",
      "间隙配合"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "间隙配合",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_115",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "测量前不需要检查游标卡尺零位。（判断 6）",
    "question": "测量前不需要检查游标卡尺零位。（判断 6）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。零位偏差会直接带入读数，现场检测前应先合拢量爪检查零位。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "量具使用",
    "knowledgePoints": [
      "公差检测",
      "量具使用"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "量具使用",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_116",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "外径千分尺微分筒 1 格通常表示 ____ mm。（填空 6）",
    "question": "外径千分尺微分筒 1 格通常表示 ____ mm。（填空 6）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "0.01",
    "acceptableAnswers": [
      "0.01",
      "0.01mm"
    ],
    "fillAnswers": [
      "0.01",
      "0.01mm"
    ],
    "answerText": "0.01",
    "explanation": "常用千分尺分度值为 0.01 mm，读数时要加到主尺读数上。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "千分尺读数",
    "knowledgePoints": [
      "公差检测",
      "千分尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "千分尺读数",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_117",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "表面粗糙度常用参数 Ra 表示轮廓算术平均 ____。（填空 6）",
    "question": "表面粗糙度常用参数 Ra 表示轮廓算术平均 ____。（填空 6）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "偏差",
    "acceptableAnswers": [
      "偏差",
      "高度偏差",
      "轮廓偏差"
    ],
    "fillAnswers": [
      "偏差",
      "高度偏差",
      "轮廓偏差"
    ],
    "answerText": "偏差",
    "explanation": "Ra 是轮廓算术平均偏差，用于描述表面微观不平度。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "表面粗糙度",
    "knowledgePoints": [
      "公差检测",
      "表面粗糙度"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "表面粗糙度",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_118",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "尺寸 30 +0.021/0 中，上偏差是 ____ mm。（填空 6）",
    "question": "尺寸 30 +0.021/0 中，上偏差是 ____ mm。（填空 6）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "0.021",
    "acceptableAnswers": [
      "0.021",
      "+0.021"
    ],
    "fillAnswers": [
      "0.021",
      "+0.021"
    ],
    "answerText": "0.021",
    "explanation": "上偏差是上极限尺寸相对公称尺寸的偏差，本题为 +0.021 mm。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "上偏差",
    "knowledgePoints": [
      "公差检测",
      "上偏差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "上偏差",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_119",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将生产现场尺寸检测流程排序（批次 6）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。",
    "question": "将生产现场尺寸检测流程排序（批次 6）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。",
    "promptCode": "1. 记录结果\n2. 清洁量具和工件\n3. 选择合适量具\n4. 测量并复核\n5. 判定是否合格",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-5-1",
    "acceptableAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "fillAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "answerText": "2-3-4-5-1",
    "explanation": "检测前先清洁量具和工件，再按公差要求选择量具；测量要复核，随后与极限尺寸比较判定，最后记录结果，形成可追溯的质量数据。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "现场检测流程",
    "knowledgePoints": [
      "公差检测",
      "现场检测流程"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "现场检测流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_120",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将生产现场尺寸检测流程排序（批次 6）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。（工位 120）",
    "question": "将生产现场尺寸检测流程排序（批次 6）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。（工位 120）",
    "promptCode": "1. 记录结果\n2. 清洁量具和工件\n3. 选择合适量具\n4. 测量并复核\n5. 判定是否合格",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-5-1",
    "acceptableAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "fillAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "answerText": "2-3-4-5-1",
    "explanation": "检测前先清洁量具和工件，再按公差要求选择量具；测量要复核，随后与极限尺寸比较判定，最后记录结果，形成可追溯的质量数据。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "现场检测流程",
    "knowledgePoints": [
      "公差检测",
      "现场检测流程"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "现场检测流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_121",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "读数题",
    "difficulty": "easy",
    "text": "用通止规检验孔时，正确判定方法是什么？（检测任务 7）",
    "question": "用通止规检验孔时，正确判定方法是什么？（检测任务 7）",
    "options": [
      "通端通过、止端不通过为合格",
      "通端不通过、止端通过为合格",
      "两端都通过才合格",
      "两端都不通过才合格"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "通端代表最大实体边界，应能通过；止端代表另一极限，不应通过。两端都通过常说明孔偏大。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "通止规检验",
    "knowledgePoints": [
      "公差检测",
      "通止规检验"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "通止规检验",
      "读数题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_122",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "游标卡尺主尺读到 23 mm，游标第 4 格对齐且分度值 0.10 mm，读数为多少？（检测任务 7）",
    "question": "游标卡尺主尺读到 23 mm，游标第 4 格对齐且分度值 0.10 mm，读数为多少？（检测任务 7）",
    "options": [
      "23.40 mm",
      "24.30 mm",
      "22.60 mm",
      "23.04 mm"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "读数等于主尺整数 23 mm 加游标 4 x 0.10 mm，即 23.40 mm。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "游标卡尺读数",
    "knowledgePoints": [
      "公差检测",
      "游标卡尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "游标卡尺读数",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_123",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "φ30 +0.021/0 的孔，实测 30.018 mm，应如何判定？（检测任务 7）",
    "question": "φ30 +0.021/0 的孔，实测 30.018 mm，应如何判定？（检测任务 7）",
    "options": [
      "偏大不合格",
      "无法根据尺寸判断",
      "合格",
      "偏小不合格"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "该尺寸允许范围为 30.000 至 30.021 mm，30.018 mm 落在范围内，因此合格；偏小和偏大都不符合实测情况。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "极限尺寸判定",
    "knowledgePoints": [
      "公差检测",
      "极限尺寸判定"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "极限尺寸判定",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_124",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "千分尺主尺 12.5 mm，微分筒对准 36 格，读数是多少？（检测任务 7）",
    "question": "千分尺主尺 12.5 mm，微分筒对准 36 格，读数是多少？（检测任务 7）",
    "options": [
      "13.36 mm",
      "12.36 mm",
      "12.50 mm",
      "12.86 mm"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "外径千分尺常按 0.01 mm 读微分筒，36 格为 0.36 mm，总读数为 12.5 + 0.36 = 12.86 mm。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "千分尺读数",
    "knowledgePoints": [
      "公差检测",
      "千分尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "千分尺读数",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_125",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "百分表每格 0.01 mm，指针转过 23 格，位移量是多少？（检测任务 7）",
    "question": "百分表每格 0.01 mm，指针转过 23 格，位移量是多少？（检测任务 7）",
    "options": [
      "0.023 mm",
      "0.23 mm",
      "2.3 mm",
      "23 mm"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "百分表每格 0.01 mm，23 格为 0.23 mm。读数题要先确认每格代表的量，再乘以格数。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "百分表读数",
    "knowledgePoints": [
      "公差检测",
      "百分表读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "百分表读数",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_126",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "读数题",
    "difficulty": "medium",
    "text": "孔为 φ40H7，轴为 φ40g6，通常属于哪类配合？（检测任务 7）",
    "question": "孔为 φ40H7，轴为 φ40g6，通常属于哪类配合？（检测任务 7）",
    "options": [
      "过盈配合",
      "过渡配合",
      "无法装配",
      "间隙配合"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "H7 孔下偏差为 0，g6 轴位于零线下方，轴通常小于孔，装配后形成间隙，适合相对转动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "孔轴配合",
    "knowledgePoints": [
      "公差检测",
      "孔轴配合"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "孔轴配合",
      "读数题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_127",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "粗糙度标注 Ra 1.6 主要限制什么？（检测任务 7）",
    "question": "粗糙度标注 Ra 1.6 主要限制什么？（检测任务 7）",
    "options": [
      "孔轴配合间隙",
      "材料硬度",
      "表面微观不平度",
      "零件总长度"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "Ra 是轮廓算术平均偏差，反映表面微观起伏程度，不是尺寸、配合或硬度指标。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "表面粗糙度",
    "knowledgePoints": [
      "公差检测",
      "表面粗糙度"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "表面粗糙度",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_128",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "单选题",
    "difficulty": "medium",
    "text": "几何公差框格“⊥ 0.05 A”表示什么？（检测任务 7）",
    "question": "几何公差框格“⊥ 0.05 A”表示什么？（检测任务 7）",
    "options": [
      "孔径为 0.05",
      "相对基准 A 的垂直度公差 0.05",
      "相对基准 A 的粗糙度 0.05",
      "尺寸上偏差 0.05"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "符号 ⊥ 表示垂直度，0.05 是公差值，A 是基准。它控制方向误差，不直接表示尺寸大小。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "几何公差框格",
    "knowledgePoints": [
      "公差检测",
      "几何公差框格"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "几何公差框格",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_129",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "多选题",
    "difficulty": "medium",
    "text": "影响测量误差的常见因素有哪些？（现场复核 7）",
    "question": "影响测量误差的常见因素有哪些？（现场复核 7）",
    "options": [
      "量具零位误差",
      "测量力过大",
      "工件温度变化",
      "零件颜色鲜艳"
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
    "explanation": "零位、测量力、温度都会影响测量结果；颜色本身不是尺寸测量误差来源。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "测量误差",
    "knowledgePoints": [
      "公差检测",
      "测量误差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "测量误差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_130",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "多选题",
    "difficulty": "hard",
    "text": "下列哪些属于几何公差项目？（现场复核 7）",
    "question": "下列哪些属于几何公差项目？（现场复核 7）",
    "options": [
      "同轴度",
      "圆跳动",
      "毛坯成本",
      "平面度"
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
    "explanation": "平面度、同轴度、圆跳动都是几何公差项目；毛坯成本不是公差项目。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "几何公差",
    "knowledgePoints": [
      "公差检测",
      "几何公差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "几何公差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_131",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "多选题",
    "difficulty": "easy",
    "text": "选择检测方法时应考虑哪些因素？（现场复核 7）",
    "question": "选择检测方法时应考虑哪些因素？（现场复核 7）",
    "options": [
      "检测效率",
      "操作者衣服颜色",
      "尺寸公差大小",
      "生产批量"
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
    "explanation": "公差越严、批量越大，对量具精度和效率要求越高；衣服颜色无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "检测方法选择",
    "knowledgePoints": [
      "公差检测",
      "检测方法选择"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "检测方法选择",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_132",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "多选题",
    "difficulty": "easy",
    "text": "影响测量误差的常见因素有哪些？（现场复核 7）（工位 132）",
    "question": "影响测量误差的常见因素有哪些？（现场复核 7）（工位 132）",
    "options": [
      "零件颜色鲜艳",
      "量具零位误差",
      "测量力过大",
      "工件温度变化"
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
    "explanation": "零位、测量力、温度都会影响测量结果；颜色本身不是尺寸测量误差来源。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "测量误差",
    "knowledgePoints": [
      "公差检测",
      "测量误差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "测量误差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_133",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "公差等于上极限尺寸减下极限尺寸。（判断 7）",
    "question": "公差等于上极限尺寸减下极限尺寸。（判断 7）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。公差反映允许尺寸变动范围，数值为上极限尺寸与下极限尺寸之差。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "尺寸公差",
    "knowledgePoints": [
      "公差检测",
      "尺寸公差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "尺寸公差",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_134",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "间隙配合适用于两个零件装配后需要相对运动的场合。（判断 7）",
    "question": "间隙配合适用于两个零件装配后需要相对运动的场合。（判断 7）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。需要转动或滑动时通常要留出合理间隙，并配合润滑和精度要求。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "间隙配合",
    "knowledgePoints": [
      "公差检测",
      "间隙配合"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "间隙配合",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_135",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "测量前不需要检查游标卡尺零位。（判断 7）",
    "question": "测量前不需要检查游标卡尺零位。（判断 7）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。零位偏差会直接带入读数，现场检测前应先合拢量爪检查零位。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "量具使用",
    "knowledgePoints": [
      "公差检测",
      "量具使用"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "量具使用",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_136",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "尺寸 30 +0.021/0 中，上偏差是 ____ mm。（填空 7）",
    "question": "尺寸 30 +0.021/0 中，上偏差是 ____ mm。（填空 7）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "0.021",
    "acceptableAnswers": [
      "0.021",
      "+0.021"
    ],
    "fillAnswers": [
      "0.021",
      "+0.021"
    ],
    "answerText": "0.021",
    "explanation": "上偏差是上极限尺寸相对公称尺寸的偏差，本题为 +0.021 mm。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "上偏差",
    "knowledgePoints": [
      "公差检测",
      "上偏差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "上偏差",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_137",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "外径千分尺微分筒 1 格通常表示 ____ mm。（填空 7）",
    "question": "外径千分尺微分筒 1 格通常表示 ____ mm。（填空 7）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "0.01",
    "acceptableAnswers": [
      "0.01",
      "0.01mm"
    ],
    "fillAnswers": [
      "0.01",
      "0.01mm"
    ],
    "answerText": "0.01",
    "explanation": "常用千分尺分度值为 0.01 mm，读数时要加到主尺读数上。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "千分尺读数",
    "knowledgePoints": [
      "公差检测",
      "千分尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "千分尺读数",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_138",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "表面粗糙度常用参数 Ra 表示轮廓算术平均 ____。（填空 7）",
    "question": "表面粗糙度常用参数 Ra 表示轮廓算术平均 ____。（填空 7）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "偏差",
    "acceptableAnswers": [
      "偏差",
      "高度偏差",
      "轮廓偏差"
    ],
    "fillAnswers": [
      "偏差",
      "高度偏差",
      "轮廓偏差"
    ],
    "answerText": "偏差",
    "explanation": "Ra 是轮廓算术平均偏差，用于描述表面微观不平度。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "表面粗糙度",
    "knowledgePoints": [
      "公差检测",
      "表面粗糙度"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "表面粗糙度",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_139",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将生产现场尺寸检测流程排序（批次 7）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。",
    "question": "将生产现场尺寸检测流程排序（批次 7）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。",
    "promptCode": "1. 记录结果\n2. 清洁量具和工件\n3. 选择合适量具\n4. 测量并复核\n5. 判定是否合格",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-5-1",
    "acceptableAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "fillAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "answerText": "2-3-4-5-1",
    "explanation": "检测前先清洁量具和工件，再按公差要求选择量具；测量要复核，随后与极限尺寸比较判定，最后记录结果，形成可追溯的质量数据。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "现场检测流程",
    "knowledgePoints": [
      "公差检测",
      "现场检测流程"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "现场检测流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_140",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将生产现场尺寸检测流程排序（批次 7）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。（工位 140）",
    "question": "将生产现场尺寸检测流程排序（批次 7）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。（工位 140）",
    "promptCode": "1. 记录结果\n2. 清洁量具和工件\n3. 选择合适量具\n4. 测量并复核\n5. 判定是否合格",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-5-1",
    "acceptableAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "fillAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "answerText": "2-3-4-5-1",
    "explanation": "检测前先清洁量具和工件，再按公差要求选择量具；测量要复核，随后与极限尺寸比较判定，最后记录结果，形成可追溯的质量数据。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "现场检测流程",
    "knowledgePoints": [
      "公差检测",
      "现场检测流程"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "现场检测流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_141",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "读数题",
    "difficulty": "easy",
    "text": "孔为 φ40H7，轴为 φ40g6，通常属于哪类配合？（检测任务 8）",
    "question": "孔为 φ40H7，轴为 φ40g6，通常属于哪类配合？（检测任务 8）",
    "options": [
      "间隙配合",
      "过盈配合",
      "过渡配合",
      "无法装配"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "H7 孔下偏差为 0，g6 轴位于零线下方，轴通常小于孔，装配后形成间隙，适合相对转动。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "孔轴配合",
    "knowledgePoints": [
      "公差检测",
      "孔轴配合"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "孔轴配合",
      "读数题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_142",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "粗糙度标注 Ra 1.6 主要限制什么？（检测任务 8）",
    "question": "粗糙度标注 Ra 1.6 主要限制什么？（检测任务 8）",
    "options": [
      "零件总长度",
      "孔轴配合间隙",
      "材料硬度",
      "表面微观不平度"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "Ra 是轮廓算术平均偏差，反映表面微观起伏程度，不是尺寸、配合或硬度指标。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "表面粗糙度",
    "knowledgePoints": [
      "公差检测",
      "表面粗糙度"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "表面粗糙度",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_143",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "单选题",
    "difficulty": "easy",
    "text": "几何公差框格“⊥ 0.05 A”表示什么？（检测任务 8）",
    "question": "几何公差框格“⊥ 0.05 A”表示什么？（检测任务 8）",
    "options": [
      "尺寸上偏差 0.05",
      "孔径为 0.05",
      "相对基准 A 的垂直度公差 0.05",
      "相对基准 A 的粗糙度 0.05"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "符号 ⊥ 表示垂直度，0.05 是公差值，A 是基准。它控制方向误差，不直接表示尺寸大小。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "几何公差框格",
    "knowledgePoints": [
      "公差检测",
      "几何公差框格"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "几何公差框格",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_144",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "单选题",
    "difficulty": "easy",
    "text": "用通止规检验孔时，正确判定方法是什么？（检测任务 8）",
    "question": "用通止规检验孔时，正确判定方法是什么？（检测任务 8）",
    "options": [
      "两端都不通过才合格",
      "通端通过、止端不通过为合格",
      "通端不通过、止端通过为合格",
      "两端都通过才合格"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "通端代表最大实体边界，应能通过；止端代表另一极限，不应通过。两端都通过常说明孔偏大。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "通止规检验",
    "knowledgePoints": [
      "公差检测",
      "通止规检验"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "通止规检验",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_145",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "单选题",
    "difficulty": "easy",
    "text": "游标卡尺主尺读到 23 mm，游标第 4 格对齐且分度值 0.10 mm，读数为多少？（检测任务 8）",
    "question": "游标卡尺主尺读到 23 mm，游标第 4 格对齐且分度值 0.10 mm，读数为多少？（检测任务 8）",
    "options": [
      "23.04 mm",
      "23.40 mm",
      "24.30 mm",
      "22.60 mm"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "读数等于主尺整数 23 mm 加游标 4 x 0.10 mm，即 23.40 mm。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "游标卡尺读数",
    "knowledgePoints": [
      "公差检测",
      "游标卡尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "游标卡尺读数",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_146",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "读数题",
    "difficulty": "medium",
    "text": "φ30 +0.021/0 的孔，实测 30.018 mm，应如何判定？（检测任务 8）",
    "question": "φ30 +0.021/0 的孔，实测 30.018 mm，应如何判定？（检测任务 8）",
    "options": [
      "偏小不合格",
      "偏大不合格",
      "无法根据尺寸判断",
      "合格"
    ],
    "answerIndex": 3,
    "answer": "D",
    "acceptableAnswers": [],
    "explanation": "该尺寸允许范围为 30.000 至 30.021 mm，30.018 mm 落在范围内，因此合格；偏小和偏大都不符合实测情况。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "极限尺寸判定",
    "knowledgePoints": [
      "公差检测",
      "极限尺寸判定"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "极限尺寸判定",
      "读数题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_147",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "单选题",
    "difficulty": "medium",
    "text": "千分尺主尺 12.5 mm，微分筒对准 36 格，读数是多少？（检测任务 8）",
    "question": "千分尺主尺 12.5 mm，微分筒对准 36 格，读数是多少？（检测任务 8）",
    "options": [
      "12.86 mm",
      "13.36 mm",
      "12.36 mm",
      "12.50 mm"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "外径千分尺常按 0.01 mm 读微分筒，36 格为 0.36 mm，总读数为 12.5 + 0.36 = 12.86 mm。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "千分尺读数",
    "knowledgePoints": [
      "公差检测",
      "千分尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "千分尺读数",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_148",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "单选题",
    "difficulty": "medium",
    "text": "百分表每格 0.01 mm，指针转过 23 格，位移量是多少？（检测任务 8）",
    "question": "百分表每格 0.01 mm，指针转过 23 格，位移量是多少？（检测任务 8）",
    "options": [
      "23 mm",
      "0.023 mm",
      "0.23 mm",
      "2.3 mm"
    ],
    "answerIndex": 2,
    "answer": "C",
    "acceptableAnswers": [],
    "explanation": "百分表每格 0.01 mm，23 格为 0.23 mm。读数题要先确认每格代表的量，再乘以格数。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "百分表读数",
    "knowledgePoints": [
      "公差检测",
      "百分表读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "百分表读数",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_149",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "多选题",
    "difficulty": "medium",
    "text": "选择检测方法时应考虑哪些因素？（现场复核 8）",
    "question": "选择检测方法时应考虑哪些因素？（现场复核 8）",
    "options": [
      "尺寸公差大小",
      "生产批量",
      "检测效率",
      "操作者衣服颜色"
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
    "explanation": "公差越严、批量越大，对量具精度和效率要求越高；衣服颜色无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "检测方法选择",
    "knowledgePoints": [
      "公差检测",
      "检测方法选择"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "检测方法选择",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_150",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "多选题",
    "difficulty": "hard",
    "text": "影响测量误差的常见因素有哪些？（现场复核 8）",
    "question": "影响测量误差的常见因素有哪些？（现场复核 8）",
    "options": [
      "测量力过大",
      "工件温度变化",
      "零件颜色鲜艳",
      "量具零位误差"
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
    "explanation": "零位、测量力、温度都会影响测量结果；颜色本身不是尺寸测量误差来源。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "测量误差",
    "knowledgePoints": [
      "公差检测",
      "测量误差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "测量误差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_151",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "多选题",
    "difficulty": "easy",
    "text": "下列哪些属于几何公差项目？（现场复核 8）",
    "question": "下列哪些属于几何公差项目？（现场复核 8）",
    "options": [
      "圆跳动",
      "毛坯成本",
      "平面度",
      "同轴度"
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
    "explanation": "平面度、同轴度、圆跳动都是几何公差项目；毛坯成本不是公差项目。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "几何公差",
    "knowledgePoints": [
      "公差检测",
      "几何公差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "几何公差",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_152",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "多选题",
    "difficulty": "easy",
    "text": "选择检测方法时应考虑哪些因素？（现场复核 8）（工位 152）",
    "question": "选择检测方法时应考虑哪些因素？（现场复核 8）（工位 152）",
    "options": [
      "操作者衣服颜色",
      "尺寸公差大小",
      "生产批量",
      "检测效率"
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
    "explanation": "公差越严、批量越大，对量具精度和效率要求越高；衣服颜色无关。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "检测方法选择",
    "knowledgePoints": [
      "公差检测",
      "检测方法选择"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "检测方法选择",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "gcjc_153",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "判断题",
    "difficulty": "easy",
    "text": "公差等于上极限尺寸减下极限尺寸。（判断 8）",
    "question": "公差等于上极限尺寸减下极限尺寸。（判断 8）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。公差反映允许尺寸变动范围，数值为上极限尺寸与下极限尺寸之差。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "尺寸公差",
    "knowledgePoints": [
      "公差检测",
      "尺寸公差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "尺寸公差",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_154",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "判断题",
    "difficulty": "easy",
    "text": "间隙配合适用于两个零件装配后需要相对运动的场合。（判断 8）",
    "question": "间隙配合适用于两个零件装配后需要相对运动的场合。（判断 8）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "正确。需要转动或滑动时通常要留出合理间隙，并配合润滑和精度要求。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "间隙配合",
    "knowledgePoints": [
      "公差检测",
      "间隙配合"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "间隙配合",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_155",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "判断题",
    "difficulty": "easy",
    "text": "测量前不需要检查游标卡尺零位。（判断 8）",
    "question": "测量前不需要检查游标卡尺零位。（判断 8）",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "错误。零位偏差会直接带入读数，现场检测前应先合拢量爪检查零位。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "量具使用",
    "knowledgePoints": [
      "公差检测",
      "量具使用"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "量具使用",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_156",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "填空题",
    "difficulty": "medium",
    "text": "表面粗糙度常用参数 Ra 表示轮廓算术平均 ____。（填空 8）",
    "question": "表面粗糙度常用参数 Ra 表示轮廓算术平均 ____。（填空 8）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "偏差",
    "acceptableAnswers": [
      "偏差",
      "高度偏差",
      "轮廓偏差"
    ],
    "fillAnswers": [
      "偏差",
      "高度偏差",
      "轮廓偏差"
    ],
    "answerText": "偏差",
    "explanation": "Ra 是轮廓算术平均偏差，用于描述表面微观不平度。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "表面粗糙度",
    "knowledgePoints": [
      "公差检测",
      "表面粗糙度"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "表面粗糙度",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_157",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "填空题",
    "difficulty": "medium",
    "text": "尺寸 30 +0.021/0 中，上偏差是 ____ mm。（填空 8）",
    "question": "尺寸 30 +0.021/0 中，上偏差是 ____ mm。（填空 8）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "0.021",
    "acceptableAnswers": [
      "0.021",
      "+0.021"
    ],
    "fillAnswers": [
      "0.021",
      "+0.021"
    ],
    "answerText": "0.021",
    "explanation": "上偏差是上极限尺寸相对公称尺寸的偏差，本题为 +0.021 mm。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "上偏差",
    "knowledgePoints": [
      "公差检测",
      "上偏差"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "上偏差",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_158",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-2",
    "type": "填空题",
    "difficulty": "medium",
    "text": "外径千分尺微分筒 1 格通常表示 ____ mm。（填空 8）",
    "question": "外径千分尺微分筒 1 格通常表示 ____ mm。（填空 8）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "0.01",
    "acceptableAnswers": [
      "0.01",
      "0.01mm"
    ],
    "fillAnswers": [
      "0.01",
      "0.01mm"
    ],
    "answerText": "0.01",
    "explanation": "常用千分尺分度值为 0.01 mm，读数时要加到主尺读数上。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "千分尺读数",
    "knowledgePoints": [
      "公差检测",
      "千分尺读数"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "千分尺读数",
      "填空题"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_159",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-3",
    "type": "process_order",
    "difficulty": "medium",
    "text": "将生产现场尺寸检测流程排序（批次 8）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。",
    "question": "将生产现场尺寸检测流程排序（批次 8）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。",
    "promptCode": "1. 记录结果\n2. 清洁量具和工件\n3. 选择合适量具\n4. 测量并复核\n5. 判定是否合格",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-5-1",
    "acceptableAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "fillAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "answerText": "2-3-4-5-1",
    "explanation": "检测前先清洁量具和工件，再按公差要求选择量具；测量要复核，随后与极限尺寸比较判定，最后记录结果，形成可追溯的质量数据。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "现场检测流程",
    "knowledgePoints": [
      "公差检测",
      "现场检测流程"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "现场检测流程",
      "process_order"
    ],
    "isMultiple": false
  },
  {
    "id": "gcjc_160",
    "category": "公差检测区",
    "area": "公差检测区",
    "module": "公差检测",
    "moduleName": "公差检测区",
    "levelId": "tolerance-1",
    "type": "process_order",
    "difficulty": "hard",
    "text": "将生产现场尺寸检测流程排序（批次 8）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。（工位 160）",
    "question": "将生产现场尺寸检测流程排序（批次 8）：1. 记录结果 2. 清洁量具和工件 3. 选择合适量具 4. 测量并复核 5. 判定是否合格。（工位 160）",
    "promptCode": "1. 记录结果\n2. 清洁量具和工件\n3. 选择合适量具\n4. 测量并复核\n5. 判定是否合格",
    "options": [],
    "answerIndex": -1,
    "answer": "2-3-4-5-1",
    "acceptableAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "fillAnswers": [
      "2-3-4-5-1",
      "23451"
    ],
    "answerText": "2-3-4-5-1",
    "explanation": "检测前先清洁量具和工件，再按公差要求选择量具；测量要复核，随后与极限尺寸比较判定，最后记录结果，形成可追溯的质量数据。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "现场检测流程",
    "knowledgePoints": [
      "公差检测",
      "现场检测流程"
    ],
    "tags": [
      "公差检测区",
      "公差检测",
      "现场检测流程",
      "process_order"
    ],
    "isMultiple": false
  }
];

export const toleranceDetectionQuestionsStats = {
  "total": 160,
  "type": {
    "读数题": 16,
    "单选题": 48,
    "多选题": 32,
    "判断题": 24,
    "填空题": 24,
    "process_order": 16
  },
  "difficulty": {
    "easy": 80,
    "medium": 64,
    "hard": 16
  },
  "imageCount": 32,
  "dedupedTextCount": 16
};
