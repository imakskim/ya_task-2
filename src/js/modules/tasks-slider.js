const left = document.querySelector(".js-tasks-left");
const right = document.querySelector(".js-tasks-right");
const items = document.querySelector(".js-top-tasks-slider");

const minRight = 0;
const maxRight = 1260;
const step = 630;
let currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", function() {
  if (currentRight < maxRight) {
    currentRight += step;
    items.style.right = currentRight + "px";
  }
});

left.addEventListener("click", function() {
  if (currentRight > minRight) {
    currentRight -= step;
    items.style.right = currentRight + "px";
  }
});