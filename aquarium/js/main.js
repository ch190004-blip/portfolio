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

        // 邊界限制（不跑出畫面）
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

        if(this.vx<0) ctx.scale(-1,1);

        const g=ctx.createLinearGradient(-this.size,0,this.size,0);
        g.addColorStop(0,"#ff9966");
        g.addColorStop(1,"#ff3300");

        ctx.fillStyle=g;

        // 身體
        ctx.beginPath();
        ctx.moveTo(-this.size,0);
        ctx.quadraticCurveTo(0,-this.size/1.5,this.size,0);
        ctx.quadraticCurveTo(0,this.size/1.5,-this.size,0);
        ctx.fill();

        // 尾巴
        ctx.beginPath();
        ctx.moveTo(-this.size,0);
        ctx.lineTo(-this.size-15,-10);
        ctx.lineTo(-this.size-15,10);
        ctx.closePath();
        ctx.fillStyle="#ff6633";
        ctx.fill();

        // 眼睛
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

    requestAnimationFrame(animate);
}

animate();
