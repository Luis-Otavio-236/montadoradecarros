// Preços base por modelo
const precosBase = {
    carro1: 120000,
    carro2: 155000,
    carro3: 180000
    
};

// Elementos
const listaModelos = document.querySelectorAll("#lista-modelos li");
const titulo = document.getElementById("tituloSelecionado");
const imgCarro = document.getElementById("imgCarro");
const precoTotal = document.getElementById("precoTotal");

// Inputs
const cor = document.getElementById("cor");
const rodas = document.getElementById("rodas");
const interior = document.getElementById("interior");

let modeloAtual = "carro1";

// Atualiza preço
function atualizarPreco() {
    const total =
        precosBase[modeloAtual] +
        Number(cor.value) +
        Number(rodas.value) +
        Number(interior.value);

    precoTotal.textContent = total.toLocaleString("pt-BR");
}

// Clique mudança de modelo
listaModelos.forEach(item => {
    item.addEventListener("click", () => {
        modeloAtual = item.dataset.modelo;

        // Troca nome
        titulo.textContent = item.textContent;

        // Troca imagem
        imgCarro.src = `img/${modeloAtual}.png`;

        atualizarPreco();
    });
});

// Atualiza preço quando muda algo
cor.onchange = atualizarPreco;
rodas.onchange = atualizarPreco;
interior.onchange = atualizarPreco;

// Inicializa
atualizarPreco();
