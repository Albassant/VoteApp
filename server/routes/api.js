const express = require('express');
const router = express.Router();
const db = require('../utils/databaseUtils.js');

router.get('/polls', (req, res) => {
  db.listPolls(req.user.id)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.end();
    });
});

router.post('/polls', (req, res) => {
  db.createPoll(req.user.id, req.body)
    .then(data => {
      res.status(200).json({
        success: true,
        message: 'Congratulations! Your poll has been saved successfully. Here\'s a link to your poll',
        url: `https://trite-engineer.glitch.me/${data.id}`
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    })
});

// validator.isMongoId(str) - for deletion

module.exports = router;
