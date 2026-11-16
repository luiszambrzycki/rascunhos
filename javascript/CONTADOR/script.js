let contador = 0;
const paragrafo = document.getElementById("paragrafo");

document.getElementById("btn_mais").addEventListener('click', function(){
    contador += 1;
    paragrafo.innerText = contador;
})

document.getElementById('btn_menos').addEventListener('click', function(){
    if(contador <= 0){
        return;
    }
    contador -= 1;
    paragrafo.innerText = contador;
})