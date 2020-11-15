// CAMBIO A DARK-MODE------------------------------------------------
const body = document.getElementsByTagName("body");
const dark_button = document.getElementById("dark_button");
const menu = document.querySelectorAll(".menu li a");

const logo_desktop = document.getElementById("logo_desktop");
const logo_mobile = document.getElementById("logo_mobile");
const open_menu = document.getElementById("open_menu");
const close_menu = document.getElementById("close_menu");
const crear_gifos = document.getElementById("crear_gifos");
const lupa = document.getElementById("lupa");
const x = document.getElementById("x");

const mediaQ = window.matchMedia("(min-width: 900px)");

dark_button.addEventListener("click", () => {
  document.body.classList.toggle("body-dark");

  if (dark_button.innerHTML === "Modo Nocturno") {
    menu.forEach((lista) => {
      lista.style.color = "#FFFFFF";
    });
    dark_button.innerHTML = "Modo Diurno";
    logo_desktop.src = "./images/Logo-modo-noc.svg";
    logo_mobile.src = "./images/logo-mobile-modo-noct.svg";
    open_menu.src = "./images/burger-modo-noct.svg";
    close_menu.src = "./images/close-modo-noct.svg";
    crear_gifos.src = "./images/CTA-crear-gifo-modo-noc.svg";
    lupa.src = "./images/icon-search-modo-noct.svg";
    x.src = "./images/close-modo-noct.svg";
  } else {
    menu.forEach((lista) => {
      if (mediaQ.matches) {
        lista.style.color = "#572ee5";
      } else {
        lista.style.color = "FFFFFF";
      }
    });
    dark_button.innerHTML = "Modo Nocturno";
    logo_desktop.src = "./images/logo-desktop.svg";
    logo_mobile.src = "./images/logo-mobile.svg";
    open_menu.src = "./images/burger.svg";
    close_menu.src = "./images/close.svg";
    crear_gifos.src = "./images/button-crear-gifo.svg";
    lupa.src = "./images/icon-search.svg";
    x.src = "./images/close.svg";
  }
}); /* la lupa y x cuando las voy cambiando en los focus in out quedan en diurno... */

// TRENDINGS---------------------------------------------------------

const api_key = "Xv1G4X6o3HLfPnoSw180c8C1CERgqZ0h";

const trending_text = document.getElementById("trending_text");
const trendingTitle = document.getElementById("trendingTitle");
const imgs_ctn = document.getElementById("imgs_ctn");

async function getTrendings() {
  try {
    const pathTrendings = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=3&rating=g`;
    let = response = await fetch(pathTrendings);
    let = json = await response.json();
    for (let index = 0; index < json.data.length; index++) {
      const element = json.data[index];
      imgs_ctn.innerHTML += `<div class="card">
     <img
       class="gif"
       src="${element.images.original.url}" 
       alt="${element.title}"
     />
     <div class="icons-card">
       <img src="./images/icon-fav.svg" alt="fav" />
       <img src="./images/icon-download.svg" alt="down" />
       <img src="./images/icon-max-normal.svg" alt="max" />
     </div>`;
    }
  } catch (error) {
    console.log("ERROR EN LOS TRENDINGS");
  }
}
getTrendings();

// TRENDING SEARCHES-------------------------------------------------
async function trendingSearches() {
  try {
    const pathSearches = `https://api.giphy.com/v1/trending/searches?api_key=${api_key}`
    let = response = await fetch(pathSearches);
    let = json = await response.json();
    trending_text.innerHTML = "";
    for (let index = 0; index < 5; index++) {
      const element = json.data[index];
      trending_text.innerHTML +=
        element + (index ===  4 ? " " : ", ");
    }
  } catch (error) {
    console.log("ERROR EN LOS TRENDINGS");
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
const mediaQ769 = window.matchMedia("(max-width: 769px)");

// FOCUS IN OUT EVENTS-----------------------------------------------
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
  x.src = "./images/close.svg";
});

inputCtn.addEventListener("focusout", () => {
  if (mediaQ769.matches && !inputText.value) {
    h1.classList.remove("hide");
    ilustraHeader.classList.remove("hide");
    inputCtn.style.marginTop = "0px";
  } else {
    hrInput.style.display = "none";
    sugerenciasDiv.style.display = "none";
  }
  if (!inputText.value) {
    lupa.style.display = "none";
    x.src = "./images/icon-search.svg";
  } else {
    
  }
});
x.addEventListener("click", () => {
  if (inputText.value) {
    console.log(inputText);
    inputText.value = "";
    x.style.display = "none";
  }
});

// OBTAIN GIFS-------------------------------------------------------
async function getSearch(text) {
  try {
    const pathSearch = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${text}&limit=12&offset=0`;
    let = response = await fetch(pathSearch);
    let = json = await response.json();
    resultsCtn.innerHTML = "";
    for (let index = 0; index < json.data.length; index++) {
      const element = json.data[index];
      resultsCtn.innerHTML += `<div class="card">
      <img class="gif" src="${element.images.original.url}" alt="${element.title}" />
      <div class="icons-card">
        <img src="./images/icon-fav.svg" alt="" id="${element.id}" />
        <img src="./images/icon-download.svg" alt="" />
        <img src="./images/icon-max-normal.svg" alt="" />
      </div>
    </div>`;
    }
    searchValue.innerText = inputText.value;
    searchResults.style.display = "block";
  } catch (error) {
    console.log("ERROR EN LA BUSQUEDA");
  }
}

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

// SUGENRENCIAS DE BUSQUEDA------------------------------------------
async function searchSuggestions() {
  try {
    const pathSuggestions = `https://api.giphy.com/v1/gifs/search/tags?api_key=${api_key}&q=${inputText.value}&limit=4`;
    let = response = await fetch(pathSuggestions);
    let = json = await response.json();
    sugerencias.innerHTML = "";
    for (let index = 0; index < json.data.length; index++) {
      const element = json.data[index];
      sugerencias.innerHTML += `<li id="sugerencia${index}"><img src="./images/icon-search.svg" alt="Lupa" class="lupaSugerencias">${element.name}</li>`;
    }
  } catch (error) {
    console.log("ERROR EN LAS SUGERENCIAS");
  }
}

inputText.addEventListener("keyup", function (event){
  if (event.key !== "Enter") {
    if (!mediaQ769.matches) {
      hrInput.style.display = "block";
      sugerenciasDiv.style.display = "block";
      }
    searchSuggestions();
  }
});

/* aca la idea seria buscar alguna de las sugenrencias, tenria q asignarles algun id distinto a cada una y crear un evento*/

 
sugerencias.addEventListener("click", () => {
  inputText.value = sugerencias; /* hay q sacar el img*/
  getSearch(inputText.value);
  hrInput.style.display = "none";
  sugerenciasDiv.style.display = "none";
  trendingTitle.style.display = "none";
  trending_text.style.display = "none";
});