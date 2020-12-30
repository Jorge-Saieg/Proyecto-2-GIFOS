// CAMBIO A DARK-MODE------------------------------------------------
const body = document.getElementsByTagName("body");
const dark_button = document.getElementById("dark_button");
const menu = document.querySelectorAll(".menu li a");
const logo = document.getElementById("logo");
const open_menu = document.getElementById("open_menu");
const close_menu = document.getElementById("close_menu");
const crear_gifos = document.getElementById("crear_gifos");
const lupa = document.getElementById("lupa");
const x = document.getElementById("x");
const sliderL = document.getElementById("sliderL");
const sliderR = document.getElementById("sliderR");
const iconFB = document.getElementById("iconFB");
const iconTW = document.getElementById("iconTW");
const iconIG = document.getElementById("iconIG");

const mediaQ = window.matchMedia("(min-width: 900px)");

dark_button.addEventListener("click", () => {
    document.body.classList.toggle("body-dark");

    if (dark_button.innerHTML === "Modo Nocturno") {
        menu.forEach((lista) => {
            lista.style.color = "#FFFFFF";
        });
        dark_button.innerHTML = "Modo Diurno";
        logo.src = "./images/logo-modo-noct.svg";
        open_menu.src = "./images/burger-modo-noct.svg";
        close_menu.src = "./images/close-modo-noct.svg";
        crear_gifos.src = "./images/CTA-crear-gifo-modo-noc.svg";
        lupa.src = "./images/icon-search-modo-noct.svg";
        x.src = "./images/close-modo-noct.svg";
        inputText.style.color = "white";
        sliderL.src = "./images/button-slider-left-md-noct.svg";
        sliderR.src = "./images/button-slider-right-md-noct.svg";
    } else {
        menu.forEach((lista) => {
            if (mediaQ.matches) {
                lista.style.color = "#572ee5";
            } else {
                lista.style.color = "FFFFFF";
            }
        });
        dark_button.innerHTML = "Modo Nocturno";
        logo.src = "./images/logo-desktop.svg";
        open_menu.src = "./images/burger.svg";
        close_menu.src = "./images/close.svg";
        crear_gifos.src = "./images/button-crear-gifo.svg";
        lupa.src = "./images/icon-search.svg";
        x.src = "./images/close.svg";
        inputText.style.color = "black";
        sliderL.src = "./images/button-slider-left.svg";
        sliderR.src = "./images/Button-Slider-right.svg";
    }
});

// HOVERS------------------------------------------------------------
// boton crear gifo
crear_gifos.addEventListener("mouseenter", () => {
    if (dark_button.innerHTML === "Modo Nocturno") {
        crear_gifos.src = "./images/CTA-crear-gifo-hover.svg";
    } else {
        crear_gifos.src = "./images/CTA-crear-gifo-hover-modo-noc.svg";
    }
});
crear_gifos.addEventListener("mousedown", () => {
    if (dark_button.innerHTML === "Modo Nocturno") {
        crear_gifos.src = "./images/CTA-crear-gifo-active.svg";
    } else {
        crear_gifos.src = "./images/CTA-crear-gifo-active-modo-noc.svg";
    }
});
crear_gifos.addEventListener("mouseout", () => {
    if (dark_button.innerHTML === "Modo Nocturno") {
        crear_gifos.src = "./images/button-crear-gifo.svg";
    } else {
        crear_gifos.src = "./images/CTA-crear-gifo-modo-noc.svg";
    }
});
// sliders

if (sliderL !== null) {
    sliderL.addEventListener("mouseenter", () => {
        sliderL.src = "./images/button-slider-left-hover.svg";
    });
    sliderL.addEventListener("mouseout", () => {
        if (dark_button.innerHTML === "Modo Nocturno") {
            sliderL.src = "./images/button-slider-left.svg";
        } else {
            sliderL.src = "./images/button-slider-left-md-noct.svg";
        }
    });
    sliderR.addEventListener("mouseenter", () => {
        sliderR.src = "./images/Button-Slider-right-hover.svg";
    });
    sliderR.addEventListener("mouseout", () => {
        if (dark_button.innerHTML === "Modo Nocturno") {
            sliderR.src = "./images/Button-Slider-right.svg";
        } else {
            sliderR.src = "./images/button-slider-right-md-noct.svg";
        }
    });
}
// iconos redes sociales
iconFB.addEventListener("mouseenter", () => {
    if (dark_button.innerHTML === "Modo Nocturno") {
        iconFB.src = "./images/icon_facebook_hover.svg";
    } else {
        iconFB.src = "./images/icon_facebook_noc.svg";
    }
});
iconFB.addEventListener("mouseout", () => {
    iconFB.src = "./images/icon_facebook.svg";
});

iconTW.addEventListener("mouseenter", () => {
    if (dark_button.innerHTML === "Modo Nocturno") {
        iconTW.src = "./images/icon-twitter-hover.svg";
    } else {
        iconTW.src = "./images/icon_twitter_noc.svg";
    }
});
iconTW.addEventListener("mouseout", () => {
    iconTW.src = "./images/icon-twitter.svg";
});

iconIG.addEventListener("mouseenter", () => {
    if (dark_button.innerHTML === "Modo Nocturno") {
        iconIG.src = "./images/icon_instagram-hover.svg";
    } else {
        iconIG.src = "./images/icon_instagram_noc.svg";
    }
});
iconIG.addEventListener("mouseout", () => {
    iconIG.src = "./images/icon_instagram.svg";
});


// NAVBAR SHADOW

const nav = document.getElementById("nav");

window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 75) {
        nav.classList.add("add-shadow");
    } else {
        nav.classList.remove("add-shadow");
    }
});

//AGREGAR FAVORITOS

let arrayFavoritos = [];
if (localStorage.getItem("favoritos") !== null) {
    arrayFavoritos = JSON.parse(localStorage.getItem("favoritos"));
}
function agregarFavorito(id) {
    arrayFavoritos.push(id);
    localStorage.setItem("favoritos", JSON.stringify(arrayFavoritos));
}

// MOSTRAR FAVORITOS

const favCtn = document.getElementById("favCtn");
const empty = document.getElementById("empty");
const mediaQ769 = window.matchMedia("(max-width: 769px)");
const api_key = "Xv1G4X6o3HLfPnoSw180c8C1CERgqZ0h";
async function getFavorites() {
    if (localStorage.getItem("favoritos") !== "[]") {
        let favoritosParsed = JSON.parse(localStorage.getItem("favoritos"));
        for (let index = 0; index < favoritosParsed.length; index++) {
            const element = favoritosParsed[index];
            const pathGetFavs = `https://api.giphy.com/v1/gifs/${element}?api_key=${api_key}`;
            let = response = await fetch(pathGetFavs);
            let = json = await response.json();
            favCtn.innerHTML += `<div class="card">
      <img class="gif" src="${json.data.images.original.url}" alt="${json.data.title}" />
      <div class="icons-card">
      <div class="iconFav itsFav" onclick='deleteFav("${json.data.id}")'></div>
      <div class="iconDown"></div>
      <div class="iconMax" onclick='showModal("${json.data.id}")'></div>
      <div class="gifData">
      <p class= "userName">${json.data.username}</p>
      <h4 class="gifTitle">${json.data.title}</h4>
      </div>
      </div>
      </div>`;
            if (mediaQ769.matches) {
                const trendCard = document.querySelector(".card");
                console.log(trendCard);
                trendCard.addEventListener("click", () => {
                    console.log("click");
                    showModal(element.id);
                });
            }
        }
    } else {
        empty.style.display = "flex";
    }
}
if (favCtn) {
    getFavorites();
}
// ELIMINAR FAVORITOS------------------------------------------------
function deleteFav(id) {
    let listaFavs = JSON.parse(localStorage.getItem("favoritos"));
    let idPosition = listaFavs.indexOf(id);
    listaFavs.splice(idPosition, 1);
    localStorage.setItem("favoritos", JSON.stringify(listaFavs));
    favCtn.innerHTML = "";
    getFavorites();
}

// MODAL-------------------------------------------------------------
const modal = document.getElementById("modal");
async function showModal(id) {
    modal.style.display = "flex";
    const pathGetById = `https://api.giphy.com/v1/gifs/${id}?api_key=${api_key}`;
    let = response = await fetch(pathGetById);
    let = json = await response.json();
    console.log(json);
    modal.innerHTML = `<img id='maxGifX' class="maxGifX" src="./images/close.svg" alt="X">
      <img class="maxGifImg" src="${json.data.images.original.url}" alt="${json.data.title}">
      <div class="maxGifCtn">
        <div class="maxGifData">
          <p> ${json.data.username}</p>
          <h4>${json.data.title}</h4>
        </div>
        <div class="maxGifButtons">
          <div><img id='maxGifFav' src="./images/icon-fav.svg" alt="Favorite" onclick='agregarFavorito("${id}")'></div>
          <div><img id='maxGifDown' src="./images/icon-download.svg" alt="Down"></div>
        </div>
      </div>`;
    const maxGifX = document.getElementById("maxGifX");
    maxGifX.addEventListener("click", () => {
        modal.style.display = "none";
    });
    const maxGifFav = document.getElementById("maxGifFav");
    const maxGifDown = document.getElementById("maxGifDown");
    maxGifFav.addEventListener("mouseenter", () => {
        maxGifFav.src = "./images/icon-fav-hover.svg";
    });
    maxGifFav.addEventListener("mouseout", () => {
        maxGifFav.src = "./images/icon-fav.svg";
    });
    maxGifDown.addEventListener("mouseenter", () => {
        maxGifDown.src = "./images/icon-download-hover.svg";
    });
    maxGifDown.addEventListener("mouseout", () => {
        maxGifDown.src = "./images/icon-download.svg";
    });
}

// DESCARGAR GIFO----------------------------------------------------

/* onclick='descargarGif("${element.images.original.url}", "${element.slug}")' */
// async function descargarGif(gifUrl, gifNombre) {
//   console.log('down');
//   let blob = await fetch(gifUrl).then(img => img.blob());
//   invokeSaveAsDialog(blob, gifNombre + ".gif");
// }


