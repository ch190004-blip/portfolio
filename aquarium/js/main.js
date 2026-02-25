const canvas = document.getElementById("aquarium");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);


/* =======================
   Fish 類別
======================= */

class Fish {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = 20;
    }

    update(){
        this.x += this.vx;
        this.y += this.vy;

        if(this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if(this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

  draw(){
    ctx.save();
    ctx.translate(this.x, this.y);

    // 根據方向翻轉
    if(this.vx < 0){
        ctx.scale(-1,1);
    }

    // 身體漸層
    const gradient = ctx.createLinearGradient(-this.size,0,this.size,0);
    gradient.addColorStop(0,"#ff9966");
    gradient.addColorStop(1,"#ff3300");

    ctx.fillStyle = gradient;

    // 魚身
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
    ctx.fillStyle = "#ff6633";
    ctx.fill();

    // 眼睛
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.size/3,-3,4,0,Math.PI*2);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(this.size/3,-3,2,0,Math.PI*2);
    ctx.fill();

    ctx.restore();
}
}

class Food {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 5;
        this.speed = 1;
    }

    update(){
        this.y += this.speed; // 向下掉
    }

    draw(){
        ctx.fillStyle = "#5c4033";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fill();
    }
}

/* =======================
   初始化魚群
======================= */
let foodList = [];

let fishes = [];

for(let i=0;i<10;i++){
    fishes.push(new Fish());
}


/* =======================
   動畫循環
======================= */

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
foodList.forEach(food=>{
    food.update();
    food.draw();
});
    
    fishes.forEach(f=>{
        f.update();
        f.draw();
    });

    requestAnimationFrame(animate);
}

animate();
canvas.addEventListener("click", (e)=>{
    for(let i=0; i<6; i++){
        foodList.push(
            new Food(
                e.clientX + (Math.random()*20-10),
                e.clientY + (Math.random()*20-10)
            )
        );
    }
});
