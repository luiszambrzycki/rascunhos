const notas = [4, 8, 6, 9.5, 3, 7, 10, 5];

const resultado = notas
    .filter(function(nota){
        return nota >= 7;
    })
    .map(function(nota){
        return nota + 0.5;
    });

console.log(resultado); // [8.5, 10, 7.5, 10.5]