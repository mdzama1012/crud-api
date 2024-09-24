const express = require('express');
const getUsers = require('../controllers/getUsersController.js');
const router = express.Router();

router.get('/', getUsers);

module.exports = router;
