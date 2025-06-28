let fixedBtn = document.getElementById("fixed-btn");
window.onscroll = function () {
  if (window.scrollY >= 3200) {
    fixedBtn.style.opacity = "1";
  } else {
    fixedBtn.style.opacity = "0";
  }

  fixedBtn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
};

addEventListener("load", function () {
  this.document
    .getElementsByClassName("page-effect")[0]
    .classList.add("opacity-100");
});
