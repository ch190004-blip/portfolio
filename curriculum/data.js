// =========================================================================
// ⚠️ 備份存檔：114學年度第二學期 舊學期課表資料
// (目前系統已設定改為「只顯示暑輔課表」，此處資料不會顯示，保留僅供備份更新使用)
// =========================================================================
const DATA = {
 "teachers": [
    "張秀玫", "倪世斌", "曾美芝", "莊旭惠", "陳瑋筠", "王世宗", "蔡佳玲", "孔令堅", "邱千芸", "劉玉華", 
    "桂松山", "吳雯菁", "簡珮瑜", "呂宜霖", "江霂歖", "陳昱澐", "羅雅苓", "何文達", "王妤文", "Roja", 
    "Chad", "Gina", "楊志元", "楊政忠", "劉綺芍", "鄒湘平", "王淑華", "蔡玉良", "之宇", "翟洛嫻", 
    "名敦", "曾淑汝", "廖麗雪", "林秀歌", "古靜宜", "李牧", "王志遠", "蘇試", "吳宇綸", "外聘"
  ],
  "classes": [
    "國七A", "國七B", "國八A", "國八B", "國九A", "國九B", "高一", "高二理組", "高二文組", "高三理組", "高三文組"
  ],
  "teacherSchedule": {
    "張秀玫": {
      "星期一": {
        "1": [{"subject": "語文表達與傳播應用", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "3": [{"subject": "國語文", "classes": ["國九B"], "rooms": []}],
        "4": [{"subject": "國語文", "classes": ["高一"], "rooms": []}],
        "6": [{"subject": "各類文學選讀", "classes": ["高三文組"], "rooms": []}],
        "8": [{"subject": "國語文(輔)", "classes": ["高一"], "rooms": []}]
      },
      "星期二": {
        "1": [{"subject": "彈性學習-自主學習", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "2": [{"subject": "國語文", "classes": ["國九B"], "rooms": []}],
        "3": [{"subject": "專題閱讀與研究", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "7": [{"subject": "國語文", "classes": ["高一"], "rooms": []}],
        "8": [{"subject": "國語文(輔)", "classes": ["國九B"], "rooms": []}]
      },
      "星期三": {
        "1": [{"subject": "國語文", "classes": ["國九B"], "rooms": []}],
        "6": [{"subject": "國語文", "classes": ["國九B"], "rooms": []}],
        "7": [{"subject": "語文表達與傳播應用", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "8": [{"subject": "自主學習", "classes": ["高三理組", "高三文組"], "rooms": []}]
      },
      "星期四": {
        "1": [{"subject": "國語文", "classes": ["國九B"], "rooms": []}],
        "7": [{"subject": "國語文", "classes": ["高一"], "rooms": []}],
        "8": [{"subject": "專題閱讀(輔)", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "9": [{"subject": "語文素養-新詩", "classes": ["高一"], "rooms": []}]
      },
      "星期五": {
        "1": [{"subject": "本土語言", "classes": ["國八B"], "rooms": []}],
        "2": [{"subject": "本土語言", "classes": ["國七B"], "rooms": []}],
        "4": [{"subject": "國語文", "classes": ["高一"], "rooms": []}],
        "5": [{"subject": "自主學習", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "6": [{"subject": "班會", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "7": [{"subject": "團體活動", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "9": [{"subject": "國文寫作", "classes": ["國九B"], "rooms": []}]
      }
    },
    "倪世斌": {
      "星期一": {
        "2": [{"subject": "資訊科技", "classes": ["高一"], "rooms": ["6F 電腦教室"]}],
        "5": [{"subject": "生活科技", "classes": ["高二理組", "高二文組"], "rooms": ["6F 電腦教室"]}],
        "7": [{"subject": "資訊科技", "classes": ["國九A"], "rooms": ["6F 電腦教室"]}]
      },
      "星期二": {
        "2": [{"subject": "生活科技", "classes": ["國八A"], "rooms": ["6F 電腦教室"]}],
        "5": [{"subject": "生活科技", "classes": ["國九B"], "rooms": ["6F 電腦教室"]}],
        "7": [{"subject": "生活科技", "classes": ["高二理組", "高二文組"], "rooms": ["6F 電腦教室"]}]
      },
      "星期三": {
        "6": [{"subject": "生活科技", "classes": ["國八B"], "rooms": ["6F 電腦教室"]}],
        "7": [{"subject": "生活科技", "classes": ["國九A"], "rooms": ["6F 電腦教室"]}]
      },
      "星期四": {
        "2": [{"subject": "資訊科技", "classes": ["國八A"], "rooms": ["6F 電腦教室"]}],
        "4": [{"subject": "資訊科技", "classes": ["國八B"], "rooms": ["6F 電腦教室"]}]
      },
      "星期五": {
        "3": [{"subject": "資訊科技", "classes": ["國九B"], "rooms": ["6F 電腦教室"]}]
      }
    },
    "曾美芝": {
      "星期一": {
        "3": [{"subject": "自主學習", "classes": ["高一"], "rooms": []}],
        "5": [{"subject": "數學", "classes": ["國九A", "國九B"], "rooms": []}],
        "6": [{"subject": "數學", "classes": ["國九A", "國九B"], "rooms": []}]
      },
      "星期二": {
        "6": [{"subject": "數學", "classes": ["國九A", "國九B"], "rooms": []}],
        "7": [{"subject": "數學", "classes": ["國九A", "國九B"], "rooms": []}],
        "8": [{"subject": "數學(輔)", "classes": ["高三文組"], "rooms": []}],
        "9": [{"subject": "數學探究", "classes": ["高三文組"], "rooms": []}]
      },
      "星期三": {
        "3": [{"subject": "數學", "classes": ["高一"], "rooms": []}],
        "4": [{"subject": "數學", "classes": ["高一"], "rooms": []}],
        "5": [{"subject": "數學乙", "classes": ["高三文組"], "rooms": []}],
        "6": [{"subject": "數學乙", "classes": ["高三文組"], "rooms": []}],
        "9": [{"subject": "數學探究", "classes": ["高一"], "rooms": []}]
      },
      "星期四": {
        "3": [{"subject": "數學乙", "classes": ["高三文組"], "rooms": []}],
        "4": [{"subject": "數學乙", "classes": ["高三文組"], "rooms": []}],
        "5": [{"subject": "數學", "classes": ["高一"], "rooms": []}],
        "6": [{"subject": "數學", "classes": ["高一"], "rooms": []}],
        "8": [{"subject": "數學(輔)", "classes": ["國九A", "國九B"], "rooms": []}],
        "9": [{"subject": "數學探究", "classes": ["國九A", "國九B"], "rooms": []}]
      },
      "星期五": {
        "5": [{"subject": "班會", "classes": ["高一"], "rooms": []}],
        "6": [{"subject": "團體活動", "classes": ["高一"], "rooms": []}],
        "7": [{"subject": "團體活動", "classes": ["高一"], "rooms": []}],
        "8": [{"subject": "數學(輔)", "classes": ["高一"], "rooms": []}]
      }
    },
    "莊旭惠": {
      "星期一": {
        "1": [{"subject": "英語文", "classes": ["國七A", "國七B"], "rooms": []}],
        "2": [{"subject": "英語文", "classes": ["國九A", "國九B"], "rooms": ["5F 視聽教室"]}]
      },
      "星期二": {
        "4": [{"subject": "增廣補強", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "5": [{"subject": "英語文", "classes": ["國八A", "國八B"], "rooms": ["5F 視聽教室"]}],
        "6": [{"subject": "英語文", "classes": ["國八A", "國八B"], "rooms": ["5F 視聽教室"]}],
        "8": [{"subject": "英語文(輔)", "classes": ["高二理組", "高二文組"], "rooms": ["5F 視聽教室"]}],
        "9": [{"subject": "英文素養", "classes": ["高二理組", "高二文組"], "rooms": ["5F 視聽教室"]}]
      },
      "星期三": {
        "2": [{"subject": "英語文", "classes": ["高二理組", "高二文組"], "rooms": ["5F 視聽教室"]}],
        "3": [{"subject": "英語文", "classes": ["高二理組", "高二文組"], "rooms": ["5F 視聽教室"]}],
        "4": [{"subject": "英語文", "classes": ["國九A", "國九B"], "rooms": ["5F 視聽教室"]}],
        "7": [{"subject": "英語文", "classes": ["國七A", "國七B"], "rooms": []}],
        "8": [{"subject": "英語文(輔)", "classes": ["國七A"], "rooms": []}]
      },
      "星期四": {
        "2": [{"subject": "英語文", "classes": ["國七A", "國七B"], "rooms": []}],
        "6": [{"subject": "英語文", "classes": ["國九A", "國九B"], "rooms": ["5F 視聽教室"]}],
        "8": [{"subject": "英文(輔)", "classes": ["國八A"], "rooms": []}],
        "9": [{"subject": "英文素養", "classes": ["國七A", "國七B"], "rooms": []}]
      },
      "星期五": {
        "2": [{"subject": "英語文", "classes": ["國八A", "國八B"], "rooms": ["5F 視聽教室"]}],
        "3": [{"subject": "英語文", "classes": ["高二理組", "高二文組"], "rooms": ["5F 視聽教室"]}],
        "4": [{"subject": "英語文", "classes": ["高二理組", "高二文組"], "rooms": ["5F 視聽教室"]}],
        "5": [{"subject": "班會", "classes": ["國九A"], "rooms": []}],
        "6": [{"subject": "週會/社團", "classes": ["國九A"], "rooms": []}],
        "7": [{"subject": "週會/社團", "classes": ["國九A"], "rooms": []}],
        "8": [{"subject": "英語文(輔)", "classes": ["國九A", "國九B"], "rooms": ["5F 視聽教室"]}],
        "9": [{"subject": "英文素養", "classes": ["國九A"], "rooms": []}]
      }
    },
    "陳瑋筠": {
      "星期一": {
        "1": [{"subject": "公民與社會", "classes": ["高一"], "rooms": []}],
        "2": [{"subject": "科技、環境與藝術的歷史", "classes": ["高三文組"], "rooms": []}],
        "4": [{"subject": "歷史", "classes": ["國七B"], "rooms": []}],
        "5": [{"subject": "科技、環境與藝術的歷史", "classes": ["高三文組"], "rooms": []}],
        "9": [{"subject": "社會探究(歷史)", "classes": ["高二文組"], "rooms": []}]
      },
      "星期二": {
        "1": [{"subject": "歷史", "classes": ["國七A"], "rooms": []}],
        "2": [{"subject": "歷史", "classes": ["國八B"], "rooms": []}],
        "3": [{"subject": "探究與實作：歷史學探究", "classes": ["高二文組"], "rooms": []}],
        "5": [{"subject": "科技、環境與藝術的歷史", "classes": ["高三文組"], "rooms": []}]
      },
      "星期三": {
        "2": [{"subject": "歷史", "classes": ["高一"], "rooms": []}],
        "5": [{"subject": "公民與社會", "classes": ["高一"], "rooms": []}],
        "7": [{"subject": "歷史", "classes": ["國九B"], "rooms": []}],
        "9": [{"subject": "社會探究", "classes": ["高三文組"], "rooms": []}]
      },
      "星期四": {
        "5": [{"subject": "歷史", "classes": ["國九A"], "rooms": []}],
        "7": [{"subject": "探究與實作：歷史學探究", "classes": ["高二文組"], "rooms": []}],
        "8": [{"subject": "歷史(輔)", "classes": ["高二文組"], "rooms": []}],
        "9": [{"subject": "社會探究", "classes": ["國八A"], "rooms": []}]
      },
      "星期五": {
        "2": [{"subject": "歷史", "classes": ["高一"], "rooms": []}],
        "4": [{"subject": "歷史", "classes": ["國八A"], "rooms": []}],
        "5": [{"subject": "班會", "classes": ["國九B"], "rooms": []}],
        "6": [{"subject": "週會/社團", "classes": ["國九B"], "rooms": []}],
        "7": [{"subject": "週會/社團", "classes": ["國九B"], "rooms": []}]
      }
    },
    "王世宗": {
      "星期一": {
        "2": [{"subject": "選修生物-生態、演化及生物多樣性", "classes": ["高三理組"], "rooms": ["5F 自主學習教室(一)"]}],
        "3": [{"subject": "健康教育", "classes": ["國七A"], "rooms": []}],
        "4": [{"subject": "自然科學探究", "classes": ["高二理組", "高二文組"], "rooms": ["5F 自主學習教室(二)"]}],
        "5": [{"subject": "生物", "classes": ["國七B"], "rooms": []}],
        "7": [{"subject": "健康教育", "classes": ["國九B"], "rooms": []}],
        "8": [{"subject": "生物(輔)", "classes": ["國七A"], "rooms": []}],
        "9": [{"subject": "自然探究", "classes": ["國九B"], "rooms": []}]
      },
      "星期二": {
        "1": [{"subject": "健康教育", "classes": ["國九A"], "rooms": []}],
        "3": [{"subject": "生物", "classes": ["國七A"], "rooms": []}],
        "4": [{"subject": "生物", "classes": ["國七B"], "rooms": []}],
        "5": [{"subject": "多元選修", "classes": ["高一"], "rooms": []}],
        "6": [{"subject": "多元選修", "classes": ["高一"], "rooms": []}],
        "8": [{"subject": "生物(輔)", "classes": ["國七B"], "rooms": []}]
      },
      "星期三": {
        "1": [{"subject": "生物", "classes": ["國七A"], "rooms": []}],
        "8": [{"subject": "生物(輔)", "classes": ["高二理組"], "rooms": ["5F 自主學習教室(二)"]}],
        "9": [{"subject": "自然探究", "classes": ["國九A"], "rooms": []}]
      },
      "星期四": {
        "1": [{"subject": "選修生物-生態、演化及生物多樣性", "classes": ["高三理組"], "rooms": ["5F 自主學習教室(一)"]}],
        "5": [{"subject": "生物", "classes": ["國七B"], "rooms": []}],
        "8": [{"subject": "生物(輔)", "classes": ["高一"], "rooms": []}]
      },
      "星期五": {
        "1": [{"subject": "健康教育", "classes": ["國七B"], "rooms": []}],
        "2": [{"subject": "自然科學探究", "classes": ["高二理組", "高二文組"], "rooms": ["5F 自主學習教室(二)"]}],
        "3": [{"subject": "生物", "classes": ["國七A"], "rooms": []}],
        "5": [{"subject": "班會", "classes": ["國八A"], "rooms": []}],
        "6": [{"subject": "週會/社團", "classes": ["國八A"], "rooms": []}],
        "7": [{"subject": "週會/社團", "classes": ["國八A"], "rooms": []}],
        "8": [{"subject": "生物(輔)", "classes": ["高三理組"], "rooms": ["5F 自主學習教室(一)"]}],
        "9": [{"subject": "自然探究", "classes": ["高三理組"], "rooms": ["5F 自主學習教室(一)"]}]
      }
    },
    "蔡佳玲": {
      "星期一": {
        "2": [{"subject": "數學", "classes": ["國七A", "國七B"], "rooms": []}],
        "3": [{"subject": "理化", "classes": ["國九A"], "rooms": []}],
        "4": [{"subject": "理化", "classes": ["國九B"], "rooms": []}],
        "7": [{"subject": "理化", "classes": ["國八B"], "rooms": []}],
        "8": [{"subject": "理化(輔)", "classes": ["國九B"], "rooms": []}],
        "9": [{"subject": "自然探究", "classes": ["高二理組"], "rooms": ["5F 自主學習教室(二)"]}]
      },
      "星期二": {
        "2": [{"subject": "數學", "classes": ["國七A", "國七B"], "rooms": []}],
        "3": [{"subject": "理化", "classes": ["國八A"], "rooms": []}],
        "5": [{"subject": "多元選修", "classes": ["高一"], "rooms": ["5F 語言教室 (iPad Room)"]}],
        "6": [{"subject": "多元選修", "classes": ["高一"], "rooms": ["5F 語言教室 (iPad Room)"]}]
      },
      "星期三": {
        "1": [{"subject": "理化", "classes": ["國八A"], "rooms": []}],
        "2": [{"subject": "數學", "classes": ["國七A", "國七B"], "rooms": []}],
        "5": [{"subject": "理化", "classes": ["國八B"], "rooms": []}],
        "8": [{"subject": "理化(輔)", "classes": ["國九A"], "rooms": []}],
        "9": [{"subject": "自然科學探究", "classes": ["國八B"], "rooms": []}]
      },
      "星期四": {
        "1": [{"subject": "理化", "classes": ["國八B"], "rooms": []}],
        "3": [{"subject": "數學", "classes": ["國七A", "國七B"], "rooms": []}],
        "7": [{"subject": "理化", "classes": ["國八A"], "rooms": []}],
        "8": [{"subject": "物理(輔)", "classes": ["高二理組"], "rooms": ["5F 自主學習教室(二)"]}]
      },
      "星期五": {
        "1": [{"subject": "理化", "classes": ["國九B"], "rooms": []}],
        "3": [{"subject": "理化", "classes": ["國九A"], "rooms": []}],
        "5": [{"subject": "班會", "classes": ["國七A"], "rooms": []}],
        "6": [{"subject": "週會/社團", "classes": ["國七A"], "rooms": []}],
        "7": [{"subject": "週會/社團", "classes": ["國七A"], "rooms": []}],
        "8": [{"subject": "數學(輔)", "classes": ["國七A", "國七B"], "rooms": []}],
        "9": [{"subject": "數學探究", "classes": ["國七A"], "rooms": []}]
      }
    },
    "孔令堅": {
      "星期二": {
        "7": [{"subject": "生命教育", "classes": ["國七B"], "rooms": []}]
      },
      "星期三": {
        "3": [{"subject": "藝術生活", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "4": [{"subject": "藝術生活", "classes": ["高三理組", "高三文組"], "rooms": []}]
      },
      "星期四": {
        "6": [{"subject": "生命教育", "classes": ["國七A"], "rooms": []}]
      }
    },
    "邱千芸": {
      "星期一": {
        "1": [{"subject": "英語文", "classes": ["國七A", "國七B"], "rooms": ["5F 視聽教室"]}]
      },
      "星期三": {
        "7": [{"subject": "英語文", "classes": ["國七A", "國七B"], "rooms": ["5F 視聽教室"]}]
      },
      "星期四": {
        "2": [{"subject": "英語文", "classes": ["國七A", "國七B"], "rooms": ["5F 視聽教室"]}],
        "9": [{"subject": "英文素養", "classes": ["國七A", "國七B"], "rooms": ["5F 視聽教室"]}]
      }
    },
    "劉玉華": {
      "星期一": {
        "1": [{"subject": "國語文", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "3": [{"subject": "國語文", "classes": ["國八A"], "rooms": []}],
        "4": [{"subject": "國語文", "classes": ["國九A"], "rooms": []}],
        "6": [{"subject": "學習", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "7": [{"subject": "國語文", "classes": ["國八A"], "rooms": []}],
        "8": [{"subject": "國語文", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "9": [{"subject": "國文寫作", "classes": ["國九A"], "rooms": []}]
      },
      "星期二": {
        "1": [{"subject": "國語文", "classes": ["國八A"], "rooms": []}],
        "2": [{"subject": "國語文", "classes": ["國九A"], "rooms": []}],
        "4": [{"subject": "增廣補強", "classes": ["高二文組"], "rooms": []}],
        "5": [{"subject": "文案設計", "classes": ["高二文組"], "rooms": []}],
        "6": [{"subject": "文案設計", "classes": ["高二文組"], "rooms": []}],
        "8": [{"subject": "國語文", "classes": ["國九A"], "rooms": []}]
      },
      "星期三": {
        "1": [{"subject": "國語文", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "2": [{"subject": "國語文", "classes": ["國九A"], "rooms": []}],
        "5": [{"subject": "國語文", "classes": ["國八A"], "rooms": []}],
        "8": [{"subject": "國語文", "classes": ["國八A"], "rooms": []}],
        "9": [{"subject": "語文閱讀策略", "classes": ["國八A"], "rooms": []}]
      },
      "星期四": {
        "1": [{"subject": "國語文", "classes": ["國九A"], "rooms": []}],
        "2": [{"subject": "國語文", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "4": [{"subject": "國語文", "classes": ["國八A"], "rooms": []}],
        "9": [{"subject": "國文寫作", "classes": ["高二理組", "高二文組"], "rooms": []}]
      },
      "星期五": {
        "1": [{"subject": "國語文", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "2": [{"subject": "國語文", "classes": ["國九A"], "rooms": []}],
        "5": [{"subject": "班會", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "6": [{"subject": "團體活動", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "7": [{"subject": "團體活動", "classes": ["高二理組", "高二文組"], "rooms": []}]
      }
    },
    "桂松山": {
      "星期一": {
        "2": [{"subject": "數學", "classes": ["國七A", "國七B"], "rooms": []}],
        "5": [{"subject": "數學", "classes": ["國九A", "國九B"], "rooms": []}],
        "6": [{"subject": "數學", "classes": ["國九A", "國九B"], "rooms": []}]
      },
      "星期二": {
        "2": [{"subject": "數學", "classes": ["國七A", "國七B"], "rooms": []}],
        "6": [{"subject": "數學", "classes": ["國九A", "國九B"], "rooms": []}],
        "7": [{"subject": "數學", "classes": ["國九A", "國九B"], "rooms": []}],
        "9": [{"subject": "數學探究", "classes": ["國七B"], "rooms": []}]
      },
      "星期三": {
        "2": [{"subject": "數學", "classes": ["國七A", "國七B"], "rooms": []}]
      },
      "星期四": {
        "3": [{"subject": "數學", "classes": ["國七A", "國七B"], "rooms": []}],
        "8": [{"subject": "數學(輔)", "classes": ["國九A", "國九B"], "rooms": []}],
        "9": [{"subject": "數學探究", "classes": ["國九A", "國九B"], "rooms": []}]
      },
      "星期五": {
        "8": [{"subject": "數學(輔)", "classes": ["國七A", "國七B"], "rooms": []}]
      }
    },
    "吳雯菁": {
      "星期一": {
        "1": [{"subject": "公民與社會", "classes": ["國八A"], "rooms": []}],
        "3": [{"subject": "公民與社會", "classes": ["國八B"], "rooms": []}],
        "4": [{"subject": "童軍", "classes": ["國七A"], "rooms": []}],
        "5": [{"subject": "彈性學習-生命教育", "classes": ["國八A"], "rooms": []}],
        "6": [{"subject": "童軍", "classes": ["國七B"], "rooms": []}]
      },
      "星期二": {
        "1": [{"subject": "公民與社會", "classes": ["國九B"], "rooms": []}],
        "4": [{"subject": "童軍", "classes": ["國九B"], "rooms": []}],
        "5": [{"subject": "多元選修", "classes": ["高一"], "rooms": []}],
        "6": [{"subject": "多元選修", "classes": ["高一"], "rooms": []}],
        "8": [{"subject": "公民與社會(輔)", "classes": ["國八A"], "rooms": []}],
        "9": [{"subject": "公民與社會(輔)", "classes": ["國七A"], "rooms": []}]
      },
      "星期三": {
        "1": [{"subject": "童軍", "classes": ["國九A"], "rooms": []}],
        "6": [{"subject": "童軍", "classes": ["國八A"], "rooms": []}],
        "7": [{"subject": "童軍", "classes": ["國八B"], "rooms": []}],
        "8": [{"subject": "公民與社會(輔)", "classes": ["國八B"], "rooms": []}],
        "9": [{"subject": "公民與社會(輔)", "classes": ["國七B"], "rooms": []}]
      },
      "星期四": {
        "3": [{"subject": "公民與社會", "classes": ["國九A"], "rooms": []}],
        "7": [{"subject": "彈性學習-生命教育", "classes": ["國八B"], "rooms": []}]
      },
      "星期五": {
        "3": [{"subject": "公民與社會", "classes": ["國七B"], "rooms": []}],
        "4": [{"subject": "公民與社會", "classes": ["國七A"], "rooms": []}],
        "5": [{"subject": "班會", "classes": ["國七B"], "rooms": []}],
        "6": [{"subject": "週會/社團", "classes": ["國七B"], "rooms": []}],
        "7": [{"subject": "週會/社團", "classes": ["國七B"], "rooms": []}]
      }
    },
    "簡珮瑜": {
      "星期一": {
        "2": [{"subject": "輔導活動", "classes": ["國八A"], "rooms": []}]
      },
      "星期二": {
        "1": [{"subject": "輔導活動", "classes": ["國八B"], "rooms": []}],
        "4": [{"subject": "輔導活動", "classes": ["國七A"], "rooms": []}]
      },
      "星期三": {
        "2": [{"subject": "輔導活動", "classes": ["國九B"], "rooms": []}],
        "6": [{"subject": "輔導活動", "classes": ["國九A"], "rooms": []}]
      },
      "星期四": {
        "1": [{"subject": "輔導活動", "classes": ["國七B"], "rooms": []}],
        "2": [{"subject": "彈性學習-生命教育", "classes": ["國九B"], "rooms": []}],
        "7": [{"subject": "彈性學習-生命教育", "classes": ["國九A"], "rooms": []}]
      }
    },
    "呂宜霖": {
      "星期一": {
        "1": [{"subject": "國語文", "classes": ["國八B"], "rooms": []}],
        "2": [{"subject": "國語文", "classes": ["國八B"], "rooms": []}],
        "3": [{"subject": "國語文", "classes": ["國七B"], "rooms": []}],
        "7": [{"subject": "國語文", "classes": ["國七A"], "rooms": []}]
      },
      "星期二": {
        "1": [{"subject": "國語文", "classes": ["國七B"], "rooms": []}],
        "4": [{"subject": "國語文", "classes": ["國八B"], "rooms": []}],
        "7": [{"subject": "國語文", "classes": ["國七A"], "rooms": []}],
        "8": [{"subject": "國語文(輔)", "classes": ["國七A"], "rooms": []}],
        "9": [{"subject": "語文閱讀策略", "classes": ["國八B"], "rooms": []}]
      },
      "星期三": {
        "1": [{"subject": "國語文", "classes": ["國八B"], "rooms": []}],
        "4": [{"subject": "國語文", "classes": ["國七B"], "rooms": []}],
        "6": [{"subject": "國語文", "classes": ["國七A"], "rooms": []}],
        "8": [{"subject": "國語文(輔)", "classes": ["國七B"], "rooms": []}],
        "9": [{"subject": "國文寫作", "classes": ["國七A"], "rooms": []}]
      },
      "星期四": {
        "1": [{"subject": "國語文", "classes": ["國七A"], "rooms": []}],
        "4": [{"subject": "國語文", "classes": ["國七B"], "rooms": []}],
        "8": [{"subject": "國語文(輔)", "classes": ["國八B"], "rooms": []}]
      },
      "星期五": {
        "1": [{"subject": "國語文", "classes": ["國七A"], "rooms": []}],
        "3": [{"subject": "國語文", "classes": ["國八B"], "rooms": []}],
        "4": [{"subject": "國語文", "classes": ["國七B"], "rooms": []}],
        "9": [{"subject": "國文寫作", "classes": ["國七B"], "rooms": []}]
      }
    },
    "江霂歖": {
      "星期一": {
        "1": [{"subject": "體育", "classes": ["國九A"], "rooms": []}],
        "2": [{"subject": "體育", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "5": [{"subject": "體育", "classes": ["國八B"], "rooms": []}],
        "6": [{"subject": "體育", "classes": ["高一"], "rooms": []}],
        "7": [{"subject": "體育", "classes": ["國七B"], "rooms": []}]
      },
      "星期二": {
        "1": [{"subject": "體育", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "2": [{"subject": "健康與護理", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "3": [{"subject": "體育", "classes": ["國八B"], "rooms": []}],
        "5": [{"subject": "體育", "classes": ["國九A"], "rooms": []}],
        "7": [{"subject": "體育", "classes": ["高三理組", "高三文組"], "rooms": []}]
      },
      "星期三": {
        "1": [{"subject": "體育", "classes": ["國七B"], "rooms": []}],
        "2": [{"subject": "體育", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "3": [{"subject": "體育", "classes": ["國九B"], "rooms": []}],
        "5": [{"subject": "體育", "classes": ["國七A"], "rooms": []}],
        "6": [{"subject": "體育", "classes": ["高一"], "rooms": []}],
        "7": [{"subject": "體育", "classes": ["國八A"], "rooms": []}]
      },
      "星期四": {
        "1": [{"subject": "體育", "classes": ["國八A"], "rooms": []}],
        "2": [{"subject": "健康與護理", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "4": [{"subject": "體育", "classes": ["國七A"], "rooms": []}],
        "7": [{"subject": "體育", "classes": ["國九B"], "rooms": []}]
      }
    },
    "陳昱澐": {
      "星期一": {
        "2": [{"subject": "數學", "classes": ["國七A", "國七B"], "rooms": ["4F 分組教室(一)"]}],
        "5": [{"subject": "生活科技", "classes": ["國七A"], "rooms": ["6F 生活科技教室"]}],
        "6": [{"subject": "資訊科技", "classes": ["國七A"], "rooms": ["6F 生活科技教室"]}],
        "8": [{"subject": "數學(輔)", "classes": ["國八A", "國八B"], "rooms": []}],
        "9": [{"subject": "數學探究", "classes": ["國八A", "國八B"], "rooms": []}]
      },
      "星期二": {
        "2": [{"subject": "數學", "classes": ["國七A", "國七B"], "rooms": ["4F 分組教室(一)"]}],
        "5": [{"subject": "多元選修", "classes": ["高一"], "rooms": []}],
        "6": [{"subject": "多元選修", "classes": ["高一"], "rooms": []}]
      },
      "星期三": {
        "2": [{"subject": "數學", "classes": ["國七A", "國七B"], "rooms": ["4F 分組教室(一)"]}],
        "3": [{"subject": "數學", "classes": ["國八A", "國八B"], "rooms": []}],
        "4": [{"subject": "數學", "classes": ["國八A", "國八B"], "rooms": []}],
        "5": [{"subject": "生活科技", "classes": ["國七B"], "rooms": ["4F 分組教室(一)", "6F 生活科技教室"]}],
        "6": [{"subject": "資訊科技", "classes": ["國七B"], "rooms": ["6F 生活科技教室"]}],
        "9": [{"subject": "自然探究", "classes": ["高三理組"], "rooms": ["5F 自主學習教室(一)"]}]
      },
      "星期四": {
        "3": [{"subject": "數學", "classes": ["國七A", "國七B"], "rooms": ["4F 分組教室(一)"]}],
        "5": [{"subject": "數學", "classes": ["國八A", "國八B"], "rooms": []}],
        "6": [{"subject": "數學", "classes": ["國八A", "國八B"], "rooms": []}],
        "9": [{"subject": "數學探究", "classes": ["國八B"], "rooms": []}]
      },
      "星期五": {
        "8": [{"subject": "數學(輔)", "classes": ["國七A", "國七B"], "rooms": ["4F 分組教室(一)"]}]
      }
    },
    "羅雅苓": {
      "星期一": {
        "1": [{"subject": "英語文", "classes": ["國七A", "國七B"], "rooms": []}],
        "2": [{"subject": "英語文", "classes": ["國九A", "國九B"], "rooms": []}],
        "8": [{"subject": "英語文(輔)", "classes": ["國七B"], "rooms": []}]
      },
      "星期二": {
        "2": [{"subject": "英語文", "classes": ["高一"], "rooms": []}],
        "3": [{"subject": "英語文", "classes": ["高一"], "rooms": []}],
        "5": [{"subject": "英語文", "classes": ["國八A", "國八B"], "rooms": []}],
        "6": [{"subject": "英語文", "classes": ["國八A", "國八B"], "rooms": []}],
        "8": [{"subject": "英文(輔)", "classes": ["國八B"], "rooms": []}],
        "9": [{"subject": "英文素養", "classes": ["國九B"], "rooms": []}]
      },
      "星期三": {
        "1": [{"subject": "英語文", "classes": ["高一"], "rooms": []}],
        "4": [{"subject": "英語文", "classes": ["國九A", "國九B"], "rooms": []}],
        "7": [{"subject": "英語文", "classes": ["國七A", "國七B"], "rooms": []}]
      },
      "星期四": {
        "2": [{"subject": "英語文", "classes": ["國七A", "國七B"], "rooms": []}],
        "6": [{"subject": "英語文", "classes": ["國九A", "國九B"], "rooms": []}],
        "9": [{"subject": "英文素養", "classes": ["國七A", "國七B"], "rooms": []}]
      },
      "星期五": {
        "1": [{"subject": "英語文", "classes": ["高一"], "rooms": []}],
        "2": [{"subject": "英語文", "classes": ["國八A", "國八B"], "rooms": []}],
        "5": [{"subject": "班會", "classes": ["國八B"], "rooms": []}],
        "6": [{"subject": "週會/社團", "classes": ["國八B"], "rooms": []}],
        "7": [{"subject": "週會/社團", "classes": ["國八B"], "rooms": []}],
        "8": [{"subject": "英語文(輔)", "classes": ["國九A", "國九B"], "rooms": []}],
        "9": [{"subject": "英文素養-ESL", "classes": ["高一"], "rooms": []}]
      }
    },
    "何文達": {
      "星期一": {
        "1": [{"subject": "地理", "classes": ["國九B"], "rooms": []}],
        "3": [{"subject": "社會環境議題", "classes": ["高三文組"], "rooms": []}],
        "4": [{"subject": "民主政治與法律", "classes": ["高三文組"], "rooms": []}],
        "7": [{"subject": "地理", "classes": ["高一"], "rooms": []}]
      },
      "星期二": {
        "1": [{"subject": "地理", "classes": ["高一"], "rooms": []}],
        "3": [{"subject": "地理", "classes": ["國七B"], "rooms": []}],
        "4": [{"subject": "地理", "classes": ["國八A"], "rooms": []}],
        "6": [{"subject": "民主政治與法律", "classes": ["高三文組"], "rooms": []}],
        "8": [{"subject": "地理(輔)", "classes": ["高一"], "rooms": []}],
        "9": [{"subject": "社會探究", "classes": ["國九A"], "rooms": []}]
      },
      "星期三": {
        "2": [{"subject": "地理", "classes": ["國八B"], "rooms": []}],
        "4": [{"subject": "地理", "classes": ["國七A"], "rooms": []}],
        "7": [{"subject": "地理與人文社會科學研究", "classes": ["高二文組"], "rooms": []}],
        "8": [{"subject": "地理(輔)", "classes": ["高二文組"], "rooms": []}],
        "9": [{"subject": "社會探究", "classes": ["國九B"], "rooms": []}]
      },
      "星期四": {
        "1": [{"subject": "民主政治與法律", "classes": ["高三文組"], "rooms": []}],
        "2": [{"subject": "地理", "classes": ["國九A"], "rooms": []}],
        "6": [{"subject": "地理與人文社會科學研究", "classes": ["高二文組"], "rooms": []}]
      },
      "星期五": {
        "1": [{"subject": "社會環境議題", "classes": ["高三文組"], "rooms": []}],
        "2": [{"subject": "社會環境議題", "classes": ["高三文組"], "rooms": []}],
        "8": [{"subject": "公民與社會(輔)", "classes": ["高三文組"], "rooms": []}],
        "9": [{"subject": "社會探究", "classes": ["高三文組"], "rooms": []}]
      }
    },
    "王妤文": {
      "星期一": {
        "2": [{"subject": "英語文", "classes": ["國九A", "國九B"], "rooms": []}],
        "5": [{"subject": "英語聽講", "classes": ["高一"], "rooms": []}],
        "9": [{"subject": "英文素養", "classes": ["國七A", "國七B"], "rooms": []}]
      },
      "星期二": {
        "4": [{"subject": "美術", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "5": [{"subject": "彈性學習-閱讀心力量ESL", "classes": ["國七A", "國七B"], "rooms": []}],
        "6": [{"subject": "視覺藝術-ESL", "classes": ["國七A", "國七B"], "rooms": []}],
        "7": [{"subject": "健康教育-ESL", "classes": ["國八A", "國八B"], "rooms": []}],
        "9": [{"subject": "英文素養", "classes": ["高一"], "rooms": []}]
      },
      "星期三": {
        "3": [{"subject": "表演藝術-ESL", "classes": ["國七A", "國七B"], "rooms": []}],
        "4": [{"subject": "英語文", "classes": ["國九A", "國九B"], "rooms": []}],
        "5": [{"subject": "表演藝術-ESL", "classes": ["國九A", "國九B"], "rooms": []}],
        "7": [{"subject": "專題研究-ESL", "classes": ["高一"], "rooms": []}],
        "8": [{"subject": "ESL(輔)", "classes": ["高一"], "rooms": []}],
        "9": [{"subject": "ESL(素養)", "classes": ["高二理組", "高二文組"], "rooms": []}]
      },
      "星期四": {
        "4": [{"subject": "視覺藝術-ESL", "classes": ["國九A", "國九B"], "rooms": []}],
        "6": [{"subject": "英語文", "classes": ["國九A", "國九B"], "rooms": []}],
        "7": [{"subject": "家政-ESL", "classes": ["國七A", "國七B"], "rooms": []}],
        "8": [{"subject": "ESL(輔)", "classes": ["國七A", "國七B"], "rooms": []}]
      },
      "星期五": {
        "8": [{"subject": "英語文(輔)", "classes": ["國九A", "國九B"], "rooms": []}]
      }
    },
    "Roja": {
      "星期一": {
        "4": [{"subject": "視覺藝術-ESL", "classes": ["國八A", "國八B"], "rooms": ["4F 分組教室(二)"]}],
        "5": [{"subject": "英語聽講", "classes": ["高一"], "rooms": ["4F 分組教室(二)"]}],
        "6": [{"subject": "表演藝術-ESL", "classes": ["國八A", "國八B"], "rooms": ["4F 分組教室(二)"]}],
        "9": [{"subject": "英文素養", "classes": ["國七A", "國七B"], "rooms": ["4F 分組教室(二)"]}]
      },
      "星期二": {
        "3": [{"subject": "彈性學習-閱讀與寫作", "classes": ["國九A", "國九B"], "rooms": ["4F 分組教室(二)"]}],
        "4": [{"subject": "美術", "classes": ["高三理組", "高三文組"], "rooms": ["4F 分組教室(二)"]}],
        "5": [{"subject": "彈性學習-閱讀心力量ESL", "classes": ["國七A", "國七B"], "rooms": ["4F 分組教室(二)"]}],
        "6": [{"subject": "視覺藝術-ESL", "classes": ["國七A", "國七B"], "rooms": ["4F 分組教室(二)"]}],
        "7": [{"subject": "健康教育-ESL", "classes": ["國八A", "國八B"], "rooms": ["4F 分組教室(二)"]}],
        "9": [{"subject": "英文素養", "classes": ["高一"], "rooms": ["4F 分組教室(二)"]}]
      },
      "星期三": {
        "3": [{"subject": "表演藝術-ESL", "classes": ["國七A", "國七B"], "rooms": ["4F 分組教室(二)"]}],
        "5": [{"subject": "表演藝術-ESL", "classes": ["國九A", "國九B"], "rooms": ["4F 分組教室(二)"]}],
        "7": [{"subject": "專題研究-ESL", "classes": ["高一"], "rooms": ["4F 分組教室(二)"]}],
        "8": [{"subject": "ESL(輔)", "classes": ["高一"], "rooms": ["4F 分組教室(二)"]}]
      },
      "星期四": {
        "3": [{"subject": "彈性學習-英語探索樂園ESL", "classes": ["國八A", "國八B"], "rooms": ["4F 分組教室(二)"]}],
        "4": [{"subject": "視覺藝術-ESL", "classes": ["國九A", "國九B"], "rooms": ["4F 分組教室(二)"]}],
        "7": [{"subject": "家政-ESL", "classes": ["國七A", "國七B"], "rooms": ["4F 分組教室(二)"]}],
        "8": [{"subject": "ESL(輔)", "classes": ["國七A", "國七B"], "rooms": ["4F 分組教室(二)"]}],
        "9": [{"subject": "ESL(素養)", "classes": ["高三理組", "高三文組"], "rooms": ["4F 分組教室(二)"]}]
      },
      "星期五": {
        "4": [{"subject": "彈性學習-生活玩家ESL", "classes": ["國九A", "國九B"], "rooms": ["4F 分組教室(二)"]}],
        "8": [{"subject": "ESL(輔)", "classes": ["國八A", "國八B"], "rooms": ["4F 分組教室(二)"]}],
        "9": [{"subject": "英文素養-ESL", "classes": ["國八A", "國八B"], "rooms": ["4F 分組教室(二)"]}]
      }
    },
    "Chad": {
      "星期一": {
        "3": [{"subject": "英文專題簡報實作", "classes": ["高二理組", "高二文組"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "4": [{"subject": "視覺藝術-ESL", "classes": ["國八A", "國八B"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "5": [{"subject": "英語聽講", "classes": ["高一"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "6": [{"subject": "表演藝術-ESL", "classes": ["國八A", "國八B"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "7": [{"subject": "美術-ESL", "classes": ["高二理組", "高二文組"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "9": [{"subject": "英文素養", "classes": ["國七A", "國七B"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}]
      },
      "星期二": {
        "3": [{"subject": "彈性學習-閱讀與寫作", "classes": ["國九A", "國九B"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "4": [{"subject": "美術", "classes": ["高三理組", "高三文組"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "5": [{"subject": "彈性學習-閱讀心力量ESL", "classes": ["國七A", "國七B"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "6": [{"subject": "視覺藝術-ESL", "classes": ["國七A", "國七B"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "7": [{"subject": "健康教育-ESL", "classes": ["國八A", "國八B"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "9": [{"subject": "英文素養", "classes": ["高一"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}]
      },
      "星期三": {
        "3": [{"subject": "表演藝術-ESL", "classes": ["國七A", "國七B"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "4": [{"subject": "英文專題簡報實作", "classes": ["高二理組", "高二文組"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "5": [{"subject": "表演藝術-ESL", "classes": ["國九A", "國九B"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "7": [{"subject": "專題研究-ESL", "classes": ["高一"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "8": [{"subject": "ESL(輔)", "classes": ["高一"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}]
      },
      "星期四": {
        "3": [{"subject": "彈性學習-英語探索樂園ESL", "classes": ["國八A", "國八B"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "4": [{"subject": "視覺藝術-ESL", "classes": ["國九A", "國九B"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "7": [{"subject": "家政-ESL", "classes": ["國七A", "國七B"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "8": [{"subject": "ESL(輔)", "classes": ["國七A", "國七B"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "9": [{"subject": "ESL(素養)", "classes": ["高三理組", "高三文組"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}]
      },
      "星期五": {
        "4": [{"subject": "彈性學習-生活玩家ESL", "classes": ["國九A", "國九B"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "8": [{"subject": "ESL(輔)", "classes": ["國八A", "國八B"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "9": [{"subject": "英文素養-ESL", "classes": ["國八A", "國八B"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}]
      }
    },
    "Gina": {
      "星期一": {
        "3": [{"subject": "英文專題簡報實作", "classes": ["高二理組", "高二文組"], "rooms": ["4F 美術教室"]}],
        "4": [{"subject": "視覺藝術-ESL", "classes": ["國八A", "國八B"], "rooms": ["4F 美術教室"]}],
        "6": [{"subject": "表演藝術-ESL", "classes": ["國八A", "國八B"], "rooms": ["4F 美術教室"]}],
        "7": [{"subject": "美術-ESL", "classes": ["高二理組", "高二文組"], "rooms": ["4F 美術教室"]}],
        "9": [{"subject": "英文素養", "classes": ["國七A", "國七B"], "rooms": ["4F 美術教室"]}]
      },
      "星期二": {
        "3": [{"subject": "彈性學習-閱讀與寫作", "classes": ["國九A", "國九B"], "rooms": ["4F 美術教室"]}],
        "4": [{"subject": "美術", "classes": ["高三理組", "高三文組"], "rooms": ["4F 美術教室"]}],
        "5": [{"subject": "彈性學習-閱讀心力量ESL", "classes": ["國七A", "國七B"], "rooms": ["4F 美術教室"]}],
        "6": [{"subject": "視覺藝術-ESL", "classes": ["國七A", "國七B"], "rooms": ["4F 美術教室"]}],
        "7": [{"subject": "健康教育-ESL", "classes": ["國八A", "國八B"], "rooms": ["4F 美術教室"]}]
      },
      "星期三": {
        "3": [{"subject": "表演藝術-ESL", "classes": ["國七A", "國七B"], "rooms": ["4F 美術教室"]}],
        "4": [{"subject": "英文專題簡報實作", "classes": ["高二理組", "高二文組"], "rooms": ["4F 美術教室"]}],
        "5": [{"subject": "表演藝術-ESL", "classes": ["國九A", "國九B"], "rooms": ["4F 美術教室"]}],
        "9": [{"subject": "ESL(素養)", "classes": ["高二理組", "高二文組"], "rooms": ["4F 美術教室"]}]
      },
      "星期四": {
        "3": [{"subject": "彈性學習-英語探索樂園ESL", "classes": ["國八A", "國八B"], "rooms": ["4F 美術教室"]}],
        "4": [{"subject": "視覺藝術-ESL", "classes": ["國九A", "國九B"], "rooms": ["4F 美術教室"]}],
        "7": [{"subject": "家政-ESL", "classes": ["國七A", "國七B"], "rooms": ["4F 美術教室"]}],
        "8": [{"subject": "ESL(輔)", "classes": ["國七A", "國七B"], "rooms": ["4F 美術教室"]}],
        "9": [{"subject": "ESL(素養)", "classes": ["高三理組", "高三文組"], "rooms": ["4F 美術教室"]}]
      },
      "星期五": {
        "4": [{"subject": "彈性學習-生活玩家ESL", "classes": ["國九A", "國九B"], "rooms": ["4F 美術教室"]}],
        "8": [{"subject": "ESL(輔)", "classes": ["國八A", "國八B"], "rooms": ["4F 美術教室"]}],
        "9": [{"subject": "英文素養-ESL", "classes": ["國八A", "國八B"], "rooms": ["4F 美術教室"]}]
      }
    },
    "楊志元": {
      "星期四": {
        "1": [{"subject": "化學", "classes": ["高一"], "rooms": []}],
        "2": [{"subject": "化學", "classes": ["高一"], "rooms": []}],
        "6": [{"subject": "選修化學-物質構造與反應速率", "classes": ["高二理組"], "rooms": ["5F 自主學習教室(二)"]}],
        "7": [{"subject": "選修化學-物質構造與反應速率", "classes": ["高二理組"], "rooms": ["5F 自主學習教室(二)"]}]
      },
      "星期五": {
        "1": [{"subject": "選修化學-有機化學與應用科技", "classes": ["高三理組"], "rooms": ["5F 自主學習教室(一)"]}],
        "2": [{"subject": "選修化學-有機化學與應用科技", "classes": ["高三理組"], "rooms": ["5F 自主學習教室(一)"]}]
      }
    },
    "楊政忠": {
      "星期四": {
        "5": [{"subject": "全民國防教育", "classes": ["高二理組", "高二文組"], "rooms": []}]
      }
    },
    "劉綺芍": {
      "星期二": {
        "2": [{"subject": "生涯規劃", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "4": [{"subject": "倫理思辨", "classes": ["高一"], "rooms": []}]
      }
    },
    "鄒湘平": {
      "星期二": {
        "2": [{"subject": "英語文", "classes": ["高一"], "rooms": ["5F 視聽教室"]}],
        "3": [{"subject": "英語文", "classes": ["高一"], "rooms": ["5F 視聽教室"]}],
        "5": [{"subject": "英語文", "classes": ["國八A", "國八B"], "rooms": []}],
        "6": [{"subject": "英語文", "classes": ["國八A", "國八B"], "rooms": []}],
        "8": [{"subject": "英語文(輔)", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "9": [{"subject": "英文素養", "classes": ["高二理組", "高二文組"], "rooms": []}]
      },
      "星期三": {
        "1": [{"subject": "英語文", "classes": ["高一"], "rooms": ["5F 視聽教室"]}],
        "2": [{"subject": "英語文", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "3": [{"subject": "英語文", "classes": ["高二理組", "高二文組"], "rooms": []}]
      },
      "星期五": {
        "1": [{"subject": "英語文", "classes": ["高一"], "rooms": ["5F 視聽教室"]}],
        "2": [{"subject": "英語文", "classes": ["國八A", "國八B"], "rooms": []}],
        "3": [{"subject": "英語文", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "4": [{"subject": "英語文", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "9": [{"subject": "英文素養-ESL", "classes": ["高一"], "rooms": ["5F 視聽教室"]}]
      }
    },
    "王淑華": {
      "星期五": {
        "1": [{"subject": "家政", "classes": ["國九A"], "rooms": []}],
        "2": [{"subject": "家政", "classes": ["國九B"], "rooms": []}],
        "3": [{"subject": "家政", "classes": ["國八A"], "rooms": []}],
        "4": [{"subject": "家政", "classes": ["國八B"], "rooms": []}]
      }
    },
    "蔡玉良": {
      "星期一": {
        "5": [{"subject": "選修物理-電磁現象一", "classes": ["高三理組"], "rooms": ["5F 自主學習教室(一)"]}],
        "6": [{"subject": "選修物理-電磁現象一", "classes": ["高三理組"], "rooms": ["5F 自主學習教室(一)"]}],
        "8": [{"subject": "地球科學(輔)", "classes": ["國九A"], "rooms": []}],
        "9": [{"subject": "自然探究", "classes": ["高一"], "rooms": []}]
      },
      "星期二": {
        "3": [{"subject": "選修物理-力學一", "classes": ["高二理組"], "rooms": ["5F 自主學習教室(二)"]}],
        "4": [{"subject": "地球科學", "classes": ["國九A"], "rooms": []}],
        "5": [{"subject": "現象二與量子", "classes": ["高三理組"], "rooms": ["5F 自主學習教室(一)"]}],
        "6": [{"subject": "現象二與量子", "classes": ["高三理組"], "rooms": ["5F 自主學習教室(一)"]}]
      },
      "星期三": {
        "7": [{"subject": "選修物理-力學一", "classes": ["高二理組"], "rooms": ["5F 自主學習教室(二)"]}],
        "8": [{"subject": "地球科學(輔)", "classes": ["國九B"], "rooms": []}]
      },
      "星期四": {
        "3": [{"subject": "地球科學", "classes": ["高一"], "rooms": []}],
        "4": [{"subject": "地球科學", "classes": ["高一"], "rooms": []}],
        "5": [{"subject": "地球科學", "classes": ["國九B"], "rooms": []}]
      }
    },
    "之宇": {
      "星期一": {
        "7": [{"subject": "英文增補", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "8": [{"subject": "英文(輔)", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "9": [{"subject": "英文素養", "classes": ["高三理組", "高三文組"], "rooms": []}]
      },
      "星期四": {
        "5": [{"subject": "專題閱讀與研究", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "6": [{"subject": "英文作文", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "7": [{"subject": "英文作文", "classes": ["高三理組", "高三文組"], "rooms": []}]
      }
    },
    "翟洛嫻": {
      "星期三": {
        "1": [{"subject": "音樂", "classes": ["高三理組", "高三文組"], "rooms": ["4F 音樂教室"]}],
        "2": [{"subject": "音樂", "classes": ["國八A"], "rooms": ["4F 音樂教室"]}],
        "3": [{"subject": "音樂", "classes": ["國九A"], "rooms": ["4F 音樂教室"]}]
          },
     
      "星期四": {
        "1": [{"subject": "音樂", "classes": ["高二理組", "高二文組"], "rooms": ["4F 音樂教室"]}],
        "2": [{"subject": "音樂", "classes": ["國八B"], "rooms": ["4F 音樂教室"]}],
        "3": [{"subject": "音樂", "classes": ["國九B"], "rooms": ["4F 音樂教室"]}],
        "5": [{"subject": "音樂", "classes": ["國七A"], "rooms": ["4F 音樂教室"]}],
        "6": [{"subject": "音樂", "classes": ["國七B"], "rooms": ["4F 音樂教室"]}]
      }
    },
    "名敦": {
      "星期四": {
        "9": [{"subject": "國文寫作", "classes": ["高二理組", "高二文組"], "rooms": []}]
      }
    },
    "曾淑汝": {
      "星期五": {
        "1": [{"subject": "本土語言", "classes": ["國八A"], "rooms": []}],
        "2": [{"subject": "本土語言", "classes": ["國七A"], "rooms": []}],
        "3": [{"subject": "本土語言", "classes": ["高一"], "rooms": []}]
      }
    },
    "廖麗雪": {
      "星期五": {
        "1": [{"subject": "本土語言", "classes": ["國八B"], "rooms": []}],
        "2": [{"subject": "本土語言", "classes": ["國七B"], "rooms": []}]
      }
    },
    "林秀歌": {
      "星期五": {
        "1": [{"subject": "本土語言", "classes": ["國八A"], "rooms": ["5F 語言教室 (iPad Room)"]}]
      }
    },
    "古靜宜": {
      "星期五": {
        "1": [{"subject": "本土語言", "classes": ["國八A", "國八B"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "2": [{"subject": "本土語言", "classes": ["國七A", "國七B"], "rooms": ["3F 多功能 e 化教室 (VR Room)"]}]
      }
    },
    "李牧": {
      "星期三": {
        "3": [{"subject": "數學", "classes": ["高一"], "rooms": ["5F 自主學習教室(一)"]}],
        "4": [{"subject": "數學", "classes": ["高一"], "rooms": ["5F 自主學習教室(一)"]}],
        "5": [{"subject": "數學甲", "classes": ["高三理組"], "rooms": ["5F 自主學習教室(一)"]}],
        "6": [{"subject": "數學甲", "classes": ["高三理組"], "rooms": ["5F 自主學習教室(一)"]}]
      },
      "星期四": {
        "3": [{"subject": "數學甲", "classes": ["高三理組"], "rooms": ["5F 自主學習教室(一)"]}],
        "4": [{"subject": "數學甲", "classes": ["高三理組"], "rooms": ["5F 自主學習教室(一)"]}],
        "5": [{"subject": "數學", "classes": ["高一"], "rooms": ["5F 自主學習教室(一)"]}],
        "6": [{"subject": "數學", "classes": ["高一"], "rooms": ["5F 自主學習教室(一)"]}]
      }
    },
    "王志遠": {
      "星期二": {
        "4": [{"subject": "增廣補強", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "5": [{"subject": "數位化數學", "classes": ["高二理組"], "rooms": ["5F 自主學習教室(二)"]}],
        "6": [{"subject": "數位化數學", "classes": ["高二理組"], "rooms": ["5F 自主學習教室(二)"]}]
      },
      "星期三": {
        "5": [{"subject": "數學B", "classes": ["高二文組"], "rooms": []}],
        "6": [{"subject": "數學B", "classes": ["高二文組"], "rooms": []}]
      },
      "星期四": {
        "3": [{"subject": "數學B", "classes": ["高二文組"], "rooms": []}],
        "4": [{"subject": "數學B", "classes": ["高二文組"], "rooms": []}]
      },
      "星期五": {
        "8": [{"subject": "數學(輔)", "classes": ["高二文組"], "rooms": []}],
        "9": [{"subject": "數學探究", "classes": ["高二文組"], "rooms": []}]
      }
    },
    "蘇試": {
      "星期一": {
        "8": [{"subject": "數學(輔)", "classes": ["國八A", "國八B"], "rooms": ["4F 分組教室(一)"]}],
        "9": [{"subject": "數學探究", "classes": ["國八A", "國八B"], "rooms": ["4F 分組教室(一)"]}]
      },
      "星期二": {
        "8": [{"subject": "數學(輔)", "classes": ["高三理組"], "rooms": []}],
        "9": [{"subject": "數學探究", "classes": ["高三理組"], "rooms": []}]
      },
      "星期三": {
        "3": [{"subject": "數學", "classes": ["國八A", "國八B"], "rooms": ["4F 分組教室(一)"]}],
        "4": [{"subject": "數學", "classes": ["國八A", "國八B"], "rooms": ["4F 分組教室(一)"]}],
        "5": [{"subject": "數學A", "classes": ["高二理組"], "rooms": ["5F 自主學習教室(二)"]}],
        "6": [{"subject": "數學A", "classes": ["高二理組"], "rooms": ["5F 自主學習教室(二)"]}]
      },
      "星期四": {
        "3": [{"subject": "數學A", "classes": ["高二理組"], "rooms": ["5F 自主學習教室(二)"]}],
        "4": [{"subject": "數學A", "classes": ["高二理組"], "rooms": ["5F 自主學習教室(二)"]}],
        "5": [{"subject": "數學", "classes": ["國八A", "國八B"], "rooms": ["4F 分組教室(一)"]}],
        "6": [{"subject": "數學", "classes": ["國八A", "國八B"], "rooms": ["4F 分組教室(一)"]}]
      },
      "星期五": {
        "8": [{"subject": "數學(輔)", "classes": ["高二理組"], "rooms": ["5F 自主學習教室(二)"]}],
        "9": [{"subject": "數學探究", "classes": ["高二理組"], "rooms": ["5F 自主學習教室(二)"]}]
      }
    },
    "吳宇綸": {
      "星期一": {
        "3": [{"subject": "生活藝數", "classes": ["高三理組"], "rooms": ["5F 自主學習教室(一)"]}],
        "4": [{"subject": "生活藝數", "classes": ["高三理組"], "rooms": ["5F 自主學習教室(一)"]}],
        "5": [{"subject": "數學", "classes": ["國九A", "國九B"], "rooms": ["4F 分組教室(一)"]}],
        "6": [{"subject": "數學", "classes": ["國九A", "國九B"], "rooms": ["4F 分組教室(一)"]}],
        "8": [{"subject": "數學(輔)", "classes": ["國八A", "國八B"], "rooms": []}],
        "9": [{"subject": "數學探究", "classes": ["國八A", "國八B"], "rooms": []}]
      },
      "星期二": {
        "6": [{"subject": "數學", "classes": ["國九A", "國九B"], "rooms": ["4F 分組教室(一)"]}],
        "7": [{"subject": "數學", "classes": ["國九A", "國九B"], "rooms": ["4F 分組教室(一)"]}],
        "9": [{"subject": "數學探究", "classes": ["國八A"], "rooms": []}]
      },
      "星期三": {
        "3": [{"subject": "數學", "classes": ["國八A", "國八B"], "rooms": []}],
        "4": [{"subject": "數學", "classes": ["國八A", "國八B"], "rooms": []}]
      },
      "星期四": {
        "5": [{"subject": "數學", "classes": ["國八A", "國八B"], "rooms": []}],
        "6": [{"subject": "數學", "classes": ["國八A", "國八B"], "rooms": []}],
        "8": [{"subject": "數學(輔)", "classes": ["國九A", "國九B"], "rooms": ["4F 分組教室(一)"]}],
        "9": [{"subject": "數學探究", "classes": ["國九A", "國九B"], "rooms": ["4F 分組教室(一)"]}]
      }
    },
    "外聘": {
      "星期五": {
        "3": [{"subject": "家政", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "4": [{"subject": "家政", "classes": ["高三理組", "高三文組"], "rooms": []}]
      }
    }
  },
  "classSchedule": {
    "高三理組": {
      "星期一": {
        "1": [{"teacher": "張秀玫", "subject": "語文表達與傳播應用", "rooms": []}],
        "2": [{"teacher": "王世宗", "subject": "選修生物-生態、演化及生物多樣性", "rooms": ["5F 自主學習教室(一)"]}],
        "5": [{"teacher": "蔡玉良", "subject": "選修物理-電磁現象一", "rooms": ["5F 自主學習教室(一)"]}],
        "6": [{"teacher": "蔡玉良", "subject": "選修物理-電磁現象一", "rooms": ["5F 自主學習教室(一)"]}],
        "7": [{"teacher": "之宇", "subject": "英文增補", "rooms": []}],
        "8": [{"teacher": "之宇", "subject": "英文(輔)", "rooms": []}],
        "9": [{"teacher": "之宇", "subject": "英文素養", "rooms": []}],
        "3": [{"teacher": "吳宇綸", "subject": "生活藝數", "rooms": ["5F 自主學習教室(一)"]}],
        "4": [{"teacher": "吳宇綸", "subject": "生活藝數", "rooms": ["5F 自主學習教室(一)"]}]
      },
      "星期二": {
        "1": [{"teacher": "張秀玫", "subject": "彈性學習-自主學習", "rooms": []}],
        "3": [{"teacher": "張秀玫", "subject": "專題閱讀與研究", "rooms": []}],
        "2": [{"teacher": "江霂歖", "subject": "健康與護理", "rooms": []}],
        "7": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "4": [{"teacher": "王妤文", "subject": "美術", "rooms": []}, {"teacher": "Roja", "subject": "美術", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "美術", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "美術", "rooms": ["4F 美術教室"]}],
        "5": [{"teacher": "蔡玉良", "subject": "現象二與量子", "rooms": ["5F 自主學習教室(一)"]}],
        "6": [{"teacher": "蔡玉良", "subject": "現象二與量子", "rooms": ["5F 自主學習教室(一)"]}],
        "8": [{"teacher": "蘇試", "subject": "數學(輔)", "rooms": []}],
        "9": [{"teacher": "蘇試", "subject": "數學探究", "rooms": []}]
      },
      "星期三": {
        "7": [{"teacher": "張秀玫", "subject": "語文表達與傳播應用", "rooms": []}],
        "8": [{"teacher": "張秀玫", "subject": "自主學習", "rooms": []}], 
        "3": [{"teacher": "孔令堅", "subject": "藝術生活", "rooms": []}],
        "4": [{"teacher": "孔令堅", "subject": "藝術生活", "rooms": []}],
        "2": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "9": [{"teacher": "陳昱澐", "subject": "自然探究", "rooms": ["5F 自主學習教室(一)"]}],
        "1": [{"teacher": "翟洛嫻", "subject": "音樂", "rooms": ["4F 音樂教室"]}],
        "5": [{"teacher": "李牧", "subject": "數學甲", "rooms": ["5F 自主學習教室(一)"]}],
        "6": [{"teacher": "李牧", "subject": "數學甲", "rooms": ["5F 自主學習教室(一)"]}]
      },
      "星期四": {
        "8": [{"teacher": "張秀玫", "subject": "專題閱讀(輔)", "rooms": []}],
        "1": [{"teacher": "王世宗", "subject": "選修生物-生態、演化及生物多樣性", "rooms": ["5F 自主學習教室(一)"]}],
        "2": [{"teacher": "江霂歖", "subject": "健康與護理", "rooms": []}],
        "9": [{"teacher": "Roja", "subject": "ESL(素養)", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "ESL(素養)", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "ESL(素養)", "rooms": ["4F 美術教室"]}],
        "5": [{"teacher": "之宇", "subject": "專題閱讀與研究", "rooms": []}],
        "6": [{"teacher": "之宇", "subject": "英文作文", "rooms": []}],
        "7": [{"teacher": "之宇", "subject": "英文作文", "rooms": []}],
        "3": [{"teacher": "李牧", "subject": "數學甲", "rooms": ["5F 自主學習教室(一)"]}],
        "4": [{"teacher": "李牧", "subject": "數學甲", "rooms": ["5F 自主學習教室(一)"]}]
      },
      "星期五": {
        "5": [{"teacher": "張秀玫", "subject": "自主學習", "rooms": []}],
        "6": [{"teacher": "張秀玫", "subject": "班會", "rooms": []}],
        "7": [{"teacher": "張秀玫", "subject": "團體活動", "rooms": []}],
        "8": [{"teacher": "王世宗", "subject": "生物(輔)", "rooms": ["5F 自主學習教室(一)"]}],
        "9": [{"teacher": "王世宗", "subject": "自然探究", "rooms": ["5F 自主學習教室(一)"]}],
        "1": [{"teacher": "楊志元", "subject": "選修化學-有機化學與應用科技", "rooms": ["5F 自主學習教室(一)"]}],
        "2": [{"teacher": "楊志元", "subject": "選修化學-有機化學與應用科技", "rooms": ["5F 自主學習教室(一)"]}],
        "3": [{"teacher": "外聘", "subject": "家政", "rooms": []}],
        "4": [{"teacher": "外聘", "subject": "家政", "rooms": []}]
      }
    },
    "高三文組": {
      "星期一": {
        "1": [{"teacher": "張秀玫", "subject": "語文表達與傳播應用", "rooms": []}],
        "6": [{"teacher": "張秀玫", "subject": "各類文學選讀", "rooms": []}],
        "2": [{"teacher": "陳瑋筠", "subject": "科技、環境與藝術的歷史", "rooms": []}],
        "5": [{"teacher": "陳瑋筠", "subject": "科技、環境與藝術的歷史", "rooms": []}],
        "3": [{"teacher": "何文達", "subject": "社會環境議題", "rooms": []}],
        "4": [{"teacher": "何文達", "subject": "民主政治與法律", "rooms": []}],
        "7": [{"teacher": "之宇", "subject": "英文增補", "rooms": []}],
        "8": [{"teacher": "之宇", "subject": "英文(輔)", "rooms": []}],
        "9": [{"teacher": "之宇", "subject": "英文素養", "rooms": []}]
      },
      "星期二": {
        "1": [{"teacher": "張秀玫", "subject": "彈性學習-自主學習", "rooms": []}],
        "3": [{"teacher": "張秀玫", "subject": "專題閱讀與研究", "rooms": []}],
        "8": [{"teacher": "曾美芝", "subject": "數學(輔)", "rooms": []}],
        "9": [{"teacher": "曾美芝", "subject": "數學探究", "rooms": []}],
        "5": [{"teacher": "陳瑋筠", "subject": "科技、環境與藝術的歷史", "rooms": []}],
        "2": [{"teacher": "江霂歖", "subject": "健康與護理", "rooms": []}],
        "7": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "6": [{"teacher": "何文達", "subject": "民主政治與法律", "rooms": []}],
        "4": [{"teacher": "王妤文", "subject": "美術", "rooms": []}, {"teacher": "Roja", "subject": "美術", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "美術", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "美術", "rooms": ["4F 美術教室"]}]
      },
      "星期三": {
        "7": [{"teacher": "張秀玫", "subject": "語文表達與傳播應用", "rooms": []}],
        "8": [{"teacher": "張秀玫", "subject": "自主學習", "rooms": []}],
        "5": [{"teacher": "曾美芝", "subject": "數學乙", "rooms": []}],
        "6": [{"teacher": "曾美芝", "subject": "數學乙", "rooms": []}],
        "9": [{"teacher": "陳瑋筠", "subject": "社會探究", "rooms": []}],
        "3": [{"teacher": "孔令堅", "subject": "藝術生活", "rooms": []}],
        "4": [{"teacher": "孔令堅", "subject": "藝術生活", "rooms": []}],
        "2": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "1": [{"teacher": "翟洛嫻", "subject": "音樂", "rooms": ["4F 音樂教室"]}]
      },
      "星期四": {
        "8": [{"teacher": "張秀玫", "subject": "專題閱讀(輔)", "rooms": []}],
        "3": [{"teacher": "曾美芝", "subject": "數學乙", "rooms": []}],
        "4": [{"teacher": "曾美芝", "subject": "數學乙", "rooms": []}],
        "2": [{"teacher": "江霂歖", "subject": "健康與護理", "rooms": []}],
        "1": [{"teacher": "何文達", "subject": "民主政治與法律", "rooms": []}],
        "9": [{"teacher": "Roja", "subject": "ESL(素養)", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "ESL(素養)", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "ESL(素養)", "rooms": ["4F 美術教室"]}],
        "5": [{"teacher": "之宇", "subject": "專題閱讀與研究", "rooms": []}],
        "6": [{"teacher": "之宇", "subject": "英文作文", "rooms": []}],
        "7": [{"teacher": "之宇", "subject": "英文作文", "rooms": []}]
      },
      "星期五": {
        "5": [{"teacher": "張秀玫", "subject": "自主學習", "rooms": []}],
        "6": [{"teacher": "張秀玫", "subject": "班會", "rooms": []}],
        "7": [{"teacher": "張秀玫", "subject": "團體活動", "rooms": []}],
        "1": [{"teacher": "何文達", "subject": "社會環境議題", "rooms": []}],
        "2": [{"teacher": "何文達", "subject": "社會環境議題", "rooms": []}],
        "8": [{"teacher": "何文達", "subject": "公民與社會(輔)", "rooms": []}],
        "9": [{"teacher": "何文達", "subject": "社會探究", "rooms": []}],
        "3": [{"teacher": "外聘", "subject": "家政", "rooms": []}],
        "4": [{"teacher": "外聘", "subject": "家政", "rooms": []}]
      }
    },
    "國九B": {
      "星期一": {
        "3": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "5": [{"teacher": "曾美芝", "subject": "數學", "rooms": []}, {"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": ["4F 分組教室(一)"]}],
        "6": [{"teacher": "曾美芝", "subject": "數學", "rooms": []}, {"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": ["4F 分組教室(一)"]}],
        "2": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "王妤文", "subject": "英語文", "rooms": []}],
        "7": [{"teacher": "王世宗", "subject": "健康教育", "rooms": []}],
        "9": [{"teacher": "王世宗", "subject": "自然探究", "rooms": []}],
        "4": [{"teacher": "蔡佳玲", "subject": "理化", "rooms": []}],
        "8": [{"teacher": "蔡佳玲", "subject": "理化(輔)", "rooms": []}],
        "1": [{"teacher": "何文達", "subject": "地理", "rooms": []}]
      },
      "星期二": {
        "2": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "8": [{"teacher": "張秀玫", "subject": "國語文(輔)", "rooms": []}],
        "5": [{"teacher": "倪世斌", "subject": "生活科技", "rooms": ["6F 電腦教室"]}],
        "6": [{"teacher": "曾美芝", "subject": "數學", "rooms": []}, {"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": ["4F 分組教室(一)"]}],
        "7": [{"teacher": "曾美芝", "subject": "數學", "rooms": []}, {"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": ["4F 分組教室(一)"]}],
        "1": [{"teacher": "吳雯菁", "subject": "公民與社會", "rooms": []}],
        "4": [{"teacher": "吳雯菁", "subject": "童軍", "rooms": []}],
        "9": [{"teacher": "羅雅苓", "subject": "英文素養", "rooms": []}],
        "3": [{"teacher": "Roja", "subject": "彈性學習-閱讀與寫作", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "彈性學習-閱讀與寫作", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "彈性學習-閱讀與寫作", "rooms": ["4F 美術教室"]}]
      },
      "星期三": {
        "1": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "6": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "4": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "王妤文", "subject": "英語文", "rooms": []}],
        "7": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "2": [{"teacher": "簡珮瑜", "subject": "輔導活動", "rooms": []}],
        "3": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "9": [{"teacher": "何文達", "subject": "社會探究", "rooms": []}],
        "5": [{"teacher": "王妤文", "subject": "表演藝術-ESL", "rooms": []}, {"teacher": "Roja", "subject": "表演藝術-ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "表演藝術-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "表演藝術-ESL", "rooms": ["4F 美術教室"]}],
        "8": [{"teacher": "蔡玉良", "subject": "地球科學(輔)", "rooms": []}]
      },
      "星期四": {
        "1": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "8": [{"teacher": "曾美芝", "subject": "數學(輔)", "rooms": []}, {"teacher": "桂松山", "subject": "數學(輔)", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學(輔)", "rooms": ["4F 分組教室(一)"]}],
        "9": [{"teacher": "曾美芝", "subject": "數學探究", "rooms": []}, {"teacher": "桂松山", "subject": "數學探究", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學探究", "rooms": ["4F 分組教室(一)"]}],
        "6": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "王妤文", "subject": "英語文", "rooms": []}],
        "2": [{"teacher": "簡珮瑜", "subject": "彈性學習-生命教育", "rooms": []}],
        "7": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "4": [{"teacher": "王妤文", "subject": "視覺藝術-ESL", "rooms": []}, {"teacher": "Roja", "subject": "視覺藝術-ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "視覺藝術-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "視覺藝術-ESL", "rooms": ["4F 美術教室"]}],
        "5": [{"teacher": "蔡玉良", "subject": "地球科學", "rooms": []}],
        "3": [{"teacher": "翟洛嫻", "subject": "音樂", "rooms": ["4F 音樂教室"]}]
      },
      "星期五": {
        "9": [{"teacher": "張秀玫", "subject": "國文寫作", "rooms": []}],
        "3": [{"teacher": "倪世斌", "subject": "資訊科技", "rooms": ["6F 電腦教室"]}],
        "8": [{"teacher": "莊旭惠", "subject": "英語文(輔)", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文(輔)", "rooms": []}, {"teacher": "王妤文", "subject": "英語文(輔)", "rooms": []}],
        "5": [{"teacher": "陳瑋筠", "subject": "班會", "rooms": []}],
        "6": [{"teacher": "陳瑋筠", "subject": "週會/社團", "rooms": []}],
        "7": [{"teacher": "陳瑋筠", "subject": "週會/社團", "rooms": []}],
        "1": [{"teacher": "蔡佳玲", "subject": "理化", "rooms": []}],
        "4": [{"teacher": "Roja", "subject": "彈性學習-生活玩家ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "彈性學習-生活玩家ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "彈性學習-生活玩家ESL", "rooms": ["4F 美術教室"]}],
        "2": [{"teacher": "王淑華", "subject": "家政", "rooms": []}]
      }
    },
    "高一": {
      "星期一": {
        "4": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "8": [{"teacher": "張秀玫", "subject": "國語文(輔)", "rooms": []}],
        "2": [{"teacher": "倪世斌", "subject": "資訊科技", "rooms": ["6F 電腦教室"]}],
        "3": [{"teacher": "曾美芝", "subject": "自主學習", "rooms": []}],
        "1": [{"teacher": "陳瑋筠", "subject": "公民與社會", "rooms": []}],
        "6": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "7": [{"teacher": "何文達", "subject": "地理", "rooms": []}],
        "5": [{"teacher": "王妤文", "subject": "英語聽講", "rooms": []}, {"teacher": "Roja", "subject": "英語聽講", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "英語聽講", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "9": [{"teacher": "蔡玉良", "subject": "自然探究", "rooms": []}]
      },
      "星期二": {
        "7": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "5": [{"teacher": "王世宗", "subject": "多元選修", "rooms": []}, {"teacher": "蔡佳玲", "subject": "多元選修", "rooms": ["5F 語言教室 (iPad Room)"]}, {"teacher": "吳雯菁", "subject": "多元選修", "rooms": []}, {"teacher": "陳昱澐", "subject": "多元選修", "rooms": []}],
        "6": [{"teacher": "王世宗", "subject": "多元選修", "rooms": []}, {"teacher": "蔡佳玲", "subject": "多元選修", "rooms": ["5F 語言教室 (iPad Room)"]}, {"teacher": "吳雯菁", "subject": "多元選修", "rooms": []}, {"teacher": "陳昱澐", "subject": "多元選修", "rooms": []}],
        "2": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": ["5F 視聽教室"]}],
        "3": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": ["5F 視聽教室"]}],
        "1": [{"teacher": "何文達", "subject": "地理", "rooms": []}],
        "8": [{"teacher": "何文達", "subject": "地理(輔)", "rooms": []}],
        "9": [{"teacher": "王妤文", "subject": "英文素養", "rooms": []}, {"teacher": "Roja", "subject": "英文素養", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "英文素養", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "4": [{"teacher": "劉綺芍", "subject": "倫理思辨", "rooms": []}]
      },
      "星期四": {
        "7": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "9": [{"teacher": "張秀玫", "subject": "語文素養-新詩", "rooms": []}],
        "5": [{"teacher": "曾美芝", "subject": "數學", "rooms": []}, {"teacher": "李牧", "subject": "數學", "rooms": ["5F 自主學習教室(一)"]}],
        "6": [{"teacher": "曾美芝", "subject": "數學", "rooms": []}, {"teacher": "李牧", "subject": "數學", "rooms": ["5F 自主學習教室(一)"]}],
        "8": [{"teacher": "王世宗", "subject": "生物(輔)", "rooms": []}],
        "1": [{"teacher": "楊志元", "subject": "化學", "rooms": []}],
        "2": [{"teacher": "楊志元", "subject": "化學", "rooms": []}],
        "3": [{"teacher": "蔡玉良", "subject": "地球科學", "rooms": []}],
        "4": [{"teacher": "蔡玉良", "subject": "地球科學", "rooms": []}]
      },
      "星期五": {
        "4": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "5": [{"teacher": "曾美芝", "subject": "班會", "rooms": []}],
        "6": [{"teacher": "曾美芝", "subject": "團體活動", "rooms": []}],
        "7": [{"teacher": "曾美芝", "subject": "團體活動", "rooms": []}],
        "8": [{"teacher": "曾美芝", "subject": "數學(輔)", "rooms": []}],
        "2": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "1": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": ["5F 視聽教室"]}],
        "9": [{"teacher": "羅雅苓", "subject": "英文素養-ESL", "rooms": []}, {"teacher": "鄒湘平", "subject": "英文素養-ESL", "rooms": ["5F 視聽教室"]}],
        "3": [{"teacher": "曾淑汝", "subject": "本土語言", "rooms": []}]
      },
      "星期三": {
        "3": [{"teacher": "曾美芝", "subject": "數學", "rooms": []}, {"teacher": "李牧", "subject": "數學", "rooms": ["5F 自主學習教室(一)"]}],
        "4": [{"teacher": "曾美芝", "subject": "數學", "rooms": []}, {"teacher": "李牧", "subject": "數學", "rooms": ["5F 自主學習教室(一)"]}],
        "9": [{"teacher": "曾美芝", "subject": "數學探究", "rooms": []}],
        "2": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "5": [{"teacher": "陳瑋筠", "subject": "公民與社會", "rooms": []}],
        "6": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "1": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": ["5F 視聽教室"]}],
        "7": [{"teacher": "王妤文", "subject": "專題研究-ESL", "rooms": []}, {"teacher": "Roja", "subject": "專題研究-ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "專題研究-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "8": [{"teacher": "王妤文", "subject": "ESL(輔)", "rooms": []}, {"teacher": "Roja", "subject": "ESL(輔)", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "ESL(輔)", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}]
      }
    },
    "國八B": {
      "星期五": {
        "1": [{"teacher": "張秀玫", "subject": "本土語言", "rooms": []}, {"teacher": "廖麗雪", "subject": "本土語言", "rooms": []}, {"teacher": "古靜宜", "subject": "本土語言", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "2": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "3": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "5": [{"teacher": "羅雅苓", "subject": "班會", "rooms": []}],
        "6": [{"teacher": "羅雅苓", "subject": "週會/社團", "rooms": []}],
        "7": [{"teacher": "羅雅苓", "subject": "週會/社團", "rooms": []}],
        "8": [{"teacher": "Roja", "subject": "ESL(輔)", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "ESL(輔)", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "ESL(輔)", "rooms": ["4F 美術教室"]}],
        "9": [{"teacher": "Roja", "subject": "英文素養-ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "英文素養-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "英文素養-ESL", "rooms": ["4F 美術教室"]}],
        "4": [{"teacher": "王淑華", "subject": "家政", "rooms": []}]
      },
      "星期三": {
        "6": [{"teacher": "倪世斌", "subject": "生活科技", "rooms": ["6F 電腦教室"]}],
        "5": [{"teacher": "蔡佳玲", "subject": "理化", "rooms": []}],
        "9": [{"teacher": "蔡佳玲", "subject": "自然科學探究", "rooms": []}],
        "7": [{"teacher": "吳雯菁", "subject": "童軍", "rooms": []}],
        "8": [{"teacher": "吳雯菁", "subject": "公民與社會(輔)", "rooms": []}],
        "1": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "3": [{"teacher": "陳昱澐", "subject": "數學", "rooms": []}, {"teacher": "蘇試", "subject": "數學", "rooms": ["4F 分組教室(一)"]}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}],
        "4": [{"teacher": "陳昱澐", "subject": "數學", "rooms": []}, {"teacher": "蘇試", "subject": "數學", "rooms": ["4F 分組教室(一)"]}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}],
        "2": [{"teacher": "何文達", "subject": "地理", "rooms": []}]
      },
      "星期四": {
        "4": [{"teacher": "倪世斌", "subject": "資訊科技", "rooms": ["6F 電腦教室"]}],
        "1": [{"teacher": "蔡佳玲", "subject": "理化", "rooms": []}],
        "7": [{"teacher": "吳雯菁", "subject": "彈性學習-生命教育", "rooms": []}],
        "8": [{"teacher": "呂宜霖", "subject": "國語文(輔)", "rooms": []}],
        "5": [{"teacher": "陳昱澐", "subject": "數學", "rooms": []}, {"teacher": "蘇試", "subject": "數學", "rooms": ["4F 分組教室(一)"]}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}],
        "6": [{"teacher": "陳昱澐", "subject": "數學", "rooms": []}, {"teacher": "蘇試", "subject": "數學", "rooms": ["4F 分組教室(一)"]}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}],
        "9": [{"teacher": "陳昱澐", "subject": "數學探究", "rooms": []}],
        "3": [{"teacher": "Roja", "subject": "彈性學習-英語探索樂園ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "彈性學習-英語探索樂園ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "彈性學習-英語探索樂園ESL", "rooms": ["4F 美術教室"]}],
        "2": [{"teacher": "翟洛嫻", "subject": "音樂", "rooms": ["4F 音樂教室"]}]
      },
      "星期二": {
        "5": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "6": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "2": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "1": [{"teacher": "簡珮瑜", "subject": "輔導活動", "rooms": []}],
        "4": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "9": [{"teacher": "呂宜霖", "subject": "語文閱讀策略", "rooms": []}],
        "3": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "8": [{"teacher": "羅雅苓", "subject": "英文(輔)", "rooms": []}],
        "7": [{"teacher": "王妤文", "subject": "健康教育-ESL", "rooms": []}, {"teacher": "Roja", "subject": "健康教育-ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "健康教育-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "健康教育-ESL", "rooms": ["4F 美術教室"]}]
      },
      "星期一": {
        "7": [{"teacher": "蔡佳玲", "subject": "理化", "rooms": []}],
        "3": [{"teacher": "吳雯菁", "subject": "公民與社會", "rooms": []}],
        "1": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "2": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "5": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "8": [{"teacher": "陳昱澐", "subject": "數學(輔)", "rooms": []}, {"teacher": "蘇試", "subject": "數學(輔)", "rooms": ["4F 分組教室(一)"]}, {"teacher": "吳宇綸", "subject": "數學(輔)", "rooms": []}],
        "9": [{"teacher": "陳昱澐", "subject": "數學探究", "rooms": []}, {"teacher": "蘇試", "subject": "數學探究", "rooms": ["4F 分組教室(一)"]}, {"teacher": "吳宇綸", "subject": "數學探究", "rooms": []}],
        "4": [{"teacher": "Roja", "subject": "視覺藝術-ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "視覺藝術-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "視覺藝術-ESL", "rooms": ["4F 美術教室"]}],
        "6": [{"teacher": "Roja", "subject": "表演藝術-ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "表演藝術-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "表演藝術-ESL", "rooms": ["4F 美術教室"]}]
      }
    },
    "國七B": {
      "星期五": {
        "2": [{"teacher": "張秀玫", "subject": "本土語言", "rooms": []}, {"teacher": "廖麗雪", "subject": "本土語言", "rooms": []}, {"teacher": "古靜宜", "subject": "本土語言", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}],
        "1": [{"teacher": "王世宗", "subject": "健康教育", "rooms": []}],
        "8": [{"teacher": "蔡佳玲", "subject": "數學(輔)", "rooms": []}, {"teacher": "桂松山", "subject": "數學(輔)", "rooms": []}, {"teacher": "陳昱澐", "subject": "數學(輔)", "rooms": ["4F 分組教室(一)"]}],
        "3": [{"teacher": "吳雯菁", "subject": "公民與社會", "rooms": []}],
        "5": [{"teacher": "吳雯菁", "subject": "班會", "rooms": []}],
        "6": [{"teacher": "吳雯菁", "subject": "週會/社團", "rooms": []}],
        "7": [{"teacher": "吳雯菁", "subject": "週會/社團", "rooms": []}],
        "4": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "9": [{"teacher": "呂宜霖", "subject": "國文寫作", "rooms": []}]
      },
      "星期一": {
        "1": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": []}, {"teacher": "邱千芸", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文", "rooms": []}],
        "4": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "5": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "2": [{"teacher": "蔡佳玲", "subject": "數學", "rooms": []}, {"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "陳昱澐", "subject": "數學", "rooms": ["4F 分組教室(一)"]}],
        "6": [{"teacher": "吳雯菁", "subject": "童軍", "rooms": []}],
        "3": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "7": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "8": [{"teacher": "羅雅苓", "subject": "英語文(輔)", "rooms": []}],
        "9": [{"teacher": "王妤文", "subject": "英文素養", "rooms": []}, {"teacher": "Roja", "subject": "英文素養", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "英文素養", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "英文素養", "rooms": ["4F 美術教室"]}]
      },
      "星期三": {
        "7": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": []}, {"teacher": "邱千芸", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文", "rooms": []}],
        "2": [{"teacher": "蔡佳玲", "subject": "數學", "rooms": []}, {"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "陳昱澐", "subject": "數學", "rooms": ["4F 分組教室(一)"]}],
        "9": [{"teacher": "吳雯菁", "subject": "公民與社會(輔)", "rooms": []}],
        "4": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "8": [{"teacher": "呂宜霖", "subject": "國語文(輔)", "rooms": []}],
        "1": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "5": [{"teacher": "陳昱澐", "subject": "生活科技", "rooms": ["4F 分組教室(一)", "6F 生活科技教室"]}],
        "6": [{"teacher": "陳昱澐", "subject": "資訊科技", "rooms": ["6F 生活科技教室"]}],
        "3": [{"teacher": "王妤文", "subject": "表演藝術-ESL", "rooms": []}, {"teacher": "Roja", "subject": "表演藝術-ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "表演藝術-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "表演藝術-ESL", "rooms": ["4F 美術教室"]}]
      },
      "星期四": {
        "2": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": []}, {"teacher": "邱千芸", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文", "rooms": []}],
        "9": [{"teacher": "莊旭惠", "subject": "英文素養", "rooms": []}, {"teacher": "邱千芸", "subject": "英文素養", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英文素養", "rooms": []}],
        "5": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "3": [{"teacher": "蔡佳玲", "subject": "數學", "rooms": []}, {"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "陳昱澐", "subject": "數學", "rooms": ["4F 分組教室(一)"]}],
        "1": [{"teacher": "簡珮瑜", "subject": "輔導活動", "rooms": []}],
        "4": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "7": [{"teacher": "王妤文", "subject": "家政-ESL", "rooms": []}, {"teacher": "Roja", "subject": "家政-ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "家政-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "家政-ESL", "rooms": ["4F 美術教室"]}],
        "8": [{"teacher": "王妤文", "subject": "ESL(輔)", "rooms": []}, {"teacher": "Roja", "subject": "ESL(輔)", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "ESL(輔)", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "ESL(輔)", "rooms": ["4F 美術教室"]}],
        "6": [{"teacher": "翟洛嫻", "subject": "音樂", "rooms": ["4F 音樂教室"]}]
      },
      "星期二": {
        "4": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "8": [{"teacher": "王世宗", "subject": "生物(輔)", "rooms": []}],
        "2": [{"teacher": "蔡佳玲", "subject": "數學", "rooms": []}, {"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "陳昱澐", "subject": "數學", "rooms": ["4F 分組教室(一)"]}],
        "7": [{"teacher": "孔令堅", "subject": "生命教育", "rooms": []}],
        "9": [{"teacher": "桂松山", "subject": "數學探究", "rooms": []}],
        "1": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "3": [{"teacher": "何文達", "subject": "地理", "rooms": []}],
        "5": [{"teacher": "王妤文", "subject": "彈性學習-閱讀心力量ESL", "rooms": []}, {"teacher": "Roja", "subject": "彈性學習-閱讀心力量ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "彈性學習-閱讀心力量ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "彈性學習-閱讀心力量ESL", "rooms": ["4F 美術教室"]}],
        "6": [{"teacher": "王妤文", "subject": "視覺藝術-ESL", "rooms": []}, {"teacher": "Roja", "subject": "視覺藝術-ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "視覺藝術-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "視覺藝術-ESL", "rooms": ["4F 美術教室"]}]
      }
    },
    "高二理組": {
      "星期一": {
        "5": [{"teacher": "倪世斌", "subject": "生活科技", "rooms": ["6F 電腦教室"]}],
        "4": [{"teacher": "王世宗", "subject": "自然科學探究", "rooms": ["5F 自主學習教室(二)"]}],
        "9": [{"teacher": "蔡佳玲", "subject": "自然探究", "rooms": ["5F 自主學習教室(二)"]}],
        "2": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "3": [{"teacher": "Chad", "subject": "英文專題簡報實作", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "英文專題簡報實作", "rooms": ["4F 美術教室"]}],
        "7": [{"teacher": "Chad", "subject": "美術-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "美術-ESL", "rooms": ["4F 美術教室"]}],
        "1": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "6": [{"teacher": "劉玉華", "subject": "學習", "rooms": []}],
        "8": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}]
      },
      "星期二": {
        "7": [{"teacher": "倪世斌", "subject": "生活科技", "rooms": ["6F 電腦教室"]}],
        "4": [{"teacher": "莊旭惠", "subject": "增廣補強", "rooms": []}, {"teacher": "王志遠", "subject": "增廣補強", "rooms": []}],
        "8": [{"teacher": "莊旭惠", "subject": "英語文(輔)", "rooms": ["5F 視聽教室"]}, {"teacher": "鄒湘平", "subject": "英語文(輔)", "rooms": []}],
        "9": [{"teacher": "莊旭惠", "subject": "英文素養", "rooms": ["5F 視聽教室"]}, {"teacher": "鄒湘平", "subject": "英文素養", "rooms": []}],
        "1": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "2": [{"teacher": "劉綺芍", "subject": "生涯規劃", "rooms": []}],
        "3": [{"teacher": "蔡玉良", "subject": "選修物理-力學一", "rooms": ["5F 自主學習教室(二)"]}],
        "5": [{"teacher": "王志遠", "subject": "數位化數學", "rooms": ["5F 自主學習教室(二)"]}],
        "6": [{"teacher": "王志遠", "subject": "數位化數學", "rooms": ["5F 自主學習教室(二)"]}]
      },
      "星期三": {
        "2": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "3": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "8": [{"teacher": "王世宗", "subject": "生物(輔)", "rooms": ["5F 自主學習教室(二)"]}],
        "9": [{"teacher": "王妤文", "subject": "ESL(素養)", "rooms": []}, {"teacher": "Gina", "subject": "ESL(素養)", "rooms": ["4F 美術教室"]}],
        "4": [{"teacher": "Chad", "subject": "英文專題簡報實作", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "英文專題簡報實作", "rooms": ["4F 美術教室"]}],
        "7": [{"teacher": "蔡玉良", "subject": "選修物理-力學一", "rooms": ["5F 自主學習教室(二)"]}],
        "5": [{"teacher": "蘇試", "subject": "數學A", "rooms": ["5F 自主學習教室(二)"]}],
        "6": [{"teacher": "蘇試", "subject": "數學A", "rooms": ["5F 自主學習教室(二)"]}],
        "1": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}]
      },
      "星期五": {
        "3": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "4": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "2": [{"teacher": "王世宗", "subject": "自然科學探究", "rooms": ["5F 自主學習教室(二)"]}],
        "1": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "5": [{"teacher": "劉玉華", "subject": "班會", "rooms": []}],
        "6": [{"teacher": "劉玉華", "subject": "團體活動", "rooms": []}],
        "7": [{"teacher": "劉玉華", "subject": "團體活動", "rooms": []}],
        "8": [{"teacher": "蘇試", "subject": "數學(輔)", "rooms": ["5F 自主學習教室(二)"]}],
        "9": [{"teacher": "蘇試", "subject": "數學探究", "rooms": ["5F 自主學習教室(二)"]}]
      },
      "星期四": {
        "8": [{"teacher": "蔡佳玲", "subject": "物理(輔)", "rooms": ["5F 自主學習教室(二)"]}],
        "2": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "9": [{"teacher": "劉玉華", "subject": "國文寫作", "rooms": []}, {"teacher": "名敦", "subject": "國文寫作", "rooms": []}],
        "6": [{"teacher": "楊志元", "subject": "選修化學-物質構造與反應速率", "rooms": ["5F 自主學習教室(二)"]}],
        "7": [{"teacher": "楊志元", "subject": "選修化學-物質構造與反應速率", "rooms": ["5F 自主學習教室(二)"]}],
        "5": [{"teacher": "楊政忠", "subject": "全民國防教育", "rooms": []}],
        "1": [{"teacher": "翟洛嫻", "subject": "音樂", "rooms": ["4F 音樂教室"]}],
        "3": [{"teacher": "蘇試", "subject": "數學A", "rooms": ["5F 自主學習教室(二)"]}],
        "4": [{"teacher": "蘇試", "subject": "數學A", "rooms": ["5F 自主學習教室(二)"]}]
      }
    },
    "高二文組": {
      "星期一": {
        "5": [{"teacher": "倪世斌", "subject": "生活科技", "rooms": ["6F 電腦教室"]}],
        "9": [{"teacher": "陳瑋筠", "subject": "社會探究(歷史)", "rooms": []}],
        "4": [{"teacher": "王世宗", "subject": "自然科學探究", "rooms": []}],
        "1": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "6": [{"teacher": "劉玉華", "subject": "學習", "rooms": []}],
        "8": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "2": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "3": [{"teacher": "Chad", "subject": "英文專題簡報實作", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "英文專題簡報實作", "rooms": ["4F 美術教室"]}],
        "7": [{"teacher": "Chad", "subject": "美術-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "美術-ESL", "rooms": ["4F 美術教室"]}]
      },
      "星期二": {
        "7": [{"teacher": "倪世斌", "subject": "生活科技", "rooms": ["6F 電腦教室"]}],
        "4": [{"teacher": "莊旭惠", "subject": "增廣補強", "rooms": []}, {"teacher": "劉玉華", "subject": "增廣補強", "rooms": []}, {"teacher": "王志遠", "subject": "增廣補強", "rooms": []}],
        "8": [{"teacher": "莊旭惠", "subject": "英語文(輔)", "rooms": ["5F 視聽教室"]}, {"teacher": "鄒湘平", "subject": "英語文(輔)", "rooms": []}],
        "9": [{"teacher": "莊旭惠", "subject": "英文素養", "rooms": ["5F 視聽教室"]}, {"teacher": "鄒湘平", "subject": "英文素養", "rooms": []}],
        "3": [{"teacher": "陳瑋筠", "subject": "探究與實作：歷史學探究", "rooms": []}],
        "5": [{"teacher": "劉玉華", "subject": "文案設計", "rooms": []}],
        "6": [{"teacher": "劉玉華", "subject": "文案設計", "rooms": []}],
        "1": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "2": [{"teacher": "劉綺芍", "subject": "生涯規劃", "rooms": []}]
      },
      "星期三": {
        "2": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "3": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "1": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "7": [{"teacher": "何文達", "subject": "地理與人文社會科學研究", "rooms": []}],
        "8": [{"teacher": "何文達", "subject": "地理(輔)", "rooms": []}],
        "9": [{"teacher": "王妤文", "subject": "ESL(素養)", "rooms": []}, {"teacher": "Gina", "subject": "ESL(素養)", "rooms": ["4F 美術教室"]}],
        "4": [{"teacher": "Chad", "subject": "英文專題簡報實作", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "英文專題簡報實作", "rooms": ["4F 美術教室"]}],
        "5": [{"teacher": "王志遠", "subject": "數學B", "rooms": []}],
        "6": [{"teacher": "王志遠", "subject": "數學B", "rooms": []}]
      },
      "星期五": {
        "3": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "4": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "2": [{"teacher": "王世宗", "subject": "自然科學探究", "rooms": []}],
        "1": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "5": [{"teacher": "劉玉華", "subject": "班會", "rooms": []}],
        "6": [{"teacher": "劉玉華", "subject": "團體活動", "rooms": []}],
        "7": [{"teacher": "劉玉華", "subject": "團體活動", "rooms": []}],
        "8": [{"teacher": "王志遠", "subject": "數學(輔)", "rooms": []}],
        "9": [{"teacher": "王志遠", "subject": "數學探究", "rooms": []}]
      },
      "星期四": {
        "7": [{"teacher": "陳瑋筠", "subject": "探究與實作：歷史學探究", "rooms": []}],
        "8": [{"teacher": "陳瑋筠", "subject": "歷史(輔)", "rooms": []}],
        "2": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "9": [{"teacher": "劉玉華", "subject": "國文寫作", "rooms": []}, {"teacher": "名敦", "subject": "國文寫作", "rooms": []}],
        "6": [{"teacher": "何文達", "subject": "地理與人文社會科學研究", "rooms": []}],
        "5": [{"teacher": "楊政忠", "subject": "全民國防教育", "rooms": []}],
        "1": [{"teacher": "翟洛嫻", "subject": "音樂", "rooms": ["4F 音樂教室"]}],
        "3": [{"teacher": "王志遠", "subject": "數學B", "rooms": []}],
        "4": [{"teacher": "王志遠", "subject": "數學B", "rooms": []}]
      }
    },
    "國九A": {
      "星期一": {
        "7": [{"teacher": "倪世斌", "subject": "資訊科技", "rooms": ["6F 電腦教室"]}],
        "5": [{"teacher": "曾美芝", "subject": "數學", "rooms": []}, {"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": ["4F 分組教室(一)"]}],
        "6": [{"teacher": "曾美芝", "subject": "數學", "rooms": []}, {"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": ["4F 分組教室(一)"]}],
        "2": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "王妤文", "subject": "英語文", "rooms": []}],
        "3": [{"teacher": "蔡佳玲", "subject": "理化", "rooms": []}],
        "4": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "9": [{"teacher": "劉玉華", "subject": "國文寫作", "rooms": []}],
        "1": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "8": [{"teacher": "蔡玉良", "subject": "地球科學(輔)", "rooms": []}]
      },
      "星期三": {
        "7": [{"teacher": "倪世斌", "subject": "生活科技", "rooms": ["6F 電腦教室"]}],
        "4": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "王妤文", "subject": "英語文", "rooms": []}],
        "9": [{"teacher": "王世宗", "subject": "自然探究", "rooms": []}],
        "8": [{"teacher": "蔡佳玲", "subject": "理化(輔)", "rooms": []}],
        "2": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "1": [{"teacher": "吳雯菁", "subject": "童軍", "rooms": []}],
        "6": [{"teacher": "簡珮瑜", "subject": "輔導活動", "rooms": []}],
        "5": [{"teacher": "王妤文", "subject": "表演藝術-ESL", "rooms": []}, {"teacher": "Roja", "subject": "表演藝術-ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "表演藝術-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "表演藝術-ESL", "rooms": ["4F 美術教室"]}],
        "3": [{"teacher": "翟洛嫻", "subject": "音樂", "rooms": ["4F 音樂教室"]}]
      },
      "星期二": {
        "6": [{"teacher": "曾美芝", "subject": "數學", "rooms": []}, {"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": ["4F 分組教室(一)"]}],
        "7": [{"teacher": "曾美芝", "subject": "數學", "rooms": []}, {"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": ["4F 分組教室(一)"]}],
        "1": [{"teacher": "王世宗", "subject": "健康教育", "rooms": []}],
        "2": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "8": [{"teacher": "劉玉華", "subject": "國語文(輔)", "rooms": []}],
        "5": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "9": [{"teacher": "何文達", "subject": "社會探究", "rooms": []}],
        "3": [{"teacher": "Roja", "subject": "彈性學習-閱讀與寫作", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "彈性學習-閱讀與寫作", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "彈性學習-閱讀與寫作", "rooms": ["4F 美術教室"]}],
        "4": [{"teacher": "蔡玉良", "subject": "地球科學", "rooms": []}]
      },
      "星期四": {
        "8": [{"teacher": "曾美芝", "subject": "數學(輔)", "rooms": []}, {"teacher": "桂松山", "subject": "數學(輔)", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學(輔)", "rooms": ["4F 分組教室(一)"]}],
        "9": [{"teacher": "曾美芝", "subject": "數學探究", "rooms": []}, {"teacher": "桂松山", "subject": "數學探究", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學探究", "rooms": ["4F 分組教室(一)"]}],
        "6": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "王妤文", "subject": "英語文", "rooms": []}],
        "5": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "1": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "3": [{"teacher": "吳雯菁", "subject": "公民與社會", "rooms": []}],
        "7": [{"teacher": "簡珮瑜", "subject": "彈性學習-生命教育", "rooms": []}],
        "2": [{"teacher": "何文達", "subject": "地理", "rooms": []}],
        "4": [{"teacher": "王妤文", "subject": "視覺藝術-ESL", "rooms": []}, {"teacher": "Roja", "subject": "視覺藝術-ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "視覺藝術-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "視覺藝術-ESL", "rooms": ["4F 美術教室"]}]
      },
      "星期五": {
        "5": [{"teacher": "莊旭惠", "subject": "班會", "rooms": []}],
        "6": [{"teacher": "莊旭惠", "subject": "週會/社團", "rooms": []}],
        "7": [{"teacher": "莊旭惠", "subject": "週會/社團", "rooms": []}],
        "8": [{"teacher": "莊旭惠", "subject": "英語文(輔)", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文(輔)", "rooms": []}, {"teacher": "王妤文", "subject": "英語文(輔)", "rooms": []}],
        "9": [{"teacher": "莊旭惠", "subject": "英文素養", "rooms": []}],
        "3": [{"teacher": "蔡佳玲", "subject": "理化", "rooms": []}],
        "2": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "4": [{"teacher": "Roja", "subject": "彈性學習-生活玩家ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "彈性學習-生活玩家ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "彈性學習-生活玩家ESL", "rooms": ["4F 美術教室"]}],
        "1": [{"teacher": "王淑華", "subject": "家政", "rooms": []}]
      }
    },
    "國八A": {
      "星期二": {
        "2": [{"teacher": "倪世斌", "subject": "生活科技", "rooms": ["6F 電腦教室"]}],
        "5": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "6": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "3": [{"teacher": "蔡佳玲", "subject": "理化", "rooms": []}],
        "1": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "8": [{"teacher": "吳雯菁", "subject": "公民與社會(輔)", "rooms": []}],
        "4": [{"teacher": "何文達", "subject": "地理", "rooms": []}],
        "7": [{"teacher": "王妤文", "subject": "健康教育-ESL", "rooms": []}, {"teacher": "Roja", "subject": "健康教育-ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "健康教育-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "健康教育-ESL", "rooms": ["4F 美術教室"]}],
        "9": [{"teacher": "吳宇綸", "subject": "數學探究", "rooms": []}]
      },
      "星期四": {
        "2": [{"teacher": "倪世斌", "subject": "資訊科技", "rooms": ["6F 電腦教室"]}],
        "8": [{"teacher": "莊旭惠", "subject": "英文(輔)", "rooms": []}],
        "9": [{"teacher": "陳瑋筠", "subject": "社會探究", "rooms": []}],
        "7": [{"teacher": "蔡佳玲", "subject": "理化", "rooms": []}],
        "4": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "1": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "5": [{"teacher": "陳昱澐", "subject": "數學", "rooms": []}, {"teacher": "蘇試", "subject": "數學", "rooms": ["4F 分組教室(一)"]}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}],
        "6": [{"teacher": "陳昱澐", "subject": "數學", "rooms": []}, {"teacher": "蘇試", "subject": "數學", "rooms": ["4F 分組教室(一)"]}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}],
        "3": [{"teacher": "Roja", "subject": "彈性學習-英語探索樂園ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "彈性學習-英語探索樂園ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "彈性學習-英語探索樂園ESL", "rooms": ["4F 美術教室"]}]
      },
      "星期五": {
        "2": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "4": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "5": [{"teacher": "王世宗", "subject": "班會", "rooms": []}],
        "6": [{"teacher": "王世宗", "subject": "週會/社團", "rooms": []}],
        "7": [{"teacher": "王世宗", "subject": "週會/社團", "rooms": []}],
        "8": [{"teacher": "Roja", "subject": "ESL(輔)", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "ESL(輔)", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "ESL(輔)", "rooms": ["4F 美術教室"]}],
        "9": [{"teacher": "Roja", "subject": "英文素養-ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "英文素養-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "英文素養-ESL", "rooms": ["4F 美術教室"]}],
        "3": [{"teacher": "王淑華", "subject": "家政", "rooms": []}],
        "1": [{"teacher": "曾淑汝", "subject": "本土語言", "rooms": []}, {"teacher": "林秀歌", "subject": "本土語言", "rooms": ["5F 語言教室 (iPad Room)"]}, {"teacher": "古靜宜", "subject": "本土語言", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}]
      },
      "星期三": {
        "1": [{"teacher": "蔡佳玲", "subject": "理化", "rooms": []}],
        "5": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "8": [{"teacher": "劉玉華", "subject": "國語文(輔)", "rooms": []}],
        "9": [{"teacher": "劉玉華", "subject": "語文閱讀策略", "rooms": []}],
        "6": [{"teacher": "吳雯菁", "subject": "童軍", "rooms": []}],
        "7": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "3": [{"teacher": "陳昱澐", "subject": "數學", "rooms": []}, {"teacher": "蘇試", "subject": "數學", "rooms": ["4F 分組教室(一)"]}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}],
        "4": [{"teacher": "陳昱澐", "subject": "數學", "rooms": []}, {"teacher": "蘇試", "subject": "數學", "rooms": ["4F 分組教室(一)"]}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}],
        "2": [{"teacher": "翟洛嫻", "subject": "音樂", "rooms": ["4F 音樂教室"]}]
      },
      "星期一": {
        "3": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "7": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "1": [{"teacher": "吳雯菁", "subject": "公民與社會", "rooms": []}],
        "5": [{"teacher": "吳雯菁", "subject": "彈性學習-生命教育", "rooms": []}],
        "2": [{"teacher": "簡珮瑜", "subject": "輔導活動", "rooms": []}],
        "8": [{"teacher": "陳昱澐", "subject": "數學(輔)", "rooms": []}, {"teacher": "蘇試", "subject": "數學(輔)", "rooms": ["4F 分組教室(一)"]}, {"teacher": "吳宇綸", "subject": "數學(輔)", "rooms": []}],
        "9": [{"teacher": "陳昱澐", "subject": "數學探究", "rooms": []}, {"teacher": "蘇試", "subject": "數學探究", "rooms": ["4F 分組教室(一)"]}, {"teacher": "吳宇綸", "subject": "數學探究", "rooms": []}],
        "4": [{"teacher": "Roja", "subject": "視覺藝術-ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "視覺藝術-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "視覺藝術-ESL", "rooms": ["4F 美術教室"]}],
        "6": [{"teacher": "Roja", "subject": "表演藝術-ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "表演藝術-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "表演藝術-ESL", "rooms": ["4F 美術教室"]}]
      }
    },
    "國七A": {
      "星期一": {
        "1": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": []}, {"teacher": "邱千芸", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文", "rooms": []}],
        "3": [{"teacher": "王世宗", "subject": "健康教育", "rooms": []}],
        "8": [{"teacher": "王世宗", "subject": "生物(輔)", "rooms": []}],
        "2": [{"teacher": "蔡佳玲", "subject": "數學", "rooms": []}, {"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "陳昱澐", "subject": "數學", "rooms": ["4F 分組教室(一)"]}],
        "4": [{"teacher": "吳雯菁", "subject": "童軍", "rooms": []}],
        "7": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "5": [{"teacher": "陳昱澐", "subject": "生活科技", "rooms": ["6F 生活科技教室"]}],
        "6": [{"teacher": "陳昱澐", "subject": "資訊科技", "rooms": ["6F 生活科技教室"]}],
        "9": [{"teacher": "王妤文", "subject": "英文素養", "rooms": []}, {"teacher": "Roja", "subject": "英文素養", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "英文素養", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "英文素養", "rooms": ["4F 美術教室"]}]
      },
      "星期三": {
        "7": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": []}, {"teacher": "邱千芸", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文", "rooms": []}],
        "8": [{"teacher": "莊旭惠", "subject": "英語文(輔)", "rooms": []}],
        "1": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "2": [{"teacher": "蔡佳玲", "subject": "數學", "rooms": []}, {"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "陳昱澐", "subject": "數學", "rooms": ["4F 分組教室(一)"]}],
        "6": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "9": [{"teacher": "呂宜霖", "subject": "國文寫作", "rooms": []}],
        "5": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "4": [{"teacher": "何文達", "subject": "地理", "rooms": []}],
        "3": [{"teacher": "王妤文", "subject": "表演藝術-ESL", "rooms": []}, {"teacher": "Roja", "subject": "表演藝術-ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "表演藝術-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "表演藝術-ESL", "rooms": ["4F 美術教室"]}]
      },
      "星期四": {
        "2": [{"teacher": "莊旭惠", "subject": "英語文", "rooms": []}, {"teacher": "邱千芸", "subject": "英語文", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英語文", "rooms": []}],
        "9": [{"teacher": "莊旭惠", "subject": "英文素養", "rooms": []}, {"teacher": "邱千芸", "subject": "英文素養", "rooms": ["5F 視聽教室"]}, {"teacher": "羅雅苓", "subject": "英文素養", "rooms": []}],
        "3": [{"teacher": "蔡佳玲", "subject": "數學", "rooms": []}, {"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "陳昱澐", "subject": "數學", "rooms": ["4F 分組教室(一)"]}],
        "6": [{"teacher": "孔令堅", "subject": "生命教育", "rooms": []}],
        "1": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "4": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "7": [{"teacher": "王妤文", "subject": "家政-ESL", "rooms": []}, {"teacher": "Roja", "subject": "家政-ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "家政-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "家政-ESL", "rooms": ["4F 美術教室"]}],
        "8": [{"teacher": "王妤文", "subject": "ESL(輔)", "rooms": []}, {"teacher": "Roja", "subject": "ESL(輔)", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "ESL(輔)", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "ESL(輔)", "rooms": ["4F 美術教室"]}],
        "5": [{"teacher": "翟洛嫻", "subject": "音樂", "rooms": ["4F 音樂教室"]}]
      },
      "星期二": {
        "1": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "3": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "2": [{"teacher": "蔡佳玲", "subject": "數學", "rooms": []}, {"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "陳昱澐", "subject": "數學", "rooms": ["4F 分組教室(一)"]}],
        "9": [{"teacher": "吳雯菁", "subject": "公民與社會(輔)", "rooms": []}],
        "4": [{"teacher": "簡珮瑜", "subject": "輔導活動", "rooms": []}],
        "7": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "8": [{"teacher": "呂宜霖", "subject": "國語文(輔)", "rooms": []}],
        "5": [{"teacher": "王妤文", "subject": "彈性學習-閱讀心力量ESL", "rooms": []}, {"teacher": "Roja", "subject": "彈性學習-閱讀心力量ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "彈性學習-閱讀心力量ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "彈性學習-閱讀心力量ESL", "rooms": ["4F 美術教室"]}],
        "6": [{"teacher": "王妤文", "subject": "視覺藝術-ESL", "rooms": []}, {"teacher": "Roja", "subject": "視覺藝術-ESL", "rooms": ["4F 分組教室(二)"]}, {"teacher": "Chad", "subject": "視覺藝術-ESL", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}, {"teacher": "Gina", "subject": "視覺藝術-ESL", "rooms": ["4F 美術教室"]}]
      },
      "星期五": {
        "3": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "5": [{"teacher": "蔡佳玲", "subject": "班會", "rooms": []}],
        "6": [{"teacher": "蔡佳玲", "subject": "週會/社團", "rooms": []}],
        "7": [{"teacher": "蔡佳玲", "subject": "週會/社團", "rooms": []}],
        "8": [{"teacher": "蔡佳玲", "subject": "數學(輔)", "rooms": []}, {"teacher": "桂松山", "subject": "數學(輔)", "rooms": []}, {"teacher": "陳昱澐", "subject": "數學(輔)", "rooms": ["4F 分組教室(一)"]}],
        "9": [{"teacher": "蔡佳玲", "subject": "數學探究", "rooms": []}],
        "4": [{"teacher": "吳雯菁", "subject": "公民與社會", "rooms": []}],
        "1": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "2": [{"teacher": "曾淑汝", "subject": "本土語言", "rooms": []}, {"teacher": "古靜宜", "subject": "本土語言", "rooms": ["3F 多功能 e 化教室 (VR Room)"]}]
      }
    }
  },
  "periods": [
    {"period": 1, "start": "08:10", "end": "09:00"},
    {"period": 2, "start": "09:10", "end": "10:00"},
    {"period": 3, "start": "10:10", "end": "11:00"},
    {"period": 4, "start": "11:05", "end": "11:55"},
    {"period": 5, "start": "12:55", "end": "13:45"},
    {"period": 6, "start": "13:55", "end": "14:45"},
    {"period": 7, "start": "14:50", "end": "15:40"},
    {"period": 8, "start": "15:50", "end": "16:40"},
    {"period": 9, "start": "16:45", "end": "17:30"}
  ],
  "issues": [],
  "meta": {
    "generatedFrom": ["教師課表0203.pdf", "班級課表0203.pdf", "114-1 排課總表0906.xlsx", "114-2 分組教室課表.pdf"],
    "note": "已整合教師課表、班級課表與分組教室課表；一般班級教室仍以班級教室為主，教室/分組教室已盡量標示到系統中。",
    "manualOverrides": ["依使用者確認，已清除高三理組週三衝突警示；並整合分組教室實體教室資料。", "已補齊高二理組國語文與高三家政課"],
    "finalVersion": "v5-final",
    "generatedAt": "2026-03-09 08:45:00"
  },
  "rooms": [
    "3F 多功能 e 化教室 (VR Room)", "4F 分組教室(一)", "4F 分組教室(二)", "4F 美術教室", "4F 音樂教室", "5F 自主學習教室(一)", "5F 自主學習教室(二)", "5F 視聽教室", "5F 語言教室 (iPad Room)", "6F 生活科技教室", "6F 電腦教室"
  ],
  "roomSchedule": {
    "5F 自主學習教室(一)": {
      "星期四": {
        "1": [{"teacher": "王世宗", "rawClass": "高三理組", "subject": "選修生物"}],
        "2": [{"teacher": "楊志元", "rawClass": "高三理組", "subject": "選修化學"}],
        "3": [{"teacher": "李牧", "rawClass": "高三理組", "subject": "數學"}],
        "4": [{"teacher": "李牧", "rawClass": "高三理組", "subject": "數學"}],
        "5": [{"teacher": "李牧", "rawClass": "高一", "subject": "數學 A 組"}],
        "6": [{"teacher": "李牧", "rawClass": "高一", "subject": "數學 A 組"}]
      },
      "星期五": {
        "1": [{"teacher": "楊志元", "rawClass": "高三理組", "subject": "選修化學"}],
        "2": [{"teacher": "楊志元", "rawClass": "高三理組", "subject": "選修化學"}],
        "8": [{"teacher": "王世宗", "rawClass": "高三理組", "subject": "生物(輔)"}],
        "9": [{"teacher": "王世宗", "rawClass": "高三理組", "subject": "自然探究"}]
      },
      "星期一": {
        "2": [{"teacher": "王世宗", "rawClass": "高三理組", "subject": "選修生物"}],
        "3": [{"teacher": "吳宇綸", "rawClass": "高三理組", "subject": "生活藝數"}],
        "4": [{"teacher": "吳宇綸", "rawClass": "高三理組", "subject": "生活藝數"}],
        "5": [{"teacher": "蔡玉良", "rawClass": "高三理組", "subject": "選修物理"}],
        "6": [{"teacher": "蔡玉良", "rawClass": "高三理組", "subject": "選修物理"}]
      },
      "星期三": {
        "3": [{"teacher": "李牧", "rawClass": "高一", "subject": "數學 A 組"}],
        "4": [{"teacher": "李牧", "rawClass": "高一", "subject": "數學 A 組"}],
        "5": [{"teacher": "李牧", "rawClass": "高三理組", "subject": "數學"}],
        "6": [{"teacher": "李牧", "rawClass": "高三理組", "subject": "數學"}],
        "9": [{"teacher": "陳昱澐", "rawClass": "高三理組", "subject": "自然探究"}]
      },
      "星期二": {
        "5": [{"teacher": "蔡玉良", "rawClass": "高三理組", "subject": "選修物理"}],
        "6": [{"teacher": "蔡玉良", "rawClass": "高三理組", "subject": "選修物理"}],
        "8": [{"teacher": "蘇試", "rawClass": "高三理組", "subject": "數學(輔)"}],
        "9": [{"teacher": "蘇試", "rawClass": "高三理組", "subject": "數學探究"}]
      }
    },
    "5F 視聽教室": {
      "星期一": {
        "1": [{"teacher": "邱千芸", "rawClass": "國七", "subject": "英文 A3 組"}],
        "2": [{"teacher": "莊旭惠", "rawClass": "國九", "subject": "英文 A1 組"}]
      },
      "星期三": {
        "1": [{"teacher": "鄒湘平", "rawClass": "高一", "subject": "英文 A1 組"}],
        "2": [{"teacher": "莊旭惠", "rawClass": "高二", "subject": "英文 A2"}],
        "3": [{"teacher": "莊旭惠", "rawClass": "高二", "subject": "英文 A2"}],
        "4": [{"teacher": "莊旭惠", "rawClass": "國九", "subject": "英文 A1 組"}],
        "7": [{"teacher": "邱千芸", "rawClass": "國七", "subject": "英文 A3 組"}]
      },
      "星期五": {
        "1": [{"teacher": "鄒湘平", "rawClass": "高一", "subject": "英文 A1 組"}],
        "2": [{"teacher": "莊旭惠", "rawClass": "國八", "subject": "英文 A2 組"}],
        "3": [{"teacher": "莊旭惠", "rawClass": "高二", "subject": "英文 A2"}],
        "4": [{"teacher": "莊旭惠", "rawClass": "高二", "subject": "英文 A2"}],
        "8": [{"teacher": "莊旭惠", "rawClass": "國九", "subject": "英文 A1 組"}],
        "9": [{"teacher": "鄒湘平", "rawClass": "高一", "subject": "英文 A1 組"}]
      },
      "星期二": {
        "2": [{"teacher": "鄒湘平", "rawClass": "高一", "subject": "英文 A1 組"}],
        "3": [{"teacher": "鄒湘平", "rawClass": "高一", "subject": "英文 A1 組"}],
        "5": [{"teacher": "莊旭惠", "rawClass": "國八", "subject": "英文 A2 組"}],
        "6": [{"teacher": "莊旭惠", "rawClass": "國八", "subject": "英文 A2 組"}],
        "8": [{"teacher": "莊旭惠", "rawClass": "高二", "subject": "英文 A2"}],
        "9": [{"teacher": "莊旭惠", "rawClass": "高二", "subject": "英文 A2"}]
      },
      "星期四": {
        "2": [{"teacher": "邱千芸", "rawClass": "國七", "subject": "英文 A3 組"}],
        "6": [{"teacher": "莊旭惠", "rawClass": "國九", "subject": "英文 A1 組"}],
        "9": [{"teacher": "邱千芸", "rawClass": "國七", "subject": "英文 A3 組"}]
      }
    },
    "5F 自主學習教室(二)": {
      "星期五": {
        "2": [{"teacher": "王世宗", "rawClass": "高二理組", "subject": "自然科學探究"}],
        "8": [{"teacher": "蘇試", "rawClass": "高二理組", "subject": "數學(輔)"}],
        "9": [{"teacher": "蘇試", "rawClass": "高二理組", "subject": "數學探究"}]
      },
      "星期二": {
        "3": [{"teacher": "蔡玉良", "rawClass": "高二理組", "subject": "選修物理"}],
        "5": [{"teacher": "王志遠", "rawClass": "高二理組", "subject": "數位化數學"}],
        "6": [{"teacher": "王志遠", "rawClass": "高二理組", "subject": "數位化數學"}]
      },
      "星期四": {
        "3": [{"teacher": "蘇試", "rawClass": "高二理組", "subject": "數學 A"}],
        "4": [{"teacher": "蘇試", "rawClass": "高二理組", "subject": "數學 A"}],
        "6": [{"teacher": "楊志元", "rawClass": "高二理組", "subject": "選修化學"}],
        "7": [{"teacher": "楊志元", "rawClass": "高二理組", "subject": "選修化學"}],
        "8": [{"teacher": "蔡佳玲", "rawClass": "高二理組", "subject": "物理(輔)"}]
      },
      "星期一": {
        "4": [{"teacher": "王世宗", "rawClass": "高二理組", "subject": "自然科學探究"}],
        "9": [{"teacher": "蔡佳玲", "rawClass": "高二理組", "subject": "自然探究"}]
      },
      "星期三": {
        "5": [{"teacher": "蘇試", "rawClass": "高二理組", "subject": "數學 A"}],
        "6": [{"teacher": "蘇試", "rawClass": "高二理組", "subject": "數學 A"}],
        "7": [{"teacher": "蔡玉良", "rawClass": "高二理組", "subject": "選修物理"}],
        "8": [{"teacher": "王世宗", "rawClass": "高二理組", "subject": "生物(輔)"}]
      }
    },
    "4F 分組教室(一)": {
      "星期一": {
        "2": [{"teacher": "陳昱澐", "rawClass": "國七", "subject": "數學 A+組"}],
        "5": [{"teacher": "吳宇綸", "rawClass": "國九", "subject": "數學 A+組"}],
        "6": [{"teacher": "吳宇綸", "rawClass": "國九", "subject": "數學 A+組"}],
        "8": [{"teacher": "蘇試", "rawClass": "國八", "subject": "數學 A+組"}],
        "9": [{"teacher": "蘇試", "rawClass": "國八", "subject": "數學 A+組"}]
      },
      "星期二": {
        "2": [{"teacher": "陳昱澐", "rawClass": "國七", "subject": "數學 A+組"}],
        "6": [{"teacher": "吳宇綸", "rawClass": "國九", "subject": "數學 A+組"}],
        "7": [{"teacher": "吳宇綸", "rawClass": "國九", "subject": "數學 A+組"}]
      },
      "星期三": {
        "2": [{"teacher": "陳昱澐", "rawClass": "國七", "subject": "數學 A+組"}],
        "3": [{"teacher": "蘇試", "rawClass": "國八", "subject": "數學 A+組"}],
        "4": [{"teacher": "蘇試", "rawClass": "國八", "subject": "數學 A+組"}],
        "5": [{"teacher": "陳昱澐", "rawClass": "國七", "subject": "數學 A+組"}]
      },
      "星期四": {
        "3": [{"teacher": "陳昱澐", "rawClass": "國七", "subject": "數學 A+組"}],
        "5": [{"teacher": "蘇試", "rawClass": "國八", "subject": "數學 A+組"}],
        "6": [{"teacher": "蘇試", "rawClass": "國八", "subject": "數學 A+組"}],
        "8": [{"teacher": "吳宇綸", "rawClass": "國九", "subject": "數學 A+組"}],
        "9": [{"teacher": "吳宇綸", "rawClass": "國九", "subject": "數學 A+組"}]
      },
      "星期五": {
        "8": [{"teacher": "陳昱澐", "rawClass": "國七", "subject": "數學 A+組"}]
      }
    },
    "4F 分組教室(二)": {
      "星期二": {
        "3": [{"teacher": "Roja", "rawClass": "J3AB A+", "subject": "ESL"}],
        "4": [{"teacher": "Roja", "rawClass": "S3AB A", "subject": "ESL"}],
        "5": [{"teacher": "Roja", "rawClass": "J1AB A2", "subject": "ESL"}],
        "6": [{"teacher": "Roja", "rawClass": "J1AB A2", "subject": "ESL"}],
        "7": [{"teacher": "Roja", "rawClass": "J2AB A", "subject": "ESL"}],
        "9": [{"teacher": "Roja", "rawClass": "S1 A", "subject": "ESL"}]
      },
      "星期三": {
        "3": [{"teacher": "Roja", "rawClass": "J1AB A2", "subject": "ESL"}],
        "5": [{"teacher": "Roja", "rawClass": "J3AB A+", "subject": "ESL"}],
        "7": [{"teacher": "Roja", "rawClass": "S1 A", "subject": "ESL"}],
        "8": [{"teacher": "Roja", "rawClass": "S1 A", "subject": "ESL"}]
      },
      "星期四": {
        "3": [{"teacher": "Roja", "rawClass": "J2AB A", "subject": "ESL"}],
        "4": [{"teacher": "Roja", "rawClass": "J3AB A+", "subject": "ESL"}],
        "7": [{"teacher": "Roja", "rawClass": "J1AB A2", "subject": "ESL"}],
        "8": [{"teacher": "Roja", "rawClass": "J1AB A2", "subject": "ESL"}],
        "9": [{"teacher": "Roja", "rawClass": "S3AB A", "subject": "ESL"}]
      },
      "星期一": {
        "4": [{"teacher": "Roja", "rawClass": "J2AB A", "subject": "ESL"}],
        "5": [{"teacher": "Roja", "rawClass": "S1 A", "subject": "ESL"}],
        "6": [{"teacher": "Roja", "rawClass": "J2AB A", "subject": "ESL"}],
        "9": [{"teacher": "Roja", "rawClass": "J1AB A2", "subject": "ESL"}]
      },
      "星期五": {
        "4": [{"teacher": "Roja", "rawClass": "J3AB A+", "subject": "ESL"}],
        "8": [{"teacher": "Roja", "rawClass": "J2AB A", "subject": "ESL"}],
        "9": [{"teacher": "Roja", "rawClass": "J2AB A", "subject": "ESL"}]
      }
    },
    "4F 美術教室": {
      "星期一": {
        "3": [{"teacher": "Gina", "rawClass": "S2B", "subject": "ESL"}],
        "4": [{"teacher": "Gina", "rawClass": "J2AB B", "subject": "ESL"}],
        "6": [{"teacher": "Gina", "rawClass": "J2AB B", "subject": "ESL"}],
        "7": [{"teacher": "Gina", "rawClass": "S2B", "subject": "ESL"}],
        "9": [{"teacher": "Gina", "rawClass": "J1AB A+", "subject": "ESL"}]
      },
      "星期二": {
        "3": [{"teacher": "Gina", "rawClass": "J3AB A", "subject": "ESL"}],
        "4": [{"teacher": "Gina", "rawClass": "S3AB B", "subject": "ESL"}],
        "5": [{"teacher": "Gina", "rawClass": "J1AB A+", "subject": "ESL"}],
        "6": [{"teacher": "Gina", "rawClass": "J1AB A+", "subject": "ESL"}],
        "7": [{"teacher": "Gina", "rawClass": "J2AB B", "subject": "ESL"}]
      },
      "星期三": {
        "3": [{"teacher": "Gina", "rawClass": "J1AB A+", "subject": "ESL"}],
        "4": [{"teacher": "Gina", "rawClass": "S2B", "subject": "ESL"}],
        "5": [{"teacher": "Gina", "rawClass": "J3AB A", "subject": "ESL"}],
        "9": [{"teacher": "Gina", "rawClass": "S2B", "subject": "ESL"}]
      },
      "星期四": {
        "3": [{"teacher": "Gina", "rawClass": "J2AB B", "subject": "ESL"}],
        "4": [{"teacher": "Gina", "rawClass": "J3AB A", "subject": "ESL"}],
        "7": [{"teacher": "Gina", "rawClass": "J1AB A+", "subject": "ESL"}],
        "8": [{"teacher": "Gina", "rawClass": "J1AB A+", "subject": "ESL"}],
        "9": [{"teacher": "Gina", "rawClass": "S3AB B", "subject": "ESL"}]
      },
      "星期五": {
        "4": [{"teacher": "Gina", "rawClass": "J3AB A", "subject": "ESL"}],
        "8": [{"teacher": "Gina", "rawClass": "J2AB B", "subject": "ESL"}],
        "9": [{"teacher": "Gina", "rawClass": "J2AB B", "subject": "ESL"}]
      }
    },
    "3F 多功能 e 化教室 (VR Room)": {
      "星期五": {
        "1": [{"teacher": "古靜宜", "rawClass": "國八AB", "subject": "本土語-手語"}],
        "2": [{"teacher": "古靜宜", "rawClass": "國七AB", "subject": "本土語-手語"}],
        "4": [{"teacher": "Chad", "rawClass": "J3AB B", "subject": "ESL"}],
        "8": [{"teacher": "Chad", "rawClass": "J2AB A+", "subject": "ESL"}],
        "9": [{"teacher": "Chad", "rawClass": "J2AB A+", "subject": "ESL"}]
      },
      "星期一": {
        "3": [{"teacher": "Chad", "rawClass": "S2A", "subject": "ESL"}],
        "4": [{"teacher": "Chad", "rawClass": "J2AB A+", "subject": "ESL"}],
        "5": [{"teacher": "Chad", "rawClass": "S1 A+", "subject": "ESL"}],
        "6": [{"teacher": "Chad", "rawClass": "J2AB A+", "subject": "ESL"}],
        "7": [{"teacher": "Chad", "rawClass": "S2A", "subject": "ESL"}],
        "9": [{"teacher": "Chad", "rawClass": "J1AB A1", "subject": "ESL"}]
      },
      "星期二": {
        "3": [{"teacher": "Chad", "rawClass": "J3AB B", "subject": "ESL"}],
        "4": [{"teacher": "Chad", "rawClass": "S3AB A+", "subject": "ESL"}],
        "5": [{"teacher": "Chad", "rawClass": "J1AB A1", "subject": "ESL"}],
        "6": [{"teacher": "Chad", "rawClass": "J1AB A1", "subject": "ESL"}],
        "7": [{"teacher": "Chad", "rawClass": "J2AB A+", "subject": "ESL"}],
        "9": [{"teacher": "Chad", "rawClass": "S1 A+", "subject": "ESL"}]
      },
      "星期三": {
        "3": [{"teacher": "Chad", "rawClass": "J1AB A1", "subject": "ESL"}],
        "4": [{"teacher": "Chad", "rawClass": "S2A", "subject": "ESL"}],
        "5": [{"teacher": "Chad", "rawClass": "J3AB B", "subject": "ESL"}],
        "7": [{"teacher": "Chad", "rawClass": "S1 A+", "subject": "ESL"}],
        "8": [{"teacher": "Chad", "rawClass": "S1 A+", "subject": "ESL"}]
      },
      "星期四": {
        "3": [{"teacher": "Chad", "rawClass": "J2AB A+", "subject": "ESL"}],
        "4": [{"teacher": "Chad", "rawClass": "J3AB B", "subject": "ESL"}],
        "7": [{"teacher": "Chad", "rawClass": "J1AB A1", "subject": "ESL"}],
        "8": [{"teacher": "Chad", "rawClass": "J1AB A1", "subject": "ESL"}],
        "9": [{"teacher": "Chad", "rawClass": "S3AB A+", "subject": "ESL"}]
      }
    },
    "5F 語言教室 (iPad Room)": {
      "星期五": {
        "1": [{"teacher": "林秀歌", "rawClass": "國八AB", "subject": "本土語-秀姑巒阿美"}]
      },
      "星期二": {
        "5": [{"teacher": "蔡佳玲", "rawClass": "高一", "subject": "多元選修半導體"}],
        "6": [{"teacher": "蔡佳玲", "rawClass": "高一", "subject": "多元選修半導體"}]
      }
    },
    "4F 音樂教室": {
      "星期三": {
        "1": [{"teacher": "翟洛嫻", "rawClass": "高三", "subject": "(理文組)音樂"}],
        "2": [{"teacher": "翟洛嫻", "rawClass": "國八 A", "subject": "音樂"}],
        "3": [{"teacher": "翟洛嫻", "rawClass": "國九 A", "subject": "音樂"}],
        "8": [{"teacher": "翟洛嫻", "rawClass": "高三", "subject": "(理文組)音樂"}]
      },
      "星期四": {
        "1": [{"teacher": "翟洛嫻", "rawClass": "高二", "subject": "(理文組)音樂"}],
        "2": [{"teacher": "翟洛嫻", "rawClass": "國八 B", "subject": "音樂"}],
        "3": [{"teacher": "翟洛嫻", "rawClass": "國九 B", "subject": "音樂"}],
        "5": [{"teacher": "翟洛嫻", "rawClass": "國七 A", "subject": "音樂"}],
        "6": [{"teacher": "翟洛嫻", "rawClass": "國七 B", "subject": "音樂"}]
      }
    },
    "6F 電腦教室": {
      "星期一": {
        "2": [{"teacher": "倪世斌", "rawClass": "高一", "subject": "資訊科技"}],
        "5": [{"teacher": "倪世斌", "rawClass": "高二", "subject": "生活科技"}],
        "7": [{"teacher": "倪世斌", "rawClass": "國九 A", "subject": "資訊科技"}]
      },
      "星期二": {
        "2": [{"teacher": "倪世斌", "rawClass": "國八 A", "subject": "生活科技"}],
        "5": [{"teacher": "倪世斌", "rawClass": "國九 B", "subject": "生活科技"}],
        "7": [{"teacher": "倪世斌", "rawClass": "高二", "subject": "生活科技"}]
      },
      "星期四": {
        "2": [{"teacher": "倪世斌", "rawClass": "國八 A", "subject": "資訊科技"}],
        "4": [{"teacher": "倪世斌", "rawClass": "國八 B", "subject": "資訊科技"}]
      },
      "星期五": {
        "3": [{"teacher": "倪世斌", "rawClass": "國九 B", "subject": "資訊科技"}]
      },
      "星期三": {
        "6": [{"teacher": "倪世斌", "rawClass": "國八 B", "subject": "生活科技"}],
        "7": [{"teacher": "倪世斌", "rawClass": "國九 A", "subject": "生活科技"}]
      }
    },
    "6F 生活科技教室": {
      "星期一": {
        "5": [{"teacher": "陳昱澐", "rawClass": "國七 A", "subject": "生活科技"}],
        "6": [{"teacher": "陳昱澐", "rawClass": "國七 A", "subject": "資訊科技"}]
      },
      "星期三": {
        "5": [{"teacher": "陳昱澐", "rawClass": "國七 B", "subject": "生活科技"}],
        "6": [{"teacher": "陳昱澐", "rawClass": "國七 B", "subject": "資訊科技"}]
      }
    }
  }
};

// ==========================================
// 自動產生銜接週課表 (BRIDGING_DATA) - 雙週分離精準版 (含新高一週三/週四調課更新)
// ==========================================
// ===== 暑期輔導課程資料 (114學年度, 115.07.01~115.07.28) =====
const SUMMER_DATA = {
  "teachers": ["Chad", "Gina", "Roja", "之宇", "何文達", "劉玉華", "名敦", "吳宇綸", "吳雯菁", "呂宜霖", "呂行", "唐祥程", "張秀玫", "曾美芝", "李偉", "李牧", "林全", "桂松山", "楊志元", "楊恆", "江霂歖", "王世宗", "王妤文", "王志遠", "羅雅苓", "聯合報", "莊旭惠", "蔡佳玲", "蔡玉良", "蘇試", "趙明", "邱千芸", "鄒湘平", "陳昱澐", "陳瑋筠"],
  "classes": ["國七A", "國七B", "國八A", "國八B", "國九A", "國九B", "高一", "高二理組", "高二文組", "高三理組", "高三文組"],
  "periods": [
    {"period": 1, "start": "08:10", "end": "09:00"},
    {"period": 2, "start": "09:10", "end": "10:00"},
    {"period": 3, "start": "10:10", "end": "11:00"},
    {"period": 4, "start": "11:05", "end": "11:55"},
    {"period": 5, "start": "12:55", "end": "13:45"},
    {"period": 6, "start": "13:55", "end": "14:45"},
    {"period": 7, "start": "14:50", "end": "15:40"}
  ],
  "teacherSchedule": {
    "張秀玫": {
      "星期一": {
        "1": [{"subject": "國語文", "classes": [], "rooms": []}],
        "2": [{"subject": "國語文", "classes": ["高一", "高二文組"], "rooms": []}]
      },
      "星期二": {
        "1": [{"subject": "自主學習", "classes": [], "rooms": []}],
        "2": [{"subject": "國語文", "classes": ["高一", "高二理組", "高二文組"], "rooms": []}],
        "4": [{"subject": "國語文", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}]
      },
      "星期三": {
        "1": [{"subject": "國語文", "classes": [], "rooms": []}],
        "2": [{"subject": "國語文", "classes": ["高二理組", "高二文組", "高一"], "rooms": []}],
        "3": [{"subject": "國語文", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "4": [{"subject": "導師時間", "classes": ["高一"], "rooms": []}],
        "7": [{"subject": "自主學習", "classes": ["高一"], "rooms": []}]
      },
      "星期四": {
        "1": [{"subject": "國語文", "classes": [], "rooms": []}],
        "2": [{"subject": "國語文", "classes": ["高二理組", "高二文組", "高一"], "rooms": []}],
        "4": [{"subject": "國語文", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}]
      },
      "星期五": {
        "1": [{"subject": "自主學習", "classes": [], "rooms": []}],
        "2": [{"subject": "國語文", "classes": ["高一"], "rooms": []}],
        "4": [{"subject": "國語文", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}]
      }
    },
    "曾美芝": {
      "星期一": {
        "1": [{"subject": "數學", "classes": [], "rooms": []}],
        "2": [{"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "數學", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "5": [{"subject": "—", "classes": ["高一"], "rooms": []}],
        "6": [{"subject": "—", "classes": ["高一"], "rooms": []}],
        "7": [{"subject": "—", "classes": ["高一"], "rooms": []}]
      },
      "星期二": {
        "1": [{"subject": "數學", "classes": [], "rooms": []}],
        "2": [{"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}]
      },
      "星期四": {
        "1": [{"subject": "數學", "classes": [], "rooms": []}],
        "2": [{"subject": "國七", "classes": ["高二文組", "高二理組"], "rooms": []}, {"subject": "國七", "classes": ["高二文組", "高二理組"], "rooms": []}, {"subject": "自主學習", "classes": ["高二文組", "高二理組"], "rooms": []}]
      },
      "星期五": {
        "1": [{"subject": "導師時間", "classes": [], "rooms": []}],
        "2": [{"subject": "—", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "3": [{"subject": "數學", "classes": ["高一"], "rooms": []}],
        "4": [{"subject": "數學", "classes": ["高一"], "rooms": []}],
        "5": [{"subject": "數學", "classes": ["高二文組"], "rooms": []}],
        "6": [{"subject": "數學", "classes": ["高二文組"], "rooms": []}],
        "7": [{"subject": "自主學習", "classes": ["高二理組", "高二文組"], "rooms": []}]
      },
      "星期三": {
        "2": [{"subject": "自主學習", "classes": ["高二文組", "高二理組"], "rooms": []}],
        "3": [{"subject": "數學", "classes": ["高二文組"], "rooms": []}],
        "4": [{"subject": "數學", "classes": ["高二文組"], "rooms": []}],
        "5": [{"subject": "數學", "classes": ["高一"], "rooms": []}],
        "6": [{"subject": "數學", "classes": ["高一"], "rooms": []}]
      }
    },
    "莊旭惠": {
      "星期一": {
        "1": [{"subject": "英語文", "classes": [], "rooms": []}],
        "2": [{"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "3": [{"subject": "英語文", "classes": ["高二文組"], "rooms": []}],
        "4": [{"subject": "英語文", "classes": ["高二文組"], "rooms": []}]
      },
      "星期二": {
        "1": [{"subject": "英語文", "classes": [], "rooms": []}],
        "2": [{"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "導師時間", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "3": [{"subject": "英語文", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "4": [{"subject": "英語文", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}]
      },
      "星期三": {
        "1": [{"subject": "英語文", "classes": [], "rooms": []}],
        "2": [{"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "英語文", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "4": [{"subject": "英語文", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}]
      },
      "星期四": {
        "1": [{"subject": "英語文", "classes": [], "rooms": []}],
        "2": [{"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "英語文", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "3": [{"subject": "導師時間", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "4": [{"subject": "英語文", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}]
      },
      "星期五": {
        "1": [{"subject": "英語文", "classes": [], "rooms": []}],
        "2": [{"subject": "國九", "classes": ["高二理組", "高二文組"], "rooms": []}, {"subject": "國九", "classes": ["高二理組", "高二文組"], "rooms": []}, {"subject": "英語文", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "3": [{"subject": "英語文", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "4": [{"subject": "英語文", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}]
      }
    },
    "陳瑋筠": {
      "星期三": {
        "1": [{"subject": "歷史", "classes": [], "rooms": []}],
        "2": [{"subject": "國七", "classes": [], "rooms": []}],
        "3": [{"subject": "導師時間", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "4": [{"subject": "歷史", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "5": [{"subject": "歷史", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "6": [{"subject": "歷史", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "7": [{"subject": "歷史", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}]
      },
      "星期四": {
        "1": [{"subject": "歷史", "classes": [], "rooms": []}],
        "2": [{"subject": "國八", "classes": [], "rooms": []}, {"subject": "導師時間", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "3": [{"subject": "歷史", "classes": ["高二文組"], "rooms": []}],
        "5": [{"subject": "公民與社會", "classes": ["高二文組"], "rooms": []}],
        "6": [{"subject": "公民與社會", "classes": ["高二文組"], "rooms": []}],
        "7": [{"subject": "公民與社會", "classes": ["高二文組"], "rooms": []}]
      },
      "星期五": {
        "1": [{"subject": "歷史", "classes": [], "rooms": []}],
        "2": [{"subject": "國七", "classes": [], "rooms": []}],
        "3": [{"subject": "歷史", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}]
      },
      "星期一": {
        "3": [{"subject": "歷史", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "4": [{"subject": "歷史", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "5": [{"subject": "歷史", "classes": ["高二文組"], "rooms": []}],
        "6": [{"subject": "歷史", "classes": ["高二文組"], "rooms": []}],
        "7": [{"subject": "歷史", "classes": ["高二文組"], "rooms": []}]
      },
      "星期二": {
        "3": [{"subject": "歷史", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "5": [{"subject": "歷史", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "6": [{"subject": "歷史", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "7": [{"subject": "歷史", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}]
      }
    },
    "王世宗": {
      "星期一": {
        "2": [{"subject": "生物", "classes": [], "rooms": []}],
        "3": [{"subject": "生物", "classes": ["國九B"], "rooms": []}],
        "4": [{"subject": "生物", "classes": ["國九A"], "rooms": []}],
        "5": [{"subject": "生物", "classes": ["國八B"], "rooms": []}],
        "6": [{"subject": "生物", "classes": ["國八B"], "rooms": []}],
        "7": [{"subject": "生物", "classes": ["國八B"], "rooms": []}]
      },
      "星期二": {
        "2": [{"subject": "生物", "classes": ["高三理組"], "rooms": []}],
        "3": [{"subject": "生物", "classes": ["國七B"], "rooms": []}],
        "5": [{"subject": "生物", "classes": ["高二理組"], "rooms": []}],
        "6": [{"subject": "生物", "classes": ["高二理組"], "rooms": []}],
        "7": [{"subject": "生物", "classes": ["高三理組"], "rooms": []}]
      },
      "星期三": {
        "3": [{"subject": "生物", "classes": ["國七A"], "rooms": []}],
        "5": [{"subject": "學習回饋", "classes": ["國九A"], "rooms": []}],
        "6": [{"subject": "學習回饋", "classes": ["國九A"], "rooms": []}],
        "7": [{"subject": "生物", "classes": ["高二理組"], "rooms": []}]
      },
      "星期四": {
        "2": [{"subject": "生物", "classes": ["國九B"], "rooms": []}],
        "3": [{"subject": "生物", "classes": ["國七B"], "rooms": []}],
        "5": [{"subject": "生物", "classes": ["國八A"], "rooms": []}],
        "6": [{"subject": "生物", "classes": ["國八A"], "rooms": []}],
        "7": [{"subject": "生物", "classes": ["國八A"], "rooms": []}]
      },
      "星期五": {
        "2": [{"subject": "生物", "classes": ["國七A"], "rooms": []}],
        "3": [{"subject": "生物", "classes": ["國九A"], "rooms": []}]
      }
    },
    "蔡佳玲": {
      "星期五": {
        "1": [{"subject": "數學", "classes": [], "rooms": []}],
        "2": [{"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "數學", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "5": [{"subject": "理化", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "6": [{"subject": "理化", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "7": [{"subject": "理化", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}]
      },
      "星期二": {
        "2": [{"subject": "數學", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "5": [{"subject": "理化", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "6": [{"subject": "理化", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "7": [{"subject": "理化", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}]
      },
      "星期四": {
        "3": [{"subject": "數學", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "5": [{"subject": "理化", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "6": [{"subject": "理化", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "7": [{"subject": "理化", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}]
      },
      "星期一": {
        "4": [{"subject": "導師時間", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "5": [{"subject": "物理", "classes": ["高二理組"], "rooms": []}],
        "6": [{"subject": "物理", "classes": ["高二理組"], "rooms": []}],
        "7": [{"subject": "物理", "classes": ["高二理組"], "rooms": []}]
      }
    },
    "邱千芸": {
      "星期一": {
        "1": [{"subject": "學習回饋", "classes": [], "rooms": []}],
        "2": [{"subject": "—", "classes": ["高二文組"], "rooms": []}]
      },
      "星期二": {
        "4": [{"subject": "英語文", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}]
      },
      "星期三": {
        "4": [{"subject": "英語文", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}]
      },
      "星期四": {
        "4": [{"subject": "英語文", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}]
      },
      "星期五": {
        "4": [{"subject": "英語文", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "7": [{"subject": "學習回饋", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}]
      }
    },
    "劉玉華": {
      "星期一": {
        "1": [{"subject": "國語文", "classes": [], "rooms": []}],
        "2": [{"subject": "國語文", "classes": ["高三文組"], "rooms": []}, {"subject": "國八", "classes": ["高三文組"], "rooms": []}],
        "3": [{"subject": "國語文", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}]
      },
      "星期二": {
        "1": [{"subject": "學習回饋", "classes": [], "rooms": []}],
        "2": [{"subject": "—", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "4": [{"subject": "國語文", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}]
      },
      "星期三": {
        "1": [{"subject": "國語文", "classes": [], "rooms": []}],
        "2": [{"subject": "—", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "3": [{"subject": "國語文", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "4": [{"subject": "國語文", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}]
      },
      "星期四": {
        "1": [{"subject": "國語文", "classes": [], "rooms": []}],
        "2": [{"subject": "國語文", "classes": ["高三理組", "高三文組"], "rooms": []}, {"subject": "國九", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "3": [{"subject": "國語文", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "4": [{"subject": "國語文", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}]
      },
      "星期五": {
        "1": [{"subject": "導師時間", "classes": [], "rooms": []}],
        "2": [{"subject": "國語文", "classes": ["高三理組", "高三文組"], "rooms": []}, {"subject": "國九", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "4": [{"subject": "國語文", "classes": ["高三理組", "高三文組"], "rooms": []}]
      }
    },
    "桂松山": {
      "星期一": {
        "1": [{"subject": "數學", "classes": [], "rooms": []}],
        "2": [{"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "數學", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}]
      },
      "星期二": {
        "1": [{"subject": "數學", "classes": [], "rooms": []}],
        "2": [{"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "數學", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}]
      },
      "星期三": {
        "1": [{"subject": "數學", "classes": [], "rooms": []}],
        "2": [{"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "數學", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "3": [{"subject": "數學", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}]
      },
      "星期四": {
        "1": [{"subject": "數學", "classes": [], "rooms": []}],
        "2": [{"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "3": [{"subject": "數學", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "4": [{"subject": "數學", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}]
      },
      "星期五": {
        "1": [{"subject": "數學", "classes": [], "rooms": []}],
        "2": [{"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "數學", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "4": [{"subject": "數學", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}]
      }
    },
    "吳雯菁": {
      "星期一": {
        "1": [{"subject": "公民與社會", "classes": ["國八B"], "rooms": []}],
        "2": [{"subject": "—", "classes": ["國八A"], "rooms": []}],
        "4": [{"subject": "公民與社會", "classes": ["國七B"], "rooms": []}],
        "5": [{"subject": "—", "classes": ["國九A"], "rooms": []}],
        "6": [{"subject": "公民與社會", "classes": ["國九A"], "rooms": []}],
        "7": [{"subject": "公民與社會", "classes": ["國九A"], "rooms": []}]
      },
      "星期二": {
        "1": [{"subject": "—", "classes": ["國八A"], "rooms": []}],
        "5": [{"subject": "—", "classes": ["國九B"], "rooms": []}],
        "6": [{"subject": "—", "classes": ["國九B"], "rooms": []}],
        "7": [{"subject": "—", "classes": ["國九B"], "rooms": []}]
      },
      "星期五": {
        "2": [{"subject": "公民與社會", "classes": ["國七B"], "rooms": []}, {"subject": "公民與社會", "classes": ["國七B"], "rooms": []}],
        "3": [{"subject": "—", "classes": ["國七A"], "rooms": []}],
        "4": [{"subject": "導師時間", "classes": ["國八B"], "rooms": []}],
        "5": [{"subject": "學習回饋", "classes": ["國八B"], "rooms": []}],
        "6": [{"subject": "學習回饋", "classes": ["國八B"], "rooms": []}],
        "7": [{"subject": "學習回饋", "classes": ["國八B"], "rooms": []}]
      },
      "星期三": {
        "2": [{"subject": "公民與社會", "classes": ["國七A"], "rooms": []}],
        "3": [{"subject": "公民與社會", "classes": [], "rooms": []}],
        "4": [{"subject": "—", "classes": ["國八B"], "rooms": []}]
      }
    },
    "呂宜霖": {
      "星期二": {
        "1": [{"subject": "學習回饋", "classes": [], "rooms": []}],
        "2": [{"subject": "國語文", "classes": ["高二理組", "高二文組"], "rooms": []}, {"subject": "國七", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "3": [{"subject": "國語文", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}]
      },
      "星期三": {
        "1": [{"subject": "國語文", "classes": [], "rooms": []}],
        "2": [{"subject": "國七", "classes": [], "rooms": []}, {"subject": "國語文", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "4": [{"subject": "國語文", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}]
      },
      "星期四": {
        "1": [{"subject": "學習回饋", "classes": [], "rooms": []}],
        "2": [{"subject": "國語文", "classes": ["高一"], "rooms": []}, {"subject": "國七", "classes": ["高一"], "rooms": []}],
        "3": [{"subject": "國語文", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}]
      },
      "星期五": {
        "1": [{"subject": "國語文", "classes": [], "rooms": []}],
        "2": [{"subject": "國七", "classes": [], "rooms": []}, {"subject": "國語文", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "3": [{"subject": "國語文", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "5": [{"subject": "學習回饋", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}]
      },
      "星期一": {
        "2": [{"subject": "國語文", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "3": [{"subject": "國語文", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "4": [{"subject": "國語文", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}]
      }
    },
    "江霂歖": {
      "星期三": {
        "1": [{"subject": "體育", "classes": [], "rooms": []}],
        "2": [{"subject": "—", "classes": ["高一"], "rooms": []}],
        "4": [{"subject": "體育", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}]
      },
      "星期一": {
        "2": [{"subject": "體育", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "3": [{"subject": "體育", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "4": [{"subject": "體育", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}]
      },
      "星期五": {
        "3": [{"subject": "體育", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "4": [{"subject": "體育", "classes": ["高二理組", "高二文組"], "rooms": []}]
      },
      "星期二": {
        "4": [{"subject": "體育", "classes": ["高二理組", "高二文組"], "rooms": []}]
      },
      "星期四": {
        "4": [{"subject": "體育", "classes": ["高一"], "rooms": []}]
      }
    },
    "陳昱澐": {
      "星期四": {
        "5": [{"subject": "AI", "classes": ["高一"], "rooms": []}],
        "6": [{"subject": "AI", "classes": ["高一"], "rooms": []}],
        "7": [{"subject": "AI", "classes": ["高一"], "rooms": []}]
      }
    },
    "羅雅苓": {
      "星期四": {
        "1": [{"subject": "英語文", "classes": ["國九A", "國九B"], "rooms": []}],
        "2": [{"subject": "英語文", "classes": ["國八A", "國八B"], "rooms": []}],
        "3": [{"subject": "英語文", "classes": ["高一"], "rooms": []}],
        "4": [{"subject": "英語文", "classes": ["國七A", "國七B"], "rooms": []}],
        "5": [{"subject": "學習回饋", "classes": ["國九B"], "rooms": []}],
        "6": [{"subject": "學習回饋", "classes": ["國九B"], "rooms": []}],
        "7": [{"subject": "學習回饋", "classes": ["國九B"], "rooms": []}]
      },
      "星期一": {
        "1": [{"subject": "—", "classes": ["國九A", "國九B"], "rooms": []}],
        "2": [{"subject": "—", "classes": ["高一"], "rooms": []}],
        "4": [{"subject": "—", "classes": ["國七A", "國七B"], "rooms": []}]
      },
      "星期三": {
        "1": [{"subject": "英語文", "classes": ["國八A", "國八B"], "rooms": []}],
        "2": [{"subject": "英語文", "classes": ["國八A", "國八B"], "rooms": []}],
        "3": [{"subject": "英語文", "classes": ["高一"], "rooms": []}],
        "4": [{"subject": "英語文", "classes": ["國七A", "國七B"], "rooms": []}]
      },
      "星期五": {
        "1": [{"subject": "英語文", "classes": ["國九A", "國九B"], "rooms": []}],
        "3": [{"subject": "英語文", "classes": ["國八A", "國八B"], "rooms": []}],
        "4": [{"subject": "英語文", "classes": ["國七A", "國七B"], "rooms": []}]
      },
      "星期二": {
        "1": [{"subject": "英語文", "classes": [], "rooms": []}],
        "2": [{"subject": "英語文", "classes": ["高一"], "rooms": []}],
        "4": [{"subject": "英語文", "classes": [], "rooms": []}]
      }
    },
    "何文達": {
      "星期一": {
        "1": [{"subject": "地理", "classes": ["國八A"], "rooms": []}],
        "3": [{"subject": "地理", "classes": ["國八B"], "rooms": []}],
        "5": [{"subject": "地理", "classes": ["國九B"], "rooms": []}],
        "6": [{"subject": "地理", "classes": ["國九B"], "rooms": []}],
        "7": [{"subject": "地理", "classes": ["國九B"], "rooms": []}]
      },
      "星期二": {
        "1": [{"subject": "地理", "classes": ["國八B"], "rooms": []}],
        "3": [{"subject": "地理", "classes": ["國八A"], "rooms": []}],
        "5": [{"subject": "地理", "classes": ["高二文組"], "rooms": []}],
        "6": [{"subject": "地理", "classes": ["高二文組"], "rooms": []}],
        "7": [{"subject": "地理", "classes": ["高二文組"], "rooms": []}]
      },
      "星期四": {
        "5": [{"subject": "地理", "classes": ["國九A"], "rooms": []}],
        "6": [{"subject": "地理", "classes": ["國九A"], "rooms": []}],
        "7": [{"subject": "地理", "classes": ["國九A"], "rooms": []}]
      },
      "星期三": {
        "5": [{"subject": "地理", "classes": ["高二文組"], "rooms": []}],
        "6": [{"subject": "地理", "classes": ["高二文組"], "rooms": []}]
      }
    },
    "唐祥程": {
      "星期二": {
        "5": [{"subject": "智造創客", "classes": ["高一"], "rooms": []}],
        "6": [{"subject": "智造創客", "classes": ["高一"], "rooms": []}],
        "7": [{"subject": "智造創客", "classes": ["高一"], "rooms": []}]
      },
      "星期四": {
        "5": [{"subject": "AI", "classes": ["高一"], "rooms": []}],
        "6": [{"subject": "AI", "classes": ["高一"], "rooms": []}],
        "7": [{"subject": "AI", "classes": ["高一"], "rooms": []}]
      }
    },
    "聯合報": {
      "星期一": {
        "5": [{"subject": "國寫思辨", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "6": [{"subject": "國寫思辨", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "7": [{"subject": "國寫思辨", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}]
      },
      "星期二": {
        "5": [{"subject": "國寫思辨", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "6": [{"subject": "國寫思辨", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "7": [{"subject": "國寫思辨", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}]
      },
      "星期五": {
        "5": [{"subject": "國寫思辨", "classes": ["高一"], "rooms": []}],
        "6": [{"subject": "國寫思辨", "classes": ["高一"], "rooms": []}],
        "7": [{"subject": "國寫思辨", "classes": ["高一"], "rooms": []}]
      }
    },
    "王妤文": {
      "星期一": {
        "7": [{"subject": "—", "classes": ["高二理組", "高二文組"], "rooms": []}]
      },
      "星期三": {
        "4": [{"subject": "—", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "7": [{"subject": "學習回饋", "classes": ["國九A"], "rooms": []}]
      },
      "星期二": {
        "7": [{"subject": "學習回饋", "classes": [], "rooms": []}]
      },
      "星期五": {
        "2": [{"subject": "學習回饋", "classes": [], "rooms": []}],
        "3": [{"subject": "學習回饋", "classes": [], "rooms": []}],
        "6": [{"subject": "學習回饋", "classes": ["國八A"], "rooms": []}]
      },
      "星期四": {
        "2": [{"subject": "—", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "3": [{"subject": "—", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "4": [{"subject": "學習回饋", "classes": [], "rooms": []}]
      }
    },
    "Roja": {
      "星期一": {
        "3": [{"subject": "ESL", "classes": ["高一"], "rooms": []}],
        "4": [{"subject": "ESL", "classes": ["高一"], "rooms": []}],
        "5": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "6": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "7": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}]
      },
      "星期二": {
        "3": [{"subject": "ESL", "classes": ["高一"], "rooms": []}],
        "4": [{"subject": "ESL", "classes": ["高一"], "rooms": []}],
        "5": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "6": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "7": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}]
      },
      "星期三": {
        "5": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "6": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "7": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}]
      }
    },
    "Chad": {
      "星期一": {
        "3": [{"subject": "ESL", "classes": ["高一"], "rooms": []}],
        "4": [{"subject": "ESL", "classes": ["高一"], "rooms": []}],
        "5": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "6": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "7": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}]
      },
      "星期二": {
        "3": [{"subject": "ESL", "classes": ["高一"], "rooms": []}],
        "4": [{"subject": "ESL", "classes": ["高一"], "rooms": []}],
        "5": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "6": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "7": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}]
      },
      "星期三": {
        "5": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "6": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "7": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}]
      }
    },
    "Gina": {
      "星期一": {
        "3": [{"subject": "ESL", "classes": ["高一"], "rooms": []}],
        "4": [{"subject": "ESL", "classes": ["高一"], "rooms": []}],
        "5": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "6": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "7": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}]
      },
      "星期二": {
        "3": [{"subject": "ESL", "classes": ["高一"], "rooms": []}],
        "4": [{"subject": "ESL", "classes": ["高一"], "rooms": []}],
        "5": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "6": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "7": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}]
      },
      "星期三": {
        "5": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "6": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "7": [{"subject": "ESL", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}]
      }
    },
    "楊志元": {
      "星期三": {
        "2": [{"subject": "化學", "classes": ["高三理組"], "rooms": []}],
        "3": [{"subject": "化學", "classes": ["高三理組"], "rooms": []}]
      },
      "星期四": {
        "2": [{"subject": "化學", "classes": ["高三理組"], "rooms": []}],
        "3": [{"subject": "化學", "classes": ["高三理組"], "rooms": []}],
        "5": [{"subject": "化學", "classes": ["高二理組"], "rooms": []}],
        "6": [{"subject": "化學", "classes": ["高二理組"], "rooms": []}],
        "7": [{"subject": "化學", "classes": ["高二理組"], "rooms": []}]
      }
    },
    "鄒湘平": {
      "星期一": {
        "1": [{"subject": "英語文", "classes": [], "rooms": []}],
        "2": [{"subject": "國九", "classes": ["高一"], "rooms": []}, {"subject": "國九", "classes": ["高一"], "rooms": []}, {"subject": "英語文", "classes": ["高一"], "rooms": []}],
        "3": [{"subject": "英語文", "classes": ["高二文組"], "rooms": []}],
        "4": [{"subject": "英語文", "classes": ["高二文組"], "rooms": []}]
      },
      "星期二": {
        "1": [{"subject": "英語文", "classes": [], "rooms": []}],
        "2": [{"subject": "國九", "classes": ["高一"], "rooms": []}, {"subject": "國九", "classes": ["高一"], "rooms": []}, {"subject": "英語文", "classes": ["高一"], "rooms": []}],
        "3": [{"subject": "英語文", "classes": ["高二理組", "高二文組"], "rooms": []}]
      },
      "星期三": {
        "1": [{"subject": "英語文", "classes": [], "rooms": []}],
        "2": [{"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "英語文", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "3": [{"subject": "英語文", "classes": ["高一"], "rooms": []}]
      },
      "星期四": {
        "1": [{"subject": "英語文", "classes": [], "rooms": []}],
        "2": [{"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "英語文", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "3": [{"subject": "英語文", "classes": ["高一"], "rooms": []}]
      },
      "星期五": {
        "1": [{"subject": "英語文", "classes": [], "rooms": []}],
        "2": [{"subject": "國九", "classes": ["高二理組", "高二文組"], "rooms": []}, {"subject": "國九", "classes": ["高二理組", "高二文組"], "rooms": []}, {"subject": "英語文", "classes": ["高二理組", "高二文組"], "rooms": []}],
        "3": [{"subject": "英語文", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}]
      }
    },
    "蔡玉良": {
      "星期一": {
        "3": [{"subject": "物理", "classes": ["高三理組"], "rooms": []}],
        "4": [{"subject": "物理", "classes": ["高三理組"], "rooms": []}]
      },
      "星期二": {
        "3": [{"subject": "物理", "classes": ["高三理組"], "rooms": []}],
        "4": [{"subject": "物理", "classes": ["高三理組"], "rooms": []}],
        "5": [{"subject": "地球科學", "classes": ["高三理組"], "rooms": []}],
        "6": [{"subject": "地球科學", "classes": ["高三理組"], "rooms": []}]
      },
      "星期四": {
        "3": [{"subject": "地球科學", "classes": ["高二理組"], "rooms": []}],
        "4": [{"subject": "地球科學", "classes": ["高三理組"], "rooms": []}]
      },
      "星期三": {
        "4": [{"subject": "地球科學", "classes": ["高三理組"], "rooms": []}],
        "5": [{"subject": "地球科學", "classes": ["高二理組"], "rooms": []}],
        "6": [{"subject": "地球科學", "classes": ["高二理組"], "rooms": []}]
      }
    },
    "之宇": {
      "星期一": {
        "5": [{"subject": "英語文", "classes": ["高三文組"], "rooms": []}],
        "6": [{"subject": "英語文", "classes": ["高三文組"], "rooms": []}],
        "7": [{"subject": "英語文", "classes": ["高三文組"], "rooms": []}]
      },
      "星期三": {
        "5": [{"subject": "英語文", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "6": [{"subject": "英語文", "classes": ["高三理組", "高三文組"], "rooms": []}],
        "7": [{"subject": "英語文", "classes": ["高三理組", "高三文組"], "rooms": []}]
      }
    },
    "名敦": {
      "星期一": {
        "5": [{"subject": "國寫思辨", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "6": [{"subject": "國寫思辨", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "7": [{"subject": "國寫思辨", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}]
      },
      "星期五": {
        "5": [{"subject": "國寫思辨", "classes": ["高一"], "rooms": []}],
        "6": [{"subject": "國寫思辨", "classes": ["高一"], "rooms": []}],
        "7": [{"subject": "國寫思辨", "classes": ["高一"], "rooms": []}]
      }
    },
    "李牧": {
      "星期三": {
        "3": [{"subject": "數學", "classes": ["高二理組"], "rooms": []}],
        "4": [{"subject": "數學", "classes": ["高二理組"], "rooms": []}],
        "5": [{"subject": "數學", "classes": ["高一"], "rooms": []}],
        "6": [{"subject": "數學", "classes": ["高一"], "rooms": []}]
      },
      "星期五": {
        "3": [{"subject": "數學", "classes": ["高一"], "rooms": []}],
        "4": [{"subject": "數學", "classes": ["高一"], "rooms": []}],
        "5": [{"subject": "數學", "classes": ["高二理組"], "rooms": []}],
        "6": [{"subject": "數學", "classes": ["高二理組"], "rooms": []}]
      }
    },
    "王志遠": {
      "星期四": {
        "5": [{"subject": "數學乙", "classes": ["高三文組"], "rooms": []}],
        "6": [{"subject": "數學乙", "classes": ["高三文組"], "rooms": []}],
        "7": [{"subject": "數學乙", "classes": ["高三文組"], "rooms": []}]
      },
      "星期五": {
        "5": [{"subject": "數學乙", "classes": ["高三文組"], "rooms": []}],
        "6": [{"subject": "數學乙", "classes": ["高三文組"], "rooms": []}],
        "7": [{"subject": "數學乙", "classes": ["高三文組"], "rooms": []}]
      }
    },
    "蘇試": {
      "星期三": {
        "1": [{"subject": "數學", "classes": [], "rooms": []}],
        "2": [{"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "數學", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "3": [{"subject": "數學", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}]
      },
      "星期四": {
        "4": [{"subject": "數學", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "5": [{"subject": "數學甲", "classes": ["高三理組"], "rooms": []}],
        "6": [{"subject": "數學甲", "classes": ["高三理組"], "rooms": []}],
        "7": [{"subject": "數學甲", "classes": ["高三理組"], "rooms": []}]
      },
      "星期五": {
        "4": [{"subject": "數學", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "5": [{"subject": "數學甲", "classes": ["高三理組"], "rooms": []}],
        "6": [{"subject": "數學甲", "classes": ["高三理組"], "rooms": []}],
        "7": [{"subject": "數學甲", "classes": ["高三理組"], "rooms": []}]
      }
    },
    "吳宇綸": {
      "星期一": {
        "1": [{"subject": "數學", "classes": [], "rooms": []}],
        "2": [{"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "數學", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}]
      },
      "星期二": {
        "1": [{"subject": "數學", "classes": [], "rooms": []}],
        "2": [{"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}, {"subject": "數學", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}]
      },
      "星期三": {
        "1": [{"subject": "數學", "classes": [], "rooms": []}],
        "2": [{"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "數學", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "3": [{"subject": "數學", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}]
      },
      "星期四": {
        "1": [{"subject": "數學", "classes": [], "rooms": []}],
        "2": [{"subject": "國七", "classes": [], "rooms": []}, {"subject": "國七", "classes": [], "rooms": []}],
        "3": [{"subject": "數學", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "4": [{"subject": "數學", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}]
      },
      "星期五": {
        "1": [{"subject": "數學", "classes": [], "rooms": []}],
        "2": [{"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "數學", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}, {"subject": "國八", "classes": [], "rooms": []}],
        "4": [{"subject": "數學", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}]
      }
    },
    "李偉": {
      "星期三": {
        "2": [{"subject": "歷史", "classes": ["高三文組"], "rooms": []}],
        "3": [{"subject": "歷史", "classes": ["高三文組"], "rooms": []}],
        "4": [{"subject": "歷史", "classes": ["高三文組"], "rooms": []}]
      },
      "星期二": {
        "5": [{"subject": "歷史", "classes": ["高三文組"], "rooms": []}],
        "6": [{"subject": "歷史", "classes": ["高三文組"], "rooms": []}],
        "7": [{"subject": "歷史", "classes": ["高三文組"], "rooms": []}]
      }
    },
    "林全": {
      "星期一": {
        "2": [{"subject": "地理", "classes": ["高三文組"], "rooms": []}],
        "3": [{"subject": "地理", "classes": ["高三文組"], "rooms": []}],
        "4": [{"subject": "地理", "classes": ["高三文組"], "rooms": []}]
      },
      "星期四": {
        "2": [{"subject": "地理", "classes": ["高三文組"], "rooms": []}],
        "3": [{"subject": "地理", "classes": ["高三文組"], "rooms": []}],
        "4": [{"subject": "地理", "classes": ["高三文組"], "rooms": []}]
      }
    },
    "趙明": {
      "星期二": {
        "2": [{"subject": "公民與社會", "classes": ["高三文組"], "rooms": []}],
        "3": [{"subject": "公民與社會", "classes": ["高三文組"], "rooms": []}],
        "4": [{"subject": "公民與社會", "classes": ["高三文組"], "rooms": []}]
      }
    },
    "呂行": {
      "星期五": {
        "5": [{"subject": "理化", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "6": [{"subject": "理化", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "7": [{"subject": "理化", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}]
      }
    },
    "楊恆": {
      "星期二": {
        "2": [{"subject": "社會統整", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "3": [{"subject": "社會統整", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}],
        "4": [{"subject": "社會統整", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}, {"subject": "國九", "classes": [], "rooms": []}]
      }
    }
  },
  "classSchedule": {
    "國七A": {
      "星期一": {
        "1": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}, {"teacher": "曾美芝", "subject": "數學", "rooms": []}],
        "2": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}, {"teacher": "曾美芝", "subject": "數學", "rooms": []}],
        "3": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "4": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "5": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}],
        "6": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}],
        "7": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}]
      },
      "星期二": {
        "1": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}, {"teacher": "曾美芝", "subject": "數學", "rooms": []}],
        "2": [{"teacher": "莊旭惠", "subject": "導師時間", "rooms": []}],
        "3": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "4": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}, {"teacher": "邱千芸", "subject": "英語文", "rooms": []}],
        "5": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}],
        "6": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}],
        "7": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}]
      },
      "星期三": {
        "1": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "2": [{"teacher": "吳雯菁", "subject": "公民與社會", "rooms": []}],
        "3": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "4": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}, {"teacher": "邱千芸", "subject": "英語文", "rooms": []}],
        "5": [{"teacher": "外聘", "subject": "多元營隊", "rooms": []}],
        "6": [{"teacher": "外聘", "subject": "多元營隊", "rooms": []}],
        "7": [{"teacher": "外聘", "subject": "多元營隊", "rooms": []}]
      },
      "星期四": {
        "1": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}, {"teacher": "曾美芝", "subject": "數學", "rooms": []}],
        "2": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "3": [{"teacher": "莊旭惠", "subject": "導師時間", "rooms": []}],
        "4": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}, {"teacher": "邱千芸", "subject": "英語文", "rooms": []}],
        "5": [{"teacher": "外聘", "subject": "多元營隊", "rooms": []}],
        "6": [{"teacher": "外聘", "subject": "多元營隊", "rooms": []}],
        "7": [{"teacher": "外聘", "subject": "多元營隊", "rooms": []}]
      },
      "星期五": {
        "1": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "2": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "3": [{"teacher": "吳雯菁", "subject": "公民與社會", "rooms": []}],
        "4": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}, {"teacher": "邱千芸", "subject": "英語文", "rooms": []}],
        "5": [{"teacher": "外聘", "subject": "多元營隊", "rooms": []}],
        "6": [{"teacher": "外聘", "subject": "多元營隊", "rooms": []}],
        "7": [{"teacher": "外聘", "subject": "多元營隊", "rooms": []}]
      }
    },
    "國七B": {
      "星期一": {
        "1": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}, {"teacher": "曾美芝", "subject": "數學", "rooms": []}],
        "2": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}, {"teacher": "曾美芝", "subject": "數學", "rooms": []}],
        "3": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "4": [{"teacher": "吳雯菁", "subject": "公民與社會", "rooms": []}],
        "5": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}],
        "6": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}],
        "7": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}]
      },
      "星期二": {
        "1": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}, {"teacher": "曾美芝", "subject": "數學", "rooms": []}],
        "2": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "3": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "4": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}, {"teacher": "邱千芸", "subject": "英語文", "rooms": []}],
        "5": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}],
        "6": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}],
        "7": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}]
      },
      "星期三": {
        "1": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "2": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "3": [{"teacher": "陳瑋筠", "subject": "導師時間", "rooms": []}],
        "4": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}, {"teacher": "邱千芸", "subject": "英語文", "rooms": []}],
        "5": [{"teacher": "外聘", "subject": "多元營隊", "rooms": []}],
        "6": [{"teacher": "外聘", "subject": "多元營隊", "rooms": []}],
        "7": [{"teacher": "外聘", "subject": "多元營隊", "rooms": []}]
      },
      "星期四": {
        "1": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}, {"teacher": "曾美芝", "subject": "數學", "rooms": []}],
        "2": [{"teacher": "陳瑋筠", "subject": "導師時間", "rooms": []}],
        "3": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "4": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}, {"teacher": "邱千芸", "subject": "英語文", "rooms": []}],
        "5": [{"teacher": "外聘", "subject": "多元營隊", "rooms": []}],
        "6": [{"teacher": "外聘", "subject": "多元營隊", "rooms": []}],
        "7": [{"teacher": "外聘", "subject": "多元營隊", "rooms": []}]
      },
      "星期五": {
        "1": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "2": [{"teacher": "吳雯菁", "subject": "公民與社會", "rooms": []}],
        "3": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "4": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}, {"teacher": "邱千芸", "subject": "英語文", "rooms": []}],
        "5": [{"teacher": "外聘", "subject": "多元營隊", "rooms": []}],
        "6": [{"teacher": "外聘", "subject": "多元營隊", "rooms": []}],
        "7": [{"teacher": "外聘", "subject": "多元營隊", "rooms": []}]
      }
    },
    "國八A": {
      "星期二": {
        "1": [{"teacher": "吳雯菁", "subject": "公民與社會", "rooms": []}],
        "2": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}, {"teacher": "蔡佳玲", "subject": "數學", "rooms": []}],
        "3": [{"teacher": "何文達", "subject": "地理", "rooms": []}],
        "4": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "5": [{"teacher": "蔡佳玲", "subject": "理化", "rooms": []}],
        "6": [{"teacher": "蔡佳玲", "subject": "理化", "rooms": []}],
        "7": [{"teacher": "蔡佳玲", "subject": "理化", "rooms": []}]
      },
      "星期一": {
        "1": [{"teacher": "何文達", "subject": "地理", "rooms": []}],
        "2": [{"teacher": "吳雯菁", "subject": "公民與社會", "rooms": []}],
        "3": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "4": [{"teacher": "蔡佳玲", "subject": "導師時間", "rooms": []}],
        "5": [{"teacher": "聯合報", "subject": "國寫思辨", "rooms": []}, {"teacher": "名敦", "subject": "國寫思辨", "rooms": []}],
        "6": [{"teacher": "聯合報", "subject": "國寫思辨", "rooms": []}, {"teacher": "名敦", "subject": "國寫思辨", "rooms": []}],
        "7": [{"teacher": "聯合報", "subject": "國寫思辨", "rooms": []}, {"teacher": "名敦", "subject": "國寫思辨", "rooms": []}]
      },
      "星期三": {
        "1": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}],
        "2": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}],
        "3": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "4": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "5": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}],
        "6": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}],
        "7": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}]
      },
      "星期四": {
        "1": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "2": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}],
        "3": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}, {"teacher": "蔡佳玲", "subject": "數學", "rooms": []}],
        "4": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "5": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "6": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "7": [{"teacher": "王世宗", "subject": "生物", "rooms": []}]
      },
      "星期五": {
        "1": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}, {"teacher": "蔡佳玲", "subject": "數學", "rooms": []}],
        "2": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}, {"teacher": "蔡佳玲", "subject": "數學", "rooms": []}],
        "3": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}],
        "4": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "5": [{"teacher": "呂宜霖", "subject": "學習回饋", "rooms": []}],
        "6": [{"teacher": "王妤文", "subject": "學習回饋", "rooms": []}],
        "7": [{"teacher": "邱千芸", "subject": "學習回饋", "rooms": []}]
      }
    },
    "國八B": {
      "星期一": {
        "1": [{"teacher": "吳雯菁", "subject": "公民與社會", "rooms": []}],
        "2": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "3": [{"teacher": "何文達", "subject": "地理", "rooms": []}],
        "4": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "5": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "6": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "7": [{"teacher": "王世宗", "subject": "生物", "rooms": []}]
      },
      "星期二": {
        "1": [{"teacher": "何文達", "subject": "地理", "rooms": []}],
        "2": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}],
        "3": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "4": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "5": [{"teacher": "聯合報", "subject": "國寫思辨", "rooms": []}],
        "6": [{"teacher": "聯合報", "subject": "國寫思辨", "rooms": []}],
        "7": [{"teacher": "聯合報", "subject": "國寫思辨", "rooms": []}]
      },
      "星期三": {
        "1": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "2": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "3": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "4": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "5": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}],
        "6": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}],
        "7": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}]
      },
      "星期四": {
        "1": [{"teacher": "吳雯菁", "subject": "公民與社會", "rooms": []}],
        "2": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "3": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}],
        "4": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "5": [{"teacher": "蔡佳玲", "subject": "理化", "rooms": []}],
        "6": [{"teacher": "蔡佳玲", "subject": "理化", "rooms": []}],
        "7": [{"teacher": "蔡佳玲", "subject": "理化", "rooms": []}]
      },
      "星期五": {
        "1": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}],
        "2": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "吳宇綸", "subject": "數學", "rooms": []}],
        "3": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "4": [{"teacher": "吳雯菁", "subject": "導師時間", "rooms": []}],
        "5": [{"teacher": "吳雯菁", "subject": "學習回饋", "rooms": []}],
        "6": [{"teacher": "吳雯菁", "subject": "學習回饋", "rooms": []}],
        "7": [{"teacher": "吳雯菁", "subject": "學習回饋", "rooms": []}]
      }
    },
    "國九A": {
      "星期一": {
        "1": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "2": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "3": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "4": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "5": [{"teacher": "吳雯菁", "subject": "", "rooms": []}],
        "6": [{"teacher": "吳雯菁", "subject": "公民與社會", "rooms": []}],
        "7": [{"teacher": "吳雯菁", "subject": "公民與社會", "rooms": []}]
      },
      "星期二": {
        "1": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "2": [{"teacher": "楊恆", "subject": "社會統整", "rooms": []}],
        "3": [{"teacher": "楊恆", "subject": "社會統整", "rooms": []}],
        "4": [{"teacher": "楊恆", "subject": "社會統整", "rooms": []}],
        "5": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "6": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "7": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}]
      },
      "星期三": {
        "1": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "蘇試", "subject": "數學", "rooms": []}],
        "2": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "蘇試", "subject": "數學", "rooms": []}],
        "3": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "蘇試", "subject": "數學", "rooms": []}],
        "4": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "5": [{"teacher": "王世宗", "subject": "學習回饋", "rooms": []}],
        "6": [{"teacher": "王世宗", "subject": "學習回饋", "rooms": []}],
        "7": [{"teacher": "王妤文", "subject": "學習回饋", "rooms": []}]
      },
      "星期四": {
        "1": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "2": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "3": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "4": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "蘇試", "subject": "數學", "rooms": []}],
        "5": [{"teacher": "何文達", "subject": "地理", "rooms": []}],
        "6": [{"teacher": "何文達", "subject": "地理", "rooms": []}],
        "7": [{"teacher": "何文達", "subject": "地理", "rooms": []}]
      },
      "星期五": {
        "1": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "2": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "3": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "4": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "蘇試", "subject": "數學", "rooms": []}],
        "5": [{"teacher": "呂行", "subject": "理化", "rooms": []}, {"teacher": "蔡佳玲", "subject": "理化", "rooms": []}],
        "6": [{"teacher": "呂行", "subject": "理化", "rooms": []}, {"teacher": "蔡佳玲", "subject": "理化", "rooms": []}],
        "7": [{"teacher": "呂行", "subject": "理化", "rooms": []}, {"teacher": "蔡佳玲", "subject": "理化", "rooms": []}]
      }
    },
    "國九B": {
      "星期一": {
        "1": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "2": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "3": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "4": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "5": [{"teacher": "何文達", "subject": "地理", "rooms": []}],
        "6": [{"teacher": "何文達", "subject": "地理", "rooms": []}],
        "7": [{"teacher": "何文達", "subject": "地理", "rooms": []}]
      },
      "星期二": {
        "1": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "2": [{"teacher": "楊恆", "subject": "社會統整", "rooms": []}],
        "3": [{"teacher": "楊恆", "subject": "社會統整", "rooms": []}],
        "4": [{"teacher": "楊恆", "subject": "社會統整", "rooms": []}],
        "5": [{"teacher": "吳雯菁", "subject": "", "rooms": []}],
        "6": [{"teacher": "吳雯菁", "subject": "公民與社會", "rooms": []}],
        "7": [{"teacher": "吳雯菁", "subject": "公民與社會", "rooms": []}]
      },
      "星期三": {
        "1": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "蘇試", "subject": "數學", "rooms": []}],
        "2": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "蘇試", "subject": "數學", "rooms": []}],
        "3": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "蘇試", "subject": "數學", "rooms": []}],
        "4": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "5": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "6": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "7": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}]
      },
      "星期四": {
        "1": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "2": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "3": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "4": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "蘇試", "subject": "數學", "rooms": []}],
        "5": [{"teacher": "羅雅苓", "subject": "學習回饋", "rooms": []}],
        "6": [{"teacher": "羅雅苓", "subject": "學習回饋", "rooms": []}],
        "7": [{"teacher": "羅雅苓", "subject": "學習回饋", "rooms": []}]
      },
      "星期五": {
        "1": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "2": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "3": [{"teacher": "呂宜霖", "subject": "國語文", "rooms": []}],
        "4": [{"teacher": "桂松山", "subject": "數學", "rooms": []}, {"teacher": "蘇試", "subject": "數學", "rooms": []}],
        "5": [{"teacher": "呂行", "subject": "理化", "rooms": []}, {"teacher": "蔡佳玲", "subject": "理化", "rooms": []}],
        "6": [{"teacher": "呂行", "subject": "理化", "rooms": []}, {"teacher": "蔡佳玲", "subject": "理化", "rooms": []}],
        "7": [{"teacher": "呂行", "subject": "理化", "rooms": []}, {"teacher": "蔡佳玲", "subject": "理化", "rooms": []}]
      }
    },
    "高一": {
      "星期一": {
        "1": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "2": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "3": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}],
        "4": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}],
        "5": [{"teacher": "曾美芝", "subject": "簡報與文書表達", "rooms": []}],
        "6": [{"teacher": "曾美芝", "subject": "簡報與文書表達", "rooms": []}],
        "7": [{"teacher": "曾美芝", "subject": "簡報與文書表達", "rooms": []}]
      },
      "星期二": {
        "1": [{"teacher": "張秀玫", "subject": "自主學習", "rooms": []}],
        "2": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "3": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}],
        "4": [{"teacher": "Roja", "subject": "ESL", "rooms": []}, {"teacher": "Chad", "subject": "ESL", "rooms": []}, {"teacher": "Gina", "subject": "ESL", "rooms": []}],
        "5": [{"teacher": "唐祥程", "subject": "智造創客", "rooms": []}],
        "6": [{"teacher": "唐祥程", "subject": "智造創客", "rooms": []}],
        "7": [{"teacher": "唐祥程", "subject": "智造創客", "rooms": []}]
      },
      "星期三": {
        "1": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "2": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "3": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "4": [{"teacher": "張秀玫", "subject": "導師時間", "rooms": []}],
        "5": [{"teacher": "李牧", "subject": "數學", "rooms": []}, {"teacher": "曾美芝", "subject": "數學", "rooms": []}],
        "6": [{"teacher": "李牧", "subject": "數學", "rooms": []}, {"teacher": "曾美芝", "subject": "數學", "rooms": []}],
        "7": [{"teacher": "張秀玫", "subject": "自主學習", "rooms": []}]
      },
      "星期四": {
        "1": [{"teacher": "呂宜霖", "subject": "學習回饋", "rooms": []}],
        "2": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "3": [{"teacher": "羅雅苓", "subject": "英語文", "rooms": []}, {"teacher": "鄒湘平", "subject": "英語文", "rooms": []}],
        "4": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "5": [{"teacher": "唐祥程", "subject": "AI", "rooms": []}, {"teacher": "陳昱澐", "subject": "AI", "rooms": []}],
        "6": [{"teacher": "唐祥程", "subject": "AI", "rooms": []}, {"teacher": "陳昱澐", "subject": "AI", "rooms": []}],
        "7": [{"teacher": "唐祥程", "subject": "AI", "rooms": []}, {"teacher": "陳昱澐", "subject": "AI", "rooms": []}]
      },
      "星期五": {
        "1": [{"teacher": "張秀玫", "subject": "自主學習", "rooms": []}],
        "2": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "3": [{"teacher": "李牧", "subject": "數學", "rooms": []}, {"teacher": "曾美芝", "subject": "數學", "rooms": []}],
        "4": [{"teacher": "李牧", "subject": "數學", "rooms": []}, {"teacher": "曾美芝", "subject": "數學", "rooms": []}],
        "5": [{"teacher": "聯合報", "subject": "國寫思辨", "rooms": []}, {"teacher": "名敦", "subject": "國寫思辨", "rooms": []}],
        "6": [{"teacher": "聯合報", "subject": "國寫思辨", "rooms": []}, {"teacher": "名敦", "subject": "國寫思辨", "rooms": []}],
        "7": [{"teacher": "聯合報", "subject": "國寫思辨", "rooms": []}, {"teacher": "名敦", "subject": "國寫思辨", "rooms": []}]
      }
    },
    "高二理組": {
      "星期一": {
        "1": [{"teacher": "邱千芸", "subject": "學習回饋", "rooms": []}],
        "2": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "3": [{"teacher": "鄒湘平", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}],
        "4": [{"teacher": "鄒湘平", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}],
        "5": [{"teacher": "蔡佳玲", "subject": "物理", "rooms": []}],
        "6": [{"teacher": "蔡佳玲", "subject": "物理", "rooms": []}],
        "7": [{"teacher": "蔡佳玲", "subject": "物理", "rooms": []}]
      },
      "星期二": {
        "1": [{"teacher": "呂宜霖", "subject": "學習回饋", "rooms": []}],
        "2": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "3": [{"teacher": "鄒湘平", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}],
        "4": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "5": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "6": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "7": [{"teacher": "王妤文", "subject": "學習回饋", "rooms": []}]
      },
      "星期三": {
        "1": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "2": [{"teacher": "曾美芝", "subject": "自主學習", "rooms": []}],
        "3": [{"teacher": "李牧", "subject": "數學", "rooms": []}],
        "4": [{"teacher": "李牧", "subject": "數學", "rooms": []}],
        "5": [{"teacher": "蔡玉良", "subject": "地球科學", "rooms": []}],
        "6": [{"teacher": "蔡玉良", "subject": "地球科學", "rooms": []}],
        "7": [{"teacher": "王世宗", "subject": "生物", "rooms": []}]
      },
      "星期四": {
        "1": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "2": [{"teacher": "曾美芝", "subject": "自主學習", "rooms": []}],
        "3": [{"teacher": "蔡玉良", "subject": "地球科學", "rooms": []}],
        "4": [{"teacher": "王妤文", "subject": "學習回饋", "rooms": []}],
        "5": [{"teacher": "楊志元", "subject": "化學", "rooms": []}],
        "6": [{"teacher": "楊志元", "subject": "化學", "rooms": []}],
        "7": [{"teacher": "楊志元", "subject": "化學", "rooms": []}]
      },
      "星期五": {
        "1": [{"teacher": "曾美芝", "subject": "導師時間", "rooms": []}],
        "2": [{"teacher": "鄒湘平", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}],
        "3": [{"teacher": "王妤文", "subject": "學習回饋", "rooms": []}],
        "4": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "5": [{"teacher": "李牧", "subject": "數學", "rooms": []}],
        "6": [{"teacher": "李牧", "subject": "數學", "rooms": []}],
        "7": [{"teacher": "曾美芝", "subject": "自主學習", "rooms": []}]
      }
    },
    "高二文組": {
      "星期一": {
        "1": [{"teacher": "邱千芸", "subject": "學習回饋", "rooms": []}],
        "2": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "3": [{"teacher": "鄒湘平", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}],
        "4": [{"teacher": "鄒湘平", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}],
        "5": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "6": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "7": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}]
      },
      "星期二": {
        "1": [{"teacher": "呂宜霖", "subject": "學習回饋", "rooms": []}],
        "2": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "3": [{"teacher": "鄒湘平", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}],
        "4": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "5": [{"teacher": "何文達", "subject": "地理", "rooms": []}],
        "6": [{"teacher": "何文達", "subject": "地理", "rooms": []}],
        "7": [{"teacher": "王妤文", "subject": "學習回饋", "rooms": []}]
      },
      "星期三": {
        "1": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "2": [{"teacher": "曾美芝", "subject": "自主學習", "rooms": []}],
        "3": [{"teacher": "曾美芝", "subject": "數學", "rooms": []}],
        "4": [{"teacher": "曾美芝", "subject": "數學", "rooms": []}],
        "5": [{"teacher": "何文達", "subject": "地理", "rooms": []}],
        "6": [{"teacher": "何文達", "subject": "地理", "rooms": []}],
        "7": [{"teacher": "何文達", "subject": "地理", "rooms": []}]
      },
      "星期四": {
        "1": [{"teacher": "張秀玫", "subject": "國語文", "rooms": []}],
        "2": [{"teacher": "曾美芝", "subject": "自主學習", "rooms": []}],
        "3": [{"teacher": "陳瑋筠", "subject": "歷史", "rooms": []}],
        "4": [{"teacher": "王妤文", "subject": "學習回饋", "rooms": []}],
        "5": [{"teacher": "陳瑋筠", "subject": "公民與社會", "rooms": []}],
        "6": [{"teacher": "陳瑋筠", "subject": "公民與社會", "rooms": []}],
        "7": [{"teacher": "陳瑋筠", "subject": "公民與社會", "rooms": []}]
      },
      "星期五": {
        "1": [{"teacher": "曾美芝", "subject": "導師時間", "rooms": []}],
        "2": [{"teacher": "鄒湘平", "subject": "英語文", "rooms": []}, {"teacher": "莊旭惠", "subject": "英語文", "rooms": []}],
        "3": [{"teacher": "王妤文", "subject": "學習回饋", "rooms": []}],
        "4": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "5": [{"teacher": "曾美芝", "subject": "數學", "rooms": []}],
        "6": [{"teacher": "曾美芝", "subject": "數學", "rooms": []}],
        "7": [{"teacher": "曾美芝", "subject": "自主學習", "rooms": []}]
      }
    },
    "高三理組": {
      "星期一": {
        "1": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "2": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "3": [{"teacher": "蔡玉良", "subject": "物理", "rooms": []}],
        "4": [{"teacher": "蔡玉良", "subject": "物理", "rooms": []}],
        "5": [{"teacher": "之宇", "subject": "英語文", "rooms": []}],
        "6": [{"teacher": "之宇", "subject": "英語文", "rooms": []}],
        "7": [{"teacher": "之宇", "subject": "英語文", "rooms": []}]
      },
      "星期二": {
        "1": [{"teacher": "劉玉華", "subject": "學習回饋", "rooms": []}],
        "2": [{"teacher": "王世宗", "subject": "生物", "rooms": []}],
        "3": [{"teacher": "蔡玉良", "subject": "物理", "rooms": []}],
        "4": [{"teacher": "蔡玉良", "subject": "物理", "rooms": []}],
        "5": [{"teacher": "蔡玉良", "subject": "地球科學", "rooms": []}],
        "6": [{"teacher": "蔡玉良", "subject": "地球科學", "rooms": []}],
        "7": [{"teacher": "王世宗", "subject": "生物", "rooms": []}]
      },
      "星期三": {
        "1": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "2": [{"teacher": "楊志元", "subject": "化學", "rooms": []}],
        "3": [{"teacher": "楊志元", "subject": "化學", "rooms": []}],
        "4": [{"teacher": "蔡玉良", "subject": "地球科學", "rooms": []}],
        "5": [{"teacher": "之宇", "subject": "英語文", "rooms": []}],
        "6": [{"teacher": "之宇", "subject": "英語文", "rooms": []}],
        "7": [{"teacher": "之宇", "subject": "英語文", "rooms": []}]
      },
      "星期四": {
        "1": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "2": [{"teacher": "楊志元", "subject": "化學", "rooms": []}],
        "3": [{"teacher": "楊志元", "subject": "化學", "rooms": []}],
        "4": [{"teacher": "蔡玉良", "subject": "地球科學", "rooms": []}],
        "5": [{"teacher": "蘇試", "subject": "數學甲", "rooms": []}],
        "6": [{"teacher": "蘇試", "subject": "數學甲", "rooms": []}],
        "7": [{"teacher": "蘇試", "subject": "數學甲", "rooms": []}]
      },
      "星期五": {
        "1": [{"teacher": "劉玉華", "subject": "導師時間", "rooms": []}],
        "2": [{"teacher": "王妤文", "subject": "學習回饋", "rooms": []}],
        "3": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "4": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "5": [{"teacher": "蘇試", "subject": "數學甲", "rooms": []}],
        "6": [{"teacher": "蘇試", "subject": "數學甲", "rooms": []}],
        "7": [{"teacher": "蘇試", "subject": "數學甲", "rooms": []}]
      }
    },
    "高三文組": {
      "星期一": {
        "1": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "2": [{"teacher": "林全", "subject": "地理", "rooms": []}],
        "3": [{"teacher": "林全", "subject": "地理", "rooms": []}],
        "4": [{"teacher": "林全", "subject": "地理", "rooms": []}],
        "5": [{"teacher": "之宇", "subject": "英語文", "rooms": []}],
        "6": [{"teacher": "之宇", "subject": "英語文", "rooms": []}],
        "7": [{"teacher": "之宇", "subject": "英語文", "rooms": []}]
      },
      "星期二": {
        "1": [{"teacher": "劉玉華", "subject": "學習回饋", "rooms": []}],
        "2": [{"teacher": "趙明", "subject": "公民與社會", "rooms": []}],
        "3": [{"teacher": "趙明", "subject": "公民與社會", "rooms": []}],
        "4": [{"teacher": "趙明", "subject": "公民與社會", "rooms": []}],
        "5": [{"teacher": "李偉", "subject": "歷史", "rooms": []}],
        "6": [{"teacher": "李偉", "subject": "歷史", "rooms": []}],
        "7": [{"teacher": "李偉", "subject": "歷史", "rooms": []}]
      },
      "星期三": {
        "1": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "2": [{"teacher": "李偉", "subject": "歷史", "rooms": []}],
        "3": [{"teacher": "李偉", "subject": "歷史", "rooms": []}],
        "4": [{"teacher": "李偉", "subject": "歷史", "rooms": []}],
        "5": [{"teacher": "之宇", "subject": "英語文", "rooms": []}],
        "6": [{"teacher": "之宇", "subject": "英語文", "rooms": []}],
        "7": [{"teacher": "之宇", "subject": "英語文", "rooms": []}]
      },
      "星期四": {
        "1": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "2": [{"teacher": "林全", "subject": "地理", "rooms": []}],
        "3": [{"teacher": "林全", "subject": "地理", "rooms": []}],
        "4": [{"teacher": "林全", "subject": "地理", "rooms": []}],
        "5": [{"teacher": "王志遠", "subject": "數學乙", "rooms": []}],
        "6": [{"teacher": "王志遠", "subject": "數學乙", "rooms": []}],
        "7": [{"teacher": "王志遠", "subject": "數學乙", "rooms": []}]
      },
      "星期五": {
        "1": [{"teacher": "劉玉華", "subject": "導師時間", "rooms": []}],
        "2": [{"teacher": "王妤文", "subject": "學習回饋", "rooms": []}],
        "3": [{"teacher": "江霂歖", "subject": "體育", "rooms": []}],
        "4": [{"teacher": "劉玉華", "subject": "國語文", "rooms": []}],
        "5": [{"teacher": "王志遠", "subject": "數學乙", "rooms": []}],
        "6": [{"teacher": "王志遠", "subject": "數學乙", "rooms": []}],
        "7": [{"teacher": "王志遠", "subject": "數學乙", "rooms": []}]
      }
    }
  },
  "roomSchedule": {},
  "rooms": [],
  "issues": [],
  "meta": {
    "note": "114學年度暑期輔導課程表 (115.07.01 ~ 115.07.28)",
    "generatedFrom": ["暑輔教師課表0603.pdf", "暑輔班級課表0603.pdf"],
    "finalVersion": "v1-summer"
  }
};

// =========================================================================
// ⚠️ 備份存檔：新生銜接 舊課表資料
// (目前系統已設定改為「只顯示暑輔課表」，此處資料不會顯示，保留僅供備份更新使用)
// =========================================================================
const BRIDGING_DATA = (function() {
    if (typeof DATA === 'undefined') return null;
    const data = JSON.parse(JSON.stringify(DATA));
    
    const graduatingClasses = ["國九A", "國九B", "高三理組", "高三文組"];
    const bridgingClasses = ["新七A", "新七B", "新高一"];
    
    // 1. 清除畢業班級，並加入新生班級
    data.classes = data.classes.filter(c => !graduatingClasses.includes(c));
    bridgingClasses.forEach(c => {
        if (!data.classes.includes(c)) data.classes.push(c);
    });
    
    // 2. 清除畢業班在所有課表的紀錄，釋放時段
    graduatingClasses.forEach(c => delete data.classSchedule[c]);
    ['teacherSchedule', 'roomSchedule'].forEach(scheduleType => {
        if (!data[scheduleType]) return;
        for (let entity in data[scheduleType]) {
            for (let day in data[scheduleType][entity]) {
                for (let period in data[scheduleType][entity][day]) {
                    data[scheduleType][entity][day][period] = data[scheduleType][entity][day][period]
                        .map(lesson => {
                            if (lesson.classes) {
                                lesson.classes = lesson.classes.filter(c => !graduatingClasses.includes(c));
                            }
                            if (lesson.rawClass && graduatingClasses.includes(lesson.rawClass)) {
                                lesson._remove = true;
                            }
                            return lesson;
                        })
                        .filter(lesson => !lesson._remove && (lesson.classes ? lesson.classes.length > 0 : true));
                    
                    if (data[scheduleType][entity][day][period].length === 0) {
                        delete data[scheduleType][entity][day][period];
                    }
                }
            }
        }
    });
    
    // 3. 全新定義新生銜接週的精準課表
    const bridgingInput = {
        "新高一": {
            "星期一": {
                1: { t: ["張秀玫"], s: "導師時間" },
                2: { t: ["陳瑋筠"], s: "社會探究與踏查" },
                3: { t: ["陳瑋筠"], s: "社會探究與踏查" },
                4: { t: ["曾美芝"], s: "學習實踐與行動管理" },
                5: { t: ["之宇"], s: "英文銜接強化" },
                6: { t: ["之宇"], s: "英文銜接強化" },
                7: { t: ["蔡玉良"], s: "自然銜接強化" }
            },
            "星期二": {
                1: { t: ["張秀玫"], s: "國文素養" },
                2: { t: ["江霂歖"], s: "體育" },
                3: { t: ["曾美芝"], s: "學習實踐與行動管理" },
                4: { t: ["蔡玉良"], s: "自然銜接強化" },
                5: { t: ["蔡玉良"], s: "自然銜接強化" },
                6: { t: ["蔡玉良"], s: "自然銜接強化" },
                7: { t: ["陳瑋筠"], s: "社會探究與踏查" }
            },
            "星期三": {
                1: { t: ["陳瑋筠"], s: "社會探究與踏查" }, // <-- 已與星期四第7節對調
                2: { t: ["江明岳"], s: "創意思考與跨域探索" },
                3: { t: ["江明岳"], s: "創意思考與跨域探索" },
                4: { t: ["江明岳"], s: "創意思考與跨域探索" },
                5: { t: ["李牧"], s: "數學銜接強化" },
                6: { t: ["李牧"], s: "數學銜接強化" },
                7: { t: ["張秀玫"], s: "國文素養" }
            },
            "星期四": {
                1: { t: ["張秀玫"], s: "國文素養" },
                2: { t: ["江霂歖"], s: "體育" },
                3: { t: ["李牧"], s: "數學銜接強化" },
                4: { t: ["李牧"], s: "數學銜接強化" },
                5: { t: ["之宇"], s: "英文銜接強化" },
                6: { t: ["之宇"], s: "英文銜接強化" },
                7: { t: ["簡珮瑜"], s: "學習歷程與生涯探索" } // <-- 已與星期三第1節對調
            }
        },
        "新七A": {
            "星期一": {
                1: { t: ["倪世斌"], s: "科技" },
                2: { t: ["莊旭惠", "羅雅苓", "邱千芸"], s: "英文分組學習" },
                3: { t: ["江霂歖"], s: "體育" },
                4: { t: ["劉玉華"], s: "國文素養" },
                5: { t: ["曾美芝", "桂松山", "吳宇綸"], s: "數學銜接學習" },
                6: { t: ["曾美芝", "桂松山", "吳宇綸"], s: "數學銜接學習" },
                7: { t: ["莊旭惠"], s: "導師時間" }
            },
            "星期二": {
                1: { t: ["王世宗"], s: "自然銜接學習" },
                2: { t: ["莊旭惠"], s: "品德力與生活素養" },
                3: { t: ["王妤文", "Roja", "Chad", "Gina"], s: "ESL分組學習" },
                4: { t: ["王妤文", "Roja", "Chad", "Gina"], s: "ESL分組學習" },
                5: { t: ["江霂歖"], s: "體育" },
                6: { t: ["曾美芝", "桂松山", "吳宇綸"], s: "數學銜接學習" },
                7: { t: ["曾美芝", "桂松山", "吳宇綸"], s: "數學銜接學習" }
            },
            "星期三": {
                1: { t: ["吳雯菁"], s: "走讀聖心校園" },
                2: { t: ["劉玉華"], s: "國文素養" },
                3: { t: ["陳瑋筠"], s: "走讀聖心校園" },
                4: { t: ["莊旭惠", "羅雅苓", "邱千芸"], s: "英文分組學習" },
                5: { t: ["王妤文", "Roja", "Chad", "Gina"], s: "ESL分組學習" },
                6: [
                    { t: ["王妤文", "Roja", "Chad", "Gina"], s: "ESL分組學習(17)" },
                    { t: ["曾美芝"], s: "學習策略與自我管理(24)" }
                ],
                7: [
                    { t: ["王世宗"], s: "自然銜接學習(17)" },
                    { t: ["曾美芝"], s: "學習策略與自我管理(24)" }
                ]
            },
            "星期四": {
                1: { t: ["劉玉華"], s: "國文素養" },
                2: { t: ["吳雯菁"], s: "走讀聖心校園" },
                3: { t: ["莊旭惠"], s: "品德力與生活素養" },
                4: { t: ["王妤文", "Roja", "Chad", "Gina"], s: "ESL分組學習" },
                5: { t: ["陳瑋筠"], s: "走讀聖心校園" },
                6: { t: ["莊旭惠", "羅雅苓", "邱千芸"], s: "英文分組學習" },
                7: { t: ["孔令堅"], s: "社會情緒學習" }
            }
        },
        "新七B": {
            "星期一": {
                1: { t: ["王世宗"], s: "自然銜接學習" },
                2: { t: ["莊旭惠", "羅雅苓", "邱千芸"], s: "英文分組學習" },
                3: { t: ["張秀玫"], s: "國文素養" },
                4: { t: ["莊旭惠"], s: "品德力與生活素養" },
                5: { t: ["曾美芝", "桂松山", "吳宇綸"], s: "數學銜接學習" },
                6: { t: ["曾美芝", "桂松山", "吳宇綸"], s: "數學銜接學習" },
                7: { t: ["王世宗"], s: "自然銜接學習" }
            },
            "星期二": {
                1: { t: ["倪世斌"], s: "科技" },
                2: { t: ["張秀玫"], s: "國文素養" },
                3: { t: ["王妤文", "Roja", "Chad", "Gina"], s: "ESL分組學習" },
                4: { t: ["王妤文", "Roja", "Chad", "Gina"], s: "ESL分組學習" },
                5: { t: ["陳瑋筠"], s: "走讀聖心校園" },
                6: { t: ["曾美芝", "桂松山", "吳宇綸"], s: "數學銜接學習" },
                7: { t: ["曾美芝", "桂松山", "吳宇綸"], s: "數學銜接學習" }
            },
            "星期三": {
                1: [
                    { t: ["張秀玫"], s: "國文素養(17)" },
                    { t: ["孔令堅"], s: "社會情緒學習(24)" }
                ],
                2: { t: ["吳雯菁"], s: "走讀聖心校園" },
                3: [
                    { t: ["江霂歖"], s: "體育(17)" },
                    { t: ["吳雯菁"], s: "走讀聖心校園(24)" }
                ],
                4: { t: ["莊旭惠", "羅雅苓", "邱千芸"], s: "英文分組學習" },
                5: { t: ["王妤文", "Roja", "Chad", "Gina"], s: "ESL分組學習" },
                6: [
                    { t: ["王妤文", "Roja", "Chad", "Gina"], s: "ESL分組學習(17)" },
                    { t: ["莊旭惠"], s: "品德力與生活素養(24)" }
                ],
                7: [
                    { t: ["陳瑋筠"], s: "走讀聖心校園(17)" },
                    { t: ["陳瑋筠"], s: "導師時間(24)" }
                ]
            },
            "星期四": {
                1: { t: ["陳瑋筠"], s: "走讀聖心校園" },
                2: { t: ["曾美芝"], s: "學習策略與自我管理" },
                3: { t: ["曾美芝"], s: "學習策略與自我管理" },
                4: { t: ["王妤文", "Roja", "Chad", "Gina"], s: "ESL分組學習" },
                5: { t: ["張秀玫"], s: "國文素養" },
                6: { t: ["莊旭惠", "羅雅苓", "邱千芸"], s: "英文分組學習" },
                7: { t: ["江霂歖"], s: "體育" }
            }
        }
    };

    const newTeachers = ["江明岳"];
    newTeachers.forEach(t => {
        if (!data.teachers.includes(t)) data.teachers.push(t);
    });

    // 4. 將新生課表推回總資料中
    for (let className in bridgingInput) {
        data.classSchedule[className] = {};
        for (let day in bridgingInput[className]) {
            data.classSchedule[className][day] = {};
            for (let period in bridgingInput[className][day]) {
                const infoOrArray = bridgingInput[className][day][period];
                const infoArray = Array.isArray(infoOrArray) ? infoOrArray : [infoOrArray];
                
                const combinedSubject = infoArray.map(info => info.s).join(" / ");
                const uniqueTeachers = [...new Set(infoArray.flatMap(info => info.t))];
                
                data.classSchedule[className][day][period] = [{
                    teacher: uniqueTeachers.join(" / "),
                    subject: combinedSubject,
                    rooms: [] 
                }];
                
                infoArray.forEach(info => {
                    info.t.forEach(teacherName => {
                        if (!data.teacherSchedule[teacherName]) data.teacherSchedule[teacherName] = {};
                        if (!data.teacherSchedule[teacherName][day]) data.teacherSchedule[teacherName][day] = {};
                        if (!data.teacherSchedule[teacherName][day][period]) data.teacherSchedule[teacherName][day][period] = [];
                        
                        const alreadyHasClass = data.teacherSchedule[teacherName][day][period].some(l => l.classes && l.classes.includes(className));
                        if (!alreadyHasClass) {
                            data.teacherSchedule[teacherName][day][period].push({
                                subject: info.s, 
                                classes: [className],
                                rooms: []
                            });
                        }
                    });
                });
            }
        }
    }
    
    data.meta.note = "已更新最新調課進度 (新高一週一、三、四；新七A週一)";
    return data;
})();

// =========================================================================
// ⚠️ 備份存檔：期末考週 舊課表資料
// (目前系統已設定改為「只顯示暑輔課表」，此處資料不會顯示，保留僅供備份更新使用)
// =========================================================================
const FINAL_EXAM_DATA = (function() {
    if (typeof DATA === 'undefined') return null;
    const data = JSON.parse(JSON.stringify(DATA));
    const graduatingClasses = ["國九A", "國九B", "高三理組", "高三文組"];
    
    // 1. 清除畢業班級
    data.classes = data.classes.filter(c => !graduatingClasses.includes(c));
    
    // 2. 清除畢業班在所有課表的紀錄，釋放時段
    graduatingClasses.forEach(c => delete data.classSchedule[c]);
    ['teacherSchedule', 'roomSchedule'].forEach(scheduleType => {
        if (!data[scheduleType]) return;
        for (let entity in data[scheduleType]) {
            for (let day in data[scheduleType][entity]) {
                for (let period in data[scheduleType][entity][day]) {
                    data[scheduleType][entity][day][period] = data[scheduleType][entity][day][period]
                        .map(lesson => {
                            if (lesson.classes) {
                                lesson.classes = lesson.classes.filter(c => !graduatingClasses.includes(c));
                            }
                            if (lesson.rawClass && graduatingClasses.includes(lesson.rawClass)) {
                                lesson._remove = true;
                            }
                            return lesson;
                        })
                        .filter(lesson => !lesson._remove && (lesson.classes ? lesson.classes.length > 0 : true));
                    
                    if (data[scheduleType][entity][day][period].length === 0) {
                        delete data[scheduleType][entity][day][period];
                    }
                }
            }
        }
    });
    
    if (data.meta) {
        data.meta.note = "期末考期間已過濾畢業班級";
    }
    return data;
})();

// 套用各項教室指派規則並動態同步/生成各資料集的 roomSchedule 與 rooms 列表
function applyRoomRules(targetData) {
    if (!targetData) return;
    
    // 依教師與科目獲取教室名稱
    function getOverrideRoom(className, day, period, teacher, subject) {
        if (teacher && teacher.includes("Chad")) {
            return ["3F 多功能 e 化教室 (VR Room)"];
        }
        if (teacher && teacher.includes("Roja")) {
            return ["4F 分組教室(二)"];
        }
        if (teacher && teacher.includes("Gina")) {
            return ["4F 美術教室"];
        }
        if (teacher && teacher.includes("李牧") && className && className.includes("高二理組")) {
            return ["5F 自主學習教室(一)"];
        }
        if (teacher && teacher.includes("李牧") && className && className.includes("高一")) {
            return ["5F 自主學習教室(二)"];
        }
        if (className === "高一" && day === "星期四" && (period === "5" || period === "6" || period === "7") && subject && subject.includes("AI")) {
            return ["6F 電腦教室"];
        }
        return null;
    }
    
    // 1. 套用基本教室規則
    for (let className in targetData.classSchedule) {
        for (let day in targetData.classSchedule[className]) {
            for (let period in targetData.classSchedule[className][day]) {
                const lessons = targetData.classSchedule[className][day][period];
                lessons.forEach(l => {
                    const override = getOverrideRoom(className, day, period, l.teacher, l.subject);
                    if (override) {
                        l.rooms = override;
                    }
                });
            }
        }
    }
    
    // 2. 套用英文分組課有一組在 5F 視聽教室的規則
    for (let className in targetData.classSchedule) {
        for (let day in targetData.classSchedule[className]) {
            for (let period in targetData.classSchedule[className][day]) {
                const lessons = targetData.classSchedule[className][day][period];
                const engLessons = lessons.filter(l => l.subject && (l.subject.includes("英語文") || l.subject.includes("ESL") || l.subject.includes("英文")));
                if (engLessons.length > 1) {
                    for (const t of ["莊旭惠", "鄒湘平", "羅雅苓"]) {
                        const target = engLessons.find(l => l.teacher && l.teacher.includes(t));
                        if (target) {
                            target.rooms = ["5F 視聽教室"];
                            break;
                        }
                    }
                }
            }
        }
    }
    
    // 3. 同步至 teacherSchedule (先清除再重填以保持雙向一致)
    for (let teacher in targetData.teacherSchedule) {
        for (let day in targetData.teacherSchedule[teacher]) {
            for (let period in targetData.teacherSchedule[teacher][day]) {
                const lessons = targetData.teacherSchedule[teacher][day][period];
                lessons.forEach(l => { l.rooms = []; });
            }
        }
    }
    
    for (let className in targetData.classSchedule) {
        for (let day in targetData.classSchedule[className]) {
            for (let period in targetData.classSchedule[className][day]) {
                const classLessons = targetData.classSchedule[className][day][period];
                classLessons.forEach(cl => {
                    if (!cl.rooms || cl.rooms.length === 0) return;
                    
                    const teachers = cl.teacher.split("/").map(t => t.trim());
                    teachers.forEach(tName => {
                        if (targetData.teacherSchedule[tName] && 
                            targetData.teacherSchedule[tName][day] && 
                            targetData.teacherSchedule[tName][day][period]) {
                            
                            const teacherLessons = targetData.teacherSchedule[tName][day][period];
                            teacherLessons.forEach(tl => {
                                if (tl.classes && tl.classes.includes(className)) {
                                    tl.rooms = cl.rooms;
                                }
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
                const lessons = targetData.classSchedule[className][day][period];
                lessons.forEach(l => {
                    if (!l.rooms || l.rooms.length === 0) return;
                    
                    l.rooms.forEach(roomName => {
                        uniqueRooms.add(roomName);
                        
                        if (!targetData.roomSchedule[roomName]) {
                            targetData.roomSchedule[roomName] = {};
                        }
                        if (!targetData.roomSchedule[roomName][day]) {
                            targetData.roomSchedule[roomName][day] = {};
                        }
                        if (!targetData.roomSchedule[roomName][day][period]) {
                            targetData.roomSchedule[roomName][day][period] = [];
                        }
                        
                        const exists = targetData.roomSchedule[roomName][day][period].some(
                            r => r.rawClass === className || (r.classes && r.classes.includes(className))
                        );
                        if (!exists) {
                            targetData.roomSchedule[roomName][day][period].push({
                                subject: l.subject,
                                teacher: l.teacher,
                                rawClass: className,
                                classes: [className]
                            });
                        }
                    });
                });
            }
        }
    }
    
    // 合併原 DATA 存在的教室（適用於學期相關課表）
    if (targetData !== SUMMER_DATA && typeof DATA !== 'undefined' && DATA.rooms) {
        DATA.rooms.forEach(r => uniqueRooms.add(r));
    }
    
    targetData.rooms = Array.from(uniqueRooms).sort();
}

// 重新根據 classSchedule 建立暑輔的 teacherSchedule，以補齊 classes 名單並去除重複或格式錯誤的課程
function rebuildSummerTeacherSchedule() {
    if (typeof SUMMER_DATA === 'undefined' || !SUMMER_DATA.classSchedule) return;
    
    const newTeacherSchedule = {};
    
    if (SUMMER_DATA.teachers) {
        SUMMER_DATA.teachers.forEach(tName => {
            newTeacherSchedule[tName] = {};
        });
    }
    
    for (let className in SUMMER_DATA.classSchedule) {
        for (let day in SUMMER_DATA.classSchedule[className]) {
            for (let period in SUMMER_DATA.classSchedule[className][day]) {
                const lessons = SUMMER_DATA.classSchedule[className][day][period];
                lessons.forEach(l => {
                    if (!l.teacher) return;
                    
                    const teachers = l.teacher.split("/").map(t => t.trim());
                    teachers.forEach(tName => {
                        if (!newTeacherSchedule[tName]) {
                            newTeacherSchedule[tName] = {};
                        }
                        if (!newTeacherSchedule[tName][day]) {
                            newTeacherSchedule[tName][day] = {};
                        }
                        if (!newTeacherSchedule[tName][day][period]) {
                            newTeacherSchedule[tName][day][period] = [];
                        }
                        
                        let existing = newTeacherSchedule[tName][day][period].find(el => el.subject === l.subject);
                        if (!existing) {
                            existing = {
                                subject: l.subject,
                                classes: [],
                                rooms: l.rooms || []
                            };
                            newTeacherSchedule[tName][day][period].push(existing);
                        }
                        
                        if (!existing.classes.includes(className)) {
                            existing.classes.push(className);
                        }
                    });
                });
            }
        }
    }
    
    SUMMER_DATA.teacherSchedule = newTeacherSchedule;
}

// 補齊暑輔國八B、國九A/B的英文與數學分組課中缺少的第三位老師
function fixMissingSummerGroupTeachers() {
    if (typeof SUMMER_DATA === 'undefined' || !SUMMER_DATA.classSchedule) return;
    
    const sched = SUMMER_DATA.classSchedule;
    
    // 1. 國八B 補上 莊旭惠 (英語文) 和 蔡佳玲 (數學)
    const j8bEnglishSlots = [
        { day: "星期三", periods: ["1", "2"] },
        { day: "星期四", periods: ["2"] },
        { day: "星期五", periods: ["3"] }
    ];
    j8bEnglishSlots.forEach(slot => {
        if (sched["國八B"] && sched["國八B"][slot.day]) {
            slot.periods.forEach(p => {
                const lessons = sched["國八B"][slot.day][p] || [];
                const exists = lessons.some(l => l.teacher === "莊旭惠" && l.subject === "英語文");
                if (!exists) {
                    lessons.push({ teacher: "莊旭惠", subject: "英語文", rooms: [] });
                }
            });
        }
    });

    const j8bMathSlots = [
        { day: "星期二", periods: ["2"] },
        { day: "星期四", periods: ["3"] },
        { day: "星期五", periods: ["1", "2"] }
    ];
    j8bMathSlots.forEach(slot => {
        if (sched["國八B"] && sched["國八B"][slot.day]) {
            slot.periods.forEach(p => {
                const lessons = sched["國八B"][slot.day][p] || [];
                const exists = lessons.some(l => l.teacher === "蔡佳玲" && l.subject === "數學");
                if (!exists) {
                    lessons.push({ teacher: "蔡佳玲", subject: "數學", rooms: [] });
                }
            });
        }
    });

    // 2. 國九A 與 國九B 補上 莊旭惠 (英語文) 和 吳宇綸 (數學)
    const j9EnglishSlots = [
        { day: "星期一", periods: ["1"] },
        { day: "星期二", periods: ["1"] },
        { day: "星期四", periods: ["1"] },
        { day: "星期五", periods: ["1"] }
    ];
    ["國九A", "國九B"].forEach(className => {
        j9EnglishSlots.forEach(slot => {
            if (sched[className] && sched[className][slot.day]) {
                slot.periods.forEach(p => {
                    const lessons = sched[className][slot.day][p] || [];
                    const exists = lessons.some(l => l.teacher === "莊旭惠" && l.subject === "英語文");
                    if (!exists) {
                        lessons.push({ teacher: "莊旭惠", subject: "英語文", rooms: [] });
                    }
                });
            }
        });
    });

    const j9MathSlots = [
        { day: "星期三", periods: ["1", "2", "3"] },
        { day: "星期四", periods: ["4"] },
        { day: "星期五", periods: ["4"] }
    ];
    ["國九A", "國九B"].forEach(className => {
        j9MathSlots.forEach(slot => {
            if (sched[className] && sched[className][slot.day]) {
                slot.periods.forEach(p => {
                    const lessons = sched[className][slot.day][p] || [];
                    const exists = lessons.some(l => l.teacher === "吳宇綸" && l.subject === "數學");
                    if (!exists) {
                        lessons.push({ teacher: "吳宇綸", subject: "數學", rooms: [] });
                    }
                });
            }
        });
    });
}

// 設定暑輔國七新生營隊課程（星期三、四、五的第 5~7 節分三組）
function setupSummerCamps() {
    if (typeof SUMMER_DATA === 'undefined' || !SUMMER_DATA.classSchedule) return;
    
    const sched = SUMMER_DATA.classSchedule;
    
    // 新增營隊教師到教師清單中
    const newCampTeachers = ["星媽", "賴雅麗", "邏輯酷", "黃興國"];
    newCampTeachers.forEach(t => {
        if (SUMMER_DATA.teachers && !SUMMER_DATA.teachers.includes(t)) {
            SUMMER_DATA.teachers.push(t);
        }
    });
    
    const campData = {
        "星期三": [
            { teacher: "唐祥程", subject: "3D列印", rooms: [] },
            { teacher: "星媽", subject: "匹克球", rooms: [] },
            { teacher: "蔡佳玲", subject: "科學魔法營", rooms: [] }
        ],
        "星期四": [
            { teacher: "江霂歖", subject: "高爾夫球", rooms: [] },
            { teacher: "賴雅麗", subject: "創意美學", rooms: [] },
            { teacher: "邏輯酷", subject: "遊戲設計", rooms: [] }
        ],
        "星期五": [
            { teacher: "王世宗", subject: "生命科學", rooms: [] },
            { teacher: "江霂歖", subject: "活力球類", rooms: [] },
            { teacher: "黃興國", subject: "機器人", rooms: [] }
        ]
    };
    
    const targetClasses = ["國七A", "國七B"];
    const targetPeriods = ["5", "6", "7"];
    
    targetClasses.forEach(className => {
        if (!sched[className]) return;
        for (let day in campData) {
            if (!sched[className][day]) continue;
            targetPeriods.forEach(p => {
                // 用三組營隊課程直接替換原本的「外聘/多元營隊」
                sched[className][day][p] = JSON.parse(JSON.stringify(campData[day]));
            });
        }
    });
}

// 執行暑輔國七營隊課程設定
setupSummerCamps();

// 執行暑輔分組課缺漏教師補齊
fixMissingSummerGroupTeachers();

// 執行暑輔教師課表重構（補齊班級名單與修正格式）
rebuildSummerTeacherSchedule();

// 執行各資料集教室邏輯重構
applyRoomRules(SUMMER_DATA);
if (typeof BRIDGING_DATA !== 'undefined' && BRIDGING_DATA) applyRoomRules(BRIDGING_DATA);
if (typeof FINAL_EXAM_DATA !== 'undefined' && FINAL_EXAM_DATA) applyRoomRules(FINAL_EXAM_DATA);
