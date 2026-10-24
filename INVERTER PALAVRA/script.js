document.getElementById('btn').addEventListener('click', function(){
    const paragrafo = document.querySelector('#paragrafo');
    const texto = document.querySelector('#input').value;
    
    if(texto.trim() === ""){
        paragrafo.innerText = "valor inválido";
        return;
    }

    let invertida = "";

    for(let i = texto.length - 1; i >= 0; i--){
        invertida += texto[i];
    }

    paragrafo.innerText = `A palavra invertida é ${invertida}`;
})


// document.querySelector (#) = ID
// document.querySelector (.) = CLASS