document.getElementById('btn').addEventListener('click', function(){
    let paragrafo = document.querySelector('#paragrafo');

    const numeros = [1,5,2,8,4,7]

    let maior = numeros[0];
    let menor = numeros[0];

    for(let i = 1; i < numeros.length; i++){
        if(numeros[i] > maior){
            maior = numeros[i]
        }
        
        if(numeros[i] < menor){
            menor = numeros[i]
        }
    
    }
    paragrafo.innerText = `Maior é ${maior} e menor ${menor}`
})