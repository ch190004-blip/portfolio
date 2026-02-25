const canvas = document.getElementById("aquarium");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

/* =========================
   滑鼠
========================= */

let mouse = {x:null,y:null};
canvas.addEventListener("mousemove",e=>{
    mouse.x=e.clientX;
    mouse.y=e.clientY;
});

/* =========================
   課表系統
========================= */

const schedule = [
    { name:"早自習", start:450, end:480 },
    { name:"第一節", start:490, end:540 },
    { name:"第二節", start:550, end:600 },
    { name:"第三節", start:610, end:660 },
    { name:"第四節", start:665, end:715 },
    { name:"午休", start:715, end:775 },
    { name:"第五節", start:775, end:825 },
    { name:"第六節", start:825, end:885 },
    { name:"第七節", start:890, end:940 },
    { name:"第八節", start:950, end:1000 },
    { name:"第九節", start:1005, end:1050 }
];

const myClasses = {
    1:[2,5,6,8,9],
    2:[2,5,6],
    3:[2,3,4,5,6,9],
    4:[3,5,6,9],
    5:[8]
};

function getNowMinutes(){
    const now = new Date();
    return now.getHours()*60 + now.getMinutes();
}

function getCurrentPeriod(){
    const minutes = getNowMinutes();
    for(let i=0;i<schedule.length;i++){
        if(minutes >= schedule[i].start && minutes <= schedule[i].end){
            return { ...schedule[i], index:i+1 };
        }
    }
    return null;
}

function getNextMyClass(){

    const now = new Date();
    const weekday = now.getDay();
    if(weekday < 1 || weekday > 5) return null;

    const todayList = myClasses[weekday] || [];
    const minutes = getNowMinutes();

    let candidates = [];

    for(let i=0;i<todayList.length;i++){
        const periodIndex = todayList[i] - 1;
        const period = schedule[periodIndex];

        if(minutes < period.start){
            candidates.push(period);
        }
    }

    if(candidates.length === 0) return null;

    // 取開始時間最近的一堂
    candidates.sort((a,b)=>a.start-b.start);

    return candidates[0];
}
/* =========================
   Fish
========================= */

class Fish{
    constructor(){
        this.x=Math.random()*canvas.width;
        this.y=Math.random()*canvas.height;
        this.vx=(Math.random()-0.5)*2;
        this.vy=(Math.random()-0.5)*2;
        this.size=20+Math.random()*5;
    }

    update(){

        // 食物優先
        if(foodList.length>0){
            let target=foodList[0];
            let dx=target.x-this.x;
            let dy=target.y-this.y;
            let d=Math.hypot(dx,dy);

            if(d<10){
                foodList.shift();
            }else{
                this.vx=dx/d*2;
                this.vy=dy/d*2;
            }
        }
        // 滑鼠吸引
        else if(mouse.x){
            let dx=mouse.x-this.x;
            let dy=mouse.y-this.y;
            let d=Math.hypot(dx,dy);
            if(d<200){
                this.vx+=dx/d*0.05;
                this.vy+=dy/d*0.05;
            }
        }

        this.x+=this.vx;
        this.y+=this.vy;

        this.vx*=0.99;
        this.vy*=0.99;

        // 邊界修正
        if(this.x < this.size){
            this.x=this.size;
            this.vx=Math.abs(this.vx);
        }
        if(this.x > canvas.width-this.size){
            this.x=canvas.width-this.size;
            this.vx=-Math.abs(this.vx);
        }
        if(this.y < this.size){
            this.y=this.size;
            this.vy=Math.abs(this.vy);
        }
        if(this.y > canvas.height-this.size){
            this.y=canvas.height-this.size;
            this.vy=-Math.abs(this.vy);
        }
    }

    draw(){
        ctx.save();
        ctx.translate(this.x,this.y);

        if(this.vx<0) ctx.scale(-1,1);

        const g=ctx.createLinearGradient(-this.size,0,this.size,0);
        g.addColorStop(0,"#ff9966");
        g.addColorStop(1,"#ff3300");
        ctx.fillStyle=g;

        ctx.beginPath();
        ctx.moveTo(-this.size,0);
        ctx.quadraticCurveTo(0,-this.size/1.5,this.size,0);
        ctx.quadraticCurveTo(0,this.size/1.5,-this.size,0);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(-this.size,0);
        ctx.lineTo(-this.size-15,-10);
        ctx.lineTo(-this.size-15,10);
        ctx.closePath();
        ctx.fillStyle="#ff6633";
        ctx.fill();

        ctx.fillStyle="white";
        ctx.beginPath();
        ctx.arc(this.size/3,-3,4,0,Math.PI*2);
        ctx.fill();

        ctx.fillStyle="black";
        ctx.beginPath();
        ctx.arc(this.size/3,-3,2,0,Math.PI*2);
        ctx.fill();

        ctx.restore();
    }
}

/* =========================
   Food
========================= */

class Food{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.size=5;
        this.speed=1;
    }
    update(){ this.y+=this.speed; }
    draw(){
        ctx.fillStyle="#5c4033";
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }
}

/* =========================
   Bubble
========================= */

class Bubble{
    constructor(){
        this.x=Math.random()*canvas.width;
        this.y=canvas.height+Math.random()*200;
        this.size=Math.random()*6+3;
        this.speed=Math.random()*1+0.5;
        this.alpha=Math.random()*0.5+0.3;
    }
    update(){
        this.y-=this.speed;
        if(this.y<-10){
            this.y=canvas.height+20;
            this.x=Math.random()*canvas.width;
        }
    }
    draw(){
        ctx.save();
        ctx.globalAlpha=this.alpha;
        ctx.strokeStyle="white";
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.stroke();
        ctx.restore();
    }
}

/* =========================
   光影
========================= */

let waveTime=0;
function drawLight(){
    waveTime+=0.02;
    ctx.globalAlpha=0.08;
    ctx.fillStyle="white";
    for(let i=0;i<canvas.width;i+=40){
        const y=30+Math.sin(i*0.01+waveTime)*10;
        ctx.fillRect(i,y,30,3);
    }
    ctx.globalAlpha=1;
}

/* =========================
   課表面板
========================= */

function drawSchedulePanel(){

    const now = new Date();
    const weekday = now.getDay();
    const current = getCurrentPeriod();
    const next = getNextMyClass();

    const x = canvas.width - 320;
    const y = 20;

    ctx.fillStyle = "rgba(0,0,0,0.55)";
    ctx.fillRect(x,y,300,140);

    ctx.fillStyle="white";
    ctx.font="18px Arial";
    ctx.fillText(now.toLocaleTimeString(),x+15,y+28);

    ctx.font="16px Arial";
    ctx.fillText("週"+["日","一","二","三","四","五","六"][weekday],x+180,y+28);

    ctx.font="18px Arial";
    ctx.fillStyle="#ffd700";
    ctx.fillText("現在："+(current?current.name:"下課時間"),x+15,y+60);

    if(next){

        const nowFull = new Date();
        const target = new Date();

        const targetHour = Math.floor(next.start / 60);
        const targetMin = next.start % 60;

        target.setHours(targetHour);
        target.setMinutes(targetMin);
        target.setSeconds(0);

        const diffMs = target - nowFull;
        const diffMin = Math.floor(diffMs / 60000);
        const diffSec = Math.floor((diffMs % 60000) / 1000);

        ctx.fillStyle="#ff8080";
        ctx.fillText("下一堂："+next.name,x+15,y+95);

        ctx.fillStyle="white";
        ctx.fillText("倒數 "+diffMin+" 分 "+diffSec+" 秒",x+15,y+120);

    }else{
        ctx.fillStyle="#aaa";
        ctx.fillText("今天已無課 🎉",x+15,y+100);
    }
}

/* =========================
   初始化
========================= */

let fishes=[],foodList=[],bubbles=[];
for(let i=0;i<12;i++)fishes.push(new Fish());
for(let i=0;i<30;i++)bubbles.push(new Bubble());

canvas.addEventListener("click",e=>{
    for(let i=0;i<6;i++){
        foodList.push(new Food(
            e.clientX+(Math.random()*20-10),
            e.clientY+(Math.random()*20-10)
        ));
    }
});

/* =========================
   動畫
========================= */

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawLight();
    bubbles.forEach(b=>{b.update();b.draw();});
    foodList.forEach(f=>{f.update();f.draw();});
    fishes.forEach(f=>{f.update();f.draw();});
    drawSchedulePanel();

    requestAnimationFrame(animate);
}
animate();
