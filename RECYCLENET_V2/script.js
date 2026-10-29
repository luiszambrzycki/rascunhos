const mapa = L.map("map").setView([-29.7604, -51.1472], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", 
    {attribution: '&copy; OpenStreetMap'
    }).addTo(mapa);

async function carregarPontos(){
    const resposta = await fetch("pontos.json");
    const pontos = await resposta.json();
}

    pontos.forEach((ponto) => {
    L.marker([ponto.lat, ponto.lng]).addTo(mapa).bindPopup(`<b>${ponto.nome}\n<b><br>${ponto.tipo}`);
});