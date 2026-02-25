const canvas = document.getElementById("aquarium");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let mouse = { x: null, y: null };
canvas.addEventListener("mousemove", e=>{
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

/* =======================
   課表設定
======================= */

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
    { name:"第九節", start:1005, end:1050 },
];

const myClasses = {
    1: [2,5,6,8,9],
    2: [2,5,6],
    3: [2,3,4,5,6,9],
    4: [3,5,6,9],
    5: [8]
};

function getCurrentInfo(){
    const now = new Date();
    const minutes = now.getHours()*60 + now.getMinutes();
    const weekday = now.getDay(); // 0=Sun

    let current = null;
    let next = null;

    for(let i=0;i<schedule.length;i++){
        if(minutes >= schedule[i].start && minutes <= schedule[i].end){
            current = { ...schedule[i], index:i+1 };
        }
        if(minutes < schedule[i].start){
            next = { ...schedule[i], index:i+1 };
            break;
        }
    }

    return { current, next, weekday, now };
}

/* =======================
   Fish
======================= */

class Fish{
    constructor(){
        this.x=Math.random()*canvas.width;
        this.y=Math.random()*canvas.height;
        this.vx=(Math.random()-0.5)*2;
        this.vy=(Math.random()-0.5)*2;
        this.size=20+Math.random()*5;
    }

    update(){
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
        }else if(mouse.x){
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

        if(this.x<0||this.x>canvas.width)this.vx*=-1;
        if(this.y<0||this.y>canvas.height)this.vy*=-1;
    }

    draw(){
        ctx.save();
        ctx.translate(this.x,this.y);
        if(this.vx<0)ctx.scale(-1,1);

        const g=ctx.createLinearGradient(-this.size,0,this.size,0);
        g.addColorStop(0,"#ff9966");
        g.addColorStop(1,"#ff3300");

        ctx.fillStyle=g;

        ctx.beginPath();
        ctx.moveTo(-this.size,0);
        ctx.quadraticCurveTo(0,-this.size/1.5,this.size,0);
        ctx.quadraticCurveTo(0,this.size/1.5,-this.size,0);
        ctx.fill();

        ctx.restore();
    }
}

/* =======================
   Food
======================= */

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

/* =======================
   Bubble
======================= */

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

/* =======================
   光影
======================= */

let waveTime=0;

function drawLight(){
    const hour=new Date().getHours();
    const progress=hour/24;
    const lightX=canvas.width*progress;

    const g=ctx.createRadialGradient(lightX,0,50,lightX,200,600);
    g.addColorStop(0,"rgba(255,255,200,0.4)");
    g.addColorStop(1,"rgba(255,255,200,0)");

    ctx.fillStyle=g;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    waveTime+=0.02;
    ctx.globalAlpha=0.08;
    ctx.fillStyle="white";
    for(let i=0;i<canvas.width;i+=40){
        const y=30+Math.sin(i*0.01+waveTime)*10;
        ctx.fillRect(i,y,30,3);
    }
    ctx.globalAlpha=1;
}

/* =======================
   時鐘 + 倒數
======================= */

function drawClockPanel(){
    const {current,next,weekday,now}=getCurrentInfo();

    const x=canvas.width-320;
    const y=20;

    ctx.fillStyle="rgba(0,0,0,0.6)";
    ctx.fillRect(x,y,300,140);

    ctx.fillStyle="white";
    ctx.font="20px Arial";
    ctx.fillText(now.toLocaleTimeString(),x+20,y+30);

    if(current){
        ctx.font="22px Arial";
        ctx.fillStyle="#ffd700";
        ctx.fillText(current.name,x+20,y+60);
    }else{
        ctx.font="18px Arial";
        ctx.fillStyle="white";
        ctx.fillText("下課時間",x+20,y+60);

        if(next){
            const targetMinutes=next.start;
            const nowMinutes=now.getHours()*60+now.getMinutes();
            const diff=targetMinutes-nowMinutes;
            const min=Math.floor(diff);
            const sec=60-now.getSeconds();

            const hasClass=myClasses[weekday]?.includes(next.index);

            ctx.font="16px Arial";
            ctx.fillStyle=hasClass?"#ff8080":"#aaa";

            ctx.fillText(
                "下一節："+next.name+
                (hasClass?"（你有課）":"（你沒課）"),
                x+20,y+85
            );

            ctx.fillText(
                "還有 "+min+" 分 "+sec+" 秒",
                x+20,y+110
            );
        }
    }
}

/* =======================
   初始化
======================= */

let fishes=[],bubbles=[],foodList=[];
for(let i=0;i<15;i++)fishes.push(new Fish());
for(let i=0;i<30;i++)bubbles.push(new Bubble());

canvas.addEventListener("click",e=>{
    for(let i=0;i<6;i++){
        foodList.push(new Food(
            e.clientX+(Math.random()*20-10),
            e.clientY+(Math.random()*20-10)
        ));
    }
});

/* =======================
   動畫
======================= */

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawLight();

    bubbles.forEach(b=>{b.update();b.draw();});
    foodList.forEach(f=>{f.update();f.draw();});
    fishes.forEach(f=>{f.update();f.draw();});

    drawClockPanel();

    requestAnimationFrame(animate);
}

animate();
