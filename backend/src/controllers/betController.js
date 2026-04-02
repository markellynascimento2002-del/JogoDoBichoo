const db = require('../config/db');

exports.createBet = async (req, res) => {
  const { type, number, amount } = req.body;
  const userId = req.user.id;

  const [wallet] = await db.execute(
    'select balance from wallets where user_id = ?',
    [userId]
  );

  if (wallet[0].balance < amount)
    return res.status(400).json({ error: 'saldo insuficiente' });

  // debitar saldo
  await db.execute(
    'update wallets set balance = balance - ? where user_id = ?',
    [amount, userId]
  );

  // registrar aposta
  await db.execute(
    'insert into bets (user_id, type, number, amount) values (?, ?, ?, ?)',
    [userId, type, number, amount]
  );

  res.json({ message: 'aposta realizada' });
};