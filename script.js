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
/***** modal *****/

const calendarModal = document.querySelector(".calendar-modal");
const exitBtn = document.querySelector(".exit");


exitBtn.addEventListener("click", () => {
    calendarModal.classList.add("hide-calendar");
});
document.querySelector(".calendar-btn").addEventListener("click", showCalendarModal);

function showCalendarModal() {


    calendarModal.classList.remove("hide-calendar");
}

/*********************** Get Data from WP **************************/

const link0 = "http://mymmd.dk/Kopenhagen/wp-json/wp/v2/art_calendar?per_page=100";
const link1 = "http://mymmd.dk/Kopenhagen/wp-json/wp/v2/art_calendar?per_page=100&_embed";
window.addEventListener("DOMContentLoaded", getData);




/***** fetch Data *****/

function getData() {
    fetch(link1)
        .then(function (response) {
            return response.json();
        })
        .then(handleData);
}


/***** filter section *****/

function handleData(artArray) {

    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(filterBtn => {
        //            console.log('this is button in loop', filterBtn)

        filterBtn.addEventListener("click", filterArtArray);

    })

    function filterArtArray(e) {
        artArray.forEach(item =>{
            console.log('yes', item._embedded.)
        })

        console.log(e.currentTarget.textContent);
//    const res =  artArray.filter(item => artArray._embedded === e.currentTarget.textContent)

    }
     showData(artArray)

}



function showData(artArray) {
       console.log(artArray, "artArray");
    artArray.forEach(art => {
        //        console.log(art,"LoopTest");

        const template = document.querySelector("template").content;

        const copy = template.cloneNode(true);

        copy.querySelector('.event-title').textContent = art.title.rendered;
        copy.querySelector('.artCat').textContent = art._embedded["wp:term"][1][0].name;
        copy.querySelector('.gallery-name').textContent = art.gallery_name;
        copy.querySelector('.artist-name').textContent = art.artist_name;
        //        copy.querySelector('.event-adress').textContent = art._embedded["wp:term"][3][0].name;
        copy.querySelector('.event-adress').textContent = art.address;




        document.querySelector(".cards-wrapper").appendChild(copy);

    });

}

/*********************************************************************************************************/
