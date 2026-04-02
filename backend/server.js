require('dotenv').config();

const app = require('./src/app');

app.listen(process.env.port, () => {
  console.log('rodando na porta ' + process.env.port);
});