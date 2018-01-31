const express = require('express');
const router = express.Router();
const Poll = require('../models/poll.js');

router.get('/test', (req, res) => {  
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

router.get('/polls', (req, res) => {
  var polls = [];
  
  Poll.find({user: req.user.id}, (err, polls) => {
    if (polls) {
      console.log(polls);
      res.status(200).json({ data: polls});
    }
    else {
      console.error(err);
      res.end();
    }
  });
});

router.post('/polls', (req, res) => {
  var newPoll = Poll({
      name: req.query.pollname,
      user: req.user,
      questions: req.query.options.map((item) => { return { question: item, rating: 0}}),
      votedusers: []
    });
  
  newPoll.url = "https://trite-engineer.glitch.me/" + newPoll.user + "/" + encodeURI(newPoll.name);
  
  newPoll.save(function(err) { 
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        // the 11000 Mongo code is for a duplication error
        // the 409 HTTP status code is for conflict error
        return res.status(409).json({
          success: false,
          message: 'You have already a poll with the same name.'
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }
    
    return res.status(200).json({
      success: true,
      message: 'Congratulations! Your poll has been saved successfully. Here\'s a link to your poll',
      url: newPoll.url
    });
  });
  
});

module.exports = router;
