const navlinks = document.querySelectorAll(".link");

navlinks.forEach(navlink => {
    navlink.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        navlink.classList.add("active");
    })
})



const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
    document.querySelector(".sidenav").style.marginLeft = "0px";
    document.querySelector(".sidenav").style.transition = "all 700ms";
})

const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
    document.querySelector(".sidenav").style.marginLeft = "-270px";
    document.querySelector(".sidenav").style.transition = "all 700ms";
})