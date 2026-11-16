const btn = document.getElementById("btnSend");
const inputId = document.getElementById("input");
const mensagem = document.getElementById("h1");
const resultado = document.getElementById("li");

btn.addEventListener("click", function () {
    const id = Number(inputId.value);

    if (inputId.value.trim() === "" || id < 1) {
        mensagem.textContent = "Digite um número entre 1 e 10.";
        return;
    }

    buscarUsuario(id);
    inputId.value = "";
});

async function buscarUsuario(id) {
    mensagem.textContent = "Carregando...";
    resultado.textContent = "";

    try {
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!resposta.ok) {
            mensagem.textContent = `Usuário não encontrado (status ${resposta.status}).`;
            return;
        }

        const dados = await resposta.json();

        mensagem.textContent = "";
        resultado.textContent =
            `ID: ${dados.id}\n` +
            `NAME: ${dados.name}\n` +
            `USER: ${dados.username}\n` +
            `EMAIL: ${dados.email}\n` +
            `CITY: ${dados.address.city}`;
    } catch (erro) {
        mensagem.textContent = "Sem conexão. Tente novamente.";
        console.log("Não foi possível conectar:", erro);
    }
}