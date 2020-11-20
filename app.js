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
        <div class="iconFav" onclick='agregarFavorito("${element.title}", "${element.id}")'></div>
        <div class="iconDown"></div>
        <div class="iconMax"></div>
        <div class="gifData">
          <p class= "userName">${element.username}</p>
          <h4 class="gifTitle">${element.title}</h4>
        </div>
     </div>`;
    }
  } catch (error) {
    console.log("ERROR EN LOS TRENDINGS");
  }
}
getTrendings();

sliderL.addEventListener("click", () => {
  console.log("holaL");
  imgs_ctn.scrollLeft -= 1200;
});
sliderR.addEventListener("click", () => {
  console.log("holaR");
  imgs_ctn.scrollLeft += 1200;
});

// TRENDING SEARCHES-------------------------------------------------
async function trendingSearches() {
  try {
    const pathSearches = `https://api.giphy.com/v1/trending/searches?api_key=${api_key}`;
    let = response = await fetch(pathSearches);
    let = json = await response.json();
    trending_text.innerHTML = "";
    for (let index = 0; index < 5; index++) {
      const element = json.data[index];
      trending_text.innerHTML += element + (index === 4 ? " " : ", ");
    }
  } catch (error) {
    console.log("ERROR EN LOS TRENDINGS SEARCHES");
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
async function getSearch(text, limit) {
  try {
    inputText.value = text;
    const pathSearch = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${text}&limit=${limit}&offset=0`;
    let = response = await fetch(pathSearch);
    let = json = await response.json();
    resultsCtn.innerHTML = "";
    for (let index = 0; index < json.data.length; index++) {
      const element = json.data[index];
      console.log(element);
      resultsCtn.innerHTML += `<div class="card">
      <img class="gif" id="${element.id}" src="${element.images.original.url}" alt="${element.title}" />
      <div class="icons-card">
        <div class="iconFav" onclick='agregarFavorito("Gif-${element.title}", "${element.id}")'></div>
        <div class="iconDown"></div>
        <div class="iconMax"></div>
        <div class="gifData">
          <p class= "userName">${element.username}</p>
          <h4 class="gifTitle">${element.title}</h4>
        </div>
      </div>
    </div>`;
    }

    searchValue.innerText = inputText.value;
    searchResults.style.display = "block";
  } catch (error) {
    console.log("ERROR EN LA BUSQUEDA:" + error);
  }
}
if (lupa != null) {
  lupa.addEventListener("click", () => {
    getSearch(inputText.value, 12);
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
      getSearch(inputText.value, 12);
    }
  });

  verMas.addEventListener("click", () => {
    if (verMas.innerHTML === "VER MÁS") {
      getSearch(inputText.value, 24);
      verMas.innerHTML = "VER MENOS";
    } else {
      console.log("else");
      getSearch(inputText.value, 12);
      verMas.innerHTML = "VER MÁS";
    }
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
      sugerencias.innerHTML += `<li id="sugerencia${index}"><img src="./images/icon-search.svg" alt="Lupa" class="lupaSugerencias"><span id="textoSugg${index}" onclick="getSearch('${element.name}', 12)">${element.name}</span></li>`;
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

function agregarFavorito(title, id) {
  localStorage.setItem(title, id);
}

// MOSTRAR FAVORITOS

let arrayFavoritos = Object.values(localStorage);
const favCtn = document.getElementById("favCtn");

for (let index = 0; index < arrayFavoritos.length; index++) {
  const element = arrayFavoritos[index];
  console.log(element);
  getFavorites(element);
}
async function getFavorites(id) {
  const pathGetFavs = `https://api.giphy.com/v1/gifs/${id}?api_key=${api_key}`;
  let = response = await fetch(pathGetFavs);
  let = json = await response.json();
  favCtn.innerHTML += `<div class="card">
      <img class="gif" src="${json.data.images.original.url}" alt="${json.data.title}" />
      <div class="icons-card">
          <div class="iconFav itsFav"></div>
          <div class="iconDown"></div>
          <div class="iconMax"></div>
          <div class="gifData">
          <p class= "userName">${json.data.username}</p>
          <h4 class="gifTitle">${json.data.title}</h4>
        </div>
      </div>
  </div>`;
}
