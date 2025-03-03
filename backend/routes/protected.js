const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/profile', auth, (req, res) => {
  res.json({ message: 'This is protected data, you are authenticated!' });
});

module.exports = router;
