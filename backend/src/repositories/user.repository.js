const db = require('../config/database');

exports.findByEmail = (email) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE email = ?', [email],
            (err, results) => {
                if (err) reject(err);
                resolve(results[0]);
            });
    });
};

exports.createUser = (user) => {
    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [user.name, user.email, user.password],
            (err, results) => {
                if (err) reject(err);
                resolve(results);
            }
        );
    });
};