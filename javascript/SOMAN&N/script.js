let paragrafo = document.querySelector('#paragrafo');

document.getElementById('btn1').addEventListener('click', function(){
    const valor = document.getElementById('input').value;

    if (valor === ""){
        paragrafo.innerText = "valor invalido";
        return;
    }

    const n = Number(valor);
    let soma = 0;

    for(let i = 1; i <= n; i++){
        
        soma += i;
        
    }
    paragrafo.innerText = `A soma de 1 até ${n} é ${soma}`
})