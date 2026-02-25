const canvas = document.getElementById("aquarium");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

/* =========================
   載入圖片
========================= */

const fishImages = [];
for(let i=1;i<=4;i++){
    const img = new Image();
    img.src = "assets/F"+i+".png";
    fishImages.push(img);
}

const turtleImg = new Image();
turtleImg.src = "assets/T1.png";

/* =========================
   滑鼠
========================= */

let mouse = {x:null,y:null};
canvas.addEventListener("mousemove",e=>{
    mouse.x=e.clientX;
    mouse.y=e.clientY;
});

/* =========================
   課表
========================= */

const schedule = [
    { name:"早自習", start:450 },
    { name:"第一節", start:490 },
    { name:"第二節", start:550 },
    { name:"第三節", start:610 },
    { name:"第四節", start:665 },
    { name:"午休", start:715 },
    { name:"第五節", start:775 },
    { name:"第六節", start:825 },
    { name:"第七節", start:890 },
    { name:"第八節", start:950 },
    { name:"第九節", start:1005 }
];

const myClasses = {
    1:[2,5,6,8,9],
    2:[2,5,6],
    3:[2,3,4,5,6,9],
    4:[3,5,6,9],
    5:[8]
};

function getCurrentMinutes(){
    const now = new Date();
    return now.getHours()*60 + now.getMinutes();
}

function getNextMyClass(){
    const now = new Date();
    const minutes = getCurrentMinutes();
    const weekday = now.getDay();

    if(weekday < 1 || weekday > 5) return null;

    const todayList = myClasses[weekday];

    let next = null;

    for(let i=0;i<schedule.length;i++){
        if(todayList.includes(i+1)){
            if(minutes < schedule[i].start){
                next = { ...schedule[i], index:i+1 };
                break;
            }
        }
    }

    return next;
}

/* =========================
   魚
========================= */

class Fish{
    constructor(){
        this.img = fishImages[Math.floor(Math.random()*fishImages.length)];
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.vx = (Math.random()-0.5)*2;
        this.vy = (Math.random()-0.5)*2;
        this.size = 60;
    }

    update(){

        if(foodList.length>0){
            let target=foodList[0];
            let dx=target.x-this.x;
            let dy=target.y-this.y;
            let d=Math.hypot(dx,dy);

            if(d<15){
                foodList.shift();
            }else{
                this.vx=dx/d*2;
                this.vy=dy/d*2;
            }
        }
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

        if(this.x<0) this.x=0;
        if(this.x>canvas.width-this.size) this.x=canvas.width-this.size;
        if(this.y<0) this.y=0;
        if(this.y>canvas.height-this.size) this.y=canvas.height-this.size;
    }

    draw(){
        ctx.save();
        if(this.vx<0){
            ctx.scale(-1,1);
            ctx.drawImage(this.img,-this.x-this.size,this.y,this.size,this.size);
        }else{
            ctx.drawImage(this.img,this.x,this.y,this.size,this.size);
        }
        ctx.restore();
    }
}

/* =========================
   海龜
========================= */

class Turtle{
    constructor(){
        this.x=Math.random()*canvas.width;
        this.y=Math.random()*canvas.height;
        this.vx=1;
        this.size=80;
    }

    update(){
        this.x+=this.vx;
        if(this.x<0||this.x>canvas.width-this.size){
            this.vx*=-1;
        }
    }

    draw(){
        ctx.drawImage(turtleImg,this.x,this.y,this.size,this.size);
    }
}

/* =========================
   飼料
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
   面板
========================= */

function drawPanel(){
    const now=new Date();
    const next=getNextMyClass();
    const minutes=getCurrentMinutes();

    const x=canvas.width-360;
    const y=20;

    ctx.fillStyle="rgba(0,0,0,0.6)";
    ctx.fillRect(x,y,340,150);

    ctx.fillStyle="white";
    ctx.font="20px Arial";
    ctx.fillText(now.toLocaleTimeString(),x+20,y+30);

    if(next){
        const diff=next.start-minutes;
        const sec=60-now.getSeconds();

        ctx.font="22px Arial";
        ctx.fillStyle="#ffd700";
        ctx.fillText("下一堂："+next.name,x+20,y+70);

        ctx.fillStyle="white";
        ctx.fillText("倒數 "+diff+" 分 "+sec+" 秒",x+20,y+105);
    }else{
        ctx.fillText("今天沒有課了 🎉",x+20,y+80);
    }
}

/* =========================
   初始化
========================= */

let fishes=[],foodList=[],bubbles=[],turtle=new Turtle();

for(let i=0;i<8;i++)fishes.push(new Fish());

canvas.addEventListener("click",e=>{
    for(let i=0;i<6;i++){
        foodList.push(new Food(e.clientX,e.clientY));
    }
});

/* =========================
   動畫
========================= */

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    turtle.update();
    turtle.draw();

    foodList.forEach(f=>{f.update();f.draw();});
    fishes.forEach(f=>{f.update();f.draw();});

    drawPanel();

    requestAnimationFrame(animate);
}

animate();
