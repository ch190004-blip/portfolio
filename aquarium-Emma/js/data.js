/* =========================
   學校原始課表資料庫 (獨立檔案)
========================= */
const SCHOOL_DATA = {
    periods: [
        { period: 1, start: "08:10", end: "09:00" }, { period: 2, start: "09:10", end: "10:00" },
        { period: 3, start: "10:10", end: "11:00" }, { period: 4, start: "11:05", end: "11:55" },
        { period: 5, start: "12:55", end: "13:45" }, { period: 6, start: "13:55", end: "14:45" },
        { period: 7, start: "14:50", end: "15:40" }, { period: 8, start: "15:50", end: "16:40" },
        { period: 9, start: "16:45", end: "17:30" }
    ],
    classSchedule: {
        "高一": {
            "星期一": {
                "1": [{"teacher":"陳瑋筠","subject":"公民與社會"}],
                "2": [{"teacher":"倪世斌","subject":"資訊科技"}],
                "3": [{"teacher":"曾美芝","subject":"自主學習"}],
                "4": [{"teacher":"張秀玫","subject":"國語文"}],
                "5": [{"teacher":"王妤文/Roja/Chad","subject":"英語聽講"}],
                "6": [{"teacher":"江霂歖","subject":"體育"}],
                "7": [{"teacher":"何文達","subject":"地理"}],
                "8": [{"teacher":"張秀玫","subject":"國語文(輔)"}],
                "9": [{"teacher":"蔡玉良","subject":"自然探究"}]
            },
            "星期二": {
                "1": [{"teacher":"何文達","subject":"地理"}],
                "2": [{"teacher":"羅雅苓/鄒湘平","subject":"英語文"}],
                "3": [{"teacher":"羅雅苓/鄒湘平","subject":"英語文"}],
                "4": [{"teacher":"劉綺芍","subject":"倫理思辨"}],
                "5": [{"teacher":"選修群","subject":"多元選修"}],
                "6": [{"teacher":"選修群","subject":"多元選修"}],
                "7": [{"teacher":"張秀玫","subject":"國語文"}],
                "8": [{"teacher":"何文達","subject":"地理(輔)"}],
                "9": [{"teacher":"外師群","subject":"英文素養"}]
            },
            "星期三": {
                "1": [{"teacher":"羅雅苓/鄒湘平","subject":"英語文"}],
                "2": [{"teacher":"陳瑋筠","subject":"歷史"}],
                "3": [{"teacher":"曾美芝/李牧","subject":"數學"}],
                "4": [{"teacher":"曾美芝/李牧","subject":"數學"}],
                "5": [{"teacher":"陳瑋筠","subject":"公民與社會"}],
                "6": [{"teacher":"江霂歖","subject":"體育"}],
                "7": [{"teacher":"外師群","subject":"專題研究-ESL"}],
                "8": [{"teacher":"外師群","subject":"ESL(輔)"}],
                "9": [{"teacher":"曾美芝","subject":"數學探究"}]
            },
            "星期四": {
                "1": [{"teacher":"楊志元","subject":"化學"}],
                "2": [{"teacher":"楊志元","subject":"化學"}],
                "3": [{"teacher":"蔡玉良","subject":"地球科學"}],
                "4": [{"teacher":"蔡玉良","subject":"地球科學"}],
                "5": [{"teacher":"曾美芝/李牧","subject":"數學"}],
                "6": [{"teacher":"曾美芝/李牧","subject":"數學"}],
                "7": [{"teacher":"張秀玫","subject":"國語文"}],
                "8": [{"teacher":"王世宗","subject":"生物(輔)"}],
                "9": [{"teacher":"張秀玫","subject":"語文素養-新詩"}]
            },
            "星期五": {
                "1": [{"teacher":"羅雅苓/鄒湘平","subject":"英語文"}],
                "2": [{"teacher":"陳瑋筠","subject":"歷史"}],
                "3": [{"teacher":"曾淑汝","subject":"本土語言"}],
                "4": [{"teacher":"張秀玫","subject":"國語文"}],
                "5": [{"teacher":"曾美芝","subject":"班會"}],
                "6": [{"teacher":"曾美芝","subject":"團體活動"}],
                "7": [{"teacher":"曾美芝","subject":"團體活動"}],
                "8": [{"teacher":"曾美芝","subject":"數學(輔)"}],
                "9": [{"teacher":"羅雅苓/鄒湘平","subject":"英文素養-ESL"}]
            }
        },
        "高二理組": {
            "星期一": {
                "1": [{"teacher":"劉玉華","subject":"國語文"}],
                "2": [{"teacher":"江霂歖","subject":"體育"}],
                "3": [{"teacher":"Chad/Gina","subject":"英文專題簡報實作"}],
                "4": [{"teacher":"王世宗","subject":"自然科學探究"}],
                "5": [{"teacher":"倪世斌","subject":"生活科技"}],
                "6": [{"teacher":"劉玉華","subject":"自主學習"}],
                "7": [{"teacher":"Chad/Gina","subject":"美術-ESL"}],
                "8": [{"teacher":"劉玉華","subject":"國語文(輔)"}],
                "9": [{"teacher":"蔡佳玲","subject":"自然探究"}]
            },
            "星期二": {
                "1": [{"teacher":"江霂歖","subject":"體育"}],
                "2": [{"teacher":"劉綺芍","subject":"生涯規劃"}],
                "3": [{"teacher":"蔡玉良","subject":"物理"}],
                "4": [{"teacher":"莊旭惠/王志遠","subject":"增廣補強"}],
                "5": [{"teacher":"王志遠","subject":"數位化數學"}],
                "6": [{"teacher":"王志遠","subject":"數位化數學"}],
                "7": [{"teacher":"倪世斌","subject":"生活科技"}],
                "8": [{"teacher":"莊/鄒","subject":"英語文(輔)"}],
                "9": [{"teacher":"莊/鄒","subject":"英文素養"}]
            },
            "星期三": {
                "1": [{"teacher":"劉玉華","subject":"國語文"}],
                "2": [{"teacher":"莊/鄒","subject":"英語文"}],
                "3": [{"teacher":"莊/鄒","subject":"英語文"}],
                "4": [{"teacher":"Chad/Gina","subject":"英文專題簡報實作"}],
                "5": [{"teacher":"蘇試","subject":"數學A"}],
                "6": [{"teacher":"蘇試","subject":"數學A"}],
                "7": [{"teacher":"蔡玉良","subject":"物理"}],
                "8": [{"teacher":"王世宗","subject":"生物(輔)"}],
                "9": [{"teacher":"王/Gina","subject":"ESL(素養)"}]
            },
            "星期四": {
                "1": [{"teacher":"翟洛嫻","subject":"音樂"}],
                "2": [{"teacher":"劉玉華","subject":"國語文"}],
                "3": [{"teacher":"蘇試","subject":"數學A"}],
                "4": [{"teacher":"蘇試","subject":"數學A"}],
                "5": [{"teacher":"楊政忠","subject":"全民國防教育"}],
                "6": [{"teacher":"楊志元","subject":"選修化學"}],
                "7": [{"teacher":"楊志元","subject":"選修化學"}],
                "8": [{"teacher":"蔡佳玲","subject":"物理(輔)"}],
                "9": [{"teacher":"劉玉華/名敦","subject":"國文寫作"}]
            },
            "星期五": {
                "1": [{"teacher":"劉玉華","subject":"國語文"}],
                "2": [{"teacher":"王世宗","subject":"自然科學探究"}],
                "3": [{"teacher":"莊/鄒","subject":"英語文"}],
                "4": [{"teacher":"莊/鄒","subject":"英語文"}],
                "5": [{"teacher":"劉玉華","subject":"班會"}],
                "6": [{"teacher":"劉玉華","subject":"團體活動"}],
                "7": [{"teacher":"劉玉華","subject":"團體活動"}],
                "8": [{"teacher":"蘇試","subject":"數學(輔)"}],
                "9": [{"teacher":"蘇試","subject":"數學探究"}]
            }
        },
        "高二文組": {
            "星期一": {
                "1": [{"teacher":"劉玉華","subject":"國語文"}],
                "2": [{"teacher":"江霂歖","subject":"體育"}],
                "3": [{"teacher":"Chad/Gina","subject":"英文專題簡報實作"}],
                "4": [{"teacher":"王世宗","subject":"自然科學探究"}],
                "5": [{"teacher":"倪世斌","subject":"生活科技"}],
                "6": [{"teacher":"劉玉華","subject":"學習"}],
                "7": [{"teacher":"Chad/Gina","subject":"美術-ESL"}],
                "8": [{"teacher":"劉玉華","subject":"國語文(輔)"}],
                "9": [{"teacher":"陳瑋筠","subject":"社會探究(歷史)"}]
            },
            "星期二": {
                "1": [{"teacher":"江霂歖","subject":"體育"}],
                "2": [{"teacher":"劉綺芍","subject":"生涯規劃"}],
                "3": [{"teacher":"陳瑋筠","subject":"探究與實作：歷史"}],
                "4": [{"teacher":"莊/劉/王","subject":"增廣補強"}],
                "5": [{"teacher":"劉玉華","subject":"文案設計"}],
                "6": [{"teacher":"劉玉華","subject":"文案設計"}],
                "7": [{"teacher":"倪世斌","subject":"生活科技"}],
                "8": [{"teacher":"莊/鄒","subject":"英語文(輔)"}],
                "9": [{"teacher":"莊/鄒","subject":"英文素養"}]
            },
            "星期三": {
                "1": [{"teacher":"劉玉華","subject":"國語文"}],
                "2": [{"teacher":"莊/鄒","subject":"英語文"}],
                "3": [{"teacher":"莊/鄒","subject":"英語文"}],
                "4": [{"teacher":"Chad/Gina","subject":"英文專題簡報實作"}],
                "5": [{"teacher":"王志遠","subject":"數學B"}],
                "6": [{"teacher":"王志遠","subject":"數學B"}],
                "7": [{"teacher":"何文達","subject":"地理與人文研究"}],
                "8": [{"teacher":"何文達","subject":"地理(輔)"}],
                "9": [{"teacher":"王/Gina","subject":"ESL(素養)"}]
            },
            "星期四": {
                "1": [{"teacher":"翟洛嫻","subject":"音樂"}],
                "2": [{"teacher":"劉玉華","subject":"國語文"}],
                "3": [{"teacher":"王志遠","subject":"數學B"}],
                "4": [{"teacher":"王志遠","subject":"數學B"}],
                "5": [{"teacher":"楊政忠","subject":"全民國防教育"}],
                "6": [{"teacher":"何文達","subject":"地理與人文研究"}],
                "7": [{"teacher":"陳瑋筠","subject":"探究與實作：歷史"}],
                "8": [{"teacher":"陳瑋筠","subject":"歷史(輔)"}],
                "9": [{"teacher":"劉玉華/名敦","subject":"國文寫作"}]
            },
            "星期五": {
                "1": [{"teacher":"劉玉華","subject":"國語文"}],
                "2": [{"teacher":"王世宗","subject":"自然科學探究"}],
                "3": [{"teacher":"莊/鄒","subject":"英語文"}],
                "4": [{"teacher":"莊/鄒","subject":"英語文"}],
                "5": [{"teacher":"劉玉華","subject":"班會"}],
                "6": [{"teacher":"劉玉華","subject":"團體活動"}],
                "7": [{"teacher":"劉玉華","subject":"團體活動"}],
                "8": [{"teacher":"王志遠","subject":"數學(輔)"}],
                "9": [{"teacher":"王志遠","subject":"數學探究"}]
            }
        },
        "高三理組": {
            "星期一": {
                "1": [{"teacher":"張秀玫","subject":"語文表達"}],
                "2": [{"teacher":"王世宗","subject":"選修生物"}],
                "3": [{"teacher":"吳宇綸","subject":"生活藝數"}],
                "4": [{"teacher":"吳宇綸","subject":"生活藝數"}],
                "5": [{"teacher":"蔡玉良","subject":"現象一"}],
                "6": [{"teacher":"蔡玉良","subject":"現象一"}],
                "7": [{"teacher":"之宇","subject":"英文增補"}],
                "8": [{"teacher":"之宇","subject":"英文(輔)"}],
                "9": [{"teacher":"之宇","subject":"英文素養"}]
            },
            "星期二": {
                "1": [{"teacher":"張秀玫","subject":"自主學習"}],
                "2": [{"teacher":"江霂歖","subject":"健康與護理"}],
                "3": [{"teacher":"張秀玫","subject":"專題閱讀"}],
                "4": [{"teacher":"外師群","subject":"美術"}],
                "5": [{"teacher":"蔡玉良","subject":"現象二與量子"}],
                "6": [{"teacher":"蔡玉良","subject":"現象二與量子"}],
                "7": [{"teacher":"江霂歖","subject":"體育"}],
                "8": [{"teacher":"蘇試","subject":"數學(輔)"}],
                "9": [{"teacher":"蘇試","subject":"數學探究"}]
            },
            "星期三": {
                "1": [{"teacher":"翟洛嫻","subject":"音樂"}],
                "2": [{"teacher":"江霂歖","subject":"體育"}],
                "3": [{"teacher":"孔令堅","subject":"藝術生活"}],
                "4": [{"teacher":"孔令堅","subject":"藝術生活"}],
                "5": [{"teacher":"李牧","subject":"數學甲"}],
                "6": [{"teacher":"李牧","subject":"數學甲"}],
                "7": [{"teacher":"張秀玫","subject":"語文表達"}],
                "8": [{"teacher":"張秀玫","subject":"自主學習"}],
                "9": [{"teacher":"陳昱澐","subject":"自然探究"}]
            },
            "星期四": {
                "1": [{"teacher":"王世宗","subject":"選修生物"}],
                "2": [{"teacher":"江霂歖","subject":"健康與護理"}],
                "3": [{"teacher":"李牧","subject":"數學甲"}],
                "4": [{"teacher":"李牧","subject":"數學甲"}],
                "5": [{"teacher":"之宇","subject":"專題閱讀"}],
                "6": [{"teacher":"之宇","subject":"英文作文"}],
                "7": [{"teacher":"之宇","subject":"英文作文"}],
                "8": [{"teacher":"張秀玫","subject":"專題閱讀(輔)"}],
                "9": [{"teacher":"外師群","subject":"ESL(素養)"}]
            },
            "星期五": {
                "1": [{"teacher":"楊志元","subject":"選修化學"}],
                "2": [{"teacher":"楊志元","subject":"選修化學"}],
                "3": [{"teacher":"外聘","subject":"家政"}],
                "4": [{"teacher":"外聘","subject":"家政"}],
                "5": [{"teacher":"張秀玫","subject":"自主學習"}],
                "6": [{"teacher":"張秀玫","subject":"班會"}],
                "7": [{"teacher":"張秀玫","subject":"團體活動"}],
                "8": [{"teacher":"王世宗","subject":"生物(輔)"}],
                "9": [{"teacher":"王世宗","subject":"自然探究"}]
            }
        },
        "高三文組": {
            "星期一": {
                "1": [{"teacher":"張秀玫","subject":"語文表達"}],
                "2": [{"teacher":"陳瑋筠","subject":"科技歷史"}],
                "3": [{"teacher":"何文達","subject":"社會環境"}],
                "4": [{"teacher":"何文達","subject":"民主政治"}],
                "5": [{"teacher":"陳瑋筠","subject":"科技歷史"}],
                "6": [{"teacher":"張秀玫","subject":"各類文學"}],
                "7": [{"teacher":"之宇","subject":"英文增補"}],
                "8": [{"teacher":"之宇","subject":"英文(輔)"}],
                "9": [{"teacher":"之宇","subject":"英文素養"}]
            },
            "星期二": {
                "1": [{"teacher":"張秀玫","subject":"自主學習"}],
                "2": [{"teacher":"江霂歖","subject":"健康與護理"}],
                "3": [{"teacher":"張秀玫","subject":"專題閱讀"}],
                "4": [{"teacher":"外師群","subject":"美術"}],
                "5": [{"teacher":"陳瑋筠","subject":"科技歷史"}],
                "6": [{"teacher":"何文達","subject":"民主政治"}],
                "7": [{"teacher":"江霂歖","subject":"體育"}],
                "8": [{"teacher":"曾美芝","subject":"數學(輔)"}],
                "9": [{"teacher":"曾美芝","subject":"數學探究"}]
            },
            "星期三": {
                "1": [{"teacher":"翟洛嫻","subject":"音樂"}],
                "2": [{"teacher":"江霂歖","subject":"體育"}],
                "3": [{"teacher":"孔令堅","subject":"藝術生活"}],
                "4": [{"teacher":"孔令堅","subject":"藝術生活"}],
                "5": [{"teacher":"曾美芝","subject":"數學乙"}],
                "6": [{"teacher":"曾美芝","subject":"數學乙"}],
                "7": [{"teacher":"張秀玫","subject":"語文表達"}],
                "8": [{"teacher":"張秀玫","subject":"自主學習"}],
                "9": [{"teacher":"陳瑋筠","subject":"社會探究"}]
            },
            "星期四": {
                "1": [{"teacher":"何文達","subject":"民主政治"}],
                "2": [{"teacher":"江霂歖","subject":"健康與護理"}],
                "3": [{"teacher":"曾美芝","subject":"數學乙"}],
                "4": [{"teacher":"曾美芝","subject":"數學乙"}],
                "5": [{"teacher":"之宇","subject":"專題閱讀"}],
                "6": [{"teacher":"之宇","subject":"英文作文"}],
                "7": [{"teacher":"之宇","subject":"英文作文"}],
                "8": [{"teacher":"張秀玫","subject":"專題閱讀(輔)"}],
                "9": [{"teacher":"外師群","subject":"ESL(素養)"}]
            },
            "星期五": {
                "1": [{"teacher":"何文達","subject":"社會環境"}],
                "2": [{"teacher":"何文達","subject":"社會環境"}],
                "3": [{"teacher":"外聘","subject":"家政"}],
                "4": [{"teacher":"外聘","subject":"家政"}],
                "5": [{"teacher":"張秀玫","subject":"自主學習"}],
                "6": [{"teacher":"張秀玫","subject":"班會"}],
                "7": [{"teacher":"張秀玫","subject":"團體活動"}],
                "8": [{"teacher":"何文達","subject":"公民與社會(輔)"}],
                "9": [{"teacher":"何文達","subject":"社會探究"}]
            }
        },
        "國七A": {
            "星期一": {
                "1": [{"teacher":"莊/邱/羅","subject":"英語文"}],
                "2": [{"teacher":"蔡/桂/陳","subject":"數學"}],
                "3": [{"teacher":"王世宗","subject":"健康教育"}],
                "4": [{"teacher":"吳雯菁","subject":"童軍"}],
                "5": [{"teacher":"陳昱澐","subject":"生活科技"}],
                "6": [{"teacher":"陳昱澐","subject":"資訊科技"}],
                "7": [{"teacher":"呂宜霖","subject":"國語文"}],
                "8": [{"teacher":"王世宗","subject":"生物(輔)"}],
                "9": [{"teacher":"外師群","subject":"英文素養"}]
            },
            "星期二": {
                "1": [{"teacher":"陳瑋筠","subject":"歷史"}],
                "2": [{"teacher":"蔡/桂/陳","subject":"數學"}],
                "3": [{"teacher":"王世宗","subject":"生物"}],
                "4": [{"teacher":"簡珮瑜","subject":"輔導活動"}],
                "5": [{"teacher":"外師群","subject":"閱讀心力量ESL"}],
                "6": [{"teacher":"外師群","subject":"視覺藝術-ESL"}],
                "7": [{"teacher":"呂宜霖","subject":"國語文"}],
                "8": [{"teacher":"呂宜霖","subject":"國語文(輔)"}],
                "9": [{"teacher":"吳雯菁","subject":"公民與社會(輔)"}]
            },
            "星期三": {
                "1": [{"teacher":"王世宗","subject":"生物"}],
                "2": [{"teacher":"蔡/桂/陳","subject":"數學"}],
                "3": [{"teacher":"外師群","subject":"表演藝術-ESL"}],
                "4": [{"teacher":"何文達","subject":"地理"}],
                "5": [{"teacher":"江霂歖","subject":"體育"}],
                "6": [{"teacher":"呂宜霖","subject":"國語文"}],
                "7": [{"teacher":"莊/邱/羅","subject":"英語文"}],
                "8": [{"teacher":"莊旭惠","subject":"英語文(輔)"}],
                "9": [{"teacher":"呂宜霖","subject":"國文寫作"}]
            },
            "星期四": {
                "1": [{"teacher":"呂宜霖","subject":"國語文"}],
                "2": [{"teacher":"莊/邱/羅","subject":"英語文"}],
                "3": [{"teacher":"蔡/桂/陳","subject":"數學"}],
                "4": [{"teacher":"江霂歖","subject":"體育"}],
                "5": [{"teacher":"翟洛嫻","subject":"音樂"}],
                "6": [{"teacher":"孔令堅","subject":"生命教育"}],
                "7": [{"teacher":"外師群","subject":"家政-ESL"}],
                "8": [{"teacher":"外師群","subject":"ESL(輔)"}],
                "9": [{"teacher":"莊/邱/羅","subject":"英文素養"}]
            },
            "星期五": {
                "1": [{"teacher":"呂宜霖","subject":"國語文"}],
                "2": [{"teacher":"曾淑汝/古靜宜","subject":"本土語言"}],
                "3": [{"teacher":"王世宗","subject":"生物"}],
                "4": [{"teacher":"吳雯菁","subject":"公民與社會"}],
                "5": [{"teacher":"蔡佳玲","subject":"班會"}],
                "6": [{"teacher":"蔡佳玲","subject":"週會/社團"}],
                "7": [{"teacher":"蔡佳玲","subject":"週會/社團"}],
                "8": [{"teacher":"蔡/桂/陳","subject":"數學(輔)"}],
                "9": [{"teacher":"蔡佳玲","subject":"數學探究"}]
            }
        },
        "國七B": {
            "星期一": {
                "1": [{"teacher":"莊/邱/羅","subject":"英語文"}],
                "2": [{"teacher":"蔡/桂/陳","subject":"數學"}],
                "3": [{"teacher":"呂宜霖","subject":"國語文"}],
                "4": [{"teacher":"陳瑋筠","subject":"歷史"}],
                "5": [{"teacher":"王世宗","subject":"生物"}],
                "6": [{"teacher":"吳雯菁","subject":"童軍"}],
                "7": [{"teacher":"江霂歖","subject":"體育"}],
                "8": [{"teacher":"羅雅苓","subject":"英語文(輔)"}],
                "9": [{"teacher":"外師群","subject":"英文素養"}]
            },
            "星期二": {
                "1": [{"teacher":"呂宜霖","subject":"國語文"}],
                "2": [{"teacher":"蔡/桂/陳","subject":"數學"}],
                "3": [{"teacher":"何文達","subject":"地理"}],
                "4": [{"teacher":"王世宗","subject":"生物"}],
                "5": [{"teacher":"外師群","subject":"閱讀心力量ESL"}],
                "6": [{"teacher":"外師群","subject":"視覺藝術-ESL"}],
                "7": [{"teacher":"孔令堅","subject":"生命教育"}],
                "8": [{"teacher":"王世宗","subject":"生物(輔)"}],
                "9": [{"teacher":"桂松山","subject":"數學探究"}]
            },
            "星期三": {
                "1": [{"teacher":"江霂歖","subject":"體育"}],
                "2": [{"teacher":"蔡/桂/陳","subject":"數學"}],
                "3": [{"teacher":"外師群","subject":"表演藝術-ESL"}],
                "4": [{"teacher":"呂宜霖","subject":"國語文"}],
                "5": [{"teacher":"陳昱澐","subject":"生活科技"}],
                "6": [{"teacher":"陳昱澐","subject":"資訊科技"}],
                "7": [{"teacher":"莊/邱/羅","subject":"英語文"}],
                "8": [{"teacher":"呂宜霖","subject":"國語文(輔)"}],
                "9": [{"teacher":"吳雯菁","subject":"公民與社會(輔)"}]
            },
            "星期四": {
                "1": [{"teacher":"簡珮瑜","subject":"輔導活動"}],
                "2": [{"teacher":"莊/邱/羅","subject":"英語文"}],
                "3": [{"teacher":"蔡/桂/陳","subject":"數學"}],
                "4": [{"teacher":"呂宜霖","subject":"國語文"}],
                "5": [{"teacher":"王世宗","subject":"生物"}],
                "6": [{"teacher":"翟洛嫻","subject":"音樂"}],
                "7": [{"teacher":"外師群","subject":"家政-ESL"}],
                "8": [{"teacher":"外師群","subject":"ESL(輔)"}],
                "9": [{"teacher":"莊/邱/羅","subject":"英文素養"}]
            },
            "星期五": {
                "1": [{"teacher":"王世宗","subject":"健康教育"}],
                "2": [{"teacher":"張/廖/古","subject":"本土語言"}],
                "3": [{"teacher":"吳雯菁","subject":"公民與社會"}],
                "4": [{"teacher":"呂宜霖","subject":"國語文"}],
                "5": [{"teacher":"吳雯菁","subject":"班會"}],
                "6": [{"teacher":"吳雯菁","subject":"週會/社團"}],
                "7": [{"teacher":"吳雯菁","subject":"週會/社團"}],
                "8": [{"teacher":"蔡/桂/陳","subject":"數學(輔)"}],
                "9": [{"teacher":"呂宜霖","subject":"國文寫作"}]
            }
        },
        "國八A": {
            "星期一": {
                "1": [{"teacher":"吳雯菁","subject":"公民與社會"}],
                "2": [{"teacher":"簡珮瑜","subject":"輔導活動"}],
                "3": [{"teacher":"劉玉華","subject":"國語文"}],
                "4": [{"teacher":"外師群","subject":"視覺藝術-ESL"}],
                "5": [{"teacher":"吳雯菁","subject":"彈性學習-生命教育"}],
                "6": [{"teacher":"外師群","subject":"表演藝術-ESL"}],
                "7": [{"teacher":"劉玉華","subject":"國語文"}],
                "8": [{"teacher":"陳/蘇/吳","subject":"數學(輔)"}],
                "9": [{"teacher":"陳/蘇/吳","subject":"數學探究"}]
            },
            "星期二": {
                "1": [{"teacher":"劉玉華","subject":"國語文"}],
                "2": [{"teacher":"倪世斌","subject":"生活科技"}],
                "3": [{"teacher":"蔡佳玲","subject":"理化"}],
                "4": [{"teacher":"何文達","subject":"地理"}],
                "5": [{"teacher":"莊/羅/鄒","subject":"英語文"}],
                "6": [{"teacher":"莊/羅/鄒","subject":"英語文"}],
                "7": [{"teacher":"外師群","subject":"健康教育-ESL"}],
                "8": [{"teacher":"吳雯菁","subject":"公民與社會(輔)"}],
                "9": [{"teacher":"吳宇綸","subject":"數學探究"}]
            },
            "星期三": {
                "1": [{"teacher":"蔡佳玲","subject":"理化"}],
                "2": [{"teacher":"翟洛嫻","subject":"音樂"}],
                "3": [{"teacher":"陳/蘇/吳","subject":"數學"}],
                "4": [{"teacher":"陳/蘇/吳","subject":"數學"}],
                "5": [{"teacher":"劉玉華","subject":"國語文"}],
                "6": [{"teacher":"吳雯菁","subject":"童軍"}],
                "7": [{"teacher":"江霂歖","subject":"體育"}],
                "8": [{"teacher":"劉玉華","subject":"國語文(輔)"}],
                "9": [{"teacher":"劉玉華","subject":"語文閱讀策略"}]
            },
            "星期四": {
                "1": [{"teacher":"江霂歖","subject":"體育"}],
                "2": [{"teacher":"倪世斌","subject":"資訊科技"}],
                "3": [{"teacher":"外師群","subject":"探索樂園ESL"}],
                "4": [{"teacher":"劉玉華","subject":"國語文"}],
                "5": [{"teacher":"陳/蘇/吳","subject":"數學"}],
                "6": [{"teacher":"陳/蘇/吳","subject":"數學"}],
                "7": [{"teacher":"蔡佳玲","subject":"理化"}],
                "8": [{"teacher":"莊旭惠","subject":"英文(輔)"}],
                "9": [{"teacher":"陳瑋筠","subject":"社會探究"}]
            },
            "星期五": {
                "1": [{"teacher":"曾/林/古","subject":"本土語言"}],
                "2": [{"teacher":"莊/羅/鄒","subject":"英語文"}],
                "3": [{"teacher":"王淑華","subject":"家政"}],
                "4": [{"teacher":"陳瑋筠","subject":"歷史"}],
                "5": [{"teacher":"王世宗","subject":"班會"}],
                "6": [{"teacher":"王世宗","subject":"週會/社團"}],
                "7": [{"teacher":"王世宗","subject":"週會/社團"}],
                "8": [{"teacher":"外師群","subject":"ESL(輔)"}],
                "9": [{"teacher":"外師群","subject":"英文素養-ESL"}]
            }
        },
        "國八B": {
            "星期一": {
                "1": [{"teacher":"呂宜霖","subject":"國語文"}],
                "2": [{"teacher":"呂宜霖","subject":"國語文"}],
                "3": [{"teacher":"吳雯菁","subject":"公民與社會"}],
                "4": [{"teacher":"外師群","subject":"視覺藝術-ESL"}],
                "5": [{"teacher":"江霂歖","subject":"體育"}],
                "6": [{"teacher":"外師群","subject":"表演藝術-ESL"}],
                "7": [{"teacher":"蔡佳玲","subject":"理化"}],
                "8": [{"teacher":"陳/蘇/吳","subject":"數學(輔)"}],
                "9": [{"teacher":"陳/蘇/吳","subject":"數學探究"}]
            },
            "星期二": {
                "1": [{"teacher":"簡珮瑜","subject":"輔導活動"}],
                "2": [{"teacher":"陳瑋筠","subject":"歷史"}],
                "3": [{"teacher":"江霂歖","subject":"體育"}],
                "4": [{"teacher":"呂宜霖","subject":"國語文"}],
                "5": [{"teacher":"莊/羅/鄒","subject":"英語文"}],
                "6": [{"teacher":"莊/羅/鄒","subject":"英語文"}],
                "7": [{"teacher":"外師群","subject":"健康教育-ESL"}],
                "8": [{"teacher":"羅雅苓","subject":"英文(輔)"}],
                "9": [{"teacher":"呂宜霖","subject":"語文閱讀策略"}]
            },
            "星期三": {
                "1": [{"teacher":"呂宜霖","subject":"國語文"}],
                "2": [{"teacher":"何文達","subject":"地理"}],
                "3": [{"teacher":"陳/蘇/吳","subject":"數學"}],
                "4": [{"teacher":"陳/蘇/吳","subject":"數學"}],
                "5": [{"teacher":"蔡佳玲","subject":"理化"}],
                "6": [{"teacher":"倪世斌","subject":"生活科技"}],
                "7": [{"teacher":"吳雯菁","subject":"童軍"}],
                "8": [{"teacher":"吳雯菁","subject":"公民與社會(輔)"}],
                "9": [{"teacher":"蔡佳玲","subject":"自然科學探究"}]
            },
            "星期四": {
                "1": [{"teacher":"蔡佳玲","subject":"理化"}],
                "2": [{"teacher":"翟洛嫻","subject":"音樂"}],
                "3": [{"teacher":"外師群","subject":"探索樂園ESL"}],
                "4": [{"teacher":"倪世斌","subject":"資訊科技"}],
                "5": [{"teacher":"陳/蘇/吳","subject":"數學"}],
                "6": [{"teacher":"陳/蘇/吳","subject":"數學"}],
                "7": [{"teacher":"吳雯菁","subject":"彈性學習-生命教育"}],
                "8": [{"teacher":"呂宜霖","subject":"國語文(輔)"}],
                "9": [{"teacher":"陳昱澐","subject":"數學探究"}]
            },
            "星期五": {
                "1": [{"teacher":"張/廖/古","subject":"本土語言"}],
                "2": [{"teacher":"莊/羅/鄒","subject":"英語文"}],
                "3": [{"teacher":"呂宜霖","subject":"國語文"}],
                "4": [{"teacher":"王淑華","subject":"家政"}],
                "5": [{"teacher":"羅雅苓","subject":"班會"}],
                "6": [{"teacher":"羅雅苓","subject":"週會/社團"}],
                "7": [{"teacher":"羅雅苓","subject":"週會/社團"}],
                "8": [{"teacher":"外師群","subject":"ESL(輔)"}],
                "9": [{"teacher":"外師群","subject":"英文素養-ESL"}]
            }
        },
        "國九A": {
            "星期一": {
                "1": [{"teacher":"江霂歖","subject":"體育"}],
                "2": [{"teacher":"莊/羅/王","subject":"英語文"}],
                "3": [{"teacher":"蔡佳玲","subject":"理化"}],
                "4": [{"teacher":"劉玉華","subject":"國語文"}],
                "5": [{"teacher":"曾/桂/吳","subject":"數學"}],
                "6": [{"teacher":"曾/桂/吳","subject":"數學"}],
                "7": [{"teacher":"倪世斌","subject":"資訊科技"}],
                "8": [{"teacher":"曾/桂/吳","subject":"數學(輔)"}],
                "9": [{"teacher":"劉玉華","subject":"國文寫作"}]
            },
            "星期二": {
                "1": [{"teacher":"王世宗","subject":"健康教育"}],
                "2": [{"teacher":"劉玉華","subject":"國語文"}],
                "3": [{"teacher":"外師群","subject":"閱讀與寫作"}],
                "4": [{"teacher":"蔡玉良","subject":"地球科學"}],
                "5": [{"teacher":"江霂歖","subject":"體育"}],
                "6": [{"teacher":"曾/桂/吳","subject":"數學"}],
                "7": [{"teacher":"曾/桂/吳","subject":"數學"}],
                "8": [{"teacher":"劉玉華","subject":"國語文(輔)"}],
                "9": [{"teacher":"何文達","subject":"社會探究"}]
            },
            "星期三": {
                "1": [{"teacher":"吳雯菁","subject":"童軍"}],
                "2": [{"teacher":"劉玉華","subject":"國語文"}],
                "3": [{"teacher":"翟洛嫻","subject":"音樂"}],
                "4": [{"teacher":"莊/羅/王","subject":"英語文"}],
                "5": [{"teacher":"外師群","subject":"表演藝術-ESL"}],
                "6": [{"teacher":"簡珮瑜","subject":"輔導活動"}],
                "7": [{"teacher":"倪世斌","subject":"生活科技"}],
                "8": [{"teacher":"蔡佳玲","subject":"理化(輔)"}],
                "9": [{"teacher":"王世宗","subject":"自然探究"}]
            },
            "星期四": {
                "1": [{"teacher":"劉玉華","subject":"國語文"}],
                "2": [{"teacher":"何文達","subject":"地理"}],
                "3": [{"teacher":"吳雯菁","subject":"公民與社會"}],
                "4": [{"teacher":"外師群","subject":"視覺藝術-ESL"}],
                "5": [{"teacher":"陳瑋筠","subject":"歷史"}],
                "6": [{"teacher":"莊/羅/王","subject":"英語文"}],
                "7": [{"teacher":"簡珮瑜","subject":"彈性學習-生命教育"}],
                "8": [{"teacher":"曾/桂/吳","subject":"數學(輔)"}],
                "9": [{"teacher":"曾/桂/吳","subject":"數學探究"}]
            },
            "星期五": {
                "1": [{"teacher":"王淑華","subject":"家政"}],
                "2": [{"teacher":"劉玉華","subject":"國語文"}],
                "3": [{"teacher":"蔡佳玲","subject":"理化"}],
                "4": [{"teacher":"外師群","subject":"生活玩家ESL"}],
                "5": [{"teacher":"莊旭惠","subject":"班會"}],
                "6": [{"teacher":"莊旭惠","subject":"週會/社團"}],
                "7": [{"teacher":"莊旭惠","subject":"週會/社團"}],
                "8": [{"teacher":"莊/羅/王","subject":"英語文(輔)"}],
                "9": [{"teacher":"莊旭惠","subject":"英文素養"}]
            }
        },
        "國九B": {
            "星期一": {
                "1": [{"teacher":"何文達","subject":"地理"}],
                "2": [{"teacher":"莊/羅/王","subject":"英語文"}],
                "3": [{"teacher":"張秀玫","subject":"國語文"}],
                "4": [{"teacher":"蔡佳玲","subject":"理化"}],
                "5": [{"teacher":"曾/桂/吳","subject":"數學"}],
                "6": [{"teacher":"曾/桂/吳","subject":"數學"}],
                "7": [{"teacher":"王世宗","subject":"健康教育"}],
                "8": [{"teacher":"蔡佳玲","subject":"理化(輔)"}],
                "9": [{"teacher":"王世宗","subject":"自然探究"}]
            },
            "星期二": {
                "1": [{"teacher":"吳雯菁","subject":"公民與社會"}],
                "2": [{"teacher":"張秀玫","subject":"國語文"}],
                "3": [{"teacher":"外師群","subject":"閱讀與寫作"}],
                "4": [{"teacher":"吳雯菁","subject":"童軍"}],
                "5": [{"teacher":"倪世斌","subject":"生活科技"}],
                "6": [{"teacher":"曾/桂/吳","subject":"數學"}],
                "7": [{"teacher":"曾/桂/吳","subject":"數學"}],
                "8": [{"teacher":"張秀玫","subject":"國語文(輔)"}],
                "9": [{"teacher":"羅雅苓","subject":"英文素養"}]
            },
            "星期三": {
                "1": [{"teacher":"張秀玫","subject":"國語文"}],
                "2": [{"teacher":"簡珮瑜","subject":"輔導活動"}],
                "3": [{"teacher":"江霂歖","subject":"體育"}],
                "4": [{"teacher":"莊/羅/王","subject":"英語文"}],
                "5": [{"teacher":"外師群","subject":"表演藝術-ESL"}],
                "6": [{"teacher":"張秀玫","subject":"國語文"}],
                "7": [{"teacher":"陳瑋筠","subject":"歷史"}],
                "8": [{"teacher":"蔡玉良","subject":"地球科學(輔)"}],
                "9": [{"teacher":"何文達","subject":"社會探究"}]
            },
            "星期四": {
                "1": [{"teacher":"張秀玫","subject":"國語文"}],
                "2": [{"teacher":"簡珮瑜","subject":"生命教育"}],
                "3": [{"teacher":"翟洛嫻","subject":"音樂"}],
                "4": [{"teacher":"外師群","subject":"視覺藝術-ESL"}],
                "5": [{"teacher":"蔡玉良","subject":"地球科學"}],
                "6": [{"teacher":"莊/羅/王","subject":"英語文"}],
                "7": [{"teacher":"江霂歖","subject":"體育"}],
                "8": [{"teacher":"曾/桂/吳","subject":"數學(輔)"}],
                "9": [{"teacher":"曾/桂/吳","subject":"數學探究"}]
            },
            "星期五": {
                "1": [{"teacher":"蔡佳玲","subject":"理化"}],
                "2": [{"teacher":"王淑華","subject":"家政"}],
                "3": [{"teacher":"倪世斌","subject":"資訊科技"}],
                "4": [{"teacher":"外師群","subject":"生活玩家ESL"}],
                "5": [{"teacher":"陳瑋筠","subject":"班會"}],
                "6": [{"teacher":"陳瑋筠","subject":"週會/社團"}],
                "7": [{"teacher":"陳瑋筠","subject":"週會/社團"}],
                "8": [{"teacher":"莊/羅/王","subject":"英語文(輔)"}],
                "9": [{"teacher":"張秀玫","subject":"國文寫作"}]
            }
        }
    }
};
