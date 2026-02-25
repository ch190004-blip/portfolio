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
        ctx.translate(this.x,this.y);

        if(this.vx < 0){
            ctx.scale(-1,1);
        }

        ctx.fillStyle = "orange";
        ctx.beginPath();
        ctx.ellipse(0,0,this.size,this.size/2,0,0,Math.PI*2);
        ctx.fill();

        ctx.restore();
    }
}


/* =======================
   初始化魚群
======================= */

let fishes = [];

for(let i=0;i<10;i++){
    fishes.push(new Fish());
}


/* =======================
   動畫循環
======================= */

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    fishes.forEach(f=>{
        f.update();
        f.draw();
    });

    requestAnimationFrame(animate);
}

animate();
