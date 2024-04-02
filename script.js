const contadorCarrinho = document.querySelector(".carrinho .contador");
const botaoAdd = document.querySelector(".carrinho button");

let tamanhoCarrinho = 0;

function adicionarAoCarrinho(event) {
  tamanhoCarrinho++;
  contadorCarrinho.textContent = `(${tamanhoCarrinho})`;
}

botaoAdd.addEventListener("click", adicionarAoCarrinho);
