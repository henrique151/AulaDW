function mudarTexto() {
  // 1. Selecionar os elementos do DOM
  const paragrafo = document.getElementById("paragrafo-texto");

  // 2. Alterar a propriedade textContent do parágrafo
  paragrafo.textContent =
    "O texto foi alterado! Parabéns, você manipulou o DOM.";
}
