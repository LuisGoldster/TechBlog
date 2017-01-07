const express = require('express');
const path = require('path');
const router = express.Router();
const ROOT = path.join(__dirname, '../../dist');

// All other routes to index.html for Single page application 
router.post('/login', (req, res) => {
  res.json({
    token: '123456'
  });
});

module.exports = router;