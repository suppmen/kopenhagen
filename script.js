/*********** toggeling the burger and nav ************/

window.addEventListener("load", setup);

function setup() {
    setupBurgherNav();
}

function setupBurgherNav() {
    const burger = document.querySelector("header svg");
    const nav = document.querySelector("nav")
    burger.addEventListener("click", e => {
        burger.classList.toggle("open");
        nav.classList.toggle("open");
    });
}
/*******************************************************/




/*********************** Get Data from WP **************************/

const link0 = "http://mymmd.dk/Kopenhagen/wp-json/wp/v2/art_calendar?per_page=100";
const link1 = "http://mymmd.dk/Kopenhagen/wp-json/wp/v2/art_calendar?per_page=100&_embed";
window.addEventListener("DOMContentLoaded", getData);




/***** fetch Data *****/

function getData(){
    fetch(link1)
    .then(function(response){
        return response.json();
    })
    .then(showData);
}

function showData(artArray){
   console.log(artArray, "artArray");
    artArray.forEach(art => {
        console.log(art,"LoopTest");

        const template = document.querySelector("template").content;

        const copy = template.cloneNode(true);

        copy.querySelector('.event-title').textContent = art.title.rendered;
        copy.querySelector('.artCat').textContent = art._embedded["wp:term"][1][0].name;
        copy.querySelector('.gallery-name').textContent = art.gallery_name;
        copy.querySelector('.artist-name').textContent = art.artist_name;
//        copy.querySelector('.event-adress').textContent = art._embedded["wp:term"][3][0].name;
        copy.querySelector('.event-adress').textContent = art.address;
//        copy.querySelector('img').src = art._embedded["wp:featuredmedia"][0].source_url;
        copy.querySelector("img").src = art._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;


        document.querySelector(".cards-wrapper").appendChild(copy);

    });

}

/*********************************************************************************************************/


