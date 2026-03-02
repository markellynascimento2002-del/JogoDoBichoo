const userService = require('../services/user.service');

exports.register = async (req, res) => {
    try {
        await userService.registerUser(req.body);
        res.status(201).json({ message: "Usuário cadastrado com sucesso" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};