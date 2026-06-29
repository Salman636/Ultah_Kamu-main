const targetDate = new Date("2026-08-15T00:00:00").getTime();
// const targetDate = new Date("2026-06-29T14:00:00").getTime();

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
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

}, 1000);

const pages = document.querySelectorAll(".page");
let current = 0;

function nextPage() {
    if (current >= pages.length - 1) return;
    pages[current].classList.remove("active");
    current++;
    pages[current].classList.add("active");
}

const music = document.getElementById("birthdayMusic");
const popup = document.getElementById("musicPopup");
const playBtn = document.getElementById("playMusicBtn");

playBtn.addEventListener("click", () => {

    music.play();
    popup.classList.remove("show");
    const pageTimer = setInterval(() => {
        if (current >= pages.length - 1) {
            clearInterval(pageTimer);
            return;
        }
        nextPage();
    }, 5000);
});