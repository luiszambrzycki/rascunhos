const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("API funcionando!");
});

app.get("/corridas", function (req, res) {
    const corridas = [
        { id: 1, data: "2026-10-20", distancia_km: 5, tempo_min: 32.5 },
        { id: 2, data: "2026-10-23", distancia_km: 3.2, tempo_min: 21 }
    ];

    res.json(corridas);
});

app.listen(3000, function () {
    console.log("API rodando em http://localhost:3000");
});