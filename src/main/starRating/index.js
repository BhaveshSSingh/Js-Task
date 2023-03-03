const stars = document.querySelectorAll(".stars a");
const starWrapper = document.querySelector(".stars");
const staRate = document.getElementById("star-rate");

stars.forEach((stars, idx) => {
  stars.addEventListener("click", () => {
    console.log("Stars of " + (idx + 1) + " was clicked");
  });
});
