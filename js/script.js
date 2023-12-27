const navlinks = document.querySelectorAll(".link");

navlinks.forEach((navlinks) => {
  navlinks.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    navlinks.classList.add("active");
  });
});

const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  document.querySelector(".sidenav").style.marginLeft = "0px";
  document.querySelector(".sidenav").style.transition = "all 700ms";
});

const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
  document.querySelector(".sidenav").style.marginLeft = "-270px";
  document.querySelector(".sidenav").style.transition = "all 700ms";
});

var typed = new Typed(".auto-type-words", {
  strings: ["Web Dev.", "Frontend Dev.", "UI/UX Dev."],
  typeSpeed: 120,
  backSpeed: 120,
  loop: true,
});
