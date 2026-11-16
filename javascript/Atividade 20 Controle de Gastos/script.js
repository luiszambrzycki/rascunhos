// ===== 1. ELEMENTOS DA PÁGINA =====
const listaGastos = document.getElementById("listaGastos");
const pesquisa = document.getElementById("pesquisa");
const h3 = document.getElementById("h3");
const inputValor = document.getElementById("inputValor");
const inputDescricao = document.getElementById("inputDescricao");
const btnAdicionar = document.getElementById("btnAdicionar");
const total = document.getElementById("total");
const quantidade = document.getElementById("quantidade");
const inputBusca = document.getElementById("inputBusca");
const maiorGasto = document.getElementById("maiorGasto");

// ===== 2. DADOS =====
const salvo = localStorage.getItem("gastos");
let lista = salvo ? JSON.parse(salvo) : [];


// ===== 3. FUNÇÕES =====


function salvar(){
    localStorage.setItem("gastos", JSON.stringify(lista));
}

function adicionarGasto() {
    const descricao = inputDescricao.value.trim();
    const valor = Number(inputValor.value);

    if (descricao === "" || valor <= 0) {
        h3.textContent = "valor invalido";
        return;
    }

    h3.textContent = "";

    lista.push({
        id: Date.now(),
        texto: descricao,
        numero: valor
    });

    inputDescricao.value = "";
    inputValor.value = "";
    renderizar();
    salvar();
}

function removerGasto(id) {
    lista = lista.filter(function (gasto) {
        return gasto.id !== id;
    });
    renderizar();
    salvar();
}

function renderizar() {
    listaGastos.innerHTML = "";

    const busca = inputBusca.value.toLowerCase();

    const listaNova = lista.filter(function(gasto){
        return gasto.texto.toLowerCase().includes(busca)
    })

    listaNova.forEach(function (gasto) {
        const li = document.createElement("li");
        const btn = document.createElement("button");

        li.textContent = `${gasto.texto} : R$ ${gasto.numero.toFixed(2)} `;
        btn.textContent = "X";

        btn.addEventListener("click", function () {
            removerGasto(gasto.id);
        });

        li.appendChild(btn);
        listaGastos.appendChild(li);

        
    });

    

    atualizarTotais(listaNova);
}

function atualizarTotais(gastos) {
    const soma = gastos.reduce(function (acc, gasto) {
        return acc + gasto.numero;
    }, 0);

    total.textContent = "Total: R$ " + soma.toFixed(2);
    quantidade.textContent = "Gastos: " + lista.length;

    if(gastos.length === 0){
        maiorGasto.textContent = "-"
        return;
    }

    const maiorGastoNum = gastos.reduce(function (acc, gasto) {
        return gasto.numero > acc.numero ? gasto : acc;
    }, gastos[0]);

    maiorGasto.textContent = `Maior gasto: ${maiorGastoNum.texto} - R$ ${maiorGastoNum.numero.toFixed(2)}`;

    
}

// ===== 4. EVENTOS =====
inputBusca.addEventListener("input", renderizar);
btnAdicionar.addEventListener("click", adicionarGasto);

// ===== 5. INÍCIO =====
renderizar();