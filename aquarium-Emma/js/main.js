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
   特殊考程與搖鈴系統
========================= */
window.currentMode = 'yuyun'; 

const examBells = {
    "4/29": [ { time: "13:25", msg: "搖鈴 (國九)" },
              { time: "13:35", msg: "搖鈴 (高三)" },
              { time: "13:50", msg: "搖鈴 (高三)" },
			  { time: "14:50", msg: "搖鈴 (高三)" },],
    "4/22": [ { time: "08:50", msg: "搖鈴 (國九)" },
              { time: "11:10", msg: "搖鈴 (國九)" },
              { time: "11:20", msg: "搖鈴 (國九)" }, ]
};

const modes = ['chienyun', 'yuyun', 'yuwen', 'exam'];
modes.forEach(mode => {
    const btn = document.getElementById(`btn-${mode}`);
    if (btn) {
        btn.addEventListener("pointerdown", (e) => {
            e.stopPropagation(); 
            window.currentMode = mode;
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateHUD(); 
        });
    }
});

/* =========================
   左上角：專屬行政輪值課表 (已恢復本地連動，不再當機)
========================= */
const periods = [
    { name:"第一節", start:490, end:540 }, { name:"第二節", start:550, end:600 }, { name:"第三節", start:610, end:660 }, { name:"第四節", start:665, end:715 }, { name:"第五節", start:775, end:825 }, { name:"第六節", start:835, end:885 }, { name:"第七節", start:890, end:940 }, { name:"第八節", start:950, end:1000 }, { name:"第九節", start:1005, end:1050 }, { name:"行政輪值", start:1050, end:1200 } 
];

const schedules = {
    chienyun: {
        1: { 1: {class:"國七A3組", subject:"英語文"} },
        3: { 7: {class:"國七A3組", subject:"英語文"} },
        4: { 2: {class:"國七A3組", subject:"英語文"}, 9: {class:"國七A3組", subject:"英文素養"} }
    },
    yuyun: {
        1: { 2: {class:"國七A+組", subject:"數學"}, 5: {class:"國七A班", subject:"生活科技"}, 6: {class:"國七A班", subject:"資訊科技"}, 8: {class:"國八B組", subject:"數學"}, 9: {class:"國八B組", subject:"數學"} },
        2: { 2: {class:"國七A+組", subject:"數學"}, 5: {class:"高一班", subject:"多元選修"}, 6: {class:"高一班", subject:"多元選修"} },
        3: { 2: {class:"國七A+組", subject:"數學"}, 3: {class:"國八B組", subject:"數學"}, 4: {class:"國八B組", subject:"數學"}, 5: {class:"國七B班", subject:"生活科技"}, 6: {class:"國七B班", subject:"資訊科技"}, 9: {class:"高三理組", subject:"自然探究"}, 10: {class:"辦公室", subject:"行政輪值"} },
        4: { 3: {class:"國七A+組", subject:"數學"}, 5: {class:"國八B組", subject:"數學"}, 6: {class:"國八B組", subject:"數學"}, 9: {class:"國八B班", subject:"數學"} },
        5: { 8: {class:"國七A+組", subject:"數學"} }
    },
    yuwen: {
        1: { 2: {class:"國九A2組", subject:"英語文"}, 5: {class:"高一A2組", subject:"ESL"}, 9: {class:"國七B組", subject:"ESL"} },
        2: { 5: {class:"國七B組", subject:"ESL"}, 6: {class:"國七B組", subject:"ESL"}, 9: {class:"高一A2組", subject:"ESL"} },
        3: { 3: {class:"國七B組", subject:"ESL"}, 4: {class:"國九A2組", subject:"英語文"}, 7: {class:"高一A2組", subject:"ESL"}, 8: {class:"高一A2組", subject:"ESL"}, 9: {class:"高二A+組", subject:"ESL"} },
        4: { 6: {class:"國九A2組", subject:"英語文"}, 7: {class:"國七B組", subject:"ESL"}, 8: {class:"國七B組", subject:"ESL"} },
        5: { 8: {class:"國九A2組", subject:"英語文"} }
    }
};

function isTuesdayElectiveDay(d) {
    const validDates = ["3/10", "3/17", "3/24", "5/19", "5/26", "6/2"];
    return validDates.includes(`${d.getMonth() + 1}/${d.getDate()}`);
}

function nowMinutes(d=new Date()){ return d.getHours()*60 + d.getMinutes(); }

function getCurrentPeriodStatus(d = new Date()) {
    const wd = d.getDay(); const m = nowMinutes(d); const activeSchedule = schedules[window.currentMode];
    for(let i=0; i<periods.length; i++){
        const index = i+1; 
        if(m >= periods[i].start && m <= periods[i].end){
            let lessonInfo = null;
            if(activeSchedule && activeSchedule[wd] && activeSchedule[wd][index]){
                lessonInfo = activeSchedule[wd][index];
                if(window.currentMode === 'yuyun' && wd === 2 && (index === 5 || index === 6) && !isTuesdayElectiveDay(d)) lessonInfo = null;
            }
            if(lessonInfo) return { type: "class", periodName: periods[i].name, ...lessonInfo };
            else return { type: "empty", periodName: periods[i].name };
        }
    }
    return { type: "break" }; 
}

function getNextLesson(d=new Date()){
    const wd=d.getDay(); const activeSchedule = schedules[window.currentMode];
    if(!activeSchedule || !activeSchedule[wd]) return null;
    const m=nowMinutes(d); let list=[];
    for(let i=0;i<periods.length;i++){
        const index=i+1;
        if(activeSchedule[wd][index] && m<periods[i].start){
            if(window.currentMode === 'yuyun' && wd === 2 && (index === 5 || index === 6) && !isTuesdayElectiveDay(d)) continue;
            list.push({ ...activeSchedule[wd][index], period:periods[i].name, start:periods[i].start });
        }
    }
    if(list.length===0) return null;
    list.sort((a,b)=>a.start-b.start);
    return list[0];
}

function updateHUD(){
    try {
        const d=new Date(); clockEl.textContent=d.toLocaleTimeString();
        
        const daysTw = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        const weekdayBadge = document.getElementById("weekday-badge");
        if (weekdayBadge) weekdayBadge.textContent = daysTw[d.getDay()];

        if (window.currentMode === 'exam') {
            const dateStr = `${d.getMonth() + 1}/${d.getDate()}`;
            const bellsToday = examBells[dateStr];
            if (!bellsToday) {
                periodEl.textContent = `📝 考程模式 (今天 ${dateStr} 無考程)`; nextEl.innerHTML = "請切換上方按鈕以檢視正常作息";
            } else {
                periodEl.textContent = `📝 考程進行中 (${dateStr})`;
                const nowMins = nowMinutes(d); let nextBell = null;
                for (let b of bellsToday) {
                    const [bh, bm] = b.time.split(':').map(Number);
                    if (bh * 60 + bm > nowMins) { nextBell = b; break; }
                }
                if (nextBell) {
                    const [bh, bm] = nextBell.time.split(':').map(Number);
                    const target = new Date(d); target.setHours(bh, bm, 0, 0);
                    const now = new Date(d); now.setMilliseconds(0);
                    const diff = Math.max(0, target - now);
                    nextEl.innerHTML = `<span style="color:#ffb74d;">下一個搖鈴：${nextBell.time} ${nextBell.msg}</span><br>倒數 ${Math.floor(diff/60000)} 分 ${Math.floor((diff%60000)/1000)} 秒`;
                } else nextEl.innerHTML = "今日搖鈴均已順利結束！";
            }
            return; 
        }

        const status = getCurrentPeriodStatus(d); const next = getNextLesson(d);
        let teacherName = window.currentMode === 'chienyun' ? "千芸主任 " : (window.currentMode === 'yuyun' ? "昱澐組長 " : "妤文組長 ");

        if(status.type === "class") periodEl.textContent = `🧑‍🏫 ${teacherName}上課：${status.class} ${status.subject}（${status.periodName}）`;
        else if (status.type === "empty") periodEl.textContent = `☕ ${teacherName}現在：${status.periodName} / 空堂`;
        else periodEl.textContent = `🌴 ${teacherName}現在：下課時間 / 午休`;

        if(next){
            const target=new Date(d); target.setHours(Math.floor(next.start/60), next.start%60, 0, 0);
            const diff = Math.max(0, target - new Date(d).setMilliseconds(0));
            nextEl.innerHTML= `下一堂：${next.class} ${next.subject}（${next.period}）倒數 ${Math.floor(diff/60000)} 分 ${Math.floor((diff%60000)/1000)} 秒 <br><span style="color:#ffb74d; font-size:0.9em; display:inline-block; margin-top:4px;">(提醒：鐘聲會提早 36 秒響起)</span>`;
        }else nextEl.innerHTML="今天課程與輪值已結束";
    } catch (err) { console.error("HUD 更新錯誤", err); }
}
setInterval(updateHUD,500); updateHUD();

/* =========================
   丟飼料互動
========================= */
window.addEventListener("pointerdown", (e) => {
    if(e.target.closest("#hud") || e.target.closest(".jellyfish-svg") || e.target.closest(".big-bubble") || e.target.closest(".mascot-container") || e.target.closest("#god-light-btn")) return;
    let cx = e.clientX; let cy = e.clientY;
    if(cx === undefined || cy === undefined) return;
    for(let i=0;i<5;i++){
        const foodEl = document.createElement("div"); foodEl.className = "food-dot";
        const startX = cx + (Math.random()*40-20); const startY = cy + (Math.random()*40-20);
        foodEl.style.left = startX + "px"; foodEl.style.top = startY + "px";
        tank.appendChild(foodEl); foods.push({ el: foodEl, x: startX, y: startY });
    }
});

/* =========================
   3D 魚群系統 
========================= */
const fishes=[]; const foods=[];
const fish3DPalette = [ { c1: '#ffcf6a', c2: '#ff7a45', c3: '#ff3d7b' }, { c1: '#7bf7ff', c2: '#1dd6c2', c3: '#0b7cff' }, { c1: '#b4ff7b', c2: '#47d61d', c3: '#0b9cff' }, { c1: '#ffb47b', c2: '#d6471d', c3: '#ff0b9c' }, { c1: '#e0c3fc', c2: '#8ec5fc', c3: '#4facfe' } ];
let fishCount = 0;
function createFish(index){
    const fish = document.createElement("div"); fish.className = "fish-svg";
    const color = fish3DPalette[index % fish3DPalette.length];
    const hueShift = Math.floor(Math.random() * 60 - 30); 
    const baseScale = Math.random() * 0.25 + 0.35; 
    const uid = fishCount++;
    fish.innerHTML=`<svg viewBox="0 0 220 120" width="100%" height="100%" style="overflow:visible;"><defs><linearGradient id="bodyGrad${uid}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${color.c1}"/><stop offset="0.55" stop-color="${color.c2}"/><stop offset="1" stop-color="${color.c3}"/></linearGradient><linearGradient id="shineGrad${uid}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="rgba(255,255,255,.75)"/><stop offset="0.6" stop-color="rgba(255,255,255,0)"/></linearGradient></defs><g style="transform-origin: center; filter: hue-rotate(${hueShift}deg);"><g class="wiggle"><path class="tail-anim" d="M35,60 C8,40 6,24 10,16 C26,22 48,36 58,52 C50,44 46,76 56,84 C46,86 22,100 10,104 C6,96 10,78 35,60Z" fill="rgba(255,255,255,.20)"/><path d="M55,60 C70,20 140,10 180,35 C205,50 205,70 180,85 C140,110 70,100 55,60Z" fill="url(#bodyGrad${uid})"/><path d="M68,68 C90,95 140,98 168,82 C150,103 95,104 70,80Z" fill="rgba(0,0,0,.14)"/><path class="fin-anim" d="M120,62 C110,45 122,35 140,36 C132,44 132,58 140,70 C128,70 122,68 120,62Z" fill="rgba(255,255,255,.25)"/><path class="gill-anim" d="M140,58 C132,52 132,68 140,62" stroke="rgba(0,0,0,.25)" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M75,48 C95,28 135,24 165,38 C135,36 110,42 90,56 C82,58 74,56 75,48Z" fill="url(#shineGrad${uid})" opacity=".55"/><circle cx="162" cy="56" r="9" fill="rgba(255,255,255,.88)"/><circle cx="165" cy="58" r="4.5" fill="#10202b"/><circle cx="167" cy="56" r="1.6" fill="rgba(255,255,255,.85)"/></g></g></svg>`;
    fish.style.filter = "saturate(0.3) brightness(0.7)";
    tank.appendChild(fish);
    fishes.push({ el:fish, x: (Math.random()* window.innerWidth), y: (Math.random()* window.innerHeight), vx:(Math.random()-0.5)*1.5, vy:(Math.random()-0.5)*1.5, baseScale: baseScale, currentScale: baseScale, foodEaten: 0, isFull: false });
}
for(let i=0;i<7;i++) createFish(i);
function updateFish(){
    const W = window.innerWidth; const H = window.innerHeight;
    for(let i=foods.length-1; i>=0; i--){ let food = foods[i]; food.y += 0.8; food.el.style.top = food.y + "px"; if(food.y > H){ food.el.remove(); foods.splice(i, 1); } }
    for(let f of fishes){
        if (isNaN(f.x) || isNaN(f.y) || isNaN(f.vx) || isNaN(f.vy)) { f.x = W / 2; f.y = H / 2; f.vx = 0; f.vy = 0; }
        f.foodEaten = Math.max(0, f.foodEaten - 0.005); if (f.foodEaten <= 2) f.isFull = false;
        if(foods.length > 0 && !f.isFull){
            let closest=null; let min=Infinity;
            for(let food of foods){ let dx=food.x-f.x; let dy=food.y-f.y; let d=Math.hypot(dx,dy); if(d<min){ min=d; closest=food; } }
            if(closest){
                let dx=closest.x-f.x; let dy=closest.y-f.y; let d=Math.max(1,Math.hypot(dx,dy)); f.vx+=dx/d*0.3; f.vy+=dy/d*0.3;
                if(d<15){ f.foodEaten += 1; if (f.foodEaten >= 5) { f.foodEaten = 5; f.isFull = true; } const index = foods.indexOf(closest); if(index > -1) { closest.el.remove(); foods.splice(index, 1); } }
            }
            f.vx*=0.95; f.vy*=0.95;
        } else {
            f.vx += (Math.random() - 0.5) * 0.1; f.vy += (Math.random() - 0.5) * 0.1;
            let speed = Math.hypot(f.vx, f.vy); if(speed > 1) { f.vx /= speed; f.vy /= speed; }
        }
        f.x+=f.vx; f.y+=f.vy; f.x=Math.max(0,Math.min(W-160,f.x)); f.y=Math.max(0,Math.min(H-87,f.y));
        const targetScale = f.baseScale + (f.foodEaten / 5) * 0.45; f.currentScale += (targetScale - f.currentScale) * 0.05; 
        const sat = 0.3 + (f.foodEaten / 5) * 0.7; const bri = 0.7 + (f.foodEaten / 5) * 0.3; 
        f.el.style.filter = `saturate(${sat}) brightness(${bri})`;
        if(f.vx<0) f.el.style.transform=`translate(${f.x}px,${f.y}px) scaleX(-${f.currentScale}) scaleY(${f.currentScale})`;
        else f.el.style.transform=`translate(${f.x}px,${f.y}px) scaleX(${f.currentScale}) scaleY(${f.currentScale})`;
    }
    requestAnimationFrame(updateFish);
}
updateFish();

// 環境：氣泡與水母
const bubbles = []; const bigBubbles = []; const jellyfishes = [];
function createBubble(){
    const size = Math.random()*8 + 6; const bubble = { x: Math.random()*window.innerWidth, y: window.innerHeight + Math.random()*100, size: size, speed: Math.random()*0.8 + 0.5, el: document.createElement("div") };
    bubble.el.className = "bubble"; bubble.el.style.width = size + "px"; bubble.el.style.height = size + "px"; tank.appendChild(bubble.el); bubbles.push(bubble);
}
for(let i=0;i<40;i++) createBubble();
function createBigBubble(x, y) {
    const size = Math.random()*15 + 20; const b = document.createElement("div"); b.className = "big-bubble"; b.style.width = size + "px"; b.style.height = size + "px"; tank.appendChild(b);
    const bObj = { el: b, x: x, y: y, speed: Math.random()*0.4 + 0.3, popped: false }; bigBubbles.push(bObj);
    b.addEventListener("pointerdown", (e) => { e.stopPropagation(); if (bObj.popped) return; bObj.popped = true; b.style.transform = `translate(${bObj.x}px, ${bObj.y}px) scale(2)`; b.style.opacity = "0"; setTimeout(() => { b.remove(); const idx = bigBubbles.indexOf(bObj); if (idx > -1) bigBubbles.splice(idx, 1); }, 150); });
}

let jellyCount = 0;
function createJellyfish() {
    const j = document.createElement("div"); j.className = "jellyfish-svg floaty"; const uid = jellyCount++;
    j.innerHTML = `<svg viewBox="0 0 240 260" width="100%" height="100%" class="soft"><defs><linearGradient id="jBell${uid}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--jelly1)"/><stop offset="1" stop-color="var(--jelly2)"/></linearGradient><linearGradient id="jShine${uid}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="var(--shine)"/><stop offset="0.7" stop-color="rgba(255,255,255,0)"/></linearGradient></defs><g class="jelly-tentacles2" opacity=".85"><path d="M96,160 C84,190 92,214 78,244" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="5" stroke-linecap="round"/><path d="M120,164 C110,194 122,214 110,246" fill="none" stroke="rgba(255,255,255,.30)" stroke-width="5" stroke-linecap="round"/><path d="M144,160 C154,194 142,214 156,246" fill="none" stroke="rgba(255,255,255,.33)" stroke-width="5" stroke-linecap="round"/></g><g class="jelly-bell"><path d="M60,118 C60,62 92,30 120,30 C148,30 180,62 180,118 C172,132 156,140 120,140 C84,140 68,132 60,118Z" fill="url(#jBell${uid})"/><path d="M64,118 C78,132 96,138 120,138 C144,138 162,132 176,118" fill="none" stroke="rgba(23,50,58,.14)" stroke-width="6" stroke-linecap="round"/><path d="M86,62 C100,44 128,42 154,56 C132,54 112,58 98,70 C92,74 86,70 86,62Z" fill="url(#jShine${uid})" opacity=".7"/><circle cx="112" cy="96" r="5" fill="rgba(255,255,255,.85)"/><circle cx="130" cy="96" r="5" fill="rgba(255,255,255,.85)"/><circle cx="113.8" cy="98" r="2.2" fill="var(--ink)"/><circle cx="131.8" cy="98" r="2.2" fill="var(--ink)"/></g><g class="jelly-tentacles"><path d="M86,150 C72,182 78,210 60,246" fill="none" stroke="rgba(255,255,255,.42)" stroke-width="6" stroke-linecap="round"/><path d="M108,152 C92,186 108,214 96,248" fill="none" stroke="rgba(255,255,255,.36)" stroke-width="6" stroke-linecap="round"/><path d="M132,152 C148,186 132,214 144,248" fill="none" stroke="rgba(255,255,255,.38)" stroke-width="6" stroke-linecap="round"/><path d="M154,150 C168,182 162,210 180,246" fill="none" stroke="rgba(255,255,255,.40)" stroke-width="6" stroke-linecap="round"/></g></svg>`;
    tank.appendChild(j);
    const jObj = { el: j, x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2 - 0.5, pulse: Math.random() * 10 };
    j.addEventListener("pointerdown", (e) => { e.stopPropagation(); jObj.vx = (Math.random() > 0.5 ? 1 : -1) * (6 + Math.random()*4); jObj.vy = - (6 + Math.random()*4); }); jellyfishes.push(jObj);
}
for(let i=0; i<6; i++) createJellyfish();

function updateEcosystem(){
    const W = window.innerWidth; const H = window.innerHeight;
    for(let b of bubbles){ b.y -= b.speed; b.x += Math.sin(b.y / 30) * 0.5; if(b.y < -20){ b.y = H + 20; b.x = Math.random() * W; } b.el.style.transform = `translate(${b.x}px, ${b.y}px)`; }
    const turtle = document.querySelector('.turtle-container');
    if (turtle && Math.random() < 0.01) { const rect = turtle.getBoundingClientRect(); if (rect.right > 0 && rect.left < W) createBigBubble(rect.left + 120, rect.top + 50); }
    for (let i = bigBubbles.length - 1; i >= 0; i--) { let b = bigBubbles[i]; if (b.popped) continue; b.y -= b.speed; b.x += Math.sin(b.y / 20) * 0.8; if (b.y < -50) { b.el.remove(); bigBubbles.splice(i, 1); continue; } b.el.style.transform = `translate(${b.x}px, ${b.y}px)`; }
    for (let j of jellyfishes) { j.pulse += 0.05; j.vx += (Math.random() - 0.5) * 0.1; j.vy += (Math.random() - 0.5) * 0.1 - 0.01; j.vx *= 0.94; j.vy *= 0.94; j.x += j.vx; j.y += j.vy; if (j.x < 0) { j.x = 0; j.vx = Math.abs(j.vx)*0.5; } if (j.x > W - 100) { j.x = W - 100; j.vx = -Math.abs(j.vx)*0.5; } if (j.y < 0) { j.y = 0; j.vy = Math.abs(j.vy)*0.5; } if (j.y > H - 120) { j.y = H - 120; j.vy = -Math.abs(j.vy)*0.5; } let scaleX = 1 + Math.sin(j.pulse) * 0.05; let scaleY = 1 - Math.sin(j.pulse) * 0.05; let rot = j.vx * 2; j.el.style.transform = `translate(${j.x}px, ${j.y}px) rotate(${rot}deg) scale(${scaleX}, ${scaleY})`; }
    requestAnimationFrame(updateEcosystem);
}
updateEcosystem();

// 大鯨魚
const giantWhale = document.getElementById("giant-whale");
function summonWhale() {
    if(!giantWhale || giantWhale.classList.contains("swim-across")) return;
    giantWhale.classList.add("swim-across");
    setTimeout(() => { giantWhale.classList.remove("swim-across"); }, 60000); 
}
setInterval(summonWhale, 900000);
const myClock = document.getElementById("clock");
if(myClock) myClock.addEventListener("click", summonWhale);


/* =========================================================
   行事曆與【每日金句】系統
========================================================= */
const waveQuotes = [
    "🌞 我從來一向擁有超級心智", 
	"💪 我從來一向是個天才",
	"🏃 我從來一向化未知為已知", 
	"✨ 我從來一向煥發健康", 
	"🎯 我從來一向無比富有", 
	"🎉 我從來一向深深被愛著", 
	"🏖️ 我從來一向在真理之中",
	"🏖️ 我從來一向謹言慎行"
];

const schoolEvents = [
    { name: "228連假", start: "02/27", end: "03/01", type: "holiday" },
    { name: "全校複習考", start: "03/02", end: "03/04" },
    { name: "國語文競賽、外師外聘老師鐘點", start: "03/05", end: "03/05" },
    { name: "學校日", start: "03/07", end: "03/07" },
    { name: "國七新生獎學金甄試1", start: "03/08", end: "03/08" },
    { name: "第一次段考試卷繳交", start: "03/09", end: "03/16" },
    { name: "國七新生獎學金甄試2", start: "03/14", end: "03/14" },
    { name: "國七新生共識面談1", start: "03/15", end: "03/15" },
    { name: "日本仙台來訪-Sandra課務處理", start: "03/16", end: "03/18" },
    { name: "專任行政鐘點", start: "03/16", end: "03/18" },
    { name: "班際球類競賽", start: "03/20", end: "03/20" },
    { name: "國七新生共識面談2、假日營隊(五)", start: "03/21", end: "03/21" },
    { name: "第一次段考-高一洪窬廷公假、7A蔡楷祺8B蔡兆熙請假", start: "03/31", end: "04/01", display: "03/31~04/01" },
    { name: "清明連假", start: "04/03", end: "04/06", type: "holiday" },
    { name: "高二教育旅行-Sandra、玉華公差", start: "04/06", end: "04/10" },
    { name: "國八教育旅行-倪主任、世宗、Dona公差", start: "04/07", end: "04/10" },
    { name: "高三重補修", start: "04/07", end: "04/30" },
    { name: "貓咪盃全國賽-昱澐公差", start: "04/09", end: "04/11" },
    { name: "印尼來訪-Samdra,Dona,世宗課務", start: "03/13", end: "03/15" },
    { name: "第一次作業普查/抽查", start: "04/13", end: "04/17" },
    { name: "國九高三畢業考試卷繳交", start: "04/13", end: "04/20" },
    { name: "假日營隊(六)-教務處帶隊", start: "04/18", end: "04/18" },
    { name: "高三成年禮-3、4節，秀玫代課", start: "04/17", end: "04/17" },
    { name: "國九模擬考", start: "04/21", end: "04/22", display: "04/21.22" },
    { name: "3月專任老師鐘點計算", start: "04/20", end: "04/22" },
    { name: "英語文競賽", start: "04/23", end: "04/23" },
    { name: "國九包高中", start: "04/28", end: "04/28" },
    { name: "第二次段考試卷繳交", start: "04/27", end: "05/04" },
    { name: "國九.高三畢業考", start: "04/29", end: "04/30", display: "04/29.30" },
    { name: "勞動節連假", start: "05/01", end: "05/03", type: "holiday" },
    { name: "國七新生登記", start: "05/09", end: "05/09" },
	{ name: "國九高三補考", start: "05/11", end: "05/11" },
    { name: "第二次段考", start: "05/13", end: "05/14", display: "05/13.14" },
    { name: "國中教育會考", start: "05/16", end: "05/17", display: "05/16.17" },
    { name: "假日營隊(七)", start: "05/16", end: "05/16" },
    { name: "校慶、高中新生家長說明會", start: "05/23", end: "05/23" },
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
    const panelMsg = document.getElementById("quoteMessage"); 
    const panelList = document.getElementById("eventList");
    if (!panelMsg || !panelList) return;
    
    const now = new Date(); 
    const currentYear = now.getFullYear();
    const today = new Date(currentYear, now.getMonth(), now.getDate());

    const startOfYear = new Date(currentYear, 0, 0);
    const diffTime = now - startOfYear;
    const dayOfYear = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    const quote = waveQuotes[dayOfYear % waveQuotes.length];
    
    // 【修改】使用 flex 排版，讓第二行字完美縮排在冒號後面
    panelMsg.innerHTML = `<span class="quote-icon">✨ 每日金句：</span><span class="quote-text">"${quote}"</span>`;

    let eventHTML = ""; let upcomingHolidayMsg = "";

    schoolEvents.forEach(ev => {
        const [sm, sd] = ev.start.split('/').map(Number); const [em, ed] = ev.end.split('/').map(Number);
        const startDate = new Date(currentYear, sm - 1, sd); const endDate = new Date(currentYear, em - 1, ed);
        if (endDate < today) return;
        const diffDays = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));

        if (diffDays <= 30) {
            let countdownStr = ""; let itemStyle = "";
            if (diffDays < 0 && endDate >= today) countdownStr = "<span class='event-countdown' style='color:#a2c4d2;'>(進行中)</span>";
            else if (diffDays === 0) { countdownStr = "<span class='event-countdown' style='color:#ff6b6b;'>(就是今天！)</span>"; itemStyle = "font-weight: bold; color: #fff;"; }
            else if (diffDays > 0 && diffDays <= 14) {
                countdownStr = `<span class='event-countdown'>(還有 ${diffDays} 天)</span>`;
                if (ev.type === "holiday" && !upcomingHolidayMsg) upcomingHolidayMsg = `<div style="color:#ff8a65; font-size:0.95em; margin-top:6px; border-top:1px dashed rgba(255,255,255,0.3); padding-top:6px;">🌴 溫馨提醒：再撐 ${diffDays} 天就放【${ev.name}】啦！</div>`;
            }
            const finalDateDisplay = ev.display || (ev.start === ev.end ? ev.start : `${ev.start}~${ev.end}`);
            eventHTML += `<div class="event-item" style="${itemStyle}"><span class="event-date">${finalDateDisplay}</span><span class="event-name">${ev.name}</span>${countdownStr}</div>`;
        }
    });

    if (eventHTML === "") eventHTML = "<div class='event-item'>近期 30 天內無重大活動</div>";
    panelList.innerHTML = eventHTML + upcomingHolidayMsg;
}
updateEventPanel(); setInterval(updateEventPanel, 60000);

/* =========================================================
   Google 試算表調代課陣列抓取 (水族箱雙向調課支援版)
========================================================= */
const RAW_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTMAfnrLA8lnVeikakXNnsJ0gh-tJP3PHkX1vd5hlhGU9BjbP7KgTQ-divWsg7NQCdb1BaGq6OOrJpC/pubhtml";
const SHEET_CSV_URL = RAW_URL.replace(/\/pubhtml.*/, '/pub?output=csv');

let substituteData = [];

function parseCSV(text) {
    const result = []; let row = []; let col = ''; let inQuotes = false;
    for (let i = 0; i < text.length; i++) {
        let c = text[i];
        if (inQuotes) {
            if (c === '"') { if (text[i + 1] === '"') { col += '"'; i++; } else { inQuotes = false; } } else { col += c; }
        } else {
            if (c === '"') { inQuotes = true; }
            else if (c === ',') { row.push(col.trim()); col = ''; }
            else if (c === '\n') { row.push(col.trim()); result.push(row); col = ''; row = []; }
            else if (c !== '\r') { col += c; }
        }
    }
    if (col || row.length) { row.push(col.trim()); result.push(row); }
    return result;
}

// 幫助解析各種格式的日期字串為 MM/DD
function parseDateStr(rawDate) {
    if (!rawDate) return "";
    let nums = rawDate.split(/[\/\-]/).map(n => parseInt(n, 10));
    if (nums.length >= 3) {
        if (nums[0] > 1000) return `${nums[1]}/${nums[2]}`;
        else return `${nums[0]}/${nums[1]}`;
    } else if (nums.length === 2) {
        return `${nums[0]}/${nums[1]}`;
    }
    return rawDate;
}

async function loadSubstituteData() {
    try {
        // 【修正】：只保留時間戳破壞快取，拔除會觸發安全警報的 { cache: "no-store" }
        const fetchUrl = SHEET_CSV_URL + "&t=" + new Date().getTime();
        const res = await fetch(fetchUrl); 
        const text = await res.text();
        if (text.trim().startsWith("<")) return;
        
        const rows = parseCSV(text);
        let parsed = [];
        
        for (let i = 1; i < rows.length; i++) {
            const cols = rows[i];
            if(cols.length >= 8 && cols[5]) {
                let rawDate1 = cols[0] ? cols[0].trim() : ""; 
                if(!rawDate1) continue;
                
                let date1 = parseDateStr(rawDate1);
                if(!date1 || date1.includes("NaN")) continue;
                
                let periodMatch1 = String(cols[5]).match(/\d+/);
                if(!periodMatch1) continue;
                let period1 = parseInt(periodMatch1[0], 10);
                
                let origTeacher1 = cols[2] ? cols[2].trim() : "";
                let className1 = cols[3] ? cols[3].trim() : "";
                let typeVal = cols[6] ? cols[6].trim() : "";
                let subTeacher1 = cols[7] ? cols[7].trim() : "";

                // 第一筆：請假/調出 (日期A, 老師C 的課交給 老師H)
                parsed.push({ 
                    date: date1, 
                    origTeacher: origTeacher1, 
                    className: className1, 
                    period: period1, 
                    type: typeVal, 
                    subTeacher: subTeacher1 
                });

                // 【雙向調課還原邏輯】：如果是調課，而且後續的還課日期(I)與節次(K)都有填
                if (typeVal === "調" && cols.length >= 11 && cols[8] && cols[10]) {
                    let rawDate2 = cols[8].trim();
                    if (rawDate2) {
                        let date2 = parseDateStr(rawDate2);
                        let periodMatch2 = String(cols[10]).match(/\d+/);
                        if (date2 && !date2.includes("NaN") && periodMatch2) {
                            let period2 = parseInt(periodMatch2[0], 10);
                            let className2 = cols[9] ? cols[9].trim() : className1;
                            
                            // 第二筆：還課 (日期I, 老師H 原本的課，交給 老師C 來上)
                            parsed.push({
                                date: date2,
                                origTeacher: subTeacher1,
                                className: className2,
                                period: period2,
                                type: "調(補)",
                                subTeacher: origTeacher1
                            });
                        }
                    }
                }
            }
        }
        substituteData = parsed;
        console.log("✅ 水族箱調代課資料載入成功！共 " + substituteData.length + " 筆變動。");
        
        // 觸發水族箱精靈更新
        if (typeof updateHUD === "function") updateHUD(); 
    } catch(e) {
        console.error("❌ 水族箱調代課資料載入失敗：", e);
    }
}

loadSubstituteData();
setInterval(loadSubstituteData, 900000);

function isClassMatch(sheetClass, systemClass) {
    if (!sheetClass || !systemClass) return false;
    if (sheetClass === systemClass) return true;
    if (sheetClass.includes(systemClass)) return true;
    if (systemClass.includes(sheetClass)) return true;
    
    const gradeMatch = systemClass.substring(0, 2); 
    const cleanSheetClass = sheetClass.replace(/組/g, '').replace(/班/g, '');
    
    if (cleanSheetClass.includes(gradeMatch)) {
        if (systemClass === "高一") return true;
        if (systemClass.includes("A") && (cleanSheetClass.includes("A") || cleanSheetClass.includes("Ａ"))) return true;
        if (systemClass.includes("B") && (cleanSheetClass.includes("B") || cleanSheetClass.includes("Ｂ"))) return true;
        if (systemClass.includes("理") && cleanSheetClass.includes("理")) return true;
        if (systemClass.includes("文") && cleanSheetClass.includes("文")) return true;
    }
    return false;
}

function findSubstitute(dateStr, period, targetClass) {
    return substituteData.find(sub => sub.date === dateStr && sub.period === period && isClassMatch(sub.className, targetClass));
}

/* =========================================================
   守護地景精靈互動與課表廣播系統 
========================================================= */
const mascotMapping = {
    'mascot-h1': ['高一'],
    'mascot-h2': ['高二理組', '高二文組'],
    'mascot-h3': ['高三理組', '高三文組'],
    'mascot-j9a': ['國九A'],
    'mascot-j9b': ['國九B'],
    'mascot-j8a': ['國八A'],
    'mascot-j8b': ['國八B'],
    'mascot-j7a': ['國七A'],
    'mascot-j7b': ['國七B']
};

function getTaipeiDatePartsForMap() {
    const now = new Date();
    // 【完美修復】這裡加入了 year, month, day 讓精靈有日期感知能力！
    const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Asia/Taipei',
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', hour12: false, weekday: 'long'
    }).formatToParts(now);
    
    const obj = Object.fromEntries(parts.map(p => [p.type, p.value]));
    const weekMap = { "Monday":"星期一","Tuesday":"星期二","Wednesday":"星期三","Thursday":"星期四","Friday":"星期五" };
    const day = weekMap[obj.weekday] || obj.weekday;
    
    const hm = Number(obj.hour)*60 + Number(obj.minute);
    let currentPeriod = null;
    
    for (const p of SCHOOL_DATA.periods) {
        const [sh, sm] = p.start.split(':').map(Number);
        const [eh, em] = p.end.split(':').map(Number);
        if (hm >= sh * 60 + sm && hm <= eh * 60 + em) {
            currentPeriod = p.period;
            break;
        }
    }
    
    const todayStr = `${parseInt(obj.month, 10)}/${parseInt(obj.day, 10)}`;
    return { day, currentPeriod, todayStr };
}

function formatScheduleText(classes) {
    const info = getTaipeiDatePartsForMap();
    if (!["星期一","星期二","星期三","星期四","星期五"].includes(info.day) || !info.currentPeriod) {
        if(classes.length > 1) return `<div class="z-class">${classes[0].substring(0,2)}</div><div class="z-sub">全下課 / 休息</div>`;
        return `<div class="z-class">${classes[0]}</div><div class="z-sub">下課 / 休息</div>`;
    }

    let html = '';
    if (classes.length > 1) {
        html += `<div class="z-class">${classes[0].substring(0,2)}</div><div class="z-sub">`;
        classes.forEach(cls => {
            const entries = (((SCHOOL_DATA.classSchedule[cls] || {})[info.day] || {})[String(info.currentPeriod)] || []);
            const groupName = cls.includes("理") ? "[理]" : "[文]";
            
            const subInfo = findSubstitute(info.todayStr, info.currentPeriod, cls);
            
            if (subInfo) {
                html += `${groupName} <span style="color:#ffb74d; font-weight:bold;">[${subInfo.type}] ${subInfo.subTeacher}</span> <span style="font-size:0.85em; opacity:0.8;">(原:${subInfo.origTeacher})</span><br>`;
            } else if (entries.length === 0) {
                html += `${groupName} 空堂<br>`;
            } else {
                html += `${groupName} ${entries[0].subject} / ${entries[0].teacher}<br>`;
            }
        });
        html += `</div>`;
    } else {
        const cls = classes[0];
        const entries = (((SCHOOL_DATA.classSchedule[cls] || {})[info.day] || {})[String(info.currentPeriod)] || []);
        
        const subInfo = findSubstitute(info.todayStr, info.currentPeriod, cls);
        
        if (subInfo) {
             html += `<div class="z-class">${cls}</div><div class="z-sub"><span style="color:#ffb74d; font-weight:bold;">[${subInfo.type}] ${subInfo.subTeacher}</span><br><span style="font-size:0.85em; color:#a2c4d2;">(原:${subInfo.origTeacher})</span></div>`;
        } else if (entries.length === 0) {
            html += `<div class="z-class">${cls}</div><div class="z-sub">自習 / 空堂</div>`;
        } else {
            const subject = entries.map(e => e.subject).join(' / ');
            const teacher = entries.map(e => e.teacher).join(' / ');
            html += `<div class="z-class">${cls}</div><div class="z-sub">${subject}<br><span style="font-size:0.85em; color:#a2c4d2;">${teacher}</span></div>`;
        }
    }
    return html;
}

Object.keys(mascotMapping).forEach(id => {
    const container = document.getElementById(id);
    if (!container) return;

    container.addEventListener('pointerdown', (e) => {
        e.stopPropagation(); 
        const svg = container.querySelector('.mascot-svg');
        const bubble = container.querySelector('.speech-bubble');

        if(svg) {
            svg.classList.add('mascot-click');
            setTimeout(() => svg.classList.remove('mascot-click'), 150);
        }

        if (bubble.classList.contains('active')) {
            bubble.classList.remove('active');
            if(svg) svg.classList.remove('chest-open', 'seaweed-active', 'mascot-inflate');
        } else {
            bubble.innerHTML = formatScheduleText(mascotMapping[id]);
            bubble.classList.add('active');
            if(svg) {
                if (id === 'mascot-h3') svg.classList.add('chest-open');
                else if (id.includes('j7')) svg.classList.add('seaweed-active');
                else svg.classList.add('mascot-inflate');
            }
        }
    });
});

let isAllOpen = false;
const godLightBtn = document.getElementById('god-light-btn');

if (godLightBtn) {
    godLightBtn.addEventListener('pointerdown', (e) => {
        e.stopPropagation(); 
        isAllOpen = !isAllOpen;
        
        godLightBtn.style.transform = "translate(-50%, -50%) scale(0.85)";
        setTimeout(() => godLightBtn.style.transform = "translate(-50%, -50%) scale(1)", 150);
        
        Object.keys(mascotMapping).forEach(id => {
            const container = document.getElementById(id);
            if (!container) return;
            const svg = container.querySelector('.mascot-svg');
            const bubble = container.querySelector('.speech-bubble');
            
            if (isAllOpen) {
                bubble.innerHTML = formatScheduleText(mascotMapping[id]);
                bubble.classList.add('active');
                if(svg) {
                    if (id === 'mascot-h3') svg.classList.add('chest-open');
                    else if (id.includes('j7')) svg.classList.add('seaweed-active');
                    else svg.classList.add('mascot-inflate');
                }
            } else {
                bubble.classList.remove('active');
                if(svg) svg.classList.remove('chest-open', 'seaweed-active', 'mascot-inflate');
            }
        });
    });
}
