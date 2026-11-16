const frases = ["Como voce ta?", "Outra frase random", "Amo aprender sobre isso", "Estudo polones", "Testando os limites"];
const paragrafo = document.getElementById("paragrafo");

document.getElementById("btn").addEventListener("click", function(){
    const posicao = Math.floor(Math.random() * 5);

    paragrafo.innerText = frases[posicao];
})