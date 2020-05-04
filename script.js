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

const link0 = "https://mymmd.dk/Kopenhagen/wp-json/wp/v2/art_calendar?per_page=100";
const link1 = "https://mymmd.dk/Kopenhagen/wp-json/wp/v2/art_calendar?per_page=100&_embed";
const link2 = "https://mymmd.dk/Kopenhagen/wp-json/wp/v2/artists?per_page=100&_embed"
window.addEventListener("DOMContentLoaded", getData);




/***** fetch Data *****/

function getData(){

    fetch(link2)
    .then(function(response){
        return response.json();
    })
    .then(showArtistsArray);

    const urlParams = new URLSearchParams(window.location.search);
    console.log('URLSearchParams' + window.location);
    console.log('urlParams', urlParams);

    const the_art_id = urlParams.get('art_id');
    const link3 = "https://mymmd.dk/Kopenhagen/wp-json/wp/v2/art_calendar/"+the_art_id+"?per_page=100&_embed";
//    console.log(the_art_id, "IdTest");

    if (the_art_id){
        fetch(link3)
        .then(function(response){
            return response.json()
        })
        .then(showSingleArtPage)
    }else{
    fetch(link1)
    .then(function(response){
        return response.json();
    })
    .then(showArt_CalendarData);
}
}



function showArt_CalendarData(artArray){
//   console.log(artArray, "artArray");

    //Loop through
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
//        copy.querySelector('img').src = art._embedded["wp:featuredmedia"][0].source_url;
        copy.querySelector("img").src = art._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;

        const a = copy.querySelector('a');

        if (a){
                    a.href += art.id;

        }


        document.querySelector(".cards-wrapper").appendChild(copy);

    });

}

function showArtistsArray(artists){
    let artistNames = [];

  artists.forEach(Artist =>{
//      console.log(Artist.name);
      artistNames.push(Artist.name);
//      console.log(artistNames);
  });
    artistNames.sort();
//    console.log(artistNames);
    artistNames.forEach(ShowArtists);
}

function ShowArtists(Names){
    const li = document.createElement("li");
    li.textContent = Names;
    const firstLetter = Names.charAt(0);
//    console.log(Names);
    console.log(".getArtists #" + firstLetter)
    const elem = document.querySelector(".getArtists #" + firstLetter);
    elem.appendChild(li);

    const p = document.querySelector(".ArtistFirstLetter");

    if (elem > li) {
        elem.classList.remove("hide");
    }
}


function showSingleArtPage(art){
        console.log(art, "art");

        const template = document.querySelector("template").content;

        const copy = template.cloneNode(true);

        const divArtDescription = copy.querySelector('#art-description');
        console.log(divArtDescription, "div");


//    if(art.long_description.length> 1){
//        divArtDescription.innerHTML = art.content.rendered;
    if(divArtDescription){
        divArtDescription.innerHTML = art.long_description;

        copy.querySelector('.event-title').textContent = art.title.rendered;
        copy.querySelector('.artCat').textContent = art._embedded["wp:term"][1][0].name;
        copy.querySelector('.gallery-name').textContent = art.gallery_name;
        copy.querySelector('.artist-name').textContent = art.artist_name;
//        copy.querySelector('.event-adress').textContent = art._embedded["wp:term"][3][0].name;
        copy.querySelector('.event-adress').textContent = art.address;
//        copy.querySelector('img').src = art._embedded["wp:featuredmedia"][0].source_url;
        copy.querySelector("img").src = art._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
}


        document.querySelector(".cards-wrapper").appendChild(copy);

    };



/*********************************************************************************************************/
