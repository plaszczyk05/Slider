let current = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
}

function s1() {
    current = 0;
    showSlide(current);
}

function s2() {
    current = 1;
    showSlide(current);
}

function s3() {
    current = 2;
    showSlide(current);
}

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();

function updateDate() {
    const now = new Date();
    const days = String(now.getDate()).padStart(2, '0');
    const months = String(now.getMonth() + 1).padStart(2, '0');
    const years = String(now.getFullYear()).padStart(2, '0');

    document.getElementById("date").textContent = `${days}.${months}.${years}`;
}

setInterval(updateDate, 1000);
updateTime();

function change() {
    let lte = document.getElementById("lte");

    setInterval(() => {
        lte.textContent = "+";
    }, 1000);
}