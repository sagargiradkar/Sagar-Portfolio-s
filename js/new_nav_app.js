const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("nav");
const links = document.querySelectorAll(".links a");






function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    console.log("nav");
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));


const nav_links = document.querySelectorAll('.nav_link');
nav_links.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.active_nav')?.classList.remove('active_nav');
    link.classList.add('active_nav');
  })
})
