var bar = document.getElementsByClassName("prgB");
let section = document.getElementById("about");
var value = document.querySelector(".prgV");
let sectionEnd = document.getElementById("services");
window.onscroll = function () {
  if (
    window.scrollY >= section.offsetTop - 100 &&
    window.scrollY <= sectionEnd.offsetTop
  ) {
    for (let x = 0; x < bar.length; x++) {
      var changeB = bar[x].getAttribute("data-width");
      bar[x].style.width = changeB;
      bar[x].style.animation = "fill 3s ease-in-out forwards";
    }
  } else {
    for (let x = 0; x < bar.length; x++) {
      bar[x].style.width = 0;
      bar[x].style.animation = "none";
    }
  }
};
