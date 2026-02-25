const aquarium = document.getElementById('aquarium');
let foods = []; // 存放場上所有飼料的陣列
let fishes = []; // 存放所有魚的陣列

// === 魚類別定義 ===
class Fish {
    constructor(imgUrl, startX, startY, speed) {
        this.element = document.createElement('img');
        this.element.src = imgUrl;
        this.element.classList.add('fish');
        aquarium.appendChild(this.element);

        // 位置與速度
        this.x = startX;
        this.y = startY;
        this.baseSpeed = speed; // 基礎遊動速度
        this.dx = (Math.random() - 0.5) * this.baseSpeed; // X軸速度向量
        this.dy = (Math.random() - 0.5) * this.baseSpeed * 0.5; // Y軸速度向量 (垂直動慢一點)
        
        // 狀態
        this.width = 80; // 假設魚寬度，用於碰撞計算
        this.height = 60; // 假設魚高度
        this.isHungry = true;
        this.wobbleOffset = Math.random() * Math.PI * 2; // 用於自然擺動的隨機偏移量
    }

    update() {
        let targetFood = null;
        let minDistance = Infinity;

        // 1. 尋找最近的飼料
        if (foods.length > 0 && this.isHungry) {
            foods.forEach(food => {
                const dist = Math.hypot(food.x - this.x, food.y - this.y);
                // 偵測範圍：300像素內的飼料
                if (dist < 300 && dist < minDistance) {
                    minDistance = dist;
                    targetFood = food;
                }
            });
        }

        // 2. 根據是否有目標決定行為
        if (targetFood) {
            // === 搶食模式 ===
            // 計算朝向飼料的角度
            const angle = Math.atan2(targetFood.y - this.y, targetFood.x - this.x);
            // 加速游向飼料 (原本速度的 2.5 倍)
            this.dx = Math.cos(angle) * this.baseSpeed * 2.5;
            this.dy = Math.sin(angle) * this.baseSpeed * 2.5;

            // 判斷是否吃到飼料 (距離小於 30)
            if (minDistance < 30) {
                removeFood(targetFood);
                // 吃到後稍微停頓一下的感覺
                this.dx *= 0.1;
                this.dy *= 0.1;
            }
        } else {
            // === 閒逛模式 ===
            // 碰到邊界反彈
            if (this.x + this.width > window.innerWidth || this.x < 0) this.dx = -this.dx;
            if (this.y + this.height > window.innerHeight || this.y < 0) this.dy = -this.dy;

            // 加入自然的垂直輕微擺動 (Sine wave motion)
            this.y += Math.sin(Date.now() / 500 + this.wobbleOffset) * 0.5;
            
            // 偶爾隨機改變方向，讓行為更自然
            if (Math.random() < 0.005) {
                 this.dx = (Math.random() - 0.5) * this.baseSpeed;
                 this.dy = (Math.random() - 0.5) * this.baseSpeed * 0.5;
            }
        }

        // 3. 更新位置
        this.x += this.dx;
        this.y += this.dy;

        // 4. 根據游動方向翻轉圖片
        // 如果 dx > 0 (向右遊)，不翻轉；如果 dx < 0 (向左遊)，水平翻轉
        const scaleX = this.dx > 0 ? 1 : -1;
        // 搶食時身體稍微傾斜
        const rotate = targetFood ? Math.atan2(this.dy, this.dx) * (180/Math.PI) * 0.2 : 0;

        this.element.style.transform = `translate(${this.x}px, ${this.y}px) scaleX(${scaleX}) rotate(${rotate}deg)`;
    }
}

// === 飼料類別定義 ===
class Food {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.element = document.createElement('div');
        this.element.classList.add('food');
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
        aquarium.appendChild(this.element);
        this.sinkSpeed = 1 + Math.random() * 1.5; // 隨機下沉速度
    }

    update(index) {
        // 飼料下沉
        this.y += this.sinkSpeed;
        this.element.style.top = this.y + 'px';

        // 如果沉到底部，移除它
        if (this.y > window.innerHeight - 20) {
            removeFood(this);
        }
    }
}

// 移除飼料的輔助函式
function removeFood(foodInstance) {
    if (foodInstance.element.parentNode) {
        foodInstance.element.parentNode.removeChild(foodInstance.element);
    }
    // 從陣列中移除
    foods = foods.filter(f => f !== foodInstance);
}


// === 遊戲主循環 (每一幀運行一次) ===
function gameLoop() {
    // 更新所有魚
    fishes.forEach(fish => fish.update());
    // 更新所有飼料 (使用倒序迴圈，因為中途可能會移除元素)
    for (let i = foods.length - 1; i >= 0; i--) {
        foods[i].update(i);
    }
    requestAnimationFrame(gameLoop);
}


// === 事件監聽：點擊餵食 ===
aquarium.addEventListener('click', (e) => {
    // 在點擊位置產生飼料
    const food = new Food(e.clientX, e.clientY);
    foods.push(food);
    // 可以選用：限制場上最多同時存在幾顆飼料，避免效能問題
    if(foods.length > 15) {
        removeFood(foods[0]);
    }
});


// === 初始化遊戲 ===
function init() {
    // 創建幾條不同的魚
    // 【重要】請將這裡的網址替換成你本地資料夾的圖片，例如 "./fish1.png"
    const fishImages = [
        'https://cdn-icons-png.flaticon.com/512/2970/2970067.png', // 小丑魚代替品
        'https://cdn-icons-png.flaticon.com/512/2970/2970145.png', // 藍刀魚代替品
        'https://cdn-icons-png.flaticon.com/512/7096/7096627.png', // 黃色小魚
    ];

    // 產生 5 條魚，隨機位置和速度
    for (let i = 0; i < 5; i++) {
        const img = fishImages[i % fishImages.length]; // 循環使用圖片
        const x = Math.random() * window.innerWidth * 0.8;
        const y = Math.random() * window.innerHeight * 0.8;
        const speed = 1.5 + Math.random() * 2; // 隨機速度
        fishes.push(new Fish(img, x, y, speed));
    }
    
    gameLoop(); // 開始動畫循環
}

// 啟動！
init();
