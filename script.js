const header = document.querySelector(".navbar")

window.onscroll = function() {
  let top = window.scrollY;

  if(top >= 500) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
}