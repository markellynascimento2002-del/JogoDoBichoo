const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const [result] = await db.execute(
    'insert into users (name, email, password) values (?, ?, ?)',
    [name, email, hash]
  );

  await db.execute(
    'insert into wallets (user_id) values (?)',
    [result.insertId]
  );

  res.json({ message: 'usuario criado' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const [rows] = await db.execute(
    'select * from users where email = ?',
    [email]
  );

  if (rows.length === 0)
    return res.status(400).json({ error: 'usuario nao encontrado' });

  const user = rows[0];

  const valid = await bcrypt.compare(password, user.password);

  if (!valid)
    return res.status(400).json({ error: 'senha invalida' });

  const token = jwt.sign(
    { id: user.id },
    process.env.jwt_secret,
    { expiresIn: '1d' }
  );

  res.json({ token });
};