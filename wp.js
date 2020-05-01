var basicBtn = document.getElementById("basicBtn");
basicBtn.addEventListener("click", basicReadMore);

console.log(basicBtn, "hello");

function basicReadMore() {
  console.log("in function");
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("basicMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    basicBtn.innerHTML = "Læs mere";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    basicBtn.innerHTML = "læs mindre";
    moreText.style.display = "inline";
  }
}

var proBtn = document.getElementById("proBtn");
proBtn.addEventListener("click", proReadMore);

function proReadMore() {
  console.log("in function");
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("proMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    proBtn.innerHTML = "Læs mere";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    proBtn.innerHTML = "læs mindre";
    moreText.style.display = "inline";
  }
}

var byUsBtn = document.getElementById("byUsBtn");
byUsBtn.addEventListener("click", byUsReadMore);

function byUsReadMore() {
  console.log("in function");
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("byUsMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    byUsBtn.innerHTML = "Læs mere";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    byUsBtn.innerHTML = "læs mindre";
    moreText.style.display = "inline";
  }
}

var familyBtn = document.getElementById("familyBtn");
familyBtn.addEventListener("click", familyReadMore);

function familyReadMore() {
  console.log("in function");
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("familyMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    familyBtn.innerHTML = "Læs mere";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    familyBtn.innerHTML = "læs mindre";
    moreText.style.display = "inline";
  }
}

var cargoBtn = document.getElementById("cargoBtn");
cargoBtn.addEventListener("click", cargoReadMore);

function cargoReadMore() {
  console.log("in function");
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("cargoMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    cargoBtn.innerHTML = "Læs mere";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    cargoBtn.innerHTML = "læs mindre";
    moreText.style.display = "inline";
  }
}
