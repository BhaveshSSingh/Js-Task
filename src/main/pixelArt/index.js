// Select the element that you are targeting
const container = document.querySelector(".container");
const sizeInput = document.querySelector(".size");
const colorInput = document.querySelector(".color-input");
const resetBtn = document.querySelector(".reset-btn");

// Write the function that you want to happen
let draw = false;
let size = sizeInput.value;

function populateContainer(size) {
  container.style.setProperty("--size", size);
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");

    div.addEventListener("mouseover", function () {
      if (!draw) return;
      div.style.backgroundColor = colorInput.value;
    });
    div.addEventListener("mousedown", function () {
      if (!draw) return;
      div.style.backgroundColor = colorInput.value;
    });

    container.appendChild(div);
  }
}

function reset() {
  container.innerHTML = "";
  populateContainer(size);
}

window.addEventListener("mousedown", function () {
  draw = true;
});

window.addEventListener("mouseup", function () {
  draw = false;
});

resetBtn.addEventListener("click", reset);

sizeInput.addEventListener("keyup", function () {
  size = sizeInput.value;
  reset();
});

populateContainer(size);
// The event listener to run the function of the targeted element
