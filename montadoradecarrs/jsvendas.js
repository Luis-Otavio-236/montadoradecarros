document.addEventListener("DOMContentLoaded", () => {

    const precosBase = {
        vyntra: 350000,
        elyon: 420000,
        trion: 380000
    };

    const adicionais = {
        roda: { 1: 0, 2: 4200, 3: 7000 },
        banco: { tecido: 0, couro: 3000, premium: 6000 },
        som: { basico: 0, plus: 1500, premium: 3000 },
        ar: { manual: 0, digital: 2500, dual: 4500 }
    };

    const modelo = document.getElementById("modelo");
    const cor = document.getElementById("cor");
    const roda = document.getElementById("roda");
    const banco = document.getElementById("banco");
    const som = document.getElementById("som");
    const ar = document.getElementById("ar");

    const nomeModelo = document.getElementById("nomeModelo");
    const imgCarro = document.getElementById("imgCarro");
    const precoFinal = document.getElementById("preco");

    function atualizar() {
        const m = modelo.value;
        const c = cor.value;

        nomeModelo.textContent = m.toUpperCase();
        imgCarro.src = `img/${m}_${c}.png`;

        let preco = precosBase[m];
        preco += adicionais.roda[roda.value];
        preco += adicionais.banco[banco.value];
        preco += adicionais.som[som.value];
        preco += adicionais.ar[ar.value];

        precoFinal.textContent = preco.toLocaleString("pt-BR");
    }

    modelo.addEventListener("change", atualizar);
    cor.addEventListener("change", atualizar);
    roda.addEventListener("change", atualizar);
    banco.addEventListener("change", atualizar);
    som.addEventListener("change", atualizar);
    ar.addEventListener("change", atualizar);

    atualizar();
});
