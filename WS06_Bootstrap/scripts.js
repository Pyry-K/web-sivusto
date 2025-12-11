var coll = document.getElementsByClassName("collapsible");
var i;

function button_drop() {
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}

function toggleText(img) {
  const text = img.nextElementSibling;
  text.style.display = text.style.display === "block" ? "none" : "block";
}
