// toggle class active
const navbarnav = document.querySelector(".navbar-nav");
// klik menu
document.querySelector("#menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// klik di luar side bar untuk close bar
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});

document.querySelector("#search").onclick = () => {
  navbarnav.classList.toggle("active");
};

const search = document.querySelector("#search");
