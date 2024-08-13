const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userControllers');

router.route('/').post(registerUser);

// If you have a login endpoint, you can uncomment this
// router.post('/login', authUser);

module.exports = router;
