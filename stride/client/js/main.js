const authUI = {
  aviso: document.getElementById("aviso"),
  inputs: {
    nome: document.getElementById("inputNome"),
    email: document.getElementById("inputEmail"),
    senha: document.getElementById("inputSenha")
  },
  botoes: {
    criarConta: document.getElementById("btnCriarConta"),
    login: document.getElementById("btnLogin")
  }
};

function validarCampos() {
  const nome = authUI.inputs.nome.value.trim();
  const email = authUI.inputs.email.value.trim().toLowerCase();
  const senha = authUI.inputs.senha.value;

  if (!nome || !email || !senha) {
    authUI.aviso.textContent = "Preencha todos os dados!";
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    authUI.aviso.textContent = "Digite um e-mail válido.";
    return false;
  }

  if (!nome.includes(" ")) {
    authUI.aviso.textContent = "Digite seu nome completo.";
    return false;
  }

  if (senha.length < 8) {
    authUI.aviso.textContent = "Sua senha precisa ter pelo menos 8 caracteres.";
    return false;
  }

  authUI.aviso.textContent = "";
  return true;
}

async function criarConta() {
  if (!validarCampos()) {
    return;
  }

  const nome = authUI.inputs.nome.value.trim();
  const email = authUI.inputs.email.value.trim().toLowerCase();
  const senha = authUI.inputs.senha.value;

  try {
    const resposta = await fetch("http://localhost:3000/registro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, senha })
    });

    const resultado = await resposta.json();

    if (!resposta.ok || !resultado.sucesso) {
      authUI.aviso.textContent = resultado.mensagem || "Não foi possível criar a conta.";
      console.log(resposta.status)
      return;
    }

    alert("Conta criada com sucesso!");
    window.location.href = "login.html";
  } catch (erro) {
    authUI.aviso.textContent = "Erro na requisição, verifique o console.";
    console.error(erro);
  }
}

async function login(){
  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  try{
    const req = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha })
    });

    const ans = await req.json();
    
    if (!req.ok || !ans.sucesso) {
      authUI.aviso.textContent = ans.mensagem || "Não foi possível fazer login.";
      console.log(req.status);
      return;
    }

      window.location.href = "index.html";
    
    } catch (erro) {
      authUI.aviso.textContent = "Erro na requisição, verifique o console.";
      console.log("erro: ", erro);
      }
}

authUI.botoes.criarConta?.addEventListener("click", criarConta);
authUI.botoes.login?.addEventListener("click", login);