let paragrafo = document.querySelector('#paragrafo');

document.getElementById('btn').addEventListener('click', function(){
    const valor = document.getElementById('input').value;
    const palavra = valor.toLowerCase();

    if (valor === ""){
        paragrafo.innerText = "valor inválido"
        return;
    }
    
    let contador = 0;

    for(let i = 0; i < palavra.length; i++){
        const letra = palavra[i];

        if("aeiou".includes(letra)){
            contador += 1;
        }
    }

    paragrafo.innerText = `A palavra possui ${contador} vogais`
    
})


// document.querySelector (#) = ID
// document.querySelector (.) = CLASS