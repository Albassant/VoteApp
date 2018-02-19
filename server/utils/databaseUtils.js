const Poll = require('../models/poll.js');

exports.listPolls = function(userId) {
  return Poll.find({ user: userId })
}

exports.findPoll = function(id) {
  console.log(id);
  return Poll.findById(id);
}

exports.findAndUpdatePoll = function(id, index, user) {
  var inc = {};
  inc[ 'questions.' + index + ".rating" ] = 1;
  return Poll.findByIdAndUpdate(id, { $inc: inc, $push: { votedusers: user} });  
}

exports.createPoll = function(userId, data) {
  const poll = new Poll({
    name: data.name,
    user: userId,
    questions: data.options.map((item) => { return { question: item, rating: 0}}),
    votedusers: [],
    createdAt: new Date()
  });

  return poll.save();
}

exports.deletePoll = function(id) {
  return Poll.findById(id).remove();
}