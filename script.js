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

    const typeBtns = document.querySelectorAll(".type-btn");
    const placeBtns = document.querySelectorAll(".place-btn");

    console.log('this is button in loop', typeBtns)

    typeBtns.forEach(filterTypeBtn => {

        filterTypeBtn.addEventListener("click", filterArray);

    })

    placeBtns.forEach(filterPlaceBtn => {

        filterPlaceBtn.addEventListener("click", filterArray);

    })

    function filterArray(e) {
        console.log('element name', e.currentTarget.className);

        if (e.currentTarget.classList.contains('type-btn')) {
            typeBtns.forEach(typeBtn => {
                console.log(typeBtn, 'inside typebtn');

                if (typeBtn !== e.currentTarget) {
                    typeBtn.style.backgroundColor = 'white';
                    typeBtn.style.color = '#b7b7b7';


                } else {


                    typeBtn.style.backgroundColor = '#ADE5DF';
                    typeBtn.style.color = 'white';

                }

            });

            console.log(e.currentTarget.textContent);
            const typeRes = artArray.filter(item => item._embedded["wp:term"][1][0].name === e.currentTarget.textContent);
            console.log('yes res array', typeRes)

        } else if (e.currentTarget.classList.contains('place-btn')) {
            placeBtns.forEach(placeBtn => {
                console.log(placeBtn, 'inside typebtn');

                if (placeBtn !== e.currentTarget) {
                    placeBtn.style.backgroundColor = 'white';
                    placeBtn.style.color = '#b7b7b7';


                } else {


                    placeBtn.style.backgroundColor = '#ADE5DF';
                    placeBtn.style.color = 'white';

                }

            });


            console.log(e.currentTarget.textContent);
            artArray.forEach(item => {

                if (item._embedded["wp:term"][3][0]) {
                    console.log(item._embedded["wp:term"][3][0].name, 'in place');

                }


            })
                            const placeRes = artArray.filter(item => {
                                if (item._embedded["wp:term"][3][0]){
                             return   item._embedded["wp:term"][3][0].name === e.currentTarget.textContent
                            }} );

            console.log('yes res array', placeRes)


        }



    }

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
