const Poll = require('../models/poll.js');

exports.listPolls= function(id) {
  return Poll.find({ user: id })
}

exports.createPoll = function(id, data) {
  const poll = new Poll({
      name: data.name,
      user: id,
      questions: data.options.map((item) => { return { question: item, rating: 0}}),
      votedusers: [],
      createdAt: new Date()
    });

    return poll.save();
}

exports.deleteNote = function(id) {
    return Poll.findById(id).remove();
}