const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: 'token ausente' });

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.jwt_secret);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'token invalido' });
  }
};