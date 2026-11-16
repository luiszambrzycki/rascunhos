document.getElementById('btn').addEventListener('click', function(){
    const paragrafo = document.getElementById('paragrafo');
    const input = document.getElementById('input').value;

    if(input.trim() === ""){
        paragrafo.innerText = "Valor inválido."
        return;
    }

    const numeros = input.split('').map(Number);

    const resultado = numeros
    .filter(function (n) {
        return n % 2 === 0
    })
    .map(function (n) {
        return n * 2});

    if(resultado.length === 0) {
        paragrafo.innerText = "Valor inválido."
    }
    paragrafo.innerText = `Os números são ${resultado}`
})