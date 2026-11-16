let paragrafo = document.querySelector('#paragrafo');

document.getElementById('btn').addEventListener('click', function () {

    // 1. Pega o texto bruto do input (ainda não é número)
    const texto = document.querySelector('#input').value;

    // 2. Testa se está vazio ANTES de converter
    if (texto === "") {
        paragrafo.innerText = "DIGITE UM VALOR";
        return;
    }

    // 3. Agora sim converte para número
    const valor = Number(texto);

    // 4. Começa com texto vazio; vai crescer a cada volta do laço
    let resultado = "";

    // 5. Repete 10 vezes, com i valendo 1, 2, 3... até 10
    for (let i = 1; i <= 10; i++) {
        // += acrescenta uma linha no final do que já existe
        resultado += `${valor} x ${i} = ${valor * i}\n`;
    }

    // 6. Mostra o texto completo, uma vez só, depois do laço
    paragrafo.innerText = resultado;
});