const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PollSchema = new Schema({
  name: String,
  user: { type: Schema.Types.ObjectId, ref: 'User', select: false },
  questions: [{ question: String, rating: Number, _id: false }],
  votedusers: {
    type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    select: false
  },
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Poll', PollSchema);

