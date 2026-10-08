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

// AI-assisted code: mood functions.
function makeHappy() {
  face.textContent = "😊";
}

function makeCool() {
  face.textContent = "😎";
}

function makeSilly() {
  face.textContent = "😜";
}

// AI-assisted code: hover functions.
function growFace() {
  face.style.transform = "scale(1.15)";
}

function shrinkFace() {
  face.style.transform = "scale(1)";
}

// AI-assisted code: reset function.
function resetFace() {
  face.style.backgroundColor = "#ff9ecb";
  face.textContent = "😊";
  face.style.transform = "scale(1)";
}

document.getElementById("pink").addEventListener("click", makePink);
document.getElementById("yellow").addEventListener("click", makeYellow);
document.getElementById("blue").addEventListener("click", makeBlue);
document.getElementById("purple").addEventListener("click", makePurple);

// AI-assisted code: mood button event listeners.
document.getElementById("happy").addEventListener("click", makeHappy);
document.getElementById("cool").addEventListener("click", makeCool);
document.getElementById("silly").addEventListener("click", makeSilly);

// AI-assisted code: hover and reset event listeners.
face.addEventListener("mouseover", growFace);
face.addEventListener("mouseout", shrinkFace);

document.getElementById("reset").addEventListener("click", resetFace);