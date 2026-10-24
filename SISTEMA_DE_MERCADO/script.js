document.getElementById('btn').addEventListener('click', function(){
    let paragrafo = document.getElementById('paragrafo');
    
    const produtos = [
    { nome: "Arroz", preco: 25, quantidade: 2 },
    { nome: "Feijão", preco: 8, quantidade: 3 },
    { nome: "Leite", preco: 5, quantidade: 4 }
    ];

    let total = 0;

    for (let i = 0; i < produtos.length; i++) {
        total += (produtos[i].preco * produtos[i].quantidade);
    }
        paragrafo.innerText = `Valor total da compra: R$ ${total.toFixed(2)}`
})