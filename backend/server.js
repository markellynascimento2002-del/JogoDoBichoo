const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Rota teste
app.get('/api/mensagem', (req, res) => {
  res.json({ mensagem: "Backend funcionando com sucesso!" });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

const app = require('./src/app');

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});