document.getElementById('btn').addEventListener('click', function(){
    let paragrafo = document.querySelector('#paragrafo');

    const numeros = [1,5,5,1,3,7,3]

    let unicos = []

    for(let i = 0; i < numeros.length; i++){
        if(!unicos.includes(numeros[i])){
            unicos.push(numeros[i])
        }
    
    }
    paragrafo.innerText = `Únicos: ${unicos.join('-')}`
})