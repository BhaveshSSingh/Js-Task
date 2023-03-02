const runBtn = document.getElementById("run-button");
const numberOfClicks = document.getElementById("clicks");

var runCount = 0;

numberOfClicks.innerHTML = runCount;

const increment = () => {
  runCount++;
  numberOfClicks.innerHTML = runCount;

  //
  const playAnimation = () => {
    const progressBar = document.querySelector(".progress-bar");
    progressBar.setAttribute("id", "noAnimation");
    let i = 0;

    while (i < runCount) {
      loop(i);
      i++;
    }
    function loop(i) {
      setTimeout(function () {
        progressBar.setAttribute("id", "playAnimation");
        console.log("loop");
      }, 3000 * i);
    }
  };
  playAnimation();
};

runBtn.addEventListener("click", increment);

const playAnimation = () => {
  const progressBar = document.querySelector(".progress-bar");
  progressBar.setAttribute("id", "noAnimation");
  let i = 0;

  while (i < runCount) {
    loop(i);
    i++;
  }
  function loop(i) {
    setTimeout(function () {
      progressBar.setAttribute("id", "playAnimation");
      console.log("loop");
    }, 3000 * i);
  }
};
