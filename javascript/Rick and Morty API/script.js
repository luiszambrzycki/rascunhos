const btn = document.getElementById("btnEnviar");
const li = document.getElementById("li");

async function buscarPersonagem(id){
    
    try{
            
        const resposta = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const dados = await resposta.json();

        // Injeta todo o conteúdo de uma vez só dentro do seu li
        li.innerHTML = `
            <h2>Nome: ${dados.name}</h2>
            <p>Status: ${dados.status}</p>
            <p>Espécie: ${dados.species}</p>
            <p>Gênero: ${dados.gender}</p>
            <p>Localização: ${dados.location.name}</p> 
        `;

    }catch(erro){
        console.log("Ocorreu um erro", erro);
        return;
    }
}

btn.addEventListener("click", function(){
    if(input === "" || input.length > 10000){
        alert("Digite um número entre 0-10000.")
        return;
    }else{
        const inputText = document.getElementById("input").value;
        const input = Number(inputText);
        buscarPersonagem(input)
    }
})