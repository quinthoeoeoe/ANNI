const envelope = document.getElementById("envelope");
const text = document.getElementById("text");
const music = document.getElementById("music");

const sender = "From: Em bé của Minh Huy 💖\n\n";
const receiver = "\n\nTo: Anh iu siu cấp dỏi giang 💕";
const message = `Happy Anniversary 2 Years
Hai năm qua cả anh và em đều đã cố gắng rất nhiều.
Nhất là quãng thời gian yêu xa huhu, em nhiều lúc cảm thấy nhớ anh rất nhiều nhưng lại chẳng thể làm gì... 
Tại em nghĩ rằng anh ở 1 mình nơi xa nhà có lẽ còn khó khăn hơn em, em mong rằng anh sẽ lun giữ được tinh thần, sức khỏe thật tốt để làm việc thật tốt, kiếm thêm nhiều kinh nghiệm để phát triển sự nghiệp của bản thân, hy vọng mọi chuyện sẽ thuận buồm xuôi gió nhe anh.. và mong anh về với em nựa.
Ai lớp diuu :>`;

const fullText = sender + message + receiver;

envelope.onclick = () => {
    if (envelope.classList.contains("open")) return;
    
    envelope.classList.add("open");
    music.play();

    // Hiển thị toàn bộ nội dung ngay lập tức khi mở
    text.innerText = fullText;
    
    // Tạo sticker bay liên tục
    setInterval(createHeart, 250);
};

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