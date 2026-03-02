/* =========================
   基本 DOM 與觸控設定
========================= */
const tank = document.getElementById("tank");
const clockEl = document.getElementById("clock");
const periodEl = document.getElementById("period");
const nextEl = document.getElementById("nextClass");

tank.style.pointerEvents = "none"; 
document.body.style.pointerEvents = "auto";

/* =========================
   新增：特殊考程與搖鈴系統
========================= */
window.isExamMode = false;

// 根據組長提供的圖表，精準建立三天的搖鈴資料庫
const examBells = {
    "3/2": [
        { time: "09:50", msg: "搖鈴 (高一.二)" },
        { time: "12:00", msg: "搖鈴 (高一.二)" },
        { time: "13:15", msg: "搖鈴 (高一.二)" },
        { time: "16:30", msg: "搖鈴 (高二)" }
    ],
    "3/3": [
        { time: "08:50", msg: "搖鈴 (國八.九)" },
        { time: "09:30", msg: "搖鈴 (國七)" },
        { time: "09:50", msg: "搖鈴 (國七.高一.二)" },
        { time: "10:35", msg: "搖鈴 (國九)" },
        { time: "12:00", msg: "搖鈴 (高一.二)" },
        { time: "13:15", msg: "搖鈴 (高一.二)" },
        { time: "13:35", msg: "搖鈴 (國九)" },
        { time: "13:55", msg: "搖鈴 (國八)" },
        { time: "14:15", msg: "搖鈴 (國八)" },
        { time: "17:00", msg: "搖鈴 (國七)" }
    ],
    "3/4": [
        { time: "08:50", msg: "搖鈴 (國七.八.九)" },
        { time: "10:35", msg: "搖鈴 (國八)" },
        { time: "11:10", msg: "搖鈴 (國九)" },
        { time: "11:20", msg: "搖鈴 (國九)" },
        { time: "13:35", msg: "搖鈴 (國八)" },
        { time: "15:50", msg: "搖鈴 (國七)" },
        { time: "16:10", msg: "搖鈴 (國七)" }
    ]
};

const toggleBtn = document.getElementById("toggleExamBtn");
if (toggleBtn) {
    toggleBtn.addEventListener("pointerdown", function(e) {
        e.stopPropagation(); // 避免觸發灑飼料
        window.isExamMode = !window.isExamMode;
        this.textContent = window.isExamMode ? "返回課表" : "切換考程";
        this.className = window.isExamMode ? "exam-btn active" : "exam-btn";
        updateHUD(); // 立刻刷新畫面
    });
}

/* =========================
   課表系統
========================= */
const periods = [
    { name:"第一節", start:490, end:540 },   
    { name:"第二節", start:550, end:600 },   
    { name:"第三節", start:610, end:660 },   
    { name:"第四節", start:665, end:715 },   
    { name:"第五節", start:775, end:825 },   
    { name:"第六節", start:835, end:885 },   
    { name:"第七節", start:890, end:940 },   
    { name:"第八節", start:950, end:1000 },  
    { name:"第九節", start:1005, end:1050 }, 
    { name:"行政輪值", start:1050, end:1200 } 
];

const teacherSchedule = {
    1: { 
        2: {class:"國七A+組", subject:"數學"},
        5: {class:"國七A班", subject:"生活科技"},
        6: {class:"國七A班", subject:"資訊科技"},
        8: {class:"國八B組", subject:"數學"},
        9: {class:"國八B組", subject:"數學"}
    },
    2: { 
        2: {class:"國七A+組", subject:"數學"},
        5: {class:"高一班", subject:"多元選修"}, 
        6: {class:"高一班", subject:"多元選修"}
    },
    3: { 
        2: {class:"國七A+組", subject:"數學"},
        3: {class:"國八B組", subject:"數學"},
        4: {class:"國八B組", subject:"數學"},
        5: {class:"國七B班", subject:"生活科技"},
        6: {class:"國七B班", subject:"資訊科技"},
        9: {class:"高三理組", subject:"自然探究"},
        10: {class:"辦公室", subject:"行政輪值"}
    },
    4: { 
        3: {class:"國七A+組", subject:"數學"},
        5: {class:"國八B組", subject:"數學"},
        6: {class:"國八B組", subject:"數學"},
        9: {class:"國八B班", subject:"數學"}
    },
    5: { 
        8: {class:"國七A+組", subject:"數學"}
    }
};

function isTuesdayElectiveDay(d) {
    const mm = d.getMonth() + 1;
    const dd = d.getDate();
    const validDates = ["3/10", "3/17", "3/24", "5/19", "5/26", "6/2"];
    return validDates.includes(`${mm}/${dd}`);
}

function nowMinutes(d=new Date()){ return d.getHours()*60 + d.getMinutes(); }

function getCurrentPeriodStatus(d = new Date()) {
    const wd = d.getDay();
    const m = nowMinutes(d);

    for(let i=0; i<periods.length; i++){
        const index = i+1; 
        if(m >= periods[i].start && m <= periods[i].end){
            let lessonInfo = null;
            if(teacherSchedule[wd] && teacherSchedule[wd][index]){
                lessonInfo = teacherSchedule[wd][index];
                if(wd === 2 && (index === 5 || index === 6) && !isTuesdayElectiveDay(d)) {
                    lessonInfo = null;
                }
            }
            if(lessonInfo) return { type: "class", periodName: periods[i].name, ...lessonInfo };
            else return { type: "empty", periodName: periods[i].name };
        }
    }
    return { type: "break" }; 
}

function getNextLesson(d=new Date()){
    const wd=d.getDay();
    if(!teacherSchedule[wd]) return null;
    const m=nowMinutes(d);
    let list=[];

    for(let i=0;i<periods.length;i++){
        const index=i+1;
        if(teacherSchedule[wd][index] && m<periods[i].start){
            if(wd === 2 && (index === 5 || index === 6) && !isTuesdayElectiveDay(d)) continue;
            list.push({ ...teacherSchedule[wd][index], period:periods[i].name, start:periods[i].start });
        }
    }
    if(list.length===0) return null;
    list.sort((a,b)=>a.start-b.start);
    return list[0];
}

function updateHUD(){
    try {
        const d=new Date();
        clockEl.textContent=d.toLocaleTimeString();

        // 判斷是否開啟考程模式
        if (window.isExamMode) {
            const dateStr = `${d.getMonth() + 1}/${d.getDate()}`;
            const bellsToday = examBells[dateStr];
            
            if (!bellsToday) {
                periodEl.textContent = `📝 考程模式 (今天 ${dateStr} 無考程)`;
                nextEl.innerHTML = "請切換回課表以檢視正常作息";
            } else {
                periodEl.textContent = `📝 考程進行中 (${dateStr})`;
                
                const nowMins = nowMinutes(d);
                let nextBell = null;
                
                // 尋找今天還沒響的第一個鈴
                for (let b of bellsToday) {
                    const [bh, bm] = b.time.split(':').map(Number);
                    if (bh * 60 + bm > nowMins) {
                        nextBell = b;
                        break;
                    }
                }
                
                if (nextBell) {
                    const [bh, bm] = nextBell.time.split(':').map(Number);
                    const target = new Date(d);
                    target.setHours(bh, bm, 0, 0);
                    
                    const now = new Date(d);
                    now.setMilliseconds(0);
                    
                    const diff = Math.max(0, target - now);
                    const mm = Math.floor(diff/60000);
                    const ss = Math.floor((diff%60000)/1000);
                    
                    nextEl.innerHTML = `<span style="color:#ffb74d;">下一個搖鈴：${nextBell.time} ${nextBell.msg}</span><br>倒數 ${mm} 分 ${ss} 秒`;
                } else {
                    nextEl.innerHTML = "今日搖鈴均已順利結束！";
                }
            }
            return; // 考程模式啟動時，跳過一般課表渲染
        }

        // 以下為一般課表渲染邏輯
        const status = getCurrentPeriodStatus(d);
        const next = getNextLesson(d);

        if(status.type === "class"){
            periodEl.textContent = `正在上課：${status.class} ${status.subject}（${status.periodName}）`;
        } else if (status.type === "empty") {
            periodEl.textContent = `現在：${status.periodName} / 空堂`;
        } else {
            periodEl.textContent = `現在：下課時間 / 午休`;
        }

        if(next){
            const target=new Date(d);
            target.setHours(Math.floor(next.start/60), next.start%60, 0, 0);
            
            const now = new Date(d);
            now.setMilliseconds(0);
            
            const diff = Math.max(0, target - now);
            const mm = Math.floor(diff/60000);
            const ss = Math.floor((diff%60000)/1000);
            
            nextEl.innerHTML=
                `下一堂：${next.class} ${next.subject}（${next.period}）倒數 ${mm} 分 ${ss} 秒 <br><span style="color:#ffb74d; font-size:0.9em; display:inline-block; margin-top:4px;">(提醒：鐘聲會提早 36 秒響起)</span>`;
        }else{
            nextEl.innerHTML="今天課程與輪值已結束";
        }
    } catch (err) {
        console.error("HUD 更新錯誤", err);
    }
}
setInterval(updateHUD,500);
updateHUD();

/* =========================
   丟飼料互動 (全域防呆)
========================= */
window.addEventListener("pointerdown", (e) => {
    if(e.target.closest("#hud")) return;
    if(e.target.closest(".jellyfish-svg")) return;
    if(e.target.closest(".big-bubble")) return;

    let cx = e.clientX;
    let cy = e.clientY;
    if(cx === undefined || cy === undefined) return;

    for(let i=0;i<5;i++){
        const foodEl = document.createElement("div");
        foodEl.className = "food-dot";
        const startX = cx + (Math.random()*40-20);
        const startY = cy + (Math.random()*40-20);
        
        foodEl.style.left = startX + "px";
        foodEl.style.top = startY + "px";
        tank.appendChild(foodEl);

        foods.push({ el: foodEl, x: startX, y: startY });
    }
});


/* =========================
   SVG 魚群系統 (柔和色系 + 大小變化)
========================= */
const fishes=[];
const foods=[];
const relaxingPalette = [
    { body: '#A2C4D2', tail: '#82A7B5' }, 
    { body: '#B8C8A3', tail: '#98AA81' }, 
    { body: '#F2B8A2', tail: '#D9947A' }, 
    { body: '#C1B8C8', tail: '#A195AA' }, 
    { body: '#F2E3B6', tail: '#D9C794' }, 
    { body: '#9FB8AD', tail: '#7B988A' }  
];

function createFish(index){
    const fish=document.createElement("div");
    fish.className="fish-svg";
    const color = relaxingPalette[index % relaxingPalette.length];
    const scale = Math.random() * 0.5 + 0.6; 

    fish.innerHTML=`
    <svg viewBox="0 0 120 60" width="120" height="60">
        <ellipse cx="60" cy="30" rx="40" ry="20" fill="${color.body}"/>
        <polygon points="20,30 0,15 0,45" fill="${color.tail}"/>
        <circle cx="80" cy="25" r="5" fill="white"/>
        <circle cx="82" cy="25" r="2" fill="#555"/>
    </svg>`;

    tank.appendChild(fish);

    fishes.push({
        el:fish,
        x: (Math.random()* (window.innerWidth || 800)),
        y: (Math.random()* (window.innerHeight || 600)),
        vx:(Math.random()-0.5)*1.5,
        vy:(Math.random()-0.5)*1.5,
        scale: scale 
    });
}
for(let i=0;i<6;i++) createFish(i);

function updateFish(){
    const W = window.innerWidth || 800;
    const H = window.innerHeight || 600;

    for(let i=foods.length-1; i>=0; i--){
        let food = foods[i];
        food.y += 0.8; 
        food.el.style.top = food.y + "px";
        if(food.y > H){
            food.el.remove();
            foods.splice(i, 1);
        }
    }

    for(let f of fishes){
        if (isNaN(f.x) || isNaN(f.y) || isNaN(f.vx) || isNaN(f.vy)) {
            f.x = W / 2; f.y = H / 2; f.vx = 0; f.vy = 0;
        }

        if(foods.length>0){
            let closest=null;
            let min=Infinity;
            for(let food of foods){
                let dx=food.x-f.x; let dy=food.y-f.y; let d=Math.hypot(dx,dy);
                if(d<min){ min=d; closest=food; }
            }
            if(closest){
                let dx=closest.x-f.x; let dy=closest.y-f.y; let d=Math.max(1,Math.hypot(dx,dy));
                f.vx+=dx/d*0.3; f.vy+=dy/d*0.3;
                if(d<15){
                    const index = foods.indexOf(closest);
                    if(index > -1) { closest.el.remove(); foods.splice(index, 1); }
                }
            }
            f.vx*=0.95; f.vy*=0.95;
        } else {
            f.vx += (Math.random() - 0.5) * 0.1; f.vy += (Math.random() - 0.5) * 0.1;
            let speed = Math.hypot(f.vx, f.vy);
            if(speed > 1) { f.vx /= speed; f.vy /= speed; }
        }

        f.x+=f.vx; f.y+=f.vy;
        f.x=Math.max(0,Math.min(W-120,f.x)); f.y=Math.max(0,Math.min(H-60,f.y));

        if(f.vx<0){
            f.el.style.transform=`translate(${f.x}px,${f.y}px) scaleX(-${f.scale}) scaleY(${f.scale})`;
        }else{
            f.el.style.transform=`translate(${f.x}px,${f.y}px) scaleX(${f.scale}) scaleY(${f.scale})`;
        }
    }
    requestAnimationFrame(updateFish);
}
updateFish();


/* =========================
   氣泡、大氣泡與水母生態系統
========================= */
const bubbles = [];
const bigBubbles = [];
const jellyfishes = [];

function createBubble(){
    const size = Math.random()*8 + 6;
    const bubble = {
        x: Math.random()*window.innerWidth,
        y: window.innerHeight + Math.random()*100,
        size: size,
        speed: Math.random()*0.8 + 0.5,
        el: document.createElement("div")
    };
    bubble.el.className = "bubble";
    bubble.el.style.width = size + "px";
    bubble.el.style.height = size + "px";
    tank.appendChild(bubble.el);
    bubbles.push(bubble);
}
for(let i=0;i<20;i++) createBubble();

function createBigBubble(x, y) {
    const size = Math.random()*15 + 20; 
    const b = document.createElement("div");
    b.className = "big-bubble";
    b.style.width = size + "px"; b.style.height = size + "px";
    tank.appendChild(b);
    
    const bObj = { el: b, x: x, y: y, speed: Math.random()*0.4 + 0.3, popped: false };
    bigBubbles.push(bObj);

    b.addEventListener("pointerdown", (e) => {
        e.stopPropagation();
        if (bObj.popped) return;
        bObj.popped = true;
        b.style.transform = `translate(${bObj.x}px, ${bObj.y}px) scale(2)`;
        b.style.opacity = "0";
        setTimeout(() => {
            b.remove();
            const idx = bigBubbles.indexOf(bObj);
            if (idx > -1) bigBubbles.splice(idx, 1);
        }, 150);
    });
}

function createJellyfish() {
    const j = document.createElement("div");
    j.className = "jellyfish-svg";
    j.innerHTML = `
    <svg viewBox="0 0 100 120" width="80" height="96">
        <path d="M 10 50 C 10 10, 90 10, 90 50 Q 50 60, 10 50 Z" fill="rgba(255, 255, 255, 0.3)" stroke="rgba(255, 255, 255, 0.7)" stroke-width="2"/>
        <path d="M 30 55 Q 25 85, 30 115" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="3" stroke-linecap="round"/>
        <path d="M 50 58 Q 50 90, 50 120" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="3" stroke-linecap="round"/>
        <path d="M 70 55 Q 75 85, 70 115" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="3" stroke-linecap="round"/>
    </svg>`;
    tank.appendChild(j);

    const jObj = {
        el: j, x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2 - 0.5, pulse: Math.random() * 10
    };

    j.addEventListener("pointerdown", (e) => {
        e.stopPropagation();
        jObj.vx = (Math.random() > 0.5 ? 1 : -1) * (15 + Math.random()*15); 
        jObj.vy = - (15 + Math.random()*15); 
    });
    jellyfishes.push(jObj);
}
for(let i=0; i<3; i++) createJellyfish();

function updateEcosystem(){
    const W = window.innerWidth; const H = window.innerHeight;

    for(let b of bubbles){
        b.y -= b.speed;
        if(b.y < -20){ b.y = H + 20; b.x = Math.random() * W; }
        b.el.style.transform = `translate(${b.x}px, ${b.y}px)`;
    }

    const turtle = document.querySelector('.turtle-container');
    if (turtle && Math.random() < 0.01) { 
        const rect = turtle.getBoundingClientRect();
        if (rect.right > 0 && rect.left < W) { 
            createBigBubble(rect.left + 120, rect.top + 20); 
        }
    }

    for (let i = bigBubbles.length - 1; i >= 0; i--) {
        let b = bigBubbles[i];
        if (b.popped) continue;
        b.y -= b.speed;
        b.x += Math.sin(b.y / 20) * 0.8; 
        if (b.y < -50) { b.el.remove(); bigBubbles.splice(i, 1); continue; }
        b.el.style.transform = `translate(${b.x}px, ${b.y}px)`;
    }

    for (let j of jellyfishes) {
        j.pulse += 0.05;
        j.vx += (Math.random() - 0.5) * 0.1; j.vy += (Math.random() - 0.5) * 0.1 - 0.01; 
        j.vx *= 0.94; j.vy *= 0.94;
        j.x += j.vx; j.y += j.vy;

        if (j.x < 0) { j.x = 0; j.vx = 2; }
        if (j.x > W - 80) { j.x = W - 80; j.vx = -2; }
        if (j.y < 0) { j.y = 0; j.vy = 2; }
        if (j.y > H - 100) { j.y = H - 100; j.vy = -2; }

        let scaleX = 1 + Math.sin(j.pulse) * 0.05; let scaleY = 1 - Math.sin(j.pulse) * 0.05;
        let rot = j.vx * 2; 
        j.el.style.transform = `translate(${j.x}px, ${j.y}px) rotate(${rot}deg) scale(${scaleX}, ${scaleY})`;
    }
    requestAnimationFrame(updateEcosystem);
}
updateEcosystem();


/* =========================
   行事曆與貼心提醒系統 (動態自適應高度)
========================= */
const schoolEvents = [
    { name: "228連假", start: "02/27", end: "03/01", type: "holiday" },
    { name: "全校複習考", start: "03/02", end: "03/04" },
    { name: "國語文競賽", start: "03/05", end: "03/05" },
    { name: "學校日", start: "03/07", end: "03/07" },
    { name: "新生獎學金甄試", start: "03/08", end: "03/08" },
    { name: "英語文競賽", start: "03/12", end: "03/12" },
    { name: "雞籠任我行外出踏查", start: "03/17", end: "03/17" },
    { name: "假日營隊(五)", start: "03/21", end: "03/21" },
    { name: "第一次段考", start: "03/31", end: "04/01", display: "03/31~04/01" },
    { name: "清明連假", start: "04/03", end: "04/06", type: "holiday" },
    { name: "國八教育旅行", start: "04/07", end: "04/10" },
    { name: "高三重補修", start: "04/07", end: "04/30" },
    { name: "貓咪盃全國賽", start: "04/09", end: "04/11" },
    { name: "第一次作業普查/抽查", start: "04/13", end: "04/17" },
    { name: "假日營隊(六)", start: "04/18", end: "04/18" },
    { name: "國九模擬考", start: "04/21", end: "04/22", display: "04/21.22" },
    { name: "國九.高三畢業考", start: "04/29", end: "04/30", display: "04/29.30" },
    { name: "勞動節連假", start: "05/01", end: "05/03", type: "holiday" },
    { name: "第二次段考", start: "05/13", end: "05/14", display: "05/13.14" },
    { name: "國中教育會考", start: "05/16", end: "05/17", display: "05/16.17" },
    { name: "假日營隊(七)", start: "05/16", end: "05/16" },
    { name: "校慶", start: "05/23", end: "05/23" },
    { name: "校慶補假", start: "05/25", end: "05/25", type: "holiday" },
    { name: "第二次作業普查/抽查", start: "05/25", end: "05/29" },
    { name: "一二年級田野日", start: "05/29", end: "05/29" },
    { name: "畢業典禮", start: "06/02", end: "06/02" },
    { name: "自主學習&多元選修發表", start: "06/05", end: "06/05" },
    { name: "本土語發表", start: "06/12", end: "06/12" },
    { name: "假日營隊(八)", start: "06/13", end: "06/13" },
    { name: "升高一銜接", start: "06/15", end: "06/25" },
    { name: "升國七銜接", start: "06/17", end: "06/24" },
    { name: "國七新生報到", start: "06/17", end: "06/17" },
    { name: "端午連假", start: "06/19", end: "06/21", type: "holiday" },
    { name: "期末考", start: "06/26", end: "06/30", display: "06/26, 29, 30" },
    { name: "暑假開始", start: "07/01", end: "07/01", type: "holiday" },
    { name: "中文檢定", start: "07/02", end: "07/02" },
    { name: "補考", start: "07/07", end: "07/07" },
    { name: "分科測驗", start: "07/11", end: "07/12", display: "07/11.12" },
    { name: "重補修", start: "07/20", end: "07/20" }
];

function updateEventPanel() {
    const panelMsg = document.getElementById("dailyMessage");
    const panelList = document.getElementById("eventList");
    if (!panelMsg || !panelList) return;

    const now = new Date();
    const currentYear = now.getFullYear();
    const today = new Date(currentYear, now.getMonth(), now.getDate());
    const dayOfWeek = now.getDay();

    const dayMsg = [
        "🌞 星期日：好好休息，準備迎接新的一週！",
        "💪 星期一：新的一週，來個精神喊話！組長加油！",
        "🏃 星期二：步入正軌，持續前進中！",
        "✨ 星期三：撐住！這週已經過了一半啦！",
        "🎯 星期四：再努力一下，週末就在眼前！",
        "🎉 星期五：辛苦了！提醒一下快要放假囉！",
        "🏖️ 星期六：美好的週末，好好放鬆一下！"
    ];
    let messageHtml = dayMsg[dayOfWeek];

    let eventHTML = "";
    let upcomingHolidayMsg = "";

    schoolEvents.forEach(ev => {
        const [sm, sd] = ev.start.split('/').map(Number);
        const [em, ed] = ev.end.split('/').map(Number);
        const startDate = new Date(currentYear, sm - 1, sd);
        const endDate = new Date(currentYear, em - 1, ed);

        if (endDate < today) return;

        const diffTime = startDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays <= 30) {
            let countdownStr = "";
            let itemStyle = "";

            if (diffDays < 0 && endDate >= today) {
                countdownStr = "<span class='event-countdown' style='color:#a2c4d2;'>(進行中)</span>";
            } else if (diffDays === 0) {
                countdownStr = "<span class='event-countdown' style='color:#ff6b6b;'>(就是今天！)</span>";
                itemStyle = "font-weight: bold; color: #fff;";
            } else if (diffDays > 0 && diffDays <= 14) {
                countdownStr = `<span class='event-countdown'>(還有 ${diffDays} 天)</span>`;
                if (ev.type === "holiday" && !upcomingHolidayMsg) {
                    upcomingHolidayMsg = `<div style="color:#ff8a65; font-size:0.95em; margin-top:6px;">🌴 溫馨提醒：再撐 ${diffDays} 天就【${ev.name}】啦！</div>`;
                }
            }

            const defaultDateDisplay = ev.start === ev.end ? ev.start : `${ev.start}~${ev.end}`;
            const finalDateDisplay = ev.display || defaultDateDisplay;

            eventHTML += `
                <div class="event-item" style="${itemStyle}">
                    <span class="event-date">${finalDateDisplay}</span>
                    <span>${ev.name}</span>
                    ${countdownStr}
                </div>
            `;
        }
    });

    if (eventHTML === "") eventHTML = "<div class='event-item'>近期 30 天內無重大活動</div>";
    
    panelMsg.innerHTML = messageHtml + upcomingHolidayMsg;
    panelList.innerHTML = eventHTML;
}

updateEventPanel();
setInterval(updateEventPanel, 60000);