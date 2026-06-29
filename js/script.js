// ==========================
// COUNTDOWN
// ==========================

const targetDate = new Date("2026-08-15T00:00:00").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    if (distance <= 0) {
        clearInterval(timer);
        nextPage();
        popup.classList.add("show");
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );
    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}, 1000);


// ==========================
// PAGE SYSTEM
// ==========================

const pages = document.querySelectorAll(".page");
let current = 0;

function nextPage() {
    if (current >= pages.length - 1) return;

    pages[current].classList.remove("active");
    current++;
    pages[current].classList.add("active");
    if (current === 2 && !hasTyped) {
        hasTyped = true;
        setTimeout(() => {
            typeWriter();
        }, 1000);
    }
    if (current === 3) {
        setTimeout(() => {
            startAnimation();
        }, 1000);
    }
    if (current === 4) {
        startPage5Effects();
    }
}

// ==========================
// AUTO PAGE CHANGE
// ==========================

function autoNextPage() {
    if (current >= pages.length - 1) return;
    if (current === 2 || current === 3) return;
    setTimeout(() => {
        nextPage();
        autoNextPage();
    }, 5000);
}


// ==========================
// MUSIC
// ==========================

const music = document.getElementById("birthdayMusic");
const popup = document.getElementById("musicPopup");
const playBtn = document.getElementById("playMusicBtn");

playBtn.addEventListener("click", () => {
    music.play();
    popup.classList.remove("show");
    autoNextPage();
});


// ==========================
// LETTER / TYPEWRITER PAGE3
// ==========================

const message = `Untukmu...

Terima kasih sudah hadir di hidupku. Mungkin kamu tidak pernah benar-benar menyadari seberapa besar pengaruhmu dalam setiap hariku. Kehadiranmu membuat hari-hari biasa terasa lebih istimewa, membuat setiap tawa terasa lebih tulus, dan setiap kenangan menjadi sesuatu yang selalu ingin kuingat.

Aku bersyukur bisa mengenalmu, bisa mendengarkan ceritamu, tertawa bersamamu, dan menjadi bagian kecil dari perjalanan hidupmu. Di hari spesialmu ini, aku hanya ingin kamu tahu bahwa kehadiranmu adalah salah satu hadiah terindah yang pernah diberikan Tuhan dalam hidupku.

Selamat ulang tahun, Aellyenn.

Semoga kebahagiaan selalu menyertaimu, hari ini, esok, dan seterusnya. ❤️`;

let i = 0;
let hasTyped = false;
const speed = 35;

function typeWriter() {
    const target = document.getElementById("typing-text");
    if (i < message.length) {
        if (message.charAt(i) === "\n") {
            target.innerHTML += "<br>";
        } else {
            target.innerHTML += message.charAt(i);
        }
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(() => {
            nextPage();
            autoNextPage();
        }, 3000);
    }
}

// ==========================
// PHOTO HEARTS PAGE4
// ==========================
function createHeart() {
    const container =
        document.querySelector(".hearts-container");
    const heart =
        document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left =
        Math.random() * 100 + "%";
    heart.style.fontSize =
        (Math.random() * 25 + 20) + "px";
    heart.style.animationDuration =
        (Math.random() * 3 + 4) + "s";
    container.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

function startAnimation() {
    const photos =
        document.querySelectorAll(".fade-photo");
    let index = 0;
    const heartInterval =
        setInterval(() => {
            createHeart();
        }, 300);
    const slideInterval =
        setInterval(() => {
            photos[index].classList.remove("active-photo");
            index++;
            if (index >= photos.length) {
                clearInterval(slideInterval);
                clearInterval(heartInterval);
                setTimeout(() => {
                    nextPage();
                }, 2000);
                return;
            }
            photos[index].classList.add("active-photo");
        }, 4000);
}

// ==========================
// CELEBRATION EFFECTS PAGE5
// ==========================

let page5Started = false;

function createCelebration() {
    const container =
        document.querySelector(".celebration");
    const particle =
        document.createElement("div");
    particle.classList.add("particle");
    const items = [
        "❤️",
        "🎉",
        "✨",
        "🎊",
        "💖"
    ];
    particle.innerHTML =
        items[Math.floor(Math.random() * items.length)];
    particle.style.left =
        Math.random() * 100 + "%";
    particle.style.fontSize =
        (Math.random() * 25 + 15) + "px";
    particle.style.animationDuration =
        (Math.random() * 3 + 4) + "s";
    container.appendChild(particle);
    setTimeout(() => {
        particle.remove();
    }, 7000);
}

function startPage5Effects() {
    if (page5Started) return;
    page5Started = true;
    setInterval(() => {
        createCelebration();
    }, 250);
}
