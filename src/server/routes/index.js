const express = require('express');
const path = require('path');
const router = express.Router();
const ROOT = path.join(__dirname, '../../../dist');

// All other routes to index.html for Single page application 
router.get('*', (req, res) => {
  res.sendFile(path.join(ROOT, 'index.html'));
});

module.exports = router;