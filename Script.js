window.addEventListener("load", setup);

function setup(){
    setupBurgherNav();

}


function setupBurgherNav(){
  const burger = document.querySelector("header svg");
    const nav = document.querySelector("nav")
burger.addEventListener("click", e => {
    burger.classList.toggle("open");
    nav.classList.toggle("open");
    });
}



