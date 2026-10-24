const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", function (texto) {

    if (texto.trim() === "") {
        console.log("valor invalido");
        rl.close();
        return;
    }

    const n = Number(texto);
    let soma = 0;

    for (let i = 1; i <= n; i++) {
        soma += i;
    }

    console.log(`A soma de 1 até ${n} é ${soma}`);
    rl.close();
});