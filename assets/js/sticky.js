"use strict";

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};
// Get the header
const header = document.getElementById("myHeader");
// Get the offset position of the navbar
// const sticky = header.offsetTop;
const sticky = 101;

const content = document.querySelector(".content");
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    content.classList.add("dummy");
  } else {
    header.classList.remove("sticky");
    content.classList.remove("dummy");
  }
}
