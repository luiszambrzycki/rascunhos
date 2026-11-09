// 1. Seleção dos elementos do DOM
const km = document.getElementById("inputKm"); 
const cidade = document.getElementById("inputCidade"); 
const tempo = document.getElementById("inputTempo"); 
const btnEnviar = document.getElementById("btnEnviar"); // Nome alterado para evitar conflito
const listaContainer = document.getElementById("li"); // Sugestão: usar uma <ul> ou <ol> no HTML

// 2. Verificação de Autenticação (Executada imediatamente ao carregar a página)
if (sessionStorage.getItem("logado") !== "sim") {
    window.location.href = "../login.html";
}

// 3. Manipulador de Evento do Botão
btnEnviar.addEventListener("click", function() {
    const temponumerado = Number(tempo.value);
    
    // Limpa a lista antes de adicionar novos botões (opcional, remova se quiser acumular)
    listaContainer.innerHTML = ""; 

    // Validação simples para garantir que o número é válido e maior que zero
    if (isNaN(temponumerado) || temponumerado <= 0) {
        alert("Por favor, insira um tempo válido.");
        return;
    }

    // Loop para criar os elementos dinamicamente
    for (let i = 0; i < temponumerado; i++) {
        const novoBtn = document.createElement("button"); // Corrigido a tag HTML para "button"
        novoBtn.textContent = "teste"; // Melhor prática que innerHTML para textos simples
        
        listaContainer.appendChild(novoBtn);
        console.log(i);
    }
});
