const express = require('express');

const router = express.Router();

const usuario = require('../controller/usuario');
const veiculo = require('../controller/veiculo');
const msg = require('../controller/mensagem');

router.post('/usuario', usuario.create);
router.get('/usuarios', usuario.read);
router.post('/login' , usuario.login)

router.post('/veiculo', veiculo.create);
router.get('/veiculos', veiculo.read);

router.post('/mensagem', msg.create);
router.get('/mensagens', msg.read);

module.exports = router;