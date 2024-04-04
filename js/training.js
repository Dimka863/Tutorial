// const clickBtn = document.querySelector(".clk");
// const resetBtn = document.querySelector(".rst");
// const square = document.querySelector(".square");
// let movement = 0;
// function movementFunc() {
//   movement += 100;
//   square.style.transform = `translate(${movement}px, ${movement}px)`;
// }
// function resetFunc() {
//   square.style.transform = `translate(0px, 0px)`;
//   movement = 0;
// }
// clickBtn.addEventListener("click", movementFunc);
// resetBtn.addEventListener("click", resetFunc);

// console.dir(window);

const box = document.createElement("div");
box.id = "box";

box.style.width = "100px";
box.style.height = "50px";
box.style.backgroundColor = "red";
box.style.position = "absolute";
box.style.left = "50%";
box.style.top = "50%";
box.style.transform = "translate(-50%, -50%)";
let top = 50;
let left = 50;

document.body.append(box);

window.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowDown":
      if (box.offsetTop < window.innerHeight - box.offsetHeight / 2) {
        box.style.top = `calc(${top + 1}%)`;
        top += 1;
      }
      break;

    case "ArrowUp":
      if (box.offsetTop > box.offsetHeight / 2) {
        box.style.top = `calc(${top - 1}%)`;
        top -= 1;
      }
      break;

    case "ArrowLeft":
      if (box.offsetLeft > box.offsetWidth / 2) {
        box.style.left = `calc(${left - 1}%)`;
        left -= 1;
      }
      break;

    case "ArrowRight":
      if (box.offsetLeft < window.innerWidth - box.offsetWidth / 2) {
        box.style.left = `calc(${left + 1}%)`;
        left += 1;
      }
      break;
  }
});
