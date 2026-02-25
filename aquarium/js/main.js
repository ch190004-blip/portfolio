const canvas = document.getElementById("aquarium");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let mouse = { x: null, y: null };

canvas.addEventListener("mousemove", (e)=>{
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

/* =======================
   課表時間判定
======================= */

function getClassInfo(){
    const now = new Date();
    const time = now.getHours()*60 + now.getMinutes();

    const schedule = [
        { name:"早自習", start:450, end:480, label:"0730-0800" },
        { name:"第一節", start:490, end:540, label:"0810-0900" },
        { name:"第二節", start:550, end:600, label:"0910-1000" },
        { name:"第三節", start:610, end:660, label:"1010-1100" },
        { name:"第四節", start:665, end:715, label:"1105-1155" },
        { name:"午休", start:715, end:775, label:"1155-1255" },
        { name:"第五節", start:775, end:825, label:"1255-1345" },
        { name:"第六節", start:825, end:885, label:"1345-1445" },
        { name:"第七節", start:890, end:940, label:"1450-1540" },
        { name:"第八節", start:950, end:1000, label:"1550-1640" },
        { name:"第九節", start:1005, end:1050, label:"1645-1730" },
    ];

    for(let s of schedule){
        if(time >= s.start && time <= s.end){
            return s;
        }
    }

    return { name:"下課時間", label:"Break Time" };
}

/* =======================
   Fish
======================= */

class Fish {
    constructor(){
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.vx = (Math.random()-0.5)*2;
        this.vy = (Math.random()-0.5)*2;
        this.size = 20 + Math.random()*5;
    }

    update(){

        // 滑鼠吸引
        if(mouse.x !== null){
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let dist = Math.hypot(dx,dy);

            if(dist < 200){
                this.vx += dx/dist * 0.05;
                this.vy += dy/dist * 0.05;
            }
        }

        this.x += this.vx;
        this.y += this.vy;

        this.vx *= 0.99;
        this.vy *= 0.99;

        if(this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if(this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw(){
        ctx.save();
        ctx.translate(this.x,this.y);

        if(this.vx < 0) ctx.scale(-1,1);

        const g = ctx.createLinearGradient(-this.size,0,this.size,0);
        g.addColorStop(0,"#ff9966");
        g.addColorStop(1,"#ff3300");

        ctx.fillStyle = g;

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

/* =======================
   Bubble
======================= */

class Bubble{
    constructor(){
        this.x = Math.random()*canvas.width;
        this.y = canvas.height + Math.random()*200;
        this.size = Math.random()*6+3;
        this.speed = Math.random()*1+0.5;
        this.alpha = Math.random()*0.5+0.3;
    }

    update(){
        this.y -= this.speed;
        if(this.y < -10){
            this.y = canvas.height+20;
            this.x = Math.random()*canvas.width;
        }
    }

    draw(){
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.strokeStyle="white";
        ctx.lineWidth=2;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.stroke();
        ctx.restore();
    }
}

/* =======================
   光影 + 水波
======================= */

let waveTime = 0;

function drawLight(){
    const classInfo = getClassInfo();
    const hour = new Date().getHours();
    const progress = hour / 24;

    const lightX = canvas.width * progress;

    const gradient = ctx.createRadialGradient(
        lightX, 0,
        50,
        lightX, 200,
        600
    );

    gradient.addColorStop(0,"rgba(255,255,200,0.4)");
    gradient.addColorStop(1,"rgba(255,255,200,0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // 水面光波
    waveTime += 0.02;
    ctx.globalAlpha = 0.08;
    ctx.fillStyle = "white";

    for(let i=0;i<canvas.width;i+=40){
        const y = 30 + Math.sin(i*0.01 + waveTime)*10;
        ctx.fillRect(i,y,30,3);
    }

    ctx.globalAlpha = 1;
}

/* =======================
   初始化
======================= */

let fishes=[];
let bubbles=[];

for(let i=0;i<15;i++) fishes.push(new Fish());
for(let i=0;i<30;i++) bubbles.push(new Bubble());

/* =======================
   動畫
======================= */

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawLight();

    bubbles.forEach(b=>{
        b.update();
        b.draw();
    });

    fishes.forEach(f=>{
        f.update();
        f.draw();
    });

    drawClock();

    requestAnimationFrame(animate);
}

animate();

/* =======================
   時鐘顯示
======================= */

function drawClock(){
    const now = new Date();
    const classInfo = getClassInfo();

    ctx.fillStyle="white";
    ctx.font="20px Arial";
    ctx.fillText(now.toLocaleTimeString(), 20,30);

    ctx.font="14px Arial";
    ctx.fillText(classInfo.name + " (" + classInfo.label + ")", 20,50);
}
