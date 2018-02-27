const express = require('express');
const router = express.Router();
const db = require('../utils/databaseUtils.js');

router.get('/polls', (req, res) => {
  db.listAllPolls()
    .then(data => { res.status(200).send(data)
    })
    .catch(err => {
      console.error(err);
      res.end();
    });
});

module.exports = router;
