// Pegando o valor de cada item como relógio e botões.
const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos = 0;
let timer;

function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hours12: false,
    timeZone: "UTC",
  });
}

function iniciaRelogio() {
  timer = setInterval(() => {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
}

function pausaHora() {
  clearInterval(timer);
}

// Adicionando evento nos botões

document.addEventListener("click", function (e) {
  const elemento = e.target;

  if (elemento.classList.contains("iniciar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    iniciaRelogio();
  }
  if (elemento.classList.contains("pausar")) {
    relogio.classList.add("pausado");
    pausaHora();
  }
  if (elemento.classList.contains("zerar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    segundos = 0;
  }
});
