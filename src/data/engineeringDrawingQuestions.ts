export type EngineeringQuestionType = "single_choice" | "multiple_choice" | "true_false" | "image_error_finding" | "short_answer" | "comprehensive_analysis";
export type EngineeringQuestionDifficulty = "easy" | "medium" | "medium_hard" | "hard";
export type EngineeringOption = { key: string; text: string; isTrap: boolean; trapType: string | null };
export type EngineeringQuestionAnalysis = { correctReason: string; wrongReasons: Record<string, string>; imageExplanation: string; correctionSuggestion: string; learningPoint: string; commonMistake: string };
export type EngineeringQuestion = {
  id: string;
  category: "工程制图";
  levelId: string;
  section: "basic_reading" | "part_drawing" | "advanced_analysis";
  sectionName: string;
  type: EngineeringQuestionType;
  difficulty: EngineeringQuestionDifficulty;
  drawingId: string;
  imageId: string;
  image: string | null;
  imageUrl: string | null;
  imageFocus: string;
  relatedDrawingFeature: string;
  question: string;
  options: EngineeringOption[];
  answer: string | string[];
  answerIndex: number | number[];
  analysis: EngineeringQuestionAnalysis;
  mistakeTeaching: Record<string, { whyThisOptionLooksRight: string; whyItIsActuallyWrong: string; howToAvoid: string }>;
  knowledgePoint: string;
  knowledgePoints: string[];
  tags: string[];
};

export const engineeringDrawingQuestions: EngineeringQuestion[] = [
  {
    "id": "EQ-001",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "type": "single_choice",
    "difficulty": "medium_hard",
    "drawingId": "DRAW-001",
    "imageId": "DRAW-001",
    "image": "/assets/engineering-drawing/draw_001_bearing_seat_half_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_001_bearing_seat_half_section.svg",
    "imageFocus": "轴承座半剖三视图",
    "relatedDrawingFeature": "三视图、半剖视图、安装孔沉孔、肋板表达、尺寸基准",
    "question": "根据 DRAW-001《轴承座半剖三视图》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "三视图、半剖视图与安装孔沉孔的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了三视图、半剖视图、安装孔沉孔等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：半剖分界线与中心线重合，纵向肋板不画剖面线。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握三视图、半剖视图、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "三视图、半剖视图、读图能力",
    "knowledgePoints": [
      "三视图",
      "半剖视图",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "轴承座",
      "三视图",
      "半剖视图",
      "读图能力"
    ]
  },
  {
    "id": "EQ-002",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "type": "multiple_choice",
    "difficulty": "medium_hard",
    "drawingId": "DRAW-001",
    "imageId": "DRAW-001",
    "image": "/assets/engineering-drawing/draw_001_bearing_seat_half_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_001_bearing_seat_half_section.svg",
    "imageFocus": "轴承座半剖三视图",
    "relatedDrawingFeature": "三视图、半剖视图、安装孔沉孔、肋板表达、尺寸基准",
    "question": "审核 DRAW-001《轴承座半剖三视图》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对三视图是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对安装孔沉孔的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的三视图和安装孔沉孔；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：半剖分界线与中心线重合，纵向肋板不画剖面线。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握三视图、安装孔沉孔、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "三视图、安装孔沉孔、图纸审核",
    "knowledgePoints": [
      "三视图",
      "安装孔沉孔",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "轴承座",
      "三视图",
      "安装孔沉孔",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-003",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "DRAW-002",
    "imageId": "DRAW-002",
    "image": "/assets/engineering-drawing/draw_002_stepped_shaft_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_002_stepped_shaft_section.svg",
    "imageFocus": "阶梯轴全剖与移出断面",
    "relatedDrawingFeature": "全剖视图、移出断面、键槽、倒角、粗糙度",
    "question": "根据 DRAW-002《阶梯轴全剖与移出断面》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "全剖视图、移出断面与键槽的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了全剖视图、移出断面、键槽等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：轴向尺寸按基准分段标注，端部倒角明确。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握全剖视图、移出断面、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "全剖视图、移出断面、读图能力",
    "knowledgePoints": [
      "全剖视图",
      "移出断面",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "轴类",
      "全剖视图",
      "移出断面",
      "读图能力"
    ]
  },
  {
    "id": "EQ-004",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "type": "multiple_choice",
    "difficulty": "medium",
    "drawingId": "DRAW-002",
    "imageId": "DRAW-002",
    "image": "/assets/engineering-drawing/draw_002_stepped_shaft_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_002_stepped_shaft_section.svg",
    "imageFocus": "阶梯轴全剖与移出断面",
    "relatedDrawingFeature": "全剖视图、移出断面、键槽、倒角、粗糙度",
    "question": "审核 DRAW-002《阶梯轴全剖与移出断面》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对全剖视图是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对键槽的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的全剖视图和键槽；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：轴向尺寸按基准分段标注，端部倒角明确。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握全剖视图、键槽、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "全剖视图、键槽、图纸审核",
    "knowledgePoints": [
      "全剖视图",
      "键槽",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "轴类",
      "全剖视图",
      "键槽",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-005",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "type": "single_choice",
    "difficulty": "medium_hard",
    "drawingId": "DRAW-003",
    "imageId": "DRAW-003",
    "image": "/assets/engineering-drawing/draw_003_flange_cover_full_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_003_flange_cover_full_section.svg",
    "imageFocus": "法兰端盖全剖图",
    "relatedDrawingFeature": "全剖视图、圆周均布孔、沉孔深度、分布圆、位置度",
    "question": "根据 DRAW-003《法兰端盖全剖图》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "全剖视图、圆周均布孔与沉孔深度的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了全剖视图、圆周均布孔、沉孔深度等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：端面孔系数量、孔径和分布圆标注完整。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握全剖视图、圆周均布孔、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "全剖视图、圆周均布孔、读图能力",
    "knowledgePoints": [
      "全剖视图",
      "圆周均布孔",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "盘盖类",
      "全剖视图",
      "圆周均布孔",
      "读图能力"
    ]
  },
  {
    "id": "EQ-006",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "type": "multiple_choice",
    "difficulty": "medium_hard",
    "drawingId": "DRAW-003",
    "imageId": "DRAW-003",
    "image": "/assets/engineering-drawing/draw_003_flange_cover_full_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_003_flange_cover_full_section.svg",
    "imageFocus": "法兰端盖全剖图",
    "relatedDrawingFeature": "全剖视图、圆周均布孔、沉孔深度、分布圆、位置度",
    "question": "审核 DRAW-003《法兰端盖全剖图》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对全剖视图是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对沉孔深度的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的全剖视图和沉孔深度；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：端面孔系数量、孔径和分布圆标注完整。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握全剖视图、沉孔深度、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "全剖视图、沉孔深度、图纸审核",
    "knowledgePoints": [
      "全剖视图",
      "沉孔深度",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "盘盖类",
      "全剖视图",
      "沉孔深度",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-007",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "DRAW-004",
    "imageId": "DRAW-004",
    "image": "/assets/engineering-drawing/draw_004_ribbed_bracket_three_views.svg",
    "imageUrl": "/assets/engineering-drawing/draw_004_ribbed_bracket_three_views.svg",
    "imageFocus": "筋板支架三视图",
    "relatedDrawingFeature": "投影关系、肋板投影、连接孔、板厚、中心线",
    "question": "根据 DRAW-004《筋板支架三视图》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "投影关系、肋板投影与连接孔的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了投影关系、肋板投影、连接孔等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：主俯左三视图投影对应，竖板孔中心线完整。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握投影关系、肋板投影、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "投影关系、肋板投影、读图能力",
    "knowledgePoints": [
      "投影关系",
      "肋板投影",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "支架类",
      "投影关系",
      "肋板投影",
      "读图能力"
    ]
  },
  {
    "id": "EQ-008",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "type": "multiple_choice",
    "difficulty": "medium",
    "drawingId": "DRAW-004",
    "imageId": "DRAW-004",
    "image": "/assets/engineering-drawing/draw_004_ribbed_bracket_three_views.svg",
    "imageUrl": "/assets/engineering-drawing/draw_004_ribbed_bracket_three_views.svg",
    "imageFocus": "筋板支架三视图",
    "relatedDrawingFeature": "投影关系、肋板投影、连接孔、板厚、中心线",
    "question": "审核 DRAW-004《筋板支架三视图》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对投影关系是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对连接孔的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的投影关系和连接孔；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：主俯左三视图投影对应，竖板孔中心线完整。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握投影关系、连接孔、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "投影关系、连接孔、图纸审核",
    "knowledgePoints": [
      "投影关系",
      "连接孔",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "支架类",
      "投影关系",
      "连接孔",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-009",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "type": "single_choice",
    "difficulty": "hard",
    "drawingId": "DRAW-005",
    "imageId": "DRAW-005",
    "image": "/assets/engineering-drawing/draw_005_pump_cover_local_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_005_pump_cover_local_section.svg",
    "imageFocus": "泵盖局部剖视图",
    "relatedDrawingFeature": "局部剖视图、密封槽、螺纹孔、同轴度、技术要求",
    "question": "根据 DRAW-005《泵盖局部剖视图》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "局部剖视图、密封槽与螺纹孔的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了局部剖视图、密封槽、螺纹孔等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：局部剖边界清晰，密封槽和螺纹孔表达明确。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握局部剖视图、密封槽、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "局部剖视图、密封槽、读图能力",
    "knowledgePoints": [
      "局部剖视图",
      "密封槽",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "箱盖类",
      "局部剖视图",
      "密封槽",
      "读图能力"
    ]
  },
  {
    "id": "EQ-010",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "type": "multiple_choice",
    "difficulty": "hard",
    "drawingId": "DRAW-005",
    "imageId": "DRAW-005",
    "image": "/assets/engineering-drawing/draw_005_pump_cover_local_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_005_pump_cover_local_section.svg",
    "imageFocus": "泵盖局部剖视图",
    "relatedDrawingFeature": "局部剖视图、密封槽、螺纹孔、同轴度、技术要求",
    "question": "审核 DRAW-005《泵盖局部剖视图》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对局部剖视图是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对螺纹孔的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的局部剖视图和螺纹孔；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：局部剖边界清晰，密封槽和螺纹孔表达明确。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握局部剖视图、螺纹孔、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "局部剖视图、螺纹孔、图纸审核",
    "knowledgePoints": [
      "局部剖视图",
      "螺纹孔",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "箱盖类",
      "局部剖视图",
      "螺纹孔",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-011",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "DRAW-006",
    "imageId": "DRAW-006",
    "image": "/assets/engineering-drawing/draw_006_counterbore_plate.svg",
    "imageUrl": "/assets/engineering-drawing/draw_006_counterbore_plate.svg",
    "imageFocus": "沉孔连接板零件图",
    "relatedDrawingFeature": "沉孔标注、孔距、端距、圆角、尺寸基准",
    "question": "根据 DRAW-006《沉孔连接板零件图》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "沉孔标注、孔距与端距的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了沉孔标注、孔距、端距等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：沉孔写明大径和深度，孔距端距按基准标注。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握沉孔标注、孔距、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "沉孔标注、孔距、读图能力",
    "knowledgePoints": [
      "沉孔标注",
      "孔距",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "板类",
      "沉孔标注",
      "孔距",
      "读图能力"
    ]
  },
  {
    "id": "EQ-012",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "type": "multiple_choice",
    "difficulty": "medium",
    "drawingId": "DRAW-006",
    "imageId": "DRAW-006",
    "image": "/assets/engineering-drawing/draw_006_counterbore_plate.svg",
    "imageUrl": "/assets/engineering-drawing/draw_006_counterbore_plate.svg",
    "imageFocus": "沉孔连接板零件图",
    "relatedDrawingFeature": "沉孔标注、孔距、端距、圆角、尺寸基准",
    "question": "审核 DRAW-006《沉孔连接板零件图》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对沉孔标注是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对端距的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的沉孔标注和端距；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：沉孔写明大径和深度，孔距端距按基准标注。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握沉孔标注、端距、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "沉孔标注、端距、图纸审核",
    "knowledgePoints": [
      "沉孔标注",
      "端距",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "板类",
      "沉孔标注",
      "端距",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-013",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "DRAW-007",
    "imageId": "DRAW-007",
    "image": "/assets/engineering-drawing/draw_007_shaft_sleeve_full_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_007_shaft_sleeve_full_section.svg",
    "imageFocus": "轴套全剖零件图",
    "relatedDrawingFeature": "同轴孔、台阶孔、油槽、倒角、尺寸链",
    "question": "根据 DRAW-007《轴套全剖零件图》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "同轴孔、台阶孔与油槽的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了同轴孔、台阶孔、油槽等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：孔腔不画剖面线，轴向尺寸避免封闭尺寸链。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握同轴孔、台阶孔、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "同轴孔、台阶孔、读图能力",
    "knowledgePoints": [
      "同轴孔",
      "台阶孔",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "套筒类",
      "同轴孔",
      "台阶孔",
      "读图能力"
    ]
  },
  {
    "id": "EQ-014",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "type": "multiple_choice",
    "difficulty": "medium",
    "drawingId": "DRAW-007",
    "imageId": "DRAW-007",
    "image": "/assets/engineering-drawing/draw_007_shaft_sleeve_full_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_007_shaft_sleeve_full_section.svg",
    "imageFocus": "轴套全剖零件图",
    "relatedDrawingFeature": "同轴孔、台阶孔、油槽、倒角、尺寸链",
    "question": "审核 DRAW-007《轴套全剖零件图》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对同轴孔是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对油槽的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的同轴孔和油槽；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：孔腔不画剖面线，轴向尺寸避免封闭尺寸链。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握同轴孔、油槽、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "同轴孔、油槽、图纸审核",
    "knowledgePoints": [
      "同轴孔",
      "油槽",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "套筒类",
      "同轴孔",
      "油槽",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-015",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "type": "single_choice",
    "difficulty": "medium_hard",
    "drawingId": "DRAW-008",
    "imageId": "DRAW-008",
    "image": "/assets/engineering-drawing/draw_008_gear_blank_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_008_gear_blank_section.svg",
    "imageFocus": "齿轮坯剖视图",
    "relatedDrawingFeature": "轮毂、腹板、键槽、剖面线、基准",
    "question": "根据 DRAW-008《齿轮坯剖视图》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "轮毂、腹板与键槽的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了轮毂、腹板、键槽等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：轮毂、腹板、轮缘剖切关系清楚。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握轮毂、腹板、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "轮毂、腹板、读图能力",
    "knowledgePoints": [
      "轮毂",
      "腹板",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "盘类",
      "轮毂",
      "腹板",
      "读图能力"
    ]
  },
  {
    "id": "EQ-016",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "type": "multiple_choice",
    "difficulty": "medium_hard",
    "drawingId": "DRAW-008",
    "imageId": "DRAW-008",
    "image": "/assets/engineering-drawing/draw_008_gear_blank_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_008_gear_blank_section.svg",
    "imageFocus": "齿轮坯剖视图",
    "relatedDrawingFeature": "轮毂、腹板、键槽、剖面线、基准",
    "question": "审核 DRAW-008《齿轮坯剖视图》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对轮毂是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对键槽的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的轮毂和键槽；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：轮毂、腹板、轮缘剖切关系清楚。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握轮毂、键槽、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "轮毂、键槽、图纸审核",
    "knowledgePoints": [
      "轮毂",
      "键槽",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "盘类",
      "轮毂",
      "键槽",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-017",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "type": "single_choice",
    "difficulty": "hard",
    "drawingId": "DRAW-009",
    "imageId": "DRAW-009",
    "image": "/assets/engineering-drawing/draw_009_box_body_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_009_box_body_section.svg",
    "imageFocus": "小箱体剖视图",
    "relatedDrawingFeature": "箱体内腔、壁厚、螺纹孔、剖面线、投影对应",
    "question": "根据 DRAW-009《小箱体剖视图》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "箱体内腔、壁厚与螺纹孔的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了箱体内腔、壁厚、螺纹孔等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：内腔不剖，壁厚和孔系在视图间对应。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握箱体内腔、壁厚、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "箱体内腔、壁厚、读图能力",
    "knowledgePoints": [
      "箱体内腔",
      "壁厚",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "箱体类",
      "箱体内腔",
      "壁厚",
      "读图能力"
    ]
  },
  {
    "id": "EQ-018",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "type": "multiple_choice",
    "difficulty": "hard",
    "drawingId": "DRAW-009",
    "imageId": "DRAW-009",
    "image": "/assets/engineering-drawing/draw_009_box_body_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_009_box_body_section.svg",
    "imageFocus": "小箱体剖视图",
    "relatedDrawingFeature": "箱体内腔、壁厚、螺纹孔、剖面线、投影对应",
    "question": "审核 DRAW-009《小箱体剖视图》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对箱体内腔是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对螺纹孔的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的箱体内腔和螺纹孔；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：内腔不剖，壁厚和孔系在视图间对应。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握箱体内腔、螺纹孔、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "箱体内腔、螺纹孔、图纸审核",
    "knowledgePoints": [
      "箱体内腔",
      "螺纹孔",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "箱体类",
      "箱体内腔",
      "螺纹孔",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-019",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "DRAW-010",
    "imageId": "DRAW-010",
    "image": "/assets/engineering-drawing/draw_010_locating_block_views.svg",
    "imageUrl": "/assets/engineering-drawing/draw_010_locating_block_views.svg",
    "imageFocus": "定位块三视图",
    "relatedDrawingFeature": "组合体识读、槽、斜面、隐藏线、尺寸标注",
    "question": "根据 DRAW-010《定位块三视图》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "组合体识读、槽与斜面的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了组合体识读、槽、斜面等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：槽和斜面在三视图中对应表达。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握组合体识读、槽、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "组合体识读、槽、读图能力",
    "knowledgePoints": [
      "组合体识读",
      "槽",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "块类",
      "组合体识读",
      "槽",
      "读图能力"
    ]
  },
  {
    "id": "EQ-020",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "type": "multiple_choice",
    "difficulty": "medium",
    "drawingId": "DRAW-010",
    "imageId": "DRAW-010",
    "image": "/assets/engineering-drawing/draw_010_locating_block_views.svg",
    "imageUrl": "/assets/engineering-drawing/draw_010_locating_block_views.svg",
    "imageFocus": "定位块三视图",
    "relatedDrawingFeature": "组合体识读、槽、斜面、隐藏线、尺寸标注",
    "question": "审核 DRAW-010《定位块三视图》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对组合体识读是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对斜面的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的组合体识读和斜面；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：槽和斜面在三视图中对应表达。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握组合体识读、斜面、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "组合体识读、斜面、图纸审核",
    "knowledgePoints": [
      "组合体识读",
      "斜面",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "块类",
      "组合体识读",
      "斜面",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-021",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "type": "single_choice",
    "difficulty": "medium_hard",
    "drawingId": "DRAW-011",
    "imageId": "DRAW-011",
    "image": "/assets/engineering-drawing/draw_011_v_block_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_011_v_block_section.svg",
    "imageFocus": "V形块局部剖视图",
    "relatedDrawingFeature": "V形槽、对称中心线、局部剖、角度标注、表面粗糙度",
    "question": "根据 DRAW-011《V形块局部剖视图》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "V形槽、对称中心线与局部剖的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了V形槽、对称中心线、局部剖等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：V形槽角度与对称中心线标注清楚。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握V形槽、对称中心线、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "V形槽、对称中心线、读图能力",
    "knowledgePoints": [
      "V形槽",
      "对称中心线",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "夹具类",
      "V形槽",
      "对称中心线",
      "读图能力"
    ]
  },
  {
    "id": "EQ-022",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "type": "multiple_choice",
    "difficulty": "medium_hard",
    "drawingId": "DRAW-011",
    "imageId": "DRAW-011",
    "image": "/assets/engineering-drawing/draw_011_v_block_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_011_v_block_section.svg",
    "imageFocus": "V形块局部剖视图",
    "relatedDrawingFeature": "V形槽、对称中心线、局部剖、角度标注、表面粗糙度",
    "question": "审核 DRAW-011《V形块局部剖视图》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对V形槽是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对局部剖的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的V形槽和局部剖；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：V形槽角度与对称中心线标注清楚。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握V形槽、局部剖、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "V形槽、局部剖、图纸审核",
    "knowledgePoints": [
      "V形槽",
      "局部剖",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "夹具类",
      "V形槽",
      "局部剖",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-023",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "type": "single_choice",
    "difficulty": "hard",
    "drawingId": "DRAW-012",
    "imageId": "DRAW-012",
    "image": "/assets/engineering-drawing/draw_012_fork_bracket_views.svg",
    "imageUrl": "/assets/engineering-drawing/draw_012_fork_bracket_views.svg",
    "imageFocus": "叉形支架零件图",
    "relatedDrawingFeature": "叉耳、同轴孔、局部剖、孔距、形位公差",
    "question": "根据 DRAW-012《叉形支架零件图》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "叉耳、同轴孔与局部剖的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了叉耳、同轴孔、局部剖等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：两叉耳同轴孔与底座孔系关系明确。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握叉耳、同轴孔、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "叉耳、同轴孔、读图能力",
    "knowledgePoints": [
      "叉耳",
      "同轴孔",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "叉架类",
      "叉耳",
      "同轴孔",
      "读图能力"
    ]
  },
  {
    "id": "EQ-024",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "type": "multiple_choice",
    "difficulty": "hard",
    "drawingId": "DRAW-012",
    "imageId": "DRAW-012",
    "image": "/assets/engineering-drawing/draw_012_fork_bracket_views.svg",
    "imageUrl": "/assets/engineering-drawing/draw_012_fork_bracket_views.svg",
    "imageFocus": "叉形支架零件图",
    "relatedDrawingFeature": "叉耳、同轴孔、局部剖、孔距、形位公差",
    "question": "审核 DRAW-012《叉形支架零件图》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对叉耳是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对局部剖的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的叉耳和局部剖；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：两叉耳同轴孔与底座孔系关系明确。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握叉耳、局部剖、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "叉耳、局部剖、图纸审核",
    "knowledgePoints": [
      "叉耳",
      "局部剖",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "叉架类",
      "叉耳",
      "局部剖",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-025",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "type": "single_choice",
    "difficulty": "medium_hard",
    "drawingId": "DRAW-013",
    "imageId": "DRAW-013",
    "image": "/assets/engineering-drawing/draw_013_bearing_cap_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_013_bearing_cap_section.svg",
    "imageFocus": "轴承盖全剖图",
    "relatedDrawingFeature": "台阶孔、密封槽、螺钉孔、全剖、粗糙度",
    "question": "根据 DRAW-013《轴承盖全剖图》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "台阶孔、密封槽与螺钉孔的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了台阶孔、密封槽、螺钉孔等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：台阶孔直径和深度分层表达。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握台阶孔、密封槽、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "台阶孔、密封槽、读图能力",
    "knowledgePoints": [
      "台阶孔",
      "密封槽",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "盖类",
      "台阶孔",
      "密封槽",
      "读图能力"
    ]
  },
  {
    "id": "EQ-026",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "type": "multiple_choice",
    "difficulty": "medium_hard",
    "drawingId": "DRAW-013",
    "imageId": "DRAW-013",
    "image": "/assets/engineering-drawing/draw_013_bearing_cap_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_013_bearing_cap_section.svg",
    "imageFocus": "轴承盖全剖图",
    "relatedDrawingFeature": "台阶孔、密封槽、螺钉孔、全剖、粗糙度",
    "question": "审核 DRAW-013《轴承盖全剖图》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对台阶孔是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对螺钉孔的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的台阶孔和螺钉孔；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：台阶孔直径和深度分层表达。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握台阶孔、螺钉孔、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "台阶孔、螺钉孔、图纸审核",
    "knowledgePoints": [
      "台阶孔",
      "螺钉孔",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "盖类",
      "台阶孔",
      "螺钉孔",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-027",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "DRAW-014",
    "imageId": "DRAW-014",
    "image": "/assets/engineering-drawing/draw_014_pipe_flange_views.svg",
    "imageUrl": "/assets/engineering-drawing/draw_014_pipe_flange_views.svg",
    "imageFocus": "管法兰端面图",
    "relatedDrawingFeature": "圆周均布、中心孔、分布圆、剖视、孔数标注",
    "question": "根据 DRAW-014《管法兰端面图》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "圆周均布、中心孔与分布圆的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了圆周均布、中心孔、分布圆等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：4×孔与分布圆在端面图中一致。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握圆周均布、中心孔、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "圆周均布、中心孔、读图能力",
    "knowledgePoints": [
      "圆周均布",
      "中心孔",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "法兰类",
      "圆周均布",
      "中心孔",
      "读图能力"
    ]
  },
  {
    "id": "EQ-028",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "type": "multiple_choice",
    "difficulty": "medium",
    "drawingId": "DRAW-014",
    "imageId": "DRAW-014",
    "image": "/assets/engineering-drawing/draw_014_pipe_flange_views.svg",
    "imageUrl": "/assets/engineering-drawing/draw_014_pipe_flange_views.svg",
    "imageFocus": "管法兰端面图",
    "relatedDrawingFeature": "圆周均布、中心孔、分布圆、剖视、孔数标注",
    "question": "审核 DRAW-014《管法兰端面图》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对圆周均布是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对分布圆的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的圆周均布和分布圆；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：4×孔与分布圆在端面图中一致。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握圆周均布、分布圆、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "圆周均布、分布圆、图纸审核",
    "knowledgePoints": [
      "圆周均布",
      "分布圆",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "法兰类",
      "圆周均布",
      "分布圆",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-029",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "hard",
    "drawingId": "DRAW-015",
    "imageId": "DRAW-015",
    "image": "/assets/engineering-drawing/draw_015_sliding_seat_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_015_sliding_seat_section.svg",
    "imageFocus": "滑座剖视图",
    "relatedDrawingFeature": "燕尾槽、导轨面、基准、几何公差、表面质量",
    "question": "根据 DRAW-015《滑座剖视图》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "燕尾槽、导轨面与基准的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了燕尾槽、导轨面、基准等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：导轨面作为功能基准，粗糙度和直线度集中表达。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握燕尾槽、导轨面、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "燕尾槽、导轨面、读图能力",
    "knowledgePoints": [
      "燕尾槽",
      "导轨面",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "导轨座类",
      "燕尾槽",
      "导轨面",
      "读图能力"
    ]
  },
  {
    "id": "EQ-030",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "multiple_choice",
    "difficulty": "hard",
    "drawingId": "DRAW-015",
    "imageId": "DRAW-015",
    "image": "/assets/engineering-drawing/draw_015_sliding_seat_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_015_sliding_seat_section.svg",
    "imageFocus": "滑座剖视图",
    "relatedDrawingFeature": "燕尾槽、导轨面、基准、几何公差、表面质量",
    "question": "审核 DRAW-015《滑座剖视图》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对燕尾槽是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对基准的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的燕尾槽和基准；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：导轨面作为功能基准，粗糙度和直线度集中表达。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握燕尾槽、基准、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "燕尾槽、基准、图纸审核",
    "knowledgePoints": [
      "燕尾槽",
      "基准",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "导轨座类",
      "燕尾槽",
      "基准",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-031",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium_hard",
    "drawingId": "DRAW-016",
    "imageId": "DRAW-016",
    "image": "/assets/engineering-drawing/draw_016_end_cap_local_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_016_end_cap_local_section.svg",
    "imageFocus": "端盖局部剖与螺纹孔",
    "relatedDrawingFeature": "局部剖、螺纹孔、盲孔深度、倒角、技术要求",
    "question": "根据 DRAW-016《端盖局部剖与螺纹孔》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "局部剖、螺纹孔与盲孔深度的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了局部剖、螺纹孔、盲孔深度等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：M孔深度和钻孔深度分清。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握局部剖、螺纹孔、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "局部剖、螺纹孔、读图能力",
    "knowledgePoints": [
      "局部剖",
      "螺纹孔",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "端盖类",
      "局部剖",
      "螺纹孔",
      "读图能力"
    ]
  },
  {
    "id": "EQ-032",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "multiple_choice",
    "difficulty": "medium_hard",
    "drawingId": "DRAW-016",
    "imageId": "DRAW-016",
    "image": "/assets/engineering-drawing/draw_016_end_cap_local_section.svg",
    "imageUrl": "/assets/engineering-drawing/draw_016_end_cap_local_section.svg",
    "imageFocus": "端盖局部剖与螺纹孔",
    "relatedDrawingFeature": "局部剖、螺纹孔、盲孔深度、倒角、技术要求",
    "question": "审核 DRAW-016《端盖局部剖与螺纹孔》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对局部剖是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对盲孔深度的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的局部剖和盲孔深度；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：M孔深度和钻孔深度分清。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握局部剖、盲孔深度、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "局部剖、盲孔深度、图纸审核",
    "knowledgePoints": [
      "局部剖",
      "盲孔深度",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "端盖类",
      "局部剖",
      "盲孔深度",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-033",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "DRAW-017",
    "imageId": "DRAW-017",
    "image": "/assets/engineering-drawing/draw_017_ribbed_base_views.svg",
    "imageUrl": "/assets/engineering-drawing/draw_017_ribbed_base_views.svg",
    "imageFocus": "肋板底座三视图",
    "relatedDrawingFeature": "肋板、安装孔、圆角、隐藏线、投影规律",
    "question": "根据 DRAW-017《肋板底座三视图》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "肋板、安装孔与圆角的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了肋板、安装孔、圆角等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：肋板在主视和俯视中对应，安装孔中心距明确。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握肋板、安装孔、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "肋板、安装孔、读图能力",
    "knowledgePoints": [
      "肋板",
      "安装孔",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "底座类",
      "肋板",
      "安装孔",
      "读图能力"
    ]
  },
  {
    "id": "EQ-034",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "multiple_choice",
    "difficulty": "medium",
    "drawingId": "DRAW-017",
    "imageId": "DRAW-017",
    "image": "/assets/engineering-drawing/draw_017_ribbed_base_views.svg",
    "imageUrl": "/assets/engineering-drawing/draw_017_ribbed_base_views.svg",
    "imageFocus": "肋板底座三视图",
    "relatedDrawingFeature": "肋板、安装孔、圆角、隐藏线、投影规律",
    "question": "审核 DRAW-017《肋板底座三视图》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对肋板是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对圆角的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的肋板和圆角；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：肋板在主视和俯视中对应，安装孔中心距明确。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握肋板、圆角、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "肋板、圆角、图纸审核",
    "knowledgePoints": [
      "肋板",
      "圆角",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "底座类",
      "肋板",
      "圆角",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-035",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "DRAW-018",
    "imageId": "DRAW-018",
    "image": "/assets/engineering-drawing/draw_018_clamp_plate_detail.svg",
    "imageUrl": "/assets/engineering-drawing/draw_018_clamp_plate_detail.svg",
    "imageFocus": "夹紧压板零件图",
    "relatedDrawingFeature": "长圆孔、局部视图、对称标注、尺寸基准、倒角",
    "question": "根据 DRAW-018《夹紧压板零件图》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "长圆孔、局部视图与对称标注的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了长圆孔、局部视图、对称标注等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：长圆孔用宽度加中心距表达。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握长圆孔、局部视图、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "长圆孔、局部视图、读图能力",
    "knowledgePoints": [
      "长圆孔",
      "局部视图",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "压板类",
      "长圆孔",
      "局部视图",
      "读图能力"
    ]
  },
  {
    "id": "EQ-036",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "multiple_choice",
    "difficulty": "medium",
    "drawingId": "DRAW-018",
    "imageId": "DRAW-018",
    "image": "/assets/engineering-drawing/draw_018_clamp_plate_detail.svg",
    "imageUrl": "/assets/engineering-drawing/draw_018_clamp_plate_detail.svg",
    "imageFocus": "夹紧压板零件图",
    "relatedDrawingFeature": "长圆孔、局部视图、对称标注、尺寸基准、倒角",
    "question": "审核 DRAW-018《夹紧压板零件图》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对长圆孔是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对对称标注的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的长圆孔和对称标注；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：长圆孔用宽度加中心距表达。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握长圆孔、对称标注、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "长圆孔、对称标注、图纸审核",
    "knowledgePoints": [
      "长圆孔",
      "对称标注",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "压板类",
      "长圆孔",
      "对称标注",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-037",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium_hard",
    "drawingId": "DRAW-019",
    "imageId": "DRAW-019",
    "image": "/assets/engineering-drawing/draw_019_bushing_oil_groove.svg",
    "imageUrl": "/assets/engineering-drawing/draw_019_bushing_oil_groove.svg",
    "imageFocus": "带油槽衬套全剖图",
    "relatedDrawingFeature": "油槽、内孔公差、剖面线、粗糙度、倒角",
    "question": "根据 DRAW-019《带油槽衬套全剖图》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "油槽、内孔公差与剖面线的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了油槽、内孔公差、剖面线等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：螺旋油槽用局部示意和技术要求配合表达。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握油槽、内孔公差、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "油槽、内孔公差、读图能力",
    "knowledgePoints": [
      "油槽",
      "内孔公差",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "套类",
      "油槽",
      "内孔公差",
      "读图能力"
    ]
  },
  {
    "id": "EQ-038",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "multiple_choice",
    "difficulty": "medium_hard",
    "drawingId": "DRAW-019",
    "imageId": "DRAW-019",
    "image": "/assets/engineering-drawing/draw_019_bushing_oil_groove.svg",
    "imageUrl": "/assets/engineering-drawing/draw_019_bushing_oil_groove.svg",
    "imageFocus": "带油槽衬套全剖图",
    "relatedDrawingFeature": "油槽、内孔公差、剖面线、粗糙度、倒角",
    "question": "审核 DRAW-019《带油槽衬套全剖图》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对油槽是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对剖面线的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的油槽和剖面线；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：螺旋油槽用局部示意和技术要求配合表达。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握油槽、剖面线、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "油槽、剖面线、图纸审核",
    "knowledgePoints": [
      "油槽",
      "剖面线",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "套类",
      "油槽",
      "剖面线",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-039",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "DRAW-020",
    "imageId": "DRAW-020",
    "image": "/assets/engineering-drawing/draw_020_projection_combo_body.svg",
    "imageUrl": "/assets/engineering-drawing/draw_020_projection_combo_body.svg",
    "imageFocus": "组合体投影识读图",
    "relatedDrawingFeature": "点线面投影、组合体、切槽、圆柱孔、虚线",
    "question": "根据 DRAW-020《组合体投影识读图》，下列哪项最准确概括了该图样的主要训练点？",
    "options": [
      {
        "key": "A",
        "text": "点线面投影、组合体与切槽的规范表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只需识别外形轮廓，不需要核对尺寸和线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "主要训练材料热处理选择，与工程图表达关系不大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只考察标题栏文字是否美观",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "图中明确设置了点线面投影、组合体、切槽等表达内容，题目应从视图、尺寸和规范关系判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：叠加与切割结构在三视图中对应。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握点线面投影、组合体、读图能力在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "点线面投影、组合体、读图能力",
    "knowledgePoints": [
      "点线面投影",
      "组合体",
      "读图能力"
    ],
    "tags": [
      "工程制图",
      "组合体",
      "点线面投影",
      "组合体",
      "读图能力"
    ]
  },
  {
    "id": "EQ-040",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "multiple_choice",
    "difficulty": "medium",
    "drawingId": "DRAW-020",
    "imageId": "DRAW-020",
    "image": "/assets/engineering-drawing/draw_020_projection_combo_body.svg",
    "imageUrl": "/assets/engineering-drawing/draw_020_projection_combo_body.svg",
    "imageFocus": "组合体投影识读图",
    "relatedDrawingFeature": "点线面投影、组合体、切槽、圆柱孔、虚线",
    "question": "审核 DRAW-020《组合体投影识读图》进入加工前，哪些读图动作是必要的？",
    "options": [
      {
        "key": "A",
        "text": "核对点线面投影是否与相邻视图对应",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "核对切槽的标注是否能指导加工或检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "C",
        "text": "删除局部尺寸，只保留总长总宽以简化图面",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "忽略中心线和隐藏线，只看粗实线外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "answerIndex": [
      0,
      1
    ],
    "analysis": {
      "correctReason": "A、B都直接对应图中可见的点线面投影和切槽；C会丢失制造信息，D会破坏投影和孔槽识读。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "规范训练图：叠加与切割结构在三视图中对应。",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握点线面投影、切槽、图纸审核在工程图中的判断方法。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "点线面投影、切槽、图纸审核",
    "knowledgePoints": [
      "点线面投影",
      "切槽",
      "图纸审核"
    ],
    "tags": [
      "工程制图",
      "组合体",
      "点线面投影",
      "切槽",
      "图纸审核"
    ]
  },
  {
    "id": "EQ-041",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "制图基本规定",
    "question": "机械图样中粗实线通常用于表示什么？",
    "options": [
      {
        "key": "A",
        "text": "可见轮廓线和可见棱边",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "尺寸界线",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "中心线",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "剖面线",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "粗实线用于表达看得见的主要轮廓和棱边，线宽应明显强于细实线。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握制图基本规定的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "制图基本规定",
    "knowledgePoints": [
      "制图基本规定",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "制图基本规定"
    ]
  },
  {
    "id": "EQ-042",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "图线类型",
    "question": "细点画线最常用于表示下列哪类对象？",
    "options": [
      {
        "key": "A",
        "text": "中心线、对称线或轴线",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "可见外轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "剖面线",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "断裂边界",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "中心线和对称线应采用细点画线，便于与轮廓线和尺寸线区分。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握图线类型的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "图线类型",
    "knowledgePoints": [
      "图线类型",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "图线类型"
    ]
  },
  {
    "id": "EQ-043",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "图线类型",
    "question": "不可见轮廓线在机械图样中一般采用哪种线型？",
    "options": [
      {
        "key": "A",
        "text": "细虚线",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "粗实线",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "波浪线",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "双点画线",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "不可见结构需要表达时用细虚线，不能画成粗实线。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握图线类型的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "图线类型",
    "knowledgePoints": [
      "图线类型",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "图线类型"
    ]
  },
  {
    "id": "EQ-044",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium_hard",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "字体与图面",
    "question": "尺寸数字的基本要求是？",
    "options": [
      {
        "key": "A",
        "text": "清晰、统一、不得与轮廓线重叠",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "越大越好",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "可随意倾斜以节省空间",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "必须写在剖面线最密处",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "尺寸数字服务加工和检验，必须清楚可读，不能压线或混入剖面线。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握字体与图面的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "字体与图面",
    "knowledgePoints": [
      "字体与图面",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "字体与图面"
    ]
  },
  {
    "id": "EQ-045",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "比例",
    "question": "图样采用 2:1 比例时表示什么？",
    "options": [
      {
        "key": "A",
        "text": "图形放大为实物的2倍，尺寸仍标注实际尺寸",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "尺寸数字也扩大2倍",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "图形缩小为实物一半",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只能用于装配图",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "比例只影响图形绘制大小，尺寸数值应为机件真实尺寸。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握比例的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "比例",
    "knowledgePoints": [
      "比例",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "比例"
    ]
  },
  {
    "id": "EQ-046",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "图纸幅面",
    "question": "标题栏通常布置在图框的哪个位置？",
    "options": [
      {
        "key": "A",
        "text": "右下角",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "左上角",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "图纸正中央",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "任意空白处",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "机械图样标题栏一般位于右下角，便于归档、折叠和查阅。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握图纸幅面的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "图纸幅面",
    "knowledgePoints": [
      "图纸幅面",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "图纸幅面"
    ]
  },
  {
    "id": "EQ-047",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "三视图",
    "question": "正投影三视图中，主视图和俯视图应满足什么关系？",
    "options": [
      {
        "key": "A",
        "text": "长对正",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "高平齐",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "宽相等",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "角度相等",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "主视图与俯视图共享长度方向，因此应长对正。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握三视图的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "三视图",
    "knowledgePoints": [
      "三视图",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "三视图"
    ]
  },
  {
    "id": "EQ-048",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "三视图",
    "question": "主视图和左视图之间的投影关系是？",
    "options": [
      {
        "key": "A",
        "text": "高平齐",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "长对正",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "宽相等且在同一直线上",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "面积相等",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "主视图与左视图共享高度方向，故各高度应平齐。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握三视图的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "三视图",
    "knowledgePoints": [
      "三视图",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "三视图"
    ]
  },
  {
    "id": "EQ-049",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium_hard",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "三视图",
    "question": "俯视图和左视图之间主要对应哪一方向？",
    "options": [
      {
        "key": "A",
        "text": "宽相等",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "长对正",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "高平齐",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "直径相等",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "俯视图和左视图都表达宽度方向，宽度应对应。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握三视图的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "三视图",
    "knowledgePoints": [
      "三视图",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "三视图"
    ]
  },
  {
    "id": "EQ-050",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "投影基础",
    "question": "点的投影判断首先应关注什么？",
    "options": [
      {
        "key": "A",
        "text": "投影面之间的对应关系和坐标方向",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "线条颜色",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "标题栏材料",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "剖面线间距",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "点线面投影的核心是空间位置在各投影面上的对应。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握投影基础的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "投影基础",
    "knowledgePoints": [
      "投影基础",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "投影基础"
    ]
  },
  {
    "id": "EQ-051",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "组合体",
    "question": "识读组合体三视图时较稳妥的步骤是？",
    "options": [
      {
        "key": "A",
        "text": "先分解基本形体，再按投影关系综合",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只看最大的视图",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "先猜材料",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "先数标题栏字数",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "组合体读图要把叠加、切割和相贯关系拆开，再综合还原。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握组合体的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "组合体",
    "knowledgePoints": [
      "组合体",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "组合体"
    ]
  },
  {
    "id": "EQ-052",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "组合体",
    "question": "图中某槽在俯视图可见，在主视图不可见时通常应如何表达？",
    "options": [
      {
        "key": "A",
        "text": "必要时用细虚线表达不可见轮廓",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "必须删除该槽",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "改为粗实线",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "用尺寸数字代替所有线条",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "不可见结构如对读图必要，应以细虚线表达。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握组合体的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "组合体",
    "knowledgePoints": [
      "组合体",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "组合体"
    ]
  },
  {
    "id": "EQ-053",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "剖视图",
    "question": "采用剖视图的主要目的是什么？",
    "options": [
      {
        "key": "A",
        "text": "清楚表达内部结构",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "让图纸更黑更满",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "代替所有尺寸",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "隐藏外形轮廓",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "剖视图通过假想剖切表达内部孔腔、槽和壁厚等结构。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握剖视图的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "剖视图",
    "knowledgePoints": [
      "剖视图",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "剖视图"
    ]
  },
  {
    "id": "EQ-054",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium_hard",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "全剖视图",
    "question": "全剖视图适用于哪类零件表达？",
    "options": [
      {
        "key": "A",
        "text": "内部结构较多且剖切后能清楚表达的零件",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "完全没有内部结构的薄片",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "只需看外形的零件",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "任何装饰图",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "全剖常用于端盖、套筒、箱体等内部结构需要完整表达的零件。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握全剖视图的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "全剖视图",
    "knowledgePoints": [
      "全剖视图",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "全剖视图"
    ]
  },
  {
    "id": "EQ-055",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "半剖视图",
    "question": "半剖视图的分界线通常应与什么重合？",
    "options": [
      {
        "key": "A",
        "text": "中心线",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "尺寸线",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "标题栏边线",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "任意轮廓线",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "半剖用于对称机件，一半外形一半剖视，分界应与中心线重合。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握半剖视图的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "半剖视图",
    "knowledgePoints": [
      "半剖视图",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "半剖视图"
    ]
  },
  {
    "id": "EQ-056",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "局部剖视图",
    "question": "局部剖视图的剖切范围边界通常采用什么表达？",
    "options": [
      {
        "key": "A",
        "text": "波浪线或断裂线",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "粗实圆",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "尺寸线",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "标题栏线",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "局部剖只揭示局部内部结构，边界用波浪线等断裂表达。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握局部剖视图的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "局部剖视图",
    "knowledgePoints": [
      "局部剖视图",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "局部剖视图"
    ]
  },
  {
    "id": "EQ-057",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "剖面线",
    "question": "剖面线应画在什么区域？",
    "options": [
      {
        "key": "A",
        "text": "被剖切到的实体材料区域",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "孔洞内部",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "所有空白区域",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "尺寸文字上",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "剖面线只表示剖切到的实体材料，孔、槽、空腔不应画剖面线。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握剖面线的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "剖面线",
    "knowledgePoints": [
      "剖面线",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "剖面线"
    ]
  },
  {
    "id": "EQ-058",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "剖视规则",
    "question": "纵向剖切到肋板时，一般应如何处理？",
    "options": [
      {
        "key": "A",
        "text": "通常不画剖面线",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "必须密集画剖面线",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "改成虚线",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "删除肋板",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "肋板沿长度方向剖切时通常不画剖面线，以免误解为厚实体。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握剖视规则的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "剖视规则",
    "knowledgePoints": [
      "剖视规则",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "剖视规则"
    ]
  },
  {
    "id": "EQ-059",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium_hard",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "断面图",
    "question": "移出断面图主要用于表达什么？",
    "options": [
      {
        "key": "A",
        "text": "杆、轴、肋等局部截面形状",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "标题栏内容",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "材料牌号",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "比例",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "移出断面把截面画在视图外，可清晰表达键槽、肋板等截面形状。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握断面图的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "断面图",
    "knowledgePoints": [
      "断面图",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "断面图"
    ]
  },
  {
    "id": "EQ-060",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "尺寸标注",
    "question": "尺寸标注的数值通常表示什么？",
    "options": [
      {
        "key": "A",
        "text": "机件实际大小",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "图上量得的长度",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "比例换算后的长度",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "屏幕像素",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "工程图尺寸数字应表示机件真实尺寸，与绘图比例无关。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握尺寸标注的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "尺寸标注",
    "knowledgePoints": [
      "尺寸标注",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "尺寸标注"
    ]
  },
  {
    "id": "EQ-061",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "尺寸标注",
    "question": "直径尺寸应优先使用哪个符号？",
    "options": [
      {
        "key": "A",
        "text": "Ø",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "R",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "C",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "M",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "圆或圆柱特征的直径用 Ø 表示，半径才用 R。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握尺寸标注的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "尺寸标注",
    "knowledgePoints": [
      "尺寸标注",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "尺寸标注"
    ]
  },
  {
    "id": "EQ-062",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "尺寸标注",
    "question": "半径尺寸应使用哪个符号？",
    "options": [
      {
        "key": "A",
        "text": "R",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "Ø",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "M",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "Ra",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "圆弧半径标注用 R，如 R6。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握尺寸标注的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "尺寸标注",
    "knowledgePoints": [
      "尺寸标注",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "尺寸标注"
    ]
  },
  {
    "id": "EQ-063",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "孔标注",
    "question": "通孔标注中较完整的写法应包含什么？",
    "options": [
      {
        "key": "A",
        "text": "孔径和“通孔”等信息",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只写一个数字",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "只写材料",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只写比例",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "通孔应明确孔径，必要时写“通孔”以区别盲孔。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握孔标注的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "孔标注",
    "knowledgePoints": [
      "孔标注",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "孔标注"
    ]
  },
  {
    "id": "EQ-064",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium_hard",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "沉孔标注",
    "question": "沉孔标注不应遗漏什么？",
    "options": [
      {
        "key": "A",
        "text": "沉孔大径和深度",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "标题栏日期",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "图纸比例",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "字体名称",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "沉孔直接影响加工深度和装配沉头，必须标明大径与深度。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握沉孔标注的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "沉孔标注",
    "knowledgePoints": [
      "沉孔标注",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "沉孔标注"
    ]
  },
  {
    "id": "EQ-065",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "尺寸基准",
    "question": "孔距和端距标注的核心目的是什么？",
    "options": [
      {
        "key": "A",
        "text": "确定孔中心相对基准的位置",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "增加图面文字",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "替代中心线",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "说明材料硬度",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "孔的位置需要通过中心距、端距或坐标尺寸与基准建立关系。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握尺寸基准的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "尺寸基准",
    "knowledgePoints": [
      "尺寸基准",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "尺寸基准"
    ]
  },
  {
    "id": "EQ-066",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "尺寸链",
    "question": "为什么应避免无必要的封闭尺寸链？",
    "options": [
      {
        "key": "A",
        "text": "会造成加工和检验解释冲突",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "会使图纸颜色变浅",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "会减少标题栏信息",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "会自动改变比例",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "封闭尺寸链会让尺寸公差分配不清，容易产生矛盾。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握尺寸链的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "尺寸链",
    "knowledgePoints": [
      "尺寸链",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "尺寸链"
    ]
  },
  {
    "id": "EQ-067",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "重复尺寸",
    "question": "同一结构尺寸在多个视图重复标注可能带来什么问题？",
    "options": [
      {
        "key": "A",
        "text": "图样修改后容易不一致",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "一定能提高精度",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "能代替公差",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "能减少读图时间",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "重复尺寸会增加维护风险，一处修改另一处遗漏会造成冲突。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握重复尺寸的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "重复尺寸",
    "knowledgePoints": [
      "重复尺寸",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "重复尺寸"
    ]
  },
  {
    "id": "EQ-068",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "尺寸布置",
    "question": "尺寸线一般应尽量布置在哪里？",
    "options": [
      {
        "key": "A",
        "text": "视图外侧且层次清楚",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "穿过主体轮廓中央",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "压在剖面线上",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "标题栏内部",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "尺寸外置可减少交叉和遮挡，外形尺寸通常放外层。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握尺寸布置的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "尺寸布置",
    "knowledgePoints": [
      "尺寸布置",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "尺寸布置"
    ]
  },
  {
    "id": "EQ-069",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium_hard",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "中心线",
    "question": "圆孔在视图中通常应补充什么线？",
    "options": [
      {
        "key": "A",
        "text": "中心线",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "剖面线",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "波浪线",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "标题栏线",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "中心线用于表达圆心、轴线和对称关系，是孔位识读的重要依据。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握中心线的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "中心线",
    "knowledgePoints": [
      "中心线",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "中心线"
    ]
  },
  {
    "id": "EQ-070",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "表面粗糙度",
    "question": "Ra3.2 标注主要说明什么？",
    "options": [
      {
        "key": "A",
        "text": "表面粗糙度要求",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "材料密度",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "图纸比例",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "孔的数量",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "Ra 是表面粗糙度参数，影响加工表面质量要求。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握表面粗糙度的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "表面粗糙度",
    "knowledgePoints": [
      "表面粗糙度",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "表面粗糙度"
    ]
  },
  {
    "id": "EQ-071",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "粗糙度",
    "question": "功能配合面通常比非配合毛坯面需要怎样的粗糙度要求？",
    "options": [
      {
        "key": "A",
        "text": "更明确且往往更严格",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "完全不需要标注",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "只写在标题栏即可",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只能用颜色表示",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "配合、密封、导向等功能面通常需要明确表面质量。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握粗糙度的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "粗糙度",
    "knowledgePoints": [
      "粗糙度",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "粗糙度"
    ]
  },
  {
    "id": "EQ-072",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "几何公差",
    "question": "位置度公差主要控制什么？",
    "options": [
      {
        "key": "A",
        "text": "要素实际位置相对基准的位置误差",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "表面颜色",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "材料重量",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "字体高度",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "位置度用于控制孔、轴等要素相对基准的位置精度。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握几何公差的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "几何公差",
    "knowledgePoints": [
      "几何公差",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "几何公差"
    ]
  },
  {
    "id": "EQ-073",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "几何公差",
    "question": "平面度公差属于哪类控制？",
    "options": [
      {
        "key": "A",
        "text": "形状误差控制",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "材料控制",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "比例控制",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "标题栏控制",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "平面度控制单一平面的形状误差，不需要基准。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握几何公差的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "几何公差",
    "knowledgePoints": [
      "几何公差",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "几何公差"
    ]
  },
  {
    "id": "EQ-074",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium_hard",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "几何公差",
    "question": "同轴度或圆跳动常用于控制哪类关系？",
    "options": [
      {
        "key": "A",
        "text": "回转要素与基准轴线的关系",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "图纸幅面大小",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "剖面线颜色",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "材料牌号",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "同轴度、跳动类公差常服务轴孔配合和旋转精度。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握几何公差的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "几何公差",
    "knowledgePoints": [
      "几何公差",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "几何公差"
    ]
  },
  {
    "id": "EQ-075",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "基准",
    "question": "零件图中基准符号的作用是？",
    "options": [
      {
        "key": "A",
        "text": "建立检测和公差控制的参考",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "装饰视图",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "表示比例",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "表示材料",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "基准是尺寸和几何公差解释的重要参考。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握基准的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "基准",
    "knowledgePoints": [
      "基准",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "基准"
    ]
  },
  {
    "id": "EQ-076",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "零件图",
    "question": "完整零件图通常应包含哪些基本内容？",
    "options": [
      {
        "key": "A",
        "text": "视图、尺寸、技术要求和标题栏",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "只有三维效果图",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "只有材料价格",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只有装配顺序",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "零件图必须能指导制造、检验和管理。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握零件图的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "零件图",
    "knowledgePoints": [
      "零件图",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "零件图"
    ]
  },
  {
    "id": "EQ-077",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "零件图",
    "question": "读零件图时应优先理解什么？",
    "options": [
      {
        "key": "A",
        "text": "结构功能、视图表达、尺寸和技术要求",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "背景颜色",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "文件大小",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "软件名称",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "读图要服务制造和检验，核心是结构、尺寸、公差与技术要求。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握零件图的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "零件图",
    "knowledgePoints": [
      "零件图",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "零件图"
    ]
  },
  {
    "id": "EQ-078",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "标准件",
    "question": "螺纹孔 M10-6H 中 M10 表示什么？",
    "options": [
      {
        "key": "A",
        "text": "公称直径为10 mm的普通公制螺纹",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "孔深10 mm",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "表面粗糙度10",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "材料等级10",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "M 表示普通公制螺纹，10 是公称直径。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握标准件的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "标准件",
    "knowledgePoints": [
      "标准件",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "标准件"
    ]
  },
  {
    "id": "EQ-079",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium_hard",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "螺纹表达",
    "question": "内螺纹盲孔标注通常应区分什么？",
    "options": [
      {
        "key": "A",
        "text": "有效螺纹深度和钻孔深度",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "图纸颜色和背景",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "字体和字号",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "标题栏宽度",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "盲螺纹孔加工中钻孔深度通常大于有效螺纹深度，需要明确。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握螺纹表达的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "螺纹表达",
    "knowledgePoints": [
      "螺纹表达",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "螺纹表达"
    ]
  },
  {
    "id": "EQ-080",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "标准结构",
    "question": "倒角 C1 的含义通常是？",
    "options": [
      {
        "key": "A",
        "text": "1 mm 45°倒角",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "半径1",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "孔径1",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "粗糙度1",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "常规 C1 表示 1×45°倒角。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握标准结构的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "标准结构",
    "knowledgePoints": [
      "标准结构",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "标准结构"
    ]
  },
  {
    "id": "EQ-081",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "标准结构",
    "question": "圆角 R5 表示什么？",
    "options": [
      {
        "key": "A",
        "text": "半径为5 mm的圆角",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "直径为5 mm的孔",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "5个圆",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "粗糙度5",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "R 用于半径，R5 即半径5 mm。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握标准结构的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "标准结构",
    "knowledgePoints": [
      "标准结构",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "标准结构"
    ]
  },
  {
    "id": "EQ-082",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "装配相关",
    "question": "配合孔标注 H7 的意义是？",
    "options": [
      {
        "key": "A",
        "text": "孔的公差带和精度等级",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "孔的材料",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "孔的颜色",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "孔的数量",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "H7 是孔公差带代号，常用于配合尺寸。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握装配相关的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "装配相关",
    "knowledgePoints": [
      "装配相关",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "装配相关"
    ]
  },
  {
    "id": "EQ-083",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "读图审核",
    "question": "发现剖面线画入通孔内部，应判断为？",
    "options": [
      {
        "key": "A",
        "text": "剖视表达错误",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "尺寸比例正确",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "标题栏错误",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "材料错误",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "孔洞为空腔，剖面线不能画入孔内。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握读图审核的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "读图审核",
    "knowledgePoints": [
      "读图审核",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "读图审核"
    ]
  },
  {
    "id": "EQ-084",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium_hard",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "读图审核",
    "question": "发现孔组标为 4×Ø10，但端面图只有3个孔，应如何判断？",
    "options": [
      {
        "key": "A",
        "text": "孔数与图形表达矛盾，需要修正",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "一定以文字为准不用管图",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "一定以图形为准不用管文字",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "不是工程图问题",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "孔数标注和视图表达必须一致，否则制造会产生歧义。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握读图审核的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "读图审核",
    "knowledgePoints": [
      "读图审核",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "读图审核"
    ]
  },
  {
    "id": "EQ-085",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "读图审核",
    "question": "若图中只有总长而没有关键孔位尺寸，主要风险是什么？",
    "options": [
      {
        "key": "A",
        "text": "无法准确定位孔位并检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "图纸更简洁所以更好",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "材料无法采购",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "比例无法填写",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "孔位缺少基准和距离会导致加工、检验无法执行。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握读图审核的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "读图审核",
    "knowledgePoints": [
      "读图审核",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "读图审核"
    ]
  },
  {
    "id": "EQ-086",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "读图审核",
    "question": "尺寸数字压在轮廓线或剖面线上，主要问题是？",
    "options": [
      {
        "key": "A",
        "text": "可读性差，容易误读",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "能提升精度",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "能减少线型",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "表示隐藏结构",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "尺寸信息必须清晰独立，压线会影响读图可靠性。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握读图审核的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "读图审核",
    "knowledgePoints": [
      "读图审核",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "读图审核"
    ]
  },
  {
    "id": "EQ-087",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "视图选择",
    "question": "选择主视图时通常应优先考虑什么？",
    "options": [
      {
        "key": "A",
        "text": "最能反映零件形状特征和工作位置",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "让图纸空白最多",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "让标题栏更大",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只看哪个方向线最少",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "主视图应表达主要形状特征，兼顾加工或工作位置。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握视图选择的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "视图选择",
    "knowledgePoints": [
      "视图选择",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "视图选择"
    ]
  },
  {
    "id": "EQ-088",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "视图数量",
    "question": "三视图不足以表达局部内部结构时，可增加什么？",
    "options": [
      {
        "key": "A",
        "text": "剖视图、断面图或局部视图",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "随机装饰图",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "材料价格表",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "二维码",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "补充表达应服务结构识读，如剖视、断面、局部放大。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握视图数量的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "视图数量",
    "knowledgePoints": [
      "视图数量",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "视图数量"
    ]
  },
  {
    "id": "EQ-089",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium_hard",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "局部视图",
    "question": "局部放大图常用于什么情况？",
    "options": [
      {
        "key": "A",
        "text": "细小结构在原视图中不易看清",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "替代所有尺寸",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "隐藏错误",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "增加颜色",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "局部放大图用于清楚表达小槽、倒角、密封槽等细节。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握局部视图的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "局部视图",
    "knowledgePoints": [
      "局部视图",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "局部视图"
    ]
  },
  {
    "id": "EQ-090",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "剖切标注",
    "question": "剖视图 A-A 中的 A-A 通常表示什么？",
    "options": [
      {
        "key": "A",
        "text": "剖切位置和观察方向",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "材料牌号",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "比例",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "表面粗糙度",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "剖切符号用来说明剖切平面位置及投射方向。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握剖切标注的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "剖切标注",
    "knowledgePoints": [
      "剖切标注",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "剖切标注"
    ]
  },
  {
    "id": "EQ-091",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "视图对应",
    "question": "某孔在俯视图有圆，在主视图通常应有什么对应表达？",
    "options": [
      {
        "key": "A",
        "text": "孔的中心线、可见或不可见轮廓/剖视表达",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "完全无须出现",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "只写材料",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只写标题",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "孔是三维结构，相关视图中应有投影、隐藏线或剖切表达。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握视图对应的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "视图对应",
    "knowledgePoints": [
      "视图对应",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "视图对应"
    ]
  },
  {
    "id": "EQ-092",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "工艺意识",
    "question": "工程制图题中“规范意识”主要指什么？",
    "options": [
      {
        "key": "A",
        "text": "图样信息能清楚、统一、可制造可检验",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "图面越复杂越好",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "只追求颜色漂亮",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "只背术语",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "工程图是制造和检验语言，重点是准确、清楚、统一。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握工艺意识的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "工艺意识",
    "knowledgePoints": [
      "工艺意识",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "工艺意识"
    ]
  },
  {
    "id": "EQ-093",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "装配互换性",
    "question": "关键配合尺寸遗漏公差可能导致什么？",
    "options": [
      {
        "key": "A",
        "text": "装配互换性和检验判定不明确",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "图纸一定更清楚",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "材料变轻",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "比例变化",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "配合尺寸没有公差会让加工精度和验收标准不明确。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握装配互换性的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "装配互换性",
    "knowledgePoints": [
      "装配互换性",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "装配互换性"
    ]
  },
  {
    "id": "EQ-094",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium_hard",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "标题栏",
    "question": "标题栏中的比例、材料、图号等信息主要用于什么？",
    "options": [
      {
        "key": "A",
        "text": "图样管理和制造信息确认",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "替代尺寸标注",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "表达内部结构",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "表示中心线",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "标题栏提供图样身份和管理信息，但不能替代视图、尺寸和技术要求。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握标题栏的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "标题栏",
    "knowledgePoints": [
      "标题栏",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "标题栏"
    ]
  },
  {
    "id": "EQ-095",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "技术要求",
    "question": "未注圆角、去毛刺等内容通常写在哪里？",
    "options": [
      {
        "key": "A",
        "text": "技术要求",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "孔中心线",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "剖面线中",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "尺寸箭头上",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "通用制造要求常集中写在技术要求中。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握技术要求的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "技术要求",
    "knowledgePoints": [
      "技术要求",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "技术要求"
    ]
  },
  {
    "id": "EQ-096",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "综合读图",
    "question": "读一张零件图时，最不应采用的方式是？",
    "options": [
      {
        "key": "A",
        "text": "只看一个尺寸就下结论",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "先看视图表达",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "核对尺寸基准",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "结合技术要求",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "零件图需要综合视图、尺寸、公差、粗糙度和技术要求判断。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握综合读图的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "综合读图",
    "knowledgePoints": [
      "综合读图",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "综合读图"
    ]
  },
  {
    "id": "EQ-097",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "综合读图",
    "question": "工程图中的错误标注题，最可靠的判断依据是？",
    "options": [
      {
        "key": "A",
        "text": "制图标准、投影关系和制造检验逻辑",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "选项长短",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "文字是否押韵",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "图纸是否好看",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "判断错误要回到标准规则和实际制造检验后果。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握综合读图的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "综合读图",
    "knowledgePoints": [
      "综合读图",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "综合读图"
    ]
  },
  {
    "id": "EQ-098",
    "category": "工程制图",
    "levelId": "drawing-2",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "无图识图",
    "question": "没有配图的制图知识题仍应围绕什么能力？",
    "options": [
      {
        "key": "A",
        "text": "规范表达、识读和审核工程图的能力",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "机械维修经验",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "电气编程",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "市场销售",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "工程制图知识题应服务制图规范和读图能力。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握无图识图的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "无图识图",
    "knowledgePoints": [
      "无图识图",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "无图识图"
    ]
  },
  {
    "id": "EQ-099",
    "category": "工程制图",
    "levelId": "drawing-3",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "medium_hard",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "剖视审核",
    "question": "审核半剖视图时，最应优先确认哪一项？",
    "options": [
      {
        "key": "A",
        "text": "剖视与外形的分界是否与对称中心线重合",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "标题栏是否用了彩色字体",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "图纸文件名是否较短",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "所有尺寸是否都放在图框外",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "半剖视图用于对称机件，分界线应与中心线重合，并正确区分外形和内部结构。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握剖视审核的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "剖视审核",
    "knowledgePoints": [
      "剖视审核",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "剖视审核"
    ]
  },
  {
    "id": "EQ-100",
    "category": "工程制图",
    "levelId": "drawing-1",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "type": "single_choice",
    "difficulty": "easy",
    "drawingId": "",
    "imageId": "",
    "image": null,
    "imageUrl": null,
    "imageFocus": "",
    "relatedDrawingFeature": "孔系表达",
    "question": "圆周均布孔组标注中，“4×Ø10 均布于 Ø80”主要说明什么？",
    "options": [
      {
        "key": "A",
        "text": "4个直径10的孔均匀分布在直径80的分布圆上",
        "isTrap": false,
        "trapType": null
      },
      {
        "key": "B",
        "text": "一个直径80的孔深10",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "C",
        "text": "4条中心线长度为80",
        "isTrap": true,
        "trapType": "near_miss"
      },
      {
        "key": "D",
        "text": "孔的表面粗糙度为10",
        "isTrap": true,
        "trapType": "near_miss"
      }
    ],
    "answer": "A",
    "answerIndex": 0,
    "analysis": {
      "correctReason": "圆周孔组应明确孔数、孔径和分布圆直径，这是加工和检验孔系位置的关键。",
      "wrongReasons": {
        "A": "该项与题干指定图样信息不一致。",
        "B": "该项与题干指定图样信息不一致。",
        "C": "该项与题干指定图样信息不一致。",
        "D": "该项与题干指定图样信息不一致。"
      },
      "imageExplanation": "",
      "correctionSuggestion": "先定位题干指定的视图、尺寸或符号，再按投影、剖视、尺寸和标准表达逐项核对。",
      "learningPoint": "掌握孔系表达的规范含义和读图用途。",
      "commonMistake": "只凭术语熟悉程度选答案，没有回到图样中的具体位置核对。"
    },
    "mistakeTeaching": {
      "B": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "C": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      },
      "D": {
        "whyThisOptionLooksRight": "选项包含工程制图常见术语，表面上与图纸有关。",
        "whyItIsActuallyWrong": "它没有对应题干指定的视图、结构或标注位置，或违反了基本制图规则。",
        "howToAvoid": "读题后先在图上圈定观察区域，再核对线型、剖面、尺寸含义和投影关系。"
      }
    },
    "knowledgePoint": "孔系表达",
    "knowledgePoints": [
      "孔系表达",
      "工程制图规范"
    ],
    "tags": [
      "工程制图",
      "孔系表达"
    ]
  }
];

export const engineeringQuestions = engineeringDrawingQuestions;

export const getEngineeringAnswerDistribution = () =>
  engineeringDrawingQuestions.reduce<Record<string, number>>((distribution, question) => {
    const answer = Array.isArray(question.answer) ? question.answer.join("+") : question.answer;
    distribution[answer] = (distribution[answer] ?? 0) + 1;
    return distribution;
  }, { A: 0, B: 0, C: 0, D: 0 });

export const engineeringDrawingLegacyQuestions = engineeringDrawingQuestions.map((item) => ({
  id: item.id,
  levelId: item.levelId,
  category: item.category,
  section: item.section,
  sectionName: item.sectionName,
  text: item.question,
  imageUrl: item.image ?? undefined,
  imageAlt: item.imageFocus || undefined,
  imageFocus: item.imageFocus || undefined,
  relatedDrawingFeature: item.relatedDrawingFeature,
  options: item.options.map((option) => option.text),
  answerIndex: item.answerIndex,
  explanation: item.analysis.correctReason,
  type: item.type,
  difficulty: item.difficulty,
  knowledgePoint: item.knowledgePoint,
  knowledgePoints: item.knowledgePoints,
  tags: item.tags,
  analysis: item.analysis,
  mistakeTeaching: item.mistakeTeaching,
  drawingId: item.drawingId || undefined,
  isMultiple: Array.isArray(item.answerIndex),
}));
