// =========================================================================
// 聖心高中課表查詢系統 - 核心資料庫 (data.js)
// 115 學年度 第一學期 正式課表資料 (實施日期: 115.08.31 ～ 116.01.20)
// =========================================================================
const DATA = {
  "semester": "115-1",
  "title": "基隆市輔大聖心高級中學 115 學年度 第 1 學期 課程表",
  "effectiveDate": "115.08.31 ～ 116.01.20",
  "teachers": [
    "張秀玫",
    "倪世斌",
    "曾美芝",
    "莊旭惠",
    "陳瑋筠",
    "王世宗",
    "蔡佳玲",
    "邱千芸",
    "劉玉華",
    "桂松山",
    "陳昱澐",
    "羅雅苓",
    "何文達",
    "王妤文",
    "Roja",
    "Chad",
    "Gina",
    "楊志元",
    "楊政忠",
    "鄒湘平",
    "王淑華",
    "蔡玉良",
    "之宇",
    "翟洛嫻",
    "名敦",
    "曾淑汝",
    "古靜宜",
    "李牧",
    "王志遠",
    "蘇試",
    "吳宇綸",
    "劉時妤",
    "姜靜",
    "李偉",
    "林全",
    "王姿尹",
    "紀芝苓",
    "羅衣茜",
    "胡佳思",
    "許晴雯",
    "韓鳳娟"
  ],
  "classes": [
    "國七A",
    "國七B",
    "國八A",
    "國八B",
    "國九A",
    "國九B",
    "高一",
    "高二理組",
    "高二文組",
    "高三理組",
    "高三文組"
  ],
  "periods": [
    {
      "period": 1,
      "start": "08:10",
      "end": "09:00"
    },
    {
      "period": 2,
      "start": "09:10",
      "end": "10:00"
    },
    {
      "period": 3,
      "start": "10:10",
      "end": "11:00"
    },
    {
      "period": 4,
      "start": "11:05",
      "end": "11:55"
    },
    {
      "period": 5,
      "start": "12:55",
      "end": "13:45"
    },
    {
      "period": 6,
      "start": "13:55",
      "end": "14:45"
    },
    {
      "period": 7,
      "start": "14:50",
      "end": "15:40"
    },
    {
      "period": 8,
      "start": "15:50",
      "end": "16:40"
    },
    {
      "period": 9,
      "start": "16:45",
      "end": "17:30"
    }
  ],
  "teacherSchedule": {
    "Chad": {
      "星期一": {
        "3": [
          {
            "subject": "英語聽講",
            "classes": [
              "高一"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ],
        "4": [
          {
            "subject": "彈性學習-生活玩家",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ],
        "5": [
          {
            "subject": "視覺藝術-ESL",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ],
        "6": [
          {
            "subject": "英文專題簡報實作",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ],
        "7": [
          {
            "subject": "彈性學習-閱讀與寫",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ],
        "8": [
          {
            "subject": "ESL(輔)",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ],
        "9": [
          {
            "subject": "英文素養-ESL",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ]
      },
      "星期二": {
        "3": [
          {
            "subject": "表演藝術-ESL",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ],
        "4": [
          {
            "subject": "美術",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ],
        "5": [
          {
            "subject": "彈性學習-英語探索",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ],
        "7": [
          {
            "subject": "表演藝術-ESL",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ]
      },
      "星期三": {
        "3": [
          {
            "subject": "健康教育-ESL",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ],
        "4": [
          {
            "subject": "視覺藝術-ESL",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ],
        "6": [
          {
            "subject": "英文專題簡報實作",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ],
        "7": [
          {
            "subject": "視覺藝術-ESL",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ],
        "8": [
          {
            "subject": "ESL(輔)",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ],
        "9": [
          {
            "subject": "英文素養-ESL",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ]
      },
      "星期四": {
        "3": [
          {
            "subject": "彈性學習-閱讀心力",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ],
        "6": [
          {
            "subject": "家政-ESL",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ],
        "7": [
          {
            "subject": "表演藝術-ESL",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ],
        "8": [
          {
            "subject": "ESL(輔)",
            "classes": [
              "高一"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ],
        "9": [
          {
            "subject": "英文素養-ESL",
            "classes": [
              "高一"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ]
      },
      "星期五": {
        "4": [
          {
            "subject": "專題研究",
            "classes": [
              "高一"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ],
        "9": [
          {
            "subject": "英文素養-ESL",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          }
        ]
      }
    },
    "Gina": {
      "星期一": {
        "3": [
          {
            "subject": "英語聽講",
            "classes": [
              "高一"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "4": [
          {
            "subject": "彈性學習-生活玩家",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "5": [
          {
            "subject": "視覺藝術-ESL",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "6": [
          {
            "subject": "英文專題簡報實作",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "7": [
          {
            "subject": "彈性學習-閱讀與寫",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "8": [
          {
            "subject": "ESL(輔)",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "9": [
          {
            "subject": "英文素養-ESL",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ]
      },
      "星期二": {
        "3": [
          {
            "subject": "表演藝術-ESL",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "4": [
          {
            "subject": "美術",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "5": [
          {
            "subject": "彈性學習-英語探索",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "7": [
          {
            "subject": "表演藝術-ESL",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ]
      },
      "星期三": {
        "3": [
          {
            "subject": "健康教育-ESL",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "4": [
          {
            "subject": "視覺藝術-ESL",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "6": [
          {
            "subject": "英文專題簡報實作",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "7": [
          {
            "subject": "視覺藝術-ESL",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "8": [
          {
            "subject": "ESL(輔)",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "9": [
          {
            "subject": "英文素養-ESL",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ]
      },
      "星期四": {
        "3": [
          {
            "subject": "彈性學習-閱讀心力",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "6": [
          {
            "subject": "家政-ESL",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "7": [
          {
            "subject": "表演藝術-ESL",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "8": [
          {
            "subject": "ESL(輔)",
            "classes": [
              "高一"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "9": [
          {
            "subject": "英文素養-ESL",
            "classes": [
              "高一"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ]
      },
      "星期五": {
        "4": [
          {
            "subject": "專題研究",
            "classes": [
              "高一"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "9": [
          {
            "subject": "英文素養-ESL",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "4F 美術教室"
            ]
          }
        ]
      }
    },
    "Roja": {
      "星期一": {
        "3": [
          {
            "subject": "英語聽講",
            "classes": [
              "高一"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ],
        "4": [
          {
            "subject": "彈性學習-生活玩家",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ],
        "5": [
          {
            "subject": "視覺藝術-ESL",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ],
        "6": [
          {
            "subject": "英文專題簡報實作",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ],
        "7": [
          {
            "subject": "彈性學習-閱讀與寫",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ],
        "8": [
          {
            "subject": "ESL(輔)",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ],
        "9": [
          {
            "subject": "英文素養-ESL",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ]
      },
      "星期二": {
        "3": [
          {
            "subject": "表演藝術-ESL",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ],
        "4": [
          {
            "subject": "美術",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ],
        "5": [
          {
            "subject": "彈性學習-英語探索",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ],
        "7": [
          {
            "subject": "表演藝術-ESL",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ]
      },
      "星期三": {
        "3": [
          {
            "subject": "健康教育-ESL",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ],
        "4": [
          {
            "subject": "視覺藝術-ESL",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ],
        "6": [
          {
            "subject": "英文專題簡報實作",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ],
        "7": [
          {
            "subject": "視覺藝術-ESL",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ],
        "8": [
          {
            "subject": "ESL(輔)",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ],
        "9": [
          {
            "subject": "英文素養-ESL",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ]
      },
      "星期四": {
        "3": [
          {
            "subject": "彈性學習-閱讀心力",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ],
        "6": [
          {
            "subject": "家政-ESL",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ],
        "7": [
          {
            "subject": "表演藝術-ESL",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ],
        "8": [
          {
            "subject": "ESL(輔)",
            "classes": [
              "高一"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ],
        "9": [
          {
            "subject": "英文素養-ESL",
            "classes": [
              "高一"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ]
      },
      "星期五": {
        "4": [
          {
            "subject": "專題研究",
            "classes": [
              "高一"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ],
        "9": [
          {
            "subject": "英文素養-ESL",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "4F 分組教室(二)"
            ]
          }
        ]
      }
    },
    "之宇": {
      "星期一": {
        "5": [
          {
            "subject": "英語文",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "英語文",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "英文閱讀與寫作",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": []
          }
        ]
      },
      "星期二": {
        "6": [
          {
            "subject": "英文閱讀與寫作",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "英語文(輔)",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "英文素養",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": []
          }
        ]
      }
    },
    "何文達": {
      "星期一": {
        "3": [
          {
            "subject": "地理",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "公民與社會",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "地理",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "地理(輔)",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "社會探究",
            "classes": [
              "高二文組"
            ],
            "rooms": []
          }
        ]
      },
      "星期二": {
        "4": [
          {
            "subject": "地理",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "地理",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "地理",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "公民與社會(輔)",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "社會探究",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "subject": "地理",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "地理",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "地理",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "社會探究",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ]
      },
      "星期四": {
        "3": [
          {
            "subject": "地理",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "公民與社會(輔)",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "社會探究",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "subject": "公民與社會",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "地理",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "社會探究",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ]
      }
    },
    "倪世斌": {
      "星期一": {
        "1": [
          {
            "subject": "資訊科技",
            "classes": [
              "國八A"
            ],
            "rooms": [
              "6F 電腦教室"
            ]
          }
        ],
        "2": [
          {
            "subject": "資訊科技",
            "classes": [
              "國九B"
            ],
            "rooms": [
              "6F 電腦教室"
            ]
          }
        ],
        "6": [
          {
            "subject": "資訊科技",
            "classes": [
              "國九A"
            ],
            "rooms": [
              "6F 電腦教室"
            ]
          }
        ],
        "7": [
          {
            "subject": "資訊科技",
            "classes": [
              "國八B"
            ],
            "rooms": [
              "6F 電腦教室"
            ]
          }
        ]
      },
      "星期二": {
        "1": [
          {
            "subject": "生活科技",
            "classes": [
              "國八B"
            ],
            "rooms": [
              "6F 生活科技教室"
            ]
          }
        ],
        "2": [
          {
            "subject": "生活科技",
            "classes": [
              "國七A"
            ],
            "rooms": [
              "6F 生活科技教室"
            ]
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "subject": "生活科技",
            "classes": [
              "國八A"
            ],
            "rooms": [
              "6F 生活科技教室"
            ]
          }
        ],
        "2": [
          {
            "subject": "資訊科技",
            "classes": [
              "國七B"
            ],
            "rooms": [
              "6F 電腦教室"
            ]
          }
        ],
        "4": [
          {
            "subject": "資訊科技",
            "classes": [
              "國七A"
            ],
            "rooms": [
              "6F 電腦教室"
            ]
          }
        ],
        "6": [
          {
            "subject": "生活科技",
            "classes": [
              "國七B"
            ],
            "rooms": [
              "6F 生活科技教室"
            ]
          }
        ]
      },
      "星期四": {
        "7": [
          {
            "subject": "生活科技",
            "classes": [
              "國九A"
            ],
            "rooms": [
              "6F 生活科技教室"
            ]
          }
        ]
      },
      "星期五": {
        "2": [
          {
            "subject": "生活科技",
            "classes": [
              "國九B"
            ],
            "rooms": [
              "6F 生活科技教室"
            ]
          }
        ]
      }
    },
    "劉時妤": {
      "星期一": {
        "1": [
          {
            "subject": "輔導活動",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "輔導活動",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "輔導活動",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ]
      },
      "星期二": {
        "1": [
          {
            "subject": "輔導活動",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ]
      },
      "星期四": {
        "5": [
          {
            "subject": "輔導活動",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "subject": "輔導活動",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ]
      }
    },
    "劉玉華": {
      "星期一": {
        "1": [
          {
            "subject": "國語文",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "國語文",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "週會",
            "classes": [
              "高三理組"
            ],
            "rooms": []
          },
          {
            "subject": "週會/社團",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "國語文",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "國語文",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ]
      },
      "星期二": {
        "1": [
          {
            "subject": "國語文",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "國語文",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "國語文",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "國語文",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "國語文",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "subject": "國語文",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "國語文",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "國文增補",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "國語文",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "subject": "國語文",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "國語文",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "國語文",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "各類文學選讀",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "subject": "國語文",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "國語文",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "國語文",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "國語文",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "班會",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": []
          }
        ]
      }
    },
    "古靜宜": {
      "星期五": {
        "1": [
          {
            "subject": "本土語言",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "本土語言",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "本土語言",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ]
      }
    },
    "名敦": {
      "星期四": {
        "9": [
          {
            "subject": "國文寫作",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": []
          }
        ]
      }
    },
    "吳宇綸": {
      "星期一": {
        "3": [
          {
            "subject": "數學",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "4": [
          {
            "subject": "數學",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "8": [
          {
            "subject": "數學(輔)",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "9": [
          {
            "subject": "數學探究",
            "classes": [
              "國七B"
            ],
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ]
      },
      "星期二": {
        "2": [
          {
            "subject": "數學",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "3": [
          {
            "subject": "數學",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "6": [
          {
            "subject": "數學",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "7": [
          {
            "subject": "數學",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "8": [
          {
            "subject": "數學(輔)",
            "classes": [
              "國八B"
            ],
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "9": [
          {
            "subject": "數學探究",
            "classes": [
              "國八B"
            ],
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ]
      },
      "星期三": {
        "6": [
          {
            "subject": "數學",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "7": [
          {
            "subject": "數學",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "9": [
          {
            "subject": "數學探究",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "subject": "數學",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "2": [
          {
            "subject": "數學",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "6": [
          {
            "subject": "數學",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "7": [
          {
            "subject": "數學",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "8": [
          {
            "subject": "數學(輔)",
            "classes": [
              "國七B"
            ],
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ]
      }
    },
    "姜靜": {
      "星期一": {
        "2": [
          {
            "subject": "英語文",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "英語文",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "跨學科邏輯與閱讀",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "英文素養-ESL",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ]
      },
      "星期二": {
        "2": [
          {
            "subject": "英語文",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "表演藝術-ESL",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "英語文",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "彈性學習-英語探索",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "英語文",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "英語文(輔)",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ]
      },
      "星期三": {
        "3": [
          {
            "subject": "健康教育-ESL",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "視覺藝術-ESL",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "英語文",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "英語文",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "ESL(輔)",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "英文素養",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ]
      },
      "星期四": {
        "2": [
          {
            "subject": "英語文",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "英語文",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "英語文(輔)",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "跨學科邏輯與閱讀",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ]
      },
      "星期五": {
        "2": [
          {
            "subject": "英語文",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "班會",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "綜合活動",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "綜合活動",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "英語文(輔)",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ]
      }
    },
    "張秀玫": {
      "星期一": {
        "1": [
          {
            "subject": "國語文",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "國語文",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "國語文",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "國語文",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "國語文",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ]
      },
      "星期二": {
        "1": [
          {
            "subject": "國語文",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "國語文",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "國語文",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "國語文",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "國語文",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "subject": "國語文",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "國語文",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "國語文",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "國語文",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "國語文",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ]
      },
      "星期四": {
        "3": [
          {
            "subject": "國語文",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "國語文",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "國語文",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "國語文",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "國語文",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "subject": "國語文",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "國語文",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "國語文",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "班會",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "週會/社團",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "週會/社團",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "閱讀素養與演練",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ]
      }
    },
    "曾淑汝": {
      "星期五": {
        "1": [
          {
            "subject": "本土語言",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "本土語言",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "本土語言",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ]
      }
    },
    "曾美芝": {
      "星期一": {
        "1": [
          {
            "subject": "增廣補強",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "數學",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "數學",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "數學探究",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ]
      },
      "星期二": {
        "2": [
          {
            "subject": "生活藝數",
            "classes": [
              "高二理組"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "彈性學習-自主學習",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "數學",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "數學",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "數學(輔)",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "數學探究",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ]
      },
      "星期三": {
        "3": [
          {
            "subject": "數學",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "數學",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "數學",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "數學(輔)",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "數學探究",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ]
      },
      "星期四": {
        "3": [
          {
            "subject": "數學",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "數學",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "數學",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "數學(輔)",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "subject": "本土語言",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "生活藝數",
            "classes": [
              "高二理組"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "數學",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "數學",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "班會",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "週會/社團",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "週會/社團",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ]
      }
    },
    "李偉": {
      "星期三": {
        "6": [
          {
            "subject": "族群、性別與國家",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "族群、性別與國家",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "族群、性別與國家",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "社會探究",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ]
      }
    },
    "李牧": {
      "星期三": {
        "3": [
          {
            "subject": "數學",
            "classes": [
              "高一"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "4": [
          {
            "subject": "數學",
            "classes": [
              "高一"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "5": [
          {
            "subject": "數學",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ],
        "6": [
          {
            "subject": "數學",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "數學",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ]
      },
      "星期四": {
        "3": [
          {
            "subject": "數學",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ],
        "4": [
          {
            "subject": "數學",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ],
        "5": [
          {
            "subject": "數學",
            "classes": [
              "高一"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "6": [
          {
            "subject": "數學",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "數學",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ]
      },
      "星期五": {
        "3": [
          {
            "subject": "數學",
            "classes": [
              "高一"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "4": [
          {
            "subject": "數學",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ]
      }
    },
    "林全": {
      "星期四": {
        "2": [
          {
            "subject": "空間資訊科技",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "空間資訊科技",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "空間資訊科技",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ]
      }
    },
    "桂松山": {
      "星期一": {
        "8": [
          {
            "subject": "數學(輔)",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ]
      },
      "星期二": {
        "2": [
          {
            "subject": "數學",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "數學",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ]
      },
      "星期三": {
        "6": [
          {
            "subject": "數學",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "數學",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "數學探究",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "subject": "數學",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "數學",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "數學",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "數學",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ]
      }
    },
    "楊志元": {
      "星期四": {
        "1": [
          {
            "subject": "自然科學探究",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ],
        "2": [
          {
            "subject": "選修化學-化學反應",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "3": [
          {
            "subject": "選修化學-化學反應",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "subject": "自然科學探究",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ],
        "2": [
          {
            "subject": "選修化學-化學反應",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "3": [
          {
            "subject": "選修化學-化學反應",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ]
      }
    },
    "楊政忠": {
      "星期四": {
        "5": [
          {
            "subject": "全民國防教育",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ]
      }
    },
    "王世宗": {
      "星期一": {
        "1": [
          {
            "subject": "健康教育",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "健康教育",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "生物",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "生物(輔)",
            "classes": [
              "高二理組"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "自然探究",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ]
      },
      "星期二": {
        "1": [
          {
            "subject": "生物",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "多元選修",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "多元選修",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "多元學習",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ]
      },
      "星期三": {
        "5": [
          {
            "subject": "生物",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "健康教育",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "選修生物-生命的起",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "8": [
          {
            "subject": "生物(輔)",
            "classes": [
              "高三理組"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "自然探究",
            "classes": [
              "高三理組"
            ],
            "rooms": []
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "subject": "生物",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "生物",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "選修生物-動物體的",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "5": [
          {
            "subject": "生物",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "健康教育",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "選修生物-動物體的",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "subject": "選修生物-生命的起",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "2": [
          {
            "subject": "生物",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "生物",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "班會",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "綜合活動",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "綜合活動",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "自然探究",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ]
      }
    },
    "王妤文": {
      "星期一": {
        "4": [
          {
            "subject": "英文素養-ESL",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "閱讀素養與演練",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ]
      },
      "星期二": {
        "2": [
          {
            "subject": "旅遊文學",
            "classes": [
              "高二文組"
            ],
            "rooms": []
          }
        ]
      },
      "星期三": {
        "4": [
          {
            "subject": "美術",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "跨學科邏輯與閱讀",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ]
      },
      "星期四": {
        "8": [
          {
            "subject": "閱讀素養與演練",
            "classes": [
              "高三理組"
            ],
            "rooms": []
          }
        ]
      },
      "星期五": {
        "2": [
          {
            "subject": "旅遊文學",
            "classes": [
              "高二文組"
            ],
            "rooms": []
          },
          {
            "subject": "族群、性別與國家",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "跨學科邏輯與閱讀",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ]
      }
    },
    "王姿尹": {
      "星期一": {
        "1": [
          {
            "subject": "體育",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "體育",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "體育",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "體育",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "體育",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ]
      },
      "星期二": {
        "1": [
          {
            "subject": "體育",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "體育",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "體育",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "體育",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "subject": "體育",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "體育",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "體育",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ]
      },
      "星期四": {
        "2": [
          {
            "subject": "體育",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "體育",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "體育",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "體育",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "體育",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "體育",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ]
      }
    },
    "王志遠": {
      "星期一": {
        "3": [
          {
            "subject": "數學",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "數學",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ]
      },
      "星期二": {
        "3": [
          {
            "subject": "數學增補",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "數學乙",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "數學乙",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "數學",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "數學",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ]
      },
      "星期五": {
        "6": [
          {
            "subject": "數學乙",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "數學乙",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "數學乙(輔)",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "數學探究",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ]
      }
    },
    "王淑華": {
      "星期五": {
        "1": [
          {
            "subject": "家政",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "家政",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "家政",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "家政",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ]
      }
    },
    "紀芝苓": {
      "星期五": {
        "2": [
          {
            "subject": "本土語言",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "本土語言",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ]
      }
    },
    "羅衣茜": {
      "星期一": {
        "5": [
          {
            "subject": "公民與社會",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "公民與社會",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "公共議題與社會探",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "社會探究",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ]
      },
      "星期二": {
        "5": [
          {
            "subject": "公民與社會",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ]
      },
      "星期三": {
        "4": [
          {
            "subject": "公民與社會",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "現代社會與經濟",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "subject": "公民與社會",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "公民與社會",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "社會探究",
            "classes": [
              "高二文組"
            ],
            "rooms": []
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "subject": "公共議題與社會探",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "族群、性別與國家",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "社會探究",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ]
      }
    },
    "羅雅苓": {
      "星期一": {
        "2": [
          {
            "subject": "英語文",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "英語文",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "視覺藝術-ESL",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "ESL(輔)",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ]
      },
      "星期二": {
        "4": [
          {
            "subject": "英語文",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "英語文",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "英語文(輔)",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "多元學習",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ]
      },
      "星期三": {
        "3": [
          {
            "subject": "英語文",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "英語文",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "語文學習",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ]
      },
      "星期四": {
        "2": [
          {
            "subject": "英語文",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "彈性學習-閱讀心力",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "英語文",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "家政-ESL",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "表演藝術-ESL",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "英文素養",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ]
      },
      "星期五": {
        "4": [
          {
            "subject": "英語文",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "班會",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "綜合活動",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "綜合活動",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "英語文(輔)",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "英文素養-ESL",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": []
          }
        ]
      }
    },
    "翟洛嫻": {
      "星期三": {
        "1": [
          {
            "subject": "音樂",
            "classes": [
              "國九A"
            ],
            "rooms": [
              "4F 音樂教室"
            ]
          }
        ],
        "2": [
          {
            "subject": "音樂",
            "classes": [
              "國九B"
            ],
            "rooms": [
              "4F 音樂教室"
            ]
          }
        ],
        "3": [
          {
            "subject": "音樂",
            "classes": [
              "國七A"
            ],
            "rooms": [
              "4F 音樂教室"
            ]
          }
        ],
        "4": [
          {
            "subject": "音樂",
            "classes": [
              "國七B"
            ],
            "rooms": [
              "4F 音樂教室"
            ]
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "subject": "音樂",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": [
              "4F 音樂教室"
            ]
          }
        ],
        "2": [
          {
            "subject": "音樂",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "4F 音樂教室"
            ]
          }
        ],
        "3": [
          {
            "subject": "音樂",
            "classes": [
              "國八A"
            ],
            "rooms": [
              "4F 音樂教室"
            ]
          }
        ],
        "4": [
          {
            "subject": "音樂",
            "classes": [
              "國八B"
            ],
            "rooms": [
              "4F 音樂教室"
            ]
          }
        ]
      }
    },
    "胡佳思": {
      "星期四": {
        "6": [
          {
            "subject": "現代社會與經濟",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "現代社會與經濟",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "現代社會與經濟(輔)",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ]
      }
    },
    "莊旭惠": {
      "星期一": {
        "1": [
          {
            "subject": "增廣補強",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "英語文",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "4": [
          {
            "subject": "英語文",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "9": [
          {
            "subject": "英文素養",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ]
      },
      "星期二": {
        "1": [
          {
            "subject": "英語文",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "4": [
          {
            "subject": "英語文",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "7": [
          {
            "subject": "英語文",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "8": [
          {
            "subject": "英語文(輔)",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "9": [
          {
            "subject": "跨學科邏輯與閱讀",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "subject": "英語文",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "2": [
          {
            "subject": "英語文",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "3": [
          {
            "subject": "英語文",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "4": [
          {
            "subject": "英語文",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "8": [
          {
            "subject": "英語文(輔)",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "9": [
          {
            "subject": "英文素養",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ]
      },
      "星期四": {
        "2": [
          {
            "subject": "英語文",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "4": [
          {
            "subject": "英語文",
            "classes": [
              "國七A",
              "國七B"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "9": [
          {
            "subject": "英文素養",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ]
      },
      "星期五": {
        "3": [
          {
            "subject": "英語文",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "4": [
          {
            "subject": "英語文",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "5": [
          {
            "subject": "班會",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "綜合活動",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "綜合活動",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "英語文(輔)",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "9": [
          {
            "subject": "英文素養",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ]
      }
    },
    "蔡佳玲": {
      "星期一": {
        "1": [
          {
            "subject": "理化",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "理化",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "理化",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "數學(輔)",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "自然探究",
            "classes": [
              "高二理組"
            ],
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ]
      },
      "星期二": {
        "2": [
          {
            "subject": "理化",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "理化",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "理化(輔)",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "數學探究",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "subject": "理化",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "理化",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "數學",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "數學",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "自然探究",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "subject": "理化",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "理化",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "數學",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "數學",
            "classes": [
              "國八A",
              "國八B"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "理化(輔)",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "自然探究",
            "classes": [
              "高二理組"
            ],
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "subject": "理化",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "班會",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "綜合活動",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "綜合活動",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "跨學科邏輯與閱讀",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "自然探究(理化)",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ]
      }
    },
    "蔡玉良": {
      "星期一": {
        "5": [
          {
            "subject": "地球科學",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "地球科學",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "選修物理(輔)",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "9": [
          {
            "subject": "選修地球科學-地質",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ]
      },
      "星期二": {
        "7": [
          {
            "subject": "選修地球科學-地質",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "8": [
          {
            "subject": "物理(輔)",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "自然探究",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ]
      },
      "星期三": {
        "5": [
          {
            "subject": "選修物理-力學二與",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "6": [
          {
            "subject": "選修物理-力學二與",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ]
      },
      "星期四": {
        "3": [
          {
            "subject": "物理",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "物理",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "選修物理-力學二與",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "6": [
          {
            "subject": "選修物理-力學二與",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ]
      }
    },
    "蘇試": {
      "星期一": {
        "8": [
          {
            "subject": "數學(輔)",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "數學探究",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ]
      },
      "星期二": {
        "2": [
          {
            "subject": "數學",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "數學",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "數學甲",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "5": [
          {
            "subject": "數學甲",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "8": [
          {
            "subject": "數學(輔)",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ],
        "9": [
          {
            "subject": "數學探究",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ]
      },
      "星期三": {
        "8": [
          {
            "subject": "數學(輔)",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "數學探究",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "subject": "數學",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "數學",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ]
      },
      "星期五": {
        "6": [
          {
            "subject": "數學甲",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "7": [
          {
            "subject": "數學甲",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "8": [
          {
            "subject": "數學甲(輔)",
            "classes": [
              "高三理組"
            ],
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "9": [
          {
            "subject": "數學探究",
            "classes": [
              "高三理組"
            ],
            "rooms": []
          }
        ]
      }
    },
    "許晴雯": {
      "星期一": {
        "2": [
          {
            "subject": "生命教育",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "彈性學習-生命教育",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "倫理思辨",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "彈性學習-生命教育",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ]
      },
      "星期三": {
        "5": [
          {
            "subject": "彈性學習-生命教育",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "彈性學習-生命教育",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "subject": "彈性學習-生命教育",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "彈性學習-生命教育",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ]
      },
      "星期五": {
        "3": [
          {
            "subject": "思考：智慧的啟航",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ]
      },
      "星期二": {
        "7": [
          {
            "subject": "思考：智慧的啟航",
            "classes": [
              "高三文組"
            ],
            "rooms": []
          }
        ]
      }
    },
    "邱千芸": {
      "星期三": {
        "2": [
          {
            "subject": "英文增補",
            "classes": [
              "高三理組",
              "高三文組"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "彈性學習-自主學習",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "語文學習",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ]
      },
      "星期四": {
        "8": [
          {
            "subject": "語文素養與國寫練",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "跨學科邏輯與閱讀",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ]
      },
      "星期五": {
        "8": [
          {
            "subject": "語文素養與國寫練",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "閱讀素養與演練",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ]
      }
    },
    "鄒湘平": {
      "星期二": {
        "1": [
          {
            "subject": "英語文",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "英語文",
            "classes": [
              "高一"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "subject": "英語文",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "英語文",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "英語文",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "英語文",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "英語文",
            "classes": [
              "高一"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "7": [
          {
            "subject": "英語文",
            "classes": [
              "高一"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "8": [
          {
            "subject": "英語文(輔)",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "英文素養",
            "classes": [
              "高一"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ]
      },
      "星期五": {
        "2": [
          {
            "subject": "英語文",
            "classes": [
              "高一"
            ],
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "3": [
          {
            "subject": "英語文",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "英語文",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "英語文(輔)",
            "classes": [
              "國九A",
              "國九B"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "英文素養",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ]
      }
    },
    "陳昱澐": {
      "星期二": {
        "5": [
          {
            "subject": "多元選修",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "多元選修",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "資訊科技",
            "classes": [
              "高一"
            ],
            "rooms": [
              "6F 電腦教室"
            ]
          }
        ]
      }
    },
    "陳瑋筠": {
      "星期一": {
        "1": [
          {
            "subject": "歷史",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "歷史",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "歷史",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "歷史(輔)",
            "classes": [
              "高二文組"
            ],
            "rooms": []
          }
        ]
      },
      "星期二": {
        "1": [
          {
            "subject": "歷史",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "歷史",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "多元選修",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "多元選修",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "歷史(輔)",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "subject": "歷史",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "歷史",
            "classes": [
              "高一"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "歷史",
            "classes": [
              "高二理組",
              "高二文組"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "歷史",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "公民與社會",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "歷史(輔)",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ]
      },
      "星期四": {
        "5": [
          {
            "subject": "歷史",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "歷史(輔)",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "9": [
          {
            "subject": "跨學科邏輯與閱讀",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ]
      },
      "星期五": {
        "4": [
          {
            "subject": "公民與社會",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "班會",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "綜合活動",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ],
        "7": [
          {
            "subject": "綜合活動",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ],
        "8": [
          {
            "subject": "歷史(輔)",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ]
      }
    },
    "韓鳳娟": {
      "星期二": {
        "1": [
          {
            "subject": "童軍",
            "classes": [
              "國九A"
            ],
            "rooms": []
          }
        ],
        "2": [
          {
            "subject": "童軍",
            "classes": [
              "國七B"
            ],
            "rooms": []
          }
        ],
        "3": [
          {
            "subject": "童軍",
            "classes": [
              "國七A"
            ],
            "rooms": []
          }
        ],
        "4": [
          {
            "subject": "童軍",
            "classes": [
              "國八A"
            ],
            "rooms": []
          }
        ],
        "5": [
          {
            "subject": "童軍",
            "classes": [
              "國九B"
            ],
            "rooms": []
          }
        ],
        "6": [
          {
            "subject": "童軍",
            "classes": [
              "國八B"
            ],
            "rooms": []
          }
        ]
      }
    }
  },
  "classSchedule": {
    "國七A": {
      "星期一": {
        "1": [
          {
            "teacher": "陳瑋筠",
            "subject": "歷史",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "姜靜",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "王志遠",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "4": [
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "王志遠",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "5": [
          {
            "teacher": "羅雅苓",
            "subject": "視覺藝術-ESL",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "視覺藝術-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "視覺藝術-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "視覺藝術-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "6": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "羅雅苓",
            "subject": "ESL(輔)",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "ESL(輔)",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "ESL(輔)",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "ESL(輔)",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "9": [
          {
            "teacher": "莊旭惠",
            "subject": "英文素養",
            "rooms": []
          }
        ]
      },
      "星期二": {
        "1": [
          {
            "teacher": "王世宗",
            "subject": "生物",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "倪世斌",
            "subject": "生活科技",
            "rooms": [
              "6F 生活科技教室"
            ]
          }
        ],
        "3": [
          {
            "teacher": "韓鳳娟",
            "subject": "童軍",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "姜靜",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "王志遠",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "7": [
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "王志遠",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "8": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文(輔)",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文(輔)",
            "rooms": []
          },
          {
            "teacher": "姜靜",
            "subject": "英語文(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "何文達",
            "subject": "社會探究",
            "rooms": []
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "teacher": "何文達",
            "subject": "地理",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "翟洛嫻",
            "subject": "音樂",
            "rooms": [
              "4F 音樂教室"
            ]
          }
        ],
        "4": [
          {
            "teacher": "倪世斌",
            "subject": "資訊科技",
            "rooms": [
              "6F 電腦教室"
            ]
          }
        ],
        "5": [
          {
            "teacher": "許晴雯",
            "subject": "彈性學習-生命教育",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "王世宗",
            "subject": "健康教育",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "陳瑋筠",
            "subject": "公民與社會",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "陳瑋筠",
            "subject": "歷史(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "曾美芝",
            "subject": "數學探究",
            "rooms": []
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "羅雅苓",
            "subject": "彈性學習-閱讀心力",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "彈性學習-閱讀心力",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "彈性學習-閱讀心力",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "彈性學習-閱讀心力",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "4": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "姜靜",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "王世宗",
            "subject": "生物",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "羅雅苓",
            "subject": "家政-ESL",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "家政-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "家政-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "家政-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "7": [
          {
            "teacher": "羅雅苓",
            "subject": "表演藝術-ESL",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "表演藝術-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "表演藝術-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "表演藝術-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "8": [
          {
            "teacher": "曾美芝",
            "subject": "數學(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "陳瑋筠",
            "subject": "跨學科邏輯與閱讀",
            "rooms": []
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "teacher": "劉時妤",
            "subject": "輔導活動",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "曾淑汝",
            "subject": "本土語言",
            "rooms": []
          },
          {
            "teacher": "紀芝苓",
            "subject": "本土語言",
            "rooms": []
          },
          {
            "teacher": "古靜宜",
            "subject": "本土語言",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "王世宗",
            "subject": "生物",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "陳瑋筠",
            "subject": "班會",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "陳瑋筠",
            "subject": "綜合活動",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "陳瑋筠",
            "subject": "綜合活動",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "王妤文",
            "subject": "跨學科邏輯與閱讀",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "羅雅苓",
            "subject": "英文素養-ESL",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "英文素養-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "英文素養-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "英文素養-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ]
      }
    },
    "國七B": {
      "星期一": {
        "1": [
          {
            "teacher": "王世宗",
            "subject": "健康教育",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "姜靜",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "王志遠",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "4": [
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "王志遠",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "5": [
          {
            "teacher": "羅雅苓",
            "subject": "視覺藝術-ESL",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "視覺藝術-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "視覺藝術-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "視覺藝術-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "6": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "羅雅苓",
            "subject": "ESL(輔)",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "ESL(輔)",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "ESL(輔)",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "ESL(輔)",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "9": [
          {
            "teacher": "吳宇綸",
            "subject": "數學探究",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ]
      },
      "星期二": {
        "1": [
          {
            "teacher": "劉時妤",
            "subject": "輔導活動",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "韓鳳娟",
            "subject": "童軍",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "姜靜",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "何文達",
            "subject": "地理",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "王志遠",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "7": [
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "王志遠",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "8": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文(輔)",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文(輔)",
            "rooms": []
          },
          {
            "teacher": "姜靜",
            "subject": "英語文(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "莊旭惠",
            "subject": "跨學科邏輯與閱讀",
            "rooms": []
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "倪世斌",
            "subject": "資訊科技",
            "rooms": [
              "6F 電腦教室"
            ]
          }
        ],
        "3": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "翟洛嫻",
            "subject": "音樂",
            "rooms": [
              "4F 音樂教室"
            ]
          }
        ],
        "5": [
          {
            "teacher": "王世宗",
            "subject": "生物",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "倪世斌",
            "subject": "生活科技",
            "rooms": [
              "6F 生活科技教室"
            ]
          }
        ],
        "7": [
          {
            "teacher": "許晴雯",
            "subject": "彈性學習-生命教育",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "王妤文",
            "subject": "跨學科邏輯與閱讀",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "莊旭惠",
            "subject": "英文素養",
            "rooms": []
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "teacher": "王世宗",
            "subject": "生物",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "羅雅苓",
            "subject": "彈性學習-閱讀心力",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "彈性學習-閱讀心力",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "彈性學習-閱讀心力",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "彈性學習-閱讀心力",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "4": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "姜靜",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "陳瑋筠",
            "subject": "歷史",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "羅雅苓",
            "subject": "家政-ESL",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "家政-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "家政-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "家政-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "7": [
          {
            "teacher": "羅雅苓",
            "subject": "表演藝術-ESL",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "表演藝術-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "表演藝術-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "表演藝術-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "8": [
          {
            "teacher": "吳宇綸",
            "subject": "數學(輔)",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "9": [
          {
            "teacher": "何文達",
            "subject": "社會探究",
            "rooms": []
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "王世宗",
            "subject": "生物",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "曾淑汝",
            "subject": "本土語言",
            "rooms": []
          },
          {
            "teacher": "紀芝苓",
            "subject": "本土語言",
            "rooms": []
          },
          {
            "teacher": "古靜宜",
            "subject": "本土語言",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "陳瑋筠",
            "subject": "公民與社會",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "莊旭惠",
            "subject": "班會",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "莊旭惠",
            "subject": "綜合活動",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "莊旭惠",
            "subject": "綜合活動",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "陳瑋筠",
            "subject": "歷史(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "羅雅苓",
            "subject": "英文素養-ESL",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "英文素養-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "英文素養-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "英文素養-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ]
      }
    },
    "國九A": {
      "星期一": {
        "1": [
          {
            "teacher": "蔡佳玲",
            "subject": "理化",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "王世宗",
            "subject": "健康教育",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "Roja",
            "subject": "彈性學習-生活玩家",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "彈性學習-生活玩家",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "彈性學習-生活玩家",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "5": [
          {
            "teacher": "蔡玉良",
            "subject": "地球科學",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "倪世斌",
            "subject": "資訊科技",
            "rooms": [
              "6F 電腦教室"
            ]
          }
        ],
        "7": [
          {
            "teacher": "Roja",
            "subject": "彈性學習-閱讀與寫",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "彈性學習-閱讀與寫",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "彈性學習-閱讀與寫",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "8": [
          {
            "teacher": "桂松山",
            "subject": "數學(輔)",
            "rooms": []
          },
          {
            "teacher": "蘇試",
            "subject": "數學(輔)",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學(輔)",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "9": [
          {
            "teacher": "王世宗",
            "subject": "自然探究",
            "rooms": []
          }
        ]
      },
      "星期二": {
        "1": [
          {
            "teacher": "韓鳳娟",
            "subject": "童軍",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "桂松山",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "蘇試",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "3": [
          {
            "teacher": "桂松山",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "蘇試",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "4": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "羅衣茜",
            "subject": "公民與社會",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "Roja",
            "subject": "表演藝術-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "表演藝術-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "表演藝術-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "8": [
          {
            "teacher": "陳瑋筠",
            "subject": "歷史(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "王世宗",
            "subject": "多元學習",
            "rooms": []
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "teacher": "翟洛嫻",
            "subject": "音樂",
            "rooms": [
              "4F 音樂教室"
            ]
          }
        ],
        "2": [
          {
            "teacher": "何文達",
            "subject": "地理",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "鄒湘平",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "鄒湘平",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "陳瑋筠",
            "subject": "歷史",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "Roja",
            "subject": "視覺藝術-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "視覺藝術-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "視覺藝術-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "8": [
          {
            "teacher": "邱千芸",
            "subject": "語文學習",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "桂松山",
            "subject": "數學探究",
            "rooms": []
          },
          {
            "teacher": "蘇試",
            "subject": "數學探究",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學探究",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "teacher": "桂松山",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "蘇試",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "2": [
          {
            "teacher": "桂松山",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "蘇試",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "3": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "劉時妤",
            "subject": "輔導活動",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "許晴雯",
            "subject": "彈性學習-生命教育",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "倪世斌",
            "subject": "生活科技",
            "rooms": [
              "6F 生活科技教室"
            ]
          }
        ],
        "8": [
          {
            "teacher": "蔡佳玲",
            "subject": "理化(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "莊旭惠",
            "subject": "英文素養",
            "rooms": []
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "teacher": "蔡佳玲",
            "subject": "理化",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "王淑華",
            "subject": "家政",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "鄒湘平",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "王世宗",
            "subject": "班會",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "王世宗",
            "subject": "綜合活動",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "王世宗",
            "subject": "綜合活動",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文(輔)",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文(輔)",
            "rooms": []
          },
          {
            "teacher": "鄒湘平",
            "subject": "英語文(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "羅衣茜",
            "subject": "社會探究",
            "rooms": []
          }
        ]
      }
    },
    "國九B": {
      "星期一": {
        "1": [
          {
            "teacher": "劉時妤",
            "subject": "輔導活動",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "倪世斌",
            "subject": "資訊科技",
            "rooms": [
              "6F 電腦教室"
            ]
          }
        ],
        "3": [
          {
            "teacher": "許晴雯",
            "subject": "彈性學習-生命教育",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "Roja",
            "subject": "彈性學習-生活玩家",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "彈性學習-生活玩家",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "彈性學習-生活玩家",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "5": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "蔡玉良",
            "subject": "地球科學",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "Roja",
            "subject": "彈性學習-閱讀與寫",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "彈性學習-閱讀與寫",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "彈性學習-閱讀與寫",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "8": [
          {
            "teacher": "桂松山",
            "subject": "數學(輔)",
            "rooms": []
          },
          {
            "teacher": "蘇試",
            "subject": "數學(輔)",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學(輔)",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "9": [
          {
            "teacher": "羅衣茜",
            "subject": "社會探究",
            "rooms": []
          }
        ]
      },
      "星期二": {
        "1": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "桂松山",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "蘇試",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "3": [
          {
            "teacher": "桂松山",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "蘇試",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "4": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "韓鳳娟",
            "subject": "童軍",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "蔡佳玲",
            "subject": "理化",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "Roja",
            "subject": "表演藝術-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "表演藝術-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "表演藝術-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "8": [
          {
            "teacher": "蔡佳玲",
            "subject": "理化(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "羅雅苓",
            "subject": "多元學習",
            "rooms": []
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "teacher": "陳瑋筠",
            "subject": "歷史",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "翟洛嫻",
            "subject": "音樂",
            "rooms": [
              "4F 音樂教室"
            ]
          }
        ],
        "3": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "鄒湘平",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "鄒湘平",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "何文達",
            "subject": "地理",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "Roja",
            "subject": "視覺藝術-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "視覺藝術-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "視覺藝術-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "8": [
          {
            "teacher": "羅雅苓",
            "subject": "語文學習",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "桂松山",
            "subject": "數學探究",
            "rooms": []
          },
          {
            "teacher": "蘇試",
            "subject": "數學探究",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學探究",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "teacher": "桂松山",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "蘇試",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "2": [
          {
            "teacher": "桂松山",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "蘇試",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "3": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "蔡佳玲",
            "subject": "理化",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "王世宗",
            "subject": "健康教育",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "羅衣茜",
            "subject": "公民與社會",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "陳瑋筠",
            "subject": "歷史(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "羅雅苓",
            "subject": "英文素養",
            "rooms": []
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "倪世斌",
            "subject": "生活科技",
            "rooms": [
              "6F 生活科技教室"
            ]
          }
        ],
        "3": [
          {
            "teacher": "王淑華",
            "subject": "家政",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "鄒湘平",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "羅雅苓",
            "subject": "班會",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "羅雅苓",
            "subject": "綜合活動",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "羅雅苓",
            "subject": "綜合活動",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文(輔)",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文(輔)",
            "rooms": []
          },
          {
            "teacher": "鄒湘平",
            "subject": "英語文(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "王世宗",
            "subject": "自然探究",
            "rooms": []
          }
        ]
      }
    },
    "國八A": {
      "星期一": {
        "1": [
          {
            "teacher": "倪世斌",
            "subject": "資訊科技",
            "rooms": [
              "6F 電腦教室"
            ]
          }
        ],
        "2": [
          {
            "teacher": "劉時妤",
            "subject": "輔導活動",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "姜靜",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "何文達",
            "subject": "公民與社會",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "許晴雯",
            "subject": "彈性學習-生命教育",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "蔡佳玲",
            "subject": "理化",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "蔡佳玲",
            "subject": "數學(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "姜靜",
            "subject": "英文素養-ESL",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "英文素養-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "英文素養-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "英文素養-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ]
      },
      "星期二": {
        "1": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "陳瑋筠",
            "subject": "歷史",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "姜靜",
            "subject": "表演藝術-ESL",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "表演藝術-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "表演藝術-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "表演藝術-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "4": [
          {
            "teacher": "韓鳳娟",
            "subject": "童軍",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "姜靜",
            "subject": "彈性學習-英語探索",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "彈性學習-英語探索",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "彈性學習-英語探索",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "彈性學習-英語探索",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "6": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "姜靜",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "何文達",
            "subject": "公民與社會(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "蔡佳玲",
            "subject": "數學探究",
            "rooms": []
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "teacher": "倪世斌",
            "subject": "生活科技",
            "rooms": [
              "6F 生活科技教室"
            ]
          }
        ],
        "2": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "姜靜",
            "subject": "健康教育-ESL",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "健康教育-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "健康教育-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "健康教育-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "4": [
          {
            "teacher": "姜靜",
            "subject": "視覺藝術-ESL",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "視覺藝術-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "視覺藝術-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "視覺藝術-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "5": [
          {
            "teacher": "蔡佳玲",
            "subject": "理化",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "蔡佳玲",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "桂松山",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "7": [
          {
            "teacher": "蔡佳玲",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "桂松山",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "8": [
          {
            "teacher": "姜靜",
            "subject": "ESL(輔)",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "ESL(輔)",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "ESL(輔)",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "ESL(輔)",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "9": [
          {
            "teacher": "何文達",
            "subject": "社會探究",
            "rooms": []
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "teacher": "蔡佳玲",
            "subject": "理化",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "姜靜",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "翟洛嫻",
            "subject": "音樂",
            "rooms": [
              "4F 音樂教室"
            ]
          }
        ],
        "4": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "蔡佳玲",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "桂松山",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "7": [
          {
            "teacher": "蔡佳玲",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "桂松山",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "8": [
          {
            "teacher": "姜靜",
            "subject": "英語文(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "邱千芸",
            "subject": "跨學科邏輯與閱讀",
            "rooms": []
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "teacher": "王淑華",
            "subject": "家政",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "曾淑汝",
            "subject": "本土語言",
            "rooms": []
          },
          {
            "teacher": "紀芝苓",
            "subject": "本土語言",
            "rooms": []
          },
          {
            "teacher": "古靜宜",
            "subject": "本土語言",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "何文達",
            "subject": "地理",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "蔡佳玲",
            "subject": "班會",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "蔡佳玲",
            "subject": "綜合活動",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "蔡佳玲",
            "subject": "綜合活動",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "蔡佳玲",
            "subject": "跨學科邏輯與閱讀",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "蔡佳玲",
            "subject": "自然探究(理化)",
            "rooms": []
          }
        ]
      }
    },
    "國八B": {
      "星期一": {
        "1": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "陳瑋筠",
            "subject": "歷史",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "蔡佳玲",
            "subject": "理化",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "姜靜",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "劉時妤",
            "subject": "輔導活動",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "倪世斌",
            "subject": "資訊科技",
            "rooms": [
              "6F 電腦教室"
            ]
          }
        ],
        "8": [
          {
            "teacher": "姜靜",
            "subject": "跨學科邏輯與閱讀",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "姜靜",
            "subject": "英文素養-ESL",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "英文素養-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "英文素養-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "英文素養-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ]
      },
      "星期二": {
        "1": [
          {
            "teacher": "倪世斌",
            "subject": "生活科技",
            "rooms": [
              "6F 生活科技教室"
            ]
          }
        ],
        "2": [
          {
            "teacher": "蔡佳玲",
            "subject": "理化",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "姜靜",
            "subject": "表演藝術-ESL",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "表演藝術-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "表演藝術-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "表演藝術-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "4": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "姜靜",
            "subject": "彈性學習-英語探索",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "彈性學習-英語探索",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "彈性學習-英語探索",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "彈性學習-英語探索",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "6": [
          {
            "teacher": "韓鳳娟",
            "subject": "童軍",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "姜靜",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "吳宇綸",
            "subject": "數學(輔)",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "9": [
          {
            "teacher": "吳宇綸",
            "subject": "數學探究",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "teacher": "蔡佳玲",
            "subject": "理化",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "姜靜",
            "subject": "健康教育-ESL",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "健康教育-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "健康教育-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "健康教育-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "4": [
          {
            "teacher": "姜靜",
            "subject": "視覺藝術-ESL",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "視覺藝術-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "視覺藝術-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "視覺藝術-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "5": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "蔡佳玲",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "桂松山",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "7": [
          {
            "teacher": "蔡佳玲",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "桂松山",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "8": [
          {
            "teacher": "姜靜",
            "subject": "ESL(輔)",
            "rooms": []
          },
          {
            "teacher": "Roja",
            "subject": "ESL(輔)",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "ESL(輔)",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "ESL(輔)",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "9": [
          {
            "teacher": "蔡佳玲",
            "subject": "自然探究",
            "rooms": []
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "teacher": "許晴雯",
            "subject": "彈性學習-生命教育",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "姜靜",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "羅雅苓",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "何文達",
            "subject": "地理",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "翟洛嫻",
            "subject": "音樂",
            "rooms": [
              "4F 音樂教室"
            ]
          }
        ],
        "5": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "蔡佳玲",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "桂松山",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "7": [
          {
            "teacher": "蔡佳玲",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "桂松山",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "吳宇綸",
            "subject": "數學",
            "rooms": [
              "4F 分組教室(一)"
            ]
          }
        ],
        "8": [
          {
            "teacher": "何文達",
            "subject": "公民與社會(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "姜靜",
            "subject": "跨學科邏輯與閱讀",
            "rooms": []
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "teacher": "何文達",
            "subject": "公民與社會",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "曾淑汝",
            "subject": "本土語言",
            "rooms": []
          },
          {
            "teacher": "紀芝苓",
            "subject": "本土語言",
            "rooms": []
          },
          {
            "teacher": "古靜宜",
            "subject": "本土語言",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "王淑華",
            "subject": "家政",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "姜靜",
            "subject": "班會",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "姜靜",
            "subject": "綜合活動",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "姜靜",
            "subject": "綜合活動",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "姜靜",
            "subject": "英語文(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "何文達",
            "subject": "社會探究",
            "rooms": []
          }
        ]
      }
    },
    "高一": {
      "星期一": {
        "1": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "Roja",
            "subject": "英語聽講",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "英語聽講",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "英語聽講",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "4": [
          {
            "teacher": "王世宗",
            "subject": "生物",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "許晴雯",
            "subject": "倫理思辨",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "羅衣茜",
            "subject": "公民與社會",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "何文達",
            "subject": "地理",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "何文達",
            "subject": "地理(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "曾美芝",
            "subject": "數學探究",
            "rooms": []
          },
          {
            "teacher": "蘇試",
            "subject": "數學探究",
            "rooms": []
          }
        ]
      },
      "星期二": {
        "1": [
          {
            "teacher": "陳瑋筠",
            "subject": "歷史",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "姜靜",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "鄒湘平",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "3": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "何文達",
            "subject": "地理",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "陳瑋筠",
            "subject": "多元選修",
            "rooms": []
          },
          {
            "teacher": "王世宗",
            "subject": "多元選修",
            "rooms": []
          },
          {
            "teacher": "陳昱澐",
            "subject": "多元選修",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "陳瑋筠",
            "subject": "多元選修",
            "rooms": []
          },
          {
            "teacher": "王世宗",
            "subject": "多元選修",
            "rooms": []
          },
          {
            "teacher": "陳昱澐",
            "subject": "多元選修",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "陳昱澐",
            "subject": "資訊科技",
            "rooms": [
              "6F 電腦教室"
            ]
          }
        ],
        "8": [
          {
            "teacher": "蔡玉良",
            "subject": "物理(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "蔡玉良",
            "subject": "自然探究",
            "rooms": []
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "陳瑋筠",
            "subject": "歷史",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "4": [
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "5": [
          {
            "teacher": "邱千芸",
            "subject": "彈性學習-自主學習",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "姜靜",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "鄒湘平",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "7": [
          {
            "teacher": "姜靜",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "鄒湘平",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "8": [
          {
            "teacher": "曾美芝",
            "subject": "數學(輔)",
            "rooms": []
          },
          {
            "teacher": "蘇試",
            "subject": "數學(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "姜靜",
            "subject": "英文素養",
            "rooms": []
          },
          {
            "teacher": "鄒湘平",
            "subject": "英文素養",
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "teacher": "羅衣茜",
            "subject": "公民與社會",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "王世宗",
            "subject": "生物",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "蔡玉良",
            "subject": "物理",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "蔡玉良",
            "subject": "物理",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "6": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "Roja",
            "subject": "ESL(輔)",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "ESL(輔)",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "ESL(輔)",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "9": [
          {
            "teacher": "Roja",
            "subject": "英文素養-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "英文素養-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "英文素養-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "teacher": "曾美芝",
            "subject": "本土語言",
            "rooms": []
          },
          {
            "teacher": "曾淑汝",
            "subject": "本土語言",
            "rooms": []
          },
          {
            "teacher": "古靜宜",
            "subject": "本土語言",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "姜靜",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "鄒湘平",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "3": [
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "4": [
          {
            "teacher": "Roja",
            "subject": "專題研究",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "專題研究",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "專題研究",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "5": [
          {
            "teacher": "張秀玫",
            "subject": "班會",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "張秀玫",
            "subject": "週會/社團",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "張秀玫",
            "subject": "週會/社團",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "張秀玫",
            "subject": "閱讀素養與演練",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "邱千芸",
            "subject": "閱讀素養與演練",
            "rooms": []
          }
        ]
      }
    },
    "高三文組": {
      "星期一": {
        "1": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "劉玉華",
            "subject": "週會/社團",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "王妤文",
            "subject": "英文素養-ESL",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "之宇",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "之宇",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "之宇",
            "subject": "英文閱讀與寫作",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "羅衣茜",
            "subject": "公共議題與社會探",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "王妤文",
            "subject": "閱讀素養與演練",
            "rooms": []
          }
        ]
      },
      "星期二": {
        "1": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "王志遠",
            "subject": "數學增補",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "王志遠",
            "subject": "數學乙",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "王志遠",
            "subject": "數學乙",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "之宇",
            "subject": "英文閱讀與寫作",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "許晴雯",
            "subject": "思考：智慧的啟航",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "之宇",
            "subject": "英語文(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "之宇",
            "subject": "英文素養",
            "rooms": []
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "邱千芸",
            "subject": "英文增補",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "劉玉華",
            "subject": "國文增補",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "王妤文",
            "subject": "美術",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "羅衣茜",
            "subject": "現代社會與經濟",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "李偉",
            "subject": "族群、性別與國家",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "李偉",
            "subject": "族群、性別與國家",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "李偉",
            "subject": "族群、性別與國家",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "李偉",
            "subject": "社會探究",
            "rooms": []
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "teacher": "翟洛嫻",
            "subject": "音樂",
            "rooms": [
              "4F 音樂教室"
            ]
          }
        ],
        "2": [
          {
            "teacher": "林全",
            "subject": "空間資訊科技",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "林全",
            "subject": "空間資訊科技",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "林全",
            "subject": "空間資訊科技",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "劉玉華",
            "subject": "各類文學選讀",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "胡佳思",
            "subject": "現代社會與經濟",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "胡佳思",
            "subject": "現代社會與經濟",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "胡佳思",
            "subject": "現代社會與經濟(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "名敦",
            "subject": "國文寫作",
            "rooms": []
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "teacher": "羅衣茜",
            "subject": "公共議題與社會探",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "羅衣茜",
            "subject": "族群、性別與國家",
            "rooms": []
          },
          {
            "teacher": "王妤文",
            "subject": "族群、性別與國家",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "許晴雯",
            "subject": "思考：智慧的啟航",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "劉玉華",
            "subject": "班會",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "王志遠",
            "subject": "數學乙",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "王志遠",
            "subject": "數學乙",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "王志遠",
            "subject": "數學乙(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "王志遠",
            "subject": "數學探究",
            "rooms": []
          }
        ]
      }
    },
    "高三理組": {
      "星期一": {
        "1": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "劉玉華",
            "subject": "週會",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "王妤文",
            "subject": "英文素養-ESL",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "之宇",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "之宇",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "之宇",
            "subject": "英文閱讀與寫作",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "蔡玉良",
            "subject": "選修物理(輔)",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "9": [
          {
            "teacher": "蔡玉良",
            "subject": "選修地球科學-地質",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ]
      },
      "星期二": {
        "1": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "王志遠",
            "subject": "數學增補",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "蘇試",
            "subject": "數學甲",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "5": [
          {
            "teacher": "蘇試",
            "subject": "數學甲",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "6": [
          {
            "teacher": "之宇",
            "subject": "英文閱讀與寫作",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "蔡玉良",
            "subject": "選修地球科學-地質",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "8": [
          {
            "teacher": "之宇",
            "subject": "英語文(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "之宇",
            "subject": "英文素養",
            "rooms": []
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "邱千芸",
            "subject": "英文增補",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "劉玉華",
            "subject": "國文增補",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "王妤文",
            "subject": "美術",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "蔡玉良",
            "subject": "選修物理-力學二與",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "6": [
          {
            "teacher": "蔡玉良",
            "subject": "選修物理-力學二與",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "7": [
          {
            "teacher": "王世宗",
            "subject": "選修生物-生命的起",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "8": [
          {
            "teacher": "王世宗",
            "subject": "生物(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "王世宗",
            "subject": "自然探究",
            "rooms": []
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "teacher": "翟洛嫻",
            "subject": "音樂",
            "rooms": [
              "4F 音樂教室"
            ]
          }
        ],
        "2": [
          {
            "teacher": "楊志元",
            "subject": "選修化學-化學反應",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "3": [
          {
            "teacher": "楊志元",
            "subject": "選修化學-化學反應",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "4": [
          {
            "teacher": "王世宗",
            "subject": "選修生物-動物體的",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "5": [
          {
            "teacher": "蔡玉良",
            "subject": "選修物理-力學二與",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "6": [
          {
            "teacher": "蔡玉良",
            "subject": "選修物理-力學二與",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "7": [
          {
            "teacher": "王世宗",
            "subject": "選修生物-動物體的",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "8": [
          {
            "teacher": "王妤文",
            "subject": "閱讀素養與演練",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "名敦",
            "subject": "國文寫作",
            "rooms": []
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "teacher": "王世宗",
            "subject": "選修生物-生命的起",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "2": [
          {
            "teacher": "楊志元",
            "subject": "選修化學-化學反應",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "3": [
          {
            "teacher": "楊志元",
            "subject": "選修化學-化學反應",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "4": [
          {
            "teacher": "劉玉華",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "劉玉華",
            "subject": "班會",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "蘇試",
            "subject": "數學甲",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "7": [
          {
            "teacher": "蘇試",
            "subject": "數學甲",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "8": [
          {
            "teacher": "蘇試",
            "subject": "數學甲(輔)",
            "rooms": [
              "5F 自主學習教室(一)"
            ]
          }
        ],
        "9": [
          {
            "teacher": "蘇試",
            "subject": "數學探究",
            "rooms": []
          }
        ]
      }
    },
    "高二文組": {
      "星期一": {
        "1": [
          {
            "teacher": "曾美芝",
            "subject": "增廣補強",
            "rooms": []
          },
          {
            "teacher": "莊旭惠",
            "subject": "增廣補強",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "許晴雯",
            "subject": "生命教育",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "何文達",
            "subject": "地理",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "陳瑋筠",
            "subject": "歷史",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "羅衣茜",
            "subject": "公民與社會",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "Roja",
            "subject": "英文專題簡報實作",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "英文專題簡報實作",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "英文專題簡報實作",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "7": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "陳瑋筠",
            "subject": "歷史(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "何文達",
            "subject": "社會探究",
            "rooms": []
          }
        ]
      },
      "星期二": {
        "1": [
          {
            "teacher": "鄒湘平",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "2": [
          {
            "teacher": "王妤文",
            "subject": "旅遊文學",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "曾美芝",
            "subject": "彈性學習-自主學習",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "Roja",
            "subject": "美術",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "美術",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "美術",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "5": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "何文達",
            "subject": "地理",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "蘇試",
            "subject": "數學(輔)",
            "rooms": []
          },
          {
            "teacher": "曾美芝",
            "subject": "數學(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "蘇試",
            "subject": "數學探究",
            "rooms": []
          },
          {
            "teacher": "曾美芝",
            "subject": "數學探究",
            "rooms": []
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "teacher": "鄒湘平",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "2": [
          {
            "teacher": "鄒湘平",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "3": [
          {
            "teacher": "陳瑋筠",
            "subject": "歷史",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "羅衣茜",
            "subject": "公民與社會",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          },
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "Roja",
            "subject": "英文專題簡報實作",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "英文專題簡報實作",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "英文專題簡報實作",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "7": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "鄒湘平",
            "subject": "英語文(輔)",
            "rooms": []
          },
          {
            "teacher": "莊旭惠",
            "subject": "英語文(輔)",
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "9": [
          {
            "teacher": "Roja",
            "subject": "英文素養-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "英文素養-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "英文素養-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "teacher": "楊志元",
            "subject": "自然科學探究",
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ],
        "2": [
          {
            "teacher": "翟洛嫻",
            "subject": "音樂",
            "rooms": [
              "4F 音樂教室"
            ]
          }
        ],
        "3": [
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          },
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          },
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "楊政忠",
            "subject": "全民國防教育",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "邱千芸",
            "subject": "語文素養與國寫練",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "羅衣茜",
            "subject": "社會探究",
            "rooms": []
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "teacher": "楊志元",
            "subject": "自然科學探究",
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ],
        "2": [
          {
            "teacher": "王妤文",
            "subject": "旅遊文學",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "鄒湘平",
            "subject": "英語文",
            "rooms": []
          },
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ],
        "4": [
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          },
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "曾美芝",
            "subject": "班會",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "曾美芝",
            "subject": "週會/社團",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "曾美芝",
            "subject": "週會/社團",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "邱千芸",
            "subject": "語文素養與國寫練",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "鄒湘平",
            "subject": "英文素養",
            "rooms": []
          },
          {
            "teacher": "莊旭惠",
            "subject": "英文素養",
            "rooms": [
              "5F 視聽教室"
            ]
          }
        ]
      }
    },
    "高二理組": {
      "星期一": {
        "1": [
          {
            "teacher": "曾美芝",
            "subject": "增廣補強",
            "rooms": []
          },
          {
            "teacher": "莊旭惠",
            "subject": "增廣補強",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "許晴雯",
            "subject": "生命教育",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "何文達",
            "subject": "地理",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "陳瑋筠",
            "subject": "歷史",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "羅衣茜",
            "subject": "公民與社會",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "Roja",
            "subject": "英文專題簡報實作",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "英文專題簡報實作",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "英文專題簡報實作",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "7": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "王世宗",
            "subject": "生物(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "蔡佳玲",
            "subject": "自然探究",
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ]
      },
      "星期二": {
        "1": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "鄒湘平",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "曾美芝",
            "subject": "生活藝數",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "曾美芝",
            "subject": "彈性學習-自主學習",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "Roja",
            "subject": "美術",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "美術",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "美術",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "5": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "何文達",
            "subject": "地理",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "曾美芝",
            "subject": "數學(輔)",
            "rooms": []
          },
          {
            "teacher": "蘇試",
            "subject": "數學(輔)",
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ],
        "9": [
          {
            "teacher": "曾美芝",
            "subject": "數學探究",
            "rooms": []
          },
          {
            "teacher": "蘇試",
            "subject": "數學探究",
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ]
      },
      "星期三": {
        "1": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "鄒湘平",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "2": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "鄒湘平",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "陳瑋筠",
            "subject": "歷史",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "羅衣茜",
            "subject": "公民與社會",
            "rooms": []
          }
        ],
        "5": [
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ],
        "6": [
          {
            "teacher": "Roja",
            "subject": "英文專題簡報實作",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "英文專題簡報實作",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "英文專題簡報實作",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ],
        "7": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文(輔)",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "鄒湘平",
            "subject": "英語文(輔)",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "Roja",
            "subject": "英文素養-ESL",
            "rooms": [
              "4F 分組教室(二)"
            ]
          },
          {
            "teacher": "Chad",
            "subject": "英文素養-ESL",
            "rooms": [
              "3F 多功能 e 化教室 (VR Room)"
            ]
          },
          {
            "teacher": "Gina",
            "subject": "英文素養-ESL",
            "rooms": [
              "4F 美術教室"
            ]
          }
        ]
      },
      "星期四": {
        "1": [
          {
            "teacher": "楊志元",
            "subject": "自然科學探究",
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ],
        "2": [
          {
            "teacher": "翟洛嫻",
            "subject": "音樂",
            "rooms": [
              "4F 音樂教室"
            ]
          }
        ],
        "3": [
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ],
        "4": [
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ],
        "5": [
          {
            "teacher": "楊政忠",
            "subject": "全民國防教育",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "王姿尹",
            "subject": "體育",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "張秀玫",
            "subject": "國語文",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "邱千芸",
            "subject": "語文素養與國寫練",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "蔡佳玲",
            "subject": "自然探究",
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ]
      },
      "星期五": {
        "1": [
          {
            "teacher": "楊志元",
            "subject": "自然科學探究",
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ],
        "2": [
          {
            "teacher": "曾美芝",
            "subject": "生活藝數",
            "rooms": []
          }
        ],
        "3": [
          {
            "teacher": "莊旭惠",
            "subject": "英語文",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "鄒湘平",
            "subject": "英語文",
            "rooms": []
          }
        ],
        "4": [
          {
            "teacher": "曾美芝",
            "subject": "數學",
            "rooms": []
          },
          {
            "teacher": "李牧",
            "subject": "數學",
            "rooms": [
              "5F 自主學習教室(二)"
            ]
          }
        ],
        "5": [
          {
            "teacher": "曾美芝",
            "subject": "班會",
            "rooms": []
          }
        ],
        "6": [
          {
            "teacher": "曾美芝",
            "subject": "週會/社團",
            "rooms": []
          }
        ],
        "7": [
          {
            "teacher": "曾美芝",
            "subject": "週會/社團",
            "rooms": []
          }
        ],
        "8": [
          {
            "teacher": "邱千芸",
            "subject": "語文素養與國寫練",
            "rooms": []
          }
        ],
        "9": [
          {
            "teacher": "莊旭惠",
            "subject": "英文素養",
            "rooms": [
              "5F 視聽教室"
            ]
          },
          {
            "teacher": "鄒湘平",
            "subject": "英文素養",
            "rooms": []
          }
        ]
      }
    }
  }
};

// =========================================================================
// 特殊專科教室指派規則 (115-1 正式版)
// =========================================================================
function applyRoomRules(targetData) {
    if (!targetData) return;
    
    function getOverrideRoom(className, day, period, teacher, subject) {
        if (!teacher) return null;
        if (teacher.includes("Chad") || teacher.includes("CHAD")) return ["3F 多功能 e 化教室 (VR Room)"];
        if (teacher.includes("Roja") || teacher.includes("ROJA")) return ["4F 分組教室(二)"];
        if (teacher.includes("Gina") || teacher.includes("GINA")) return ["4F 美術教室"];
        if (teacher.includes("翟洛嫻") && subject && subject.includes("音樂")) return ["4F 音樂教室"];
        if (teacher.includes("倪世斌")) {
            if (subject && subject.includes("資訊")) return ["6F 電腦教室"];
            if (subject && subject.includes("生活")) return ["6F 生活科技教室"];
        }
        if (teacher.includes("陳昱澐") && subject && subject.includes("資訊")) return ["6F 電腦教室"];
        if (teacher.includes("古靜宜") && subject && subject.includes("手語")) return ["3F 多功能 e 化教室 (VR Room)"];
        if (teacher.includes("吳宇綸") && className && (className.startsWith("國七") || className.startsWith("國八") || className.startsWith("國九")) && subject && subject.includes("數學")) {
            return ["4F 分組教室(一)"];
        }
        return null;
    }
    
    // 1. 基本教室規則
    for (let className in targetData.classSchedule) {
        for (let day in targetData.classSchedule[className]) {
            for (let period in targetData.classSchedule[className][day]) {
                const lessons = targetData.classSchedule[className][day][period];
                lessons.forEach(l => {
                    const override = getOverrideRoom(className, day, period, l.teacher, l.subject);
                    if (override) l.rooms = override;
                });
            }
        }
    }
    
    // 2. 英文分組課有一組在 5F 視聽教室
    for (let className in targetData.classSchedule) {
        for (let day in targetData.classSchedule[className]) {
            for (let period in targetData.classSchedule[className][day]) {
                const lessons = targetData.classSchedule[className][day][period];
                const engLessons = lessons.filter(l => l.subject && (l.subject.includes("英語文") || l.subject.includes("ESL") || l.subject.includes("英文")) && (!l.rooms || l.rooms.length === 0));
                if (engLessons.length > 1) {
                    for (const t of ["莊旭惠", "鄒湘平", "羅雅苓", "姜靜", "邱千芸"]) {
                        const target = engLessons.find(l => l.teacher && l.teacher.includes(t));
                        if (target) { target.rooms = ["5F 視聽教室"]; break; }
                    }
                }
            }
        }
    }
    
    // 3. 同步至 teacherSchedule
    for (let teacher in targetData.teacherSchedule) {
        for (let day in targetData.teacherSchedule[teacher]) {
            for (let period in targetData.teacherSchedule[teacher][day]) {
                targetData.teacherSchedule[teacher][day][period].forEach(l => { l.rooms = []; });
            }
        }
    }
    for (let className in targetData.classSchedule) {
        for (let day in targetData.classSchedule[className]) {
            for (let period in targetData.classSchedule[className][day]) {
                targetData.classSchedule[className][day][period].forEach(cl => {
                    if (!cl.rooms || cl.rooms.length === 0) return;
                    cl.teacher.split("/").map(t => t.trim()).forEach(tName => {
                        if (targetData.teacherSchedule[tName]?.[day]?.[period]) {
                            targetData.teacherSchedule[tName][day][period].forEach(tl => {
                                if (tl.classes && tl.classes.includes(className)) tl.rooms = cl.rooms;
                            });
                        }
                    });
                });
            }
        }
    }
    
    // 4. 重建 roomSchedule 與 rooms 清單
    targetData.roomSchedule = {};
    const uniqueRooms = new Set();
    for (let className in targetData.classSchedule) {
        for (let day in targetData.classSchedule[className]) {
            for (let period in targetData.classSchedule[className][day]) {
                targetData.classSchedule[className][day][period].forEach(l => {
                    if (!l.rooms || l.rooms.length === 0) return;
                    l.rooms.forEach(roomName => {
                        uniqueRooms.add(roomName);
                        if (!targetData.roomSchedule[roomName]) targetData.roomSchedule[roomName] = {};
                        if (!targetData.roomSchedule[roomName][day]) targetData.roomSchedule[roomName][day] = {};
                        if (!targetData.roomSchedule[roomName][day][period]) targetData.roomSchedule[roomName][day][period] = [];
                        const exists = targetData.roomSchedule[roomName][day][period].some(r => r.rawClass === className && r.teacher === l.teacher && r.subject === l.subject);
                        if (!exists) {
                            targetData.roomSchedule[roomName][day][period].push({
                                subject: l.subject, teacher: l.teacher, rawClass: className, classes: [className]
                            });
                        }
                    });
                });
            }
        }
    }
    targetData.rooms = Array.from(uniqueRooms).sort();
}

// 執行 115-1 教室規則
applyRoomRules(DATA);

// 水族箱相容介面
var SCHOOL_DATA = DATA;
if (typeof window !== 'undefined') {
    window.SCHOOL_DATA = DATA;
    window.DATA = DATA;
}

