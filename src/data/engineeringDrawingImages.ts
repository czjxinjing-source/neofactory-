export type EngineeringDrawingSection = "basic_reading" | "part_drawing" | "advanced_analysis";
export type EngineeringDrawingImage = {
  id: string;
  filename: string;
  path: string;
  src: string;
  title: string;
  name: string;
  section: EngineeringDrawingSection;
  sectionName: string;
  category: string;
  type: string;
  partType: string;
  difficulty: "medium" | "medium_hard" | "hard";
  description: string;
  knowledgePoints: string[];
  features: string[];
  intentionalError: string;
  isCorrectDrawing: boolean;
  hasIntentionalError: boolean;
  questionIds: string[];
};

export const engineeringDrawingImages: EngineeringDrawingImage[] = [
  {
    "id": "DRAW-001",
    "filename": "draw_001_bearing_seat_half_section.svg",
    "path": "/assets/engineering-drawing/draw_001_bearing_seat_half_section.svg",
    "src": "/assets/engineering-drawing/draw_001_bearing_seat_half_section.svg",
    "title": "轴承座半剖三视图",
    "name": "轴承座半剖三视图",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "category": "三视图/半剖",
    "type": "bearing_seat_half_section",
    "partType": "轴承座",
    "difficulty": "medium_hard",
    "description": "规范训练图：半剖分界线与中心线重合，纵向肋板不画剖面线。",
    "knowledgePoints": [
      "三视图",
      "半剖视图",
      "安装孔沉孔",
      "肋板表达",
      "尺寸基准"
    ],
    "features": [
      "三视图",
      "半剖视图",
      "安装孔沉孔",
      "肋板表达",
      "尺寸基准"
    ],
    "intentionalError": "规范训练图：半剖分界线与中心线重合，纵向肋板不画剖面线。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-001",
      "EQ-002"
    ]
  },
  {
    "id": "DRAW-002",
    "filename": "draw_002_stepped_shaft_section.svg",
    "path": "/assets/engineering-drawing/draw_002_stepped_shaft_section.svg",
    "src": "/assets/engineering-drawing/draw_002_stepped_shaft_section.svg",
    "title": "阶梯轴全剖与移出断面",
    "name": "阶梯轴全剖与移出断面",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "category": "全剖/断面",
    "type": "stepped_shaft_section",
    "partType": "轴类",
    "difficulty": "medium",
    "description": "规范训练图：轴向尺寸按基准分段标注，端部倒角明确。",
    "knowledgePoints": [
      "全剖视图",
      "移出断面",
      "键槽",
      "倒角",
      "粗糙度"
    ],
    "features": [
      "全剖视图",
      "移出断面",
      "键槽",
      "倒角",
      "粗糙度"
    ],
    "intentionalError": "规范训练图：轴向尺寸按基准分段标注，端部倒角明确。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-003",
      "EQ-004"
    ]
  },
  {
    "id": "DRAW-003",
    "filename": "draw_003_flange_cover_full_section.svg",
    "path": "/assets/engineering-drawing/draw_003_flange_cover_full_section.svg",
    "src": "/assets/engineering-drawing/draw_003_flange_cover_full_section.svg",
    "title": "法兰端盖全剖图",
    "name": "法兰端盖全剖图",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "category": "全剖/孔系",
    "type": "flange_cover_full_section",
    "partType": "盘盖类",
    "difficulty": "medium_hard",
    "description": "规范训练图：端面孔系数量、孔径和分布圆标注完整。",
    "knowledgePoints": [
      "全剖视图",
      "圆周均布孔",
      "沉孔深度",
      "分布圆",
      "位置度"
    ],
    "features": [
      "全剖视图",
      "圆周均布孔",
      "沉孔深度",
      "分布圆",
      "位置度"
    ],
    "intentionalError": "规范训练图：端面孔系数量、孔径和分布圆标注完整。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-005",
      "EQ-006"
    ]
  },
  {
    "id": "DRAW-004",
    "filename": "draw_004_ribbed_bracket_three_views.svg",
    "path": "/assets/engineering-drawing/draw_004_ribbed_bracket_three_views.svg",
    "src": "/assets/engineering-drawing/draw_004_ribbed_bracket_three_views.svg",
    "title": "筋板支架三视图",
    "name": "筋板支架三视图",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "category": "三视图",
    "type": "ribbed_bracket_three_views",
    "partType": "支架类",
    "difficulty": "medium",
    "description": "规范训练图：主俯左三视图投影对应，竖板孔中心线完整。",
    "knowledgePoints": [
      "投影关系",
      "肋板投影",
      "连接孔",
      "板厚",
      "中心线"
    ],
    "features": [
      "投影关系",
      "肋板投影",
      "连接孔",
      "板厚",
      "中心线"
    ],
    "intentionalError": "规范训练图：主俯左三视图投影对应，竖板孔中心线完整。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-007",
      "EQ-008"
    ]
  },
  {
    "id": "DRAW-005",
    "filename": "draw_005_pump_cover_local_section.svg",
    "path": "/assets/engineering-drawing/draw_005_pump_cover_local_section.svg",
    "src": "/assets/engineering-drawing/draw_005_pump_cover_local_section.svg",
    "title": "泵盖局部剖视图",
    "name": "泵盖局部剖视图",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "category": "局部剖",
    "type": "pump_cover_local_section",
    "partType": "箱盖类",
    "difficulty": "hard",
    "description": "规范训练图：局部剖边界清晰，密封槽和螺纹孔表达明确。",
    "knowledgePoints": [
      "局部剖视图",
      "密封槽",
      "螺纹孔",
      "同轴度",
      "技术要求"
    ],
    "features": [
      "局部剖视图",
      "密封槽",
      "螺纹孔",
      "同轴度",
      "技术要求"
    ],
    "intentionalError": "规范训练图：局部剖边界清晰，密封槽和螺纹孔表达明确。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-009",
      "EQ-010"
    ]
  },
  {
    "id": "DRAW-006",
    "filename": "draw_006_counterbore_plate.svg",
    "path": "/assets/engineering-drawing/draw_006_counterbore_plate.svg",
    "src": "/assets/engineering-drawing/draw_006_counterbore_plate.svg",
    "title": "沉孔连接板零件图",
    "name": "沉孔连接板零件图",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "category": "尺寸标注",
    "type": "counterbore_plate",
    "partType": "板类",
    "difficulty": "medium",
    "description": "规范训练图：沉孔写明大径和深度，孔距端距按基准标注。",
    "knowledgePoints": [
      "沉孔标注",
      "孔距",
      "端距",
      "圆角",
      "尺寸基准"
    ],
    "features": [
      "沉孔标注",
      "孔距",
      "端距",
      "圆角",
      "尺寸基准"
    ],
    "intentionalError": "规范训练图：沉孔写明大径和深度，孔距端距按基准标注。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-011",
      "EQ-012"
    ]
  },
  {
    "id": "DRAW-007",
    "filename": "draw_007_shaft_sleeve_full_section.svg",
    "path": "/assets/engineering-drawing/draw_007_shaft_sleeve_full_section.svg",
    "src": "/assets/engineering-drawing/draw_007_shaft_sleeve_full_section.svg",
    "title": "轴套全剖零件图",
    "name": "轴套全剖零件图",
    "section": "basic_reading",
    "sectionName": "识图与基础表达",
    "category": "全剖",
    "type": "shaft_sleeve_full_section",
    "partType": "套筒类",
    "difficulty": "medium",
    "description": "规范训练图：孔腔不画剖面线，轴向尺寸避免封闭尺寸链。",
    "knowledgePoints": [
      "同轴孔",
      "台阶孔",
      "油槽",
      "倒角",
      "尺寸链"
    ],
    "features": [
      "同轴孔",
      "台阶孔",
      "油槽",
      "倒角",
      "尺寸链"
    ],
    "intentionalError": "规范训练图：孔腔不画剖面线，轴向尺寸避免封闭尺寸链。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-013",
      "EQ-014"
    ]
  },
  {
    "id": "DRAW-008",
    "filename": "draw_008_gear_blank_section.svg",
    "path": "/assets/engineering-drawing/draw_008_gear_blank_section.svg",
    "src": "/assets/engineering-drawing/draw_008_gear_blank_section.svg",
    "title": "齿轮坯剖视图",
    "name": "齿轮坯剖视图",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "category": "剖视/断面",
    "type": "gear_blank_section",
    "partType": "盘类",
    "difficulty": "medium_hard",
    "description": "规范训练图：轮毂、腹板、轮缘剖切关系清楚。",
    "knowledgePoints": [
      "轮毂",
      "腹板",
      "键槽",
      "剖面线",
      "基准"
    ],
    "features": [
      "轮毂",
      "腹板",
      "键槽",
      "剖面线",
      "基准"
    ],
    "intentionalError": "规范训练图：轮毂、腹板、轮缘剖切关系清楚。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-015",
      "EQ-016"
    ]
  },
  {
    "id": "DRAW-009",
    "filename": "draw_009_box_body_section.svg",
    "path": "/assets/engineering-drawing/draw_009_box_body_section.svg",
    "src": "/assets/engineering-drawing/draw_009_box_body_section.svg",
    "title": "小箱体剖视图",
    "name": "小箱体剖视图",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "category": "剖视图",
    "type": "box_body_section",
    "partType": "箱体类",
    "difficulty": "hard",
    "description": "规范训练图：内腔不剖，壁厚和孔系在视图间对应。",
    "knowledgePoints": [
      "箱体内腔",
      "壁厚",
      "螺纹孔",
      "剖面线",
      "投影对应"
    ],
    "features": [
      "箱体内腔",
      "壁厚",
      "螺纹孔",
      "剖面线",
      "投影对应"
    ],
    "intentionalError": "规范训练图：内腔不剖，壁厚和孔系在视图间对应。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-017",
      "EQ-018"
    ]
  },
  {
    "id": "DRAW-010",
    "filename": "draw_010_locating_block_views.svg",
    "path": "/assets/engineering-drawing/draw_010_locating_block_views.svg",
    "src": "/assets/engineering-drawing/draw_010_locating_block_views.svg",
    "title": "定位块三视图",
    "name": "定位块三视图",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "category": "三视图",
    "type": "locating_block_views",
    "partType": "块类",
    "difficulty": "medium",
    "description": "规范训练图：槽和斜面在三视图中对应表达。",
    "knowledgePoints": [
      "组合体识读",
      "槽",
      "斜面",
      "隐藏线",
      "尺寸标注"
    ],
    "features": [
      "组合体识读",
      "槽",
      "斜面",
      "隐藏线",
      "尺寸标注"
    ],
    "intentionalError": "规范训练图：槽和斜面在三视图中对应表达。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-019",
      "EQ-020"
    ]
  },
  {
    "id": "DRAW-011",
    "filename": "draw_011_v_block_section.svg",
    "path": "/assets/engineering-drawing/draw_011_v_block_section.svg",
    "src": "/assets/engineering-drawing/draw_011_v_block_section.svg",
    "title": "V形块局部剖视图",
    "name": "V形块局部剖视图",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "category": "局部剖",
    "type": "v_block_section",
    "partType": "夹具类",
    "difficulty": "medium_hard",
    "description": "规范训练图：V形槽角度与对称中心线标注清楚。",
    "knowledgePoints": [
      "V形槽",
      "对称中心线",
      "局部剖",
      "角度标注",
      "表面粗糙度"
    ],
    "features": [
      "V形槽",
      "对称中心线",
      "局部剖",
      "角度标注",
      "表面粗糙度"
    ],
    "intentionalError": "规范训练图：V形槽角度与对称中心线标注清楚。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-021",
      "EQ-022"
    ]
  },
  {
    "id": "DRAW-012",
    "filename": "draw_012_fork_bracket_views.svg",
    "path": "/assets/engineering-drawing/draw_012_fork_bracket_views.svg",
    "src": "/assets/engineering-drawing/draw_012_fork_bracket_views.svg",
    "title": "叉形支架零件图",
    "name": "叉形支架零件图",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "category": "三视图/局部剖",
    "type": "fork_bracket_views",
    "partType": "叉架类",
    "difficulty": "hard",
    "description": "规范训练图：两叉耳同轴孔与底座孔系关系明确。",
    "knowledgePoints": [
      "叉耳",
      "同轴孔",
      "局部剖",
      "孔距",
      "形位公差"
    ],
    "features": [
      "叉耳",
      "同轴孔",
      "局部剖",
      "孔距",
      "形位公差"
    ],
    "intentionalError": "规范训练图：两叉耳同轴孔与底座孔系关系明确。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-023",
      "EQ-024"
    ]
  },
  {
    "id": "DRAW-013",
    "filename": "draw_013_bearing_cap_section.svg",
    "path": "/assets/engineering-drawing/draw_013_bearing_cap_section.svg",
    "src": "/assets/engineering-drawing/draw_013_bearing_cap_section.svg",
    "title": "轴承盖全剖图",
    "name": "轴承盖全剖图",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "category": "全剖",
    "type": "bearing_cap_section",
    "partType": "盖类",
    "difficulty": "medium_hard",
    "description": "规范训练图：台阶孔直径和深度分层表达。",
    "knowledgePoints": [
      "台阶孔",
      "密封槽",
      "螺钉孔",
      "全剖",
      "粗糙度"
    ],
    "features": [
      "台阶孔",
      "密封槽",
      "螺钉孔",
      "全剖",
      "粗糙度"
    ],
    "intentionalError": "规范训练图：台阶孔直径和深度分层表达。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-025",
      "EQ-026"
    ]
  },
  {
    "id": "DRAW-014",
    "filename": "draw_014_pipe_flange_views.svg",
    "path": "/assets/engineering-drawing/draw_014_pipe_flange_views.svg",
    "src": "/assets/engineering-drawing/draw_014_pipe_flange_views.svg",
    "title": "管法兰端面图",
    "name": "管法兰端面图",
    "section": "part_drawing",
    "sectionName": "零件图阅读与规范判断",
    "category": "端面图/剖视",
    "type": "pipe_flange_views",
    "partType": "法兰类",
    "difficulty": "medium",
    "description": "规范训练图：4×孔与分布圆在端面图中一致。",
    "knowledgePoints": [
      "圆周均布",
      "中心孔",
      "分布圆",
      "剖视",
      "孔数标注"
    ],
    "features": [
      "圆周均布",
      "中心孔",
      "分布圆",
      "剖视",
      "孔数标注"
    ],
    "intentionalError": "规范训练图：4×孔与分布圆在端面图中一致。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-027",
      "EQ-028"
    ]
  },
  {
    "id": "DRAW-015",
    "filename": "draw_015_sliding_seat_section.svg",
    "path": "/assets/engineering-drawing/draw_015_sliding_seat_section.svg",
    "src": "/assets/engineering-drawing/draw_015_sliding_seat_section.svg",
    "title": "滑座剖视图",
    "name": "滑座剖视图",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "category": "剖视/尺寸",
    "type": "sliding_seat_section",
    "partType": "导轨座类",
    "difficulty": "hard",
    "description": "规范训练图：导轨面作为功能基准，粗糙度和直线度集中表达。",
    "knowledgePoints": [
      "燕尾槽",
      "导轨面",
      "基准",
      "几何公差",
      "表面质量"
    ],
    "features": [
      "燕尾槽",
      "导轨面",
      "基准",
      "几何公差",
      "表面质量"
    ],
    "intentionalError": "规范训练图：导轨面作为功能基准，粗糙度和直线度集中表达。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-029",
      "EQ-030"
    ]
  },
  {
    "id": "DRAW-016",
    "filename": "draw_016_end_cap_local_section.svg",
    "path": "/assets/engineering-drawing/draw_016_end_cap_local_section.svg",
    "src": "/assets/engineering-drawing/draw_016_end_cap_local_section.svg",
    "title": "端盖局部剖与螺纹孔",
    "name": "端盖局部剖与螺纹孔",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "category": "局部剖",
    "type": "end_cap_local_section",
    "partType": "端盖类",
    "difficulty": "medium_hard",
    "description": "规范训练图：M孔深度和钻孔深度分清。",
    "knowledgePoints": [
      "局部剖",
      "螺纹孔",
      "盲孔深度",
      "倒角",
      "技术要求"
    ],
    "features": [
      "局部剖",
      "螺纹孔",
      "盲孔深度",
      "倒角",
      "技术要求"
    ],
    "intentionalError": "规范训练图：M孔深度和钻孔深度分清。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-031",
      "EQ-032"
    ]
  },
  {
    "id": "DRAW-017",
    "filename": "draw_017_ribbed_base_views.svg",
    "path": "/assets/engineering-drawing/draw_017_ribbed_base_views.svg",
    "src": "/assets/engineering-drawing/draw_017_ribbed_base_views.svg",
    "title": "肋板底座三视图",
    "name": "肋板底座三视图",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "category": "三视图",
    "type": "ribbed_base_views",
    "partType": "底座类",
    "difficulty": "medium",
    "description": "规范训练图：肋板在主视和俯视中对应，安装孔中心距明确。",
    "knowledgePoints": [
      "肋板",
      "安装孔",
      "圆角",
      "隐藏线",
      "投影规律"
    ],
    "features": [
      "肋板",
      "安装孔",
      "圆角",
      "隐藏线",
      "投影规律"
    ],
    "intentionalError": "规范训练图：肋板在主视和俯视中对应，安装孔中心距明确。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-033",
      "EQ-034"
    ]
  },
  {
    "id": "DRAW-018",
    "filename": "draw_018_clamp_plate_detail.svg",
    "path": "/assets/engineering-drawing/draw_018_clamp_plate_detail.svg",
    "src": "/assets/engineering-drawing/draw_018_clamp_plate_detail.svg",
    "title": "夹紧压板零件图",
    "name": "夹紧压板零件图",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "category": "尺寸/局部视图",
    "type": "clamp_plate_detail",
    "partType": "压板类",
    "difficulty": "medium",
    "description": "规范训练图：长圆孔用宽度加中心距表达。",
    "knowledgePoints": [
      "长圆孔",
      "局部视图",
      "对称标注",
      "尺寸基准",
      "倒角"
    ],
    "features": [
      "长圆孔",
      "局部视图",
      "对称标注",
      "尺寸基准",
      "倒角"
    ],
    "intentionalError": "规范训练图：长圆孔用宽度加中心距表达。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-035",
      "EQ-036"
    ]
  },
  {
    "id": "DRAW-019",
    "filename": "draw_019_bushing_oil_groove.svg",
    "path": "/assets/engineering-drawing/draw_019_bushing_oil_groove.svg",
    "src": "/assets/engineering-drawing/draw_019_bushing_oil_groove.svg",
    "title": "带油槽衬套全剖图",
    "name": "带油槽衬套全剖图",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "category": "全剖",
    "type": "bushing_oil_groove",
    "partType": "套类",
    "difficulty": "medium_hard",
    "description": "规范训练图：螺旋油槽用局部示意和技术要求配合表达。",
    "knowledgePoints": [
      "油槽",
      "内孔公差",
      "剖面线",
      "粗糙度",
      "倒角"
    ],
    "features": [
      "油槽",
      "内孔公差",
      "剖面线",
      "粗糙度",
      "倒角"
    ],
    "intentionalError": "规范训练图：螺旋油槽用局部示意和技术要求配合表达。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-037",
      "EQ-038"
    ]
  },
  {
    "id": "DRAW-020",
    "filename": "draw_020_projection_combo_body.svg",
    "path": "/assets/engineering-drawing/draw_020_projection_combo_body.svg",
    "src": "/assets/engineering-drawing/draw_020_projection_combo_body.svg",
    "title": "组合体投影识读图",
    "name": "组合体投影识读图",
    "section": "advanced_analysis",
    "sectionName": "综合读图与生产审核",
    "category": "三视图",
    "type": "projection_combo_body",
    "partType": "组合体",
    "difficulty": "medium",
    "description": "规范训练图：叠加与切割结构在三视图中对应。",
    "knowledgePoints": [
      "点线面投影",
      "组合体",
      "切槽",
      "圆柱孔",
      "虚线"
    ],
    "features": [
      "点线面投影",
      "组合体",
      "切槽",
      "圆柱孔",
      "虚线"
    ],
    "intentionalError": "规范训练图：叠加与切割结构在三视图中对应。",
    "isCorrectDrawing": true,
    "hasIntentionalError": false,
    "questionIds": [
      "EQ-039",
      "EQ-040"
    ]
  }
];

export const engineeringDrawings = engineeringDrawingImages;
