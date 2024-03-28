const clickBtn = document.querySelector(".clk");
const resetBtn = document.querySelector(".rst");
const square = document.querySelector(".square");
let movement = 0;
function movementFunc() {
  movement += 100;
  square.style.transform = `translate(${movement}px, ${movement}px)`;
}
function resetFunc() {
  square.style.transform = `translate(0px, 0px)`;
  movement = 0;
}
clickBtn.addEventListener("click", movementFunc);
resetBtn.addEventListener("click", resetFunc);

console.dir(window);
