const botaoExibir = document.getElementById("botao-exibir");

botaoExibir.addEventListener("click", function (e) {
  const inputNome = document.getElementById("campo-nome");
  const resultado = document.getElementById("resultado-nome");
  const nomeDigitado = inputNome.value;

  resultado.textContent = `Olá, ${nomeDigitado}! Bem-vindo ao DOM.`;
});
