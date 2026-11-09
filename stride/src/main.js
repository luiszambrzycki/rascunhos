const aviso = document.getElementById("aviso");
const inputNome = document.getElementById("inputNome");
const inputEmail = document.getElementById("inputEmail");
const inputSenha = document.getElementById("inputSenha");
const btnCriarConta = document.getElementById("btnCriarConta");
const btnLogin = document.getElementById("btnLogin");

let dados = [];

function criarConta(){
    
    if(inputNome.value === "" || inputEmail.value === "" || inputSenha.value === ""){
        aviso.textContent = "Preencha todos os dados!";
    }else if(naoContemEmail()){
        return;
    }
    else{
        aviso.textContent = "";

        const conta = {
            nome: inputNome.value,
            email: inputEmail.value.trim().toLowerCase(),
            senha: inputSenha.value
        }

        dados.push(conta)
        localStorage.setItem("conta", JSON.stringify(dados))

        // REDIRECIONAR PARA A PAGINA SEGUINTE (--- STRIDE ---)

        window.location.href = "./login.html";
    
    }
}

function naoContemEmail(){
    const nomeString = inputNome.value;
    const emailString = inputEmail.value.toLowerCase();
    const senha = inputSenha.value.toLowerCase();

    if(nomeString === "" || emailString === "" || senha === ""){
        aviso.textContent = "Preencha todos os dados"
        return true;
    }
    if(!emailString.includes("." || "@")){
        aviso.textContent = "Digite um email válido"
        return true;
    }
    if(!nomeString.includes(" ")){
        aviso.textContent = "Digite seu nome completo"
        return true;
    }
    if(senha.length < 8){
        aviso.textContent = "Sua senha precisa ter mais de 8 dígitos"
        return true;
    }
        return false;
    }


function logarConta(){
    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const senha = document.getElementById("loginSenha").value;

    const getItem = localStorage.getItem("conta")
    const login = JSON.parse(getItem);
    
    if(login[0].email === email && login[0].senha === senha){
        sessionStorage.setItem("logado", "sim");
        return true;
    }else{
        return false;
    }
}

function verificarSeTemConta(){
    if(localStorage.getItem("conta") !== null){
        aviso.textContent = "Você ja possui uma conta";
        return true;
    }else{
        return false;
    }
}


if (btnCriarConta) {
    btnCriarConta.addEventListener("click", function () {
        if(verificarSeTemConta()){
            return;
        }
        criarConta();
    });
}
if (btnLogin) {
    btnLogin.addEventListener("click", function () {    
        if(localStorage.getItem("conta") === null){
            aviso.textContent = "nao tem conta"
        }else{
            if(logarConta()){
                window.location.href = "./stride.html"
            }else{
                aviso.textContent = "Senha ou email incorretos"
            }
        }
    });
}