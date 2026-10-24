document.getElementById('btn').addEventListener('click', function(){
    const paragrafo = document.querySelector('#paragrafo');
    const valor = document.getElementById('input').value;

    if(valor.trim() === ""){
        paragrafo.innerText = "Valor inválido.";
        return;
    }

    const palavra = valor.toLowerCase();
    let invertida = "";

    for(let i = palavra.length - 1; i >= 0; i--){
        invertida += palavra[i]
    }

    if(invertida === palavra){
        paragrafo.innerText = `A palavra ${palavra} é palíndromo`;
    }else{
        paragrafo.innerText = `A palavra ${palavra} não é um palíndromo`
    }
    
})