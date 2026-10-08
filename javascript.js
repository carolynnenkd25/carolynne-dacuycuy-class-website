const face = document.getElementById("face");

function makePink() {
  face.style.backgroundColor = "#ff9ecb";
}

function makeYellow() {
  face.style.backgroundColor = "#ffe36e";
}

function makeBlue() {
  face.style.backgroundColor = "#8ed8ff";
}

function makePurple() {
  face.style.backgroundColor = "#c8a4ff";
}

function resetFace() {
  face.style.backgroundColor = "#ff9ecb";
  face.style.transform = "scale(1)";
}

document.getElementById("pink").addEventListener("click", makePink);
document.getElementById("yellow").addEventListener("click", makeYellow);
document.getElementById("blue").addEventListener("click", makeBlue);
document.getElementById("purple").addEventListener("click", makePurple);

document.getElementById("reset").addEventListener("click", resetFace);