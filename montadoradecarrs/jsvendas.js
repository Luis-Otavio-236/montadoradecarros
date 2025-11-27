let modeloAtual = null;

const precosModelo = {
    vyntra: 350000,
    elyon: 420000,
    trion: 180000,
    kairon: 120000,
    vero: 140000,
    elyx: 160000,
    track: 110000,
    lancerra: 250000
};

function selecionarModelo(modelo) {
    modeloAtual = modelo;
    document.getElementById("nomeModelo").innerText =
        modelo.toUpperCase();

    document.getElementById("imagemCarro").src =
        `img/${modelo}_branco.png`; // você troca depois

    atualizarCarro();
}

function atualizarCarro() {
    if (!modeloAtual) return;

    // choices
    const cor = document.getElementById("cor").value;
    const roda = parseInt(document.getElementById("roda").value);
    const banco = document.getElementById("banco").value;
    const som = document.getElementById("som").value;
    const ar = document.getElementById("ar").value;

    // mudar imagem do carro
    document.getElementById("imagemCarro").src =
        `img/${modeloAtual}_${cor}.png`;

    // cálculo de preço
    let preco = precosModelo[modeloAtual];

    // rodas
    if (roda === 2) preco += 4200;
    if (roda === 3) preco += 7000;

    // bancos
    if (banco === "couro") preco += 3000;
    if (banco === "premium") preco += 6000;

    // som
    if (som === "plus") preco += 1500;
    if (som === "premium") preco += 3000;

    // ar
    if (ar === "digital") preco += 2500;
    if (ar === "dual") preco += 4500;

    document.getElementById("precoFinal").innerText =
        preco.toLocaleString("pt-BR");
}
