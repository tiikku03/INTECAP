const moviesDimentionNodeList =
  document.getElementsByClassName("opcionDimention");
const moviesAmountNodeList = document.getElementsByClassName("amaunt");
const container = document.getElementById("showingCartInformation");
const movies2D = document.querySelector(".amaunt2D");
const movies3D = document.querySelector(".amaunt3D");
const rightContainer = document.getElementsByClassName("right");
const totalBill = document.querySelector(".totalBill");

const peliculas = [
  {
    title: "¿Y donde estan las rubias?",
    amount2D: null,
    amount3D: null,
  },
  {
    title: "Ése es mi hijo",
    amount2D: null,
    amount3D: null,
  },
  {
    title: "Piratas del caribe",
    amount2D: null,
    amount3D: null,
  },
  {
    title: "El bueno, el feo y el malo",
    amount2D: null,
    amount3D: null,
  },
  {
    title: "Esposa de mentiras",
    amount2D: null,
    amount3D: null,
  },
  {
    title: "Golpe bajo",
    amount2D: null,
    amount3D: null,
  },
  {
    title: "Un papá genial",
    amount2D: null,
    amount3D: null,
  },
  {
    title: "The heat",
    amount2D: null,
    amount3D: null,
  },
  {
    title: "¿Que paso ayer?",
    amount2D: null,
    amount3D: null,
  },
  {
    title: "Una pareja explosiva",
    amount2D: null,
    amount3D: null,
  },
];

let moviesInFormat2D = 0;
let moviesInFormat3D = 0;

function gettingTheAmountOfMOvies() {
  for (let i = 0; i < peliculas.length; i++) {
    if (moviesDimentionNodeList[i].value === "2D") {
      peliculas[i].amount2D = moviesAmountNodeList[i].value;
      
    } else {
      peliculas[i].amount3D = moviesAmountNodeList[i].value;
    }
  }
  moviesInFormat2D = peliculas.reduce((acumulador, movie) => {
    if (movie.amount2D !== null) {
      return acumulador + parseInt(movie.amount2D);
    }
    return acumulador;
  }, 0);

  moviesInFormat3D = peliculas.reduce((acumulador, movie) => {
    if (movie.amount3D !== null) {
      return acumulador + parseInt(movie.amount3D);
    }
    return acumulador;
  }, 0);

  movies2D.textContent = moviesInFormat2D;
  movies3D.textContent = moviesInFormat3D;
}

document.addEventListener("change", gettingTheAmountOfMOvies);

function selectedMovies() {
  let moviesSelectedList = peliculas.filter((movie) => {
    if (movie.amount2D !== null && movie.amount2D !== "0") {
      return movie;
    } else if (movie.amount3D !== null && movie.amount3D !== "0") {
      return movie;
    }
  });
  let arrayWithTheInformation = moviesSelectedList.map((movie) => {
    return `<span class="selectedMovie">
            ${movie.title}
             son: ${movie.amount2D !== null ? movie.amount2D : 0} de 2D y 
             ${movie.amount3D !== null ? movie.amount2D : 0} de 3D</span>`;
  });
  const text = "las peliculas que has selecicionado son las siguientes: <br>";

  container.innerHTML = text + arrayWithTheInformation.join("<br>");
}



function gettingTotalBill() {
  let billAmount = moviesInFormat2D * 12 + moviesInFormat3D * 20;
  totalBill.textContent = `Total a pagar en esta compra: Q.${billAmount}`;
}


document.addEventListener("change", selectedMovies);
document.addEventListener("change", gettingTotalBill);
