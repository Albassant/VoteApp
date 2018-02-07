const Poll = require('../models/poll.js');

exports.listPolls = function(id) {
  return Poll.find({ user: id })
}

exports.findPoll = function(id) {
  return Poll.findById(id);
}

exports.findAndUpdatePoll = function(id, index, user) {
  var inc = {};
  inc[ 'questions.' + index + ".rating" ] = 1;
  return Poll.findByIdAndUpdate(id, { $inc: inc, $push: { votedusers: {username: user}} });  
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

exports.deletePoll = function(id) {
  return Poll.findById(id).remove();
}