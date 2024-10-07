const menuToggle = document.querySelector(".header-top-toggle");
const menuHeader = document.querySelector(".header-top-nav");
const expandClass = "is-expand";
menuToggle.addEventListener("click", function () {
  menuHeader.classList.add(expandClass);
});

window.addEventListener("click", function (e) {
  if (
    !menuHeader.contains(e.target) &&
    !e.target.matches(".header-top-toggle")
  ) {
    menuHeader.classList.remove(expandClass);
  }
});

const menuUser = document.querySelector(".header-top-user");
const menuAuth = document.querySelector(".header-top-auth");
const isLogin = "is-login";
menuUser.addEventListener("click", function () {
  menuAuth.classList.add(isLogin);
});

window.addEventListener("click", function (e) {
  if (!menuAuth.contains(e.target) && !e.target.matches(".header-top-user")) {
    menuAuth.classList.remove(isLogin);
  }
});
