const express = require('express');
const router = express.Router();

// All other routes to index.html for Single page application 
router.post('/login', (req, res) => {
  res.json({
    token: '123456'
  });
});

module.exports = router;