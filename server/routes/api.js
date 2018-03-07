const express = require('express');
const router = express.Router();
const db = require('../utils/databaseUtils.js');

router.get('/polls', (req, res) => {
  console.log('hello');
  db.listPolls(req.user.id)
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      console.error(err);
      res.status(400).json({
        message: 'Could not load the polls'
      });
    });
});

router.get('/polls/:id', (req, res) => {
  const userId = req.user.id;
  db.findPoll(req.params.id, userId)
    .then(data => {
      //TODO do something with this weird code
      data = data.toObject();
      data.owner = data.user == userId;
      data.voted = Boolean(data.votedusers.find(el => el == userId));
      data.url = `https://voteapp-albassant.c9users.io/polls/${data._id}`;
      delete data.votedusers;
      delete data.user;
      //endoftodo
     // console.log('findPoll', data);
      res.status(200).send(data)
    })
    .catch(err => {
      console.error(err);
      res.status(400).json({
        message: 'Could not load the poll'
      });
    });
});

router.put('/polls/:id', (req, res) => {
  var pollId = req.params.id;
  var index = req.body.index;
  var userId = req.user.id;

  console.log(index);
  db.findAndUpdatePoll(pollId, index, userId)
    .then(data => {
      if (data === null) {
        const error = new Error('Unfortunately, you can vote only once!');
        error.name = 'MultipleVotingError';
        throw error;
      }
      return res.status(200).send(data)
    })
    .catch(err => {
      console.error(err);
      const message = err.name === 'MultipleVotingError' ? err.message : 'Could not process the form';
      res.status(400).json({
        message: message
      });
    });
});

router.post('/polls', (req, res) => {
  const userId = req.user.id;
  db.createPoll(req.user.id, req.body)
    .then(data => {
      //TODO do something with this weird code
      data = data.toObject();
      data.owner = data.user == userId;
      data.voted = Boolean(data.votedusers.find(el => el == userId));
      data.url = `https://voteapp-albassant.c9users.io/polls/${data._id}`;
      delete data.votedusers;
      delete data.user;
      res.status(200).send(data)

    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        message: 'Could not process the form.'
      });
    })
});

router.delete('/polls/:id', (req, res) => {
  db.deletePoll(req.params.id)
    .then(data => res.status(200).send(data))
    .catch(err => {
        console.log(err);
        res.status(400).json({
        message: 'Could not delete the poll.'
      });
    });
});


module.exports = router;
