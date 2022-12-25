/*
1. We need to display the output
2. Add and subtract button adding the increment or decrement given 
3. Reset button reseting the value to zero of output
*/

const value = document.getElementById("value");
const add = document.getElementById("add");
const sub = document.getElementById("subtract");
const changeBy = document.getElementById("changeBy");
const reset = document.getElementById("reset");

add.addEventListener("click", () => {
  value.textContent = +value.textContent + changeBy.valueAsNumber;
  console.log("hey ");
});

sub.addEventListener("click", () => {
  value.textContent = parseInt(value.textContent) - parseInt(changeBy.value);
  console.log("hey ");
});

reset.addEventListener("click", () => {
  value.textContent = 0;
});

changeBy.addEventListener("change", () => {
  const changeByVal = changeBy.valueAsNumber;

  if (Number.isNaN(changeByVal)) {
    changeBy.value = 0;
  } else if (changeByVal < 0) {
    changeBy.value = 1;
  } else if (changeByVal > 10) {
    changeBy.value = 10;
  }
});
