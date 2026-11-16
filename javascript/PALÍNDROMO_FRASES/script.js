document.getElementById('btn').addEventListener('click', function(){
    const paragrafo = document.getElementById('paragrafo');
    const input = document.getElementById('input').value;

    if(input.trim() === ""){
        paragrafo.innerText = "Valor inválido"
        return;
    }

    const palavra = input
    .toLowerCase()
    .replaceAll(" ", "")
    .replaceAll(",", "")
    .replaceAll("-", "")

    let resultado = "";

    for(let i = palavra.length - 1; i >= 0; i--){
        resultado += palavra[i]
    }

    if(palavra === resultado){
        paragrafo.innerText = `A palavra ${palavra} é palíndromo`
    }else{
        paragrafo.innerText = `A palavra ${palavra} não é palíndromo`
    }
})