const db = require('../config/db');

exports.getBalance = async (req, res) => {
  const [rows] = await db.execute(
    'select balance from wallets where user_id = ?',
    [req.user.id]
  );

  res.json(rows[0]);
};