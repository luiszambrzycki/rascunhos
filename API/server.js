// primeiro precisamos puxar as dependencias pra dentro do arquivo e criar as variáveis.
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

// criar a variável "app" que vai o servidor
// usar também o cors para nao falhar as requisições
const app = express();
app.use(cors());
app.use(express.json());

// usar o pool do postgresql para informar ao servidor as credenciais necessárias
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

app.get("/", function (req, res) {
    res.send("API funcionando!");
});

app.get("/corridas", async function (req, res) {
    try {
        const resultado = await pool.query("SELECT * FROM corridas ORDER BY data DESC");
        res.json(resultado.rows);
    } catch (erro) {
        console.log(erro);
        res.status(500).json({ erro: "Erro ao buscar corridas" });
    }
});

app.post("/corridas", async function (req, res) {
    const { data, distancia_km, tempo_min } = req.body;

    if (!data || !(Number(distancia_km) > 0) || !(Number(tempo_min) > 0)) {
        res.status(400).json({ erro: "Dados inválidos" });
        return;
    }

    try {
        const resultado = await pool.query(
            "INSERT INTO corridas (data, distancia_km, tempo_min) VALUES ($1, $2, $3) RETURNING *",
            [data, distancia_km, tempo_min]
        );
        res.status(201).json(resultado.rows[0]);
    } catch (erro) {
        console.log(erro);
        res.status(500).json({ erro: "Erro ao salvar corrida" });
    }
});

app.listen(3000, function () {
    console.log("API rodando em http://localhost:3000");
});