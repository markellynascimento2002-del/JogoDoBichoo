const bcrypt = require('bcrypt');
const userRepository = require('../repositories/user.repository');

exports.registerUser = async (data) => {

    const userExists = await userRepository.findByEmail(data.email);
    if (userExists) {
        throw new Error('Email já cadastrado');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return await userRepository.createUser({
        name: data.name,
        email: data.email,
        password: hashedPassword
    });
};