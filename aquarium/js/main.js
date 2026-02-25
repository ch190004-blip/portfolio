// ===== 基本設定 =====
const canvas = document.getElementById("aquarium");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let mouse = {x:null,y:null};
canvas.addEventListener("mousemove",e=>{
    mouse.x=e.clientX;
    mouse.y=e.clientY;
});

// ===== 課表 =====
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
    1:[2,5,6,8,9],
    2:[2,5,6],
    3:[2,3,4,5,6,9],
    4:[3,5,6,9],
    5:[8]
};

// ===== 魚 =====
class Fish{
    constructor(){
        this.x=Math.random()*canvas.width;
        this.y=Math.random()*canvas.height;
        this.vx=(Math.random()-0.5)*2;
        this.vy=(Math.random()-0.5)*2;
        this.size=20+Math.random()*5;
    }

    update(){

        // 滑鼠吸引
        if(mouse.x){
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

        // 修正邊界（考慮 size）
        if(this.x < this.size){
            this.x=this.size;
            this.vx*=-1;
        }
        if(this.x > canvas.width-this.size){
            this.x=canvas.width-this.size;
            this.vx*=-1;
        }
        if(this.y < this.size){
            this.y=this.size;
            this.vy*=-1;
        }
        if(this.y > canvas.height-this.size){
            this.y=canvas.height-this.size;
            this.vy*=-1;
        }
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

// ===== 氣泡 =====
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

// ===== 下一堂你有課 =====
function getNextMyClass(){
    const now=new Date();
    const minutes=now.getHours()*60+now.getMinutes();
    const weekday=now.getDay();

    const todayClasses=myClasses[weekday]||[];

    for(let i=0;i<schedule.length;i++){
        if(todayClasses.includes(i+1) && minutes < schedule[i].start){
            return schedule[i];
        }
    }
    return null;
}

// ===== 面板 =====
function drawPanel(){
    const now=new Date();
    const minutes=now.getHours()*60+now.getMinutes();

    const x=canvas.width-350;
    const y=20;

    ctx.fillStyle="rgba(0,0,0,0.6)";
    ctx.fillRect(x,y,330,160);

    ctx.fillStyle="white";
    ctx.font="20px Arial";
    ctx.fillText(now.toLocaleTimeString(),x+20,y+30);

    // 現在節次
    let currentText="下課時間";
    for(let i=0;i<schedule.length;i++){
        if(minutes>=schedule[i].start && minutes<=schedule[i].end){
            currentText=schedule[i].name;
        }
    }

    ctx.font="22px Arial";
    ctx.fillStyle="#ffd700";
    ctx.fillText("現在："+currentText,x+20,y+60);

    // 下一堂你有課
    const nextMy=getNextMyClass();

    if(nextMy){
        const diff=nextMy.start-minutes;
        const sec=60-now.getSeconds();

        ctx.font="18px Arial";
        ctx.fillStyle="#ff8080";
        ctx.fillText("你下一堂："+nextMy.name,x+20,y+95);

        ctx.fillStyle="white";
        ctx.fillText("還有 "+diff+" 分 "+sec+" 秒",x+20,y+120);
    }else{
        ctx.fillStyle="#aaa";
        ctx.fillText("今天沒有其他課了 🎉",x+20,y+100);
    }
}

// ===== 初始化 =====
let fishes=[],bubbles=[];
for(let i=0;i<15;i++)fishes.push(new Fish());
for(let i=0;i<30;i++)bubbles.push(new Bubble());

// ===== 動畫 =====
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    bubbles.forEach(b=>{b.update();b.draw();});
    fishes.forEach(f=>{f.update();f.draw();});
    drawPanel();

    requestAnimationFrame(animate);
}
animate();
