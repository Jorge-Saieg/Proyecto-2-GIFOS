
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
const itsMobile = window.matchMedia("(max-width: 769px)");
const apikey = "Xv1G4X6o3HLfPnoSw180c8C1CERgqZ0h";

// FOCUS IN/OUT EVENTS-----------------------------------------------
if (inputCtn != null) {
    inputCtn.addEventListener("focusin", () => {
        if (itsMobile.matches) {
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
        if (itsMobile.matches && !inputText.value) {
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

// BUSQUEDA GIFS-------------------------------------------------------
let offset = 0;
async function getSearch(text) {
    try {
        inputText.value = text;
        const pathSearch = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${text}&limit=12&offset=${offset}`;
        let = response = await fetch(pathSearch);
        let = json = await response.json();
        if (json.data.length == 0) {
            resultsCtn.innerHTML = "";
            empty.style.display = "flex";
        } else {
            resultsCtn.innerHTML = "";
            for (let index = 0; index < json.data.length; index++) {
                const element = json.data[index];
                resultsCtn.innerHTML += `<div class="card">
      <img class="gif" id="${element.id}" src="${element.images.original.url}" alt="${element.title}" />
      <div class="icons-card">
        <div class="iconFav" onclick='agregarFavorito("${element.id}")'></div>
        <div class="iconDown"onclick='downloadGif("${element.images.original.url}", "${element.slug}")'></div>
        <div class="iconMax" onclick='showModal("${element.id}")'></div>
        <div class="gifData">
          <p class= "userName">${element.username}</p>
          <h4 class="gifTitle">${element.title}</h4>
        </div>
      </div>
    </div>`;
                if (itsMobile.matches) {
                    const trendCard = document.querySelector(".card");
                    trendCard.addEventListener("click", () => {
                        showModal(element.id);
                    });
                }
            }
        }

        searchValue.innerText = inputText.value;
        searchResults.style.display = "block";
    } catch (error) {
        console.log("ERROR EN LA BUSQUEDA: " + error);
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
        const pathSuggestions = `https://api.giphy.com/v1/gifs/search/tags?apiKey=${apikey}&q=${inputText.value}&limit=4`;
        let = response = await fetch(pathSuggestions);
        let = json = await response.json();
        sugerencias.innerHTML = "";
        for (let index = 0; index < json.data.length; index++) {
            const element = json.data[index];
            sugerencias.innerHTML += `<li id="sugerencia${index}"><img src="./images/icon-search.svg" alt="Lupa" class="lupaSugerencias"><span id="textoSugg${index}" onclick="getSearch('${element.name}')">${element.name}</span></li>`;
        }
    } catch (error) {
        console.log("ERROR EN LAS SUGERENCIAS: " + error);
    }
}
if (inputText != null) {
    inputText.addEventListener("keyup", function (event) {
        if (event.key !== "Enter") {
            /* aca quiero juntar todo en el mismo if */
            if (!itsMobile.matches) {
                hrInput.style.display = "block";
                sugerenciasDiv.style.display = "block";
            }
            showSuggestions();
        }
    });
}
// INPUT STICKY

function callback(entries, observer) {
    if (entries[0].isIntersecting) {
        inputCtn.classList.remove("isSticky");
    } else {
        inputCtn.classList.add("isSticky");
    }
}
const divObserver = document.getElementById("divObserver");

const options = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 1,
};

const observer = new IntersectionObserver(callback, options);

if (divObserver) {
    observer.observe(divObserver);
}
