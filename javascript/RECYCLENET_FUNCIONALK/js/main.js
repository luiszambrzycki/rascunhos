// ---------- Navbar (menu no celular) ----------
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  menuBtn.setAttribute("aria-expanded", aberto);
});
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("aberto");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// ---------- Mapa ----------
const CENTRO_SAO_LEOPOLDO = [-29.7603, -51.1472];
const MATERIAIS = {
  todos: "Todos",
  papel: "Papel",
  plastico: "Plástico",
  vidro: "Vidro",
  metal: "Metal",
};

const map = L.map("map").setView(CENTRO_SAO_LEOPOLDO, 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; Contribuidores do OpenStreetMap",
}).addTo(map);

const camada = L.layerGroup().addTo(map);
const lista = document.getElementById("lista");
let locais = [];
let filtroAtual = "todos";

function mensagemVazia(texto) {
  const li = document.createElement("li");
  li.className = "vazio";
  li.textContent = texto;
  lista.appendChild(li);
}

function criarFiltros() {
  const caixa = document.getElementById("filtros");
  Object.entries(MATERIAIS).forEach(([chave, rotulo]) => {
    const b = document.createElement("button");
    b.className = "filtro";
    b.textContent = rotulo;
    b.setAttribute("aria-pressed", chave === filtroAtual);
    b.addEventListener("click", () => {
      filtroAtual = chave;
      caixa.querySelectorAll(".filtro").forEach((x) => x.setAttribute("aria-pressed", x === b));
      desenhar();
    });
    caixa.appendChild(b);
  });
}

function popup(l) {
  // textContent evita injetar HTML vindo do JSON
  const div = document.createElement("div");
  const t = document.createElement("strong");
  t.textContent = l.nome;
  const e = document.createElement("div");
  e.textContent = l.endereco;
  const m = document.createElement("div");
  m.textContent = "Aceita: " + l.materiais.map((x) => MATERIAIS[x] || x).join(", ");
  div.append(t, e, m);
  return div;
}

function desenhar() {
  camada.clearLayers();
  lista.innerHTML = "";
  const visiveis = locais.filter((l) => filtroAtual === "todos" || l.materiais.includes(filtroAtual));

  if (visiveis.length === 0) {
    mensagemVazia("Nenhum ponto encontrado para este material.");
    return;
  }

  visiveis.forEach((l) => {
    const marcador = L.marker([l.lat, l.lng]).bindPopup(popup(l)).addTo(camada);
    const li = document.createElement("li");
    const h = document.createElement("h3");
    h.textContent = l.nome;
    const end = document.createElement("p");
    end.textContent = l.endereco;
    const hor = document.createElement("p");
    hor.textContent = l.horario || "";
    li.append(h, end, hor);
    li.addEventListener("click", () => {
      map.setView([l.lat, l.lng], 16);
      marcador.openPopup();
    });
    lista.appendChild(li);
  });
}

async function carregar() {
  try {
    const resp = await fetch("data/locais.json");
    if (!resp.ok) throw new Error("HTTP " + resp.status);
    const dados = await resp.json();
    locais = dados.locais;
    document.getElementById("fonte").textContent =
      "Fonte dos dados: " + dados.fonte + " · Atualizado em " + dados.atualizado_em;
    desenhar();
  } catch (erro) {
    console.error(erro);
    mensagemVazia("Não foi possível carregar os pontos de coleta. Abra o site por um servidor local (ex.: Live Server).");
  }
}

criarFiltros();
carregar();
