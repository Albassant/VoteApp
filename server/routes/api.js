const express = require('express');
const router = express.Router();
const validator = require('validator');
const db = require('../utils/databaseUtils.js');

router.get('/polls', (req, res) => {
  db.listPolls(req.user.id)
    .then(data => { res.status(200).send(data)
      console.log('listPolls', data);
    })
    .catch(err => {
      console.error(err);
      res.end();
    });
});

router.get('/polls/:id', (req, res) => {
  console.log('hello');
  const userId = req.user.id;
  db.findPoll(req.params.id, userId)
    .then(data => {
      //TODO do something with this weird code
      data = data.toObject();
      data.owner = data.user == userId;
      data.voted = Boolean(data.votedusers.find(el => el == userId));
      delete data.votedusers;
      delete data.user;
      //endoftodo
      console.log('findPoll', data);
      res.status(200).send(data)
    })
    .catch(err => {
      console.error(err);
      res.end();
    });
});

router.put('/polls/:id', (req, res) => {
  var pollId = req.params.id;
  var index = req.body.index;
  var userId = req.user.id;

  console.log(index);
  db.findAndUpdatePoll(pollId, index, userId)
    .then(data => {res.status(200).send(data)
      console.log('findAndUpdatePoll', data);
    })
    .catch(err => {
      console.error(err);
      res.end();
    });
});

router.post('/polls', (req, res) => {
  db.createPoll(req.user.id, req.body)
    .then(data =>
      res.status(200).json({
        success: true,
        message: 'Congratulations! Your poll has been saved successfully. Here\'s a link to your poll',
        url: `https://voteapp-albassant.c9users.io/${data.id}`
      })
    )
    .catch(err => {
      console.log(err);
      res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    })
});

router.delete('/polls/:id', (req, res) => {
  db.deletePoll(req.params.id)
    .then(data => {res.status(200).send(data)
      console.log('deletePoll', data);
    })
    .catch(err => {
      console.log(err);
      res.end();
  });
});


module.exports = router;
