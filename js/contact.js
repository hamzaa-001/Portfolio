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

function sendMail() {
  var params = {
    form_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_yzoe5cv", "template_w63w1rp", params)
    .then(function (res) {
      let form = document.querySelector(".input-form");
      let successMsg = document.querySelector(".success-msg-wrapper");

      form.style.display = "none";
      successMsg.style.display = "block";
    });
}

let backBtn = document.querySelector(".backBtn");
backBtn.addEventListener("click", function () {
  let form = document.querySelector(".input-form");
  let successMsg = document.querySelector(".success-msg-wrapper");
  successMsg.style.display = "none";
  form.style.display = "block";
});
