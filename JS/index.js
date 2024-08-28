const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".nav-list");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navlist.classList.toggle("open");
    });
}