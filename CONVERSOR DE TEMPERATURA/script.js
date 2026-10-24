let paragrafo = document.querySelector("#paragrafo");

document.getElementById('btn').addEventListener('click', function () {

    const texto1 = document.querySelector('#input1').value;

    if(texto1 === ""){
        paragrafo.innerText = "digite um valor"
        return;
    }

    const valor1 = Number(texto1);
    const f = (valor1 * 9/5 + 32).toFixed(1);
    paragrafo.innerText = `${valor1}°C = ${f}F°`;
});

document.getElementById('btn1').addEventListener('click', function(){
    const texto1 = document.querySelector('#input1').value;

    if(texto1 === ""){
        paragrafo.innerText = "digite um valor"
        return;
    }

    const valor1 = Number(texto1);
    const c = ((valor1 - 32) * 5/9).toFixed(1);
    paragrafo.innerText = `${valor1}°F = ${c}C°`
})


// document.querySelector (#) = ID
// document.querySelector (.) = CLASS