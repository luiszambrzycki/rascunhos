let paragrafo = document.querySelector("#paragrafo");

document.getElementById('btn').addEventListener('click', function () {

    const texto1 = document.querySelector('#input1').value;
    const texto2 = document.querySelector('#input2').value;
    const texto3 = document.querySelector('#input3').value;

    if (texto1 === "" || texto2 === "" || texto3 === "") {
        paragrafo.innerText = "Preencha todos os campos";
        return;
    }

    const valor1 = Number(texto1);
    const valor2 = Number(texto2);
    const valor3 = Number(texto3);

    const maior = Math.max(valor1, valor2, valor3);
        paragrafo.innerText = `O maior é ${maior}`;
});


// document.querySelector (#) = ID
// document.querySelector (.) = CLASS