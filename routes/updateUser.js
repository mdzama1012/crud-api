const express = require('express');
const updateUser = require('../controllers/updateUserController.js');
const router = express.Router();

router.put('/', updateUser);

module.exports = router;
