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

// TRENDINGS---------------------------------------------------------

const api_key = "Xv1G4X6o3HLfPnoSw180c8C1CERgqZ0h";

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
        <div class="iconDown"></div>
        <div class="iconMax" onclick='showModal("${element.id}")'></div>
        <div class="gifData">
          <p class= "userName">${element.username}</p>
          <h4 class="gifTitle">${element.title}</h4>
        </div>
     </div>`;
      if (mediaQ769.matches) {
        const trendCard = document.querySelector(
          ".card"
        ); /* (`trendCard${index}`) */
        console.log(trendCard);
        trendCard.addEventListener("click", () => {
          console.log("click");
          showModal(element.id);
        });
      }
    }
  } catch (error) {
    console.log("ERROR EN LOS TRENDINGS Tipo: " + error);
  }
}
getTrendings();
if (sliderL !== null) {
  sliderL.addEventListener("click", () => {
    console.log("holaL");
    imgs_ctn.scrollLeft -= 1200;
  });
  sliderR.addEventListener("click", () => {
    console.log("holaR");
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

// ------------------------------BUSQUEDA----------------------------
const inputCtn = document.getElementById("inputCtn");
const resultsCtn = document.getElementById("resultsCtn");
const h1 = document.querySelector(".buscador h1");
const ilustraHeader = document.querySelector(".ilustra-header");
const hrInput = document.getElementById("hrInput");
const sugerenciasDiv = document.getElementById("sugerenciasDiv");
const sugerencias = document.getElementById("sugerencias");
const inputText = document.getElementById("inputText");
const searchValue = document.getElementById("searchValue");
const searchResults = document.getElementById("searchResults");
const verMas = document.getElementById("verMas");
const mediaQ769 = window.matchMedia("(max-width: 769px)");

// FOCUS IN OUT EVENTS-----------------------------------------------
if (inputCtn != null) {
  inputCtn.addEventListener("focusin", () => {
    if (mediaQ769.matches) {
      h1.classList.add("hide");
      ilustraHeader.classList.add("hide");
      inputCtn.style.marginTop = "24px";
    }
    lupa.style.display = "block";
    lupa.style.position = "absolute";
    lupa.style.left = "20px";
    x.style.display = "block";
    if (dark_button.innerHTML === "Modo Nocturno") {
      x.src = "./images/close.svg";
    } else {
      x.src = "./images/close-modo-noct.svg";
    }
  });
  inputCtn.addEventListener("focusout", () => {
    if (mediaQ769.matches && !inputText.value) {
      h1.classList.remove("hide");
      ilustraHeader.classList.remove("hide");
      inputCtn.style.marginTop = "0px";
    } else if (!inputText.value) {
      hrInput.style.display = "none";
      sugerenciasDiv.style.display = "none";
    }
    if (!inputText.value) {
      lupa.style.display = "none";
      if (dark_button.innerHTML === "Modo Nocturno") {
        x.src = "./images/icon-search.svg";
      } else {
        x.src = "./images/icon-search-modo-noct.svg";
      }
    }
  });
}
if (x != null) {
  x.addEventListener("click", () => {
    if (inputText.value) {
      inputText.value = "";
      x.style.display = "none";
      hrInput.style.display = "none";
      sugerenciasDiv.style.display = "none";
    }
  });
}

// OBTAIN GIFS-------------------------------------------------------
let offset = 0;
async function getSearch(text) {
  try {
    inputText.value = text;
    const pathSearch = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${text}&limit=12&offset=${offset}`;
    let = response = await fetch(pathSearch);
    let = json = await response.json();
    if (json.data.length == 0) {
      console.log(json.data);
      resultsCtn.innerHTML = "";
      console.log(empty);
      empty.style.display = "flex";
    } else {
      resultsCtn.innerHTML = "";
      for (let index = 0; index < json.data.length; index++) {
        const element = json.data[index];
        resultsCtn.innerHTML += `<div class="card">
      <img class="gif" id="${element.id}" src="${element.images.original.url}" alt="${element.title}" />
      <div class="icons-card">
        <div class="iconFav" onclick='agregarFavorito("${element.id}")'></div>
        <div class="iconDown"></div>
        <div class="iconMax" onclick='showModal("${element.id}")'></div>
        <div class="gifData">
          <p class= "userName">${element.username}</p>
          <h4 class="gifTitle">${element.title}</h4>
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
    }

    searchValue.innerText = inputText.value;
    searchResults.style.display = "block";
  } catch (error) {
    console.log("ERROR EN LA BUSQUEDA:" + error);
  }
}
if (lupa != null) {
  lupa.addEventListener("click", () => {
    getSearch(inputText.value);
    hrInput.style.display = "none";
    sugerenciasDiv.style.display = "none";
    trendingTitle.style.display = "none";
    trending_text.style.display = "none";
  });

  inputText.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      hrInput.style.display = "none";
      sugerenciasDiv.style.display = "none";
      trendingTitle.style.display = "none";
      trending_text.style.display = "none";
      getSearch(inputText.value);
    }
  });

  verMas.addEventListener("click", () => {
    offset += 12;
    getSearch(inputText.value);
  });
}

// SUGENRENCIAS DE BUSQUEDA------------------------------------------

async function showSuggestions() {
  try {
    const pathSuggestions = `https://api.giphy.com/v1/gifs/search/tags?api_key=${api_key}&q=${inputText.value}&limit=4`;
    let = response = await fetch(pathSuggestions);
    let = json = await response.json();
    sugerencias.innerHTML = "";
    for (let index = 0; index < json.data.length; index++) {
      const element = json.data[index];
      sugerencias.innerHTML += `<li id="sugerencia${index}"><img src="./images/icon-search.svg" alt="Lupa" class="lupaSugerencias"><span id="textoSugg${index}" onclick="getSearch('${element.name}')">${element.name}</span></li>`;
    }
  } catch (error) {
    console.log("ERROR EN LAS SUGERENCIAS");
  }
}
if (inputText != null) {
  inputText.addEventListener("keyup", function (event) {
    if (event.key !== "Enter") {
      /* aca quiero juntar todo en el mismo if */
      if (!mediaQ769.matches) {
        hrInput.style.display = "block";
        sugerenciasDiv.style.display = "block";
      }
      showSuggestions();
    }
  });
}

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
        const trendCard = document.querySelector(
          ".card"
        ); /* (`trendCard${index}`) */
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

// CREAR GIFO--------------------------------------------------------

const divInterno = document.getElementById('divInterno');
const video = document.getElementById('video');
const pasoUno = document.getElementById('pasoUno');
const pasoDos = document.getElementById('pasoDos');
const pasoTres = document.getElementById('pasoTres');
const crearButton = document.getElementById("crearButton");

function getStreamAndRecord () { 
  navigator.mediaDevices.getUserMedia({
  audio: false,
  video: {
     height: { max: 480 }
  }
})
.then(function(stream) {
  video.srcObject = stream;
  video.play();
})
}

crearButton.addEventListener('click', () => {
  video.style.display = 'block';
  divInterno.style.display = 'none';
  pasoDos.style.backgroundColor = '#572ee5';
  pasoDos.style.color = 'white';
  crearButton.innerHTML = 'GRABAR';
  getStreamAndRecord();
})


