import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pg from 'pg';

const PORT = process.env.PORT || 3000;
const { Pool } = pg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.get("/", function (req, res) {
  res.send(`API online. Host do banco: ${pool.options.host}`);
});

app.get("/teste", async function (req, res) {
  res.send("funcionando");
});

app.post("/login", async function (req, res) {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "Email e senha são obrigatórios."
    });
  }

  try {
    const usuario = await pool.query(
      "SELECT id, nome_completo, email, senha FROM registro WHERE email = $1",
      [email.trim().toLowerCase()]
    );

    if (usuario.rows.length === 0) {
      return res.status(401).json({
        sucesso: false,
        mensagem: "Email ou senha inválidos."
      });
    }

    const user = usuario.rows[0];

    if (user.senha !== senha) {
      return res.status(401).json({
        sucesso: false,
        mensagem: "Email ou senha inválidos."
      });
    }

    return res.status(200).json({
      sucesso: true,
      mensagem: "Login realizado com sucesso.",
      usuario: {
        id: user.id,
        nome_completo: user.nome_completo,
        email: user.email
      }
    });
  } catch (erro) {
    console.error("Erro ao fazer login:", erro);
    return res.status(500).json({
      sucesso: false,
      mensagem: "Erro interno no servidor."
    });
  }
});

app.post("/registro", async function (req, res) {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: "Nome, email e senha são obrigatórios." });
  }

  try{
    const usuarioExistente = await pool.query("SELECT id FROM registro WHERE email = $1", [email]);

    if(usuarioExistente.rows.length > 0){
      return res.status(400).json({
        sucesso: false,
        mensagem: "Email já existente."
      })
    }
  } catch (erro) {
    console.error(erro);
    return res.status(500).json({ sucesso: false, mensagem: 'Erro interno no servidor.' });
  }

  try {
    // Dica: em produção, gere um hash da senha (ex.: com bcrypt) antes de salvar
    const resultado = await pool.query(
      "INSERT INTO registro (nome_completo, email, senha) VALUES ($1, $2, $3) RETURNING id, nome_completo, email",
      [nome, email, senha]
    );

    return res.status(201).json({
    sucesso: true,
    mensagem: "Conta criada com sucesso.",
    usuario: resultado.rows[0]
  });

  } catch (erro) {
    console.error("Erro ao criar conta:", erro);
    return res.status(500).json({ erro: "Erro ao criar conta." });
  }
});

app.listen(PORT, function () {
  console.log(`API rodando na porta ${PORT}`);
});