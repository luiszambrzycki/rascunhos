const botao = document.getElementById('trocar');

document.getElementById('trocar').addEventListener('click', function () {
    document.body.classList.toggle('escuro');

    if(document.body.classList.contains('escuro')){
        botao.innerText = "Mudar pra branco";
    }else{
        botao.innerText = "mudar pra preto";
    }
});