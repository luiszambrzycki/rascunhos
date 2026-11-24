CREATE TABLE corridas (
    id SERIAL PRIMARY KEY,
    data DATE NOT NULL,
    distancia_km NUMERIC(6, 2) NOT NULL,
    tempo_min NUMERIC(6, 2) NOT NULL
);

CREATE TABLE registro (
    id SERIAL PRIMARY KEY,
    nome_completo VARCHAR(150) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    criado_em TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);