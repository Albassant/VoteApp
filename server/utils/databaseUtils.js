const Poll = require('../models/poll.js');

exports.listPolls = function(userId) {
  return Poll.find({ user: userId })
}

exports.findPoll = function(pollId) {
  return Poll.findById(pollId).select('_id name user questions votedusers createdAt');
}

exports.findAndUpdatePoll = function(id, index, user) {
  const conditions = {
    _id: id,
    'votedusers': { $ne: user }
  };

  const inc = {};
  inc[ 'questions.' + index + ".rating" ] = 1;

  const update = {
    $inc: inc,
    $push: { votedusers: user }
  };

  return Poll.findOneAndUpdate(conditions, update);
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