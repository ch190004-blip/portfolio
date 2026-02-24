// 滾動出現動畫
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

// 技能條動畫
window.addEventListener("load", () => {
    document.querySelector(".html").style.width = "90%";
    document.querySelector(".css").style.width = "85%";
    document.querySelector(".js").style.width = "75%";
});
