function rolarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function atualizarTexto(elemento, texto) {
  elemento.textContent = texto;
}

let numeroJogador1 = rolarDado();
let numeroJogador2 = rolarDado();

function rolarDados() {
  let numeroJogador1 = rolarDado();
  let numeroJogador2 = rolarDado();

  let img1 = document.getElementById("img1");
  img1.setAttribute("src", `img/dice${numeroJogador1}.png`);

  let img2 = document.getElementById("img2");
  img2.setAttribute("src", `img/dice${numeroJogador2}.png`);

  let resultado;
  if (numeroJogador1 > numeroJogador2) {
    resultado = "🏆Jogador 1 ganhou!";
  } else if (numeroJogador2 > numeroJogador1) {
    resultado = "🏆Jogador 2 ganhou!";
  } else {
    resultado = "Empate!";
  }

  let h1 = document.querySelector("h1");
  atualizarTexto(h1, resultado);
}
