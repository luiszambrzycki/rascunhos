const mensagem = document.getElementById("mensagem");
const lista = document.getElementById("lista");

async function carregarCorridas() {
    mensagem.textContent = "Carregando...";

    try {
        const resposta = await fetch("http://localhost:3000/corridas");

        if (!resposta.ok) {
            mensagem.textContent = "Erro ao buscar as corridas.";
            return;
        }

        const corridas = await resposta.json();

        mensagem.textContent = "";
        lista.innerHTML = "";

        corridas.forEach(function (corrida) {
            const li = document.createElement("li");
            li.textContent = `${corrida.data.slice(0, 10)} - ${Number(corrida.distancia_km)} km em ${Number(corrida.tempo_min)} min`;
            lista.appendChild(li);
        });
    } catch (erro) {
        mensagem.textContent = "Não consegui falar com a API. Ela está ligada?";
        console.log(erro);
    }
}

carregarCorridas();