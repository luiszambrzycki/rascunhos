let tarefas = [];
const listaTarefas = document.getElementById("listaTarefas");
const contador = document.getElementById("contador");
const input = document.getElementById('inputTarefa');

document.getElementById('btnAdicionar').addEventListener("click", function(){
    texto = input.value.trim();

    const novatarefa = {
        id: Date.now(),
        texto: texto,
        status: false
    };
    tarefas.push(novatarefa)
    input.value = "";

    renderizar();

    
})

input.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        document.getElementById('btnAdicionar').click();
    }
})

function renderizar(){
    listaTarefas.innerHTML = "";

    tarefas.forEach(function(tarefa){
        const li = document.createElement("li");
        const span = document.createElement("span");
        const btn = document.createElement("button");
        
        btn.textContent = "X";
        span.textContent = tarefa.texto + " ";

        if(tarefa.status){
            span.classList.add("concluida")
        }
        
        span.addEventListener("click", function(){
            tarefa.status = !tarefa.status;
            renderizar();
        })

        btn.addEventListener("click", function(){
            tarefas = tarefas.filter(function(t){
                return t.id !== tarefa.id
            });
        renderizar();
        })

        li.appendChild(span);
        li.appendChild(btn);
        listaTarefas.appendChild(li);
        
        
    })

    const pendentes = tarefas.filter(function(t){
            return t.status === false;
        }).length;
    
    const palavraPendente = pendentes === 1 ? "pendente" : "pendentes";
    const palavraTarefas = tarefas.length === 1 ? "tarefa" : "tarefas";
    contador.textContent = "Você tem " + " " + pendentes + " " + palavraTarefas + " " + palavraPendente;

}

renderizar();