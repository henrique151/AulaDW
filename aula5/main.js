const listaAdicionada = document.getElementById("listaAdicionada");
const inputValue = document.getElementById("inputValue");
const listaConcluidas = document.getElementById("listaConcluidas");
const inputPesquisa = document.getElementById("inputPesquisa");
const listaPequisa = document.getElementById("listaPequisa");

let contador = 0;

function pesquisaTarefa() {
  const termoPesquisa = inputPesquisa.value.trim().toLowerCase();
  listaPequisa.innerHTML = "";

  if (termoPesquisa === "") {
    listaPequisa.innerHTML = "<p>Digite algo para pesquisar.</p>";
    return;
  }

  const tarefas = [
    ...listaAdicionada.querySelectorAll(".task-item"),
    ...listaConcluidas.querySelectorAll(".task-item"),
  ];
  let encontrou = false;

  tarefas.forEach((tarefa) => {
    const span = tarefa.querySelector("span");
    const textoTarefa = span.textContent.toLowerCase();

    if (textoTarefa.includes(termoPesquisa)) {
      const resultado = document.createElement("div");
      resultado.innerHTML = `<span>${span.textContent}</span>`;
      listaPequisa.appendChild(resultado);
      encontrou = true;
    }
  });

  if (!encontrou) {
    listaPequisa.innerHTML = "<p>Nenhuma tarefa encontrada.</p>";
  }
}

function adicionarTarefa() {
  if (inputValue.value.trim() === "") {
    return;
  }

  contador += 1;
  const novoElementoTarefa = document.createElement("div");
  novoElementoTarefa.classList.add("task-item");
  novoElementoTarefa.setAttribute("id", `task-${contador}`);

  novoElementoTarefa.innerHTML = `
        <span>${inputValue.value}</span>
        <div class="task-buttons">
            <button onclick="concluirTarefa(this)" class="complete-btn">Concluir</button>
            <button onclick="excluirTarefa(this)" class="delete-btn">Excluir</button>
        </div>
    `;

  listaAdicionada.appendChild(novoElementoTarefa);
  inputValue.value = "";
}

function concluirTarefa(botao) {
  const tarefa = botao.closest(".task-item");
  const span = tarefa.querySelector("span");
  span.style.textDecoration = "line-through";
  listaConcluidas.appendChild(tarefa);

  const buttonsDiv = tarefa.querySelector(".task-buttons");
  buttonsDiv.innerHTML = `
        <button onclick="desmarcarTarefa(this)" class="uncomplete-btn">Desmarcar</button>
        <button onclick="excluirTarefa(this)" class="delete-btn">Excluir</button>
    `;
}

function desmarcarTarefa(botao) {
  const tarefa = botao.closest(".task-item");
  const span = tarefa.querySelector("span");
  span.style.textDecoration = "none";
  listaAdicionada.appendChild(tarefa);

  const buttonsDiv = tarefa.querySelector(".task-buttons");
  buttonsDiv.innerHTML = `
        <button onclick="concluirTarefa(this)" class="complete-btn">Concluir</button>
        <button onclick="excluirTarefa(this)" class="delete-btn">Excluir</button>
    `;
}

function excluirTarefa(botao) {
  const tarefa = botao.closest(".task-item");
  tarefa.remove();
}
