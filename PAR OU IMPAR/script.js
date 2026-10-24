let paragrafo = document.querySelector("#resultado");

document.getElementById('btn').addEventListener('click', function () {
    const valor = document.getElementById('num').value;

    if (valor === "") {
        paragrafo.innerText = "valor invalido";
        return;
    }

    const numero = Number(valor);

    if (numero % 2 === 0) {
        paragrafo.innerText = "O valor é par";
    } else {
        paragrafo.innerText = "O valor é ímpar";
    }
});


// document.querySelector (#) = ID
// document.querySelector (.) = CLASS