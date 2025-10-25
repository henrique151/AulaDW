const paragrafo = document.getElementById("paragrafo-texto");
const botao = document.getElementById("botão-mudar");

function mudarTexto() {
  paragrafo.textContent =
    "O texto foi alterado! Parabéns, você manipulou o DOM.";
}

function mudarTextoOver() {
  paragrafo.textContent =
    "ON MOUSE OVER - O texto foi alterado! Parabéns, você manipulou o DOM.";
}

botao.addEventListener("click", mudarTexto);
botao.addEventListener("mouseover", mudarTextoOver);
