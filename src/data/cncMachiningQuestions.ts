import type { Question } from "./questions";

export const cncMachiningQuestions: Question[] = [
  {
    "id": "skjg_001",
    "levelId": "cnc-1",
    "text": "看图补全端面外圆车削准备程序。图中外圆为 Ø30，Z0 在右端面，起刀点应在 X35、Z2。答案按空格分隔。",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "看图补全端面外圆车削准备程序。图中外圆为 Ø30，Z0 在右端面，起刀点应在 X35、Z2。答案按空格分隔。",
    "promptCode": "N10 ___ G54\nN20 ___ X35 Z2\nN30 ___ S800",
    "options": [],
    "answerIndex": -1,
    "answer": "G90 G00 M03",
    "acceptableAnswers": [
      "G90 G00 M03",
      "G90 G0 M03"
    ],
    "fillAnswers": [
      "G90 G00 M03",
      "G90 G0 M03"
    ],
    "answerText": "G90 G00 M03",
    "explanation": "【程序含义】这段程序用于图中 Ø30 外圆车削前的准备：先建立绝对编程和 G54 工件坐标系，再快速到安全起刀点 X35 Z2，最后启动主轴正转。\n【关键代码】G90 表示绝对编程，X35、Z2 都按右端面工件零点解释；G00/G0 表示快速定位，适合从安全空间移动到图中起刀点；M03 S800 表示主轴正转，转速 800 r/min。\n【答案原因】图中外圆最大直径为 Ø30，X35 比工件直径大 5 mm，Z2 在端面前方 2 mm，因此 X35 Z2 是合理安全起刀点。三个空依次应填 G90、G00、M03。\n【错误风险】如果把 G00 写成 G01，会把空行程当成进给移动，效率低且逻辑不清；如果漏写 M03，后续切削时主轴未启动，可能挤刀、崩刀或损伤工件。\n【记忆方法】加工前先定坐标 G90/G54，靠近工件用 G00 快速走位，真正切削前必须先开主轴。",
    "image": "/assets/cnc-machining/skjg_img_001.svg",
    "imageUrl": "/assets/cnc-machining/skjg_img_001.svg",
    "imageAlt": "端面外圆车削起刀点图",
    "imageDescription": "图中棒料右端为 Z0，外圆直径 Ø30，加工长度 40，起刀点 X35 Z2 位于工件外侧和端面前方。",
    "knowledgePoint": "端面外圆起刀点",
    "knowledgePoints": [
      "端面外圆起刀点",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "端面外圆起刀点",
      "code_fill",
      "图形编程题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_002",
    "levelId": "cnc-2",
    "text": "看图补全阶梯轴右段外圆切削和结束程序。图中右段直径 Ø24、长度 25，切削后退到 X80 Z80。答案按空格分隔。",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "看图补全阶梯轴右段外圆切削和结束程序。图中右段直径 Ø24、长度 25，切削后退到 X80 Z80。答案按空格分隔。",
    "promptCode": "N40 ___ X24 Z-25 ___0.20\nN50 G00 X80 Z80\nN60 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G01 F M05",
    "acceptableAnswers": [
      "G01 F M05",
      "G1 F M05"
    ],
    "fillAnswers": [
      "G01 F M05",
      "G1 F M05"
    ],
    "answerText": "G01 F M05",
    "explanation": "【程序含义】这段程序用于车削图中右侧 Ø24、长 25 mm 的外圆段，然后退到安全位置并停止主轴。\n【关键代码】G01/G1 是直线插补切削，X24 对应图中 Ø24 直径，Z-25 对应从右端面向左 25 mm 的台阶位置；F0.20 表示切削进给；G00 X80 Z80 是离开工件和夹具的安全退刀；M05 表示主轴停止。\n【答案原因】N40 是实际切削段，必须用 G01 并给出 F；N60 位于退刀之后，应该用 M05 停主轴。等价写法 G1 可被接受。\n【错误风险】如果用 G00 执行 X24 Z-25，就会快速切入材料，容易撞刀或损坏刀具；如果结束前不 M05，主轴可能在程序结束后仍保持旋转，存在安全风险。\n【记忆方法】看见 F 和加工尺寸坐标，多数是 G01 切削；看见远离工件的大坐标，多数是 G00 安全退刀。",
    "image": "/assets/cnc-machining/skjg_img_002.svg",
    "imageUrl": "/assets/cnc-machining/skjg_img_002.svg",
    "imageAlt": "两段阶梯轴车削图",
    "imageDescription": "图中右端为 Z0，右段为 Ø24、长度 25，左段为 Ø32。Z-25 对应右段台阶位置。",
    "knowledgePoint": "阶梯轴外圆切削",
    "knowledgePoints": [
      "阶梯轴外圆切削",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "阶梯轴外圆切削",
      "code_fill",
      "图形编程题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_003",
    "levelId": "cnc-3",
    "text": "看图补全单孔钻削前的准备程序。图中孔中心为 X25 Y17.5，钻孔前刀具应在 Z5 安全高度。答案按空格分隔。",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "看图补全单孔钻削前的准备程序。图中孔中心为 X25 Y17.5，钻孔前刀具应在 Z5 安全高度。答案按空格分隔。",
    "promptCode": "N10 G90 ___\nN20 G00 X25 Y17.5 ___\nN30 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G54 Z5 M08",
    "acceptableAnswers": [
      "G54 Z5 M08",
      "G54 Z5.0 M08"
    ],
    "fillAnswers": [
      "G54 Z5 M08",
      "G54 Z5.0 M08"
    ],
    "answerText": "G54 Z5 M08",
    "explanation": "【程序含义】这段程序用于图中单孔钻削前的定位准备：调用工件坐标系，快速移动到孔中心 X25 Y17.5，并保持 Z5 安全高度，再打开切削液。\n【关键代码】G54 调用工件坐标系，图中左下角为 X0 Y0；G00 X25 Y17.5 Z5 表示快速定位到孔中心上方；M08 表示打开切削液，适合钻削前准备。\n【答案原因】图中孔中心正好标注为 X25 Y17.5，所以程序坐标必须对应这个孔位；Z5 是高于工件表面的安全高度，不能直接写成负 Z。\n【错误风险】若把 X25 Y17.5 写错，孔会钻偏；若把 Z5 写成 Z-5 并用 G00 快速到达，刀具可能快速撞入工件；漏写 G54 会导致坐标基准不明确。\n【记忆方法】孔加工先找孔中心 X/Y，再保持安全 Z；真正下刀要用受控进给，不能用 G00 快速钻入。",
    "image": "/assets/cnc-machining/skjg_img_003.svg",
    "imageUrl": "/assets/cnc-machining/skjg_img_003.svg",
    "imageAlt": "单孔板件钻削图",
    "imageDescription": "板件尺寸 50x35，工件零点在左下角，孔中心坐标为 X25 Y17.5，安全高度为 Z5。",
    "knowledgePoint": "钻孔定位与安全高度",
    "knowledgePoints": [
      "钻孔定位与安全高度",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "钻孔定位与安全高度",
      "code_fill",
      "图形编程题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_004",
    "levelId": "cnc-1",
    "text": "看图补全矩形轮廓铣削结束段。图中轮廓为 60x40，加工完成后先退到 Z50，再关冷却液、停主轴并结束程序。答案按空格分隔。",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "看图补全矩形轮廓铣削结束段。图中轮廓为 60x40，加工完成后先退到 Z50，再关冷却液、停主轴并结束程序。答案按空格分隔。",
    "promptCode": "N80 ___ Z50\nN90 ___\nN100 M05\nN110 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G00 M09 M30",
    "acceptableAnswers": [
      "G00 M09 M30",
      "G0 M09 M30"
    ],
    "fillAnswers": [
      "G00 M09 M30",
      "G0 M09 M30"
    ],
    "answerText": "G00 M09 M30",
    "explanation": "【程序含义】这段程序是图中矩形轮廓铣削后的安全结束段，不再切削，而是让刀具离开工件并关闭辅助功能。\n【关键代码】G00/G0 Z50 表示快速抬刀到安全高度；M09 表示关闭切削液；M05 表示停止主轴；M30 表示程序结束并复位。\n【答案原因】加工已完成，刀具需要先离开 60x40 轮廓所在平面，所以第一空填 G00；冷却液应在结束前关闭，所以第二空填 M09；最后用 M30 结束程序。\n【错误风险】如果先 M30 而不退刀，刀具可能停留在工件附近；如果漏 M05 或 M09，主轴和切削液状态不明确，影响现场安全和下一次操作。\n【记忆方法】结束段按“退刀、关液、停主轴、结束程序”的顺序检查。",
    "image": "/assets/cnc-machining/skjg_img_004.svg",
    "imageUrl": "/assets/cnc-machining/skjg_img_004.svg",
    "imageAlt": "矩形轮廓铣削图",
    "imageDescription": "矩形轮廓尺寸为 60x40，工件零点在左下角；Z50 是加工完成后的安全退刀高度。",
    "knowledgePoint": "铣削结束退刀",
    "knowledgePoints": [
      "铣削结束退刀",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "铣削结束退刀",
      "code_fill",
      "图形编程题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_005",
    "levelId": "cnc-2",
    "text": "看图写出快速移动到第一个孔中心上方的程序段。第一个孔中心为 X20 Y20，安全高度为 Z5。",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "easy",
    "question": "看图写出快速移动到第一个孔中心上方的程序段。第一个孔中心为 X20 Y20，安全高度为 Z5。",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "G00 X20 Y20 Z5",
    "acceptableAnswers": [
      "G00 X20 Y20 Z5",
      "G0 X20 Y20 Z5",
      "G00 X20.0 Y20.0 Z5.0"
    ],
    "fillAnswers": [
      "G00 X20 Y20 Z5",
      "G0 X20 Y20 Z5",
      "G00 X20.0 Y20.0 Z5.0"
    ],
    "answerText": "G00 X20 Y20 Z5",
    "explanation": "【程序含义】本题要求写一个定位程序段，把刀具移动到图中左侧孔中心的上方，还没有开始钻削。\n【关键代码】G00/G0 表示快速定位；X20 Y20 来自图中第一个孔中心坐标；Z5 是安全高度，说明刀具在工件上方。\n【答案原因】题目要求“快速移动到孔中心上方”，所以应写 G00 X20 Y20 Z5。这个程序段只负责定位，不负责下刀。\n【错误风险】如果把孔位写成 X50 Y20，就会到右侧孔；如果漏写 Z5，机床可能沿不安全高度移动；如果用 G01，虽然也能移动，但不符合快速定位的意图。\n【记忆方法】钻孔前先 X/Y 找中心，再用安全 Z 保护刀具；G00 是空行程走位，G01 才是受控切削。",
    "image": "/assets/cnc-machining/skjg_img_005.svg",
    "imageUrl": "/assets/cnc-machining/skjg_img_005.svg",
    "imageAlt": "两个对称孔定位图",
    "imageDescription": "板件尺寸 70x40，两个孔中心分别为 X20 Y20 和 X50 Y20；本题只定位到左侧第一个孔。",
    "knowledgePoint": "孔位快速定位",
    "knowledgePoints": [
      "孔位快速定位",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "孔位快速定位",
      "short_code",
      "图形编程题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_006",
    "levelId": "cnc-3",
    "text": "看图写出矩形槽底部沿 X 方向从 X10 进给到 X50 的程序段，进给速度 F120。",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "easy",
    "question": "看图写出矩形槽底部沿 X 方向从 X10 进给到 X50 的程序段，进给速度 F120。",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "G01 X50 F120",
    "acceptableAnswers": [
      "G01 X50 F120",
      "G1 X50 F120",
      "G01 X50.0 F120"
    ],
    "fillAnswers": [
      "G01 X50 F120",
      "G1 X50 F120",
      "G01 X50.0 F120"
    ],
    "answerText": "G01 X50 F120",
    "explanation": "【程序含义】本题要求在矩形槽底部做一段受控直线切削，从槽左端向右加工到 X50。\n【关键代码】G01/G1 表示直线插补切削；X50 对应图中槽右端坐标；F120 是铣削进给速度。\n【答案原因】因为题目说“进给到 X50”，这是切削动作而不是空行程，所以必须用 G01，并写出目标 X 坐标和 F 进给。\n【错误风险】若写 G00 X50，刀具会快速扫过槽底，可能断刀或破坏槽面；若坐标写错，槽长就会加工错误。\n【记忆方法】槽底、轮廓边、外圆表面这些接触材料的运动优先想到 G01 和 F。",
    "image": "/assets/cnc-machining/skjg_img_006.svg",
    "imageUrl": "/assets/cnc-machining/skjg_img_006.svg",
    "imageAlt": "矩形槽铣削路径图",
    "imageDescription": "槽宽 12，槽长从 X10 到 X50；题目只要求已经到达槽底后沿 X 方向进给到 X50。",
    "knowledgePoint": "槽加工直线进给",
    "knowledgePoints": [
      "槽加工直线进给",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "槽加工直线进给",
      "short_code",
      "图形编程题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_007",
    "levelId": "cnc-1",
    "text": "看图阅读程序，N30 的主要作用是什么？图中右段外圆为 Ø20，长度 20。",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "easy",
    "question": "看图阅读程序，N30 的主要作用是什么？图中右段外圆为 Ø20，长度 20。",
    "promptCode": "N10 G90 G54 M03 S900\nN20 G00 X24 Z2\nN30 G01 X20 Z-20 F0.18\nN40 G00 X80 Z80\nN50 M05 M30",
    "options": [
      "快速返回参考点",
      "切削图中 Ø20、长 20 的右段外圆",
      "打开冷却液",
      "设置工件坐标系"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这段程序先建立坐标系并开主轴，再快速到起刀点，随后加工图中右段外圆，最后安全退刀并结束。\n【关键代码】N10 的 G90 G54 表示按工件零点进行绝对编程，M03 S900 启动主轴；N20 的 X24 Z2 是靠近外圆前的安全位置；N30 的 G01 X20 Z-20 F0.18 是按进给切削到图中 Ø20、长度 20 的位置；N40 是安全退刀。\n【答案原因】题目问 N30，N30 同时出现 G01、X20、Z-20 和 F0.18，说明它是实际切削段，对应图中的 Ø20 右段外圆。\n【错误风险】把 N30 当成快速定位会忽略 G01 和 F；如果实际加工中把这段错写为 G00，刀具会快速切入材料。\n【记忆方法】阅读程序时先看 G 代码性质：G00 多为空行程，G01 加 F 多为切削。",
    "image": "/assets/cnc-machining/skjg_img_007.svg",
    "imageUrl": "/assets/cnc-machining/skjg_img_007.svg",
    "imageAlt": "两级台阶轴程序阅读图",
    "imageDescription": "右端为 Z0，右段外圆为 Ø20、长度 20；N30 中 X20 Z-20 与这两个尺寸对应。",
    "knowledgePoint": "车削程序段识读",
    "knowledgePoints": [
      "车削程序段识读",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "车削程序段识读",
      "code_read",
      "图形编程题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_008",
    "levelId": "cnc-2",
    "text": "看图阅读程序，N20 为什么应使用 G00？图中平面铣削起刀点为 X-5 Y-5 Z8。",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "easy",
    "question": "看图阅读程序，N20 为什么应使用 G00？图中平面铣削起刀点为 X-5 Y-5 Z8。",
    "promptCode": "N10 G90 G54\nN20 G00 X-5 Y-5 Z8\nN30 M03 S1200\nN40 G01 Z-2 F80\nN50 G01 X55 F150",
    "options": [
      "N20 是到安全起刀点的快速定位",
      "N20 是正式切削轮廓",
      "G00 能控制切削进给",
      "G00 表示程序暂停"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】程序先调用 G54，再移动到图中工件外侧的安全起刀点，启动主轴后才下刀切削。\n【关键代码】N20 的 X-5 Y-5 位于加工区域外侧，Z8 高于工件表面，属于空行程定位；N40 才用 G01 Z-2 F80 下刀；N50 用 G01 沿 X 方向切削。\n【答案原因】因为 N20 的目标点不在材料内部，是图中标出的安全起刀点，所以用 G00 快速定位最合理。\n【错误风险】如果把 G00 用在 N40 的 Z-2 下刀位置，就可能快速撞入工件；如果把起刀点设在工件内部，也会增加碰撞风险。\n【记忆方法】先判断坐标点是否在安全空间：在工件外和安全高度，用 G00；接触材料，用 G01。",
    "image": "/assets/cnc-machining/skjg_img_008.svg",
    "imageUrl": "/assets/cnc-machining/skjg_img_008.svg",
    "imageAlt": "平面铣削起刀点图",
    "imageDescription": "加工区域为 55x35，起刀点 X-5 Y-5 在工件外侧，Z8 为安全高度。",
    "knowledgePoint": "铣削安全起刀点",
    "knowledgePoints": [
      "铣削安全起刀点",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "铣削安全起刀点",
      "code_read",
      "图形编程题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_009",
    "levelId": "cnc-3",
    "text": "看图判断程序中的明显错误。图中开口槽宽 10、槽深 Z-2，刀具应先到安全高度再进给下刀。",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "看图判断程序中的明显错误。图中开口槽宽 10、槽深 Z-2，刀具应先到安全高度再进给下刀。",
    "promptCode": "N10 G90 G54 M03 S1000\nN20 G00 X20 Y20 Z-2\nN30 G01 X60 F120\nN40 G00 Z50\nN50 M05 M30",
    "options": [
      "N20 用 G00 快速到 Z-2，可能快速撞入工件",
      "N10 不应启动主轴",
      "N30 不应有 F120",
      "N40 不能退到 Z50"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】程序想加工图中的开口槽，N20 试图把刀具定位到槽底，N30 再沿 X 方向切削。\n【错误位置】错误在 N20：G00 X20 Y20 Z-2。Z-2 已经是图中槽底切削深度，不能用快速移动直接到达。\n【正确修改】更合理的写法是先 G00 X20 Y20 Z5 到槽起点上方，再用 G01 Z-2 F80 受控下刀，之后再 G01 X60 F120 切削。\n【错误风险】G00 是快速移动，直接到 Z-2 可能撞刀、折刀，槽底表面也会被破坏。N10 开主轴和 N30 的 F120 本身不是错误。\n【记忆方法】凡是 Z 坐标进入材料深度，优先检查是否用了 G01 和合适 F。",
    "image": "/assets/cnc-machining/skjg_img_009.svg",
    "imageUrl": "/assets/cnc-machining/skjg_img_009.svg",
    "imageAlt": "外轮廓开口槽纠错图",
    "imageDescription": "图中槽加工深度为 Z-2；到达槽深前应使用 G01 低速下刀，不应 G00 快速下到槽底。",
    "knowledgePoint": "G00 快速下刀风险",
    "knowledgePoints": [
      "G00 快速下刀风险",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00 快速下刀风险",
      "code_debug",
      "图形编程题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_010",
    "levelId": "cnc-1",
    "text": "看图判断三孔加工程序的明显问题。图中三孔中心为 X20、X40、X60，Y25。",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "看图判断三孔加工程序的明显问题。图中三孔中心为 X20、X40、X60，Y25。",
    "promptCode": "N10 G90 G54\nN20 G00 X20 Y25 Z5\nN30 G01 Z-5 F80\nN40 G00 Z5\nN50 G00 X40 Y25\nN60 G01 Z-5 F80\nN70 G00 X60 Y20\nN80 G01 Z-5 F80\nN90 G00 Z50 M05 M30",
    "options": [
      "N70 的 Y20 与图中第三孔 Y25 不一致",
      "N20 不应使用 Z5",
      "N30 不应使用 G01",
      "N90 不应退到 Z50"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】程序按顺序加工图中的三个孔，前两个孔分别定位到 X20 Y25 和 X40 Y25，第三个孔应定位到 X60 Y25。\n【错误位置】错误在 N70：程序写成 G00 X60 Y20，但图中第三孔中心标注为 X60 Y25。\n【正确修改】N70 应改为 G00 X60 Y25，先在安全高度定位到第三孔中心，再执行 Z 向进给。\n【错误风险】Y 坐标少 5 mm 会导致第三个孔钻偏，零件可能报废；如果夹具或已有孔位靠近，还可能碰到工装。\n【记忆方法】孔系题先把图中每个孔中心坐标列出来，再逐段核对程序中的 X/Y。",
    "image": "/assets/cnc-machining/skjg_img_010.svg",
    "imageUrl": "/assets/cnc-machining/skjg_img_010.svg",
    "imageAlt": "三孔孔系纠错图",
    "imageDescription": "三孔沿 X 方向排列，孔中心分别为 X20、X40、X60，且 Y 坐标均为 25。",
    "knowledgePoint": "孔位坐标纠错",
    "knowledgePoints": [
      "孔位坐标纠错",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "孔位坐标纠错",
      "code_debug",
      "图形编程题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_011",
    "levelId": "cnc-2",
    "text": "看图将两级台阶轴右段外圆加工程序排序。答案写数字串，如 1-2-3-4。",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_order",
    "difficulty": "easy",
    "question": "看图将两级台阶轴右段外圆加工程序排序。答案写数字串，如 1-2-3-4。",
    "promptCode": "1. G00 X80 Z80\n2. G01 X20 Z-20 F0.18\n3. G90 G54 M03 S900\n4. M05 M30\n5. G00 X24 Z2",
    "options": [],
    "answerIndex": -1,
    "answer": "3-5-2-1-4",
    "acceptableAnswers": [
      "3-5-2-1-4",
      "35214"
    ],
    "fillAnswers": [
      "3-5-2-1-4",
      "35214"
    ],
    "answerText": "3-5-2-1-4",
    "explanation": "【程序含义】这是图中两级台阶轴右段外圆的基础加工顺序题，目标是安全完成 Ø20、长 20 的切削。\n【正确顺序】3 建立 G90/G54 并启动主轴；5 用 G00 到 X24 Z2 的安全起刀点；2 用 G01 X20 Z-20 F0.18 切削到图中右段尺寸；1 用 G00 退到 X80 Z80；4 用 M05 M30 停主轴并结束。\n【答案原因】切削前必须先开主轴，G01 切削前必须先到安全起刀点，程序结束前要先退刀再停机。\n【错误风险】如果先执行 2，刀具可能在没有准备好位置或主轴状态时切削；如果把 4 放在退刀前，刀具会停在工件附近，不安全。\n【记忆方法】排序题按“坐标/主轴准备 → 快速定位 → 进给切削 → 安全退刀 → 停主轴结束”检查。",
    "image": "/assets/cnc-machining/skjg_img_011.svg",
    "imageUrl": "/assets/cnc-machining/skjg_img_011.svg",
    "imageAlt": "两级台阶轴排序图",
    "imageDescription": "图中右段为 Ø20、长 20；排序要体现先开主轴和定位，再切削到 X20 Z-20，最后退刀停机。",
    "knowledgePoint": "台阶轴程序顺序",
    "knowledgePoints": [
      "台阶轴程序顺序",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "台阶轴程序顺序",
      "code_order",
      "图形编程题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_012",
    "levelId": "cnc-3",
    "text": "看图写出平面铣削前快速移动到起刀点的程序段。起刀点为 X-5 Y-5，安全高度 Z8。",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "easy",
    "question": "看图写出平面铣削前快速移动到起刀点的程序段。起刀点为 X-5 Y-5，安全高度 Z8。",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "G00 X-5 Y-5 Z8",
    "acceptableAnswers": [
      "G00 X-5 Y-5 Z8",
      "G0 X-5 Y-5 Z8",
      "G00 X-5.0 Y-5.0 Z8.0"
    ],
    "fillAnswers": [
      "G00 X-5 Y-5 Z8",
      "G0 X-5 Y-5 Z8",
      "G00 X-5.0 Y-5.0 Z8.0"
    ],
    "answerText": "G00 X-5 Y-5 Z8",
    "explanation": "【程序含义】本题只要求写平面铣削前的安全定位段，让刀具到达图中工件外侧起刀点上方。\n【关键代码】G00/G0 表示快速定位；X-5 Y-5 是图中标出的工件外侧起刀点；Z8 表示刀具保持在安全高度，不接触工件。\n【答案原因】起刀点在加工区域外侧，不是切削动作，因此使用 G00 合理。坐标必须与图中 X-5 Y-5 Z8 一致。\n【错误风险】如果写成 X5 Y5，刀具会移动到工件内部附近；如果漏写 Z8，移动高度不明确；如果用 G01，虽然较安全但不符合快速定位要求。\n【记忆方法】平面铣削先在工件外侧和安全高度走位，主轴启动后再按进给下刀。",
    "image": "/assets/cnc-machining/skjg_img_012.svg",
    "imageUrl": "/assets/cnc-machining/skjg_img_012.svg",
    "imageAlt": "平面铣削安全起刀图",
    "imageDescription": "加工区域为 55x35，X-5 Y-5 位于工件左下外侧，Z8 是安全高度。",
    "knowledgePoint": "平面铣削起刀定位",
    "knowledgePoints": [
      "平面铣削起刀定位",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "平面铣削起刀定位",
      "short_code",
      "图形编程题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_013",
    "levelId": "cnc-1",
    "text": "补全程序中的绝对编程、快速定位和主轴正转指令，答案按空格分隔。（情境 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全程序中的绝对编程、快速定位和主轴正转指令，答案按空格分隔。（情境 4）",
    "promptCode": "N10 ___ G54\nN20 ___ X36 Z3\nN30 ___ S900",
    "options": [],
    "answerIndex": -1,
    "answer": "G90 G00 M03",
    "acceptableAnswers": [
      "G90 G00 M03",
      "G90 G0 M03"
    ],
    "fillAnswers": [
      "G90 G00 M03",
      "G90 G0 M03"
    ],
    "answerText": "G90 G00 M03",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 ___ G54：第 1 空填 G90，表示绝对编程，后续 X/Y/Z 坐标按工件坐标系零点来读。\nN20 ___ X36 Z3：第 2 空填 G00，快速定位或快速退刀，只适合空行程移动。\nN30 ___ S900：第 3 空填 M03，主轴正转，必须在切削进给前启动。\n【答案原因】标准答案为 G90 G00 M03。等价写法包括 G90 G0 M03，判分时已做大小写和空格兼容。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G90/G00/M03 基础",
    "knowledgePoints": [
      "G90/G00/M03 基础",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G90/G00/M03 基础",
      "code_fill"
    ]
  },
  {
    "id": "skjg_014",
    "levelId": "cnc-2",
    "text": "补全车削外圆程序中的直线插补、进给量和主轴停止指令，答案按空格分隔。（情境 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全车削外圆程序中的直线插补、进给量和主轴停止指令，答案按空格分隔。（情境 4）",
    "promptCode": "N40 ___ X26 Z-28 ___0.18\nN50 G00 X90 Z90\nN60 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G01 F M05",
    "acceptableAnswers": [
      "G01 F M05",
      "G1 F M05"
    ],
    "fillAnswers": [
      "G01 F M05",
      "G1 F M05"
    ],
    "answerText": "G01 F M05",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN40 ___ X26 Z-28 ___0.18：第 1 空填 G01，直线插补切削，配合 F 进给速度使用；第 2 空填 F，表示这里应补进给地址字 F，后面的数值才会被系统理解为进给。\nN50 G00 X90 Z90：该行用于承接上一动作，注意坐标和运动方式是否处于安全范围。\nN60 ___：第 3 空填 M05，主轴停止，通常放在安全退刀之后。\n【答案原因】标准答案为 G01 F M05。等价写法包括 G1 F M05，判分时已做大小写和空格兼容。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G01/F/M05 基础",
    "knowledgePoints": [
      "G01/F/M05 基础",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G01/F/M05 基础",
      "code_fill"
    ]
  },
  {
    "id": "skjg_015",
    "levelId": "cnc-3",
    "text": "补全加工中心钻孔前的工件坐标系、安全高度和冷却液指令，答案按空格分隔。（情境 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全加工中心钻孔前的工件坐标系、安全高度和冷却液指令，答案按空格分隔。（情境 4）",
    "promptCode": "N10 G90 ___\nN20 G00 X30 Y18 ___\nN30 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G54 Z5 M08",
    "acceptableAnswers": [
      "G54 Z5 M08",
      "G54 Z5.0 M08"
    ],
    "fillAnswers": [
      "G54 Z5 M08",
      "G54 Z5.0 M08"
    ],
    "answerText": "G54 Z5 M08",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 ___：第 1 空填 G54，调用常用工件坐标系，让程序坐标和实际工件零点对应。\nN20 G00 X30 Y18 ___：第 2 空填 Z5，表示安全高度，刀具仍在工件表面上方。\nN30 ___：第 3 空填 M08，打开切削液，常用于钻削或铣削前。\n【答案原因】标准答案为 G54 Z5 M08。等价写法包括 G54 Z5.0 M08，判分时已做大小写和空格兼容。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G54/Z 安全高度/M08",
    "knowledgePoints": [
      "G54/Z 安全高度/M08",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G54/Z 安全高度/M08",
      "code_fill"
    ]
  },
  {
    "id": "skjg_016",
    "levelId": "cnc-1",
    "text": "补全程序结束前的安全退刀、关冷却液和程序结束指令，答案按空格分隔。（情境 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全程序结束前的安全退刀、关冷却液和程序结束指令，答案按空格分隔。（情境 4）",
    "promptCode": "N80 ___ Z60\nN90 ___\nN100 M05\nN110 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G00 M09 M30",
    "acceptableAnswers": [
      "G00 M09 M30",
      "G0 M09 M30"
    ],
    "fillAnswers": [
      "G00 M09 M30",
      "G0 M09 M30"
    ],
    "answerText": "G00 M09 M30",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN80 ___ Z60：第 1 空填 G00，快速定位或快速退刀，只适合空行程移动。\nN90 ___：第 2 空填 M09，关闭切削液，通常放在结束段。\nN100 M05：该行用于承接上一动作，注意坐标和运动方式是否处于安全范围。\nN110 ___：第 3 空填 M30，程序结束并复位。\n【答案原因】标准答案为 G00 M09 M30。等价写法包括 G0 M09 M30，判分时已做大小写和空格兼容。\n【错误风险】结束段如果不先退刀，刀具可能停在工件或夹具附近；如果漏写 M09，切削液会继续喷淋；如果漏写 M05 或 M30，主轴和程序状态不清，影响下一次安全操作。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "退刀/M09/M30",
    "knowledgePoints": [
      "退刀/M09/M30",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "退刀/M09/M30",
      "code_fill"
    ]
  },
  {
    "id": "skjg_017",
    "levelId": "cnc-2",
    "text": "补全程序中的绝对编程、快速定位和主轴正转指令，答案按空格分隔。（情境 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全程序中的绝对编程、快速定位和主轴正转指令，答案按空格分隔。（情境 5）",
    "promptCode": "N10 ___ G54\nN20 ___ X42 Z2\nN30 ___ S1000",
    "options": [],
    "answerIndex": -1,
    "answer": "G90 G00 M03",
    "acceptableAnswers": [
      "G90 G00 M03",
      "G90 G0 M03"
    ],
    "fillAnswers": [
      "G90 G00 M03",
      "G90 G0 M03"
    ],
    "answerText": "G90 G00 M03",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 ___ G54：第 1 空填 G90，表示绝对编程，后续 X/Y/Z 坐标按工件坐标系零点来读。\nN20 ___ X42 Z2：第 2 空填 G00，快速定位或快速退刀，只适合空行程移动。\nN30 ___ S1000：第 3 空填 M03，主轴正转，必须在切削进给前启动。\n【答案原因】标准答案为 G90 G00 M03。等价写法包括 G90 G0 M03，判分时已做大小写和空格兼容。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G90/G00/M03 基础",
    "knowledgePoints": [
      "G90/G00/M03 基础",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G90/G00/M03 基础",
      "code_fill"
    ]
  },
  {
    "id": "skjg_018",
    "levelId": "cnc-3",
    "text": "补全车削外圆程序中的直线插补、进给量和主轴停止指令，答案按空格分隔。（情境 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全车削外圆程序中的直线插补、进给量和主轴停止指令，答案按空格分隔。（情境 5）",
    "promptCode": "N40 ___ X30 Z-40 ___0.15\nN50 G00 X100 Z80\nN60 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G01 F M05",
    "acceptableAnswers": [
      "G01 F M05",
      "G1 F M05"
    ],
    "fillAnswers": [
      "G01 F M05",
      "G1 F M05"
    ],
    "answerText": "G01 F M05",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN40 ___ X30 Z-40 ___0.15：第 1 空填 G01，直线插补切削，配合 F 进给速度使用；第 2 空填 F，表示这里应补进给地址字 F，后面的数值才会被系统理解为进给。\nN50 G00 X100 Z80：该行用于承接上一动作，注意坐标和运动方式是否处于安全范围。\nN60 ___：第 3 空填 M05，主轴停止，通常放在安全退刀之后。\n【答案原因】标准答案为 G01 F M05。等价写法包括 G1 F M05，判分时已做大小写和空格兼容。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G01/F/M05 基础",
    "knowledgePoints": [
      "G01/F/M05 基础",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G01/F/M05 基础",
      "code_fill"
    ]
  },
  {
    "id": "skjg_019",
    "levelId": "cnc-1",
    "text": "补全加工中心钻孔前的工件坐标系、安全高度和冷却液指令，答案按空格分隔。（情境 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全加工中心钻孔前的工件坐标系、安全高度和冷却液指令，答案按空格分隔。（情境 5）",
    "promptCode": "N10 G90 ___\nN20 G00 X40 Y25 ___\nN30 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G54 Z5 M08",
    "acceptableAnswers": [
      "G54 Z5 M08",
      "G54 Z5.0 M08"
    ],
    "fillAnswers": [
      "G54 Z5 M08",
      "G54 Z5.0 M08"
    ],
    "answerText": "G54 Z5 M08",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 ___：第 1 空填 G54，调用常用工件坐标系，让程序坐标和实际工件零点对应。\nN20 G00 X40 Y25 ___：第 2 空填 Z5，表示安全高度，刀具仍在工件表面上方。\nN30 ___：第 3 空填 M08，打开切削液，常用于钻削或铣削前。\n【答案原因】标准答案为 G54 Z5 M08。等价写法包括 G54 Z5.0 M08，判分时已做大小写和空格兼容。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G54/Z 安全高度/M08",
    "knowledgePoints": [
      "G54/Z 安全高度/M08",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G54/Z 安全高度/M08",
      "code_fill"
    ]
  },
  {
    "id": "skjg_020",
    "levelId": "cnc-2",
    "text": "补全程序结束前的安全退刀、关冷却液和程序结束指令，答案按空格分隔。（情境 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全程序结束前的安全退刀、关冷却液和程序结束指令，答案按空格分隔。（情境 5）",
    "promptCode": "N80 ___ X100 Z80\nN90 ___\nN100 M05\nN110 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G00 M09 M30",
    "acceptableAnswers": [
      "G00 M09 M30",
      "G0 M09 M30"
    ],
    "fillAnswers": [
      "G00 M09 M30",
      "G0 M09 M30"
    ],
    "answerText": "G00 M09 M30",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN80 ___ X100 Z80：第 1 空填 G00，快速定位或快速退刀，只适合空行程移动。\nN90 ___：第 2 空填 M09，关闭切削液，通常放在结束段。\nN100 M05：该行用于承接上一动作，注意坐标和运动方式是否处于安全范围。\nN110 ___：第 3 空填 M30，程序结束并复位。\n【答案原因】标准答案为 G00 M09 M30。等价写法包括 G0 M09 M30，判分时已做大小写和空格兼容。\n【错误风险】结束段如果不先退刀，刀具可能停在工件或夹具附近；如果漏写 M09，切削液会继续喷淋；如果漏写 M05 或 M30，主轴和程序状态不清，影响下一次安全操作。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "退刀/M09/M30",
    "knowledgePoints": [
      "退刀/M09/M30",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "退刀/M09/M30",
      "code_fill"
    ]
  },
  {
    "id": "skjg_021",
    "levelId": "cnc-3",
    "text": "补全程序中的绝对编程、快速定位和主轴正转指令，答案按空格分隔。（情境 6）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全程序中的绝对编程、快速定位和主轴正转指令，答案按空格分隔。（情境 6）",
    "promptCode": "N10 ___ G54\nN20 ___ X28 Z2.5\nN30 ___ S750",
    "options": [],
    "answerIndex": -1,
    "answer": "G90 G00 M03",
    "acceptableAnswers": [
      "G90 G00 M03",
      "G90 G0 M03"
    ],
    "fillAnswers": [
      "G90 G00 M03",
      "G90 G0 M03"
    ],
    "answerText": "G90 G00 M03",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 ___ G54：第 1 空填 G90，表示绝对编程，后续 X/Y/Z 坐标按工件坐标系零点来读。\nN20 ___ X28 Z2.5：第 2 空填 G00，快速定位或快速退刀，只适合空行程移动。\nN30 ___ S750：第 3 空填 M03，主轴正转，必须在切削进给前启动。\n【答案原因】标准答案为 G90 G00 M03。等价写法包括 G90 G0 M03，判分时已做大小写和空格兼容。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G90/G00/M03 基础",
    "knowledgePoints": [
      "G90/G00/M03 基础",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G90/G00/M03 基础",
      "code_fill"
    ]
  },
  {
    "id": "skjg_022",
    "levelId": "cnc-1",
    "text": "补全车削外圆程序中的直线插补、进给量和主轴停止指令，答案按空格分隔。（情境 6）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全车削外圆程序中的直线插补、进给量和主轴停止指令，答案按空格分隔。（情境 6）",
    "promptCode": "N40 ___ X22 Z-22 ___0.12\nN50 G00 X70 Z70\nN60 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G01 F M05",
    "acceptableAnswers": [
      "G01 F M05",
      "G1 F M05"
    ],
    "fillAnswers": [
      "G01 F M05",
      "G1 F M05"
    ],
    "answerText": "G01 F M05",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN40 ___ X22 Z-22 ___0.12：第 1 空填 G01，直线插补切削，配合 F 进给速度使用；第 2 空填 F，表示这里应补进给地址字 F，后面的数值才会被系统理解为进给。\nN50 G00 X70 Z70：该行用于承接上一动作，注意坐标和运动方式是否处于安全范围。\nN60 ___：第 3 空填 M05，主轴停止，通常放在安全退刀之后。\n【答案原因】标准答案为 G01 F M05。等价写法包括 G1 F M05，判分时已做大小写和空格兼容。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G01/F/M05 基础",
    "knowledgePoints": [
      "G01/F/M05 基础",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G01/F/M05 基础",
      "code_fill"
    ]
  },
  {
    "id": "skjg_023",
    "levelId": "cnc-2",
    "text": "补全加工中心钻孔前的工件坐标系、安全高度和冷却液指令，答案按空格分隔。（情境 6）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全加工中心钻孔前的工件坐标系、安全高度和冷却液指令，答案按空格分隔。（情境 6）",
    "promptCode": "N10 G90 ___\nN20 G00 X18 Y12 ___\nN30 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G54 Z5 M08",
    "acceptableAnswers": [
      "G54 Z5 M08",
      "G54 Z5.0 M08"
    ],
    "fillAnswers": [
      "G54 Z5 M08",
      "G54 Z5.0 M08"
    ],
    "answerText": "G54 Z5 M08",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 ___：第 1 空填 G54，调用常用工件坐标系，让程序坐标和实际工件零点对应。\nN20 G00 X18 Y12 ___：第 2 空填 Z5，表示安全高度，刀具仍在工件表面上方。\nN30 ___：第 3 空填 M08，打开切削液，常用于钻削或铣削前。\n【答案原因】标准答案为 G54 Z5 M08。等价写法包括 G54 Z5.0 M08，判分时已做大小写和空格兼容。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G54/Z 安全高度/M08",
    "knowledgePoints": [
      "G54/Z 安全高度/M08",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G54/Z 安全高度/M08",
      "code_fill"
    ]
  },
  {
    "id": "skjg_024",
    "levelId": "cnc-3",
    "text": "补全程序结束前的安全退刀、关冷却液和程序结束指令，答案按空格分隔。（情境 6）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全程序结束前的安全退刀、关冷却液和程序结束指令，答案按空格分隔。（情境 6）",
    "promptCode": "N80 ___ Z80\nN90 ___\nN100 M05\nN110 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G00 M09 M30",
    "acceptableAnswers": [
      "G00 M09 M30",
      "G0 M09 M30"
    ],
    "fillAnswers": [
      "G00 M09 M30",
      "G0 M09 M30"
    ],
    "answerText": "G00 M09 M30",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN80 ___ Z80：第 1 空填 G00，快速定位或快速退刀，只适合空行程移动。\nN90 ___：第 2 空填 M09，关闭切削液，通常放在结束段。\nN100 M05：该行用于承接上一动作，注意坐标和运动方式是否处于安全范围。\nN110 ___：第 3 空填 M30，程序结束并复位。\n【答案原因】标准答案为 G00 M09 M30。等价写法包括 G0 M09 M30，判分时已做大小写和空格兼容。\n【错误风险】结束段如果不先退刀，刀具可能停在工件或夹具附近；如果漏写 M09，切削液会继续喷淋；如果漏写 M05 或 M30，主轴和程序状态不清，影响下一次安全操作。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "退刀/M09/M30",
    "knowledgePoints": [
      "退刀/M09/M30",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "退刀/M09/M30",
      "code_fill"
    ]
  },
  {
    "id": "skjg_025",
    "levelId": "cnc-1",
    "text": "补全程序中的绝对编程、快速定位和主轴正转指令，答案按空格分隔。（情境 7）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全程序中的绝对编程、快速定位和主轴正转指令，答案按空格分隔。（情境 7）",
    "promptCode": "N10 ___ G54\nN20 ___ X55 Z3\nN30 ___ S1200",
    "options": [],
    "answerIndex": -1,
    "answer": "G90 G00 M03",
    "acceptableAnswers": [
      "G90 G00 M03",
      "G90 G0 M03"
    ],
    "fillAnswers": [
      "G90 G00 M03",
      "G90 G0 M03"
    ],
    "answerText": "G90 G00 M03",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 ___ G54：第 1 空填 G90，表示绝对编程，后续 X/Y/Z 坐标按工件坐标系零点来读。\nN20 ___ X55 Z3：第 2 空填 G00，快速定位或快速退刀，只适合空行程移动。\nN30 ___ S1200：第 3 空填 M03，主轴正转，必须在切削进给前启动。\n【答案原因】标准答案为 G90 G00 M03。等价写法包括 G90 G0 M03，判分时已做大小写和空格兼容。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G90/G00/M03 基础",
    "knowledgePoints": [
      "G90/G00/M03 基础",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G90/G00/M03 基础",
      "code_fill"
    ]
  },
  {
    "id": "skjg_026",
    "levelId": "cnc-2",
    "text": "补全车削外圆程序中的直线插补、进给量和主轴停止指令，答案按空格分隔。（情境 7）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全车削外圆程序中的直线插补、进给量和主轴停止指令，答案按空格分隔。（情境 7）",
    "promptCode": "N40 ___ X32 Z-30 ___0.20\nN50 G00 X85 Z85\nN60 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G01 F M05",
    "acceptableAnswers": [
      "G01 F M05",
      "G1 F M05"
    ],
    "fillAnswers": [
      "G01 F M05",
      "G1 F M05"
    ],
    "answerText": "G01 F M05",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN40 ___ X32 Z-30 ___0.20：第 1 空填 G01，直线插补切削，配合 F 进给速度使用；第 2 空填 F，表示这里应补进给地址字 F，后面的数值才会被系统理解为进给。\nN50 G00 X85 Z85：该行用于承接上一动作，注意坐标和运动方式是否处于安全范围。\nN60 ___：第 3 空填 M05，主轴停止，通常放在安全退刀之后。\n【答案原因】标准答案为 G01 F M05。等价写法包括 G1 F M05，判分时已做大小写和空格兼容。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G01/F/M05 基础",
    "knowledgePoints": [
      "G01/F/M05 基础",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G01/F/M05 基础",
      "code_fill"
    ]
  },
  {
    "id": "skjg_027",
    "levelId": "cnc-3",
    "text": "补全加工中心钻孔前的工件坐标系、安全高度和冷却液指令，答案按空格分隔。（情境 7）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全加工中心钻孔前的工件坐标系、安全高度和冷却液指令，答案按空格分隔。（情境 7）",
    "promptCode": "N10 G90 ___\nN20 G00 X55 Y20 ___\nN30 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G54 Z5 M08",
    "acceptableAnswers": [
      "G54 Z5 M08",
      "G54 Z5.0 M08"
    ],
    "fillAnswers": [
      "G54 Z5 M08",
      "G54 Z5.0 M08"
    ],
    "answerText": "G54 Z5 M08",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 ___：第 1 空填 G54，调用常用工件坐标系，让程序坐标和实际工件零点对应。\nN20 G00 X55 Y20 ___：第 2 空填 Z5，表示安全高度，刀具仍在工件表面上方。\nN30 ___：第 3 空填 M08，打开切削液，常用于钻削或铣削前。\n【答案原因】标准答案为 G54 Z5 M08。等价写法包括 G54 Z5.0 M08，判分时已做大小写和空格兼容。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G54/Z 安全高度/M08",
    "knowledgePoints": [
      "G54/Z 安全高度/M08",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G54/Z 安全高度/M08",
      "code_fill"
    ]
  },
  {
    "id": "skjg_028",
    "levelId": "cnc-1",
    "text": "补全程序结束前的安全退刀、关冷却液和程序结束指令，答案按空格分隔。（情境 7）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全程序结束前的安全退刀、关冷却液和程序结束指令，答案按空格分隔。（情境 7）",
    "promptCode": "N80 ___ X0 Y0 Z50\nN90 ___\nN100 M05\nN110 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G00 M09 M30",
    "acceptableAnswers": [
      "G00 M09 M30",
      "G0 M09 M30"
    ],
    "fillAnswers": [
      "G00 M09 M30",
      "G0 M09 M30"
    ],
    "answerText": "G00 M09 M30",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN80 ___ X0 Y0 Z50：第 1 空填 G00，快速定位或快速退刀，只适合空行程移动。\nN90 ___：第 2 空填 M09，关闭切削液，通常放在结束段。\nN100 M05：该行用于承接上一动作，注意坐标和运动方式是否处于安全范围。\nN110 ___：第 3 空填 M30，程序结束并复位。\n【答案原因】标准答案为 G00 M09 M30。等价写法包括 G0 M09 M30，判分时已做大小写和空格兼容。\n【错误风险】结束段如果不先退刀，刀具可能停在工件或夹具附近；如果漏写 M09，切削液会继续喷淋；如果漏写 M05 或 M30，主轴和程序状态不清，影响下一次安全操作。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "退刀/M09/M30",
    "knowledgePoints": [
      "退刀/M09/M30",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "退刀/M09/M30",
      "code_fill"
    ]
  },
  {
    "id": "skjg_029",
    "levelId": "cnc-2",
    "text": "补全程序中的绝对编程、快速定位和主轴正转指令，答案按空格分隔。（情境 8）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全程序中的绝对编程、快速定位和主轴正转指令，答案按空格分隔。（情境 8）",
    "promptCode": "N10 ___ G54\nN20 ___ X36 Z3\nN30 ___ S900",
    "options": [],
    "answerIndex": -1,
    "answer": "G90 G00 M03",
    "acceptableAnswers": [
      "G90 G00 M03",
      "G90 G0 M03"
    ],
    "fillAnswers": [
      "G90 G00 M03",
      "G90 G0 M03"
    ],
    "answerText": "G90 G00 M03",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 ___ G54：第 1 空填 G90，表示绝对编程，后续 X/Y/Z 坐标按工件坐标系零点来读。\nN20 ___ X36 Z3：第 2 空填 G00，快速定位或快速退刀，只适合空行程移动。\nN30 ___ S900：第 3 空填 M03，主轴正转，必须在切削进给前启动。\n【答案原因】标准答案为 G90 G00 M03。等价写法包括 G90 G0 M03，判分时已做大小写和空格兼容。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G90/G00/M03 基础",
    "knowledgePoints": [
      "G90/G00/M03 基础",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G90/G00/M03 基础",
      "code_fill"
    ]
  },
  {
    "id": "skjg_030",
    "levelId": "cnc-3",
    "text": "补全车削外圆程序中的直线插补、进给量和主轴停止指令，答案按空格分隔。（情境 8）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全车削外圆程序中的直线插补、进给量和主轴停止指令，答案按空格分隔。（情境 8）",
    "promptCode": "N40 ___ X26 Z-28 ___0.18\nN50 G00 X90 Z90\nN60 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G01 F M05",
    "acceptableAnswers": [
      "G01 F M05",
      "G1 F M05"
    ],
    "fillAnswers": [
      "G01 F M05",
      "G1 F M05"
    ],
    "answerText": "G01 F M05",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN40 ___ X26 Z-28 ___0.18：第 1 空填 G01，直线插补切削，配合 F 进给速度使用；第 2 空填 F，表示这里应补进给地址字 F，后面的数值才会被系统理解为进给。\nN50 G00 X90 Z90：该行用于承接上一动作，注意坐标和运动方式是否处于安全范围。\nN60 ___：第 3 空填 M05，主轴停止，通常放在安全退刀之后。\n【答案原因】标准答案为 G01 F M05。等价写法包括 G1 F M05，判分时已做大小写和空格兼容。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G01/F/M05 基础",
    "knowledgePoints": [
      "G01/F/M05 基础",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G01/F/M05 基础",
      "code_fill"
    ]
  },
  {
    "id": "skjg_031",
    "levelId": "cnc-1",
    "text": "补全加工中心钻孔前的工件坐标系、安全高度和冷却液指令，答案按空格分隔。（情境 8）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全加工中心钻孔前的工件坐标系、安全高度和冷却液指令，答案按空格分隔。（情境 8）",
    "promptCode": "N10 G90 ___\nN20 G00 X30 Y18 ___\nN30 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G54 Z5 M08",
    "acceptableAnswers": [
      "G54 Z5 M08",
      "G54 Z5.0 M08"
    ],
    "fillAnswers": [
      "G54 Z5 M08",
      "G54 Z5.0 M08"
    ],
    "answerText": "G54 Z5 M08",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 ___：第 1 空填 G54，调用常用工件坐标系，让程序坐标和实际工件零点对应。\nN20 G00 X30 Y18 ___：第 2 空填 Z5，表示安全高度，刀具仍在工件表面上方。\nN30 ___：第 3 空填 M08，打开切削液，常用于钻削或铣削前。\n【答案原因】标准答案为 G54 Z5 M08。等价写法包括 G54 Z5.0 M08，判分时已做大小写和空格兼容。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G54/Z 安全高度/M08",
    "knowledgePoints": [
      "G54/Z 安全高度/M08",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G54/Z 安全高度/M08",
      "code_fill"
    ]
  },
  {
    "id": "skjg_032",
    "levelId": "cnc-2",
    "text": "补全程序结束前的安全退刀、关冷却液和程序结束指令，答案按空格分隔。（情境 8）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全程序结束前的安全退刀、关冷却液和程序结束指令，答案按空格分隔。（情境 8）",
    "promptCode": "N80 ___ Z60\nN90 ___\nN100 M05\nN110 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G00 M09 M30",
    "acceptableAnswers": [
      "G00 M09 M30",
      "G0 M09 M30"
    ],
    "fillAnswers": [
      "G00 M09 M30",
      "G0 M09 M30"
    ],
    "answerText": "G00 M09 M30",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN80 ___ Z60：第 1 空填 G00，快速定位或快速退刀，只适合空行程移动。\nN90 ___：第 2 空填 M09，关闭切削液，通常放在结束段。\nN100 M05：该行用于承接上一动作，注意坐标和运动方式是否处于安全范围。\nN110 ___：第 3 空填 M30，程序结束并复位。\n【答案原因】标准答案为 G00 M09 M30。等价写法包括 G0 M09 M30，判分时已做大小写和空格兼容。\n【错误风险】结束段如果不先退刀，刀具可能停在工件或夹具附近；如果漏写 M09，切削液会继续喷淋；如果漏写 M05 或 M30，主轴和程序状态不清，影响下一次安全操作。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "退刀/M09/M30",
    "knowledgePoints": [
      "退刀/M09/M30",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "退刀/M09/M30",
      "code_fill"
    ]
  },
  {
    "id": "skjg_033",
    "levelId": "cnc-3",
    "text": "补全程序中的绝对编程、快速定位和主轴正转指令，答案按空格分隔。（情境 9）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全程序中的绝对编程、快速定位和主轴正转指令，答案按空格分隔。（情境 9）",
    "promptCode": "N10 ___ G54\nN20 ___ X42 Z2\nN30 ___ S1000",
    "options": [],
    "answerIndex": -1,
    "answer": "G90 G00 M03",
    "acceptableAnswers": [
      "G90 G00 M03",
      "G90 G0 M03"
    ],
    "fillAnswers": [
      "G90 G00 M03",
      "G90 G0 M03"
    ],
    "answerText": "G90 G00 M03",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 ___ G54：第 1 空填 G90，表示绝对编程，后续 X/Y/Z 坐标按工件坐标系零点来读。\nN20 ___ X42 Z2：第 2 空填 G00，快速定位或快速退刀，只适合空行程移动。\nN30 ___ S1000：第 3 空填 M03，主轴正转，必须在切削进给前启动。\n【答案原因】标准答案为 G90 G00 M03。等价写法包括 G90 G0 M03，判分时已做大小写和空格兼容。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G90/G00/M03 基础",
    "knowledgePoints": [
      "G90/G00/M03 基础",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G90/G00/M03 基础",
      "code_fill"
    ]
  },
  {
    "id": "skjg_034",
    "levelId": "cnc-1",
    "text": "补全车削外圆程序中的直线插补、进给量和主轴停止指令，答案按空格分隔。（情境 9）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全车削外圆程序中的直线插补、进给量和主轴停止指令，答案按空格分隔。（情境 9）",
    "promptCode": "N40 ___ X30 Z-40 ___0.15\nN50 G00 X100 Z80\nN60 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G01 F M05",
    "acceptableAnswers": [
      "G01 F M05",
      "G1 F M05"
    ],
    "fillAnswers": [
      "G01 F M05",
      "G1 F M05"
    ],
    "answerText": "G01 F M05",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN40 ___ X30 Z-40 ___0.15：第 1 空填 G01，直线插补切削，配合 F 进给速度使用；第 2 空填 F，表示这里应补进给地址字 F，后面的数值才会被系统理解为进给。\nN50 G00 X100 Z80：该行用于承接上一动作，注意坐标和运动方式是否处于安全范围。\nN60 ___：第 3 空填 M05，主轴停止，通常放在安全退刀之后。\n【答案原因】标准答案为 G01 F M05。等价写法包括 G1 F M05，判分时已做大小写和空格兼容。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G01/F/M05 基础",
    "knowledgePoints": [
      "G01/F/M05 基础",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G01/F/M05 基础",
      "code_fill"
    ]
  },
  {
    "id": "skjg_035",
    "levelId": "cnc-2",
    "text": "补全加工中心钻孔前的工件坐标系、安全高度和冷却液指令，答案按空格分隔。（情境 9）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全加工中心钻孔前的工件坐标系、安全高度和冷却液指令，答案按空格分隔。（情境 9）",
    "promptCode": "N10 G90 ___\nN20 G00 X40 Y25 ___\nN30 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G54 Z5 M08",
    "acceptableAnswers": [
      "G54 Z5 M08",
      "G54 Z5.0 M08"
    ],
    "fillAnswers": [
      "G54 Z5 M08",
      "G54 Z5.0 M08"
    ],
    "answerText": "G54 Z5 M08",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 ___：第 1 空填 G54，调用常用工件坐标系，让程序坐标和实际工件零点对应。\nN20 G00 X40 Y25 ___：第 2 空填 Z5，表示安全高度，刀具仍在工件表面上方。\nN30 ___：第 3 空填 M08，打开切削液，常用于钻削或铣削前。\n【答案原因】标准答案为 G54 Z5 M08。等价写法包括 G54 Z5.0 M08，判分时已做大小写和空格兼容。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G54/Z 安全高度/M08",
    "knowledgePoints": [
      "G54/Z 安全高度/M08",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G54/Z 安全高度/M08",
      "code_fill"
    ]
  },
  {
    "id": "skjg_036",
    "levelId": "cnc-3",
    "text": "补全程序结束前的安全退刀、关冷却液和程序结束指令，答案按空格分隔。（情境 9）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全程序结束前的安全退刀、关冷却液和程序结束指令，答案按空格分隔。（情境 9）",
    "promptCode": "N80 ___ X100 Z80\nN90 ___\nN100 M05\nN110 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G00 M09 M30",
    "acceptableAnswers": [
      "G00 M09 M30",
      "G0 M09 M30"
    ],
    "fillAnswers": [
      "G00 M09 M30",
      "G0 M09 M30"
    ],
    "answerText": "G00 M09 M30",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN80 ___ X100 Z80：第 1 空填 G00，快速定位或快速退刀，只适合空行程移动。\nN90 ___：第 2 空填 M09，关闭切削液，通常放在结束段。\nN100 M05：该行用于承接上一动作，注意坐标和运动方式是否处于安全范围。\nN110 ___：第 3 空填 M30，程序结束并复位。\n【答案原因】标准答案为 G00 M09 M30。等价写法包括 G0 M09 M30，判分时已做大小写和空格兼容。\n【错误风险】结束段如果不先退刀，刀具可能停在工件或夹具附近；如果漏写 M09，切削液会继续喷淋；如果漏写 M05 或 M30，主轴和程序状态不清，影响下一次安全操作。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "退刀/M09/M30",
    "knowledgePoints": [
      "退刀/M09/M30",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "退刀/M09/M30",
      "code_fill"
    ]
  },
  {
    "id": "skjg_037",
    "levelId": "cnc-1",
    "text": "补全程序中的绝对编程、快速定位和主轴正转指令，答案按空格分隔。（情境 10）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全程序中的绝对编程、快速定位和主轴正转指令，答案按空格分隔。（情境 10）",
    "promptCode": "N10 ___ G54\nN20 ___ X28 Z2.5\nN30 ___ S750",
    "options": [],
    "answerIndex": -1,
    "answer": "G90 G00 M03",
    "acceptableAnswers": [
      "G90 G00 M03",
      "G90 G0 M03"
    ],
    "fillAnswers": [
      "G90 G00 M03",
      "G90 G0 M03"
    ],
    "answerText": "G90 G00 M03",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 ___ G54：第 1 空填 G90，表示绝对编程，后续 X/Y/Z 坐标按工件坐标系零点来读。\nN20 ___ X28 Z2.5：第 2 空填 G00，快速定位或快速退刀，只适合空行程移动。\nN30 ___ S750：第 3 空填 M03，主轴正转，必须在切削进给前启动。\n【答案原因】标准答案为 G90 G00 M03。等价写法包括 G90 G0 M03，判分时已做大小写和空格兼容。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G90/G00/M03 基础",
    "knowledgePoints": [
      "G90/G00/M03 基础",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G90/G00/M03 基础",
      "code_fill"
    ]
  },
  {
    "id": "skjg_038",
    "levelId": "cnc-2",
    "text": "补全车削外圆程序中的直线插补、进给量和主轴停止指令，答案按空格分隔。（情境 10）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全车削外圆程序中的直线插补、进给量和主轴停止指令，答案按空格分隔。（情境 10）",
    "promptCode": "N40 ___ X22 Z-22 ___0.12\nN50 G00 X70 Z70\nN60 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G01 F M05",
    "acceptableAnswers": [
      "G01 F M05",
      "G1 F M05"
    ],
    "fillAnswers": [
      "G01 F M05",
      "G1 F M05"
    ],
    "answerText": "G01 F M05",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN40 ___ X22 Z-22 ___0.12：第 1 空填 G01，直线插补切削，配合 F 进给速度使用；第 2 空填 F，表示这里应补进给地址字 F，后面的数值才会被系统理解为进给。\nN50 G00 X70 Z70：该行用于承接上一动作，注意坐标和运动方式是否处于安全范围。\nN60 ___：第 3 空填 M05，主轴停止，通常放在安全退刀之后。\n【答案原因】标准答案为 G01 F M05。等价写法包括 G1 F M05，判分时已做大小写和空格兼容。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G01/F/M05 基础",
    "knowledgePoints": [
      "G01/F/M05 基础",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G01/F/M05 基础",
      "code_fill"
    ]
  },
  {
    "id": "skjg_039",
    "levelId": "cnc-3",
    "text": "补全加工中心钻孔前的工件坐标系、安全高度和冷却液指令，答案按空格分隔。（情境 10）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全加工中心钻孔前的工件坐标系、安全高度和冷却液指令，答案按空格分隔。（情境 10）",
    "promptCode": "N10 G90 ___\nN20 G00 X18 Y12 ___\nN30 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G54 Z5 M08",
    "acceptableAnswers": [
      "G54 Z5 M08",
      "G54 Z5.0 M08"
    ],
    "fillAnswers": [
      "G54 Z5 M08",
      "G54 Z5.0 M08"
    ],
    "answerText": "G54 Z5 M08",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 ___：第 1 空填 G54，调用常用工件坐标系，让程序坐标和实际工件零点对应。\nN20 G00 X18 Y12 ___：第 2 空填 Z5，表示安全高度，刀具仍在工件表面上方。\nN30 ___：第 3 空填 M08，打开切削液，常用于钻削或铣削前。\n【答案原因】标准答案为 G54 Z5 M08。等价写法包括 G54 Z5.0 M08，判分时已做大小写和空格兼容。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G54/Z 安全高度/M08",
    "knowledgePoints": [
      "G54/Z 安全高度/M08",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G54/Z 安全高度/M08",
      "code_fill"
    ]
  },
  {
    "id": "skjg_040",
    "levelId": "cnc-1",
    "text": "补全程序结束前的安全退刀、关冷却液和程序结束指令，答案按空格分隔。（情境 10）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_fill",
    "difficulty": "easy",
    "question": "补全程序结束前的安全退刀、关冷却液和程序结束指令，答案按空格分隔。（情境 10）",
    "promptCode": "N80 ___ Z80\nN90 ___\nN100 M05\nN110 ___",
    "options": [],
    "answerIndex": -1,
    "answer": "G00 M09 M30",
    "acceptableAnswers": [
      "G00 M09 M30",
      "G0 M09 M30"
    ],
    "fillAnswers": [
      "G00 M09 M30",
      "G0 M09 M30"
    ],
    "answerText": "G00 M09 M30",
    "explanation": "【程序含义】这是一道程序补全题，核心是把准备、定位、切削或结束动作放到正确程序段中。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN80 ___ Z80：第 1 空填 G00，快速定位或快速退刀，只适合空行程移动。\nN90 ___：第 2 空填 M09，关闭切削液，通常放在结束段。\nN100 M05：该行用于承接上一动作，注意坐标和运动方式是否处于安全范围。\nN110 ___：第 3 空填 M30，程序结束并复位。\n【答案原因】标准答案为 G00 M09 M30。等价写法包括 G0 M09 M30，判分时已做大小写和空格兼容。\n【错误风险】结束段如果不先退刀，刀具可能停在工件或夹具附近；如果漏写 M09，切削液会继续喷淋；如果漏写 M05 或 M30，主轴和程序状态不清，影响下一次安全操作。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "退刀/M09/M30",
    "knowledgePoints": [
      "退刀/M09/M30",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "退刀/M09/M30",
      "code_fill"
    ]
  },
  {
    "id": "skjg_041",
    "levelId": "cnc-2",
    "text": "下面程序最大的安全问题是什么？（纠错 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面程序最大的安全问题是什么？（纠错 1）",
    "promptCode": "N10 G90 G54\nN20 G01 X0 Y0 Z-4 F180\nN30 M03 S900",
    "options": [
      "主轴未启动就已进给切削",
      "用了绝对编程",
      "调用了 G54",
      "进给速度不能写 F"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G01 X0 Y0 Z-4 F180：直线插补切削，必须配合合适进给并避免快速撞入材料。\nN30 M03 S900：主轴正转，S 值给出转速。\n【答案原因】正确答案是 A 项“主轴未启动就已进给切削”。B 项“用了绝对编程”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“调用了 G54”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "主轴启动与切削顺序",
    "knowledgePoints": [
      "主轴启动与切削顺序",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "主轴启动与切削顺序",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_042",
    "levelId": "cnc-3",
    "text": "下面程序的明显问题应怎样判断？（纠错 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面程序的明显问题应怎样判断？（纠错 1）",
    "promptCode": "N10 G90 G54 M03 S900\nN20 G00 X30 Y15 Z-8\nN30 G01 X70 F120",
    "options": [
      "G00 快速移动到 Z-10，可能快速撞入工件",
      "M03 不能与 S 同行",
      "G54 只能用于车床",
      "F150 只能用于快速定位"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54 M03 S900：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X30 Y15 Z-8：快速定位或安全退刀，适合空行程移动。\nN30 G01 X70 F120：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“G00 快速移动到 Z-10，可能快速撞入工件”。B 项“M03 不能与 S 同行”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“G54 只能用于车床”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00/G01 使用风险",
    "knowledgePoints": [
      "G00/G01 使用风险",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00/G01 使用风险",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_043",
    "levelId": "cnc-1",
    "text": "这段结束程序还缺少什么关键动作？（纠错 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "这段结束程序还缺少什么关键动作？（纠错 1）",
    "promptCode": "N70 G00 X90 Z90\nN80 M30",
    "options": [
      "程序结束前缺少 M05 停主轴",
      "应删除安全退刀",
      "M30 必须写在第一行",
      "X100 Z100 必须用 G01"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN70 G00 X90 Z90：快速定位或安全退刀，适合空行程移动。\nN80 M30：程序结束并复位。\n【答案原因】正确答案是 A 项“程序结束前缺少 M05 停主轴”。B 项“应删除安全退刀”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“M30 必须写在第一行”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序结束安全",
    "knowledgePoints": [
      "程序结束安全",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序结束安全",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_044",
    "levelId": "cnc-2",
    "text": "下面铣削程序中最不合理的是哪一段？（纠错 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面铣削程序中最不合理的是哪一段？（纠错 1）",
    "promptCode": "N10 G90 G54\nN20 G00 X0 Y0 Z5\nN30 M03 S1000\nN40 G00 Z-2\nN50 G01 X45 F100",
    "options": [
      "N40 应用 G01 下刀而不是 G00 快速下刀",
      "N20 不应设置 Z5",
      "N30 不应启动主轴",
      "N50 不应有 F"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X0 Y0 Z5：快速定位或安全退刀，适合空行程移动。\nN30 M03 S1000：主轴正转，S 值给出转速。\nN40 G00 Z-2：快速定位或安全退刀，适合空行程移动。\nN50 G01 X45 F100：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“N40 应用 G01 下刀而不是 G00 快速下刀”。B 项“N20 不应设置 Z5”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“N30 不应启动主轴”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "下刀方式",
    "knowledgePoints": [
      "下刀方式",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "下刀方式",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_045",
    "levelId": "cnc-3",
    "text": "下面程序最大的安全问题是什么？（纠错 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面程序最大的安全问题是什么？（纠错 2）",
    "promptCode": "N10 G90 G54\nN20 G01 X0 Y0 Z-4 F180\nN30 M03 S900",
    "options": [
      "主轴未启动就已进给切削",
      "用了绝对编程",
      "调用了 G54",
      "进给速度不能写 F"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G01 X0 Y0 Z-4 F180：直线插补切削，必须配合合适进给并避免快速撞入材料。\nN30 M03 S900：主轴正转，S 值给出转速。\n【答案原因】正确答案是 A 项“主轴未启动就已进给切削”。B 项“用了绝对编程”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“调用了 G54”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "主轴启动与切削顺序",
    "knowledgePoints": [
      "主轴启动与切削顺序",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "主轴启动与切削顺序",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_046",
    "levelId": "cnc-1",
    "text": "下面程序的明显问题应怎样判断？（纠错 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面程序的明显问题应怎样判断？（纠错 2）",
    "promptCode": "N10 G90 G54 M03 S900\nN20 G00 X30 Y15 Z-8\nN30 G01 X70 F120",
    "options": [
      "G00 快速移动到 Z-10，可能快速撞入工件",
      "M03 不能与 S 同行",
      "G54 只能用于车床",
      "F150 只能用于快速定位"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54 M03 S900：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X30 Y15 Z-8：快速定位或安全退刀，适合空行程移动。\nN30 G01 X70 F120：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“G00 快速移动到 Z-10，可能快速撞入工件”。B 项“M03 不能与 S 同行”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“G54 只能用于车床”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00/G01 使用风险",
    "knowledgePoints": [
      "G00/G01 使用风险",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00/G01 使用风险",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_047",
    "levelId": "cnc-2",
    "text": "这段结束程序还缺少什么关键动作？（纠错 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "这段结束程序还缺少什么关键动作？（纠错 2）",
    "promptCode": "N70 G00 X90 Z90\nN80 M30",
    "options": [
      "程序结束前缺少 M05 停主轴",
      "应删除安全退刀",
      "M30 必须写在第一行",
      "X100 Z100 必须用 G01"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN70 G00 X90 Z90：快速定位或安全退刀，适合空行程移动。\nN80 M30：程序结束并复位。\n【答案原因】正确答案是 A 项“程序结束前缺少 M05 停主轴”。B 项“应删除安全退刀”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“M30 必须写在第一行”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序结束安全",
    "knowledgePoints": [
      "程序结束安全",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序结束安全",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_048",
    "levelId": "cnc-3",
    "text": "下面铣削程序中最不合理的是哪一段？（纠错 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面铣削程序中最不合理的是哪一段？（纠错 2）",
    "promptCode": "N10 G90 G54\nN20 G00 X0 Y0 Z5\nN30 M03 S1000\nN40 G00 Z-2\nN50 G01 X45 F100",
    "options": [
      "N40 应用 G01 下刀而不是 G00 快速下刀",
      "N20 不应设置 Z5",
      "N30 不应启动主轴",
      "N50 不应有 F"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X0 Y0 Z5：快速定位或安全退刀，适合空行程移动。\nN30 M03 S1000：主轴正转，S 值给出转速。\nN40 G00 Z-2：快速定位或安全退刀，适合空行程移动。\nN50 G01 X45 F100：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“N40 应用 G01 下刀而不是 G00 快速下刀”。B 项“N20 不应设置 Z5”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“N30 不应启动主轴”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "下刀方式",
    "knowledgePoints": [
      "下刀方式",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "下刀方式",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_049",
    "levelId": "cnc-1",
    "text": "下面程序最大的安全问题是什么？（纠错 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面程序最大的安全问题是什么？（纠错 3）",
    "promptCode": "N10 G90 G54\nN20 G01 X0 Y0 Z-4 F180\nN30 M03 S900",
    "options": [
      "主轴未启动就已进给切削",
      "用了绝对编程",
      "调用了 G54",
      "进给速度不能写 F"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G01 X0 Y0 Z-4 F180：直线插补切削，必须配合合适进给并避免快速撞入材料。\nN30 M03 S900：主轴正转，S 值给出转速。\n【答案原因】正确答案是 A 项“主轴未启动就已进给切削”。B 项“用了绝对编程”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“调用了 G54”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "主轴启动与切削顺序",
    "knowledgePoints": [
      "主轴启动与切削顺序",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "主轴启动与切削顺序",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_050",
    "levelId": "cnc-2",
    "text": "下面程序的明显问题应怎样判断？（纠错 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面程序的明显问题应怎样判断？（纠错 3）",
    "promptCode": "N10 G90 G54 M03 S900\nN20 G00 X30 Y15 Z-8\nN30 G01 X70 F120",
    "options": [
      "G00 快速移动到 Z-10，可能快速撞入工件",
      "M03 不能与 S 同行",
      "G54 只能用于车床",
      "F150 只能用于快速定位"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54 M03 S900：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X30 Y15 Z-8：快速定位或安全退刀，适合空行程移动。\nN30 G01 X70 F120：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“G00 快速移动到 Z-10，可能快速撞入工件”。B 项“M03 不能与 S 同行”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“G54 只能用于车床”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00/G01 使用风险",
    "knowledgePoints": [
      "G00/G01 使用风险",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00/G01 使用风险",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_051",
    "levelId": "cnc-3",
    "text": "这段结束程序还缺少什么关键动作？（纠错 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "这段结束程序还缺少什么关键动作？（纠错 3）",
    "promptCode": "N70 G00 X90 Z90\nN80 M30",
    "options": [
      "程序结束前缺少 M05 停主轴",
      "应删除安全退刀",
      "M30 必须写在第一行",
      "X100 Z100 必须用 G01"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN70 G00 X90 Z90：快速定位或安全退刀，适合空行程移动。\nN80 M30：程序结束并复位。\n【答案原因】正确答案是 A 项“程序结束前缺少 M05 停主轴”。B 项“应删除安全退刀”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“M30 必须写在第一行”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序结束安全",
    "knowledgePoints": [
      "程序结束安全",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序结束安全",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_052",
    "levelId": "cnc-1",
    "text": "下面铣削程序中最不合理的是哪一段？（纠错 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面铣削程序中最不合理的是哪一段？（纠错 3）",
    "promptCode": "N10 G90 G54\nN20 G00 X0 Y0 Z5\nN30 M03 S1000\nN40 G00 Z-2\nN50 G01 X45 F100",
    "options": [
      "N40 应用 G01 下刀而不是 G00 快速下刀",
      "N20 不应设置 Z5",
      "N30 不应启动主轴",
      "N50 不应有 F"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X0 Y0 Z5：快速定位或安全退刀，适合空行程移动。\nN30 M03 S1000：主轴正转，S 值给出转速。\nN40 G00 Z-2：快速定位或安全退刀，适合空行程移动。\nN50 G01 X45 F100：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“N40 应用 G01 下刀而不是 G00 快速下刀”。B 项“N20 不应设置 Z5”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“N30 不应启动主轴”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "下刀方式",
    "knowledgePoints": [
      "下刀方式",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "下刀方式",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_053",
    "levelId": "cnc-2",
    "text": "下面程序最大的安全问题是什么？（纠错 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面程序最大的安全问题是什么？（纠错 4）",
    "promptCode": "N10 G90 G54\nN20 G01 X0 Y0 Z-4 F180\nN30 M03 S900",
    "options": [
      "主轴未启动就已进给切削",
      "用了绝对编程",
      "调用了 G54",
      "进给速度不能写 F"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G01 X0 Y0 Z-4 F180：直线插补切削，必须配合合适进给并避免快速撞入材料。\nN30 M03 S900：主轴正转，S 值给出转速。\n【答案原因】正确答案是 A 项“主轴未启动就已进给切削”。B 项“用了绝对编程”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“调用了 G54”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "主轴启动与切削顺序",
    "knowledgePoints": [
      "主轴启动与切削顺序",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "主轴启动与切削顺序",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_054",
    "levelId": "cnc-3",
    "text": "下面程序的明显问题应怎样判断？（纠错 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面程序的明显问题应怎样判断？（纠错 4）",
    "promptCode": "N10 G90 G54 M03 S900\nN20 G00 X30 Y15 Z-8\nN30 G01 X70 F120",
    "options": [
      "G00 快速移动到 Z-10，可能快速撞入工件",
      "M03 不能与 S 同行",
      "G54 只能用于车床",
      "F150 只能用于快速定位"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54 M03 S900：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X30 Y15 Z-8：快速定位或安全退刀，适合空行程移动。\nN30 G01 X70 F120：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“G00 快速移动到 Z-10，可能快速撞入工件”。B 项“M03 不能与 S 同行”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“G54 只能用于车床”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00/G01 使用风险",
    "knowledgePoints": [
      "G00/G01 使用风险",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00/G01 使用风险",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_055",
    "levelId": "cnc-1",
    "text": "这段结束程序还缺少什么关键动作？（纠错 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "这段结束程序还缺少什么关键动作？（纠错 4）",
    "promptCode": "N70 G00 X90 Z90\nN80 M30",
    "options": [
      "程序结束前缺少 M05 停主轴",
      "应删除安全退刀",
      "M30 必须写在第一行",
      "X100 Z100 必须用 G01"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN70 G00 X90 Z90：快速定位或安全退刀，适合空行程移动。\nN80 M30：程序结束并复位。\n【答案原因】正确答案是 A 项“程序结束前缺少 M05 停主轴”。B 项“应删除安全退刀”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“M30 必须写在第一行”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序结束安全",
    "knowledgePoints": [
      "程序结束安全",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序结束安全",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_056",
    "levelId": "cnc-2",
    "text": "下面铣削程序中最不合理的是哪一段？（纠错 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面铣削程序中最不合理的是哪一段？（纠错 4）",
    "promptCode": "N10 G90 G54\nN20 G00 X0 Y0 Z5\nN30 M03 S1000\nN40 G00 Z-2\nN50 G01 X45 F100",
    "options": [
      "N40 应用 G01 下刀而不是 G00 快速下刀",
      "N20 不应设置 Z5",
      "N30 不应启动主轴",
      "N50 不应有 F"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X0 Y0 Z5：快速定位或安全退刀，适合空行程移动。\nN30 M03 S1000：主轴正转，S 值给出转速。\nN40 G00 Z-2：快速定位或安全退刀，适合空行程移动。\nN50 G01 X45 F100：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“N40 应用 G01 下刀而不是 G00 快速下刀”。B 项“N20 不应设置 Z5”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“N30 不应启动主轴”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "下刀方式",
    "knowledgePoints": [
      "下刀方式",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "下刀方式",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_057",
    "levelId": "cnc-3",
    "text": "下面程序最大的安全问题是什么？（纠错 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面程序最大的安全问题是什么？（纠错 5）",
    "promptCode": "N10 G90 G54\nN20 G01 X0 Y0 Z-4 F180\nN30 M03 S900",
    "options": [
      "主轴未启动就已进给切削",
      "用了绝对编程",
      "调用了 G54",
      "进给速度不能写 F"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G01 X0 Y0 Z-4 F180：直线插补切削，必须配合合适进给并避免快速撞入材料。\nN30 M03 S900：主轴正转，S 值给出转速。\n【答案原因】正确答案是 A 项“主轴未启动就已进给切削”。B 项“用了绝对编程”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“调用了 G54”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "主轴启动与切削顺序",
    "knowledgePoints": [
      "主轴启动与切削顺序",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "主轴启动与切削顺序",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_058",
    "levelId": "cnc-1",
    "text": "下面程序的明显问题应怎样判断？（纠错 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面程序的明显问题应怎样判断？（纠错 5）",
    "promptCode": "N10 G90 G54 M03 S900\nN20 G00 X30 Y15 Z-8\nN30 G01 X70 F120",
    "options": [
      "G00 快速移动到 Z-10，可能快速撞入工件",
      "M03 不能与 S 同行",
      "G54 只能用于车床",
      "F150 只能用于快速定位"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54 M03 S900：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X30 Y15 Z-8：快速定位或安全退刀，适合空行程移动。\nN30 G01 X70 F120：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“G00 快速移动到 Z-10，可能快速撞入工件”。B 项“M03 不能与 S 同行”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“G54 只能用于车床”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00/G01 使用风险",
    "knowledgePoints": [
      "G00/G01 使用风险",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00/G01 使用风险",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_059",
    "levelId": "cnc-2",
    "text": "这段结束程序还缺少什么关键动作？（纠错 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "这段结束程序还缺少什么关键动作？（纠错 5）",
    "promptCode": "N70 G00 X90 Z90\nN80 M30",
    "options": [
      "程序结束前缺少 M05 停主轴",
      "应删除安全退刀",
      "M30 必须写在第一行",
      "X100 Z100 必须用 G01"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN70 G00 X90 Z90：快速定位或安全退刀，适合空行程移动。\nN80 M30：程序结束并复位。\n【答案原因】正确答案是 A 项“程序结束前缺少 M05 停主轴”。B 项“应删除安全退刀”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“M30 必须写在第一行”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序结束安全",
    "knowledgePoints": [
      "程序结束安全",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序结束安全",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_060",
    "levelId": "cnc-3",
    "text": "下面铣削程序中最不合理的是哪一段？（纠错 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面铣削程序中最不合理的是哪一段？（纠错 5）",
    "promptCode": "N10 G90 G54\nN20 G00 X0 Y0 Z5\nN30 M03 S1000\nN40 G00 Z-2\nN50 G01 X45 F100",
    "options": [
      "N40 应用 G01 下刀而不是 G00 快速下刀",
      "N20 不应设置 Z5",
      "N30 不应启动主轴",
      "N50 不应有 F"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X0 Y0 Z5：快速定位或安全退刀，适合空行程移动。\nN30 M03 S1000：主轴正转，S 值给出转速。\nN40 G00 Z-2：快速定位或安全退刀，适合空行程移动。\nN50 G01 X45 F100：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“N40 应用 G01 下刀而不是 G00 快速下刀”。B 项“N20 不应设置 Z5”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“N30 不应启动主轴”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "下刀方式",
    "knowledgePoints": [
      "下刀方式",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "下刀方式",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_061",
    "levelId": "cnc-1",
    "text": "下面程序最大的安全问题是什么？（纠错 6）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面程序最大的安全问题是什么？（纠错 6）",
    "promptCode": "N10 G90 G54\nN20 G01 X0 Y0 Z-4 F180\nN30 M03 S900",
    "options": [
      "主轴未启动就已进给切削",
      "用了绝对编程",
      "调用了 G54",
      "进给速度不能写 F"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G01 X0 Y0 Z-4 F180：直线插补切削，必须配合合适进给并避免快速撞入材料。\nN30 M03 S900：主轴正转，S 值给出转速。\n【答案原因】正确答案是 A 项“主轴未启动就已进给切削”。B 项“用了绝对编程”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“调用了 G54”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "主轴启动与切削顺序",
    "knowledgePoints": [
      "主轴启动与切削顺序",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "主轴启动与切削顺序",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_062",
    "levelId": "cnc-2",
    "text": "下面程序的明显问题应怎样判断？（纠错 6）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面程序的明显问题应怎样判断？（纠错 6）",
    "promptCode": "N10 G90 G54 M03 S900\nN20 G00 X30 Y15 Z-8\nN30 G01 X70 F120",
    "options": [
      "G00 快速移动到 Z-10，可能快速撞入工件",
      "M03 不能与 S 同行",
      "G54 只能用于车床",
      "F150 只能用于快速定位"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54 M03 S900：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X30 Y15 Z-8：快速定位或安全退刀，适合空行程移动。\nN30 G01 X70 F120：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“G00 快速移动到 Z-10，可能快速撞入工件”。B 项“M03 不能与 S 同行”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“G54 只能用于车床”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00/G01 使用风险",
    "knowledgePoints": [
      "G00/G01 使用风险",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00/G01 使用风险",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_063",
    "levelId": "cnc-3",
    "text": "这段结束程序还缺少什么关键动作？（纠错 6）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "这段结束程序还缺少什么关键动作？（纠错 6）",
    "promptCode": "N70 G00 X90 Z90\nN80 M30",
    "options": [
      "程序结束前缺少 M05 停主轴",
      "应删除安全退刀",
      "M30 必须写在第一行",
      "X100 Z100 必须用 G01"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN70 G00 X90 Z90：快速定位或安全退刀，适合空行程移动。\nN80 M30：程序结束并复位。\n【答案原因】正确答案是 A 项“程序结束前缺少 M05 停主轴”。B 项“应删除安全退刀”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“M30 必须写在第一行”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序结束安全",
    "knowledgePoints": [
      "程序结束安全",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序结束安全",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_064",
    "levelId": "cnc-1",
    "text": "下面铣削程序中最不合理的是哪一段？（纠错 6）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面铣削程序中最不合理的是哪一段？（纠错 6）",
    "promptCode": "N10 G90 G54\nN20 G00 X0 Y0 Z5\nN30 M03 S1000\nN40 G00 Z-2\nN50 G01 X45 F100",
    "options": [
      "N40 应用 G01 下刀而不是 G00 快速下刀",
      "N20 不应设置 Z5",
      "N30 不应启动主轴",
      "N50 不应有 F"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X0 Y0 Z5：快速定位或安全退刀，适合空行程移动。\nN30 M03 S1000：主轴正转，S 值给出转速。\nN40 G00 Z-2：快速定位或安全退刀，适合空行程移动。\nN50 G01 X45 F100：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“N40 应用 G01 下刀而不是 G00 快速下刀”。B 项“N20 不应设置 Z5”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“N30 不应启动主轴”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "下刀方式",
    "knowledgePoints": [
      "下刀方式",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "下刀方式",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_065",
    "levelId": "cnc-2",
    "text": "下面程序最大的安全问题是什么？（纠错 7）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面程序最大的安全问题是什么？（纠错 7）",
    "promptCode": "N10 G90 G54\nN20 G01 X0 Y0 Z-4 F180\nN30 M03 S900",
    "options": [
      "主轴未启动就已进给切削",
      "用了绝对编程",
      "调用了 G54",
      "进给速度不能写 F"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G01 X0 Y0 Z-4 F180：直线插补切削，必须配合合适进给并避免快速撞入材料。\nN30 M03 S900：主轴正转，S 值给出转速。\n【答案原因】正确答案是 A 项“主轴未启动就已进给切削”。B 项“用了绝对编程”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“调用了 G54”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "主轴启动与切削顺序",
    "knowledgePoints": [
      "主轴启动与切削顺序",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "主轴启动与切削顺序",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_066",
    "levelId": "cnc-3",
    "text": "下面程序的明显问题应怎样判断？（纠错 7）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面程序的明显问题应怎样判断？（纠错 7）",
    "promptCode": "N10 G90 G54 M03 S900\nN20 G00 X30 Y15 Z-8\nN30 G01 X70 F120",
    "options": [
      "G00 快速移动到 Z-10，可能快速撞入工件",
      "M03 不能与 S 同行",
      "G54 只能用于车床",
      "F150 只能用于快速定位"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54 M03 S900：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X30 Y15 Z-8：快速定位或安全退刀，适合空行程移动。\nN30 G01 X70 F120：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“G00 快速移动到 Z-10，可能快速撞入工件”。B 项“M03 不能与 S 同行”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“G54 只能用于车床”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00/G01 使用风险",
    "knowledgePoints": [
      "G00/G01 使用风险",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00/G01 使用风险",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_067",
    "levelId": "cnc-1",
    "text": "这段结束程序还缺少什么关键动作？（纠错 7）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "这段结束程序还缺少什么关键动作？（纠错 7）",
    "promptCode": "N70 G00 X90 Z90\nN80 M30",
    "options": [
      "程序结束前缺少 M05 停主轴",
      "应删除安全退刀",
      "M30 必须写在第一行",
      "X100 Z100 必须用 G01"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN70 G00 X90 Z90：快速定位或安全退刀，适合空行程移动。\nN80 M30：程序结束并复位。\n【答案原因】正确答案是 A 项“程序结束前缺少 M05 停主轴”。B 项“应删除安全退刀”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“M30 必须写在第一行”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序结束安全",
    "knowledgePoints": [
      "程序结束安全",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序结束安全",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_068",
    "levelId": "cnc-2",
    "text": "下面铣削程序中最不合理的是哪一段？（纠错 7）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面铣削程序中最不合理的是哪一段？（纠错 7）",
    "promptCode": "N10 G90 G54\nN20 G00 X0 Y0 Z5\nN30 M03 S1000\nN40 G00 Z-2\nN50 G01 X45 F100",
    "options": [
      "N40 应用 G01 下刀而不是 G00 快速下刀",
      "N20 不应设置 Z5",
      "N30 不应启动主轴",
      "N50 不应有 F"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X0 Y0 Z5：快速定位或安全退刀，适合空行程移动。\nN30 M03 S1000：主轴正转，S 值给出转速。\nN40 G00 Z-2：快速定位或安全退刀，适合空行程移动。\nN50 G01 X45 F100：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“N40 应用 G01 下刀而不是 G00 快速下刀”。B 项“N20 不应设置 Z5”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“N30 不应启动主轴”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "下刀方式",
    "knowledgePoints": [
      "下刀方式",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "下刀方式",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_069",
    "levelId": "cnc-3",
    "text": "下面程序最大的安全问题是什么？（纠错 8）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面程序最大的安全问题是什么？（纠错 8）",
    "promptCode": "N10 G90 G54\nN20 G01 X0 Y0 Z-4 F180\nN30 M03 S900",
    "options": [
      "主轴未启动就已进给切削",
      "用了绝对编程",
      "调用了 G54",
      "进给速度不能写 F"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G01 X0 Y0 Z-4 F180：直线插补切削，必须配合合适进给并避免快速撞入材料。\nN30 M03 S900：主轴正转，S 值给出转速。\n【答案原因】正确答案是 A 项“主轴未启动就已进给切削”。B 项“用了绝对编程”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“调用了 G54”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "主轴启动与切削顺序",
    "knowledgePoints": [
      "主轴启动与切削顺序",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "主轴启动与切削顺序",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_070",
    "levelId": "cnc-1",
    "text": "下面程序的明显问题应怎样判断？（纠错 8）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_debug",
    "difficulty": "easy",
    "question": "下面程序的明显问题应怎样判断？（纠错 8）",
    "promptCode": "N10 G90 G54 M03 S900\nN20 G00 X30 Y15 Z-8\nN30 G01 X70 F120",
    "options": [
      "G00 快速移动到 Z-10，可能快速撞入工件",
      "M03 不能与 S 同行",
      "G54 只能用于车床",
      "F150 只能用于快速定位"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序纠错题，重点不是背代码，而是识别哪一段可能造成撞刀、孔位错误或加工状态不安全。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54 M03 S900：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X30 Y15 Z-8：快速定位或安全退刀，适合空行程移动。\nN30 G01 X70 F120：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“G00 快速移动到 Z-10，可能快速撞入工件”。B 项“M03 不能与 S 同行”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“G54 只能用于车床”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00/G01 使用风险",
    "knowledgePoints": [
      "G00/G01 使用风险",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00/G01 使用风险",
      "code_debug"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_071",
    "levelId": "cnc-2",
    "text": "阅读程序，N30 的主要作用是什么？（阅读 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，N30 的主要作用是什么？（阅读 1）",
    "promptCode": "N10 G90 G54\nN20 G00 X32 Z2\nN30 G01 Z-30 F0.16\nN40 G00 X90 Z90\nN50 M30",
    "options": [
      "快速返回参考点",
      "沿 Z 方向进给切削",
      "打开冷却液",
      "设置工件坐标系"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X32 Z2：快速定位或安全退刀，适合空行程移动。\nN30 G01 Z-30 F0.16：直线插补切削，必须配合合适进给并避免快速撞入材料。\nN40 G00 X90 Z90：快速定位或安全退刀，适合空行程移动。\nN50 M30：程序结束并复位。\n【答案原因】正确答案是 B 项“沿 Z 方向进给切削”。A 项“快速返回参考点”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“打开冷却液”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】实际加工中应先确认装夹、坐标系、刀补、主轴和进给状态，再让刀具接近工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序段作用识读",
    "knowledgePoints": [
      "程序段作用识读",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序段作用识读",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_072",
    "levelId": "cnc-3",
    "text": "阅读程序，G54 出现在 N10 中通常表示什么？（阅读 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，G54 出现在 N10 中通常表示什么？（阅读 1）",
    "promptCode": "N10 G90 G54 M03 S1100\nN20 G00 X12 Y15 Z5\nN30 G01 Z-3 F100",
    "options": [
      "调用工件坐标系",
      "取消刀具半径补偿",
      "主轴反转",
      "程序结束"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54 M03 S1100：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X12 Y15 Z5：快速定位或安全退刀，适合空行程移动。\nN30 G01 Z-3 F100：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“调用工件坐标系”。B 项“取消刀具半径补偿”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“主轴反转”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "工件坐标系",
    "knowledgePoints": [
      "工件坐标系",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "工件坐标系",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_073",
    "levelId": "cnc-1",
    "text": "阅读程序，N20 为什么通常要用 G00？（阅读 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，N20 为什么通常要用 G00？（阅读 1）",
    "promptCode": "N10 G90 G54\nN20 G00 X-8 Y-5 Z6\nN30 M03 S1400\nN40 G01 Z-2 F70",
    "options": [
      "因为 N20 是到安全起刀点的快速定位",
      "因为 N20 是正式切削轮廓",
      "因为 G00 能控制切削进给",
      "因为 G00 表示程序暂停"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X-8 Y-5 Z6：快速定位或安全退刀，适合空行程移动。\nN30 M03 S1400：主轴正转，S 值给出转速。\nN40 G01 Z-2 F70：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“因为 N20 是到安全起刀点的快速定位”。B 项“因为 N20 是正式切削轮廓”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“因为 G00 能控制切削进给”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "快速定位",
    "knowledgePoints": [
      "快速定位",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "快速定位",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_074",
    "levelId": "cnc-2",
    "text": "阅读程序，M05 的作用是什么？（阅读 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，M05 的作用是什么？（阅读 1）",
    "promptCode": "N60 G00 Z60\nN70 M09\nN80 M05\nN90 M30",
    "options": [
      "主轴停止",
      "冷却液打开",
      "绝对编程",
      "直线插补"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN60 G00 Z60：快速定位或安全退刀，适合空行程移动。\nN70 M09：关闭切削液，常在程序结束前执行。\nN80 M05：主轴停止，常用于退刀后的结束段。\nN90 M30：程序结束并复位。\n【答案原因】正确答案是 A 项“主轴停止”。B 项“冷却液打开”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“绝对编程”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M05 主轴停止",
    "knowledgePoints": [
      "M05 主轴停止",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M05 主轴停止",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_075",
    "levelId": "cnc-3",
    "text": "阅读程序，N30 的主要作用是什么？（阅读 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，N30 的主要作用是什么？（阅读 2）",
    "promptCode": "N10 G90 G54\nN20 G00 X32 Z2\nN30 G01 Z-30 F0.16\nN40 G00 X90 Z90\nN50 M30",
    "options": [
      "快速返回参考点",
      "沿 Z 方向进给切削",
      "打开冷却液",
      "设置工件坐标系"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X32 Z2：快速定位或安全退刀，适合空行程移动。\nN30 G01 Z-30 F0.16：直线插补切削，必须配合合适进给并避免快速撞入材料。\nN40 G00 X90 Z90：快速定位或安全退刀，适合空行程移动。\nN50 M30：程序结束并复位。\n【答案原因】正确答案是 B 项“沿 Z 方向进给切削”。A 项“快速返回参考点”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“打开冷却液”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】实际加工中应先确认装夹、坐标系、刀补、主轴和进给状态，再让刀具接近工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序段作用识读",
    "knowledgePoints": [
      "程序段作用识读",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序段作用识读",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_076",
    "levelId": "cnc-1",
    "text": "阅读程序，G54 出现在 N10 中通常表示什么？（阅读 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，G54 出现在 N10 中通常表示什么？（阅读 2）",
    "promptCode": "N10 G90 G54 M03 S1100\nN20 G00 X12 Y15 Z5\nN30 G01 Z-3 F100",
    "options": [
      "调用工件坐标系",
      "取消刀具半径补偿",
      "主轴反转",
      "程序结束"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54 M03 S1100：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X12 Y15 Z5：快速定位或安全退刀，适合空行程移动。\nN30 G01 Z-3 F100：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“调用工件坐标系”。B 项“取消刀具半径补偿”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“主轴反转”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "工件坐标系",
    "knowledgePoints": [
      "工件坐标系",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "工件坐标系",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_077",
    "levelId": "cnc-2",
    "text": "阅读程序，N20 为什么通常要用 G00？（阅读 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，N20 为什么通常要用 G00？（阅读 2）",
    "promptCode": "N10 G90 G54\nN20 G00 X-8 Y-5 Z6\nN30 M03 S1400\nN40 G01 Z-2 F70",
    "options": [
      "因为 N20 是到安全起刀点的快速定位",
      "因为 N20 是正式切削轮廓",
      "因为 G00 能控制切削进给",
      "因为 G00 表示程序暂停"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X-8 Y-5 Z6：快速定位或安全退刀，适合空行程移动。\nN30 M03 S1400：主轴正转，S 值给出转速。\nN40 G01 Z-2 F70：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“因为 N20 是到安全起刀点的快速定位”。B 项“因为 N20 是正式切削轮廓”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“因为 G00 能控制切削进给”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "快速定位",
    "knowledgePoints": [
      "快速定位",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "快速定位",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_078",
    "levelId": "cnc-3",
    "text": "阅读程序，M05 的作用是什么？（阅读 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，M05 的作用是什么？（阅读 2）",
    "promptCode": "N60 G00 Z60\nN70 M09\nN80 M05\nN90 M30",
    "options": [
      "主轴停止",
      "冷却液打开",
      "绝对编程",
      "直线插补"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN60 G00 Z60：快速定位或安全退刀，适合空行程移动。\nN70 M09：关闭切削液，常在程序结束前执行。\nN80 M05：主轴停止，常用于退刀后的结束段。\nN90 M30：程序结束并复位。\n【答案原因】正确答案是 A 项“主轴停止”。B 项“冷却液打开”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“绝对编程”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M05 主轴停止",
    "knowledgePoints": [
      "M05 主轴停止",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M05 主轴停止",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_079",
    "levelId": "cnc-1",
    "text": "阅读程序，N30 的主要作用是什么？（阅读 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，N30 的主要作用是什么？（阅读 3）",
    "promptCode": "N10 G90 G54\nN20 G00 X32 Z2\nN30 G01 Z-30 F0.16\nN40 G00 X90 Z90\nN50 M30",
    "options": [
      "快速返回参考点",
      "沿 Z 方向进给切削",
      "打开冷却液",
      "设置工件坐标系"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X32 Z2：快速定位或安全退刀，适合空行程移动。\nN30 G01 Z-30 F0.16：直线插补切削，必须配合合适进给并避免快速撞入材料。\nN40 G00 X90 Z90：快速定位或安全退刀，适合空行程移动。\nN50 M30：程序结束并复位。\n【答案原因】正确答案是 B 项“沿 Z 方向进给切削”。A 项“快速返回参考点”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“打开冷却液”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】实际加工中应先确认装夹、坐标系、刀补、主轴和进给状态，再让刀具接近工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序段作用识读",
    "knowledgePoints": [
      "程序段作用识读",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序段作用识读",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_080",
    "levelId": "cnc-2",
    "text": "阅读程序，G54 出现在 N10 中通常表示什么？（阅读 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，G54 出现在 N10 中通常表示什么？（阅读 3）",
    "promptCode": "N10 G90 G54 M03 S1100\nN20 G00 X12 Y15 Z5\nN30 G01 Z-3 F100",
    "options": [
      "调用工件坐标系",
      "取消刀具半径补偿",
      "主轴反转",
      "程序结束"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54 M03 S1100：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X12 Y15 Z5：快速定位或安全退刀，适合空行程移动。\nN30 G01 Z-3 F100：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“调用工件坐标系”。B 项“取消刀具半径补偿”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“主轴反转”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "工件坐标系",
    "knowledgePoints": [
      "工件坐标系",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "工件坐标系",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_081",
    "levelId": "cnc-3",
    "text": "阅读程序，N20 为什么通常要用 G00？（阅读 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，N20 为什么通常要用 G00？（阅读 3）",
    "promptCode": "N10 G90 G54\nN20 G00 X-8 Y-5 Z6\nN30 M03 S1400\nN40 G01 Z-2 F70",
    "options": [
      "因为 N20 是到安全起刀点的快速定位",
      "因为 N20 是正式切削轮廓",
      "因为 G00 能控制切削进给",
      "因为 G00 表示程序暂停"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X-8 Y-5 Z6：快速定位或安全退刀，适合空行程移动。\nN30 M03 S1400：主轴正转，S 值给出转速。\nN40 G01 Z-2 F70：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“因为 N20 是到安全起刀点的快速定位”。B 项“因为 N20 是正式切削轮廓”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“因为 G00 能控制切削进给”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "快速定位",
    "knowledgePoints": [
      "快速定位",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "快速定位",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_082",
    "levelId": "cnc-1",
    "text": "阅读程序，M05 的作用是什么？（阅读 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，M05 的作用是什么？（阅读 3）",
    "promptCode": "N60 G00 Z60\nN70 M09\nN80 M05\nN90 M30",
    "options": [
      "主轴停止",
      "冷却液打开",
      "绝对编程",
      "直线插补"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN60 G00 Z60：快速定位或安全退刀，适合空行程移动。\nN70 M09：关闭切削液，常在程序结束前执行。\nN80 M05：主轴停止，常用于退刀后的结束段。\nN90 M30：程序结束并复位。\n【答案原因】正确答案是 A 项“主轴停止”。B 项“冷却液打开”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“绝对编程”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M05 主轴停止",
    "knowledgePoints": [
      "M05 主轴停止",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M05 主轴停止",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_083",
    "levelId": "cnc-2",
    "text": "阅读程序，N30 的主要作用是什么？（阅读 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，N30 的主要作用是什么？（阅读 4）",
    "promptCode": "N10 G90 G54\nN20 G00 X32 Z2\nN30 G01 Z-30 F0.16\nN40 G00 X90 Z90\nN50 M30",
    "options": [
      "快速返回参考点",
      "沿 Z 方向进给切削",
      "打开冷却液",
      "设置工件坐标系"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X32 Z2：快速定位或安全退刀，适合空行程移动。\nN30 G01 Z-30 F0.16：直线插补切削，必须配合合适进给并避免快速撞入材料。\nN40 G00 X90 Z90：快速定位或安全退刀，适合空行程移动。\nN50 M30：程序结束并复位。\n【答案原因】正确答案是 B 项“沿 Z 方向进给切削”。A 项“快速返回参考点”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“打开冷却液”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】实际加工中应先确认装夹、坐标系、刀补、主轴和进给状态，再让刀具接近工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序段作用识读",
    "knowledgePoints": [
      "程序段作用识读",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序段作用识读",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_084",
    "levelId": "cnc-3",
    "text": "阅读程序，G54 出现在 N10 中通常表示什么？（阅读 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，G54 出现在 N10 中通常表示什么？（阅读 4）",
    "promptCode": "N10 G90 G54 M03 S1100\nN20 G00 X12 Y15 Z5\nN30 G01 Z-3 F100",
    "options": [
      "调用工件坐标系",
      "取消刀具半径补偿",
      "主轴反转",
      "程序结束"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54 M03 S1100：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X12 Y15 Z5：快速定位或安全退刀，适合空行程移动。\nN30 G01 Z-3 F100：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“调用工件坐标系”。B 项“取消刀具半径补偿”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“主轴反转”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "工件坐标系",
    "knowledgePoints": [
      "工件坐标系",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "工件坐标系",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_085",
    "levelId": "cnc-1",
    "text": "阅读程序，N20 为什么通常要用 G00？（阅读 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，N20 为什么通常要用 G00？（阅读 4）",
    "promptCode": "N10 G90 G54\nN20 G00 X-8 Y-5 Z6\nN30 M03 S1400\nN40 G01 Z-2 F70",
    "options": [
      "因为 N20 是到安全起刀点的快速定位",
      "因为 N20 是正式切削轮廓",
      "因为 G00 能控制切削进给",
      "因为 G00 表示程序暂停"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X-8 Y-5 Z6：快速定位或安全退刀，适合空行程移动。\nN30 M03 S1400：主轴正转，S 值给出转速。\nN40 G01 Z-2 F70：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“因为 N20 是到安全起刀点的快速定位”。B 项“因为 N20 是正式切削轮廓”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“因为 G00 能控制切削进给”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "快速定位",
    "knowledgePoints": [
      "快速定位",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "快速定位",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_086",
    "levelId": "cnc-2",
    "text": "阅读程序，M05 的作用是什么？（阅读 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，M05 的作用是什么？（阅读 4）",
    "promptCode": "N60 G00 Z60\nN70 M09\nN80 M05\nN90 M30",
    "options": [
      "主轴停止",
      "冷却液打开",
      "绝对编程",
      "直线插补"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN60 G00 Z60：快速定位或安全退刀，适合空行程移动。\nN70 M09：关闭切削液，常在程序结束前执行。\nN80 M05：主轴停止，常用于退刀后的结束段。\nN90 M30：程序结束并复位。\n【答案原因】正确答案是 A 项“主轴停止”。B 项“冷却液打开”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“绝对编程”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M05 主轴停止",
    "knowledgePoints": [
      "M05 主轴停止",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M05 主轴停止",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_087",
    "levelId": "cnc-3",
    "text": "阅读程序，N30 的主要作用是什么？（阅读 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，N30 的主要作用是什么？（阅读 5）",
    "promptCode": "N10 G90 G54\nN20 G00 X32 Z2\nN30 G01 Z-30 F0.16\nN40 G00 X90 Z90\nN50 M30",
    "options": [
      "快速返回参考点",
      "沿 Z 方向进给切削",
      "打开冷却液",
      "设置工件坐标系"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X32 Z2：快速定位或安全退刀，适合空行程移动。\nN30 G01 Z-30 F0.16：直线插补切削，必须配合合适进给并避免快速撞入材料。\nN40 G00 X90 Z90：快速定位或安全退刀，适合空行程移动。\nN50 M30：程序结束并复位。\n【答案原因】正确答案是 B 项“沿 Z 方向进给切削”。A 项“快速返回参考点”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“打开冷却液”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】实际加工中应先确认装夹、坐标系、刀补、主轴和进给状态，再让刀具接近工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序段作用识读",
    "knowledgePoints": [
      "程序段作用识读",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序段作用识读",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_088",
    "levelId": "cnc-1",
    "text": "阅读程序，G54 出现在 N10 中通常表示什么？（阅读 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，G54 出现在 N10 中通常表示什么？（阅读 5）",
    "promptCode": "N10 G90 G54 M03 S1100\nN20 G00 X12 Y15 Z5\nN30 G01 Z-3 F100",
    "options": [
      "调用工件坐标系",
      "取消刀具半径补偿",
      "主轴反转",
      "程序结束"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54 M03 S1100：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X12 Y15 Z5：快速定位或安全退刀，适合空行程移动。\nN30 G01 Z-3 F100：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“调用工件坐标系”。B 项“取消刀具半径补偿”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“主轴反转”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "工件坐标系",
    "knowledgePoints": [
      "工件坐标系",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "工件坐标系",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_089",
    "levelId": "cnc-2",
    "text": "阅读程序，N20 为什么通常要用 G00？（阅读 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，N20 为什么通常要用 G00？（阅读 5）",
    "promptCode": "N10 G90 G54\nN20 G00 X-8 Y-5 Z6\nN30 M03 S1400\nN40 G01 Z-2 F70",
    "options": [
      "因为 N20 是到安全起刀点的快速定位",
      "因为 N20 是正式切削轮廓",
      "因为 G00 能控制切削进给",
      "因为 G00 表示程序暂停"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X-8 Y-5 Z6：快速定位或安全退刀，适合空行程移动。\nN30 M03 S1400：主轴正转，S 值给出转速。\nN40 G01 Z-2 F70：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“因为 N20 是到安全起刀点的快速定位”。B 项“因为 N20 是正式切削轮廓”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“因为 G00 能控制切削进给”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "快速定位",
    "knowledgePoints": [
      "快速定位",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "快速定位",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_090",
    "levelId": "cnc-3",
    "text": "阅读程序，M05 的作用是什么？（阅读 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，M05 的作用是什么？（阅读 5）",
    "promptCode": "N60 G00 Z60\nN70 M09\nN80 M05\nN90 M30",
    "options": [
      "主轴停止",
      "冷却液打开",
      "绝对编程",
      "直线插补"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN60 G00 Z60：快速定位或安全退刀，适合空行程移动。\nN70 M09：关闭切削液，常在程序结束前执行。\nN80 M05：主轴停止，常用于退刀后的结束段。\nN90 M30：程序结束并复位。\n【答案原因】正确答案是 A 项“主轴停止”。B 项“冷却液打开”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“绝对编程”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M05 主轴停止",
    "knowledgePoints": [
      "M05 主轴停止",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M05 主轴停止",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_091",
    "levelId": "cnc-1",
    "text": "阅读程序，N30 的主要作用是什么？（阅读 6）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，N30 的主要作用是什么？（阅读 6）",
    "promptCode": "N10 G90 G54\nN20 G00 X32 Z2\nN30 G01 Z-30 F0.16\nN40 G00 X90 Z90\nN50 M30",
    "options": [
      "快速返回参考点",
      "沿 Z 方向进给切削",
      "打开冷却液",
      "设置工件坐标系"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X32 Z2：快速定位或安全退刀，适合空行程移动。\nN30 G01 Z-30 F0.16：直线插补切削，必须配合合适进给并避免快速撞入材料。\nN40 G00 X90 Z90：快速定位或安全退刀，适合空行程移动。\nN50 M30：程序结束并复位。\n【答案原因】正确答案是 B 项“沿 Z 方向进给切削”。A 项“快速返回参考点”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“打开冷却液”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】实际加工中应先确认装夹、坐标系、刀补、主轴和进给状态，再让刀具接近工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序段作用识读",
    "knowledgePoints": [
      "程序段作用识读",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序段作用识读",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_092",
    "levelId": "cnc-2",
    "text": "阅读程序，G54 出现在 N10 中通常表示什么？（阅读 6）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，G54 出现在 N10 中通常表示什么？（阅读 6）",
    "promptCode": "N10 G90 G54 M03 S1100\nN20 G00 X12 Y15 Z5\nN30 G01 Z-3 F100",
    "options": [
      "调用工件坐标系",
      "取消刀具半径补偿",
      "主轴反转",
      "程序结束"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54 M03 S1100：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X12 Y15 Z5：快速定位或安全退刀，适合空行程移动。\nN30 G01 Z-3 F100：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“调用工件坐标系”。B 项“取消刀具半径补偿”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“主轴反转”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "工件坐标系",
    "knowledgePoints": [
      "工件坐标系",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "工件坐标系",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_093",
    "levelId": "cnc-3",
    "text": "阅读程序，N20 为什么通常要用 G00？（阅读 6）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，N20 为什么通常要用 G00？（阅读 6）",
    "promptCode": "N10 G90 G54\nN20 G00 X-8 Y-5 Z6\nN30 M03 S1400\nN40 G01 Z-2 F70",
    "options": [
      "因为 N20 是到安全起刀点的快速定位",
      "因为 N20 是正式切削轮廓",
      "因为 G00 能控制切削进给",
      "因为 G00 表示程序暂停"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X-8 Y-5 Z6：快速定位或安全退刀，适合空行程移动。\nN30 M03 S1400：主轴正转，S 值给出转速。\nN40 G01 Z-2 F70：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“因为 N20 是到安全起刀点的快速定位”。B 项“因为 N20 是正式切削轮廓”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“因为 G00 能控制切削进给”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "快速定位",
    "knowledgePoints": [
      "快速定位",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "快速定位",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_094",
    "levelId": "cnc-1",
    "text": "阅读程序，M05 的作用是什么？（阅读 6）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，M05 的作用是什么？（阅读 6）",
    "promptCode": "N60 G00 Z60\nN70 M09\nN80 M05\nN90 M30",
    "options": [
      "主轴停止",
      "冷却液打开",
      "绝对编程",
      "直线插补"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN60 G00 Z60：快速定位或安全退刀，适合空行程移动。\nN70 M09：关闭切削液，常在程序结束前执行。\nN80 M05：主轴停止，常用于退刀后的结束段。\nN90 M30：程序结束并复位。\n【答案原因】正确答案是 A 项“主轴停止”。B 项“冷却液打开”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“绝对编程”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M05 主轴停止",
    "knowledgePoints": [
      "M05 主轴停止",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M05 主轴停止",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_095",
    "levelId": "cnc-2",
    "text": "阅读程序，N30 的主要作用是什么？（阅读 7）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，N30 的主要作用是什么？（阅读 7）",
    "promptCode": "N10 G90 G54\nN20 G00 X32 Z2\nN30 G01 Z-30 F0.16\nN40 G00 X90 Z90\nN50 M30",
    "options": [
      "快速返回参考点",
      "沿 Z 方向进给切削",
      "打开冷却液",
      "设置工件坐标系"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X32 Z2：快速定位或安全退刀，适合空行程移动。\nN30 G01 Z-30 F0.16：直线插补切削，必须配合合适进给并避免快速撞入材料。\nN40 G00 X90 Z90：快速定位或安全退刀，适合空行程移动。\nN50 M30：程序结束并复位。\n【答案原因】正确答案是 B 项“沿 Z 方向进给切削”。A 项“快速返回参考点”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“打开冷却液”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】实际加工中应先确认装夹、坐标系、刀补、主轴和进给状态，再让刀具接近工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序段作用识读",
    "knowledgePoints": [
      "程序段作用识读",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序段作用识读",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_096",
    "levelId": "cnc-3",
    "text": "阅读程序，G54 出现在 N10 中通常表示什么？（阅读 7）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，G54 出现在 N10 中通常表示什么？（阅读 7）",
    "promptCode": "N10 G90 G54 M03 S1100\nN20 G00 X12 Y15 Z5\nN30 G01 Z-3 F100",
    "options": [
      "调用工件坐标系",
      "取消刀具半径补偿",
      "主轴反转",
      "程序结束"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54 M03 S1100：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X12 Y15 Z5：快速定位或安全退刀，适合空行程移动。\nN30 G01 Z-3 F100：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“调用工件坐标系”。B 项“取消刀具半径补偿”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“主轴反转”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "工件坐标系",
    "knowledgePoints": [
      "工件坐标系",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "工件坐标系",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_097",
    "levelId": "cnc-1",
    "text": "阅读程序，N20 为什么通常要用 G00？（阅读 7）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，N20 为什么通常要用 G00？（阅读 7）",
    "promptCode": "N10 G90 G54\nN20 G00 X-8 Y-5 Z6\nN30 M03 S1400\nN40 G01 Z-2 F70",
    "options": [
      "因为 N20 是到安全起刀点的快速定位",
      "因为 N20 是正式切削轮廓",
      "因为 G00 能控制切削进给",
      "因为 G00 表示程序暂停"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X-8 Y-5 Z6：快速定位或安全退刀，适合空行程移动。\nN30 M03 S1400：主轴正转，S 值给出转速。\nN40 G01 Z-2 F70：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“因为 N20 是到安全起刀点的快速定位”。B 项“因为 N20 是正式切削轮廓”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“因为 G00 能控制切削进给”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "快速定位",
    "knowledgePoints": [
      "快速定位",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "快速定位",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_098",
    "levelId": "cnc-2",
    "text": "阅读程序，M05 的作用是什么？（阅读 7）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，M05 的作用是什么？（阅读 7）",
    "promptCode": "N60 G00 Z60\nN70 M09\nN80 M05\nN90 M30",
    "options": [
      "主轴停止",
      "冷却液打开",
      "绝对编程",
      "直线插补"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN60 G00 Z60：快速定位或安全退刀，适合空行程移动。\nN70 M09：关闭切削液，常在程序结束前执行。\nN80 M05：主轴停止，常用于退刀后的结束段。\nN90 M30：程序结束并复位。\n【答案原因】正确答案是 A 项“主轴停止”。B 项“冷却液打开”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“绝对编程”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M05 主轴停止",
    "knowledgePoints": [
      "M05 主轴停止",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M05 主轴停止",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_099",
    "levelId": "cnc-3",
    "text": "阅读程序，N30 的主要作用是什么？（阅读 8）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，N30 的主要作用是什么？（阅读 8）",
    "promptCode": "N10 G90 G54\nN20 G00 X32 Z2\nN30 G01 Z-30 F0.16\nN40 G00 X90 Z90\nN50 M30",
    "options": [
      "快速返回参考点",
      "沿 Z 方向进给切削",
      "打开冷却液",
      "设置工件坐标系"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X32 Z2：快速定位或安全退刀，适合空行程移动。\nN30 G01 Z-30 F0.16：直线插补切削，必须配合合适进给并避免快速撞入材料。\nN40 G00 X90 Z90：快速定位或安全退刀，适合空行程移动。\nN50 M30：程序结束并复位。\n【答案原因】正确答案是 B 项“沿 Z 方向进给切削”。A 项“快速返回参考点”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“打开冷却液”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】实际加工中应先确认装夹、坐标系、刀补、主轴和进给状态，再让刀具接近工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序段作用识读",
    "knowledgePoints": [
      "程序段作用识读",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序段作用识读",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_100",
    "levelId": "cnc-1",
    "text": "阅读程序，G54 出现在 N10 中通常表示什么？（阅读 8）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_read",
    "difficulty": "medium",
    "question": "阅读程序，G54 出现在 N10 中通常表示什么？（阅读 8）",
    "promptCode": "N10 G90 G54 M03 S1100\nN20 G00 X12 Y15 Z5\nN30 G01 Z-3 F100",
    "options": [
      "调用工件坐标系",
      "取消刀具半径补偿",
      "主轴反转",
      "程序结束"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道程序阅读题，先判断每个程序段属于定位、切削、退刀、停机还是结束程序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\nN10 G90 G54 M03 S1100：建立绝对编程方式，后续坐标按工件坐标系零点解释。\nN20 G00 X12 Y15 Z5：快速定位或安全退刀，适合空行程移动。\nN30 G01 Z-3 F100：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】正确答案是 A 项“调用工件坐标系”。B 项“取消刀具半径补偿”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“主轴反转”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "工件坐标系",
    "knowledgePoints": [
      "工件坐标系",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "工件坐标系",
      "code_read"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_101",
    "levelId": "cnc-2",
    "text": "写出主轴正转、转速 800 r/min 的程序段。（短程序 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出主轴正转、转速 800 r/min 的程序段。（短程序 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "M03 S800",
    "acceptableAnswers": [
      "M03 S800",
      "S800 M03",
      "M3 S800",
      "S800 M3"
    ],
    "fillAnswers": [
      "M03 S800",
      "S800 M03",
      "M3 S800",
      "S800 M3"
    ],
    "answerText": "M03 S800",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】M03/S 指令 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 M03 S800。等价写法包括 S800 M03、M3 S800、S800 M3，判分时已做大小写和空格兼容。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M03/S 指令",
    "knowledgePoints": [
      "M03/S 指令",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M03/S 指令",
      "short_code"
    ]
  },
  {
    "id": "skjg_102",
    "levelId": "cnc-3",
    "text": "写出快速移动到 X30、Z2 安全起刀点的程序段。（短程序 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出快速移动到 X30、Z2 安全起刀点的程序段。（短程序 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "G00 X30 Z2",
    "acceptableAnswers": [
      "G00 X30 Z2",
      "G0 X30 Z2",
      "G00 X30.0 Z2.0"
    ],
    "fillAnswers": [
      "G00 X30 Z2",
      "G0 X30 Z2",
      "G00 X30.0 Z2.0"
    ],
    "answerText": "G00 X30 Z2",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】G00 快速定位 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 G00 X30 Z2。等价写法包括 G0 X30 Z2、G00 X30.0 Z2.0，判分时已做大小写和空格兼容。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00 快速定位",
    "knowledgePoints": [
      "G00 快速定位",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00 快速定位",
      "short_code"
    ]
  },
  {
    "id": "skjg_103",
    "levelId": "cnc-1",
    "text": "写出沿 Z 方向进给到 Z-25、进给量 F0.2 的车削程序段。（短程序 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出沿 Z 方向进给到 Z-25、进给量 F0.2 的车削程序段。（短程序 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "G01 Z-25 F0.2",
    "acceptableAnswers": [
      "G01 Z-25 F0.2",
      "G1 Z-25 F0.2",
      "G01 Z-25.0 F0.20"
    ],
    "fillAnswers": [
      "G01 Z-25 F0.2",
      "G1 Z-25 F0.2",
      "G01 Z-25.0 F0.20"
    ],
    "answerText": "G01 Z-25 F0.2",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】G01 直线插补 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 G01 Z-25 F0.2。等价写法包括 G1 Z-25 F0.2、G01 Z-25.0 F0.20，判分时已做大小写和空格兼容。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G01 直线插补",
    "knowledgePoints": [
      "G01 直线插补",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G01 直线插补",
      "short_code"
    ]
  },
  {
    "id": "skjg_104",
    "levelId": "cnc-2",
    "text": "写出加工结束前停主轴并结束程序的两条指令，答案用空格分隔。（短程序 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出加工结束前停主轴并结束程序的两条指令，答案用空格分隔。（短程序 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "M05 M30",
    "acceptableAnswers": [
      "M05 M30",
      "M5 M30"
    ],
    "fillAnswers": [
      "M05 M30",
      "M5 M30"
    ],
    "answerText": "M05 M30",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】M05/M30 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 M05 M30。等价写法包括 M5 M30，判分时已做大小写和空格兼容。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M05/M30",
    "knowledgePoints": [
      "M05/M30",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M05/M30",
      "short_code"
    ]
  },
  {
    "id": "skjg_105",
    "levelId": "cnc-3",
    "text": "写出打开切削液的程序段。（短程序 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出打开切削液的程序段。（短程序 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "M08",
    "acceptableAnswers": [
      "M08",
      "M8"
    ],
    "fillAnswers": [
      "M08",
      "M8"
    ],
    "answerText": "M08",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】M08 切削液 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 M08。等价写法包括 M8，判分时已做大小写和空格兼容。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M08 切削液",
    "knowledgePoints": [
      "M08 切削液",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M08 切削液",
      "short_code"
    ]
  },
  {
    "id": "skjg_106",
    "levelId": "cnc-1",
    "text": "写出主轴正转、转速 800 r/min 的程序段。（短程序 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出主轴正转、转速 800 r/min 的程序段。（短程序 2）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "M03 S800",
    "acceptableAnswers": [
      "M03 S800",
      "S800 M03",
      "M3 S800",
      "S800 M3"
    ],
    "fillAnswers": [
      "M03 S800",
      "S800 M03",
      "M3 S800",
      "S800 M3"
    ],
    "answerText": "M03 S800",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】M03/S 指令 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 M03 S800。等价写法包括 S800 M03、M3 S800、S800 M3，判分时已做大小写和空格兼容。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M03/S 指令",
    "knowledgePoints": [
      "M03/S 指令",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M03/S 指令",
      "short_code"
    ]
  },
  {
    "id": "skjg_107",
    "levelId": "cnc-2",
    "text": "写出快速移动到 X30、Z2 安全起刀点的程序段。（短程序 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出快速移动到 X30、Z2 安全起刀点的程序段。（短程序 2）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "G00 X30 Z2",
    "acceptableAnswers": [
      "G00 X30 Z2",
      "G0 X30 Z2",
      "G00 X30.0 Z2.0"
    ],
    "fillAnswers": [
      "G00 X30 Z2",
      "G0 X30 Z2",
      "G00 X30.0 Z2.0"
    ],
    "answerText": "G00 X30 Z2",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】G00 快速定位 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 G00 X30 Z2。等价写法包括 G0 X30 Z2、G00 X30.0 Z2.0，判分时已做大小写和空格兼容。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00 快速定位",
    "knowledgePoints": [
      "G00 快速定位",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00 快速定位",
      "short_code"
    ]
  },
  {
    "id": "skjg_108",
    "levelId": "cnc-3",
    "text": "写出沿 Z 方向进给到 Z-25、进给量 F0.2 的车削程序段。（短程序 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出沿 Z 方向进给到 Z-25、进给量 F0.2 的车削程序段。（短程序 2）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "G01 Z-25 F0.2",
    "acceptableAnswers": [
      "G01 Z-25 F0.2",
      "G1 Z-25 F0.2",
      "G01 Z-25.0 F0.20"
    ],
    "fillAnswers": [
      "G01 Z-25 F0.2",
      "G1 Z-25 F0.2",
      "G01 Z-25.0 F0.20"
    ],
    "answerText": "G01 Z-25 F0.2",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】G01 直线插补 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 G01 Z-25 F0.2。等价写法包括 G1 Z-25 F0.2、G01 Z-25.0 F0.20，判分时已做大小写和空格兼容。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G01 直线插补",
    "knowledgePoints": [
      "G01 直线插补",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G01 直线插补",
      "short_code"
    ]
  },
  {
    "id": "skjg_109",
    "levelId": "cnc-1",
    "text": "写出加工结束前停主轴并结束程序的两条指令，答案用空格分隔。（短程序 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出加工结束前停主轴并结束程序的两条指令，答案用空格分隔。（短程序 2）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "M05 M30",
    "acceptableAnswers": [
      "M05 M30",
      "M5 M30"
    ],
    "fillAnswers": [
      "M05 M30",
      "M5 M30"
    ],
    "answerText": "M05 M30",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】M05/M30 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 M05 M30。等价写法包括 M5 M30，判分时已做大小写和空格兼容。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M05/M30",
    "knowledgePoints": [
      "M05/M30",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M05/M30",
      "short_code"
    ]
  },
  {
    "id": "skjg_110",
    "levelId": "cnc-2",
    "text": "写出打开切削液的程序段。（短程序 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出打开切削液的程序段。（短程序 2）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "M08",
    "acceptableAnswers": [
      "M08",
      "M8"
    ],
    "fillAnswers": [
      "M08",
      "M8"
    ],
    "answerText": "M08",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】M08 切削液 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 M08。等价写法包括 M8，判分时已做大小写和空格兼容。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M08 切削液",
    "knowledgePoints": [
      "M08 切削液",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M08 切削液",
      "short_code"
    ]
  },
  {
    "id": "skjg_111",
    "levelId": "cnc-3",
    "text": "写出主轴正转、转速 800 r/min 的程序段。（短程序 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出主轴正转、转速 800 r/min 的程序段。（短程序 3）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "M03 S800",
    "acceptableAnswers": [
      "M03 S800",
      "S800 M03",
      "M3 S800",
      "S800 M3"
    ],
    "fillAnswers": [
      "M03 S800",
      "S800 M03",
      "M3 S800",
      "S800 M3"
    ],
    "answerText": "M03 S800",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】M03/S 指令 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 M03 S800。等价写法包括 S800 M03、M3 S800、S800 M3，判分时已做大小写和空格兼容。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M03/S 指令",
    "knowledgePoints": [
      "M03/S 指令",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M03/S 指令",
      "short_code"
    ]
  },
  {
    "id": "skjg_112",
    "levelId": "cnc-1",
    "text": "写出快速移动到 X30、Z2 安全起刀点的程序段。（短程序 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出快速移动到 X30、Z2 安全起刀点的程序段。（短程序 3）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "G00 X30 Z2",
    "acceptableAnswers": [
      "G00 X30 Z2",
      "G0 X30 Z2",
      "G00 X30.0 Z2.0"
    ],
    "fillAnswers": [
      "G00 X30 Z2",
      "G0 X30 Z2",
      "G00 X30.0 Z2.0"
    ],
    "answerText": "G00 X30 Z2",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】G00 快速定位 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 G00 X30 Z2。等价写法包括 G0 X30 Z2、G00 X30.0 Z2.0，判分时已做大小写和空格兼容。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00 快速定位",
    "knowledgePoints": [
      "G00 快速定位",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00 快速定位",
      "short_code"
    ]
  },
  {
    "id": "skjg_113",
    "levelId": "cnc-2",
    "text": "写出沿 Z 方向进给到 Z-25、进给量 F0.2 的车削程序段。（短程序 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出沿 Z 方向进给到 Z-25、进给量 F0.2 的车削程序段。（短程序 3）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "G01 Z-25 F0.2",
    "acceptableAnswers": [
      "G01 Z-25 F0.2",
      "G1 Z-25 F0.2",
      "G01 Z-25.0 F0.20"
    ],
    "fillAnswers": [
      "G01 Z-25 F0.2",
      "G1 Z-25 F0.2",
      "G01 Z-25.0 F0.20"
    ],
    "answerText": "G01 Z-25 F0.2",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】G01 直线插补 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 G01 Z-25 F0.2。等价写法包括 G1 Z-25 F0.2、G01 Z-25.0 F0.20，判分时已做大小写和空格兼容。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G01 直线插补",
    "knowledgePoints": [
      "G01 直线插补",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G01 直线插补",
      "short_code"
    ]
  },
  {
    "id": "skjg_114",
    "levelId": "cnc-3",
    "text": "写出加工结束前停主轴并结束程序的两条指令，答案用空格分隔。（短程序 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出加工结束前停主轴并结束程序的两条指令，答案用空格分隔。（短程序 3）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "M05 M30",
    "acceptableAnswers": [
      "M05 M30",
      "M5 M30"
    ],
    "fillAnswers": [
      "M05 M30",
      "M5 M30"
    ],
    "answerText": "M05 M30",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】M05/M30 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 M05 M30。等价写法包括 M5 M30，判分时已做大小写和空格兼容。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M05/M30",
    "knowledgePoints": [
      "M05/M30",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M05/M30",
      "short_code"
    ]
  },
  {
    "id": "skjg_115",
    "levelId": "cnc-1",
    "text": "写出打开切削液的程序段。（短程序 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出打开切削液的程序段。（短程序 3）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "M08",
    "acceptableAnswers": [
      "M08",
      "M8"
    ],
    "fillAnswers": [
      "M08",
      "M8"
    ],
    "answerText": "M08",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】M08 切削液 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 M08。等价写法包括 M8，判分时已做大小写和空格兼容。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M08 切削液",
    "knowledgePoints": [
      "M08 切削液",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M08 切削液",
      "short_code"
    ]
  },
  {
    "id": "skjg_116",
    "levelId": "cnc-2",
    "text": "写出主轴正转、转速 800 r/min 的程序段。（短程序 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出主轴正转、转速 800 r/min 的程序段。（短程序 4）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "M03 S800",
    "acceptableAnswers": [
      "M03 S800",
      "S800 M03",
      "M3 S800",
      "S800 M3"
    ],
    "fillAnswers": [
      "M03 S800",
      "S800 M03",
      "M3 S800",
      "S800 M3"
    ],
    "answerText": "M03 S800",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】M03/S 指令 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 M03 S800。等价写法包括 S800 M03、M3 S800、S800 M3，判分时已做大小写和空格兼容。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M03/S 指令",
    "knowledgePoints": [
      "M03/S 指令",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M03/S 指令",
      "short_code"
    ]
  },
  {
    "id": "skjg_117",
    "levelId": "cnc-3",
    "text": "写出快速移动到 X30、Z2 安全起刀点的程序段。（短程序 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出快速移动到 X30、Z2 安全起刀点的程序段。（短程序 4）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "G00 X30 Z2",
    "acceptableAnswers": [
      "G00 X30 Z2",
      "G0 X30 Z2",
      "G00 X30.0 Z2.0"
    ],
    "fillAnswers": [
      "G00 X30 Z2",
      "G0 X30 Z2",
      "G00 X30.0 Z2.0"
    ],
    "answerText": "G00 X30 Z2",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】G00 快速定位 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 G00 X30 Z2。等价写法包括 G0 X30 Z2、G00 X30.0 Z2.0，判分时已做大小写和空格兼容。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00 快速定位",
    "knowledgePoints": [
      "G00 快速定位",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00 快速定位",
      "short_code"
    ]
  },
  {
    "id": "skjg_118",
    "levelId": "cnc-1",
    "text": "写出沿 Z 方向进给到 Z-25、进给量 F0.2 的车削程序段。（短程序 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出沿 Z 方向进给到 Z-25、进给量 F0.2 的车削程序段。（短程序 4）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "G01 Z-25 F0.2",
    "acceptableAnswers": [
      "G01 Z-25 F0.2",
      "G1 Z-25 F0.2",
      "G01 Z-25.0 F0.20"
    ],
    "fillAnswers": [
      "G01 Z-25 F0.2",
      "G1 Z-25 F0.2",
      "G01 Z-25.0 F0.20"
    ],
    "answerText": "G01 Z-25 F0.2",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】G01 直线插补 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 G01 Z-25 F0.2。等价写法包括 G1 Z-25 F0.2、G01 Z-25.0 F0.20，判分时已做大小写和空格兼容。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G01 直线插补",
    "knowledgePoints": [
      "G01 直线插补",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G01 直线插补",
      "short_code"
    ]
  },
  {
    "id": "skjg_119",
    "levelId": "cnc-2",
    "text": "写出加工结束前停主轴并结束程序的两条指令，答案用空格分隔。（短程序 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出加工结束前停主轴并结束程序的两条指令，答案用空格分隔。（短程序 4）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "M05 M30",
    "acceptableAnswers": [
      "M05 M30",
      "M5 M30"
    ],
    "fillAnswers": [
      "M05 M30",
      "M5 M30"
    ],
    "answerText": "M05 M30",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】M05/M30 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 M05 M30。等价写法包括 M5 M30，判分时已做大小写和空格兼容。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M05/M30",
    "knowledgePoints": [
      "M05/M30",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M05/M30",
      "short_code"
    ]
  },
  {
    "id": "skjg_120",
    "levelId": "cnc-3",
    "text": "写出打开切削液的程序段。（短程序 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出打开切削液的程序段。（短程序 4）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "M08",
    "acceptableAnswers": [
      "M08",
      "M8"
    ],
    "fillAnswers": [
      "M08",
      "M8"
    ],
    "answerText": "M08",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】M08 切削液 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 M08。等价写法包括 M8，判分时已做大小写和空格兼容。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M08 切削液",
    "knowledgePoints": [
      "M08 切削液",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M08 切削液",
      "short_code"
    ]
  },
  {
    "id": "skjg_121",
    "levelId": "cnc-1",
    "text": "写出主轴正转、转速 800 r/min 的程序段。（短程序 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出主轴正转、转速 800 r/min 的程序段。（短程序 5）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "M03 S800",
    "acceptableAnswers": [
      "M03 S800",
      "S800 M03",
      "M3 S800",
      "S800 M3"
    ],
    "fillAnswers": [
      "M03 S800",
      "S800 M03",
      "M3 S800",
      "S800 M3"
    ],
    "answerText": "M03 S800",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】M03/S 指令 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 M03 S800。等价写法包括 S800 M03、M3 S800、S800 M3，判分时已做大小写和空格兼容。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M03/S 指令",
    "knowledgePoints": [
      "M03/S 指令",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M03/S 指令",
      "short_code"
    ]
  },
  {
    "id": "skjg_122",
    "levelId": "cnc-2",
    "text": "写出快速移动到 X30、Z2 安全起刀点的程序段。（短程序 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出快速移动到 X30、Z2 安全起刀点的程序段。（短程序 5）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "G00 X30 Z2",
    "acceptableAnswers": [
      "G00 X30 Z2",
      "G0 X30 Z2",
      "G00 X30.0 Z2.0"
    ],
    "fillAnswers": [
      "G00 X30 Z2",
      "G0 X30 Z2",
      "G00 X30.0 Z2.0"
    ],
    "answerText": "G00 X30 Z2",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】G00 快速定位 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 G00 X30 Z2。等价写法包括 G0 X30 Z2、G00 X30.0 Z2.0，判分时已做大小写和空格兼容。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00 快速定位",
    "knowledgePoints": [
      "G00 快速定位",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00 快速定位",
      "short_code"
    ]
  },
  {
    "id": "skjg_123",
    "levelId": "cnc-3",
    "text": "写出沿 Z 方向进给到 Z-25、进给量 F0.2 的车削程序段。（短程序 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出沿 Z 方向进给到 Z-25、进给量 F0.2 的车削程序段。（短程序 5）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "G01 Z-25 F0.2",
    "acceptableAnswers": [
      "G01 Z-25 F0.2",
      "G1 Z-25 F0.2",
      "G01 Z-25.0 F0.20"
    ],
    "fillAnswers": [
      "G01 Z-25 F0.2",
      "G1 Z-25 F0.2",
      "G01 Z-25.0 F0.20"
    ],
    "answerText": "G01 Z-25 F0.2",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】G01 直线插补 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 G01 Z-25 F0.2。等价写法包括 G1 Z-25 F0.2、G01 Z-25.0 F0.20，判分时已做大小写和空格兼容。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G01 直线插补",
    "knowledgePoints": [
      "G01 直线插补",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G01 直线插补",
      "short_code"
    ]
  },
  {
    "id": "skjg_124",
    "levelId": "cnc-1",
    "text": "写出加工结束前停主轴并结束程序的两条指令，答案用空格分隔。（短程序 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出加工结束前停主轴并结束程序的两条指令，答案用空格分隔。（短程序 5）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "M05 M30",
    "acceptableAnswers": [
      "M05 M30",
      "M5 M30"
    ],
    "fillAnswers": [
      "M05 M30",
      "M5 M30"
    ],
    "answerText": "M05 M30",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】M05/M30 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 M05 M30。等价写法包括 M5 M30，判分时已做大小写和空格兼容。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M05/M30",
    "knowledgePoints": [
      "M05/M30",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M05/M30",
      "short_code"
    ]
  },
  {
    "id": "skjg_125",
    "levelId": "cnc-2",
    "text": "写出打开切削液的程序段。（短程序 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "short_code",
    "difficulty": "medium",
    "question": "写出打开切削液的程序段。（短程序 5）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "M08",
    "acceptableAnswers": [
      "M08",
      "M8"
    ],
    "fillAnswers": [
      "M08",
      "M8"
    ],
    "answerText": "M08",
    "explanation": "【程序含义】这是一道短程序编写题，只要求写 1 个关键程序段，重点是指令、坐标和辅助功能是否匹配。\n【关键条件】M08 切削液 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 M08。等价写法包括 M8，判分时已做大小写和空格兼容。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M08 切削液",
    "knowledgePoints": [
      "M08 切削液",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M08 切削液",
      "short_code"
    ]
  },
  {
    "id": "skjg_126",
    "levelId": "cnc-3",
    "text": "将程序段按安全的车削加工顺序排序，答案写数字串如 1-2-3-4。（排序 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_order",
    "difficulty": "medium",
    "question": "将程序段按安全的车削加工顺序排序，答案写数字串如 1-2-3-4。（排序 1）",
    "promptCode": "1. G00 X80 Z80\n2. G01 Z-30 F0.2\n3. G90 G54 M03 S800\n4. M05 M30\n5. G00 X32 Z2",
    "options": [],
    "answerIndex": -1,
    "answer": "3-5-2-1-4",
    "acceptableAnswers": [
      "3-5-2-1-4",
      "35214"
    ],
    "fillAnswers": [
      "3-5-2-1-4",
      "35214"
    ],
    "answerText": "3-5-2-1-4",
    "explanation": "【程序含义】这是一道程序排序题，正确顺序应符合先准备、再定位、再切削、后退刀和结束的逻辑。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. G00 X80 Z80：快速定位或安全退刀，适合空行程移动。\n2. G01 Z-30 F0.2：直线插补切削，必须配合合适进给并避免快速撞入材料。\n3. G90 G54 M03 S800：建立绝对编程方式，后续坐标按工件坐标系零点解释。\n4. M05 M30：主轴停止，常用于退刀后的结束段。\n5. G00 X32 Z2：快速定位或安全退刀，适合空行程移动。\n【答案原因】标准答案为 3-5-2-1-4。等价写法包括 35214，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：程序顺序按“坐标和主轴准备 → G00 到安全点 → G01 切削 → G00 退刀 → M05/M30 结束”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "车削程序顺序",
    "knowledgePoints": [
      "车削程序顺序",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "车削程序顺序",
      "code_order"
    ]
  },
  {
    "id": "skjg_127",
    "levelId": "cnc-1",
    "text": "将铣削轮廓起步程序排序，答案写数字串如 1-2-3-4。（排序 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_order",
    "difficulty": "medium",
    "question": "将铣削轮廓起步程序排序，答案写数字串如 1-2-3-4。（排序 1）",
    "promptCode": "1. G01 Z-2 F80\n2. G90 G54\n3. G00 X-5 Y-5 Z5\n4. M03 S1200\n5. G01 X50 F150",
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
    "explanation": "【程序含义】这是一道程序排序题，正确顺序应符合先准备、再定位、再切削、后退刀和结束的逻辑。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. G01 Z-2 F80：直线插补切削，必须配合合适进给并避免快速撞入材料。\n2. G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\n3. G00 X-5 Y-5 Z5：快速定位或安全退刀，适合空行程移动。\n4. M03 S1200：主轴正转，S 值给出转速。\n5. G01 X50 F150：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】标准答案为 2-3-4-1-5。等价写法包括 23415，判分时已做大小写和空格兼容。\n【错误风险】实际加工中应先确认装夹、坐标系、刀补、主轴和进给状态，再让刀具接近工件。\n【记忆方法】记忆方法：程序顺序按“坐标和主轴准备 → G00 到安全点 → G01 切削 → G00 退刀 → M05/M30 结束”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "铣削程序顺序",
    "knowledgePoints": [
      "铣削程序顺序",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "铣削程序顺序",
      "code_order"
    ]
  },
  {
    "id": "skjg_128",
    "levelId": "cnc-2",
    "text": "将程序结束段排序，答案写数字串如 1-2-3。（排序 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_order",
    "difficulty": "medium",
    "question": "将程序结束段排序，答案写数字串如 1-2-3。（排序 1）",
    "promptCode": "1. M30\n2. M09\n3. G00 Z50\n4. M05",
    "options": [],
    "answerIndex": -1,
    "answer": "3-2-4-1",
    "acceptableAnswers": [
      "3-2-4-1",
      "3241"
    ],
    "fillAnswers": [
      "3-2-4-1",
      "3241"
    ],
    "answerText": "3-2-4-1",
    "explanation": "【程序含义】这是一道程序排序题，正确顺序应符合先准备、再定位、再切削、后退刀和结束的逻辑。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. M30：程序结束并复位。\n2. M09：关闭切削液，常在程序结束前执行。\n3. G00 Z50：快速定位或安全退刀，适合空行程移动。\n4. M05：主轴停止，常用于退刀后的结束段。\n【答案原因】标准答案为 3-2-4-1。等价写法包括 3241，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：程序顺序按“坐标和主轴准备 → G00 到安全点 → G01 切削 → G00 退刀 → M05/M30 结束”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "结束段安全",
    "knowledgePoints": [
      "结束段安全",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "结束段安全",
      "code_order"
    ]
  },
  {
    "id": "skjg_129",
    "levelId": "cnc-3",
    "text": "将程序段按安全的车削加工顺序排序，答案写数字串如 1-2-3-4。（排序 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_order",
    "difficulty": "medium",
    "question": "将程序段按安全的车削加工顺序排序，答案写数字串如 1-2-3-4。（排序 2）",
    "promptCode": "1. G00 X80 Z80\n2. G01 Z-30 F0.2\n3. G90 G54 M03 S800\n4. M05 M30\n5. G00 X32 Z2",
    "options": [],
    "answerIndex": -1,
    "answer": "3-5-2-1-4",
    "acceptableAnswers": [
      "3-5-2-1-4",
      "35214"
    ],
    "fillAnswers": [
      "3-5-2-1-4",
      "35214"
    ],
    "answerText": "3-5-2-1-4",
    "explanation": "【程序含义】这是一道程序排序题，正确顺序应符合先准备、再定位、再切削、后退刀和结束的逻辑。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. G00 X80 Z80：快速定位或安全退刀，适合空行程移动。\n2. G01 Z-30 F0.2：直线插补切削，必须配合合适进给并避免快速撞入材料。\n3. G90 G54 M03 S800：建立绝对编程方式，后续坐标按工件坐标系零点解释。\n4. M05 M30：主轴停止，常用于退刀后的结束段。\n5. G00 X32 Z2：快速定位或安全退刀，适合空行程移动。\n【答案原因】标准答案为 3-5-2-1-4。等价写法包括 35214，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：程序顺序按“坐标和主轴准备 → G00 到安全点 → G01 切削 → G00 退刀 → M05/M30 结束”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "车削程序顺序",
    "knowledgePoints": [
      "车削程序顺序",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "车削程序顺序",
      "code_order"
    ]
  },
  {
    "id": "skjg_130",
    "levelId": "cnc-1",
    "text": "将铣削轮廓起步程序排序，答案写数字串如 1-2-3-4。（排序 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_order",
    "difficulty": "medium",
    "question": "将铣削轮廓起步程序排序，答案写数字串如 1-2-3-4。（排序 2）",
    "promptCode": "1. G01 Z-2 F80\n2. G90 G54\n3. G00 X-5 Y-5 Z5\n4. M03 S1200\n5. G01 X50 F150",
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
    "explanation": "【程序含义】这是一道程序排序题，正确顺序应符合先准备、再定位、再切削、后退刀和结束的逻辑。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. G01 Z-2 F80：直线插补切削，必须配合合适进给并避免快速撞入材料。\n2. G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\n3. G00 X-5 Y-5 Z5：快速定位或安全退刀，适合空行程移动。\n4. M03 S1200：主轴正转，S 值给出转速。\n5. G01 X50 F150：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】标准答案为 2-3-4-1-5。等价写法包括 23415，判分时已做大小写和空格兼容。\n【错误风险】实际加工中应先确认装夹、坐标系、刀补、主轴和进给状态，再让刀具接近工件。\n【记忆方法】记忆方法：程序顺序按“坐标和主轴准备 → G00 到安全点 → G01 切削 → G00 退刀 → M05/M30 结束”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "铣削程序顺序",
    "knowledgePoints": [
      "铣削程序顺序",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "铣削程序顺序",
      "code_order"
    ]
  },
  {
    "id": "skjg_131",
    "levelId": "cnc-2",
    "text": "将程序结束段排序，答案写数字串如 1-2-3。（排序 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_order",
    "difficulty": "medium",
    "question": "将程序结束段排序，答案写数字串如 1-2-3。（排序 2）",
    "promptCode": "1. M30\n2. M09\n3. G00 Z50\n4. M05",
    "options": [],
    "answerIndex": -1,
    "answer": "3-2-4-1",
    "acceptableAnswers": [
      "3-2-4-1",
      "3241"
    ],
    "fillAnswers": [
      "3-2-4-1",
      "3241"
    ],
    "answerText": "3-2-4-1",
    "explanation": "【程序含义】这是一道程序排序题，正确顺序应符合先准备、再定位、再切削、后退刀和结束的逻辑。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. M30：程序结束并复位。\n2. M09：关闭切削液，常在程序结束前执行。\n3. G00 Z50：快速定位或安全退刀，适合空行程移动。\n4. M05：主轴停止，常用于退刀后的结束段。\n【答案原因】标准答案为 3-2-4-1。等价写法包括 3241，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：程序顺序按“坐标和主轴准备 → G00 到安全点 → G01 切削 → G00 退刀 → M05/M30 结束”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "结束段安全",
    "knowledgePoints": [
      "结束段安全",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "结束段安全",
      "code_order"
    ]
  },
  {
    "id": "skjg_132",
    "levelId": "cnc-3",
    "text": "将程序段按安全的车削加工顺序排序，答案写数字串如 1-2-3-4。（排序 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_order",
    "difficulty": "medium",
    "question": "将程序段按安全的车削加工顺序排序，答案写数字串如 1-2-3-4。（排序 3）",
    "promptCode": "1. G00 X80 Z80\n2. G01 Z-30 F0.2\n3. G90 G54 M03 S800\n4. M05 M30\n5. G00 X32 Z2",
    "options": [],
    "answerIndex": -1,
    "answer": "3-5-2-1-4",
    "acceptableAnswers": [
      "3-5-2-1-4",
      "35214"
    ],
    "fillAnswers": [
      "3-5-2-1-4",
      "35214"
    ],
    "answerText": "3-5-2-1-4",
    "explanation": "【程序含义】这是一道程序排序题，正确顺序应符合先准备、再定位、再切削、后退刀和结束的逻辑。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. G00 X80 Z80：快速定位或安全退刀，适合空行程移动。\n2. G01 Z-30 F0.2：直线插补切削，必须配合合适进给并避免快速撞入材料。\n3. G90 G54 M03 S800：建立绝对编程方式，后续坐标按工件坐标系零点解释。\n4. M05 M30：主轴停止，常用于退刀后的结束段。\n5. G00 X32 Z2：快速定位或安全退刀，适合空行程移动。\n【答案原因】标准答案为 3-5-2-1-4。等价写法包括 35214，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：程序顺序按“坐标和主轴准备 → G00 到安全点 → G01 切削 → G00 退刀 → M05/M30 结束”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "车削程序顺序",
    "knowledgePoints": [
      "车削程序顺序",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "车削程序顺序",
      "code_order"
    ]
  },
  {
    "id": "skjg_133",
    "levelId": "cnc-1",
    "text": "将铣削轮廓起步程序排序，答案写数字串如 1-2-3-4。（排序 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_order",
    "difficulty": "medium",
    "question": "将铣削轮廓起步程序排序，答案写数字串如 1-2-3-4。（排序 3）",
    "promptCode": "1. G01 Z-2 F80\n2. G90 G54\n3. G00 X-5 Y-5 Z5\n4. M03 S1200\n5. G01 X50 F150",
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
    "explanation": "【程序含义】这是一道程序排序题，正确顺序应符合先准备、再定位、再切削、后退刀和结束的逻辑。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. G01 Z-2 F80：直线插补切削，必须配合合适进给并避免快速撞入材料。\n2. G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\n3. G00 X-5 Y-5 Z5：快速定位或安全退刀，适合空行程移动。\n4. M03 S1200：主轴正转，S 值给出转速。\n5. G01 X50 F150：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】标准答案为 2-3-4-1-5。等价写法包括 23415，判分时已做大小写和空格兼容。\n【错误风险】实际加工中应先确认装夹、坐标系、刀补、主轴和进给状态，再让刀具接近工件。\n【记忆方法】记忆方法：程序顺序按“坐标和主轴准备 → G00 到安全点 → G01 切削 → G00 退刀 → M05/M30 结束”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "铣削程序顺序",
    "knowledgePoints": [
      "铣削程序顺序",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "铣削程序顺序",
      "code_order"
    ]
  },
  {
    "id": "skjg_134",
    "levelId": "cnc-2",
    "text": "将程序结束段排序，答案写数字串如 1-2-3。（排序 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_order",
    "difficulty": "medium",
    "question": "将程序结束段排序，答案写数字串如 1-2-3。（排序 3）",
    "promptCode": "1. M30\n2. M09\n3. G00 Z50\n4. M05",
    "options": [],
    "answerIndex": -1,
    "answer": "3-2-4-1",
    "acceptableAnswers": [
      "3-2-4-1",
      "3241"
    ],
    "fillAnswers": [
      "3-2-4-1",
      "3241"
    ],
    "answerText": "3-2-4-1",
    "explanation": "【程序含义】这是一道程序排序题，正确顺序应符合先准备、再定位、再切削、后退刀和结束的逻辑。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. M30：程序结束并复位。\n2. M09：关闭切削液，常在程序结束前执行。\n3. G00 Z50：快速定位或安全退刀，适合空行程移动。\n4. M05：主轴停止，常用于退刀后的结束段。\n【答案原因】标准答案为 3-2-4-1。等价写法包括 3241，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：程序顺序按“坐标和主轴准备 → G00 到安全点 → G01 切削 → G00 退刀 → M05/M30 结束”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "结束段安全",
    "knowledgePoints": [
      "结束段安全",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "结束段安全",
      "code_order"
    ]
  },
  {
    "id": "skjg_135",
    "levelId": "cnc-3",
    "text": "将程序段按安全的车削加工顺序排序，答案写数字串如 1-2-3-4。（排序 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_order",
    "difficulty": "medium",
    "question": "将程序段按安全的车削加工顺序排序，答案写数字串如 1-2-3-4。（排序 4）",
    "promptCode": "1. G00 X80 Z80\n2. G01 Z-30 F0.2\n3. G90 G54 M03 S800\n4. M05 M30\n5. G00 X32 Z2",
    "options": [],
    "answerIndex": -1,
    "answer": "3-5-2-1-4",
    "acceptableAnswers": [
      "3-5-2-1-4",
      "35214"
    ],
    "fillAnswers": [
      "3-5-2-1-4",
      "35214"
    ],
    "answerText": "3-5-2-1-4",
    "explanation": "【程序含义】这是一道程序排序题，正确顺序应符合先准备、再定位、再切削、后退刀和结束的逻辑。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. G00 X80 Z80：快速定位或安全退刀，适合空行程移动。\n2. G01 Z-30 F0.2：直线插补切削，必须配合合适进给并避免快速撞入材料。\n3. G90 G54 M03 S800：建立绝对编程方式，后续坐标按工件坐标系零点解释。\n4. M05 M30：主轴停止，常用于退刀后的结束段。\n5. G00 X32 Z2：快速定位或安全退刀，适合空行程移动。\n【答案原因】标准答案为 3-5-2-1-4。等价写法包括 35214，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：程序顺序按“坐标和主轴准备 → G00 到安全点 → G01 切削 → G00 退刀 → M05/M30 结束”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "车削程序顺序",
    "knowledgePoints": [
      "车削程序顺序",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "车削程序顺序",
      "code_order"
    ]
  },
  {
    "id": "skjg_136",
    "levelId": "cnc-1",
    "text": "将铣削轮廓起步程序排序，答案写数字串如 1-2-3-4。（排序 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_order",
    "difficulty": "medium",
    "question": "将铣削轮廓起步程序排序，答案写数字串如 1-2-3-4。（排序 4）",
    "promptCode": "1. G01 Z-2 F80\n2. G90 G54\n3. G00 X-5 Y-5 Z5\n4. M03 S1200\n5. G01 X50 F150",
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
    "explanation": "【程序含义】这是一道程序排序题，正确顺序应符合先准备、再定位、再切削、后退刀和结束的逻辑。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. G01 Z-2 F80：直线插补切削，必须配合合适进给并避免快速撞入材料。\n2. G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\n3. G00 X-5 Y-5 Z5：快速定位或安全退刀，适合空行程移动。\n4. M03 S1200：主轴正转，S 值给出转速。\n5. G01 X50 F150：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】标准答案为 2-3-4-1-5。等价写法包括 23415，判分时已做大小写和空格兼容。\n【错误风险】实际加工中应先确认装夹、坐标系、刀补、主轴和进给状态，再让刀具接近工件。\n【记忆方法】记忆方法：程序顺序按“坐标和主轴准备 → G00 到安全点 → G01 切削 → G00 退刀 → M05/M30 结束”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "铣削程序顺序",
    "knowledgePoints": [
      "铣削程序顺序",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "铣削程序顺序",
      "code_order"
    ]
  },
  {
    "id": "skjg_137",
    "levelId": "cnc-2",
    "text": "将程序结束段排序，答案写数字串如 1-2-3。（排序 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_order",
    "difficulty": "medium",
    "question": "将程序结束段排序，答案写数字串如 1-2-3。（排序 4）",
    "promptCode": "1. M30\n2. M09\n3. G00 Z50\n4. M05",
    "options": [],
    "answerIndex": -1,
    "answer": "3-2-4-1",
    "acceptableAnswers": [
      "3-2-4-1",
      "3241"
    ],
    "fillAnswers": [
      "3-2-4-1",
      "3241"
    ],
    "answerText": "3-2-4-1",
    "explanation": "【程序含义】这是一道程序排序题，正确顺序应符合先准备、再定位、再切削、后退刀和结束的逻辑。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. M30：程序结束并复位。\n2. M09：关闭切削液，常在程序结束前执行。\n3. G00 Z50：快速定位或安全退刀，适合空行程移动。\n4. M05：主轴停止，常用于退刀后的结束段。\n【答案原因】标准答案为 3-2-4-1。等价写法包括 3241，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：程序顺序按“坐标和主轴准备 → G00 到安全点 → G01 切削 → G00 退刀 → M05/M30 结束”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "结束段安全",
    "knowledgePoints": [
      "结束段安全",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "结束段安全",
      "code_order"
    ]
  },
  {
    "id": "skjg_138",
    "levelId": "cnc-3",
    "text": "将程序段按安全的车削加工顺序排序，答案写数字串如 1-2-3-4。（排序 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_order",
    "difficulty": "medium",
    "question": "将程序段按安全的车削加工顺序排序，答案写数字串如 1-2-3-4。（排序 5）",
    "promptCode": "1. G00 X80 Z80\n2. G01 Z-30 F0.2\n3. G90 G54 M03 S800\n4. M05 M30\n5. G00 X32 Z2",
    "options": [],
    "answerIndex": -1,
    "answer": "3-5-2-1-4",
    "acceptableAnswers": [
      "3-5-2-1-4",
      "35214"
    ],
    "fillAnswers": [
      "3-5-2-1-4",
      "35214"
    ],
    "answerText": "3-5-2-1-4",
    "explanation": "【程序含义】这是一道程序排序题，正确顺序应符合先准备、再定位、再切削、后退刀和结束的逻辑。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. G00 X80 Z80：快速定位或安全退刀，适合空行程移动。\n2. G01 Z-30 F0.2：直线插补切削，必须配合合适进给并避免快速撞入材料。\n3. G90 G54 M03 S800：建立绝对编程方式，后续坐标按工件坐标系零点解释。\n4. M05 M30：主轴停止，常用于退刀后的结束段。\n5. G00 X32 Z2：快速定位或安全退刀，适合空行程移动。\n【答案原因】标准答案为 3-5-2-1-4。等价写法包括 35214，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：程序顺序按“坐标和主轴准备 → G00 到安全点 → G01 切削 → G00 退刀 → M05/M30 结束”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "车削程序顺序",
    "knowledgePoints": [
      "车削程序顺序",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "车削程序顺序",
      "code_order"
    ]
  },
  {
    "id": "skjg_139",
    "levelId": "cnc-1",
    "text": "将铣削轮廓起步程序排序，答案写数字串如 1-2-3-4。（排序 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_order",
    "difficulty": "medium",
    "question": "将铣削轮廓起步程序排序，答案写数字串如 1-2-3-4。（排序 5）",
    "promptCode": "1. G01 Z-2 F80\n2. G90 G54\n3. G00 X-5 Y-5 Z5\n4. M03 S1200\n5. G01 X50 F150",
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
    "explanation": "【程序含义】这是一道程序排序题，正确顺序应符合先准备、再定位、再切削、后退刀和结束的逻辑。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. G01 Z-2 F80：直线插补切削，必须配合合适进给并避免快速撞入材料。\n2. G90 G54：建立绝对编程方式，后续坐标按工件坐标系零点解释。\n3. G00 X-5 Y-5 Z5：快速定位或安全退刀，适合空行程移动。\n4. M03 S1200：主轴正转，S 值给出转速。\n5. G01 X50 F150：直线插补切削，必须配合合适进给并避免快速撞入材料。\n【答案原因】标准答案为 2-3-4-1-5。等价写法包括 23415，判分时已做大小写和空格兼容。\n【错误风险】实际加工中应先确认装夹、坐标系、刀补、主轴和进给状态，再让刀具接近工件。\n【记忆方法】记忆方法：程序顺序按“坐标和主轴准备 → G00 到安全点 → G01 切削 → G00 退刀 → M05/M30 结束”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "铣削程序顺序",
    "knowledgePoints": [
      "铣削程序顺序",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "铣削程序顺序",
      "code_order"
    ]
  },
  {
    "id": "skjg_140",
    "levelId": "cnc-2",
    "text": "将程序结束段排序，答案写数字串如 1-2-3。（排序 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "code_order",
    "difficulty": "medium",
    "question": "将程序结束段排序，答案写数字串如 1-2-3。（排序 5）",
    "promptCode": "1. M30\n2. M09\n3. G00 Z50\n4. M05",
    "options": [],
    "answerIndex": -1,
    "answer": "3-2-4-1",
    "acceptableAnswers": [
      "3-2-4-1",
      "3241"
    ],
    "fillAnswers": [
      "3-2-4-1",
      "3241"
    ],
    "answerText": "3-2-4-1",
    "explanation": "【程序含义】这是一道程序排序题，正确顺序应符合先准备、再定位、再切削、后退刀和结束的逻辑。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. M30：程序结束并复位。\n2. M09：关闭切削液，常在程序结束前执行。\n3. G00 Z50：快速定位或安全退刀，适合空行程移动。\n4. M05：主轴停止，常用于退刀后的结束段。\n【答案原因】标准答案为 3-2-4-1。等价写法包括 3241，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：程序顺序按“坐标和主轴准备 → G00 到安全点 → G01 切削 → G00 退刀 → M05/M30 结束”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "结束段安全",
    "knowledgePoints": [
      "结束段安全",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "结束段安全",
      "code_order"
    ]
  },
  {
    "id": "skjg_141",
    "levelId": "cnc-3",
    "text": "将数控首件加工流程排序，答案写数字串。（流程 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "process_order",
    "difficulty": "medium",
    "question": "将数控首件加工流程排序，答案写数字串。（流程 1）",
    "promptCode": "1. 首件检验\n2. 装夹工件\n3. 程序检查\n4. 对刀并设置工件坐标系\n5. 空运行\n6. 单段试切\n7. 批量加工",
    "options": [],
    "answerIndex": -1,
    "answer": "2-4-3-5-6-1-7",
    "acceptableAnswers": [
      "2-4-3-5-6-1-7",
      "2435617"
    ],
    "fillAnswers": [
      "2-4-3-5-6-1-7",
      "2435617"
    ],
    "answerText": "2-4-3-5-6-1-7",
    "explanation": "【程序含义】这是一道工艺流程排序题，考查实际数控现场从装夹到首件检验再到批量加工的安全顺序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. 首件检验：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n2. 装夹工件：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n3. 程序检查：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n4. 对刀并设置工件坐标系：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n5. 空运行：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n6. 单段试切：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n【答案原因】标准答案为 2-4-3-5-6-1-7。等价写法包括 2435617，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：现场流程按“装夹与对刀 → 程序检查 → 空运行/单段 → 首件检验 → 批量加工”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "首件加工流程",
    "knowledgePoints": [
      "首件加工流程",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "首件加工流程",
      "process_order"
    ]
  },
  {
    "id": "skjg_142",
    "levelId": "cnc-1",
    "text": "将换刀后的加工前确认流程排序，答案写数字串。（流程 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "process_order",
    "difficulty": "medium",
    "question": "将换刀后的加工前确认流程排序，答案写数字串。（流程 1）",
    "promptCode": "1. 确认刀号和刀补\n2. 安装刀具并夹紧\n3. 单段运行观察\n4. 设置或复核刀长补偿\n5. 低倍率试切",
    "options": [],
    "answerIndex": -1,
    "answer": "2-1-4-3-5",
    "acceptableAnswers": [
      "2-1-4-3-5",
      "21435"
    ],
    "fillAnswers": [
      "2-1-4-3-5",
      "21435"
    ],
    "answerText": "2-1-4-3-5",
    "explanation": "【程序含义】这是一道工艺流程排序题，考查实际数控现场从装夹到首件检验再到批量加工的安全顺序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. 确认刀号和刀补：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n2. 安装刀具并夹紧：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n3. 单段运行观察：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n4. 设置或复核刀长补偿：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n5. 低倍率试切：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n【答案原因】标准答案为 2-1-4-3-5。等价写法包括 21435，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：现场流程按“装夹与对刀 → 程序检查 → 空运行/单段 → 首件检验 → 批量加工”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "换刀与刀补确认",
    "knowledgePoints": [
      "换刀与刀补确认",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "换刀与刀补确认",
      "process_order"
    ]
  },
  {
    "id": "skjg_143",
    "levelId": "cnc-2",
    "text": "将程序导入后的试运行流程排序，答案写数字串。（流程 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "process_order",
    "difficulty": "medium",
    "question": "将程序导入后的试运行流程排序，答案写数字串。（流程 1）",
    "promptCode": "1. 空运行观察轨迹\n2. 读取程序并检查坐标\n3. 降低进给倍率\n4. 单段执行关键段\n5. 正常加工",
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
    "explanation": "【程序含义】这是一道工艺流程排序题，考查实际数控现场从装夹到首件检验再到批量加工的安全顺序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. 空运行观察轨迹：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n2. 读取程序并检查坐标：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n3. 降低进给倍率：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n4. 单段执行关键段：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n5. 正常加工：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n【答案原因】标准答案为 2-1-3-4-5。等价写法包括 21345，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：现场流程按“装夹与对刀 → 程序检查 → 空运行/单段 → 首件检验 → 批量加工”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序试运行",
    "knowledgePoints": [
      "程序试运行",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序试运行",
      "process_order"
    ]
  },
  {
    "id": "skjg_144",
    "levelId": "cnc-3",
    "text": "将数控首件加工流程排序，答案写数字串。（流程 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "process_order",
    "difficulty": "medium",
    "question": "将数控首件加工流程排序，答案写数字串。（流程 2）",
    "promptCode": "1. 首件检验\n2. 装夹工件\n3. 程序检查\n4. 对刀并设置工件坐标系\n5. 空运行\n6. 单段试切\n7. 批量加工",
    "options": [],
    "answerIndex": -1,
    "answer": "2-4-3-5-6-1-7",
    "acceptableAnswers": [
      "2-4-3-5-6-1-7",
      "2435617"
    ],
    "fillAnswers": [
      "2-4-3-5-6-1-7",
      "2435617"
    ],
    "answerText": "2-4-3-5-6-1-7",
    "explanation": "【程序含义】这是一道工艺流程排序题，考查实际数控现场从装夹到首件检验再到批量加工的安全顺序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. 首件检验：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n2. 装夹工件：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n3. 程序检查：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n4. 对刀并设置工件坐标系：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n5. 空运行：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n6. 单段试切：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n【答案原因】标准答案为 2-4-3-5-6-1-7。等价写法包括 2435617，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：现场流程按“装夹与对刀 → 程序检查 → 空运行/单段 → 首件检验 → 批量加工”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "首件加工流程",
    "knowledgePoints": [
      "首件加工流程",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "首件加工流程",
      "process_order"
    ]
  },
  {
    "id": "skjg_145",
    "levelId": "cnc-1",
    "text": "将换刀后的加工前确认流程排序，答案写数字串。（流程 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "process_order",
    "difficulty": "medium",
    "question": "将换刀后的加工前确认流程排序，答案写数字串。（流程 2）",
    "promptCode": "1. 确认刀号和刀补\n2. 安装刀具并夹紧\n3. 单段运行观察\n4. 设置或复核刀长补偿\n5. 低倍率试切",
    "options": [],
    "answerIndex": -1,
    "answer": "2-1-4-3-5",
    "acceptableAnswers": [
      "2-1-4-3-5",
      "21435"
    ],
    "fillAnswers": [
      "2-1-4-3-5",
      "21435"
    ],
    "answerText": "2-1-4-3-5",
    "explanation": "【程序含义】这是一道工艺流程排序题，考查实际数控现场从装夹到首件检验再到批量加工的安全顺序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. 确认刀号和刀补：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n2. 安装刀具并夹紧：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n3. 单段运行观察：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n4. 设置或复核刀长补偿：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n5. 低倍率试切：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n【答案原因】标准答案为 2-1-4-3-5。等价写法包括 21435，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：现场流程按“装夹与对刀 → 程序检查 → 空运行/单段 → 首件检验 → 批量加工”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "换刀与刀补确认",
    "knowledgePoints": [
      "换刀与刀补确认",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "换刀与刀补确认",
      "process_order"
    ]
  },
  {
    "id": "skjg_146",
    "levelId": "cnc-2",
    "text": "将程序导入后的试运行流程排序，答案写数字串。（流程 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "process_order",
    "difficulty": "medium",
    "question": "将程序导入后的试运行流程排序，答案写数字串。（流程 2）",
    "promptCode": "1. 空运行观察轨迹\n2. 读取程序并检查坐标\n3. 降低进给倍率\n4. 单段执行关键段\n5. 正常加工",
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
    "explanation": "【程序含义】这是一道工艺流程排序题，考查实际数控现场从装夹到首件检验再到批量加工的安全顺序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. 空运行观察轨迹：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n2. 读取程序并检查坐标：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n3. 降低进给倍率：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n4. 单段执行关键段：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n5. 正常加工：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n【答案原因】标准答案为 2-1-3-4-5。等价写法包括 21345，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：现场流程按“装夹与对刀 → 程序检查 → 空运行/单段 → 首件检验 → 批量加工”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序试运行",
    "knowledgePoints": [
      "程序试运行",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序试运行",
      "process_order"
    ]
  },
  {
    "id": "skjg_147",
    "levelId": "cnc-3",
    "text": "将数控首件加工流程排序，答案写数字串。（流程 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "process_order",
    "difficulty": "medium",
    "question": "将数控首件加工流程排序，答案写数字串。（流程 3）",
    "promptCode": "1. 首件检验\n2. 装夹工件\n3. 程序检查\n4. 对刀并设置工件坐标系\n5. 空运行\n6. 单段试切\n7. 批量加工",
    "options": [],
    "answerIndex": -1,
    "answer": "2-4-3-5-6-1-7",
    "acceptableAnswers": [
      "2-4-3-5-6-1-7",
      "2435617"
    ],
    "fillAnswers": [
      "2-4-3-5-6-1-7",
      "2435617"
    ],
    "answerText": "2-4-3-5-6-1-7",
    "explanation": "【程序含义】这是一道工艺流程排序题，考查实际数控现场从装夹到首件检验再到批量加工的安全顺序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. 首件检验：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n2. 装夹工件：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n3. 程序检查：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n4. 对刀并设置工件坐标系：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n5. 空运行：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n6. 单段试切：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n【答案原因】标准答案为 2-4-3-5-6-1-7。等价写法包括 2435617，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：现场流程按“装夹与对刀 → 程序检查 → 空运行/单段 → 首件检验 → 批量加工”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "首件加工流程",
    "knowledgePoints": [
      "首件加工流程",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "首件加工流程",
      "process_order"
    ]
  },
  {
    "id": "skjg_148",
    "levelId": "cnc-1",
    "text": "将换刀后的加工前确认流程排序，答案写数字串。（流程 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "process_order",
    "difficulty": "medium",
    "question": "将换刀后的加工前确认流程排序，答案写数字串。（流程 3）",
    "promptCode": "1. 确认刀号和刀补\n2. 安装刀具并夹紧\n3. 单段运行观察\n4. 设置或复核刀长补偿\n5. 低倍率试切",
    "options": [],
    "answerIndex": -1,
    "answer": "2-1-4-3-5",
    "acceptableAnswers": [
      "2-1-4-3-5",
      "21435"
    ],
    "fillAnswers": [
      "2-1-4-3-5",
      "21435"
    ],
    "answerText": "2-1-4-3-5",
    "explanation": "【程序含义】这是一道工艺流程排序题，考查实际数控现场从装夹到首件检验再到批量加工的安全顺序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. 确认刀号和刀补：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n2. 安装刀具并夹紧：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n3. 单段运行观察：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n4. 设置或复核刀长补偿：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n5. 低倍率试切：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n【答案原因】标准答案为 2-1-4-3-5。等价写法包括 21435，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：现场流程按“装夹与对刀 → 程序检查 → 空运行/单段 → 首件检验 → 批量加工”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "换刀与刀补确认",
    "knowledgePoints": [
      "换刀与刀补确认",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "换刀与刀补确认",
      "process_order"
    ]
  },
  {
    "id": "skjg_149",
    "levelId": "cnc-2",
    "text": "将程序导入后的试运行流程排序，答案写数字串。（流程 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "process_order",
    "difficulty": "medium",
    "question": "将程序导入后的试运行流程排序，答案写数字串。（流程 3）",
    "promptCode": "1. 空运行观察轨迹\n2. 读取程序并检查坐标\n3. 降低进给倍率\n4. 单段执行关键段\n5. 正常加工",
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
    "explanation": "【程序含义】这是一道工艺流程排序题，考查实际数控现场从装夹到首件检验再到批量加工的安全顺序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. 空运行观察轨迹：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n2. 读取程序并检查坐标：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n3. 降低进给倍率：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n4. 单段执行关键段：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n5. 正常加工：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n【答案原因】标准答案为 2-1-3-4-5。等价写法包括 21345，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：现场流程按“装夹与对刀 → 程序检查 → 空运行/单段 → 首件检验 → 批量加工”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序试运行",
    "knowledgePoints": [
      "程序试运行",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序试运行",
      "process_order"
    ]
  },
  {
    "id": "skjg_150",
    "levelId": "cnc-3",
    "text": "将数控首件加工流程排序，答案写数字串。（流程 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "process_order",
    "difficulty": "medium",
    "question": "将数控首件加工流程排序，答案写数字串。（流程 4）",
    "promptCode": "1. 首件检验\n2. 装夹工件\n3. 程序检查\n4. 对刀并设置工件坐标系\n5. 空运行\n6. 单段试切\n7. 批量加工",
    "options": [],
    "answerIndex": -1,
    "answer": "2-4-3-5-6-1-7",
    "acceptableAnswers": [
      "2-4-3-5-6-1-7",
      "2435617"
    ],
    "fillAnswers": [
      "2-4-3-5-6-1-7",
      "2435617"
    ],
    "answerText": "2-4-3-5-6-1-7",
    "explanation": "【程序含义】这是一道工艺流程排序题，考查实际数控现场从装夹到首件检验再到批量加工的安全顺序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. 首件检验：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n2. 装夹工件：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n3. 程序检查：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n4. 对刀并设置工件坐标系：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n5. 空运行：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n6. 单段试切：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n【答案原因】标准答案为 2-4-3-5-6-1-7。等价写法包括 2435617，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：现场流程按“装夹与对刀 → 程序检查 → 空运行/单段 → 首件检验 → 批量加工”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "首件加工流程",
    "knowledgePoints": [
      "首件加工流程",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "首件加工流程",
      "process_order"
    ]
  },
  {
    "id": "skjg_151",
    "levelId": "cnc-1",
    "text": "将换刀后的加工前确认流程排序，答案写数字串。（流程 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "process_order",
    "difficulty": "medium",
    "question": "将换刀后的加工前确认流程排序，答案写数字串。（流程 4）",
    "promptCode": "1. 确认刀号和刀补\n2. 安装刀具并夹紧\n3. 单段运行观察\n4. 设置或复核刀长补偿\n5. 低倍率试切",
    "options": [],
    "answerIndex": -1,
    "answer": "2-1-4-3-5",
    "acceptableAnswers": [
      "2-1-4-3-5",
      "21435"
    ],
    "fillAnswers": [
      "2-1-4-3-5",
      "21435"
    ],
    "answerText": "2-1-4-3-5",
    "explanation": "【程序含义】这是一道工艺流程排序题，考查实际数控现场从装夹到首件检验再到批量加工的安全顺序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. 确认刀号和刀补：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n2. 安装刀具并夹紧：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n3. 单段运行观察：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n4. 设置或复核刀长补偿：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n5. 低倍率试切：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n【答案原因】标准答案为 2-1-4-3-5。等价写法包括 21435，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：现场流程按“装夹与对刀 → 程序检查 → 空运行/单段 → 首件检验 → 批量加工”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "换刀与刀补确认",
    "knowledgePoints": [
      "换刀与刀补确认",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "换刀与刀补确认",
      "process_order"
    ]
  },
  {
    "id": "skjg_152",
    "levelId": "cnc-2",
    "text": "将程序导入后的试运行流程排序，答案写数字串。（流程 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "process_order",
    "difficulty": "medium",
    "question": "将程序导入后的试运行流程排序，答案写数字串。（流程 4）",
    "promptCode": "1. 空运行观察轨迹\n2. 读取程序并检查坐标\n3. 降低进给倍率\n4. 单段执行关键段\n5. 正常加工",
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
    "explanation": "【程序含义】这是一道工艺流程排序题，考查实际数控现场从装夹到首件检验再到批量加工的安全顺序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. 空运行观察轨迹：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n2. 读取程序并检查坐标：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n3. 降低进给倍率：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n4. 单段执行关键段：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n5. 正常加工：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n【答案原因】标准答案为 2-1-3-4-5。等价写法包括 21345，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：现场流程按“装夹与对刀 → 程序检查 → 空运行/单段 → 首件检验 → 批量加工”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序试运行",
    "knowledgePoints": [
      "程序试运行",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序试运行",
      "process_order"
    ]
  },
  {
    "id": "skjg_153",
    "levelId": "cnc-3",
    "text": "将数控首件加工流程排序，答案写数字串。（流程 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "process_order",
    "difficulty": "medium",
    "question": "将数控首件加工流程排序，答案写数字串。（流程 5）",
    "promptCode": "1. 首件检验\n2. 装夹工件\n3. 程序检查\n4. 对刀并设置工件坐标系\n5. 空运行\n6. 单段试切\n7. 批量加工",
    "options": [],
    "answerIndex": -1,
    "answer": "2-4-3-5-6-1-7",
    "acceptableAnswers": [
      "2-4-3-5-6-1-7",
      "2435617"
    ],
    "fillAnswers": [
      "2-4-3-5-6-1-7",
      "2435617"
    ],
    "answerText": "2-4-3-5-6-1-7",
    "explanation": "【程序含义】这是一道工艺流程排序题，考查实际数控现场从装夹到首件检验再到批量加工的安全顺序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. 首件检验：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n2. 装夹工件：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n3. 程序检查：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n4. 对刀并设置工件坐标系：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n5. 空运行：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n6. 单段试切：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n【答案原因】标准答案为 2-4-3-5-6-1-7。等价写法包括 2435617，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：现场流程按“装夹与对刀 → 程序检查 → 空运行/单段 → 首件检验 → 批量加工”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "首件加工流程",
    "knowledgePoints": [
      "首件加工流程",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "首件加工流程",
      "process_order"
    ]
  },
  {
    "id": "skjg_154",
    "levelId": "cnc-1",
    "text": "将换刀后的加工前确认流程排序，答案写数字串。（流程 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "process_order",
    "difficulty": "medium",
    "question": "将换刀后的加工前确认流程排序，答案写数字串。（流程 5）",
    "promptCode": "1. 确认刀号和刀补\n2. 安装刀具并夹紧\n3. 单段运行观察\n4. 设置或复核刀长补偿\n5. 低倍率试切",
    "options": [],
    "answerIndex": -1,
    "answer": "2-1-4-3-5",
    "acceptableAnswers": [
      "2-1-4-3-5",
      "21435"
    ],
    "fillAnswers": [
      "2-1-4-3-5",
      "21435"
    ],
    "answerText": "2-1-4-3-5",
    "explanation": "【程序含义】这是一道工艺流程排序题，考查实际数控现场从装夹到首件检验再到批量加工的安全顺序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. 确认刀号和刀补：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n2. 安装刀具并夹紧：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n3. 单段运行观察：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n4. 设置或复核刀长补偿：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n5. 低倍率试切：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n【答案原因】标准答案为 2-1-4-3-5。等价写法包括 21435，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：现场流程按“装夹与对刀 → 程序检查 → 空运行/单段 → 首件检验 → 批量加工”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "换刀与刀补确认",
    "knowledgePoints": [
      "换刀与刀补确认",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "换刀与刀补确认",
      "process_order"
    ]
  },
  {
    "id": "skjg_155",
    "levelId": "cnc-2",
    "text": "将程序导入后的试运行流程排序，答案写数字串。（流程 5）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "process_order",
    "difficulty": "medium",
    "question": "将程序导入后的试运行流程排序，答案写数字串。（流程 5）",
    "promptCode": "1. 空运行观察轨迹\n2. 读取程序并检查坐标\n3. 降低进给倍率\n4. 单段执行关键段\n5. 正常加工",
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
    "explanation": "【程序含义】这是一道工艺流程排序题，考查实际数控现场从装夹到首件检验再到批量加工的安全顺序。 题目给出的程序段较短，应重点看 G/M 代码、坐标值和执行顺序。\n【关键代码】\n1. 空运行观察轨迹：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n2. 读取程序并检查坐标：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n3. 降低进给倍率：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n4. 单段执行关键段：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n5. 正常加工：该程序段用于完成题目给出的加工准备、切削或收尾动作。\n【答案原因】标准答案为 2-1-3-4-5。等价写法包括 21345，判分时已做大小写和空格兼容。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：现场流程按“装夹与对刀 → 程序检查 → 空运行/单段 → 首件检验 → 批量加工”来排。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序试运行",
    "knowledgePoints": [
      "程序试运行",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序试运行",
      "process_order"
    ]
  },
  {
    "id": "skjg_156",
    "levelId": "cnc-3",
    "text": "G00 在数控程序中通常表示什么？（基础 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "medium",
    "question": "G00 在数控程序中通常表示什么？（基础 1）",
    "promptCode": "",
    "options": [
      "快速定位",
      "直线切削进给",
      "主轴停止",
      "程序结束"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】G00 快速定位 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“快速定位”。B 项“直线切削进给”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“主轴停止”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00 快速定位",
    "knowledgePoints": [
      "G00 快速定位",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00 快速定位",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_157",
    "levelId": "cnc-1",
    "text": "G01 指令最适合用于哪类动作？（基础 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "medium",
    "question": "G01 指令最适合用于哪类动作？（基础 1）",
    "promptCode": "",
    "options": [
      "按给定进给速度直线切削",
      "开冷却液",
      "回参考点",
      "选择刀库"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】G01 直线插补 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“按给定进给速度直线切削”。B 项“开冷却液”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“回参考点”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G01 直线插补",
    "knowledgePoints": [
      "G01 直线插补",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G01 直线插补",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_158",
    "levelId": "cnc-2",
    "text": "M03 的含义是？（基础 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "medium",
    "question": "M03 的含义是？（基础 1）",
    "promptCode": "",
    "options": [
      "主轴正转",
      "主轴停止",
      "冷却液关闭",
      "程序暂停"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】M03 主轴正转 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“主轴正转”。B 项“主轴停止”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“冷却液关闭”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M03 主轴正转",
    "knowledgePoints": [
      "M03 主轴正转",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M03 主轴正转",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_159",
    "levelId": "cnc-3",
    "text": "数控加工中 G54 常用于表示什么？（基础 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "medium",
    "question": "数控加工中 G54 常用于表示什么？（基础 1）",
    "promptCode": "",
    "options": [
      "工件坐标系",
      "刀具材料",
      "冷却液压力",
      "机床型号"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】G54 工件坐标系 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“工件坐标系”。B 项“刀具材料”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“冷却液压力”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G54 工件坐标系",
    "knowledgePoints": [
      "G54 工件坐标系",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G54 工件坐标系",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_160",
    "levelId": "cnc-1",
    "text": "首件试切前最应该确认的是？（基础 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "medium",
    "question": "首件试切前最应该确认的是？（基础 1）",
    "promptCode": "",
    "options": [
      "装夹、坐标系、刀补和程序安全",
      "只确认机床外观",
      "只提高进给倍率",
      "直接批量加工"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】首件试切 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“装夹、坐标系、刀补和程序安全”。B 项“只确认机床外观”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“只提高进给倍率”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "首件试切",
    "knowledgePoints": [
      "首件试切",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "首件试切",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_161",
    "levelId": "cnc-2",
    "text": "G00 在数控程序中通常表示什么？（基础 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "medium",
    "question": "G00 在数控程序中通常表示什么？（基础 2）",
    "promptCode": "",
    "options": [
      "快速定位",
      "直线切削进给",
      "主轴停止",
      "程序结束"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】G00 快速定位 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“快速定位”。B 项“直线切削进给”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“主轴停止”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00 快速定位",
    "knowledgePoints": [
      "G00 快速定位",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00 快速定位",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_162",
    "levelId": "cnc-3",
    "text": "G01 指令最适合用于哪类动作？（基础 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "medium",
    "question": "G01 指令最适合用于哪类动作？（基础 2）",
    "promptCode": "",
    "options": [
      "按给定进给速度直线切削",
      "开冷却液",
      "回参考点",
      "选择刀库"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】G01 直线插补 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“按给定进给速度直线切削”。B 项“开冷却液”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“回参考点”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G01 直线插补",
    "knowledgePoints": [
      "G01 直线插补",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G01 直线插补",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_163",
    "levelId": "cnc-1",
    "text": "M03 的含义是？（基础 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "medium",
    "question": "M03 的含义是？（基础 2）",
    "promptCode": "",
    "options": [
      "主轴正转",
      "主轴停止",
      "冷却液关闭",
      "程序暂停"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】M03 主轴正转 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“主轴正转”。B 项“主轴停止”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“冷却液关闭”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M03 主轴正转",
    "knowledgePoints": [
      "M03 主轴正转",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M03 主轴正转",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_164",
    "levelId": "cnc-2",
    "text": "数控加工中 G54 常用于表示什么？（基础 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "medium",
    "question": "数控加工中 G54 常用于表示什么？（基础 2）",
    "promptCode": "",
    "options": [
      "工件坐标系",
      "刀具材料",
      "冷却液压力",
      "机床型号"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】G54 工件坐标系 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“工件坐标系”。B 项“刀具材料”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“冷却液压力”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G54 工件坐标系",
    "knowledgePoints": [
      "G54 工件坐标系",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G54 工件坐标系",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_165",
    "levelId": "cnc-3",
    "text": "首件试切前最应该确认的是？（基础 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "medium",
    "question": "首件试切前最应该确认的是？（基础 2）",
    "promptCode": "",
    "options": [
      "装夹、坐标系、刀补和程序安全",
      "只确认机床外观",
      "只提高进给倍率",
      "直接批量加工"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】首件试切 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“装夹、坐标系、刀补和程序安全”。B 项“只确认机床外观”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“只提高进给倍率”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "首件试切",
    "knowledgePoints": [
      "首件试切",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "首件试切",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_166",
    "levelId": "cnc-1",
    "text": "G00 在数控程序中通常表示什么？（基础 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "medium",
    "question": "G00 在数控程序中通常表示什么？（基础 3）",
    "promptCode": "",
    "options": [
      "快速定位",
      "直线切削进给",
      "主轴停止",
      "程序结束"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】G00 快速定位 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“快速定位”。B 项“直线切削进给”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“主轴停止”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00 快速定位",
    "knowledgePoints": [
      "G00 快速定位",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00 快速定位",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_167",
    "levelId": "cnc-2",
    "text": "G01 指令最适合用于哪类动作？（基础 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "medium",
    "question": "G01 指令最适合用于哪类动作？（基础 3）",
    "promptCode": "",
    "options": [
      "按给定进给速度直线切削",
      "开冷却液",
      "回参考点",
      "选择刀库"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】G01 直线插补 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“按给定进给速度直线切削”。B 项“开冷却液”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“回参考点”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G01 直线插补",
    "knowledgePoints": [
      "G01 直线插补",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G01 直线插补",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_168",
    "levelId": "cnc-3",
    "text": "M03 的含义是？（基础 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "medium",
    "question": "M03 的含义是？（基础 3）",
    "promptCode": "",
    "options": [
      "主轴正转",
      "主轴停止",
      "冷却液关闭",
      "程序暂停"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】M03 主轴正转 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“主轴正转”。B 项“主轴停止”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“冷却液关闭”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M03 主轴正转",
    "knowledgePoints": [
      "M03 主轴正转",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M03 主轴正转",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_169",
    "levelId": "cnc-1",
    "text": "数控加工中 G54 常用于表示什么？（基础 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "medium",
    "question": "数控加工中 G54 常用于表示什么？（基础 3）",
    "promptCode": "",
    "options": [
      "工件坐标系",
      "刀具材料",
      "冷却液压力",
      "机床型号"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】G54 工件坐标系 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“工件坐标系”。B 项“刀具材料”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“冷却液压力”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G54 工件坐标系",
    "knowledgePoints": [
      "G54 工件坐标系",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G54 工件坐标系",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_170",
    "levelId": "cnc-2",
    "text": "首件试切前最应该确认的是？（基础 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "medium",
    "question": "首件试切前最应该确认的是？（基础 3）",
    "promptCode": "",
    "options": [
      "装夹、坐标系、刀补和程序安全",
      "只确认机床外观",
      "只提高进给倍率",
      "直接批量加工"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】首件试切 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“装夹、坐标系、刀补和程序安全”。B 项“只确认机床外观”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“只提高进给倍率”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "首件试切",
    "knowledgePoints": [
      "首件试切",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "首件试切",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_171",
    "levelId": "cnc-3",
    "text": "G00 在数控程序中通常表示什么？（基础 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "hard",
    "question": "G00 在数控程序中通常表示什么？（基础 4）",
    "promptCode": "",
    "options": [
      "快速定位",
      "直线切削进给",
      "主轴停止",
      "程序结束"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】G00 快速定位 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“快速定位”。B 项“直线切削进给”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“主轴停止”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00 快速定位",
    "knowledgePoints": [
      "G00 快速定位",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00 快速定位",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_172",
    "levelId": "cnc-1",
    "text": "G01 指令最适合用于哪类动作？（基础 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "hard",
    "question": "G01 指令最适合用于哪类动作？（基础 4）",
    "promptCode": "",
    "options": [
      "按给定进给速度直线切削",
      "开冷却液",
      "回参考点",
      "选择刀库"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】G01 直线插补 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“按给定进给速度直线切削”。B 项“开冷却液”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“回参考点”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G01 直线插补",
    "knowledgePoints": [
      "G01 直线插补",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G01 直线插补",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_173",
    "levelId": "cnc-2",
    "text": "M03 的含义是？（基础 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "hard",
    "question": "M03 的含义是？（基础 4）",
    "promptCode": "",
    "options": [
      "主轴正转",
      "主轴停止",
      "冷却液关闭",
      "程序暂停"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】M03 主轴正转 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“主轴正转”。B 项“主轴停止”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“冷却液关闭”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M03 主轴正转",
    "knowledgePoints": [
      "M03 主轴正转",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M03 主轴正转",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_174",
    "levelId": "cnc-3",
    "text": "数控加工中 G54 常用于表示什么？（基础 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "hard",
    "question": "数控加工中 G54 常用于表示什么？（基础 4）",
    "promptCode": "",
    "options": [
      "工件坐标系",
      "刀具材料",
      "冷却液压力",
      "机床型号"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】G54 工件坐标系 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“工件坐标系”。B 项“刀具材料”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“冷却液压力”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G54 工件坐标系",
    "knowledgePoints": [
      "G54 工件坐标系",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G54 工件坐标系",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_175",
    "levelId": "cnc-1",
    "text": "首件试切前最应该确认的是？（基础 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "单选题",
    "difficulty": "hard",
    "question": "首件试切前最应该确认的是？（基础 4）",
    "promptCode": "",
    "options": [
      "装夹、坐标系、刀补和程序安全",
      "只确认机床外观",
      "只提高进给倍率",
      "直接批量加工"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道基础概念题，重点是把代码含义和现场操作联系起来。\n【关键条件】首件试切 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“装夹、坐标系、刀补和程序安全”。B 项“只确认机床外观”容易混淆，但它不是本题所问的动作或会违反加工安全；C 项“只提高进给倍率”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "首件试切",
    "knowledgePoints": [
      "首件试切",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "首件试切",
      "单选题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_176",
    "levelId": "cnc-2",
    "text": "下面哪些属于数控加工前的安全确认？（多选 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "多选题",
    "difficulty": "hard",
    "question": "下面哪些属于数控加工前的安全确认？（多选 1）",
    "promptCode": "",
    "options": [
      "工件装夹可靠",
      "刀具伸出合理并夹紧",
      "程序坐标系已复核",
      "防护门联锁可随意取消"
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
    "explanation": "【程序含义】这是一道多选题，需要同时判断哪些措施符合数控现场安全和程序规范。\n【关键条件】安全检查 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确项是 A 项“工件装夹可靠”、B 项“刀具伸出合理并夹紧”、C 项“程序坐标系已复核”。D 项“防护门联锁可随意取消”不选，因为它不符合安全加工流程或题目限定条件。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全检查",
    "knowledgePoints": [
      "安全检查",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "安全检查",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "skjg_177",
    "levelId": "cnc-3",
    "text": "下列哪些指令常与程序结束安全有关？（多选 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "多选题",
    "difficulty": "hard",
    "question": "下列哪些指令常与程序结束安全有关？（多选 1）",
    "promptCode": "",
    "options": [
      "G00 退到安全位置",
      "M05 停主轴",
      "M09 关闭切削液",
      "随意删除坐标系"
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
    "explanation": "【程序含义】这是一道多选题，需要同时判断哪些措施符合数控现场安全和程序规范。\n【关键条件】程序结束安全 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确项是 A 项“G00 退到安全位置”、B 项“M05 停主轴”、C 项“M09 关闭切削液”。D 项“随意删除坐标系”不选，因为它不符合安全加工流程或题目限定条件。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序结束安全",
    "knowledgePoints": [
      "程序结束安全",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序结束安全",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "skjg_178",
    "levelId": "cnc-1",
    "text": "关于对刀和工件零点，正确的说法有？（多选 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "多选题",
    "difficulty": "hard",
    "question": "关于对刀和工件零点，正确的说法有？（多选 1）",
    "promptCode": "",
    "options": [
      "工件零点应与程序编程基准一致",
      "对刀错误可能导致尺寸偏差或撞刀",
      "G54 坐标要复核",
      "对刀后无需试运行"
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
    "explanation": "【程序含义】这是一道多选题，需要同时判断哪些措施符合数控现场安全和程序规范。\n【关键条件】对刀与坐标系 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确项是 A 项“工件零点应与程序编程基准一致”、B 项“对刀错误可能导致尺寸偏差或撞刀”、C 项“G54 坐标要复核”。D 项“对刀后无需试运行”不选，因为它不符合安全加工流程或题目限定条件。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "对刀与坐标系",
    "knowledgePoints": [
      "对刀与坐标系",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "对刀与坐标系",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "skjg_179",
    "levelId": "cnc-2",
    "text": "下面哪些属于数控加工前的安全确认？（多选 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "多选题",
    "difficulty": "hard",
    "question": "下面哪些属于数控加工前的安全确认？（多选 2）",
    "promptCode": "",
    "options": [
      "工件装夹可靠",
      "刀具伸出合理并夹紧",
      "程序坐标系已复核",
      "防护门联锁可随意取消"
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
    "explanation": "【程序含义】这是一道多选题，需要同时判断哪些措施符合数控现场安全和程序规范。\n【关键条件】安全检查 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确项是 A 项“工件装夹可靠”、B 项“刀具伸出合理并夹紧”、C 项“程序坐标系已复核”。D 项“防护门联锁可随意取消”不选，因为它不符合安全加工流程或题目限定条件。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全检查",
    "knowledgePoints": [
      "安全检查",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "安全检查",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "skjg_180",
    "levelId": "cnc-3",
    "text": "下列哪些指令常与程序结束安全有关？（多选 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "多选题",
    "difficulty": "hard",
    "question": "下列哪些指令常与程序结束安全有关？（多选 2）",
    "promptCode": "",
    "options": [
      "G00 退到安全位置",
      "M05 停主轴",
      "M09 关闭切削液",
      "随意删除坐标系"
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
    "explanation": "【程序含义】这是一道多选题，需要同时判断哪些措施符合数控现场安全和程序规范。\n【关键条件】程序结束安全 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确项是 A 项“G00 退到安全位置”、B 项“M05 停主轴”、C 项“M09 关闭切削液”。D 项“随意删除坐标系”不选，因为它不符合安全加工流程或题目限定条件。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序结束安全",
    "knowledgePoints": [
      "程序结束安全",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序结束安全",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "skjg_181",
    "levelId": "cnc-1",
    "text": "关于对刀和工件零点，正确的说法有？（多选 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "多选题",
    "difficulty": "hard",
    "question": "关于对刀和工件零点，正确的说法有？（多选 2）",
    "promptCode": "",
    "options": [
      "工件零点应与程序编程基准一致",
      "对刀错误可能导致尺寸偏差或撞刀",
      "G54 坐标要复核",
      "对刀后无需试运行"
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
    "explanation": "【程序含义】这是一道多选题，需要同时判断哪些措施符合数控现场安全和程序规范。\n【关键条件】对刀与坐标系 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确项是 A 项“工件零点应与程序编程基准一致”、B 项“对刀错误可能导致尺寸偏差或撞刀”、C 项“G54 坐标要复核”。D 项“对刀后无需试运行”不选，因为它不符合安全加工流程或题目限定条件。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "对刀与坐标系",
    "knowledgePoints": [
      "对刀与坐标系",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "对刀与坐标系",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "skjg_182",
    "levelId": "cnc-2",
    "text": "下面哪些属于数控加工前的安全确认？（多选 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "多选题",
    "difficulty": "hard",
    "question": "下面哪些属于数控加工前的安全确认？（多选 3）",
    "promptCode": "",
    "options": [
      "工件装夹可靠",
      "刀具伸出合理并夹紧",
      "程序坐标系已复核",
      "防护门联锁可随意取消"
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
    "explanation": "【程序含义】这是一道多选题，需要同时判断哪些措施符合数控现场安全和程序规范。\n【关键条件】安全检查 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确项是 A 项“工件装夹可靠”、B 项“刀具伸出合理并夹紧”、C 项“程序坐标系已复核”。D 项“防护门联锁可随意取消”不选，因为它不符合安全加工流程或题目限定条件。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全检查",
    "knowledgePoints": [
      "安全检查",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "安全检查",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "skjg_183",
    "levelId": "cnc-3",
    "text": "下列哪些指令常与程序结束安全有关？（多选 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "多选题",
    "difficulty": "hard",
    "question": "下列哪些指令常与程序结束安全有关？（多选 3）",
    "promptCode": "",
    "options": [
      "G00 退到安全位置",
      "M05 停主轴",
      "M09 关闭切削液",
      "随意删除坐标系"
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
    "explanation": "【程序含义】这是一道多选题，需要同时判断哪些措施符合数控现场安全和程序规范。\n【关键条件】程序结束安全 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确项是 A 项“G00 退到安全位置”、B 项“M05 停主轴”、C 项“M09 关闭切削液”。D 项“随意删除坐标系”不选，因为它不符合安全加工流程或题目限定条件。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "程序结束安全",
    "knowledgePoints": [
      "程序结束安全",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "程序结束安全",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "skjg_184",
    "levelId": "cnc-1",
    "text": "关于对刀和工件零点，正确的说法有？（多选 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "多选题",
    "difficulty": "hard",
    "question": "关于对刀和工件零点，正确的说法有？（多选 3）",
    "promptCode": "",
    "options": [
      "工件零点应与程序编程基准一致",
      "对刀错误可能导致尺寸偏差或撞刀",
      "G54 坐标要复核",
      "对刀后无需试运行"
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
    "explanation": "【程序含义】这是一道多选题，需要同时判断哪些措施符合数控现场安全和程序规范。\n【关键条件】对刀与坐标系 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确项是 A 项“工件零点应与程序编程基准一致”、B 项“对刀错误可能导致尺寸偏差或撞刀”、C 项“G54 坐标要复核”。D 项“对刀后无需试运行”不选，因为它不符合安全加工流程或题目限定条件。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "对刀与坐标系",
    "knowledgePoints": [
      "对刀与坐标系",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "对刀与坐标系",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "skjg_185",
    "levelId": "cnc-2",
    "text": "下面哪些属于数控加工前的安全确认？（多选 4）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "多选题",
    "difficulty": "hard",
    "question": "下面哪些属于数控加工前的安全确认？（多选 4）",
    "promptCode": "",
    "options": [
      "工件装夹可靠",
      "刀具伸出合理并夹紧",
      "程序坐标系已复核",
      "防护门联锁可随意取消"
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
    "explanation": "【程序含义】这是一道多选题，需要同时判断哪些措施符合数控现场安全和程序规范。\n【关键条件】安全检查 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确项是 A 项“工件装夹可靠”、B 项“刀具伸出合理并夹紧”、C 项“程序坐标系已复核”。D 项“防护门联锁可随意取消”不选，因为它不符合安全加工流程或题目限定条件。\n【错误风险】跳过空运行、单段试切或首件检验，会把程序错误直接带入批量生产，造成批量报废或设备风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "安全检查",
    "knowledgePoints": [
      "安全检查",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "安全检查",
      "多选题"
    ],
    "isMultiple": true
  },
  {
    "id": "skjg_186",
    "levelId": "cnc-3",
    "text": "G00 快速移动可以直接用于切入材料内部进行正常切削。（判断 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "判断题",
    "difficulty": "hard",
    "question": "G00 快速移动可以直接用于切入材料内部进行正常切削。（判断 1）",
    "promptCode": "",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道判断题，关键是把说法放回真实机床操作场景中判断是否安全、规范。\n【关键条件】G00/G01 区分 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 B 项“错误”。A 项“正确”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00/G01 区分",
    "knowledgePoints": [
      "G00/G01 区分",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00/G01 区分",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_187",
    "levelId": "cnc-1",
    "text": "程序首次运行时，空运行和单段运行有助于发现明显坐标或顺序错误。（判断 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "判断题",
    "difficulty": "hard",
    "question": "程序首次运行时，空运行和单段运行有助于发现明显坐标或顺序错误。（判断 1）",
    "promptCode": "",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道判断题，关键是把说法放回真实机床操作场景中判断是否安全、规范。\n【关键条件】试运行 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“正确”。B 项“错误”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "试运行",
    "knowledgePoints": [
      "试运行",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "试运行",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_188",
    "levelId": "cnc-2",
    "text": "M05 表示主轴停止。（判断 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "判断题",
    "difficulty": "hard",
    "question": "M05 表示主轴停止。（判断 1）",
    "promptCode": "",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道判断题，关键是把说法放回真实机床操作场景中判断是否安全、规范。\n【关键条件】M05 主轴停止 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“正确”。B 项“错误”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M05 主轴停止",
    "knowledgePoints": [
      "M05 主轴停止",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M05 主轴停止",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_189",
    "levelId": "cnc-3",
    "text": "工件坐标系设置错误可能导致刀具按正确程序走到错误位置。（判断 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "判断题",
    "difficulty": "hard",
    "question": "工件坐标系设置错误可能导致刀具按正确程序走到错误位置。（判断 1）",
    "promptCode": "",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道判断题，关键是把说法放回真实机床操作场景中判断是否安全、规范。\n【关键条件】工件坐标系 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“正确”。B 项“错误”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "工件坐标系",
    "knowledgePoints": [
      "工件坐标系",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "工件坐标系",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_190",
    "levelId": "cnc-1",
    "text": "G00 快速移动可以直接用于切入材料内部进行正常切削。（判断 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "判断题",
    "difficulty": "hard",
    "question": "G00 快速移动可以直接用于切入材料内部进行正常切削。（判断 2）",
    "promptCode": "",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道判断题，关键是把说法放回真实机床操作场景中判断是否安全、规范。\n【关键条件】G00/G01 区分 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 B 项“错误”。A 项“正确”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00/G01 区分",
    "knowledgePoints": [
      "G00/G01 区分",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00/G01 区分",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_191",
    "levelId": "cnc-2",
    "text": "程序首次运行时，空运行和单段运行有助于发现明显坐标或顺序错误。（判断 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "判断题",
    "difficulty": "hard",
    "question": "程序首次运行时，空运行和单段运行有助于发现明显坐标或顺序错误。（判断 2）",
    "promptCode": "",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道判断题，关键是把说法放回真实机床操作场景中判断是否安全、规范。\n【关键条件】试运行 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“正确”。B 项“错误”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "试运行",
    "knowledgePoints": [
      "试运行",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "试运行",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_192",
    "levelId": "cnc-3",
    "text": "M05 表示主轴停止。（判断 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "判断题",
    "difficulty": "hard",
    "question": "M05 表示主轴停止。（判断 2）",
    "promptCode": "",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道判断题，关键是把说法放回真实机床操作场景中判断是否安全、规范。\n【关键条件】M05 主轴停止 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“正确”。B 项“错误”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "M05 主轴停止",
    "knowledgePoints": [
      "M05 主轴停止",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "M05 主轴停止",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_193",
    "levelId": "cnc-1",
    "text": "工件坐标系设置错误可能导致刀具按正确程序走到错误位置。（判断 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "判断题",
    "difficulty": "hard",
    "question": "工件坐标系设置错误可能导致刀具按正确程序走到错误位置。（判断 2）",
    "promptCode": "",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道判断题，关键是把说法放回真实机床操作场景中判断是否安全、规范。\n【关键条件】工件坐标系 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“正确”。B 项“错误”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "工件坐标系",
    "knowledgePoints": [
      "工件坐标系",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "工件坐标系",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_194",
    "levelId": "cnc-2",
    "text": "G00 快速移动可以直接用于切入材料内部进行正常切削。（判断 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "判断题",
    "difficulty": "hard",
    "question": "G00 快速移动可以直接用于切入材料内部进行正常切削。（判断 3）",
    "promptCode": "",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 1,
    "answer": "B",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道判断题，关键是把说法放回真实机床操作场景中判断是否安全、规范。\n【关键条件】G00/G01 区分 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 B 项“错误”。A 项“正确”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】把 G00 用在切削或下刀位置，会让刀具以快速速度进入材料，容易撞刀、崩刀或破坏工件表面。\n【记忆方法】记忆方法：G00 是“快走空路”，G01 是“按进给切削”；看到刀具接触材料，就优先检查 G01 和 F。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G00/G01 区分",
    "knowledgePoints": [
      "G00/G01 区分",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G00/G01 区分",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_195",
    "levelId": "cnc-3",
    "text": "程序首次运行时，空运行和单段运行有助于发现明显坐标或顺序错误。（判断 3）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "判断题",
    "difficulty": "hard",
    "question": "程序首次运行时，空运行和单段运行有助于发现明显坐标或顺序错误。（判断 3）",
    "promptCode": "",
    "options": [
      "正确",
      "错误"
    ],
    "answerIndex": 0,
    "answer": "A",
    "acceptableAnswers": [],
    "explanation": "【程序含义】这是一道判断题，关键是把说法放回真实机床操作场景中判断是否安全、规范。\n【关键条件】试运行 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】正确答案是 A 项“正确”。B 项“错误”容易混淆，但它不是本题所问的动作或会违反加工安全。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "试运行",
    "knowledgePoints": [
      "试运行",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "试运行",
      "判断题"
    ],
    "isMultiple": false
  },
  {
    "id": "skjg_196",
    "levelId": "cnc-1",
    "text": "数控程序中表示进给速度或进给量的地址字通常是 ____。（填空 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "填空题",
    "difficulty": "hard",
    "question": "数控程序中表示进给速度或进给量的地址字通常是 ____。（填空 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "F",
    "acceptableAnswers": [
      "F",
      "f"
    ],
    "fillAnswers": [
      "F",
      "f"
    ],
    "answerText": "F",
    "explanation": "【程序含义】这是一道术语填空题，重点是知道该地址字或代码在数控程序中的实际作用。\n【关键条件】F 进给 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 F。等价写法包括 f，判分时已做大小写和空格兼容。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "F 进给",
    "knowledgePoints": [
      "F 进给",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "F 进给",
      "填空题"
    ]
  },
  {
    "id": "skjg_197",
    "levelId": "cnc-2",
    "text": "数控程序中表示主轴转速的地址字通常是 ____。（填空 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "填空题",
    "difficulty": "hard",
    "question": "数控程序中表示主轴转速的地址字通常是 ____。（填空 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "S",
    "acceptableAnswers": [
      "S",
      "s"
    ],
    "fillAnswers": [
      "S",
      "s"
    ],
    "answerText": "S",
    "explanation": "【程序含义】这是一道术语填空题，重点是知道该地址字或代码在数控程序中的实际作用。\n【关键条件】S 转速 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 S。等价写法包括 s，判分时已做大小写和空格兼容。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "S 转速",
    "knowledgePoints": [
      "S 转速",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "S 转速",
      "填空题"
    ]
  },
  {
    "id": "skjg_198",
    "levelId": "cnc-3",
    "text": "常用工件坐标系之一是 ____。（填空 1）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "填空题",
    "difficulty": "hard",
    "question": "常用工件坐标系之一是 ____。（填空 1）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "G54",
    "acceptableAnswers": [
      "G54",
      "g54"
    ],
    "fillAnswers": [
      "G54",
      "g54"
    ],
    "answerText": "G54",
    "explanation": "【程序含义】这是一道术语填空题，重点是知道该地址字或代码在数控程序中的实际作用。\n【关键条件】G54 工件坐标系 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 G54。等价写法包括 g54，判分时已做大小写和空格兼容。\n【错误风险】坐标系或孔位理解错误，会让正确程序加工到错误位置，轻则尺寸超差，重则撞到夹具或工件。\n【记忆方法】记忆方法：G90 看坐标值本身，G54 看工件零点在哪里；先定基准，再看每个坐标是否合理。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "G54 工件坐标系",
    "knowledgePoints": [
      "G54 工件坐标系",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "G54 工件坐标系",
      "填空题"
    ]
  },
  {
    "id": "skjg_199",
    "levelId": "cnc-1",
    "text": "数控程序中表示进给速度或进给量的地址字通常是 ____。（填空 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "填空题",
    "difficulty": "hard",
    "question": "数控程序中表示进给速度或进给量的地址字通常是 ____。（填空 2）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "F",
    "acceptableAnswers": [
      "F",
      "f"
    ],
    "fillAnswers": [
      "F",
      "f"
    ],
    "answerText": "F",
    "explanation": "【程序含义】这是一道术语填空题，重点是知道该地址字或代码在数控程序中的实际作用。\n【关键条件】F 进给 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 F。等价写法包括 f，判分时已做大小写和空格兼容。\n【错误风险】切削段若漏写 G01 或 F，机床运动状态不清，可能导致进给异常、尺寸错误或加工表面质量差。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "F 进给",
    "knowledgePoints": [
      "F 进给",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "F 进给",
      "填空题"
    ]
  },
  {
    "id": "skjg_200",
    "levelId": "cnc-2",
    "text": "数控程序中表示主轴转速的地址字通常是 ____。（填空 2）",
    "category": "数控加工区",
    "area": "数控加工区",
    "module": "数控加工",
    "moduleName": "数控加工区",
    "type": "填空题",
    "difficulty": "hard",
    "question": "数控程序中表示主轴转速的地址字通常是 ____。（填空 2）",
    "promptCode": "",
    "options": [],
    "answerIndex": -1,
    "answer": "S",
    "acceptableAnswers": [
      "S",
      "s"
    ],
    "fillAnswers": [
      "S",
      "s"
    ],
    "answerText": "S",
    "explanation": "【程序含义】这是一道术语填空题，重点是知道该地址字或代码在数控程序中的实际作用。\n【关键条件】S 转速 是本题判断核心。要把术语含义放到机床定位、切削、退刀或安全检查中理解。\n【答案原因】标准答案为 S。等价写法包括 s，判分时已做大小写和空格兼容。\n【错误风险】切削前漏开主轴会让刀具挤压工件，严重时会崩刀；结束前漏停主轴也会带来操作安全风险。\n【记忆方法】记忆方法：数控程序先看运动方式，再看坐标，最后看主轴、冷却液和结束动作是否完整。",
    "image": null,
    "imageDescription": "",
    "knowledgePoint": "S 转速",
    "knowledgePoints": [
      "S 转速",
      "数控加工"
    ],
    "tags": [
      "数控加工区",
      "S 转速",
      "填空题"
    ]
  }
];

export const cncMachiningQuestionStats = {
  "total": 200,
  "counts": {
    "code_fill": 32,
    "short_code": 28,
    "code_read": 32,
    "code_debug": 32,
    "code_order": 16,
    "process_order": 15,
    "单选题": 20,
    "多选题": 10,
    "判断题": 10,
    "填空题": 5
  },
  "codeCount": 140,
  "imageCount": 12,
  "optimizedExplanations": 200,
  "optimizedCodeQuestions": 140,
  "optimizedImageQuestions": 12,
  "lastRefinementChangedQuestions": 88,
  "fillExplanationRefined": 28,
  "endingRiskRefined": 7
};
