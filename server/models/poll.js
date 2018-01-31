const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PollSchema = new Schema({ 
  name: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  questions: [{ question: String, rating: Number, _id: false }],
  votedusers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdAt : { type: Date }
});

module.exports = mongoose.model('Poll', PollSchema);

