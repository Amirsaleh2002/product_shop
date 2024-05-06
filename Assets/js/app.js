const $ = document;
const navItemRes = $.querySelectorAll(".nav-item-res");
const subMenuItemRes = $.querySelectorAll(".subMenuItem-res");
const subMenuRes = $.querySelectorAll(".subMenu-res");
const subMenuUlRes = $.querySelectorAll(".subMenuUl-res");
const goesUp = $.querySelector(".goesUp");

navItemRes.forEach((item) => {
  item.addEventListener("click", (e) => {
    for (const eachItem of subMenuRes) {
      eachItem.classList.remove("active");
    }
    item.childNodes[3].classList.add("active");
  });
});

subMenuItemRes.forEach((item) => {
  item.addEventListener("click", (e) => {
    for (const eachItem of subMenuUlRes) {
      eachItem.classList.remove("active");
    }
    item.childNodes[3].classList.add("active");
  });
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 200) {
    goesUp.classList.add("active-goesButton");
  } else {
    goesUp.classList.remove("active-goesButton");
  }
});

goesUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
