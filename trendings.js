// TRENDINGS---------------------------------------------------------

const apiKey = "Xv1G4X6o3HLfPnoSw180c8C1CERgqZ0h";

const trending_text = document.getElementById("trending_text");
const trendingTitle = document.getElementById("trendingTitle");
const imgs_ctn = document.getElementById("imgs_ctn");
async function getTrendings() {
    try {
        const pathTrendings = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=9&rating=g`;
        let = response = await fetch(pathTrendings);
        let = json = await response.json();
        for (let index = 0; index < json.data.length; index++) {
            const element = json.data[index];
            imgs_ctn.innerHTML += `<div class="card">
     <img
       class="gif"
       src="${element.images.original.url}" 
       alt="${element.title}"
       id="${element.id}"
     />
     <div class="icons-card">
        <div class="iconFav" onclick='agregarFavorito("${element.id}")'></div>
        <div class="iconDown"onclick='downloadGif("${element.images.original.url}", "${element.slug}")'></div>
        <div class="iconMax" onclick='showModal("${element.id}")'></div>
        <div class="gifData">
          <p class= "userName">${element.username}</p>
          <h4 class="gifTitle">${element.title}</h4>
        </div>
     </div>`;
            if (mediaQ769.matches) {
                const trendCard = document.querySelector(".card");
                trendCard.addEventListener("click", () => {
                    showModal(element.id);
                });
            }
        }
    } catch (error) {
        console.log("ERROR EN LOS TRENDINGS Tipo: " + error);
    }
}
window.onload = getTrendings();

if (sliderL !== null) {
    sliderL.addEventListener("click", () => {
        imgs_ctn.scrollLeft -= 1200;
    });
    sliderR.addEventListener("click", () => {
        imgs_ctn.scrollLeft += 1200;
    });
}

// TRENDING SEARCHES-------------------------------------------------
async function trendingSearches() {
    try {
        const pathSearches = `https://api.giphy.com/v1/trending/searches?api_key=${api_key}`;
        let = response = await fetch(pathSearches);
        let = json = await response.json();
        trending_text.innerHTML = "";
        for (let index = 0; index < 5; index++) {
            const element = json.data[index];
            trending_text.innerHTML += `<span onclick='getSearch("${element}")'>${element}</span>${
                index === 4 ? " " : ", "
            }`;
        }
    } catch (error) {
        console.log("ERROR EN LOS TRENDINGS SEARCHES Tipo: " + error);
    }
}

trendingSearches();
