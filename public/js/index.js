// document.onkeydown = function (e) {
//   if (event.keyCode == 123) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode == "C".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "X".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode == "X".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "P".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode == "P".charCodeAt(0)) {
//     return false;
//   }
// };

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
