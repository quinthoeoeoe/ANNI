const envelope = document.getElementById("envelope");
const text = document.getElementById("text");
const music = document.getElementById("music");

const sender = `\nFrom: ⋆. 𐙚˚࿔ Em bé của Minh Huy 𝜗𝜚˚⋆\n`;
const message =  `Hai năm qua cả anh và em đều đã cố gắng rất nhiều. Nhất là quãng thời gian yêu xa huhu, em nhiều lúc cảm thấy nhớ anh rất nhiều nhưng lại chẳng thể làm gì... 
Tại em nghĩ rằng anh ở 1 mình nơi xa nhà có lẽ còn khó khăn hơn em, em mong rằng anh sẽ lun giữ được tinh thần, sức khỏe thật tốt để làm việc thật tốt, kiếm thêm nhiều kinh nghiệm để phát triển sự nghiệp của bản thân, hy vọng mọi chuyện sẽ thuận buồm xuôi gió nhe anh.. và mong anh về với em nựa.
Ai lớp diuu ⋆.˚ 𓆉 𓆝 𓆡⋆.˚`;
const receiver = `To: ₊‧.°.⋆Anh iu siu cấp dỏi giang ✮⋆.°.₊\n`;

const fullText = sender + receiver + message;

envelope.onclick = () => {
    if (envelope.classList.contains("open")) return;

    envelope.classList.add("open");
    music.play();
    text.innerText = fullText;
};


text.innerHTML = `<h2 class="main-title">${anniversaryTitle}</h2>` + 
                 `<div class="main-content">${sender}<br>${receiver}${message}</div>`;


function createHeart() {
    const heart = document.createElement("div");
    const stickers = ["💖", "✨", "🌸", "💌", "🧸"];
    heart.innerHTML = stickers[Math.floor(Math.random() * stickers.length)];
    
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.opacity = 0.8;
    heart.style.pointerEvents = "none"; 
    
    document.body.appendChild(heart);
    
    let y = window.innerHeight;
    const move = setInterval(() => {
        y -= 4; 
        heart.style.top = y + "px";
        if (y < -50) {
            clearInterval(move);
            heart.remove(); 
        }
    }, 20);
}