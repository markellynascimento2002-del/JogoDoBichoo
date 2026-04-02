const db = require('../config/db');

function gerarMilhar() {
  return Math.floor(1000 + Math.random() * 9000);
}

exports.runDraw = async (req, res) => {
  const [draw] = await db.execute('insert into draws () values ()');

  const drawId = draw.insertId;

  for (let i = 1; i <= 5; i++) {
    const numero = gerarMilhar();

    await db.execute(
      'insert into draw_results (draw_id, prize_position, thousand_number) values (?, ?, ?)',
      [drawId, i, numero]
    );
  }

  res.json({ message: 'sorteio realizado' });
};