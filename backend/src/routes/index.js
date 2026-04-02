const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const authController = require('../controllers/authController');
const walletController = require('../controllers/walletController');
const betController = require('../controllers/betController');
const drawController = require('../controllers/drawController');

// auth
router.post('/register', authController.register);
router.post('/login', authController.login);

// saldo
router.get('/balance', auth, walletController.getBalance);

// aposta
router.post('/bet', auth, betController.createBet);

// sorteio
router.post('/draw', drawController.runDraw);

module.exports = router;