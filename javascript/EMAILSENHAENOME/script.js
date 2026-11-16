const paragrafo = document.getElementById('paragrafo');

document.getElementById('enviar').addEventListener('click', function(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const erros = [];

    if(nome.trim() === ""){
        erros.push("Digite seu nome.")
    }
    
    if(email.trim() === ""){
        erros.push("Digite seu email.")
    }else if(!email.includes("@") || !email.includes(".")){
        erros.push("Email inválido")
    }

    if(senha.length < 8){
        erros.push("A senha precisa ter 8 caractéres.")
    }

    if(erros.length === 0){
        paragrafo.innerText = "Sucesso."
    }else{
        paragrafo.innerText = erros.join("\n")
    }

})