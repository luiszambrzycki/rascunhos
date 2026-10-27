const paragrafo = document.getElementById('paragrafo');

setInterval(() => {
    
    const agora = new Date()

    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");
    const segundos = String(agora.getSeconds()).padStart(2, "0");

    String(minutos, segundos, horas).padStart(2, "0");

    paragrafo.innerText = `O horário agora é ${horas}:${minutos}:${segundos}`;

}, 1000);