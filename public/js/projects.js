// filterSelection("all");
const cards = document.querySelectorAll(".col-md-4");
function filterSelection(c) {
  cards.forEach((card) => {
    console.log(c);
    if (card.classList.contains(c)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

var filterBtns = document.querySelector(".filter");
var btns = filterBtns.getElementsByTagName("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
